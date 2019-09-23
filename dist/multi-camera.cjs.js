'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var css = "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg fill='rgba(255,255,255,.9)'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='40' fill='transparent' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath stroke='rgba(255,255,255,.9)' stroke-width='25' fill='rgba(0,0,0,0.4)' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath d='M616.9,659.8c-33.5,28.1-73.9,44.3-116.9,44.3c-92.8,0-169.2-73.9-180.9-158.1h78.1L298,418.3l-95.8,127.6h75.2C289.4,653.1,383.9,745,500,745c53.3,0,105.1-19.3,145.7-54.1l6-5.5l-29.6-29.8L616.9,659.8z'/%3E%3Cpath d='M652.5,354.2C611.1,316.5,557,296,500,296c-53.3,0-105.1,19.3-145.7,54.1l-6,5.2l29.6,29.6l5.2-4.4c33-27.7,74.5-43.4,116.9-43.4c92.8,0,169.1,73.5,180.9,162.8h-78.2l99.1,130.7l96-130.7h-75.3C716.8,449,692.1,390.4,652.5,354.2z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        padding:0.2em 0.5em;\n        transition: opacity 300ms;\n        opacity: 0;\n    }\n    .camera-use-photos.has-photos {\n        opacity: 1;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        color: white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        z-index:1;\n        font-weight:bold;\n        width:100%;\n        height: auto;\n        top: 0.05em;\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";

var html = "\n<div class=\"camera-overlay\">\n    <style>\n    " + css + "\n    </style>\n    <div class=\"camera-zoom camera-zoom-part\">\n        <div class=\"camera-zoom-stretch camera-zoom-part\"></div>\n        <div class=\"camera-zoom-plus\">+</div>\n        <div class=\"camera-zoom-background-wrapper camera-zoom-part\">\n            <div class=\"camera-zoom-background camera-zoom-part\"></div>\n        </div>\n        <div class=\"camera-zoom-minus\">-</div>\n        <div class=\"camera-zoom-thumb camera-zoom-part\"></div>\n    </div>\n    <div class=\"camera-reverse\"></div>\n    <div class=\"camera-take-photo-border camera-take-photo-part\"></div>\n    <div class=\"camera-take-photo camera-take-photo-part\"></div>\n        <a class=\"camera-cancel camera-text-option\" href=\"javascript:void(0);\" >Cancel</a>\n        <a class=\"camera-use-photos camera-text-option\" href=\"javascript:void(0);\">Use Photos</a>\n    <div class=\"camera-indicator top\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator bottom\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator right\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\">Photos</span>\n    </div>\n    <div class=\"camera-indicator left\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-photo-overlay\">\n        <div class=\"camera-photo-overlay-background\"></div>\n        <a href=\"javascript:void(0)\" class=\"camera-photo-overlay-text back\">Back To Camera</a>\n    </div>\n    <div class=\"camera-bottom-toolbar\" >\n    </div>\n</div>\n";

var MultiCamera = /** @class */ (function () {
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
        }, overlay = _a.overlay, takePhoto = _a.takePhoto, back = _a.back, cancel = _a.cancel, usePhotos = _a.usePhotos;
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
            preview.getSupportedPictureSizes(function (sizes) {
                sizes.sort(function (a, b) { return (b.width * b.height - a.width * a.height); });
                //const width = sizes[0].width,
                //height = sizes[0].height;
                preview.takePicture({ width: width, height: height, quality: 90 }, function (base64) {
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
    MultiCamera.prototype._getEmToPx = function () {
        if (!this._emToPx) {
            var emTest = document.createElement('div');
            emTest.style.width = emTest.style.height = '1em';
            emTest.style.position = 'absolute';
            emTest.style.opacity = '0';
            this._element.appendChild(emTest);
            this._emToPx = emTest.clientWidth;
            this._element.removeChild(emTest);
        }
        return this._emToPx;
    };
    MultiCamera.prototype._hidePhotoOverlay = function () {
        var _this = this;
        var image = this._activePhoto, emToPx = this._getEmToPx(), original = (image || { wrapper: undefined }).wrapper, wrapper = this._showingPhotoOverlay !== false ? this._showingPhotoOverlay.wrapper : this._showingPhotoOverlay, rect = original && original.getBoundingClientRect(), elements = this._elements;
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
            wrapper.style.left = rect.x / emToPx + "em";
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
        var image = this._activePhoto, emToPx = this._getEmToPx(), width = image.width, height = image.height, original = image.wrapper, data = image.data, rect = original.getBoundingClientRect(), elements = this._elements;
        if (this._showingPhotoOverlay) {
            this._hidePhotoOverlay();
        }
        var wrapper = (this._showingPhotoOverlay = { data: data, width: width, height: height, wrapper: original.cloneNode(true) }).wrapper, photo = wrapper.querySelector('.camera-photo'), remove = wrapper.querySelector('.camera-photo-remove');
        wrapper.style.boxShadow = 'none';
        elements.photoOverlay.style.display = 'block';
        wrapper.style.transform = 'translate(0em,0em)scale(1)';
        wrapper.style.left = rect.x / emToPx + "em";
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
        var dimensions = this.getScreenDimensions(), emToPx = this._getEmToPx(), cloneImage = this._showingPhotoOverlay;
        var _a = cloneImage || { width: undefined, height: undefined, wrapper: undefined }, width = _a.width, height = _a.height, wrapper = _a.wrapper;
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
        var cx = (dimensions.width - width * scale) / 2 / emToPx, cy = (dimensions.height - height * scale) / 2 / emToPx;
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
        var images = this._images, width = 3.5, ln = images.length, usePhotos = this._elements.usePhotos;
        var image, i = 0;
        for (; i < ln; i++) {
            image = images[i];
            image.x = i * width;
            image.wrapper.style.transform = "translate(" + (i * width) + "em, 0em)scale(1)";
        }
        if (ln) {
            if (!usePhotos.classList.contains('has-photos')) {
                usePhotos.classList.add('has-photos');
            }
        }
        else if (usePhotos.classList.contains('has-photos')) {
            usePhotos.classList.remove('has-photos');
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
        var camera = this._camera;
        var cancelCB = function () {
            success && success([]);
            camera.removeEventListener('usephotos', usePhotosCB);
            camera.removeEventListener('cancel', cancelCB);
        }, usePhotosCB = function ($event) {
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
        var result = document.createElement('span');
        result.innerHTML = "" + html;
        return result.children[0];
    })();
    return MultiCamera;
}());

exports.MultiCamera = MultiCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FtZXJhLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL211bHRpY2FtZXJhLmNzcy50cyIsIi4uL3NyYy9tdWx0aWNhbWVyYS5odG1sLnRzIiwiLi4vc3JjL211bHRpY2FtZXJhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjc3MgPSBgXG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LXRleHQuYmFjayB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmFsbDtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciAuY2FtZXJhLWluZGljYXRvci10ZXh0IHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItbGluZSxcbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCAuY2FtZXJhLWluZGljYXRvci1saW5lXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsMTUwLDI1NSwwLjcpO1xuICAgICAgICAtd2Via2l0LW1hc2s6bGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTAlLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IHtcbiAgICAgICAgcmlnaHQ6IDdlbTtcbiAgICAgICAgbGVmdDogNWVtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIHRvcDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCxcbiAgICAuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dFxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOi0xZW07XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCAuY2FtZXJhLWluZGljYXRvci1saW5lLFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSAuY2FtZXJhLWluZGljYXRvci1saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgYm90dG9tOjUuNWVtO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCwxNTAsMjU1LDAuNyk7XG4gICAgICAgIC13ZWJraXQtbWFzazpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgM2VtLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTclLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgdG9wOiAwZW07XG4gICAgICAgIGJvdHRvbTogMGVtO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci50b3Age1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIGxlZnQ6IDAuM2VtO1xuICAgICAgICB0b3A6IDBlbTtcbiAgICAgICAgYm90dG9tOiAwZW07XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuXG4gICAgLmNhbWVyYS1vdmVybGF5IHtcbiAgICAgICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS10b29rLXBpY3R1cmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmNhbWVyYS10YWtlLXBob3RvLWJvcmRlciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IC0wLjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICBoZWlnaHQ6My43NWVtO1xuICAgICAgICB3aWR0aDozLjc1ZW07XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMC4zNWVtIHdoaXRlLCAwcHggMHB4IDBweCAwLjRlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgbGluZWFyO1xuICAgIH1cbiAgICAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIGhlaWdodDozLjVlbTtcbiAgICAgICAgd2lkdGg6My41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNzVtcyBsaW5lYXI7XG4gICAgfVxuICAgIC50YWtpbmctcGljdHVyZSAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5jYW1lcmEtcmV2ZXJzZSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMC45NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpdHJhbnNsYXRlKDAsLTVlbSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCclM0YlM0UlM0MhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0lM0UlM0MhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCclM0UlM0NzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDEwMDAgMTAwMCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwMCAxMDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ21ldGFkYXRhJTNFIFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uICUzQy9tZXRhZGF0YSUzRSUzQ2cgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuOSknJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMCwwLDAsMC41KScgc3Ryb2tlLXdpZHRoPSc0MCcgZmlsbD0ndHJhbnNwYXJlbnQnIGQ9J005MTIuMiwyNTVINzU0LjZjLTgxLjktOTEuOS0xMDcuNy0xMjIuNS0xMzkuMi0xMjIuNUgzODkuNmMtMzEuNCwwLTU2LjYsMzAuNi0xMzkuMSwxMjIuNWgtMzMuOHYtNDAuOGgtODYuOFYyNTVIOTUuNWMtNDUsMC04NS41LDMzLjctODUuNSw3OC4zdjQ0OS4yYzAsNDQuNiw0MC41LDg1LDg1LjUsODVoODE2LjdjNDUsMCw3Ny44LTQwLjQsNzcuOC04NVYzMzMuM0M5OTAsMjg4LjcsOTU3LjIsMjU1LDkxMi4yLDI1NXonLyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LC45KScgc3Ryb2tlLXdpZHRoPScyNScgZmlsbD0ncmdiYSgwLDAsMCwwLjQpJyBkPSdNOTEyLjIsMjU1SDc1NC42Yy04MS45LTkxLjktMTA3LjctMTIyLjUtMTM5LjItMTIyLjVIMzg5LjZjLTMxLjQsMC01Ni42LDMwLjYtMTM5LjEsMTIyLjVoLTMzLjh2LTQwLjhoLTg2LjhWMjU1SDk1LjVjLTQ1LDAtODUuNSwzMy43LTg1LjUsNzguM3Y0NDkuMmMwLDQ0LjYsNDAuNSw4NSw4NS41LDg1aDgxNi43YzQ1LDAsNzcuOC00MC40LDc3LjgtODVWMzMzLjNDOTkwLDI4OC43LDk1Ny4yLDI1NSw5MTIuMiwyNTV6Jy8lM0UlM0NwYXRoIGQ9J002MTYuOSw2NTkuOGMtMzMuNSwyOC4xLTczLjksNDQuMy0xMTYuOSw0NC4zYy05Mi44LDAtMTY5LjItNzMuOS0xODAuOS0xNTguMWg3OC4xTDI5OCw0MTguM2wtOTUuOCwxMjcuNmg3NS4yQzI4OS40LDY1My4xLDM4My45LDc0NSw1MDAsNzQ1YzUzLjMsMCwxMDUuMS0xOS4zLDE0NS43LTU0LjFsNi01LjVsLTI5LjYtMjkuOEw2MTYuOSw2NTkuOHonLyUzRSUzQ3BhdGggZD0nTTY1Mi41LDM1NC4yQzYxMS4xLDMxNi41LDU1NywyOTYsNTAwLDI5NmMtNTMuMywwLTEwNS4xLDE5LjMtMTQ1LjcsNTQuMWwtNiw1LjJsMjkuNiwyOS42bDUuMi00LjRjMzMtMjcuNyw3NC41LTQzLjQsMTE2LjktNDMuNGM5Mi44LDAsMTY5LjEsNzMuNSwxODAuOSwxNjIuOGgtNzguMmw5OS4xLDEzMC43bDk2LTEzMC43aC03NS4zQzcxNi44LDQ0OSw2OTIuMSwzOTAuNCw2NTIuNSwzNTQuMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Mi41ZW0gMi41ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1ib3R0b20tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBoZWlnaHQ6IDQuMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xuICAgIH1cbiAgICAuY2FtZXJhLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMHB4IDAuNWVtIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6NWVtO1xuICAgICAgICB3aWR0aDo1ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtdGV4dC1vcHRpb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzowIDAuNWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3Mge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBwYWRkaW5nOjAuMmVtIDAuNWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3MuaGFzLXBob3RvcyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5jYW1lcmEtY2FuY2VsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcbiAgICAgICAgYm90dG9tOiA0LjBlbTtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgLjc1ZW0sIGJsYWNrIC43NWVtLCBibGFjayAyNWVtKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6MzBlbSAzMGVtO1xuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246NTAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1wbHVzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1taW51cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY2FtZXJhLXpvb20tdGh1bWIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwLjE1ZW0gcmdiYSgxMDAsMjU1LDEwMCwwLjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICBib3R0b206IDAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tLXN0cmV0Y2gge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICAgICAgdG9wOiAtMWVtO1xuICAgICAgICByaWdodDogLTFlbTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXMsIG9wYWNpdHkgMzAwbXMsIGxlZnQgMzAwbXMsIGJvdHRvbSAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIuYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgxMDAsMjU1LDEwMCwwLjM1KTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCl0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tcmVtb3ZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogIDBweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtc2hhZG93OiAgMHB4IDBweCAxcHggYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLDIwMCwyMDAsLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAwLjA1ZW07XG4gICAgICAgIHJpZ2h0OiAwLjA1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbmA7XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnLi9tdWx0aWNhbWVyYS5jc3MnO1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG48ZGl2IGNsYXNzPVwiY2FtZXJhLW92ZXJsYXlcIj5cbiAgICA8c3R5bGU+XG4gICAgJHtjc3N9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20gY2FtZXJhLXpvb20tcGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tc3RyZXRjaCBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1wbHVzXCI+KzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIGNhbWVyYS16b29tLXBhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1iYWNrZ3JvdW5kIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1taW51c1wiPi08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLXRodW1iIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXJldmVyc2VcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8tYm9yZGVyIGNhbWVyYS10YWtlLXBob3RvLXBhcnRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8gY2FtZXJhLXRha2UtcGhvdG8tcGFydFwiPjwvZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS1jYW5jZWwgY2FtZXJhLXRleHQtb3B0aW9uXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiA+Q2FuY2VsPC9hPlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS11c2UtcGhvdG9zIGNhbWVyYS10ZXh0LW9wdGlvblwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+VXNlIFBob3RvczwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciB0b3BcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGJvdHRvbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItbGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLXRleHRcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3IgcmlnaHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+UGhvdG9zPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGxlZnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheS10ZXh0IGJhY2tcIj5CYWNrIFRvIENhbWVyYTwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWJvdHRvbS10b29sYmFyXCIgPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJy4vbXVsdGljYW1lcmEuaHRtbCc7XG5cbmludGVyZmFjZSBNdWx0aUNhbWVyYUNvbmZpZyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDYW1lcmFJbWcge1xuICAgIGRhdGE6IHN0cmluZztcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUGhvdG9FdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcbiAgICBkZXRhaWw6IE11bHRpQ2FtZXJhSW1nW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbEV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuICAgIGRldGFpbDogTXVsdGlDYW1lcmFJbWdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9va1Bob3RvRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG4gICAgZGV0YWlsOiBNdWx0aUNhbWVyYUltZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNhbWVyYUV2ZW50cyB7XG4gICAgdXNlcGhvdG9zOiAgVXNlUGhvdG9FdmVudDtcbiAgICBjYW5jZWw6IENhbmNlbEV2ZW50O1xuICAgIHRvb2twaG90bzogIFRvb2tQaG90b0V2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2FtZXJhSW1hZ2UgZXh0ZW5kcyBNdWx0aUNhbWVyYUltZyB7XG4gICAgd3JhcHBlcj86IEhUTUxFbGVtZW50O1xuICAgIGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICByZW1vdmVkPzogYm9vbGVhbjtcbiAgICB4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhbWVyYUVsZW1lbnRzID1cbiAgICAgICAgJ292ZXJsYXknIHxcbiAgICAgICAgJ3pvb21QbHVzJyB8XG4gICAgICAgICd6b29tTWludXMnIHxcbiAgICAgICAgJ3pvb21UaHVtYicgfFxuICAgICAgICAnem9vbUJHJyB8XG4gICAgICAgICd6b29tQkdXcmFwcGVyJyB8XG4gICAgICAgICdyZXZlcnNlQ2FtZXJhJyB8XG4gICAgICAgICdjYW5jZWwnIHxcbiAgICAgICAgJ3Rha2VQaG90bycgfFxuICAgICAgICAndXNlUGhvdG9zJyB8XG4gICAgICAgICdib3R0b21Ub29sYmFyJyB8XG4gICAgICAgICd0b3BJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdib3R0b21JbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdsZWZ0SW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAncmlnaHRJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdwaG90b092ZXJsYXknIHxcbiAgICAgICAgJ3Bob3RvT3ZlcmxheUJhY2tncm91bmQnIHxcbiAgICAgICAgJ2JhY2snO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlDYW1lcmEge1xuICAgIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBfb3BlcmF0aW9uczogUHJvbWlzZTxhbnk+W107XG4gICAgX2VsZW1lbnRzOiB7W2tleSBpbiBNdWx0aUNhbWVyYUVsZW1lbnRzXTogSFRNTEVsZW1lbnR9O1xuICAgIF9lbVRvUHg6IG51bWJlcjtcbiAgICBfc2hvdzogTXVsdGlDYW1lcmFDb25maWcgfCBib29sZWFuO1xuICAgIF9yZWFkeTogYm9vbGVhbjtcbiAgICBfdGFraW5nUGljdHVyZTogYm9vbGVhbjtcbiAgICBfc2hvd2luZ1Bob3RvT3ZlcmxheTogTXVsdGlDYW1lcmFJbWFnZSB8IGZhbHNlO1xuICAgIF9pbWFnZXM6IE11bHRpQ2FtZXJhSW1hZ2VbXSA9IFtdO1xuICAgIF9hY3RpdmVQaG90bzogTXVsdGlDYW1lcmFJbWFnZTtcbiAgICBfZnJvbnRDYW1lcmE6IGJvb2xlYW47XG4gICAgX21heFpvb206IG51bWJlciA9IDU7XG4gICAgX21pblpvb206IG51bWJlciA9IDE7XG4gICAgX3pvb206IG51bWJlciA9IDE7XG4gICAgX3RvdWNoU3RhdGU6IHtcbiAgICAgICAgdHlwZTogTXVsdGlDYW1lcmFbJ3RvdWNoVHlwZXMnXVtrZXlvZiBNdWx0aUNhbWVyYVsndG91Y2hUeXBlcyddXTtcbiAgICAgICAgem9vbT86IG51bWJlcjtcbiAgICAgICAgeFN0YXJ0PzogbnVtYmVyO1xuICAgICAgICB5U3RhcnQ/OiBudW1iZXI7XG4gICAgICAgIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICAgICAgICBzdGFydEV2ZW50PzogRXZlbnQ7XG4gICAgICAgIHBsdXNUaW1lcj86IGFueTtcbiAgICAgICAgbWludXNUaW1lcj86IGFueTtcbiAgICAgICAgc3RhcnRzPzoge2xlbmd0aDogbnVtYmVyLCBba2V5OiBudW1iZXJdOiB7eDogbnVtYmVyOyB5Om51bWJlcjt9fTtcbiAgICAgICAgb3JkZXI/OiBudW1iZXJbXVxuICAgICAgICBub3RfY2xpY2s/OiBib29sZWFuO1xuICAgIH07XG4gICAgX2V2ZW50czoge1xuICAgICAgICBba2V5IGluIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzXTogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNba2V5XSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpW11cbiAgICB9ID0ge1xuICAgICAgICB1c2VwaG90b3M6IFtdLFxuICAgICAgICBjYW5jZWw6IFtdLFxuICAgICAgICB0b29rcGhvdG86IFtdXG4gICAgfTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIE11bHRpQ2FtZXJhLl9jYW1lcmEgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gKE11bHRpQ2FtZXJhLl90ZW1wbGF0ZSBhcyBIVE1MRWxlbWVudCkuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB7b3ZlcmxheSwgdGFrZVBob3RvLCBiYWNrLCBjYW5jZWwsIHVzZVBob3Rvc30gPSB0aGlzLl9lbGVtZW50cyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGVsZW1lbnQsXG4gICAgICAgICAgICB6b29tUGx1czogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tcGx1cycpLFxuICAgICAgICAgICAgem9vbU1pbnVzOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1taW51cycpLFxuICAgICAgICAgICAgem9vbVRodW1iOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS10aHVtYicpLFxuICAgICAgICAgICAgem9vbUJHOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICB6b29tQkdXcmFwcGVyOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kLXdyYXBwZXInKSxcbiAgICAgICAgICAgIHJldmVyc2VDYW1lcmE6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1yZXZlcnNlJyksXG4gICAgICAgICAgICBjYW5jZWw6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jYW5jZWwnKSxcbiAgICAgICAgICAgIHRha2VQaG90bzogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXRha2UtcGhvdG8nKSxcbiAgICAgICAgICAgIHVzZVBob3RvczogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXVzZS1waG90b3MnKSxcbiAgICAgICAgICAgIGJvdHRvbVRvb2xiYXI6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1ib3R0b20tdG9vbGJhcicpLFxuICAgICAgICAgICAgdG9wSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgYm90dG9tSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgbGVmdEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IubGVmdCAuY2FtZXJhLWluZGljYXRvci10ZXh0JyksXG4gICAgICAgICAgICByaWdodEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IucmlnaHQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8tb3ZlcmxheScpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5QmFja2dyb3VuZDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgYmFjazogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dC5iYWNrJylcbiAgICAgICAgfTtcblxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9vbkRldmljZVJlYWR5ID0gdGhpcy5fb25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlID0gdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uQ2FuY2VsQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIHVzZVBob3Rvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uVXNlUGhvdG9zQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaEVuZChldmVudCksIHRydWUpO1xuICAgICAgICBiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaG90b092ZXJsYXlCYWNrQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hNb3ZlKGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoU3RhcnQoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoQ2FuY2VsKGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIHRha2VQaG90by5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5fb25UYWtlUGhvdG9UcmFuc2l0aW9uRW5kKCkpO1xuXG4gICAgICAgIC8vVE9ETyBjb25zaWRlciBhZGQgaW4gc2hvdyByZW1vdmUgZXZlbnRsaXN0ZW5lciBpbiBoaWRlXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snZGV2aWNlJ10gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3dbJ2RldmljZSddLmNvcmRvdmEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMuX29uRGV2aWNlUmVhZHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb25EZXZpY2VSZWFkeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHMgPSBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4gKG5hbWU6IEEsIGZuOiAoKGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpKSB7XG4gICAgICAgICh0aGlzLl9ldmVudHNbbmFtZV0gYXMgYW55KS5wdXNoKGZuIGFzIChldmVudDogRXZlbnQpID0+IGFueSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHMgPSBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4gKG5hbWU6IEEsIGZuOiAoKGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50c1tuYW1lXSxcbiAgICAgICAgICAgIGluZGV4ID0gKGV2ZW50cyBhcyBhbnkpLmluZGV4T2YoZm4gYXMgKGV2ZW50OiBFdmVudCkgPT4gYW55KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaEV2ZW50PEEgZXh0ZW5kcyBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4oZXZlbnQ6IE11bHRpQ2FtZXJhRXZlbnRzW0FdKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50c1tldmVudC50eXBlXTtcbiAgICAgICAgZm9yICh2YXIgaT0wLGxuPWV2ZW50cy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgIGV2ZW50c1tpXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTY3JlZW5EaW1lbnNpb25zICgpIHtcbiAgICAgICAgdmFyIHtoZWlnaHQsIHdpZHRofSA9IHdpbmRvdy5zY3JlZW47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcmllbnRhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwYXJzZUludChgJHt3aW5kb3cub3JpZW50YXRpb259YCkgLyA5MCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG5cbiAgICBzaG93IChjb25maWc6IE11bHRpQ2FtZXJhQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCk7XG5cbiAgICAgICAgLy9UT0RPIGNoZWNrIHRoaXNcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yZWFkeSB8fCAhcHJldmlldykge1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Nob3cgPSB0cnVlO1xuXG4gICAgICAgIHByZXZpZXcuc3RvcENhbWVyYShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q2FtZXJhKCk7XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgZXJyKTtcbiAgICAgICAgICAgICAgICBzdGFydENhbWVyYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0Q2FtZXJhICgpIHtcbiAgICAgICAgICAgIHByZXZpZXcuc3RhcnRDYW1lcmEoe1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHByZXZpZXcuQ0FNRVJBX0RJUkVDVElPTi5CQUNLLFxuICAgICAgICAgICAgICAgICAgICB0b0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRhcFBob3RvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGFwRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3RHJhZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RhcnRDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddLFxuICAgICAgICAgICAge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldmlldy5zdG9wQ2FtZXJhKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5waG90b092ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRha2VQaG90byAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b29rUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcblxuICAgICAgICB0b29rUGljdHVyZS5jbGFzc05hbWUgPSAnY2FtZXJhLXRvb2stcGljdHVyZSc7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90YWtpbmdQaWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWtpbmdQaWN0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndGFraW5nLXBpY3R1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvb2tQaWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90YWtpbmdQaWN0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodG9va1BpY3R1cmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRvb2tQaWN0dXJlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9va1BpY3R1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvb2tQaWN0dXJlLnN0eWxlLm9wYWNpdHkgPSAnMCcpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHRvb2tQaWN0dXJlKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IHdpbmRvd1snUHJvbWlzZSddKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXTtcblxuICAgICAgICAgICAgcHJldmlldy5nZXRTdXBwb3J0ZWRQaWN0dXJlU2l6ZXMoKHNpemVzOiB7d2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9W10pID0+IHtcbiAgICAgICAgICAgICAgICBzaXplcy5zb3J0KChhLCBiKSA9PiAoYi53aWR0aCAqIGIuaGVpZ2h0IC0gYS53aWR0aCAqIGEuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgLy9jb25zdCB3aWR0aCA9IHNpemVzWzBdLndpZHRoLFxuICAgICAgICAgICAgICAgIC8vaGVpZ2h0ID0gc2l6ZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHByZXZpZXcudGFrZVBpY3R1cmUoe3dpZHRoLCBoZWlnaHQsIHF1YWxpdHk6IDkwfSwgKGJhc2U2NDogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6ICBNdWx0aUNhbWVyYUltYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwke2Jhc2U2NFswXX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9XcmFwcGVyID0gTXVsdGlDYW1lcmEuX3Bob3RvV3JhcHBlclRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9FbGVtZW50ID0gcGhvdG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8nKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCA9IHBob3RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICB7Ym90dG9tVG9vbGJhcn0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgdG9va1Bob3RvRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Rvb2twaG90bycsIHtkZXRhaWw6IHtkYXRhOiBpbWFnZS5kYXRhLCB3aWR0aDppbWFnZS53aWR0aCwgaGVpZ2h0OmltYWdlLmhlaWdodH19KTtcblxuICAgICAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2UuZGF0YX1cIilgO1xuICAgICAgICAgICAgICAgICAgICBib3R0b21Ub29sYmFyLmluc2VydEJlZm9yZShwaG90b1dyYXBwZXIsIGJvdHRvbVRvb2xiYXIuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpdHJhbnNsYXRlKDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCRldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hvb3NlQWN0aXZlUGhvdG8oaW1hZ2UsICRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRvb2tQaG90b0V2ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZS53cmFwcGVyID0gcGhvdG9XcmFwcGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5lbGVtZW50ID0gcGhvdG9FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMudW5zaGlmdChpbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb3BlcmF0aW9ucy5pbmRleE9mKHByb21pc2UpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUltYWdlIChpbWFnZTogTXVsdGlDYW1lcmFJbWFnZSkge1xuICAgICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9pbWFnZXMuaW5kZXhPZihpbWFnZSksXG4gICAgICAgICAgICB7d3JhcHBlcn0gPSBpbWFnZTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYCR7d3JhcHBlci5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJ3NjYWxlKDEpJylbMF19c2NhbGUoMClgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5ib3R0b21Ub29sYmFyLnJlbW92ZUNoaWxkKHdyYXBwZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kb0xheW91dCgpO1xuXG4gICAgICAgIGlmIChpbWFnZSA9PT0gdGhpcy5fYWN0aXZlUGhvdG8pIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9pbWFnZXNbaW5kZXhdIHx8IHRoaXMuX2ltYWdlc1t0aGlzLl9pbWFnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nob29zZUFjdGl2ZVBob3RvKG5leHQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Nob29zZUFjdGl2ZVBob3RvIChpbWFnZTogTXVsdGlDYW1lcmFJbWFnZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXRbJ2NsYXNzTGlzdCddICYmIGV2ZW50LnRhcmdldFsnY2xhc3NMaXN0J10uY29udGFpbnMoJ2NhbWVyYS1waG90by1yZW1vdmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVQaG90bykge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlUGhvdG8ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FjdGl2ZVBob3RvID0gaW1hZ2U7XG4gICAgICAgIHRoaXMuX3Nob3dQaG90b092ZXJsYXkoKTtcbiAgICAgICAgaW1hZ2Uud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgXG4gICAgX2dldEVtVG9QeCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbVRvUHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZW1UZXN0LnN0eWxlLndpZHRoID0gZW1UZXN0LnN0eWxlLmhlaWdodCA9ICcxZW0nO1xuICAgICAgICAgICAgZW1UZXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGVtVGVzdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChlbVRlc3QpO1xuICAgICAgICAgICAgdGhpcy5fZW1Ub1B4ID0gZW1UZXN0LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZChlbVRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9lbVRvUHg7XG4gICB9XG5cbiAgICBfaGlkZVBob3RvT3ZlcmxheSAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5fYWN0aXZlUGhvdG8sXG4gICAgICAgICAgICBlbVRvUHggPSB0aGlzLl9nZXRFbVRvUHgoKSxcbiAgICAgICAgICAgIHt3cmFwcGVyOiBvcmlnaW5hbH0gPSBpbWFnZSB8fCB7d3JhcHBlcjogdW5kZWZpbmVkfSxcbiAgICAgICAgICAgIHdyYXBwZXIgPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ICE9PSBmYWxzZSA/IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkud3JhcHBlciA6IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXksXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwgJiYgb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSA9PT0gZWxlbWVudHMucGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICBjb25zdCBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudHMuYmFjay5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5QmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnggLyBlbVRvUHh9ZW1gO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSAnMGVtJztcbiAgICAgICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDApJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1Bob3RvT3ZlcmxheSAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gIHRoaXMuX2FjdGl2ZVBob3RvLFxuICAgICAgICAgICAgZW1Ub1B4ID0gdGhpcy5fZ2V0RW1Ub1B4KCksXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodCwgd3JhcHBlcjogb3JpZ2luYWwsIGRhdGF9ID0gaW1hZ2UsXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7d3JhcHBlcn0gPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0ge2RhdGEsIHdpZHRoLCBoZWlnaHQsIHdyYXBwZXI6IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudH0sXG4gICAgICAgICAgICBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgcmVtb3ZlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpXG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMGVtLDBlbSlzY2FsZSgxKSdcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7cmVjdC54L2VtVG9QeH1lbWBcblxuICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocmVtb3ZlKVxuXG4gICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBwaG90by5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5fY2VudGVyUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jZW50ZXJQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICBlbVRvUHggPSB0aGlzLl9nZXRFbVRvUHgoKSxcbiAgICAgICAgICAgIGNsb25lSW1hZ2UgPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5O1xuICAgICAgICB2YXIge3dpZHRoLCBoZWlnaHQsIHdyYXBwZXJ9ID0gY2xvbmVJbWFnZSB8fCB7d2lkdGg6IHVuZGVmaW5lZCwgaGVpZ2h0OiB1bmRlZmluZWQsIHdyYXBwZXI6IHVuZGVmaW5lZH07XG4gICAgICAgIHZhciBzY2FsZTogbnVtYmVyOyBcblxuICAgICAgICBpZiAod2lkdGggPiBkaW1lbnNpb25zLndpZHRoKSB7XG4gICAgICAgICAgICBzY2FsZSA9IGRpbWVuc2lvbnMud2lkdGggLyB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ID4gZGltZW5zaW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICghc2NhbGUgfHwgKChkaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodCkgPiBzY2FsZSkpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IGRpbWVuc2lvbnMuaGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeCA9IChkaW1lbnNpb25zLndpZHRoIC0gd2lkdGggKiBzY2FsZSkgLyAyIC8gZW1Ub1B4LFxuICAgICAgICAgICAgY3kgPSAoZGltZW5zaW9ucy5oZWlnaHQgLSBoZWlnaHQgKiBzY2FsZSkgLyAyIC8gZW1Ub1B4O1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0KnNjYWxlfXB4YDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IGAke3dpZHRoKnNjYWxlfXB4YDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7Y3h9ZW1gO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmJvdHRvbSA9IGAke2N5fWVtYDtcbiAgICB9XG5cbiAgICBmb2N1cyAoe3gsIHl9OiB7eDpudW1iZXIsIHk6bnVtYmVyfSkge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J11cbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBNdWx0aUNhbWVyYS5mb2N1cygke1t4LHldfSlgKTtcbiAgICAgICAgICAgIHByZXZpZXcudGFwVG9Gb2N1cyh4LCB5LCAoKSA9PiB7fSwgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcudGFwVG9Gb2N1cycsIGVycikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN3aXRjaENhbWVyYSAoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXTtcbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5ICYmIHByZXZpZXcpIHtcbiAgICAgICAgICAgIHdpbmRvd1snUHJvbWlzZSddLmFsbCh0aGlzLl9vcGVyYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IHdpbmRvd1snUHJvbWlzZSddKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3LnN3aXRjaENhbWVyYSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcm9udENhbWVyYSA9ICF0aGlzLl9mcm9udENhbWVyYVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zd2l0Y2hDYW1lcmEnLCBlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb3BlcmF0aW9ucy5pbmRleE9mKHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHpvb20gKHpvb206IG51bWJlcikge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J107XG5cbiAgICAgICAgaWYgKCF0aGlzLl9yZWFkeSB8fCAhcHJldmlldykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge19tYXhab29tLCBfbWluWm9vbX0gPSB0aGlzLFxuICAgICAgICAgICAge3pvb21CRywgem9vbUJHV3JhcHBlciwgem9vbVRodW1ifSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlY3QgPSB6b29tQkcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSGVpZ2h0ID0gYmFja2dyb3VuZFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh6b29tICA8IF9taW5ab29tKSB7XG4gICAgICAgICAgICB6b29tID0gX21pblpvb207XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKHpvb20gPiBfbWF4Wm9vbSkge1xuICAgICAgICAgICAgem9vbSA9IF9tYXhab29tO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fem9vbSA9IHpvb207XG5cbiAgICAgICAgY29uc3QgZGl2ID0gKCh6b29tIC0gMSkgLyAodGhpcy5fbWF4Wm9vbSAtIDEpKSxcbiAgICAgICAgICAgIHRvcCA9IGRpdiAqIGJhY2tncm91bmRIZWlnaHQ7XG4gICAgICAgIHpvb21UaHVtYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkey10b3B9cHgpdHJhbnNsYXRlKC01MCUsIDUwJSlgO1xuICAgICAgICAoem9vbUJHV3JhcHBlci5zdHlsZSBhcyBhbnkpLndlYmtpdE1hc2tQb3NpdGlvbj1gNTAlICR7KGRpdioxMDApfSVgO1xuXG4gICAgICAgIHByZXZpZXcuc2V0Wm9vbSh6b29tLCAoKSA9PiB7fSwgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc2V0Wm9vbScsIGVycikpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZG9MYXlvdXQgKCkge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLl9pbWFnZXMsXG4gICAgICAgICAgICB3aWR0aCA9IDMuNSxcbiAgICAgICAgICAgIGxuID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHVzZVBob3RvcyA9IHRoaXMuX2VsZW1lbnRzLnVzZVBob3RvcztcbiAgICAgICAgXG4gICAgICAgIHZhciBpbWFnZTogTXVsdGlDYW1lcmFJbWFnZSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgIGltYWdlID0gaW1hZ2VzW2ldO1xuICAgICAgICAgICAgaW1hZ2UueCA9IGkgKiB3aWR0aDtcbiAgICAgICAgICAgIGltYWdlLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkeyhpKndpZHRoKX1lbSwgMGVtKXNjYWxlKDEpYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsbikge1xuICAgICAgICAgICAgaWYgKCF1c2VQaG90b3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtcGhvdG9zJykpIHtcbiAgICAgICAgICAgICAgIHVzZVBob3Rvcy5jbGFzc0xpc3QuYWRkKCdoYXMtcGhvdG9zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXNlUGhvdG9zLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXBob3RvcycpKSB7XG4gICAgICAgICAgIHVzZVBob3Rvcy5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtcGhvdG9zJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfcmVzZXQgKCkge1xuICAgICAgICBjb25zdCB7Ym90dG9tVG9vbGJhciwgem9vbVRodW1iLCB6b29tQkdXcmFwcGVyfSA9IHRoaXMuX2VsZW1lbnRzO1xuXG4gICAgICAgIGJvdHRvbVRvb2xiYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHpvb21UaHVtYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwcHgpdHJhbnNsYXRlKC01MCUsIDUwJSlgO1xuICAgICAgICAoem9vbUJHV3JhcHBlci5zdHlsZSBhcyBhbnkpLndlYmtpdE1hc2tQb3NpdGlvbj1gNTAlIDAlYDtcblxuICAgICAgICB0aGlzLl9pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9O1xuICAgICAgICB0aGlzLl9mcm9udENhbWVyYSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl96b29tID0gMTtcbiAgICAgICAgdGhpcy5fbWluWm9vbSA9IDE7XG4gICAgICAgIHRoaXMuX21heFpvb20gPSA1O1xuICAgIH1cblxuICAgIF9vbkRldmljZVJlYWR5ICgpIHtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fc2hvdykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9IHRoaXMuX3Nob3c7XG4gICAgICAgICAgICB0aGlzLl9zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3coc2hvdyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnpvb20odGhpcy5fem9vbSk7XG4gICAgICAgIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLl9vbkRldmljZVJlYWR5KTtcbiAgICB9XG5cbiAgICBfb25PdmVybGF5VG91Y2hTdGFydCAoZXZlbnQ6IFRvdWNoRXZlbnQgJiB7cGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlcn0pIHtcbiAgICAgICAgY29uc3Qge3pvb21QbHVzLCB6b29tTWludXMsIHJldmVyc2VDYW1lcmEsIG92ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICBjbGFzc0xpc3QgPSBldmVudC50YXJnZXRbJ2NsYXNzTGlzdCddIHx8IHtjb250YWluczogKCkgPT4gZmFsc2V9LFxuICAgICAgICAgICAgbnVtX3RvdWNoZXMgPSBldmVudC50b3VjaGVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlLFxuICAgICAgICAgICAgcGx1c1RpbWVyOiAoKSA9PiBhbnksXG4gICAgICAgICAgICBtaW51c1RpbWVyOiAoKSA9PiBhbnk7XG5cbiAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucygnY2FtZXJhLXpvb20tcGFydCcpICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX1RIVU1CLFxuICAgICAgICAgICAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICAgICAgICAgICAgeFN0YXJ0OiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgICAgICB5U3RhcnQ6IGV2ZW50LnBhZ2VZLFxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0YXJ0RXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gem9vbVBsdXMgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX29uWm9vbVBsdXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fUExVUyxcbiAgICAgICAgICAgICAgICBwbHVzVGltZXI6IHNldFRpbWVvdXQocGx1c1RpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblpvb21QbHVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUucGx1c1RpbWVyID0gc2V0VGltZW91dChwbHVzVGltZXIsIDEwMClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gem9vbU1pbnVzICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9vblpvb21NaW51c01vdXNlRG93bigpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9NSU5VUyxcbiAgICAgICAgICAgICAgICBtaW51c1RpbWVyOiBzZXRUaW1lb3V0KG1pbnVzVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uWm9vbU1pbnVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUubWludXNUaW1lciA9IHNldFRpbWVvdXQobWludXNUaW1lciwgMTAwKVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHJldmVyc2VDYW1lcmEgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoQ2FtZXJhKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW1lcmEtdGFrZS1waG90by1wYXJ0JykgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZVBob3RvKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgICAgICB0b3VjaFN0YXRlLnR5cGUgPSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9GSU5HRVJTO1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgICAgICBvcmRlcjogTXVsdGlDYW1lcmFbJ190b3VjaFN0YXRlJ11bJ29yZGVyJ10sXG4gICAgICAgICAgICAgICAgc3RhcnRzOiBNdWx0aUNhbWVyYVsnX3RvdWNoU3RhdGUnXVsnc3RhcnRzJ10sXG4gICAgICAgICAgICAgICAgdG91Y2g6IFRvdWNoO1xuICAgICAgICAgICAgaWYgKCF0b3VjaFN0YXRlLnN0YXJ0cykge1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUuc3RhcnRzID0ge2xlbmd0aDogMH07XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5vcmRlciA9IFtdO1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUuem9vbSA9IHRoaXMuX3pvb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydHMgPSB0b3VjaFN0YXRlLnN0YXJ0cztcbiAgICAgICAgICAgIG9yZGVyID0gdG91Y2hTdGF0ZS5vcmRlcjtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCxsbj10b3VjaGVzLmxlbmd0aDtpPGxuO2krKykge1xuICAgICAgICAgICAgICAgIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydHNbdG91Y2guaWRlbnRpZmllcl0gPSB7eDogdG91Y2gucGFnZVgsIHk6IHRvdWNoLnBhZ2VZfTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICBvcmRlci5wdXNoKHRvdWNoLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUubm90X2NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk92ZXJsYXlUb3VjaEVuZCAoZXZlbnQ6IFRvdWNoRXZlbnQgJiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHZhciB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgIHt0eXBlfSA9IHRvdWNoU3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX1BMVVMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3VjaFN0YXRlLnBsdXNUaW1lcik7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fTUlOVVMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b3VjaFN0YXRlLm1pbnVzVGltZXIpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX0ZJTkdFUlMpIHtcbiAgICAgICAgICAgIGlmICghdG91Y2hTdGF0ZS5ub3RfY2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbk92ZXJsYXlDbGljayhldmVudCBhcyBNb3VzZUV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgICAgIHN0YXJ0cyA9IHRvdWNoU3RhdGUuc3RhcnRzLFxuICAgICAgICAgICAgICAgIG9yZGVyID0gdG91Y2hTdGF0ZS5vcmRlcjtcblxuICAgICAgICAgICAgdmFyIHRvdWNoOiBUb3VjaDtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCxsbj10b3VjaGVzLmxlbmd0aDtpPGxuO2krKykge1xuICAgICAgICAgICAgICAgIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShvcmRlci5pbmRleE9mKHRvdWNoLmlkZW50aWZpZXIpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX1cbiAgICAgICAgICAgIHRvdWNoU3RhdGUudHlwZSA9IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90b3VjaFN0YXRlID0gdG91Y2hTdGF0ZTtcbiAgICB9XG4gICAgX29uT3ZlcmxheVRvdWNoQ2FuY2VsIChldmVudDogVG91Y2hFdmVudCAmIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fb25PdmVybGF5VG91Y2hFbmQoZXZlbnQpO1xuICAgIH1cbiAgICBfb25PdmVybGF5VG91Y2hNb3ZlIChldmVudDogVG91Y2hFdmVudCAmIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlLFxuICAgICAgICAgICAge3R5cGV9ID0gdG91Y2hTdGF0ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fVEhVTUIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VZID0gZXZlbnQucGFnZVkgLSB0b3VjaFN0YXRlLnlTdGFydCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gdGhpcy5fZWxlbWVudHMuem9vbUJHLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZWN0ID0gYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSGVpZ2h0ID0gYmFja2dyb3VuZFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLnpvb20odG91Y2hTdGF0ZS56b29tIC0gcGFnZVkgLyBiYWNrZ3JvdW5kSGVpZ2h0ICogMyk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX0ZJTkdFUlMpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzdGFydHMsIG9yZGVyfSA9IHRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgc3RhcnQxID0gc3RhcnRzW29yZGVyWzBdXSxcbiAgICAgICAgICAgICAgICBzdGFydDIgPSBzdGFydHNbb3JkZXJbMV1dLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC50b3VjaGVzLFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMgPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKSxcbiAgICAgICAgICAgICAgICB7d2lkdGgsIGhlaWdodH0gPSBkaW1lbnNpb25zO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQxOiBUb3VjaCxcbiAgICAgICAgICAgICAgICBjdXJyZW50MjogVG91Y2gsXG4gICAgICAgICAgICAgICAgc3RhcnRYMTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydFkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRZMjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRYMTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRYMjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRZMTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRZMjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRpc3QxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGlzdDI6IG51bWJlcixcbiAgICAgICAgICAgICAgICB0b3VjaDogVG91Y2gsXG4gICAgICAgICAgICAgICAgZGlmZjogbnVtYmVyO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbG49dG91Y2hlcy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgICAgICB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IG9yZGVyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQxID0gdG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IG9yZGVyWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQyID0gdG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydDEpIHtcbiAgICAgICAgICAgICAgICBzdGFydFgxID0gc3RhcnQxLng7XG4gICAgICAgICAgICAgICAgc3RhcnRZMSA9IHN0YXJ0MS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFgxID0gY3VycmVudDEucGFnZVg7XG4gICAgICAgICAgICAgICAgY3VycmVudFkxID0gY3VycmVudDEucGFnZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdG91Y2hTdGF0ZS5ub3RfY2xpY2sgJiYgc3RhcnQxICYmIGN1cnJlbnQxKSB7XG4gICAgICAgICAgICAgICAgZGlzdDEgPSBNYXRoLnNxcnQoKChzdGFydFgxIC0gY3VycmVudFgxKSAqKiAyKSArICgoc3RhcnRZMSAtIGN1cnJlbnRZMSkgKiogMikpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0MSkgPiA3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUubm90X2NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydDEgJiYgc3RhcnQyICYmIGN1cnJlbnQxICYmIGN1cnJlbnQyKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRYMiA9IHN0YXJ0Mi54O1xuICAgICAgICAgICAgICAgIHN0YXJ0WTIgPSBzdGFydDIueTtcbiAgICAgICAgICAgICAgICBjdXJyZW50WDIgPSBjdXJyZW50Mi5wYWdlWDtcbiAgICAgICAgICAgICAgICBjdXJyZW50WTIgPSBjdXJyZW50Mi5wYWdlWTtcblxuICAgICAgICAgICAgICAgIGRpc3QxID0gTWF0aC5zcXJ0KCgoc3RhcnRYMiAtIHN0YXJ0WDEpICoqIDIpICsgKChzdGFydFkyIC0gc3RhcnRZMSkgKiogMikpO1xuICAgICAgICAgICAgICAgIGRpc3QyID0gTWF0aC5zcXJ0KCgoY3VycmVudFgyIC0gY3VycmVudFgxKSAqKiAyKSArICgoY3VycmVudFkyIC0gY3VycmVudFkxKSAqKiAyKSk7XG5cbiAgICAgICAgICAgICAgICBkaWZmID0gZGlzdDIgLSBkaXN0MTtcblxuICAgICAgICAgICAgICAgIHRoaXMuem9vbSh0b3VjaFN0YXRlLnpvb20gKyBkaWZmIC8gTWF0aC5taW4od2lkdGgsaGVpZ2h0KSAqIDYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uT3JpZW50YXRpb25DaGFuZ2UgKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J10sXG4gICAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodH0gPSBkaW1lbnNpb25zO1xuICAgICAgICBpZiAodGhpcy5zaG93ICYmIHRoaXMuX3JlYWR5ICYmIHByZXZpZXcpIHtcbiAgICAgICAgICAgIHByZXZpZXcuc2V0UHJldmlld1NpemUoZGltZW5zaW9ucywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbmVEaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmVEaW1lbnNpb25zLndpZHRoICE9PSB3aWR0aCB8fCBkb25lRGltZW5zaW9ucy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc2V0UHJldmlld1NpemUnLCBlcnIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5fY2VudGVyUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25PdmVybGF5Q2xpY2sgKHtwYWdlWDogeCwgcGFnZVk6IHl9KSB7XG4gICAgICAgIHRoaXMuZm9jdXMoe3gsIHl9KTtcbiAgICB9XG5cbiAgICBfb25SZXZlcnNlQ2FtZXJhQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnN3aXRjaENhbWVyYSgpO1xuICAgIH1cblxuICAgIF9vblpvb21QbHVzTW91c2VEb3duICgpIHtcbiAgICAgICAgaWYgKCh0aGlzLl96b29tICsgMC4xNSkgPD0gdGhpcy5fbWF4Wm9vbSkge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX3pvb20gKyAwLjE1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl9tYXhab29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblpvb21NaW51c01vdXNlRG93biAoKSB7XG4gICAgICAgIGlmICgodGhpcy5fem9vbSAtIDAuMTUpID49IHRoaXMuX21pblpvb20pIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl96b29tIC0gMC4xNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fbWluWm9vbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25UYWtlUGhvdG9UcmFuc2l0aW9uRW5kICgpIHtcbiAgICAgICAgY29uc3Qge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuY2xhc3NMaXN0ICYmIG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtpbmctcGljdHVyZScpKSB7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rha2luZy1waWN0dXJlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25QaG90b092ZXJsYXlCYWNrQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLl9oaWRlUGhvdG9PdmVybGF5KCk7XG4gICAgfVxuXG4gICAgX29uQ2FuY2VsQ2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdykge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcsIHtkZXRhaWw6IFtdfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Vc2VQaG90b3NDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHdpbmRvd1snUHJvbWlzZSddLmFsbCh0aGlzLl9vcGVyYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdkb25lbmVuZW5lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VzZXBob3RvcycsIHtkZXRhaWw6IHRoaXMuX2ltYWdlcy5tYXAoZCA9PiAoe3dpZHRoOiBkLndpZHRoLCBoZWlnaHQ6ZC5oZWlnaHQsIGRhdGE6ZC5kYXRhfSkpfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBfY2FtZXJhOiBNdWx0aUNhbWVyYTtcbiAgICBzdGF0aWMgdG91Y2hUeXBlcyA9IHtcbiAgICAgICAgTk9ORTogMCBhcyAwLFxuICAgICAgICBEUkFHX1pPT01fVEhVTUI6IDEgYXMgMSxcbiAgICAgICAgRFJBR19aT09NX0ZJTkdFUlM6IDIgYXMgMixcbiAgICAgICAgSE9MRF9aT09NX1BMVVM6IDQgYXMgNCxcbiAgICAgICAgSE9MRF9aT09NX01JTlVTOiA4IGFzIDhcbiAgICB9O1xuICAgIHRvdWNoVHlwZXMgPSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzO1xuXG4gICAgc3RhdGljIHNob3cgKHN1Y2Nlc3M6IChpbWFnZXM6IE11bHRpQ2FtZXJhSW1hZ2VbXSkgPT4gYW55LCBjb25maWc6IE11bHRpQ2FtZXJhQ29uZmlnKSB7XG4gICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLl9jYW1lcmE7XG4gICAgICAgIGNvbnN0IGNhbmNlbENCID0gKCkgPT4ge1xuICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgY2FuY2VsQ0IpO1xuICAgICAgICB9LFxuICAgICAgICB1c2VQaG90b3NDQiA9ICgkZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoJGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXNlcGhvdG9zJywgdXNlUGhvdG9zQ0IpO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIGNhbmNlbENCKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VjY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBzdWNjZXNzO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYW1lcmEpIHtcbiAgICAgICAgICAgIGNhbWVyYSA9IHRoaXMuX2NhbWVyYSA9IG5ldyBNdWx0aUNhbWVyYSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEuX2VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBjYW5jZWxDQik7XG4gICAgICAgIGNhbWVyYS5zaG93KGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYSkge1xuICAgICAgICAgICAgdGhpcy5fY2FtZXJhLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgICAgIHRoaXMuX2NhbWVyYS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX2NhbWVyYSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCkge1xuICAgICAgICB0aGlzLl9jYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9jYW1lcmEsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBfcGhvdG9XcmFwcGVyVGVtcGxhdGU6IEhUTUxFbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by1yZW1vdmVcIj4tPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gYDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudDtcbiAgICB9KSgpO1xuXG4gICAgc3RhdGljIF90ZW1wbGF0ZTogSFRNTEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgJHtodG1sfWA7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnRcbiAgICB9KSgpO1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxHQUFHLEdBQUcsOG5WQW9WbEIsQ0FBQzs7QUNuVkssSUFBTSxJQUFJLEdBQUcsd0RBR2QsR0FBRyxxeERBdUNSLENBQUE7OztJQ2dERztRQUFBLGlCQWlEQztRQTVFRCxZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUdqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWNsQixZQUFPLEdBRUg7WUFDQSxTQUFTLEVBQUUsRUFBRTtZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxF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
