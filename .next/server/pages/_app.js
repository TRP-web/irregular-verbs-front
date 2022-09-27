"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./store/store.ts
var store = __webpack_require__(6073);
;// CONCATENATED MODULE: external "@react-oauth/google"
const google_namespaceObject = require("@react-oauth/google");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var future_image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./store/hooks/redux.ts
var redux = __webpack_require__(8343);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./store/reducers/user.ts
var reducers_user = __webpack_require__(5405);
// EXTERNAL MODULE: ./urls/urls.ts
var urls = __webpack_require__(3633);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
;// CONCATENATED MODULE: ./components/SingIn/SingIng.tsx








const SingIn = ()=>{
    const { user , token , load  } = (0,redux/* useAppSelector */.C)((state)=>state.userReducer);
    const dispatch = (0,redux/* useAppDispatch */.T)();
    const { addUser , chengeLoad , addToken  } = reducers_user/* userSlice.actions */.s.actions;
    (0,external_cookies_next_.setCookie)("test", "test cookie", {
        maxAge: 1000 * 60 * 60 * 24
    });
    const registrationSuccess = (res)=>{
        const token = res.credential;
        const url = `${urls/* backUrl */.T}${urls/* apiUrls.login */.m.login}`;
        external_axios_default().post(url, {
            token: token
        }, {
            headers: {
                token: token
            }
        }).then((res)=>{
            const { _id , email , name , picture  } = res.data;
            const userData = {
                _id,
                email,
                name,
                picture
            };
            (0,external_cookies_next_.setCookie)("token", token, {
                maxAge: 1000 * 60 * 60 * 24
            });
            (0,external_cookies_next_.setCookie)("user", userData, {
                maxAge: 1000 * 60 * 60 * 24
            });
            console.log("set cookie");
            dispatch(addToken(token));
            dispatch(addUser(userData));
            dispatch(chengeLoad(true));
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !load ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "registration",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "registration__inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Login/Registration"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Click"
                            }),
                            " on the button at the bottom for login or registration in application"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "registration__google-inner",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(google_namespaceObject.GoogleLogin, {
                            onSuccess: registrationSuccess,
                            onError: ()=>{
                                console.log("Login Failed");
                            },
                            size: "large",
                            theme: "filled_blue",
                            type: "standard",
                            width: "540px",
                            useOneTap: true
                        })
                    })
                ]
            })
        }) : null
    });
};
/* harmony default export */ const SingIng = (SingIn);

;// CONCATENATED MODULE: ./components/Layout/Header.tsx








const Header = ({ children  })=>{
    const picture = (0,redux/* useAppSelector */.C)((state)=>state.userReducer.user.picture);
    const load = (0,redux/* useAppSelector */.C)((state)=>state.userReducer.load);
    const dispatch = (0,redux/* useAppDispatch */.T)();
    const logOut = ()=>{
        dispatch(reducers_user/* userSlice.actions.chengeLoad */.s.actions.chengeLoad(false));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SingIng, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header__inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "menu__list",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Words"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "menu__list",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/learn-new",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Learn new"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "menu__list",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/tests",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Tests"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/logos.svg",
                                layout: "fill",
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "profil__inner",
                            children: [
                                load ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: logOut,
                                    children: "Log Out"
                                }) : null,
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "profil",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((future_image_default()), {
                                        src: picture !== null ? picture : `/img/Profil.svg`,
                                        width: 50,
                                        height: 50,
                                        alt: "icon"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./pages/_app.tsx






const App = ({ Component , pageProps  })=>{
    return(// <Provider store={setupStore()}>
    /*#__PURE__*/ jsx_runtime_.jsx(google_namespaceObject.GoogleOAuthProvider, {
        clientId: "297750495683-im2hja8uvhhopfjp3rl0g0plkdplvoqf.apps.googleusercontent.com",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
};
/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux(App));


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664,675,608,73,343], () => (__webpack_exec__(2881)));
module.exports = __webpack_exports__;

})();