"use strict";
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 4661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA": () => (/* binding */ getUserById),
/* harmony export */   "PR": () => (/* binding */ getUser)
/* harmony export */ });
/* unused harmony exports addUser, deleteUser, deleteAllUser, editUser, uploadUser */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/users/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/users`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getUserById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/user/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/user/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/user/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/user/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/user/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const uploadUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/upload", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/user/upload`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M3": () => (/* reexport safe */ _features_admin_user_reducer__WEBPACK_IMPORTED_MODULE_1__.M),
/* harmony export */   "PR": () => (/* reexport safe */ _features_admin_user_actions__WEBPACK_IMPORTED_MODULE_0__.PR)
/* harmony export */ });
/* harmony import */ var _features_admin_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);
/* harmony import */ var _features_admin_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_user_reducer__WEBPACK_IMPORTED_MODULE_1__]);
([_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_user_reducer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_admin_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_1__]);
_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    data: {
        user_id: "",
        fullname: "",
        username: "",
        email: "",
        level: "",
        created_at: ""
    }
};
const userReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{
    builder.addCase(_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_1__/* .getUser.fulfilled */ .PR.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_user_actions__WEBPACK_IMPORTED_MODULE_1__/* .getUserById.fulfilled */ .GA.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (userReducer)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ appSelector),
/* harmony export */   "t": () => (/* binding */ appDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const appDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const appSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;