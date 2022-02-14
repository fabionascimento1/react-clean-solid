"use strict";
self["webpackHotUpdatereact_clean"]("main",{

/***/ "./src/presentation/contexts/form/form-context.ts":
/*!********************************************************!*\
  !*** ./src/presentation/contexts/form/form-context.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));


/***/ }),

/***/ "./src/presentation/pages/login/login.tsx":
/*!************************************************!*\
  !*** ./src/presentation/pages/login/login.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-styles.scss */ "./src/presentation/pages/login/login-styles.scss");
/* harmony import */ var _presentation_components_login_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/presentation/components/login-header */ "./src/presentation/components/login-header/index.tsx");
/* harmony import */ var _presentation_components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/presentation/components/footer */ "./src/presentation/components/footer/index.tsx");
/* harmony import */ var _presentation_components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/presentation/components/input */ "./src/presentation/components/input/index.tsx");
/* harmony import */ var _presentation_components_form_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/presentation/components/form-status */ "./src/presentation/components/form-status/index.tsx");
/* harmony import */ var _presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/presentation/contexts/form/form-context */ "./src/presentation/contexts/form/form-context.ts");







const Login = () => {
    const [isLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isLoding: false
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_login_header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, { value: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form, action: "" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Login"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], { type: 'email', name: 'email', placeholder: 'Digite seu email' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], { type: 'password', name: 'password', placeholder: 'Digite sua senha' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].submit, type: 'submit' }, "Entrar"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].link }, "Criar conta"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_form_status__WEBPACK_IMPORTED_MODULE_5__["default"], null))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26cbab0ded8d473aeb9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZWE2NGMxNjEzY2I5ZTE3NTM4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDLGlFQUFlLG9EQUFhLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RLO0FBQ0M7QUFDbUI7QUFDTjtBQUNGO0FBQ1c7QUFDQztBQUNoRTtBQUNBLHdCQUF3QiwrQ0FBUTtBQUNoQztBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixVQUFVLFdBQVcsZ0VBQVksRUFBRTtBQUNsRSxRQUFRLGdEQUFtQixDQUFDLDZFQUFNO0FBQ2xDLFFBQVEsZ0RBQW1CLENBQUMseUZBQWdCLElBQUksYUFBYTtBQUM3RCxZQUFZLGdEQUFtQixXQUFXLFdBQVcsK0RBQVcsY0FBYztBQUM5RSxnQkFBZ0IsZ0RBQW1CO0FBQ25DLGdCQUFnQixnREFBbUIsQ0FBQyxzRUFBSyxJQUFJLCtEQUErRDtBQUM1RyxnQkFBZ0IsZ0RBQW1CLENBQUMsc0VBQUssSUFBSSxxRUFBcUU7QUFDbEgsZ0JBQWdCLGdEQUFtQixhQUFhLFdBQVcsaUVBQWEsa0JBQWtCO0FBQzFGLGdCQUFnQixnREFBbUIsV0FBVyxXQUFXLCtEQUFXLEVBQUU7QUFDdEUsZ0JBQWdCLGdEQUFtQixDQUFDLDRFQUFVO0FBQzlDLFFBQVEsZ0RBQW1CLENBQUMsdUVBQU07QUFDbEM7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7OztVQ3ZCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jbGVhbi8uL3NyYy9wcmVzZW50YXRpb24vY29udGV4dHMvZm9ybS9mb3JtLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2xlYW4vLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2xvZ2luL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jbGVhbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vbG9naW4tc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2xvZ2luLWhlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBGb3JtU3RhdHVzIGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZm9ybS1zdGF0dXMnO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnQC9wcmVzZW50YXRpb24vY29udGV4dHMvZm9ybS9mb3JtLWNvbnRleHQnO1xuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGluZ10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlzTG9kaW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLmxvZ2luIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLmZvcm0sIGFjdGlvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogJ2VtYWlsJywgbmFtZTogJ2VtYWlsJywgcGxhY2Vob2xkZXI6ICdEaWdpdGUgc2V1IGVtYWlsJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHR5cGU6ICdwYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcsIHBsYWNlaG9sZGVyOiAnRGlnaXRlIHN1YSBzZW5oYScgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLnN1Ym1pdCwgdHlwZTogJ3N1Ym1pdCcgfSwgXCJFbnRyYXJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5saW5rIH0sIFwiQ3JpYXIgY29udGFcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtU3RhdHVzLCBudWxsKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2Y2JhYjBkZWQ4ZDQ3M2FlYjljXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9