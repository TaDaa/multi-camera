interface MultiCameraConfig {
}
export interface MultiCameraImg {
    data: string;
    width: number;
    height: number;
}
export interface UsePhotoEvent extends CustomEvent {
    detail: MultiCameraImg[];
}
export interface CancelEvent extends CustomEvent {
    detail: MultiCameraImg[];
}
export interface TookPhotoEvent extends CustomEvent {
    detail: MultiCameraImg;
}
export interface MultiCameraEvents {
    usephotos: UsePhotoEvent;
    cancel: CancelEvent;
    tookphoto: TookPhotoEvent;
}
export interface MultiCameraImage extends MultiCameraImg {
    wrapper?: HTMLElement;
    element?: HTMLElement;
    removed?: boolean;
    x?: number;
}
export declare type MultiCameraElements = 'overlay' | 'zoomPlus' | 'zoomMinus' | 'zoomThumb' | 'zoomBG' | 'zoomBGWrapper' | 'reverseCamera' | 'cancel' | 'takePhoto' | 'usePhotos' | 'bottomToolbar' | 'topIndicatorText' | 'bottomIndicatorText' | 'leftIndicatorText' | 'rightIndicatorText' | 'photoOverlay' | 'photoOverlayBackground' | 'back';
export declare class MultiCamera {
    _element: HTMLElement;
    _operations: Promise<any>[];
    _elements: {
        [key in MultiCameraElements]: HTMLElement;
    };
    _emToPx: number;
    _show: MultiCameraConfig | boolean;
    _ready: boolean;
    _takingPicture: boolean;
    _showingPhotoOverlay: MultiCameraImage | false;
    _images: MultiCameraImage[];
    _activePhoto: MultiCameraImage;
    _frontCamera: boolean;
    _maxZoom: number;
    _minZoom: number;
    _zoom: number;
    _touchState: {
        type: MultiCamera['touchTypes'][keyof MultiCamera['touchTypes']];
        zoom?: number;
        xStart?: number;
        yStart?: number;
        target?: HTMLElement;
        startEvent?: Event;
        plusTimer?: any;
        minusTimer?: any;
        starts?: {
            length: number;
            [key: number]: {
                x: number;
                y: number;
            };
        };
        order?: number[];
        not_click?: boolean;
    };
    _events: {
        [key in keyof MultiCameraEvents]: ((event: MultiCameraEvents[key]) => (void | null | undefined | boolean))[];
    };
    constructor();
    addEventListener<A extends keyof MultiCameraEvents = keyof MultiCameraEvents>(name: A, fn: ((event: MultiCameraEvents[A]) => (void | null | undefined | boolean))): void;
    removeEventListener<A extends keyof MultiCameraEvents = keyof MultiCameraEvents>(name: A, fn: ((event: MultiCameraEvents[A]) => (void | null | undefined | boolean))): void;
    dispatchEvent<A extends keyof MultiCameraEvents>(event: MultiCameraEvents[A]): void;
    getScreenDimensions(): {
        width: number;
        height: number;
    };
    show(config: MultiCameraConfig): this;
    hide(): this;
    takePhoto(): void;
    _removeImage(image: MultiCameraImage): void;
    _chooseActivePhoto(image: MultiCameraImage, event: Event): void;
    _hidePhotoOverlay(): void;
    _showPhotoOverlay(): void;
    _centerPhotoOverlay(): void;
    focus({ x, y }: {
        x: number;
        y: number;
    }): this;
    switchCamera(): this;
    zoom(zoom: number): this;
    _doLayout(): this;
    _reset(): void;
    _onDeviceReady(): void;
    _onOverlayTouchStart(event: TouchEvent & {
        pageX: number;
        pageY: number;
    }): void;
    _onOverlayTouchEnd(event: TouchEvent & MouseEvent): void;
    _onOverlayTouchCancel(event: TouchEvent & MouseEvent): void;
    _onOverlayTouchMove(event: TouchEvent & MouseEvent): void;
    _onOrientationChange(): void;
    _onOverlayClick({ pageX: x, pageY: y }: {
        pageX: any;
        pageY: any;
    }): void;
    _onReverseCameraClick(): void;
    _onZoomPlusMouseDown(): void;
    _onZoomMinusMouseDown(): void;
    _onTakePhotoTransitionEnd(): void;
    _onPhotoOverlayBackClick(): void;
    _onCancelClick(): void;
    _onUsePhotosClick(): void;
    static _camera: MultiCamera;
    static touchTypes: {
        NONE: 0;
        DRAG_ZOOM_THUMB: 1;
        DRAG_ZOOM_FINGERS: 2;
        HOLD_ZOOM_PLUS: 4;
        HOLD_ZOOM_MINUS: 8;
    };
    touchTypes: {
        NONE: 0;
        DRAG_ZOOM_THUMB: 1;
        DRAG_ZOOM_FINGERS: 2;
        HOLD_ZOOM_PLUS: 4;
        HOLD_ZOOM_MINUS: 8;
    };
    static show(success: (images: MultiCameraImage[]) => any, config: MultiCameraConfig): typeof MultiCamera;
    static hide(): typeof MultiCamera;
    static addEventListener(): typeof MultiCamera;
    static removeEventListener(): typeof MultiCamera;
    static _photoWrapperTemplate: HTMLElement;
    static _template: HTMLElement;
}
export {};
