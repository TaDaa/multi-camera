declare module "multicamera.html" {
    export const html = "\n<div class=\"camera-overlay\">\n    <div class=\"camera-zoom camera-zoom-part\">\n        <div class=\"camera-zoom-stretch camera-zoom-part\"></div>\n        <div class=\"camera-zoom-plus\">+</div>\n        <div class=\"camera-zoom-background-wrapper camera-zoom-part\">\n            <div class=\"camera-zoom-background camera-zoom-part\"></div>\n        </div>\n        <div class=\"camera-zoom-minus\">-</div>\n        <div class=\"camera-zoom-thumb camera-zoom-part\"></div>\n    </div>\n    <div class=\"camera-reverse-back\"></div>\n    <div class=\"camera-reverse\"></div>\n    <div class=\"camera-take-photo-border camera-take-photo-part\"></div>\n    <div class=\"camera-take-photo camera-take-photo-part\"></div>\n        <a class=\"camera-cancel camera-text-option\" href=\"javascript:void(0);\" >Cancel</a>\n        <a class=\"camera-use-photos camera-text-option\" href=\"javascript:void(0);\">Use Photos</a>\n    <div class=\"camera-indicator top\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator bottom\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator right\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\">Photos</span>\n    </div>\n    <div class=\"camera-indicator left\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-photo-overlay\">\n        <div class=\"camera-photo-overlay-background\"></div>\n        <a href=\"javascript:void(0)\" class=\"camera-photo-overlay-text back\">Back To Camera</a>\n    </div>\n    <div class=\"camera-bottom-toolbar\" >\n    </div>\n</div>\n";
}
declare module "multicamera.css" {
    export const css = "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px blue;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse-back {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse_back.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        //top: 0;\n        //z-index:-1;\n        //pointer-events: none;\n        //height:5em;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n        //background:rgba(0,0,0,0.35);\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px rgba(100,255,100,0.7);\n        padding:0.2em 0.5em;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px red;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        //opacity: 0.25;\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        //border:solid 1px rgba(255,255,255,.5);\n        color: white;\n        //border-radius:50%;\n        //box-shadow: -1px 0px 0px white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        //top:-1em;\n        z-index:1;\n        font-weight:bold;\n        //bottom:100%;\n        //left:50%;\n        width:100%;\n        //top:0;\n        //padding: 0.05em 0 0.05em;\n        height: auto;\n        //padding: 0.15em 0;\n        //bottom:100%;\n        top: 0.05em;\n        //box-shadow: 0px 0px 0px 1px rgba(255,255,255,.5);\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";
}
declare module "multicamera" {
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
    export type MultiCameraElements = 'overlay' | 'zoomPlus' | 'zoomMinus' | 'zoomThumb' | 'zoomBG' | 'zoomBGWrapper' | 'reverseCamera' | 'cancel' | 'takePhoto' | 'usePhotos' | 'bottomToolbar' | 'topIndicatorText' | 'bottomIndicatorText' | 'leftIndicatorText' | 'rightIndicatorText' | 'photoOverlay' | 'photoOverlayBackground' | 'back';
    export class MultiCamera {
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
}
declare module "index" {
    import * as MultiCamera from "multicamera";
    export { MultiCamera };
}
