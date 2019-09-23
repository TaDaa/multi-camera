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

var html = "\n<div class=\"camera-overlay\">\n    <div class=\"camera-zoom camera-zoom-part\">\n        <div class=\"camera-zoom-stretch camera-zoom-part\"></div>\n        <div class=\"camera-zoom-plus\">+</div>\n        <div class=\"camera-zoom-background-wrapper camera-zoom-part\">\n            <div class=\"camera-zoom-background camera-zoom-part\"></div>\n        </div>\n        <div class=\"camera-zoom-minus\">-</div>\n        <div class=\"camera-zoom-thumb camera-zoom-part\"></div>\n    </div>\n    <div class=\"camera-reverse\"></div>\n    <div class=\"camera-take-photo-border camera-take-photo-part\"></div>\n    <div class=\"camera-take-photo camera-take-photo-part\"></div>\n        <a class=\"camera-cancel camera-text-option\" href=\"javascript:void(0);\" >Cancel</a>\n        <a class=\"camera-use-photos camera-text-option\" href=\"javascript:void(0);\">Use Photos</a>\n    <div class=\"camera-indicator top\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator bottom\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-indicator right\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\">Photos</span>\n    </div>\n    <div class=\"camera-indicator left\">\n        <span class=\"camera-indicator-line\"></span>\n        <span class=\"camera-indicator-text\"></span>\n    </div>\n    <div class=\"camera-photo-overlay\">\n        <div class=\"camera-photo-overlay-background\"></div>\n        <a href=\"javascript:void(0)\" class=\"camera-photo-overlay-text back\">Back To Camera</a>\n    </div>\n    <div class=\"camera-bottom-toolbar\" >\n    </div>\n</div>\n";

var css = "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px blue;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg fill='rgba(255,255,255,.9)'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='40' fill='transparent' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath stroke='rgba(255,255,255,.9)' stroke-width='25' fill='rgba(0,0,0,0.4)' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath d='M616.9,659.8c-33.5,28.1-73.9,44.3-116.9,44.3c-92.8,0-169.2-73.9-180.9-158.1h78.1L298,418.3l-95.8,127.6h75.2C289.4,653.1,383.9,745,500,745c53.3,0,105.1-19.3,145.7-54.1l6-5.5l-29.6-29.8L616.9,659.8z'/%3E%3Cpath d='M652.5,354.2C611.1,316.5,557,296,500,296c-53.3,0-105.1,19.3-145.7,54.1l-6,5.2l29.6,29.6l5.2-4.4c33-27.7,74.5-43.4,116.9-43.4c92.8,0,169.1,73.5,180.9,162.8h-78.2l99.1,130.7l96-130.7h-75.3C716.8,449,692.1,390.4,652.5,354.2z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px rgba(100,255,100,0.7);\n        padding:0.2em 0.5em;\n        transition: opacity 300ms;\n        opacity: 0;\n    }\n    .camera-use-photos.has-photos {\n        opacity: 1;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px red;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        color: white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        z-index:1;\n        font-weight:bold;\n        width:100%;\n        height: auto;\n        top: 0.05em;\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";

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
        result.innerHTML = "\n            " + html + "\n            <style>\n            " + css + "\n            </style>\n        ";
        return result;
    })();
    return MultiCamera;
}());

exports.MultiCamera = MultiCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FtZXJhLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL211bHRpY2FtZXJhLmh0bWwudHMiLCIuLi9zcmMvbXVsdGljYW1lcmEuY3NzLnRzIiwiLi4vc3JjL211bHRpY2FtZXJhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBodG1sID0gYFxuPGRpdiBjbGFzcz1cImNhbWVyYS1vdmVybGF5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tIGNhbWVyYS16b29tLXBhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLXN0cmV0Y2ggY2FtZXJhLXpvb20tcGFydFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tcGx1c1wiPis8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS16b29tLWJhY2tncm91bmQtd3JhcHBlciBjYW1lcmEtem9vbS1wYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tYmFja2dyb3VuZCBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXpvb20tbWludXNcIj4tPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtem9vbS10aHVtYiBjYW1lcmEtem9vbS1wYXJ0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1yZXZlcnNlXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS10YWtlLXBob3RvLWJvcmRlciBjYW1lcmEtdGFrZS1waG90by1wYXJ0XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS10YWtlLXBob3RvIGNhbWVyYS10YWtlLXBob3RvLXBhcnRcIj48L2Rpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJjYW1lcmEtY2FuY2VsIGNhbWVyYS10ZXh0LW9wdGlvblwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgPkNhbmNlbDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJjYW1lcmEtdXNlLXBob3RvcyBjYW1lcmEtdGV4dC1vcHRpb25cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlVzZSBQaG90b3M8L2E+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3IgdG9wXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciBib3R0b21cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yLWxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci10ZXh0XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYW1lcmEtaW5kaWNhdG9yIHJpZ2h0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPlBob3Rvczwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLWluZGljYXRvciBsZWZ0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FtZXJhLWluZGljYXRvci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbWVyYS1pbmRpY2F0b3ItdGV4dFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by1vdmVybGF5LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dCBiYWNrXCI+QmFjayBUbyBDYW1lcmE8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbWVyYS1ib3R0b20tdG9vbGJhclwiID5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxuIiwiZXhwb3J0IGNvbnN0IGNzcyA9IGBcbiAgICAuY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dC5iYWNrIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcbiAgICAgICAgYm90dG9tOiA0LjBlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAycHggYmx1ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6YWxsO1xuICAgICAgICBwYWRkaW5nOjAuMmVtIDAuNWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90by1vdmVybGF5IC5jYW1lcmEtcGhvdG8td3JhcHBlciB7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yIC5jYW1lcmEtaW5kaWNhdG9yLXRleHQge1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IubGVmdCAuY2FtZXJhLWluZGljYXRvci1saW5lLFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnJpZ2h0IC5jYW1lcmEtaW5kaWNhdG9yLWxpbmVcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCwxNTAsMjU1LDAuNyk7XG4gICAgICAgIC13ZWJraXQtbWFzazpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDAlLCB0cmFuc3BhcmVudCA1MCUsICAgYmxhY2sgMTAwJSk7XG4gICAgICAgIC13ZWJraXQtbWFzay1zaXplOjEwMCUgMTAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOjAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yIHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmxlZnQge1xuICAgICAgICByaWdodDogN2VtO1xuICAgICAgICBsZWZ0OiA1ZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnJpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcbiAgICAgICAgdG9wOiAxLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSAuY2FtZXJhLWluZGljYXRvci10ZXh0LFxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCAuY2FtZXJhLWluZGljYXRvci10ZXh0XG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSlyb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgbGVmdDowJTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6LTFlbTtcbiAgICB9XG4gICAgLmNhbWVyYS1pbmRpY2F0b3IudG9wIC5jYW1lcmEtaW5kaWNhdG9yLWxpbmUsXG4gICAgLmNhbWVyYS1pbmRpY2F0b3IuYm90dG9tIC5jYW1lcmEtaW5kaWNhdG9yLWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206NS41ZW07XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDUwLDE1MCwyNTUsMC43KTtcbiAgICAgICAgLXdlYmtpdC1tYXNrOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAzZW0sIGJsYWNrIDAlLCB0cmFuc3BhcmVudCA1NyUsICAgYmxhY2sgMTAwJSk7XG4gICAgICAgIC13ZWJraXQtbWFzay1zaXplOjEwMCUgMTAwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOjAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLmJvdHRvbSB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICB0b3A6IDBlbTtcbiAgICAgICAgYm90dG9tOiAwZW07XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuICAgIC5jYW1lcmEtaW5kaWNhdG9yLnRvcCB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIHRvcDogMGVtO1xuICAgICAgICBib3R0b206IDBlbTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICB9XG5cbiAgICAuY2FtZXJhLW92ZXJsYXkge1xuICAgICAgICB2aXNpYmlsaXR5OnZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO1xuICAgIH1cbiAgICAuY2FtZXJhLXRvb2stcGljdHVyZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuY2FtZXJhLXRha2UtcGhvdG8tYm9yZGVyIHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogLTAuMjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIGhlaWdodDozLjc1ZW07XG4gICAgICAgIHdpZHRoOjMuNzVlbTtcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzowcHggMHB4IDBweCAwLjM1ZW0gd2hpdGUsIDBweCAwcHggMHB4IDAuNGVtIHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBsaW5lYXI7XG4gICAgfVxuICAgIC5jYW1lcmEtdGFrZS1waG90byB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgaGVpZ2h0OjMuNWVtO1xuICAgICAgICB3aWR0aDozLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE3NW1zIGxpbmVhcjtcbiAgICB9XG4gICAgLnRha2luZy1waWN0dXJlIC5jYW1lcmEtdGFrZS1waG90byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gICAgLmNhbWVyYS1yZXZlcnNlIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAwLjk1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSl0cmFuc2xhdGUoMCwtNWVtKXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgd2lkdGg6IDIuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J3V0Zi04JyUzRiUzRSUzQyEtLSBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLSUzRSUzQyFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJyUzRSUzQ3N2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCAxMDAwIDEwMDAnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDbWV0YWRhdGElM0UgU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gJTNDL21ldGFkYXRhJTNFJTNDZyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC45KSclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgwLDAsMCwwLjUpJyBzdHJva2Utd2lkdGg9JzQwJyBmaWxsPSd0cmFuc3BhcmVudCcgZD0nTTkxMi4yLDI1NUg3NTQuNmMtODEuOS05MS45LTEwNy43LTEyMi41LTEzOS4yLTEyMi41SDM4OS42Yy0zMS40LDAtNTYuNiwzMC42LTEzOS4xLDEyMi41aC0zMy44di00MC44aC04Ni44VjI1NUg5NS41Yy00NSwwLTg1LjUsMzMuNy04NS41LDc4LjN2NDQ5LjJjMCw0NC42LDQwLjUsODUsODUuNSw4NWg4MTYuN2M0NSwwLDc3LjgtNDAuNCw3Ny44LTg1VjMzMy4zQzk5MCwyODguNyw5NTcuMiwyNTUsOTEyLjIsMjU1eicvJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsLjkpJyBzdHJva2Utd2lkdGg9JzI1JyBmaWxsPSdyZ2JhKDAsMCwwLDAuNCknIGQ9J005MTIuMiwyNTVINzU0LjZjLTgxLjktOTEuOS0xMDcuNy0xMjIuNS0xMzkuMi0xMjIuNUgzODkuNmMtMzEuNCwwLTU2LjYsMzAuNi0xMzkuMSwxMjIuNWgtMzMuOHYtNDAuOGgtODYuOFYyNTVIOTUuNWMtNDUsMC04NS41LDMzLjctODUuNSw3OC4zdjQ0OS4yYzAsNDQuNiw0MC41LDg1LDg1LjUsODVoODE2LjdjNDUsMCw3Ny44LTQwLjQsNzcuOC04NVYzMzMuM0M5OTAsMjg4LjcsOTU3LjIsMjU1LDkxMi4yLDI1NXonLyUzRSUzQ3BhdGggZD0nTTYxNi45LDY1OS44Yy0zMy41LDI4LjEtNzMuOSw0NC4zLTExNi45LDQ0LjNjLTkyLjgsMC0xNjkuMi03My45LTE4MC45LTE1OC4xaDc4LjFMMjk4LDQxOC4zbC05NS44LDEyNy42aDc1LjJDMjg5LjQsNjUzLjEsMzgzLjksNzQ1LDUwMCw3NDVjNTMuMywwLDEwNS4xLTE5LjMsMTQ1LjctNTQuMWw2LTUuNWwtMjkuNi0yOS44TDYxNi45LDY1OS44eicvJTNFJTNDcGF0aCBkPSdNNjUyLjUsMzU0LjJDNjExLjEsMzE2LjUsNTU3LDI5Niw1MDAsMjk2Yy01My4zLDAtMTA1LjEsMTkuMy0xNDUuNyw1NC4xbC02LDUuMmwyOS42LDI5LjZsNS4yLTQuNGMzMy0yNy43LDc0LjUtNDMuNCwxMTYuOS00My40YzkyLjgsMCwxNjkuMSw3My41LDE4MC45LDE2Mi44aC03OC4ybDk5LjEsMTMwLjdsOTYtMTMwLjdoLTc1LjNDNzE2LjgsNDQ5LDY5Mi4xLDM5MC40LDY1Mi41LDM1NC4yeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZToyLjVlbSAyLjVlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuY2FtZXJhLWJvdHRvbS10b29sYmFyIHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGhlaWdodDogNC4xZW07XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICBvdmVyZmxvdy14OnNjcm9sbDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7XG4gICAgfVxuICAgIC5jYW1lcmEtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMC41ZW0gYmxhY2s7XG4gICAgICAgIGhlaWdodDo1ZW07XG4gICAgICAgIHdpZHRoOjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS10ZXh0LW9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOjAgMC41ZW07XG4gICAgfVxuICAgIC5jYW1lcmEtdXNlLXBob3RvcyB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICByaWdodDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206c29saWQgMnB4IHJnYmEoMTAwLDI1NSwxMDAsMC43KTtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLmNhbWVyYS11c2UtcGhvdG9zLmhhcy1waG90b3Mge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuY2FtZXJhLWNhbmNlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4zZW07XG4gICAgICAgIGJvdHRvbTogNC4wZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206c29saWQgMnB4IHJlZDtcbiAgICAgICAgcGFkZGluZzowLjJlbSAwLjVlbTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cbiAgICAuY2FtZXJhLXpvb20tYmFja2dyb3VuZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgLjc1ZW0sIGJsYWNrIC43NWVtLCBibGFjayAyNWVtKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6MzBlbSAzMGVtO1xuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246NTAlIDAlO1xuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1wbHVzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgfVxuICAgIC5jYW1lcmEtem9vbS1taW51cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY2FtZXJhLXpvb20tdGh1bWIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwLjE1ZW0gcmdiYSgxMDAsMjU1LDEwMCwwLjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICBib3R0b206IDAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB9XG4gICAgLmNhbWVyYS16b29tLXN0cmV0Y2gge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICAgICAgdG9wOiAtMWVtO1xuICAgICAgICByaWdodDogLTFlbTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sMGVtKXNjYWxlKDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXMsIG9wYWNpdHkgMzAwbXMsIGxlZnQgMzAwbXMsIGJvdHRvbSAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIH1cbiAgICAuY2FtZXJhLXBob3RvLXdyYXBwZXIuYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgxMDAsMjU1LDEwMCwwLjM1KTtcbiAgICB9XG4gICAgLmNhbWVyYS1waG90byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCl0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgfVxuICAgIC5jYW1lcmEtcGhvdG8tcmVtb3ZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogIDBweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRleHQtc2hhZG93OiAgMHB4IDBweCAxcHggYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLDIwMCwyMDAsLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAwLjA1ZW07XG4gICAgICAgIHJpZ2h0OiAwLjA1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbmA7XG4iLCJcbmltcG9ydCB7aHRtbH0gZnJvbSAnLi9tdWx0aWNhbWVyYS5odG1sJztcbmltcG9ydCB7Y3NzfSBmcm9tICcuL211bHRpY2FtZXJhLmNzcyc7XG5cbmludGVyZmFjZSBNdWx0aUNhbWVyYUNvbmZpZyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDYW1lcmFJbWcge1xuICAgIGRhdGE6IHN0cmluZztcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUGhvdG9FdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcbiAgICBkZXRhaWw6IE11bHRpQ2FtZXJhSW1nW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbEV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuICAgIGRldGFpbDogTXVsdGlDYW1lcmFJbWdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9va1Bob3RvRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG4gICAgZGV0YWlsOiBNdWx0aUNhbWVyYUltZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNhbWVyYUV2ZW50cyB7XG4gICAgdXNlcGhvdG9zOiAgVXNlUGhvdG9FdmVudDtcbiAgICBjYW5jZWw6IENhbmNlbEV2ZW50O1xuICAgIHRvb2twaG90bzogIFRvb2tQaG90b0V2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2FtZXJhSW1hZ2UgZXh0ZW5kcyBNdWx0aUNhbWVyYUltZyB7XG4gICAgd3JhcHBlcj86IEhUTUxFbGVtZW50O1xuICAgIGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICByZW1vdmVkPzogYm9vbGVhbjtcbiAgICB4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhbWVyYUVsZW1lbnRzID1cbiAgICAgICAgJ292ZXJsYXknIHxcbiAgICAgICAgJ3pvb21QbHVzJyB8XG4gICAgICAgICd6b29tTWludXMnIHxcbiAgICAgICAgJ3pvb21UaHVtYicgfFxuICAgICAgICAnem9vbUJHJyB8XG4gICAgICAgICd6b29tQkdXcmFwcGVyJyB8XG4gICAgICAgICdyZXZlcnNlQ2FtZXJhJyB8XG4gICAgICAgICdjYW5jZWwnIHxcbiAgICAgICAgJ3Rha2VQaG90bycgfFxuICAgICAgICAndXNlUGhvdG9zJyB8XG4gICAgICAgICdib3R0b21Ub29sYmFyJyB8XG4gICAgICAgICd0b3BJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdib3R0b21JbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdsZWZ0SW5kaWNhdG9yVGV4dCcgfFxuICAgICAgICAncmlnaHRJbmRpY2F0b3JUZXh0JyB8XG4gICAgICAgICdwaG90b092ZXJsYXknIHxcbiAgICAgICAgJ3Bob3RvT3ZlcmxheUJhY2tncm91bmQnIHxcbiAgICAgICAgJ2JhY2snO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlDYW1lcmEge1xuICAgIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBfb3BlcmF0aW9uczogUHJvbWlzZTxhbnk+W107XG4gICAgX2VsZW1lbnRzOiB7W2tleSBpbiBNdWx0aUNhbWVyYUVsZW1lbnRzXTogSFRNTEVsZW1lbnR9O1xuICAgIF9lbVRvUHg6IG51bWJlcjtcbiAgICBfc2hvdzogTXVsdGlDYW1lcmFDb25maWcgfCBib29sZWFuO1xuICAgIF9yZWFkeTogYm9vbGVhbjtcbiAgICBfdGFraW5nUGljdHVyZTogYm9vbGVhbjtcbiAgICBfc2hvd2luZ1Bob3RvT3ZlcmxheTogTXVsdGlDYW1lcmFJbWFnZSB8IGZhbHNlO1xuICAgIF9pbWFnZXM6IE11bHRpQ2FtZXJhSW1hZ2VbXSA9IFtdO1xuICAgIF9hY3RpdmVQaG90bzogTXVsdGlDYW1lcmFJbWFnZTtcbiAgICBfZnJvbnRDYW1lcmE6IGJvb2xlYW47XG4gICAgX21heFpvb206IG51bWJlciA9IDU7XG4gICAgX21pblpvb206IG51bWJlciA9IDE7XG4gICAgX3pvb206IG51bWJlciA9IDE7XG4gICAgX3RvdWNoU3RhdGU6IHtcbiAgICAgICAgdHlwZTogTXVsdGlDYW1lcmFbJ3RvdWNoVHlwZXMnXVtrZXlvZiBNdWx0aUNhbWVyYVsndG91Y2hUeXBlcyddXTtcbiAgICAgICAgem9vbT86IG51bWJlcjtcbiAgICAgICAgeFN0YXJ0PzogbnVtYmVyO1xuICAgICAgICB5U3RhcnQ/OiBudW1iZXI7XG4gICAgICAgIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICAgICAgICBzdGFydEV2ZW50PzogRXZlbnQ7XG4gICAgICAgIHBsdXNUaW1lcj86IGFueTtcbiAgICAgICAgbWludXNUaW1lcj86IGFueTtcbiAgICAgICAgc3RhcnRzPzoge2xlbmd0aDogbnVtYmVyLCBba2V5OiBudW1iZXJdOiB7eDogbnVtYmVyOyB5Om51bWJlcjt9fTtcbiAgICAgICAgb3JkZXI/OiBudW1iZXJbXVxuICAgICAgICBub3RfY2xpY2s/OiBib29sZWFuO1xuICAgIH07XG4gICAgX2V2ZW50czoge1xuICAgICAgICBba2V5IGluIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzXTogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNba2V5XSkgPT4gKHZvaWQgfCBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbikpW11cbiAgICB9ID0ge1xuICAgICAgICB1c2VwaG90b3M6IFtdLFxuICAgICAgICBjYW5jZWw6IFtdLFxuICAgICAgICB0b29rcGhvdG86IFtdXG4gICAgfTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIE11bHRpQ2FtZXJhLl9jYW1lcmEgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gKE11bHRpQ2FtZXJhLl90ZW1wbGF0ZSBhcyBIVE1MRWxlbWVudCkuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB7b3ZlcmxheSwgdGFrZVBob3RvLCBiYWNrLCBjYW5jZWwsIHVzZVBob3Rvc30gPSB0aGlzLl9lbGVtZW50cyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGVsZW1lbnQsXG4gICAgICAgICAgICB6b29tUGx1czogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXpvb20tcGx1cycpLFxuICAgICAgICAgICAgem9vbU1pbnVzOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1taW51cycpLFxuICAgICAgICAgICAgem9vbVRodW1iOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS10aHVtYicpLFxuICAgICAgICAgICAgem9vbUJHOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICB6b29tQkdXcmFwcGVyOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtem9vbS1iYWNrZ3JvdW5kLXdyYXBwZXInKSxcbiAgICAgICAgICAgIHJldmVyc2VDYW1lcmE6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1yZXZlcnNlJyksXG4gICAgICAgICAgICBjYW5jZWw6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jYW5jZWwnKSxcbiAgICAgICAgICAgIHRha2VQaG90bzogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXRha2UtcGhvdG8nKSxcbiAgICAgICAgICAgIHVzZVBob3RvczogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXVzZS1waG90b3MnKSxcbiAgICAgICAgICAgIGJvdHRvbVRvb2xiYXI6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1ib3R0b20tdG9vbGJhcicpLFxuICAgICAgICAgICAgdG9wSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci50b3AgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgYm90dG9tSW5kaWNhdG9yVGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWluZGljYXRvci5ib3R0b20gLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgbGVmdEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IubGVmdCAuY2FtZXJhLWluZGljYXRvci10ZXh0JyksXG4gICAgICAgICAgICByaWdodEluZGljYXRvclRleHQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1pbmRpY2F0b3IucmlnaHQgLmNhbWVyYS1pbmRpY2F0b3ItdGV4dCcpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtcGhvdG8tb3ZlcmxheScpLFxuICAgICAgICAgICAgcGhvdG9PdmVybGF5QmFja2dyb3VuZDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgYmFjazogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLW92ZXJsYXktdGV4dC5iYWNrJylcbiAgICAgICAgfSxcbiAgICAgICAgZW1UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtVGVzdC5zdHlsZS53aWR0aCA9IGVtVGVzdC5zdHlsZS5oZWlnaHQgPSAnMWVtJztcbiAgICAgICAgZW1UZXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZW1UZXN0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1UZXN0KTtcbiAgICAgICAgdGhpcy5fZW1Ub1B4ID0gZW1UZXN0LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKGVtVGVzdCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3Iob3ZlcmxheSk7XG5cbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5fb25EZXZpY2VSZWFkeSA9IHRoaXMuX29uRGV2aWNlUmVhZHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSA9IHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vbkNhbmNlbENsaWNrKCksIHRydWUpO1xuICAgICAgICB1c2VQaG90b3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblVzZVBob3Rvc0NsaWNrKCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50OiBNb3VzZUV2ZW50ICYgVG91Y2hFdmVudCkgPT4gdGhpcy5fb25PdmVybGF5VG91Y2hFbmQoZXZlbnQpLCB0cnVlKTtcbiAgICAgICAgYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGhvdG9PdmVybGF5QmFja0NsaWNrKCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudDogTW91c2VFdmVudCAmIFRvdWNoRXZlbnQpID0+IHRoaXMuX29uT3ZlcmxheVRvdWNoTW92ZShldmVudCksIHRydWUpO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaFN0YXJ0KGV2ZW50KSwgdHJ1ZSk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQ6IE1vdXNlRXZlbnQgJiBUb3VjaEV2ZW50KSA9PiB0aGlzLl9vbk92ZXJsYXlUb3VjaENhbmNlbChldmVudCksIHRydWUpO1xuICAgICAgICB0YWtlUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMuX29uVGFrZVBob3RvVHJhbnNpdGlvbkVuZCgpKTtcblxuICAgICAgICAvL1RPRE8gY29uc2lkZXIgYWRkIGluIHNob3cgcmVtb3ZlIGV2ZW50bGlzdGVuZXIgaW4gaGlkZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ2RldmljZSddID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93WydkZXZpY2UnXS5jb3Jkb3ZhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLl9vbkRldmljZVJlYWR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uRGV2aWNlUmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXI8QSBleHRlbmRzIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzID0ga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+IChuYW1lOiBBLCBmbjogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNbQV0pID0+ICh2b2lkIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGJvb2xlYW4pKSkge1xuICAgICAgICAodGhpcy5fZXZlbnRzW25hbWVdIGFzIGFueSkucHVzaChmbiBhcyAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkpO1xuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI8QSBleHRlbmRzIGtleW9mIE11bHRpQ2FtZXJhRXZlbnRzID0ga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+IChuYW1lOiBBLCBmbjogKChldmVudDogTXVsdGlDYW1lcmFFdmVudHNbQV0pID0+ICh2b2lkIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGJvb2xlYW4pKSkge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHNbbmFtZV0sXG4gICAgICAgICAgICBpbmRleCA9IChldmVudHMgYXMgYW55KS5pbmRleE9mKGZuIGFzIChldmVudDogRXZlbnQpID0+IGFueSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudDxBIGV4dGVuZHMga2V5b2YgTXVsdGlDYW1lcmFFdmVudHM+KGV2ZW50OiBNdWx0aUNhbWVyYUV2ZW50c1tBXSkge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHNbZXZlbnQudHlwZV07XG4gICAgICAgIGZvciAodmFyIGk9MCxsbj1ldmVudHMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICBldmVudHNbaV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2NyZWVuRGltZW5zaW9ucyAoKSB7XG4gICAgICAgIHZhciB7aGVpZ2h0LCB3aWR0aH0gPSB3aW5kb3cuc2NyZWVuO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3JpZW50YXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocGFyc2VJbnQoYCR7d2luZG93Lm9yaWVudGF0aW9ufWApIC8gOTApID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG4gICAgfVxuXG4gICAgc2hvdyAoY29uZmlnOiBNdWx0aUNhbWVyYUNvbmZpZykge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J10sXG4gICAgICAgICAgICB7b3ZlcmxheX0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIHt3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xuXG4gICAgICAgIC8vVE9ETyBjaGVjayB0aGlzXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBpZiAodGhpcy5fc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkgfHwgIXByZXZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3cgPSBjb25maWcgfHwge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaG93ID0gdHJ1ZTtcblxuICAgICAgICBwcmV2aWV3LnN0b3BDYW1lcmEoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICBzdGFydENhbWVyYSgpO1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsIGVycik7XG4gICAgICAgICAgICAgICAgc3RhcnRDYW1lcmEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBzdGFydENhbWVyYSAoKSB7XG4gICAgICAgICAgICBwcmV2aWV3LnN0YXJ0Q2FtZXJhKHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiBwcmV2aWV3LkNBTUVSQV9ESVJFQ1RJT04uQkFDSyxcbiAgICAgICAgICAgICAgICAgICAgdG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0YXBQaG90bzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhcEZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld0RyYWc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdGFydENhbWVyYScsIGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB3aW5kb3dbJ0NhbWVyYVByZXZpZXcnXSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICBpZiAodGhpcy5fcmVhZHkgJiYgdGhpcy5fc2hvdykge1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZpZXcuc3RvcENhbWVyYShcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMucGhvdG9PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3RvcENhbWVyYScsIGVycilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0YWtlUGhvdG8gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9va1BpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCk7XG5cbiAgICAgICAgdG9va1BpY3R1cmUuY2xhc3NOYW1lID0gJ2NhbWVyYS10b29rLXBpY3R1cmUnO1xuXG4gICAgICAgIGlmICghdGhpcy5fdGFraW5nUGljdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFraW5nUGljdHVyZSA9IHRydWU7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Rha2luZy1waWN0dXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b29rUGljdHVyZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdGFraW5nUGljdHVyZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRvb2tQaWN0dXJlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0b29rUGljdHVyZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvb2tQaWN0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29rUGljdHVyZS5zdHlsZS5vcGFjaXR5ID0gJzAnKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZCh0b29rUGljdHVyZSk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyB3aW5kb3dbJ1Byb21pc2UnXSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J107XG5cbiAgICAgICAgICAgIHByZXZpZXcudGFrZVBpY3R1cmUoe3dpZHRoLCBoZWlnaHR9LCAoYmFzZTY0OiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiAgTXVsdGlDYW1lcmFJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwke2Jhc2U2NFswXX1gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaG90b1dyYXBwZXIgPSBNdWx0aUNhbWVyYS5fcGhvdG9XcmFwcGVyVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBob3RvRWxlbWVudCA9IHBob3RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCA9IHBob3RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHtib3R0b21Ub29sYmFyfSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRvb2tQaG90b0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b29rcGhvdG8nLCB7ZGV0YWlsOiB7ZGF0YTogaW1hZ2UuZGF0YSwgd2lkdGg6aW1hZ2Uud2lkdGgsIGhlaWdodDppbWFnZS5oZWlnaHR9fSk7XG5cbiAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2UuZGF0YX1cIilgO1xuICAgICAgICAgICAgICAgIGJvdHRvbVRvb2xiYXIuaW5zZXJ0QmVmb3JlKHBob3RvV3JhcHBlciwgYm90dG9tVG9vbGJhci5jaGlsZE5vZGVzWzBdKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaG90b0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpdHJhbnNsYXRlKDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcGhvdG9XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCRldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaG9vc2VBY3RpdmVQaG90byhpbWFnZSwgJGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRvb2tQaG90b0V2ZW50KTtcblxuICAgICAgICAgICAgICAgIGltYWdlLndyYXBwZXIgPSBwaG90b1dyYXBwZXI7XG4gICAgICAgICAgICAgICAgaW1hZ2UuZWxlbWVudCA9IHBob3RvRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMudW5zaGlmdChpbWFnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wZXJhdGlvbnMuaW5kZXhPZihwcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZW1vdmVJbWFnZSAoaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UpIHtcbiAgICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faW1hZ2VzLmluZGV4T2YoaW1hZ2UpLFxuICAgICAgICAgICAge3dyYXBwZXJ9ID0gaW1hZ2U7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2ltYWdlcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGAke3dyYXBwZXIuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCdzY2FsZSgxKScpWzBdfXNjYWxlKDApYDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMuYm90dG9tVG9vbGJhci5yZW1vdmVDaGlsZCh3cmFwcGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZG9MYXlvdXQoKTtcblxuICAgICAgICBpZiAoaW1hZ2UgPT09IHRoaXMuX2FjdGl2ZVBob3RvKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5faW1hZ2VzW2luZGV4XSB8fCB0aGlzLl9pbWFnZXNbdGhpcy5faW1hZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaG9vc2VBY3RpdmVQaG90byhuZXh0LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaG9vc2VBY3RpdmVQaG90byAoaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UsIGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0WydjbGFzc0xpc3QnXSAmJiBldmVudC50YXJnZXRbJ2NsYXNzTGlzdCddLmNvbnRhaW5zKCdjYW1lcmEtcGhvdG8tcmVtb3ZlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlUGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVBob3RvLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hY3RpdmVQaG90byA9IGltYWdlO1xuICAgICAgICB0aGlzLl9zaG93UGhvdG9PdmVybGF5KCk7XG4gICAgICAgIGltYWdlLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgX2hpZGVQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuX2FjdGl2ZVBob3RvLFxuICAgICAgICAgICAge3dyYXBwZXI6IG9yaWdpbmFsfSA9IGltYWdlIHx8IHt3cmFwcGVyOiB1bmRlZmluZWR9LFxuICAgICAgICAgICAgd3JhcHBlciA9IHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkgIT09IGZhbHNlID8gdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheS53cmFwcGVyIDogdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSxcbiAgICAgICAgICAgIHJlY3QgPSBvcmlnaW5hbCAmJiBvcmlnaW5hbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0ICYge3g6IG51bWJlcn0sXG4gICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzO1xuXG4gICAgICAgIGlmICghd3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkgPSBmYWxzZTtcblxuICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlID09PSBlbGVtZW50cy5waG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBob3RvID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGAke3JlY3QueCAvIHRoaXMuX2VtVG9QeH1lbWA7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcwZW0nO1xuICAgICAgICAgICAgcGhvdG8uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIGlmIChpbWFnZS5yZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDBlbSwwZW0pc2NhbGUoMCknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93UGhvdG9PdmVybGF5ICgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSAgdGhpcy5fYWN0aXZlUGhvdG8sXG4gICAgICAgICAgICB7d2lkdGgsIGhlaWdodCwgd3JhcHBlcjogb3JpZ2luYWwsIGRhdGF9ID0gaW1hZ2UsXG4gICAgICAgICAgICByZWN0ID0gb3JpZ2luYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdCAmIHt4OiBudW1iZXJ9LFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7d3JhcHBlcn0gPSB0aGlzLl9zaG93aW5nUGhvdG9PdmVybGF5ID0ge2RhdGEsIHdpZHRoLCBoZWlnaHQsIHdyYXBwZXI6IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudH0sXG4gICAgICAgICAgICBwaG90byA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmNhbWVyYS1waG90bycpIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgcmVtb3ZlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLXBob3RvLXJlbW92ZScpXG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnRzLnBob3RvT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMGVtLDBlbSlzY2FsZSgxKSdcbiAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7cmVjdC54L3RoaXMuX2VtVG9QeH1lbWBcblxuICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocmVtb3ZlKVxuXG4gICAgICAgIHBob3RvLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5iYWNrLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBlbGVtZW50cy5waG90b092ZXJsYXlCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBwaG90by5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5fY2VudGVyUGhvdG9PdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jZW50ZXJQaG90b092ZXJsYXkgKCkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICBjbG9uZUltYWdlID0gdGhpcy5fc2hvd2luZ1Bob3RvT3ZlcmxheTtcbiAgICAgICAgdmFyIHt3aWR0aCwgaGVpZ2h0LCB3cmFwcGVyfSA9IGNsb25lSW1hZ2UgfHwge3dpZHRoOiB1bmRlZmluZWQsIGhlaWdodDogdW5kZWZpbmVkLCB3cmFwcGVyOiB1bmRlZmluZWR9O1xuICAgICAgICB2YXIgc2NhbGU6IG51bWJlcjsgXG5cbiAgICAgICAgaWYgKHdpZHRoID4gZGltZW5zaW9ucy53aWR0aCkge1xuICAgICAgICAgICAgc2NhbGUgPSBkaW1lbnNpb25zLndpZHRoIC8gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA+IGRpbWVuc2lvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXNjYWxlIHx8ICgoZGltZW5zaW9ucy5oZWlnaHQgLyBoZWlnaHQpID4gc2NhbGUpKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSBkaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ggPSAoZGltZW5zaW9ucy53aWR0aCAtIHdpZHRoICogc2NhbGUpIC8gMiAvIHRoaXMuX2VtVG9QeCxcbiAgICAgICAgICAgIGN5ID0gKGRpbWVuc2lvbnMuaGVpZ2h0IC0gaGVpZ2h0ICogc2NhbGUpIC8gMiAvIHRoaXMuX2VtVG9QeDtcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCpzY2FsZX1weGA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aCpzY2FsZX1weGA7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGAke2N4fWVtYDtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSBgJHtjeX1lbWA7XG4gICAgfVxuXG4gICAgZm9jdXMgKHt4LCB5fToge3g6bnVtYmVyLCB5Om51bWJlcn0pIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddXG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTXVsdGlDYW1lcmEuZm9jdXMoJHtbeCx5XX0pYCk7XG4gICAgICAgICAgICBwcmV2aWV3LnRhcFRvRm9jdXMoeCwgeSwgKCkgPT4ge30sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnRhcFRvRm9jdXMnLCBlcnIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzd2l0Y2hDYW1lcmEgKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gd2luZG93WydDYW1lcmFQcmV2aWV3J107XG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSAmJiBwcmV2aWV3KSB7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyB3aW5kb3dbJ1Byb21pc2UnXSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldy5zd2l0Y2hDYW1lcmEoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJvbnRDYW1lcmEgPSAhdGhpcy5fZnJvbnRDYW1lcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbWVyYVByZXZpZXcuc3dpdGNoQ2FtZXJhJywgZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wZXJhdGlvbnMuaW5kZXhPZihwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB6b29tICh6b29tOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddO1xuXG4gICAgICAgIGlmICghdGhpcy5fcmVhZHkgfHwgIXByZXZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtfbWF4Wm9vbSwgX21pblpvb219ID0gdGhpcyxcbiAgICAgICAgICAgIHt6b29tQkcsIHpvb21CR1dyYXBwZXIsIHpvb21UaHVtYn0gPSB0aGlzLl9lbGVtZW50cyxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZWN0ID0gem9vbUJHLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgYmFja2dyb3VuZEhlaWdodCA9IGJhY2tncm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICBpZiAoem9vbSAgPCBfbWluWm9vbSkge1xuICAgICAgICAgICAgem9vbSA9IF9taW5ab29tO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh6b29tID4gX21heFpvb20pIHtcbiAgICAgICAgICAgIHpvb20gPSBfbWF4Wm9vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3pvb20gPSB6b29tO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9ICgoem9vbSAtIDEpIC8gKHRoaXMuX21heFpvb20gLSAxKSksXG4gICAgICAgICAgICB0b3AgPSBkaXYgKiBiYWNrZ3JvdW5kSGVpZ2h0O1xuICAgICAgICB6b29tVGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstdG9wfXB4KXRyYW5zbGF0ZSgtNTAlLCA1MCUpYDtcbiAgICAgICAgKHpvb21CR1dyYXBwZXIuc3R5bGUgYXMgYW55KS53ZWJraXRNYXNrUG9zaXRpb249YDUwJSAkeyhkaXYqMTAwKX0lYDtcblxuICAgICAgICBwcmV2aWV3LnNldFpvb20oem9vbSwgKCkgPT4ge30sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnNldFpvb20nLCBlcnIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2RvTGF5b3V0ICgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5faW1hZ2VzLFxuICAgICAgICAgICAgd2lkdGggPSAzLjUsXG4gICAgICAgICAgICBsbiA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICB1c2VQaG90b3MgPSB0aGlzLl9lbGVtZW50cy51c2VQaG90b3M7XG4gICAgICAgIFxuICAgICAgICB2YXIgaW1hZ2U6IE11bHRpQ2FtZXJhSW1hZ2UsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGZvciAoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgIGltYWdlLnggPSBpICogd2lkdGg7XG4gICAgICAgICAgICBpbWFnZS53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHsoaSp3aWR0aCl9ZW0sIDBlbSlzY2FsZSgxKWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG4pIHtcbiAgICAgICAgICAgIGlmICghdXNlUGhvdG9zLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXBob3RvcycpKSB7XG4gICAgICAgICAgICAgICB1c2VQaG90b3MuY2xhc3NMaXN0LmFkZCgnaGFzLXBob3RvcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVzZVBob3Rvcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1waG90b3MnKSkge1xuICAgICAgICAgICB1c2VQaG90b3MuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXBob3RvcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3Jlc2V0ICgpIHtcbiAgICAgICAgY29uc3Qge2JvdHRvbVRvb2xiYXIsIHpvb21UaHVtYiwgem9vbUJHV3JhcHBlcn0gPSB0aGlzLl9lbGVtZW50cztcblxuICAgICAgICBib3R0b21Ub29sYmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB6b29tVGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMHB4KXRyYW5zbGF0ZSgtNTAlLCA1MCUpYDtcbiAgICAgICAgKHpvb21CR1dyYXBwZXIuc3R5bGUgYXMgYW55KS53ZWJraXRNYXNrUG9zaXRpb249YDUwJSAwJWA7XG5cbiAgICAgICAgdGhpcy5faW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuX3RvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgdGhpcy5fZnJvbnRDYW1lcmEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fem9vbSA9IDE7XG4gICAgICAgIHRoaXMuX21pblpvb20gPSAxO1xuICAgICAgICB0aGlzLl9tYXhab29tID0gNTtcbiAgICB9XG5cbiAgICBfb25EZXZpY2VSZWFkeSAoKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSB0aGlzLl9zaG93O1xuICAgICAgICAgICAgdGhpcy5fc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93KHNob3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy56b29tKHRoaXMuX3pvb20pO1xuICAgICAgICB0aGlzLl9vbk9yaWVudGF0aW9uQ2hhbmdlKCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5fb25EZXZpY2VSZWFkeSk7XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheVRvdWNoU3RhcnQgKGV2ZW50OiBUb3VjaEV2ZW50ICYge3BhZ2VYOiBudW1iZXIsIHBhZ2VZOiBudW1iZXJ9KSB7XG4gICAgICAgIGNvbnN0IHt6b29tUGx1cywgem9vbU1pbnVzLCByZXZlcnNlQ2FtZXJhLCBvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gZXZlbnQudGFyZ2V0WydjbGFzc0xpc3QnXSB8fCB7Y29udGFpbnM6ICgpID0+IGZhbHNlfSxcbiAgICAgICAgICAgIG51bV90b3VjaGVzID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG4gICAgICAgIHZhciB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgIHBsdXNUaW1lcjogKCkgPT4gYW55LFxuICAgICAgICAgICAgbWludXNUaW1lcjogKCkgPT4gYW55O1xuXG4gICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2NhbWVyYS16b29tLXBhcnQnKSAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udG91Y2hTdGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9USFVNQixcbiAgICAgICAgICAgICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgICAgICAgICAgIHhTdGFydDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICAgICAgeVN0YXJ0OiBldmVudC5wYWdlWSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICBzdGFydEV2ZW50OiBldmVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHpvb21QbHVzICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9vblpvb21QbHVzTW91c2VEb3duKCk7XG4gICAgICAgICAgICB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX1BMVVMsXG4gICAgICAgICAgICAgICAgcGx1c1RpbWVyOiBzZXRUaW1lb3V0KHBsdXNUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25ab29tUGx1c01vdXNlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnBsdXNUaW1lciA9IHNldFRpbWVvdXQocGx1c1RpbWVyLCAxMDApXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHpvb21NaW51cyAmJiBudW1fdG91Y2hlcyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fb25ab29tTWludXNNb3VzZURvd24oKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB0aGlzLl90b3VjaFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRvdWNoU3RhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5IT0xEX1pPT01fTUlOVVMsXG4gICAgICAgICAgICAgICAgbWludXNUaW1lcjogc2V0VGltZW91dChtaW51c1RpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblpvb21NaW51c01vdXNlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm1pbnVzVGltZXIgPSBzZXRUaW1lb3V0KG1pbnVzVGltZXIsIDEwMClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSByZXZlcnNlQ2FtZXJhICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaENhbWVyYSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygnY2FtZXJhLXRha2UtcGhvdG8tcGFydCcpICYmIG51bV90b3VjaGVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRha2VQaG90bygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZS50eXBlID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5EUkFHX1pPT01fRklOR0VSUztcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgICAgb3JkZXI6IE11bHRpQ2FtZXJhWydfdG91Y2hTdGF0ZSddWydvcmRlciddLFxuICAgICAgICAgICAgICAgIHN0YXJ0czogTXVsdGlDYW1lcmFbJ190b3VjaFN0YXRlJ11bJ3N0YXJ0cyddLFxuICAgICAgICAgICAgICAgIHRvdWNoOiBUb3VjaDtcbiAgICAgICAgICAgIGlmICghdG91Y2hTdGF0ZS5zdGFydHMpIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnN0YXJ0cyA9IHtsZW5ndGg6IDB9O1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUub3JkZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLnpvb20gPSB0aGlzLl96b29tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRzID0gdG91Y2hTdGF0ZS5zdGFydHM7XG4gICAgICAgICAgICBvcmRlciA9IHRvdWNoU3RhdGUub3JkZXI7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbG49dG91Y2hlcy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgICAgICB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydHNbdG91Y2guaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzW3RvdWNoLmlkZW50aWZpZXJdID0ge3g6IHRvdWNoLnBhZ2VYLCB5OiB0b3VjaC5wYWdlWX07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0cy5sZW5ndGgrKztcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIucHVzaCh0b3VjaC5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm5vdF9jbGljayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25PdmVybGF5VG91Y2hFbmQgKGV2ZW50OiBUb3VjaEV2ZW50ICYgTW91c2VFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hTdGF0ZSA9IHRoaXMuX3RvdWNoU3RhdGUsXG4gICAgICAgICAgICB7dHlwZX0gPSB0b3VjaFN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkhPTERfWk9PTV9QTFVTKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hTdGF0ZS5wbHVzVGltZXIpO1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuSE9MRF9aT09NX01JTlVTKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hTdGF0ZS5taW51c1RpbWVyKTtcbiAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9GSU5HRVJTKSB7XG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUubm90X2NsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25PdmVybGF5Q2xpY2soZXZlbnQgYXMgTW91c2VFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgICAgICBzdGFydHMgPSB0b3VjaFN0YXRlLnN0YXJ0cyxcbiAgICAgICAgICAgICAgICBvcmRlciA9IHRvdWNoU3RhdGUub3JkZXI7XG5cbiAgICAgICAgICAgIHZhciB0b3VjaDogVG91Y2g7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbG49dG91Y2hlcy5sZW5ndGg7aTxsbjtpKyspIHtcbiAgICAgICAgICAgICAgICB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0c1t0b3VjaC5pZGVudGlmaWVyXSkge1xuICAgICAgICAgICAgICAgICAgICBvcmRlci5zcGxpY2Uob3JkZXIuaW5kZXhPZih0b3VjaC5pZGVudGlmaWVyKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGFydHNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0cy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdWNoU3RhdGUgPSB7dHlwZTogTXVsdGlDYW1lcmEudG91Y2hUeXBlcy5OT05FfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG91Y2hTdGF0ZSA9IHt0eXBlOiBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkV9XG4gICAgICAgICAgICB0b3VjaFN0YXRlLnR5cGUgPSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLk5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdG91Y2hTdGF0ZSA9IHRvdWNoU3RhdGU7XG4gICAgfVxuICAgIF9vbk92ZXJsYXlUb3VjaENhbmNlbCAoZXZlbnQ6IFRvdWNoRXZlbnQgJiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuX29uT3ZlcmxheVRvdWNoRW5kKGV2ZW50KTtcbiAgICB9XG4gICAgX29uT3ZlcmxheVRvdWNoTW92ZSAoZXZlbnQ6IFRvdWNoRXZlbnQgJiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHZhciB0b3VjaFN0YXRlID0gdGhpcy5fdG91Y2hTdGF0ZSxcbiAgICAgICAgICAgIHt0eXBlfSA9IHRvdWNoU3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IE11bHRpQ2FtZXJhLnRvdWNoVHlwZXMuRFJBR19aT09NX1RIVU1CKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IGV2ZW50LnBhZ2VZIC0gdG91Y2hTdGF0ZS55U3RhcnQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IHRoaXMuX2VsZW1lbnRzLnpvb21CRyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVjdCA9IGJhY2tncm91bmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEhlaWdodCA9IGJhY2tncm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy56b29tKHRvdWNoU3RhdGUuem9vbSAtIHBhZ2VZIC8gYmFja2dyb3VuZEhlaWdodCAqIDMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBNdWx0aUNhbWVyYS50b3VjaFR5cGVzLkRSQUdfWk9PTV9GSU5HRVJTKSB7XG4gICAgICAgICAgICBjb25zdCB7c3RhcnRzLCBvcmRlcn0gPSB0b3VjaFN0YXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0MSA9IHN0YXJ0c1tvcmRlclswXV0sXG4gICAgICAgICAgICAgICAgc3RhcnQyID0gc3RhcnRzW29yZGVyWzFdXSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyxcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5nZXRTY3JlZW5EaW1lbnNpb25zKCksXG4gICAgICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gZGltZW5zaW9ucztcbiAgICAgICAgICAgIHZhciBjdXJyZW50MTogVG91Y2gsXG4gICAgICAgICAgICAgICAgY3VycmVudDI6IFRvdWNoLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydFgyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRZMTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WDE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WDI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50WTI6IG51bWJlcixcbiAgICAgICAgICAgICAgICBkaXN0MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRpc3QyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgdG91Y2g6IFRvdWNoLFxuICAgICAgICAgICAgICAgIGRpZmY6IG51bWJlcjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaT0wLGxuPXRvdWNoZXMubGVuZ3RoO2k8bG47aSsrKSB7XG4gICAgICAgICAgICAgICAgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBvcmRlclswXSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50MSA9IHRvdWNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBvcmRlclsxXSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50MiA9IHRvdWNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnQxKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRYMSA9IHN0YXJ0MS54O1xuICAgICAgICAgICAgICAgIHN0YXJ0WTEgPSBzdGFydDEueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50MSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRYMSA9IGN1cnJlbnQxLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRZMSA9IGN1cnJlbnQxLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRvdWNoU3RhdGUubm90X2NsaWNrICYmIHN0YXJ0MSAmJiBjdXJyZW50MSkge1xuICAgICAgICAgICAgICAgIGRpc3QxID0gTWF0aC5zcXJ0KCgoc3RhcnRYMSAtIGN1cnJlbnRYMSkgKiogMikgKyAoKHN0YXJ0WTEgLSBjdXJyZW50WTEpICoqIDIpKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdDEpID4gNykge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXRlLm5vdF9jbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnQxICYmIHN0YXJ0MiAmJiBjdXJyZW50MSAmJiBjdXJyZW50Mikge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDIgPSBzdGFydDIueDtcbiAgICAgICAgICAgICAgICBzdGFydFkyID0gc3RhcnQyLnk7XG4gICAgICAgICAgICAgICAgY3VycmVudFgyID0gY3VycmVudDIucGFnZVg7XG4gICAgICAgICAgICAgICAgY3VycmVudFkyID0gY3VycmVudDIucGFnZVk7XG5cbiAgICAgICAgICAgICAgICBkaXN0MSA9IE1hdGguc3FydCgoKHN0YXJ0WDIgLSBzdGFydFgxKSAqKiAyKSArICgoc3RhcnRZMiAtIHN0YXJ0WTEpICoqIDIpKTtcbiAgICAgICAgICAgICAgICBkaXN0MiA9IE1hdGguc3FydCgoKGN1cnJlbnRYMiAtIGN1cnJlbnRYMSkgKiogMikgKyAoKGN1cnJlbnRZMiAtIGN1cnJlbnRZMSkgKiogMikpO1xuXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpc3QyIC0gZGlzdDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpvb20odG91Y2hTdGF0ZS56b29tICsgZGlmZiAvIE1hdGgubWluKHdpZHRoLGhlaWdodCkgKiA2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk9yaWVudGF0aW9uQ2hhbmdlICgpIHtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IHdpbmRvd1snQ2FtZXJhUHJldmlldyddLFxuICAgICAgICAgICAgZGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpLFxuICAgICAgICAgICAge3dpZHRoLCBoZWlnaHR9ID0gZGltZW5zaW9ucztcbiAgICAgICAgaWYgKHRoaXMuc2hvdyAmJiB0aGlzLl9yZWFkeSAmJiBwcmV2aWV3KSB7XG4gICAgICAgICAgICBwcmV2aWV3LnNldFByZXZpZXdTaXplKGRpbWVuc2lvbnMsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb25lRGltZW5zaW9ucyA9IHRoaXMuZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgIGlmIChkb25lRGltZW5zaW9ucy53aWR0aCAhPT0gd2lkdGggfHwgZG9uZURpbWVuc2lvbnMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYW1lcmFQcmV2aWV3LnNldFByZXZpZXdTaXplJywgZXJyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdQaG90b092ZXJsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBob3RvT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uT3ZlcmxheUNsaWNrICh7cGFnZVg6IHgsIHBhZ2VZOiB5fSkge1xuICAgICAgICB0aGlzLmZvY3VzKHt4LCB5fSk7XG4gICAgfVxuXG4gICAgX29uUmV2ZXJzZUNhbWVyYUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDYW1lcmEoKTtcbiAgICB9XG5cbiAgICBfb25ab29tUGx1c01vdXNlRG93biAoKSB7XG4gICAgICAgIGlmICgodGhpcy5fem9vbSArIDAuMTUpIDw9IHRoaXMuX21heFpvb20pIHtcbiAgICAgICAgICAgIHRoaXMuem9vbSh0aGlzLl96b29tICsgMC4xNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fbWF4Wm9vbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25ab29tTWludXNNb3VzZURvd24gKCkge1xuICAgICAgICBpZiAoKHRoaXMuX3pvb20gLSAwLjE1KSA+PSB0aGlzLl9taW5ab29tKSB7XG4gICAgICAgICAgICB0aGlzLnpvb20odGhpcy5fem9vbSAtIDAuMTUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuX21pblpvb20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVGFrZVBob3RvVHJhbnNpdGlvbkVuZCAoKSB7XG4gICAgICAgIGNvbnN0IHtvdmVybGF5fSA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmNsYXNzTGlzdCAmJiBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygndGFraW5nLXBpY3R1cmUnKSkge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd0YWtpbmctcGljdHVyZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uUGhvdG9PdmVybGF5QmFja0NsaWNrICgpIHtcbiAgICAgICAgdGhpcy5faGlkZVBob3RvT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbENsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93WydQcm9taXNlJ10uYWxsKHRoaXMuX29wZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnLCB7ZGV0YWlsOiBbXX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVXNlUGhvdG9zQ2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdykge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3dbJ1Byb21pc2UnXS5hbGwodGhpcy5fb3BlcmF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZG9uZW5lbmVuZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1c2VwaG90b3MnLCB7ZGV0YWlsOiB0aGlzLl9pbWFnZXMubWFwKGQgPT4gKHt3aWR0aDogZC53aWR0aCwgaGVpZ2h0OmQuaGVpZ2h0LCBkYXRhOmQuZGF0YX0pKX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgX2NhbWVyYTogTXVsdGlDYW1lcmE7XG4gICAgc3RhdGljIHRvdWNoVHlwZXMgPSB7XG4gICAgICAgIE5PTkU6IDAgYXMgMCxcbiAgICAgICAgRFJBR19aT09NX1RIVU1COiAxIGFzIDEsXG4gICAgICAgIERSQUdfWk9PTV9GSU5HRVJTOiAyIGFzIDIsXG4gICAgICAgIEhPTERfWk9PTV9QTFVTOiA0IGFzIDQsXG4gICAgICAgIEhPTERfWk9PTV9NSU5VUzogOCBhcyA4XG4gICAgfTtcbiAgICB0b3VjaFR5cGVzID0gTXVsdGlDYW1lcmEudG91Y2hUeXBlcztcblxuICAgIHN0YXRpYyBzaG93IChzdWNjZXNzOiAoaW1hZ2VzOiBNdWx0aUNhbWVyYUltYWdlW10pID0+IGFueSwgY29uZmlnOiBNdWx0aUNhbWVyYUNvbmZpZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdzdGF0aWNzaG93Li4uJyk7XG4gICAgICAgIHZhciBjYW1lcmEgPSB0aGlzLl9jYW1lcmE7XG4gICAgICAgIGNvbnN0IGNhbmNlbENCID0gKCkgPT4ge1xuICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW1vdmVFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgY2FuY2VsQ0IpO1xuICAgICAgICB9LFxuICAgICAgICB1c2VQaG90b3NDQiA9ICgkZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpbiB1c2UgcGhvdG9zJyk7XG4gICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoJGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICBjYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXNlcGhvdG9zJywgdXNlUGhvdG9zQ0IpO1xuICAgICAgICAgICAgY2FtZXJhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIGNhbmNlbENCKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VjY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBzdWNjZXNzO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYW1lcmEpIHtcbiAgICAgICAgICAgIGNhbWVyYSA9IHRoaXMuX2NhbWVyYSA9IG5ldyBNdWx0aUNhbWVyYSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEuX2VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCd1c2VwaG90b3MnLCB1c2VQaG90b3NDQik7XG4gICAgICAgIGNhbWVyYS5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBjYW5jZWxDQik7XG4gICAgICAgIGNhbWVyYS5zaG93KGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYSkge1xuICAgICAgICAgICAgdGhpcy5fY2FtZXJhLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgICAgIHRoaXMuX2NhbWVyYS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX2NhbWVyYSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCkge1xuICAgICAgICB0aGlzLl9jYW1lcmEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9jYW1lcmEsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBfcGhvdG9XcmFwcGVyVGVtcGxhdGU6IEhUTUxFbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhLXBob3RvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYS1waG90by1yZW1vdmVcIj4tPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gYDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudDtcbiAgICB9KSgpO1xuXG4gICAgc3RhdGljIF90ZW1wbGF0ZTogSFRNTEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAke2h0bWx9XG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAke2Nzc31cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiByZXN1bHQgYXMgSFRNTEVsZW1lbnRcbiAgICB9KSgpO1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxJQUFJLEdBQUcsb3lEQXVDbkIsQ0FBQTs7QUN2Q00sSUFBTSxHQUFHLEdBQUcsaXlWQXdWbEIsQ0FBQzs7O0lDM1BFO1FBQUEsaUJBMERDO1FBckZELFlBQU8sR0FBdUIsRUFBRSxDQUFDO1FBR2pDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBY2xCLFlBQU8sR0FFSDtZQUNBLFNBQVMsRUFBRSxFQUFFO1lBQ2IsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBd3hCRixlQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQXJ4QmhDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUksV0FBVyxDQUFDLFNBQXlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBZ0IsQ0FBQztRQUNoRyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUJMLEVBbkJNLG9CQUFPLEVBQUUsd0JBQVMsRUFBRSxjQUFJLEVBQUUsa0JBQU0sRUFBRSx3QkFBUyxFQW9CbEQsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FB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
