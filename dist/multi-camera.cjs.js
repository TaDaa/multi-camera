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

var css = "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg fill='rgba(255,255,255,.9)'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='40' fill='transparent' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath stroke='rgba(255,255,255,.9)' stroke-width='25' fill='rgba(0,0,0,0.4)' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath d='M616.9,659.8c-33.5,28.1-73.9,44.3-116.9,44.3c-92.8,0-169.2-73.9-180.9-158.1h78.1L298,418.3l-95.8,127.6h75.2C289.4,653.1,383.9,745,500,745c53.3,0,105.1-19.3,145.7-54.1l6-5.5l-29.6-29.8L616.9,659.8z'/%3E%3Cpath d='M652.5,354.2C611.1,316.5,557,296,500,296c-53.3,0-105.1,19.3-145.7,54.1l-6,5.2l29.6,29.6l5.2-4.4c33-27.7,74.5-43.4,116.9-43.4c92.8,0,169.1,73.5,180.9,162.8h-78.2l99.1,130.7l96-130.7h-75.3C716.8,449,692.1,390.4,652.5,354.2z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        padding:0.2em 0.5em;\n        transition: opacity 300ms;\n        opacity: 0;\n    }\n    .camera-use-photos.has-photos {\n        opacity: 1;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        color: white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        z-index:1;\n        font-weight:bold;\n        width:100%;\n        height: auto;\n        top: 0.05em;\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";

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
        var image = this._activePhoto, original = (image || { wrapper: undefined }).wrapper, wrapper = this._showingPhotoOverlay !== false ? this._showingPhotoOverlay.wrapper : this._showingPhotoOverlay, rect = original && original.getBoundingClientRect(), elements = this._elements;
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
        var dimensions = this.getScreenDimensions(), cloneImage = this._showingPhotoOverlay;
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
        var result = document.createElement('span');
        result.innerHTML = "\n            " + html + "\n        ";
        return result;
    })();
    return MultiCamera;
}());

exports.MultiCamera = MultiCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FtZXJhLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL211bHRpY2FtZXJhLmNzcy50cyIsIi4uL3NyYy9tdWx0aWNhbWVyYS5odG1sLnRzIiwiLi4vc3JjL211bHRpY2FtZXJhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjc3MgPSBgXG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LXRleHQuYmFjayB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmFsbDtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciAuY2FtZXJhLWluZGljYXRvci10ZXh0IHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItbGluZSxcbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCAuY2FtZXJhLWluZGljYXRvci1saW5lXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsMTUwLDI1NSwwLjcpO1xuICAgICAgICAtd2Via2l0LW1hc2s6bGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTAlLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IHtcbiAgICAgICAgcmlnaHQ6IDdlbTtcbiAgICAgICAgbGVmdDogNWVtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIHRvcDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCxcbiAgICAuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dFxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOi0xZW07XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCAuY2FtZXJhLWluZGljYXRvci1saW5lLFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSAuY2FtZXJhLWluZGljYXRvci1saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgYm90dG9tOjUuNWVtO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCwxNTAsMjU1LDAuNyk7XG4gICAgICAgIC13ZWJraXQtbWFzazpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgM2VtLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTclLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgdG9wOiAwZW07XG4gICAgICAgIGJvdHRvbTogMGVtO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci50b3Age1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIGxlZnQ6IDAuM2VtO1xuICAgICAgICB0b3A6IDBlbTtcbiAgICAgICAgYm90dG9tOiAwZW07XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuXG4gICAgLmNhbWVyYS1vdmVybGF5IHtcbiAgICAgICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS10b29rLXBpY3R1cmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmNhbWVyYS10YWtlLXBob3RvLWJvcmRlciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IC0wLjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICBoZWlnaHQ6My43NWVtO1xuICAgICAgICB3aWR0aDozLjc1ZW07XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMC4zNWVtIHdoaXRlLCAwcHggMHB4IDBweCAwLjRlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgbGluZWFyO1xuICAgIH1cbiAgICAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIGhlaWdodDozLjVlbTtcbiAgICAgICAgd2lkdGg6My41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNzVtcyBsaW5lYXI7XG4gICAgfVxuICAgIC50YWtpbmctcGljdHVyZSAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5jYW1lcmEtcmV2ZXJzZSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMC45NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpdHJhbnNsYXRlKDAsLTVlbSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCclM0YlM0UlM0MhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0lM0UlM0MhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCclM0UlM0NzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDEwMDAgMTAwMCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwMCAxMDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ21ldGFkYXRhJTNFIFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uICUzQy9tZXRhZGF0YSUzRSUzQ2cgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuOSknJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMCwwLDAsMC41KScgc3Ryb2tlLXdpZHRoPSc0MCcgZmlsbD0ndHJhbnNwYXJlbnQnIGQ9J005MTIuMiwyNTVINzU0LjZjLTgxLjktOTEuOS0xMDcuNy0xMjIuNS0xMzkuMi0xMjIuNUgzODkuNmMtMzEuNCwwLTU2LjYsMzAuNi0xMzkuMSwxMjIuNWgtMzMuOHYtNDAuOGgtODYuOFYyNTVIOTUuNWMtNDUsMC04NS41LDMzLjctODUuNSw3OC4zdjQ0OS4yYzAsNDQuNiw0MC41LDg1LDg1LjUsODVoODE2LjdjNDUsMCw3Ny44LTQwLjQsNzcuOC04NVYzMzMuM0M5OTAsMjg4LjcsOTU3LjIsMjU1LDkxMi4yLDI1NXonLyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LC45KScgc3Ryb2tlLXdpZHRoPScyNScgZmlsbD0ncmdiYSgwLDAsMCwwLjQpJyBkPSdNOTEyLjIsMjU1SDc1NC42Yy04MS45LTkxLjktMTA3LjctMTIyLjUtMTM5LjItMTIyLjVIMzg5LjZjLTMxLjQsMC01Ni42LDMwLjYtMTM5LjEsMTIyLjVoLTMzLjh2LTQwLjhoLTg2LjhWMjU1SDk1LjVjLTQ1LDAtODUuNSwzMy43LTg1LjUsNzguM3Y0NDkuMmMwLDQ0LjYsNDAuNSw4NSw4NS41LDg1aDgxNi43YzQ1LDAsNzcuOC00MC40LDc3LjgtODVWMzMzLjNDOTkwLDI4OC43LDk1Ny4yLDI1NSw5MTIuMiwyNTV6Jy8lM0UlM0NwYXRoIGQ9J002MTYuOSw2NTkuOGMtMzMuNSwyOC4xLTczLjksNDQuMy0xMTYuOSw0NC4zYy05Mi44LDAtMTY5LjItNzMuOS0xODAuOS0xNTguMWg3OC4xTDI5OCw0MTguM2wtOTUuOCwxMjcuNmg3NS4yQzI4OS40LDY1My4xLDM4My45LDc0NSw1MDAsNzQ1YzUzLjMsMCwxMDUuMS0xOS4zLDE0NS43LTU0LjFsNi01LjVsLTI5LjYtMjkuOEw2MTYuOSw2NTkuOHonLyUzRSUzQ3BhdGggZD0nTTY1Mi41LDM1NC4yQzYxMS4xLDMxNi41LDU1NywyOTYsNTAwLDI5NmMtNTMuMywwLTEwNS4xLDE5LjMtMTQ1LjcsNTQuMWwtNiw1LjJsMjkuNiwyOS42bDUuMi00LjRjMzMtMjcuNyw3NC41LTQzLjQsMTE2LjktNDMuNGM5Mi44LDAsMTY5LjEsNzMuNSwxODAuOSwxNjIuOGgtNzguMmw5OS4xLDEzMC43bDk2LTEzMC43aC03NS4zQzcxNi44LDQ0OSw2OTIuMSwzOTAuNCw2NTIuNSwzNTQuMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Mi41ZW0gMi41ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1ib3R0b20tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBoZWlnaHQ6IDQuMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xuICAgIH1cbiAgICAuY2FtZXJhLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMHB4IDAuNWVtIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6NWVtO1xuICAgICAgICB3aWR0aDo1ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtdGV4dC1vcHRpb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzowIDAuNWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3Mge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBwYWRkaW5nOjAuMmVtIDAuNWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3MuaGFzLXBob3RvcyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5jYW1lcmEtY2FuY2VsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcbiAgICAgICAgYm90dG9tOiA0LjBlbTtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgLjc1ZW0sIGJsYWNrIC43NWVtLCBibGFjayAyNWVtKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6MzBlbSAzMGVtO1xuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246NTAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1wbHVzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1taW51cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY2FtZXJhLXpvb20tdGh1bWIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwLjE1ZW0gcmdiYSgxMDAsMjU1LDEwMCwwLjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICBib3R0b206IDAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tLXN0cmV0Y2gge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICAgICAgdG9wOiAtMWVtO1xuICAgICAgICByaWdodDogLTFlbTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXMsIG9wYWNpdHkgMzAwbXMsIGxlZnQgMzAwbXMsIGJvdHRvbSAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIuYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgxMDAsMjU1LDEwMCwwLjM1KTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCl0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tcmVtb3ZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogIDBweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtc2hhZG93OiAgMHB4IDBweCAxcHggYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLDIwMCwyMDAsLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAwLjA1ZW07XG4gICAgICAgIHJpZ2h0OiAwLjA1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbmA7XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnLi9tdWx0aWNhbWVyYS5jc3MnO1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG48ZGl2IGNsYXNzPVwiY2FtZXJhLW92ZXJsYXlcIj5cbiAgICA8c3R5bGU+XG4gICAgJHtjc3N9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20gY2FtZXJhLXpvb20tcGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tc3RyZXRjaCBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1wbHVzXCI+KzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIGNhbWVyYS16b29tLXBhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1iYWNrZ3JvdW5kIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1taW51c1wiPi08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLXRodW1iIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXJldmVyc2VcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8tYm9yZGVyIGNhbWVyYS10YWtlLXBob3RvLXBhcnRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8gY2FtZXJhLXRha2UtcGhvdG8tcGFydFwiPjwvZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS1jYW5jZWwgY2FtZXJhLXRleHQtb3B0aW9uXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiA+Q2FuY2VsPC9hPlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS11c2UtcGhvdG9zIGNhbWVyYS10ZXh0LW9wdGlvblwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+VXNlIFBob3RvczwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciB0b3BcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGJvdHRvbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItbGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLXRleHRcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3IgcmlnaHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+UGhvdG9zPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGxlZnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheS10ZXh0IGJhY2tcIj5CYWNrIFRvIENhbWVyYTwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWJvdHRvbS10b29sYmFyXCIgPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG4iLCJcbmltcG9ydCB7aHRtbH0gZnJvbSAnLi9tdWx0aWNhbWVyYS5odG1sJztcbmltcG9ydCB7Y3NzfSBmcm9tICcuL211bHRpY2FtZXJhLmNzcyc7XG5cbmludGVyZmFjZSBNdWx0aUNhbWVyYUNvbmZpZyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDYW1lcmFJbWcge1xuICAgIGRhdGE6IHN0cmluZztcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUGhvdG9FdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcbiAgICBkZXRhaWw6IE11bHRpQ2FtZXJhSW1nW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbEV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuICAgIGRldGFpbDogTXVsdGlDYW1lcmFJbWdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9va1Bob3RvRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG4gICAgZGV0YWlsOiBNdWx0aUNhbWVyYUltZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNhbWVyYUV2ZW50cyB7XG4gICAgdXNlcGhvdG9zOiAgVXNlUGhvdG9FdmVudDtcbiAgICBjYW5jZWw6IENhbmNlbEV2ZW50O1xuICAgIHRvb2twaG90bzogIFRvb2tQaG90b0V2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2FtZXJhSW1hZ2UgZXh0ZW5kcyBNdWx0aUNhbWVyYUltZyB7XG4gICAgd3JhcHBlcj86IEhUTUxFbGVtZW50O1xuICAgIGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICByZW1vdmVkPzogYm9vbGVhbjtcbiAgICB4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhbWVyYUVsZW1lbnRzID1cbiAgICAgICAgJ292ZXJsYXknIHxcbiAgICAgICAgJ3pvb21QbHVzJyB8XG4gICAgICAgICd6b29tTWludXMnIHxcbiAgICAgICAgJ3pvb21UaHVtYicgfFxuICAgICAgICAnem9vbUJHJyB8XG4gICAgICAgICd6b29tQkdXcmFwcGVyJyB8XG4gICAgICAgICdyZXZlcnNlQ2FtZXJhJyB8XG4gICAgICAgICdjYW5jZWwnIHxcbiAgICAgICAgJ3Rha2VQaG90bycgfFxuICAgICAgICAndXNlUGhvdG9zJyB8XG4gICAgICAgICdib3R0b21Ub29sYmFyJyB8XG4gICAgICAgICd0b3BJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdib3R0b21JbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdsZWZ0SW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAncmlnaHRJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdwaG90b092ZXJsYXknIHxcbiAgICAgICAgJ3Bob3RvT3ZlcmxheUJhY2tncm91bmQnIHxcbiAgICAgICAgJ2JhY2snO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlDYW1lcmEge1xuICAgIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBfb3BlcmF0aW9uczogUHJvbWlzZTxhbnk+W107XG4gICAgX2VsZW1lbnRzOiB7W2tleSBpbiBNdWx0aUNhbWVyYUVsZW1lbnRzXTogSFRNTEVsZW1lbnR9O1xuICAgIF9lbVRvUHg6IG51bWJlcjtcbiAgICBfc2hvdzogTXVsdGlDYW1lcmFDb25maWcgfCBib29sZWFuO1xuICAgIF9yZWFkeTogYm9vbGVhbjtcbiAgICBfdGFraW5nUGljdHVyZTogYm9vbGVhbjtcbiAgICBfc2hvd2luZ1Bob3RvT3ZlcmxheTogTXVsdGlDYW1lcmFJbWFnZSB8IGZhbHNlO1xuICAgIF9pbWFnZXM6IE11bHRpQ2FtZXJhSW1hZ2VbXSA9IFtdO1xuICAgIF9hY3RpdmVQaG90bzogTXVsdGlDYW1lcmFJbWFnZTtcbiAgICBfZnJvbnRDYW1lcmE6IGJvb2xlYW47XG4gICAgX21heFpvb206IG51bWJlciA9IDU7XG4gICAgX21pblpvb206IG51bWJlciA9IDE7XG4gICAgX3pvb206IG51bWJlciA9IDE7XG4gICAgX3RvdWNoU3RhdGU6IHtcbiAgICAgICAgdHlwZTogTXVsdGlDYW1lcmFbJ3RvdWNoVHlwZXMnXVtrZXlvZiBNdWx0aUNhbWVyYVsndG91Y2hUeXBlcyddXTtcbiAgICAgICAgem9vbT86IG51bWJlcjtcbiAgICAgICAgeFN0YXJ0PzogbnVtYmVyO1xuICAgICAgICB5U3RhcnQ/OiBudW1iZXI7XG4gICAgICAgIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICAgICAgICBzdGFydEV2ZW50PzogRXZlbnQ7XG4gICAgICAgIHBsdXNUaW1lcj86IGFueTtcbiAgICAgICAgbWludXNUaW1lcj86IGFueTtcbiAgICAgICAgc3RhcnRzPzoge2xlbmd0aDogbnVtYmVyLCBba2V5OiBudW1iZXJdOiB7eDogbnVtYmVyOyB5Om51bWJlcjt9fTtcbiAgICAgICAgb3JkZXI/OiBudW1iZXJbXVxuICAgICAgICBub3RfY2xpY2s/OiBib29sZWFuO1xuICAgIH07XG4gICAgX2V2ZW50czoge1xuICAgICAgICBba2V5IGluIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzXTogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNba2V5XSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpW11cbiAgICB9ID0ge1xuICAgICAgICB1c2VwaG90b3M6IFtdLFxuICAgICAgICBjYW5jZWw6IFtdLFxuICAgICAgICB0b29rcGhvdG86IFtdXG4gICAgfTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIE11bHRpQ2FtZXJhLl9jYW1lcmEgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gKE11bHRpQ2FtZXJhLl90ZW1wbGF0ZSBhcyBIVE1MRWxlbWVudCkuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB7b3ZlcmxheSwgdGFrZVBob3RvLCBiYWNrLCBjYW5jZWwsIHVzZVBob3Rvc30gPSB0aGlzLl9lbGVtZW50cyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGVsZW1lbnQsXG4gICAgICAgICAgICB6b29tUGx1czogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tcGx1cycpLFxuICAgICAgICAgICAgem9vbU1pbnVzOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1taW51cycpLFxuICAgICAgICAgICAgem9vbVRodW1iOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS10aHVtYicpLFxuICAgICAgICAgICAgem9vbUJHOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICB6b29tQkdXcmFwcGVyOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kLXdyYXBwZXInKSxcbiAgICAgICAgICAgIHJldmVyc2VDYW1lcmE6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1yZXZlcnNlJyksXG4gICAgICAgICAgICBjYW5jZWw6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jYW5jZWwnKSxcbiAgICAgICAgICAgIHRha2VQaG90bzogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXRha2UtcGhvdG8nKSxcbiAgICAgICAgICAgIHVzZVBob3RvczogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXVzZS1waG90b3MnKSxcbiAgICAgICAgICAgIGJvdHRvbVRvb2xiYXI6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1ib3R0b20tdG9vbGJhcicpLFxuICAgICAgICAgICAgdG9wSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgYm90dG9tSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgbGVmdEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IubGVmdCAuY2FtZXJhLWluZGljYXRvci10ZXh0JyksXG4gICAgICAgICAgICByaWdodEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IucmlnaHQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8tb3ZlcmxheScpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5QmFja2dyb3VuZDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgYmFjazogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dC5iYWNrJylcbiAgICAgICAgfSxcbiAgICAgICAgZW1UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtVGVzdC5zdHlsZS53aWR0aCA9IGVtVGVzdC5zdHlsZS5oZWlnaHQgPSAnMWVtJztcbiAgICAgICAgZW1UZXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZW1UZXN0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1UZXN0KTtcbiAgICAgICAgdGhpcy5fZW1Ub1B4ID0gZW1UZXN0LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKGVtVGVzdCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3Iob3ZlcmxheSk7XG5cbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5fb25EZXZpY2VSZWFkeSA9IHRoaXMuX29uRGV2aWNlUmVhZHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSA9IHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vbkNhbmNlbENsaWNrKCksIHRydWUpO1xuICAgICAgICB1c2VQaG90b3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblVzZVBob3Rvc0NsaWNrKCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hFbmQoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGhvdG9PdmVybGF5QmFja0NsaWNrKCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoTW92ZShldmVudCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaFN0YXJ0KGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaENhbmNlbChldmVudCksIHRydWUpO1xuICAgICAgICB0YWtlUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMuX29uVGFrZVBob3RvVHJhbnNpdGlvbkVuZCgpKTtcblxuICAgICAgICAvL1RPRE8gY29uc2lkZXIgYWRkIGluIHNob3cgcmVtb3ZlIGV2ZW50bGlzdGVuZXIgaW4gaGlkZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ2RldmljZSddID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93WydkZXZpY2UnXS5jb3Jkb3ZhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLl9vbkRldmljZVJlYWR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uRGV2aWNlUmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXI8QSBleHRlbmRzIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzID0ga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+IChuYW1lOiBBLCBmbjogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNbQV0pID0+ICh2b2lkIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGJvb2xlYW4pKSkge1xuICAgICAgICAodGhpcy5fZXZlbnRzW25hbWVdIGFzIGFueSkucHVzaChmbiBhcyAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkpO1xuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI8QSBleHRlbmRzIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzID0ga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+IChuYW1lOiBBLCBmbjogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNbQV0pID0+ICh2b2lkIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGJvb2xlYW4pKSkge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHNbbmFtZV0sXG4gICAgICAgICAgICBpbmRleCA9IChldmVudHMgYXMgYW55KS5pbmRleE9mKGZuIGFzIChldmVudDogRXZlbnQpID0+IGFueSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudDxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+KGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHNbZXZlbnQudHlwZV07XG4gICAgICAgIGZvciAodmFyIGk9MCxsbj1ldmVudHMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICBldmVudHNbaV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2NyZWVuRGltZW5zaW9ucyAoKSB7XG4gICAgICAgIHZhciB7aGVpZ2h0LCB3aWR0aH0gPSB3aW5kb3cuc2NyZWVuO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3JpZW50YXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocGFyc2VJbnQoYCR7d2luZG93Lm9yaWVudGF0aW9ufWApIC8gOTApID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG4gICAgfVxuXG4gICAgc2hvdyAoY29uZmlnOiBNdWx0aUNhbWVyYUNvbmZpZykge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J10sXG4gICAgICAgICAgICB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xuXG4gICAgICAgIC8vVE9ETyBjaGVjayB0aGlzXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBpZiAodGhpcy5fc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkgfHwgIXByZXZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3cgPSBjb25maWcgfHwge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaG93ID0gdHJ1ZTtcblxuICAgICAgICBwcmV2aWV3LnN0b3BDYW1lcmEoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICBzdGFydENhbWVyYSgpO1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsIGVycik7XG4gICAgICAgICAgICAgICAgc3RhcnRDYW1lcmEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBzdGFydENhbWVyYSAoKSB7XG4gICAgICAgICAgICBwcmV2aWV3LnN0YXJ0Q2FtZXJhKHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiBwcmV2aWV3LkNBTUVSQV9ESVJFQ1RJT04uQkFDSyxcbiAgICAgICAgICAgICAgICAgICAgdG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0YXBQaG90bzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhcEZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld0RyYWc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdGFydENhbWVyYScsIGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICBpZiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fc2hvdykge1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZpZXcuc3RvcENhbWVyYShcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMucGhvdG9PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsIGVycilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0YWtlUGhvdG8gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9va1BpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCk7XG5cbiAgICAgICAgdG9va1BpY3R1cmUuY2xhc3NOYW1lID0gJ2NhbWVyYS10b29rLXBpY3R1cmUnO1xuXG4gICAgICAgIGlmICghdGhpcy5fdGFraW5nUGljdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFraW5nUGljdHVyZSA9IHRydWU7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Rha2luZy1waWN0dXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b29rUGljdHVyZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdGFraW5nUGljdHVyZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRvb2tQaWN0dXJlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0b29rUGljdHVyZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvb2tQaWN0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29rUGljdHVyZS5zdHlsZS5vcGFjaXR5ID0gJzAnKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZCh0b29rUGljdHVyZSk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyB3aW5kb3dbJ1Byb21pc2UnXSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J107XG5cbiAgICAgICAgICAgIHByZXZpZXcudGFrZVBpY3R1cmUoe3dpZHRoLCBoZWlnaHR9LCAoYmFzZTY0OiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiAgTXVsdGlDYW1lcmFJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwke2Jhc2U2NFswXX1gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaG90b1dyYXBwZXIgPSBNdWx0aUNhbWVyYS5fcGhvdG9XcmFwcGVyVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBob3RvRWxlbWVudCA9IHBob3RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCA9IHBob3RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHtib3R0b21Ub29sYmFyfSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRvb2tQaG90b0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b29rcGhvdG8nLCB7ZGV0YWlsOiB7ZGF0YTogaW1hZ2UuZGF0YSwgd2lkdGg6aW1hZ2Uud2lkdGgsIGhlaWdodDppbWFnZS5oZWlnaHR9fSk7XG5cbiAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2UuZGF0YX1cIilgO1xuICAgICAgICAgICAgICAgIGJvdHRvbVRvb2xiYXIuaW5zZXJ0QmVmb3JlKHBob3RvV3JhcHBlciwgYm90dG9tVG9vbGJhci5jaGlsZE5vZGVzWzBdKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpdHJhbnNsYXRlKDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcGhvdG9XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCRldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaG9vc2VBY3RpdmVQaG90byhpbWFnZSwgJGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRvb2tQaG90b0V2ZW50KTtcblxuICAgICAgICAgICAgICAgIGltYWdlLndyYXBwZXIgPSBwaG90b1dyYXBwZXI7XG4gICAgICAgICAgICAgICAgaW1hZ2UuZWxlbWVudCA9IHBob3RvRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMudW5zaGlmdChpbWFnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wZXJhdGlvbnMuaW5kZXhPZihwcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZW1vdmVJbWFnZSAoaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UpIHtcbiAgICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faW1hZ2VzLmluZGV4T2YoaW1hZ2UpLFxuICAgICAgICAgICAge3dyYXBwZXJ9ID0gaW1hZ2U7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2ltYWdlcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGAke3dyYXBwZXIuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCdzY2FsZSgxKScpWzBdfXNjYWxlKDApYDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMuYm90dG9tVG9vbGJhci5yZW1vdmVDaGlsZCh3cmFwcGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZG9MYXlvdXQoKTtcblxuICAgICAgICBpZiAoaW1hZ2UgPT09IHRoaXMuX2FjdGl2ZVBob3RvKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5faW1hZ2VzW2luZGV4XSB8fCB0aGlzLl9pbWFnZXNbdGhpcy5faW1hZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaG9vc2VBY3RpdmVQaG90byhuZXh0LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaG9vc2VBY3RpdmVQaG90byAoaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UsIGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0WydjbGFzc0xpc3QnXSAmJiBldmVudC50YXJnZXRbJ2NsYXNzTGlzdCddLmNvbnRhaW5zKCdjYW1lcmEtcGhvdG8tcmVtb3ZlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlUGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVBob3RvLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hY3RpdmVQaG90byA9IGltYWdlO1xuICAgICAgICB0aGlzLl9zaG93UGhvdG9PdmVybGF5KCk7XG4gICAgICAgIGltYWdlLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgX2hpZGVQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuX2FjdGl2ZVBob3RvLFxuICAgICAgICAgICAge3dyYXBwZXI6IG9yaWdpbmFsfSA9IGltYWdlIHx8IHt3cmFwcGVyOiB1bmRlZmluZWR9LFxuICAgICAgICAgICAgd3JhcHBlciA9IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkgIT09IGZhbHNlID8gdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheS53cmFwcGVyIDogdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSxcbiAgICAgICAgICAgIHJlY3QgPSBvcmlnaW5hbCAmJiBvcmlnaW5hbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0ICYge3g6IG51bWJlcn0sXG4gICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzO1xuXG4gICAgICAgIGlmICghd3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkgPSBmYWxzZTtcblxuICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlID09PSBlbGVtZW50cy5waG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBob3RvID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGAke3JlY3QueCAvIHRoaXMuX2VtVG9QeH1lbWA7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcwZW0nO1xuICAgICAgICAgICAgcGhvdG8uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIGlmIChpbWFnZS5yZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDBlbSwwZW0pc2NhbGUoMCknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93UGhvdG9PdmVybGF5ICgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSAgdGhpcy5fYWN0aXZlUGhvdG8sXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodCwgd3JhcHBlcjogb3JpZ2luYWwsIGRhdGF9ID0gaW1hZ2UsXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7d3JhcHBlcn0gPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0ge2RhdGEsIHdpZHRoLCBoZWlnaHQsIHdyYXBwZXI6IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudH0sXG4gICAgICAgICAgICBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgcmVtb3ZlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpXG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMGVtLDBlbSlzY2FsZSgxKSdcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7cmVjdC54L3RoaXMuX2VtVG9QeH1lbWBcblxuICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocmVtb3ZlKVxuXG4gICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBwaG90by5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5fY2VudGVyUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jZW50ZXJQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICBjbG9uZUltYWdlID0gdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheTtcbiAgICAgICAgdmFyIHt3aWR0aCwgaGVpZ2h0LCB3cmFwcGVyfSA9IGNsb25lSW1hZ2UgfHwge3dpZHRoOiB1bmRlZmluZWQsIGhlaWdodDogdW5kZWZpbmVkLCB3cmFwcGVyOiB1bmRlZmluZWR9O1xuICAgICAgICB2YXIgc2NhbGU6IG51bWJlcjsgXG5cbiAgICAgICAgaWYgKHdpZHRoID4gZGltZW5zaW9ucy53aWR0aCkge1xuICAgICAgICAgICAgc2NhbGUgPSBkaW1lbnNpb25zLndpZHRoIC8gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA+IGRpbWVuc2lvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXNjYWxlIHx8ICgoZGltZW5zaW9ucy5oZWlnaHQgLyBoZWlnaHQpID4gc2NhbGUpKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSBkaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ggPSAoZGltZW5zaW9ucy53aWR0aCAtIHdpZHRoICogc2NhbGUpIC8gMiAvIHRoaXMuX2VtVG9QeCxcbiAgICAgICAgICAgIGN5ID0gKGRpbWVuc2lvbnMuaGVpZ2h0IC0gaGVpZ2h0ICogc2NhbGUpIC8gMiAvIHRoaXMuX2VtVG9QeDtcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCpzY2FsZX1weGA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aCpzY2FsZX1weGA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGAke2N4fWVtYDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSBgJHtjeX1lbWA7XG4gICAgfVxuXG4gICAgZm9jdXMgKHt4LCB5fToge3g6bnVtYmVyLCB5Om51bWJlcn0pIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddXG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTXVsdGlDYW1lcmEuZm9jdXMoJHtbeCx5XX0pYCk7XG4gICAgICAgICAgICBwcmV2aWV3LnRhcFRvRm9jdXMoeCwgeSwgKCkgPT4ge30sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnRhcFRvRm9jdXMnLCBlcnIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzd2l0Y2hDYW1lcmEgKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J107XG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSAmJiBwcmV2aWV3KSB7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyB3aW5kb3dbJ1Byb21pc2UnXSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldy5zd2l0Y2hDYW1lcmEoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJvbnRDYW1lcmEgPSAhdGhpcy5fZnJvbnRDYW1lcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3dpdGNoQ2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wZXJhdGlvbnMuaW5kZXhPZihwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB6b29tICh6b29tOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddO1xuXG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkgfHwgIXByZXZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtfbWF4Wm9vbSwgX21pblpvb219ID0gdGhpcyxcbiAgICAgICAgICAgIHt6b29tQkcsIHpvb21CR1dyYXBwZXIsIHpvb21UaHVtYn0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZWN0ID0gem9vbUJHLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgYmFja2dyb3VuZEhlaWdodCA9IGJhY2tncm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICBpZiAoem9vbSAgPCBfbWluWm9vbSkge1xuICAgICAgICAgICAgem9vbSA9IF9taW5ab29tO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh6b29tID4gX21heFpvb20pIHtcbiAgICAgICAgICAgIHpvb20gPSBfbWF4Wm9vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3pvb20gPSB6b29tO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9ICgoem9vbSAtIDEpIC8gKHRoaXMuX21heFpvb20gLSAxKSksXG4gICAgICAgICAgICB0b3AgPSBkaXYgKiBiYWNrZ3JvdW5kSGVpZ2h0O1xuICAgICAgICB6b29tVGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstdG9wfXB4KXRyYW5zbGF0ZSgtNTAlLCA1MCUpYDtcbiAgICAgICAgKHpvb21CR1dyYXBwZXIuc3R5bGUgYXMgYW55KS53ZWJraXRNYXNrUG9zaXRpb249YDUwJSAkeyhkaXYqMTAwKX0lYDtcblxuICAgICAgICBwcmV2aWV3LnNldFpvb20oem9vbSwgKCkgPT4ge30sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnNldFpvb20nLCBlcnIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2RvTGF5b3V0ICgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5faW1hZ2VzLFxuICAgICAgICAgICAgd2lkdGggPSAzLjUsXG4gICAgICAgICAgICBsbiA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICB1c2VQaG90b3MgPSB0aGlzLl9lbGVtZW50cy51c2VQaG90b3M7XG4gICAgICAgIFxuICAgICAgICB2YXIgaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGZvciAoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgIGltYWdlLnggPSBpICogd2lkdGg7XG4gICAgICAgICAgICBpbWFnZS53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHsoaSp3aWR0aCl9ZW0sIDBlbSlzY2FsZSgxKWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG4pIHtcbiAgICAgICAgICAgIGlmICghdXNlUGhvdG9zLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXBob3RvcycpKSB7XG4gICAgICAgICAgICAgICB1c2VQaG90b3MuY2xhc3NMaXN0LmFkZCgnaGFzLXBob3RvcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVzZVBob3Rvcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1waG90b3MnKSkge1xuICAgICAgICAgICB1c2VQaG90b3MuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXBob3RvcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3Jlc2V0ICgpIHtcbiAgICAgICAgY29uc3Qge2JvdHRvbVRvb2xiYXIsIHpvb21UaHVtYiwgem9vbUJHV3JhcHBlcn0gPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBib3R0b21Ub29sYmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB6b29tVGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMHB4KXRyYW5zbGF0ZSgtNTAlLCA1MCUpYDtcbiAgICAgICAgKHpvb21CR1dyYXBwZXIuc3R5bGUgYXMgYW55KS53ZWJraXRNYXNrUG9zaXRpb249YDUwJSAwJWA7XG5cbiAgICAgICAgdGhpcy5faW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuX3RvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgdGhpcy5fZnJvbnRDYW1lcmEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fem9vbSA9IDE7XG4gICAgICAgIHRoaXMuX21pblpvb20gPSAxO1xuICAgICAgICB0aGlzLl9tYXhab29tID0gNTtcbiAgICB9XG5cbiAgICBfb25EZXZpY2VSZWFkeSAoKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSB0aGlzLl9zaG93O1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93KHNob3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy56b29tKHRoaXMuX3pvb20pO1xuICAgICAgICB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlKCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5fb25EZXZpY2VSZWFkeSk7XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheVRvdWNoU3RhcnQgKGV2ZW50OiBUb3VjaEV2ZW50ICYge3BhZ2VYOiBudW1iZXIsIHBhZ2VZOiBudW1iZXJ9KSB7XG4gICAgICAgIGNvbnN0IHt6b29tUGx1cywgem9vbU1pbnVzLCByZXZlcnNlQ2FtZXJhLCBvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gZXZlbnQudGFyZ2V0WydjbGFzc0xpc3QnXSB8fCB7Y29udGFpbnM6ICgpID0+IGZhbHNlfSxcbiAgICAgICAgICAgIG51bV90b3VjaGVzID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG4gICAgICAgIHZhciB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgIHBsdXNUaW1lcjogKCkgPT4gYW55LFxuICAgICAgICAgICAgbWludXNUaW1lcjogKCkgPT4gYW55O1xuXG4gICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2NhbWVyYS16b29tLXBhcnQnKSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9USFVNQixcbiAgICAgICAgICAgICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgICAgICAgICAgIHhTdGFydDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICAgICAgeVN0YXJ0OiBldmVudC5wYWdlWSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICBzdGFydEV2ZW50OiBldmVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHpvb21QbHVzICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9vblpvb21QbHVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX1BMVVMsXG4gICAgICAgICAgICAgICAgcGx1c1RpbWVyOiBzZXRUaW1lb3V0KHBsdXNUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25ab29tUGx1c01vdXNlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnBsdXNUaW1lciA9IHNldFRpbWVvdXQocGx1c1RpbWVyLCAxMDApXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHpvb21NaW51cyAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fb25ab29tTWludXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fTUlOVVMsXG4gICAgICAgICAgICAgICAgbWludXNUaW1lcjogc2V0VGltZW91dChtaW51c1RpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblpvb21NaW51c01vdXNlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm1pbnVzVGltZXIgPSBzZXRUaW1lb3V0KG1pbnVzVGltZXIsIDEwMClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSByZXZlcnNlQ2FtZXJhICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaENhbWVyYSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygnY2FtZXJhLXRha2UtcGhvdG8tcGFydCcpICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRha2VQaG90bygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZS50eXBlID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUztcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgICAgb3JkZXI6IE11bHRpQ2FtZXJhWydfdG91Y2hTdGF0ZSddWydvcmRlciddLFxuICAgICAgICAgICAgICAgIHN0YXJ0czogTXVsdGlDYW1lcmFbJ190b3VjaFN0YXRlJ11bJ3N0YXJ0cyddLFxuICAgICAgICAgICAgICAgIHRvdWNoOiBUb3VjaDtcbiAgICAgICAgICAgIGlmICghdG91Y2hTdGF0ZS5zdGFydHMpIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnN0YXJ0cyA9IHtsZW5ndGg6IDB9O1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUub3JkZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnpvb20gPSB0aGlzLl96b29tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRzID0gdG91Y2hTdGF0ZS5zdGFydHM7XG4gICAgICAgICAgICBvcmRlciA9IHRvdWNoU3RhdGUub3JkZXI7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbG49dG91Y2hlcy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgICAgICB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydHNbdG91Y2guaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdID0ge3g6IHRvdWNoLnBhZ2VYLCB5OiB0b3VjaC5wYWdlWX07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0cy5sZW5ndGgrKztcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIucHVzaCh0b3VjaC5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm5vdF9jbGljayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25PdmVybGF5VG91Y2hFbmQgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICB7dHlwZX0gPSB0b3VjaFN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9QTFVTKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hTdGF0ZS5wbHVzVGltZXIpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX01JTlVTKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hTdGF0ZS5taW51c1RpbWVyKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9GSU5HRVJTKSB7XG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUubm90X2NsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25PdmVybGF5Q2xpY2soZXZlbnQgYXMgTW91c2VFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgICAgICBzdGFydHMgPSB0b3VjaFN0YXRlLnN0YXJ0cyxcbiAgICAgICAgICAgICAgICBvcmRlciA9IHRvdWNoU3RhdGUub3JkZXI7XG5cbiAgICAgICAgICAgIHZhciB0b3VjaDogVG91Y2g7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbG49dG91Y2hlcy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgICAgICB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXSkge1xuICAgICAgICAgICAgICAgICAgICBvcmRlci5zcGxpY2Uob3JkZXIuaW5kZXhPZih0b3VjaC5pZGVudGlmaWVyKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGFydHNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0cy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9XG4gICAgICAgICAgICB0b3VjaFN0YXRlLnR5cGUgPSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdG91Y2hTdGF0ZSA9IHRvdWNoU3RhdGU7XG4gICAgfVxuICAgIF9vbk92ZXJsYXlUb3VjaENhbmNlbCAoZXZlbnQ6IFRvdWNoRXZlbnQgJiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuX29uT3ZlcmxheVRvdWNoRW5kKGV2ZW50KTtcbiAgICB9XG4gICAgX29uT3ZlcmxheVRvdWNoTW92ZSAoZXZlbnQ6IFRvdWNoRXZlbnQgJiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHZhciB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgIHt0eXBlfSA9IHRvdWNoU3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX1RIVU1CKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IGV2ZW50LnBhZ2VZIC0gdG91Y2hTdGF0ZS55U3RhcnQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IHRoaXMuX2VsZW1lbnRzLnpvb21CRyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVjdCA9IGJhY2tncm91bmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEhlaWdodCA9IGJhY2tncm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy56b29tKHRvdWNoU3RhdGUuem9vbSAtIHBhZ2VZIC8gYmFja2dyb3VuZEhlaWdodCAqIDMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9GSU5HRVJTKSB7XG4gICAgICAgICAgICBjb25zdCB7c3RhcnRzLCBvcmRlcn0gPSB0b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0MSA9IHN0YXJ0c1tvcmRlclswXV0sXG4gICAgICAgICAgICAgICAgc3RhcnQyID0gc3RhcnRzW29yZGVyWzFdXSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyxcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gZGltZW5zaW9ucztcbiAgICAgICAgICAgIHZhciBjdXJyZW50MTogVG91Y2gsXG4gICAgICAgICAgICAgICAgY3VycmVudDI6IFRvdWNoLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydFgyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRZMTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WDI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WTI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBkaXN0MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRpc3QyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgdG91Y2g6IFRvdWNoLFxuICAgICAgICAgICAgICAgIGRpZmY6IG51bWJlcjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBvcmRlclswXSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50MSA9IHRvdWNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBvcmRlclsxXSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50MiA9IHRvdWNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnQxKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRYMSA9IHN0YXJ0MS54O1xuICAgICAgICAgICAgICAgIHN0YXJ0WTEgPSBzdGFydDEueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50MSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRYMSA9IGN1cnJlbnQxLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRZMSA9IGN1cnJlbnQxLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUubm90X2NsaWNrICYmIHN0YXJ0MSAmJiBjdXJyZW50MSkge1xuICAgICAgICAgICAgICAgIGRpc3QxID0gTWF0aC5zcXJ0KCgoc3RhcnRYMSAtIGN1cnJlbnRYMSkgKiogMikgKyAoKHN0YXJ0WTEgLSBjdXJyZW50WTEpICoqIDIpKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdDEpID4gNykge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm5vdF9jbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnQxICYmIHN0YXJ0MiAmJiBjdXJyZW50MSAmJiBjdXJyZW50Mikge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDIgPSBzdGFydDIueDtcbiAgICAgICAgICAgICAgICBzdGFydFkyID0gc3RhcnQyLnk7XG4gICAgICAgICAgICAgICAgY3VycmVudFgyID0gY3VycmVudDIucGFnZVg7XG4gICAgICAgICAgICAgICAgY3VycmVudFkyID0gY3VycmVudDIucGFnZVk7XG5cbiAgICAgICAgICAgICAgICBkaXN0MSA9IE1hdGguc3FydCgoKHN0YXJ0WDIgLSBzdGFydFgxKSAqKiAyKSArICgoc3RhcnRZMiAtIHN0YXJ0WTEpICoqIDIpKTtcbiAgICAgICAgICAgICAgICBkaXN0MiA9IE1hdGguc3FydCgoKGN1cnJlbnRYMiAtIGN1cnJlbnRYMSkgKiogMikgKyAoKGN1cnJlbnRZMiAtIGN1cnJlbnRZMSkgKiogMikpO1xuXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpc3QyIC0gZGlzdDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpvb20odG91Y2hTdGF0ZS56b29tICsgZGlmZiAvIE1hdGgubWluKHdpZHRoLGhlaWdodCkgKiA2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk9yaWVudGF0aW9uQ2hhbmdlICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddLFxuICAgICAgICAgICAgZGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gZGltZW5zaW9ucztcbiAgICAgICAgaWYgKHRoaXMuc2hvdyAmJiB0aGlzLl9yZWFkeSAmJiBwcmV2aWV3KSB7XG4gICAgICAgICAgICBwcmV2aWV3LnNldFByZXZpZXdTaXplKGRpbWVuc2lvbnMsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb25lRGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgIGlmIChkb25lRGltZW5zaW9ucy53aWR0aCAhPT0gd2lkdGggfHwgZG9uZURpbWVuc2lvbnMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnNldFByZXZpZXdTaXplJywgZXJyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBob3RvT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheUNsaWNrICh7cGFnZVg6IHgsIHBhZ2VZOiB5fSkge1xuICAgICAgICB0aGlzLmZvY3VzKHt4LCB5fSk7XG4gICAgfVxuXG4gICAgX29uUmV2ZXJzZUNhbWVyYUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDYW1lcmEoKTtcbiAgICB9XG5cbiAgICBfb25ab29tUGx1c01vdXNlRG93biAoKSB7XG4gICAgICAgIGlmICgodGhpcy5fem9vbSArIDAuMTUpIDw9IHRoaXMuX21heFpvb20pIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl96b29tICsgMC4xNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fbWF4Wm9vbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25ab29tTWludXNNb3VzZURvd24gKCkge1xuICAgICAgICBpZiAoKHRoaXMuX3pvb20gLSAwLjE1KSA+PSB0aGlzLl9taW5ab29tKSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fem9vbSAtIDAuMTUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX21pblpvb20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVGFrZVBob3RvVHJhbnNpdGlvbkVuZCAoKSB7XG4gICAgICAgIGNvbnN0IHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmNsYXNzTGlzdCAmJiBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygndGFraW5nLXBpY3R1cmUnKSkge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd0YWtpbmctcGljdHVyZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uUGhvdG9PdmVybGF5QmFja0NsaWNrICgpIHtcbiAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbENsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnLCB7ZGV0YWlsOiBbXX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVXNlUGhvdG9zQ2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdykge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZG9uZW5lbmVuZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1c2VwaG90b3MnLCB7ZGV0YWlsOiB0aGlzLl9pbWFnZXMubWFwKGQgPT4gKHt3aWR0aDogZC53aWR0aCwgaGVpZ2h0OmQuaGVpZ2h0LCBkYXRhOmQuZGF0YX0pKX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgX2NhbWVyYTogTXVsdGlDYW1lcmE7XG4gICAgc3RhdGljIHRvdWNoVHlwZXMgPSB7XG4gICAgICAgIE5PTkU6IDAgYXMgMCxcbiAgICAgICAgRFJBR19aT09NX1RIVU1COiAxIGFzIDEsXG4gICAgICAgIERSQUdfWk9PTV9GSU5HRVJTOiAyIGFzIDIsXG4gICAgICAgIEhPTERfWk9PTV9QTFVTOiA0IGFzIDQsXG4gICAgICAgIEhPTERfWk9PTV9NSU5VUzogOCBhcyA4XG4gICAgfTtcbiAgICB0b3VjaFR5cGVzID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcztcblxuICAgIHN0YXRpYyBzaG93IChzdWNjZXNzOiAoaW1hZ2VzOiBNdWx0aUNhbWVyYUltYWdlW10pID0+IGFueSwgY29uZmlnOiBNdWx0aUNhbWVyYUNvbmZpZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdzdGF0aWNzaG93Li4uJyk7XG4gICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLl9jYW1lcmE7XG4gICAgICAgIGNvbnN0IGNhbmNlbENCID0gKCkgPT4ge1xuICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgY2FuY2VsQ0IpO1xuICAgICAgICB9LFxuICAgICAgICB1c2VQaG90b3NDQiA9ICgkZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpbiB1c2UgcGhvdG9zJyk7XG4gICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoJGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXNlcGhvdG9zJywgdXNlUGhvdG9zQ0IpO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIGNhbmNlbENCKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VjY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBzdWNjZXNzO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYW1lcmEpIHtcbiAgICAgICAgICAgIGNhbWVyYSA9IHRoaXMuX2NhbWVyYSA9IG5ldyBNdWx0aUNhbWVyYSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEuX2VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBjYW5jZWxDQik7XG4gICAgICAgIGNhbWVyYS5zaG93KGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYSkge1xuICAgICAgICAgICAgdGhpcy5fY2FtZXJhLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgICAgIHRoaXMuX2NhbWVyYS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX2NhbWVyYSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCkge1xuICAgICAgICB0aGlzLl9jYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9jYW1lcmEsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBfcGhvdG9XcmFwcGVyVGVtcGxhdGU6IEhUTUxFbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by1yZW1vdmVcIj4tPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gYDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudDtcbiAgICB9KSgpO1xuXG4gICAgc3RhdGljIF90ZW1wbGF0ZTogSFRNTEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAke2h0bWx9XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiByZXN1bHQgYXMgSFRNTEVsZW1lbnRcbiAgICB9KSgpO1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxHQUFHLEdBQUcsNHBWQXFWbEIsQ0FBQzs7QUNwVkssSUFBTSxJQUFJLEdBQUcsd0RBR2QsR0FBRyxxeERBdUNSLENBQUE7OztJQ2tERztRQUFBLGlCQTBEQztRQXJGRCxZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUdqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWNsQixZQUFPLEdBRUg7WUFDQSxTQUFTLEVBQUUsRUFBRTtZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQXd4QkYsZUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFyeEJoQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUUzQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFJLFdBQVcsQ0FBQyxTQUF5QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQWdCLENBQUM7UUFDaEcsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1CTCxFQW5CTSxvQkFBTyxFQUFFLHdCQUFTLEVBQUUsY0FBSSxFQUFFLGtCQUFNLEVBQUUsd0JBQVMsRUFvQmxELE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDbkMsTUFB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
