define(["@grafana/data","react","react-router-dom","@grafana/ui","@grafana/runtime","@emotion/css"], (__WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__) => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 2 */
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/***/ ((module) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./pages/Breadcrumbs.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 4);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);




var Breadcrumbs =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Breadcrumbs, _super);

  function Breadcrumbs(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  Breadcrumbs.prototype.render = function () {
    var _a = this.props,
        breadcrumbs = _a.breadcrumbs,
        pageTitle = _a.pageTitle;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "breadcrumbs-container"
    }, pageTitle && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "page-title"
    }, pageTitle), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "breadcrumbs"
    }, breadcrumbs.map(function (breadcrumb, index) {
      if (breadcrumb.isCurrentPage) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: index,
          className: "current-page"
        }, breadcrumb.label);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "".concat(breadcrumb.route),
          className: "breadcrumbs-link"
        }, breadcrumb.label), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "separator"
        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "fa fa-chevron-right"
        })));
      }
    })));
  };

  return Breadcrumbs;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


;

/***/ }),
/* 6 */
/*!************************************!*\
  !*** ./img/resources-user-img.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/resources-user-img.png");

/***/ }),
/* 7 */
/*!******************************************************************!*\
  !*** ../node_modules/react-circular-progressbar/dist/styles.css ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../css-loader/index.js??ruleSet[1].rules[4].use[1]!./styles.css */ 9);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 8 */
/*!********************************************************!*\
  !*** ../node_modules/simplebar/dist/simplebar.min.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../css-loader/index.js??ruleSet[1].rules[4].use[1]!./simplebar.min.css */ 10);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!../node_modules/react-circular-progressbar/dist/styles.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.id, "/*\n * react-circular-progressbar styles\n * All of the styles in this file are configurable!\n */\n\n.CircularProgressbar {\n  /*\n   * This fixes an issue where the CircularProgressbar svg has\n   * 0 width inside a \"display: flex\" container, and thus not visible.\n   */\n  width: 100%;\n  /*\n   * This fixes a centering issue with CircularProgressbarWithChildren:\n   * https://github.com/kevinsqi/react-circular-progressbar/issues/94\n   */\n  vertical-align: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-path {\n  stroke: #3e98c7;\n  stroke-linecap: round;\n  -webkit-transition: stroke-dashoffset 0.5s ease 0s;\n  transition: stroke-dashoffset 0.5s ease 0s;\n}\n\n.CircularProgressbar .CircularProgressbar-trail {\n  stroke: #d6d6d6;\n  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\n  stroke-linecap: round;\n}\n\n.CircularProgressbar .CircularProgressbar-text {\n  fill: #3e98c7;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-background {\n  fill: #d6d6d6;\n}\n\n/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className=\"CircularProgressbar-inverted\"\n *     background\n *     percentage={50}\n *   />\n */\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n  fill: #3e98c7;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n  fill: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n  stroke: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n  stroke: transparent;\n}\n", "", {"version":3,"sources":["E:/Appkube-Platform/xformation-plugins/xformation-workflow-engine/node_modules/react-circular-progressbar/dist/styles.css"],"names":[],"mappings":"AAAA;;;GAGG;;AAEH;EACE;;;KAGG;EACH,YAAY;EACZ;;;KAGG;EACH,uBAAuB;CACxB;;AAED;EACE,gBAAgB;EAChB,sBAAsB;EACtB,mDAAmD;EACnD,2CAA2C;CAC5C;;AAED;EACE,gBAAgB;EAChB,8EAA8E;EAC9E,sBAAsB;CACvB;;AAED;EACE,cAAc;EACd,gBAAgB;EAChB,0BAA0B;EAC1B,oBAAoB;CACrB;;AAED;EACE,cAAc;CACf;;AAED;;;;;;;;GAQG;AACH;EACE,cAAc;CACf;;AAED;EACE,WAAW;CACZ;;AAED;EACE,aAAa;CACd;;AAED;EACE,oBAAoB;CACrB","file":"styles.css","sourcesContent":["/*\n * react-circular-progressbar styles\n * All of the styles in this file are configurable!\n */\n\n.CircularProgressbar {\n  /*\n   * This fixes an issue where the CircularProgressbar svg has\n   * 0 width inside a \"display: flex\" container, and thus not visible.\n   */\n  width: 100%;\n  /*\n   * This fixes a centering issue with CircularProgressbarWithChildren:\n   * https://github.com/kevinsqi/react-circular-progressbar/issues/94\n   */\n  vertical-align: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-path {\n  stroke: #3e98c7;\n  stroke-linecap: round;\n  -webkit-transition: stroke-dashoffset 0.5s ease 0s;\n  transition: stroke-dashoffset 0.5s ease 0s;\n}\n\n.CircularProgressbar .CircularProgressbar-trail {\n  stroke: #d6d6d6;\n  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\n  stroke-linecap: round;\n}\n\n.CircularProgressbar .CircularProgressbar-text {\n  fill: #3e98c7;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-background {\n  fill: #d6d6d6;\n}\n\n/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className=\"CircularProgressbar-inverted\"\n *     background\n *     percentage={50}\n *   />\n */\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n  fill: #3e98c7;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n  fill: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n  stroke: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n  stroke: transparent;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 10 */
/*!************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!../node_modules/simplebar/dist/simplebar.min.css ***!
  \************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.id, "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n", "", {"version":3,"sources":["E:/Appkube-Platform/xformation-plugins/xformation-workflow-engine/node_modules/simplebar/dist/simplebar.min.css"],"names":[],"mappings":"AAAA,iBAAiB,kBAAkB,sBAAsB,eAAe,2BAA2B,yBAAyB,sBAAsB,CAAC,mBAAmB,gBAAgB,cAAc,eAAe,kBAAkB,kBAAkB,CAAC,gBAAgB,kBAAkB,kBAAkB,gBAAgB,UAAU,SAAS,OAAO,MAAM,SAAS,QAAQ,qBAAqB,sBAAsB,SAAS,CAAC,kBAAkB,4BAA4B,6BAA6B,sBAAsB,kBAAkB,MAAM,OAAO,SAAS,QAAQ,UAAU,SAAS,gCAAgC,CAAC,2BAA2B,kBAAkB,gCAAgC,kBAAkB,cAAc,YAAY,WAAW,eAAe,gBAAgB,qBAAqB,uBAAuB,CAAC,2FAA2F,QAAQ,QAAQ,CAAC,mDAAmD,YAAY,aAAa,CAAC,uBAAuB,gBAAgB,eAAe,WAAW,mBAAmB,CAAC,wCAAwC,6BAA6B,YAAY,WAAW,cAAc,kBAAkB,WAAW,eAAe,gBAAgB,WAAW,UAAU,SAAS,oBAAoB,kBAAkB,cAAc,YAAY,CAAC,gCAAgC,mBAAmB,cAAc,UAAU,kBAAkB,MAAM,OAAO,aAAa,YAAY,eAAe,cAAc,gBAAgB,oBAAoB,UAAU,CAAC,iBAAiB,UAAU,kBAAkB,QAAQ,SAAS,oBAAoB,eAAe,CAAC,uDAAuD,oBAAoB,iBAAiB,wBAAwB,CAAC,qDAAqD,kBAAkB,CAAC,qBAAqB,kBAAkB,OAAO,QAAQ,eAAe,CAAC,4BAA4B,kBAAkB,WAAW,gBAAgB,kBAAkB,SAAS,UAAU,UAAU,6BAA6B,CAAC,8CAA8C,WAAW,4BAA4B,CAAC,oCAAoC,MAAM,UAAU,CAAC,gEAAgE,QAAQ,UAAU,CAAC,sCAAsC,OAAO,WAAW,CAAC,kEAAkE,YAAY,SAAS,SAAS,CAAC,2DAA2D,WAAW,OAAO,QAAQ,WAAW,aAAa,eAAe,UAAU,CAAC,mEAAmE,WAAW,MAAM,CAAC,yBAAyB,cAAc,eAAe,UAAU,kBAAkB,aAAa,YAAY,kBAAkB,iBAAiB,CAAC,0BAA0B,eAAe,OAAO,kBAAkB,kBAAkB,qBAAqB,uBAAuB,CAAC","file":"simplebar.min.css","sourcesContent":["[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 11 */
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./css/workflowengine.light.css ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.id, ".owrkflow-dashboard-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-dashboard-container .dashboard-container {\n    display: block;\n    width: 100%;\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-dashboard-container .dashboard-container .fliter-container {\n      display: block;\n      width: 100%;\n      padding-bottom: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .heading {\n        display: block;\n        font-size: 14px;\n        line-height: 32px;\n        font-weight: 600;\n        color: #3b4859; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search {\n        float: right;\n        width: auto; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus-visible {\n              outline: none; }\n    .owrkflow-dashboard-container .dashboard-container .dashbord-top-section {\n      padding: 0 0 30px 0; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading h3 {\n        margin: 0;\n        font-weight: 600;\n        color: #202020;\n        letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading span {\n        font-size: 13px;\n        line-height: 24px;\n        color: #a5a5a5; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender {\n        width: 100%;\n        border: none;\n        vertical-align: middle;\n        border-radius: 10px;\n        background-color: #ffffff;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content {\n          line-height: 20px;\n          cursor: pointer;\n          padding: 10px 20px;\n          position: relative; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-icon {\n            color: #6418c3;\n            margin-right: 15px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-arrow {\n            color: #aaaaaa;\n            float: right;\n            margin-top: 5px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text {\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text p {\n              font-weight: 500;\n              font-size: 14px;\n              line-height: 14px;\n              color: #000000;\n              margin-bottom: 0; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span {\n              font-weight: 500;\n              font-size: 12px;\n              line-height: 14px;\n              color: #393939;\n              width: 65px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input {\n                border: none;\n                width: auto; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon {\n                  padding-right: 7px;\n                  width: auto; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon svg {\n                    display: none; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon::after {\n                    content: \"To\";\n                    font-weight: 500;\n                    font-size: 12px;\n                    line-height: 14px;\n                    color: #393939;\n                    display: inline-block;\n                    vertical-align: top; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__start .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__end .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__trigger {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                z-index: 1;\n                padding: 30px 0 0 60px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container {\n                right: 0 !important;\n                left: auto !important;\n                z-index: 1; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container .calendar__day {\n                  height: 32px;\n                  line-height: 32px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .rc-backdrop {\n                z-index: 0; }\n    .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box {\n      padding: 20px 15px;\n      height: 130px;\n      border-radius: 15px;\n      border: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #ffffff;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 45px;\n        position: relative; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img img {\n          width: 75px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img span {\n          position: absolute;\n          top: 13px;\n          right: -8px;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n          color: #fff;\n          font-weight: 700;\n          line-height: 20px;\n          background: #5fcffd;\n          border-radius: 50%; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .mail-icon {\n          font-size: 50px;\n          color: #7924ca; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .in-progress {\n          width: 18px;\n          height: 45px;\n          margin-right: 5px;\n          border-radius: 15px;\n          display: inline-block;\n          background-color: #dfecf2; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .complate-progress {\n          width: 18px;\n          height: 75px;\n          border-radius: 15px;\n          display: inline-block;\n          background-image: linear-gradient(180deg, #60dfff, #7ff0ffb0); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content {\n        width: auto;\n        display: inline-block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content span {\n          font-size: 14px;\n          font-weight: 500;\n          color: #a5a5a5; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content h3 {\n          margin: 0;\n          margin-bottom: 5px;\n          font-size: 30px;\n          line-height: 36px;\n          font-weight: 700; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed {\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          display: block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #60dfff;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss {\n          position: relative;\n          padding-left: 20px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #dfecf2;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n    .owrkflow-dashboard-container .dashboard-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        max-height: 400px;\n        min-height: 400px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 3px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #38e25d; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #5ecfff; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n    .owrkflow-dashboard-container .dashboard-container .project-resources-section {\n      display: block;\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 40px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs {\n            display: flex;\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            border-bottom: 2px solid #f8f8f8; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li {\n              display: inline-block;\n              padding-left: 15px;\n              padding-right: 15px;\n              padding-bottom: 10px;\n              margin-right: 10px;\n              font-size: 14px;\n              line-height: 22px;\n              font-weight: 500;\n              color: #a5a5a5;\n              cursor: pointer;\n              border-bottom: 2px solid transparent; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:hover {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li.active {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:last-child {\n                margin-right: 0; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects {\n          display: block;\n          width: 100%;\n          padding: 0;\n          max-height: 300px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project {\n            display: flex;\n            width: 100%;\n            padding: 15px 20px;\n            border-left: 5px solid #f6eeff;\n            border-bottom: 1px solid #f6eeff;\n            justify-content: flex-start;\n            align-items: flex-start; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project.active {\n              border-left: 5px solid #6418c3; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box {\n              display: flex;\n              margin-right: 15px;\n              width: 44px;\n              height: 44px;\n              border-radius: 15px;\n              padding-left: 3px;\n              padding-right: 3px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              border: 1px solid #f8f8f8;\n              background-color: #ffffff;\n              cursor: pointer; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box span {\n                display: inline-block;\n                font-size: 16px;\n                color: #c2c2c2;\n                line-height: 22px;\n                border: 1px solid #f8f8f8; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active {\n                background-color: #ffebcc; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active span {\n                  color: #ffab2d; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon {\n              display: flex;\n              width: 30px;\n              height: 44px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              margin-right: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content {\n              display: flex;\n              width: calc(100% - 104px);\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              align-items: flex-start; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content h4 {\n                display: block;\n                width: 100%;\n                margin-bottom: 5px;\n                font-size: 16px;\n                line-height: 22px;\n                font-weight: 600;\n                color: #202020; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span {\n                display: block;\n                width: 100%;\n                margin-bottom: 10px;\n                font-size: 15px;\n                line-height: 18px;\n                font-weight: 500;\n                color: #a5a5a5; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span i {\n                  display: inline-block;\n                  font-size: 6px;\n                  margin-left: 10px;\n                  margin-right: 10px;\n                  line-height: 10px;\n                  vertical-align: top;\n                  margin-top: 6px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content p {\n                display: block;\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                width: 100%;\n                margin-bottom: 0px;\n                font-size: 13px;\n                line-height: 18px;\n                font-weight: 300;\n                color: #202020;\n                height: 40px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 20px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading p {\n            color: #a5a5a5;\n            font-weight: 400; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          max-height: 289px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 100%;\n            margin-bottom: 15px; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image {\n              display: flex;\n              width: 48px;\n              height: 48px;\n              margin-right: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content {\n              display: flex;\n              width: calc(100% - 102px);\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content h3 {\n                display: block;\n                width: 100%;\n                font-size: 16px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020;\n                margin-bottom: 5px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content p {\n                display: block;\n                width: 100%;\n                color: #a5a5a5;\n                font-size: 13px;\n                line-height: 16px;\n                margin-bottom: 0;\n                font-weight: 300; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon {\n              display: flex;\n              width: 24px;\n              height: 24px;\n              margin-left: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon span {\n                background-color: #6418c3;\n                border-radius: 50%;\n                width: 24px;\n                height: 24px;\n                text-align: center;\n                color: #ffffff;\n                font-size: 12px;\n                line-height: 24px; }\n    .owrkflow-dashboard-container .dashboard-container .project-overview-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading {\n        display: block;\n        width: 100%; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .table {\n        display: block;\n        width: 100%;\n        padding-top: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 18px;\n          font-weight: 400;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(5) {\n            text-align: center; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 14px;\n          font-weight: 300;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td span {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td a {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(5) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .progress {\n            color: #ffa000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .pending {\n            color: #860000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .completed {\n            color: #00861b; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th {\n          position: relative;\n          border-bottom: 1px solid #e6e6e6;\n          padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th::after {\n            border-right: 1px solid #e6e6e6;\n            display: inline-block;\n            height: calc(100% - 15px);\n            position: absolute;\n            right: 0;\n            top: 0;\n            content: \"\";\n            width: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th:last-child::after {\n            border-right: none; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody {\n          padding-top: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td {\n            border-right: 1px solid #e6e6e6;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: center; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:first-child {\n              text-align: left; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:last-child {\n              border-right: none; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa {\n              font-size: 20px;\n              line-height: 24px; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.green {\n                color: #00861b; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.orange {\n                color: #eea515; }\n    .owrkflow-dashboard-container .dashboard-container .project-allocation-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading {\n        display: block;\n        width: 100%;\n        padding-bottom: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation {\n        display: flex;\n        display: -webkit-box;\n        width: 100%;\n        overflow: hidden;\n        overflow-x: auto; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box {\n          display: flex;\n          width: 250px;\n          max-width: 250px;\n          margin-right: 15px;\n          border-radius: 8px;\n          flex-wrap: wrap;\n          padding: 5px;\n          background: #87b5ff; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(2) {\n            background-color: #fbb987; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(3) {\n            background-color: #8ce4be; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(4) {\n            background-color: #ff9d9d; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(5) {\n            background-color: #b28ef9; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box h3 {\n            display: block;\n            width: 100%;\n            text-align: center;\n            color: #fff;\n            font-weight: 400px;\n            font-size: 18px;\n            line-height: 22px;\n            padding-top: 15px;\n            padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box {\n            display: block;\n            width: 100%;\n            max-height: 300px;\n            overflow: hidden;\n            overflow-y: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource {\n              display: flex;\n              width: 100%;\n              background-color: #f3f8ff;\n              border-radius: 8px;\n              margin-bottom: 10px;\n              padding: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image {\n                display: flex;\n                width: 48px;\n                height: 48px;\n                border-radius: 10px;\n                margin-right: 12px;\n                justify-content: center;\n                align-items: center; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image img {\n                  max-width: 100%;\n                  height: auto; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content {\n                display: flex;\n                flex-wrap: wrap;\n                width: calc(100% - 60px); }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content h4 {\n                  display: block;\n                  width: 100%;\n                  color: #202020;\n                  font-weight: 500;\n                  font-size: 16px;\n                  line-height: 22px;\n                  margin-bottom: 2px; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content p {\n                  display: block;\n                  width: 100%;\n                  color: #a5a5a5;\n                  font-weight: 300;\n                  font-size: 13px;\n                  line-height: 18px;\n                  margin-bottom: 0; }\n\n.owrkflow-project-wise-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-project-wise-container .project-wise-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 30px;\n    padding-bottom: 15px; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading {\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left {\n        display: flex; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-icon {\n          display: inline-block; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content {\n          margin-left: 20px;\n          display: inline-block; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content h3 {\n            font-size: 18px;\n            line-height: 22px;\n            font-weight: 500;\n            color: #202020;\n            margin: 0; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content span {\n            font-size: 14px;\n            line-height: 18px;\n            font-weight: 500;\n            color: #202020; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content p {\n            font-size: 12px;\n            line-height: 16px;\n            font-weight: 400;\n            color: #202020;\n            margin: 10px 0 0 0; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right {\n        float: right; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right span {\n          display: inline-block;\n          width: 25px;\n          height: 25px;\n          line-height: 25px;\n          border-radius: 25px;\n          text-align: center;\n          color: #fff;\n          font-size: 14px;\n          background-color: #8145cd; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-status {\n      margin-top: 50px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-status-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .status-fliter {\n        padding-left: 16px;\n        padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table {\n        padding-top: 30px;\n        padding-left: 16px;\n        padding-right: 16px; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.green {\n                color: #57d25f; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.orange {\n                color: #eea515; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources {\n      padding-top: 30px;\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            display: flex;\n            width: 280px;\n            max-width: 280px;\n            margin-right: 30px;\n            border-radius: 8px;\n            flex-wrap: wrap;\n            padding: 20px;\n            margin-bottom: 15px;\n            background: #ffffff;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 18px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: 202020; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text p {\n                  font-size: 14px;\n                  line-height: 20px;\n                  font-weight: 400;\n                  color: #a5a5a5;\n                  margin: 8px 0 0 0; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px;\n              width: 100%;\n              display: block; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar {\n              display: block;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n                width: 130px;\n                height: 130px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n                margin: 15px 0 0 0;\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020; }\n\n.owrkflow-resource-wise-View-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-resource-wise-View-container .resource-wise-View-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-icon {\n        display: inline-block; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content {\n        margin-left: 20px;\n        display: inline-block; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content h3 {\n          font-size: 18px;\n          line-height: 22px;\n          font-weight: 500;\n          color: #202020;\n          margin: 0 0 10px 0; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content span {\n          font-size: 14px;\n          line-height: 18px;\n          font-weight: 400;\n          color: #a5a5a5; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right {\n      float: right; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right span {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 25px;\n        text-align: center;\n        color: #fff;\n        font-size: 14px;\n        background-color: #8145cd; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status {\n      border-radius: 8px;\n      margin-top: 50px;\n      padding: 40px 20px 20px 20px;\n      background-color: #fefefe; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .heading {\n        margin-bottom: 30px;\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content p {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 400;\n        color: #202020;\n        margin-bottom: 8px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content span {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          font-weight: 500;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table {\n        margin-top: 50px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 400;\n            height: 40px;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px;\n              color: #57d25f; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .tast-content {\n            font-weight: 500;\n            color: #2662f0; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .project-content {\n            color: #414d55; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources {\n      margin-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            width: 300px;\n            max-width: 100%;\n            margin-right: 30px;\n            border-radius: 8px;\n            padding: 15px 15px 5px 15px;\n            margin-bottom: 15px;\n            cursor: pointer;\n            background: #fefefe;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 16px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n              width: 130px;\n              height: 130px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n              margin: 15px 0 0 0;\n              font-size: 14px;\n              line-height: 20px;\n              font-weight: 500;\n              color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .card-arrow-image {\n              margin-top: 20px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 2px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #8884d8; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #82ca9d; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n\n/*# sourceMappingURL=workflowengine.light.css.map */", "", {"version":3,"sources":["E:/Appkube-Platform/xformation-plugins/xformation-workflow-engine/src/css/workflowengine.light.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,eAAe;MACf,YAAY;MACZ,qBAAqB,EAAE;MACvB;QACE,eAAe;QACf,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,aAAa;QACb,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,aAAa;UACb,aAAa;UACb,oBAAoB;UACpB,WAAW;UACX,0BAA0B;UAC1B,mBAAmB,EAAE;UACrB;YACE,iBAAiB;YACjB,aAAa;YACb,YAAY;YACZ,aAAa;YACb,gBAAgB;YAChB,kBAAkB;YAClB,eAAe;YACf,kBAAkB,EAAE;YACpB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,sBAAsB;UACtB,aAAa;UACb,aAAa;UACb,oBAAoB;UACpB,WAAW;UACX,0BAA0B;UAC1B,kBAAkB,EAAE;UACpB;YACE,iBAAiB;YACjB,aAAa;YACb,YAAY;YACZ,aAAa;YACb,gBAAgB;YAChB,kBAAkB;YAClB,eAAe;YACf,kBAAkB,EAAE;YACpB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;IAC1B;MACE,oBAAoB,EAAE;MACtB;QACE,UAAU;QACV,iBAAiB;QACjB,eAAe;QACf,oBAAoB,EAAE;MACxB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,eAAe,EAAE;MACnB;QACE,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,oBAAoB;QACpB,0BAA0B;QAC1B,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,kBAAkB;UAClB,gBAAgB;UAChB,mBAAmB;UACnB,mBAAmB,EAAE;UACrB;YACE,eAAe;YACf,mBAAmB;YACnB,uBAAuB,EAAE;UAC3B;YACE,eAAe;YACf,aAAa;YACb,gBAAgB;YAChB,uBAAuB,EAAE;UAC3B;YACE,sBAAsB;YACtB,uBAAuB;YACvB,gBAAgB,EAAE;YAClB;cACE,iBAAiB;cACjB,gBAAgB;cAChB,kBAAkB;cAClB,eAAe;cACf,iBAAiB,EAAE;YACrB;cACE,iBAAiB;cACjB,gBAAgB;cAChB,kBAAkB;cAClB,eAAe;cACf,YAAY,EAAE;cACd;gBACE,aAAa;gBACb,YAAY,EAAE;gBACd;kBACE,mBAAmB;kBACnB,YAAY,EAAE;kBACd;oBACE,cAAc,EAAE;kBAClB;oBACE,cAAc;oBACd,iBAAiB;oBACjB,gBAAgB;oBAChB,kBAAkB;oBAClB,eAAe;oBACf,sBAAsB;oBACtB,oBAAoB,EAAE;gBAC1B;kBACE,sBAAsB;kBACtB,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,eAAe;kBACf,8BAA8B,EAAE;gBAClC;kBACE,sBAAsB;kBACtB,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,eAAe;kBACf,8BAA8B,EAAE;cACpC;gBACE,mBAAmB;gBACnB,QAAQ;gBACR,OAAO;gBACP,YAAY;gBACZ,aAAa;gBACb,WAAW;gBACX,uBAAuB,EAAE;cAC3B;gBACE,oBAAoB;gBACpB,sBAAsB;gBACtB,WAAW,EAAE;gBACb;kBACE,aAAa;kBACb,kBAAkB,EAAE;cACxB;gBACE,WAAW,EAAE;IACzB;MACE,mBAAmB;MACnB,cAAc;MACd,oBAAoB;MACpB,aAAa;MACb,cAAc;MACd,wBAAwB;MACxB,oBAAoB;MACpB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,mBAAmB,EAAE;QACrB;UACE,YAAY,EAAE;QAChB;UACE,mBAAmB;UACnB,UAAU;UACV,YAAY;UACZ,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,YAAY;UACZ,iBAAiB;UACjB,kBAAkB;UAClB,oBAAoB;UACpB,mBAAmB,EAAE;QACvB;UACE,gBAAgB;UAChB,eAAe,EAAE;QACnB;UACE,YAAY;UACZ,aAAa;UACb,kBAAkB;UAClB,oBAAoB;UACpB,sBAAsB;UACtB,0BAA0B,EAAE;QAC9B;UACE,YAAY;UACZ,aAAa;UACb,oBAAoB;UACpB,sBAAsB;UACtB,8DAA8D,EAAE;MACpE;QACE,YAAY;QACZ,sBAAsB;QACtB,oBAAoB;QACpB,iBAAiB;QACjB,wBAAwB,EAAE;QAC1B;UACE,gBAAgB;UAChB,iBAAiB;UACjB,eAAe,EAAE;QACnB;UACE,UAAU;UACV,mBAAmB;UACnB,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB,EAAE;QACrB;UACE,oBAAoB;UACpB,mBAAmB;UACnB,mBAAmB;UACnB,eAAe;UACf,oBAAoB;UACpB,iBAAiB;UACjB,wBAAwB,EAAE;UAC1B;YACE,gBAAgB;YAChB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,UAAU;YACV,kBAAkB;YAClB,iBAAiB,EAAE;YACnB;cACE,YAAY;cACZ,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB;cACnB,SAAS;cACT,UAAU,EAAE;QAClB;UACE,mBAAmB;UACnB,mBAAmB;UACnB,oBAAoB;UACpB,iBAAiB;UACjB,wBAAwB,EAAE;UAC1B;YACE,gBAAgB;YAChB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,UAAU;YACV,kBAAkB;YAClB,iBAAiB,EAAE;YACnB;cACE,YAAY;cACZ,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB;cACnB,SAAS;cACT,UAAU,EAAE;IACtB;MACE,kBAAkB,EAAE;MACpB;QACE,0BAA0B;QAC1B,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,oBAAoB;UACpB,oBAAoB,EAAE;QACxB;UACE,kBAAkB,EAAE;UACpB;YACE,0BAA0B;YAC1B,oBAAoB;YACpB,aAAa;YACb,mBAAmB;YACnB,eAAe,EAAE;YACjB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,aAAa;UACb,eAAe;UACf,aAAa;UACb,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,gBAAgB;UAChB,mBAAmB;UACnB,kBAAkB;UAClB,wDAAwD,EAAE;UAC1D;YACE,kBAAkB,EAAE;UACtB;YACE,sCAAsC,EAAE;QAC5C;UACE,aAAa,EAAE;UACf;YACE,eAAe;YACf,oBAAoB;YACpB,mBAAmB,EAAE;YACrB;cACE,eAAe;cACf,gBAAgB;cAChB,kBAAkB;cAClB,kBAAkB,EAAE;cACpB;gBACE,YAAY;gBACZ,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,SAAS;gBACT,QAAQ;gBACR,mBAAmB;gBACnB,0BAA0B,EAAE;UAClC;YACE,0BAA0B,EAAE;QAChC;UACE,iBAAiB;UACjB,mBAAmB,EAAE;UACrB;YACE,gBAAgB,EAAE;IAC1B;MACE,eAAe;MACf,kBAAkB,EAAE;MACpB;QACE,eAAe;QACf,0BAA0B;QAC1B,kBAAkB;QAClB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,qBAAqB,EAAE;UACvB;YACE,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,oBAAoB,EAAE;UACxB;YACE,cAAc;YACd,WAAW;YACX,UAAU;YACV,iBAAiB;YACjB,iCAAiC,EAAE;YACnC;cACE,sBAAsB;cACtB,mBAAmB;cACnB,oBAAoB;cACpB,qBAAqB;cACrB,mBAAmB;cACnB,gBAAgB;cAChB,kBAAkB;cAClB,iBAAiB;cACjB,eAAe;cACf,gBAAgB;cAChB,qCAAqC,EAAE;cACvC;gBACE,eAAe;gBACf,iCAAiC,EAAE;cACrC;gBACE,eAAe;gBACf,iCAAiC,EAAE;cACrC;gBACE,gBAAgB,EAAE;QAC1B;UACE,eAAe;UACf,YAAY;UACZ,WAAW;UACX,kBAAkB;UAClB,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,YAAY;YACZ,mBAAmB;YACnB,+BAA+B;YAC/B,iCAAiC;YACjC,4BAA4B;YAC5B,wBAAwB,EAAE;YAC1B;cACE,+BAA+B,EAAE;YACnC;cACE,cAAc;cACd,mBAAmB;cACnB,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,kBAAkB;cAClB,mBAAmB;cACnB,wBAAwB;cACxB,oBAAoB;cACpB,mBAAmB;cACnB,0BAA0B;cAC1B,0BAA0B;cAC1B,gBAAgB,EAAE;cAClB;gBACE,sBAAsB;gBACtB,gBAAgB;gBAChB,eAAe;gBACf,kBAAkB;gBAClB,0BAA0B,EAAE;cAC9B;gBACE,0BAA0B,EAAE;gBAC5B;kBACE,eAAe,EAAE;YACvB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,wBAAwB;cACxB,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB,EAAE;cACrB;gBACE,gBAAgB;gBAChB,aAAa,EAAE;YACnB;cACE,cAAc;cACd,0BAA0B;cAC1B,gBAAgB;cAChB,4BAA4B;cAC5B,wBAAwB,EAAE;cAC1B;gBACE,eAAe;gBACf,YAAY;gBACZ,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;cACnB;gBACE,eAAe;gBACf,YAAY;gBACZ,oBAAoB;gBACpB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;gBACjB;kBACE,sBAAsB;kBACtB,eAAe;kBACf,kBAAkB;kBAClB,mBAAmB;kBACnB,kBAAkB;kBAClB,oBAAoB;kBACpB,gBAAgB,EAAE;cACtB;gBACE,eAAe;gBACf,qBAAqB;gBACrB,sBAAsB;gBACtB,6BAA6B;gBAC7B,iBAAiB;gBACjB,wBAAwB;gBACxB,YAAY;gBACZ,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,aAAa,EAAE;MACzB;QACE,eAAe;QACf,0BAA0B;QAC1B,kBAAkB;QAClB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,qBAAqB,EAAE;UACvB;YACE,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,oBAAoB,EAAE;UACxB;YACE,eAAe;YACf,iBAAiB,EAAE;QACvB;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,oBAAoB;YACpB,wBAAwB;YACxB,YAAY;YACZ,oBAAoB,EAAE;YACtB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,mBAAmB;cACnB,wBAAwB;cACxB,oBAAoB,EAAE;cACtB;gBACE,gBAAgB;gBAChB,aAAa,EAAE;YACnB;cACE,cAAc;cACd,0BAA0B;cAC1B,wBAAwB;cACxB,oBAAoB;cACpB,gBAAgB,EAAE;cAClB;gBACE,eAAe;gBACf,YAAY;gBACZ,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,mBAAmB,EAAE;cACvB;gBACE,eAAe;gBACf,YAAY;gBACZ,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,iBAAiB,EAAE;YACvB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,kBAAkB;cAClB,wBAAwB;cACxB,oBAAoB,EAAE;cACtB;gBACE,0BAA0B;gBAC1B,mBAAmB;gBACnB,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB,EAAE;IAChC;MACE,eAAe;MACf,0BAA0B;MAC1B,iBAAiB;MACjB,mBAAmB;MACnB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,mBAAmB;UACnB,oBAAoB,EAAE;MAC1B;QACE,eAAe;QACf,YAAY;QACZ,kBAAkB,EAAE;QACpB;UACE,mBAAmB;UACnB,oBAAoB;UACpB,qBAAqB;UACrB,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,gBAAgB,EAAE;UAClB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;QACzB;UACE,mBAAmB;UACnB,oBAAoB;UACpB,qBAAqB;UACrB,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,gBAAgB,EAAE;UAClB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;UACnB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;QACrB;UACE,mBAAmB;UACnB,iCAAiC;UACjC,qBAAqB,EAAE;UACvB;YACE,gCAAgC;YAChC,sBAAsB;YACtB,0BAA0B;YAC1B,mBAAmB;YACnB,SAAS;YACT,OAAO;YACP,YAAY;YACZ,WAAW,EAAE;UACf;YACE,mBAAmB,EAAE;QACzB;UACE,iBAAiB,EAAE;UACnB;YACE,gCAAgC;YAChC,kBAAkB;YAClB,qBAAqB;YACrB,mBAAmB,EAAE;YACrB;cACE,iBAAiB,EAAE;YACrB;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB;cAChB,kBAAkB,EAAE;cACpB;gBACE,eAAe,EAAE;cACnB;gBACE,eAAe,EAAE;IAC7B;MACE,eAAe;MACf,0BAA0B;MAC1B,iBAAiB;MACjB,mBAAmB;MACnB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,eAAe;QACf,YAAY;QACZ,qBAAqB,EAAE;QACvB;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,mBAAmB;UACnB,oBAAoB,EAAE;MAC1B;QACE,cAAc;QACd,qBAAqB;QACrB,YAAY;QACZ,iBAAiB;QACjB,iBAAiB,EAAE;QACnB;UACE,cAAc;UACd,aAAa;UACb,iBAAiB;UACjB,mBAAmB;UACnB,mBAAmB;UACnB,gBAAgB;UAChB,aAAa;UACb,oBAAoB,EAAE;UACtB;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,eAAe;YACf,YAAY;YACZ,mBAAmB;YACnB,YAAY;YACZ,mBAAmB;YACnB,gBAAgB;YAChB,kBAAkB;YAClB,kBAAkB;YAClB,qBAAqB,EAAE;UACzB;YACE,eAAe;YACf,YAAY;YACZ,kBAAkB;YAClB,iBAAiB;YACjB,iBAAiB,EAAE;YACnB;cACE,cAAc;cACd,YAAY;cACZ,0BAA0B;cAC1B,mBAAmB;cACnB,oBAAoB;cACpB,cAAc,EAAE;cAChB;gBACE,cAAc;gBACd,YAAY;gBACZ,aAAa;gBACb,oBAAoB;gBACpB,mBAAmB;gBACnB,wBAAwB;gBACxB,oBAAoB,EAAE;gBACtB;kBACE,gBAAgB;kBAChB,aAAa,EAAE;cACnB;gBACE,cAAc;gBACd,gBAAgB;gBAChB,yBAAyB,EAAE;gBAC3B;kBACE,eAAe;kBACf,YAAY;kBACZ,eAAe;kBACf,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,mBAAmB,EAAE;gBACvB;kBACE,eAAe;kBACf,YAAY;kBACZ,eAAe;kBACf,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB,EAAE;;AAErC;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,mBAAmB;MACnB,oBAAoB,EAAE;MACtB;QACE,cAAc,EAAE;QAChB;UACE,sBAAsB,EAAE;QAC1B;UACE,kBAAkB;UAClB,sBAAsB,EAAE;UACxB;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe;YACf,UAAU,EAAE;UACd;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe;YACf,mBAAmB,EAAE;MAC3B;QACE,aAAa,EAAE;QACf;UACE,sBAAsB;UACtB,YAAY;UACZ,aAAa;UACb,kBAAkB;UAClB,oBAAoB;UACpB,mBAAmB;UACnB,YAAY;UACZ,gBAAgB;UAChB,0BAA0B,EAAE;IAClC;MACE,iBAAiB,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,mBAAmB;QACnB,oBAAoB,EAAE;MACxB;QACE,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,yBAAyB;UACzB,iBAAiB;UACjB,YAAY;UACZ,aAAa;UACb,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,mBAAmB;UACnB,uBAAuB,EAAE;UACzB;YACE,cAAc,EAAE;QACpB;UACE,iBAAiB;UACjB,mBAAmB;UACnB,SAAS;UACT,WAAW;UACX,iBAAiB;UACjB,gBAAgB;UAChB,eAAe;UACf,2BAA2B,EAAE;MACjC;QACE,YAAY;QACZ,mBAAmB,EAAE;QACrB;UACE,YAAY;UACZ,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,mBAAmB;UACnB,mBAAmB;UACnB,0BAA0B,EAAE;UAC5B;YACE,cAAc,EAAE;QACpB;UACE,UAAU;UACV,WAAW;UACX,gBAAgB;UAChB,eAAe;UACf,iBAAiB;UACjB,mBAAmB;UACnB,uBAAuB,EAAE;MAC7B;QACE,kBAAkB;QAClB,mBAAmB;QACnB,oBAAoB,EAAE;QACtB;UACE,YAAY;UACZ,cAAc;UACd,iCAAiC,EAAE;UACnC;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;QAC3B;UACE,YAAY;UACZ,cAAc;UACd,gBAAgB,EAAE;UAClB;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB,EAAE;cAClB;gBACE,eAAe,EAAE;cACnB;gBACE,eAAe,EAAE;IAC7B;MACE,kBAAkB;MAClB,mBAAmB;MACnB,oBAAoB,EAAE;MACtB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,iBAAiB;UACjB,cAAc;UACd,qBAAqB;UACrB,YAAY;UACZ,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,aAAa;YACb,iBAAiB;YACjB,mBAAmB;YACnB,mBAAmB;YACnB,gBAAgB;YAChB,cAAc;YACd,oBAAoB;YACpB,oBAAoB;YACpB,oFAAoF,EAAE;YACtF;cACE,cAAc;cACd,oBAAoB;cACpB,oBAAoB;cACpB,uBAAuB;cACvB,YAAY,EAAE;cACd;gBACE,kBAAkB,EAAE;gBACpB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,cAAc,EAAE;gBAClB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,eAAe;kBACf,kBAAkB,EAAE;YAC1B;cACE,oBAAoB;cACpB,YAAY;cACZ,eAAe,EAAE;cACjB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,cAAc,EAAE;cAClB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,iBAAiB,EAAE;YACvB;cACE,eAAe;cACf,YAAY,EAAE;cACd;gBACE,aAAa;gBACb,cAAc,EAAE;cAClB;gBACE,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;;AAEjC;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,cAAc;MACd,oBAAoB;MACpB,4BAA4B,EAAE;MAC9B;QACE,sBAAsB,EAAE;MAC1B;QACE,kBAAkB;QAClB,sBAAsB,EAAE;QACxB;UACE,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB;UACjB,eAAe;UACf,mBAAmB,EAAE;QACvB;UACE,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB;UACjB,eAAe,EAAE;IACvB;MACE,aAAa,EAAE;MACf;QACE,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,kBAAkB;QAClB,oBAAoB;QACpB,mBAAmB;QACnB,YAAY;QACZ,gBAAgB;QAChB,0BAA0B,EAAE;IAChC;MACE,mBAAmB;MACnB,iBAAiB;MACjB,6BAA6B;MAC7B,0BAA0B,EAAE;MAC5B;QACE,oBAAoB;QACpB,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,mBAAmB,EAAE;MACvB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,yBAAyB;UACzB,iBAAiB;UACjB,YAAY;UACZ,aAAa;UACb,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,mBAAmB;UACnB,uBAAuB;UACvB,sFAAsF,EAAE;UACxF;YACE,cAAc,EAAE;QACpB;UACE,iBAAiB;UACjB,mBAAmB;UACnB,SAAS;UACT,WAAW;UACX,iBAAiB;UACjB,gBAAgB;UAChB,eAAe;UACf,2BAA2B,EAAE;MACjC;QACE,YAAY;QACZ,mBAAmB,EAAE;QACrB;UACE,YAAY;UACZ,aAAa;UACb,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,kBAAkB;UAClB,mBAAmB;UACnB,mBAAmB;UACnB,0BAA0B;UAC1B,sFAAsF,EAAE;UACxF;YACE,cAAc,EAAE;QACpB;UACE,UAAU;UACV,WAAW;UACX,gBAAgB;UAChB,eAAe;UACf,iBAAiB;UACjB,mBAAmB;UACnB,uBAAuB,EAAE;MAC7B;QACE,iBAAiB,EAAE;QACnB;UACE,YAAY;UACZ,cAAc;UACd,iCAAiC,EAAE;UACnC;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;QAC3B;UACE,YAAY;UACZ,cAAc;UACd,gBAAgB,EAAE;UAClB;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,aAAa;YACb,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB;cAChB,eAAe,EAAE;UACrB;YACE,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;IACzB;MACE,iBAAiB,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,iBAAiB;UACjB,cAAc;UACd,qBAAqB;UACrB,YAAY;UACZ,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,aAAa;YACb,gBAAgB;YAChB,mBAAmB;YACnB,mBAAmB;YACnB,4BAA4B;YAC5B,oBAAoB;YACpB,gBAAgB;YAChB,oBAAoB;YACpB,oFAAoF,EAAE;YACtF;cACE,cAAc;cACd,oBAAoB;cACpB,oBAAoB;cACpB,uBAAuB,EAAE;cACzB;gBACE,kBAAkB,EAAE;gBACpB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,eAAe,EAAE;YACvB;cACE,oBAAoB,EAAE;cACtB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,cAAc,EAAE;cAClB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,iBAAiB,EAAE;YACvB;cACE,aAAa;cACb,cAAc,EAAE;YAClB;cACE,mBAAmB;cACnB,gBAAgB;cAChB,kBAAkB;cAClB,iBAAiB;cACjB,eAAe,EAAE;YACnB;cACE,iBAAiB,EAAE;IAC7B;MACE,kBAAkB,EAAE;MACpB;QACE,0BAA0B;QAC1B,mBAAmB;QACnB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,oBAAoB;UACpB,oBAAoB,EAAE;QACxB;UACE,kBAAkB,EAAE;UACpB;YACE,0BAA0B;YAC1B,oBAAoB;YACpB,aAAa;YACb,mBAAmB;YACnB,eAAe,EAAE;YACjB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,aAAa;UACb,eAAe;UACf,aAAa;UACb,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,gBAAgB;UAChB,mBAAmB;UACnB,kBAAkB;UAClB,wDAAwD,EAAE;UAC1D;YACE,kBAAkB,EAAE;UACtB;YACE,sCAAsC,EAAE;QAC5C;UACE,aAAa,EAAE;UACf;YACE,eAAe;YACf,oBAAoB;YACpB,mBAAmB,EAAE;YACrB;cACE,eAAe;cACf,gBAAgB;cAChB,kBAAkB;cAClB,kBAAkB,EAAE;cACpB;gBACE,YAAY;gBACZ,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,SAAS;gBACT,QAAQ;gBACR,mBAAmB;gBACnB,0BAA0B,EAAE;UAClC;YACE,0BAA0B,EAAE;QAChC;UACE,iBAAiB;UACjB,mBAAmB,EAAE;UACrB;YACE,gBAAgB,EAAE;;AAE9B,oDAAoD","file":"workflowengine.light.css","sourcesContent":[".owrkflow-dashboard-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-dashboard-container .dashboard-container {\n    display: block;\n    width: 100%;\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-dashboard-container .dashboard-container .fliter-container {\n      display: block;\n      width: 100%;\n      padding-bottom: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .heading {\n        display: block;\n        font-size: 14px;\n        line-height: 32px;\n        font-weight: 600;\n        color: #3b4859; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search {\n        float: right;\n        width: auto; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus-visible {\n              outline: none; }\n    .owrkflow-dashboard-container .dashboard-container .dashbord-top-section {\n      padding: 0 0 30px 0; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading h3 {\n        margin: 0;\n        font-weight: 600;\n        color: #202020;\n        letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading span {\n        font-size: 13px;\n        line-height: 24px;\n        color: #a5a5a5; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender {\n        width: 100%;\n        border: none;\n        vertical-align: middle;\n        border-radius: 10px;\n        background-color: #ffffff;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content {\n          line-height: 20px;\n          cursor: pointer;\n          padding: 10px 20px;\n          position: relative; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-icon {\n            color: #6418c3;\n            margin-right: 15px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-arrow {\n            color: #aaaaaa;\n            float: right;\n            margin-top: 5px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text {\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text p {\n              font-weight: 500;\n              font-size: 14px;\n              line-height: 14px;\n              color: #000000;\n              margin-bottom: 0; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span {\n              font-weight: 500;\n              font-size: 12px;\n              line-height: 14px;\n              color: #393939;\n              width: 65px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input {\n                border: none;\n                width: auto; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon {\n                  padding-right: 7px;\n                  width: auto; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon svg {\n                    display: none; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon::after {\n                    content: \"To\";\n                    font-weight: 500;\n                    font-size: 12px;\n                    line-height: 14px;\n                    color: #393939;\n                    display: inline-block;\n                    vertical-align: top; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__start .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__end .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__trigger {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                z-index: 1;\n                padding: 30px 0 0 60px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container {\n                right: 0 !important;\n                left: auto !important;\n                z-index: 1; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container .calendar__day {\n                  height: 32px;\n                  line-height: 32px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .rc-backdrop {\n                z-index: 0; }\n    .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box {\n      padding: 20px 15px;\n      height: 130px;\n      border-radius: 15px;\n      border: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #ffffff;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 45px;\n        position: relative; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img img {\n          width: 75px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img span {\n          position: absolute;\n          top: 13px;\n          right: -8px;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n          color: #fff;\n          font-weight: 700;\n          line-height: 20px;\n          background: #5fcffd;\n          border-radius: 50%; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .mail-icon {\n          font-size: 50px;\n          color: #7924ca; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .in-progress {\n          width: 18px;\n          height: 45px;\n          margin-right: 5px;\n          border-radius: 15px;\n          display: inline-block;\n          background-color: #dfecf2; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .complate-progress {\n          width: 18px;\n          height: 75px;\n          border-radius: 15px;\n          display: inline-block;\n          background-image: linear-gradient(180deg, #60dfff, #7ff0ffb0); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content {\n        width: auto;\n        display: inline-block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content span {\n          font-size: 14px;\n          font-weight: 500;\n          color: #a5a5a5; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content h3 {\n          margin: 0;\n          margin-bottom: 5px;\n          font-size: 30px;\n          line-height: 36px;\n          font-weight: 700; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed {\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          display: block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #60dfff;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss {\n          position: relative;\n          padding-left: 20px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #dfecf2;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n    .owrkflow-dashboard-container .dashboard-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        max-height: 400px;\n        min-height: 400px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 3px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #38e25d; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #5ecfff; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n    .owrkflow-dashboard-container .dashboard-container .project-resources-section {\n      display: block;\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 40px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs {\n            display: flex;\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            border-bottom: 2px solid #f8f8f8; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li {\n              display: inline-block;\n              padding-left: 15px;\n              padding-right: 15px;\n              padding-bottom: 10px;\n              margin-right: 10px;\n              font-size: 14px;\n              line-height: 22px;\n              font-weight: 500;\n              color: #a5a5a5;\n              cursor: pointer;\n              border-bottom: 2px solid transparent; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:hover {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li.active {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:last-child {\n                margin-right: 0; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects {\n          display: block;\n          width: 100%;\n          padding: 0;\n          max-height: 300px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project {\n            display: flex;\n            width: 100%;\n            padding: 15px 20px;\n            border-left: 5px solid #f6eeff;\n            border-bottom: 1px solid #f6eeff;\n            justify-content: flex-start;\n            align-items: flex-start; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project.active {\n              border-left: 5px solid #6418c3; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box {\n              display: flex;\n              margin-right: 15px;\n              width: 44px;\n              height: 44px;\n              border-radius: 15px;\n              padding-left: 3px;\n              padding-right: 3px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              border: 1px solid #f8f8f8;\n              background-color: #ffffff;\n              cursor: pointer; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box span {\n                display: inline-block;\n                font-size: 16px;\n                color: #c2c2c2;\n                line-height: 22px;\n                border: 1px solid #f8f8f8; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active {\n                background-color: #ffebcc; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active span {\n                  color: #ffab2d; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon {\n              display: flex;\n              width: 30px;\n              height: 44px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              margin-right: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content {\n              display: flex;\n              width: calc(100% - 104px);\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              align-items: flex-start; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content h4 {\n                display: block;\n                width: 100%;\n                margin-bottom: 5px;\n                font-size: 16px;\n                line-height: 22px;\n                font-weight: 600;\n                color: #202020; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span {\n                display: block;\n                width: 100%;\n                margin-bottom: 10px;\n                font-size: 15px;\n                line-height: 18px;\n                font-weight: 500;\n                color: #a5a5a5; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span i {\n                  display: inline-block;\n                  font-size: 6px;\n                  margin-left: 10px;\n                  margin-right: 10px;\n                  line-height: 10px;\n                  vertical-align: top;\n                  margin-top: 6px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content p {\n                display: block;\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                width: 100%;\n                margin-bottom: 0px;\n                font-size: 13px;\n                line-height: 18px;\n                font-weight: 300;\n                color: #202020;\n                height: 40px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 20px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading p {\n            color: #a5a5a5;\n            font-weight: 400; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          max-height: 289px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 100%;\n            margin-bottom: 15px; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image {\n              display: flex;\n              width: 48px;\n              height: 48px;\n              margin-right: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content {\n              display: flex;\n              width: calc(100% - 102px);\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content h3 {\n                display: block;\n                width: 100%;\n                font-size: 16px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020;\n                margin-bottom: 5px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content p {\n                display: block;\n                width: 100%;\n                color: #a5a5a5;\n                font-size: 13px;\n                line-height: 16px;\n                margin-bottom: 0;\n                font-weight: 300; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon {\n              display: flex;\n              width: 24px;\n              height: 24px;\n              margin-left: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon span {\n                background-color: #6418c3;\n                border-radius: 50%;\n                width: 24px;\n                height: 24px;\n                text-align: center;\n                color: #ffffff;\n                font-size: 12px;\n                line-height: 24px; }\n    .owrkflow-dashboard-container .dashboard-container .project-overview-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading {\n        display: block;\n        width: 100%; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .table {\n        display: block;\n        width: 100%;\n        padding-top: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 18px;\n          font-weight: 400;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(5) {\n            text-align: center; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 14px;\n          font-weight: 300;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td span {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td a {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(5) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .progress {\n            color: #ffa000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .pending {\n            color: #860000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .completed {\n            color: #00861b; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th {\n          position: relative;\n          border-bottom: 1px solid #e6e6e6;\n          padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th::after {\n            border-right: 1px solid #e6e6e6;\n            display: inline-block;\n            height: calc(100% - 15px);\n            position: absolute;\n            right: 0;\n            top: 0;\n            content: \"\";\n            width: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th:last-child::after {\n            border-right: none; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody {\n          padding-top: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td {\n            border-right: 1px solid #e6e6e6;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: center; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:first-child {\n              text-align: left; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:last-child {\n              border-right: none; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa {\n              font-size: 20px;\n              line-height: 24px; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.green {\n                color: #00861b; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.orange {\n                color: #eea515; }\n    .owrkflow-dashboard-container .dashboard-container .project-allocation-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading {\n        display: block;\n        width: 100%;\n        padding-bottom: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation {\n        display: flex;\n        display: -webkit-box;\n        width: 100%;\n        overflow: hidden;\n        overflow-x: auto; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box {\n          display: flex;\n          width: 250px;\n          max-width: 250px;\n          margin-right: 15px;\n          border-radius: 8px;\n          flex-wrap: wrap;\n          padding: 5px;\n          background: #87b5ff; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(2) {\n            background-color: #fbb987; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(3) {\n            background-color: #8ce4be; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(4) {\n            background-color: #ff9d9d; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(5) {\n            background-color: #b28ef9; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box h3 {\n            display: block;\n            width: 100%;\n            text-align: center;\n            color: #fff;\n            font-weight: 400px;\n            font-size: 18px;\n            line-height: 22px;\n            padding-top: 15px;\n            padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box {\n            display: block;\n            width: 100%;\n            max-height: 300px;\n            overflow: hidden;\n            overflow-y: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource {\n              display: flex;\n              width: 100%;\n              background-color: #f3f8ff;\n              border-radius: 8px;\n              margin-bottom: 10px;\n              padding: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image {\n                display: flex;\n                width: 48px;\n                height: 48px;\n                border-radius: 10px;\n                margin-right: 12px;\n                justify-content: center;\n                align-items: center; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image img {\n                  max-width: 100%;\n                  height: auto; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content {\n                display: flex;\n                flex-wrap: wrap;\n                width: calc(100% - 60px); }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content h4 {\n                  display: block;\n                  width: 100%;\n                  color: #202020;\n                  font-weight: 500;\n                  font-size: 16px;\n                  line-height: 22px;\n                  margin-bottom: 2px; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content p {\n                  display: block;\n                  width: 100%;\n                  color: #a5a5a5;\n                  font-weight: 300;\n                  font-size: 13px;\n                  line-height: 18px;\n                  margin-bottom: 0; }\n\n.owrkflow-project-wise-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-project-wise-container .project-wise-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 30px;\n    padding-bottom: 15px; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading {\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left {\n        display: flex; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-icon {\n          display: inline-block; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content {\n          margin-left: 20px;\n          display: inline-block; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content h3 {\n            font-size: 18px;\n            line-height: 22px;\n            font-weight: 500;\n            color: #202020;\n            margin: 0; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content span {\n            font-size: 14px;\n            line-height: 18px;\n            font-weight: 500;\n            color: #202020; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content p {\n            font-size: 12px;\n            line-height: 16px;\n            font-weight: 400;\n            color: #202020;\n            margin: 10px 0 0 0; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right {\n        float: right; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right span {\n          display: inline-block;\n          width: 25px;\n          height: 25px;\n          line-height: 25px;\n          border-radius: 25px;\n          text-align: center;\n          color: #fff;\n          font-size: 14px;\n          background-color: #8145cd; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-status {\n      margin-top: 50px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-status-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .status-fliter {\n        padding-left: 16px;\n        padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table {\n        padding-top: 30px;\n        padding-left: 16px;\n        padding-right: 16px; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.green {\n                color: #57d25f; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.orange {\n                color: #eea515; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources {\n      padding-top: 30px;\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            display: flex;\n            width: 280px;\n            max-width: 280px;\n            margin-right: 30px;\n            border-radius: 8px;\n            flex-wrap: wrap;\n            padding: 20px;\n            margin-bottom: 15px;\n            background: #ffffff;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 18px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: 202020; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text p {\n                  font-size: 14px;\n                  line-height: 20px;\n                  font-weight: 400;\n                  color: #a5a5a5;\n                  margin: 8px 0 0 0; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px;\n              width: 100%;\n              display: block; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar {\n              display: block;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n                width: 130px;\n                height: 130px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n                margin: 15px 0 0 0;\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020; }\n\n.owrkflow-resource-wise-View-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-resource-wise-View-container .resource-wise-View-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-icon {\n        display: inline-block; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content {\n        margin-left: 20px;\n        display: inline-block; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content h3 {\n          font-size: 18px;\n          line-height: 22px;\n          font-weight: 500;\n          color: #202020;\n          margin: 0 0 10px 0; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content span {\n          font-size: 14px;\n          line-height: 18px;\n          font-weight: 400;\n          color: #a5a5a5; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right {\n      float: right; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right span {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 25px;\n        text-align: center;\n        color: #fff;\n        font-size: 14px;\n        background-color: #8145cd; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status {\n      border-radius: 8px;\n      margin-top: 50px;\n      padding: 40px 20px 20px 20px;\n      background-color: #fefefe; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .heading {\n        margin-bottom: 30px;\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content p {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 400;\n        color: #202020;\n        margin-bottom: 8px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content span {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          font-weight: 500;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table {\n        margin-top: 50px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 400;\n            height: 40px;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px;\n              color: #57d25f; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .tast-content {\n            font-weight: 500;\n            color: #2662f0; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .project-content {\n            color: #414d55; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources {\n      margin-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            width: 300px;\n            max-width: 100%;\n            margin-right: 30px;\n            border-radius: 8px;\n            padding: 15px 15px 5px 15px;\n            margin-bottom: 15px;\n            cursor: pointer;\n            background: #fefefe;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 16px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n              width: 130px;\n              height: 130px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n              margin: 15px 0 0 0;\n              font-size: 14px;\n              line-height: 20px;\n              font-weight: 500;\n              color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .card-arrow-image {\n              margin-top: 20px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 2px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #8884d8; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #82ca9d; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n\n/*# sourceMappingURL=workflowengine.light.css.map */"],"sourceRoot":""}]);

// exports


/***/ }),
/* 12 */
/*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./css/workflowengine.dark.css ***!
  \*****************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.id, ".owrkflow-dashboard-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-dashboard-container .dashboard-container {\n    display: block;\n    width: 100%;\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-dashboard-container .dashboard-container .fliter-container {\n      display: block;\n      width: 100%;\n      padding-bottom: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .heading {\n        display: block;\n        font-size: 14px;\n        line-height: 32px;\n        font-weight: 600;\n        color: #3b4859; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search {\n        float: right;\n        width: auto; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus-visible {\n              outline: none; }\n    .owrkflow-dashboard-container .dashboard-container .dashbord-top-section {\n      padding: 0 0 30px 0; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading h3 {\n        margin: 0;\n        font-weight: 600;\n        color: #202020;\n        letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading span {\n        font-size: 13px;\n        line-height: 24px;\n        color: #a5a5a5; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender {\n        width: 100%;\n        border: none;\n        vertical-align: middle;\n        border-radius: 10px;\n        background-color: #ffffff;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content {\n          line-height: 20px;\n          cursor: pointer;\n          padding: 10px 20px;\n          position: relative; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-icon {\n            color: #6418c3;\n            margin-right: 15px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-arrow {\n            color: #aaaaaa;\n            float: right;\n            margin-top: 5px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text {\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text p {\n              font-weight: 500;\n              font-size: 14px;\n              line-height: 14px;\n              color: #000000;\n              margin-bottom: 0; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span {\n              font-weight: 500;\n              font-size: 12px;\n              line-height: 14px;\n              color: #393939;\n              width: 65px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input {\n                border: none;\n                width: auto; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon {\n                  padding-right: 7px;\n                  width: auto; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon svg {\n                    display: none; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon::after {\n                    content: \"To\";\n                    font-weight: 500;\n                    font-size: 12px;\n                    line-height: 14px;\n                    color: #393939;\n                    display: inline-block;\n                    vertical-align: top; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__start .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__end .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__trigger {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                z-index: 1;\n                padding: 30px 0 0 60px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container {\n                right: 0 !important;\n                left: auto !important;\n                z-index: 1; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container .calendar__day {\n                  height: 32px;\n                  line-height: 32px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .rc-backdrop {\n                z-index: 0; }\n    .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box {\n      padding: 20px 15px;\n      height: 130px;\n      border-radius: 15px;\n      border: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #ffffff;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 45px;\n        position: relative; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img img {\n          width: 75px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img span {\n          position: absolute;\n          top: 13px;\n          right: -8px;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n          color: #fff;\n          font-weight: 700;\n          line-height: 20px;\n          background: #5fcffd;\n          border-radius: 50%; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .mail-icon {\n          font-size: 50px;\n          color: #7924ca; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .in-progress {\n          width: 18px;\n          height: 45px;\n          margin-right: 5px;\n          border-radius: 15px;\n          display: inline-block;\n          background-color: #dfecf2; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .complate-progress {\n          width: 18px;\n          height: 75px;\n          border-radius: 15px;\n          display: inline-block;\n          background-image: linear-gradient(180deg, #60dfff, #7ff0ffb0); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content {\n        width: auto;\n        display: inline-block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content span {\n          font-size: 14px;\n          font-weight: 500;\n          color: #a5a5a5; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content h3 {\n          margin: 0;\n          margin-bottom: 5px;\n          font-size: 30px;\n          line-height: 36px;\n          font-weight: 700; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed {\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          display: block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #60dfff;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss {\n          position: relative;\n          padding-left: 20px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #dfecf2;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n    .owrkflow-dashboard-container .dashboard-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        max-height: 400px;\n        min-height: 400px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 3px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #38e25d; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #5ecfff; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n    .owrkflow-dashboard-container .dashboard-container .project-resources-section {\n      display: block;\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 40px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs {\n            display: flex;\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            border-bottom: 2px solid #f8f8f8; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li {\n              display: inline-block;\n              padding-left: 15px;\n              padding-right: 15px;\n              padding-bottom: 10px;\n              margin-right: 10px;\n              font-size: 14px;\n              line-height: 22px;\n              font-weight: 500;\n              color: #a5a5a5;\n              cursor: pointer;\n              border-bottom: 2px solid transparent; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:hover {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li.active {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:last-child {\n                margin-right: 0; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects {\n          display: block;\n          width: 100%;\n          padding: 0;\n          max-height: 300px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project {\n            display: flex;\n            width: 100%;\n            padding: 15px 20px;\n            border-left: 5px solid #f6eeff;\n            border-bottom: 1px solid #f6eeff;\n            justify-content: flex-start;\n            align-items: flex-start; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project.active {\n              border-left: 5px solid #6418c3; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box {\n              display: flex;\n              margin-right: 15px;\n              width: 44px;\n              height: 44px;\n              border-radius: 15px;\n              padding-left: 3px;\n              padding-right: 3px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              border: 1px solid #f8f8f8;\n              background-color: #ffffff;\n              cursor: pointer; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box span {\n                display: inline-block;\n                font-size: 16px;\n                color: #c2c2c2;\n                line-height: 22px;\n                border: 1px solid #f8f8f8; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active {\n                background-color: #ffebcc; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active span {\n                  color: #ffab2d; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon {\n              display: flex;\n              width: 30px;\n              height: 44px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              margin-right: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content {\n              display: flex;\n              width: calc(100% - 104px);\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              align-items: flex-start; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content h4 {\n                display: block;\n                width: 100%;\n                margin-bottom: 5px;\n                font-size: 16px;\n                line-height: 22px;\n                font-weight: 600;\n                color: #202020; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span {\n                display: block;\n                width: 100%;\n                margin-bottom: 10px;\n                font-size: 15px;\n                line-height: 18px;\n                font-weight: 500;\n                color: #a5a5a5; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span i {\n                  display: inline-block;\n                  font-size: 6px;\n                  margin-left: 10px;\n                  margin-right: 10px;\n                  line-height: 10px;\n                  vertical-align: top;\n                  margin-top: 6px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content p {\n                display: block;\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                width: 100%;\n                margin-bottom: 0px;\n                font-size: 13px;\n                line-height: 18px;\n                font-weight: 300;\n                color: #202020;\n                height: 40px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 20px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading p {\n            color: #a5a5a5;\n            font-weight: 400; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          max-height: 289px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 100%;\n            margin-bottom: 15px; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image {\n              display: flex;\n              width: 48px;\n              height: 48px;\n              margin-right: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content {\n              display: flex;\n              width: calc(100% - 102px);\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content h3 {\n                display: block;\n                width: 100%;\n                font-size: 16px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020;\n                margin-bottom: 5px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content p {\n                display: block;\n                width: 100%;\n                color: #a5a5a5;\n                font-size: 13px;\n                line-height: 16px;\n                margin-bottom: 0;\n                font-weight: 300; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon {\n              display: flex;\n              width: 24px;\n              height: 24px;\n              margin-left: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon span {\n                background-color: #6418c3;\n                border-radius: 50%;\n                width: 24px;\n                height: 24px;\n                text-align: center;\n                color: #ffffff;\n                font-size: 12px;\n                line-height: 24px; }\n    .owrkflow-dashboard-container .dashboard-container .project-overview-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading {\n        display: block;\n        width: 100%; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .table {\n        display: block;\n        width: 100%;\n        padding-top: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 18px;\n          font-weight: 400;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(5) {\n            text-align: center; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 14px;\n          font-weight: 300;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td span {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td a {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(5) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .progress {\n            color: #ffa000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .pending {\n            color: #860000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .completed {\n            color: #00861b; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th {\n          position: relative;\n          border-bottom: 1px solid #e6e6e6;\n          padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th::after {\n            border-right: 1px solid #e6e6e6;\n            display: inline-block;\n            height: calc(100% - 15px);\n            position: absolute;\n            right: 0;\n            top: 0;\n            content: \"\";\n            width: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th:last-child::after {\n            border-right: none; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody {\n          padding-top: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td {\n            border-right: 1px solid #e6e6e6;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: center; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:first-child {\n              text-align: left; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:last-child {\n              border-right: none; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa {\n              font-size: 20px;\n              line-height: 24px; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.green {\n                color: #00861b; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.orange {\n                color: #eea515; }\n    .owrkflow-dashboard-container .dashboard-container .project-allocation-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading {\n        display: block;\n        width: 100%;\n        padding-bottom: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation {\n        display: flex;\n        display: -webkit-box;\n        width: 100%;\n        overflow: hidden;\n        overflow-x: auto; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box {\n          display: flex;\n          width: 250px;\n          max-width: 250px;\n          margin-right: 15px;\n          border-radius: 8px;\n          flex-wrap: wrap;\n          padding: 5px;\n          background: #87b5ff; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(2) {\n            background-color: #fbb987; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(3) {\n            background-color: #8ce4be; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(4) {\n            background-color: #ff9d9d; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(5) {\n            background-color: #b28ef9; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box h3 {\n            display: block;\n            width: 100%;\n            text-align: center;\n            color: #fff;\n            font-weight: 400px;\n            font-size: 18px;\n            line-height: 22px;\n            padding-top: 15px;\n            padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box {\n            display: block;\n            width: 100%;\n            max-height: 300px;\n            overflow: hidden;\n            overflow-y: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource {\n              display: flex;\n              width: 100%;\n              background-color: #f3f8ff;\n              border-radius: 8px;\n              margin-bottom: 10px;\n              padding: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image {\n                display: flex;\n                width: 48px;\n                height: 48px;\n                border-radius: 10px;\n                margin-right: 12px;\n                justify-content: center;\n                align-items: center; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image img {\n                  max-width: 100%;\n                  height: auto; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content {\n                display: flex;\n                flex-wrap: wrap;\n                width: calc(100% - 60px); }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content h4 {\n                  display: block;\n                  width: 100%;\n                  color: #202020;\n                  font-weight: 500;\n                  font-size: 16px;\n                  line-height: 22px;\n                  margin-bottom: 2px; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content p {\n                  display: block;\n                  width: 100%;\n                  color: #a5a5a5;\n                  font-weight: 300;\n                  font-size: 13px;\n                  line-height: 18px;\n                  margin-bottom: 0; }\n\n.owrkflow-project-wise-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-project-wise-container .project-wise-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 30px;\n    padding-bottom: 15px; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading {\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left {\n        display: flex; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-icon {\n          display: inline-block; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content {\n          margin-left: 20px;\n          display: inline-block; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content h3 {\n            font-size: 18px;\n            line-height: 22px;\n            font-weight: 500;\n            color: #202020;\n            margin: 0; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content span {\n            font-size: 14px;\n            line-height: 18px;\n            font-weight: 500;\n            color: #202020; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content p {\n            font-size: 12px;\n            line-height: 16px;\n            font-weight: 400;\n            color: #202020;\n            margin: 10px 0 0 0; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right {\n        float: right; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right span {\n          display: inline-block;\n          width: 25px;\n          height: 25px;\n          line-height: 25px;\n          border-radius: 25px;\n          text-align: center;\n          color: #fff;\n          font-size: 14px;\n          background-color: #8145cd; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-status {\n      margin-top: 50px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-status-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .status-fliter {\n        padding-left: 16px;\n        padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table {\n        padding-top: 30px;\n        padding-left: 16px;\n        padding-right: 16px; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.green {\n                color: #57d25f; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.orange {\n                color: #eea515; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources {\n      padding-top: 30px;\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            display: flex;\n            width: 280px;\n            max-width: 280px;\n            margin-right: 30px;\n            border-radius: 8px;\n            flex-wrap: wrap;\n            padding: 20px;\n            margin-bottom: 15px;\n            background: #ffffff;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 18px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: 202020; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text p {\n                  font-size: 14px;\n                  line-height: 20px;\n                  font-weight: 400;\n                  color: #a5a5a5;\n                  margin: 8px 0 0 0; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px;\n              width: 100%;\n              display: block; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar {\n              display: block;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n                width: 130px;\n                height: 130px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n                margin: 15px 0 0 0;\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020; }\n\n.owrkflow-resource-wise-View-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-resource-wise-View-container .resource-wise-View-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-icon {\n        display: inline-block; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content {\n        margin-left: 20px;\n        display: inline-block; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content h3 {\n          font-size: 18px;\n          line-height: 22px;\n          font-weight: 500;\n          color: #202020;\n          margin: 0 0 10px 0; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content span {\n          font-size: 14px;\n          line-height: 18px;\n          font-weight: 400;\n          color: #a5a5a5; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right {\n      float: right; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right span {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 25px;\n        text-align: center;\n        color: #fff;\n        font-size: 14px;\n        background-color: #8145cd; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status {\n      border-radius: 8px;\n      margin-top: 50px;\n      padding: 40px 20px 20px 20px;\n      background-color: #fefefe; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .heading {\n        margin-bottom: 30px;\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content p {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 400;\n        color: #202020;\n        margin-bottom: 8px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content span {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          font-weight: 500;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table {\n        margin-top: 50px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 400;\n            height: 40px;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px;\n              color: #57d25f; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .tast-content {\n            font-weight: 500;\n            color: #2662f0; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .project-content {\n            color: #414d55; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources {\n      margin-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            width: 300px;\n            max-width: 100%;\n            margin-right: 30px;\n            border-radius: 8px;\n            padding: 15px 15px 5px 15px;\n            margin-bottom: 15px;\n            cursor: pointer;\n            background: #fefefe;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 16px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n              width: 130px;\n              height: 130px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n              margin: 15px 0 0 0;\n              font-size: 14px;\n              line-height: 20px;\n              font-weight: 500;\n              color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .card-arrow-image {\n              margin-top: 20px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 2px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #8884d8; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #82ca9d; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n\n/*# sourceMappingURL=workflowengine.dark.css.map */", "", {"version":3,"sources":["E:/Appkube-Platform/xformation-plugins/xformation-workflow-engine/src/css/workflowengine.dark.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,eAAe;MACf,YAAY;MACZ,qBAAqB,EAAE;MACvB;QACE,eAAe;QACf,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,aAAa;QACb,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,aAAa;UACb,aAAa;UACb,oBAAoB;UACpB,WAAW;UACX,0BAA0B;UAC1B,mBAAmB,EAAE;UACrB;YACE,iBAAiB;YACjB,aAAa;YACb,YAAY;YACZ,aAAa;YACb,gBAAgB;YAChB,kBAAkB;YAClB,eAAe;YACf,kBAAkB,EAAE;YACpB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,sBAAsB;UACtB,aAAa;UACb,aAAa;UACb,oBAAoB;UACpB,WAAW;UACX,0BAA0B;UAC1B,kBAAkB,EAAE;UACpB;YACE,iBAAiB;YACjB,aAAa;YACb,YAAY;YACZ,aAAa;YACb,gBAAgB;YAChB,kBAAkB;YAClB,eAAe;YACf,kBAAkB,EAAE;YACpB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;IAC1B;MACE,oBAAoB,EAAE;MACtB;QACE,UAAU;QACV,iBAAiB;QACjB,eAAe;QACf,oBAAoB,EAAE;MACxB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,eAAe,EAAE;MACnB;QACE,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,oBAAoB;QACpB,0BAA0B;QAC1B,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,kBAAkB;UAClB,gBAAgB;UAChB,mBAAmB;UACnB,mBAAmB,EAAE;UACrB;YACE,eAAe;YACf,mBAAmB;YACnB,uBAAuB,EAAE;UAC3B;YACE,eAAe;YACf,aAAa;YACb,gBAAgB;YAChB,uBAAuB,EAAE;UAC3B;YACE,sBAAsB;YACtB,uBAAuB;YACvB,gBAAgB,EAAE;YAClB;cACE,iBAAiB;cACjB,gBAAgB;cAChB,kBAAkB;cAClB,eAAe;cACf,iBAAiB,EAAE;YACrB;cACE,iBAAiB;cACjB,gBAAgB;cAChB,kBAAkB;cAClB,eAAe;cACf,YAAY,EAAE;cACd;gBACE,aAAa;gBACb,YAAY,EAAE;gBACd;kBACE,mBAAmB;kBACnB,YAAY,EAAE;kBACd;oBACE,cAAc,EAAE;kBAClB;oBACE,cAAc;oBACd,iBAAiB;oBACjB,gBAAgB;oBAChB,kBAAkB;oBAClB,eAAe;oBACf,sBAAsB;oBACtB,oBAAoB,EAAE;gBAC1B;kBACE,sBAAsB;kBACtB,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,eAAe;kBACf,8BAA8B,EAAE;gBAClC;kBACE,sBAAsB;kBACtB,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,eAAe;kBACf,8BAA8B,EAAE;cACpC;gBACE,mBAAmB;gBACnB,QAAQ;gBACR,OAAO;gBACP,YAAY;gBACZ,aAAa;gBACb,WAAW;gBACX,uBAAuB,EAAE;cAC3B;gBACE,oBAAoB;gBACpB,sBAAsB;gBACtB,WAAW,EAAE;gBACb;kBACE,aAAa;kBACb,kBAAkB,EAAE;cACxB;gBACE,WAAW,EAAE;IACzB;MACE,mBAAmB;MACnB,cAAc;MACd,oBAAoB;MACpB,aAAa;MACb,cAAc;MACd,wBAAwB;MACxB,oBAAoB;MACpB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,mBAAmB,EAAE;QACrB;UACE,YAAY,EAAE;QAChB;UACE,mBAAmB;UACnB,UAAU;UACV,YAAY;UACZ,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,YAAY;UACZ,iBAAiB;UACjB,kBAAkB;UAClB,oBAAoB;UACpB,mBAAmB,EAAE;QACvB;UACE,gBAAgB;UAChB,eAAe,EAAE;QACnB;UACE,YAAY;UACZ,aAAa;UACb,kBAAkB;UAClB,oBAAoB;UACpB,sBAAsB;UACtB,0BAA0B,EAAE;QAC9B;UACE,YAAY;UACZ,aAAa;UACb,oBAAoB;UACpB,sBAAsB;UACtB,8DAA8D,EAAE;MACpE;QACE,YAAY;QACZ,sBAAsB;QACtB,oBAAoB;QACpB,iBAAiB;QACjB,wBAAwB,EAAE;QAC1B;UACE,gBAAgB;UAChB,iBAAiB;UACjB,eAAe,EAAE;QACnB;UACE,UAAU;UACV,mBAAmB;UACnB,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB,EAAE;QACrB;UACE,oBAAoB;UACpB,mBAAmB;UACnB,mBAAmB;UACnB,eAAe;UACf,oBAAoB;UACpB,iBAAiB;UACjB,wBAAwB,EAAE;UAC1B;YACE,gBAAgB;YAChB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,UAAU;YACV,kBAAkB;YAClB,iBAAiB,EAAE;YACnB;cACE,YAAY;cACZ,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB;cACnB,SAAS;cACT,UAAU,EAAE;QAClB;UACE,mBAAmB;UACnB,mBAAmB;UACnB,oBAAoB;UACpB,iBAAiB;UACjB,wBAAwB,EAAE;UAC1B;YACE,gBAAgB;YAChB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,UAAU;YACV,kBAAkB;YAClB,iBAAiB,EAAE;YACnB;cACE,YAAY;cACZ,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB;cACnB,SAAS;cACT,UAAU,EAAE;IACtB;MACE,kBAAkB,EAAE;MACpB;QACE,0BAA0B;QAC1B,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,oBAAoB;UACpB,oBAAoB,EAAE;QACxB;UACE,kBAAkB,EAAE;UACpB;YACE,0BAA0B;YAC1B,oBAAoB;YACpB,aAAa;YACb,mBAAmB;YACnB,eAAe,EAAE;YACjB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,aAAa;UACb,eAAe;UACf,aAAa;UACb,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,gBAAgB;UAChB,mBAAmB;UACnB,kBAAkB;UAClB,wDAAwD,EAAE;UAC1D;YACE,kBAAkB,EAAE;UACtB;YACE,sCAAsC,EAAE;QAC5C;UACE,aAAa,EAAE;UACf;YACE,eAAe;YACf,oBAAoB;YACpB,mBAAmB,EAAE;YACrB;cACE,eAAe;cACf,gBAAgB;cAChB,kBAAkB;cAClB,kBAAkB,EAAE;cACpB;gBACE,YAAY;gBACZ,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,SAAS;gBACT,QAAQ;gBACR,mBAAmB;gBACnB,0BAA0B,EAAE;UAClC;YACE,0BAA0B,EAAE;QAChC;UACE,iBAAiB;UACjB,mBAAmB,EAAE;UACrB;YACE,gBAAgB,EAAE;IAC1B;MACE,eAAe;MACf,kBAAkB,EAAE;MACpB;QACE,eAAe;QACf,0BAA0B;QAC1B,kBAAkB;QAClB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,qBAAqB,EAAE;UACvB;YACE,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,oBAAoB,EAAE;UACxB;YACE,cAAc;YACd,WAAW;YACX,UAAU;YACV,iBAAiB;YACjB,iCAAiC,EAAE;YACnC;cACE,sBAAsB;cACtB,mBAAmB;cACnB,oBAAoB;cACpB,qBAAqB;cACrB,mBAAmB;cACnB,gBAAgB;cAChB,kBAAkB;cAClB,iBAAiB;cACjB,eAAe;cACf,gBAAgB;cAChB,qCAAqC,EAAE;cACvC;gBACE,eAAe;gBACf,iCAAiC,EAAE;cACrC;gBACE,eAAe;gBACf,iCAAiC,EAAE;cACrC;gBACE,gBAAgB,EAAE;QAC1B;UACE,eAAe;UACf,YAAY;UACZ,WAAW;UACX,kBAAkB;UAClB,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,YAAY;YACZ,mBAAmB;YACnB,+BAA+B;YAC/B,iCAAiC;YACjC,4BAA4B;YAC5B,wBAAwB,EAAE;YAC1B;cACE,+BAA+B,EAAE;YACnC;cACE,cAAc;cACd,mBAAmB;cACnB,YAAY;cACZ,aAAa;cACb,oBAAoB;cACpB,kBAAkB;cAClB,mBAAmB;cACnB,wBAAwB;cACxB,oBAAoB;cACpB,mBAAmB;cACnB,0BAA0B;cAC1B,0BAA0B;cAC1B,gBAAgB,EAAE;cAClB;gBACE,sBAAsB;gBACtB,gBAAgB;gBAChB,eAAe;gBACf,kBAAkB;gBAClB,0BAA0B,EAAE;cAC9B;gBACE,0BAA0B,EAAE;gBAC5B;kBACE,eAAe,EAAE;YACvB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,wBAAwB;cACxB,oBAAoB;cACpB,mBAAmB;cACnB,mBAAmB,EAAE;cACrB;gBACE,gBAAgB;gBAChB,aAAa,EAAE;YACnB;cACE,cAAc;cACd,0BAA0B;cAC1B,gBAAgB;cAChB,4BAA4B;cAC5B,wBAAwB,EAAE;cAC1B;gBACE,eAAe;gBACf,YAAY;gBACZ,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;cACnB;gBACE,eAAe;gBACf,YAAY;gBACZ,oBAAoB;gBACpB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;gBACjB;kBACE,sBAAsB;kBACtB,eAAe;kBACf,kBAAkB;kBAClB,mBAAmB;kBACnB,kBAAkB;kBAClB,oBAAoB;kBACpB,gBAAgB,EAAE;cACtB;gBACE,eAAe;gBACf,qBAAqB;gBACrB,sBAAsB;gBACtB,6BAA6B;gBAC7B,iBAAiB;gBACjB,wBAAwB;gBACxB,YAAY;gBACZ,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,aAAa,EAAE;MACzB;QACE,eAAe;QACf,0BAA0B;QAC1B,kBAAkB;QAClB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,qBAAqB,EAAE;UACvB;YACE,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,oBAAoB,EAAE;UACxB;YACE,eAAe;YACf,iBAAiB,EAAE;QACvB;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;UACnB,oBAAoB;UACpB,kBAAkB;UAClB,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,oBAAoB;YACpB,wBAAwB;YACxB,YAAY;YACZ,oBAAoB,EAAE;YACtB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,mBAAmB;cACnB,wBAAwB;cACxB,oBAAoB,EAAE;cACtB;gBACE,gBAAgB;gBAChB,aAAa,EAAE;YACnB;cACE,cAAc;cACd,0BAA0B;cAC1B,wBAAwB;cACxB,oBAAoB;cACpB,gBAAgB,EAAE;cAClB;gBACE,eAAe;gBACf,YAAY;gBACZ,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,mBAAmB,EAAE;cACvB;gBACE,eAAe;gBACf,YAAY;gBACZ,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,iBAAiB,EAAE;YACvB;cACE,cAAc;cACd,YAAY;cACZ,aAAa;cACb,kBAAkB;cAClB,wBAAwB;cACxB,oBAAoB,EAAE;cACtB;gBACE,0BAA0B;gBAC1B,mBAAmB;gBACnB,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,eAAe;gBACf,gBAAgB;gBAChB,kBAAkB,EAAE;IAChC;MACE,eAAe;MACf,0BAA0B;MAC1B,iBAAiB;MACjB,mBAAmB;MACnB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,mBAAmB;UACnB,oBAAoB,EAAE;MAC1B;QACE,eAAe;QACf,YAAY;QACZ,kBAAkB,EAAE;QACpB;UACE,mBAAmB;UACnB,oBAAoB;UACpB,qBAAqB;UACrB,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,gBAAgB,EAAE;UAClB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;QACzB;UACE,mBAAmB;UACnB,oBAAoB;UACpB,qBAAqB;UACrB,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,gBAAgB,EAAE;UAClB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;UACnB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,mBAAmB,EAAE;UACvB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;QACrB;UACE,mBAAmB;UACnB,iCAAiC;UACjC,qBAAqB,EAAE;UACvB;YACE,gCAAgC;YAChC,sBAAsB;YACtB,0BAA0B;YAC1B,mBAAmB;YACnB,SAAS;YACT,OAAO;YACP,YAAY;YACZ,WAAW,EAAE;UACf;YACE,mBAAmB,EAAE;QACzB;UACE,iBAAiB,EAAE;UACnB;YACE,gCAAgC;YAChC,kBAAkB;YAClB,qBAAqB;YACrB,mBAAmB,EAAE;YACrB;cACE,iBAAiB,EAAE;YACrB;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB;cAChB,kBAAkB,EAAE;cACpB;gBACE,eAAe,EAAE;cACnB;gBACE,eAAe,EAAE;IAC7B;MACE,eAAe;MACf,0BAA0B;MAC1B,iBAAiB;MACjB,mBAAmB;MACnB,oBAAoB;MACpB,gDAAgD;MAChD,wDAAwD;MACxD,qDAAqD,EAAE;MACvD;QACE,eAAe;QACf,YAAY;QACZ,qBAAqB,EAAE;QACvB;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,mBAAmB;UACnB,oBAAoB,EAAE;MAC1B;QACE,cAAc;QACd,qBAAqB;QACrB,YAAY;QACZ,iBAAiB;QACjB,iBAAiB,EAAE;QACnB;UACE,cAAc;UACd,aAAa;UACb,iBAAiB;UACjB,mBAAmB;UACnB,mBAAmB;UACnB,gBAAgB;UAChB,aAAa;UACb,oBAAoB,EAAE;UACtB;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,0BAA0B,EAAE;UAC9B;YACE,eAAe;YACf,YAAY;YACZ,mBAAmB;YACnB,YAAY;YACZ,mBAAmB;YACnB,gBAAgB;YAChB,kBAAkB;YAClB,kBAAkB;YAClB,qBAAqB,EAAE;UACzB;YACE,eAAe;YACf,YAAY;YACZ,kBAAkB;YAClB,iBAAiB;YACjB,iBAAiB,EAAE;YACnB;cACE,cAAc;cACd,YAAY;cACZ,0BAA0B;cAC1B,mBAAmB;cACnB,oBAAoB;cACpB,cAAc,EAAE;cAChB;gBACE,cAAc;gBACd,YAAY;gBACZ,aAAa;gBACb,oBAAoB;gBACpB,mBAAmB;gBACnB,wBAAwB;gBACxB,oBAAoB,EAAE;gBACtB;kBACE,gBAAgB;kBAChB,aAAa,EAAE;cACnB;gBACE,cAAc;gBACd,gBAAgB;gBAChB,yBAAyB,EAAE;gBAC3B;kBACE,eAAe;kBACf,YAAY;kBACZ,eAAe;kBACf,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,mBAAmB,EAAE;gBACvB;kBACE,eAAe;kBACf,YAAY;kBACZ,eAAe;kBACf,iBAAiB;kBACjB,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB,EAAE;;AAErC;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,mBAAmB;MACnB,oBAAoB,EAAE;MACtB;QACE,cAAc,EAAE;QAChB;UACE,sBAAsB,EAAE;QAC1B;UACE,kBAAkB;UAClB,sBAAsB,EAAE;UACxB;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe;YACf,UAAU,EAAE;UACd;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,gBAAgB;YAChB,kBAAkB;YAClB,iBAAiB;YACjB,eAAe;YACf,mBAAmB,EAAE;MAC3B;QACE,aAAa,EAAE;QACf;UACE,sBAAsB;UACtB,YAAY;UACZ,aAAa;UACb,kBAAkB;UAClB,oBAAoB;UACpB,mBAAmB;UACnB,YAAY;UACZ,gBAAgB;UAChB,0BAA0B,EAAE;IAClC;MACE,iBAAiB,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,mBAAmB;QACnB,oBAAoB,EAAE;MACxB;QACE,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,yBAAyB;UACzB,iBAAiB;UACjB,YAAY;UACZ,aAAa;UACb,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,mBAAmB;UACnB,uBAAuB,EAAE;UACzB;YACE,cAAc,EAAE;QACpB;UACE,iBAAiB;UACjB,mBAAmB;UACnB,SAAS;UACT,WAAW;UACX,iBAAiB;UACjB,gBAAgB;UAChB,eAAe;UACf,2BAA2B,EAAE;MACjC;QACE,YAAY;QACZ,mBAAmB,EAAE;QACrB;UACE,YAAY;UACZ,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,mBAAmB;UACnB,mBAAmB;UACnB,0BAA0B,EAAE;UAC5B;YACE,cAAc,EAAE;QACpB;UACE,UAAU;UACV,WAAW;UACX,gBAAgB;UAChB,eAAe;UACf,iBAAiB;UACjB,mBAAmB;UACnB,uBAAuB,EAAE;MAC7B;QACE,kBAAkB;QAClB,mBAAmB;QACnB,oBAAoB,EAAE;QACtB;UACE,YAAY;UACZ,cAAc;UACd,iCAAiC,EAAE;UACnC;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;QAC3B;UACE,YAAY;UACZ,cAAc;UACd,gBAAgB,EAAE;UAClB;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB,EAAE;cAClB;gBACE,eAAe,EAAE;cACnB;gBACE,eAAe,EAAE;IAC7B;MACE,kBAAkB;MAClB,mBAAmB;MACnB,oBAAoB,EAAE;MACtB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,iBAAiB;UACjB,cAAc;UACd,qBAAqB;UACrB,YAAY;UACZ,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,cAAc;YACd,aAAa;YACb,iBAAiB;YACjB,mBAAmB;YACnB,mBAAmB;YACnB,gBAAgB;YAChB,cAAc;YACd,oBAAoB;YACpB,oBAAoB;YACpB,oFAAoF,EAAE;YACtF;cACE,cAAc;cACd,oBAAoB;cACpB,oBAAoB;cACpB,uBAAuB;cACvB,YAAY,EAAE;cACd;gBACE,kBAAkB,EAAE;gBACpB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,cAAc,EAAE;gBAClB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,eAAe;kBACf,kBAAkB,EAAE;YAC1B;cACE,oBAAoB;cACpB,YAAY;cACZ,eAAe,EAAE;cACjB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,cAAc,EAAE;cAClB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,iBAAiB,EAAE;YACvB;cACE,eAAe;cACf,YAAY,EAAE;cACd;gBACE,aAAa;gBACb,cAAc,EAAE;cAClB;gBACE,mBAAmB;gBACnB,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe,EAAE;;AAEjC;EACE,eAAe;EACf,YAAY,EAAE;EACd;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB,EAAE;IACvB;MACE,cAAc;MACd,oBAAoB;MACpB,4BAA4B,EAAE;MAC9B;QACE,sBAAsB,EAAE;MAC1B;QACE,kBAAkB;QAClB,sBAAsB,EAAE;QACxB;UACE,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB;UACjB,eAAe;UACf,mBAAmB,EAAE;QACvB;UACE,gBAAgB;UAChB,kBAAkB;UAClB,iBAAiB;UACjB,eAAe,EAAE;IACvB;MACE,aAAa,EAAE;MACf;QACE,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,kBAAkB;QAClB,oBAAoB;QACpB,mBAAmB;QACnB,YAAY;QACZ,gBAAgB;QAChB,0BAA0B,EAAE;IAChC;MACE,mBAAmB;MACnB,iBAAiB;MACjB,6BAA6B;MAC7B,0BAA0B,EAAE;MAC5B;QACE,oBAAoB;QACpB,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,mBAAmB,EAAE;MACvB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,YAAY,EAAE;QACd;UACE,sBAAsB;UACtB,yBAAyB;UACzB,iBAAiB;UACjB,YAAY;UACZ,aAAa;UACb,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,mBAAmB;UACnB,uBAAuB;UACvB,sFAAsF,EAAE;UACxF;YACE,cAAc,EAAE;QACpB;UACE,iBAAiB;UACjB,mBAAmB;UACnB,SAAS;UACT,WAAW;UACX,iBAAiB;UACjB,gBAAgB;UAChB,eAAe;UACf,2BAA2B,EAAE;MACjC;QACE,YAAY;QACZ,mBAAmB,EAAE;QACrB;UACE,YAAY;UACZ,aAAa;UACb,gBAAgB;UAChB,iBAAiB;UACjB,eAAe;UACf,kBAAkB;UAClB,mBAAmB;UACnB,mBAAmB;UACnB,0BAA0B;UAC1B,sFAAsF,EAAE;UACxF;YACE,cAAc,EAAE;QACpB;UACE,UAAU;UACV,WAAW;UACX,gBAAgB;UAChB,eAAe;UACf,iBAAiB;UACjB,mBAAmB;UACnB,uBAAuB,EAAE;MAC7B;QACE,iBAAiB,EAAE;QACnB;UACE,YAAY;UACZ,cAAc;UACd,iCAAiC,EAAE;UACnC;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;QAC3B;UACE,YAAY;UACZ,cAAc;UACd,gBAAgB,EAAE;UAClB;YACE,YAAY;YACZ,cAAc;YACd,gBAAgB;YAChB,iBAAiB;YACjB,aAAa;YACb,kBAAkB;YAClB,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,gCAAgC,EAAE;YAClC;cACE,mBAAmB,EAAE;YACvB;cACE,gBAAgB;cAChB,eAAe,EAAE;UACrB;YACE,iBAAiB;YACjB,eAAe,EAAE;UACnB;YACE,eAAe,EAAE;IACzB;MACE,iBAAiB,EAAE;MACnB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe,EAAE;MACnB;QACE,eAAe;QACf,YAAY,EAAE;QACd;UACE,iBAAiB;UACjB,cAAc;UACd,qBAAqB;UACrB,YAAY;UACZ,iBAAiB;UACjB,iBAAiB,EAAE;UACnB;YACE,aAAa;YACb,gBAAgB;YAChB,mBAAmB;YACnB,mBAAmB;YACnB,4BAA4B;YAC5B,oBAAoB;YACpB,gBAAgB;YAChB,oBAAoB;YACpB,oFAAoF,EAAE;YACtF;cACE,cAAc;cACd,oBAAoB;cACpB,oBAAoB;cACpB,uBAAuB,EAAE;cACzB;gBACE,kBAAkB,EAAE;gBACpB;kBACE,gBAAgB;kBAChB,kBAAkB;kBAClB,iBAAiB;kBACjB,eAAe,EAAE;YACvB;cACE,oBAAoB,EAAE;cACtB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,cAAc,EAAE;cAClB;gBACE,gBAAgB;gBAChB,kBAAkB;gBAClB,iBAAiB;gBACjB,eAAe;gBACf,iBAAiB,EAAE;YACvB;cACE,aAAa;cACb,cAAc,EAAE;YAClB;cACE,mBAAmB;cACnB,gBAAgB;cAChB,kBAAkB;cAClB,iBAAiB;cACjB,eAAe,EAAE;YACnB;cACE,iBAAiB,EAAE;IAC7B;MACE,kBAAkB,EAAE;MACpB;QACE,0BAA0B;QAC1B,mBAAmB;QACnB,oBAAoB;QACpB,gDAAgD;QAChD,wDAAwD;QACxD,qDAAqD,EAAE;QACvD;UACE,gBAAgB;UAChB,iBAAiB;UACjB,kBAAkB;UAClB,eAAe;UACf,oBAAoB;UACpB,oBAAoB,EAAE;QACxB;UACE,kBAAkB,EAAE;UACpB;YACE,0BAA0B;YAC1B,oBAAoB;YACpB,aAAa;YACb,mBAAmB;YACnB,eAAe,EAAE;YACjB;cACE,cAAc,EAAE;YAClB;cACE,cAAc,EAAE;QACtB;UACE,aAAa;UACb,eAAe;UACf,aAAa;UACb,YAAY;UACZ,aAAa;UACb,mBAAmB;UACnB,gBAAgB;UAChB,mBAAmB;UACnB,kBAAkB;UAClB,wDAAwD,EAAE;UAC1D;YACE,kBAAkB,EAAE;UACtB;YACE,sCAAsC,EAAE;QAC5C;UACE,aAAa,EAAE;UACf;YACE,eAAe;YACf,oBAAoB;YACpB,mBAAmB,EAAE;YACrB;cACE,eAAe;cACf,gBAAgB;cAChB,kBAAkB;cAClB,kBAAkB,EAAE;cACpB;gBACE,YAAY;gBACZ,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,SAAS;gBACT,QAAQ;gBACR,mBAAmB;gBACnB,0BAA0B,EAAE;UAClC;YACE,0BAA0B,EAAE;QAChC;UACE,iBAAiB;UACjB,mBAAmB,EAAE;UACrB;YACE,gBAAgB,EAAE;;AAE9B,mDAAmD","file":"workflowengine.dark.css","sourcesContent":[".owrkflow-dashboard-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-dashboard-container .dashboard-container {\n    display: block;\n    width: 100%;\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-dashboard-container .dashboard-container .fliter-container {\n      display: block;\n      width: 100%;\n      padding-bottom: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .heading {\n        display: block;\n        font-size: 14px;\n        line-height: 32px;\n        font-weight: 600;\n        color: #3b4859; }\n      .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search {\n        float: right;\n        width: auto; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-box select:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box {\n          display: inline-block;\n          width: 250px;\n          height: 32px;\n          border-radius: 20px;\n          padding: 0;\n          border: 1px solid #a9b9c6;\n          margin-right: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text {\n            background: none;\n            border: none;\n            width: 100%;\n            height: 100%;\n            font-size: 12px;\n            line-height: 26px;\n            color: #d1dae2;\n            padding: 5px 10px; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .fliter-container .fliter-search .fliter-search-box .input-group-text:focus-visible {\n              outline: none; }\n    .owrkflow-dashboard-container .dashboard-container .dashbord-top-section {\n      padding: 0 0 30px 0; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading h3 {\n        margin: 0;\n        font-weight: 600;\n        color: #202020;\n        letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .heading span {\n        font-size: 13px;\n        line-height: 24px;\n        color: #a5a5a5; }\n      .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender {\n        width: 100%;\n        border: none;\n        vertical-align: middle;\n        border-radius: 10px;\n        background-color: #ffffff;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content {\n          line-height: 20px;\n          cursor: pointer;\n          padding: 10px 20px;\n          position: relative; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-icon {\n            color: #6418c3;\n            margin-right: 15px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-arrow {\n            color: #aaaaaa;\n            float: right;\n            margin-top: 5px;\n            vertical-align: middle; }\n          .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text {\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text p {\n              font-weight: 500;\n              font-size: 14px;\n              line-height: 14px;\n              color: #000000;\n              margin-bottom: 0; }\n            .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span {\n              font-weight: 500;\n              font-size: 12px;\n              line-height: 14px;\n              color: #393939;\n              width: 65px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input {\n                border: none;\n                width: auto; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon {\n                  padding-right: 7px;\n                  width: auto; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon svg {\n                    display: none; }\n                  .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__icon::after {\n                    content: \"To\";\n                    font-weight: 500;\n                    font-size: 12px;\n                    line-height: 14px;\n                    color: #393939;\n                    display: inline-block;\n                    vertical-align: top; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__start .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .range-picker-input .range-picker-input__end .picker-input__text {\n                  padding: 0 !important;\n                  font-weight: 500;\n                  font-size: 12px;\n                  line-height: 14px;\n                  color: #393939;\n                  background-color: transparent; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__trigger {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                z-index: 1;\n                padding: 30px 0 0 60px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container {\n                right: 0 !important;\n                left: auto !important;\n                z-index: 1; }\n                .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .picker__container .calendar__day {\n                  height: 32px;\n                  line-height: 32px; }\n              .owrkflow-dashboard-container .dashboard-container .dashbord-top-section .calender .clender-content .calender-text span .rc-backdrop {\n                z-index: 0; }\n    .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box {\n      padding: 20px 15px;\n      height: 130px;\n      border-radius: 15px;\n      border: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #ffffff;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 45px;\n        position: relative; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img img {\n          width: 75px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img span {\n          position: absolute;\n          top: 13px;\n          right: -8px;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n          color: #fff;\n          font-weight: 700;\n          line-height: 20px;\n          background: #5fcffd;\n          border-radius: 50%; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .mail-icon {\n          font-size: 50px;\n          color: #7924ca; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .in-progress {\n          width: 18px;\n          height: 45px;\n          margin-right: 5px;\n          border-radius: 15px;\n          display: inline-block;\n          background-color: #dfecf2; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-img .complate-progress {\n          width: 18px;\n          height: 75px;\n          border-radius: 15px;\n          display: inline-block;\n          background-image: linear-gradient(180deg, #60dfff, #7ff0ffb0); }\n      .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content {\n        width: auto;\n        display: inline-block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content span {\n          font-size: 14px;\n          font-weight: 500;\n          color: #a5a5a5; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content h3 {\n          margin: 0;\n          margin-bottom: 5px;\n          font-size: 30px;\n          line-height: 36px;\n          font-weight: 700; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed {\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          display: block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .completed h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #60dfff;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n        .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss {\n          position: relative;\n          padding-left: 20px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss span {\n            font-size: 12px;\n            font-weight: 500;\n            color: #a5a5a5; }\n          .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5 {\n            margin: 0;\n            line-height: 16px;\n            font-weight: 700; }\n            .owrkflow-dashboard-container .dashboard-container .progress-rfp-boxs .progress-box .progress-content .in-progrss h5::before {\n              content: \"\";\n              width: 10px;\n              height: 10px;\n              background: #dfecf2;\n              border-radius: 50%;\n              position: absolute;\n              top: 5px;\n              left: 0px; }\n    .owrkflow-dashboard-container .dashboard-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        max-height: 400px;\n        min-height: 400px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 3px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #38e25d; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #5ecfff; }\n        .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n    .owrkflow-dashboard-container .dashboard-container .project-resources-section {\n      display: block;\n      padding-top: 30px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 40px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs {\n            display: flex;\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            border-bottom: 2px solid #f8f8f8; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li {\n              display: inline-block;\n              padding-left: 15px;\n              padding-right: 15px;\n              padding-bottom: 10px;\n              margin-right: 10px;\n              font-size: 14px;\n              line-height: 22px;\n              font-weight: 500;\n              color: #a5a5a5;\n              cursor: pointer;\n              border-bottom: 2px solid transparent; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:hover {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li.active {\n                color: #6418c3;\n                border-bottom: 2px solid #6418c3; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .heading .tabs li:last-child {\n                margin-right: 0; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects {\n          display: block;\n          width: 100%;\n          padding: 0;\n          max-height: 300px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project {\n            display: flex;\n            width: 100%;\n            padding: 15px 20px;\n            border-left: 5px solid #f6eeff;\n            border-bottom: 1px solid #f6eeff;\n            justify-content: flex-start;\n            align-items: flex-start; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project.active {\n              border-left: 5px solid #6418c3; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box {\n              display: flex;\n              margin-right: 15px;\n              width: 44px;\n              height: 44px;\n              border-radius: 15px;\n              padding-left: 3px;\n              padding-right: 3px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              border: 1px solid #f8f8f8;\n              background-color: #ffffff;\n              cursor: pointer; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box span {\n                display: inline-block;\n                font-size: 16px;\n                color: #c2c2c2;\n                line-height: 22px;\n                border: 1px solid #f8f8f8; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active {\n                background-color: #ffebcc; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .star-box.active span {\n                  color: #ffab2d; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon {\n              display: flex;\n              width: 30px;\n              height: 44px;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n              margin-right: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .icon img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content {\n              display: flex;\n              width: calc(100% - 104px);\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              align-items: flex-start; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content h4 {\n                display: block;\n                width: 100%;\n                margin-bottom: 5px;\n                font-size: 16px;\n                line-height: 22px;\n                font-weight: 600;\n                color: #202020; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span {\n                display: block;\n                width: 100%;\n                margin-bottom: 10px;\n                font-size: 15px;\n                line-height: 18px;\n                font-weight: 500;\n                color: #a5a5a5; }\n                .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content span i {\n                  display: inline-block;\n                  font-size: 6px;\n                  margin-left: 10px;\n                  margin-right: 10px;\n                  line-height: 10px;\n                  vertical-align: top;\n                  margin-top: 6px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .project-list .projects .project .content p {\n                display: block;\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                -webkit-box-orient: vertical;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                width: 100%;\n                margin-bottom: 0px;\n                font-size: 13px;\n                line-height: 18px;\n                font-weight: 300;\n                color: #202020;\n                height: 40px; }\n      .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list {\n        display: block;\n        background-color: #ffffff;\n        padding: 10px 5px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-top: 20px;\n          padding-bottom: 20px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading h5 {\n            font-size: 22px;\n            font-weight: 600;\n            line-height: 30px;\n            color: #202020;\n            margin-bottom: 0px;\n            letter-spacing: 1px; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .heading p {\n            color: #a5a5a5;\n            font-weight: 400; }\n        .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources {\n          display: block;\n          width: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          max-height: 289px;\n          overflow: hidden;\n          overflow-y: auto; }\n          .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 100%;\n            margin-bottom: 15px; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image {\n              display: flex;\n              width: 48px;\n              height: 48px;\n              margin-right: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .image img {\n                max-width: 100%;\n                height: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content {\n              display: flex;\n              width: calc(100% - 102px);\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content h3 {\n                display: block;\n                width: 100%;\n                font-size: 16px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020;\n                margin-bottom: 5px; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .content p {\n                display: block;\n                width: 100%;\n                color: #a5a5a5;\n                font-size: 13px;\n                line-height: 16px;\n                margin-bottom: 0;\n                font-weight: 300; }\n            .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon {\n              display: flex;\n              width: 24px;\n              height: 24px;\n              margin-left: 15px;\n              justify-content: center;\n              align-items: center; }\n              .owrkflow-dashboard-container .dashboard-container .project-resources-section .resources-list .resources .resource .plus-icon span {\n                background-color: #6418c3;\n                border-radius: 50%;\n                width: 24px;\n                height: 24px;\n                text-align: center;\n                color: #ffffff;\n                font-size: 12px;\n                line-height: 24px; }\n    .owrkflow-dashboard-container .dashboard-container .project-overview-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading {\n        display: block;\n        width: 100%; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-overview-section .table {\n        display: block;\n        width: 100%;\n        padding-top: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 18px;\n          font-weight: 400;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table thead th:nth-child(5) {\n            text-align: center; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td {\n          padding-left: 10px;\n          padding-right: 10px;\n          padding-bottom: 15px;\n          font-size: 14px;\n          font-weight: 300;\n          color: #414d55;\n          width: 14.2857%; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td span {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td a {\n            color: #2662f0; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(2) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(4) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td:nth-child(5) {\n            text-align: center; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .progress {\n            color: #ffa000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .pending {\n            color: #860000; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table table tbody td .completed {\n            color: #00861b; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th {\n          position: relative;\n          border-bottom: 1px solid #e6e6e6;\n          padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th::after {\n            border-right: 1px solid #e6e6e6;\n            display: inline-block;\n            height: calc(100% - 15px);\n            position: absolute;\n            right: 0;\n            top: 0;\n            content: \"\";\n            width: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table thead th:last-child::after {\n            border-right: none; }\n        .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody {\n          padding-top: 0px; }\n          .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td {\n            border-right: 1px solid #e6e6e6;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: center; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:first-child {\n              text-align: left; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td:last-child {\n              border-right: none; }\n            .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa {\n              font-size: 20px;\n              line-height: 24px; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.green {\n                color: #00861b; }\n              .owrkflow-dashboard-container .dashboard-container .project-overview-section .table.progress table tbody td .fa.orange {\n                color: #eea515; }\n    .owrkflow-dashboard-container .dashboard-container .project-allocation-section {\n      display: block;\n      background-color: #ffffff;\n      margin-top: 30px;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n      -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading {\n        display: block;\n        width: 100%;\n        padding-bottom: 30px; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 0px;\n          letter-spacing: 1px; }\n      .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation {\n        display: flex;\n        display: -webkit-box;\n        width: 100%;\n        overflow: hidden;\n        overflow-x: auto; }\n        .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box {\n          display: flex;\n          width: 250px;\n          max-width: 250px;\n          margin-right: 15px;\n          border-radius: 8px;\n          flex-wrap: wrap;\n          padding: 5px;\n          background: #87b5ff; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(2) {\n            background-color: #fbb987; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(3) {\n            background-color: #8ce4be; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(4) {\n            background-color: #ff9d9d; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box:nth-child(5) {\n            background-color: #b28ef9; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box h3 {\n            display: block;\n            width: 100%;\n            text-align: center;\n            color: #fff;\n            font-weight: 400px;\n            font-size: 18px;\n            line-height: 22px;\n            padding-top: 15px;\n            padding-bottom: 15px; }\n          .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box {\n            display: block;\n            width: 100%;\n            max-height: 300px;\n            overflow: hidden;\n            overflow-y: auto; }\n            .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource {\n              display: flex;\n              width: 100%;\n              background-color: #f3f8ff;\n              border-radius: 8px;\n              margin-bottom: 10px;\n              padding: 15px; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image {\n                display: flex;\n                width: 48px;\n                height: 48px;\n                border-radius: 10px;\n                margin-right: 12px;\n                justify-content: center;\n                align-items: center; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .image img {\n                  max-width: 100%;\n                  height: auto; }\n              .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content {\n                display: flex;\n                flex-wrap: wrap;\n                width: calc(100% - 60px); }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content h4 {\n                  display: block;\n                  width: 100%;\n                  color: #202020;\n                  font-weight: 500;\n                  font-size: 16px;\n                  line-height: 22px;\n                  margin-bottom: 2px; }\n                .owrkflow-dashboard-container .dashboard-container .project-allocation-section .resource-allocation .allocation-box .resource-box .resource .content p {\n                  display: block;\n                  width: 100%;\n                  color: #a5a5a5;\n                  font-weight: 300;\n                  font-size: 13px;\n                  line-height: 18px;\n                  margin-bottom: 0; }\n\n.owrkflow-project-wise-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-project-wise-container .project-wise-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 30px;\n    padding-bottom: 15px; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading {\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left {\n        display: flex; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-icon {\n          display: inline-block; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content {\n          margin-left: 20px;\n          display: inline-block; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content h3 {\n            font-size: 18px;\n            line-height: 22px;\n            font-weight: 500;\n            color: #202020;\n            margin: 0; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content span {\n            font-size: 14px;\n            line-height: 18px;\n            font-weight: 500;\n            color: #202020; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-left .heading-content p {\n            font-size: 12px;\n            line-height: 16px;\n            font-weight: 400;\n            color: #202020;\n            margin: 10px 0 0 0; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right {\n        float: right; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-page-heading .heading-content-right span {\n          display: inline-block;\n          width: 25px;\n          height: 25px;\n          line-height: 25px;\n          border-radius: 25px;\n          text-align: center;\n          color: #fff;\n          font-size: 14px;\n          background-color: #8145cd; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-status {\n      margin-top: 50px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-status-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .status-fliter {\n        padding-left: 16px;\n        padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table {\n        padding-top: 30px;\n        padding-left: 16px;\n        padding-right: 16px; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.green {\n                color: #57d25f; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i.orange {\n                color: #eea515; }\n    .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources {\n      padding-top: 30px;\n      padding-left: 16px;\n      padding-right: 16px; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            display: flex;\n            width: 280px;\n            max-width: 280px;\n            margin-right: 30px;\n            border-radius: 8px;\n            flex-wrap: wrap;\n            padding: 20px;\n            margin-bottom: 15px;\n            background: #ffffff;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 18px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: 202020; }\n                .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text p {\n                  font-size: 14px;\n                  line-height: 20px;\n                  font-weight: 400;\n                  color: #a5a5a5;\n                  margin: 8px 0 0 0; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px;\n              width: 100%;\n              display: block; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar {\n              display: block;\n              width: 100%; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n                width: 130px;\n                height: 130px; }\n              .owrkflow-project-wise-container .project-wise-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n                margin: 15px 0 0 0;\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: #202020; }\n\n.owrkflow-resource-wise-View-container {\n  display: block;\n  width: 100%; }\n  .owrkflow-resource-wise-View-container .resource-wise-View-page-container {\n    background-color: #f9fafc;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-icon {\n        display: inline-block; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content {\n        margin-left: 20px;\n        display: inline-block; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content h3 {\n          font-size: 18px;\n          line-height: 22px;\n          font-weight: 500;\n          color: #202020;\n          margin: 0 0 10px 0; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-left .heading-content span {\n          font-size: 14px;\n          line-height: 18px;\n          font-weight: 400;\n          color: #a5a5a5; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right {\n      float: right; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .resource-wise-View-page-heading .heading-content-right span {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 25px;\n        text-align: center;\n        color: #fff;\n        font-size: 14px;\n        background-color: #8145cd; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status {\n      border-radius: 8px;\n      margin-top: 50px;\n      padding: 40px 20px 20px 20px;\n      background-color: #fefefe; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .heading {\n        margin-bottom: 30px;\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content p {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 400;\n        color: #202020;\n        margin-bottom: 8px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .task-heading-content span {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search {\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select {\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          appearance: none;\n          width: 100%;\n          height: 45px;\n          border: none;\n          cursor: pointer;\n          color: #aaaaaa;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 45px;\n          border-radius: 8px;\n          padding: 0 20px 0 40px;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search select:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .filler-search::after {\n          content: \"\\F107\";\n          position: absolute;\n          top: 7px;\n          left: 30px;\n          font-weight: 900;\n          font-size: 20px;\n          color: #a274db;\n          font-family: 'FontAwesome'; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar {\n        width: 100%;\n        position: relative; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form {\n          width: 100%;\n          height: 45px;\n          font-size: 16px;\n          font-weight: 500;\n          color: #aaaaaa;\n          line-height: 45px;\n          padding-left: 45px;\n          border-radius: 8px;\n          background-color: #ffffff;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar .control-form:focus-visible {\n            outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .search-bar i {\n          top: 14px;\n          left: 20px;\n          font-size: 18px;\n          color: #a274db;\n          font-weight: 600;\n          position: absolute;\n          vertical-align: middle; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table {\n        margin-top: 50px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead {\n          width: 100%;\n          display: flex;\n          border-bottom: 1px solid #e6e6e6; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            color: #414d55;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .thead .th:last-child {\n              border-right: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr {\n          width: 100%;\n          display: flex;\n          margin-top: 8px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td {\n            width: 100%;\n            padding: 10px;\n            font-size: 14px;\n            font-weight: 400;\n            height: 40px;\n            line-height: 20px;\n            color: #2662f0;\n            margin-bottom: 8px;\n            text-align: center;\n            border-right: 1px solid #e6e6e6; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td:last-child {\n              border-right: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .td i {\n              font-size: 18px;\n              color: #57d25f; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .tast-content {\n            font-weight: 500;\n            color: #2662f0; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-status .project-wise-table .table .tbody .tr .project-content {\n            color: #414d55; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources {\n      margin-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-heading {\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 500;\n        color: #202020; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section {\n        display: block;\n        width: 100%; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner {\n          margin-top: 30px;\n          display: flex;\n          display: -webkit-box;\n          width: 100%;\n          overflow: hidden;\n          overflow-x: auto; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box {\n            width: 300px;\n            max-width: 100%;\n            margin-right: 30px;\n            border-radius: 8px;\n            padding: 15px 15px 5px 15px;\n            margin-bottom: 15px;\n            cursor: pointer;\n            background: #fefefe;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content {\n              display: flex;\n              margin-bottom: 15px;\n              align-items: center;\n              justify-content: start; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text {\n                margin-left: 15px; }\n                .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .user-content .user-text span {\n                  font-size: 16px;\n                  line-height: 20px;\n                  font-weight: 500;\n                  color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading {\n              margin-bottom: 15px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading h4 {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 500;\n                color: 202020; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .resources-progress-heading span {\n                font-size: 14px;\n                line-height: 20px;\n                font-weight: 400;\n                color: #202020;\n                margin-top: 10px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .CircularProgressbar {\n              width: 130px;\n              height: 130px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar p {\n              margin: 15px 0 0 0;\n              font-size: 14px;\n              line-height: 20px;\n              font-weight: 500;\n              color: #202020; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .project-wise-resources .project-resources-section .project-resources-inner .project-resources-box .project-progressbar .card-arrow-image {\n              margin-top: 20px; }\n    .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section {\n      padding-top: 30px; }\n      .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph {\n        background-color: #ffffff;\n        padding: 30px 20px;\n        border-radius: 15px;\n        box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -webkit-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3);\n        -moz-box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.3); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading h5 {\n          font-size: 22px;\n          font-weight: 600;\n          line-height: 30px;\n          color: #202020;\n          margin-bottom: 30px;\n          letter-spacing: 1px; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown {\n          text-align: right; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content {\n            border: 1px solid #8f8f8f;\n            border-radius: 10px;\n            width: 110px;\n            margin-right: 10px;\n            padding: 0 5px; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus {\n              outline: none; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .opensens-dropdown .opensens-content:focus-visible {\n              outline: none; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon {\n          float: right;\n          color: #a5a5a5;\n          padding: 5px;\n          width: 34px;\n          height: 34px;\n          text-align: center;\n          cursor: pointer;\n          border-radius: 50%;\n          line-height: 28px;\n          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon i {\n            font-size: 1.2rem; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .requistions-heading .requistions-dropdown .meore-menu-icon:hover {\n            background-color: rgba(0, 0, 0, 0.04); }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid {\n          width: 150px; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content {\n            display: block;\n            margin-bottom: 10px;\n            position: relative; }\n            .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span {\n              display: block;\n              font-size: 12px;\n              line-height: 16px;\n              margin-left: 20px; }\n              .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .paid-content span::before {\n                content: \"\";\n                width: 10px;\n                height: 10px;\n                position: absolute;\n                top: 2px;\n                left: 0;\n                border-radius: 50%;\n                background-color: #8884d8; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .totalpaid .unpaid span::before {\n            background-color: #82ca9d; }\n        .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content {\n          margin-top: 30px;\n          text-align: center; }\n          .owrkflow-resource-wise-View-container .resource-wise-View-page-container .average-section .statistics-graph .chartbar-content .recharts-layer tspan {\n            font-size: 12px; }\n\n/*# sourceMappingURL=workflowengine.dark.css.map */"],"sourceRoot":""}]);

// exports


/***/ }),
/* 13 */
/*!*******************************!*\
  !*** ./utils/utils.plugin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginPropsContext": () => (/* binding */ PluginPropsContext),
/* harmony export */   "usePluginProps": () => (/* binding */ usePluginProps),
/* harmony export */   "usePluginMeta": () => (/* binding */ usePluginMeta)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // This is used to be able to retrieve the root plugin props anywhere inside the app.

var PluginPropsContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var usePluginProps = function () {
  var pluginProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginPropsContext);
  return pluginProps;
};
var usePluginMeta = function () {
  var pluginProps = usePluginProps();
  return pluginProps === null || pluginProps === void 0 ? void 0 : pluginProps.meta;
};

/***/ }),
/* 14 */
/*!*****************************!*\
  !*** ./img/header-icon.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/header-icon.png");

/***/ }),
/* 15 */
/*!********************************************************************!*\
  !*** ../node_modules/react-circular-progressbar/dist/index.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularProgressbar": () => (/* binding */ CircularProgressbar),
/* harmony export */   "CircularProgressbarWithChildren": () => (/* binding */ CircularProgressbarWithChildren),
/* harmony export */   "buildStyles": () => (/* binding */ buildStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var VIEWBOX_WIDTH = 100;
var VIEWBOX_HEIGHT = 100;
var VIEWBOX_HEIGHT_HALF = 50;
var VIEWBOX_CENTER_X = 50;
var VIEWBOX_CENTER_Y = 50;

function Path(_a) {
    var className = _a.className, counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius, strokeWidth = _a.strokeWidth, style = _a.style;
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", { className: className, style: Object.assign({}, style, getDashStyle({ pathRadius: pathRadius, dashRatio: dashRatio, counterClockwise: counterClockwise })), d: getPathDescription({
            pathRadius: pathRadius,
            counterClockwise: counterClockwise,
        }), strokeWidth: strokeWidth, fillOpacity: 0 }));
}
function getPathDescription(_a) {
    var pathRadius = _a.pathRadius, counterClockwise = _a.counterClockwise;
    var radius = pathRadius;
    var rotation = counterClockwise ? 1 : 0;
    return "\n      M " + VIEWBOX_CENTER_X + "," + VIEWBOX_CENTER_Y + "\n      m 0,-" + radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0," + 2 * radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0,-" + 2 * radius + "\n    ";
}
function getDashStyle(_a) {
    var counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius;
    var diameter = Math.PI * 2 * pathRadius;
    var gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        var _a = this.props, value = _a.value, minValue = _a.minValue, maxValue = _a.maxValue;
        var boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        var _a = this.props, circleRatio = _a.circleRatio, className = _a.className, classes = _a.classes, counterClockwise = _a.counterClockwise, styles = _a.styles, strokeWidth = _a.strokeWidth, text = _a.text;
        var pathRadius = this.getPathRadius();
        var pathRatio = this.getPathRatio();
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", { className: classes.root + " " + className, style: styles.root, viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT, "data-test-id": "CircularProgressbar" },
            this.props.background ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { className: classes.background, style: styles.background, cx: VIEWBOX_CENTER_X, cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF })) : null,
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, { className: classes.trail, counterClockwise: counterClockwise, dashRatio: circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.trail }),
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, { className: classes.path, counterClockwise: counterClockwise, dashRatio: pathRatio * circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.path }),
            text ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", { className: classes.text, style: styles.text, x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }, text)) : null));
    };
    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            path: 'CircularProgressbar-path',
            text: 'CircularProgressbar-text',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

function CircularProgressbarWithChildren(props) {
    var children = props.children, circularProgressbarProps = __rest(props, ["children"]);
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { "data-test-id": "CircularProgressbarWithChildren" },
        (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { style: { position: 'relative', width: '100%', height: '100%' } },
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CircularProgressbar, __assign({}, circularProgressbarProps)),
            props.children ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { "data-test-id": "CircularProgressbarWithChildren__children", style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                } }, props.children)) : null)));
}

function buildStyles(_a) {
    var rotation = _a.rotation, strokeLinecap = _a.strokeLinecap, textColor = _a.textColor, textSize = _a.textSize, pathColor = _a.pathColor, pathTransition = _a.pathTransition, pathTransitionDuration = _a.pathTransitionDuration, trailColor = _a.trailColor, backgroundColor = _a.backgroundColor;
    var rotationTransform = rotation == null ? undefined : "rotate(" + rotation + "turn)";
    var rotationTransformOrigin = rotation == null ? undefined : 'center center';
    return {
        root: {},
        path: removeUndefinedValues({
            stroke: pathColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
            transition: pathTransition,
            transitionDuration: pathTransitionDuration == null ? undefined : pathTransitionDuration + "s",
        }),
        trail: removeUndefinedValues({
            stroke: trailColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
        }),
        text: removeUndefinedValues({
            fill: textColor,
            fontSize: textSize,
        }),
        background: removeUndefinedValues({
            fill: backgroundColor,
        }),
    };
}
function removeUndefinedValues(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] == null) {
            delete obj[key];
        }
    });
    return obj;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),
/* 16 */
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/***/ ((module) => {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
/*!**************************************************!*\
  !*** ../node_modules/chart.js/dist/chart.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Animations": () => (/* binding */ Animations),
/* harmony export */   "ArcElement": () => (/* binding */ ArcElement),
/* harmony export */   "BarController": () => (/* binding */ BarController),
/* harmony export */   "BarElement": () => (/* binding */ BarElement),
/* harmony export */   "BasePlatform": () => (/* binding */ BasePlatform),
/* harmony export */   "BasicPlatform": () => (/* binding */ BasicPlatform),
/* harmony export */   "BubbleController": () => (/* binding */ BubbleController),
/* harmony export */   "CategoryScale": () => (/* binding */ CategoryScale),
/* harmony export */   "Chart": () => (/* binding */ Chart),
/* harmony export */   "DatasetController": () => (/* binding */ DatasetController),
/* harmony export */   "Decimation": () => (/* binding */ plugin_decimation),
/* harmony export */   "DomPlatform": () => (/* binding */ DomPlatform),
/* harmony export */   "DoughnutController": () => (/* binding */ DoughnutController),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Filler": () => (/* binding */ plugin_filler),
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "Legend": () => (/* binding */ plugin_legend),
/* harmony export */   "LineController": () => (/* binding */ LineController),
/* harmony export */   "LineElement": () => (/* binding */ LineElement),
/* harmony export */   "LinearScale": () => (/* binding */ LinearScale),
/* harmony export */   "LogarithmicScale": () => (/* binding */ LogarithmicScale),
/* harmony export */   "PieController": () => (/* binding */ PieController),
/* harmony export */   "PointElement": () => (/* binding */ PointElement),
/* harmony export */   "PolarAreaController": () => (/* binding */ PolarAreaController),
/* harmony export */   "RadarController": () => (/* binding */ RadarController),
/* harmony export */   "RadialLinearScale": () => (/* binding */ RadialLinearScale),
/* harmony export */   "Scale": () => (/* binding */ Scale),
/* harmony export */   "ScatterController": () => (/* binding */ ScatterController),
/* harmony export */   "SubTitle": () => (/* binding */ plugin_subtitle),
/* harmony export */   "Ticks": () => (/* binding */ Ticks),
/* harmony export */   "TimeScale": () => (/* binding */ TimeScale),
/* harmony export */   "TimeSeriesScale": () => (/* binding */ TimeSeriesScale),
/* harmony export */   "Title": () => (/* binding */ plugin_title),
/* harmony export */   "Tooltip": () => (/* binding */ plugin_tooltip),
/* harmony export */   "_adapters": () => (/* binding */ adapters),
/* harmony export */   "_detectPlatform": () => (/* binding */ _detectPlatform),
/* harmony export */   "animator": () => (/* binding */ animator),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "layouts": () => (/* binding */ layouts),
/* harmony export */   "plugins": () => (/* binding */ plugins),
/* harmony export */   "registerables": () => (/* binding */ registerables),
/* harmony export */   "registry": () => (/* binding */ registry),
/* harmony export */   "scales": () => (/* binding */ scales)
/* harmony export */ });
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ 22);
/*!
 * Chart.js v3.7.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */



class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }
  _refresh() {
    if (this._request) {
      return;
    }
    this._running = true;
    this._request = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.r.call(window, () => {
      this._update();
      this._request = null;
      if (this._running) {
        this._refresh();
      }
    });
  }
  _update(date = Date.now()) {
    let remaining = 0;
    this._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        this._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        this._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    this._lastDate = date;
    if (remaining === 0) {
      this._running = false;
    }
  }
  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    const anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    const anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    const anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    const items = anims.items;
    let i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var animator = new Animator();

const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c)(from || transparent);
    const c1 = c0.valid && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c)(to || transparent);
    return c1 && c1.valid
      ? c1.mix(c0, factor).hexString()
      : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
    const from = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e[cfg.easing] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(cfg, to, date) {
    if (this._active) {
      this._notify(false);
      const currentValue = this._target[this._prop];
      const elapsed = date - this._start;
      const remain = this._duration - elapsed;
      this._start = date;
      this._duration = Math.floor(Math.max(remain, cfg.duration));
      this._total += elapsed;
      this._loop = !!cfg.loop;
      this._to = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
      this._from = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(date) {
    const elapsed = date - this._start;
    const duration = this._duration;
    const prop = this._prop;
    const from = this._from;
    const loop = this._loop;
    const to = this._to;
    let factor;
    this._active = from !== to && (loop || (elapsed < duration));
    if (!this._active) {
      this._target[prop] = to;
      this._notify(true);
      return;
    }
    if (elapsed < 0) {
      this._target[prop] = from;
      return;
    }
    factor = (elapsed / duration) % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = this._easing(Math.min(1, Math.max(0, factor)));
    this._target[prop] = this._fn(from, to, factor);
  }
  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({res, rej});
    });
  }
  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];
    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }
}

const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set('animation', {
  delay: undefined,
  duration: 1000,
  easing: 'easeOutQuart',
  fn: undefined,
  from: undefined,
  loop: undefined,
  to: undefined,
  type: undefined,
});
const animationOptions = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.animation);
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe('animation', {
  _fallback: false,
  _indexable: false,
  _scriptable: (name) => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn',
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set('animations', {
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  },
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe('animations', {
  _fallback: 'animation',
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set('transitions', {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: 'transparent'
      },
      visible: {
        type: 'boolean',
        duration: 0
      },
    }
  },
  hide: {
    animations: {
      colors: {
        to: 'transparent'
      },
      visible: {
        type: 'boolean',
        easing: 'linear',
        fn: v => v | 0
      },
    }
  }
});
class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  configure(config) {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(config)) {
      return;
    }
    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(cfg)) {
        return;
      }
      const resolved = {};
      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }
      ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }
  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    const animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {
      });
    }
    return animations;
  }
  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;
    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    const animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }
}
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {$shared: false, $animations: {}});
  }
  return options;
}

function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(otherValue) && (singleMode || (value === 0 || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(value) === (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(otherValue)))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || (stacked === undefined && meta.stack !== undefined);
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const {min, max, minDefined, maxDefined} = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
    const value = stack[meta.index];
    if ((positive && value > 0) || (!positive && value < 0)) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  const {chart, _cachedMeta: meta} = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {iScale, vScale, index: datasetIndex} = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {[iAxis]: index, [vAxis]: value} = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent,
    {
      active: false,
      dataset: undefined,
      datasetIndex: index,
      index,
      mode: 'default',
      type: 'dataset'
    }
  );
}
function createDataContext(parent, index, element) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (const parsed of items) {
    const stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
  }
}
const isDirectUpdateMode = (mode) => mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked
  && {keys: getSortedDatasetIndices(chart, true), values: null};
class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.$context = undefined;
    this._syncList = [];
    this.initialize();
  }
  initialize() {
    const meta = this._cachedMeta;
    this.configure();
    this.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    this.addElements();
  }
  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  }
  linkScales() {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;
    const xid = meta.xAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = this.getScaleForId(xid);
    meta.yScale = this.getScaleForId(yid);
    meta.rScale = this.getScaleForId(rid);
    meta.iScale = this.getScaleForId(iid);
    meta.vScale = this.getScaleForId(vid);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale
      ? meta.vScale
      : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const meta = this._cachedMeta;
    if (this._data) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u)(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  }
  _dataCheck() {
    const dataset = this.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = this._data;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data)) {
      this._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u)(_data, this);
        const meta = this._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.l)(data, this);
      }
      this._syncList = [];
      this._data = data;
    }
  }
  addElements() {
    const meta = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      meta.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(resetNewElements) {
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    let stackChanged = false;
    this._dataCheck();
    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    this._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(this, meta._parsed);
    }
  }
  configure() {
    const config = this.chart.config;
    const scopeKeys = config.datasetScopeKeys(this._type);
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
    this.options = config.createResolver(scopes, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(start, count) {
    const {_cachedMeta: meta, _data: data} = this;
    const {iScale, _stacked} = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;
    if (this._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(data[start])) {
        parsed = this.parseArrayData(meta, data, start, count);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        parsed = this.parseObjectData(meta, data, start, count);
      } else {
        parsed = this.parsePrimitiveData(meta, data, start, count);
      }
      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || (prev && cur[iAxis] < prev[iAxis]);
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(this, parsed);
    }
  }
  parsePrimitiveData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(item, xAxisKey), index),
        y: yScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(item, yAxisKey), index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  getDataElement(index) {
    return this._cachedMeta.data[index];
  }
  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index, {mode});
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      value = applyStack(stack, parsedValue, this._cachedMeta.index);
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }
  getMinMax(scale, canStack) {
    const meta = this._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;
    const otherScale = this._getOtherScale(scale);
    const stack = createStack(canStack, meta, this.chart);
    const range = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    const {min: otherMin, max: otherMax} = getUserBounds(otherScale);
    let i, parsed;
    function _skip() {
      parsed = _parsed[i];
      const otherValue = parsed[otherScale.axis];
      return !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      this.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  }
  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
        values.push(value);
      }
    }
    return values;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    const meta = this._cachedMeta;
    this.update(mode || 'default');
    meta._clip = toClip((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
  }
  update(mode) {}
  draw() {
    const ctx = this._ctx;
    const chart = this.chart;
    const meta = this._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = this._drawStart || 0;
    const count = this._drawCount || (elements.length - start);
    const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
    let i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      const element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active && drawActiveElementsOnTop) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }
  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(mode)
      : this.resolveDataElementOptions(index || 0, mode);
  }
  getContext(index, active, mode) {
    const dataset = this.getDataset();
    let context;
    if (index >= 0 && index < this._cachedMeta.data.length) {
      const element = this._cachedMeta.data[index];
      context = element.$context ||
        (element.$context = createDataContext(this.getContext(), index, element));
      context.parsed = this.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = this.$context ||
        (this.$context = createDatasetContext(this.chart.getContext(), this.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = this.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  }
  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }
  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }
  _resolveElementOptions(elementType, mode = 'default', index) {
    const active = mode === 'active';
    const cache = this._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = this.enableOptionSharing && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    const config = this.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
    const names = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.elements[elementType]);
    const context = () => this.getContext(index, active);
    const values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  }
  _resolveAnimations(index, transition, active) {
    const chart = this.chart;
    const cache = this._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    let options;
    if (chart.options.animation !== false) {
      const config = this.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      options = config.createResolver(scopes, this.getContext(index, active, transition));
    }
    const animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }
  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }
  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: (!active && this.getSharedOptions(options)) || options
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(resetNewElements) {
    const data = this._data;
    const elements = this._cachedMeta.data;
    for (const [method, arg1, arg2] of this._syncList) {
      this[method](arg1, arg2);
    }
    this._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);
    if (count) {
      this.parse(0, count);
    }
    if (numData > numMeta) {
      this._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      this._removeElements(numData, numMeta - numData);
    }
  }
  _insertElements(start, count, resetNewElements = true) {
    const meta = this._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;
    const move = (arr) => {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new this.dataElementType();
    }
    if (this._parsing) {
      move(meta._parsed);
    }
    this.parse(start, count);
    if (resetNewElements) {
      this.updateElements(data, start, count, 'reset');
    }
  }
  updateElements(element, start, count, mode) {}
  _removeElements(start, count) {
    const meta = this._cachedMeta;
    if (this._parsing) {
      const removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  }
  _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      const [method, arg1, arg2] = args;
      this[method](arg1, arg2);
    }
    this.chart._dataChanges.push([this.index, ...args]);
  }
  _onDataPush() {
    const count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(start, count) {
    if (count) {
      this._sync(['_removeElements', start, count]);
    }
    const newCount = arguments.length - 2;
    if (newCount) {
      this._sync(['_insertElements', start, newCount]);
    }
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;

function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    const visibleMetas = scale.getMatchingVisibleMetas(type);
    let values = [];
    for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._)(values.sort((a, b) => a - b));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  const scale = meta.iScale;
  const values = getAllScaleValues(scale, meta.type);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - (size / 2)
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {start, end, reverse, top, bottom};
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  const {start, end, reverse, top, bottom} = borderProps(properties);
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, {inflateAmount}, ratio) {
  properties.inflateAmount = inflateAmount === 'auto'
    ? ratio === 1 ? 0.33 : 0
    : inflateAmount;
}
class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, iAxisKey), i);
      parsed.push(parseValue((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {iScale, vScale} = meta;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom)
      ? '[' + custom.start + ', ' + custom.end + ']'
      : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const meta = this._cachedMeta;
    meta.stack = this.getDataset().stack;
  }
  update(mode) {
    const meta = this._cachedMeta;
    this.updateElements(meta.data, 0, meta.data.length, mode);
  }
  updateElements(bars, start, count, mode) {
    const reset = mode === 'reset';
    const {index, _cachedMeta: {vScale}} = this;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();
    const ruler = this._getRuler();
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
    for (let i = start; i < start + count; i++) {
      const parsed = this.getParsed(i);
      const vpixels = reset || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vScale.axis]) ? {base, head: base} : this._calculateBarValuePixels(i);
      const ipixels = this._calculateBarIndexPixels(i, ruler);
      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index === stack._top || index === stack._bottom),
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      const options = properties.options || bars[i].options;
      setBorderSkipped(properties, options, stack, index);
      setInflateAmount(properties, options, ruler.ratio);
      this.updateElement(bars[i], i, properties, mode);
    }
  }
  _getStacks(last, dataIndex) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const metasets = iScale.getMatchingVisibleMetas(this._type);
    const stacked = iScale.options.stacked;
    const ilen = metasets.length;
    const stacks = [];
    let i, item;
    for (i = 0; i < ilen; ++i) {
      item = metasets[i];
      if (!item.controller.options.grouped) {
        continue;
      }
      if (typeof dataIndex !== 'undefined') {
        const val = item.controller.getParsed(dataIndex)[
          item.controller._cachedMeta.vScale.axis
        ];
        if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(val) || isNaN(val)) {
          continue;
        }
      }
      if (stacked === false || stacks.indexOf(item.stack) === -1 ||
				(stacked === undefined && item.stack === undefined)) {
        stacks.push(item.stack);
      }
      if (item.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }
  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);
    const index = (name !== undefined)
      ? stacks.indexOf(name)
      : -1;
    return (index === -1)
      ? stacks.length - 1
      : index;
  }
  _getRuler() {
    const opts = this.options;
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
    }
    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(meta);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: this._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }
  _calculateBarValuePixels(index) {
    const {_cachedMeta: {vScale, _stacked}, options: {base: baseValue, minBarLength}} = this;
    const actualBase = baseValue || 0;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
    let head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(value) !== (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    const startValue = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);
    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      head = base + size;
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler) {
    const scale = ruler.scale;
    const options = this.options;
    const skipNull = options.skipNull;
    const maxBarThickness = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.maxBarThickness, Infinity);
    let center, size;
    if (ruler.grouped) {
      const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex'
        ? computeFlexCategoryTraits(index, ruler, options, stackCount)
        : computeFitCategoryTraits(index, ruler, options, stackCount);
      const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    const meta = this._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    for (; i < ilen; ++i) {
      if (this.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(this._ctx);
      }
    }
  }
}
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true,
    }
  }
};

class BubbleController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  parsePrimitiveData(meta, data, start, count) {
    const parsed = super.parsePrimitiveData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const parsed = super.parseArrayData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(item[2], this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const parsed = super.parseObjectData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  getMaxOverflow() {
    const data = this._cachedMeta.data;
    let max = 0;
    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {xScale, yScale} = meta;
    const parsed = this.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    const points = this._cachedMeta.data;
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale} = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && this.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      this.updateElement(point, i, properties, mode);
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {$shared: false});
    }
    const radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(parsed && parsed._custom, radius);
    return values;
  }
}
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        }
      }
    }
  }
};

function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = (angle, a, b) => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    const calcMin = (angle, a, b) => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    const minX = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P, startX, endX);
    const minY = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {ratioX, ratioY, offsetX, offsetY};
}
class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    if (this._parsing === false) {
      meta._parsed = data;
    } else {
      let getter = (i) => +data[i];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        const {key = 'value'} = this._parsing;
        getter = (i) => +(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(data[i], key);
      }
      let i, ilen;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        meta._parsed[i] = getter(i);
      }
    }
  }
  _getRotation() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.rotation - 90);
  }
  _getCircumference() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.circumference);
  }
  _getRotationExtents() {
    let min = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
    let max = -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
    for (let i = 0; i < this.chart.data.datasets.length; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        const controller = this.chart.getDatasetMeta(i).controller;
        const rotation = controller._getRotation();
        const circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min,
    };
  }
  update(mode) {
    const chart = this.chart;
    const {chartArea} = chart;
    const meta = this._cachedMeta;
    const arcs = meta.data;
    const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.options.cutout, maxSize), 1);
    const chartWeight = this._getRingWeight(this.index);
    const {circumference, rotation} = this._getRotationExtents();
    const {ratioX, ratioY, offsetX, offsetY} = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.n)(this.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);
    const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
    this.offsetX = offsetX * outerRadius;
    this.offsetY = offsetY * outerRadius;
    meta.total = this.calculateTotal();
    this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _circumference(i, reset) {
    const opts = this.options;
    const meta = this._cachedMeta;
    const circumference = this._getCircumference();
    if ((reset && opts.animation.animateRotate) || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : this.innerRadius;
    const outerRadius = animateScale ? 0 : this.outerRadius;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    let startAngle = this._getRotation();
    let i;
    for (i = 0; i < start; ++i) {
      startAngle += this._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      const circumference = this._circumference(i, reset);
      const arc = arcs[i];
      const properties = {
        x: centerX + this.offsetX,
        y: centerY + this.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      this.updateElement(arc, i, properties, mode);
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;
    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    const total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T * (Math.abs(value) / total);
    }
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  getMaxBorderWidth(arcs) {
    let max = 0;
    const chart = this.chart;
    let i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  getMaxOffset(arcs) {
    let max = 0;
    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;
    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    },
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r',
};
DoughnutController.descriptors = {
  _scriptable: (name) => name !== 'spacing',
  _indexable: (name) => name !== 'spacing',
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(tooltipItem) {
          let dataLabel = tooltipItem.label;
          const value = ': ' + tooltipItem.formattedValue;
          if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(dataLabel)) {
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }
          return dataLabel;
        }
      }
    }
  }
};

class LineController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  update(mode) {
    const meta = this._cachedMeta;
    const {dataset: line, data: points = [], _dataset} = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {start, count} = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if (scaleRangesChanged(meta)) {
      start = 0;
      count = points.length;
    }
    line._chart = this.chart;
    line._datasetIndex = this.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = this.resolveDatasetElementOptions(mode);
    if (!this.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = this.options.segment;
    this.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    this.updateElements(points, start, count, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale, _stacked, _dataset} = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {spanGaps, segment} = this.options;
    const maxGapLength = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = this.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && (parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }
}
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false,
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category',
    },
    _value_: {
      type: 'linear',
    },
  }
};
function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const {iScale, _parsed} = meta;
    const axis = iScale.axis;
    const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
    if (minDefined) {
      start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(Math.min(
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(_parsed, iScale.axis, min).lo,
        animationsDisabled ? pointCount : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(points, axis, iScale.getPixelForValue(min)).lo),
      0, pointCount - 1);
    }
    if (maxDefined) {
      count = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(Math.max(
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(_parsed, iScale.axis, max).hi + 1,
        animationsDisabled ? 0 : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(points, axis, iScale.getPixelForValue(max)).hi + 1),
      start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {start, count};
}
function scaleRangesChanged(meta) {
  const {xScale, yScale, _scaleRanges} = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min
		|| _scaleRanges.xmax !== xScale.max
		|| _scaleRanges.ymin !== yScale.min
		|| _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}

class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  update(mode) {
    const arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _updateRadius() {
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? (outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    this.outerRadius = outerRadius - (radiusLength * this.index);
    this.innerRadius = this.outerRadius - radiusLength;
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const dataset = this.getDataset();
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = this._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;
    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P;
    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / this.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += this._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;
      let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      this.updateElement(arc, i, properties, mode);
    }
  }
  countVisibleElements() {
    const dataset = this.getDataset();
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index)
      ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle)
      : 0;
  }
}
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    },
  },
  indexAxis: 'r',
  startAngle: 0,
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};

class PieController extends DoughnutController {
}
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};

class RadarController extends DatasetController {
  getLabelAndValue(index) {
    const vScale = this._cachedMeta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  update(mode) {
    const meta = this._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      this.updateElement(line, undefined, properties, mode);
    }
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const dataset = this.getDataset();
    const scale = this._cachedMeta.rScale;
    const reset = mode === 'reset';
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      const pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      this.updateElement(point, i, properties, mode);
    }
  }
}
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  },
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear',
    }
  }
};

class ScatterController extends LineController {
}
ScatterController.id = 'scatter';
ScatterController.defaults = {
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(item) {
          return '(' + item.label + ', ' + item.formattedValue + ')';
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PolarAreaController: PolarAreaController,
PieController: PieController,
RadarController: RadarController,
ScatterController: ScatterController
});

function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }
  formats() {
    return abstract();
  }
  parse(value, format) {
    return abstract();
  }
  format(timestamp, format) {
    return abstract();
  }
  add(timestamp, amount, unit) {
    return abstract();
  }
  diff(a, b, unit) {
    return abstract();
  }
  startOf(timestamp, unit, weekday) {
    return abstract();
  }
  endOf(timestamp, unit) {
    return abstract();
  }
}
DateAdapter.override = function(members) {
  Object.assign(DateAdapter.prototype, members);
};
var adapters = {
  _date: DateAdapter
};

function getRelativePosition(e, chart) {
  if ('native' in e) {
    return {
      x: e.x,
      y: e.y
    };
  }
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y)(e, chart);
}
function evaluateAllVisibleItems(chart, handler) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  let index, data, element;
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    ({index, data} = metasets[i]);
    for (let j = 0, jlen = data.length; j < jlen; ++j) {
      element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function binarySearch(metaset, axis, value, intersect) {
  const {controller, data, _sorted} = metaset;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.A : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {lo: start.lo, hi: end.hi};
      }
    }
  }
  return {lo: 0, hi: data.length - 1};
}
function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {index, data} = metasets[i];
    const {lo, hi} = binarySearch(metasets[i], axis, value, intersect);
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function(pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition) {
  const items = [];
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(position, chart.chartArea, chart._minPadding)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
  let items = [];
  function evaluationFunc(element, datasetIndex, index) {
    const {startAngle, endAngle} = element.getProps(['startAngle', 'endAngle'], useFinalPosition);
    const {angle} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(element, {x: position.x, y: position.y});
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle)) {
      items.push({element, datasetIndex, index});
    }
  }
  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition) {
  let items = [];
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  function evaluationFunc(element, datasetIndex, index) {
    const inRange = element.inRange(position.x, position.y, useFinalPosition);
    if (intersect && !inRange) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    const pointInArea = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(center, chart.chartArea, chart._minPadding);
    if (!pointInArea && !inRange) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{element, datasetIndex, index}];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({element, datasetIndex, index});
    }
  }
  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(position, chart.chartArea, chart._minPadding)) {
    return [];
  }
  return axis === 'r' && !intersect
    ? getNearestRadialItems(chart, position, axis, useFinalPosition)
    : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition);
}
function getAxisItems(chart, e, options, useFinalPosition) {
  const position = getRelativePosition(e, chart);
  const items = [];
  const axis = options.axis;
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      intersectsItem = true;
    }
  });
  if (options.intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'x';
      const items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition)
        : getNearestItems(chart, position, axis, false, useFinalPosition);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach((meta) => {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({element, datasetIndex: meta.index, index});
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      let items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition) :
        getNearestItems(chart, position, axis, false, useFinalPosition);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({element: data[i], datasetIndex, index: i});
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getIntersectItems(chart, position, axis, useFinalPosition);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
    },
    x(chart, e, options, useFinalPosition) {
      return getAxisItems(chart, e, {axis: 'x', intersect: options.intersect}, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      return getAxisItems(chart, e, {axis: 'y', intersect: options.intersect}, useFinalPosition);
    }
  }
};

const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ?
      v0.index - v1.index :
      v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    ({position: pos, options: {stack, stackWeight = 1}} = box);
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && (pos + stack),
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  for (const wrap of layouts) {
    const {stack, pos, stackWeight} = wrap;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    const _stack = stacks[stack] || (stacks[stack] = {count: 0, placed: 0, weight: 0, size: 0});
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const {vBoxMaxWidth, hBoxMaxHeight} = params;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const {fullSize} = layout.box;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const {pos, box} = layout;
  const maxPadding = chartArea.maxPadding;
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {size: 0, count: 1};
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal
    ? {same: widthChanged, other: heightChanged}
    : {same: heightChanged, other: widthChanged};
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {left: 0, top: 0, right: 0, bottom: 0};
    positions.forEach((pos) => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal
    ? marginForPositions(['left', 'right'])
    : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(
      layout.width || chartArea.w,
      layout.height || chartArea.h,
      getMargins(layout.horizontal, chartArea)
    );
    const {same, other} = updateDims(chartArea, params, layout, stacks);
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let {x, y} = chartArea;
  for (const layout of boxes) {
    const box = layout.box;
    const stack = stacks[layout.stack] || {count: 1, placed: 0, weight: 1};
    const weight = (layout.stackWeight / stack.weight) || 1;
    if (layout.horizontal) {
      const width = chartArea.w * weight;
      const height = stack.size || box.height;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      const height = chartArea.h * weight;
      const width = stack.size || box.width;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, width, height);
      }
      stack.start = x;
      stack.placed += height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set('layout', {
  autoPadding: true,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function() {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) =>
      wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w,
    };
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(boxes.chartArea, (layout) => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {left: 0, top: 0, right: 0, bottom: 0});
    });
  }
};

class BasePlatform {
  acquireContext(canvas, aspectRatio) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }
  isAttached(canvas) {
    return true;
  }
  updateConfig(config) {
  }
}

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
  updateConfig(config) {
    config.options.animation = false;
  }
}

const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = value => value === null || value === '';
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.G)(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.G)(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.J ? {passive: true} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {x, y} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y)(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null,
  };
}
function nodeListContains(nodeList, canvas) {
  for (const node of nodeList) {
    if (node === canvas || node.contains(canvas)) {
      return true;
    }
  }
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.addedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.removedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(canvas);
  if (!container) {
    return;
  }
  const resize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I)((width, height) => {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I)((event) => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart, (args) => {
    const event = args[0];
    return [event, event.offsetX, event.offsetY];
  });
  addListener(canvas, type, proxy);
  return proxy;
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    const canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach((prop) => {
      const value = initial[prop];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach((key) => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }
  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];
    if (!proxy) {
      return;
    }
    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(canvas, width, height, aspectRatio) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(canvas, width, height, aspectRatio);
  }
  isAttached(canvas) {
    const container = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(canvas);
    return !!(container && container.isConnected);
  }
}

function _detectPlatform(canvas) {
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.K)() || (typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas)) {
    return BasicPlatform;
  }
  return DomPlatform;
}

class Element {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }
  tooltipPosition(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  hasValue() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(this.x) && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(this.y);
  }
  getProps(props, final) {
    const anims = this.$animations;
    if (!final || !anims) {
      return this;
    }
    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
    });
    return ret;
  }
}
Element.defaults = {};
Element.defaultRoutes = undefined;

const formatters = {
  values(value) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal};
    Object.assign(options, this.options.ticks.format);
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = tickValue / (Math.pow(10, Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(tickValue))));
    if (remain === 1 || remain === 2 || remain === 5) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {formatters};

_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (_ctx, options) => options.lineWidth,
    tickColor: (_ctx, options) => options.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0.0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: false,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2,
  }
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.ticks', 'color', '', 'color');
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.grid', 'color', '', 'borderColor');
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.grid', 'borderColor', '', 'borderColor');
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.title', 'color', '', 'color');
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe('scale', {
  _fallback: false,
  _scriptable: (name) => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
  _indexable: (name) => name !== 'borderDash' && name !== 'tickBorderDash',
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe('scales', {
  _fallback: 'scale',
});
_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe('scale.ticks', {
  _scriptable: (name) => name !== 'backdropPadding' && name !== 'callback',
  _indexable: (name) => name !== 'backdropPadding',
});

function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.M)(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(majorStart, 0);
  const end = Math.min((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}

const reverseAlign = (align) => align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(caches, (cache) => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.font, fallback);
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(options.padding);
  const lines = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(options.text) ? options.text.length : 1;
  return (lines * font.lineHeight) + padding.height;
}
function createScaleContext(parent, scale) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(align);
  if ((reverse && position !== 'right') || (!reverse && position === 'right')) {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const {top, left, bottom, right, chart} = scale;
  const {chartArea, scales} = chart;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, left, right);
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, bottom, top);
    rotation = position === 'left' ? -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H;
  }
  return {titleX, titleY, maxWidth, rotation};
}
class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(options) {
    this.options = options.setContext(this.getContext());
    this.axis = options.axis;
    this._userMin = this.parse(options.min);
    this._userMax = this.parse(options.max);
    this._suggestedMin = this.parse(options.suggestedMin);
    this._suggestedMax = this.parse(options.suggestedMax);
  }
  parse(raw, index) {
    return raw;
  }
  getUserBounds() {
    let {_userMin, _userMax, _suggestedMin, _suggestedMax} = this;
    _userMin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_userMin, Number.POSITIVE_INFINITY);
    _userMax = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_userMin, _suggestedMin),
      max: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(_userMax, _suggestedMax),
      minDefined: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(_userMin),
      maxDefined: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(_userMax)
    };
  }
  getMinMax(canStack) {
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    let range;
    if (minDefined && maxDefined) {
      return {min, max};
    }
    const metas = this.getMatchingVisibleMetas();
    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(this, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    min = maxDefined && min > max ? max : min;
    max = minDefined && min > max ? min : max;
    return {
      min: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(min, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(max, min)),
      max: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(max, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(min, max))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    const {beginAtZero, grace, ticks: tickOpts} = this.options;
    const sampleSize = tickOpts.sampleSize;
    this.beforeUpdate();
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal()
      ? this.width + margins.left + margins.right
      : this.height + margins.top + margins.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this, grace, beginAtZero);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const samplingEnabled = sampleSize < this.ticks.length;
    this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      this.ticks = autoSkip(this, this.ticks);
      this._labelSizes = null;
    }
    if (samplingEnabled) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let reversePixels = this.options.reverse;
    let startPixel, endPixel;
    if (this.isHorizontal()) {
      startPixel = this.left;
      endPixel = this.right;
    } else {
      startPixel = this.top;
      endPixel = this.bottom;
      reversePixels = !reversePixels;
    }
    this._startPixel = startPixel;
    this._endPixel = endPixel;
    this._reversePixels = reversePixels;
    this._length = endPixel - startPixel;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.afterSetDimensions, [this]);
  }
  _callHooks(name) {
    this.chart.notifyPlugins(name, this.getContext());
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options[name], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    const tickOpts = this.options.ticks;
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(tickOpts.callback, [tick.value, i, ticks], this);
    }
  }
  afterTickToLabelConversion() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const options = this.options;
    const tickOpts = options.ticks;
    const numTicks = this.ticks.length;
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;
    if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
      this.labelRotation = minRotation;
      return;
    }
    const labelSizes = this._getLabelSizes();
    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
    tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = this.maxHeight - getTickMarkLength(options.grid)
				- tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R)(Math.min(
        Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)((labelSizes.highest.height + 6) / tickWidth, -1, 1)),
        Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(maxLabelHeight / maxLabelDiagonal, -1, 1))
      ));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    this.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.afterCalculateLabelRotation, [this]);
  }
  beforeFit() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.beforeFit, [this]);
  }
  fit() {
    const minSize = {
      width: 0,
      height: 0
    };
    const {chart, options: {ticks: tickOpts, title: titleOpts, grid: gridOpts}} = this;
    const display = this._isVisible();
    const isHorizontal = this.isHorizontal();
    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = this.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = this.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && this.ticks.length) {
        const {first, last, widest, highest} = this._getLabelSizes();
        const tickPadding = tickOpts.padding * 2;
        const angleRadians = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);
        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        this._calculatePadding(first, last, sin, cos);
      }
    }
    this._handleMargins();
    if (isHorizontal) {
      this.width = this._length = chart.width - this._margins.left - this._margins.right;
      this.height = minSize.height;
    } else {
      this.width = minSize.width;
      this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(first, last, sin, cos) {
    const {ticks: {align, padding}, position} = this.options;
    const isRotated = this.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const offsetLeft = this.getPixelForTick(0) - this.left;
      const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
      this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      this.paddingTop = paddingTop + padding;
      this.paddingBottom = paddingBottom + padding;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {axis, position} = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(ticks) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(ticks);
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let labelSizes = this._labelSizes;
    if (!labelSizes) {
      const sampleSize = this.options.ticks.sampleSize;
      let ticks = this.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
    }
    return labelSizes;
  }
  _computeLabelSizes(ticks, length) {
    const {ctx, _longestTextCache: caches} = this;
    const widths = [];
    const heights = [];
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(label) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        width = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(nestedLabel) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(nestedLabel)) {
            width = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);
    const valueAt = (idx) => ({width: widths[idx] || 0, height: heights[idx] || 0});
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights,
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value, index) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getPixelForDecimal(decimal) {
    if (this._reversePixels) {
      decimal = 1 - decimal;
    }
    const pixel = this._startPixel + decimal * this._length;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U)(this._alignToPixels ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(this.chart, pixel, 0) : pixel);
  }
  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {min, max} = this;
    return min < 0 && max < 0 ? max :
      min > 0 && max > 0 ? min :
      0;
  }
  getContext(index) {
    const ticks = this.ticks || [];
    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context ||
				(tick.$context = createTickContext(this.getContext(), index, tick));
    }
    return this.$context ||
			(this.$context = createScaleContext(this.chart.getContext(), this));
  }
  _tickSize() {
    const optionTicks = this.options.ticks;
    const rot = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));
    const labelSizes = this._getLabelSizes();
    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return this.isHorizontal()
      ? h * cos > w * sin ? w / cos : h / sin
      : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    const display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    const axis = this.axis;
    const chart = this.chart;
    const options = this.options;
    const {grid, position} = options;
    const offset = grid.offset;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
    const axisHalfWidth = axisWidth / 2;
    const alignBorderValue = function(pixel) {
      return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, pixel, axisWidth);
    };
    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(this.bottom);
      ty1 = this.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(this.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = this.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(this.right);
      tx1 = this.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(this.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = this.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    const limit = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.ticks.maxTicksLimit, ticksLength);
    const step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      const optsAtIndex = grid.setContext(this.getContext(i));
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = grid.borderDash || [];
      const borderDashOffset = optsAtIndex.borderDashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(this, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset,
      });
    }
    this._ticksLength = ticksLength;
    this._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    const axis = this.axis;
    const options = this.options;
    const {position, ticks: optionTicks} = options;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const {align, crossAlign, padding, mirror} = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';
    if (position === 'top') {
      y = this.bottom - hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = this.top + hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = ((chartArea.top + chartArea.bottom) / 2) + tickAndPadding;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = this._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = ((chartArea.left + chartArea.right) / 2) - tickAndPadding;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = this.chart.scales[positionAxisID].getPixelForValue(value);
      }
      textAlign = this._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    const labelSizes = this._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(this.getContext(i));
      pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
      font = this._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;
      if (isHorizontal) {
        x = pixel;
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      let backdrop;
      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = y + textOffset - labelPadding.top;
        let left = x - labelPadding.left;
        switch (textBaseline) {
        case 'middle':
          top -= height / 2;
          break;
        case 'bottom':
          top -= height;
          break;
        }
        switch (textAlign) {
        case 'center':
          left -= width / 2;
          break;
        case 'right':
          left -= width;
          break;
        }
        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor,
        };
      }
      items.push({
        rotation,
        label,
        font,
        color,
        strokeColor,
        strokeWidth,
        textOffset,
        textAlign,
        textBaseline,
        translation: [x, y],
        backdrop,
      });
    }
    return items;
  }
  _getXAxisLabelAlignment() {
    const {position, ticks} = this.options;
    const rotation = -(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    let align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    }
    return align;
  }
  _getYAxisLabelAlignment(tl) {
    const {position, ticks: {crossAlign, mirror, padding}} = this.options;
    const labelSizes = this._getLabelSizes();
    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;
    if (position === 'left') {
      if (mirror) {
        x = this.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += (widest / 2);
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = this.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x = this.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = this.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = this.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = this.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {textAlign, x};
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const chart = this.chart;
    const position = this.options.position;
    if (position === 'left' || position === 'right') {
      return {top: 0, left: this.left, bottom: chart.height, right: this.right};
    } if (position === 'top' || position === 'bottom') {
      return {top: this.top, left: 0, bottom: this.bottom, right: chart.width};
    }
  }
  drawBackground() {
    const {ctx, options: {backgroundColor}, left, top, width, height} = this;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }
  getLineWidthForValue(value) {
    const grid = this.options.grid;
    if (!this._isVisible() || !grid.display) {
      return 0;
    }
    const ticks = this.ticks;
    const index = ticks.findIndex(t => t.value === value);
    if (index >= 0) {
      const opts = grid.setContext(this.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  }
  drawGrid(chartArea) {
    const grid = this.options.grid;
    const ctx = this.ctx;
    const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
    let i, ilen;
    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        if (grid.drawOnChartArea) {
          drawLine(
            {x: item.x1, y: item.y1},
            {x: item.x2, y: item.y2},
            item
          );
        }
        if (grid.drawTicks) {
          drawLine(
            {x: item.tx1, y: item.ty1},
            {x: item.tx2, y: item.ty2},
            {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            }
          );
        }
      }
    }
  }
  drawBorder() {
    const {chart, ctx, options: {grid}} = this;
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
    if (!axisWidth) {
      return;
    }
    const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
    const borderValue = this._borderValue;
    let x1, x2, y1, y2;
    if (this.isHorizontal()) {
      x1 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, this.left, axisWidth) - axisWidth / 2;
      x2 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, this.top, axisWidth) - axisWidth / 2;
      y2 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.borderWidth;
    ctx.strokeStyle = borderOpts.borderColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
  drawLabels(chartArea) {
    const optionTicks = this.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    const ctx = this.ctx;
    const area = this._computeLabelArea();
    if (area) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W)(ctx, area);
    }
    const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
    let i, ilen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      const item = items[i];
      const tickFont = item.font;
      const label = item.label;
      if (item.backdrop) {
        ctx.fillStyle = item.backdrop.color;
        ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
      }
      let y = item.textOffset;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, label, 0, y, tickFont, item);
    }
    if (area) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx);
    }
  }
  drawTitle() {
    const {ctx, options: {position, title, reverse}} = this;
    if (!title.display) {
      return;
    }
    const font = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(title.font);
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      offset += padding.bottom;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    const {titleX, titleY, maxWidth, rotation} = titleArgs(this, offset, position, align);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
  draw(chartArea) {
    if (!this._isVisible()) {
      return;
    }
    this.drawBackground();
    this.drawGrid(chartArea);
    this.drawBorder();
    this.drawTitle();
    this.drawLabels(chartArea);
  }
  _layers() {
    const opts = this.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(opts.grid && opts.grid.z, -1);
    if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw: (chartArea) => {
          this.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw: (chartArea) => {
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawTitle();
      }
    }, {
      z: gz + 1,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: tz,
      draw: (chartArea) => {
        this.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    const metas = this.chart.getSortedVisibleDatasetMetas();
    const axisID = this.axis + 'AxisID';
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];
      if (meta[axisID] === this.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(opts.font);
  }
  _maxDigits() {
    const fontSize = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / fontSize;
  }
}

class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }
  register(item) {
    const proto = Object.getPrototypeOf(item);
    let parentScope;
    if (isIChartComponent(proto)) {
      parentScope = this.register(proto);
    }
    const items = this.items;
    const id = item.id;
    const scope = this.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (this.override) {
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.override(item.id, item.overrides);
    }
    return scope;
  }
  get(id) {
    return this.items[id];
  }
  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d[scope]) {
      delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d[scope][id];
      if (this.override) {
        delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1[id];
      }
    }
  }
}
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(Object.create(null), [
    parentScope ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.get(parentScope) : {},
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.get(scope),
    item.defaults
  ]);
  _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}

class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...args) {
    this._each('register', args);
  }
  remove(...args) {
    this._each('unregister', args);
  }
  addControllers(...args) {
    this._each('register', args, this.controllers);
  }
  addElements(...args) {
    this._each('register', args, this.elements);
  }
  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }
  addScales(...args) {
    this._each('register', args, this.scales);
  }
  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }
  getElement(id) {
    return this._get(id, this.elements, 'element');
  }
  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }
  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }
  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }
  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }
  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }
  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }
  _each(method, args, typedRegistry) {
    [...args].forEach(arg => {
      const reg = typedRegistry || this._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || (reg === this.plugins && arg.id)) {
        this._exec(method, reg, arg);
      } else {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(arg, item => {
          const itemReg = typedRegistry || this._getRegistryForType(item);
          this._exec(method, itemReg, item);
        });
      }
    });
  }
  _exec(method, registry, component) {
    const camelMethod = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3)(method);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(component['before' + camelMethod], [], component);
    registry[method](component);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(component['after' + camelMethod], [], component);
  }
  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  }
  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  }
}
var registry = new Registry();

class PluginService {
  constructor() {
    this._init = [];
  }
  notify(chart, hook, args, filter) {
    if (hook === 'beforeInit') {
      this._init = this._createDescriptors(chart, true);
      this._notify(this._init, chart, 'install');
    }
    const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
    const result = this._notify(descriptors, chart, hook, args);
    if (hook === 'afterDestroy') {
      this._notify(descriptors, chart, 'stop');
      this._notify(this._init, chart, 'uninstall');
    }
    return result;
  }
  _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    const descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  }
  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }
  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;
    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }
}
function allPlugins(config) {
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
    }
  }
  return plugins;
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, plugins, options, all) {
  const result = [];
  const context = chart.getContext();
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    const id = plugin.id;
    const opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin,
      options: pluginOpts(chart.config, plugin, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, plugin, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  return config.createResolver(scopes, context, [''], {scriptable: false, indexable: false, allKeys: true});
}

function getIndexAxis(type, options) {
  const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y') {
    return id;
  }
  return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function mergeScaleConfig(config, options) {
  const chartDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1[config.type] || {scales: {}};
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const firstIDs = Object.create(null);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(scaleConf)) {
      return console.error(`Invalid scale configuration for scale: ${id}`);
    }
    if (scaleConf._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
    }
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9)(Object.create(null), [{axis}, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
      scales[id] = scales[id] || Object.create(null);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9)(scales[id], [{axis}, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9)(scale, [_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.scales[scale.type], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = (set, obj, key) => {
  const opts = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(type) {
    this._config.type = type;
  }
  get data() {
    return this._config.data;
  }
  set data(data) {
    this._config.data = initData(data);
  }
  get options() {
    return this._config.options;
  }
  set options(options) {
    this._config.options = options;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType,
      () => [[
        `datasets.${datasetType}`,
        ''
      ]]);
  }
  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`,
      () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`,
        ],
        [
          `datasets.${datasetType}`,
          ''
        ]
      ]);
  }
  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`,
      () => [[
        `datasets.${datasetType}.elements.${elementType}`,
        `datasets.${datasetType}`,
        `elements.${elementType}`,
        ''
      ]]);
  }
  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`,
      () => [[
        `plugins.${id}`,
        ...plugin.additionalOptionScopes || [],
      ]]);
  }
  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;
    let cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  }
  getOptionScopes(mainScope, keyLists, resetCache) {
    const {options, type} = this;
    const cache = this._cachedScopes(mainScope, resetCache);
    const cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }
      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a4, key));
    });
    const array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  }
  chartOptionScopes() {
    const {options, type} = this;
    return [
      options,
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1[type] || {},
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {},
      {type},
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d,
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a4
    ];
  }
  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {$shared: true};
    const {resolver, subPrefixes} = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5)(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a6)(resolver, context, subResolver);
    }
    for (const prop of names) {
      result[prop] = options[prop];
    }
    return result;
  }
  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {resolver} = getResolver(this._resolverCache, scopes, prefixes);
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(context)
      ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a6)(resolver, context, undefined, descriptorDefaults)
      : resolver;
  }
}
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7)(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
const hasFunction = value => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value)
  && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5)(value[key]), false);
function needContext(proxy, names) {
  const {isScriptable, isIndexable} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a8)(proxy);
  for (const prop of names) {
    const scriptable = isScriptable(prop);
    const indexable = isIndexable(prop);
    const value = (indexable || scriptable) && proxy[prop];
    if ((scriptable && ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5)(value) || hasFunction(value)))
      || (indexable && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(value))) {
      return true;
    }
  }
  return false;
}

var version = "3.7.1";

const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || (KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x');
}
function compare2Level(l1, l2) {
  return function(a, b) {
    return a[l1] === b[l1]
      ? a[l2] - b[l2]
      : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.K)() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = (key) => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter((c) => c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const intKey = +key;
    if (intKey >= start) {
      const value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
  if (!inChartArea || e.type === 'mouseout') {
    return null;
  }
  if (isClick) {
    return lastEvent;
  }
  return e;
}
class Chart {
  constructor(item, userConfig) {
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error(
        'Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' +
				' must be destroyed before the canvas can be reused.'
      );
    }
    const options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aa)();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab)(mode => this.update(mode), options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {options: {aspectRatio, maintainAspectRatio}, width, height, _aspectRatio} = this;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(aspectRatio)) {
      return aspectRatio;
    }
    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }
    return height ? width / height : null;
  }
  get data() {
    return this.config.data;
  }
  set data(data) {
    this.config.data = data;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this.config.options = options;
  }
  _initialize() {
    this.notifyPlugins('beforeInit');
    if (this.options.responsive) {
      this.resize();
    } else {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ac)(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins('afterInit');
    return this;
  }
  clear() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ad)(this.canvas, this.ctx);
    return this;
  }
  stop() {
    animator.stop(this);
    return this;
  }
  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {width, height};
    }
  }
  _resize(width, height) {
    const options = this.options;
    const canvas = this.canvas;
    const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
    const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
    const mode = this.width ? 'resize' : 'attach';
    this.width = newSize.width;
    this.height = newSize.height;
    this._aspectRatio = this.aspectRatio;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ac)(this, newRatio, true)) {
      return;
    }
    this.notifyPlugins('resize', {size: newSize});
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(options.onResize, [this, newSize], this);
    if (this.attached) {
      if (this._doResize(mode)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }
  buildOrUpdateScales() {
    const options = this.options;
    const scaleOpts = options.scales;
    const scales = this.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];
    if (scaleOpts) {
      items = items.concat(
        Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === 'r';
          const isHorizontal = axis === 'x';
          return {
            options: scaleOptions,
            dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
            dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
          };
        })
      );
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(items, (item) => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      let scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: this.ctx,
          chart: this
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(scales, (scale) => {
      layouts.configure(this, scale, scale.options);
      layouts.addBox(this, scale);
    });
  }
  _updateMetasets() {
    const metasets = this._metasets;
    const numData = this.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);
    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        this._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {_metasets: metasets, data: {datasets}} = this;
    if (metasets.length > datasets.length) {
      delete this._stacks;
    }
    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        this._destroyDatasetMeta(index);
      }
    });
  }
  buildOrUpdateControllers() {
    const newControllers = [];
    const datasets = this.data.datasets;
    let i, ilen;
    this._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = this.getDatasetMeta(i);
      const type = dataset.type || this.config.type;
      if (meta.type && meta.type !== type) {
        this._destroyDatasetMeta(i);
        meta = this.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = this.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {datasetElementType, dataElementType} = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type];
        Object.assign(ControllerClass.prototype, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(this, i);
        newControllers.push(meta.controller);
      }
    }
    this._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.data.datasets, (dataset, datasetIndex) => {
      this.getDatasetMeta(datasetIndex).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  }
  update(mode) {
    const config = this.config;
    config.update();
    const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
    const animsDisabled = this._animationsDisabled = !options.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins('beforeUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    const newControllers = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
      const {controller} = this.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
    this._updateLayout(minPadding);
    if (!animsDisabled) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(newControllers, (controller) => {
        controller.reset();
      });
    }
    this._updateDatasets(mode);
    this.notifyPlugins('afterUpdate', {mode});
    this._layers.sort(compare2Level('z', '_idx'));
    const {_active, _lastEvent} = this;
    if (_lastEvent) {
      this._eventHandler(_lastEvent, true);
    } else if (_active.length) {
      this._updateHoverStyles(_active, _active, true);
    }
    this.render();
  }
  _updateScales() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.scales, (scale) => {
      layouts.removeBox(this, scale);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const options = this.options;
    const existingEvents = new Set(Object.keys(this._listeners));
    const newEvents = new Set(options.events);
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {_hiddenIndices} = this;
    const changes = this._getUniformDataChanges() || [];
    for (const {method, start, count} of changes) {
      const move = method === '_removeElements' ? -count : count;
      moveNumericKeys(_hiddenIndices, start, move);
    }
  }
  _getUniformDataChanges() {
    const _dataChanges = this._dataChanges;
    if (!_dataChanges || !_dataChanges.length) {
      return;
    }
    this._dataChanges = [];
    const datasetCount = this.data.datasets.length;
    const makeSet = (idx) => new Set(
      _dataChanges
        .filter(c => c[0] === idx)
        .map((c, i) => i + ',' + c.splice(1).join(','))
    );
    const changeSet = makeSet(0);
    for (let i = 1; i < datasetCount; i++) {
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae)(changeSet, makeSet(i))) {
        return;
      }
    }
    return Array.from(changeSet)
      .map(c => c.split(','))
      .map(a => ({method: a[1], start: +a[2], count: +a[3]}));
  }
  _updateLayout(minPadding) {
    if (this.notifyPlugins('beforeLayout', {cancelable: true}) === false) {
      return;
    }
    layouts.update(this, this.width, this.height, minPadding);
    const area = this.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    this._layers = [];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.boxes, (box) => {
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      this._layers.push(...box._layers());
    }, this);
    this._layers.forEach((item, index) => {
      item._idx = index;
    });
    this.notifyPlugins('afterLayout');
  }
  _updateDatasets(mode) {
    if (this.notifyPlugins('beforeDatasetsUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this.getDatasetMeta(i).controller.configure();
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._updateDataset(i, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5)(mode) ? mode({datasetIndex: i}) : mode);
    }
    this.notifyPlugins('afterDatasetsUpdate', {mode});
  }
  _updateDataset(index, mode) {
    const meta = this.getDatasetMeta(index);
    const args = {meta, index, mode, cancelable: true};
    if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    this.notifyPlugins('afterDatasetUpdate', args);
  }
  render() {
    if (this.notifyPlugins('beforeRender', {cancelable: true}) === false) {
      return;
    }
    if (animator.has(this)) {
      if (this.attached && !animator.running(this)) {
        animator.start(this);
      }
    } else {
      this.draw();
      onAnimationsComplete({chart: this});
    }
  }
  draw() {
    let i;
    if (this._resizeBeforeDraw) {
      const {width, height} = this._resizeBeforeDraw;
      this._resize(width, height);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    if (this.notifyPlugins('beforeDraw', {cancelable: true}) === false) {
      return;
    }
    const layers = this._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(this.chartArea);
    }
    this._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(this.chartArea);
    }
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    const metasets = this._sortedMetasets;
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', {cancelable: true}) === false) {
      return;
    }
    const metasets = this.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      this._drawDataset(metasets[i]);
    }
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(meta) {
    const ctx = this.ctx;
    const clip = meta._clip;
    const useClip = !clip.disabled;
    const area = this.chartArea;
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W)(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? this.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx);
    }
    args.cancelable = false;
    this.notifyPlugins('afterDatasetDraw', args);
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetMeta(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    const metasets = this._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  }
  getContext() {
    return this.$context || (this.$context = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(null, {chart: this, type: 'chart'}));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateVisibility(datasetIndex, dataIndex, visible) {
    const mode = visible ? 'show' : 'hide';
    const meta = this.getDatasetMeta(datasetIndex);
    const anims = meta.controller._resolveAnimations(undefined, mode);
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      this.update();
    } else {
      this.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {visible});
      this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : undefined);
    }
  }
  hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  }
  show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    const meta = this._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
    }
    delete this._metasets[datasetIndex];
  }
  _stop() {
    let i, ilen;
    this.stop();
    animator.remove(this);
    for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._destroyDatasetMeta(i);
    }
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const {canvas, ctx} = this;
    this._stop();
    this.config.clearCache();
    if (canvas) {
      this.unbindEvents();
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ad)(canvas, ctx);
      this.platform.releaseContext(ctx);
      this.canvas = null;
      this.ctx = null;
    }
    this.notifyPlugins('destroy');
    delete instances[this.id];
    this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const listeners = this._listeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const listener = (e, x, y) => {
      e.offsetX = x;
      e.offsetY = y;
      this._eventHandler(e);
    };
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.options.events, (type) => _add(type, listener));
  }
  bindResponsiveEvents() {
    if (!this._responsiveListeners) {
      this._responsiveListeners = {};
    }
    const listeners = this._responsiveListeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(this, type, listener);
        delete listeners[type];
      }
    };
    const listener = (width, height) => {
      if (this.canvas) {
        this.resize(width, height);
      }
    };
    let detached;
    const attached = () => {
      _remove('attach', attached);
      this.attached = true;
      this.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = () => {
      this.attached = false;
      _remove('resize', listener);
      this._stop();
      this._resize(0, 0);
      _add('attach', attached);
    };
    if (platform.isAttached(this.canvas)) {
      attached();
    } else {
      detached();
    }
  }
  unbindEvents() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this._listeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._listeners = {};
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this._responsiveListeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements) {
    const lastActive = this._active || [];
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(active, lastActive);
    if (changed) {
      this._active = active;
      this._lastEvent = null;
      this._updateHoverStyles(active, lastActive);
    }
  }
  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }
  _updateHoverStyles(active, lastActive, replay) {
    const hoverOptions = this.options.hover;
    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));
    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      this.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    const args = {
      event: e,
      replay,
      cancelable: true,
      inChartArea: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, this.chartArea, this._minPadding)
    };
    const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    const changed = this._handleEvent(e, replay, args.inChartArea);
    args.cancelable = false;
    this.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(e, replay, inChartArea) {
    const {_active: lastActive = [], options} = this;
    const useFinalPosition = replay;
    const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
    const isClick = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ag)(e);
    const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
    if (inChartArea) {
      this._lastEvent = null;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(options.onHover, [e, active, this], this);
      if (isClick) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(options.onClick, [e, active, this], this);
      }
    }
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(active, lastActive);
    if (changed || replay) {
      this._active = active;
      this._updateHoverStyles(active, lastActive, replay);
    }
    this._lastEvent = lastEvent;
    return changed;
  }
  _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const hoverOptions = this.options.hover;
    return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
  }
}
const invalidatePlugins = () => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(Chart.instances, (chart) => chart._plugins.invalidate());
const enumerable = true;
Object.defineProperties(Chart, {
  defaults: {
    enumerable,
    value: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d
  },
  instances: {
    enumerable,
    value: instances
  },
  overrides: {
    enumerable,
    value: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1
  },
  registry: {
    enumerable,
    value: registry
  },
  version: {
    enumerable,
    value: version
  },
  getChart: {
    enumerable,
    value: getChart
  },
  register: {
    enumerable,
    value: (...items) => {
      registry.add(...items);
      invalidatePlugins();
    }
  },
  unregister: {
    enumerable,
    value: (...items) => {
      registry.remove(...items);
      invalidatePlugins();
    }
  }
});

function clipArc(ctx, element, endAngle) {
  const {startAngle, pixelMargin, x, y, outerRadius, innerRadius} = element;
  let angleMargin = pixelMargin / outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ai)(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  const computeOuterLimit = (val) => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(o.innerStart, 0, innerLimit),
    innerEnd: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(o.innerEnd, 0, innerLimit),
  };
}
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta),
  };
}
function pathArc(ctx, element, offset, spacing, end) {
  const {x, y, startAngle: start, pixelMargin, innerRadius: innerR} = element;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? (alpha * avNogSpacingRadius) / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const {outerStart, outerEnd, innerStart, innerEnd} = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
  if (outerEnd > 0) {
    const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
  }
  const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
  ctx.lineTo(p4.x, p4.y);
  if (innerEnd > 0) {
    const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, innerEndAdjustedAngle + Math.PI);
  }
  ctx.arc(x, y, innerRadius, endAngle - (innerEnd / innerRadius), startAngle + (innerStart / innerRadius), true);
  if (innerStart > 0) {
    const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
  }
  const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
  ctx.lineTo(p8.x, p8.y);
  if (outerStart > 0) {
    const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, outerStartAdjustedAngle);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing) {
  const {fullCircles, startAngle, circumference} = element;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
      if (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T === 0) {
        endAngle += _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
      }
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.fill();
  return endAngle;
}
function drawFullCircleBorders(ctx, element, inner) {
  const {x, y, startAngle, pixelMargin, fullCircles} = element;
  const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
  const innerRadius = element.innerRadius + pixelMargin;
  let i;
  if (inner) {
    clipArc(ctx, element, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  }
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T, startAngle, true);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
}
function drawBorder(ctx, element, offset, spacing, endAngle) {
  const {options} = element;
  const {borderWidth, borderJoinStyle} = options;
  const inner = options.borderAlign === 'inner';
  if (!borderWidth) {
    return;
  }
  if (inner) {
    ctx.lineWidth = borderWidth * 2;
    ctx.lineJoin = borderJoinStyle || 'round';
  } else {
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = borderJoinStyle || 'bevel';
  }
  if (element.fullCircles) {
    drawFullCircleBorders(ctx, element, inner);
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.stroke();
}
class ArcElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {angle, distance} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(point, {x: chartX, y: chartY});
    const {startAngle, endAngle, innerRadius, outerRadius, circumference} = this.getProps([
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference'
    ], useFinalPosition);
    const rAdjust = this.options.spacing / 2;
    const _circumference = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(circumference, endAngle - startAngle);
    const betweenAngles = _circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle);
    const withinRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
    return (betweenAngles && withinRadius);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, startAngle, endAngle, innerRadius, outerRadius} = this.getProps([
      'x',
      'y',
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference',
    ], useFinalPosition);
    const {offset, spacing} = this.options;
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    const {options, circumference} = this;
    const offset = (options.offset || 0) / 2;
    const spacing = (options.spacing || 0) / 2;
    this.pixelMargin = (options.borderAlign === 'inner') ? 0.33 : 0;
    this.fullCircles = circumference > _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T ? Math.floor(circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T) : 0;
    if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
      return;
    }
    ctx.save();
    let radiusOffset = 0;
    if (offset) {
      radiusOffset = offset / 2;
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
      if (this.circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P) {
        radiusOffset = offset;
      }
    }
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    const endAngle = drawArc(ctx, this, radiusOffset, spacing);
    drawBorder(ctx, this, radiusOffset, spacing, endAngle);
    ctx.restore();
  }
}
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderJoinStyle: undefined,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};

function setStyle(ctx, options, style = options) {
  ctx.lineCap = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDash, options.borderDash));
  ctx.lineDashOffset = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ap;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aq;
  }
  return lineTo;
}
function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {start: paramsStart = 0, end: paramsEnd = count - 1} = params;
  const {start: segmentStart, end: segmentEnd} = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const {points, options} = line;
  const {count, start, loop, ilen} = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {move = true, reverse} = params || {};
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {count, start, ilen} = pathVars(points, segment, params);
  const {move = true, reverse} = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.am;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.an;
  }
  return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ao;
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const {segments, options} = line;
  const segmentMethod = _getSegmentMethod(line);
  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {start, end: start + count - 1})) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
class LineElement extends Element {
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._chart = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  updateControlPoints(chartArea, indexAxis) {
    const options = this.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
      const loop = options.spanGaps ? this._loop : this._fullLoop;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(this._points, options, chartArea, loop, indexAxis);
      this._pointsUpdated = true;
    }
  }
  set points(points) {
    this._points = points;
    delete this._segments;
    delete this._path;
    this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ak)(this, this.options.segment));
  }
  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    const options = this.options;
    const value = point[property];
    const points = this.points;
    const segments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.al)(this, {property, start: value, end: value});
    if (!segments.length) {
      return;
    }
    const result = [];
    const _interpolate = _getInterpolationMethod(options);
    let i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {start, end} = segments[i];
      const p1 = points[start];
      const p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      const interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx, start, count) {
    const segments = this.segments;
    const segmentMethod = _getSegmentMethod(this);
    let loop = this._loop;
    start = start || 0;
    count = count || (this.points.length - start);
    for (const segment of segments) {
      loop &= segmentMethod(ctx, this, segment, {start, end: start + count - 1});
    }
    return !!loop;
  }
  draw(ctx, chartArea, start, count) {
    const options = this.options || {};
    const points = this.points || [];
    if (points.length && options.borderWidth) {
      ctx.save();
      draw(ctx, this, start, count);
      ctx.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  }
}
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0,
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: (name) => name !== 'borderDash' && name !== 'fill',
};

function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {[axis]: value} = el.getProps([axis], useFinalPosition);
  return (Math.abs(pos - value) < options.radius + options.hitRadius);
}
class PointElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return ((Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)) < Math.pow(options.hitRadius + options.radius, 2));
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, area) {
    const options = this.options;
    if (this.skip || options.radius < 0.1 || !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(this, area, this.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar)(ctx, options, this.x, this.y);
  }
  getRange() {
    const options = this.options || {};
    return options.radius + options.hitRadius;
  }
}
PointElement.id = 'point';
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

function getBarBounds(bar, useFinalPosition) {
  const {x, y, base, width, height} = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {left, top, right, bottom};
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at)(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const {enableBorderRadius} = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r)),
      }
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds
		&& (skipX || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(x, bounds.left, bounds.right))
		&& (skipY || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
class BarElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  draw(ctx) {
    const {inflateAmount, options: {borderColor, backgroundColor}} = this;
    const {inner, outer} = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as : addNormalRectPath;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount));
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, base, horizontal} = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
LineElement: LineElement,
PointElement: PointElement,
BarElement: BarElement
});

function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const {x: pointAx, y: pointAy} = data[a];
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs(
        (pointAx - avgX) * (data[j].y - pointAy) -
        (pointAx - data[j].x) * (avgY - pointAy)
      );
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(minIndex) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex1],
            x: avgX,
          });
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex2],
            x: avgX
          });
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {value: data});
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach((dataset) => {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {iScale} = meta;
  const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
  if (minDefined) {
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {start, count};
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false,
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {_data, indexAxis} = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (meta.type !== 'line') {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let {start, count} = getStartAndCountOfVisiblePointsSimplified(meta, data);
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function() {
            return this._decimated;
          },
          set: function(d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
      case 'lttb':
        decimated = lttbDecimation(data, start, count, availableWidth, options);
        break;
      case 'min-max':
        decimated = minMaxDecimation(data, start, count, availableWidth);
        break;
      default:
        throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};

function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function computeLinearBoundary(source) {
  const {scale = {}, fill} = source;
  let target = null;
  let horizontal;
  if (fill === 'start') {
    target = scale.bottom;
  } else if (fill === 'end') {
    target = scale.top;
  } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    target = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(target)) {
    horizontal = scale.isHorizontal();
    return {
      x: horizontal ? target : null,
      y: horizontal ? null : target
    };
  }
  return null;
}
class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    const {x, y, radius} = this;
    bounds = bounds || {start: 0, end: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T};
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }
  interpolate(point) {
    const {x, y, radius} = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }
}
function computeCircularBoundary(source) {
  const {scale, fill} = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const target = [];
  const start = options.reverse ? scale.max : scale.min;
  const end = options.reverse ? scale.min : scale.max;
  let i, center, value;
  if (fill === 'start') {
    value = start;
  } else if (fill === 'end') {
    value = end;
  } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  if (options.grid.circular) {
    center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function findSegmentEnd(start, end, points) {
  for (;end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function pointsFromSegments(boundary, line) {
  const {x = null, y = null} = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(({start, end}) => {
    end = findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({x: first.x, y});
      points.push({x: last.x, y});
    } else if (x !== null) {
      points.push({x, y: first.y});
      points.push({x, y: last.y});
    }
  });
  return points;
}
function buildStackLine(source) {
  const {scale, index, line} = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(scale, index);
  linesBelow.push(createBoundaryLine({x: null, y: scale.bottom}, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({points, options: {}});
}
function getLinesBelow(scale, index) {
  const below = [];
  const metas = scale.getMatchingVisibleMetas('line');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {first, last, point} = findPoint(line, sourcePoint, 'x');
    if (!point || (first && last)) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {first, last, point};
}
function getTarget(source) {
  const {chart, fill, line} = source;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return createBoundaryLine(boundary, line);
}
function createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {tension: 0},
    _loop,
    _fullLoop: _loop
  }) : null;
}
function resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _clip(ctx, target, clipY) {
  const {segments, points} = target;
  let first = true;
  let lineLoop = false;
  ctx.beginPath();
  for (const segment of segments) {
    const {start, end} = segment;
    const firstPoint = points[start];
    const lastPoint = points[findSegmentEnd(start, end, points)];
    if (first) {
      ctx.moveTo(firstPoint.x, firstPoint.y);
      first = false;
    } else {
      ctx.lineTo(firstPoint.x, clipY);
      ctx.lineTo(firstPoint.x, firstPoint.y);
    }
    lineLoop = !!target.pathSegment(ctx, segment, {move: lineLoop});
    if (lineLoop) {
      ctx.closePath();
    } else {
      ctx.lineTo(lastPoint.x, clipY);
    }
  }
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(start);
    end = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(end);
  }
  return {property, start, end};
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  for (const segment of segments) {
    let {start, end} = segment;
    end = findSegmentEnd(start, end, points);
    const bounds = getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    const targetSegments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.al)(target, bounds);
    for (const tgt of targetSegments) {
      const subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.av)(segment, points, subBounds);
      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function clipBounds(ctx, scale, bounds) {
  const {top, bottom} = scale.chart.chartArea;
  const {property, start, end} = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
function _fill(ctx, cfg) {
  const {line, target, property, color, scale} = cfg;
  const segments = _segments(line, target, property);
  for (const {source: src, target: tgt, start, end} of segments) {
    const {style: {backgroundColor = color} = {}} = src;
    const notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);
    let loop;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      const targetLoop = !!target.pathSegment(ctx, tgt, {move: lineLoop, reverse: true});
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function doFill(ctx, cfg) {
  const {line, target, above, below, area, scale} = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    _clip(ctx, target, area.top);
    _fill(ctx, {line, target, color: above, scale, property});
    ctx.restore();
    ctx.save();
    _clip(ctx, target, area.bottom);
  }
  _fill(ctx, {line, target, color: below, scale, property});
  ctx.restore();
}
function drawfill(ctx, source, area) {
  const target = getTarget(source);
  const {line, scale, axis} = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {above = color, below = color} = fillOption || {};
  if (target && line.points.length) {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W)(ctx, area);
    doFill(ctx, {line, target, above, below, area, scale, axis});
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx);
  }
}
var plugin_filler = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line,
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw) {
        drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (source) {
        drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!source || source.fill === false || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};

const getBoxSize = (labelOpts, fontSize) => {
  let {boxHeight = fontSize, boxWidth = fontSize} = labelOpts;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight, margins) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  }
  buildLabels() {
    const labelOpts = this.options.labels || {};
    let legendItems = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(labelOpts.generateLabels, [this.chart], this) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
    }
    if (this.options.reverse) {
      legendItems.reverse();
    }
    this.legendItems = legendItems;
  }
  fit() {
    const {options, ctx} = this;
    if (!options.display) {
      this.width = this.height = 0;
      return;
    }
    const labelOpts = options.labels;
    const labelFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(labelOpts.font);
    const fontSize = labelFont.size;
    const titleHeight = this._computeTitleHeight();
    const {boxWidth, itemHeight} = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;
    if (this.isHorizontal()) {
      width = this.maxWidth;
      height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = this.maxHeight;
      width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    }
    this.width = Math.min(width, options.maxWidth || this.maxWidth);
    this.height = Math.min(height, options.maxHeight || this.maxHeight);
  }
  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxWidth, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const lineWidths = this.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {left: 0, top, row, width: itemWidth, height: itemHeight};
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }
  _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxHeight, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const columnSizes = this.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let col = 0;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({width: currentColWidth, height: currentColHeight});
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {left, top: currentColHeight, col, width: itemWidth, height: itemHeight};
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({width: currentColWidth, height: currentColHeight});
    return totalWidth;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const titleHeight = this._computeTitleHeight();
    const {legendHitBoxes: hitboxes, options: {align, labels: {padding}, rtl}} = this;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(rtl, this.left, this.width);
    if (this.isHorizontal()) {
      let row = 0;
      let left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.left + padding, this.right - this.lineWidths[row]);
      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.left + padding, this.right - this.lineWidths[row]);
        }
        hitbox.top += this.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        }
        hitbox.top = top;
        hitbox.left += this.left + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
        top += hitbox.height + padding;
      }
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const ctx = this.ctx;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W)(ctx, this);
      this._draw();
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx);
    }
  }
  _draw() {
    const {options: opts, columnSizes, lineWidths, ctx} = this;
    const {align, labels: labelOpts} = opts;
    const defaultColor = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.color;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(opts.rtl, this.left, this.width);
    const labelFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(labelOpts.font);
    const {color: fontColor, padding} = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    this.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {boxWidth, boxHeight, itemHeight} = getBoxSize(labelOpts, fontSize);
    const drawLegendBox = function(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      const lineWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineWidth, 1);
      ctx.fillStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.fillStyle, defaultColor);
      ctx.lineCap = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDashOffset, 0);
      ctx.lineJoin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxWidth * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar)(ctx, drawOptions, centerX, centerY);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(v => v !== 0)) {
          (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as)(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius,
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const fillText = function(x, y, legendItem) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, legendItem.text, x, y + (itemHeight / 2), labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    const isHorizontal = this.isHorizontal();
    const titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.left + padding, this.right - lineWidths[0]),
        y: this.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: this.left + padding,
        y: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
        line: 0
      };
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(this.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    this.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor || fontColor;
      ctx.fillStyle = legendItem.fontColor || fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + halfFontSize + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(this.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > this.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.left + padding, this.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > this.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
      }
      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA)(this.ctx, opts.textDirection);
  }
  drawTitle() {
    const opts = this.options;
    const titleOpts = opts.title;
    const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(opts.rtl, this.left, this.width);
    const ctx = this.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = this.left;
    let maxWidth = this.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...this.lineWidths);
      y = this.top + topPaddingPlusHalfFontSize;
      left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.align, left, this.right - maxWidth);
    } else {
      const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
    }
    const x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, titleOpts.text, x, y, titleFont);
  }
  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    let i, hitBox, lh;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(x, this.left, this.right)
      && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(y, this.top, this.bottom)) {
      lh = this.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(x, hitBox.left, hitBox.left + hitBox.width)
          && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(y, hitBox.top, hitBox.top + hitBox.height)) {
          return this.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const opts = this.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    const hoveredItem = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove') {
      const previous = this._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(opts.onLeave, [e, previous, this], this);
      }
      this._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(opts.onHover, [e, hoveredItem, this], this);
      }
    } else if (hoveredItem) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(opts.onClick, [e, hoveredItem, this], this);
    }
  }
}
function isListened(type, opts) {
  if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({ctx: chart.ctx, options, chart});
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (ctx) => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {labels: {usePointStyle, pointStyle, textAlign, color}} = chart.legend.options;
        return chart._getSortedDatasetMetas().map((meta) => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: 0,
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: (ctx) => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: '',
    }
  },
  descriptors: {
    _scriptable: (name) => !name.startsWith('on'),
    labels: {
      _scriptable: (name) => !['generateLabels', 'filter', 'sort'].includes(name),
    }
  },
};

class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight) {
    const opts = this.options;
    this.left = 0;
    this.top = 0;
    if (!opts.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = maxWidth;
    this.height = this.bottom = maxHeight;
    const lineCount = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts.text) ? opts.text.length : 1;
    this._padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(opts.padding);
    const textSize = lineCount * (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(opts.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = textSize;
    } else {
      this.width = textSize;
    }
  }
  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  _drawArgs(offset) {
    const {top, left, bottom, right, options} = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, bottom, top);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P * -0.5;
      } else {
        titleX = right - offset;
        titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(align, top, bottom);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {titleX, titleY, maxWidth, rotation};
  }
  draw() {
    const ctx = this.ctx;
    const opts = this.options;
    if (!opts.display) {
      return;
    }
    const fontOpts = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + this._padding.top;
    const {titleX, titleY, maxWidth, rotation} = this._drawArgs(offset);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
}
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold',
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal',
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aC)(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const {element, datasetIndex, index} = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {label, value} = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip.chart.ctx;
  const {body, footer, title} = tooltip;
  const {boxWidth, boxHeight} = options;
  const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.bodyFont);
  const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.titleFont);
  const footerFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight
			+ (titleLineCount - 1) * options.titleSpacing
			+ options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight
			+ (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight
			+ (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop
			+ footerLineCount * footerFont.lineHeight
			+ (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? (boxWidth + 2 + options.boxPadding) : 0;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(body, (bodyItem) => {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(bodyItem.before, maxLineWidth);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(bodyItem.lines, maxLineWidth);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {width, height};
}
function determineYAlign(chart, size) {
  const {y, height} = size;
  if (y < height / 2) {
    return 'top';
  } else if (y > (chart.height - height / 2)) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {x, width} = size;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const {x, width} = size;
  const {width: chartWidth, chartArea: {left, right}} = chart;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let {x, width} = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= (width / 2);
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let {y, height} = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= (height / 2);
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const {caretSize, caretPadding, cornerRadius} = options;
  const {xAlign, yAlign} = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(cornerRadius);
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(x, 0, chart.width - size.width),
    y: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(options.padding);
  return align === 'center'
    ? tooltip.x + tooltip.width / 2
    : align === 'right'
      ? tooltip.x + tooltip.width - padding.right
      : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
class Tooltip extends Element {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.chart = config.chart || config._chart;
    this._chart = this.chart;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }
  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }
  _resolveAnimations() {
    const cached = this._cachedAnimations;
    if (cached) {
      return cached;
    }
    const chart = this.chart;
    const options = this.options.setContext(this.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(this.chart, opts);
    if (opts._cacheable) {
      this._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  }
  getContext() {
    return this.$context ||
			(this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(context, options) {
    const {callbacks} = options;
    const beforeTitle = callbacks.beforeTitle.apply(this, [context]);
    const title = callbacks.title.apply(this, [context]);
    const afterTitle = callbacks.afterTitle.apply(this, [context]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
  }
  getBody(tooltipItems, options) {
    const {callbacks} = options;
    const bodyItems = [];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(tooltipItems, (context) => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
      pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
      pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
  }
  getFooter(tooltipItems, options) {
    const {callbacks} = options;
    const beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
    const footer = callbacks.footer.apply(this, [tooltipItems]);
    const afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems(options) {
    const active = this._active;
    const data = this.chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(this.chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(tooltipItems, (context) => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(scoped.labelColor.call(this, context));
      labelPointStyles.push(scoped.labelPointStyle.call(this, context));
      labelTextColors.push(scoped.labelTextColor.call(this, context));
    });
    this.labelColors = labelColors;
    this.labelPointStyles = labelPointStyles;
    this.labelTextColors = labelTextColors;
    this.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed, replay) {
    const options = this.options.setContext(this.getContext());
    const active = this._active;
    let properties;
    let tooltipItems = [];
    if (!active.length) {
      if (this.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(this, active, this._eventPosition);
      tooltipItems = this._createItems(options);
      this.title = this.getTitle(tooltipItems, options);
      this.beforeBody = this.getBeforeBody(tooltipItems, options);
      this.body = this.getBody(tooltipItems, options);
      this.afterBody = this.getAfterBody(tooltipItems, options);
      this.footer = this.getFooter(tooltipItems, options);
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(this.chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
      this.xAlign = alignment.xAlign;
      this.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    this._tooltipItems = tooltipItems;
    this.$context = undefined;
    if (properties) {
      this._resolveAnimations().update(this, properties);
    }
    if (changed && options.external) {
      options.external.call(this, {chart: this.chart, tooltip: this, replay});
    }
  }
  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size, options) {
    const {xAlign, yAlign} = this;
    const {caretSize, cornerRadius} = options;
    const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(cornerRadius);
    const {x: ptX, y: ptY} = tooltipPoint;
    const {width, height} = size;
    let x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + (height / 2);
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + Math.max(topLeft, bottomLeft) + (caretSize);
      } else if (xAlign === 'right') {
        x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {x1, x2, x3, y1, y2, y3};
  }
  drawTitle(pt, ctx, options) {
    const title = this.title;
    const length = title.length;
    let titleFont, titleSpacing, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const labelColors = this.labelColors[i];
    const labelPointStyle = this.labelPointStyles[i];
    const {boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.bodyFont);
    const colorX = getAlignedX(this, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar)(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.fillStyle = labelColors.backgroundColor;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar)(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = labelColors.borderWidth || 1;
      ctx.strokeStyle = labelColors.borderColor;
      ctx.setLineDash(labelColors.borderDash || []);
      ctx.lineDashOffset = labelColors.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
      const borderRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(labelColors.borderRadius);
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as)(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius,
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.beginPath();
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as)(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius,
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = this.labelTextColors[i];
  }
  drawBody(pt, ctx, options) {
    const {body} = this;
    const {bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(options.rtl, this.x, this.width);
    const fillLineOfText = function(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(this, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right'
      ? bodyAlign === 'center' ? (boxWidth / 2 + boxPadding) : (boxWidth + 2 + boxPadding)
      : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = this.labelTextColors[i];
      ctx.fillStyle = textColor;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        this._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(this.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx, options) {
    const footer = this.footer;
    const length = footer.length;
    let footerFont, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize, options) {
    const {xAlign, yAlign} = this;
    const {x, y} = pt;
    const {width, height} = tooltipSize;
    const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(options.cornerRadius);
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + topLeft, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - topRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - bottomRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + bottomLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + topLeft);
    ctx.quadraticCurveTo(x, y, x + topLeft, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget(options) {
    const chart = this.chart;
    const anims = this.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;
    if (animX || animY) {
      const position = positioners[options.position].call(this, this._active, this._eventPosition);
      if (!position) {
        return;
      }
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, this._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        this.width = size.width;
        this.height = size.height;
        this.caretX = position.x;
        this.caretY = position.y;
        this._resolveAnimations().update(this, point);
      }
    }
  }
  draw(ctx) {
    const options = this.options.setContext(this.getContext());
    let opacity = this.opacity;
    if (!opacity) {
      return;
    }
    this._updateAnimationTarget(options);
    const tooltipSize = {
      width: this.width,
      height: this.height
    };
    const pt = {
      x: this.x,
      y: this.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(options.padding);
    const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawBackground(pt, ctx, tooltipSize, options);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(ctx, options.textDirection);
      pt.y += padding.top;
      this.drawTitle(pt, ctx, options);
      this.drawBody(pt, ctx, options);
      this.drawFooter(pt, ctx, options);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA)(ctx, options.textDirection);
      ctx.restore();
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements, eventPosition) {
    const lastActive = this._active;
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this.chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(lastActive, active);
    const positionChanged = this._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      this._active = active;
      this._eventPosition = eventPosition;
      this._ignoreReplayEvents = true;
      this.update(true);
    }
  }
  handleEvent(e, replay, inChartArea = true) {
    if (replay && this._ignoreReplayEvents) {
      return false;
    }
    this._ignoreReplayEvents = false;
    const options = this.options;
    const lastActive = this._active || [];
    const active = this._getActiveElements(e, lastActive, replay, inChartArea);
    const positionChanged = this._positionChanged(active, e);
    const changed = replay || !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(active, lastActive) || positionChanged;
    if (changed) {
      this._active = active;
      if (options.enabled || options.external) {
        this._eventPosition = {
          x: e.x,
          y: e.y
        };
        this.update(true, replay);
      }
    }
    return changed;
  }
  _getActiveElements(e, lastActive, replay, inChartArea) {
    const options = this.options;
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
    if (options.reverse) {
      active.reverse();
    }
    return active;
  }
  _positionChanged(active, e) {
    const {caretX, caretY, options} = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }
}
Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({chart, options});
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    const args = {
      tooltip
    };
    if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
      return;
    }
    if (tooltip) {
      tooltip.draw(chart.ctx);
    }
    chart.notifyPlugins('afterTooltipDraw', args);
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold',
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {
    },
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold',
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart',
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      title(tooltipItems) {
        if (tooltipItems.length > 0) {
          const item = tooltipItems[0];
          const labels = item.chart.data.labels;
          const labelCount = labels ? labels.length : 0;
          if (this && this.options && this.options.mode === 'dataset') {
            return item.dataset.label || '';
          } else if (item.label) {
            return item.label;
          } else if (labelCount > 0 && item.dataIndex < labelCount) {
            return labels[item.dataIndex];
          }
        }
        return '';
      },
      afterTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      beforeBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      beforeLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      label(tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
          return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
          label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
          label += value;
        }
        return label;
      },
      labelColor(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          borderColor: options.borderColor,
          backgroundColor: options.backgroundColor,
          borderWidth: options.borderWidth,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          pointStyle: options.pointStyle,
          rotation: options.rotation,
        };
      },
      afterLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      afterBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      beforeFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      footer: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB,
      afterFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB
    }
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: (name) => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false,
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Decimation: plugin_decimation,
Filler: plugin_filler,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index, addedLabels) => {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({index, label: raw});
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = (index, max) => index === null ? null : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(Math.round(index), 0, max);
class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(scaleOptions) {
    const added = this._addedLabels;
    if (added.length) {
      const labels = this.getLabels();
      for (const {index, label} of added) {
        if (labels[index] === label) {
          labels.splice(index, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(scaleOptions);
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index
      : findOrAddLabel(labels, raw, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(index, raw), this._addedLabels);
    return validIndex(index, labels.length - 1);
  }
  determineDataLimits() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this.getMinMax(true);
    if (this.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = this.getLabels().length - 1;
      }
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const min = this.min;
    const max = this.max;
    const offset = this.options.offset;
    const ticks = [];
    let labels = this.getLabels();
    labels = (min === 0 && max === labels.length - 1) ? labels : labels.slice(min, max + 1);
    this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    this._startValue = this.min - (offset ? 0.5 : 0);
    for (let value = min; value <= max; value++) {
      ticks.push({value});
    }
    return ticks;
  }
  getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(value) {
    if (typeof value !== 'number') {
      value = this.parse(value);
    }
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: CategoryScale.prototype.getLabelForValue
  }
};

function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds} = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {min: rmin, max: rmax} = dataRange;
  const minDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(min);
  const maxDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(max);
  const countDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aE)((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{value: rmin}, {value: rmax}];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aE)(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF)((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG)(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max(
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH)(spacing),
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH)(niceMin)
  );
  factor = Math.pow(10, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({value: min});
      if (niceMin < min) {
        j++;
      }
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    ticks.push({value: Math.round((niceMin + j * spacing) * factor) / factor});
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({value: max});
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({value: niceMax});
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, {horizontal, minRotation}) {
  const rad = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    const {beginAtZero} = this.options;
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    if (beginAtZero) {
      const minSign = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(min);
      const maxSign = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      let offset = 1;
      if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
        offset = Math.abs(max * 0.05);
      }
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    this.min = min;
    this.max = max;
  }
  getTickLimit() {
    const tickOpts = this.options.ticks;
    let {maxTicksLimit, stepSize} = tickOpts;
    let maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
      if (maxTicks > 1000) {
        console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
        maxTicks = 1000;
      }
    } else {
      maxTicks = this.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const opts = this.options;
    const tickOpts = opts.ticks;
    let maxTicks = this.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = this._range || this;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aD)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  configure() {
    const ticks = this.ticks;
    let start = this.min;
    let end = this.max;
    super.configure();
    if (this.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    this._startValue = start;
    this._endValue = end;
    this._valueRange = end - start;
  }
  getLabelForValue(value) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
}

class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? max : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const horizontal = this.isHorizontal();
    const length = horizontal ? this.width : this.height;
    const minRotation = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    const tickFont = this._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }
  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
}
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};

function isMajor(tickVal) {
  const remain = tickVal / (Math.pow(10, Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(tickVal))));
  return remain === 1;
}
function generateTicks(generationOptions, dataRange) {
  const endExp = Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(dataRange.max));
  const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  const ticks = [];
  let tickVal = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(generationOptions.min, Math.pow(10, Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(dataRange.min))));
  let exp = Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(tickVal));
  let significand = Math.floor(tickVal / Math.pow(10, exp));
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  do {
    ticks.push({value: tickVal, major: isMajor(tickVal)});
    ++significand;
    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }
    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || (exp === endExp && significand < endSignificand));
  const lastTick = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(generationOptions.max, tickVal);
  ticks.push({value: lastTick, major: isMajor(tickVal)});
  return ticks;
}
class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value) && value > 0 ? value : null;
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? Math.max(0, min) : null;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? Math.max(0, max) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let min = this.min;
    let max = this.max;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    const exp = (v, m) => Math.pow(10, Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(v)) + m);
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(exp(min, -1));
        setMax(exp(max, +1));
      }
    }
    if (min <= 0) {
      setMin(exp(max, -1));
    }
    if (max <= 0) {
      setMax(exp(min, +1));
    }
    if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
      setMin(exp(min, -1));
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const opts = this.options;
    const generationOptions = {
      min: this._userMin,
      max: this._userMax
    };
    const ticks = generateTicks(generationOptions, this);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aD)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined
      ? '0'
      : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const start = this.min;
    super.configure();
    this._startValue = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(start);
    this._valueRange = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(this.max) - (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(start);
  }
  getPixelForValue(value) {
    if (value === undefined || value === 0) {
      value = this.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return this.getPixelForDecimal(value === this.min
      ? 0
      : ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(value) - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    const decimal = this.getDecimalForPixel(pixel);
    return Math.pow(10, this._startValue + decimal * this._valueRange);
  }
}
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: Ticks.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};

function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(tickOpts.backdropPadding);
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label : [label];
  return {
    w: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aI)(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - (size / 2),
      end: pos + (size / 2)
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const orig = {
    l: scale.left + scale._padding.left,
    r: scale.right - scale._padding.right,
    t: scale.top + scale._padding.top,
    b: scale.bottom - scale._padding.bottom
  };
  const limits = Object.assign({}, orig);
  const labelSizes = [];
  const padding = [];
  const valueCount = scale._pointLabels.length;
  const pointLabelOpts = scale.options.pointLabels;
  const additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
    const plFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(scale.getIndexAngle(i) + additionalAngle);
    const angle = Math.round((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R)(angleRadians));
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    updateLimits(limits, orig, angleRadians, hLimits, vLimits);
  }
  scale.setCenterPoint(
    orig.l - limits.l,
    limits.r - orig.r,
    orig.t - limits.t,
    limits.b - orig.b
  );
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
  const sin = Math.abs(Math.sin(angle));
  const cos = Math.abs(Math.cos(angle));
  let x = 0;
  let y = 0;
  if (hLimits.start < orig.l) {
    x = (orig.l - hLimits.start) / sin;
    limits.l = Math.min(limits.l, orig.l - x);
  } else if (hLimits.end > orig.r) {
    x = (hLimits.end - orig.r) / sin;
    limits.r = Math.max(limits.r, orig.r + x);
  }
  if (vLimits.start < orig.t) {
    y = (orig.t - vLimits.start) / cos;
    limits.t = Math.min(limits.t, orig.t - y);
  } else if (vLimits.end > orig.b) {
    y = (vLimits.end - orig.b) / cos;
    limits.b = Math.max(limits.b, orig.b + y);
  }
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale._pointLabels.length;
  const opts = scale.options;
  const extra = getTickBackdropHeight(opts) / 2;
  const outerDistance = scale.drawingArea;
  const additionalAngle = opts.pointLabels.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
    const angle = Math.round((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(pointLabelPosition.angle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H)));
    const size = labelSizes[i];
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    items.push({
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    });
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= (w / 2);
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= (h / 2);
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabels(scale, labelCount) {
  const {ctx, options: {pointLabels}} = scale;
  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    const plFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(optsAtIndex.font);
    const {x, y, textAlign, left, top, right, bottom} = scale._pointLabelItems[i];
    const {backdropColor} = optsAtIndex;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(backdropColor)) {
      const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(
      ctx,
      scale._pointLabels[i],
      x,
      y + (plFont.lineHeight / 2),
      plFont,
      {
        color: optsAtIndex.color,
        textAlign: textAlign,
        textBaseline: 'middle'
      }
    );
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const {ctx} = scale;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {color, lineWidth} = gridLineOpts;
  if ((!circular && !labelCount) || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(gridLineOpts.borderDash);
  ctx.lineDashOffset = gridLineOpts.borderDashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function createPointLabelContext(parent, index, label) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    label,
    index,
    type: 'pointLabel'
  });
}
class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const padding = this._padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(getTickBackdropHeight(this.options) / 2);
    const w = this.width = this.maxWidth - padding.width;
    const h = this.height = this.maxHeight - padding.height;
    this.xCenter = Math.floor(this.left + w / 2 + padding.left);
    this.yCenter = Math.floor(this.top + h / 2 + padding.top);
    this.drawingArea = Math.floor(Math.min(w, h) / 2);
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(false);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
    this._pointLabels = this.getLabels()
      .map((value, index) => {
        const label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.options.pointLabels.callback, [value, index], this);
        return label || label === 0 ? label : '';
      })
      .filter((v, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const opts = this.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
    this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
  }
  getIndexAngle(index) {
    const angleMultiplier = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T / (this._pointLabels.length || 1);
    const startAngle = this.options.startAngle || 0;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(index * angleMultiplier + (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
      return NaN;
    }
    const scalingFactor = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - value) * scalingFactor;
    }
    return (value - this.min) * scalingFactor;
  }
  getValueForDistanceFromCenter(distance) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(distance)) {
      return NaN;
    }
    const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
  }
  getPointLabelContext(index) {
    const pointLabels = this._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      const pointLabel = pointLabels[index];
      return createPointLabelContext(this.getContext(), index, pointLabel);
    }
  }
  getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
    const angle = this.getIndexAngle(index) - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H + additionalAngle;
    return {
      x: Math.cos(angle) * distanceFromCenter + this.xCenter,
      y: Math.sin(angle) * distanceFromCenter + this.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  getPointLabelPosition(index) {
    const {left, top, right, bottom} = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom,
    };
  }
  drawBackground() {
    const {backgroundColor, grid: {circular}} = this.options;
    if (backgroundColor) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }
  drawGrid() {
    const ctx = this.ctx;
    const opts = this.options;
    const {angleLines, grid} = opts;
    const labelCount = this._pointLabels.length;
    let i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(this, labelCount);
    }
    if (grid.display) {
      this.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = this.getDistanceFromCenterForValue(tick.value);
          const optsAtIndex = grid.setContext(this.getContext(index - 1));
          drawRadiusLine(this, optsAtIndex, offset, labelCount);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = labelCount - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
        const {color, lineWidth} = optsAtIndex;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
        position = this.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(this.xCenter, this.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const ctx = this.ctx;
    const opts = this.options;
    const tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    const startAngle = this.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      const optsAtIndex = tickOpts.setContext(this.getContext(index));
      const tickFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(optsAtIndex.font);
      offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(optsAtIndex.backdropPadding);
        ctx.fillRect(
          -width / 2 - padding.left,
          -offset - tickFont.size / 2 - padding.top,
          width + padding.width,
          tickFont.size + padding.height
        );
      }
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
      });
    });
    ctx.restore();
  }
  drawTitle() {}
}
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(label) {
      return label;
    },
    padding: 5,
    centerPointLabels: false
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};

const INTERVALS = {
  millisecond: {common: true, size: 1, steps: 1000},
  second: {common: true, size: 1000, steps: 60},
  minute: {common: true, size: 60000, steps: 60},
  hour: {common: true, size: 3600000, steps: 24},
  day: {common: true, size: 86400000, steps: 30},
  week: {common: false, size: 604800000, steps: 4},
  month: {common: true, size: 2.628e9, steps: 12},
  quarter: {common: false, size: 7.884e9, steps: 4},
  year: {common: true, size: 3.154e10}
};
const UNITS = (Object.keys(INTERVALS));
function sorter(a, b) {
  return a - b;
}
function parse(scale, input) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const {parser, round, isoWeekday} = scale._parseOpts;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
    value = typeof parser === 'string'
      ? adapter.parse(value, parser)
      : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(isoWeekday) || isoWeekday === true)
      ? adapter.startOf(value, 'isoWeek', isoWeekday)
      : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {lo, hi} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aK)(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(scaleOpts, opts) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9)(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }
  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return parse(this, raw);
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const options = this.options;
    const adapter = this._adapter;
    const unit = options.time.unit || 'day';
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(this._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(this.getMinMax(false));
      }
    }
    min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    this.min = Math.min(min, max - 1);
    this.max = Math.max(min + 1, max);
  }
  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {min, max};
  }
  buildTicks() {
    const options = this.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      this.min = this._userMin || timestamps[0];
      this.max = this._userMax || timestamps[timestamps.length - 1];
    }
    const min = this.min;
    const max = this.max;
    const ticks = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ)(timestamps, min, max);
    this._unit = timeOpts.unit || (tickOpts.autoSkip
      ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min))
      : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
    this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined
      : determineMajorUnit(this._unit);
    this.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(this, ticks, this._majorUnit);
  }
  initOffsets(timestamps) {
    let start = 0;
    let end = 0;
    let first, last;
    if (this.options.offset && timestamps.length) {
      first = this.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(start, 0, limit);
    end = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(end, 0, limit);
    this._offsets = {start, end, factor: 1 / (start + 1 + end)};
  }
  _generate() {
    const adapter = this._adapter;
    const min = this.min;
    const max = this.max;
    const options = this.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
    const stepSize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(timeOpts.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort((a, b) => a - b).map(x => +x);
  }
  getLabelForValue(value) {
    const adapter = this._adapter;
    const timeOpts = this.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  _tickFormatFunction(time, index, ticks, format) {
    const options = this.options;
    const formats = options.time.displayFormats;
    const unit = this._unit;
    const majorUnit = this._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;
    const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    const formatter = options.ticks.callback;
    return formatter ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(formatter, [label, index, ticks], this) : label;
  }
  generateTickLabels(ticks) {
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getDecimalForValue(value) {
    return value === null ? NaN : (value - this.min) / (this.max - this.min);
  }
  getPixelForValue(value) {
    const offsets = this._offsets;
    const pos = this.getDecimalForValue(value);
    return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return this.min + pos * (this.max - this.min);
  }
  _getLabelSize(label) {
    const ticksOpts = this.options.ticks;
    const tickLabelWidth = this.ctx.measureText(label).width;
    const angle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);
    const tickFontSize = this._resolveTickFontOptions(0).size;
    return {
      w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
      h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
    };
  }
  _getLabelCapacity(exampleTime) {
    const timeOpts = this.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
    const size = this._getLabelSize(exampleLabel);
    const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
  getDataTimestamps() {
    let timestamps = this._cache.data || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const metas = this.getMatchingVisibleMetas();
    if (this._normalized && metas.length) {
      return (this._cache.data = metas[0].controller.getAllParsedValues(this));
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
    }
    return (this._cache.data = this.normalize(timestamps));
  }
  getLabelTimestamps() {
    const timestamps = this._cache.labels || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const labels = this.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(this, labels[i]));
    }
    return (this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps));
  }
  normalize(values) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._)(values.sort(sorter));
  }
}
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      ({lo, hi} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(table, 'pos', val));
    }
    ({pos: prevSource, time: prevTarget} = table[lo]);
    ({pos: nextSource, time: nextTarget} = table[hi]);
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      ({lo, hi} = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(table, 'time', val));
    }
    ({time: prevSource, pos: prevTarget} = table[lo]);
    ({time: nextSource, pos: nextTarget} = table[hi]);
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
  constructor(props) {
    super(props);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const timestamps = this._getTimestampsForTable();
    const table = this._table = this.buildLookupTable(timestamps);
    this._minPos = interpolate(table, this.min);
    this._tableRange = interpolate(table, this.max) - this._minPos;
    super.initOffsets(timestamps);
  }
  buildLookupTable(timestamps) {
    const {min, max} = this;
    const items = [];
    const table = [];
    let i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [
        {time: min, pos: 0},
        {time: max, pos: 1}
      ];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({time: curr, pos: i / (ilen - 1)});
      }
    }
    return table;
  }
  _getTimestampsForTable() {
    let timestamps = this._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    const data = this.getDataTimestamps();
    const label = this.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = this.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = this._cache.all = timestamps;
    return timestamps;
  }
  getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
  }
}
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
  controllers,
  elements,
  plugins,
  scales,
];




/***/ }),
/* 18 */
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLUGIN_BASE_URL": () => (/* binding */ PLUGIN_BASE_URL),
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES),
/* harmony export */   "NAVIGATION_TITLE": () => (/* binding */ NAVIGATION_TITLE),
/* harmony export */   "NAVIGATION_SUBTITLE": () => (/* binding */ NAVIGATION_SUBTITLE),
/* harmony export */   "NAVIGATION": () => (/* binding */ NAVIGATION)
/* harmony export */ });
/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.json */ 40);

var PLUGIN_BASE_URL = "/a/".concat(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id);
var ROUTES;

(function (ROUTES) {
  ROUTES["Dashboard"] = "dashboard";
  ROUTES["ProjectWise"] = "project-wise";
  ROUTES["ResourceWiseViewAllTasks"] = "ResourceWiseViewAllTasks";
})(ROUTES || (ROUTES = {}));

var NAVIGATION_TITLE = 'Basic App Plugin';
var NAVIGATION_SUBTITLE = 'Some extra description...'; // Add a navigation item for each route you would like to display in the navigation bar

var NAVIGATION = {};

/***/ }),
/* 19 */
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/*!**************************************!*\
  !*** ./css/workflowengine.light.css ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./workflowengine.light.css */ 11);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 21 */
/*!*************************************!*\
  !*** ./css/workflowengine.dark.css ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./workflowengine.dark.css */ 12);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 22 */
/*!***************************************************************!*\
  !*** ../node_modules/chart.js/dist/chunks/helpers.segment.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ _toLeftRightCenter),
/* harmony export */   "A": () => (/* binding */ _rlookupByKey),
/* harmony export */   "B": () => (/* binding */ getAngleFromPoint),
/* harmony export */   "C": () => (/* binding */ toPadding),
/* harmony export */   "D": () => (/* binding */ each),
/* harmony export */   "E": () => (/* binding */ getMaximumSize),
/* harmony export */   "F": () => (/* binding */ _getParentNode),
/* harmony export */   "G": () => (/* binding */ readUsedSize),
/* harmony export */   "H": () => (/* binding */ HALF_PI),
/* harmony export */   "I": () => (/* binding */ throttled),
/* harmony export */   "J": () => (/* binding */ supportsEventListenerOptions),
/* harmony export */   "K": () => (/* binding */ _isDomSupported),
/* harmony export */   "L": () => (/* binding */ log10),
/* harmony export */   "M": () => (/* binding */ _factorize),
/* harmony export */   "N": () => (/* binding */ finiteOrDefault),
/* harmony export */   "O": () => (/* binding */ callback),
/* harmony export */   "P": () => (/* binding */ PI),
/* harmony export */   "Q": () => (/* binding */ _addGrace),
/* harmony export */   "R": () => (/* binding */ toDegrees),
/* harmony export */   "S": () => (/* binding */ _measureText),
/* harmony export */   "T": () => (/* binding */ TAU),
/* harmony export */   "U": () => (/* binding */ _int16Range),
/* harmony export */   "V": () => (/* binding */ _alignPixel),
/* harmony export */   "W": () => (/* binding */ clipArea),
/* harmony export */   "X": () => (/* binding */ renderText),
/* harmony export */   "Y": () => (/* binding */ unclipArea),
/* harmony export */   "Z": () => (/* binding */ toFont),
/* harmony export */   "_": () => (/* binding */ _arrayUnique),
/* harmony export */   "a": () => (/* binding */ resolve),
/* harmony export */   "a$": () => (/* binding */ _angleDiff),
/* harmony export */   "a0": () => (/* binding */ _alignStartEnd),
/* harmony export */   "a1": () => (/* binding */ overrides),
/* harmony export */   "a2": () => (/* binding */ merge),
/* harmony export */   "a3": () => (/* binding */ _capitalize),
/* harmony export */   "a4": () => (/* binding */ descriptors),
/* harmony export */   "a5": () => (/* binding */ isFunction),
/* harmony export */   "a6": () => (/* binding */ _attachContext),
/* harmony export */   "a7": () => (/* binding */ _createResolver),
/* harmony export */   "a8": () => (/* binding */ _descriptors),
/* harmony export */   "a9": () => (/* binding */ mergeIf),
/* harmony export */   "aA": () => (/* binding */ restoreTextDirection),
/* harmony export */   "aB": () => (/* binding */ noop),
/* harmony export */   "aC": () => (/* binding */ distanceBetweenPoints),
/* harmony export */   "aD": () => (/* binding */ _setMinAndMaxByKey),
/* harmony export */   "aE": () => (/* binding */ niceNum),
/* harmony export */   "aF": () => (/* binding */ almostWhole),
/* harmony export */   "aG": () => (/* binding */ almostEquals),
/* harmony export */   "aH": () => (/* binding */ _decimalPlaces),
/* harmony export */   "aI": () => (/* binding */ _longestText),
/* harmony export */   "aJ": () => (/* binding */ _filterBetween),
/* harmony export */   "aK": () => (/* binding */ _lookup),
/* harmony export */   "aL": () => (/* binding */ getHoverColor),
/* harmony export */   "aM": () => (/* binding */ clone$1),
/* harmony export */   "aN": () => (/* binding */ _merger),
/* harmony export */   "aO": () => (/* binding */ _mergerIf),
/* harmony export */   "aP": () => (/* binding */ _deprecated),
/* harmony export */   "aQ": () => (/* binding */ toFontString),
/* harmony export */   "aR": () => (/* binding */ splineCurve),
/* harmony export */   "aS": () => (/* binding */ splineCurveMonotone),
/* harmony export */   "aT": () => (/* binding */ getStyle),
/* harmony export */   "aU": () => (/* binding */ fontString),
/* harmony export */   "aV": () => (/* binding */ toLineHeight),
/* harmony export */   "aW": () => (/* binding */ PITAU),
/* harmony export */   "aX": () => (/* binding */ INFINITY),
/* harmony export */   "aY": () => (/* binding */ RAD_PER_DEG),
/* harmony export */   "aZ": () => (/* binding */ QUARTER_PI),
/* harmony export */   "a_": () => (/* binding */ TWO_THIRDS_PI),
/* harmony export */   "aa": () => (/* binding */ uid),
/* harmony export */   "ab": () => (/* binding */ debounce),
/* harmony export */   "ac": () => (/* binding */ retinaScale),
/* harmony export */   "ad": () => (/* binding */ clearCanvas),
/* harmony export */   "ae": () => (/* binding */ setsEqual),
/* harmony export */   "af": () => (/* binding */ _elementsEqual),
/* harmony export */   "ag": () => (/* binding */ _isClickEvent),
/* harmony export */   "ah": () => (/* binding */ _isBetween),
/* harmony export */   "ai": () => (/* binding */ _readValueToProps),
/* harmony export */   "aj": () => (/* binding */ _updateBezierControlPoints),
/* harmony export */   "ak": () => (/* binding */ _computeSegments),
/* harmony export */   "al": () => (/* binding */ _boundSegments),
/* harmony export */   "am": () => (/* binding */ _steppedInterpolation),
/* harmony export */   "an": () => (/* binding */ _bezierInterpolation),
/* harmony export */   "ao": () => (/* binding */ _pointInLine),
/* harmony export */   "ap": () => (/* binding */ _steppedLineTo),
/* harmony export */   "aq": () => (/* binding */ _bezierCurveTo),
/* harmony export */   "ar": () => (/* binding */ drawPoint),
/* harmony export */   "as": () => (/* binding */ addRoundedRectPath),
/* harmony export */   "at": () => (/* binding */ toTRBL),
/* harmony export */   "au": () => (/* binding */ toTRBLCorners),
/* harmony export */   "av": () => (/* binding */ _boundSegment),
/* harmony export */   "aw": () => (/* binding */ _normalizeAngle),
/* harmony export */   "ax": () => (/* binding */ getRtlAdapter),
/* harmony export */   "ay": () => (/* binding */ overrideTextDirection),
/* harmony export */   "az": () => (/* binding */ _textX),
/* harmony export */   "b": () => (/* binding */ isArray),
/* harmony export */   "c": () => (/* binding */ color),
/* harmony export */   "d": () => (/* binding */ defaults),
/* harmony export */   "e": () => (/* binding */ effects),
/* harmony export */   "f": () => (/* binding */ resolveObjectKey),
/* harmony export */   "g": () => (/* binding */ isNumberFinite),
/* harmony export */   "h": () => (/* binding */ createContext),
/* harmony export */   "i": () => (/* binding */ isObject),
/* harmony export */   "j": () => (/* binding */ defined),
/* harmony export */   "k": () => (/* binding */ isNullOrUndef),
/* harmony export */   "l": () => (/* binding */ listenArrayEvents),
/* harmony export */   "m": () => (/* binding */ toPercentage),
/* harmony export */   "n": () => (/* binding */ toDimension),
/* harmony export */   "o": () => (/* binding */ formatNumber),
/* harmony export */   "p": () => (/* binding */ _angleBetween),
/* harmony export */   "q": () => (/* binding */ isNumber),
/* harmony export */   "r": () => (/* binding */ requestAnimFrame),
/* harmony export */   "s": () => (/* binding */ sign),
/* harmony export */   "t": () => (/* binding */ toRadians),
/* harmony export */   "u": () => (/* binding */ unlistenArrayEvents),
/* harmony export */   "v": () => (/* binding */ valueOrDefault),
/* harmony export */   "w": () => (/* binding */ _limitValue),
/* harmony export */   "x": () => (/* binding */ _lookupByKey),
/* harmony export */   "y": () => (/* binding */ getRelativePosition),
/* harmony export */   "z": () => (/* binding */ _isPointInArea)
/* harmony export */ });
/*!
 * Chart.js v3.7.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
const requestAnimFrame = (function() {
  if (typeof window === 'undefined') {
    return function(callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}());
function throttled(fn, thisArg, updateFn) {
  const updateArgs = updateFn || ((args) => Array.prototype.slice.call(args));
  let ticking = false;
  let args = [];
  return function(...rest) {
    args = updateArgs(rest);
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
const _toLeftRightCenter = (align) => align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
const _alignStartEnd = (align, start, end) => align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
const _textX = (align, left, right, rtl) => {
  const check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};

function noop() {}
const uid = (function() {
  let id = 0;
  return function() {
    return id++;
  };
}());
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
const isNumberFinite = (value) => (typeof value === 'number' || value instanceof Number) && isFinite(+value);
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100
    : value / dimension;
const toDimension = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100 * dimension
    : +value;
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
function clone$1(source) {
  if (isArray(source)) {
    return source.map(clone$1);
  }
  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone$1(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    merge(tval, sval, options);
  } else {
    target[key] = clone$1(sval);
  }
}
function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  const merger = options.merger || _merger;
  for (let i = 0; i < ilen; ++i) {
    source = sources[i];
    if (!isObject(source)) {
      continue;
    }
    const keys = Object.keys(source);
    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, source, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  return merge(target, source, {merger: _mergerIf});
}
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone$1(sval);
  }
}
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous +
			'" is deprecated. Please use "' + current + '" instead');
  }
}
const emptyString = '';
const dot = '.';
function indexOfDotOrLength(key, start) {
  const idx = key.indexOf(dot, start);
  return idx === -1 ? key.length : idx;
}
function resolveObjectKey(obj, key) {
  if (key === emptyString) {
    return obj;
  }
  let pos = 0;
  let idx = indexOfDotOrLength(key, pos);
  while (obj && idx > pos) {
    obj = obj[key.substr(pos, idx - pos)];
    pos = idx + 1;
    idx = indexOfDotOrLength(key, pos);
  }
  return obj;
}
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value) => typeof value !== 'undefined';
const isFunction = (value) => typeof value === 'function';
const setsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
};
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function niceNum(range) {
  const roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort((a, b) => a - b).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
}
function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  let e = 1;
  let p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < (-0.5 * PI)) {
    angle += TAU;
  }
  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);
  const s = _normalizeAngle(start);
  const e = _normalizeAngle(end);
  const angleToStart = _normalizeAngle(s - a);
  const angleToEnd = _normalizeAngle(e - a);
  const startToAngle = _normalizeAngle(a - s);
  const endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || (sameAngleIsFullCircle && s === e)
    || (angleToStart > angleToEnd && startToAngle < endToAngle);
}
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
function _isBetween(value, start, end, epsilon = 1e-6) {
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}

const atEdge = (t) => t === 0 || t === 1;
const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
const effects = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t
    : -0.5 * ((--t) * (t - 2) - 1),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t
    : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t
    : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t * t
    : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: t => -Math.cos(t * HALF_PI) + 1,
  easeOutSine: t => Math.sin(t * HALF_PI),
  easeInOutSine: t => -0.5 * (Math.cos(PI * t) - 1),
  easeInExpo: t => (t === 0) ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: t => atEdge(t) ? t : t < 0.5
    ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
    : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: t => (t >= 1) ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => ((t /= 0.5) < 1)
    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: t => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
  easeOutElastic: t => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t :
      t < 0.5
        ? 0.5 * elasticIn(t * 2, s, p)
        : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    let s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
  },
  easeInBounce: t => 1 - effects.easeOutBounce(1 - t),
  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;
    if (t < (1 / d)) {
      return m * t * t;
    }
    if (t < (2 / d)) {
      return m * (t -= (1.5 / d)) * t + 0.75;
    }
    if (t < (2.5 / d)) {
      return m * (t -= (2.25 / d)) * t + 0.9375;
    }
    return m * (t -= (2.625 / d)) * t + 0.984375;
  },
  easeInOutBounce: t => (t < 0.5)
    ? effects.easeInBounce(t * 2) * 0.5
    : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
};

/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */
const map = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
const hex = '0123456789ABCDEF';
const h1 = (b) => hex[b & 0xF];
const h2 = (b) => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b) => (((b & 0xF0) >> 4) === (b & 0xF));
function isShort(v) {
	return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
}
function hexParse(str) {
	var len = str.length;
	var ret;
	if (str[0] === '#') {
		if (len === 4 || len === 5) {
			ret = {
				r: 255 & map[str[1]] * 17,
				g: 255 & map[str[2]] * 17,
				b: 255 & map[str[3]] * 17,
				a: len === 5 ? map[str[4]] * 17 : 255
			};
		} else if (len === 7 || len === 9) {
			ret = {
				r: map[str[1]] << 4 | map[str[2]],
				g: map[str[3]] << 4 | map[str[4]],
				b: map[str[5]] << 4 | map[str[6]],
				a: len === 9 ? (map[str[7]] << 4 | map[str[8]]) : 255
			};
		}
	}
	return ret;
}
function hexString(v) {
	var f = isShort(v) ? h1 : h2;
	return v
		? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '')
		: v;
}
function round(v) {
	return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
	return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
	return lim(round(v * 255), 0, 255);
}
function b2n(v) {
	return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
	return lim(round(v * 100), 0, 100);
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
	const m = RGB_RE.exec(str);
	let a = 255;
	let r, g, b;
	if (!m) {
		return;
	}
	if (m[7] !== r) {
		const v = +m[7];
		a = 255 & (m[8] ? p2b(v) : v * 255);
	}
	r = +m[1];
	g = +m[3];
	b = +m[5];
	r = 255 & (m[2] ? p2b(r) : r);
	g = 255 & (m[4] ? p2b(g) : g);
	b = 255 & (m[6] ? p2b(b) : b);
	return {
		r: r,
		g: g,
		b: b,
		a: a
	};
}
function rgbString(v) {
	return v && (
		v.a < 255
			? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
			: `rgb(${v.r}, ${v.g}, ${v.b})`
	);
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
	const a = s * Math.min(l, 1 - l);
	const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
	const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
	const rgb = hsl2rgbn(h, 1, 0.5);
	let i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}
function rgb2hsl(v) {
	const range = 255;
	const r = v.r / range;
	const g = v.g / range;
	const b = v.b / range;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h, s, d;
	if (max !== min) {
		d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		h = max === r
			? ((g - b) / d) + (g < b ? 6 : 0)
			: max === g
				? (b - r) / d + 2
				: (r - g) / d + 4;
		h = h * 60 + 0.5;
	}
	return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
	return (
		Array.isArray(a)
			? f(a[0], a[1], a[2])
			: f(a, b, c)
	).map(n2b);
}
function hsl2rgb(h, s, l) {
	return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
	return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
	return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
	return (h % 360 + 360) % 360;
}
function hueParse(str) {
	const m = HUE_RE.exec(str);
	let a = 255;
	let v;
	if (!m) {
		return;
	}
	if (m[5] !== v) {
		a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
	}
	const h = hue(+m[2]);
	const p1 = +m[3] / 100;
	const p2 = +m[4] / 100;
	if (m[1] === 'hwb') {
		v = hwb2rgb(h, p1, p2);
	} else if (m[1] === 'hsv') {
		v = hsv2rgb(h, p1, p2);
	} else {
		v = hsl2rgb(h, p1, p2);
	}
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a: a
	};
}
function rotate(v, deg) {
	var h = rgb2hsl(v);
	h[0] = hue(h[0] + deg);
	h = hsl2rgb(h);
	v.r = h[0];
	v.g = h[1];
	v.b = h[2];
}
function hslString(v) {
	if (!v) {
		return;
	}
	const a = rgb2hsl(v);
	const h = a[0];
	const s = n2p(a[1]);
	const l = n2p(a[2]);
	return v.a < 255
		? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`
		: `hsl(${h}, ${s}%, ${l}%)`;
}
const map$1 = {
	x: 'dark',
	Z: 'light',
	Y: 're',
	X: 'blu',
	W: 'gr',
	V: 'medium',
	U: 'slate',
	A: 'ee',
	T: 'ol',
	S: 'or',
	B: 'ra',
	C: 'lateg',
	D: 'ights',
	R: 'in',
	Q: 'turquois',
	E: 'hi',
	P: 'ro',
	O: 'al',
	N: 'le',
	M: 'de',
	L: 'yello',
	F: 'en',
	K: 'ch',
	G: 'arks',
	H: 'ea',
	I: 'ightg',
	J: 'wh'
};
const names = {
	OiceXe: 'f0f8ff',
	antiquewEte: 'faebd7',
	aqua: 'ffff',
	aquamarRe: '7fffd4',
	azuY: 'f0ffff',
	beige: 'f5f5dc',
	bisque: 'ffe4c4',
	black: '0',
	blanKedOmond: 'ffebcd',
	Xe: 'ff',
	XeviTet: '8a2be2',
	bPwn: 'a52a2a',
	burlywood: 'deb887',
	caMtXe: '5f9ea0',
	KartYuse: '7fff00',
	KocTate: 'd2691e',
	cSO: 'ff7f50',
	cSnflowerXe: '6495ed',
	cSnsilk: 'fff8dc',
	crimson: 'dc143c',
	cyan: 'ffff',
	xXe: '8b',
	xcyan: '8b8b',
	xgTMnPd: 'b8860b',
	xWay: 'a9a9a9',
	xgYF: '6400',
	xgYy: 'a9a9a9',
	xkhaki: 'bdb76b',
	xmagFta: '8b008b',
	xTivegYF: '556b2f',
	xSange: 'ff8c00',
	xScEd: '9932cc',
	xYd: '8b0000',
	xsOmon: 'e9967a',
	xsHgYF: '8fbc8f',
	xUXe: '483d8b',
	xUWay: '2f4f4f',
	xUgYy: '2f4f4f',
	xQe: 'ced1',
	xviTet: '9400d3',
	dAppRk: 'ff1493',
	dApskyXe: 'bfff',
	dimWay: '696969',
	dimgYy: '696969',
	dodgerXe: '1e90ff',
	fiYbrick: 'b22222',
	flSOwEte: 'fffaf0',
	foYstWAn: '228b22',
	fuKsia: 'ff00ff',
	gaRsbSo: 'dcdcdc',
	ghostwEte: 'f8f8ff',
	gTd: 'ffd700',
	gTMnPd: 'daa520',
	Way: '808080',
	gYF: '8000',
	gYFLw: 'adff2f',
	gYy: '808080',
	honeyMw: 'f0fff0',
	hotpRk: 'ff69b4',
	RdianYd: 'cd5c5c',
	Rdigo: '4b0082',
	ivSy: 'fffff0',
	khaki: 'f0e68c',
	lavFMr: 'e6e6fa',
	lavFMrXsh: 'fff0f5',
	lawngYF: '7cfc00',
	NmoncEffon: 'fffacd',
	ZXe: 'add8e6',
	ZcSO: 'f08080',
	Zcyan: 'e0ffff',
	ZgTMnPdLw: 'fafad2',
	ZWay: 'd3d3d3',
	ZgYF: '90ee90',
	ZgYy: 'd3d3d3',
	ZpRk: 'ffb6c1',
	ZsOmon: 'ffa07a',
	ZsHgYF: '20b2aa',
	ZskyXe: '87cefa',
	ZUWay: '778899',
	ZUgYy: '778899',
	ZstAlXe: 'b0c4de',
	ZLw: 'ffffe0',
	lime: 'ff00',
	limegYF: '32cd32',
	lRF: 'faf0e6',
	magFta: 'ff00ff',
	maPon: '800000',
	VaquamarRe: '66cdaa',
	VXe: 'cd',
	VScEd: 'ba55d3',
	VpurpN: '9370db',
	VsHgYF: '3cb371',
	VUXe: '7b68ee',
	VsprRggYF: 'fa9a',
	VQe: '48d1cc',
	VviTetYd: 'c71585',
	midnightXe: '191970',
	mRtcYam: 'f5fffa',
	mistyPse: 'ffe4e1',
	moccasR: 'ffe4b5',
	navajowEte: 'ffdead',
	navy: '80',
	Tdlace: 'fdf5e6',
	Tive: '808000',
	TivedBb: '6b8e23',
	Sange: 'ffa500',
	SangeYd: 'ff4500',
	ScEd: 'da70d6',
	pOegTMnPd: 'eee8aa',
	pOegYF: '98fb98',
	pOeQe: 'afeeee',
	pOeviTetYd: 'db7093',
	papayawEp: 'ffefd5',
	pHKpuff: 'ffdab9',
	peru: 'cd853f',
	pRk: 'ffc0cb',
	plum: 'dda0dd',
	powMrXe: 'b0e0e6',
	purpN: '800080',
	YbeccapurpN: '663399',
	Yd: 'ff0000',
	Psybrown: 'bc8f8f',
	PyOXe: '4169e1',
	saddNbPwn: '8b4513',
	sOmon: 'fa8072',
	sandybPwn: 'f4a460',
	sHgYF: '2e8b57',
	sHshell: 'fff5ee',
	siFna: 'a0522d',
	silver: 'c0c0c0',
	skyXe: '87ceeb',
	UXe: '6a5acd',
	UWay: '708090',
	UgYy: '708090',
	snow: 'fffafa',
	sprRggYF: 'ff7f',
	stAlXe: '4682b4',
	tan: 'd2b48c',
	teO: '8080',
	tEstN: 'd8bfd8',
	tomato: 'ff6347',
	Qe: '40e0d0',
	viTet: 'ee82ee',
	JHt: 'f5deb3',
	wEte: 'ffffff',
	wEtesmoke: 'f5f5f5',
	Lw: 'ffff00',
	LwgYF: '9acd32'
};
function unpack() {
	const unpacked = {};
	const keys = Object.keys(names);
	const tkeys = Object.keys(map$1);
	let i, j, k, ok, nk;
	for (i = 0; i < keys.length; i++) {
		ok = nk = keys[i];
		for (j = 0; j < tkeys.length; j++) {
			k = tkeys[j];
			nk = nk.replace(k, map$1[k]);
		}
		k = parseInt(names[ok], 16);
		unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
	}
	return unpacked;
}
let names$1;
function nameParse(str) {
	if (!names$1) {
		names$1 = unpack();
		names$1.transparent = [0, 0, 0, 0];
	}
	const a = names$1[str.toLowerCase()];
	return a && {
		r: a[0],
		g: a[1],
		b: a[2],
		a: a.length === 4 ? a[3] : 255
	};
}
function modHSL(v, i, ratio) {
	if (v) {
		let tmp = rgb2hsl(v);
		tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
		tmp = hsl2rgb(tmp);
		v.r = tmp[0];
		v.g = tmp[1];
		v.b = tmp[2];
	}
}
function clone(v, proto) {
	return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
	var v = {r: 0, g: 0, b: 0, a: 255};
	if (Array.isArray(input)) {
		if (input.length >= 3) {
			v = {r: input[0], g: input[1], b: input[2], a: 255};
			if (input.length > 3) {
				v.a = n2b(input[3]);
			}
		}
	} else {
		v = clone(input, {r: 0, g: 0, b: 0, a: 1});
		v.a = n2b(v.a);
	}
	return v;
}
function functionParse(str) {
	if (str.charAt(0) === 'r') {
		return rgbParse(str);
	}
	return hueParse(str);
}
class Color {
	constructor(input) {
		if (input instanceof Color) {
			return input;
		}
		const type = typeof input;
		let v;
		if (type === 'object') {
			v = fromObject(input);
		} else if (type === 'string') {
			v = hexParse(input) || nameParse(input) || functionParse(input);
		}
		this._rgb = v;
		this._valid = !!v;
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var v = clone(this._rgb);
		if (v) {
			v.a = b2n(v.a);
		}
		return v;
	}
	set rgb(obj) {
		this._rgb = fromObject(obj);
	}
	rgbString() {
		return this._valid ? rgbString(this._rgb) : this._rgb;
	}
	hexString() {
		return this._valid ? hexString(this._rgb) : this._rgb;
	}
	hslString() {
		return this._valid ? hslString(this._rgb) : this._rgb;
	}
	mix(color, weight) {
		const me = this;
		if (color) {
			const c1 = me.rgb;
			const c2 = color.rgb;
			let w2;
			const p = weight === w2 ? 0.5 : weight;
			const w = 2 * p - 1;
			const a = c1.a - c2.a;
			const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			w2 = 1 - w1;
			c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
			c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
			c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
			c1.a = p * c1.a + (1 - p) * c2.a;
			me.rgb = c1;
		}
		return me;
	}
	clone() {
		return new Color(this.rgb);
	}
	alpha(a) {
		this._rgb.a = n2b(a);
		return this;
	}
	clearer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 - ratio;
		return this;
	}
	greyscale() {
		const rgb = this._rgb;
		const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
		rgb.r = rgb.g = rgb.b = val;
		return this;
	}
	opaquer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 + ratio;
		return this;
	}
	negate() {
		const v = this._rgb;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}
	lighten(ratio) {
		modHSL(this._rgb, 2, ratio);
		return this;
	}
	darken(ratio) {
		modHSL(this._rgb, 2, -ratio);
		return this;
	}
	saturate(ratio) {
		modHSL(this._rgb, 1, ratio);
		return this;
	}
	desaturate(ratio) {
		modHSL(this._rgb, 1, -ratio);
		return this;
	}
	rotate(deg) {
		rotate(this._rgb, deg);
		return this;
	}
}
function index_esm(input) {
	return new Color(input);
}

const isPatternOrGradient = (value) => value instanceof CanvasGradient || value instanceof CanvasPattern;
function color(value) {
  return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value)
    ? value
    : index_esm(value).saturate(0.5).darken(0.1).hexString();
}

const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
class Defaults {
  constructor(_descriptors) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = [
      'mousemove',
      'mouseout',
      'click',
      'touchstart',
      'touchmove'
    ];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
    this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
    this.hoverColor = (ctx, options) => getHoverColor(options.color);
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
  }
  set(scope, values) {
    return set(this, scope, values);
  }
  get(scope) {
    return getScope$1(this, scope);
  }
  describe(scope, values) {
    return set(descriptors, scope, values);
  }
  override(scope, values) {
    return set(overrides, scope, values);
  }
  route(scope, name, targetScope, targetName) {
    const scopeObject = getScope$1(this, scope);
    const targetScopeObject = getScope$1(this, targetScope);
    const privateName = '_' + name;
    Object.defineProperties(scopeObject, {
      [privateName]: {
        value: scopeObject[name],
        writable: true
      },
      [name]: {
        enumerable: true,
        get() {
          const local = this[privateName];
          const target = targetScopeObject[targetName];
          if (isObject(local)) {
            return Object.assign({}, target, local);
          }
          return valueOrDefault(local, target);
        },
        set(value) {
          this[privateName] = value;
        }
      }
    });
  }
}
var defaults = new Defaults({
  _scriptable: (name) => !name.startsWith('on'),
  _indexable: (name) => name !== 'events',
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false,
  }
});

function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}
function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  const gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  let type, xOffset, yOffset, size, cornerRadius;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
  default:
    ctx.arc(x, y, radius, 0, TAU);
    ctx.closePath();
    break;
  case 'triangle':
    ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    ctx.closePath();
    break;
  case 'rectRounded':
    cornerRadius = radius * 0.516;
    size = radius - cornerRadius;
    xOffset = Math.cos(rad + QUARTER_PI) * size;
    yOffset = Math.sin(rad + QUARTER_PI) * size;
    ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
    ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
    ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
    ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
    ctx.closePath();
    break;
  case 'rect':
    if (!rotation) {
      size = Math.SQRT1_2 * radius;
      ctx.rect(x - size, y - size, 2 * size, 2 * size);
      break;
    }
    rad += QUARTER_PI;
  case 'rectRot':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + yOffset, y - xOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    ctx.closePath();
    break;
  case 'crossRot':
    rad += QUARTER_PI;
  case 'cross':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'star':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    rad += QUARTER_PI;
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'line':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    break;
  case 'dash':
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
    break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5;
  return !area || (point && point.x > area.left - margin && point.x < area.right + margin &&
		point.y > area.top - margin && point.y < area.bottom + margin);
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(
    flip ? previous.cp1x : previous.cp2x,
    flip ? previous.cp1y : previous.cp2y,
    flip ? target.cp2x : target.cp1x,
    flip ? target.cp2y : target.cp1y,
    target.x,
    target.y);
}
function renderText(ctx, text, x, y, font, opts = {}) {
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += font.lineHeight;
  }
  ctx.restore();
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    const metrics = ctx.measureText(line);
    const left = x - metrics.actualBoundingBoxLeft;
    const right = x + metrics.actualBoundingBoxRight;
    const top = y - metrics.actualBoundingBoxAscent;
    const bottom = y + metrics.actualBoundingBoxDescent;
    const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function addRoundedRectPath(ctx, rect) {
  const {x, y, w, h, radius} = rect;
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
  ctx.lineTo(x, y + h - radius.bottomLeft);
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  ctx.lineTo(x + w, y + radius.topRight);
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  ctx.lineTo(x + radius.topLeft, y);
}

const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
  case 'px':
    return value;
  case '%':
    value /= 100;
    break;
  }
  return size * value;
}
const numberOrZero = v => +v || 0;
function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value)
    ? objProps
      ? prop => valueOrDefault(value[prop], value[props[prop]])
      : prop => value[prop]
    : () => value;
  for (const prop of keys) {
    ret[prop] = numberOrZero(read(prop));
  }
  return ret;
}
function toTRBL(value) {
  return _readValueToProps(value, {top: 'y', right: 'x', bottom: 'y', left: 'x'});
}
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  let style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = '';
  }
  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
function _addGrace(minmax, grace, beginAtZero) {
  const {min, max} = minmax;
  const change = toDimension(grace, (max - min) / 2);
  const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

function _lookup(table, value, cmp) {
  cmp = cmp || ((index) => table[index] < value);
  let hi = table.length - 1;
  let lo = 0;
  let mid;
  while (hi - lo > 1) {
    mid = (lo + hi) >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {lo, hi};
}
const _lookupByKey = (table, key, value) =>
  _lookup(table, value, index => table[index][key] < value);
const _rlookupByKey = (table, key, value) =>
  _lookup(table, value, index => table[index][key] >= value);
function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length
    ? values.slice(start, end)
    : values;
}
const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach((key) => {
    const method = '_onData' + _capitalize(key);
    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value(...args) {
        const res = base.apply(this, args);
        array._chartjs.listeners.forEach((object) => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;
  if (!stub) {
    return;
  }
  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach((key) => {
    delete array[key];
  });
  delete array._chartjs;
}
function _arrayUnique(items) {
  const set = new Set();
  let i, ilen;
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }
  if (set.size === ilen) {
    return items;
  }
  return Array.from(set);
}

function _createResolver(scopes, prefixes = [''], rootScopes = scopes, fallback, getTarget = () => scopes[0]) {
  if (!defined(fallback)) {
    fallback = _resolve('_fallback', scopes);
  }
  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: rootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: (scope) => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback),
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete target._keys;
      delete scopes[0][prop];
      return true;
    },
    get(target, prop) {
      return _cached(target, prop,
        () => _resolveWithPrefixes(prop, prefixes, scopes, target));
    },
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value;
      delete target._keys;
      return true;
    }
  });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
    override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete proxy[prop];
      return true;
    },
    get(target, prop, receiver) {
      return _cached(target, prop,
        () => _resolveWithContext(target, prop, receiver));
    },
    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys
        ? Reflect.has(proxy, prop) ? {enumerable: true, configurable: true} : undefined
        : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    set(target, prop, value) {
      proxy[prop] = value;
      delete target[prop];
      return true;
    }
  });
}
function _descriptors(proxy, defaults = {scriptable: true, indexable: true}) {
  const {_scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys} = proxy;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
    isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
  };
}
const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value) => isObject(value) && prop !== 'adapters' &&
  (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop)) {
    return target[prop];
  }
  const value = resolve();
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  let value = _proxy[prop];
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, value, target, receiver) {
  const {_proxy, _context, _subProxy, _stack} = target;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  value = value(_context, _subProxy || receiver);
  _stack.delete(prop);
  if (needsSubResolver(prop, value)) {
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  if (defined(_context.index) && isIndexable(prop)) {
    value = value[_context.index % value.length];
  } else if (isObject(value[0])) {
    const arr = value;
    const scopes = _proxy._scopes.filter(s => s !== arr);
    value = [];
    for (const item of arr) {
      const resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent) => key === true ? parent
  : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
  for (const parent of parentScopes) {
    const scope = getScope(key, parent);
    if (scope) {
      set.add(scope);
      const fallback = resolveFallback(scope._fallback, key, value);
      if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
        return fallback;
      }
    } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
      return null;
    }
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [...parentScopes, ...rootScopes];
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (defined(fallback) && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback,
    () => subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  const target = parent[prop];
  if (isArray(target) && isObject(value)) {
    return value;
  }
  return target;
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;
  for (const prefix of prefixes) {
    value = _resolve(readKey(prefix, prop), scopes);
    if (defined(value)) {
      return needsSubResolver(prop, value)
        ? createSubResolver(scopes, proxy, prop, value)
        : value;
    }
  }
}
function _resolve(key, scopes) {
  for (const scope of scopes) {
    if (!scope) {
      continue;
    }
    const value = scope[key];
    if (defined(value)) {
      return value;
    }
  }
}
function getKeysFromAllScopes(target) {
  let keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  const set = new Set();
  for (const scope of scopes) {
    for (const key of Object.keys(scope).filter(k => !k.startsWith('_'))) {
      set.add(key);
    }
  }
  return Array.from(set);
}

const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis) => indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01;
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}
function splineCurveMonotone(points, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i]
      : !pointAfter ? deltaK[i - 1]
      : (sign(deltaK[i - 1]) !== sign(deltaK[i])) ? 0
      : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;
  let inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;
  if (options.spanGaps) {
    points = points.filter((pt) => !pt.skip);
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(
        prev,
        point,
        points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen],
        options.tension
      );
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
function _getParentNode(domNode) {
  let parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
const getComputedStyle = (element) => window.getComputedStyle(element, null);
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
const positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';
  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
function getCanvasPosition(evt, canvas) {
  const e = evt.native || evt;
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const {offsetX, offsetY} = source;
  let box = false;
  let x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {x, y, box};
}
function getRelativePosition(evt, chart) {
  const {canvas, currentDevicePixelRatio} = chart;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const {x, y, box} = getCanvasPosition(evt, canvas);
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let {width, height} = chart;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect();
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
const round1 = v => Math.round(v * 10) / 10;
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let {width, height} = containerSize;
  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    height = round1(width / 2);
  }
  return {
    width,
    height
  };
}
function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = deviceHeight / pixelRatio;
  chart.width = deviceWidth / pixelRatio;
  const canvas = chart.canvas;
  if (canvas.style && (forceStyle || (!canvas.style.height && !canvas.style.width))) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }
  if (chart.currentDevicePixelRatio !== pixelRatio
      || canvas.height !== deviceHeight
      || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
const supportsEventListenerOptions = (function() {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
  }
  return passiveSupported;
}());
function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y
    : mode === 'after' ? t < 1 ? p1.y : p2.y
    : t > 0 ? p2.y : p1.y
  };
}
function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {x: p1.cp2x, y: p1.cp2y};
  const cp2 = {x: p2.cp1x, y: p2.cp1y};
  const a = _pointInLine(p1, cp1, t);
  const b = _pointInLine(cp1, cp2, t);
  const c = _pointInLine(cp2, p2, t);
  const d = _pointInLine(a, b, t);
  const e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}

const intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}

const getRightToLeftAdapter = function(rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    },
  };
};
const getLeftToRightAdapter = function() {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {
    },
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    },
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  let style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [
      style.getPropertyValue('direction'),
      style.getPropertyPriority('direction'),
    ];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}

function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle,
    };
  }
  return {
    between: _isBetween,
    compare: (a, b) => a - b,
    normalize: x => x
  };
}
function normalizeSegment({start, end, count, loop, style}) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}
function getSegment(segment, points, bounds) {
  const {property, start: startBound, end: endBound} = bounds;
  const {between, normalize} = propertyFn(property);
  const count = points.length;
  let {start, end, loop} = segment;
  let i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {start, end, loop, style: segment.style};
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  const {property, start: startBound, end: endBound} = bounds;
  const count = points.length;
  const {compare, between, normalize} = propertyFn(property);
  const {start, end, loop, style} = getSegment(segment, points, bounds);
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;
  const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
  const shouldStart = () => inside || startIsBefore();
  const shouldStop = () => !inside || endIsBefore();
  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({start: subStart, end: i, loop, count, style}));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({start: subStart, end, loop, count, style}));
  }
  return result;
}
function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;
  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push(...sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {start, end};
}
function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;
  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({start: start % count, end: (end - 1) % count, loop});
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({start: start % count, end: last % count, loop});
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;
  if (!count) {
    return [];
  }
  const loop = !!line._loop;
  const {start, end} = findStartAndEnd(points, count, loop, spanGaps);
  if (spanGaps === true) {
    return splitByStyles(line, [{start, end, loop}], points, segmentOptions);
  }
  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  const chartContext = line._chart.getContext();
  const baseStyle = readStyle(line.options);
  const {_datasetIndex: datasetIndex, options: {spanGaps}} = line;
  const count = points.length;
  const result = [];
  let prevStyle = baseStyle;
  let start = segments[0].start;
  let i = start;
  function addStyle(s, e, l, st) {
    const dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({start: s % count, end: e % count, loop: l, style: st});
      prevStyle = st;
      start = e % count;
    }
  }
  for (const segment of segments) {
    start = spanGaps ? start : segment.start;
    let prev = points[start % count];
    let style;
    for (i = start + 1; i <= segment.end; i++) {
      const pt = points[i % count];
      style = readStyle(segmentOptions.setContext(createContext(chartContext, {
        type: 'segment',
        p0: prev,
        p1: pt,
        p0DataIndex: (i - 1) % count,
        p1DataIndex: i % count,
        datasetIndex
      })));
      if (styleChanged(style, prevStyle)) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
      prev = pt;
      prevStyle = style;
    }
    if (start < i - 1) {
      addStyle(start, i - 1, segment.loop, prevStyle);
    }
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}




/***/ }),
/* 23 */
/*!********************************!*\
  !*** ./components/App/App.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_utils_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils.plugin */ 13);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Routes */ 30);





var App =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(utils_utils_plugin__WEBPACK_IMPORTED_MODULE_1__.PluginPropsContext.Provider, {
      value: this.props
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__.Routes, null));
  };

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);



/***/ }),
/* 24 */
/*!**************************************!*\
  !*** ./components/Routes/Routes.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 4);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/Dashboard */ 31);
/* harmony import */ var _pages_ProjectWise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/ProjectWise */ 33);
/* harmony import */ var _pages_ResourceWiseViewAllTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/ResourceWiseViewAllTasks */ 34);
/* harmony import */ var _utils_utils_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils.routing */ 39);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ 18);







var Routes = function () {
  (0,_utils_utils_routing__WEBPACK_IMPORTED_MODULE_5__.useNavigation)();
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: (0,_utils_utils_routing__WEBPACK_IMPORTED_MODULE_5__.prefixRoute)(_constants__WEBPACK_IMPORTED_MODULE_6__.ROUTES.Dashboard),
    component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_2__.Dashboard
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: (0,_utils_utils_routing__WEBPACK_IMPORTED_MODULE_5__.prefixRoute)(_constants__WEBPACK_IMPORTED_MODULE_6__.ROUTES.ProjectWise),
    component: _pages_ProjectWise__WEBPACK_IMPORTED_MODULE_3__.ProjectWise
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: (0,_utils_utils_routing__WEBPACK_IMPORTED_MODULE_5__.prefixRoute)(_constants__WEBPACK_IMPORTED_MODULE_6__.ROUTES.ResourceWiseViewAllTasks),
    component: _pages_ResourceWiseViewAllTasks__WEBPACK_IMPORTED_MODULE_4__.ResourceWiseViewAllTasks
  }));
};

/***/ }),
/* 25 */
/*!********************************************!*\
  !*** ./components/AppConfig/AppConfig.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig),
/* harmony export */   "updatePlugin": () => (/* binding */ updatePlugin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ 19);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ 42);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/css */ 43);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SecretInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SecretInput */ 44);






var AppConfig = function (_a) {
  var plugin = _a.plugin;
  var s = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  var _b = plugin.meta,
      enabled = _b.enabled,
      pinned = _b.pinned,
      jsonData = _b.jsonData;

  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    apiUrl: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.apiUrl) || '',
    apiKey: '',
    isApiKeySet: Boolean(jsonData === null || jsonData === void 0 ? void 0 : jsonData.isApiKeySet)
  }), 2),
      state = _c[0],
      setState = _c[1];

  var onResetApiKey = function () {
    return setState((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state), {
      apiKey: '',
      isApiKeySet: false
    }));
  };

  var onChangeApiKey = function (event) {
    setState((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state), {
      apiKey: event.target.value.trim()
    }));
  };

  var onChangeApiUrl = function (event) {
    setState((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state), {
      apiUrl: event.target.value.trim()
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
    label: "Enable / Disable"
  }, !enabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: s.colorWeak
  }, "The plugin is currently not enabled."), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: s.marginTop,
    variant: "primary",
    onClick: function () {
      return updatePluginAndReload(plugin.meta.id, {
        enabled: true,
        pinned: true,
        jsonData: jsonData
      });
    }
  }, "Enable plugin")), enabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: s.colorWeak
  }, "The plugin is currently enabled."), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: s.marginTop,
    variant: "destructive",
    onClick: function () {
      return updatePluginAndReload(plugin.meta.id, {
        enabled: false,
        pinned: false,
        jsonData: jsonData
      });
    }
  }, "Disable plugin"))), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
    label: "API Settings",
    className: s.marginTopXl
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
    label: "API Key",
    description: "A secret key for authenticating to our custom API"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecretInput__WEBPACK_IMPORTED_MODULE_4__.SecretInput, {
    width: 60,
    "data-testid": "api-key",
    id: "api-key",
    value: state === null || state === void 0 ? void 0 : state.apiKey,
    isConfigured: state.isApiKeySet,
    placeholder: 'Your secret API key',
    onChange: onChangeApiKey,
    onReset: onResetApiKey
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
    label: "API Url",
    description: "",
    className: s.marginTop
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    width: 60,
    id: "api-url",
    "data-testid": "api-url",
    label: "API Url",
    value: state === null || state === void 0 ? void 0 : state.apiUrl,
    placeholder: "E.g.: http://mywebsite.com/api/v1",
    onChange: onChangeApiUrl
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: s.marginTop
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit",
    onClick: function () {
      return updatePluginAndReload(plugin.meta.id, {
        enabled: enabled,
        pinned: pinned,
        jsonData: {
          apiUrl: state.apiUrl,
          isApiKeySet: true
        },
        // This cannot be queried later by the frontend.
        // We don't want to override it in case it was set previously and left untouched now.
        secureJsonData: state.isApiKeySet ? undefined : {
          apiKey: state.apiKey
        }
      });
    },
    disabled: Boolean(!state.apiUrl || !state.isApiKeySet && !state.apiKey)
  }, "Save API settings"))));
};

var getStyles = function (theme) {
  return {
    colorWeak: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.colors.text.secondary),
    marginTop: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(["\n    margin-top: ", ";\n  "], ["\n    margin-top: ", ";\n  "])), theme.spacing(3)),
    marginTopXl: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_3 || (templateObject_3 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(["\n    margin-top: ", ";\n  "], ["\n    margin-top: ", ";\n  "])), theme.spacing(6))
  };
};

var updatePluginAndReload = function (pluginId, data) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function () {
    var e_1;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , updatePlugin(pluginId, data)];

        case 1:
          _a.sent(); // Reloading the page as the changes made here wouldn't be propagated to the actual plugin otherwise.
          // This is not ideal, however unfortunately currently there is no supported way for updating the plugin state.


          _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.reload();
          return [3
          /*break*/
          , 3];

        case 2:
          e_1 = _a.sent();
          console.error('Error while updating the plugin', e_1);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var updatePlugin = function (pluginId, data) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function () {
    var response;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().datasourceRequest({
            url: "/api/plugins/".concat(pluginId, "/settings"),
            method: 'POST',
            data: data
          })];

        case 1:
          response = _a.sent();
          return [2
          /*return*/
          , response === null || response === void 0 ? void 0 : response.data];
      }
    });
  });
};
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),
/* 26 */
/*!************************************************!*\
  !*** ./components/SecretInput/SecretInput.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecretInput": () => (/* binding */ SecretInput)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ 19);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


 // This replaces the "LegacyForms.SecretFormField" component from @grafana/ui, so we can start using the newer form components.

var SecretInput = function (_a) {
  var isConfigured = _a.isConfigured,
      onReset = _a.onReset,
      props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["isConfigured", "onReset"]);

  if (isConfigured) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, {
      type: "text",
      disabled: true,
      value: "configured"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onReset,
      variant: "secondary"
    }, "Reset"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, {
    type: "password"
  }));
};

/***/ }),
/* 27 */,
/* 28 */
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),
/* 29 */
/*!**********************************!*\
  !*** ./components/App/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__.App)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ 23);


/***/ }),
/* 30 */
/*!*************************************!*\
  !*** ./components/Routes/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* reexport safe */ _Routes__WEBPACK_IMPORTED_MODULE_0__.Routes)
/* harmony export */ });
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes */ 24);


/***/ }),
/* 31 */
/*!***********************************!*\
  !*** ./pages/Dashboard/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Breadcrumbs */ 5);
/* harmony import */ var _img_rfp_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/rfp-img.png */ 32);
/* harmony import */ var _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/resources-user-img.png */ 6);
/* harmony import */ var _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/header-icon.png */ 14);




 // import DateFormat from './DateFormat';



var Dashboard =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Dashboard, _super);

  function Dashboard(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    _this.breadCrumbs = [{
      label: 'Home',
      route: "/"
    }, {
      label: 'Kubernetes | Overview',
      isCurrentPage: true
    }];
    return _this;
  }

  Dashboard.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "owrkflow-dashboard-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, {
      breadcrumbs: this.breadCrumbs,
      pageTitle: "WORKFLOW MANAGEMENT"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dashboard-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fliter-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, "Procurement Workflow management")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fliter-search"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fliter-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Fliter by"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Fliter by 1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Fliter by 2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Fliter by 3"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fliter-search-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: 'Search for...',
      className: "input-group-text",
      placeholder: 'Search for...'
    })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dashbord-top-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Lorem ipsum dolor sit amet"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-8"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "calender"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-rfp-boxs"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_rfp_img_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "215"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Today's RFP")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_rfp_img_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "26685"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total RFP")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mail-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-envelope"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "!")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "35"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Important Emails")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-img order"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "in-progress"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "complate-progress"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "completed"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "2,841"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Completed Orders")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "in-progrss"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "1.456"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "In-progrss Orders"))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "average-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "statistics-graph"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "d-block"
    }, 'Workflow Statistics')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-graph"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "statistics-graph"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "d-block"
    }, 'Project Overview')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "opensens-dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "opensens-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: ""
    }, "Monthly"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 10
    }, "abc"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 20
    }, "def"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 30
    }, "abc")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "meore-menu-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-ellipsis-v"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "totalpaid"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "paid-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Completed Task")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "paid-content unpaid"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Pending Task")))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-9"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-list"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-7"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Project List")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-5"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "tabs"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "active"
    }, "All Projects"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Completed"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "In Progress"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "projects"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project active"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box active"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-star"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-circle"
    }), " 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-list"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Resources"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "All Resources")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project - Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "plus-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-plus"
    }))))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-overview-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Project Overview")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Total Usecase"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Project Manager"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Assigned date"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Age"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Activity Logs"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Xformation"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "80"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Ganesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "15/02/2021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "7d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress"
    }, "In progress")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "View Logs"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Procurement"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "95"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/02/2021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pending"
    }, "Pending for review")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "View Logs"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Supply chail"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "70"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Zakir")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "15/02/2021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "7d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress"
    }, "In progress")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "View Logs"))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-overview-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Project Progress Overview")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table progress"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Reuirements"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Mock Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actual Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "CI/CD Test"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Staging/Release"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Publish/Operate"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      colSpan: 7
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Xformation"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Procurement"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Supply chail"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-allocation-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Project Wise Resource Allocation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-allocation"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "allocation-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Employee"))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-overview-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Rask wise Resource Progress Overview")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Resource Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Reuirements"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Mock Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actual Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "CI/CD Test"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Staging/Release"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Publish/Operate"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Siddhesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "4851232"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernets"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/022021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "completed"
    }, "Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Siddhesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "4851232"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernets"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/022021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress"
    }, "In progress"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Siddhesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "4851232"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernets"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/022021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "completed"
    }, "Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Siddhesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "4851232"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernets"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/022021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress"
    }, "In progress"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Siddhesh")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "4851232"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernets"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Akhila")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "17/022021"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "5d"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "completed"
    }, "Completed")))))))));
  };

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),
/* 32 */
/*!*************************!*\
  !*** ./img/rfp-img.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/rfp-img.png");

/***/ }),
/* 33 */
/*!*************************************!*\
  !*** ./pages/ProjectWise/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWise": () => (/* binding */ ProjectWise)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Breadcrumbs */ 5);
/* harmony import */ var _img_header_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/header-icon.png */ 14);
/* harmony import */ var _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/resources-user-img.png */ 6);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-circular-progressbar */ 15);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ 7);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ 8);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6__);






 // import SimpleBar from 'simplebar-react';



var ProjectWise =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__extends)(ProjectWise, _super);

  function ProjectWise(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      tcpInputs: [],
      openCreateMenu: false,
      streamTableData: [],
      indexSets: []
    };
    _this.breadCrumbs = [{
      label: 'Home',
      route: "/"
    }, {
      label: 'Kubernetes | Overview',
      isCurrentPage: true
    }];
    return _this;
  }

  ProjectWise.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "owrkflow-project-wise-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, {
      breadcrumbs: this.breadCrumbs,
      pageTitle: "WORKFLOW MANAGEMENT"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-page-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-page-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-10"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content-left"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_header_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Xformation Platform"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Last updated by Siddhesh D 24 min ago"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi...")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content-right"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-times",
      "aria-hidden": "true"
    })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-status"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "status-fliter"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row d-flex align-items-center justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-status-heading"
    }, "Project Status")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filler-search"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 3")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      className: "control-form",
      placeholder: "Search Usecase"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-search",
      "aria-hidden": "true"
    }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "thead"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Usecase "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Requirements"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Mock Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Actual Development"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "CI/CD Test"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Staging/Release"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th last"
    }, "Publish/Operate")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tbody"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 3"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 4"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange",
      "aria-hidden": "true"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 5"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 6"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check orange",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 7"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, "Usecase 8"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-check green",
      "aria-hidden": "true"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-resources"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-heading"
    }, "Project Resources"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-inner"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Project Manager"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Current Task-User Document"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"))))))));
  };

  return ProjectWise;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),
/* 34 */
/*!**************************************************!*\
  !*** ./pages/ResourceWiseViewAllTasks/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceWiseViewAllTasks": () => (/* binding */ ResourceWiseViewAllTasks)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Breadcrumbs */ 5);
/* harmony import */ var _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/resources-user-img.png */ 6);
/* harmony import */ var _img_resourse_icon1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/resourse-icon1.png */ 35);
/* harmony import */ var _img_resourse_icon2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/resourse-icon2.png */ 36);
/* harmony import */ var _img_resourse_icon3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/resourse-icon3.png */ 37);
/* harmony import */ var _img_card_arrow_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/card-arrow-icon.png */ 38);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-circular-progressbar */ 15);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ 7);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ 8);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ 45);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chart.js */ 17);









 //import SimpleBar from 'simplebar-react';




chart_js__WEBPACK_IMPORTED_MODULE_10__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_10__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_10__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_10__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_10__.Title, chart_js__WEBPACK_IMPORTED_MODULE_10__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_10__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_10__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_10__.LineElement);

var ResourceWiseViewAllTasks =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__extends)(ResourceWiseViewAllTasks, _super);

  function ResourceWiseViewAllTasks(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      tcpInputs: [],
      openCreateMenu: false,
      streamTableData: [],
      indexSets: [],
      humanResources: {
        total: null,
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        datasets: [{
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          lineTension: 0.2,
          backgroundColor: ['rgba(113, 234, 255, 21)' // 'rgba(255, 153, 0, 1)',
          // 'rgba(0, 137, 214, 1)',
          // 'rgba(216, 69, 57, 1)',
          ]
        }]
      },
      barOptions: {
        indexAxis: "x",
        plugins: {
          scales: {
            y: {
              ticks: {
                fontColor: 'black',
                stepSize: 10,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            },
            x: {
              ticks: {
                fontColor: 'black',
                display: false,
                stepSize: 10
              },
              gridLines: {
                display: false
              }
            }
          },
          legend: {
            display: false
          },
          title: {
            display: false,
            text: 'Total Cost: $6,71,246',
            position: 'bottom',
            color: '#202020',
            font: {
              size: 18
            }
          },
          responsive: true
        }
      }
    };
    _this.breadCrumbs = [{
      label: 'Home',
      route: "/"
    }, {
      label: 'Kubernetes | Overview',
      isCurrentPage: true
    }];
    return _this;
  }

  ResourceWiseViewAllTasks.prototype.render = function () {
    var _a = this.state,
        barOptions = _a.barOptions,
        humanResources = _a.humanResources;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "owrkflow-resource-wise-View-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, {
      breadcrumbs: this.breadCrumbs,
      pageTitle: "WORKFLOW MANAGEMENT"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-wise-View-page-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resource-wise-View-page-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-10"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content-left"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resources_user_img_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Angela Moss"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Project-Xformation")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-content-right"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-times",
      "aria-hidden": "true"
    })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-resources"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-12"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-heading"
    }, "Project"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-inner"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resourse_icon1_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Xformation Platform"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Role-Project Management"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-arrow-image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_card_arrow_icon_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: ""
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resourse_icon2_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Procurement Solution"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Role-Project Management"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-arrow-image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_card_arrow_icon_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: ""
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-resources-box"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_resourse_icon3_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-text"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "HRMS"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "resources-progress-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Role-Project Management"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task-  10")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-progressbar text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.CircularProgressbar, {
      value: 66,
      text: "80%",
      strokeWidth: 15,
      styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_7__.buildStyles)({
        strokeLinecap: {},
        trailColor: "#E5E7E9",
        pathColor: "#6317c2",
        textColor: "black"
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Task Completed"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-arrow-image"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _img_card_arrow_icon_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: ""
    }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-status"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading"
    }, "All Task"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row d-flex align-items-center justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "task-heading-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Role - Project Management"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Task- 10"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filler-search"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Sort by 3")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-4"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      className: "control-form",
      placeholder: "Search Usecase"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-search",
      "aria-hidden": "true"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-wise-table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "thead"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Task "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Project"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Release"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Stage"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Status"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th"
    }, "Duedate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "th last"
    }, "Duedate")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tbody"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 2"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 3"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 4"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 5"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 6"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 7"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 8"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 9"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tr"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td tast-content"
    }, "Task 10"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "2nd"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Publish/Oprate"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Completed  "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "25/02/2022"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "td project-content"
    }, "Xformation")))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "average-section"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-12"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "statistics-graph"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "d-block"
    }, 'Project Overview')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "requistions-dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "opensens-dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "opensens-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: ""
    }, "Monthly"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 10
    }, "abc"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 20
    }, "def"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: 30
    }, "abc")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "meore-menu-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-ellipsis-v"
    }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "totalpaid"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "paid-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Completed Task")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "paid-content unpaid"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Pending Task")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "chart"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Bar, {
      data: humanResources,
      options: barOptions,
      height: 70
    }))))))));
  };

  return ResourceWiseViewAllTasks;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),
/* 35 */
/*!********************************!*\
  !*** ./img/resourse-icon1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/resourse-icon1.png");

/***/ }),
/* 36 */
/*!********************************!*\
  !*** ./img/resourse-icon2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/resourse-icon2.png");

/***/ }),
/* 37 */
/*!********************************!*\
  !*** ./img/resourse-icon3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/resourse-icon3.png");

/***/ }),
/* 38 */
/*!*********************************!*\
  !*** ./img/card-arrow-icon.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("public/plugins/xformation-workflow-engine/img/img/card-arrow-icon.png");

/***/ }),
/* 39 */
/*!********************************!*\
  !*** ./utils/utils.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavigation": () => (/* binding */ useNavigation),
/* harmony export */   "prefixRoute": () => (/* binding */ prefixRoute),
/* harmony export */   "getNavModel": () => (/* binding */ getNavModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 4);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.plugin */ 13);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 18);




 // Displays a top navigation tab-bar if needed

function useNavigation() {
  var pluginProps = (0,_utils_plugin__WEBPACK_IMPORTED_MODULE_2__.usePluginProps)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!pluginProps) {
      console.error('Root plugin props are not available in the context.');
      return;
    }

    var activeId = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION).find(function (routeId) {
      return location.pathname.includes(routeId);
    }) || '';
    var activeNavItem = _constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION[activeId];
    var onNavChanged = pluginProps.onNavChanged,
        meta = pluginProps.meta,
        basename = pluginProps.basename; // Disable tab navigation
    // (the route is not registered as a navigation item)

    if (!activeNavItem) {
      onNavChanged(undefined);
    } // Show tabbed navigation with the active tab
    else {
      onNavChanged(getNavModel({
        activeId: activeId,
        basePath: basename,
        logoUrl: meta.info.logos.large
      }));
    }
  }, [location.pathname, pluginProps]);
} // Prefixes the route with the base URL of the plugin

function prefixRoute(route) {
  return "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.PLUGIN_BASE_URL, "/").concat(route);
}
function getNavModel(_a) {
  var activeId = _a.activeId,
      basePath = _a.basePath,
      logoUrl = _a.logoUrl;
  var main = {
    text: _constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION_TITLE,
    subTitle: _constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION_SUBTITLE,
    url: basePath,
    img: logoUrl,
    children: Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION).map(function (navItem) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, navItem), {
        active: navItem.id === activeId
      });
    })
  };
  return {
    main: main,
    node: main
  };
}

/***/ }),
/* 40 */
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://raw.githubusercontent.com/grafana/grafana/master/docs/sources/developers/plugins/plugin.schema.json","type":"app","name":"Workflow Engine","id":"xformation-workflow-engine","info":{"description":"Workflow Engine","author":{"name":"Synectiks"},"logos":{"small":"img/asset_logo.svg","large":"img/asset_logo.svg"},"screenshots":[],"version":"%VERSION%","updated":"%TODAY%"},"includes":[{"type":"page","name":"Dashboard","addToNav":false,"defaultNav":false,"role":"Admin","path":"/a/%PLUGIN_ID%"}],"dependencies":{"grafanaDependency":">=8.0.0","plugins":[]}}');

/***/ }),
/* 41 */
/*!****************************************!*\
  !*** ./components/AppConfig/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* reexport safe */ _AppConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig),
/* harmony export */   "updatePlugin": () => (/* reexport safe */ _AppConfig__WEBPACK_IMPORTED_MODULE_0__.updatePlugin)
/* harmony export */ });
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppConfig */ 25);


/***/ }),
/* 42 */
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ }),
/* 44 */
/*!******************************************!*\
  !*** ./components/SecretInput/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecretInput": () => (/* reexport safe */ _SecretInput__WEBPACK_IMPORTED_MODULE_0__.SecretInput)
/* harmony export */ });
/* harmony import */ var _SecretInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecretInput */ 26);


/***/ }),
/* 45 */
/*!*****************************************************!*\
  !*** ../node_modules/react-chartjs-2/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": () => (/* binding */ Bar),
/* harmony export */   "Bubble": () => (/* binding */ Bubble),
/* harmony export */   "Chart": () => (/* binding */ Chart),
/* harmony export */   "Doughnut": () => (/* binding */ Doughnut),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Pie": () => (/* binding */ Pie),
/* harmony export */   "PolarArea": () => (/* binding */ PolarArea),
/* harmony export */   "Radar": () => (/* binding */ Radar),
/* harmony export */   "Scatter": () => (/* binding */ Scatter),
/* harmony export */   "getDatasetAtEvent": () => (/* binding */ getDatasetAtEvent),
/* harmony export */   "getElementAtEvent": () => (/* binding */ getElementAtEvent),
/* harmony export */   "getElementsAtEvent": () => (/* binding */ getElementsAtEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 17);



const defaultDatasetIdKey = 'label';
function reforwardRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
function setOptions(chart, nextOptions) {
    chart.options = {
        ...nextOptions
    };
}
function setLabels(currentData, nextLabels) {
    currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets) {
    let datasetIdKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultDatasetIdKey;
    const addedDatasets = [];
    currentData.datasets = nextDatasets.map((nextDataset)=>{
        // given the new set, find it's current match
        const currentDataset = currentData.datasets.find((dataset)=>dataset[datasetIdKey] === nextDataset[datasetIdKey]
        );
        // There is no original to update, so simply add new one
        if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
            return {
                ...nextDataset
            };
        }
        addedDatasets.push(currentDataset);
        Object.assign(currentDataset, nextDataset);
        return currentDataset;
    });
}
function cloneData(data) {
    let datasetIdKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultDatasetIdKey;
    const nextData = {
        labels: [],
        datasets: []
    };
    setLabels(nextData, data.labels);
    setDatasets(nextData, data.datasets, datasetIdKey);
    return nextData;
}
/**
 * Get dataset from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getDatasetAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'dataset', {
        intersect: true
    }, false);
}
/**
 * Get single dataset element from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getElementAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'nearest', {
        intersect: true
    }, false);
}
/**
 * Get all dataset elements from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getElementsAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'index', {
        intersect: true
    }, false);
}

function ChartComponent(param, ref) {
    let { height =150 , width =300 , redraw =false , datasetIdKey , type , data , options , plugins =[] , fallbackContent , ...props } = param;
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const renderChart = ()=>{
        if (!canvasRef.current) return;
        chartRef.current = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(canvasRef.current, {
            type,
            data: cloneData(data, datasetIdKey),
            options,
            plugins
        });
        reforwardRef(ref, chartRef.current);
    };
    const destroyChart = ()=>{
        reforwardRef(ref, null);
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current && options) {
            setOptions(chartRef.current, options);
        }
    }, [
        redraw,
        options
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current) {
            setLabels(chartRef.current.config.data, data.labels);
        }
    }, [
        redraw,
        data.labels
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current && data.datasets) {
            setDatasets(chartRef.current.config.data, data.datasets, datasetIdKey);
        }
    }, [
        redraw,
        data.datasets
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!chartRef.current) return;
        if (redraw) {
            destroyChart();
            setTimeout(renderChart);
        } else {
            chartRef.current.update();
        }
    }, [
        redraw,
        options,
        data.labels,
        data.datasets
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        renderChart();
        return ()=>destroyChart()
        ;
    }, []);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", Object.assign({
        ref: canvasRef,
        role: "img",
        height: height,
        width: width
    }, props), fallbackContent));
}
const Chart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ChartComponent);

function createTypedChart(type, registerables) {
    chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(registerables);
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chart, Object.assign({}, props, {
            ref: ref,
            type: type
        }))
    ));
}
const Line = /* #__PURE__ */ createTypedChart('line', chart_js__WEBPACK_IMPORTED_MODULE_1__.LineController);
const Bar = /* #__PURE__ */ createTypedChart('bar', chart_js__WEBPACK_IMPORTED_MODULE_1__.BarController);
const Radar = /* #__PURE__ */ createTypedChart('radar', chart_js__WEBPACK_IMPORTED_MODULE_1__.RadarController);
const Doughnut = /* #__PURE__ */ createTypedChart('doughnut', chart_js__WEBPACK_IMPORTED_MODULE_1__.DoughnutController);
const PolarArea = /* #__PURE__ */ createTypedChart('polarArea', chart_js__WEBPACK_IMPORTED_MODULE_1__.PolarAreaController);
const Bubble = /* #__PURE__ */ createTypedChart('bubble', chart_js__WEBPACK_IMPORTED_MODULE_1__.BubbleController);
const Pie = /* #__PURE__ */ createTypedChart('pie', chart_js__WEBPACK_IMPORTED_MODULE_1__.PieController);
const Scatter = /* #__PURE__ */ createTypedChart('scatter', chart_js__WEBPACK_IMPORTED_MODULE_1__.ScatterController);


//# sourceMappingURL=index.js.map


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPluginCss": () => (/* binding */ loadPluginCss),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ 28);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ 29);
/* harmony import */ var _components_AppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppConfig */ 41);



function loadPluginCss() {
  var w = window;

  if (w.grafanaBootData.user.lightTheme) {
    __webpack_require__(/*! ./css/workflowengine.light.css */ 20);
  } else {
    __webpack_require__(/*! ./css/workflowengine.dark.css */ 21);
  }
}
loadPluginCss();
var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.AppPlugin().setRootPage(_components_App__WEBPACK_IMPORTED_MODULE_1__.App).addConfigPage({
  title: 'Configuration',
  icon: 'fa fa-cog',
  // @ts-ignore - Would expect a Class component, however works absolutely fine with a functional one
  // Implementation: https://github.com/grafana/grafana/blob/fd44c01675e54973370969dfb9e78f173aff7910/public/app/features/plugins/PluginPage.tsx#L157
  body: _components_AppConfig__WEBPACK_IMPORTED_MODULE_2__.AppConfig,
  id: 'configuration'
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=module.js.map