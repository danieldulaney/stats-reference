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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod1_js__ = __webpack_require__(/*! ./mod1.js */ 1);\n\r\n\r\nconst a = 3;\r\nconst b = 7;\r\n\r\nconst resultSumEl = document.getElementById(\"resultSum\");\r\nconst resultProductEl = document.getElementById(\"resultProduct\");\r\n\r\nconst resultSum = Object(__WEBPACK_IMPORTED_MODULE_0__mod1_js__[\"b\" /* sum */])(a, b);\r\nconst resultProduct = Object(__WEBPACK_IMPORTED_MODULE_0__mod1_js__[\"a\" /* product */])(a, b);\r\n\r\nresultSumEl.textContent = resultSum;\r\nresultProductEl.textContent = resultProduct;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N1bSwgcHJvZHVjdH0gZnJvbSAnLi9tb2QxLmpzJztcclxuXHJcbmNvbnN0IGEgPSAzO1xyXG5jb25zdCBiID0gNztcclxuXHJcbmNvbnN0IHJlc3VsdFN1bUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRTdW1cIik7XHJcbmNvbnN0IHJlc3VsdFByb2R1Y3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0UHJvZHVjdFwiKTtcclxuXHJcbmNvbnN0IHJlc3VsdFN1bSA9IHN1bShhLCBiKTtcclxuY29uc3QgcmVzdWx0UHJvZHVjdCA9IHByb2R1Y3QoYSwgYik7XHJcblxyXG5yZXN1bHRTdW1FbC50ZXh0Q29udGVudCA9IHJlc3VsdFN1bTtcclxucmVzdWx0UHJvZHVjdEVsLnRleHRDb250ZW50ID0gcmVzdWx0UHJvZHVjdDtcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./src/mod1.js ***!
  \*********************/
/*! exports provided: sum, product */
/*! exports used: product, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return product; });\nconst sum = (a, b) => a + b;\r\nconst product = (a, b) => a * b;\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2QxLmpzPzFkNTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xyXG5jb25zdCBwcm9kdWN0ID0gKGEsIGIpID0+IGEgKiBiO1xyXG5cclxuZXhwb3J0IHtzdW0sIHByb2R1Y3R9O1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kMS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);