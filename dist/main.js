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

/***/ "./img/yum.gif":
/*!*********************!*\
  !*** ./img/yum.gif ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1e728fc8d19462ba4314d5c5a4bb1fe1.gif\");\n\n//# sourceURL=webpack:///./img/yum.gif?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/yum.gif */ \"./img/yum.gif\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n  font-family: 'Monoton', cursive;\\n  margin: 20px 40px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  overflow: hidden;\\n  height: 50%; }\\n\\n.menu-img {\\n  margin-right: 0px;\\n  float: right; }\\n\\n.button {\\n  background-color: red;\\n  color: white; }\\n\\n.abt-img {\\n  float: right;\\n  margin-left: 0px; }\\n\\n#reservation {\\n  margin-right: 170px;\\n  width: 850px;\\n  height: 900px;\\n  float: right;\\n  border-radius: 5px;\\n  background-color: yellow;\\n  padding: 20px;\\n  opacity: 65%; }\\n\\n#contact {\\n  margin-right: 170px;\\n  width: 850px;\\n  height: 900px;\\n  float: right;\\n  border-radius: 5px;\\n  background-color: yellow;\\n  padding: 20px;\\n  opacity: 65%; }\\n\\ninput[type=text], select {\\n  font-size: 30px;\\n  padding: 12px 20px;\\n  margin: 28px 0;\\n  display: inline-block;\\n  border: 1px solid red;\\n  border-radius: 4px;\\n  box-sizing: border-box; }\\n\\nul.ba {\\n  list-style-type: none; }\\n\\ninput[type=date] {\\n  padding: 12px 20px;\\n  margin: 28px 0;\\n  display: inline-block;\\n  border: 1px solid red;\\n  border-radius: 4px;\\n  box-sizing: border-box; }\\n\\ninput[type=submit] {\\n  background-color: red;\\n  color: white;\\n  padding: 34px 55px;\\n  font-size: 30px;\\n  margin: 28px 0;\\n  border: none;\\n  border-radius: 10px;\\n  cursor: pointer; }\\n\\ninput[type=submit]:hover {\\n  background-color: yellow; }\\n\\n.about {\\n  font-size: 35px;\\n  float: right;\\n  margin-right: 0px;\\n  color: red;\\n  -webkit-animation-name: example;\\n  -webkit-animation-duration: 20s;\\n  animation-name: example;\\n  animation-duration: 20s; }\\n\\n@keyframes example {\\n  from {\\n    color: red; }\\n  to {\\n    color: purple; } }\\n\\n.menu-items {\\n  float: right;\\n  margin-right: 250px;\\n  font-size: 55px;\\n  color: red; }\\n\\n#mainbox {\\n  font-size: 64px;\\n  cursor: pointer;\\n  color: yellow; }\\n\\n.side-menu {\\n  font-family: 'Monoton', cursive;\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  height: 100%;\\n  width: 450px;\\n  background-color: black;\\n  z-index: 1;\\n  padding-top: 100px;\\n  display: none;\\n  opacity: 90%; }\\n\\n.side-menu a {\\n  font-family: 'Monoton', cursive;\\n  padding: 8px 8px 8px 64px;\\n  text-decoration: none;\\n  font-size: 35px;\\n  color: #ef2a37;\\n  display: block; }\\n\\n.side-menu a:hover {\\n  color: white; }\\n\\n.side-menu .closebutton {\\n  position: absolute;\\n  font-family: 'Monoton', cursive;\\n  top: 0px;\\n  right: 25px;\\n  font-size: 46px;\\n  margin-left: 32px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return aboutUs; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction menuclick(){\r\n    \r\n    document.querySelectorAll(\".s-menu\").forEach(side => {\r\n        side.addEventListener(\"click\",e => {\r\n           let value = e.target.textContent.toLowerCase();\r\n           if (value === 'about'){\r\n               about();\r\n           }\r\n        })\r\n    })\r\n}\r\n\r\nfunction about(){\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    document.querySelector(\"body\").style.background=\"none\"\r\n    document.querySelector(\"#content\").innerHTML=`\r\n            <div class=\"about\"> \r\n                                <p>The Fresh Difference.</p>\r\n            We're not your typical restaurant. At WEBPACK, spice and seasonings are tasted throughout our chicken, not just on the outside.\r\n            We offer a variety of chicken recipes: traditional hand-breaded, citrus grilled & extra crunchy.\r\n            For pairings, we don't just serve sodas and tea, we serve Horchata and Mango. Our sides are prepared in the kitchen, not a factory.\r\n            Our warm, delicious food is brought directly to your table and served with real plates and silverware.\r\n            It's care and craft you can taste in every bite.\r\n                <br>\r\n                          <p>Our Flavorful Chicken: Made from Scratch. Loved by All.<p>\r\n            Traditional hand-breaded or citrus grilled, we always start with fresh,\r\n            all-natural chicken. Every piece of our famous traditional chicken is seasoned and prepared by hand for a golden,\r\n             crispy, one-of-a-kind texture and taste. We also have the world's best recipe for grilled chicken,\r\n            marinated to the bone and seasoned with a savory blend of citrus and herbs.\r\n         </div>\r\n         <div class=\"abt-img\"><img src=\"../img/2reg.jpg\" width=\"290\" height=\"150\"></div>\r\n    `;\r\n}\r\n\r\nfunction aboutUs(){\r\n    menuclick();\r\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reserve; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction menuclick(){\r\n    \r\n    document.querySelectorAll(\".s-menu\").forEach(side => {\r\n        side.addEventListener(\"click\",e => {\r\n           let value = e.target.textContent.toLowerCase();\r\n           if (value === 'book reservation'){\r\n               reservation();\r\n           }\r\n        })\r\n    })\r\n}\r\n\r\nfunction reservation(){\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    document.querySelector(\"body\").style.background=\"none\"\r\n    document.querySelector(\"#content\").innerHTML=`\r\n    <img src=\"../img/2reg.jpg\" alt=\"reservation\" width=\"900\" height=\"900\">\r\n    <div id=\"reservation\">\r\n    <ul class=\"ba\">\r\n          <li>  <form action=\"#\">\r\n            <label for=\"fname\">First Name</label><br>\r\n            <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\"></li><br>\r\n\r\n           <li> <label for=\"lname\">Last Name</label><br>\r\n            <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\"></li><br>\r\n\r\n          <li><input type=\"date\" name=\"reservation\"></li><br>\r\n            <input type=\"submit\" value=\"Book\">\r\n           </form>\r\n  </ul>\r\n    </div>\r\n    \r\n    `\r\n}\r\n\r\nfunction reserve(){\r\n    menuclick();\r\n}\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return contactUs; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction menuclick(){\r\n    \r\n    document.querySelectorAll(\".s-menu\").forEach(side => {\r\n        side.addEventListener(\"click\",e => {\r\n           let value = e.target.textContent.toLowerCase();\r\n           if (value === 'contact-us'){\r\n               contact();\r\n           }\r\n        })\r\n    })\r\n}\r\n\r\nfunction contact(){\r\n    document.querySelector(\"body\").style.background=\"none\"\r\n    document.querySelector(\"#content\").innerHTML=`\r\n    <img src=\"../img/r.jpg\" width=\"900\" hieght=\"850\">\r\n    <div id=\"contact\">\r\n        <ul class=\"ba\">\r\n        <form action=\"#\">\r\n\r\n   <li> <label for=\"fname\">First Name</label><br>\r\n    <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\"></li>\r\n\r\n   <li> <label for=\"lname\">Last Name</label><br>\r\n    <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\"><li>\r\n\r\n   <li> <label for=\"country\">Country</label><br>\r\n    <select id=\"country\" name=\"country\">\r\n      <option value=\"australia\">Africa</option>\r\n      <option value=\"canada\">Asia</option>\r\n      <option value=\"usa\">Europe</option>\r\n      <option value=\"usa\">North-America</option>\r\n      <option value=\"usa\">South-America</option>\r\n      <option value=\"usa\">Antatica</option>\r\n      <option value=\"usa\">Australia</option>\r\n    </select></li>\r\n\r\n    <li><label for=\"subject\">Note</label><br>\r\n    <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px \"></textarea></li>\r\n\r\n  <li><input type=\"submit\" value=\"Submit\"></li>\r\n\r\n  </form>\r\n        \r\n        \r\n        </ul>\r\n    </div>\r\n    `\r\n}\r\n\r\nfunction contactUs(){\r\n    menuclick();\r\n}\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return home; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction menuclick(){\r\n    \r\n    document.querySelectorAll(\".s-menu\").forEach(side => {\r\n        side.addEventListener(\"click\",e => {\r\n           let value = e.target.textContent.toLowerCase();\r\n           if (value === 'home'){\r\n               homie();\r\n           }\r\n        })\r\n    })\r\n}\r\n\r\nfunction homie(){\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction home(){\r\n    menuclick();\r\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigate; });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listner(){\r\n    document.querySelector(\"#mainbox\").addEventListener(\"click\", e => {\r\n      e.preventDefault()\r\n      openFunction();\r\n    })\r\n}\r\n\r\nfunction close(){\r\n    document.querySelector(\".closebutton\").addEventListener(\"click\", e =>{\r\n        e.preventDefault()\r\n        closeFunction();\r\n    } )\r\n}\r\n \r\nfunction openFunction(){\r\n    document.getElementById(\"menu\").style.display=\"block\";\r\n    document.getElementById(\"menu\").style.width=\"500px\";\r\n    document.getElementById(\"mainbox\").style.marginLeft=\"600px\";\r\n    document.getElementById(\"mainbox\").innerHTML=\"Click on cross Element and close\"\r\n    document.getElementById(\"mainbox\").style.color=\"yellow\";\r\n}\r\nfunction closeFunction(){\r\n    document.getElementById(\"menu\").style.display=\"none\";\r\n    document.getElementById(\"menu\").style.width=\"0px\";\r\n    document.getElementById(\"mainbox\").style.marginLeft=\"0px\";\r\n    document.getElementById(\"mainbox\").innerHTML=\"&#9776; Hope you where satisfied\"\r\n}\r\nfunction navbar(){\r\n    let nav = document.querySelector('.nav');\r\n    nav.innerHTML = `\r\n           <div id=\"mainbox\"> &#9776; Check out our menu</div>\r\n            <div id=\"menu\" class=\"side-menu\" >\r\n            <a href =\"#\" class=\"s-menu\">Home</a>\r\n            <a href =\"#\" class=\"s-menu\">Menu</a>\r\n            <a href =\"#\" class=\"s-menu\">Book Reservation</a>\r\n            <a href =\"#\" class=\"s-menu\">About</a>\r\n            <a href =\"#\" class=\"s-menu\">Contact-us</a>\r\n            <a href =\"#\" class=\"closebutton\" > &times;</a>\r\n            </div>\r\n           `;\r\n\r\n}\r\n\r\n\r\nfunction display(){\r\n    navbar();\r\n    listner();\r\n    close();\r\n    Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    Object(_body__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    Object(_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    Object(_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    Object(_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n}\r\n\r\ndisplay();\r\n\r\nfunction navigate(){\r\n    display();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction menuclick(){\r\n    \r\n    document.querySelectorAll(\".s-menu\").forEach(side => {\r\n        side.addEventListener(\"click\",e => {\r\n           let value = e.target.textContent.toLowerCase();\r\n           if (value === 'menu'){\r\n               menu();\r\n           }\r\n        })\r\n    })\r\n}\r\nfunction menu(){\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    document.querySelector(\"body\").style.background=\"none\"\r\n    document.querySelector(\"#content\").innerHTML=`\r\n\r\n            <img src=\"../img/reg.jpg\" width=\"950\" height=\"1050\">\r\n            <div class=\"menu-items\"> \r\n                <ol>\r\n                    <li>Spagetti = $40</li>\r\n                    <li>Buger = $15</li>\r\n                    <li>Shawarma = $10</li>\r\n                    <li>Fried-Chicken = $20</li>\r\n                    <li>Noodles = $80</li> \r\n                    <li>Pizza = $50</li> \r\n                    <li>Burritos = $100</li> \r\n                    <li>French-toast = $120</li>\r\n                </ol>\r\n                <button class=\"button\"> Order now</button>\r\n            </div>\r\n            \r\n        \r\n   \r\n    `;\r\n}\r\nfunction main(){\r\n    menuclick();\r\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });