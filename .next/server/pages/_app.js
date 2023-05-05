"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eg": () => (/* binding */ getBanner),
/* harmony export */   "FV": () => (/* binding */ getBannerById),
/* harmony export */   "OG": () => (/* binding */ getBannerTHById),
/* harmony export */   "Ww": () => (/* binding */ getBannerTH),
/* harmony export */   "rh": () => (/* binding */ getBannerEN),
/* harmony export */   "tg": () => (/* binding */ getBannerENById)
/* harmony export */ });
/* unused harmony exports addBanner, deleteBanner, deleteAllBanner, editBanner, sortableBanner, addBannerEN, deleteBannerEN, deleteAllBannerEN, editBannerEN, sortableBannerEN, addBannerTH, deleteBannerTH, deleteAllBannerTH, editBannerTH, sortableBannerTH */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Banner JP
const getBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getBannerById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const sortableBanner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/sortable", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/sortable`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
// Banner JP
// Banner EN
const getBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/en/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/en/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getBannerENById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/en/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/en/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/en/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/en/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/en/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const sortableBannerEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/sortable", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/en/sortable`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
// Banner EN
// Banner TH
const getBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/th/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/th/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getBannerTHById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/banner/th/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/th/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/th/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/banner/th/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/th/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/th/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const sortableBannerTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("banner/en/sortable", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/banner/th/sortable`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
}); // Banner TH

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* reexport safe */ _features_admin_banner_reducer__WEBPACK_IMPORTED_MODULE_1__.S)
/* harmony export */ });
/* harmony import */ var _features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6455);
/* harmony import */ var _features_admin_banner_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5142);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_banner_reducer__WEBPACK_IMPORTED_MODULE_1__]);
([_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_banner_reducer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ bannerReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__]);
_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    data: {
        banner_id: "",
        topic: "",
        post_date: "",
        status: "",
        file: "",
        arr: "",
        created_at: ""
    },
    dataEN: {
        banner_id: "",
        topic: "",
        post_date: "",
        status: "",
        file: "",
        arr: "",
        created_at: ""
    },
    dataTH: {
        banner_id: "",
        topic: "",
        post_date: "",
        status: "",
        file: "",
        arr: "",
        created_at: ""
    }
};
const bannerReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBanner.fulfilled */ .Eg.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBannerById.fulfilled */ .FV.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBannerEN.fulfilled */ .rh.fulfilled, (state, action)=>{
        state.dataEN = action.payload;
    });
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBannerENById.fulfilled */ .tg.fulfilled, (state, action)=>{
        state.dataEN = action.payload;
    });
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBannerTH.fulfilled */ .Ww.fulfilled, (state, action)=>{
        state.dataTH = action.payload;
    });
    builder.addCase(_features_admin_banner_actions__WEBPACK_IMPORTED_MODULE_1__/* .getBannerTHById.fulfilled */ .OG.fulfilled, (state, action)=>{
        state.dataTH = action.payload;
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (bannerReducer)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cX": () => (/* binding */ getContactById),
/* harmony export */   "vS": () => (/* binding */ getContact)
/* harmony export */ });
/* unused harmony exports addContact, deleteContact, deleteAllContact, editContact, uploadContact */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/contact/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/contact/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        console.log(response.data);
        return response.data.data;
    }
});
const getContactById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/contact/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/contact/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/contact/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/contact/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/contact/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const uploadContact = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("contact/upload", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/contact/upload`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C9": () => (/* reexport safe */ _features_admin_contact_reducer__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2101);
/* harmony import */ var _features_admin_contact_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7570);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_contact_reducer__WEBPACK_IMPORTED_MODULE_1__]);
([_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_contact_reducer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ contactReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_1__]);
_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    data: {
        contact_id: "",
        fullname: "",
        company_name: "",
        department: "",
        phone_number: "",
        fax: "",
        email: "",
        subject: "",
        detail: "",
        file: "",
        created_at: ""
    }
};
const contactReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{
    builder.addCase(_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_1__/* .getContact.fulfilled */ .vS.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_contact_actions__WEBPACK_IMPORTED_MODULE_1__/* .getContactById.fulfilled */ .cX.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (contactReducer)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gg": () => (/* binding */ getSession),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony export logout */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/login", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/login`, data);
    const token = response.data.data.token;
    if (token != "") {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("access-token", token, {
            maxAge: 60 * 60 * 4
        });
    }
    return response.data.data;
});
const getSession = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/session", async ()=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/profile`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response.data;
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/logout", async ()=>{
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("access-token");
    location.href = "/admin/login";
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _features_admin_login_reducer__WEBPACK_IMPORTED_MODULE_1__.t)
/* harmony export */ });
/* harmony import */ var _features_admin_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4616);
/* harmony import */ var _features_admin_login_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_login_reducer__WEBPACK_IMPORTED_MODULE_1__]);
([_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_login_reducer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ loginReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_admin_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_1__]);
_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    data: {
        user_id: "",
        username: "",
        fullname: "",
        token: ""
    },
    isAuthenticated: false,
    isAuthenticating: true
};
const loginReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{
    builder.addCase(_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_1__/* .login.fulfilled */ .x4.fulfilled, (state, action)=>{
        state.data = action.payload;
        state.isAuthenticated = true;
        state.isAuthenticating = false;
    });
    builder.addCase(_features_admin_login_actions__WEBPACK_IMPORTED_MODULE_1__/* .getSession.fulfilled */ .Gg.fulfilled, (state, action)=>{
        state.isAuthenticating = false;
        if (action.payload && action.payload.data && action.payload.data.token) {
            state.data = action.payload;
            state.isAuthenticated = true;
        }
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (loginReducer)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cb": () => (/* binding */ getNewsTHById),
/* harmony export */   "XC": () => (/* binding */ getNewsById),
/* harmony export */   "dD": () => (/* binding */ getNews),
/* harmony export */   "l2": () => (/* binding */ getNewsEN),
/* harmony export */   "mp": () => (/* binding */ getNewsENById),
/* harmony export */   "y2": () => (/* binding */ getNewsTH)
/* harmony export */ });
/* unused harmony exports addNews, deleteNews, deleteAllNews, editNews, addNewsEN, deleteNewsEN, deleteAllNewsEN, editNewsEN, addNewsTH, deleteNewsTH, deleteAllNewsTH, editNewsTH */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// News JP
const getNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getNewsById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
// News JP
// News EN
const getNewsEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/en/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/en/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getNewsENById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/en/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addNewsEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/en/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteNewsEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/en/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllNewsEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/en/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editNewsEN = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/en/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/en/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
// News EN
// News TH
const getNewsTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/get", async (keyword)=>{
    const url = "http://localhost:3000/api";
    if (keyword) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/th/get?keyword=${keyword}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/th/select`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const getNewsTHById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/getbyid", async (id)=>{
    const url = "http://localhost:3000/api";
    if (id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${url}/news/th/getbyid?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
        return response.data.data;
    }
});
const addNewsTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/add", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/th/add`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
});
const deleteNewsTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/delete", async (id)=>{
    const url = "http://localhost:3000/api";
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/th/delete?id=${id}`, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return {
        status: "success"
    };
});
const deleteAllNewsTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/alldelete", async (id)=>{
    const url = "http://localhost:3000/api";
    id.forEach(async (id)=>{
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${url}/news/th/delete?id=${id}`, {
            headers: {
                "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
            }
        });
    });
    return {
        status: "success"
    };
});
const editNewsTH = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("news/th/edit", async (data)=>{
    const url = "http://localhost:3000/api";
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${url}/news/th/edit`, data, {
        headers: {
            "access-token": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access-token")}`
        }
    });
    return response;
}); // News TH

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ee": () => (/* reexport safe */ _features_admin_news_reducer__WEBPACK_IMPORTED_MODULE_1__.E)
/* harmony export */ });
/* harmony import */ var _features_admin_news_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6936);
/* harmony import */ var _features_admin_news_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1808);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_news_reducer__WEBPACK_IMPORTED_MODULE_1__]);
([_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_0__, _features_admin_news_reducer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ newsReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__]);
_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    data: {
        news_id: "",
        topic: "",
        post_date: "",
        status: "",
        detail: "",
        arr: "",
        year: "",
        filename: "",
        original_name: "",
        created_at: ""
    },
    dataEN: {
        news_id: "",
        topic: "",
        post_date: "",
        status: "",
        detail: "",
        arr: "",
        year: "",
        filename: "",
        original_name: "",
        created_at: ""
    },
    dataTH: {
        news_id: "",
        topic: "",
        post_date: "",
        status: "",
        detail: "",
        arr: "",
        year: "",
        filename: "",
        original_name: "",
        created_at: ""
    }
};
const newsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNews.fulfilled */ .dD.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewsById.fulfilled */ .XC.fulfilled, (state, action)=>{
        state.data = action.payload;
    });
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewsEN.fulfilled */ .l2.fulfilled, (state, action)=>{
        state.dataEN = action.payload;
    });
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewsENById.fulfilled */ .mp.fulfilled, (state, action)=>{
        state.dataEN = action.payload;
    });
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewsTH.fulfilled */ .y2.fulfilled, (state, action)=>{
        state.dataTH = action.payload;
    });
    builder.addCase(_features_admin_news_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewsTHById.fulfilled */ .Cb.fulfilled, (state, action)=>{
        state.dataTH = action.payload;
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (newsReducer)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4586);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_1__]);
_store_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// add bootstrap css
// import "bootstrap/dist/css/bootstrap.css";

//slide

function MyApp({ Component , pageProps  }) {
    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__/* .appDispatch */ .t)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: store,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__.PersistGate, {
            persistor: store.__persistor,
            loading: null,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_1__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _features_admin_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2073);
/* harmony import */ var _features_admin_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(539);
/* harmony import */ var _features_admin_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5733);
/* harmony import */ var _features_admin_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6121);
/* harmony import */ var _features_admin_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_admin_login__WEBPACK_IMPORTED_MODULE_6__, _features_admin_news__WEBPACK_IMPORTED_MODULE_7__, _features_admin_user__WEBPACK_IMPORTED_MODULE_8__, _features_admin_contact__WEBPACK_IMPORTED_MODULE_9__, _features_admin_banner__WEBPACK_IMPORTED_MODULE_10__]);
([_features_admin_login__WEBPACK_IMPORTED_MODULE_6__, _features_admin_news__WEBPACK_IMPORTED_MODULE_7__, _features_admin_user__WEBPACK_IMPORTED_MODULE_8__, _features_admin_contact__WEBPACK_IMPORTED_MODULE_9__, _features_admin_banner__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    login: _features_admin_login__WEBPACK_IMPORTED_MODULE_6__/* .loginReducer */ .t,
    news: _features_admin_news__WEBPACK_IMPORTED_MODULE_7__/* .newsReducer */ .Ee,
    user: _features_admin_user__WEBPACK_IMPORTED_MODULE_8__/* .userReducer */ .M3,
    contact: _features_admin_contact__WEBPACK_IMPORTED_MODULE_9__/* .contactReducer */ .C9,
    banner: _features_admin_banner__WEBPACK_IMPORTED_MODULE_10__/* .bannerReducer */ .S1
});
// BINDING MIDDLEWARE
const bindMiddleware = (middleware)=>{
    if (false) {}
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middleware);
};
// const reducer = (state, action) => {
const reducer = (state, action)=>{
    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};
const makeStore = ({ isServer  })=>{
    if (isServer) {
        //If it's on server side, create a store
        return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, bindMiddleware([
            (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())
        ]));
    // return createStore(rootReducer, bindMiddleware([]));
    } else {
        //If it's on client side, create a store which will persist
        const persistConfig = {
            key: "root",
            storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),
            whitelist: [
                "counter",
                "kanyeQuote"
            ]
        };
        const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistReducer)(persistConfig, reducer);
        const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(persistedReducer, bindMiddleware([
            (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())
        ]));
        store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);
        return store;
    }
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [10], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();