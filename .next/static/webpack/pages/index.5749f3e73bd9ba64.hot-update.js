"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Titulo(props) {\n    console.log(props);\n    var Tag = props.tag;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b4110a4b64e13c11\",\n                        [\n                            Tag\n                        ]\n                    ]\n                ]),\n                children: [\n                    \" \",\n                    props.children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            \" \",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b4110a4b64e13c11\",\n                dynamic: [\n                    Tag\n                ],\n                /*#__PURE__*/ children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:red;\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\n//Componente React\nfunction HomePage() {\n    //JSX\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                tag: \"h2\",\n                children: \" Boas vindas de volta! \"\n            }, void 0, false, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" Discord - Alura Matrix \"\n            }, void 0, false, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n}\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztTQUFTQSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixHQUFLLENBQUNHLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxHQUFHO0lBQ3JCLE1BQU07O3dGQUVHRCxHQUFHOzs7Ozs0QkFFTkEsR0FBRzs7Ozs7b0JBRkksQ0FBQztvQkFBQ0gsS0FBSyxDQUFDSyxRQUFRO29CQUFDLENBQUM7Ozs7Ozs7WUFBTSxDQUFDOzs7O29CQUVoQ0YsR0FBRzs7a0RBQUhBLEdBQUc7Ozs7QUFTYixDQUFDO0tBaEJRSixNQUFNO0FBa0JmLEVBQWtCO1NBQ1RPLFFBQVEsR0FBRyxDQUFDO0lBQ2pCLEVBQUs7SUFDTCxNQUFNLDZFQUNEQyxDQUFHOzt3RkFFRVIsTUFBTTtnQkFBQ0ssR0FBRyxFQUFDLENBQUk7MEJBQUMsQ0FBdUI7Ozs7Ozt3RkFDdkNJLENBQUU7MEJBQUUsQ0FBd0I7Ozs7Ozs7Ozs7OztBQUkxQyxDQUFDO01BVlFGLFFBQVE7QUFZakIsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIGNvbnN0IFRhZyA9IHByb3BzLnRhZztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRhZz4ge3Byb3BzLmNoaWxkcmVufSA8L1RhZz4gPFxyXG4gICAgICAgICAgICAgICAgc3R5bGUganN4ID4ge2BcclxuICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vQ29tcG9uZW50ZSBSZWFjdFxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIC8vSlNYXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPiBCb2FzIHZpbmRhcyBkZSB2b2x0YSEgPC9UaXR1bG8+XHJcbiAgICAgICAgICAgICA8aDIgPiBEaXNjb3JkIC0gQWx1cmEgTWF0cml4IDwvaDI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIlRpdHVsbyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIlRhZyIsInRhZyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJkaXYiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});