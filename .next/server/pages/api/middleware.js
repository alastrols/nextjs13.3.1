"use strict";
(() => {
var exports = {};
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 1420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "corsMiddleware": () => (/* binding */ corsMiddleware)
});

;// CONCATENATED MODULE: external "nextjs-cors"
const external_nextjs_cors_namespaceObject = require("nextjs-cors");
var external_nextjs_cors_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_cors_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/middleware.ts

function corsMiddleware(req, res) {
    return new Promise(async (resolve, reject)=>{
        await external_nextjs_cors_default()(req, res, {
            methods: [
                "GET",
                "HEAD",
                "PUT",
                "PATCH",
                "POST",
                "DELETE"
            ],
            origin: "*",
            optionsSuccessStatus: 200
        });
        resolve("success");
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1420));
module.exports = __webpack_exports__;

})();