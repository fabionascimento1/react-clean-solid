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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







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
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        setState(Object.assign(Object.assign({}, state), { isLoding: true }));
        yield authentication.auth({
            email: state.email,
            password: state.password
        });
    });
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
/******/ 	__webpack_require__.h = () => ("79da3dada3de82379c55")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MDQwZjM4ODM5ZWJjYWEyM2RjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ21EO0FBQ1Y7QUFDbUI7QUFDTjtBQUNGO0FBQ1c7QUFDQztBQUNoRSxpQkFBaUIsNEJBQTRCO0FBQzdDLDhCQUE4QiwrQ0FBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiLCtDQUErQyxZQUFZLHVIQUF1SDtBQUNsTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxZQUFZLGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLFlBQVksZ0RBQW1CLFVBQVUsV0FBVyxnRUFBWSxFQUFFO0FBQ2xFLFFBQVEsZ0RBQW1CLENBQUMsNkVBQU07QUFDbEMsUUFBUSxnREFBbUIsQ0FBQyx5RkFBZ0IsSUFBSSxTQUFTLG1CQUFtQjtBQUM1RSxZQUFZLGdEQUFtQixXQUFXLFdBQVcsK0RBQVcsMEJBQTBCO0FBQzFGLGdCQUFnQixnREFBbUI7QUFDbkMsZ0JBQWdCLGdEQUFtQixDQUFDLHNFQUFLLElBQUksK0RBQStEO0FBQzVHLGdCQUFnQixnREFBbUIsQ0FBQyxzRUFBSyxJQUFJLHFFQUFxRTtBQUNsSCxnQkFBZ0IsZ0RBQW1CLGFBQWEsa0VBQWtFLGlFQUFhLGtCQUFrQjtBQUNqSixnQkFBZ0IsZ0RBQW1CLFdBQVcsV0FBVywrREFBVyxFQUFFO0FBQ3RFLGdCQUFnQixnREFBbUIsQ0FBQyw0RUFBVTtBQUM5QyxRQUFRLGdEQUFtQixDQUFDLHVFQUFNO0FBQ2xDO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7VUNoRHJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2xlYW4vLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2xvZ2luL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jbGVhbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9sb2dpbi1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvbG9naW4taGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IElucHV0IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvaW5wdXQnO1xuaW1wb3J0IEZvcm1TdGF0dXMgZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cy9mb3JtLXN0YXR1cyc7XG5pbXBvcnQgQ29udGV4dCBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb250ZXh0cy9mb3JtL2Zvcm0tY29udGV4dCc7XG5jb25zdCBMb2dpbiA9ICh7IHZhbGlkYXRpb24sIGF1dGhlbnRpY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaXNMb2Rpbmc6IGZhbHNlLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxuICAgICAgICBtYWluRXJyb3I6ICcnXG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgZW1haWxFcnJvcjogdmFsaWRhdGlvbi52YWxpZGF0ZSgnZW1haWwnLCBzdGF0ZS5lbWFpbCksIHBhc3N3b3JkRXJyb3I6IHZhbGlkYXRpb24udmFsaWRhdGUoJ3Bhc3N3b3JkJywgc3RhdGUucGFzc3dvcmQpIH0pKTtcbiAgICB9LCBbc3RhdGUuZW1haWwsIHN0YXRlLnBhc3N3b3JkXSk7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgaXNMb2Rpbmc6IHRydWUgfSkpO1xuICAgICAgICB5aWVsZCBhdXRoZW50aWNhdGlvbi5hdXRoKHtcbiAgICAgICAgICAgIGVtYWlsOiBzdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5sb2dpbiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBzdGF0ZSwgc2V0U3RhdGUgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5mb3JtLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiTG9naW5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyB0eXBlOiAnZW1haWwnLCBuYW1lOiAnZW1haWwnLCBwbGFjZWhvbGRlcjogJ0RpZ2l0ZSBzZXUgZW1haWwnIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogJ3Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdEaWdpdGUgc3VhIHNlbmhhJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgZGlzYWJsZWQ6ICEhc3RhdGUuZW1haWxFcnJvciB8fCAhIXN0YXRlLnBhc3N3b3JkRXJyb3IsIGNsYXNzTmFtZTogU3R5bGVzLnN1Ym1pdCwgdHlwZTogJ3N1Ym1pdCcgfSwgXCJFbnRyYXJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5saW5rIH0sIFwiQ3JpYXIgY29udGFcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtU3RhdHVzLCBudWxsKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5ZGEzZGFkYTNkZTgyMzc5YzU1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9