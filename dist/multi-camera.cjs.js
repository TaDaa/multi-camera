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
        console.error(scale, cx, cy, width, height, dimensions, emToPx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FtZXJhLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL211bHRpY2FtZXJhLmNzcy50cyIsIi4uL3NyYy9tdWx0aWNhbWVyYS5odG1sLnRzIiwiLi4vc3JjL211bHRpY2FtZXJhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjc3MgPSBgXG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LXRleHQuYmFjayB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmFsbDtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tb3ZlcmxheSAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciAuY2FtZXJhLWluZGljYXRvci10ZXh0IHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItbGluZSxcbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCAuY2FtZXJhLWluZGljYXRvci1saW5lXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsMTUwLDI1NSwwLjcpO1xuICAgICAgICAtd2Via2l0LW1hc2s6bGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTAlLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5sZWZ0IHtcbiAgICAgICAgcmlnaHQ6IDdlbTtcbiAgICAgICAgbGVmdDogNWVtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIHRvcDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCxcbiAgICAuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dFxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOi0xZW07XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCAuY2FtZXJhLWluZGljYXRvci1saW5lLFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSAuY2FtZXJhLWluZGljYXRvci1saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgYm90dG9tOjUuNWVtO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCwxNTAsMjU1LDAuNyk7XG4gICAgICAgIC13ZWJraXQtbWFzazpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgM2VtLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgNTclLCAgIGJsYWNrIDEwMCUpO1xuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjowJSAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIHJpZ2h0OiAwLjNlbTtcbiAgICAgICAgdG9wOiAwZW07XG4gICAgICAgIGJvdHRvbTogMGVtO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci50b3Age1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIGxlZnQ6IDAuM2VtO1xuICAgICAgICB0b3A6IDBlbTtcbiAgICAgICAgYm90dG9tOiAwZW07XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuXG4gICAgLmNhbWVyYS1vdmVybGF5IHtcbiAgICAgICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS10b29rLXBpY3R1cmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmNhbWVyYS10YWtlLXBob3RvLWJvcmRlciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IC0wLjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICBoZWlnaHQ6My43NWVtO1xuICAgICAgICB3aWR0aDozLjc1ZW07XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMC4zNWVtIHdoaXRlLCAwcHggMHB4IDBweCAwLjRlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgbGluZWFyO1xuICAgIH1cbiAgICAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIGhlaWdodDozLjVlbTtcbiAgICAgICAgd2lkdGg6My41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNzVtcyBsaW5lYXI7XG4gICAgfVxuICAgIC50YWtpbmctcGljdHVyZSAuY2FtZXJhLXRha2UtcGhvdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5jYW1lcmEtcmV2ZXJzZSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMC45NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpdHJhbnNsYXRlKDAsLTVlbSl0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSd1dGYtOCclM0YlM0UlM0MhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0lM0UlM0MhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCclM0UlM0NzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDEwMDAgMTAwMCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwMCAxMDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ21ldGFkYXRhJTNFIFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uICUzQy9tZXRhZGF0YSUzRSUzQ2cgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuOSknJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMCwwLDAsMC41KScgc3Ryb2tlLXdpZHRoPSc0MCcgZmlsbD0ndHJhbnNwYXJlbnQnIGQ9J005MTIuMiwyNTVINzU0LjZjLTgxLjktOTEuOS0xMDcuNy0xMjIuNS0xMzkuMi0xMjIuNUgzODkuNmMtMzEuNCwwLTU2LjYsMzAuNi0xMzkuMSwxMjIuNWgtMzMuOHYtNDAuOGgtODYuOFYyNTVIOTUuNWMtNDUsMC04NS41LDMzLjctODUuNSw3OC4zdjQ0OS4yYzAsNDQuNiw0MC41LDg1LDg1LjUsODVoODE2LjdjNDUsMCw3Ny44LTQwLjQsNzcuOC04NVYzMzMuM0M5OTAsMjg4LjcsOTU3LjIsMjU1LDkxMi4yLDI1NXonLyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LC45KScgc3Ryb2tlLXdpZHRoPScyNScgZmlsbD0ncmdiYSgwLDAsMCwwLjQpJyBkPSdNOTEyLjIsMjU1SDc1NC42Yy04MS45LTkxLjktMTA3LjctMTIyLjUtMTM5LjItMTIyLjVIMzg5LjZjLTMxLjQsMC01Ni42LDMwLjYtMTM5LjEsMTIyLjVoLTMzLjh2LTQwLjhoLTg2LjhWMjU1SDk1LjVjLTQ1LDAtODUuNSwzMy43LTg1LjUsNzguM3Y0NDkuMmMwLDQ0LjYsNDAuNSw4NSw4NS41LDg1aDgxNi43YzQ1LDAsNzcuOC00MC40LDc3LjgtODVWMzMzLjNDOTkwLDI4OC43LDk1Ny4yLDI1NSw5MTIuMiwyNTV6Jy8lM0UlM0NwYXRoIGQ9J002MTYuOSw2NTkuOGMtMzMuNSwyOC4xLTczLjksNDQuMy0xMTYuOSw0NC4zYy05Mi44LDAtMTY5LjItNzMuOS0xODAuOS0xNTguMWg3OC4xTDI5OCw0MTguM2wtOTUuOCwxMjcuNmg3NS4yQzI4OS40LDY1My4xLDM4My45LDc0NSw1MDAsNzQ1YzUzLjMsMCwxMDUuMS0xOS4zLDE0NS43LTU0LjFsNi01LjVsLTI5LjYtMjkuOEw2MTYuOSw2NTkuOHonLyUzRSUzQ3BhdGggZD0nTTY1Mi41LDM1NC4yQzYxMS4xLDMxNi41LDU1NywyOTYsNTAwLDI5NmMtNTMuMywwLTEwNS4xLDE5LjMtMTQ1LjcsNTQuMWwtNiw1LjJsMjkuNiwyOS42bDUuMi00LjRjMzMtMjcuNyw3NC41LTQzLjQsMTE2LjktNDMuNGM5Mi44LDAsMTY5LjEsNzMuNSwxODAuOSwxNjIuOGgtNzguMmw5OS4xLDEzMC43bDk2LTEzMC43aC03NS4zQzcxNi44LDQ0OSw2OTIuMSwzOTAuNCw2NTIuNSwzNTQuMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Mi41ZW0gMi41ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS1ib3R0b20tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBoZWlnaHQ6IDQuMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xuICAgIH1cbiAgICAuY2FtZXJhLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMHB4IDAuNWVtIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6NWVtO1xuICAgICAgICB3aWR0aDo1ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtdGV4dC1vcHRpb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzowIDAuNWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3Mge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBib3R0b206IDQuMGVtO1xuICAgICAgICBwYWRkaW5nOjAuMmVtIDAuNWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuY2FtZXJhLXVzZS1waG90b3MuaGFzLXBob3RvcyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5jYW1lcmEtY2FuY2VsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcbiAgICAgICAgYm90dG9tOiA0LjBlbTtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgLjc1ZW0sIGJsYWNrIC43NWVtLCBibGFjayAyNWVtKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6MzBlbSAzMGVtO1xuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246NTAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1wbHVzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1taW51cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY2FtZXJhLXpvb20tdGh1bWIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwLjE1ZW0gcmdiYSgxMDAsMjU1LDEwMCwwLjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICBib3R0b206IDAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tLXN0cmV0Y2gge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICAgICAgdG9wOiAtMWVtO1xuICAgICAgICByaWdodDogLTFlbTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXMsIG9wYWNpdHkgMzAwbXMsIGxlZnQgMzAwbXMsIGJvdHRvbSAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIuYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgxMDAsMjU1LDEwMCwwLjM1KTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCl0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tcmVtb3ZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogIDBweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtc2hhZG93OiAgMHB4IDBweCAxcHggYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLDIwMCwyMDAsLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAwLjA1ZW07XG4gICAgICAgIHJpZ2h0OiAwLjA1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbmA7XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnLi9tdWx0aWNhbWVyYS5jc3MnO1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG48ZGl2IGNsYXNzPVwiY2FtZXJhLW92ZXJsYXlcIj5cbiAgICA8c3R5bGU+XG4gICAgJHtjc3N9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20gY2FtZXJhLXpvb20tcGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tc3RyZXRjaCBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1wbHVzXCI+KzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIGNhbWVyYS16b29tLXBhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1iYWNrZ3JvdW5kIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS1taW51c1wiPi08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLXRodW1iIGNhbWVyYS16b29tLXBhcnRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXJldmVyc2VcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8tYm9yZGVyIGNhbWVyYS10YWtlLXBob3RvLXBhcnRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXRha2UtcGhvdG8gY2FtZXJhLXRha2UtcGhvdG8tcGFydFwiPjwvZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS1jYW5jZWwgY2FtZXJhLXRleHQtb3B0aW9uXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiA+Q2FuY2VsPC9hPlxuICAgICAgICA8YSBjbGFzcz1cImNhbWVyYS11c2UtcGhvdG9zIGNhbWVyYS10ZXh0LW9wdGlvblwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+VXNlIFBob3RvczwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciB0b3BcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGJvdHRvbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItbGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLXRleHRcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3IgcmlnaHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+UGhvdG9zPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIGxlZnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjYW1lcmEtcGhvdG8tb3ZlcmxheS10ZXh0IGJhY2tcIj5CYWNrIFRvIENhbWVyYTwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWJvdHRvbS10b29sYmFyXCIgPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG4iLCJcbmltcG9ydCB7aHRtbH0gZnJvbSAnLi9tdWx0aWNhbWVyYS5odG1sJztcbmltcG9ydCB7Y3NzfSBmcm9tICcuL211bHRpY2FtZXJhLmNzcyc7XG5cbmludGVyZmFjZSBNdWx0aUNhbWVyYUNvbmZpZyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDYW1lcmFJbWcge1xuICAgIGRhdGE6IHN0cmluZztcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUGhvdG9FdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcbiAgICBkZXRhaWw6IE11bHRpQ2FtZXJhSW1nW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbEV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuICAgIGRldGFpbDogTXVsdGlDYW1lcmFJbWdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9va1Bob3RvRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG4gICAgZGV0YWlsOiBNdWx0aUNhbWVyYUltZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNhbWVyYUV2ZW50cyB7XG4gICAgdXNlcGhvdG9zOiAgVXNlUGhvdG9FdmVudDtcbiAgICBjYW5jZWw6IENhbmNlbEV2ZW50O1xuICAgIHRvb2twaG90bzogIFRvb2tQaG90b0V2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2FtZXJhSW1hZ2UgZXh0ZW5kcyBNdWx0aUNhbWVyYUltZyB7XG4gICAgd3JhcHBlcj86IEhUTUxFbGVtZW50O1xuICAgIGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICByZW1vdmVkPzogYm9vbGVhbjtcbiAgICB4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhbWVyYUVsZW1lbnRzID1cbiAgICAgICAgJ292ZXJsYXknIHxcbiAgICAgICAgJ3pvb21QbHVzJyB8XG4gICAgICAgICd6b29tTWludXMnIHxcbiAgICAgICAgJ3pvb21UaHVtYicgfFxuICAgICAgICAnem9vbUJHJyB8XG4gICAgICAgICd6b29tQkdXcmFwcGVyJyB8XG4gICAgICAgICdyZXZlcnNlQ2FtZXJhJyB8XG4gICAgICAgICdjYW5jZWwnIHxcbiAgICAgICAgJ3Rha2VQaG90bycgfFxuICAgICAgICAndXNlUGhvdG9zJyB8XG4gICAgICAgICdib3R0b21Ub29sYmFyJyB8XG4gICAgICAgICd0b3BJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdib3R0b21JbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdsZWZ0SW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAncmlnaHRJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdwaG90b092ZXJsYXknIHxcbiAgICAgICAgJ3Bob3RvT3ZlcmxheUJhY2tncm91bmQnIHxcbiAgICAgICAgJ2JhY2snO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlDYW1lcmEge1xuICAgIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBfb3BlcmF0aW9uczogUHJvbWlzZTxhbnk+W107XG4gICAgX2VsZW1lbnRzOiB7W2tleSBpbiBNdWx0aUNhbWVyYUVsZW1lbnRzXTogSFRNTEVsZW1lbnR9O1xuICAgIF9lbVRvUHg6IG51bWJlcjtcbiAgICBfc2hvdzogTXVsdGlDYW1lcmFDb25maWcgfCBib29sZWFuO1xuICAgIF9yZWFkeTogYm9vbGVhbjtcbiAgICBfdGFraW5nUGljdHVyZTogYm9vbGVhbjtcbiAgICBfc2hvd2luZ1Bob3RvT3ZlcmxheTogTXVsdGlDYW1lcmFJbWFnZSB8IGZhbHNlO1xuICAgIF9pbWFnZXM6IE11bHRpQ2FtZXJhSW1hZ2VbXSA9IFtdO1xuICAgIF9hY3RpdmVQaG90bzogTXVsdGlDYW1lcmFJbWFnZTtcbiAgICBfZnJvbnRDYW1lcmE6IGJvb2xlYW47XG4gICAgX21heFpvb206IG51bWJlciA9IDU7XG4gICAgX21pblpvb206IG51bWJlciA9IDE7XG4gICAgX3pvb206IG51bWJlciA9IDE7XG4gICAgX3RvdWNoU3RhdGU6IHtcbiAgICAgICAgdHlwZTogTXVsdGlDYW1lcmFbJ3RvdWNoVHlwZXMnXVtrZXlvZiBNdWx0aUNhbWVyYVsndG91Y2hUeXBlcyddXTtcbiAgICAgICAgem9vbT86IG51bWJlcjtcbiAgICAgICAgeFN0YXJ0PzogbnVtYmVyO1xuICAgICAgICB5U3RhcnQ/OiBudW1iZXI7XG4gICAgICAgIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICAgICAgICBzdGFydEV2ZW50PzogRXZlbnQ7XG4gICAgICAgIHBsdXNUaW1lcj86IGFueTtcbiAgICAgICAgbWludXNUaW1lcj86IGFueTtcbiAgICAgICAgc3RhcnRzPzoge2xlbmd0aDogbnVtYmVyLCBba2V5OiBudW1iZXJdOiB7eDogbnVtYmVyOyB5Om51bWJlcjt9fTtcbiAgICAgICAgb3JkZXI/OiBudW1iZXJbXVxuICAgICAgICBub3RfY2xpY2s/OiBib29sZWFuO1xuICAgIH07XG4gICAgX2V2ZW50czoge1xuICAgICAgICBba2V5IGluIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzXTogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNba2V5XSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpW11cbiAgICB9ID0ge1xuICAgICAgICB1c2VwaG90b3M6IFtdLFxuICAgICAgICBjYW5jZWw6IFtdLFxuICAgICAgICB0b29rcGhvdG86IFtdXG4gICAgfTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIE11bHRpQ2FtZXJhLl9jYW1lcmEgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gKE11bHRpQ2FtZXJhLl90ZW1wbGF0ZSBhcyBIVE1MRWxlbWVudCkuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB7b3ZlcmxheSwgdGFrZVBob3RvLCBiYWNrLCBjYW5jZWwsIHVzZVBob3Rvc30gPSB0aGlzLl9lbGVtZW50cyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGVsZW1lbnQsXG4gICAgICAgICAgICB6b29tUGx1czogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tcGx1cycpLFxuICAgICAgICAgICAgem9vbU1pbnVzOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1taW51cycpLFxuICAgICAgICAgICAgem9vbVRodW1iOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS10aHVtYicpLFxuICAgICAgICAgICAgem9vbUJHOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICB6b29tQkdXcmFwcGVyOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kLXdyYXBwZXInKSxcbiAgICAgICAgICAgIHJldmVyc2VDYW1lcmE6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1yZXZlcnNlJyksXG4gICAgICAgICAgICBjYW5jZWw6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jYW5jZWwnKSxcbiAgICAgICAgICAgIHRha2VQaG90bzogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXRha2UtcGhvdG8nKSxcbiAgICAgICAgICAgIHVzZVBob3RvczogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXVzZS1waG90b3MnKSxcbiAgICAgICAgICAgIGJvdHRvbVRvb2xiYXI6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1ib3R0b20tdG9vbGJhcicpLFxuICAgICAgICAgICAgdG9wSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgYm90dG9tSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgbGVmdEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IubGVmdCAuY2FtZXJhLWluZGljYXRvci10ZXh0JyksXG4gICAgICAgICAgICByaWdodEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IucmlnaHQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8tb3ZlcmxheScpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5QmFja2dyb3VuZDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgYmFjazogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dC5iYWNrJylcbiAgICAgICAgfTtcblxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9vbkRldmljZVJlYWR5ID0gdGhpcy5fb25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlID0gdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uQ2FuY2VsQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIHVzZVBob3Rvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uVXNlUGhvdG9zQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaEVuZChldmVudCksIHRydWUpO1xuICAgICAgICBiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaG90b092ZXJsYXlCYWNrQ2xpY2soKSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hNb3ZlKGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoU3RhcnQoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoQ2FuY2VsKGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIHRha2VQaG90by5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5fb25UYWtlUGhvdG9UcmFuc2l0aW9uRW5kKCkpO1xuXG4gICAgICAgIC8vVE9ETyBjb25zaWRlciBhZGQgaW4gc2hvdyByZW1vdmUgZXZlbnRsaXN0ZW5lciBpbiBoaWRlXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snZGV2aWNlJ10gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3dbJ2RldmljZSddLmNvcmRvdmEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMuX29uRGV2aWNlUmVhZHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb25EZXZpY2VSZWFkeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHMgPSBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4gKG5hbWU6IEEsIGZuOiAoKGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpKSB7XG4gICAgICAgICh0aGlzLl9ldmVudHNbbmFtZV0gYXMgYW55KS5wdXNoKGZuIGFzIChldmVudDogRXZlbnQpID0+IGFueSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHMgPSBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4gKG5hbWU6IEEsIGZuOiAoKGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50c1tuYW1lXSxcbiAgICAgICAgICAgIGluZGV4ID0gKGV2ZW50cyBhcyBhbnkpLmluZGV4T2YoZm4gYXMgKGV2ZW50OiBFdmVudCkgPT4gYW55KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaEV2ZW50PEEgZXh0ZW5kcyBrZXlvZiBNdWx0aUNhbWVyYUV2ZW50cz4oZXZlbnQ6IE11bHRpQ2FtZXJhRXZlbnRzW0FdKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50c1tldmVudC50eXBlXTtcbiAgICAgICAgZm9yICh2YXIgaT0wLGxuPWV2ZW50cy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgIGV2ZW50c1tpXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTY3JlZW5EaW1lbnNpb25zICgpIHtcbiAgICAgICAgdmFyIHtoZWlnaHQsIHdpZHRofSA9IHdpbmRvdy5zY3JlZW47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcmllbnRhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwYXJzZUludChgJHt3aW5kb3cub3JpZW50YXRpb259YCkgLyA5MCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG5cbiAgICBzaG93IChjb25maWc6IE11bHRpQ2FtZXJhQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCk7XG5cbiAgICAgICAgLy9UT0RPIGNoZWNrIHRoaXNcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yZWFkeSB8fCAhcHJldmlldykge1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Nob3cgPSB0cnVlO1xuXG4gICAgICAgIHByZXZpZXcuc3RvcENhbWVyYShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q2FtZXJhKCk7XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgZXJyKTtcbiAgICAgICAgICAgICAgICBzdGFydENhbWVyYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0Q2FtZXJhICgpIHtcbiAgICAgICAgICAgIHByZXZpZXcuc3RhcnRDYW1lcmEoe1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHByZXZpZXcuQ0FNRVJBX0RJUkVDVElPTi5CQUNLLFxuICAgICAgICAgICAgICAgICAgICB0b0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRhcFBob3RvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGFwRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3RHJhZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RhcnRDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddLFxuICAgICAgICAgICAge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSAmJiB0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldmlldy5zdG9wQ2FtZXJhKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5waG90b092ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRha2VQaG90byAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b29rUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAge292ZXJsYXl9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcblxuICAgICAgICB0b29rUGljdHVyZS5jbGFzc05hbWUgPSAnY2FtZXJhLXRvb2stcGljdHVyZSc7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90YWtpbmdQaWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWtpbmdQaWN0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndGFraW5nLXBpY3R1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvb2tQaWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90YWtpbmdQaWN0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodG9va1BpY3R1cmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRvb2tQaWN0dXJlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9va1BpY3R1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvb2tQaWN0dXJlLnN0eWxlLm9wYWNpdHkgPSAnMCcpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHRvb2tQaWN0dXJlKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IHdpbmRvd1snUHJvbWlzZSddKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXTtcblxuICAgICAgICAgICAgcHJldmlldy50YWtlUGljdHVyZSh7d2lkdGgsIGhlaWdodH0sIChiYXNlNjQ6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6ICBNdWx0aUNhbWVyYUltYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBgZGF0YTppbWFnZS9qcGc7YmFzZTY0LCR7YmFzZTY0WzBdfWAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBob3RvV3JhcHBlciA9IE11bHRpQ2FtZXJhLl9waG90b1dyYXBwZXJUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcGhvdG9FbGVtZW50ID0gcGhvdG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8nKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50ID0gcGhvdG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8tcmVtb3ZlJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAge2JvdHRvbVRvb2xiYXJ9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgdG9va1Bob3RvRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Rvb2twaG90bycsIHtkZXRhaWw6IHtkYXRhOiBpbWFnZS5kYXRhLCB3aWR0aDppbWFnZS53aWR0aCwgaGVpZ2h0OmltYWdlLmhlaWdodH19KTtcblxuICAgICAgICAgICAgICAgIHBob3RvRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZS5kYXRhfVwiKWA7XG4gICAgICAgICAgICAgICAgYm90dG9tVG9vbGJhci5pbnNlcnRCZWZvcmUocGhvdG9XcmFwcGVyLCBib3R0b21Ub29sYmFyLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBob3RvRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSl0cmFuc2xhdGUoMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBwaG90b1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoJGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nob29zZUFjdGl2ZVBob3RvKGltYWdlLCAkZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodG9va1Bob3RvRXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2Uud3JhcHBlciA9IHBob3RvV3JhcHBlcjtcbiAgICAgICAgICAgICAgICBpbWFnZS5lbGVtZW50ID0gcGhvdG9FbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlcy51bnNoaWZ0KGltYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb0xheW91dCgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb3BlcmF0aW9ucy5pbmRleE9mKHByb21pc2UpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUltYWdlIChpbWFnZTogTXVsdGlDYW1lcmFJbWFnZSkge1xuICAgICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9pbWFnZXMuaW5kZXhPZihpbWFnZSksXG4gICAgICAgICAgICB7d3JhcHBlcn0gPSBpbWFnZTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYCR7d3JhcHBlci5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJ3NjYWxlKDEpJylbMF19c2NhbGUoMClgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5ib3R0b21Ub29sYmFyLnJlbW92ZUNoaWxkKHdyYXBwZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kb0xheW91dCgpO1xuXG4gICAgICAgIGlmIChpbWFnZSA9PT0gdGhpcy5fYWN0aXZlUGhvdG8pIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9pbWFnZXNbaW5kZXhdIHx8IHRoaXMuX2ltYWdlc1t0aGlzLl9pbWFnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nob29zZUFjdGl2ZVBob3RvKG5leHQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Nob29zZUFjdGl2ZVBob3RvIChpbWFnZTogTXVsdGlDYW1lcmFJbWFnZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXRbJ2NsYXNzTGlzdCddICYmIGV2ZW50LnRhcmdldFsnY2xhc3NMaXN0J10uY29udGFpbnMoJ2NhbWVyYS1waG90by1yZW1vdmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVQaG90bykge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlUGhvdG8ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FjdGl2ZVBob3RvID0gaW1hZ2U7XG4gICAgICAgIHRoaXMuX3Nob3dQaG90b092ZXJsYXkoKTtcbiAgICAgICAgaW1hZ2Uud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgXG4gICAgX2dldEVtVG9QeCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbVRvUHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZW1UZXN0LnN0eWxlLndpZHRoID0gZW1UZXN0LnN0eWxlLmhlaWdodCA9ICcxZW0nO1xuICAgICAgICAgICAgZW1UZXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGVtVGVzdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChlbVRlc3QpO1xuICAgICAgICAgICAgdGhpcy5fZW1Ub1B4ID0gZW1UZXN0LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZChlbVRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9lbVRvUHg7XG4gICB9XG5cbiAgICBfaGlkZVBob3RvT3ZlcmxheSAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5fYWN0aXZlUGhvdG8sXG4gICAgICAgICAgICBlbVRvUHggPSB0aGlzLl9nZXRFbVRvUHgoKSxcbiAgICAgICAgICAgIHt3cmFwcGVyOiBvcmlnaW5hbH0gPSBpbWFnZSB8fCB7d3JhcHBlcjogdW5kZWZpbmVkfSxcbiAgICAgICAgICAgIHdyYXBwZXIgPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ICE9PSBmYWxzZSA/IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkud3JhcHBlciA6IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXksXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwgJiYgb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSA9PT0gZWxlbWVudHMucGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICBjb25zdCBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudHMuYmFjay5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5QmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnggLyBlbVRvUHh9ZW1gO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSAnMGVtJztcbiAgICAgICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDApJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucGhvdG9PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1Bob3RvT3ZlcmxheSAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gIHRoaXMuX2FjdGl2ZVBob3RvLFxuICAgICAgICAgICAgZW1Ub1B4ID0gdGhpcy5fZ2V0RW1Ub1B4KCksXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodCwgd3JhcHBlcjogb3JpZ2luYWwsIGRhdGF9ID0gaW1hZ2UsXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7d3JhcHBlcn0gPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0ge2RhdGEsIHdpZHRoLCBoZWlnaHQsIHdyYXBwZXI6IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudH0sXG4gICAgICAgICAgICBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgcmVtb3ZlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpXG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMGVtLDBlbSlzY2FsZSgxKSdcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7cmVjdC54L2VtVG9QeH1lbWBcblxuICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocmVtb3ZlKVxuXG4gICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBwaG90by5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5fY2VudGVyUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jZW50ZXJQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICBlbVRvUHggPSB0aGlzLl9nZXRFbVRvUHgoKSxcbiAgICAgICAgICAgIGNsb25lSW1hZ2UgPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5O1xuICAgICAgICB2YXIge3dpZHRoLCBoZWlnaHQsIHdyYXBwZXJ9ID0gY2xvbmVJbWFnZSB8fCB7d2lkdGg6IHVuZGVmaW5lZCwgaGVpZ2h0OiB1bmRlZmluZWQsIHdyYXBwZXI6IHVuZGVmaW5lZH07XG4gICAgICAgIHZhciBzY2FsZTogbnVtYmVyOyBcblxuICAgICAgICBpZiAod2lkdGggPiBkaW1lbnNpb25zLndpZHRoKSB7XG4gICAgICAgICAgICBzY2FsZSA9IGRpbWVuc2lvbnMud2lkdGggLyB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ID4gZGltZW5zaW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICghc2NhbGUgfHwgKChkaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodCkgPiBzY2FsZSkpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IGRpbWVuc2lvbnMuaGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeCA9IChkaW1lbnNpb25zLndpZHRoIC0gd2lkdGggKiBzY2FsZSkgLyAyIC8gZW1Ub1B4LFxuICAgICAgICAgICAgY3kgPSAoZGltZW5zaW9ucy5oZWlnaHQgLSBoZWlnaHQgKiBzY2FsZSkgLyAyIC8gZW1Ub1B4O1xuXG4gICAgICAgIGNvbnNvbGUuZXJyb3Ioc2NhbGUsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCwgZGltZW5zaW9ucywgZW1Ub1B4KTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQqc2NhbGV9cHhgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gYCR7d2lkdGgqc2NhbGV9cHhgO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtjeH1lbWA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gYCR7Y3l9ZW1gO1xuICAgIH1cblxuICAgIGZvY3VzICh7eCwgeX06IHt4Om51bWJlciwgeTpudW1iZXJ9KSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXVxuICAgICAgICBpZiAodGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpQ2FtZXJhLmZvY3VzKCR7W3gseV19KWApO1xuICAgICAgICAgICAgcHJldmlldy50YXBUb0ZvY3VzKHgsIHksICgpID0+IHt9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy50YXBUb0ZvY3VzJywgZXJyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3dpdGNoQ2FtZXJhICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddO1xuICAgICAgICBpZiAodGhpcy5fcmVhZHkgJiYgcHJldmlldykge1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgd2luZG93WydQcm9taXNlJ10oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcuc3dpdGNoQ2FtZXJhKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zyb250Q2FtZXJhID0gIXRoaXMuX2Zyb250Q2FtZXJhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb20oMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN3aXRjaENhbWVyYScsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vcGVyYXRpb25zLmluZGV4T2YocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgem9vbSAoem9vbTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXTtcblxuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5IHx8ICFwcmV2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7X21heFpvb20sIF9taW5ab29tfSA9IHRoaXMsXG4gICAgICAgICAgICB7em9vbUJHLCB6b29tQkdXcmFwcGVyLCB6b29tVGh1bWJ9ID0gdGhpcy5fZWxlbWVudHMsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVjdCA9IHpvb21CRy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRIZWlnaHQgPSBiYWNrZ3JvdW5kUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHpvb20gIDwgX21pblpvb20pIHtcbiAgICAgICAgICAgIHpvb20gPSBfbWluWm9vbTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAoem9vbSA+IF9tYXhab29tKSB7XG4gICAgICAgICAgICB6b29tID0gX21heFpvb207XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl96b29tID0gem9vbTtcblxuICAgICAgICBjb25zdCBkaXYgPSAoKHpvb20gLSAxKSAvICh0aGlzLl9tYXhab29tIC0gMSkpLFxuICAgICAgICAgICAgdG9wID0gZGl2ICogYmFja2dyb3VuZEhlaWdodDtcbiAgICAgICAgem9vbVRodW1iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LXRvcH1weCl0cmFuc2xhdGUoLTUwJSwgNTAlKWA7XG4gICAgICAgICh6b29tQkdXcmFwcGVyLnN0eWxlIGFzIGFueSkud2Via2l0TWFza1Bvc2l0aW9uPWA1MCUgJHsoZGl2KjEwMCl9JWA7XG5cbiAgICAgICAgcHJldmlldy5zZXRab29tKHpvb20sICgpID0+IHt9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zZXRab29tJywgZXJyKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9kb0xheW91dCAoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuX2ltYWdlcyxcbiAgICAgICAgICAgIHdpZHRoID0gMy41LFxuICAgICAgICAgICAgbG4gPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdXNlUGhvdG9zID0gdGhpcy5fZWxlbWVudHMudXNlUGhvdG9zO1xuICAgICAgICBcbiAgICAgICAgdmFyIGltYWdlOiBNdWx0aUNhbWVyYUltYWdlLFxuICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDtpPGxuO2krKykge1xuICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZXNbaV07XG4gICAgICAgICAgICBpbWFnZS54ID0gaSAqIHdpZHRoO1xuICAgICAgICAgICAgaW1hZ2Uud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7KGkqd2lkdGgpfWVtLCAwZW0pc2NhbGUoMSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxuKSB7XG4gICAgICAgICAgICBpZiAoIXVzZVBob3Rvcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1waG90b3MnKSkge1xuICAgICAgICAgICAgICAgdXNlUGhvdG9zLmNsYXNzTGlzdC5hZGQoJ2hhcy1waG90b3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1c2VQaG90b3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtcGhvdG9zJykpIHtcbiAgICAgICAgICAgdXNlUGhvdG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1waG90b3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9yZXNldCAoKSB7XG4gICAgICAgIGNvbnN0IHtib3R0b21Ub29sYmFyLCB6b29tVGh1bWIsIHpvb21CR1dyYXBwZXJ9ID0gdGhpcy5fZWxlbWVudHM7XG5cbiAgICAgICAgYm90dG9tVG9vbGJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgem9vbVRodW1iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweCl0cmFuc2xhdGUoLTUwJSwgNTAlKWA7XG4gICAgICAgICh6b29tQkdXcmFwcGVyLnN0eWxlIGFzIGFueSkud2Via2l0TWFza1Bvc2l0aW9uPWA1MCUgMCVgO1xuXG4gICAgICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLl90b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX07XG4gICAgICAgIHRoaXMuX2Zyb250Q2FtZXJhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3pvb20gPSAxO1xuICAgICAgICB0aGlzLl9taW5ab29tID0gMTtcbiAgICAgICAgdGhpcy5fbWF4Wm9vbSA9IDU7XG4gICAgfVxuXG4gICAgX29uRGV2aWNlUmVhZHkgKCkge1xuICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID0gdGhpcy5fc2hvdztcbiAgICAgICAgICAgIHRoaXMuX3Nob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhzaG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuem9vbSh0aGlzLl96b29tKTtcbiAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMuX29uRGV2aWNlUmVhZHkpO1xuICAgIH1cblxuICAgIF9vbk92ZXJsYXlUb3VjaFN0YXJ0IChldmVudDogVG91Y2hFdmVudCAmIHtwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyfSkge1xuICAgICAgICBjb25zdCB7em9vbVBsdXMsIHpvb21NaW51cywgcmV2ZXJzZUNhbWVyYSwgb3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIGNsYXNzTGlzdCA9IGV2ZW50LnRhcmdldFsnY2xhc3NMaXN0J10gfHwge2NvbnRhaW5zOiAoKSA9PiBmYWxzZX0sXG4gICAgICAgICAgICBudW1fdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMubGVuZ3RoO1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICBwbHVzVGltZXI6ICgpID0+IGFueSxcbiAgICAgICAgICAgIG1pbnVzVGltZXI6ICgpID0+IGFueTtcblxuICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW1lcmEtem9vbS1wYXJ0JykgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fVEhVTUIsXG4gICAgICAgICAgICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgICAgICAgICAgICB4U3RhcnQ6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgICAgIHlTdGFydDogZXZlbnQucGFnZVksXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RhcnRFdmVudDogZXZlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSB6b29tUGx1cyAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fb25ab29tUGx1c01vdXNlRG93bigpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9QTFVTLFxuICAgICAgICAgICAgICAgIHBsdXNUaW1lcjogc2V0VGltZW91dChwbHVzVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uWm9vbVBsdXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5wbHVzVGltZXIgPSBzZXRUaW1lb3V0KHBsdXNUaW1lciwgMTAwKVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSB6b29tTWludXMgJiYgbnVtX3RvdWNoZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX29uWm9vbU1pbnVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX01JTlVTLFxuICAgICAgICAgICAgICAgIG1pbnVzVGltZXI6IHNldFRpbWVvdXQobWludXNUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25ab29tTWludXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5taW51c1RpbWVyID0gc2V0VGltZW91dChtaW51c1RpbWVyLCAxMDApXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gcmV2ZXJzZUNhbWVyYSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hDYW1lcmEoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2NhbWVyYS10YWtlLXBob3RvLXBhcnQnKSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50YWtlUGhvdG8oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUudHlwZSA9IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX0ZJTkdFUlM7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBNdWx0aUNhbWVyYVsnX3RvdWNoU3RhdGUnXVsnb3JkZXInXSxcbiAgICAgICAgICAgICAgICBzdGFydHM6IE11bHRpQ2FtZXJhWydfdG91Y2hTdGF0ZSddWydzdGFydHMnXSxcbiAgICAgICAgICAgICAgICB0b3VjaDogVG91Y2g7XG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5zdGFydHMgPSB7bGVuZ3RoOiAwfTtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm9yZGVyID0gW107XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS56b29tID0gdGhpcy5fem9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0cyA9IHRvdWNoU3RhdGUuc3RhcnRzO1xuICAgICAgICAgICAgb3JkZXIgPSB0b3VjaFN0YXRlLm9yZGVyO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXSA9IHt4OiB0b3VjaC5wYWdlWCwgeTogdG91Y2gucGFnZVl9O1xuICAgICAgICAgICAgICAgICAgICBzdGFydHMubGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnB1c2godG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5ub3RfY2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheVRvdWNoRW5kIChldmVudDogVG91Y2hFdmVudCAmIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlLFxuICAgICAgICAgICAge3R5cGV9ID0gdG91Y2hTdGF0ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fUExVUykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvdWNoU3RhdGUucGx1c1RpbWVyKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9NSU5VUykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvdWNoU3RhdGUubWludXNUaW1lcik7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUykge1xuICAgICAgICAgICAgaWYgKCF0b3VjaFN0YXRlLm5vdF9jbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3ZlcmxheUNsaWNrKGV2ZW50IGFzIE1vdXNlRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgICAgc3RhcnRzID0gdG91Y2hTdGF0ZS5zdGFydHMsXG4gICAgICAgICAgICAgICAgb3JkZXIgPSB0b3VjaFN0YXRlLm9yZGVyO1xuXG4gICAgICAgICAgICB2YXIgdG91Y2g6IFRvdWNoO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydHNbdG91Y2guaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKG9yZGVyLmluZGV4T2YodG91Y2guaWRlbnRpZmllciksIDEpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdO1xuICAgICAgICAgICAgICAgICAgICBzdGFydHMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlID0ge3R5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuTk9ORX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfVxuICAgICAgICAgICAgdG91Y2hTdGF0ZS50eXBlID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RvdWNoU3RhdGUgPSB0b3VjaFN0YXRlO1xuICAgIH1cbiAgICBfb25PdmVybGF5VG91Y2hDYW5jZWwgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLl9vbk92ZXJsYXlUb3VjaEVuZChldmVudCk7XG4gICAgfVxuICAgIF9vbk92ZXJsYXlUb3VjaE1vdmUgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICB7dHlwZX0gPSB0b3VjaFN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9USFVNQikge1xuICAgICAgICAgICAgY29uc3QgcGFnZVkgPSBldmVudC5wYWdlWSAtIHRvdWNoU3RhdGUueVN0YXJ0LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSB0aGlzLl9lbGVtZW50cy56b29tQkcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlY3QgPSBiYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRIZWlnaHQgPSBiYWNrZ3JvdW5kUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuem9vbSh0b3VjaFN0YXRlLnpvb20gLSBwYWdlWSAvIGJhY2tncm91bmRIZWlnaHQgKiAzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUykge1xuICAgICAgICAgICAgY29uc3Qge3N0YXJ0cywgb3JkZXJ9ID0gdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICBzdGFydDEgPSBzdGFydHNbb3JkZXJbMF1dLFxuICAgICAgICAgICAgICAgIHN0YXJ0MiA9IHN0YXJ0c1tvcmRlclsxXV0sXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpLFxuICAgICAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IGRpbWVuc2lvbnM7XG4gICAgICAgICAgICB2YXIgY3VycmVudDE6IFRvdWNoLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQyOiBUb3VjaCxcbiAgICAgICAgICAgICAgICBzdGFydFgxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRYMjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydFkyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFgxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFgyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudFkyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGlzdDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBkaXN0MjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHRvdWNoOiBUb3VjaCxcbiAgICAgICAgICAgICAgICBkaWZmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGk9MCxsbj10b3VjaGVzLmxlbmd0aDtpPGxuO2krKykge1xuICAgICAgICAgICAgICAgIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gb3JkZXJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDEgPSB0b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gb3JkZXJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDIgPSB0b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0MSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDEgPSBzdGFydDEueDtcbiAgICAgICAgICAgICAgICBzdGFydFkxID0gc3RhcnQxLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50WDEgPSBjdXJyZW50MS5wYWdlWDtcbiAgICAgICAgICAgICAgICBjdXJyZW50WTEgPSBjdXJyZW50MS5wYWdlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0b3VjaFN0YXRlLm5vdF9jbGljayAmJiBzdGFydDEgJiYgY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0MSA9IE1hdGguc3FydCgoKHN0YXJ0WDEgLSBjdXJyZW50WDEpICoqIDIpICsgKChzdGFydFkxIC0gY3VycmVudFkxKSAqKiAyKSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3QxKSA+IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGF0ZS5ub3RfY2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0MSAmJiBzdGFydDIgJiYgY3VycmVudDEgJiYgY3VycmVudDIpIHtcbiAgICAgICAgICAgICAgICBzdGFydFgyID0gc3RhcnQyLng7XG4gICAgICAgICAgICAgICAgc3RhcnRZMiA9IHN0YXJ0Mi55O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRYMiA9IGN1cnJlbnQyLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRZMiA9IGN1cnJlbnQyLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgZGlzdDEgPSBNYXRoLnNxcnQoKChzdGFydFgyIC0gc3RhcnRYMSkgKiogMikgKyAoKHN0YXJ0WTIgLSBzdGFydFkxKSAqKiAyKSk7XG4gICAgICAgICAgICAgICAgZGlzdDIgPSBNYXRoLnNxcnQoKChjdXJyZW50WDIgLSBjdXJyZW50WDEpICoqIDIpICsgKChjdXJyZW50WTIgLSBjdXJyZW50WTEpICoqIDIpKTtcblxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaXN0MiAtIGRpc3QxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy56b29tKHRvdWNoU3RhdGUuem9vbSArIGRpZmYgLyBNYXRoLm1pbih3aWR0aCxoZWlnaHQpICogNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25PcmllbnRhdGlvbkNoYW5nZSAoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMgPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKSxcbiAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IGRpbWVuc2lvbnM7XG4gICAgICAgIGlmICh0aGlzLnNob3cgJiYgdGhpcy5fcmVhZHkgJiYgcHJldmlldykge1xuICAgICAgICAgICAgcHJldmlldy5zZXRQcmV2aWV3U2l6ZShkaW1lbnNpb25zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZURpbWVuc2lvbnMgPSB0aGlzLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZURpbWVuc2lvbnMud2lkdGggIT09IHdpZHRoIHx8IGRvbmVEaW1lbnNpb25zLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zZXRQcmV2aWV3U2l6ZScsIGVycikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQaG90b092ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk92ZXJsYXlDbGljayAoe3BhZ2VYOiB4LCBwYWdlWTogeX0pIHtcbiAgICAgICAgdGhpcy5mb2N1cyh7eCwgeX0pO1xuICAgIH1cblxuICAgIF9vblJldmVyc2VDYW1lcmFDbGljayAoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ2FtZXJhKCk7XG4gICAgfVxuXG4gICAgX29uWm9vbVBsdXNNb3VzZURvd24gKCkge1xuICAgICAgICBpZiAoKHRoaXMuX3pvb20gKyAwLjE1KSA8PSB0aGlzLl9tYXhab29tKSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fem9vbSArIDAuMTUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX21heFpvb20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uWm9vbU1pbnVzTW91c2VEb3duICgpIHtcbiAgICAgICAgaWYgKCh0aGlzLl96b29tIC0gMC4xNSkgPj0gdGhpcy5fbWluWm9vbSkge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX3pvb20gLSAwLjE1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl9taW5ab29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRha2VQaG90b1RyYW5zaXRpb25FbmQgKCkge1xuICAgICAgICBjb25zdCB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cztcbiAgICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5jbGFzc0xpc3QgJiYgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rha2luZy1waWN0dXJlJykpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndGFraW5nLXBpY3R1cmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblBob3RvT3ZlcmxheUJhY2tDbGljayAoKSB7XG4gICAgICAgIHRoaXMuX2hpZGVQaG90b092ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBfb25DYW5jZWxDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHdpbmRvd1snUHJvbWlzZSddLmFsbCh0aGlzLl9vcGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJywge2RldGFpbDogW119KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblVzZVBob3Rvc0NsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvbmVuZW5lbmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndXNlcGhvdG9zJywge2RldGFpbDogdGhpcy5faW1hZ2VzLm1hcChkID0+ICh7d2lkdGg6IGQud2lkdGgsIGhlaWdodDpkLmhlaWdodCwgZGF0YTpkLmRhdGF9KSl9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIF9jYW1lcmE6IE11bHRpQ2FtZXJhO1xuICAgIHN0YXRpYyB0b3VjaFR5cGVzID0ge1xuICAgICAgICBOT05FOiAwIGFzIDAsXG4gICAgICAgIERSQUdfWk9PTV9USFVNQjogMSBhcyAxLFxuICAgICAgICBEUkFHX1pPT01fRklOR0VSUzogMiBhcyAyLFxuICAgICAgICBIT0xEX1pPT01fUExVUzogNCBhcyA0LFxuICAgICAgICBIT0xEX1pPT01fTUlOVVM6IDggYXMgOFxuICAgIH07XG4gICAgdG91Y2hUeXBlcyA9IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXM7XG5cbiAgICBzdGF0aWMgc2hvdyAoc3VjY2VzczogKGltYWdlczogTXVsdGlDYW1lcmFJbWFnZVtdKSA9PiBhbnksIGNvbmZpZzogTXVsdGlDYW1lcmFDb25maWcpIHtcbiAgICAgICAgdmFyIGNhbWVyYSA9IHRoaXMuX2NhbWVyYTtcbiAgICAgICAgY29uc3QgY2FuY2VsQ0IgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VzZXBob3RvcycsIHVzZVBob3Rvc0NCKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBjYW5jZWxDQik7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZVBob3Rvc0NCID0gKCRldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgJiYgc3VjY2VzcygkZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgY2FuY2VsQ0IpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWNjZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHN1Y2Nlc3M7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbWVyYSkge1xuICAgICAgICAgICAgY2FtZXJhID0gdGhpcy5fY2FtZXJhID0gbmV3IE11bHRpQ2FtZXJhKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbWVyYS5fZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FtZXJhLmFkZEV2ZW50TGlzdGVuZXIoJ3VzZXBob3RvcycsIHVzZVBob3Rvc0NCKTtcbiAgICAgICAgY2FtZXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIGNhbmNlbENCKTtcbiAgICAgICAgY2FtZXJhLnNob3coY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGUgKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FtZXJhKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW1lcmEuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyICgpIHtcbiAgICAgICAgdGhpcy5fY2FtZXJhLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fY2FtZXJhLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgICAgIHRoaXMuX2NhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX2NhbWVyYSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIF9waG90b1dyYXBwZXJUZW1wbGF0ZTogSFRNTEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtcGhvdG9cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLXJlbW92ZVwiPi08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBgO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIH0pKCk7XG5cbiAgICBzdGF0aWMgX3RlbXBsYXRlOiBIVE1MRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGAke2h0bWx9YDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudFxuICAgIH0pKCk7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLEdBQUcsR0FBRyw0cFZBcVZsQixDQUFDOztBQ3BWSyxJQUFNLElBQUksR0FBRyx3REFHZCxHQUFHLHF4REF1Q1IsQ0FBQTs7O0lDa0RHO1FBQUEsaUJBaURDO1FBNUVELFlBQU8sR0FBdUIsRUFBRSxDQUFDO1FBR2pDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBY2xCLFlBQU8sR0FFSDtZQUNBLFNBQVMsRUFBRSxFQUFFO1lBQ2IsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBZ3lCRixlQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQTd4QmhDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUksV0FBVyxDQUFDLFNBQXlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBZ0IsQ0FBQztRQUNoRyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUJMLEVBbkJNLG9CQUFPLEVBQUUsd0JBQVMsRUFBRSxjQUFJLEVBQUUsa0JBQU0sRUFBRSx3QkFtQnhDLENBQUM7UUFFRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8s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
