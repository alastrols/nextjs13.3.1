"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829,5];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

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


/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_users)
});

// EXTERNAL MODULE: ./pages/api/middleware.ts + 1 modules
var middleware = __webpack_require__(1420);
;// CONCATENATED MODULE: ./mysql.js
const mysql = __webpack_require__(7993);
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dateStrings: "date"
});
const connection = pool.promise();
connection.query("SELECT 1").then(([rows, fields])=>{
    console.log("MySQL is running...");
}).catch((err)=>{
    console.log(err);
});
/* harmony default export */ const mysql_0 = (connection);

;// CONCATENATED MODULE: ./pages/api/users.ts


async function users(req, res) {
    await (0,middleware.corsMiddleware)(req, res);
    try {
        const [response] = await mysql_0.query("SELECT * FROM user");
        res.json({
            status: "success",
            data: response
        });
    } catch  {
        res.json({
            status: "error"
        });
    }
}
/* harmony default export */ const api_users = (users);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5440));
module.exports = __webpack_exports__;

})();