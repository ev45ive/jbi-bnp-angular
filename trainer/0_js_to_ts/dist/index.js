"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib/lib");
var add = function (a, b) {
    return a + b;
};
(0, lib_1.substract)(123, 123);
(0, lib_1.multiply)(123, 123);
// window.document.body
// [].toReversed() // es2023+
/// tsc 0_js_to_ts/index.ts --target esnext --strict --watch
//  tsc 0_js_to_ts/src/**.ts --target esnext --strict --outDir 0_js_to_ts/dist
// tsc 0_js_to_ts/lib.js --allowJs --declaration --emitDeclarationOnly --declarationMap
//# sourceMappingURL=index.js.map