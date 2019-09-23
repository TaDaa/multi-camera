
import {html} from './multicamera.html';
import {css} from './multicamera.css';

interface MultiCameraConfig {
}

export interface MultiCameraImg {
    data: string;
    width:number;
    height: number;
}

export interface UsePhotoEvent extends CustomEvent {
    detail: MultiCameraImg[];
};

export interface CancelEvent extends CustomEvent {
    detail: MultiCameraImg[];
}
export interface TookPhotoEvent extends CustomEvent {
    detail: MultiCameraImg;
}

export interface MultiCameraEvents {
    usephotos:  UsePhotoEvent;
    cancel: CancelEvent;
    tookphoto:  TookPhotoEvent;
}

export interface MultiCameraImage extends MultiCameraImg {
    wrapper?: HTMLElement;
    element?: HTMLElement;
    removed?: boolean;
    x?: number;
}

export type MultiCameraElements =
        'overlay' |
        'zoomPlus' |
        'zoomMinus' |
        'zoomThumb' |
        'zoomBG' |
        'zoomBGWrapper' |
        'reverseCamera' |
        'cancel' |
        'takePhoto' |
        'usePhotos' |
        'bottomToolbar' |
        'topIndicatorText' |
        'bottomIndicatorText' |
        'leftIndicatorText' |
        'rightIndicatorText' |
        'photoOverlay' |
        'photoOverlayBackground' |
        'back';

export class MultiCamera {
    _element: HTMLElement;
    _operations: Promise<any>[];
    _elements: {[key in MultiCameraElements]: HTMLElement};
    _emToPx: number;
    _show: MultiCameraConfig | boolean;
    _ready: boolean;
    _takingPicture: boolean;
    _showingPhotoOverlay: MultiCameraImage | false;
    _images: MultiCameraImage[] = [];
    _activePhoto: MultiCameraImage;
    _frontCamera: boolean;
    _maxZoom: number = 5;
    _minZoom: number = 1;
    _zoom: number = 1;
    _touchState: {
        type: MultiCamera['touchTypes'][keyof MultiCamera['touchTypes']];
        zoom?: number;
        xStart?: number;
        yStart?: number;
        target?: HTMLElement;
        startEvent?: Event;
        plusTimer?: any;
        minusTimer?: any;
        starts?: {length: number, [key: number]: {x: number; y:number;}};
        order?: number[]
        not_click?: boolean;
    };
    _events: {
        [key in keyof MultiCameraEvents]: ((event: MultiCameraEvents[key]) => (void | null | undefined | boolean))[]
    } = {
        usephotos: [],
        cancel: [],
        tookphoto: []
    };
    
    constructor () {
        MultiCamera._camera = this;

        const element = this._element = (MultiCamera._template as HTMLElement).cloneNode(true) as HTMLElement;
        const {overlay, takePhoto, back, cancel, usePhotos} = this._elements = {
            overlay: element,
            zoomPlus: element.querySelector('.camera-zoom-plus'),
            zoomMinus: element.querySelector('.camera-zoom-minus'),
            zoomThumb: element.querySelector('.camera-zoom-thumb'),
            zoomBG: element.querySelector('.camera-zoom-background'),
            zoomBGWrapper: element.querySelector('.camera-zoom-background-wrapper'),
            reverseCamera: element.querySelector('.camera-reverse'),
            cancel: element.querySelector('.camera-cancel'),
            takePhoto: element.querySelector('.camera-take-photo'),
            usePhotos: element.querySelector('.camera-use-photos'),
            bottomToolbar: element.querySelector('.camera-bottom-toolbar'),
            topIndicatorText: element.querySelector('.camera-indicator.top .camera-indicator-text'),
            bottomIndicatorText: element.querySelector('.camera-indicator.bottom .camera-indicator-text'),
            leftIndicatorText: element.querySelector('.camera-indicator.left .camera-indicator-text'),
            rightIndicatorText: element.querySelector('.camera-indicator.right .camera-indicator-text'),
            photoOverlay: element.querySelector('.camera-photo-overlay'),
            photoOverlayBackground: element.querySelector('.camera-photo-overlay-background'),
            back: element.querySelector('.camera-photo-overlay-text.back')
        },
        emTest = document.createElement('div');
        emTest.style.width = emTest.style.height = '1em';
        emTest.style.position = 'absolute';
        emTest.style.opacity = '0';
        this._element.appendChild(emTest);
        this._emToPx = emTest.clientWidth;
        this._element.removeChild(emTest);
        console.error(element);
        console.error(overlay);

        overlay.style.display = 'none';

        this._reset();
        this._operations = [];
        this._onDeviceReady = this._onDeviceReady.bind(this);
        this._onOrientationChange = this._onOrientationChange.bind(this);

        cancel.addEventListener('click', () => this._onCancelClick(), true);
        usePhotos.addEventListener('click', () => this._onUsePhotosClick(), true);
        overlay.addEventListener('touchend', (event: MouseEvent & TouchEvent) => this._onOverlayTouchEnd(event), true);
        back.addEventListener('click', () => this._onPhotoOverlayBackClick(), true);
        overlay.addEventListener('touchmove', (event: MouseEvent & TouchEvent) => this._onOverlayTouchMove(event), true);
        overlay.addEventListener('touchstart', (event: MouseEvent & TouchEvent) => this._onOverlayTouchStart(event), true);
        overlay.addEventListener('touchcancel', (event: MouseEvent & TouchEvent) => this._onOverlayTouchCancel(event), true);
        takePhoto.addEventListener('transitionend', () => this._onTakePhotoTransitionEnd());

        //TODO consider add in show remove eventlistener in hide
        window.addEventListener('resize', this._onOrientationChange);

        if (typeof window['device'] === 'undefined' || typeof window['device'].cordova === 'undefined') {
            document.addEventListener('deviceready', this._onDeviceReady);
        } else {
            this._onDeviceReady();
        }
    }

    addEventListener<A extends keyof MultiCameraEvents = keyof MultiCameraEvents> (name: A, fn: ((event: MultiCameraEvents[A]) => (void | null | undefined | boolean))) {
        (this._events[name] as any).push(fn as (event: Event) => any);
    }

    removeEventListener<A extends keyof MultiCameraEvents = keyof MultiCameraEvents> (name: A, fn: ((event: MultiCameraEvents[A]) => (void | null | undefined | boolean))) {
        const events = this._events[name],
            index = (events as any).indexOf(fn as (event: Event) => any);
        if (index !== -1) {
            events.splice(index, 1);
        }
    }

    dispatchEvent<A extends keyof MultiCameraEvents>(event: MultiCameraEvents[A]) {
        const events = this._events[event.type];
        for (var i=0,ln=events.length;i<ln;i++) {
            events[i](event);
        }
    }

    getScreenDimensions () {
        var {height, width} = window.screen;

        if (typeof orientation === 'number') {
            if (Math.abs(parseInt(`${window.orientation}`) / 90) === 1) {
                height = window.screen.width;
                width = window.screen.height;
            }
        }
        return {width, height};
    }

    show (config: MultiCameraConfig) {
        const preview = window['CameraPreview'],
            {overlay} = this._elements,
            {width, height} = this.getScreenDimensions();

        //TODO check this
        overlay.style.display = 'none';

        if (this._show === true) {
            return;
        }
        if (!this._ready || !preview) {
            this._show = config || {};
            return;
        }

        this._show = true;

        preview.stopCamera(
            () => {
                console.error('CameraPreview.stopCamera', 'SUCCESS');
                startCamera();
            }, 
            (err: Error) => {
                console.error('CameraPreview.stopCamera', err);
                startCamera();
            }
        );

        function startCamera () {
            preview.startCamera({
                    x: 0,
                    y: 0,
                    width,
                    height,
                    camera: preview.CAMERA_DIRECTION.BACK,
                    toBack: true,
                    tapPhoto: false,
                    tapFocus: false,
                    previewDrag: false
                }, 
                () => {
                    console.error('CameraPreview.startCamera', 'SUCCESS');
                    overlay.style.display = null;
                    (document.body.parentNode as HTMLElement).style.visibility = "hidden";
                },
                (err: Error) => console.error('CameraPreview.startCamera', err)
            );
        }
        return this;
    }

    hide () {
        const preview = window['CameraPreview'],
            {overlay} = this._elements;
        if (this._ready && this._show) {
            this._show = false;
            window['Promise'].all(this._operations).then(() => {
                preview.stopCamera(
                    () => {
                        overlay.style.display = 'none';
                        this._elements.photoOverlay.style.display = 'none';
                        (document.body.parentNode as HTMLElement).style.visibility = 'visible';
                        console.error('CameraPreview.stopCamera', 'SUCCESS');
                    },
                    (err: Error) => console.error('CameraPreview.stopCamera', err)
                )
            });
        }
        return this;
    }

    takePhoto () {
        if (!this._ready) {
            return;
        }
        const tookPicture = document.createElement('div'),
            {overlay} = this._elements,
            {width, height} = this.getScreenDimensions();

        tookPicture.className = 'camera-took-picture';

        if (!this._takingPicture) {
            this._takingPicture = true;
            overlay.classList.add('taking-picture');
        }

        tookPicture.addEventListener('transitionend', () => {
            this._takingPicture = false;
            if (tookPicture.parentNode) {
                tookPicture.parentNode.removeChild(tookPicture);
            }
        });

        setTimeout(() => tookPicture.style.opacity = '0');
        overlay.appendChild(tookPicture);

        const promise = new window['Promise']((resolve) => {
            var resolved = false;
            const preview = window['CameraPreview'];

            preview.takePicture({width, height}, (base64: string[]) => {
                const image:  MultiCameraImage = {
                    data: `data:image/jpg;base64,${base64[0]}`,
                    width,
                    height
                },
                photoWrapper = MultiCamera._photoWrapperTemplate.cloneNode(true) as HTMLElement,
                photoElement = photoWrapper.querySelector('.camera-photo') as HTMLElement,
                removeElement = photoWrapper.querySelector('.camera-photo-remove') as HTMLElement,
                {bottomToolbar} = this._elements,
                tookPhotoEvent = new CustomEvent('tookphoto', {detail: {data: image.data, width:image.width, height:image.height}});

                photoElement.style.backgroundImage = `url("${image.data}")`;
                bottomToolbar.insertBefore(photoWrapper, bottomToolbar.childNodes[0]);

                setTimeout(() => {
                    photoElement.style.transform = 'scale(1)translate(0px, 0px)';
                    removeElement.style.transform = 'translateX(0px)';
                });

                removeElement.addEventListener('click', () => {
                    this._removeImage(image);
                }, true);
                photoWrapper.addEventListener('click', ($event: MouseEvent) => {
                    this._chooseActivePhoto(image, $event);
                }, true);


                this.dispatchEvent(tookPhotoEvent);

                image.wrapper = photoWrapper;
                image.element = photoElement;
                this._images.unshift(image);
                this._doLayout();
                resolved = true;
                resolve();
            }, () => {
                resolved = true;
                resolve();
            });
            setTimeout(() => {
                if (!resolved) {
                    resolve();
                }
            }, 3000)
        });
        this._operations.push(promise);
        promise.then(() => {
            const index = this._operations.indexOf(promise);
            if (index !== -1) {
                this._operations.splice(index, 1);
            }
        });
    }

    _removeImage (image: MultiCameraImage) {
        if (!image) {
            return;
        }
        const index = this._images.indexOf(image),
            {wrapper} = image;

        if (index !== -1) {
            this._images.splice(index, 1);
        }
        if (this._images.length === 0 && this._showingPhotoOverlay) {
            this._hidePhotoOverlay();
        }
        image.removed = true;
        wrapper.style.transform = `${wrapper.style.transform.split('scale(1)')[0]}scale(0)`;
        wrapper.style.opacity = '0';
        wrapper.addEventListener('transitionend', () => {
            if (wrapper.parentNode) {
                this._elements.bottomToolbar.removeChild(wrapper)
            }
        });
        this._doLayout();

        if (image === this._activePhoto) {
            const next = this._images[index] || this._images[this._images.length - 1];
            if (next) {
                this._chooseActivePhoto(next, null);
            }
        }
    }

    _chooseActivePhoto (image: MultiCameraImage, event: Event) {
        if (event && event.target['classList'] && event.target['classList'].contains('camera-photo-remove')) {
            return;
        }
        if (this._activePhoto) {
            this._activePhoto.wrapper.classList.remove('active')
        }
        this._activePhoto = image;
        this._showPhotoOverlay();
        image.wrapper.classList.add('active');
    }

    _hidePhotoOverlay () {
        const image = this._activePhoto,
            {wrapper: original} = image || {wrapper: undefined},
            wrapper = this._showingPhotoOverlay !== false ? this._showingPhotoOverlay.wrapper : this._showingPhotoOverlay,
            rect = original && original.getBoundingClientRect() as ClientRect & {x: number},
            elements = this._elements;

        if (!wrapper) {
            return;
        }

        original.classList.remove('active');
        this._showingPhotoOverlay = false;

        if (wrapper.parentNode === elements.photoOverlay) {
            const photo = wrapper.querySelector('.camera-photo') as HTMLElement;
            elements.back.style.opacity = '0';
            elements.photoOverlayBackground.style.opacity = '0';
            wrapper.style.height = null;
            wrapper.style.width = null;
            wrapper.style.left = `${rect.x / this._emToPx}em`;
            wrapper.style.bottom = '0em';
            photo.style.opacity = '0';
            if (image.removed) {
                wrapper.style.transform = 'translate(0em,0em)scale(0)';
            }
            wrapper.addEventListener('transitionend', () => {
                if (wrapper.parentNode) {
                    if (!this._showingPhotoOverlay) {
                        elements.photoOverlay.style.display = 'none';
                    }
                   elements.photoOverlay.removeChild(wrapper);
                }
            });
        }
    }

    _showPhotoOverlay () {
        const image =  this._activePhoto,
            {width, height, wrapper: original, data} = image,
            rect = original.getBoundingClientRect() as ClientRect & {x: number},
            elements = this._elements;

        if (this._showingPhotoOverlay) {
            this._hidePhotoOverlay()
        }

        const {wrapper} = this._showingPhotoOverlay = {data, width, height, wrapper: original.cloneNode(true) as HTMLElement},
            photo = wrapper.querySelector('.camera-photo') as HTMLElement,
            remove = wrapper.querySelector('.camera-photo-remove')

        wrapper.style.boxShadow = 'none';
        elements.photoOverlay.style.display = 'block';

        wrapper.style.transform = 'translate(0em,0em)scale(1)'
        wrapper.style.left = `${rect.x/this._emToPx}em`

        elements.photoOverlay.appendChild(wrapper);
        wrapper.removeChild(remove)

        photo.style.opacity = '0';

        setTimeout(() => {
            elements.back.style.opacity = '1';
            elements.photoOverlayBackground.style.opacity = '1';
            photo.style.opacity = '1';
            this._centerPhotoOverlay();
        });
    }

    _centerPhotoOverlay () {
        const dimensions = this.getScreenDimensions(),
            cloneImage = this._showingPhotoOverlay;
        var {width, height, wrapper} = cloneImage || {width: undefined, height: undefined, wrapper: undefined};
        var scale: number; 

        if (width > dimensions.width) {
            scale = dimensions.width / width;
        }
        if (height > dimensions.height) {
            if (!scale || ((dimensions.height / height) > scale)) {
                scale = dimensions.height / height;
            }
        }
        if (scale === undefined) {
            scale = 1;
        }

        const cx = (dimensions.width - width * scale) / 2 / this._emToPx,
            cy = (dimensions.height - height * scale) / 2 / this._emToPx;

        wrapper.style.height = `${height*scale}px`;
        wrapper.style.width = `${width*scale}px`;
        wrapper.style.left = `${cx}em`;
        wrapper.style.bottom = `${cy}em`;
    }

    focus ({x, y}: {x:number, y:number}) {
        const preview = window['CameraPreview']
        if (this._ready) {
            console.error(`MultiCamera.focus(${[x,y]})`);
            preview.tapToFocus(x, y, () => {}, (err: Error) => console.error('CameraPreview.tapToFocus', err));
        }
        return this;
    }

    switchCamera () {
        const preview = window['CameraPreview'];
        if (this._ready && preview) {
            window['Promise'].all(this._operations).then(() => {
                const promise = new window['Promise']((resolve) => {
                    var resolved = false;
                    preview.switchCamera(() => {
                        this._frontCamera = !this._frontCamera
                        this.zoom(1);
                        resolved = true;
                        resolve();
                    }, (err: Error) => {
                        console.error('CameraPreview.switchCamera', err)
                        resolved = true;
                        resolve();
                    });
                    setTimeout(() => {
                        if (!resolved) {
                            resolve();
                        }
                    }, 3000)
                });
                this._operations.push(promise);
                promise.then(() => {
                    const index = this._operations.indexOf(promise);
                    if (index !== -1) {
                        this._operations.splice(index, 1);
                    }
                });
            });
        }
        return this;
    }

    zoom (zoom: number) {
        const preview = window['CameraPreview'];

        if (!this._ready || !preview) {
            return;
        }

        const {_maxZoom, _minZoom} = this,
            {zoomBG, zoomBGWrapper, zoomThumb} = this._elements,
            backgroundRect = zoomBG.getBoundingClientRect(),
            backgroundHeight = backgroundRect.height;

        if (zoom  < _minZoom) {
            zoom = _minZoom;
        } 

        if (zoom > _maxZoom) {
            zoom = _maxZoom;
        }

        this._zoom = zoom;

        const div = ((zoom - 1) / (this._maxZoom - 1)),
            top = div * backgroundHeight;
        zoomThumb.style.transform = `translateY(${-top}px)translate(-50%, 50%)`;
        (zoomBGWrapper.style as any).webkitMaskPosition=`50% ${(div*100)}%`;

        preview.setZoom(zoom, () => {}, (err: Error) => console.error('CameraPreview.setZoom', err));
        return this;
    }

    _doLayout () {
        const images = this._images,
            width = 3.5,
            ln = images.length,
            usePhotos = this._elements.usePhotos;
        
        var image: MultiCameraImage,
        i = 0;

        for (;i<ln;i++) {
            image = images[i];
            image.x = i * width;
            image.wrapper.style.transform = `translate(${(i*width)}em, 0em)scale(1)`;
        }

        if (ln) {
            if (!usePhotos.classList.contains('has-photos')) {
               usePhotos.classList.add('has-photos');
            }
        } else if (usePhotos.classList.contains('has-photos')) {
           usePhotos.classList.remove('has-photos');
        }

        return this;
    }

    _reset () {
        const {bottomToolbar, zoomThumb, zoomBGWrapper} = this._elements;

        bottomToolbar.innerHTML = '';
        zoomThumb.style.transform = `translateY(0px)translate(-50%, 50%)`;
        (zoomBGWrapper.style as any).webkitMaskPosition=`50% 0%`;

        this._images = [];
        this._touchState = {type: MultiCamera.touchTypes.NONE};
        this._frontCamera = false;
        this._zoom = 1;
        this._minZoom = 1;
        this._maxZoom = 5;
    }

    _onDeviceReady () {
        this._ready = true;
        if (this._show) {
            const show = this._show;
            this._show = false;
            this.show(show);
        }

        this.zoom(this._zoom);
        this._onOrientationChange();
        document.removeEventListener('deviceready', this._onDeviceReady);
    }

    _onOverlayTouchStart (event: TouchEvent & {pageX: number, pageY: number}) {
        const {zoomPlus, zoomMinus, reverseCamera, overlay} = this._elements,
            classList = event.target['classList'] || {contains: () => false},
            num_touches = event.touches.length;
        var touchState = this._touchState,
            plusTimer: () => any,
            minusTimer: () => any;

        if (classList.contains('camera-zoom-part') && num_touches === 1) {
            touchState = this._touchState = {
                ...touchState,
                type: MultiCamera.touchTypes.DRAG_ZOOM_THUMB,
                zoom: this._zoom,
                xStart: event.pageX,
                yStart: event.pageY,
                target: event.target as HTMLElement,
                startEvent: event
            };
        } else if (event.target === zoomPlus && num_touches === 1) {
            this._onZoomPlusMouseDown();
            touchState = this._touchState = {
                ...touchState,
                type: MultiCamera.touchTypes.HOLD_ZOOM_PLUS,
                plusTimer: setTimeout(plusTimer = () => {
                    this._onZoomPlusMouseDown();
                    touchState.plusTimer = setTimeout(plusTimer, 100)
                }, 100)
            };
        } else if (event.target === zoomMinus && num_touches === 1) {
            this._onZoomMinusMouseDown();
            touchState = this._touchState = {
                ...touchState,
                type: MultiCamera.touchTypes.HOLD_ZOOM_MINUS,
                minusTimer: setTimeout(minusTimer = () => {
                    this._onZoomMinusMouseDown();
                    touchState.minusTimer = setTimeout(minusTimer, 100)
                }, 100)
            }
        } else if (event.target === reverseCamera && num_touches === 1) {
            this.switchCamera();
        } else if (classList.contains('camera-take-photo-part') && num_touches === 1) {
            this.takePhoto();
        } else if (event.target === overlay) {
            touchState.type = MultiCamera.touchTypes.DRAG_ZOOM_FINGERS;
            var touches = event.changedTouches,
                order: MultiCamera['_touchState']['order'],
                starts: MultiCamera['_touchState']['starts'],
                touch: Touch;
            if (!touchState.starts) {
                touchState.starts = {length: 0};
                touchState.order = [];
                touchState.zoom = this._zoom;
            }
            starts = touchState.starts;
            order = touchState.order;
            for (var i=0,ln=touches.length;i<ln;i++) {
                touch = touches[i];
                if (!starts[touch.identifier]) {
                    starts[touch.identifier] = {x: touch.pageX, y: touch.pageY};
                    starts.length++;
                    order.push(touch.identifier);
                }
            }
            if (starts.length > 1) {
                touchState.not_click = true;
            }
        }
    }

    _onOverlayTouchEnd (event: TouchEvent & MouseEvent) {
        var touchState = this._touchState,
            {type} = touchState;

        if (type === MultiCamera.touchTypes.HOLD_ZOOM_PLUS) {
            clearTimeout(touchState.plusTimer);
            touchState = {type: MultiCamera.touchTypes.NONE};
        } else if (type === MultiCamera.touchTypes.HOLD_ZOOM_MINUS) {
            clearTimeout(touchState.minusTimer);
            touchState = {type: MultiCamera.touchTypes.NONE};
        } else if (type === MultiCamera.touchTypes.DRAG_ZOOM_FINGERS) {
            if (!touchState.not_click) {
                this._onOverlayClick(event as MouseEvent);
            }

            const touches = event.changedTouches,
                starts = touchState.starts,
                order = touchState.order;

            var touch: Touch;
            for (var i=0,ln=touches.length;i<ln;i++) {
                touch = touches[i];
                if (starts[touch.identifier]) {
                    order.splice(order.indexOf(touch.identifier), 1);
                    delete starts[touch.identifier];
                    starts.length--;
                }
            }
            if (starts.length === 0) {
                touchState = {type: MultiCamera.touchTypes.NONE}
            }
        } else {
            touchState = {type: MultiCamera.touchTypes.NONE}
            touchState.type = MultiCamera.touchTypes.NONE;
        }
        this._touchState = touchState;
    }
    _onOverlayTouchCancel (event: TouchEvent & MouseEvent) {
        this._onOverlayTouchEnd(event);
    }
    _onOverlayTouchMove (event: TouchEvent & MouseEvent) {
        var touchState = this._touchState,
            {type} = touchState;

        if (type === MultiCamera.touchTypes.DRAG_ZOOM_THUMB) {
            const pageY = event.pageY - touchState.yStart,
                background = this._elements.zoomBG,
                backgroundRect = background.getBoundingClientRect(),
                backgroundHeight = backgroundRect.height;

            this.zoom(touchState.zoom - pageY / backgroundHeight * 3);

        } else if (type == MultiCamera.touchTypes.DRAG_ZOOM_FINGERS) {
            const {starts, order} = touchState,
                start1 = starts[order[0]],
                start2 = starts[order[1]],
                touches = event.touches,
                dimensions = this.getScreenDimensions(),
                {width, height} = dimensions;
            var current1: Touch,
                current2: Touch,
                startX1: number,
                startX2: number,
                startY1: number,
                startY2: number,
                currentX1: number,
                currentX2: number,
                currentY1: number,
                currentY2: number,
                dist1: number,
                dist2: number,
                touch: Touch,
                diff: number;

            for (var i=0,ln=touches.length;i<ln;i++) {
                touch = touches[i];
                if (touch.identifier === order[0]) {
                    current1 = touch;
                    if (current2) {
                        break;
                    }
                } else if (touch.identifier === order[1]) {
                    current2 = touch;
                    if (current1) {
                        break;
                    }
                }
            }

            if (start1) {
                startX1 = start1.x;
                startY1 = start1.y;
            }
            if (current1) {
                currentX1 = current1.pageX;
                currentY1 = current1.pageY;
            }

            if (!touchState.not_click && start1 && current1) {
                dist1 = Math.sqrt(((startX1 - currentX1) ** 2) + ((startY1 - currentY1) ** 2));
                if (Math.abs(dist1) > 7) {
                    touchState.not_click = true;
                }
            }

            if (start1 && start2 && current1 && current2) {
                startX2 = start2.x;
                startY2 = start2.y;
                currentX2 = current2.pageX;
                currentY2 = current2.pageY;

                dist1 = Math.sqrt(((startX2 - startX1) ** 2) + ((startY2 - startY1) ** 2));
                dist2 = Math.sqrt(((currentX2 - currentX1) ** 2) + ((currentY2 - currentY1) ** 2));

                diff = dist2 - dist1;

                this.zoom(touchState.zoom + diff / Math.min(width,height) * 6);
            }
        }
    }

    _onOrientationChange () {
        const preview = window['CameraPreview'],
            dimensions = this.getScreenDimensions(),
            {width, height} = dimensions;
        if (this.show && this._ready && preview) {
            preview.setPreviewSize(dimensions, () => {
                const doneDimensions = this.getScreenDimensions();
                if (doneDimensions.width !== width || doneDimensions.height !== height) {
                    this._onOrientationChange();
                }
            }, (err: Error) => console.error('CameraPreview.setPreviewSize', err));
        }
        if (this._showingPhotoOverlay) {
            this._centerPhotoOverlay();
        }
    }

    _onOverlayClick ({pageX: x, pageY: y}) {
        this.focus({x, y});
    }

    _onReverseCameraClick () {
        this.switchCamera();
    }

    _onZoomPlusMouseDown () {
        if ((this._zoom + 0.15) <= this._maxZoom) {
            this.zoom(this._zoom + 0.15);
        } else {
            this.zoom(this._maxZoom);
        }
    }

    _onZoomMinusMouseDown () {
        if ((this._zoom - 0.15) >= this._minZoom) {
            this.zoom(this._zoom - 0.15);
        } else {
            this.zoom(this._minZoom);
        }
    }

    _onTakePhotoTransitionEnd () {
        const {overlay} = this._elements;
        if (overlay && overlay.classList && overlay.classList.contains('taking-picture')) {
            overlay.classList.remove('taking-picture');
        }
    }

    _onPhotoOverlayBackClick () {
        this._hidePhotoOverlay();
    }

    _onCancelClick () {
        if (this._show) {
            this.hide();
            window['Promise'].all(this._operations)
                .then(() => {
                const event = new CustomEvent('cancel', {detail: []});
                this.dispatchEvent(event);
                this._reset();
            });
        }
    }

    _onUsePhotosClick () {
        if (this._show) {
            this.hide();
            window['Promise'].all(this._operations).then(() => {
                console.error('donenenene');
                const event = new CustomEvent('usephotos', {detail: this._images.map(d => ({width: d.width, height:d.height, data:d.data}))});
                this.dispatchEvent(event);
                this._reset();
            });
        }
    }


    static _camera: MultiCamera;
    static touchTypes = {
        NONE: 0 as 0,
        DRAG_ZOOM_THUMB: 1 as 1,
        DRAG_ZOOM_FINGERS: 2 as 2,
        HOLD_ZOOM_PLUS: 4 as 4,
        HOLD_ZOOM_MINUS: 8 as 8
    };
    touchTypes = MultiCamera.touchTypes;

    static show (success: (images: MultiCameraImage[]) => any, config: MultiCameraConfig) {
        console.error('staticshow...');
        var camera = this._camera;
        const cancelCB = () => {
            success && success([]);
            camera.removeEventListener('usephotos', usePhotosCB);
            camera.removeEventListener('cancel', cancelCB);
        },
        usePhotosCB = ($event: CustomEvent) => {
            console.error('in use photos');
            success && success($event.detail);
            camera.removeEventListener('usephotos', usePhotosCB);
            camera.removeEventListener('cancel', cancelCB);
        };
        if (arguments.length === 1) {
            if (typeof success === 'object') {
                config = success;
                success = undefined;
            }
        }
        if (!camera) {
            camera = this._camera = new MultiCamera();
            document.body.appendChild(camera._element);
        }
        camera.addEventListener('usephotos', usePhotosCB);
        camera.addEventListener('cancel', cancelCB);
        camera.show(config);
        return this;
    }

    static hide () {
        if (this._camera) {
            this._camera.hide();
        }
        return this;
    }

    static addEventListener () {
        this._camera.addEventListener.apply(this._camera, arguments);
        return this;
    }

    static removeEventListener () {
        this._camera.removeEventListener.apply(this._camera, arguments);
        return this;
    }

    static _photoWrapperTemplate: HTMLElement = (() => {
        const result = document.createElement('div');
        result.innerHTML = `
            <div class="camera-photo-wrapper">
                <div class="camera-photo"></div>
                <div class="camera-photo-remove">-</div>
            </div> `;
        return result.children[0] as HTMLElement;
    })();

    static _template: HTMLElement = (() => {
        const result = document.createElement('div');
        result.innerHTML = `
            ${html}
            <style>
            ${css}
            </style>
        `;
        return result.children[0] as HTMLElement
    })();

}
