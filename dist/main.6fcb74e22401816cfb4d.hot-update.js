"use strict";
self["webpackHotUpdatereact_clean"]("main",{

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







const Login = ({ validation, authentication }) => {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isLoding: false,
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        mainError: ''
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setState(Object.assign(Object.assign({}, state), { emailError: validation.validate('email', state.email), passwordError: validation.validate('password', state.password) }));
    }, [state.email, state.password]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setState(Object.assign(Object.assign({}, state), { isLoding: true }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_login_header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, { value: { state, setState } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form, onSubmit: handleSubmit },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Login"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], { type: 'email', name: 'email', placeholder: 'Digite seu email' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], { type: 'password', name: 'password', placeholder: 'Digite sua senha' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: !!state.emailError || !!state.passwordError, className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].submit, type: 'submit' }, "Entrar"),
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
/******/ 	__webpack_require__.h = () => ("ae25cda7cd312b6e3bce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZmNiNzRlMjI0MDE4MTZjZmI0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDbUI7QUFDTjtBQUNGO0FBQ1c7QUFDQztBQUNoRSxpQkFBaUIsNEJBQTRCO0FBQzdDLDhCQUE4QiwrQ0FBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiLCtDQUErQyxZQUFZLHVIQUF1SDtBQUNsTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxZQUFZLGdCQUFnQjtBQUMzRTtBQUNBLFlBQVksZ0RBQW1CLFVBQVUsV0FBVyxnRUFBWSxFQUFFO0FBQ2xFLFFBQVEsZ0RBQW1CLENBQUMsNkVBQU07QUFDbEMsUUFBUSxnREFBbUIsQ0FBQyx5RkFBZ0IsSUFBSSxTQUFTLG1CQUFtQjtBQUM1RSxZQUFZLGdEQUFtQixXQUFXLFdBQVcsK0RBQVcsMEJBQTBCO0FBQzFGLGdCQUFnQixnREFBbUI7QUFDbkMsZ0JBQWdCLGdEQUFtQixDQUFDLHNFQUFLLElBQUksK0RBQStEO0FBQzVHLGdCQUFnQixnREFBbUIsQ0FBQyxzRUFBSyxJQUFJLHFFQUFxRTtBQUNsSCxnQkFBZ0IsZ0RBQW1CLGFBQWEsa0VBQWtFLGlFQUFhLGtCQUFrQjtBQUNqSixnQkFBZ0IsZ0RBQW1CLFdBQVcsV0FBVywrREFBVyxFQUFFO0FBQ3RFLGdCQUFnQixnREFBbUIsQ0FBQyw0RUFBVTtBQUM5QyxRQUFRLGdEQUFtQixDQUFDLHVFQUFNO0FBQ2xDO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7VUNuQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2xlYW4vLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2xvZ2luL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jbGVhbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vbG9naW4tc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2xvZ2luLWhlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBGb3JtU3RhdHVzIGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZm9ybS1zdGF0dXMnO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnQC9wcmVzZW50YXRpb24vY29udGV4dHMvZm9ybS9mb3JtLWNvbnRleHQnO1xuY29uc3QgTG9naW4gPSAoeyB2YWxpZGF0aW9uLCBhdXRoZW50aWNhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlzTG9kaW5nOiBmYWxzZSxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgICAgbWFpbkVycm9yOiAnJ1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGVtYWlsRXJyb3I6IHZhbGlkYXRpb24udmFsaWRhdGUoJ2VtYWlsJywgc3RhdGUuZW1haWwpLCBwYXNzd29yZEVycm9yOiB2YWxpZGF0aW9uLnZhbGlkYXRlKCdwYXNzd29yZCcsIHN0YXRlLnBhc3N3b3JkKSB9KSk7XG4gICAgfSwgW3N0YXRlLmVtYWlsLCBzdGF0ZS5wYXNzd29yZF0pO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBpc0xvZGluZzogdHJ1ZSB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5sb2dpbiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBzdGF0ZSwgc2V0U3RhdGUgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5mb3JtLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiTG9naW5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyB0eXBlOiAnZW1haWwnLCBuYW1lOiAnZW1haWwnLCBwbGFjZWhvbGRlcjogJ0RpZ2l0ZSBzZXUgZW1haWwnIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogJ3Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdEaWdpdGUgc3VhIHNlbmhhJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgZGlzYWJsZWQ6ICEhc3RhdGUuZW1haWxFcnJvciB8fCAhIXN0YXRlLnBhc3N3b3JkRXJyb3IsIGNsYXNzTmFtZTogU3R5bGVzLnN1Ym1pdCwgdHlwZTogJ3N1Ym1pdCcgfSwgXCJFbnRyYXJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5saW5rIH0sIFwiQ3JpYXIgY29udGFcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtU3RhdHVzLCBudWxsKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFlMjVjZGE3Y2QzMTJiNmUzYmNlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9