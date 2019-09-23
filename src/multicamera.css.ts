export const css = `
    .camera-photo-overlay-text.back {
        transition: opacity 300ms;
        position: absolute;
        left: 0.3em;
        bottom: 4.0em;
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
    .camera-reverse {
        top: 50%;
        right: 0.95em;
        transform: scale(1)translate(0,-5em)translate(-50%, -50%);
        height: 2.5em;
        width: 2.5em;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg fill='rgba(255,255,255,.9)'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='40' fill='transparent' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath stroke='rgba(255,255,255,.9)' stroke-width='25' fill='rgba(0,0,0,0.4)' d='M912.2,255H754.6c-81.9-91.9-107.7-122.5-139.2-122.5H389.6c-31.4,0-56.6,30.6-139.1,122.5h-33.8v-40.8h-86.8V255H95.5c-45,0-85.5,33.7-85.5,78.3v449.2c0,44.6,40.5,85,85.5,85h816.7c45,0,77.8-40.4,77.8-85V333.3C990,288.7,957.2,255,912.2,255z'/%3E%3Cpath d='M616.9,659.8c-33.5,28.1-73.9,44.3-116.9,44.3c-92.8,0-169.2-73.9-180.9-158.1h78.1L298,418.3l-95.8,127.6h75.2C289.4,653.1,383.9,745,500,745c53.3,0,105.1-19.3,145.7-54.1l6-5.5l-29.6-29.8L616.9,659.8z'/%3E%3Cpath d='M652.5,354.2C611.1,316.5,557,296,500,296c-53.3,0-105.1,19.3-145.7,54.1l-6,5.2l29.6,29.6l5.2-4.4c33-27.7,74.5-43.4,116.9-43.4c92.8,0,169.1,73.5,180.9,162.8h-78.2l99.1,130.7l96-130.7h-75.3C716.8,449,692.1,390.4,652.5,354.2z'/%3E%3C/g%3E%3C/svg%3E%0A");
        background-repeat:no-repeat;
        background-size:2.5em 2.5em;
        position: absolute;
    }
    .camera-bottom-toolbar {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
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
    }
    .camera-use-photos {
        position:absolute;
        right: 0.3em;
        bottom: 4.0em;
        padding:0.2em 0.5em;
        transition: opacity 300ms;
        opacity: 0;
    }
    .camera-use-photos.has-photos {
        opacity: 1;
    }
    .camera-cancel {
        position: absolute;
        left: 0.3em;
        bottom: 4.0em;
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
        color: white;
        text-align:center;
        transition: transform 300ms;
        transform: translateX(-100%);
        position:absolute;
        z-index:1;
        font-weight:bold;
        width:100%;
        height: auto;
        top: 0.05em;
        right: 0.05em;
        border-radius: 50%;
        height: 1.5em;
        width: 1.5em;
    }
`;
