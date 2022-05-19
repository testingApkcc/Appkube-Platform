define(['@grafana/data', 'react', 'react-router-dom', '@grafana/ui', '@grafana/runtime', '@emotion/css'], (
  __WEBPACK_EXTERNAL_MODULE__18__,
  __WEBPACK_EXTERNAL_MODULE__0__,
  __WEBPACK_EXTERNAL_MODULE__2__,
  __WEBPACK_EXTERNAL_MODULE__9__,
  __WEBPACK_EXTERNAL_MODULE__26__,
  __WEBPACK_EXTERNAL_MODULE__27__
) => {
  return /******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = [
      /* 0 */
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

        /***/
      },
      /* 1 */
      /*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ __extends: () => /* binding */ __extends,
          /* harmony export */ __assign: () => /* binding */ __assign,
          /* harmony export */ __rest: () => /* binding */ __rest,
          /* harmony export */ __decorate: () => /* binding */ __decorate,
          /* harmony export */ __param: () => /* binding */ __param,
          /* harmony export */ __metadata: () => /* binding */ __metadata,
          /* harmony export */ __awaiter: () => /* binding */ __awaiter,
          /* harmony export */ __generator: () => /* binding */ __generator,
          /* harmony export */ __createBinding: () => /* binding */ __createBinding,
          /* harmony export */ __exportStar: () => /* binding */ __exportStar,
          /* harmony export */ __values: () => /* binding */ __values,
          /* harmony export */ __read: () => /* binding */ __read,
          /* harmony export */ __spread: () => /* binding */ __spread,
          /* harmony export */ __spreadArrays: () => /* binding */ __spreadArrays,
          /* harmony export */ __spreadArray: () => /* binding */ __spreadArray,
          /* harmony export */ __await: () => /* binding */ __await,
          /* harmony export */ __asyncGenerator: () => /* binding */ __asyncGenerator,
          /* harmony export */ __asyncDelegator: () => /* binding */ __asyncDelegator,
          /* harmony export */ __asyncValues: () => /* binding */ __asyncValues,
          /* harmony export */ __makeTemplateObject: () => /* binding */ __makeTemplateObject,
          /* harmony export */ __importStar: () => /* binding */ __importStar,
          /* harmony export */ __importDefault: () => /* binding */ __importDefault,
          /* harmony export */ __classPrivateFieldGet: () => /* binding */ __classPrivateFieldGet,
          /* harmony export */ __classPrivateFieldSet: () => /* binding */ __classPrivateFieldSet,
          /* harmony export */
        });
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

        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };

        function __extends(d, b) {
          if (typeof b !== 'function' && b !== null)
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        }

        var __assign = function () {
          __assign =
            Object.assign ||
            function __assign(t) {
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
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
          return t;
        }

        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
            d;
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        }

        function __metadata(metadataKey, metadataValue) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator['throw'](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }

        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while (_)
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }

        var __createBinding = Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            };

        function __exportStar(m, o) {
          for (var p in m) if (p !== 'default' && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }

        function __values(o) {
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              },
            };
          throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        }

        function __read(o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        }

        /** @deprecated */
        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
          return ar;
        }

        /** @deprecated */
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
          return r;
        }

        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        }

        function __await(v) {
          return this instanceof __await ? ((this.v = v), this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = {}),
            verb('next'),
            verb('throw'),
            verb('return'),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i
          );
          function verb(n) {
            if (g[n])
              i[n] = function (v) {
                return new Promise(function (a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume('next', value);
          }
          function reject(value) {
            resume('throw', value);
          }
          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }

        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb('next'),
            verb('throw', function (e) {
              throw e;
            }),
            verb('return'),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );
          function verb(n, f) {
            i[n] = o[n]
              ? function (v) {
                  return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v;
                }
              : f;
          }
        }

        function __asyncValues(o) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
              (i = {}),
              verb('next'),
              verb('throw'),
              verb('return'),
              (i[Symbol.asyncIterator] = function () {
                return this;
              }),
              i);
          function verb(n) {
            i[n] =
              o[n] &&
              function (v) {
                return new Promise(function (resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
              resolve({ value: v, done: d });
            }, reject);
          }
        }

        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        }

        var __setModuleDefault = Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', { enumerable: true, value: v });
            }
          : function (o, v) {
              o['default'] = v;
            };

        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        }

        function __importDefault(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        }

        function __classPrivateFieldGet(receiver, state, kind, f) {
          if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
          if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError('Cannot read private member from an object whose class did not declare it');
          return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
        }

        function __classPrivateFieldSet(receiver, state, value, kind, f) {
          if (kind === 'm') throw new TypeError('Private method is not writable');
          if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter');
          if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError('Cannot write private member to an object whose class did not declare it');
          return kind === 'a' ? f.call(receiver, value) : f ? (f.value = value) : state.set(receiver, value), value;
        }

        /***/
      },
      /* 2 */
      /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

        /***/
      },
      /* 3 */
      /*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
      /***/ (module) => {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return '@media ' + item[2] + '{' + content + '}';
              } else {
                return content;
              }
            }).join('');
          };

          // import a list of modules into the list
          list.i = function (modules, mediaQuery) {
            if (typeof modules === 'string') modules = [[null, modules, '']];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === 'number') alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              //  when a module is imported multiple times with different media queries.
              //  I hope this will never occur (Hey this way we have smaller bundles)
              if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
              return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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

        /***/
      },
      /* 4 */
      /*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        var stylesInDom = {};

        var memoize = function (fn) {
          var memo;

          return function () {
            if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
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

          return function (target) {
            // If passing function in options, then use it for resolve "head" element.
            // Useful for Shadow Root style i.e
            // {
            //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
            // }
            if (typeof target === 'function') {
              return target();
            }
            if (typeof memo[target] === 'undefined') {
              var styleTarget = getTarget.call(this, target);
              // Special case to return head of iframe instead of iframe itself
              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              }
              memo[target] = styleTarget;
            }
            return memo[target];
          };
        })();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(/*! ./urls */ 11);

        module.exports = function (list, options) {
          if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (typeof document !== 'object')
              throw new Error('The style-loader cannot be used in a non-browser environment');
          }

          options = options || {};

          options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

          // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page
          if (!options.singleton && typeof options.singleton !== 'boolean') options.singleton = isOldIE();

          // By default, add <style> tags to the <head> element
          if (!options.insertInto) options.insertInto = 'head';

          // By default, add <style> tags to the bottom of the target
          if (!options.insertAt) options.insertAt = 'bottom';

          var styles = listToStyles(list, options);

          addStylesToDom(styles, options);

          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              domStyle.refs--;
              mayRemove.push(domStyle);
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var i = 0; i < mayRemove.length; i++) {
              var domStyle = mayRemove[i];

              if (domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                delete stylesInDom[domStyle.id];
              }
            }
          };
        };

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            if (domStyle) {
              domStyle.refs++;

              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
            }
          }
        }

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = { css: css, media: media, sourceMap: sourceMap };

            if (!newStyles[id]) styles.push((newStyles[id] = { id: id, parts: [part] }));
            else newStyles[id].parts.push(part);
          }

          return styles;
        }

        function insertStyleElement(options, style) {
          var target = getElement(options.insertInto);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          }

          var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

          if (options.insertAt === 'top') {
            if (!lastStyleElementInsertedAtTop) {
              target.insertBefore(style, target.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
              target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
            } else {
              target.appendChild(style);
            }
            stylesInsertedAtTop.push(style);
          } else if (options.insertAt === 'bottom') {
            target.appendChild(style);
          } else if (typeof options.insertAt === 'object' && options.insertAt.before) {
            var nextSibling = getElement(options.insertInto + ' ' + options.insertAt.before);
            target.insertBefore(style, nextSibling);
          } else {
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          }
        }

        function removeStyleElement(style) {
          if (style.parentNode === null) return false;
          style.parentNode.removeChild(style);

          var idx = stylesInsertedAtTop.indexOf(style);
          if (idx >= 0) {
            stylesInsertedAtTop.splice(idx, 1);
          }
        }

        function createStyleElement(options) {
          var style = document.createElement('style');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }

          addAttrs(style, options.attrs);
          insertStyleElement(options, style);

          return style;
        }

        function createLinkElement(options) {
          var link = document.createElement('link');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }
          options.attrs.rel = 'stylesheet';

          addAttrs(link, options.attrs);
          insertStyleElement(options, link);

          return link;
        }

        function addAttrs(el, attrs) {
          Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
          });
        }

        function addStyle(obj, options) {
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
              return function () {
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
            typeof URL === 'function' &&
            typeof URL.createObjectURL === 'function' &&
            typeof URL.revokeObjectURL === 'function' &&
            typeof Blob === 'function' &&
            typeof btoa === 'function'
          ) {
            style = createLinkElement(options);
            update = updateLink.bind(null, style, options);
            remove = function () {
              removeStyleElement(style);

              if (style.href) URL.revokeObjectURL(style.href);
            };
          } else {
            style = createStyleElement(options);
            update = applyToTag.bind(null, style);
            remove = function () {
              removeStyleElement(style);
            };
          }

          update(obj);

          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update((obj = newObj));
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

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.css;

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

        function applyToTag(style, obj) {
          var css = obj.css;
          var media = obj.media;

          if (media) {
            style.setAttribute('media', media);
          }

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        function updateLink(link, options, obj) {
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
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
              ' */';
          }

          var blob = new Blob([css], { type: 'text/css' });

          var oldSrc = link.href;

          link.href = URL.createObjectURL(blob);

          if (oldSrc) URL.revokeObjectURL(oldSrc);
        }

        /***/
      },
      /* 5 */
      /*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./css/workflowengine.light.css ***!
  \******************************************************************************************************/
      /***/ (module, exports, __webpack_require__) => {
        exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 3)(true);
        // imports

        // module
        exports.push([
          module.id,
          "@media (min-width: 1200px) {\n  .col-xl-4 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 20%;\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .col-xl-7 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n    -ms-flex: 0 0 58.33333%;\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n    -ms-flex: 0 0 66.66667%;\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n}\n\n/*********************************** Buttons *********************************/\n.blue-button {\n  background: #3b7cff !important;\n  color: #ffffff !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.blue-button:hover,\n.blue-button:focus {\n  background: #0f5efd !important;\n  color: #ffffff !important;\n}\n\n.gray-button {\n  background: #dde4e9 !important;\n  color: #8392a7 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.gray-button:hover,\n.gray-button:focus {\n  background: #dbe0e4 !important;\n  color: #8392a7 !important;\n}\n\n.white-button {\n  background: white !important;\n  min-width: 100px;\n  color: #3b4859 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  text-align: center;\n}\n.white-button:hover,\n.white-button:focus {\n  background: #e6e6e6 !important;\n  color: #3b4859 !important;\n}\n.white-button i {\n  color: #57a4ff !important;\n}\n\na:focus,\na:hover {\n  color: #000000;\n}\n\n.float-right {\n  float: right;\n}\n\n.float-left {\n  float: left;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.v-a-top {\n  vertical-align: top;\n}\n\n.v-a-middle {\n  vertical-align: middle;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-t-5 {\n  padding-top: 5px !important;\n}\n\n.p-t-10 {\n  padding-top: 10px !important;\n}\n\n.p-t-15 {\n  padding-top: 15px !important;\n}\n\n.p-t-20 {\n  padding-top: 20px !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-r-5 {\n  padding-right: 5px !important;\n}\n\n.p-r-10 {\n  padding-right: 10px !important;\n}\n\n.p-r-15 {\n  padding-right: 15px !important;\n}\n\n.p-r-20 {\n  padding-right: 20px !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0px !important;\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important;\n}\n\n.p-b-10 {\n  padding-bottom: 10px !important;\n}\n\n.p-b-15 {\n  padding-bottom: 15px !important;\n}\n\n.p-b-20 {\n  padding-bottom: 20px !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-l-5 {\n  padding-left: 5px !important;\n}\n\n.p-l-10 {\n  padding-left: 10px !important;\n}\n\n.p-l-15 {\n  padding-left: 15px !important;\n}\n\n.p-l-20 {\n  padding-left: 20px !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.width-25 {\n  width: 25%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-75 {\n  width: 75%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-auto {\n  width: auto;\n}\n\n.min-width-inherit {\n  min-width: inherit !important;\n}\n\n.border-bottom-0 {\n  border-bottom: none !important;\n}\n\n.orange {\n  color: #ff8f00;\n}\n\n.yellow-green {\n  color: #7ed321;\n}\n\n.red {\n  color: #f93d3d;\n}\n\n.yellow {\n  color: #ffff00;\n}\n\n.blue {\n  color: #438afb;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n/*********************************** Filters Container *********************************/\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n}\n\n.filter-container .filter-control-group {\n  max-width: 250px;\n  padding-left: 0px;\n}\n.filter-container .filter-control-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 12px;\n  cursor: pointer;\n  height: 35px;\n}\n.filter-container .filter-control-group label {\n  color: #3b4859;\n  font-size: 14px;\n}\n\n.logmanager-page-container {\n  background-color: #ffffff;\n  margin: 10px 20px;\n  border-radius: 10px;\n  padding-bottom: 10px;\n}\n.logmanager-page-container .common-container {\n  padding-top: 20px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f5f6f5;\n}\n.logmanager-page-container .page-heading {\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading h1 {\n  color: #3b4859;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading span {\n  display: block;\n  color: #a9b9c6;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 500;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .enabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .enabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .disabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .disabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.open-create-menu {\n  position: absolute;\n  right: -15px;\n  top: 36px;\n  background-color: #f0f3f7;\n  box-shadow: 0px 2px 5px #00000029;\n  width: 120px;\n  z-index: 10;\n  padding: 5px 0;\n}\n.open-create-menu a {\n  color: #2a9ce7;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  display: block;\n  padding: 4px 0;\n}\n\n.modal {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n\n.breadcrumbs-container {\n  background-color: #eff2f7;\n  padding: 14px 20px 15px;\n  font-size: 13px;\n}\n.breadcrumbs-container .page-title {\n  color: #3b4859;\n  display: inline-block;\n}\n.breadcrumbs-container .breadcrumbs {\n  float: right;\n}\n.breadcrumbs-container a.breadcrumbs-link {\n  color: #89898a;\n}\n.breadcrumbs-container .current-page {\n  color: #2a9ce7;\n}\n.breadcrumbs-container .separator {\n  color: #89898a;\n  display: inline-block;\n  padding: 0 10px;\n}\n\n@media (max-width: 768px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n.logmanager-modal-container {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n.logmanager-modal-container .modal-content {\n  padding: 30px;\n}\n.logmanager-modal-container .modal-content .modal-header {\n  background: white;\n  box-shadow: none;\n  border-bottom: 1px dashed #a2c0d4;\n  margin-bottom: 20px;\n  padding: 0 10px 10px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title {\n  color: #3b4859;\n  float: left;\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 28px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title span {\n  font-weight: 400;\n}\n.logmanager-modal-container .modal-content .modal-header button {\n  float: right;\n  font-size: 28px;\n  top: 0;\n  position: relative;\n  color: #ffffff;\n  opacity: 1;\n  width: 28px;\n  height: 28px;\n  background-color: red;\n  border-radius: 50%;\n  border: none;\n  line-height: 28px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .modal-body {\n  padding: 0px 10px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body p {\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group {\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group label {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #3b4859;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 13px;\n  height: 36px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .input-group-text {\n  background-color: #ffffff;\n  border: 1px solid #8392a7;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 34px;\n  font-style: italic;\n  color: #3b4859;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group span {\n  padding-top: 5px;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .checkbox {\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-top: -4px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group textarea.form-control {\n  height: 120px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .select-rule {\n  margin-top: 10px;\n  margin-left: 30px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .d-inline-block {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .width-auto {\n  width: auto;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .text {\n  padding: 0 3px;\n  line-height: 12px;\n  vertical-align: top;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-input {\n  margin-right: 7px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-label {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group {\n  display: block;\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group input {\n  display: inline-block;\n  vertical-align: middle;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group label {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 21px;\n  font-weight: 400;\n  vertical-align: top;\n  padding-left: 8px;\n}\n.logmanager-modal-container .modal-content .modal-footer {\n  padding: 20px 15px 0px;\n  background: none;\n  border: none;\n  border-top: 1px dashed #a2c0d4;\n}\n.logmanager-modal-container .modal-content .modal-footer .blue-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .gray-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .white-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button {\n  border: 1px solid #89898a;\n  background-color: #89898a;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 36px;\n  font-weight: 500;\n  padding: 0 30px;\n  margin: 0;\n  border-radius: 5px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button.save {\n  border-color: #3b7cff;\n  background-color: #3b7cff;\n  color: #ffffff;\n  margin-left: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container span {\n  font-size: 14px;\n  display: block;\n  line-height: 18px;\n  color: #3b4859;\n  font-weight: 400;\n  padding-bottom: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container .blue-button {\n  font-size: 13px;\n}\n.logmanager-modal-container .modal-content .rules-defined {\n  border-top: 1px dashed #a2c0d4;\n  padding-top: 5px;\n  margin-bottom: 50px;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined {\n  background-color: #f8faff;\n  padding: 5px 5px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined i {\n  display: inline-block;\n  padding-right: 7px;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b97d3;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined span {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b4859;\n  padding-bottom: 0px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules {\n  display: block;\n  padding-top: 10px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules h4 {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  margin-bottom: 0;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules span {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  padding-bottom: 0;\n  display: block;\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .message-tabs-container span {\n  display: block;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs {\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li a {\n  background-color: #fafbfd;\n  border: 2px solid #fafbfd;\n  padding: 10px 10px;\n  color: #2662f0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li.active-tab a {\n  background-color: #ffffff;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .lod-messages {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .form-group .input-group-text {\n  margin-right: 15px;\n  max-width: 300px;\n  width: 300px;\n  display: inline-block;\n}\n\n.streams-text h3 {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 3px;\n}\n\n.streams-text p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\n.search-control {\n  position: relative;\n  margin-bottom: 0;\n  margin-right: 15px;\n}\n.search-control .input-group-text {\n  max-width: 100%;\n  text-align: left;\n  padding-right: 15px;\n  padding-left: 30px;\n  width: 100%;\n  border: 1px solid #ced4da;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding-top: 0.399rem;\n}\n.search-control button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  width: 34px;\n  height: 34px;\n}\n\n.table-container {\n  border: 1px solid #f5f6f5;\n  padding: 5px 5px 10px;\n  display: grid;\n}\n.table-container .table-container-inner {\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ffffff;\n}\n.table-container .table-container-inner .table {\n  white-space: nowrap;\n  width: 1200px;\n}\n.table-container .table-container-inner .table tr:nth-child(odd) td {\n  background-color: #f8f9fb;\n}\n.table-container .table-container-inner .table tr td {\n  padding: 5px 10px;\n  color: #323c47;\n  font-size: 11px;\n  line-height: 20px;\n  font-weight: 400;\n}\n.table-container .table-container-inner .table tr td:first-child {\n  margin-right: 5px;\n}\n.table-container .table-container-inner .table tr td:last-child {\n  margin-left: 5px;\n}\n.table-container .table-container-inner .table tr td h4 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #3b7cff;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.table-container .table-container-inner .table tr td p {\n  margin-bottom: 3px;\n}\n.table-container .table-container-inner .table tr td a {\n  color: #3b7cff;\n}\n.table-container .table-container-inner .table tr td .blue-button {\n  font-size: 12px;\n}\n.table-container .table-container-inner .table tr td .table-btns {\n  position: relative;\n}\n.table-container .table-container-inner .table tr td .btn-link {\n  color: #3b7cff;\n  padding: 0 7px;\n  font-size: 18px;\n}\n.table-container .table-container-inner .table .inner-table tr:nth-child(odd) td {\n  background-color: transparent;\n}\n.table-container .table-container-inner .table .inner-table tr td {\n  width: 50%;\n}\n\n@media (max-width: 1200px) {\n  .back-btn {\n    float: none;\n  }\n  .search-control {\n    margin-bottom: 10px;\n  }\n  .new-stream-btn {\n    float: none;\n    display: inline-block;\n  }\n}\n\n/*# sourceMappingURL=logmanager.light.css.map */\n",
          '',
          {
            version: 3,
            sources: [
              'E:/GIT/Appkube-Platform/xformation-plugins/xformation-workflow-engine/src/css/workflowengine.light.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,eAAe;GAChB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;CACF;;AAED,+EAA+E;AAC/E;EACE,+BAA+B;EAC/B,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;;AAED;EACE,+BAA+B;EAC/B,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;;AAED;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;EACjC,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;;AAED;;EAEE,eAAe;CAChB;;AAED;EACE,aAAa;CACd;;AAED;EACE,YAAY;CACb;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,cAAc;CACf;;AAED;EACE,eAAe;CAChB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,yBAAyB;CAC1B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,WAAW;CACZ;;AAED;EACE,WAAW;CACZ;;AAED;EACE,WAAW;CACZ;;AAED;EACE,YAAY;CACb;;AAED;EACE,YAAY;CACb;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,oCAAoC;EACpC,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,6BAA6B;EAC7B,0BAA0B;EAC1B,uBAAuB;EACvB,yEAAyE;CAC1E;;AAED;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;CACxB;;AAED;EACE;IACE,YAAY;IACZ,iBAAiB;GAClB;CACF;;AAED,yFAAyF;AACzF;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;;AAED;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;;AAED;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,iCAAiC;CAClC;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;;AAED;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,0BAA0B;EAC1B,kCAAkC;EAClC,aAAa;EACb,YAAY;EACZ,eAAe;CAChB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;CAChB;;AAED;EACE,4BAA4B;EAC5B,2CAA2C;EAC3C,mCAAmC;EACnC,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;CACjB;;AAED;EACE;IACE,YAAY;IACZ,iBAAiB;GAClB;CACF;;AAED;EACE,4BAA4B;EAC5B,2CAA2C;EAC3C,mCAAmC;EACnC,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kCAAkC;EAClC,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;CACvB;;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;CACd;;AAED;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,oBAAoB;EACpB,cAAc;CACf;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,WAAW;CACZ;;AAED;EACE;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,YAAY;IACZ,sBAAsB;GACvB;CACF;;AAED,gDAAgD',
            file: 'workflowengine.light.css',
            sourcesContent: [
              "@media (min-width: 1200px) {\n  .col-xl-4 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 20%;\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .col-xl-7 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n    -ms-flex: 0 0 58.33333%;\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n    -ms-flex: 0 0 66.66667%;\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n}\n\n/*********************************** Buttons *********************************/\n.blue-button {\n  background: #3b7cff !important;\n  color: #ffffff !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.blue-button:hover,\n.blue-button:focus {\n  background: #0f5efd !important;\n  color: #ffffff !important;\n}\n\n.gray-button {\n  background: #dde4e9 !important;\n  color: #8392a7 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.gray-button:hover,\n.gray-button:focus {\n  background: #dbe0e4 !important;\n  color: #8392a7 !important;\n}\n\n.white-button {\n  background: white !important;\n  min-width: 100px;\n  color: #3b4859 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  text-align: center;\n}\n.white-button:hover,\n.white-button:focus {\n  background: #e6e6e6 !important;\n  color: #3b4859 !important;\n}\n.white-button i {\n  color: #57a4ff !important;\n}\n\na:focus,\na:hover {\n  color: #000000;\n}\n\n.float-right {\n  float: right;\n}\n\n.float-left {\n  float: left;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.v-a-top {\n  vertical-align: top;\n}\n\n.v-a-middle {\n  vertical-align: middle;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-t-5 {\n  padding-top: 5px !important;\n}\n\n.p-t-10 {\n  padding-top: 10px !important;\n}\n\n.p-t-15 {\n  padding-top: 15px !important;\n}\n\n.p-t-20 {\n  padding-top: 20px !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-r-5 {\n  padding-right: 5px !important;\n}\n\n.p-r-10 {\n  padding-right: 10px !important;\n}\n\n.p-r-15 {\n  padding-right: 15px !important;\n}\n\n.p-r-20 {\n  padding-right: 20px !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0px !important;\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important;\n}\n\n.p-b-10 {\n  padding-bottom: 10px !important;\n}\n\n.p-b-15 {\n  padding-bottom: 15px !important;\n}\n\n.p-b-20 {\n  padding-bottom: 20px !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-l-5 {\n  padding-left: 5px !important;\n}\n\n.p-l-10 {\n  padding-left: 10px !important;\n}\n\n.p-l-15 {\n  padding-left: 15px !important;\n}\n\n.p-l-20 {\n  padding-left: 20px !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.width-25 {\n  width: 25%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-75 {\n  width: 75%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-auto {\n  width: auto;\n}\n\n.min-width-inherit {\n  min-width: inherit !important;\n}\n\n.border-bottom-0 {\n  border-bottom: none !important;\n}\n\n.orange {\n  color: #ff8f00;\n}\n\n.yellow-green {\n  color: #7ed321;\n}\n\n.red {\n  color: #f93d3d;\n}\n\n.yellow {\n  color: #ffff00;\n}\n\n.blue {\n  color: #438afb;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n/*********************************** Filters Container *********************************/\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n}\n\n.filter-container .filter-control-group {\n  max-width: 250px;\n  padding-left: 0px;\n}\n.filter-container .filter-control-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 12px;\n  cursor: pointer;\n  height: 35px;\n}\n.filter-container .filter-control-group label {\n  color: #3b4859;\n  font-size: 14px;\n}\n\n.logmanager-page-container {\n  background-color: #ffffff;\n  margin: 10px 20px;\n  border-radius: 10px;\n  padding-bottom: 10px;\n}\n.logmanager-page-container .common-container {\n  padding-top: 20px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f5f6f5;\n}\n.logmanager-page-container .page-heading {\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading h1 {\n  color: #3b4859;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading span {\n  display: block;\n  color: #a9b9c6;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 500;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .enabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .enabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .disabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .disabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.open-create-menu {\n  position: absolute;\n  right: -15px;\n  top: 36px;\n  background-color: #f0f3f7;\n  box-shadow: 0px 2px 5px #00000029;\n  width: 120px;\n  z-index: 10;\n  padding: 5px 0;\n}\n.open-create-menu a {\n  color: #2a9ce7;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  display: block;\n  padding: 4px 0;\n}\n\n.modal {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n\n.breadcrumbs-container {\n  background-color: #eff2f7;\n  padding: 14px 20px 15px;\n  font-size: 13px;\n}\n.breadcrumbs-container .page-title {\n  color: #3b4859;\n  display: inline-block;\n}\n.breadcrumbs-container .breadcrumbs {\n  float: right;\n}\n.breadcrumbs-container a.breadcrumbs-link {\n  color: #89898a;\n}\n.breadcrumbs-container .current-page {\n  color: #2a9ce7;\n}\n.breadcrumbs-container .separator {\n  color: #89898a;\n  display: inline-block;\n  padding: 0 10px;\n}\n\n@media (max-width: 768px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n.logmanager-modal-container {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n.logmanager-modal-container .modal-content {\n  padding: 30px;\n}\n.logmanager-modal-container .modal-content .modal-header {\n  background: white;\n  box-shadow: none;\n  border-bottom: 1px dashed #a2c0d4;\n  margin-bottom: 20px;\n  padding: 0 10px 10px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title {\n  color: #3b4859;\n  float: left;\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 28px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title span {\n  font-weight: 400;\n}\n.logmanager-modal-container .modal-content .modal-header button {\n  float: right;\n  font-size: 28px;\n  top: 0;\n  position: relative;\n  color: #ffffff;\n  opacity: 1;\n  width: 28px;\n  height: 28px;\n  background-color: red;\n  border-radius: 50%;\n  border: none;\n  line-height: 28px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .modal-body {\n  padding: 0px 10px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body p {\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group {\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group label {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #3b4859;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 13px;\n  height: 36px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .input-group-text {\n  background-color: #ffffff;\n  border: 1px solid #8392a7;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 34px;\n  font-style: italic;\n  color: #3b4859;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group span {\n  padding-top: 5px;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .checkbox {\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-top: -4px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group textarea.form-control {\n  height: 120px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .select-rule {\n  margin-top: 10px;\n  margin-left: 30px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .d-inline-block {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .width-auto {\n  width: auto;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .text {\n  padding: 0 3px;\n  line-height: 12px;\n  vertical-align: top;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-input {\n  margin-right: 7px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-label {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group {\n  display: block;\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group input {\n  display: inline-block;\n  vertical-align: middle;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group label {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 21px;\n  font-weight: 400;\n  vertical-align: top;\n  padding-left: 8px;\n}\n.logmanager-modal-container .modal-content .modal-footer {\n  padding: 20px 15px 0px;\n  background: none;\n  border: none;\n  border-top: 1px dashed #a2c0d4;\n}\n.logmanager-modal-container .modal-content .modal-footer .blue-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .gray-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .white-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button {\n  border: 1px solid #89898a;\n  background-color: #89898a;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 36px;\n  font-weight: 500;\n  padding: 0 30px;\n  margin: 0;\n  border-radius: 5px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button.save {\n  border-color: #3b7cff;\n  background-color: #3b7cff;\n  color: #ffffff;\n  margin-left: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container span {\n  font-size: 14px;\n  display: block;\n  line-height: 18px;\n  color: #3b4859;\n  font-weight: 400;\n  padding-bottom: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container .blue-button {\n  font-size: 13px;\n}\n.logmanager-modal-container .modal-content .rules-defined {\n  border-top: 1px dashed #a2c0d4;\n  padding-top: 5px;\n  margin-bottom: 50px;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined {\n  background-color: #f8faff;\n  padding: 5px 5px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined i {\n  display: inline-block;\n  padding-right: 7px;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b97d3;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined span {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b4859;\n  padding-bottom: 0px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules {\n  display: block;\n  padding-top: 10px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules h4 {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  margin-bottom: 0;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules span {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  padding-bottom: 0;\n  display: block;\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .message-tabs-container span {\n  display: block;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs {\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li a {\n  background-color: #fafbfd;\n  border: 2px solid #fafbfd;\n  padding: 10px 10px;\n  color: #2662f0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li.active-tab a {\n  background-color: #ffffff;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .lod-messages {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .form-group .input-group-text {\n  margin-right: 15px;\n  max-width: 300px;\n  width: 300px;\n  display: inline-block;\n}\n\n.streams-text h3 {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 3px;\n}\n\n.streams-text p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\n.search-control {\n  position: relative;\n  margin-bottom: 0;\n  margin-right: 15px;\n}\n.search-control .input-group-text {\n  max-width: 100%;\n  text-align: left;\n  padding-right: 15px;\n  padding-left: 30px;\n  width: 100%;\n  border: 1px solid #ced4da;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding-top: 0.399rem;\n}\n.search-control button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  width: 34px;\n  height: 34px;\n}\n\n.table-container {\n  border: 1px solid #f5f6f5;\n  padding: 5px 5px 10px;\n  display: grid;\n}\n.table-container .table-container-inner {\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ffffff;\n}\n.table-container .table-container-inner .table {\n  white-space: nowrap;\n  width: 1200px;\n}\n.table-container .table-container-inner .table tr:nth-child(odd) td {\n  background-color: #f8f9fb;\n}\n.table-container .table-container-inner .table tr td {\n  padding: 5px 10px;\n  color: #323c47;\n  font-size: 11px;\n  line-height: 20px;\n  font-weight: 400;\n}\n.table-container .table-container-inner .table tr td:first-child {\n  margin-right: 5px;\n}\n.table-container .table-container-inner .table tr td:last-child {\n  margin-left: 5px;\n}\n.table-container .table-container-inner .table tr td h4 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #3b7cff;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.table-container .table-container-inner .table tr td p {\n  margin-bottom: 3px;\n}\n.table-container .table-container-inner .table tr td a {\n  color: #3b7cff;\n}\n.table-container .table-container-inner .table tr td .blue-button {\n  font-size: 12px;\n}\n.table-container .table-container-inner .table tr td .table-btns {\n  position: relative;\n}\n.table-container .table-container-inner .table tr td .btn-link {\n  color: #3b7cff;\n  padding: 0 7px;\n  font-size: 18px;\n}\n.table-container .table-container-inner .table .inner-table tr:nth-child(odd) td {\n  background-color: transparent;\n}\n.table-container .table-container-inner .table .inner-table tr td {\n  width: 50%;\n}\n\n@media (max-width: 1200px) {\n  .back-btn {\n    float: none;\n  }\n  .search-control {\n    margin-bottom: 10px;\n  }\n  .new-stream-btn {\n    float: none;\n    display: inline-block;\n  }\n}\n\n/*# sourceMappingURL=logmanager.light.css.map */\n",
            ],
            sourceRoot: '',
          },
        ]);

        // exports

        /***/
      },
      /* 6 */
      /*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./css/workflowengine.dark.css ***!
  \*****************************************************************************************************/
      /***/ (module, exports, __webpack_require__) => {
        exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 3)(true);
        // imports

        // module
        exports.push([
          module.id,
          "@media (min-width: 1200px) {\n  .col-xl-4 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 20%;\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .col-xl-7 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n    -ms-flex: 0 0 58.33333%;\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n    -ms-flex: 0 0 66.66667%;\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n}\n\n/*********************************** Buttons *********************************/\n.blue-button {\n  background: #3b7cff !important;\n  color: #ffffff !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.blue-button:hover,\n.blue-button:focus {\n  background: #0f5efd !important;\n  color: #ffffff !important;\n}\n\n.gray-button {\n  background: #dde4e9 !important;\n  color: #8392a7 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.gray-button:hover,\n.gray-button:focus {\n  background: #dbe0e4 !important;\n  color: #8392a7 !important;\n}\n\n.white-button {\n  background: white !important;\n  min-width: 100px;\n  color: #3b4859 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  text-align: center;\n}\n.white-button:hover,\n.white-button:focus {\n  background: #e6e6e6 !important;\n  color: #3b4859 !important;\n}\n.white-button i {\n  color: #57a4ff !important;\n}\n\na:focus,\na:hover {\n  color: #000000;\n}\n\n.float-right {\n  float: right;\n}\n\n.float-left {\n  float: left;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.v-a-top {\n  vertical-align: top;\n}\n\n.v-a-middle {\n  vertical-align: middle;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-t-5 {\n  padding-top: 5px !important;\n}\n\n.p-t-10 {\n  padding-top: 10px !important;\n}\n\n.p-t-15 {\n  padding-top: 15px !important;\n}\n\n.p-t-20 {\n  padding-top: 20px !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-r-5 {\n  padding-right: 5px !important;\n}\n\n.p-r-10 {\n  padding-right: 10px !important;\n}\n\n.p-r-15 {\n  padding-right: 15px !important;\n}\n\n.p-r-20 {\n  padding-right: 20px !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0px !important;\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important;\n}\n\n.p-b-10 {\n  padding-bottom: 10px !important;\n}\n\n.p-b-15 {\n  padding-bottom: 15px !important;\n}\n\n.p-b-20 {\n  padding-bottom: 20px !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-l-5 {\n  padding-left: 5px !important;\n}\n\n.p-l-10 {\n  padding-left: 10px !important;\n}\n\n.p-l-15 {\n  padding-left: 15px !important;\n}\n\n.p-l-20 {\n  padding-left: 20px !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.width-25 {\n  width: 25%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-75 {\n  width: 75%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-auto {\n  width: auto;\n}\n\n.min-width-inherit {\n  min-width: inherit !important;\n}\n\n.border-bottom-0 {\n  border-bottom: none !important;\n}\n\n.orange {\n  color: #ff8f00;\n}\n\n.yellow-green {\n  color: #7ed321;\n}\n\n.red {\n  color: #f93d3d;\n}\n\n.yellow {\n  color: #ffff00;\n}\n\n.blue {\n  color: #438afb;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n/*********************************** Filters Container *********************************/\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n}\n\n.filter-container .filter-control-group {\n  max-width: 250px;\n  padding-left: 0px;\n}\n.filter-container .filter-control-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 12px;\n  cursor: pointer;\n  height: 35px;\n}\n.filter-container .filter-control-group label {\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.logmanager-page-container {\n  background-color: #3b4859;\n  margin: 10px 20px;\n  border-radius: 10px;\n  padding-bottom: 10px;\n}\n.logmanager-page-container .common-container {\n  padding-top: 20px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #202226;\n}\n.logmanager-page-container .page-heading {\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading h1 {\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading span {\n  display: block;\n  color: #a9b9c6;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 500;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .enabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .enabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .disabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .disabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.open-create-menu {\n  position: absolute;\n  right: -15px;\n  top: 36px;\n  background-color: #f0f3f7;\n  box-shadow: 0px 2px 5px #00000029;\n  width: 120px;\n  z-index: 10;\n  padding: 5px 0;\n}\n.open-create-menu a {\n  color: #2a9ce7;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  display: block;\n  padding: 4px 0;\n}\n\n.modal {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n\n.breadcrumbs-container {\n  background-color: #3b4859;\n  padding: 14px 20px 15px;\n  font-size: 13px;\n}\n.breadcrumbs-container .page-title {\n  color: #ffffff;\n  display: inline-block;\n}\n.breadcrumbs-container .breadcrumbs {\n  float: right;\n}\n.breadcrumbs-container a.breadcrumbs-link {\n  color: #fcfcfc;\n}\n.breadcrumbs-container .current-page {\n  color: #fcfcfc;\n}\n.breadcrumbs-container .separator {\n  color: #fcfcfc;\n  display: inline-block;\n  padding: 0 10px;\n}\n\n@media (max-width: 768px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n.logmanager-modal-container {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n.logmanager-modal-container .modal-content {\n  padding: 30px;\n}\n.logmanager-modal-container .modal-content .modal-header {\n  background: white;\n  box-shadow: none;\n  border-bottom: 1px dashed #a2c0d4;\n  margin-bottom: 20px;\n  padding: 0 10px 10px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title {\n  color: #3b4859;\n  float: left;\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 28px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title span {\n  font-weight: 400;\n}\n.logmanager-modal-container .modal-content .modal-header button {\n  float: right;\n  font-size: 28px;\n  top: 0;\n  position: relative;\n  color: #ffffff;\n  opacity: 1;\n  width: 28px;\n  height: 28px;\n  background-color: red;\n  border-radius: 50%;\n  border: none;\n  line-height: 28px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .modal-body {\n  padding: 0px 10px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body p {\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group {\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group label {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #3b4859;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 13px;\n  height: 36px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .input-group-text {\n  background-color: #ffffff;\n  border: 1px solid #8392a7;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 34px;\n  font-style: italic;\n  color: #3b4859;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group span {\n  padding-top: 5px;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .checkbox {\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-top: -4px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group textarea.form-control {\n  height: 120px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .select-rule {\n  margin-top: 10px;\n  margin-left: 30px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .d-inline-block {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .width-auto {\n  width: auto;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .text {\n  padding: 0 3px;\n  line-height: 12px;\n  vertical-align: top;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-input {\n  margin-right: 7px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-label {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group {\n  display: block;\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group input {\n  display: inline-block;\n  vertical-align: middle;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group label {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 21px;\n  font-weight: 400;\n  vertical-align: top;\n  padding-left: 8px;\n}\n.logmanager-modal-container .modal-content .modal-footer {\n  padding: 20px 15px 0px;\n  background: none;\n  border: none;\n  border-top: 1px dashed #a2c0d4;\n}\n.logmanager-modal-container .modal-content .modal-footer .blue-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .gray-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .white-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button {\n  border: 1px solid #89898a;\n  background-color: #89898a;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 36px;\n  font-weight: 500;\n  padding: 0 30px;\n  margin: 0;\n  border-radius: 5px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button.save {\n  border-color: #3b7cff;\n  background-color: #3b7cff;\n  color: #ffffff;\n  margin-left: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container span {\n  font-size: 14px;\n  display: block;\n  line-height: 18px;\n  color: #3b4859;\n  font-weight: 400;\n  padding-bottom: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container .blue-button {\n  font-size: 13px;\n}\n.logmanager-modal-container .modal-content .rules-defined {\n  border-top: 1px dashed #a2c0d4;\n  padding-top: 5px;\n  margin-bottom: 50px;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined {\n  background-color: #f8faff;\n  padding: 5px 5px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined i {\n  display: inline-block;\n  padding-right: 7px;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b97d3;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined span {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b4859;\n  padding-bottom: 0px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules {\n  display: block;\n  padding-top: 10px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules h4 {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  margin-bottom: 0;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules span {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  padding-bottom: 0;\n  display: block;\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .message-tabs-container span {\n  display: block;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs {\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li a {\n  background-color: #fafbfd;\n  border: 2px solid #fafbfd;\n  padding: 10px 10px;\n  color: #2662f0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li.active-tab a {\n  background-color: #ffffff;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .lod-messages {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .form-group .input-group-text {\n  margin-right: 15px;\n  max-width: 300px;\n  width: 300px;\n  display: inline-block;\n}\n\n.streams-text h3 {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 3px;\n}\n\n.streams-text p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\n.search-control {\n  position: relative;\n  margin-bottom: 0;\n  margin-right: 15px;\n}\n.search-control .input-group-text {\n  max-width: 100%;\n  text-align: left;\n  padding-right: 15px;\n  padding-left: 30px;\n  width: 100%;\n  border: 1px solid #ced4da;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding-top: 0.399rem;\n}\n.search-control button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  width: 34px;\n  height: 34px;\n}\n\n.table-container {\n  border: 1px solid #f5f6f5;\n  padding: 5px 5px 10px;\n  display: grid;\n}\n.table-container .table-container-inner {\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ffffff;\n}\n.table-container .table-container-inner .table {\n  white-space: nowrap;\n  width: 1200px;\n}\n.table-container .table-container-inner .table tr:nth-child(odd) td {\n  background-color: #f8f9fb;\n}\n.table-container .table-container-inner .table tr td {\n  padding: 5px 10px;\n  color: #323c47;\n  font-size: 11px;\n  line-height: 20px;\n  font-weight: 400;\n}\n.table-container .table-container-inner .table tr td:first-child {\n  margin-right: 5px;\n}\n.table-container .table-container-inner .table tr td:last-child {\n  margin-left: 5px;\n}\n.table-container .table-container-inner .table tr td h4 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #3b7cff;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.table-container .table-container-inner .table tr td p {\n  margin-bottom: 3px;\n}\n.table-container .table-container-inner .table tr td a {\n  color: #3b7cff;\n}\n.table-container .table-container-inner .table tr td .blue-button {\n  font-size: 12px;\n}\n.table-container .table-container-inner .table tr td .table-btns {\n  position: relative;\n}\n.table-container .table-container-inner .table tr td .btn-link {\n  color: #3b7cff;\n  padding: 0 7px;\n  font-size: 18px;\n}\n.table-container .table-container-inner .table .inner-table tr:nth-child(odd) td {\n  background-color: transparent;\n}\n.table-container .table-container-inner .table .inner-table tr td {\n  width: 50%;\n}\n\n@media (max-width: 1200px) {\n  .back-btn {\n    float: none;\n  }\n  .search-control {\n    margin-bottom: 10px;\n  }\n  .new-stream-btn {\n    float: none;\n    display: inline-block;\n  }\n}\n\n/*# sourceMappingURL=logmanager.dark.css.map */\n",
          '',
          {
            version: 3,
            sources: [
              'E:/GIT/Appkube-Platform/xformation-plugins/xformation-workflow-engine/src/css/workflowengine.dark.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,eAAe;GAChB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;EACD;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;GACtB;CACF;;AAED,+EAA+E;AAC/E;EACE,+BAA+B;EAC/B,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;;AAED;EACE,+BAA+B;EAC/B,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;;AAED;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;EACjC,mBAAmB;CACpB;AACD;;EAEE,+BAA+B;EAC/B,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;;AAED;;EAEE,eAAe;CAChB;;AAED;EACE,aAAa;CACd;;AAED;EACE,YAAY;CACb;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,cAAc;CACf;;AAED;EACE,eAAe;CAChB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,6BAA6B;CAC9B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,yBAAyB;CAC1B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,WAAW;CACZ;;AAED;EACE,WAAW;CACZ;;AAED;EACE,WAAW;CACZ;;AAED;EACE,YAAY;CACb;;AAED;EACE,YAAY;CACb;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,oCAAoC;EACpC,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,6BAA6B;EAC7B,0BAA0B;EAC1B,uBAAuB;EACvB,yEAAyE;CAC1E;;AAED;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;CACxB;;AAED;EACE;IACE,YAAY;IACZ,iBAAiB;GAClB;CACF;;AAED,yFAAyF;AACzF;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;;AAED;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;;AAED;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,iCAAiC;CAClC;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;;AAED;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,0BAA0B;EAC1B,kCAAkC;EAClC,aAAa;EACb,YAAY;EACZ,eAAe;CAChB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;CAChB;;AAED;EACE,4BAA4B;EAC5B,2CAA2C;EAC3C,mCAAmC;EACnC,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;CACjB;;AAED;EACE;IACE,YAAY;IACZ,iBAAiB;GAClB;CACF;;AAED;EACE,4BAA4B;EAC5B,2CAA2C;EAC3C,mCAAmC;EACnC,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kCAAkC;EAClC,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;CACvB;;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;CACd;;AAED;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,oBAAoB;EACpB,cAAc;CACf;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,WAAW;CACZ;;AAED;EACE;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,YAAY;IACZ,sBAAsB;GACvB;CACF;;AAED,+CAA+C',
            file: 'workflowengine.dark.css',
            sourcesContent: [
              "@media (min-width: 1200px) {\n  .col-xl-4 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 20%;\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .col-xl-7 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n    -ms-flex: 0 0 58.33333%;\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n    -ms-flex: 0 0 66.66667%;\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n}\n\n/*********************************** Buttons *********************************/\n.blue-button {\n  background: #3b7cff !important;\n  color: #ffffff !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.blue-button:hover,\n.blue-button:focus {\n  background: #0f5efd !important;\n  color: #ffffff !important;\n}\n\n.gray-button {\n  background: #dde4e9 !important;\n  color: #8392a7 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  min-width: 100px;\n  text-align: center;\n}\n.gray-button:hover,\n.gray-button:focus {\n  background: #dbe0e4 !important;\n  color: #8392a7 !important;\n}\n\n.white-button {\n  background: white !important;\n  min-width: 100px;\n  color: #3b4859 !important;\n  border: none !important;\n  padding: 7px 18px !important;\n  border-radius: 2px !important;\n  margin-right: 10px;\n  display: inline-block !important;\n  text-align: center;\n}\n.white-button:hover,\n.white-button:focus {\n  background: #e6e6e6 !important;\n  color: #3b4859 !important;\n}\n.white-button i {\n  color: #57a4ff !important;\n}\n\na:focus,\na:hover {\n  color: #000000;\n}\n\n.float-right {\n  float: right;\n}\n\n.float-left {\n  float: left;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.v-a-top {\n  vertical-align: top;\n}\n\n.v-a-middle {\n  vertical-align: middle;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-t-5 {\n  padding-top: 5px !important;\n}\n\n.p-t-10 {\n  padding-top: 10px !important;\n}\n\n.p-t-15 {\n  padding-top: 15px !important;\n}\n\n.p-t-20 {\n  padding-top: 20px !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-r-5 {\n  padding-right: 5px !important;\n}\n\n.p-r-10 {\n  padding-right: 10px !important;\n}\n\n.p-r-15 {\n  padding-right: 15px !important;\n}\n\n.p-r-20 {\n  padding-right: 20px !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0px !important;\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important;\n}\n\n.p-b-10 {\n  padding-bottom: 10px !important;\n}\n\n.p-b-15 {\n  padding-bottom: 15px !important;\n}\n\n.p-b-20 {\n  padding-bottom: 20px !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-l-5 {\n  padding-left: 5px !important;\n}\n\n.p-l-10 {\n  padding-left: 10px !important;\n}\n\n.p-l-15 {\n  padding-left: 15px !important;\n}\n\n.p-l-20 {\n  padding-left: 20px !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.width-25 {\n  width: 25%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-75 {\n  width: 75%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-auto {\n  width: auto;\n}\n\n.min-width-inherit {\n  min-width: inherit !important;\n}\n\n.border-bottom-0 {\n  border-bottom: none !important;\n}\n\n.orange {\n  color: #ff8f00;\n}\n\n.yellow-green {\n  color: #7ed321;\n}\n\n.red {\n  color: #f93d3d;\n}\n\n.yellow {\n  color: #ffff00;\n}\n\n.blue {\n  color: #438afb;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n/*********************************** Filters Container *********************************/\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n}\n\n.filter-container .filter-control-group {\n  max-width: 250px;\n  padding-left: 0px;\n}\n.filter-container .filter-control-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 12px;\n  cursor: pointer;\n  height: 35px;\n}\n.filter-container .filter-control-group label {\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.logmanager-page-container {\n  background-color: #3b4859;\n  margin: 10px 20px;\n  border-radius: 10px;\n  padding-bottom: 10px;\n}\n.logmanager-page-container .common-container {\n  padding-top: 20px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #202226;\n}\n.logmanager-page-container .page-heading {\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading h1 {\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  display: block;\n  margin-bottom: 0;\n}\n.logmanager-page-container .page-heading span {\n  display: block;\n  color: #a9b9c6;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 500;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .enabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .enabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.enabled-disabled-container {\n  width: 16px;\n  margin-right: 7px;\n}\n.enabled-disabled-container .disabled {\n  width: 8px;\n  height: 8px;\n  background-color: #004fac;\n  display: inline-block;\n  position: relative;\n  margin: 5px 0 0 5px;\n}\n.enabled-disabled-container .disabled:after {\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  content: '';\n  border: 1px solid #004fac;\n  border-radius: 50%;\n}\n\n.open-create-menu {\n  position: absolute;\n  right: -15px;\n  top: 36px;\n  background-color: #f0f3f7;\n  box-shadow: 0px 2px 5px #00000029;\n  width: 120px;\n  z-index: 10;\n  padding: 5px 0;\n}\n.open-create-menu a {\n  color: #2a9ce7;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  display: block;\n  padding: 4px 0;\n}\n\n.modal {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n\n.breadcrumbs-container {\n  background-color: #3b4859;\n  padding: 14px 20px 15px;\n  font-size: 13px;\n}\n.breadcrumbs-container .page-title {\n  color: #ffffff;\n  display: inline-block;\n}\n.breadcrumbs-container .breadcrumbs {\n  float: right;\n}\n.breadcrumbs-container a.breadcrumbs-link {\n  color: #fcfcfc;\n}\n.breadcrumbs-container .current-page {\n  color: #fcfcfc;\n}\n.breadcrumbs-container .separator {\n  color: #fcfcfc;\n  display: inline-block;\n  padding: 0 10px;\n}\n\n@media (max-width: 768px) {\n  .breadcrumbs-container .breadcrumbs {\n    float: none;\n    padding-top: 5px;\n  }\n}\n\n.logmanager-modal-container {\n  max-width: 992px !important;\n  -webkit-box-shadow: 0px 0px 16px #3b48593d;\n  box-shadow: 0px 0px 16px #3b48593d;\n  border-radius: 10px;\n  background: white;\n}\n.logmanager-modal-container .modal-content {\n  padding: 30px;\n}\n.logmanager-modal-container .modal-content .modal-header {\n  background: white;\n  box-shadow: none;\n  border-bottom: 1px dashed #a2c0d4;\n  margin-bottom: 20px;\n  padding: 0 10px 10px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title {\n  color: #3b4859;\n  float: left;\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 28px;\n}\n.logmanager-modal-container .modal-content .modal-header .modal-title span {\n  font-weight: 400;\n}\n.logmanager-modal-container .modal-content .modal-header button {\n  float: right;\n  font-size: 28px;\n  top: 0;\n  position: relative;\n  color: #ffffff;\n  opacity: 1;\n  width: 28px;\n  height: 28px;\n  background-color: red;\n  border-radius: 50%;\n  border: none;\n  line-height: 28px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .modal-body {\n  padding: 0px 10px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body p {\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group {\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group label {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #3b4859;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .form-control {\n  background-color: #f0f3f7 !important;\n  border: none !important;\n  font-size: 13px;\n  height: 36px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .input-group-text {\n  background-color: #ffffff;\n  border: 1px solid #8392a7;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 34px;\n  font-style: italic;\n  color: #3b4859;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group span {\n  padding-top: 5px;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .checkbox {\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-top: -4px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group textarea.form-control {\n  height: 120px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .select-rule {\n  margin-top: 10px;\n  margin-left: 30px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .d-inline-block {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .width-auto {\n  width: auto;\n}\n.logmanager-modal-container .modal-content .modal-body .form-group .text {\n  padding: 0 3px;\n  line-height: 12px;\n  vertical-align: top;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-input {\n  margin-right: 7px;\n}\n.logmanager-modal-container .modal-content .modal-body .form-check .form-check-label {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #3b4859;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group {\n  display: block;\n  padding-bottom: 5px;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group input {\n  display: inline-block;\n  vertical-align: middle;\n}\n.logmanager-modal-container .modal-content .modal-body .check-group label {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 21px;\n  font-weight: 400;\n  vertical-align: top;\n  padding-left: 8px;\n}\n.logmanager-modal-container .modal-content .modal-footer {\n  padding: 20px 15px 0px;\n  background: none;\n  border: none;\n  border-top: 1px dashed #a2c0d4;\n}\n.logmanager-modal-container .modal-content .modal-footer .blue-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .gray-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .modal-footer .white-button {\n  border-radius: 7px !important;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button {\n  border: 1px solid #89898a;\n  background-color: #89898a;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 36px;\n  font-weight: 500;\n  padding: 0 30px;\n  margin: 0;\n  border-radius: 5px;\n  text-align: center;\n}\n.logmanager-modal-container .modal-content .contact-popup-buttons button.save {\n  border-color: #3b7cff;\n  background-color: #3b7cff;\n  color: #ffffff;\n  margin-left: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container span {\n  font-size: 14px;\n  display: block;\n  line-height: 18px;\n  color: #3b4859;\n  font-weight: 400;\n  padding-bottom: 15px;\n}\n.logmanager-modal-container .modal-content .popup-parameters-container .blue-button {\n  font-size: 13px;\n}\n.logmanager-modal-container .modal-content .rules-defined {\n  border-top: 1px dashed #a2c0d4;\n  padding-top: 5px;\n  margin-bottom: 50px;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined {\n  background-color: #f8faff;\n  padding: 5px 5px;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined i {\n  display: inline-block;\n  padding-right: 7px;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b97d3;\n}\n.logmanager-modal-container .modal-content .rules-defined .no-rules-defined span {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 18px;\n  color: #3b4859;\n  padding-bottom: 0px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules {\n  display: block;\n  padding-top: 10px;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules h4 {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  margin-bottom: 0;\n  display: block;\n}\n.logmanager-modal-container .modal-content .rules-defined .manage-rules span {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  padding-bottom: 0;\n  display: block;\n  font-style: italic;\n}\n.logmanager-modal-container .modal-content .message-tabs-container span {\n  display: block;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs {\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li {\n  display: inline-block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li a {\n  background-color: #fafbfd;\n  border: 2px solid #fafbfd;\n  padding: 10px 10px;\n  color: #2662f0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  display: block;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs ul li.active-tab a {\n  background-color: #ffffff;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .lod-messages {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  font-style: italic;\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n.logmanager-modal-container .modal-content .message-tabs-container .messages-tabs .form-group .input-group-text {\n  margin-right: 15px;\n  max-width: 300px;\n  width: 300px;\n  display: inline-block;\n}\n\n.streams-text h3 {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 3px;\n}\n\n.streams-text p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\n.search-control {\n  position: relative;\n  margin-bottom: 0;\n  margin-right: 15px;\n}\n.search-control .input-group-text {\n  max-width: 100%;\n  text-align: left;\n  padding-right: 15px;\n  padding-left: 30px;\n  width: 100%;\n  border: 1px solid #ced4da;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding-top: 0.399rem;\n}\n.search-control button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  width: 34px;\n  height: 34px;\n}\n\n.table-container {\n  border: 1px solid #f5f6f5;\n  padding: 5px 5px 10px;\n  display: grid;\n}\n.table-container .table-container-inner {\n  overflow-x: scroll;\n  width: 100%;\n  background-color: #ffffff;\n}\n.table-container .table-container-inner .table {\n  white-space: nowrap;\n  width: 1200px;\n}\n.table-container .table-container-inner .table tr:nth-child(odd) td {\n  background-color: #f8f9fb;\n}\n.table-container .table-container-inner .table tr td {\n  padding: 5px 10px;\n  color: #323c47;\n  font-size: 11px;\n  line-height: 20px;\n  font-weight: 400;\n}\n.table-container .table-container-inner .table tr td:first-child {\n  margin-right: 5px;\n}\n.table-container .table-container-inner .table tr td:last-child {\n  margin-left: 5px;\n}\n.table-container .table-container-inner .table tr td h4 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #3b7cff;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.table-container .table-container-inner .table tr td p {\n  margin-bottom: 3px;\n}\n.table-container .table-container-inner .table tr td a {\n  color: #3b7cff;\n}\n.table-container .table-container-inner .table tr td .blue-button {\n  font-size: 12px;\n}\n.table-container .table-container-inner .table tr td .table-btns {\n  position: relative;\n}\n.table-container .table-container-inner .table tr td .btn-link {\n  color: #3b7cff;\n  padding: 0 7px;\n  font-size: 18px;\n}\n.table-container .table-container-inner .table .inner-table tr:nth-child(odd) td {\n  background-color: transparent;\n}\n.table-container .table-container-inner .table .inner-table tr td {\n  width: 50%;\n}\n\n@media (max-width: 1200px) {\n  .back-btn {\n    float: none;\n  }\n  .search-control {\n    margin-bottom: 10px;\n  }\n  .new-stream-btn {\n    float: none;\n    display: inline-block;\n  }\n}\n\n/*# sourceMappingURL=logmanager.dark.css.map */\n",
            ],
            sourceRoot: '',
          },
        ]);

        // exports

        /***/
      },
      /* 7 */
      /*!*******************************!*\
  !*** ./utils/utils.plugin.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PluginPropsContext: () => /* binding */ PluginPropsContext,
          /* harmony export */ usePluginProps: () => /* binding */ usePluginProps,
          /* harmony export */ usePluginMeta: () => /* binding */ usePluginMeta,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        // This is used to be able to retrieve the root plugin props anywhere inside the app.

        var PluginPropsContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
        var usePluginProps = function () {
          var pluginProps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginPropsContext);
          return pluginProps;
        };
        var usePluginMeta = function () {
          var pluginProps = usePluginProps();
          return pluginProps === null || pluginProps === void 0 ? void 0 : pluginProps.meta;
        };

        /***/
      },
      /* 8 */
      /*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PLUGIN_BASE_URL: () => /* binding */ PLUGIN_BASE_URL,
          /* harmony export */ ROUTES: () => /* binding */ ROUTES,
          /* harmony export */ NAVIGATION_TITLE: () => /* binding */ NAVIGATION_TITLE,
          /* harmony export */ NAVIGATION_SUBTITLE: () => /* binding */ NAVIGATION_SUBTITLE,
          /* harmony export */ NAVIGATION: () => /* binding */ NAVIGATION,
          /* harmony export */
        });
        /* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./plugin.json */ 24
        );

        var PLUGIN_BASE_URL = '/a/'.concat(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id);
        var ROUTES;

        (function (ROUTES) {
          ROUTES['Dashboard'] = 'dashboard';
        })(ROUTES || (ROUTES = {}));

        var NAVIGATION_TITLE = 'Basic App Plugin';
        var NAVIGATION_SUBTITLE = 'Some extra description...'; // Add a navigation item for each route you would like to display in the navigation bar

        var NAVIGATION = {};

        /***/
      },
      /* 9 */
      /*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

        /***/
      },
      /* 10 */
      /*!**************************************!*\
  !*** ./css/workflowengine.light.css ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var content = __webpack_require__(
          /*! !!../../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./workflowengine.light.css */ 5
        );

        if (typeof content === 'string') content = [[module.id, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ 4)(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },
      /* 11 */
      /*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
      /***/ (module) => {
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
          var location = typeof window !== 'undefined' && window.location;

          if (!location) {
            throw new Error('fixUrls requires window.location');
          }

          // blank or null?
          if (!css || typeof css !== 'string') {
            return css;
          }

          var baseUrl = location.protocol + '//' + location.host;
          var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

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
          var fixedCss = css.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (fullMatch, origUrl) {
              // strip quotes (if they exist)
              var unquotedOrigUrl = origUrl
                .trim()
                .replace(/^"(.*)"$/, function (o, $1) {
                  return $1;
                })
                .replace(/^'(.*)'$/, function (o, $1) {
                  return $1;
                });

              // already a full url? no change
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
                return fullMatch;
              }

              // convert the url to a full url
              var newUrl;

              if (unquotedOrigUrl.indexOf('//') === 0) {
                //TODO: should we add protocol?
                newUrl = unquotedOrigUrl;
              } else if (unquotedOrigUrl.indexOf('/') === 0) {
                // path should be relative to the base url
                newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
              } else {
                // path should be relative to current directory
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
              }

              // send back the fixed url(...)
              return 'url(' + JSON.stringify(newUrl) + ')';
            }
          );

          // send back the fixed css
          return fixedCss;
        };

        /***/
      },
      /* 12 */
      /*!*************************************!*\
  !*** ./css/workflowengine.dark.css ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var content = __webpack_require__(
          /*! !!../../node_modules/css-loader/index.js??ruleSet[1].rules[4].use[1]!./workflowengine.dark.css */ 6
        );

        if (typeof content === 'string') content = [[module.id, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ 4)(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },
      /* 13 */
      /*!********************************!*\
  !*** ./components/App/App.tsx ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ App: () => /* binding */ App,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var utils_utils_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! utils/utils.plugin */ 7
        );
        /* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Routes */ 20);

        var App =
          /** @class */
          (function (_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(App, _super);

            function App() {
              return (_super !== null && _super.apply(this, arguments)) || this;
            }

            App.prototype.render = function () {
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                utils_utils_plugin__WEBPACK_IMPORTED_MODULE_1__.PluginPropsContext.Provider,
                {
                  value: this.props,
                },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__.Routes, null)
              );
            };

            return App;
          })(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

        /***/
      },
      /* 14 */
      /*!**************************************!*\
  !*** ./components/Routes/Routes.tsx ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Routes: () => /* binding */ Routes,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ 2
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../pages/Dashboard */ 21
        );
        /* harmony import */ var _utils_utils_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../utils/utils.routing */ 23
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ 8
        );

        var Routes = function () {
          (0, _utils_utils_routing__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch,
            null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              exact: true,
              path: (0, _utils_utils_routing__WEBPACK_IMPORTED_MODULE_3__.prefixRoute)(
                _constants__WEBPACK_IMPORTED_MODULE_4__.ROUTES.Dashboard
              ),
              component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_2__.Dashboard,
            })
          );
        };

        /***/
      },
      /* 15 */
      /*!********************************************!*\
  !*** ./components/AppConfig/AppConfig.tsx ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppConfig: () => /* binding */ AppConfig,
          /* harmony export */ updatePlugin: () => /* binding */ updatePlugin,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ 9);
        /* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @grafana/runtime */ 26
        );
        /* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @emotion/css */ 27
        );
        /* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */ var _SecretInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../SecretInput */ 28
        );

        var AppConfig = function (_a) {
          var plugin = _a.plugin;
          var s = (0, _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
          var _b = plugin.meta,
            enabled = _b.enabled,
            pinned = _b.pinned,
            jsonData = _b.jsonData;

          var _c = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
                apiUrl: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.apiUrl) || '',
                apiKey: '',
                isApiKeySet: Boolean(jsonData === null || jsonData === void 0 ? void 0 : jsonData.isApiKeySet),
              }),
              2
            ),
            state = _c[0],
            setState = _c[1];

          var onResetApiKey = function () {
            return setState(
              (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)(
                (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state),
                {
                  apiKey: '',
                  isApiKeySet: false,
                }
              )
            );
          };

          var onChangeApiKey = function (event) {
            setState(
              (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)(
                (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state),
                {
                  apiKey: event.target.value.trim(),
                }
              )
            );
          };

          var onChangeApiUrl = function (event) {
            setState(
              (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)(
                (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, state),
                {
                  apiUrl: event.target.value.trim(),
                }
              )
            );
          };

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet,
              {
                label: 'Enable / Disable',
              },
              !enabled &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    'div',
                    {
                      className: s.colorWeak,
                    },
                    'The plugin is currently not enabled.'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
                    {
                      className: s.marginTop,
                      variant: 'primary',
                      onClick: function () {
                        return updatePluginAndReload(plugin.meta.id, {
                          enabled: true,
                          pinned: true,
                          jsonData: jsonData,
                        });
                      },
                    },
                    'Enable plugin'
                  )
                ),
              enabled &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    'div',
                    {
                      className: s.colorWeak,
                    },
                    'The plugin is currently enabled.'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
                    {
                      className: s.marginTop,
                      variant: 'destructive',
                      onClick: function () {
                        return updatePluginAndReload(plugin.meta.id, {
                          enabled: false,
                          pinned: false,
                          jsonData: jsonData,
                        });
                      },
                    },
                    'Disable plugin'
                  )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet,
              {
                label: 'API Settings',
                className: s.marginTopXl,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field,
                {
                  label: 'API Key',
                  description: 'A secret key for authenticating to our custom API',
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _SecretInput__WEBPACK_IMPORTED_MODULE_4__.SecretInput,
                  {
                    width: 60,
                    'data-testid': 'api-key',
                    id: 'api-key',
                    value: state === null || state === void 0 ? void 0 : state.apiKey,
                    isConfigured: state.isApiKeySet,
                    placeholder: 'Your secret API key',
                    onChange: onChangeApiKey,
                    onReset: onResetApiKey,
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field,
                {
                  label: 'API Url',
                  description: '',
                  className: s.marginTop,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input,
                  {
                    width: 60,
                    id: 'api-url',
                    'data-testid': 'api-url',
                    label: 'API Url',
                    value: state === null || state === void 0 ? void 0 : state.apiUrl,
                    placeholder: 'E.g.: http://mywebsite.com/api/v1',
                    onChange: onChangeApiUrl,
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'div',
                {
                  className: s.marginTop,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
                  {
                    type: 'submit',
                    onClick: function () {
                      return updatePluginAndReload(plugin.meta.id, {
                        enabled: enabled,
                        pinned: pinned,
                        jsonData: {
                          apiUrl: state.apiUrl,
                          isApiKeySet: true,
                        },
                        // This cannot be queried later by the frontend.
                        // We don't want to override it in case it was set previously and left untouched now.
                        secureJsonData: state.isApiKeySet
                          ? undefined
                          : {
                              apiKey: state.apiKey,
                            },
                      });
                    },
                    disabled: Boolean(!state.apiUrl || (!state.isApiKeySet && !state.apiKey)),
                  },
                  'Save API settings'
                )
              )
            )
          );
        };

        var getStyles = function (theme) {
          return {
            colorWeak: (0, _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(
              templateObject_1 ||
                (templateObject_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(
                  ['\n    color: ', ';\n  '],
                  ['\n    color: ', ';\n  ']
                )),
              theme.colors.text.secondary
            ),
            marginTop: (0, _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(
              templateObject_2 ||
                (templateObject_2 = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(
                  ['\n    margin-top: ', ';\n  '],
                  ['\n    margin-top: ', ';\n  ']
                )),
              theme.spacing(3)
            ),
            marginTopXl: (0, _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)(
              templateObject_3 ||
                (templateObject_3 = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__makeTemplateObject)(
                  ['\n    margin-top: ', ';\n  '],
                  ['\n    margin-top: ', ';\n  ']
                )),
              theme.spacing(6)
            ),
          };
        };

        var updatePluginAndReload = function (pluginId, data) {
          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function () {
            var e_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);

                  return [
                    4,
                    /*yield*/
                    updatePlugin(pluginId, data),
                  ];

                case 1:
                  _a.sent(); // Reloading the page as the changes made here wouldn't be propagated to the actual plugin otherwise.
                  // This is not ideal, however unfortunately currently there is no supported way for updating the plugin state.

                  _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.reload();
                  return [
                    3, /*break*/
                    3,
                  ];

                case 2:
                  e_1 = _a.sent();
                  console.error('Error while updating the plugin', e_1);
                  return [
                    3, /*break*/
                    3,
                  ];

                case 3:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        };

        var updatePlugin = function (pluginId, data) {
          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function () {
            var response;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [
                    4,
                    /*yield*/
                    (0, _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().datasourceRequest({
                      url: '/api/plugins/'.concat(pluginId, '/settings'),
                      method: 'POST',
                      data: data,
                    }),
                  ];

                case 1:
                  response = _a.sent();
                  return [
                    2,
                    /*return*/
                    response === null || response === void 0 ? void 0 : response.data,
                  ];
              }
            });
          });
        };
        var templateObject_1, templateObject_2, templateObject_3;

        /***/
      },
      /* 16 */
      /*!************************************************!*\
  !*** ./components/SecretInput/SecretInput.tsx ***!
  \************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SecretInput: () => /* binding */ SecretInput,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ 9);
        /* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_1__
        );

        // This replaces the "LegacyForms.SecretFormField" component from @grafana/ui, so we can start using the newer form components.

        var SecretInput = function (_a) {
          var isConfigured = _a.isConfigured,
            onReset = _a.onReset,
            props = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ['isConfigured', 'onReset']);

          if (isConfigured) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input,
                (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, {
                  type: 'text',
                  disabled: true,
                  value: 'configured',
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  onClick: onReset,
                  variant: 'secondary',
                },
                'Reset'
              )
            );
          }

          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input,
            (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, {
              type: 'password',
            })
          );
        };

        /***/
      },
      ,
      /* 17 */ /* 18 */
      /*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

        /***/
      },
      /* 19 */
      /*!**********************************!*\
  !*** ./components/App/index.tsx ***!
  \**********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ App: () => /* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__.App,
          /* harmony export */
        });
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ 13);

        /***/
      },
      /* 20 */
      /*!*************************************!*\
  !*** ./components/Routes/index.tsx ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Routes: () => /* reexport safe */ _Routes__WEBPACK_IMPORTED_MODULE_0__.Routes,
          /* harmony export */
        });
        /* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes */ 14);

        /***/
      },
      /* 21 */
      /*!***********************************!*\
  !*** ./pages/Dashboard/index.tsx ***!
  \***********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Dashboard: () => /* binding */ Dashboard,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Breadcrumbs */ 22
        );

        var Dashboard =
          /** @class */
          (function (_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Dashboard, _super);

            function Dashboard(props) {
              var _this = _super.call(this, props) || this;

              _this.state = {
                tcpInputs: [],
                openCreateMenu: false,
                streamTableData: [],
                indexSets: [],
              };
              _this.breadCrumbs = [
                {
                  label: 'Home',
                  route: '/',
                },
                {
                  label: 'Log Managment',
                  isCurrentPage: true,
                },
              ];
              return _this;
            }

            Dashboard.prototype.render = function () {
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'div',
                {
                  className: 'logmanager-dashboard-container',
                },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs,
                  {
                    breadcrumbs: this.breadCrumbs,
                    pageTitle: 'LOG MANAGMENT',
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                  className: 'logmanager-page-container',
                })
              );
            };

            return Dashboard;
          })(react__WEBPACK_IMPORTED_MODULE_0__.Component);

        /***/
      },
      /* 22 */
      /*!*******************************!*\
  !*** ./pages/Breadcrumbs.tsx ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Breadcrumbs: () => /* binding */ Breadcrumbs,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ 2
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);

        var Breadcrumbs =
          /** @class */
          (function (_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Breadcrumbs, _super);

            function Breadcrumbs(props) {
              var _this = _super.call(this, props) || this;

              _this.state = {};
              return _this;
            }

            Breadcrumbs.prototype.render = function () {
              var _a = this.props,
                breadcrumbs = _a.breadcrumbs,
                pageTitle = _a.pageTitle;
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'div',
                {
                  className: 'breadcrumbs-container',
                },
                pageTitle &&
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'div',
                    {
                      className: 'page-title',
                    },
                    pageTitle
                  ),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'div',
                  {
                    className: 'breadcrumbs',
                  },
                  breadcrumbs.map(function (breadcrumb, index) {
                    if (breadcrumb.isCurrentPage) {
                      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'span',
                        {
                          key: index,
                          className: 'current-page',
                        },
                        breadcrumb.label
                      );
                    } else {
                      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        {
                          key: index,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
                          {
                            to: ''.concat(breadcrumb.route),
                            className: 'breadcrumbs-link',
                          },
                          breadcrumb.label
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          'span',
                          {
                            className: 'separator',
                          },
                          react__WEBPACK_IMPORTED_MODULE_0__.createElement('i', {
                            className: 'fa fa-chevron-right',
                          })
                        )
                      );
                    }
                  })
                )
              );
            };

            return Breadcrumbs;
          })(react__WEBPACK_IMPORTED_MODULE_0__.Component);

        /***/
      },
      /* 23 */
      /*!********************************!*\
  !*** ./utils/utils.routing.ts ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ useNavigation: () => /* binding */ useNavigation,
          /* harmony export */ prefixRoute: () => /* binding */ prefixRoute,
          /* harmony export */ getNavModel: () => /* binding */ getNavModel,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ 2
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var _utils_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./utils.plugin */ 7
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 8);

        // Displays a top navigation tab-bar if needed

        function useNavigation() {
          var pluginProps = (0, _utils_plugin__WEBPACK_IMPORTED_MODULE_2__.usePluginProps)();
          var location = (0, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
            function () {
              if (!pluginProps) {
                console.error('Root plugin props are not available in the context.');
                return;
              }

              var activeId =
                Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION).find(function (routeId) {
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
                onNavChanged(
                  getNavModel({
                    activeId: activeId,
                    basePath: basename,
                    logoUrl: meta.info.logos.large,
                  })
                );
              }
            },
            [location.pathname, pluginProps]
          );
        } // Prefixes the route with the base URL of the plugin

        function prefixRoute(route) {
          return ''.concat(_constants__WEBPACK_IMPORTED_MODULE_3__.PLUGIN_BASE_URL, '/').concat(route);
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
              return (0,
              tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, navItem), {
                active: navItem.id === activeId,
              });
            }),
          };
          return {
            main: main,
            node: main,
          };
        }

        /***/
      },
      /* 24 */
      /*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
      /***/ (module) => {
        'use strict';
        module.exports = JSON.parse(
          '{"$schema":"https://raw.githubusercontent.com/grafana/grafana/master/docs/sources/developers/plugins/plugin.schema.json","type":"app","name":"Workflow Engine","id":"xformation-workflow-engine","info":{"description":"Workflow Engine","author":{"name":"Synectiks"},"logos":{"small":"img/asset_logo.svg","large":"img/asset_logo.svg"},"screenshots":[],"version":"%VERSION%","updated":"%TODAY%"},"includes":[{"type":"page","name":"Dashboard","addToNav":false,"defaultNav":false,"role":"Admin","path":"/a/%PLUGIN_ID%"}],"dependencies":{"grafanaDependency":">=8.0.0","plugins":[]}}'
        );

        /***/
      },
      /* 25 */
      /*!****************************************!*\
  !*** ./components/AppConfig/index.tsx ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppConfig: () => /* reexport safe */ _AppConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig,
          /* harmony export */ updatePlugin: () =>
            /* reexport safe */ _AppConfig__WEBPACK_IMPORTED_MODULE_0__.updatePlugin,
          /* harmony export */
        });
        /* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppConfig */ 15);

        /***/
      },
      /* 26 */
      /*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__26__;

        /***/
      },
      /* 27 */
      /*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
      /***/ (module) => {
        'use strict';
        module.exports = __WEBPACK_EXTERNAL_MODULE__27__;

        /***/
      },
      /* 28 */
      /*!******************************************!*\
  !*** ./components/SecretInput/index.tsx ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SecretInput: () =>
            /* reexport safe */ _SecretInput__WEBPACK_IMPORTED_MODULE_0__.SecretInput,
          /* harmony export */
        });
        /* harmony import */ var _SecretInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./SecretInput */ 16
        );

        /***/
      },
      /******/
    ];
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ id: moduleId,
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      'use strict';
      /*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ loadPluginCss: () => /* binding */ loadPluginCss,
        /* harmony export */ plugin: () => /* binding */ plugin,
        /* harmony export */
      });
      /* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @grafana/data */ 18
      );
      /* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _grafana_data__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./components/App */ 19
      );
      /* harmony import */ var _components_AppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./components/AppConfig */ 25
      );

      function loadPluginCss() {
        var w = window;

        if (w.grafanaBootData.user.lightTheme) {
          __webpack_require__(/*! ./css/workflowengine.light.css */ 10);
        } else {
          __webpack_require__(/*! ./css/workflowengine.dark.css */ 12);
        }
      }
      loadPluginCss();
      var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.AppPlugin()
        .setRootPage(_components_App__WEBPACK_IMPORTED_MODULE_1__.App)
        .addConfigPage({
          title: 'Configuration',
          icon: 'fa fa-cog',
          // @ts-ignore - Would expect a Class component, however works absolutely fine with a functional one
          // Implementation: https://github.com/grafana/grafana/blob/fd44c01675e54973370969dfb9e78f173aff7910/public/app/features/plugins/PluginPage.tsx#L157
          body: _components_AppConfig__WEBPACK_IMPORTED_MODULE_2__.AppConfig,
          id: 'configuration',
        });
    })();

    /******/ return __webpack_exports__;
    /******/
  })();
});
//# sourceMappingURL=module.js.map
