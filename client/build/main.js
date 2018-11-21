/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/style.less */ \"./src/components/App/less/style.less\");\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StartScreen_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StartScreen/index.js */ \"./src/components/StartScreen/index.js\");\n\n\n\nfunction App() {\n  window.onload = function () {\n    Object(_StartScreen_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App/index.js?");

/***/ }),

/***/ "./src/components/App/less/style.less":
/*!********************************************!*\
  !*** ./src/components/App/less/style.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/App/less/style.less?");

/***/ }),

/***/ "./src/components/Card/image/rubs.gif":
/*!********************************************!*\
  !*** ./src/components/Card/image/rubs.gif ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/rubs.gif\";\n\n//# sourceURL=webpack:///./src/components/Card/image/rubs.gif?");

/***/ }),

/***/ "./src/components/Card/index.js":
/*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/style.less */ \"./src/components/Card/less/style.less\");\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _image_rubs_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/rubs.gif */ \"./src/components/Card/image/rubs.gif\");\n/* harmony import */ var _image_rubs_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_rubs_gif__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Card(name) {\n\n  const imageBack = document.createElement('img');\n  imageBack.src = './image/rubs.gif';\n  imageBack.className = 'back-face';\n\n  const imageFront = document.createElement('img');\n  imageFront.src = `./image/${name}.png`;\n  imageFront.className = 'front-face';\n\n  const card = document.createElement('div');\n  card.className = 'card';\n  card.classList.add('flip');\n  card.dataset.name = name;\n  card.dataset.tid = 'Card-flipped';\n\n  card.appendChild(imageFront);\n  card.appendChild(imageBack);\n\n  return card;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/components/Card/index.js?");

/***/ }),

/***/ "./src/components/Card/less/style.less":
/*!*********************************************!*\
  !*** ./src/components/Card/less/style.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Card/less/style.less?");

/***/ }),

/***/ "./src/components/Deck/image/cards sync recursive ^\\.\\/.*\\.png$":
/*!************************************************************!*\
  !*** ./src/components/Deck/image/cards sync ^\.\/.*\.png$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./0C.png\": \"./src/components/Deck/image/cards/0C.png\",\n\t\"./0D.png\": \"./src/components/Deck/image/cards/0D.png\",\n\t\"./0H.png\": \"./src/components/Deck/image/cards/0H.png\",\n\t\"./0S.png\": \"./src/components/Deck/image/cards/0S.png\",\n\t\"./2C.png\": \"./src/components/Deck/image/cards/2C.png\",\n\t\"./2D.png\": \"./src/components/Deck/image/cards/2D.png\",\n\t\"./2H.png\": \"./src/components/Deck/image/cards/2H.png\",\n\t\"./2S.png\": \"./src/components/Deck/image/cards/2S.png\",\n\t\"./3C.png\": \"./src/components/Deck/image/cards/3C.png\",\n\t\"./3D.png\": \"./src/components/Deck/image/cards/3D.png\",\n\t\"./3H.png\": \"./src/components/Deck/image/cards/3H.png\",\n\t\"./3S.png\": \"./src/components/Deck/image/cards/3S.png\",\n\t\"./4C.png\": \"./src/components/Deck/image/cards/4C.png\",\n\t\"./4D.png\": \"./src/components/Deck/image/cards/4D.png\",\n\t\"./4H.png\": \"./src/components/Deck/image/cards/4H.png\",\n\t\"./4S.png\": \"./src/components/Deck/image/cards/4S.png\",\n\t\"./5C.png\": \"./src/components/Deck/image/cards/5C.png\",\n\t\"./5D.png\": \"./src/components/Deck/image/cards/5D.png\",\n\t\"./5H.png\": \"./src/components/Deck/image/cards/5H.png\",\n\t\"./5S.png\": \"./src/components/Deck/image/cards/5S.png\",\n\t\"./6C.png\": \"./src/components/Deck/image/cards/6C.png\",\n\t\"./6D.png\": \"./src/components/Deck/image/cards/6D.png\",\n\t\"./6H.png\": \"./src/components/Deck/image/cards/6H.png\",\n\t\"./6S.png\": \"./src/components/Deck/image/cards/6S.png\",\n\t\"./7C.png\": \"./src/components/Deck/image/cards/7C.png\",\n\t\"./7D.png\": \"./src/components/Deck/image/cards/7D.png\",\n\t\"./7H.png\": \"./src/components/Deck/image/cards/7H.png\",\n\t\"./7S.png\": \"./src/components/Deck/image/cards/7S.png\",\n\t\"./8C.png\": \"./src/components/Deck/image/cards/8C.png\",\n\t\"./8D.png\": \"./src/components/Deck/image/cards/8D.png\",\n\t\"./8H.png\": \"./src/components/Deck/image/cards/8H.png\",\n\t\"./8S.png\": \"./src/components/Deck/image/cards/8S.png\",\n\t\"./9C.png\": \"./src/components/Deck/image/cards/9C.png\",\n\t\"./9D.png\": \"./src/components/Deck/image/cards/9D.png\",\n\t\"./9H.png\": \"./src/components/Deck/image/cards/9H.png\",\n\t\"./9S.png\": \"./src/components/Deck/image/cards/9S.png\",\n\t\"./AC.png\": \"./src/components/Deck/image/cards/AC.png\",\n\t\"./AD.png\": \"./src/components/Deck/image/cards/AD.png\",\n\t\"./AH.png\": \"./src/components/Deck/image/cards/AH.png\",\n\t\"./AS.png\": \"./src/components/Deck/image/cards/AS.png\",\n\t\"./JC.png\": \"./src/components/Deck/image/cards/JC.png\",\n\t\"./JD.png\": \"./src/components/Deck/image/cards/JD.png\",\n\t\"./JH.png\": \"./src/components/Deck/image/cards/JH.png\",\n\t\"./JS.png\": \"./src/components/Deck/image/cards/JS.png\",\n\t\"./KC.png\": \"./src/components/Deck/image/cards/KC.png\",\n\t\"./KD.png\": \"./src/components/Deck/image/cards/KD.png\",\n\t\"./KH.png\": \"./src/components/Deck/image/cards/KH.png\",\n\t\"./KS.png\": \"./src/components/Deck/image/cards/KS.png\",\n\t\"./QC.png\": \"./src/components/Deck/image/cards/QC.png\",\n\t\"./QD.png\": \"./src/components/Deck/image/cards/QD.png\",\n\t\"./QH.png\": \"./src/components/Deck/image/cards/QH.png\",\n\t\"./QS.png\": \"./src/components/Deck/image/cards/QS.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components/Deck/image/cards sync recursive ^\\\\.\\\\/.*\\\\.png$\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards_sync_^\\.\\/.*\\.png$?");

/***/ }),

/***/ "./src/components/Deck/image/cards/0C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/0C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/0C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/0C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/0D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/0D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/0D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/0D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/0H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/0H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/0H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/0H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/0S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/0S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/0S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/0S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/2C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/2C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/2C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/2C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/2D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/2D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/2D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/2D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/2H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/2H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/2H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/2H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/2S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/2S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/2S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/2S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/3C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/3C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/3C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/3C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/3D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/3D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/3D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/3D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/3H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/3H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/3H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/3H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/3S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/3S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/3S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/3S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/4C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/4C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/4C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/4C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/4D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/4D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/4D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/4D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/4H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/4H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/4H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/4H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/4S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/4S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/4S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/4S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/5C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/5C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/5C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/5C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/5D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/5D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/5D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/5D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/5H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/5H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/5H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/5H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/5S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/5S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/5S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/5S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/6C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/6C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/6C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/6C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/6D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/6D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/6D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/6D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/6H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/6H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/6H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/6H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/6S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/6S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/6S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/6S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/7C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/7C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/7C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/7C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/7D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/7D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/7D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/7D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/7H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/7H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/7H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/7H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/7S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/7S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/7S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/7S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/8C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/8C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/8C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/8C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/8D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/8D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/8D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/8D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/8H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/8H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/8H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/8H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/8S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/8S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/8S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/8S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/9C.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/9C.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/9C.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/9C.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/9D.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/9D.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/9D.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/9D.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/9H.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/9H.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/9H.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/9H.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/9S.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/9S.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/9S.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/9S.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/AC.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/AC.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/AC.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/AC.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/AD.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/AD.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/AD.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/AD.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/AH.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/AH.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/AH.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/AH.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/AS.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/AS.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/AS.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/AS.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/JC.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/JC.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/JC.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/JC.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/JD.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/JD.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/JD.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/JD.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/JH.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/JH.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/JH.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/JH.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/JS.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/JS.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/JS.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/JS.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/KC.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/KC.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/KC.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/KC.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/KD.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/KD.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/KD.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/KD.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/KH.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/KH.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/KH.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/KH.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/KS.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/KS.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/KS.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/KS.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/QC.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/QC.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/QC.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/QC.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/QD.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/QD.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/QD.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/QD.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/QH.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/QH.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/QH.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/QH.png?");

/***/ }),

/***/ "./src/components/Deck/image/cards/QS.png":
/*!************************************************!*\
  !*** ./src/components/Deck/image/cards/QS.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/QS.png\";\n\n//# sourceURL=webpack:///./src/components/Deck/image/cards/QS.png?");

/***/ }),

/***/ "./src/components/Deck/index.js":
/*!**************************************!*\
  !*** ./src/components/Deck/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\n/* harmony import */ var _less_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/main.less */ \"./src/components/Deck/less/main.less\");\n/* harmony import */ var _less_main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ \"./src/components/Card/index.js\");\n\n\n\nconst defaultSuits = ['C', 'D', 'H', 'S'];\nconst defaultPics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];\n\nfunction shakedAndReturnNewArr(arr) {\n    let newArr = [...arr];\n    return newArr.sort( () => { return Math.random() - 0.5 } ); \n}\n\nclass Deck {\n    constructor(suits = defaultSuits, pics = defaultPics, quanityForGame = 18) {\n        this.suits = suits;\n        this.pics = pics;\n        this.quanityForGame = quanityForGame;\n        this.fullNames = () => {\n            let names = []\n            for (let s of this.suits) {\n                for (let p of this.pics) {\n                    let name = p + s;\n                    names.push(name);\n                };\n            };\n            return names;\n        }\n\n        this.shakedFullNames = () => {\n            return shakedAndReturnNewArr(this.fullNames())\n        };\n\n        this.cardsImgRequireAll = () => {\n            for (let card of this.fullNames()) {\n                __webpack_require__(\"./src/components/Deck/image/cards sync recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${card}.png`);\n            }\n          }\n\n        this.namesForGame = () => {\n            const arr = this.shakedFullNames();\n            let names = [];\n            for (let i = 0; i < this.quanityForGame / 2; i++) {\n                let name = arr[i];\n                names.push(name, name);\n            }\n            return names;\n        }\n\n        this.shakedNamesForGame = () => {\n            return shakedAndReturnNewArr(this.namesForGame());\n        }\n\n        this.deckForGame = () => {\n            const namesForGame = this.shakedNamesForGame();\n            const cards = []\n            namesForGame.map( name => {\n                cards.push(Object(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name));\n            });\n            return cards;\n        }\n    }\n\n    mountCards() {\n        const deckForGame = this.deckForGame();\n        const deck = document.getElementById('deck');\n        deckForGame.map( card => {\n            deck.appendChild(card);\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/components/Deck/index.js?");

/***/ }),

/***/ "./src/components/Deck/less/main.less":
/*!********************************************!*\
  !*** ./src/components/Deck/less/main.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Deck/less/main.less?");

/***/ }),

/***/ "./src/components/EndScreen/image/Group.png":
/*!**************************************************!*\
  !*** ./src/components/EndScreen/image/Group.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/Group.png\";\n\n//# sourceURL=webpack:///./src/components/EndScreen/image/Group.png?");

/***/ }),

/***/ "./src/components/EndScreen/index.html":
/*!*********************************************!*\
  !*** ./src/components/EndScreen/index.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<img class='end-image' src=\\\"\" + __webpack_require__(/*! ./image/Group.png */ \"./src/components/EndScreen/image/Group.png\") + \"\\\" alt=\\\"\\\">\\r\\n<h1 class='title-end'>Поздравляем!<br>Ваш итоговый счёт: <span id=\\\"score\\\"></span> </h1>\\r\\n<button class=\\\"btn btn--end\\\" href=\\\"./game.html\\\" data-tid=\\\"EndGame-retryGame\\\">\\r\\n    Ещё раз\\r\\n</button>\";\n\n//# sourceURL=webpack:///./src/components/EndScreen/index.html?");

/***/ }),

/***/ "./src/components/EndScreen/index.js":
/*!*******************************************!*\
  !*** ./src/components/EndScreen/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EndScreen; });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/components/EndScreen/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameScreen */ \"./src/components/GameScreen/index.js\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.less */ \"./src/components/EndScreen/main.less\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction EndScreen () {\n  const app = document.querySelector('#App');\n  app.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n  const btn = document.querySelector('.btn');\n  btn.onclick = _GameScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}\n\n//# sourceURL=webpack:///./src/components/EndScreen/index.js?");

/***/ }),

/***/ "./src/components/EndScreen/main.less":
/*!********************************************!*\
  !*** ./src/components/EndScreen/main.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/EndScreen/main.less?");

/***/ }),

/***/ "./src/components/GameScreen/index.html":
/*!**********************************************!*\
  !*** ./src/components/GameScreen/index.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"gameMenu\\\">\\r\\n    <button class=\\\"btn btn--newGame\\\" data-tid=\\\"Menu-NewGame\\\">Начать заново</button>\\r\\n    <span class=\\\"gameMenu__scores\\\" data-tid=\\\"Menu-scores\\\">\\r\\n        Очки: <span id=\\\"score\\\">0</span>\\r\\n    </span>\\r\\n</div>\\r\\n    <div id=\\\"deck\\\" data-tid=\\\"Deck\\\">\\r\\n                    \\r\\n    </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/GameScreen/index.html?");

/***/ }),

/***/ "./src/components/GameScreen/index.js":
/*!********************************************!*\
  !*** ./src/components/GameScreen/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScreen; });\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.less */ \"./src/components/GameScreen/main.less\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/components/GameScreen/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Deck */ \"./src/components/Deck/index.js\");\n/* harmony import */ var _scripts_startGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/startGame.js */ \"./src/components/GameScreen/scripts/startGame.js\");\n\n\n\n\n\n\n\nfunction GameScreen () {\n  const app = document.querySelector('#App');\n  app.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n  const btn = document.querySelector('.btn');\n  btn.onclick = GameScreen;\n\n  const deck = new _Deck__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  deck.mountCards();\n\n  const cards = document.querySelectorAll('.card');\n\n  cards.onload = (function() {\n    setTimeout(() => {\n      cards.forEach( card => { \n        card.classList.remove('flip');\n        card.dataset.tid = 'Card';\n      });\n      Object(_scripts_startGame_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }, 5000);\n  })()\n  \n}\n\n//# sourceURL=webpack:///./src/components/GameScreen/index.js?");

/***/ }),

/***/ "./src/components/GameScreen/main.less":
/*!*********************************************!*\
  !*** ./src/components/GameScreen/main.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/GameScreen/main.less?");

/***/ }),

/***/ "./src/components/GameScreen/scripts/score.js":
/*!****************************************************!*\
  !*** ./src/components/GameScreen/scripts/score.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst score = {\n    result: 0,\n    add: function() {\n        let lostCard = document.querySelectorAll('[data-tid=\"Card\"]');\n        score.result = score.result + lostCard.length * 42;\n    },\n    remove: function() {\n        let flipCard = document.querySelectorAll('.empty-place');\n        score.result = score.result - flipCard.length * 42;\n    },\n    init: function() {\n        let scoreSpan = document.querySelector('#score');\n        if (score.result <= 0) {\n            score.result = 0;\n            scoreSpan.textContent = score.result;\n        } else {\n            scoreSpan.textContent = score.result;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (score);\n\n//# sourceURL=webpack:///./src/components/GameScreen/scripts/score.js?");

/***/ }),

/***/ "./src/components/GameScreen/scripts/startGame.js":
/*!********************************************************!*\
  !*** ./src/components/GameScreen/scripts/startGame.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startGame; });\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.js */ \"./src/components/GameScreen/scripts/score.js\");\n/* harmony import */ var _EndScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EndScreen */ \"./src/components/EndScreen/index.js\");\n\n\n\nfunction startGame() {\n  const cards = document.querySelectorAll('.card');\n  cards.forEach(card => card.addEventListener('click', flipCard));\n\n  let firstCard, secondCard;\n\n  let deckState = {\n    hasFlippedCard: false,\n    lockDeck: false,\n    reset: function() {\n      [deckState.hasFlippedCard, deckState.lockDeck] = [false, false];\n      [firstCard, secondCard] = [null, null];\n    }\n  }\n\n  function flipCard() {\n    if (deckState.lockDeck) return;\n\n    this.classList.add('flip');\n    this.dataset.tid = 'Card-flipped';\n\n    if (!deckState.hasFlippedCard) {\n      deckState.hasFlippedCard = true;\n      firstCard = this;\n      return;\n    }\n\n    secondCard = this;\n    deckState.hasFlippedCard = false;\n \n    checkForMatch();\n  }\n\n  function checkForMatch() {\n    deckState.lockDeck = true;\n    if (firstCard.dataset.name === secondCard.dataset.name) {\n\n      firstCard.removeEventListener('click', flipCard);\n      secondCard.removeEventListener('click', flipCard);\n\n      setTimeout(removeCardsFromDeck, 1300);\n      \n      return;\n    }\n \n    unflipSelectedCards();\n  }\n\n  function unflipSelectedCards() {\n    deckState.lockDeck = true;\n\n    setTimeout(() => {\n      firstCard.classList.remove('flip');\n      secondCard.classList.remove('flip');\n\n      firstCard.dataset.tid = 'Card';\n      secondCard.dataset.tid = 'Card'; \n\n      deckState.reset();\n    }, 1300);\n    _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove();\n    _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n  }\n \n  function removeCardsFromDeck() {\n    firstCard.innerHTML = '';\n    secondCard.innerHTML = '';\n\n    firstCard.classList.remove('flip');\n    secondCard.classList.remove('flip');\n\n    firstCard.removeAttribute('data-tid');\n    secondCard.removeAttribute('data-tid');\n\n    firstCard.removeAttribute('data-name');\n    secondCard.removeAttribute('data-name');\n\n    firstCard.classList.add('empty-place');\n    secondCard.classList.add('empty-place');\n\n    _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add();\n    _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n    deckState.reset();\n    checkEndGame();\n  }\n\n  function checkEndGame() {\n    const emptyPlaces = document.querySelectorAll('.empty-place');\n    if (emptyPlaces.length === 18) {\n      Object(_EndScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n    } else {\n      return;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/GameScreen/scripts/startGame.js?");

/***/ }),

/***/ "./src/components/StartScreen/image/StartGame.png":
/*!********************************************************!*\
  !*** ./src/components/StartScreen/image/StartGame.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./image/StartGame.png\";\n\n//# sourceURL=webpack:///./src/components/StartScreen/image/StartGame.png?");

/***/ }),

/***/ "./src/components/StartScreen/index.html":
/*!***********************************************!*\
  !*** ./src/components/StartScreen/index.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<img class='start-image' src=\\\"\" + __webpack_require__(/*! ./image/StartGame.png */ \"./src/components/StartScreen/image/StartGame.png\") + \"\\\" alt=\\\"\\\">\\r\\n<h1 class=\\\"title\\\">Memory Game</h1>\\r\\n<button class=\\\"btn btn--start\\\" data-tid=\\\"NewGame-StartGame\\\">Начать игру</button>\\r\\n\";\n\n//# sourceURL=webpack:///./src/components/StartScreen/index.html?");

/***/ }),

/***/ "./src/components/StartScreen/index.js":
/*!*********************************************!*\
  !*** ./src/components/StartScreen/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartScreen; });\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.less */ \"./src/components/StartScreen/main.less\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/components/StartScreen/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameScreen___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameScreen/ */ \"./src/components/GameScreen/index.js\");\n\n\n\n\n\nfunction StartScreen () {\n  const app = document.querySelector('#App');\n  app.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n  const btn = document.querySelector('.btn');\n  btn.onclick = _GameScreen___WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n} \n\n//# sourceURL=webpack:///./src/components/StartScreen/index.js?");

/***/ }),

/***/ "./src/components/StartScreen/main.less":
/*!**********************************************!*\
  !*** ./src/components/StartScreen/main.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/StartScreen/main.less?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/ */ \"./src/components/App/index.js\");\n\n\nObject(_components_App___WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });