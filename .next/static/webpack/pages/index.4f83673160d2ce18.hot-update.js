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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Titulo(props) {\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-a44fdcd0f1654762\",\n                children: [\n                    \" \",\n                    props.children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this),\n            \" \",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a44fdcd0f1654762\",\n                children: \"h1.jsx-a44fdcd0f1654762{color:red;\\nfont-size:24px;\\nfont-weight\\r\\n\\r\\n        }\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\n//Componente React\nfunction HomePage() {\n    //JSX\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                /*#__PURE__*/ children: \" Boas vindas de volta! \"\n            }, void 0, false, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" Discord - Alura Matrix \"\n            }, void 0, false, {\n                fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\ProjetosJava\\\\aluracord\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 14\n    }, this));\n}\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztTQUFTQSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixNQUFNOzt3RkFFREcsQ0FBRTs7O29CQUFDLENBQUM7b0JBQUVILEtBQUssQ0FBQ0ksUUFBUTtvQkFBRSxDQUFDOzs7Ozs7O1lBQUssQ0FBQzs7Ozs7OztBQVd0QyxDQUFDO0tBZlFMLE1BQU07QUFpQmYsRUFBa0I7U0FDVE0sUUFBUSxHQUFHLENBQUM7SUFDakIsRUFBSztJQUNMLE1BQU0sNkVBQUlDLENBQUc7O3dGQUNSUCxNQUFNO3dDQUFFLENBQXVCOzs7Ozs7d0ZBQzlCUSxDQUFFOzBCQUFFLENBQXdCOzs7Ozs7Ozs7Ozs7QUFJdEMsQ0FBQztNQVJRRixRQUFRO0FBVWpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgIDxoMT4geyBwcm9wcy5jaGlsZHJlbiB9IDwvaDE+IDxcclxuICAgICAgICBzdHlsZSBqc3ggPiB7IGBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodFxyXG5cclxuICAgICAgICB9XHJcbiAgICBgIH0gPC9zdHlsZT4gXHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vQ29tcG9uZW50ZSBSZWFjdFxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIC8vSlNYXHJcbiAgICByZXR1cm4gKCA8ZGl2PlxyXG4gICAgICAgIDxUaXR1bG8gPiBCb2FzIHZpbmRhcyBkZSB2b2x0YSEgPC9UaXR1bG8+XHJcbiAgICAgICAgIDxoMiA+IERpc2NvcmQgLSBBbHVyYSBNYXRyaXggPC9oMj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIlRpdHVsbyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImgxIiwiY2hpbGRyZW4iLCJIb21lUGFnZSIsImRpdiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});