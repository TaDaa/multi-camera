# multi-camera
IOS Cordova Camera for taking multiple pictures.  
This plugin is a HTML/Javascript UI built ontop of the cordova-plugin-camera-preview plugin.

--Additional screenshots, config, features, and polish coming soon.

##Pre-requisites:
-   https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview

##Installation
-   `npm install TaDaa/multi-camera`

##Usage options:
-  include `/node_modules/multi-camera/dist/multi-camera.iimd.js` in build or as a script. 
-  include `/node_modules/multi-camera/dist/multi-camera.umd.js` in build or as a script.
-  `import {MultiCamera} from 'multi-camera';`
-  `var MultiCamera = require('multi-camera').MultiCamera;`

##Showing the camera
Show the MultiCamera with `MultiCamera.show(function callback (images) {...}, optionConfig)`.  

##Hiding the camera
Hide the MultiCamera with `MultiCamera.hide()`
