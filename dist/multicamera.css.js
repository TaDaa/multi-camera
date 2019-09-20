export default `
    .camera-photo-overlay-text.back {
        transition: opacity 300ms;
        position: absolute;
        left: 0.3em;
        bottom: 4.0em;
        border-bottom:solid 2px blue;
        text-shadow:0px 0px 10px rgba(0,0,0,0.5);
        color: white;
        z-index: 1;
        opacity: 0;
        text-decoration:none;
        pointer-events:all;
        padding:0.2em 0.5em;
    }
    .camera-photo-overlay-background {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:black;
        opacity: 0;
        transition: opacity 300ms;
    }
    .camera-photo-overlay {
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        pointer-events:none;
        display:none;
    }
    .camera-photo-overlay .camera-photo-wrapper {
        z-index: 0;
    }
    .camera-indicator .camera-indicator-text {
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
        position:absolute;
        color:white;
    }
    .camera-indicator.left .camera-indicator-text {
        display:none;
    }
    .camera-indicator.left .camera-indicator-line,
    .camera-indicator.right .camera-indicator-line
    {
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:rgba(50,150,255,0.7);
        -webkit-mask:linear-gradient(90deg, black 0%, transparent 50%,   black 100%);
        -webkit-mask-size:100% 100%;
        -webkit-mask-position:0% 0%;
        -webkit-mask-repeat: no-repeat;
    }
    .camera-indicator {
        position:absolute;
        overflow:visible;
    }
    .camera-indicator.left {
        right: 7em;
        left: 5em;
        bottom: 4.0em;
        height: 1px;
        display:none;
    }
    .camera-indicator.right {
        right: 0.3em;
        left: 0.3em;
        top: 1.5em;
        height: 1px;
    }
    .camera-indicator.bottom .camera-indicator-text,
    .camera-indicator.top .camera-indicator-text
    {
        transform:translate(-50%,-50%)rotate(-90deg);
        top:50%;
        left:0%;
        position:absolute;
        color:white;
    }
    .camera-indicator.top .camera-indicator-text {
        margin-top:-1em;
    }
    .camera-indicator.top .camera-indicator-line,
    .camera-indicator.bottom .camera-indicator-line {
        position: absolute;
        top:0;
        bottom:5.5em;
        left:0;
        right:0;
        background:rgba(50,150,255,0.7);
        -webkit-mask:linear-gradient(transparent 3em, black 0%, transparent 57%,   black 100%);
        -webkit-mask-size:100% 100%;
        -webkit-mask-position:0% 0%;
        -webkit-mask-repeat: no-repeat;
    }
    .camera-indicator.bottom {
        display:none;
        right: 0.3em;
        top: 0em;
        bottom: 0em;
        width: 1px;
    }
    .camera-indicator.top {
        display:none;
        left: 0.3em;
        top: 0em;
        bottom: 0em;
        width: 1px;
    }

    .camera-overlay {
        visibility:visible;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        -webkit-user-select:none;
    }
    .camera-took-picture {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        transition: opacity 300ms;
        opacity: 1;
    }
    .camera-take-photo-border {
        position:absolute;
        top: 50%;
        right: -0.25em;
        transform: scale(1)translate(-50%, -50%);
        border-radius:50%;
        height:3.75em;
        width:3.75em;
        background:transparent;
        box-shadow:0px 0px 0px 0.35em white, 0px 0px 0px 0.4em rgba(0,0,0,0.3);
        transition: transform 500ms;
        transform-origin: 0 0;
        transition: transform 100ms linear;
    }
    .camera-take-photo {
        position:absolute;
        top:50%;
        right: 0;
        transform: scale(1)translate(-50%, -50%);
        transform-origin: 0 0;
        border-radius:50%;
        height:3.5em;
        width:3.5em;
        background:white;
        transition: transform 175ms linear;
    }
    .taking-picture .camera-take-photo {
        transform: scale(0.9)translate(-50%, -50%);
    }
    .camera-reverse-back {
        top: 50%;
        right: 0.95em;
        transform: scale(1)translate(0,-5em)translate(-50%, -50%);
        height: 2.5em;
        width: 2.5em;
        background-image:url('/images/camera_reverse_back.svg');
        background-repeat:no-repeat;
        background-size:2.5em 2.5em;
        position: absolute;
    }
    .camera-reverse {
        top: 50%;
        right: 0.95em;
        transform: scale(1)translate(0,-5em)translate(-50%, -50%);
        height: 2.5em;
        width: 2.5em;
        background-image:url('/images/camera_reverse.svg');
        background-repeat:no-repeat;
        background-size:2.5em 2.5em;
        position: absolute;
    }
    .camera-bottom-toolbar {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        //top: 0;
        //z-index:-1;
        //pointer-events: none;
        //height:5em;
        height: 4.1em;
        background:rgba(0,0,0,0.1);
        overflow-x:scroll;
        -webkit-overflow-scrolling:touch;
    }
    .camera-image {
        position:relative;
        display:inline-block;
        margin-right: 0.5em;
        box-shadow:0px 0px 0px 0.5em black;
        height:5em;
        width:5em;
    }
    .camera-text-option {
        color: white;
        text-shadow:0px 0px 10px rgba(0,0,0,0.5);
        text-decoration: none;
        padding:0 0.5em;
        //background:rgba(0,0,0,0.35);
    }
    .camera-use-photos {
        position:absolute;
        right: 0.3em;
        bottom: 4.0em;
        border-bottom:solid 2px rgba(100,255,100,0.7);
        padding:0.2em 0.5em;
    }
    .camera-cancel {
        position: absolute;
        left: 0.3em;
        bottom: 4.0em;
        border-bottom:solid 2px red;
        padding:0.2em 0.5em;
    }
    .camera-zoom {
        position: absolute;
        top: 50%;
        left: 2em;
        height: 15em;
        transform: translate(0, -50%);
    }
    .camera-zoom-background-wrapper {
        position: absolute;
        width: 0.5em;
        transform: translate(-50%, 0);
        top: 0;
        bottom: 0;
        -webkit-mask: radial-gradient(transparent .75em, black .75em, black 25em);
        -webkit-mask-size:30em 30em;
        -webkit-mask-position:50% 0%;
        -webkit-mask-repeat: no-repeat;
    }
    .camera-zoom-background {
        position: absolute;
        top: 0;
        bottom: 0;
        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.2);
        background:rgba(0,0,0,0.3);
        //opacity: 0.25;
        overflow:visible;
        left: 0;
        right: 0;
        border-radius: 1em;
    }
    .camera-zoom-plus {
        color: white;
        font-size: 1.5em;
        text-shadow:0px 0px 10px rgba(0,0,0,0.5);
        bottom: 100%;
        position:absolute;
        left: 0;
        padding: 0.5em;
        transform: translate(-50%, 0);
    }
    .camera-zoom-minus {
        color: white;
        font-size: 2em;
        text-shadow:0px 0px 10px rgba(0,0,0,0.5);
        padding: 0.5em;
        top: 100%;
        left: 0;
        transform: translate(-50%, 0);
        margin-top: -0.25em;
        position:absolute;
    }

    .camera-zoom-thumb {
        box-shadow: 0px 0px 0px 0.15em rgba(100,255,100,0.7);
        border-radius: 50%;
        height: 1.5em;
        width: 1.5em;
        transform:translate(-50%, 50%);
        bottom: 0%;
        position:absolute;
    }
    .camera-zoom-stretch {
        position:absolute;
        left: -1em;
        top: -1em;
        right: -1em;
        bottom: -1em;
    }
    .camera-photo-wrapper {
        transform: translate(0em,0em)scale(1);
        transition: transform 300ms, width 300ms, height 300ms, opacity 300ms, left 300ms, bottom 300ms;
        overflow: visible;
        position: absolute;
        left: 0;
        box-shadow: -1px 0px 0px rgba(255,255,255,.5);
        bottom: 0;
        width: 3.5em;
        height: 3.5em;
        opacity: 0.85;
        transform-origin: 0% 50%;
    }
    .camera-photo-wrapper.active::after {
        content: " ";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:rgba(100,255,100,0.35);
    }
    .camera-photo {
        background-color: black;
        transition: transform 300ms, opacity 300ms;
        transform: scale(0)translate(0px,0px);
        transform-origin: 0% 50%;
        opacity: 1;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        background-repeat:no-repeat;
        position:absolute;
        z-index:0;
    }
    .camera-photo-remove {
        background-color:rgba(255,0,0,0.5);
        box-shadow:  0px 5px 10px rgba(0,0,0,0.5);
        text-shadow:  0px 0px 1px black;
        background-color:rgba(0,0,0,0.5);
        background-color:rgba(200,200,200,.8);
        //border:solid 1px rgba(255,255,255,.5);
        color: white;
        //border-radius:50%;
        //box-shadow: -1px 0px 0px white;
        text-align:center;
        transition: transform 300ms;
        transform: translateX(-100%);
        position:absolute;
        //top:-1em;
        z-index:1;
        font-weight:bold;
        //bottom:100%;
        //left:50%;
        width:100%;
        //top:0;
        //padding: 0.05em 0 0.05em;
        height: auto;
        //padding: 0.15em 0;
        //bottom:100%;
        top: 0.05em;
        //box-shadow: 0px 0px 0px 1px rgba(255,255,255,.5);
        right: 0.05em;
        border-radius: 50%;
        height: 1.5em;
        width: 1.5em;
    }
`;
//# sourceMappingURL=multicamera.css.js.map