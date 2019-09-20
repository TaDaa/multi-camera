var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
System.register("multicamera.html", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", "\n<div class=\"camera-overlay\">\n    <div class=\"camera-zoom camera-zoom-part\">\n        <div class=\"camera-zoom-stretch camera-zoom-part\"></div>\n        <div class=\"camera-zoom-plus\">+</div>\n        <div class=\"camera-zoom-background-wrapper camera-zoom-part\">\n            <div class=\"camera-zoom-background camera-zoom-part\"></div>\n        </div>\n        <div class=\"camera-zoom-minus\">-</div>\n        <div class=\"camera-zoom-thumb camera-zoom-part\"></div>\n    </div>\n    <div class=\"camera-reverse-back\"></div>\n    <div class=\"camera-reverse\"></div>\n    <div class=\"camera-take-photo-border camera-take-photo-part\"></div>\n    <div class=\"camera-take-photo camera-take-photo-part\"></div>\n        <a class=\"camera-cancel camera-text-option\" href=\"javascript:void(0);\" >Cancel</a>\n        <a class=\"camera-use-photos camera-text-option\" href=\"javascript:void(0);\">Use Photos</a>\n    <div class=\"camera-indicator top\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator bottom\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator right\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\">Photos</span>\n    </div>\n    <div class=\"camera-indicator left\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-photo-overlay\">\n        <div class=\"camera-photo-overlay-background\"></div>\n        <a href=\"javascript:void(0)\" class=\"camera-photo-overlay-text back\">Back To Camera</a>\n    </div>\n    <div class=\"camera-bottom-toolbar\" >\n    </div>\n</div>\n");
        }
    };
});
System.register("multicamera.css", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("default", "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px blue;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse-back {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse_back.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        //top: 0;\n        //z-index:-1;\n        //pointer-events: none;\n        //height:5em;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n        //background:rgba(0,0,0,0.35);\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px rgba(100,255,100,0.7);\n        padding:0.2em 0.5em;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px red;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        //opacity: 0.25;\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        //border:solid 1px rgba(255,255,255,.5);\n        color: white;\n        //border-radius:50%;\n        //box-shadow: -1px 0px 0px white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        //top:-1em;\n        z-index:1;\n        font-weight:bold;\n        //bottom:100%;\n        //left:50%;\n        width:100%;\n        //top:0;\n        //padding: 0.05em 0 0.05em;\n        height: auto;\n        //padding: 0.15em 0;\n        //bottom:100%;\n        top: 0.05em;\n        //box-shadow: 0px 0px 0px 1px rgba(255,255,255,.5);\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n");
        }
    };
});
System.register("multicamera", ["multicamera.html", "multicamera.css"], function (exports_3, context_3) {
    "use strict";
    var html, css, MultiCamera;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (html_1) {
                html = html_1;
            },
            function (css_1) {
                css = css_1;
            }
        ],
        execute: function () {
            ;
            MultiCamera = /** @class */ (function () {
                function MultiCamera() {
                    var _this = this;
                    this._images = [];
                    this._maxZoom = 5;
                    this._minZoom = 1;
                    this._zoom = 1;
                    this._events = {
                        usephotos: [],
                        cancel: [],
                        tookphoto: []
                    };
                    this.touchTypes = MultiCamera.touchTypes;
                    MultiCamera._camera = this;
                    var element = this._element = MultiCamera._template.cloneNode(true);
                    var _a = this._elements = {
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
                    }, overlay = _a.overlay, takePhoto = _a.takePhoto, back = _a.back, cancel = _a.cancel, usePhotos = _a.usePhotos, emTest = document.createElement('div');
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
                    cancel.addEventListener('click', function () { return _this._onCancelClick(); }, true);
                    usePhotos.addEventListener('click', function () { return _this._onUsePhotosClick(); }, true);
                    overlay.addEventListener('touchend', function (event) { return _this._onOverlayTouchEnd(event); }, true);
                    back.addEventListener('click', function () { return _this._onPhotoOverlayBackClick(); }, true);
                    overlay.addEventListener('touchmove', function (event) { return _this._onOverlayTouchMove(event); }, true);
                    overlay.addEventListener('touchstart', function (event) { return _this._onOverlayTouchStart(event); }, true);
                    overlay.addEventListener('touchcancel', function (event) { return _this._onOverlayTouchCancel(event); }, true);
                    takePhoto.addEventListener('transitionend', function () { return _this._onTakePhotoTransitionEnd(); });
                    //TODO consider add in show remove eventlistener in hide
                    window.addEventListener('resize', this._onOrientationChange);
                    if (typeof window['device'] === 'undefined' || typeof window['device'].cordova === 'undefined') {
                        document.addEventListener('deviceready', this._onDeviceReady);
                    }
                    else {
                        this._onDeviceReady();
                    }
                }
                MultiCamera.prototype.addEventListener = function (name, fn) {
                    this._events[name].push(fn);
                };
                MultiCamera.prototype.removeEventListener = function (name, fn) {
                    var events = this._events[name], index = events.indexOf(fn);
                    if (index !== -1) {
                        events.splice(index, 1);
                    }
                };
                MultiCamera.prototype.dispatchEvent = function (event) {
                    var events = this._events[event.type];
                    for (var i = 0, ln = events.length; i < ln; i++) {
                        events[i](event);
                    }
                };
                MultiCamera.prototype.getScreenDimensions = function () {
                    var _a = window.screen, height = _a.height, width = _a.width;
                    if (typeof orientation === 'number') {
                        if (Math.abs(parseInt("" + window.orientation) / 90) === 1) {
                            height = window.screen.width;
                            width = window.screen.height;
                        }
                    }
                    return { width: width, height: height };
                };
                MultiCamera.prototype.show = function (config) {
                    var preview = window['CameraPreview'], overlay = this._elements.overlay, _a = this.getScreenDimensions(), width = _a.width, height = _a.height;
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
                    preview.stopCamera(function () {
                        console.error('CameraPreview.stopCamera', 'SUCCESS');
                        startCamera();
                    }, function (err) {
                        console.error('CameraPreview.stopCamera', err);
                        startCamera();
                    });
                    function startCamera() {
                        preview.startCamera({
                            x: 0,
                            y: 0,
                            width: width,
                            height: height,
                            camera: preview.CAMERA_DIRECTION.BACK,
                            toBack: true,
                            tapPhoto: false,
                            tapFocus: false,
                            previewDrag: false
                        }, function () {
                            console.error('CameraPreview.startCamera', 'SUCCESS');
                            overlay.style.display = null;
                            document.body.parentNode.style.visibility = "hidden";
                        }, function (err) { return console.error('CameraPreview.startCamera', err); });
                    }
                    return this;
                };
                MultiCamera.prototype.hide = function () {
                    var _this = this;
                    var preview = window['CameraPreview'], overlay = this._elements.overlay;
                    if (this._ready && this._show) {
                        this._show = false;
                        window['Promise'].all(this._operations).then(function () {
                            preview.stopCamera(function () {
                                overlay.style.display = 'none';
                                _this._elements.photoOverlay.style.display = 'none';
                                document.body.parentNode.style.visibility = 'visible';
                                console.error('CameraPreview.stopCamera', 'SUCCESS');
                            }, function (err) { return console.error('CameraPreview.stopCamera', err); });
                        });
                    }
                    return this;
                };
                MultiCamera.prototype.takePhoto = function () {
                    var _this = this;
                    if (!this._ready) {
                        return;
                    }
                    var tookPicture = document.createElement('div'), overlay = this._elements.overlay, _a = this.getScreenDimensions(), width = _a.width, height = _a.height;
                    tookPicture.className = 'camera-took-picture';
                    if (!this._takingPicture) {
                        this._takingPicture = true;
                        overlay.classList.add('taking-picture');
                    }
                    tookPicture.addEventListener('transitionend', function () {
                        _this._takingPicture = false;
                        if (tookPicture.parentNode) {
                            tookPicture.parentNode.removeChild(tookPicture);
                        }
                    });
                    setTimeout(function () { return tookPicture.style.opacity = '0'; });
                    overlay.appendChild(tookPicture);
                    var promise = new window['Promise'](function (resolve) {
                        var resolved = false;
                        var preview = window['CameraPreview'];
                        preview.takePicture({ width: width, height: height }, function (base64) {
                            var image = {
                                data: "data:image/jpg;base64," + base64[0],
                                width: width,
                                height: height
                            }, photoWrapper = MultiCamera._photoWrapperTemplate.cloneNode(true), photoElement = photoWrapper.querySelector('.camera-photo'), removeElement = photoWrapper.querySelector('.camera-photo-remove'), bottomToolbar = _this._elements.bottomToolbar, tookPhotoEvent = new CustomEvent('tookphoto', { detail: { data: image.data, width: image.width, height: image.height } });
                            photoElement.style.backgroundImage = "url(\"" + image.data + "\")";
                            bottomToolbar.insertBefore(photoWrapper, bottomToolbar.childNodes[0]);
                            setTimeout(function () {
                                photoElement.style.transform = 'scale(1)translate(0px, 0px)';
                                removeElement.style.transform = 'translateX(0px)';
                            });
                            removeElement.addEventListener('click', function () {
                                _this._removeImage(image);
                            }, true);
                            photoWrapper.addEventListener('click', function ($event) {
                                _this._chooseActivePhoto(image, $event);
                            }, true);
                            _this.dispatchEvent(tookPhotoEvent);
                            image.wrapper = photoWrapper;
                            image.element = photoElement;
                            _this._images.unshift(image);
                            _this._doLayout();
                            resolved = true;
                            resolve();
                        }, function () {
                            resolved = true;
                            resolve();
                        });
                        setTimeout(function () {
                            if (!resolved) {
                                resolve();
                            }
                        }, 3000);
                    });
                    this._operations.push(promise);
                    promise.then(function () {
                        var index = _this._operations.indexOf(promise);
                        if (index !== -1) {
                            _this._operations.splice(index, 1);
                        }
                    });
                };
                MultiCamera.prototype._removeImage = function (image) {
                    var _this = this;
                    if (!image) {
                        return;
                    }
                    var index = this._images.indexOf(image), wrapper = image.wrapper;
                    if (index !== -1) {
                        this._images.splice(index, 1);
                    }
                    if (this._images.length === 0 && this._showingPhotoOverlay) {
                        this._hidePhotoOverlay();
                    }
                    image.removed = true;
                    wrapper.style.transform = wrapper.style.transform.split('scale(1)')[0] + "scale(0)";
                    wrapper.style.opacity = '0';
                    wrapper.addEventListener('transitionend', function () {
                        if (wrapper.parentNode) {
                            _this._elements.bottomToolbar.removeChild(wrapper);
                        }
                    });
                    this._doLayout();
                    if (image === this._activePhoto) {
                        var next = this._images[index] || this._images[this._images.length - 1];
                        if (next) {
                            this._chooseActivePhoto(next, null);
                        }
                    }
                };
                MultiCamera.prototype._chooseActivePhoto = function (image, event) {
                    if (event && event.target['classList'] && event.target['classList'].contains('camera-photo-remove')) {
                        return;
                    }
                    if (this._activePhoto) {
                        this._activePhoto.wrapper.classList.remove('active');
                    }
                    this._activePhoto = image;
                    this._showPhotoOverlay();
                    image.wrapper.classList.add('active');
                };
                MultiCamera.prototype._hidePhotoOverlay = function () {
                    var _this = this;
                    var image = this._activePhoto, original = (image || {}).wrapper, wrapper = this._showingPhotoOverlay !== false ? this._showingPhotoOverlay.wrapper : this._showingPhotoOverlay, rect = original && original.getBoundingClientRect(), elements = this._elements;
                    if (!wrapper) {
                        return;
                    }
                    original.classList.remove('active');
                    this._showingPhotoOverlay = false;
                    if (wrapper.parentNode === elements.photoOverlay) {
                        var photo = wrapper.querySelector('.camera-photo');
                        elements.back.style.opacity = '0';
                        elements.photoOverlayBackground.style.opacity = '0';
                        wrapper.style.height = null;
                        wrapper.style.width = null;
                        wrapper.style.left = rect.x / this._emToPx + "em";
                        wrapper.style.bottom = '0em';
                        photo.style.opacity = '0';
                        if (image.removed) {
                            wrapper.style.transform = 'translate(0em,0em)scale(0)';
                        }
                        wrapper.addEventListener('transitionend', function () {
                            if (wrapper.parentNode) {
                                if (!_this._showingPhotoOverlay) {
                                    elements.photoOverlay.style.display = 'none';
                                }
                                elements.photoOverlay.removeChild(wrapper);
                            }
                        });
                    }
                };
                MultiCamera.prototype._showPhotoOverlay = function () {
                    var _this = this;
                    var image = this._activePhoto, width = image.width, height = image.height, original = image.wrapper, data = image.data, rect = original.getBoundingClientRect(), elements = this._elements;
                    if (this._showingPhotoOverlay) {
                        this._hidePhotoOverlay();
                    }
                    var wrapper = (this._showingPhotoOverlay = { data: data, width: width, height: height, wrapper: original.cloneNode(true) }).wrapper, photo = wrapper.querySelector('.camera-photo'), remove = wrapper.querySelector('.camera-photo-remove');
                    wrapper.style.boxShadow = 'none';
                    elements.photoOverlay.style.display = 'block';
                    wrapper.style.transform = 'translate(0em,0em)scale(1)';
                    wrapper.style.left = rect.x / this._emToPx + "em";
                    elements.photoOverlay.appendChild(wrapper);
                    wrapper.removeChild(remove);
                    photo.style.opacity = '0';
                    setTimeout(function () {
                        elements.back.style.opacity = '1';
                        elements.photoOverlayBackground.style.opacity = '1';
                        photo.style.opacity = '1';
                        _this._centerPhotoOverlay();
                    });
                };
                MultiCamera.prototype._centerPhotoOverlay = function () {
                    var dimensions = this.getScreenDimensions(), cloneImage = this._showingPhotoOverlay, _a = cloneImage || {}, width = _a.width, height = _a.height, wrapper = _a.wrapper;
                    var scale;
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
                    var cx = (dimensions.width - width * scale) / 2 / this._emToPx, cy = (dimensions.height - height * scale) / 2 / this._emToPx;
                    wrapper.style.height = height * scale + "px";
                    wrapper.style.width = width * scale + "px";
                    wrapper.style.left = cx + "em";
                    wrapper.style.bottom = cy + "em";
                };
                MultiCamera.prototype.focus = function (_a) {
                    var x = _a.x, y = _a.y;
                    var preview = window['CameraPreview'];
                    if (this._ready) {
                        console.error("MultiCamera.focus(" + [x, y] + ")");
                        preview.tapToFocus(x, y, function () { }, function (err) { return console.error('CameraPreview.tapToFocus', err); });
                    }
                    return this;
                };
                MultiCamera.prototype.switchCamera = function () {
                    var _this = this;
                    var preview = window['CameraPreview'];
                    if (this._ready && preview) {
                        window['Promise'].all(this._operations).then(function () {
                            var promise = new window['Promise'](function (resolve) {
                                var resolved = false;
                                preview.switchCamera(function () {
                                    _this._frontCamera = !_this._frontCamera;
                                    _this.zoom(1);
                                    resolved = true;
                                    resolve();
                                }, function (err) {
                                    console.error('CameraPreview.switchCamera', err);
                                    resolved = true;
                                    resolve();
                                });
                                setTimeout(function () {
                                    if (!resolved) {
                                        resolve();
                                    }
                                }, 3000);
                            });
                            _this._operations.push(promise);
                            promise.then(function () {
                                var index = _this._operations.indexOf(promise);
                                if (index !== -1) {
                                    _this._operations.splice(index, 1);
                                }
                            });
                        });
                    }
                    return this;
                };
                MultiCamera.prototype.zoom = function (zoom) {
                    var preview = window['CameraPreview'];
                    if (!this._ready || !preview) {
                        return;
                    }
                    var _a = this, _maxZoom = _a._maxZoom, _minZoom = _a._minZoom, _b = this._elements, zoomBG = _b.zoomBG, zoomBGWrapper = _b.zoomBGWrapper, zoomThumb = _b.zoomThumb, backgroundRect = zoomBG.getBoundingClientRect(), backgroundHeight = backgroundRect.height;
                    if (zoom < _minZoom) {
                        zoom = _minZoom;
                    }
                    if (zoom > _maxZoom) {
                        zoom = _maxZoom;
                    }
                    this._zoom = zoom;
                    var div = ((zoom - 1) / (this._maxZoom - 1)), top = div * backgroundHeight;
                    zoomThumb.style.transform = "translateY(" + -top + "px)translate(-50%, 50%)";
                    zoomBGWrapper.style.webkitMaskPosition = "50% " + (div * 100) + "%";
                    preview.setZoom(zoom, function () { }, function (err) { return console.error('CameraPreview.setZoom', err); });
                    return this;
                };
                MultiCamera.prototype._doLayout = function () {
                    var images = this._images, width = 3.5, ln = images.length;
                    var image, i = 0;
                    for (; i < ln; i++) {
                        image = images[i];
                        image.x = i * width;
                        image.wrapper.style.transform = "translate(" + (i * width) + "em, 0em)scale(1)";
                    }
                    return this;
                };
                MultiCamera.prototype._reset = function () {
                    var _a = this._elements, bottomToolbar = _a.bottomToolbar, zoomThumb = _a.zoomThumb, zoomBGWrapper = _a.zoomBGWrapper;
                    bottomToolbar.innerHTML = '';
                    zoomThumb.style.transform = "translateY(0px)translate(-50%, 50%)";
                    zoomBGWrapper.style.webkitMaskPosition = "50% 0%";
                    this._images = [];
                    this._touchState = { type: MultiCamera.touchTypes.NONE };
                    this._frontCamera = false;
                    this._zoom = 1;
                    this._minZoom = 1;
                    this._maxZoom = 5;
                };
                MultiCamera.prototype._onDeviceReady = function () {
                    this._ready = true;
                    if (this._show) {
                        var show = this._show;
                        this._show = false;
                        this.show(show);
                    }
                    this.zoom(this._zoom);
                    this._onOrientationChange();
                    document.removeEventListener('deviceready', this._onDeviceReady);
                };
                MultiCamera.prototype._onOverlayTouchStart = function (event) {
                    var _this = this;
                    var _a = this._elements, zoomPlus = _a.zoomPlus, zoomMinus = _a.zoomMinus, reverseCamera = _a.reverseCamera, overlay = _a.overlay, classList = event.target['classList'] || { contains: function () { return false; } }, num_touches = event.touches.length;
                    var touchState = this._touchState, plusTimer, minusTimer;
                    if (classList.contains('camera-zoom-part') && num_touches === 1) {
                        touchState = this._touchState = __assign(__assign({}, touchState), { type: MultiCamera.touchTypes.DRAG_ZOOM_THUMB, zoom: this._zoom, xStart: event.pageX, yStart: event.pageY, target: event.target, startEvent: event });
                    }
                    else if (event.target === zoomPlus && num_touches === 1) {
                        this._onZoomPlusMouseDown();
                        touchState = this._touchState = __assign(__assign({}, touchState), { type: MultiCamera.touchTypes.HOLD_ZOOM_PLUS, plusTimer: setTimeout(plusTimer = function () {
                                _this._onZoomPlusMouseDown();
                                touchState.plusTimer = setTimeout(plusTimer, 100);
                            }, 100) });
                    }
                    else if (event.target === zoomMinus && num_touches === 1) {
                        this._onZoomMinusMouseDown();
                        touchState = this._touchState = __assign(__assign({}, touchState), { type: MultiCamera.touchTypes.HOLD_ZOOM_MINUS, minusTimer: setTimeout(minusTimer = function () {
                                _this._onZoomMinusMouseDown();
                                touchState.minusTimer = setTimeout(minusTimer, 100);
                            }, 100) });
                    }
                    else if (event.target === reverseCamera && num_touches === 1) {
                        this.switchCamera();
                    }
                    else if (classList.contains('camera-take-photo-part') && num_touches === 1) {
                        this.takePhoto();
                    }
                    else if (event.target === overlay) {
                        touchState.type = MultiCamera.touchTypes.DRAG_ZOOM_FINGERS;
                        var touches = event.changedTouches, order, starts, touch;
                        if (!touchState.starts) {
                            touchState.starts = { length: 0 };
                            touchState.order = [];
                            touchState.zoom = this._zoom;
                        }
                        starts = touchState.starts;
                        order = touchState.order;
                        for (var i = 0, ln = touches.length; i < ln; i++) {
                            touch = touches[i];
                            if (!starts[touch.identifier]) {
                                starts[touch.identifier] = { x: touch.pageX, y: touch.pageY };
                                starts.length++;
                                order.push(touch.identifier);
                            }
                        }
                        if (starts.length > 1) {
                            touchState.not_click = true;
                        }
                    }
                };
                MultiCamera.prototype._onOverlayTouchEnd = function (event) {
                    var touchState = this._touchState, type = touchState.type;
                    if (type === MultiCamera.touchTypes.HOLD_ZOOM_PLUS) {
                        clearTimeout(touchState.plusTimer);
                        touchState = { type: MultiCamera.touchTypes.NONE };
                    }
                    else if (type === MultiCamera.touchTypes.HOLD_ZOOM_MINUS) {
                        clearTimeout(touchState.minusTimer);
                        touchState = { type: MultiCamera.touchTypes.NONE };
                    }
                    else if (type === MultiCamera.touchTypes.DRAG_ZOOM_FINGERS) {
                        if (!touchState.not_click) {
                            this._onOverlayClick(event);
                        }
                        var touches = event.changedTouches, starts = touchState.starts, order = touchState.order;
                        var touch;
                        for (var i = 0, ln = touches.length; i < ln; i++) {
                            touch = touches[i];
                            if (starts[touch.identifier]) {
                                order.splice(order.indexOf(touch.identifier), 1);
                                delete starts[touch.identifier];
                                starts.length--;
                            }
                        }
                        if (starts.length === 0) {
                            touchState = { type: MultiCamera.touchTypes.NONE };
                        }
                    }
                    else {
                        touchState = { type: MultiCamera.touchTypes.NONE };
                        touchState.type = MultiCamera.touchTypes.NONE;
                    }
                    this._touchState = touchState;
                };
                MultiCamera.prototype._onOverlayTouchCancel = function (event) {
                    this._onOverlayTouchEnd(event);
                };
                MultiCamera.prototype._onOverlayTouchMove = function (event) {
                    var touchState = this._touchState, type = touchState.type;
                    if (type === MultiCamera.touchTypes.DRAG_ZOOM_THUMB) {
                        var pageY = event.pageY - touchState.yStart, background = this._elements.zoomBG, backgroundRect = background.getBoundingClientRect(), backgroundHeight = backgroundRect.height;
                        this.zoom(touchState.zoom - pageY / backgroundHeight * 3);
                    }
                    else if (type == MultiCamera.touchTypes.DRAG_ZOOM_FINGERS) {
                        var starts = touchState.starts, order = touchState.order, start1 = starts[order[0]], start2 = starts[order[1]], touches = event.touches, dimensions = this.getScreenDimensions(), width = dimensions.width, height = dimensions.height;
                        var current1, current2, startX1, startX2, startY1, startY2, currentX1, currentX2, currentY1, currentY2, dist1, dist2, touch, diff;
                        for (var i = 0, ln = touches.length; i < ln; i++) {
                            touch = touches[i];
                            if (touch.identifier === order[0]) {
                                current1 = touch;
                                if (current2) {
                                    break;
                                }
                            }
                            else if (touch.identifier === order[1]) {
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
                            dist1 = Math.sqrt((Math.pow((startX1 - currentX1), 2)) + (Math.pow((startY1 - currentY1), 2)));
                            if (Math.abs(dist1) > 7) {
                                touchState.not_click = true;
                            }
                        }
                        if (start1 && start2 && current1 && current2) {
                            startX2 = start2.x;
                            startY2 = start2.y;
                            currentX2 = current2.pageX;
                            currentY2 = current2.pageY;
                            dist1 = Math.sqrt((Math.pow((startX2 - startX1), 2)) + (Math.pow((startY2 - startY1), 2)));
                            dist2 = Math.sqrt((Math.pow((currentX2 - currentX1), 2)) + (Math.pow((currentY2 - currentY1), 2)));
                            diff = dist2 - dist1;
                            this.zoom(touchState.zoom + diff / Math.min(width, height) * 6);
                        }
                    }
                };
                MultiCamera.prototype._onOrientationChange = function () {
                    var _this = this;
                    var preview = window['CameraPreview'], dimensions = this.getScreenDimensions(), width = dimensions.width, height = dimensions.height;
                    if (this.show && this._ready && preview) {
                        preview.setPreviewSize(dimensions, function () {
                            var doneDimensions = _this.getScreenDimensions();
                            if (doneDimensions.width !== width || doneDimensions.height !== height) {
                                _this._onOrientationChange();
                            }
                        }, function (err) { return console.error('CameraPreview.setPreviewSize', err); });
                    }
                    if (this._showingPhotoOverlay) {
                        this._centerPhotoOverlay();
                    }
                };
                MultiCamera.prototype._onOverlayClick = function (_a) {
                    var x = _a.pageX, y = _a.pageY;
                    this.focus({ x: x, y: y });
                };
                MultiCamera.prototype._onReverseCameraClick = function () {
                    this.switchCamera();
                };
                MultiCamera.prototype._onZoomPlusMouseDown = function () {
                    if ((this._zoom + 0.15) <= this._maxZoom) {
                        this.zoom(this._zoom + 0.15);
                    }
                    else {
                        this.zoom(this._maxZoom);
                    }
                };
                MultiCamera.prototype._onZoomMinusMouseDown = function () {
                    if ((this._zoom - 0.15) >= this._minZoom) {
                        this.zoom(this._zoom - 0.15);
                    }
                    else {
                        this.zoom(this._minZoom);
                    }
                };
                MultiCamera.prototype._onTakePhotoTransitionEnd = function () {
                    var overlay = this._elements.overlay;
                    if (overlay && overlay.classList && overlay.classList.contains('taking-picture')) {
                        overlay.classList.remove('taking-picture');
                    }
                };
                MultiCamera.prototype._onPhotoOverlayBackClick = function () {
                    this._hidePhotoOverlay();
                };
                MultiCamera.prototype._onCancelClick = function () {
                    var _this = this;
                    if (this._show) {
                        this.hide();
                        window['Promise'].all(this._operations)
                            .then(function () {
                            var event = new CustomEvent('cancel', { detail: [] });
                            _this.dispatchEvent(event);
                            _this._reset();
                        });
                    }
                };
                MultiCamera.prototype._onUsePhotosClick = function () {
                    var _this = this;
                    if (this._show) {
                        this.hide();
                        window['Promise'].all(this._operations).then(function () {
                            console.error('donenenene');
                            var event = new CustomEvent('usephotos', { detail: _this._images.map(function (d) { return ({ width: d.width, height: d.height, data: d.data }); }) });
                            _this.dispatchEvent(event);
                            _this._reset();
                        });
                    }
                };
                MultiCamera.show = function (success, config) {
                    console.error('staticshow...');
                    var camera = this._camera;
                    var cancelCB = function () {
                        success && success([]);
                        camera.removeEventListener('usephotos', usePhotosCB);
                        camera.removeEventListener('cancel', cancelCB);
                    }, usePhotosCB = function ($event) {
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
                };
                MultiCamera.hide = function () {
                    if (this._camera) {
                        this._camera.hide();
                    }
                    return this;
                };
                MultiCamera.addEventListener = function () {
                    this._camera.addEventListener.apply(this._camera, arguments);
                    return this;
                };
                MultiCamera.removeEventListener = function () {
                    this._camera.removeEventListener.apply(this._camera, arguments);
                    return this;
                };
                MultiCamera.touchTypes = {
                    NONE: 0,
                    DRAG_ZOOM_THUMB: 1,
                    DRAG_ZOOM_FINGERS: 2,
                    HOLD_ZOOM_PLUS: 4,
                    HOLD_ZOOM_MINUS: 8
                };
                MultiCamera._photoWrapperTemplate = (function () {
                    var result = document.createElement('div');
                    result.innerHTML = "\n            <div class=\"camera-photo-wrapper\">\n                <div class=\"camera-photo\"></div>\n                <div class=\"camera-photo-remove\">-</div>\n            </div> ";
                    return result.children[0];
                })();
                MultiCamera._template = (function () {
                    var result = document.createElement('div');
                    result.innerHTML = "\n            " + html + "\n            <style>\n            " + css + "\n            </style>\n        ";
                    return result.children[0];
                })();
                return MultiCamera;
            }());
            exports_3("MultiCamera", MultiCamera);
        }
    };
});
System.register("index", ["multicamera"], function (exports_4, context_4) {
    "use strict";
    var MultiCamera;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (MultiCamera_1) {
                MultiCamera = MultiCamera_1;
            }
        ],
        execute: function () {
            exports_4("MultiCamera", MultiCamera);
        }
    };
});
//# sourceMappingURL=multicamera.js.map