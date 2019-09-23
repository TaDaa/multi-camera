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

var css = "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px blue;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg fill='rgba(255,255,255,.9)'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='40' fill='transparent' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath stroke='rgba(255,255,255,.9)' stroke-width='25' fill='rgba(0,0,0,0.4)' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath d='M616.9,659.8c-33.5,28.1-73.9,44.3-116.9,44.3c-92.8,0-169.2-73.9-180.9-158.1h78.1L298,418.3l-95.8,127.6h75.2C289.4,653.1,383.9,745,500,745c53.3,0,105.1-19.3,145.7-54.1l6-5.5l-29.6-29.8L616.9,659.8z'/%3E%3Cpath d='M652.5,354.2C611.1,316.5,557,296,500,296c-53.3,0-105.1,19.3-145.7,54.1l-6,5.2l29.6,29.6l5.2-4.4c33-27.7,74.5-43.4,116.9-43.4c92.8,0,169.1,73.5,180.9,162.8h-78.2l99.1,130.7l96-130.7h-75.3C716.8,449,692.1,390.4,652.5,354.2z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px rgba(100,255,100,0.7);\n        padding:0.2em 0.5em;\n        transition: opacity 300ms;\n        opacity: 0;\n    }\n    .camera-use-photos.has-photos {\n        opacity: 1;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px red;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        color: white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        z-index:1;\n        font-weight:bold;\n        width:100%;\n        height: auto;\n        top: 0.05em;\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FtZXJhLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL211bHRpY2FtZXJhLmNzcy50cyIsIi4uL3NyYy9tdWx0aWNhbWVyYS5odG1sLnRzIiwiLi4vc3JjL211bHRpY2FtZXJhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjc3MgPSBgXG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LXRleHQuYmFjayB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206c29saWQgMnB4IGJsdWU7XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmFsbDtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciAuY2FtZXJhLWluZGljYXRvci10ZXh0IHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItbGluZSxcbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCAuY2FtZXJhLWluZGljYXRvci1saW5lXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsMTUwLDI1NSwwLjcpO1xuICAgICAgICAtd2Via2l0LW1hc2s6bGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTAlLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IHtcbiAgICAgICAgcmlnaHQ6IDdlbTtcbiAgICAgICAgbGVmdDogNWVtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIHRvcDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCxcbiAgICAuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dFxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOi0xZW07XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCAuY2FtZXJhLWluZGljYXRvci1saW5lLFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSAuY2FtZXJhLWluZGljYXRvci1saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgYm90dG9tOjUuNWVtO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCwxNTAsMjU1LDAuNyk7XG4gICAgICAgIC13ZWJraXQtbWFzazpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgM2VtLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTclLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgdG9wOiAwZW07XG4gICAgICAgIGJvdHRvbTogMGVtO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci50b3Age1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIGxlZnQ6IDAuM2VtO1xuICAgICAgICB0b3A6IDBlbTtcbiAgICAgICAgYm90dG9tOiAwZW07XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuXG4gICAgLmNhbWVyYS1vdmVybGF5IHtcbiAgICAgICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS10b29rLXBpY3R1cmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmNhbWVyYS10YWtlLXBob3RvLWJvcmRlciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IC0wLjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICBoZWlnaHQ6My43NWVtO1xuICAgICAgICB3aWR0aDozLjc1ZW07XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMC4zNWVtIHdoaXRlLCAwcHggMHB4IDBweCAwLjRlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgbGluZWFyO1xuICAgIH1cbiAgICAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIGhlaWdodDozLjVlbTtcbiAgICAgICAgd2lkdGg6My41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNzVtcyBsaW5lYXI7XG4gICAgfVxuICAgIC50YWtpbmctcGljdHVyZSAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5jYW1lcmEtcmV2ZXJzZSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMC45NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpdHJhbnNsYXRlKDAsLTVlbSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCclM0YlM0UlM0MhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0lM0UlM0MhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCclM0UlM0NzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDEwMDAgMTAwMCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwMCAxMDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ21ldGFkYXRhJTNFIFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uICUzQy9tZXRhZGF0YSUzRSUzQ2cgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuOSknJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMCwwLDAsMC41KScgc3Ryb2tlLXdpZHRoPSc0MCcgZmlsbD0ndHJhbnNwYXJlbnQnIGQ9J005MTIuMiwyNTVINzU0LjZjLTgxLjktOTEuOS0xMDcuNy0xMjIuNS0xMzkuMi0xMjIuNUgzODkuNmMtMzEuNCwwLTU2LjYsMzAuNi0xMzkuMSwxMjIuNWgtMzMuOHYtNDAuOGgtODYuOFYyNTVIOTUuNWMtNDUsMC04NS41LDMzLjctODUuNSw3OC4zdjQ0OS4yYzAsNDQuNiw0MC41LDg1LDg1LjUsODVoODE2LjdjNDUsMCw3Ny44LTQwLjQsNzcuOC04NVYzMzMuM0M5OTAsMjg4LjcsOTU3LjIsMjU1LDkxMi4yLDI1NXonLyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LC45KScgc3Ryb2tlLXdpZHRoPScyNScgZmlsbD0ncmdiYSgwLDAsMCwwLjQpJyBkPSdNOTEyLjIsMjU1SDc1NC42Yy04MS45LTkxLjktMTA3LjctMTIyLjUtMTM5LjItMTIyLjVIMzg5LjZjLTMxLjQsMC01Ni42LDMwLjYtMTM5LjEsMTIyLjVoLTMzLjh2LTQwLjhoLTg2LjhWMjU1SDk1LjVjLTQ1LDAtODUuNSwzMy43LTg1LjUsNzguM3Y0NDkuMmMwLDQ0LjYsNDAuNSw4NSw4NS41LDg1aDgxNi43YzQ1LDAsNzcuOC00MC40LDc3LjgtODVWMzMzLjNDOTkwLDI4OC43LDk1Ny4yLDI1NSw5MTIuMiwyNTV6Jy8lM0UlM0NwYXRoIGQ9J002MTYuOSw2NTkuOGMtMzMuNSwyOC4xLTczLjksNDQuMy0xMTYuOSw0NC4zYy05Mi44LDAtMTY5LjItNzMuOS0xODAuOS0xNTguMWg3OC4xTDI5OCw0MTguM2wtOTUuOCwxMjcuNmg3NS4yQzI4OS40LDY1My4xLDM4My45LDc0NSw1MDAsNzQ1YzUzLjMsMCwxMDUuMS0xOS4zLDE0NS43LTU0LjFsNi01LjVsLTI5LjYtMjkuOEw2MTYuOSw2NTkuOHonLyUzRSUzQ3BhdGggZD0nTTY1Mi41LDM1NC4yQzYxMS4xLDMxNi41LDU1NywyOTYsNTAwLDI5NmMtNTMuMywwLTEwNS4xLDE5LjMtMTQ1LjcsNTQuMWwtNiw1LjJsMjkuNiwyOS42bDUuMi00LjRjMzMtMjcuNyw3NC41LTQzLjQsMTE2LjktNDMuNGM5Mi44LDAsMTY5LjEsNzMuNSwxODAuOSwxNjIuOGgtNzguMmw5OS4xLDEzMC43bDk2LTEzMC43aC03NS4zQzcxNi44LDQ0OSw2OTIuMSwzOTAuNCw2NTIuNSwzNTQuMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Mi41ZW0gMi41ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1ib3R0b20tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBoZWlnaHQ6IDQuMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xuICAgIH1cbiAgICAuY2FtZXJhLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMHB4IDAuNWVtIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6NWVtO1xuICAgICAgICB3aWR0aDo1ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtdGV4dC1vcHRpb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzowIDAuNWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3Mge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBib3JkZXItYm90dG9tOnNvbGlkIDJweCByZ2JhKDEwMCwyNTUsMTAwLDAuNyk7XG4gICAgICAgIHBhZGRpbmc6MC4yZW0gMC41ZW07XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5jYW1lcmEtdXNlLXBob3Rvcy5oYXMtcGhvdG9zIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmNhbWVyYS1jYW5jZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDAuM2VtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBib3JkZXItYm90dG9tOnNvbGlkIDJweCByZWQ7XG4gICAgICAgIHBhZGRpbmc6MC4yZW0gMC41ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDJlbTtcbiAgICAgICAgaGVpZ2h0OiAxNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tLWJhY2tncm91bmQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDAuNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIC13ZWJraXQtbWFzazogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IC43NWVtLCBibGFjayAuNzVlbSwgYmxhY2sgMjVlbSk7XG4gICAgICAgIC13ZWJraXQtbWFzay1zaXplOjMwZW0gMzBlbTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOjUwJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tcGx1cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgdGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tbWludXMge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgfVxuXG4gICAgLmNhbWVyYS16b29tLXRodW1iIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMC4xNWVtIHJnYmEoMTAwLDI1NSwxMDAsMC43KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1zdHJldGNoIHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0xZW07XG4gICAgICAgIHRvcDogLTFlbTtcbiAgICAgICAgcmlnaHQ6IC0xZW07XG4gICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by13cmFwcGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMGVtLDBlbSlzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCB3aWR0aCAzMDBtcywgaGVpZ2h0IDMwMG1zLCBvcGFjaXR5IDMwMG1zLCBsZWZ0IDMwMG1zLCBib3R0b20gMzAwbXM7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMy41ZW07XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by13cmFwcGVyLmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMTAwLDI1NSwxMDAsMC4zNSk7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCBvcGFjaXR5IDMwMG1zO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApdHJhbnNsYXRlKDBweCwwcHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDowO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXJlbW92ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDAuNSk7XG4gICAgICAgIGJveC1zaGFkb3c6ICAwcHggNXB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogIDBweCAwcHggMXB4IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwMCwyMDAsMjAwLC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDoxO1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMC4wNWVtO1xuICAgICAgICByaWdodDogMC4wNWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICB9XG5gO1xuIiwiaW1wb3J0IHtjc3N9IGZyb20gJy4vbXVsdGljYW1lcmEuY3NzJztcbmV4cG9ydCBjb25zdCBodG1sID0gYFxuPGRpdiBjbGFzcz1cImNhbWVyYS1vdmVybGF5XCI+XG4gICAgPHN0eWxlPlxuICAgICR7Y3NzfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tIGNhbWVyYS16b29tLXBhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLXN0cmV0Y2ggY2FtZXJhLXpvb20tcGFydFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tcGx1c1wiPis8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLWJhY2tncm91bmQtd3JhcHBlciBjYW1lcmEtem9vbS1wYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tYmFja2dyb3VuZCBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tbWludXNcIj4tPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS10aHVtYiBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1yZXZlcnNlXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS10YWtlLXBob3RvLWJvcmRlciBjYW1lcmEtdGFrZS1waG90by1wYXJ0XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS10YWtlLXBob3RvIGNhbWVyYS10YWtlLXBob3RvLXBhcnRcIj48L2Rpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJjYW1lcmEtY2FuY2VsIGNhbWVyYS10ZXh0LW9wdGlvblwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgPkNhbmNlbDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJjYW1lcmEtdXNlLXBob3RvcyBjYW1lcmEtdGV4dC1vcHRpb25cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlVzZSBQaG90b3M8L2E+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3IgdG9wXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciBib3R0b21cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIHJpZ2h0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPlBob3Rvczwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciBsZWZ0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dCBiYWNrXCI+QmFjayBUbyBDYW1lcmE8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1ib3R0b20tdG9vbGJhclwiID5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxuIiwiXG5pbXBvcnQge2h0bWx9IGZyb20gJy4vbXVsdGljYW1lcmEuaHRtbCc7XG5pbXBvcnQge2Nzc30gZnJvbSAnLi9tdWx0aWNhbWVyYS5jc3MnO1xuXG5pbnRlcmZhY2UgTXVsdGlDYW1lcmFDb25maWcge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2FtZXJhSW1nIHtcbiAgICBkYXRhOiBzdHJpbmc7XG4gICAgd2lkdGg6bnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVBob3RvRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG4gICAgZGV0YWlsOiBNdWx0aUNhbWVyYUltZ1tdO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxFdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcbiAgICBkZXRhaWw6IE11bHRpQ2FtZXJhSW1nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFRvb2tQaG90b0V2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuICAgIGRldGFpbDogTXVsdGlDYW1lcmFJbWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDYW1lcmFFdmVudHMge1xuICAgIHVzZXBob3RvczogIFVzZVBob3RvRXZlbnQ7XG4gICAgY2FuY2VsOiBDYW5jZWxFdmVudDtcbiAgICB0b29rcGhvdG86ICBUb29rUGhvdG9FdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNhbWVyYUltYWdlIGV4dGVuZHMgTXVsdGlDYW1lcmFJbWcge1xuICAgIHdyYXBwZXI/OiBIVE1MRWxlbWVudDtcbiAgICBlbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgcmVtb3ZlZD86IGJvb2xlYW47XG4gICAgeD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYW1lcmFFbGVtZW50cyA9XG4gICAgICAgICdvdmVybGF5JyB8XG4gICAgICAgICd6b29tUGx1cycgfFxuICAgICAgICAnem9vbU1pbnVzJyB8XG4gICAgICAgICd6b29tVGh1bWInIHxcbiAgICAgICAgJ3pvb21CRycgfFxuICAgICAgICAnem9vbUJHV3JhcHBlcicgfFxuICAgICAgICAncmV2ZXJzZUNhbWVyYScgfFxuICAgICAgICAnY2FuY2VsJyB8XG4gICAgICAgICd0YWtlUGhvdG8nIHxcbiAgICAgICAgJ3VzZVBob3RvcycgfFxuICAgICAgICAnYm90dG9tVG9vbGJhcicgfFxuICAgICAgICAndG9wSW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAnYm90dG9tSW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAnbGVmdEluZGljYXRvclRleHQnIHxcbiAgICAgICAgJ3JpZ2h0SW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAncGhvdG9PdmVybGF5JyB8XG4gICAgICAgICdwaG90b092ZXJsYXlCYWNrZ3JvdW5kJyB8XG4gICAgICAgICdiYWNrJztcblxuZXhwb3J0IGNsYXNzIE11bHRpQ2FtZXJhIHtcbiAgICBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgX29wZXJhdGlvbnM6IFByb21pc2U8YW55PltdO1xuICAgIF9lbGVtZW50czoge1trZXkgaW4gTXVsdGlDYW1lcmFFbGVtZW50c106IEhUTUxFbGVtZW50fTtcbiAgICBfZW1Ub1B4OiBudW1iZXI7XG4gICAgX3Nob3c6IE11bHRpQ2FtZXJhQ29uZmlnIHwgYm9vbGVhbjtcbiAgICBfcmVhZHk6IGJvb2xlYW47XG4gICAgX3Rha2luZ1BpY3R1cmU6IGJvb2xlYW47XG4gICAgX3Nob3dpbmdQaG90b092ZXJsYXk6IE11bHRpQ2FtZXJhSW1hZ2UgfCBmYWxzZTtcbiAgICBfaW1hZ2VzOiBNdWx0aUNhbWVyYUltYWdlW10gPSBbXTtcbiAgICBfYWN0aXZlUGhvdG86IE11bHRpQ2FtZXJhSW1hZ2U7XG4gICAgX2Zyb250Q2FtZXJhOiBib29sZWFuO1xuICAgIF9tYXhab29tOiBudW1iZXIgPSA1O1xuICAgIF9taW5ab29tOiBudW1iZXIgPSAxO1xuICAgIF96b29tOiBudW1iZXIgPSAxO1xuICAgIF90b3VjaFN0YXRlOiB7XG4gICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhWyd0b3VjaFR5cGVzJ11ba2V5b2YgTXVsdGlDYW1lcmFbJ3RvdWNoVHlwZXMnXV07XG4gICAgICAgIHpvb20/OiBudW1iZXI7XG4gICAgICAgIHhTdGFydD86IG51bWJlcjtcbiAgICAgICAgeVN0YXJ0PzogbnVtYmVyO1xuICAgICAgICB0YXJnZXQ/OiBIVE1MRWxlbWVudDtcbiAgICAgICAgc3RhcnRFdmVudD86IEV2ZW50O1xuICAgICAgICBwbHVzVGltZXI/OiBhbnk7XG4gICAgICAgIG1pbnVzVGltZXI/OiBhbnk7XG4gICAgICAgIHN0YXJ0cz86IHtsZW5ndGg6IG51bWJlciwgW2tleTogbnVtYmVyXToge3g6IG51bWJlcjsgeTpudW1iZXI7fX07XG4gICAgICAgIG9yZGVyPzogbnVtYmVyW11cbiAgICAgICAgbm90X2NsaWNrPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIF9ldmVudHM6IHtcbiAgICAgICAgW2tleSBpbiBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50c106ICgoZXZlbnQ6IE11bHRpQ2FtZXJhRXZlbnRzW2tleV0pID0+ICh2b2lkIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGJvb2xlYW4pKVtdXG4gICAgfSA9IHtcbiAgICAgICAgdXNlcGhvdG9zOiBbXSxcbiAgICAgICAgY2FuY2VsOiBbXSxcbiAgICAgICAgdG9va3Bob3RvOiBbXVxuICAgIH07XG4gICAgXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBNdWx0aUNhbWVyYS5fY2FtZXJhID0gdGhpcztcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9IChNdWx0aUNhbWVyYS5fdGVtcGxhdGUgYXMgSFRNTEVsZW1lbnQpLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3Qge292ZXJsYXksIHRha2VQaG90bywgYmFjaywgY2FuY2VsLCB1c2VQaG90b3N9ID0gdGhpcy5fZWxlbWVudHMgPSB7XG4gICAgICAgICAgICBvdmVybGF5OiBlbGVtZW50LFxuICAgICAgICAgICAgem9vbVBsdXM6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS16b29tLXBsdXMnKSxcbiAgICAgICAgICAgIHpvb21NaW51czogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tbWludXMnKSxcbiAgICAgICAgICAgIHpvb21UaHVtYjogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tdGh1bWInKSxcbiAgICAgICAgICAgIHpvb21CRzogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgem9vbUJHV3JhcHBlcjogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyJyksXG4gICAgICAgICAgICByZXZlcnNlQ2FtZXJhOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcmV2ZXJzZScpLFxuICAgICAgICAgICAgY2FuY2VsOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtY2FuY2VsJyksXG4gICAgICAgICAgICB0YWtlUGhvdG86IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS10YWtlLXBob3RvJyksXG4gICAgICAgICAgICB1c2VQaG90b3M6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS11c2UtcGhvdG9zJyksXG4gICAgICAgICAgICBib3R0b21Ub29sYmFyOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtYm90dG9tLXRvb2xiYXInKSxcbiAgICAgICAgICAgIHRvcEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQnKSxcbiAgICAgICAgICAgIGJvdHRvbUluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IuYm90dG9tIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQnKSxcbiAgICAgICAgICAgIGxlZnRJbmRpY2F0b3JUZXh0OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgcmlnaHRJbmRpY2F0b3JUZXh0OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtaW5kaWNhdG9yLnJpZ2h0IC5jYW1lcmEtaW5kaWNhdG9yLXRleHQnKSxcbiAgICAgICAgICAgIHBob3RvT3ZlcmxheTogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXknKSxcbiAgICAgICAgICAgIHBob3RvT3ZlcmxheUJhY2tncm91bmQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmQnKSxcbiAgICAgICAgICAgIGJhY2s6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90by1vdmVybGF5LXRleHQuYmFjaycpXG4gICAgICAgIH0sXG4gICAgICAgIGVtVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbVRlc3Quc3R5bGUud2lkdGggPSBlbVRlc3Quc3R5bGUuaGVpZ2h0ID0gJzFlbSc7XG4gICAgICAgIGVtVGVzdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVtVGVzdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKGVtVGVzdCk7XG4gICAgICAgIHRoaXMuX2VtVG9QeCA9IGVtVGVzdC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZChlbVRlc3QpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmVycm9yKG92ZXJsYXkpO1xuXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICB0aGlzLl9vcGVyYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuX29uRGV2aWNlUmVhZHkgPSB0aGlzLl9vbkRldmljZVJlYWR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UgPSB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25DYW5jZWxDbGljaygpLCB0cnVlKTtcbiAgICAgICAgdXNlUGhvdG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25Vc2VQaG90b3NDbGljaygpLCB0cnVlKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoRW5kKGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIGJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBob3RvT3ZlcmxheUJhY2tDbGljaygpLCB0cnVlKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaE1vdmUoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hTdGFydChldmVudCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hDYW5jZWwoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgdGFrZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLl9vblRha2VQaG90b1RyYW5zaXRpb25FbmQoKSk7XG5cbiAgICAgICAgLy9UT0RPIGNvbnNpZGVyIGFkZCBpbiBzaG93IHJlbW92ZSBldmVudGxpc3RlbmVyIGluIGhpZGVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93WydkZXZpY2UnXSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvd1snZGV2aWNlJ10uY29yZG92YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5fb25EZXZpY2VSZWFkeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vbkRldmljZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyPEEgZXh0ZW5kcyBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cyA9IGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzPiAobmFtZTogQSwgZm46ICgoZXZlbnQ6IE11bHRpQ2FtZXJhRXZlbnRzW0FdKSA9PiAodm9pZCB8IG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuKSkpIHtcbiAgICAgICAgKHRoaXMuX2V2ZW50c1tuYW1lXSBhcyBhbnkpLnB1c2goZm4gYXMgKGV2ZW50OiBFdmVudCkgPT4gYW55KTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyPEEgZXh0ZW5kcyBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cyA9IGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzPiAobmFtZTogQSwgZm46ICgoZXZlbnQ6IE11bHRpQ2FtZXJhRXZlbnRzW0FdKSA9PiAodm9pZCB8IG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuKSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzW25hbWVdLFxuICAgICAgICAgICAgaW5kZXggPSAoZXZlbnRzIGFzIGFueSkuaW5kZXhPZihmbiBhcyAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoRXZlbnQ8QSBleHRlbmRzIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzPihldmVudDogTXVsdGlDYW1lcmFFdmVudHNbQV0pIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzW2V2ZW50LnR5cGVdO1xuICAgICAgICBmb3IgKHZhciBpPTAsbG49ZXZlbnRzLmxlbmd0aDtpPGxuO2krKykge1xuICAgICAgICAgICAgZXZlbnRzW2ldKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNjcmVlbkRpbWVuc2lvbnMgKCkge1xuICAgICAgICB2YXIge2hlaWdodCwgd2lkdGh9ID0gd2luZG93LnNjcmVlbjtcblxuICAgICAgICBpZiAodHlwZW9mIG9yaWVudGF0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHBhcnNlSW50KGAke3dpbmRvdy5vcmllbnRhdGlvbn1gKSAvIDkwKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICAgICAgd2lkdGggPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xuICAgIH1cblxuICAgIHNob3cgKGNvbmZpZzogTXVsdGlDYW1lcmFDb25maWcpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddLFxuICAgICAgICAgICAge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcblxuICAgICAgICAvL1RPRE8gY2hlY2sgdGhpc1xuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5IHx8ICFwcmV2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93ID0gY29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2hvdyA9IHRydWU7XG5cbiAgICAgICAgcHJldmlldy5zdG9wQ2FtZXJhKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsICdTVUNDRVNTJyk7XG4gICAgICAgICAgICAgICAgc3RhcnRDYW1lcmEoKTtcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCBlcnIpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q2FtZXJhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRDYW1lcmEgKCkge1xuICAgICAgICAgICAgcHJldmlldy5zdGFydENhbWVyYSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYTogcHJldmlldy5DQU1FUkFfRElSRUNUSU9OLkJBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHRvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFwUGhvdG86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0YXBGb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdEcmFnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdGFydENhbWVyYScsICdTVUNDRVNTJyk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RhcnRDYW1lcmEnLCBlcnIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J10sXG4gICAgICAgICAgICB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cztcbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5ICYmIHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHdpbmRvd1snUHJvbWlzZSddLmFsbCh0aGlzLl9vcGVyYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LnN0b3BDYW1lcmEoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRzLnBob3RvT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsICdTVUNDRVNTJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCBlcnIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFrZVBob3RvICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvb2tQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xuXG4gICAgICAgIHRvb2tQaWN0dXJlLmNsYXNzTmFtZSA9ICdjYW1lcmEtdG9vay1waWN0dXJlJztcblxuICAgICAgICBpZiAoIXRoaXMuX3Rha2luZ1BpY3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rha2luZ1BpY3R1cmUgPSB0cnVlO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd0YWtpbmctcGljdHVyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9va1BpY3R1cmUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Rha2luZ1BpY3R1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0b29rUGljdHVyZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdG9va1BpY3R1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b29rUGljdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdG9va1BpY3R1cmUuc3R5bGUub3BhY2l0eSA9ICcwJyk7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQodG9va1BpY3R1cmUpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgd2luZG93WydQcm9taXNlJ10oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddO1xuXG4gICAgICAgICAgICBwcmV2aWV3LnRha2VQaWN0dXJlKHt3aWR0aCwgaGVpZ2h0fSwgKGJhc2U2NDogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZTogIE11bHRpQ2FtZXJhSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsJHtiYXNlNjRbMF19YCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGhvdG9XcmFwcGVyID0gTXVsdGlDYW1lcmEuX3Bob3RvV3JhcHBlclRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQgPSBwaG90b1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQgPSBwaG90b1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90by1yZW1vdmUnKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICB7Ym90dG9tVG9vbGJhcn0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgICAgICB0b29rUGhvdG9FdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9va3Bob3RvJywge2RldGFpbDoge2RhdGE6IGltYWdlLmRhdGEsIHdpZHRoOmltYWdlLndpZHRoLCBoZWlnaHQ6aW1hZ2UuaGVpZ2h0fX0pO1xuXG4gICAgICAgICAgICAgICAgcGhvdG9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltYWdlLmRhdGF9XCIpYDtcbiAgICAgICAgICAgICAgICBib3R0b21Ub29sYmFyLmluc2VydEJlZm9yZShwaG90b1dyYXBwZXIsIGJvdHRvbVRvb2xiYXIuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKXRyYW5zbGF0ZSgwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHBob3RvV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgkZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hvb3NlQWN0aXZlUGhvdG8oaW1hZ2UsICRldmVudCk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0b29rUGhvdG9FdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZS53cmFwcGVyID0gcGhvdG9XcmFwcGVyO1xuICAgICAgICAgICAgICAgIGltYWdlLmVsZW1lbnQgPSBwaG90b0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faW1hZ2VzLnVuc2hpZnQoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHByb21pc2UpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vcGVyYXRpb25zLmluZGV4T2YocHJvbWlzZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlSW1hZ2UgKGltYWdlOiBNdWx0aUNhbWVyYUltYWdlKSB7XG4gICAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2ltYWdlcy5pbmRleE9mKGltYWdlKSxcbiAgICAgICAgICAgIHt3cmFwcGVyfSA9IGltYWdlO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbWFnZXMubGVuZ3RoID09PSAwICYmIHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVQaG90b092ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgJHt3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnc2NhbGUoMSknKVswXX1zY2FsZSgwKWA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRzLmJvdHRvbVRvb2xiYXIucmVtb3ZlQ2hpbGQod3JhcHBlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2RvTGF5b3V0KCk7XG5cbiAgICAgICAgaWYgKGltYWdlID09PSB0aGlzLl9hY3RpdmVQaG90bykge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuX2ltYWdlc1tpbmRleF0gfHwgdGhpcy5faW1hZ2VzW3RoaXMuX2ltYWdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hvb3NlQWN0aXZlUGhvdG8obmV4dCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hvb3NlQWN0aXZlUGhvdG8gKGltYWdlOiBNdWx0aUNhbWVyYUltYWdlLCBldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldFsnY2xhc3NMaXN0J10gJiYgZXZlbnQudGFyZ2V0WydjbGFzc0xpc3QnXS5jb250YWlucygnY2FtZXJhLXBob3RvLXJlbW92ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVBob3RvKSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVQaG90by53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWN0aXZlUGhvdG8gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5fc2hvd1Bob3RvT3ZlcmxheSgpO1xuICAgICAgICBpbWFnZS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIF9oaWRlUGhvdG9PdmVybGF5ICgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9hY3RpdmVQaG90byxcbiAgICAgICAgICAgIHt3cmFwcGVyOiBvcmlnaW5hbH0gPSBpbWFnZSB8fCB7d3JhcHBlcjogdW5kZWZpbmVkfSxcbiAgICAgICAgICAgIHdyYXBwZXIgPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ICE9PSBmYWxzZSA/IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkud3JhcHBlciA6IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXksXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwgJiYgb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSA9PT0gZWxlbWVudHMucGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICBjb25zdCBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudHMuYmFjay5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5QmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnggLyB0aGlzLl9lbVRvUHh9ZW1gO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSAnMGVtJztcbiAgICAgICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDApJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1Bob3RvT3ZlcmxheSAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gIHRoaXMuX2FjdGl2ZVBob3RvLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHQsIHdyYXBwZXI6IG9yaWdpbmFsLCBkYXRhfSA9IGltYWdlLFxuICAgICAgICAgICAgcmVjdCA9IG9yaWdpbmFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3QgJiB7eDogbnVtYmVyfSxcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVQaG90b092ZXJsYXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3dyYXBwZXJ9ID0gdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSA9IHtkYXRhLCB3aWR0aCwgaGVpZ2h0LCB3cmFwcGVyOiBvcmlnaW5hbC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnR9LFxuICAgICAgICAgICAgcGhvdG8gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8nKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgIHJlbW92ZSA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90by1yZW1vdmUnKVxuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDBlbSwwZW0pc2NhbGUoMSknXG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGAke3JlY3QueC90aGlzLl9lbVRvUHh9ZW1gXG5cbiAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHJlbW92ZSlcblxuICAgICAgICBwaG90by5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudHMuYmFjay5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5QmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgcGhvdG8uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBob3RvT3ZlcmxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2VudGVyUGhvdG9PdmVybGF5ICgpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpLFxuICAgICAgICAgICAgY2xvbmVJbWFnZSA9IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXk7XG4gICAgICAgIHZhciB7d2lkdGgsIGhlaWdodCwgd3JhcHBlcn0gPSBjbG9uZUltYWdlIHx8IHt3aWR0aDogdW5kZWZpbmVkLCBoZWlnaHQ6IHVuZGVmaW5lZCwgd3JhcHBlcjogdW5kZWZpbmVkfTtcbiAgICAgICAgdmFyIHNjYWxlOiBudW1iZXI7IFxuXG4gICAgICAgIGlmICh3aWR0aCA+IGRpbWVuc2lvbnMud2lkdGgpIHtcbiAgICAgICAgICAgIHNjYWxlID0gZGltZW5zaW9ucy53aWR0aCAvIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPiBkaW1lbnNpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgaWYgKCFzY2FsZSB8fCAoKGRpbWVuc2lvbnMuaGVpZ2h0IC8gaGVpZ2h0KSA+IHNjYWxlKSkge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gZGltZW5zaW9ucy5oZWlnaHQgLyBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN4ID0gKGRpbWVuc2lvbnMud2lkdGggLSB3aWR0aCAqIHNjYWxlKSAvIDIgLyB0aGlzLl9lbVRvUHgsXG4gICAgICAgICAgICBjeSA9IChkaW1lbnNpb25zLmhlaWdodCAtIGhlaWdodCAqIHNjYWxlKSAvIDIgLyB0aGlzLl9lbVRvUHg7XG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQqc2NhbGV9cHhgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gYCR7d2lkdGgqc2NhbGV9cHhgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtjeH1lbWA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gYCR7Y3l9ZW1gO1xuICAgIH1cblxuICAgIGZvY3VzICh7eCwgeX06IHt4Om51bWJlciwgeTpudW1iZXJ9KSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXVxuICAgICAgICBpZiAodGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpQ2FtZXJhLmZvY3VzKCR7W3gseV19KWApO1xuICAgICAgICAgICAgcHJldmlldy50YXBUb0ZvY3VzKHgsIHksICgpID0+IHt9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy50YXBUb0ZvY3VzJywgZXJyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3dpdGNoQ2FtZXJhICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddO1xuICAgICAgICBpZiAodGhpcy5fcmVhZHkgJiYgcHJldmlldykge1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgd2luZG93WydQcm9taXNlJ10oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcuc3dpdGNoQ2FtZXJhKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zyb250Q2FtZXJhID0gIXRoaXMuX2Zyb250Q2FtZXJhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb20oMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN3aXRjaENhbWVyYScsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vcGVyYXRpb25zLmluZGV4T2YocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgem9vbSAoem9vbTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXTtcblxuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5IHx8ICFwcmV2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7X21heFpvb20sIF9taW5ab29tfSA9IHRoaXMsXG4gICAgICAgICAgICB7em9vbUJHLCB6b29tQkdXcmFwcGVyLCB6b29tVGh1bWJ9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVjdCA9IHpvb21CRy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRIZWlnaHQgPSBiYWNrZ3JvdW5kUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHpvb20gIDwgX21pblpvb20pIHtcbiAgICAgICAgICAgIHpvb20gPSBfbWluWm9vbTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAoem9vbSA+IF9tYXhab29tKSB7XG4gICAgICAgICAgICB6b29tID0gX21heFpvb207XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl96b29tID0gem9vbTtcblxuICAgICAgICBjb25zdCBkaXYgPSAoKHpvb20gLSAxKSAvICh0aGlzLl9tYXhab29tIC0gMSkpLFxuICAgICAgICAgICAgdG9wID0gZGl2ICogYmFja2dyb3VuZEhlaWdodDtcbiAgICAgICAgem9vbVRodW1iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LXRvcH1weCl0cmFuc2xhdGUoLTUwJSwgNTAlKWA7XG4gICAgICAgICh6b29tQkdXcmFwcGVyLnN0eWxlIGFzIGFueSkud2Via2l0TWFza1Bvc2l0aW9uPWA1MCUgJHsoZGl2KjEwMCl9JWA7XG5cbiAgICAgICAgcHJldmlldy5zZXRab29tKHpvb20sICgpID0+IHt9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zZXRab29tJywgZXJyKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9kb0xheW91dCAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuX2ltYWdlcyxcbiAgICAgICAgICAgIHdpZHRoID0gMy41LFxuICAgICAgICAgICAgbG4gPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdXNlUGhvdG9zID0gdGhpcy5fZWxlbWVudHMudXNlUGhvdG9zO1xuICAgICAgICBcbiAgICAgICAgdmFyIGltYWdlOiBNdWx0aUNhbWVyYUltYWdlLFxuICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDtpPGxuO2krKykge1xuICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZXNbaV07XG4gICAgICAgICAgICBpbWFnZS54ID0gaSAqIHdpZHRoO1xuICAgICAgICAgICAgaW1hZ2Uud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7KGkqd2lkdGgpfWVtLCAwZW0pc2NhbGUoMSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxuKSB7XG4gICAgICAgICAgICBpZiAoIXVzZVBob3Rvcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1waG90b3MnKSkge1xuICAgICAgICAgICAgICAgdXNlUGhvdG9zLmNsYXNzTGlzdC5hZGQoJ2hhcy1waG90b3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1c2VQaG90b3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtcGhvdG9zJykpIHtcbiAgICAgICAgICAgdXNlUGhvdG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1waG90b3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9yZXNldCAoKSB7XG4gICAgICAgIGNvbnN0IHtib3R0b21Ub29sYmFyLCB6b29tVGh1bWIsIHpvb21CR1dyYXBwZXJ9ID0gdGhpcy5fZWxlbWVudHM7XG5cbiAgICAgICAgYm90dG9tVG9vbGJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgem9vbVRodW1iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweCl0cmFuc2xhdGUoLTUwJSwgNTAlKWA7XG4gICAgICAgICh6b29tQkdXcmFwcGVyLnN0eWxlIGFzIGFueSkud2Via2l0TWFza1Bvc2l0aW9uPWA1MCUgMCVgO1xuXG4gICAgICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLl90b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX07XG4gICAgICAgIHRoaXMuX2Zyb250Q2FtZXJhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3pvb20gPSAxO1xuICAgICAgICB0aGlzLl9taW5ab29tID0gMTtcbiAgICAgICAgdGhpcy5fbWF4Wm9vbSA9IDU7XG4gICAgfVxuXG4gICAgX29uRGV2aWNlUmVhZHkgKCkge1xuICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID0gdGhpcy5fc2hvdztcbiAgICAgICAgICAgIHRoaXMuX3Nob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhzaG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuem9vbSh0aGlzLl96b29tKTtcbiAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMuX29uRGV2aWNlUmVhZHkpO1xuICAgIH1cblxuICAgIF9vbk92ZXJsYXlUb3VjaFN0YXJ0IChldmVudDogVG91Y2hFdmVudCAmIHtwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyfSkge1xuICAgICAgICBjb25zdCB7em9vbVBsdXMsIHpvb21NaW51cywgcmV2ZXJzZUNhbWVyYSwgb3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIGNsYXNzTGlzdCA9IGV2ZW50LnRhcmdldFsnY2xhc3NMaXN0J10gfHwge2NvbnRhaW5zOiAoKSA9PiBmYWxzZX0sXG4gICAgICAgICAgICBudW1fdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMubGVuZ3RoO1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICBwbHVzVGltZXI6ICgpID0+IGFueSxcbiAgICAgICAgICAgIG1pbnVzVGltZXI6ICgpID0+IGFueTtcblxuICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW1lcmEtem9vbS1wYXJ0JykgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fVEhVTUIsXG4gICAgICAgICAgICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgICAgICAgICAgICB4U3RhcnQ6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgICAgIHlTdGFydDogZXZlbnQucGFnZVksXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RhcnRFdmVudDogZXZlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSB6b29tUGx1cyAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fb25ab29tUGx1c01vdXNlRG93bigpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9QTFVTLFxuICAgICAgICAgICAgICAgIHBsdXNUaW1lcjogc2V0VGltZW91dChwbHVzVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uWm9vbVBsdXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5wbHVzVGltZXIgPSBzZXRUaW1lb3V0KHBsdXNUaW1lciwgMTAwKVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSB6b29tTWludXMgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX29uWm9vbU1pbnVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX01JTlVTLFxuICAgICAgICAgICAgICAgIG1pbnVzVGltZXI6IHNldFRpbWVvdXQobWludXNUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25ab29tTWludXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5taW51c1RpbWVyID0gc2V0VGltZW91dChtaW51c1RpbWVyLCAxMDApXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gcmV2ZXJzZUNhbWVyYSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hDYW1lcmEoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2NhbWVyYS10YWtlLXBob3RvLXBhcnQnKSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50YWtlUGhvdG8oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUudHlwZSA9IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX0ZJTkdFUlM7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBNdWx0aUNhbWVyYVsnX3RvdWNoU3RhdGUnXVsnb3JkZXInXSxcbiAgICAgICAgICAgICAgICBzdGFydHM6IE11bHRpQ2FtZXJhWydfdG91Y2hTdGF0ZSddWydzdGFydHMnXSxcbiAgICAgICAgICAgICAgICB0b3VjaDogVG91Y2g7XG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5zdGFydHMgPSB7bGVuZ3RoOiAwfTtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm9yZGVyID0gW107XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS56b29tID0gdGhpcy5fem9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0cyA9IHRvdWNoU3RhdGUuc3RhcnRzO1xuICAgICAgICAgICAgb3JkZXIgPSB0b3VjaFN0YXRlLm9yZGVyO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXSA9IHt4OiB0b3VjaC5wYWdlWCwgeTogdG91Y2gucGFnZVl9O1xuICAgICAgICAgICAgICAgICAgICBzdGFydHMubGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnB1c2godG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5ub3RfY2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheVRvdWNoRW5kIChldmVudDogVG91Y2hFdmVudCAmIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlLFxuICAgICAgICAgICAge3R5cGV9ID0gdG91Y2hTdGF0ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fUExVUykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvdWNoU3RhdGUucGx1c1RpbWVyKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9NSU5VUykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvdWNoU3RhdGUubWludXNUaW1lcik7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUykge1xuICAgICAgICAgICAgaWYgKCF0b3VjaFN0YXRlLm5vdF9jbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3ZlcmxheUNsaWNrKGV2ZW50IGFzIE1vdXNlRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgICAgc3RhcnRzID0gdG91Y2hTdGF0ZS5zdGFydHMsXG4gICAgICAgICAgICAgICAgb3JkZXIgPSB0b3VjaFN0YXRlLm9yZGVyO1xuXG4gICAgICAgICAgICB2YXIgdG91Y2g6IFRvdWNoO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydHNbdG91Y2guaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKG9yZGVyLmluZGV4T2YodG91Y2guaWRlbnRpZmllciksIDEpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdO1xuICAgICAgICAgICAgICAgICAgICBzdGFydHMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfVxuICAgICAgICAgICAgdG91Y2hTdGF0ZS50eXBlID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RvdWNoU3RhdGUgPSB0b3VjaFN0YXRlO1xuICAgIH1cbiAgICBfb25PdmVybGF5VG91Y2hDYW5jZWwgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLl9vbk92ZXJsYXlUb3VjaEVuZChldmVudCk7XG4gICAgfVxuICAgIF9vbk92ZXJsYXlUb3VjaE1vdmUgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICB7dHlwZX0gPSB0b3VjaFN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9USFVNQikge1xuICAgICAgICAgICAgY29uc3QgcGFnZVkgPSBldmVudC5wYWdlWSAtIHRvdWNoU3RhdGUueVN0YXJ0LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSB0aGlzLl9lbGVtZW50cy56b29tQkcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlY3QgPSBiYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRIZWlnaHQgPSBiYWNrZ3JvdW5kUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuem9vbSh0b3VjaFN0YXRlLnpvb20gLSBwYWdlWSAvIGJhY2tncm91bmRIZWlnaHQgKiAzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUykge1xuICAgICAgICAgICAgY29uc3Qge3N0YXJ0cywgb3JkZXJ9ID0gdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICBzdGFydDEgPSBzdGFydHNbb3JkZXJbMF1dLFxuICAgICAgICAgICAgICAgIHN0YXJ0MiA9IHN0YXJ0c1tvcmRlclsxXV0sXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpLFxuICAgICAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IGRpbWVuc2lvbnM7XG4gICAgICAgICAgICB2YXIgY3VycmVudDE6IFRvdWNoLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQyOiBUb3VjaCxcbiAgICAgICAgICAgICAgICBzdGFydFgxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRYMjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydFkyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFgxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFgyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFkyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGlzdDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBkaXN0MjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHRvdWNoOiBUb3VjaCxcbiAgICAgICAgICAgICAgICBkaWZmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGk9MCxsbj10b3VjaGVzLmxlbmd0aDtpPGxuO2krKykge1xuICAgICAgICAgICAgICAgIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gb3JkZXJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDEgPSB0b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gb3JkZXJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDIgPSB0b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0MSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDEgPSBzdGFydDEueDtcbiAgICAgICAgICAgICAgICBzdGFydFkxID0gc3RhcnQxLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50WDEgPSBjdXJyZW50MS5wYWdlWDtcbiAgICAgICAgICAgICAgICBjdXJyZW50WTEgPSBjdXJyZW50MS5wYWdlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0b3VjaFN0YXRlLm5vdF9jbGljayAmJiBzdGFydDEgJiYgY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0MSA9IE1hdGguc3FydCgoKHN0YXJ0WDEgLSBjdXJyZW50WDEpICoqIDIpICsgKChzdGFydFkxIC0gY3VycmVudFkxKSAqKiAyKSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3QxKSA+IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5ub3RfY2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0MSAmJiBzdGFydDIgJiYgY3VycmVudDEgJiYgY3VycmVudDIpIHtcbiAgICAgICAgICAgICAgICBzdGFydFgyID0gc3RhcnQyLng7XG4gICAgICAgICAgICAgICAgc3RhcnRZMiA9IHN0YXJ0Mi55O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRYMiA9IGN1cnJlbnQyLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRZMiA9IGN1cnJlbnQyLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgZGlzdDEgPSBNYXRoLnNxcnQoKChzdGFydFgyIC0gc3RhcnRYMSkgKiogMikgKyAoKHN0YXJ0WTIgLSBzdGFydFkxKSAqKiAyKSk7XG4gICAgICAgICAgICAgICAgZGlzdDIgPSBNYXRoLnNxcnQoKChjdXJyZW50WDIgLSBjdXJyZW50WDEpICoqIDIpICsgKChjdXJyZW50WTIgLSBjdXJyZW50WTEpICoqIDIpKTtcblxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaXN0MiAtIGRpc3QxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy56b29tKHRvdWNoU3RhdGUuem9vbSArIGRpZmYgLyBNYXRoLm1pbih3aWR0aCxoZWlnaHQpICogNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25PcmllbnRhdGlvbkNoYW5nZSAoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMgPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKSxcbiAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IGRpbWVuc2lvbnM7XG4gICAgICAgIGlmICh0aGlzLnNob3cgJiYgdGhpcy5fcmVhZHkgJiYgcHJldmlldykge1xuICAgICAgICAgICAgcHJldmlldy5zZXRQcmV2aWV3U2l6ZShkaW1lbnNpb25zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZURpbWVuc2lvbnMgPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZURpbWVuc2lvbnMud2lkdGggIT09IHdpZHRoIHx8IGRvbmVEaW1lbnNpb25zLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zZXRQcmV2aWV3U2l6ZScsIGVycikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQaG90b092ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk92ZXJsYXlDbGljayAoe3BhZ2VYOiB4LCBwYWdlWTogeX0pIHtcbiAgICAgICAgdGhpcy5mb2N1cyh7eCwgeX0pO1xuICAgIH1cblxuICAgIF9vblJldmVyc2VDYW1lcmFDbGljayAoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ2FtZXJhKCk7XG4gICAgfVxuXG4gICAgX29uWm9vbVBsdXNNb3VzZURvd24gKCkge1xuICAgICAgICBpZiAoKHRoaXMuX3pvb20gKyAwLjE1KSA8PSB0aGlzLl9tYXhab29tKSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fem9vbSArIDAuMTUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX21heFpvb20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uWm9vbU1pbnVzTW91c2VEb3duICgpIHtcbiAgICAgICAgaWYgKCh0aGlzLl96b29tIC0gMC4xNSkgPj0gdGhpcy5fbWluWm9vbSkge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX3pvb20gLSAwLjE1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl9taW5ab29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRha2VQaG90b1RyYW5zaXRpb25FbmQgKCkge1xuICAgICAgICBjb25zdCB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cztcbiAgICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5jbGFzc0xpc3QgJiYgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rha2luZy1waWN0dXJlJykpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndGFraW5nLXBpY3R1cmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblBob3RvT3ZlcmxheUJhY2tDbGljayAoKSB7XG4gICAgICAgIHRoaXMuX2hpZGVQaG90b092ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBfb25DYW5jZWxDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHdpbmRvd1snUHJvbWlzZSddLmFsbCh0aGlzLl9vcGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJywge2RldGFpbDogW119KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblVzZVBob3Rvc0NsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvbmVuZW5lbmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndXNlcGhvdG9zJywge2RldGFpbDogdGhpcy5faW1hZ2VzLm1hcChkID0+ICh7d2lkdGg6IGQud2lkdGgsIGhlaWdodDpkLmhlaWdodCwgZGF0YTpkLmRhdGF9KSl9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIF9jYW1lcmE6IE11bHRpQ2FtZXJhO1xuICAgIHN0YXRpYyB0b3VjaFR5cGVzID0ge1xuICAgICAgICBOT05FOiAwIGFzIDAsXG4gICAgICAgIERSQUdfWk9PTV9USFVNQjogMSBhcyAxLFxuICAgICAgICBEUkFHX1pPT01fRklOR0VSUzogMiBhcyAyLFxuICAgICAgICBIT0xEX1pPT01fUExVUzogNCBhcyA0LFxuICAgICAgICBIT0xEX1pPT01fTUlOVVM6IDggYXMgOFxuICAgIH07XG4gICAgdG91Y2hUeXBlcyA9IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXM7XG5cbiAgICBzdGF0aWMgc2hvdyAoc3VjY2VzczogKGltYWdlczogTXVsdGlDYW1lcmFJbWFnZVtdKSA9PiBhbnksIGNvbmZpZzogTXVsdGlDYW1lcmFDb25maWcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignc3RhdGljc2hvdy4uLicpO1xuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5fY2FtZXJhO1xuICAgICAgICBjb25zdCBjYW5jZWxDQiA9ICgpID0+IHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgJiYgc3VjY2VzcyhbXSk7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXNlcGhvdG9zJywgdXNlUGhvdG9zQ0IpO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIGNhbmNlbENCKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXNlUGhvdG9zQ0IgPSAoJGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaW4gdXNlIHBob3RvcycpO1xuICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKCRldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VzZXBob3RvcycsIHVzZVBob3Rvc0NCKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBjYW5jZWxDQik7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1Y2Nlc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gc3VjY2VzcztcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghY2FtZXJhKSB7XG4gICAgICAgICAgICBjYW1lcmEgPSB0aGlzLl9jYW1lcmEgPSBuZXcgTXVsdGlDYW1lcmEoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FtZXJhLl9lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjYW1lcmEuYWRkRXZlbnRMaXN0ZW5lcigndXNlcGhvdG9zJywgdXNlUGhvdG9zQ0IpO1xuICAgICAgICBjYW1lcmEuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgY2FuY2VsQ0IpO1xuICAgICAgICBjYW1lcmEuc2hvdyhjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYW1lcmEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIgKCkge1xuICAgICAgICB0aGlzLl9jYW1lcmEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9jYW1lcmEsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVFdmVudExpc3RlbmVyICgpIHtcbiAgICAgICAgdGhpcy5fY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fY2FtZXJhLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgX3Bob3RvV3JhcHBlclRlbXBsYXRlOiBIVE1MRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG8tcmVtb3ZlXCI+LTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IGA7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSkoKTtcblxuICAgIHN0YXRpYyBfdGVtcGxhdGU6IEhUTUxFbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHtodG1sfVxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIEhUTUxFbGVtZW50XG4gICAgfSkoKTtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sR0FBRyxHQUFHLGl5VkF3VmxCLENBQUM7O0FDdlZLLElBQU0sSUFBSSxHQUFHLHdEQUdkLEdBQUcscXhEQXVDUixDQUFBOzs7SUNrREc7UUFBQSxpQkEwREM7UUFyRkQsWUFBTyxHQUF1QixFQUFFLENBQUM7UUFHakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFjbEIsWUFBTyxHQUVIO1lBQ0EsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUF3eEJGLGVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBcnhCaEMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBSSxXQUFXLENBQUMsU0FBeUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFnQixDQUFDO1FBQ2hHLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQkwsRUFuQk0sb0JBQU8sRUFBRSx3QkFBUyxFQUFFLGNBQUksRUFBRSxrQkFBTSxFQUFFLHdCQUFTLEVBb0JsRCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FB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
