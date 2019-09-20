declare const _default: "\n    .camera-photo-overlay-text.back {\n        transition: opacity 300ms;\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px blue;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        color: white;\n        z-index: 1;\n        opacity: 0;\n        text-decoration:none;\n        pointer-events:all;\n        padding:0.2em 0.5em;\n    }\n    .camera-photo-overlay-background {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background-color:black;\n        opacity: 0;\n        transition: opacity 300ms;\n    }\n    .camera-photo-overlay {\n        position:absolute;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        pointer-events:none;\n        display:none;\n    }\n    .camera-photo-overlay .camera-photo-wrapper {\n        z-index: 0;\n    }\n    .camera-indicator .camera-indicator-text {\n        transform:translate(-50%,-50%);\n        top:50%;\n        left:50%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.left .camera-indicator-text {\n        display:none;\n    }\n    .camera-indicator.left .camera-indicator-line,\n    .camera-indicator.right .camera-indicator-line\n    {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator {\n        position:absolute;\n        overflow:visible;\n    }\n    .camera-indicator.left {\n        right: 7em;\n        left: 5em;\n        bottom: 4.0em;\n        height: 1px;\n        display:none;\n    }\n    .camera-indicator.right {\n        right: 0.3em;\n        left: 0.3em;\n        top: 1.5em;\n        height: 1px;\n    }\n    .camera-indicator.bottom .camera-indicator-text,\n    .camera-indicator.top .camera-indicator-text\n    {\n        transform:translate(-50%,-50%)rotate(-90deg);\n        top:50%;\n        left:0%;\n        position:absolute;\n        color:white;\n    }\n    .camera-indicator.top .camera-indicator-text {\n        margin-top:-1em;\n    }\n    .camera-indicator.top .camera-indicator-line,\n    .camera-indicator.bottom .camera-indicator-line {\n        position: absolute;\n        top:0;\n        bottom:5.5em;\n        left:0;\n        right:0;\n        background:rgba(50,150,255,0.7);\n        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);\n        -webkit-mask-size:100% 100%;\n        -webkit-mask-position:0% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-indicator.bottom {\n        display:none;\n        right: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n    .camera-indicator.top {\n        display:none;\n        left: 0.3em;\n        top: 0em;\n        bottom: 0em;\n        width: 1px;\n    }\n\n    .camera-overlay {\n        visibility:visible;\n        position:fixed;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-user-select:none;\n    }\n    .camera-took-picture {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #000;\n        transition: opacity 300ms;\n        opacity: 1;\n    }\n    .camera-take-photo-border {\n        position:absolute;\n        top: 50%;\n        right: -0.25em;\n        transform: scale(1)translate(-50%, -50%);\n        border-radius:50%;\n        height:3.75em;\n        width:3.75em;\n        background:transparent;\n        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);\n        transition: transform 500ms;\n        transform-origin: 0 0;\n        transition: transform 100ms linear;\n    }\n    .camera-take-photo {\n        position:absolute;\n        top:50%;\n        right: 0;\n        transform: scale(1)translate(-50%, -50%);\n        transform-origin: 0 0;\n        border-radius:50%;\n        height:3.5em;\n        width:3.5em;\n        background:white;\n        transition: transform 175ms linear;\n    }\n    .taking-picture .camera-take-photo {\n        transform: scale(0.9)translate(-50%, -50%);\n    }\n    .camera-reverse-back {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse_back.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-reverse {\n        top: 50%;\n        right: 0.95em;\n        transform: scale(1)translate(0,-5em)translate(-50%, -50%);\n        height: 2.5em;\n        width: 2.5em;\n        background-image:url('/images/camera_reverse.svg');\n        background-repeat:no-repeat;\n        background-size:2.5em 2.5em;\n        position: absolute;\n    }\n    .camera-bottom-toolbar {\n        position:absolute;\n        bottom:0;\n        left:0;\n        right:0;\n        //top: 0;\n        //z-index:-1;\n        //pointer-events: none;\n        //height:5em;\n        height: 4.1em;\n        background:rgba(0,0,0,0.1);\n        overflow-x:scroll;\n        -webkit-overflow-scrolling:touch;\n    }\n    .camera-image {\n        position:relative;\n        display:inline-block;\n        margin-right: 0.5em;\n        box-shadow:0px 0px 0px 0.5em black;\n        height:5em;\n        width:5em;\n    }\n    .camera-text-option {\n        color: white;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        text-decoration: none;\n        padding:0 0.5em;\n        //background:rgba(0,0,0,0.35);\n    }\n    .camera-use-photos {\n        position:absolute;\n        right: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px rgba(100,255,100,0.7);\n        padding:0.2em 0.5em;\n    }\n    .camera-cancel {\n        position: absolute;\n        left: 0.3em;\n        bottom: 4.0em;\n        border-bottom:solid 2px red;\n        padding:0.2em 0.5em;\n    }\n    .camera-zoom {\n        position: absolute;\n        top: 50%;\n        left: 2em;\n        height: 15em;\n        transform: translate(0, -50%);\n    }\n    .camera-zoom-background-wrapper {\n        position: absolute;\n        width: 0.5em;\n        transform: translate(-50%, 0);\n        top: 0;\n        bottom: 0;\n        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);\n        -webkit-mask-size:30em 30em;\n        -webkit-mask-position:50% 0%;\n        -webkit-mask-repeat: no-repeat;\n    }\n    .camera-zoom-background {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);\n        background:rgba(0,0,0,0.3);\n        //opacity: 0.25;\n        overflow:visible;\n        left: 0;\n        right: 0;\n        border-radius: 1em;\n    }\n    .camera-zoom-plus {\n        color: white;\n        font-size: 1.5em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        bottom: 100%;\n        position:absolute;\n        left: 0;\n        padding: 0.5em;\n        transform: translate(-50%, 0);\n    }\n    .camera-zoom-minus {\n        color: white;\n        font-size: 2em;\n        text-shadow:0px 0px 10px rgba(0,0,0,0.5);\n        padding: 0.5em;\n        top: 100%;\n        left: 0;\n        transform: translate(-50%, 0);\n        margin-top: -0.25em;\n        position:absolute;\n    }\n\n    .camera-zoom-thumb {\n        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n        transform:translate(-50%, 50%);\n        bottom: 0%;\n        position:absolute;\n    }\n    .camera-zoom-stretch {\n        position:absolute;\n        left: -1em;\n        top: -1em;\n        right: -1em;\n        bottom: -1em;\n    }\n    .camera-photo-wrapper {\n        transform: translate(0em,0em)scale(1);\n        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;\n        overflow: visible;\n        position: absolute;\n        left: 0;\n        box-shadow: -1px 0px 0px rgba(255,255,255,.5);\n        bottom: 0;\n        width: 3.5em;\n        height: 3.5em;\n        opacity: 0.85;\n        transform-origin: 0% 50%;\n    }\n    .camera-photo-wrapper.active::after {\n        content: \" \";\n        position:absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background:rgba(100,255,100,0.35);\n    }\n    .camera-photo {\n        background-color: black;\n        transition: transform 300ms, opacity 300ms;\n        transform: scale(0)translate(0px,0px);\n        transform-origin: 0% 50%;\n        opacity: 1;\n        background-size: cover;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        background-repeat:no-repeat;\n        position:absolute;\n        z-index:0;\n    }\n    .camera-photo-remove {\n        background-color:rgba(255,0,0,0.5);\n        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);\n        text-shadow:  0px 0px 1px black;\n        background-color:rgba(0,0,0,0.5);\n        background-color:rgba(200,200,200,.8);\n        //border:solid 1px rgba(255,255,255,.5);\n        color: white;\n        //border-radius:50%;\n        //box-shadow: -1px 0px 0px white;\n        text-align:center;\n        transition: transform 300ms;\n        transform: translateX(-100%);\n        position:absolute;\n        //top:-1em;\n        z-index:1;\n        font-weight:bold;\n        //bottom:100%;\n        //left:50%;\n        width:100%;\n        //top:0;\n        //padding: 0.05em 0 0.05em;\n        height: auto;\n        //padding: 0.15em 0;\n        //bottom:100%;\n        top: 0.05em;\n        //box-shadow: 0px 0px 0px 1px rgba(255,255,255,.5);\n        right: 0.05em;\n        border-radius: 50%;\n        height: 1.5em;\n        width: 1.5em;\n    }\n";
export default _default;
