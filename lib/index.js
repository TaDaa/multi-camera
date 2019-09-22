"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var multicamera_1 = require("./multicamera");
__export(require("./multicamera"));
if (typeof window !== 'undefined') {
    window['MultiCamera'] = multicamera_1.MultiCamera;
}
//# sourceMappingURL=index.js.map