/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonAttributes\": () => (/* binding */ buttonAttributes),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nvar buttonAttributes;\n(function (buttonAttributes) {\n    buttonAttributes[\"category\"] = \"category\";\n})(buttonAttributes || (buttonAttributes = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            category: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const button = this.ownerDocument.createElement(\"button\");\n        button.innerText = `${this.category}`;\n        button.addEventListener('click', () => {\n            button.innerText = `${this.category}`;\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n    }\n}\ncustomElements.define(\"app-button\", Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardAttributes\": () => (/* binding */ cardAttributes),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _joke_joke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../joke/joke */ \"./src/components/joke/joke.ts\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.ts\");\n\n\nvar cardAttributes;\n(function (cardAttributes) {\n    cardAttributes[\"category\"] = \"category\";\n    cardAttributes[\"icon_url\"] = \"icon_url\";\n    cardAttributes[\"value\"] = \"value\";\n})(cardAttributes || (cardAttributes = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            category: null,\n            icon_url: null,\n            value: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.category = '';\n        this.icon_url = '';\n        this.value = '';\n        this.attachShadow({ mode: 'open' });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const section = this.ownerDocument.createElement('section');\n        const button = this.ownerDocument.createElement(\"app-button\");\n        button.setAttribute(_button_button__WEBPACK_IMPORTED_MODULE_1__.buttonAttributes.category, this.category);\n        section.appendChild(button);\n        const joke = this.ownerDocument.createElement(\"app-joke\");\n        joke.setAttribute(_joke_joke__WEBPACK_IMPORTED_MODULE_0__.jokeAttributes.icon_url, this.icon_url);\n        joke.setAttribute(_joke_joke__WEBPACK_IMPORTED_MODULE_0__.jokeAttributes.value, this.value);\n        section.appendChild(joke);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(section);\n    }\n}\ncustomElements.define(\"app-card\", Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Joke\": () => (/* reexport safe */ _joke_joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _joke_joke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joke/joke */ \"./src/components/joke/joke.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/joke/joke.ts":
/*!*************************************!*\
  !*** ./src/components/joke/joke.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Joke),\n/* harmony export */   \"jokeAttributes\": () => (/* binding */ jokeAttributes)\n/* harmony export */ });\nvar jokeAttributes;\n(function (jokeAttributes) {\n    jokeAttributes[\"icon_url\"] = \"icon_url\";\n    jokeAttributes[\"value\"] = \"value\";\n})(jokeAttributes || (jokeAttributes = {}));\nclass Joke extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            icon_url: null,\n            value: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n            <img src=\"${this.icon_url}\"></img>\r\n            <p> ${this.value}</p>\r\n        `;\n    }\n}\ncustomElements.define(\"app-joke\", Joke);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/joke/joke.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getData */ \"./src/services/getData.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _types_apiType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/apiType */ \"./src/types/apiType.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_services_getData__WEBPACK_IMPORTED_MODULE_0__.getData)();\n            this.render(data);\n        });\n    }\n    render(data) {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        data.forEach((e) => {\n            var _a;\n            const card = this.ownerDocument.createElement('app-card');\n            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.cardAttributes.category, e.category);\n            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.cardAttributes.icon_url, e.icon_url);\n            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.cardAttributes.value, e.value);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getData.ts":
/*!*********************************!*\
  !*** ./src/services/getData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getData() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n        }\n        catch (error) {\n            console.error(error);\n        }\n        const data = yield fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json);\n        return data;\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getData.ts?");

/***/ }),

/***/ "./src/types/apiType.ts":
/*!******************************!*\
  !*** ./src/types/apiType.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/apiType.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;