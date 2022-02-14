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







const Login = ({ validation }) => {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components_login_header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, { value: { state, setState } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form, action: "" },
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
/******/ 	__webpack_require__.h = () => ("7059b624659f7dabcddf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42Mjg4MjM2OTg3MWJjZjlhMWI3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDbUI7QUFDTjtBQUNGO0FBQ1c7QUFDQztBQUNoRSxpQkFBaUIsWUFBWTtBQUM3Qiw4QkFBOEIsK0NBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYiwrQ0FBK0MsWUFBWSx1SEFBdUg7QUFDbEwsS0FBSztBQUNMLFlBQVksZ0RBQW1CLFVBQVUsV0FBVyxnRUFBWSxFQUFFO0FBQ2xFLFFBQVEsZ0RBQW1CLENBQUMsNkVBQU07QUFDbEMsUUFBUSxnREFBbUIsQ0FBQyx5RkFBZ0IsSUFBSSxTQUFTLG1CQUFtQjtBQUM1RSxZQUFZLGdEQUFtQixXQUFXLFdBQVcsK0RBQVcsY0FBYztBQUM5RSxnQkFBZ0IsZ0RBQW1CO0FBQ25DLGdCQUFnQixnREFBbUIsQ0FBQyxzRUFBSyxJQUFJLCtEQUErRDtBQUM1RyxnQkFBZ0IsZ0RBQW1CLENBQUMsc0VBQUssSUFBSSxxRUFBcUU7QUFDbEgsZ0JBQWdCLGdEQUFtQixhQUFhLGtFQUFrRSxpRUFBYSxrQkFBa0I7QUFDakosZ0JBQWdCLGdEQUFtQixXQUFXLFdBQVcsK0RBQVcsRUFBRTtBQUN0RSxnQkFBZ0IsZ0RBQW1CLENBQUMsNEVBQVU7QUFDOUMsUUFBUSxnREFBbUIsQ0FBQyx1RUFBTTtBQUNsQztBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7O1VDL0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNsZWFuLy4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9sb2dpbi9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2xlYW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2xvZ2luLXN0eWxlcy5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cy9sb2dpbi1oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgRm9ybVN0YXR1cyBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2Zvcm0tc3RhdHVzJztcbmltcG9ydCBDb250ZXh0IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbnRleHRzL2Zvcm0vZm9ybS1jb250ZXh0JztcbmNvbnN0IExvZ2luID0gKHsgdmFsaWRhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlzTG9kaW5nOiBmYWxzZSxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgICAgbWFpbkVycm9yOiAnJ1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGVtYWlsRXJyb3I6IHZhbGlkYXRpb24udmFsaWRhdGUoJ2VtYWlsJywgc3RhdGUuZW1haWwpLCBwYXNzd29yZEVycm9yOiB2YWxpZGF0aW9uLnZhbGlkYXRlKCdwYXNzd29yZCcsIHN0YXRlLnBhc3N3b3JkKSB9KSk7XG4gICAgfSwgW3N0YXRlLmVtYWlsLCBzdGF0ZS5wYXNzd29yZF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLmxvZ2luIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IHN0YXRlLCBzZXRTdGF0ZSB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLmZvcm0sIGFjdGlvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogJ2VtYWlsJywgbmFtZTogJ2VtYWlsJywgcGxhY2Vob2xkZXI6ICdEaWdpdGUgc2V1IGVtYWlsJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHR5cGU6ICdwYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcsIHBsYWNlaG9sZGVyOiAnRGlnaXRlIHN1YSBzZW5oYScgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGRpc2FibGVkOiAhIXN0YXRlLmVtYWlsRXJyb3IgfHwgISFzdGF0ZS5wYXNzd29yZEVycm9yLCBjbGFzc05hbWU6IFN0eWxlcy5zdWJtaXQsIHR5cGU6ICdzdWJtaXQnIH0sIFwiRW50cmFyXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBTdHlsZXMubGluayB9LCBcIkNyaWFyIGNvbnRhXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybVN0YXR1cywgbnVsbCkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MDU5YjYyNDY1OWY3ZGFiY2RkZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==