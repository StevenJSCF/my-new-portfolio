"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/sections/Home.jsx":
/*!***********************************!*\
  !*** ./src/app/sections/Home.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Intro = ()=>{\n    _s();\n    const [isHome, setIsHome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const homeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const introRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const profileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Intersection observer animation on scroll\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getScreenWidth = ()=>window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n        // Scroll Animation\n        if (homeRef.current) {\n            const homeObserver = new IntersectionObserver((param)=>{\n                let [homeEntry] = param;\n                setIsHome(homeEntry.isIntersecting);\n            }, {\n                rootMargin: \"\".concat(getScreenWidth() <= 700 ? \"-100px\" : \"-300px\")\n            });\n            homeObserver.observe(homeRef.current);\n            if (isHome) {\n                profileRef.current.classList.add(\"slide-in\");\n                introRef.current.classList.add(\"slide-in\");\n            } else {\n                profileRef.current.classList.remove(\"slide-in\");\n                introRef.current.classList.remove(\"slide-in\");\n            }\n        }\n    }, [\n        homeRef,\n        isHome\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Shiv's Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"home\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm\",\n                    ref: homeRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"translate-x-[-500px] transition-all duration-700 opacity-0\",\n                            ref: introRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"py-2 text-2xl md:text-4xl font-semibold font-sans\",\n                                    children: \"Hi There !\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl md:text-4xl py-2 font-semibold font-sans\",\n                                    children: [\n                                        \"I'm a\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#c72c6c] dark:text-[#07d0e5]\",\n                                            children: [\n                                                \" \",\n                                                \"Software Engineer \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-white\",\n                                                    children: \"|\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 35\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5 md:mt-10 flex gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1\",\n                                            href: \"#getInTouch\",\n                                            children: \"Hire me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1\",\n                                            href: \"https://drive.google.com/file/d/1uk-tv12y8PK-WrE4oX2xRtmSy4PUVSsE/view\",\n                                            target: \"_blank\",\n                                            children: \"Download Resume\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"translate-x-[500px] transition-all opacity-0 duration-700 w-[400px] h-[300px] md:w-[500px] md:h-[500px] bg-cover m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat rounded-full dark:shadow-black shadow-lg\",\n                            ref: profileRef,\n                            style: {\n                                backgroundImage: \"url(/images/profile-pic.jpg)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stevenjscf/Projects/my-new-portfolio/src/app/sections/Home.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Intro, \"xhO1bj69ZwSkoq/402bpPXDCC+o=\");\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\nvar _c;\n$RefreshReg$(_c, \"Intro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VjdGlvbnMvSG9tZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3FFO0FBQ3hDO0FBQ0E7QUFFN0IsTUFBTU8sUUFBUTs7SUFDWixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFFckMsTUFBTU0sVUFBVVAsNkNBQU1BO0lBQ3RCLE1BQU1RLFdBQVdSLDZDQUFNQTtJQUN2QixNQUFNUyxhQUFhVCw2Q0FBTUE7SUFFekIsNENBQTRDO0lBQzVDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGlCQUFpQixJQUNyQkMsT0FBT0MsVUFBVSxJQUNqQkMsU0FBU0MsZUFBZSxDQUFDQyxXQUFXLElBQ3BDRixTQUFTRyxJQUFJLENBQUNELFdBQVc7UUFFM0IsbUJBQW1CO1FBQ25CLElBQUlSLFFBQVFVLE9BQU8sRUFBRTtZQUNuQixNQUFNQyxlQUFlLElBQUlDLHFCQUN2QjtvQkFBQyxDQUFDQyxVQUFVO2dCQUNWZCxVQUFVYyxVQUFVQyxjQUFjO1lBQ3BDLEdBQ0E7Z0JBQ0VDLFlBQVksR0FBaUQsT0FBOUNaLG9CQUFvQixNQUFNLFdBQVc7WUFDdEQ7WUFHRlEsYUFBYUssT0FBTyxDQUFDaEIsUUFBUVUsT0FBTztZQUVwQyxJQUFJWixRQUFRO2dCQUNWSSxXQUFXUSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUNqQ2pCLFNBQVNTLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDakMsT0FBTztnQkFDTGhCLFdBQVdRLE9BQU8sQ0FBQ08sU0FBUyxDQUFDRSxNQUFNLENBQUM7Z0JBQ3BDbEIsU0FBU1MsT0FBTyxDQUFDTyxTQUFTLENBQUNFLE1BQU0sQ0FBQztZQUNwQztRQUNGO0lBQ0YsR0FBRztRQUFDbkI7UUFBU0Y7S0FBTztJQUVwQixxQkFDRSw4REFBQ1AsMkNBQVFBOzswQkFDUCw4REFBQ0ksa0RBQUlBOzBCQUNILDRFQUFDeUI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBUUMsSUFBRzswQkFDViw0RUFBQ0M7b0JBQ0NDLFdBQVU7b0JBQ1ZDLEtBQUt6Qjs7c0NBRUwsOERBQUN1Qjs0QkFDQ0MsV0FBVTs0QkFDVkMsS0FBS3hCOzs4Q0FFTCw4REFBQ3lCO29DQUFFRixXQUFVOzhDQUFvRDs7Ozs7OzhDQUlqRSw4REFBQ0U7b0NBQUVGLFdBQVU7O3dDQUFvRDtzREFFL0QsOERBQUNHOzRDQUFLSCxXQUFVOztnREFDYjtnREFBSTs4REFDYSw4REFBQ0c7b0RBQUtILFdBQVU7OERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHbkQsOERBQUNEO29DQUFJQyxXQUFVOztzREFFYiw4REFBQzVCLGlEQUFJQTs0Q0FDSDRCLFdBQVU7NENBQ1ZJLE1BQU07c0RBQ1A7Ozs7OztzREFJRCw4REFBQ2hDLGlEQUFJQTs0Q0FDSDRCLFdBQVU7NENBQ1ZJLE1BQUs7NENBQ0xDLFFBQU87c0RBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPTCw4REFBQ047NEJBQ0NDLFdBQ0U7NEJBRUZDLEtBQUt2Qjs0QkFDTDRCLE9BQU87Z0NBQUVDLGlCQUFpQjs0QkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJFO0dBN0ZNbEM7S0FBQUE7QUErRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZWN0aW9ucy9Ib21lLmpzeD9jMjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSW50cm8gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0hvbWUsIHNldElzSG9tZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaG9tZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnRyb1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwcm9maWxlUmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gSW50ZXJzZWN0aW9uIG9ic2VydmVyIGFuaW1hdGlvbiBvbiBzY3JvbGxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRTY3JlZW5XaWR0aCA9ICgpID0+XG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4gICAgLy8gU2Nyb2xsIEFuaW1hdGlvblxuICAgIGlmIChob21lUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGhvbWVPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgKFtob21lRW50cnldKSA9PiB7XG4gICAgICAgICAgc2V0SXNIb21lKGhvbWVFbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByb290TWFyZ2luOiBgJHtnZXRTY3JlZW5XaWR0aCgpIDw9IDcwMCA/IFwiLTEwMHB4XCIgOiBcIi0zMDBweFwifWAsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGhvbWVPYnNlcnZlci5vYnNlcnZlKGhvbWVSZWYuY3VycmVudCk7XG5cbiAgICAgIGlmIChpc0hvbWUpIHtcbiAgICAgICAgcHJvZmlsZVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1pblwiKTtcbiAgICAgICAgaW50cm9SZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9maWxlUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpO1xuICAgICAgICBpbnRyb1JlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtob21lUmVmLCBpc0hvbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2hpdiZhcG9zO3MgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGlkPSdob21lJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nbWluLWgtWzEwMHZoXSBvdmVyZmxvdy14LWhpZGRlbiBweC1bMjBweF0gbWQ6cHgtWzIwMHB4XSBsZzpweC1bMjAwcHhdIHB0LVs4MHB4XSBtZDpwdC0wIG1kOmZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzaGFkb3ctemluYy0zMDAgZGFyazpzaGFkb3ctemluYy03MDAgc2hhZG93LXNtJ1xuICAgICAgICAgIHJlZj17aG9tZVJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndHJhbnNsYXRlLXgtWy01MDBweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIG9wYWNpdHktMCdcbiAgICAgICAgICAgIHJlZj17aW50cm9SZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdweS0yIHRleHQtMnhsIG1kOnRleHQtNHhsIGZvbnQtc2VtaWJvbGQgZm9udC1zYW5zJz5cbiAgICAgICAgICAgICAgSGkgVGhlcmUgIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgey8qIFByb2ZpbGUgTmFtZSAqL31cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0yeGwgbWQ6dGV4dC00eGwgcHktMiBmb250LXNlbWlib2xkIGZvbnQtc2Fucyc+XG4gICAgICAgICAgICAgIEkmYXBvczttIGEgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bI2M3MmM2Y10gZGFyazp0ZXh0LVsjMDdkMGU1XSc+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgbWQ6bXQtMTAgZmxleCBnYXAtMyc+XG4gICAgICAgICAgICAgIHsvKiBIaXJlIE1lIEJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC14bCBmb250LXNlbWlib2xkIHJvdW5kZWQgYmctcmVkLTQwMCBob3ZlcjpiZy1yZWQtNTAwIHB4LTIgcHktMSdcbiAgICAgICAgICAgICAgICBocmVmPXtcIiNnZXRJblRvdWNoXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIaXJlIG1lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgey8qIERvd25sb2FkIENWIEJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCByb3VuZGVkIGJvcmRlciBib3JkZXItcmVkLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC01MDAgcHgtMiBweS0xJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVrLXR2MTJ5OFBLLVdyRTRvWDJ4UnRtU3k0UFVWU3NFL3ZpZXcnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEb3dubG9hZCBSZXN1bWVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUteC1bNTAwcHhdIHRyYW5zaXRpb24tYWxsIG9wYWNpdHktMCBkdXJhdGlvbi03MDAgdy1bNDAwcHhdIGgtWzMwMHB4XSBtZDp3LVs1MDBweF0gbWQ6aC1bNTAwcHhdIGJnLWNvdmVyIG0tYXV0byBtZDptLTAgbXQtWzQwcHhdIG1kOm10LTAgYmctbm8tcmVwZWF0IHJvdW5kZWQtZnVsbCBkYXJrOnNoYWRvdy1ibGFjayBzaGFkb3ctbGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmPXtwcm9maWxlUmVmfVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1hZ2VzL3Byb2ZpbGUtcGljLmpwZylcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRybztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkIiwiTGluayIsIkludHJvIiwiaXNIb21lIiwic2V0SXNIb21lIiwiaG9tZVJlZiIsImludHJvUmVmIiwicHJvZmlsZVJlZiIsImdldFNjcmVlbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5IiwiY3VycmVudCIsImhvbWVPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaG9tZUVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRpdGxlIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwicCIsInNwYW4iLCJocmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/sections/Home.jsx\n"));

/***/ })

});