"use strict";
self["webpackHotUpdatereact_clean"]("main",{

/***/ "./src/presentation/components/input/index.tsx":
/*!*****************************************************!*\
  !*** ./src/presentation/components/input/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _input_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-styles.scss */ "./src/presentation/components/input/input-styles.scss");
/* harmony import */ var _presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/presentation/contexts/form/form-context */ "./src/presentation/contexts/form/form-context.ts");



const Input = (props) => {
    const { state, setState } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const error = state[`${props.name}Error`];
    const enableInput = (event) => {
        event.target.readOnly = false;
    };
    const handleChange = (event) => {
        setState(Object.assign(Object.assign({}, state), { [event.target.name]: event.target.value }));
    };
    const getStatus = () => {
        return error ? '🔴' : '🟢';
    };
    const getTitle = () => {
        return error || 'Tudo certo';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _input_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputWrap },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({}, props, { readOnly: true, onFocus: enableInput, onChange: handleChange })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { title: getTitle(), className: _input_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].status }, getStatus())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3cffdb5d0b5915f76767")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNzhhY2Y1MTdkNWQ3NGZhNDViZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRDtBQUN1QjtBQUNoRTtBQUNBLFlBQVksa0JBQWtCLEVBQUUsaURBQVUsQ0FBQyxnRkFBTztBQUNsRCwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZLHlDQUF5QztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQW1CLFVBQVUsV0FBVyxvRUFBZ0IsRUFBRTtBQUN0RSxRQUFRLGdEQUFtQiwwQkFBMEIsV0FBVyw4REFBOEQ7QUFDOUgsUUFBUSxnREFBbUIsV0FBVyw4QkFBOEIsaUVBQWEsRUFBRTtBQUNuRjtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7O1VDdEJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNsZWFuLy4vc3JjL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jbGVhbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaW5wdXQtc3R5bGVzLnNjc3MnO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnQC9wcmVzZW50YXRpb24vY29udGV4dHMvZm9ybS9mb3JtLWNvbnRleHQnO1xuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBjb25zdCBlcnJvciA9IHN0YXRlW2Ake3Byb3BzLm5hbWV9RXJyb3JgXTtcbiAgICBjb25zdCBlbmFibGVJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSkpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZXJyb3IgPyAn8J+UtCcgOiAn8J+foic7XG4gICAgfTtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9yIHx8ICdUdWRvIGNlcnRvJztcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogU3R5bGVzLmlucHV0V3JhcCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgcmVhZE9ubHk6IHRydWUsIG9uRm9jdXM6IGVuYWJsZUlucHV0LCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyB0aXRsZTogZ2V0VGl0bGUoKSwgY2xhc3NOYW1lOiBTdHlsZXMuc3RhdHVzIH0sIGdldFN0YXR1cygpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2NmZmRiNWQwYjU5MTVmNzY3NjdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=