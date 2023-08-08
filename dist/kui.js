/**
 * @keisokoo/uikit - 0.0.1
 * Author : keisokoo
 * Copyright (c) 2016, 2023 to keisokoo, released under the MIT license.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components'), require('react-syntax-highlighter'), require('react-syntax-highlighter/dist/esm/styles/prism')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components', 'react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/prism'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Kui = {}, global.React, global.StyledComponents, global.ReactSyntaxHighlighter, global.PrismStyles));
})(this, (function (exports, React, styled, reactSyntaxHighlighter, prism) { 'use strict';

  function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

  function _interopNamespaceCompat(e) {
    if (e && typeof e === 'object' && 'default' in e) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceCompat(React);
  var styled__default = /*#__PURE__*/_interopDefaultCompat(styled);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /******************************************************************************
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
  /* global Reflect, Promise, SuppressedError, Symbol */


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

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$3, _templateObject5$2;
  var rotate = styled.keyframes(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n0%{\n  transform: rotate(0deg);\n}\n100%{\n  transform: rotate(360deg);\n}\n"])));
  var ButtonStyle = {
    Wrap: styled__default.default.button(function (_ref) {
      var _ref$theme = _ref.theme,
        color = _ref$theme.color,
        textStyle = _ref$theme.textStyle,
        $css = _ref.$css,
        $pending = _ref.$pending,
        $radius = _ref.$radius,
        _ref$$buttonStyle = _ref.$buttonStyle,
        $buttonStyle = _ref$$buttonStyle === void 0 ? 'fill' : _ref$$buttonStyle,
        $width = _ref.$width;
      return styled.css(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      user-select: none;\n      padding: 8px 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ", "\n      transition: 0.15s;\n      background-color: ", ";\n      &:focus {\n        outline: none;\n        background-color: ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      &:active {\n        background-color: ", ";\n      }\n      color: ", ";\n      &:disabled {\n        cursor: default;\n        color: ", ";\n        background-color: ", " !important;\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), $width ? styled.css(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n            width: ", ";\n            padding: 8px;\n          "])), typeof $width === 'number' ? $width + 'px' : $width) : '', color[$buttonStyle].backgroundColor, color[$buttonStyle].backgroundFocusColor, color[$buttonStyle].backgroundHoverColor, color[$buttonStyle].backgroundActiveColor, color[$buttonStyle].textColor, color[$buttonStyle].textDisabledColor, color[$buttonStyle].backgroundColor, textStyle.default, $radius ? "border-radius: ".concat(typeof $radius === 'number' ? "".concat($radius, "px") : $radius, ";") : "border-radius: 4px;", $pending ? styled.css(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["\n            svg {\n              animation: ", " 1s linear infinite;\n            }\n          "])), rotate) : '', $buttonStyle === 'border' ? styled.css(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n            box-shadow: inset 0px 0px 0px 1px ", ";\n          "])), color[$buttonStyle].borderColor) : '', $css !== null && $css !== void 0 ? $css : '');
    })
  };

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  var freeGlobal$1 = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal$1 || freeSelf || Function('return this')();

  var root$1 = root;

  /** Built-in value references. */
  var Symbol$1 = root$1.Symbol;

  var Symbol$2 = Symbol$1;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$a.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$9.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray$1 = isArray;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$1 = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$1['__core-js_shared__'];

  var coreJsData$1 = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$8 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var baseCreate$1 = baseCreate;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  function noop() {
    // No operation performed.
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var defineProperty$1 = defineProperty;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
    return defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  var baseSetToString$1 = baseSetToString;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString$1);

  var setToString$1 = setToString;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString$1(overRest(func, start, identity), func + '');
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

    return value === proto;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$1;
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments$1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */
  var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root$1.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  var isBuffer$1 = isBuffer;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal$1.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  var nodeUtil$1 = nodeUtil;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray$1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value),
        isArg = !isArr && isArguments$1(value),
        isBuff = !isArr && !isArg && isBuffer$1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  var nativeCreate$1 = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$1.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root$1, 'Map');

  var Map$1 = Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  var getPrototype$1 = getPrototype;

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$1 = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root$1.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root$1, 'Set');

  var Set$1 = Set;

  /** Built-in value references. */
  var Uint8Array = root$1.Uint8Array;

  var Uint8Array$1 = Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate$1(getPrototype$1(object))
      : {};
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  var baseFor$1 = baseFor;

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
        srcValue = safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray$1(srcValue),
          isBuff = !isArr && isBuffer$1(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$1(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
        newValue = objValue;
        if (isArguments$1(objValue)) {
          newValue = toPlainObject(objValue);
        }
        else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor$1(source, function(srcValue, key) {
      stack || (stack = new Stack);
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  var merge$1 = merge;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set$1 && (1 / setToArray(new Set$1([,-0]))[1]) == INFINITY) ? noop : function(values) {
    return new Set$1(values);
  };

  var createSet$1 = createSet;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    }
    else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet$1(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = iteratee ? [] : result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return (array && array.length) ? baseUniq(array) : [];
  }

  var colors = {
    transparent: 'transparent',
    foreground: '#e2dbdb',
    background: '#1c1c1c',
    white: '#FFFFFF',
    white70: '#ffffffb2',
    white50: '#ffffff7f',
    white30: '#ffffff4c',
    white20: '#ffffff2d',
    white10: '#ffffff19',
    gray0: '#d4cfca',
    gray1: '#cdcdcd',
    gray2: '#acacac',
    gray3: '#8f8f8f',
    gray4: '#6b6b6b',
    gray5: '#4a4a4a',
    gray6: '#313131',
    gray7: '#222020',
    fog: '#414141',
    black: '#000000',
    alert: '#D8310D',
    warning: '#EFAC00',
    success: '#1ED300',
    info: '#0094D3',
    primary: '#24b3f6'
  };
  var fonts = {
    default: 'font-size:16px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:24px;',
    small: 'font-size:14px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:20px;'
  };
  var defaultThemes = {
    colors: colors,
    fonts: fonts
  };

  var KuiContext = /*#__PURE__*/React__namespace.default.createContext({
    theme: defaultThemes
  });

  function getButtonStyle(theme) {
    var colors = theme.colors,
      fonts = theme.fonts;
    return {
      color: {
        fill: {
          textColor: colors.foreground,
          textDisabledColor: colors.gray5,
          backgroundColor: colors.gray6,
          backgroundActiveColor: colors.white30,
          backgroundFocusColor: colors.fog,
          backgroundHoverColor: colors.fog,
          borderColor: colors.gray4,
          borderFocusColor: colors.primary,
          borderDisabledColor: colors.white30,
          iconFocusColor: colors.primary
        },
        border: {
          textColor: colors.foreground,
          textDisabledColor: colors.gray5,
          backgroundColor: colors.transparent,
          backgroundActiveColor: colors.white30,
          backgroundFocusColor: colors.white10,
          backgroundHoverColor: colors.white10,
          borderColor: colors.white20,
          borderFocusColor: colors.primary,
          borderDisabledColor: colors.white30,
          iconFocusColor: colors.primary
        }
      },
      textStyle: {
        default: fonts.default
      }
    };
  }
  var getButtonTheme = function getButtonTheme(currentTheme, customTheme) {
    var theme = merge$1(currentTheme, customTheme);
    return theme;
  };
  var ButtonProvider = function ButtonProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultButtonTheme = getButtonStyle(globalTheme.theme);
    return /*#__PURE__*/React__namespace.default.createElement(styled.ThemeProvider, {
      theme: customTheme ? getButtonTheme(defaultButtonTheme, customTheme) : defaultButtonTheme
    }, children);
  };

  var SvgLoading = function SvgLoading(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      fill: "none"
    }, props), /*#__PURE__*/React__namespace.createElement("path", {
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: 0.5,
      strokeWidth: 3,
      d: "M10 2a8 8 0 1 0 8 8",
      className: "Loading_svg__stroke-path"
    }));
  };

  var Wrap$3 = ButtonStyle.Wrap;
  var DefaultButton = function DefaultButton(_a) {
    var customTheme = _a.customTheme,
      loading = _a.loading,
      props = __rest(_a, ["customTheme", "loading"]);
    return /*#__PURE__*/React__namespace.default.createElement(ButtonProvider, {
      customTheme: customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(Wrap$3, _extends({
      "$pending": !!loading
    }, props), loading ? /*#__PURE__*/React__namespace.default.createElement(SvgLoading, null) : props.children));
  };
  var Button = function Button(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultButton, _extends({}, props));
  };

  var _templateObject$4, _templateObject2$4, _templateObject3$3, _templateObject4$2, _templateObject5$1;
  var CodeBlockStyle = {
    Wrap: styled__default.default.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n    ", ";\n  "])), function (_ref) {
      var $css = _ref.$css;
      return styled.css(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n      background: rgb(39, 40, 34);\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n      pre {\n        flex: 1;\n        flex-shrink: 0;\n        border: 1px solid #5a5a5a;\n        border-radius: 0 0 12px 12px;\n      }\n      ", "\n    "])), $css !== null && $css !== void 0 ? $css : '');
    }),
    Title: styled__default.default.div(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n    font-size: 14px;\n    color: #9d9d9d;\n    border: 1px solid #5a5a5a;\n    border-bottom: 0px;\n    padding: 16px 24px;\n    border-radius: 12px 12px 0 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .copy-icon {\n      cursor: pointer;\n      &:hover {\n        path {\n          fill: #fff;\n        }\n        color: #fff;\n      }\n      &:active {\n        path {\n          fill: #00c331;\n        }\n      }\n    }\n    .copy-check-icon {\n      cursor: default;\n      user-select: none;\n    }\n  "]))),
    FileName: styled__default.default.div(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  "]))),
    Clipboard: styled__default.default.div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    &:focus {\n      outline: none;\n      path {\n        fill: #007cc3;\n      }\n      color: #007cc3;\n    }\n  "])))
  };

  /**
   * 클립보드 복사
   *
   * @param text
   * @returns
   */
  function copyToClipboard(text) {
    var _a;
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var El;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.clipboard) && window.isSecureContext)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", new Promise(function (res, rej) {
              navigator.clipboard.writeText(text).then(function () {
                res(text);
              }).catch(function (err) {
                rej('error');
              });
            }));
          case 4:
            El = document.createElement('textarea');
            El.style.position = 'absolute';
            El.style.opacity = '0';
            document.body.appendChild(El);
            El.value = text;
            El.focus();
            El.select();
            return _context.abrupt("return", new Promise(function (res, rej) {
              document.execCommand('copy') ? res(text) : rej('error');
              El.remove();
            }));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  }

  var SvgCopyCheck = function SvgCopyCheck(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 14,
      height: 18,
      fill: "none"
    }, props), /*#__PURE__*/React__namespace.createElement("path", {
      fill: "#00AB3A",
      d: "M11.813 2.25H9A2.252 2.252 0 0 0 6.75 0 2.252 2.252 0 0 0 4.5 2.25H1.687C.756 2.25 0 3.006 0 3.938v12.374C0 17.244.756 18 1.688 18h10.124c.932 0 1.688-.756 1.688-1.688V3.938c0-.931-.756-1.687-1.688-1.687ZM6.75 1.406c.468 0 .844.376.844.844a.842.842 0 0 1-.844.844.842.842 0 0 1-.844-.844c0-.468.376-.844.844-.844Zm4.26 8.15L5.985 14.54a.422.422 0 0 1-.598-.004L2.482 11.61a.422.422 0 0 1 .004-.598l.998-.991a.422.422 0 0 1 .598.003l1.617 1.631 3.726-3.698a.422.422 0 0 1 .598.003l.992.999a.422.422 0 0 1-.004.597Z"
    }));
  };

  var SvgCopy = function SvgCopy(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 14,
      height: 18,
      fill: "none"
    }, props), /*#__PURE__*/React__namespace.createElement("g", {
      clipPath: "url(#copy_svg__a)"
    }, /*#__PURE__*/React__namespace.createElement("path", {
      fill: "#8F8F8F",
      d: "M13.5 3.938v12.374c0 .932-.755 1.688-1.688 1.688H1.688A1.687 1.687 0 0 1 0 16.312V3.938C0 3.006.756 2.25 1.688 2.25H4.5C4.5 1.01 5.51 0 6.75 0S9 1.01 9 2.25h2.813c.931 0 1.687.756 1.687 1.688ZM6.75 1.405a.844.844 0 1 0 0 1.688.844.844 0 0 0 0-1.688Zm3.375 4.008v-.703a.21.21 0 0 0-.21-.211h-6.33a.21.21 0 0 0-.21.21v.704a.21.21 0 0 0 .21.211h6.33a.21.21 0 0 0 .21-.21Z"
    })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
      id: "copy_svg__a"
    }, /*#__PURE__*/React__namespace.createElement("path", {
      fill: "#fff",
      d: "M0 0h13.5v18H0z"
    }))));
  };

  var SvgTs = function SvgTs(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 18,
      height: 18,
      fill: "none"
    }, props), /*#__PURE__*/React__namespace.createElement("rect", {
      width: 18,
      height: 18,
      fill: "#8F8F8F",
      rx: 1
    }), /*#__PURE__*/React__namespace.createElement("path", {
      fill: "#272822",
      d: "M4 9.463V8.106h6.14v1.357H7.85v6.427H6.29V9.463H4ZM14.383 10.345c-.03-.307-.154-.545-.376-.715-.221-.17-.522-.254-.901-.254a1.66 1.66 0 0 0-.654.114.922.922 0 0 0-.409.308.762.762 0 0 0-.138.448c-.005.14.023.261.084.365.063.104.15.194.259.27.11.073.236.138.38.194.143.053.296.098.46.136l.67.168c.327.076.626.177.899.304.272.126.508.282.708.467.2.185.354.403.463.654.112.25.17.538.172.862-.002.477-.12.89-.35 1.24-.23.347-.56.616-.993.809-.43.19-.95.285-1.559.285-.603 0-1.129-.096-1.577-.289a2.328 2.328 0 0 1-1.043-.855c-.249-.38-.379-.85-.39-1.41h1.528c.017.261.09.479.216.654.129.172.3.303.514.391.217.086.461.13.734.13.268 0 .5-.041.697-.122.2-.081.354-.194.464-.338a.802.802 0 0 0 .164-.498.663.663 0 0 0-.15-.441c-.097-.12-.24-.22-.43-.304a4.255 4.255 0 0 0-.69-.228l-.814-.213c-.63-.16-1.128-.41-1.493-.749-.365-.34-.546-.797-.544-1.372a2.1 2.1 0 0 1 .361-1.235 2.456 2.456 0 0 1 1.012-.825A3.446 3.446 0 0 1 13.117 8c.554 0 1.039.099 1.452.296.416.198.74.473.971.825.231.352.35.76.358 1.224h-1.515Z"
    }));
  };

  var Wrap$2 = CodeBlockStyle.Wrap,
    Title = CodeBlockStyle.Title,
    FileName = CodeBlockStyle.FileName,
    Clipboard = CodeBlockStyle.Clipboard;
  var CodeBlock = function CodeBlock(_a) {
    var _b;
    var $css = _a.$css,
      children = _a.children,
      title = _a.title,
      props = __rest(_a, ["$css", "children", "title"]);
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      copyStatus = _useState2[0],
      set_copyStatus = _useState2[1];
    var timeoutRef = React.useRef();
    React.useEffect(function () {
      if (copyStatus) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(function () {
          set_copyStatus(false);
        }, 2000);
      }
      return function () {
        clearTimeout(timeoutRef.current);
      };
    }, [copyStatus]);
    return /*#__PURE__*/React__namespace.default.createElement(Wrap$2, _extends({
      "$css": $css
    }, props), /*#__PURE__*/React__namespace.default.createElement(Title, null, /*#__PURE__*/React__namespace.default.createElement(FileName, null, /*#__PURE__*/React__namespace.default.createElement(SvgTs, null), title), /*#__PURE__*/React__namespace.default.createElement("div", null, copyStatus ? /*#__PURE__*/React__namespace.default.createElement(Clipboard, {
      className: "copy-check-icon"
    }, /*#__PURE__*/React__namespace.default.createElement(SvgCopyCheck, null), /*#__PURE__*/React__namespace.default.createElement("span", null, "Copied !")) : /*#__PURE__*/React__namespace.default.createElement(Clipboard, {
      tabIndex: 0,
      className: "copy-icon",
      onClick: function onClick() {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _c, copied;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return copyToClipboard((_c = children === null || children === void 0 ? void 0 : children.trim()) !== null && _c !== void 0 ? _c : '');
              case 3:
                copied = _context.sent;
                if (!(copied === 'error')) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                set_copyStatus(true);
                _context.next = 11;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 9]]);
        }));
      },
      onKeyDown: function onKeyDown(e) {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var _d, copied;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(e.code.includes('Enter') || e.code === 'Space')) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 3;
                return copyToClipboard((_d = children === null || children === void 0 ? void 0 : children.trim()) !== null && _d !== void 0 ? _d : '');
              case 3:
                copied = _context2.sent;
                if (!(copied === 'error')) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                set_copyStatus(true);
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
      }
    }, /*#__PURE__*/React__namespace.default.createElement(SvgCopy, null), /*#__PURE__*/React__namespace.default.createElement("span", null, "Copy")))), /*#__PURE__*/React__namespace.default.createElement(reactSyntaxHighlighter.Prism, {
      showLineNumbers: true,
      lineNumberStyle: {
        borderRight: '1px solid #515151',
        marginRight: '24px',
        paddingLeft: '12px'
      },
      language: 'tsx',
      style: prism.okaidia,
      customStyle: {
        margin: 0,
        borderRadius: '0 0 12px 12px'
      }
    }, (_b = children === null || children === void 0 ? void 0 : children.trim()) !== null && _b !== void 0 ? _b : ''));
  };

  var _templateObject$3, _templateObject2$3;
  function convertToCSS(key, value, inline) {
    if (inline) {
      if (!key.includes('$')) return '';
      key = key.replace('$', '');
    }
    var cssKey = key.replace(/[A-Z]/g, function (letter) {
      return "-".concat(letter.toLowerCase());
    });
    return "".concat(cssKey, ": ").concat(typeof value === 'number' ? value + 'px' : value, ";");
  }
  function convertObjectToCSS(styles, inline) {
    return Object.entries(styles).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      return convertToCSS(key, value, inline);
    }).join(' ');
  }
  var AddCss = function AddCss(props) {
    return typeof props.$css === 'string' ? styled.css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n        ", "\n      "])), props.$css) : props.$css || styled.css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral([""])));
  };

  var _templateObject$2, _templateObject2$2, _templateObject3$2;
  var Div = styled__default.default.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), AddCss, function (_a) {
    var $style = _a.$style,
      $css = _a.$css,
      rest = __rest(_a, ["$style", "$css"]);
    var inlineStyle = convertObjectToCSS(rest, true);
    var objectStyle = $style ? convertObjectToCSS($style) : "";
    var cssStyle = typeof $css === 'string' ? styled.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n            ", "\n          "])), $css) : $css || styled.css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral([""])));
    return (cssStyle.toString() + objectStyle + inlineStyle).trim();
  });

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  (function (module) {
  	/* global define */

  	(function () {

  		var hasOwn = {}.hasOwnProperty;

  		function classNames() {
  			var classes = [];

  			for (var i = 0; i < arguments.length; i++) {
  				var arg = arguments[i];
  				if (!arg) continue;

  				var argType = typeof arg;

  				if (argType === 'string' || argType === 'number') {
  					classes.push(arg);
  				} else if (Array.isArray(arg)) {
  					if (arg.length) {
  						var inner = classNames.apply(null, arg);
  						if (inner) {
  							classes.push(inner);
  						}
  					}
  				} else if (argType === 'object') {
  					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  						classes.push(arg.toString());
  						continue;
  					}

  					for (var key in arg) {
  						if (hasOwn.call(arg, key) && arg[key]) {
  							classes.push(key);
  						}
  					}
  				}
  			}

  			return classes.join(' ');
  		}

  		if (module.exports) {
  			classNames.default = classNames;
  			module.exports = classNames;
  		} else {
  			window.classNames = classNames;
  		}
  	}()); 
  } (classnames));

  var classnamesExports = classnames.exports;
  var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  var useOutsideClick = function useOutsideClick(innerSideDom, callback, dependencies) {
    var CallBack = React.useCallback(function (currentTarget) {
      callback(currentTarget);
    }, [callback]);
    React.useEffect(function () {
      function clickOutside(e) {
        if (!innerSideDom) return;
        if (dependencies && !dependencies.every(function (item) {
          return !!item === true;
        })) return;
        var EventTarget = e.target;
        var wrapTarget = typeof innerSideDom !== 'string' ? innerSideDom : document.querySelector(innerSideDom);
        if (EventTarget && wrapTarget && !wrapTarget.contains(EventTarget)) {
          CallBack(EventTarget);
        }
      }
      if (innerSideDom && dependencies && !dependencies.every(function (item) {
        return !!item === true;
      })) {
        window.removeEventListener('click', clickOutside);
      } else {
        window.addEventListener('click', clickOutside, false);
      }
      return function () {
        window.removeEventListener('click', clickOutside);
      };
    }, [innerSideDom, dependencies, CallBack]);
  };

  var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;
  var DropdownStyle = {
    Wrap: styled__default.default.div(function (_ref) {
      var _ref$theme = _ref.theme;
        _ref$theme.color;
        _ref$theme.textStyle;
        var $css = _ref.$css,
        $width = _ref.$width;
      return styled.css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      display: inline-block;\n      min-width: 100px;\n      position: relative;\n      ", "\n      ", "\n    "])), $width ? "width: ".concat(typeof $width === 'number' ? $width + 'px' : $width, ";") : '', $css !== null && $css !== void 0 ? $css : '');
    }),
    Label: styled__default.default.div(function (_ref2) {
      var _ref2$theme = _ref2.theme,
        color = _ref2$theme.color,
        textStyle = _ref2$theme.textStyle,
        $css = _ref2.$css,
        $width = _ref2.$width;
      return styled.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      border: 1px solid ", ";\n      background-color: ", ";\n      color: ", ";\n      ", "\n      padding: 8px;\n      cursor: pointer;\n      svg {\n        path {\n          fill: ", ";\n        }\n      }\n      &.placeholder {\n        color: ", ";\n      }\n      &:focus,\n      &.focus,\n      &:active {\n        outline: none;\n        background-color: ", ";\n        border: 1px solid ", ";\n        svg {\n          path {\n            fill: ", ";\n          }\n        }\n      }\n      &.active {\n        border-bottom: none;\n        svg {\n          transform: rotate(-180deg);\n        }\n      }\n      &.readOnly {\n        border: none;\n      }\n      &.disabled {\n        color: ", ";\n        border: 1px solid ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      ", "\n      user-select: none;\n      ", "\n    "])), color.borderColor, color.backgroundColor, color.textColor, textStyle.default, color.placeholderColor, color.placeholderColor, color.backgroundFocusColor, color.borderFocusColor, color.borderFocusColor, color.textDisabledColor, color.borderDisabledColor, color.backgroundHoverColor, $width ? "width: inherit;" : '', $css !== null && $css !== void 0 ? $css : '');
    }),
    List: styled__default.default.div(function (_ref3) {
      var color = _ref3.theme.color,
        $css = _ref3.$css;
      return styled.css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      position: absolute;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n      width: 100%;\n      border-top: none;\n      &.focus {\n        border-color: ", ";\n      }\n      max-height: 180px;\n      overflow-y: auto;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      ", "\n    "])), color.backgroundColor, color.borderColor, color.borderFocusColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    Item: styled__default.default.div(function (_ref4) {
      var color = _ref4.theme.color,
        $css = _ref4.$css;
      return styled.css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      width: 100%;\n      padding: 4px 8px;\n      user-select: none;\n      &.current {\n        color: ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      &:focus,\n      &:active {\n        outline: none;\n        background-color: ", ";\n      }\n      ", "\n    "])), color.textFocusColor, color.backgroundHoverColor, color.backgroundFocusColor, $css !== null && $css !== void 0 ? $css : '');
    })
  };

  var useTheme = function useTheme(_ref) {
    var theme = _ref.theme;
    var _React$useState = React__namespace.default.useState(theme ? merge$1(defaultThemes, theme) : defaultThemes),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      themes = _React$useState2[0],
      setThemes = _React$useState2[1];
    var handleTheme = function handleTheme(_theme) {
      setThemes(merge$1(themes, _theme));
    };
    var currentTheme = {
      theme: themes,
      setTheme: handleTheme
    };
    return currentTheme;
  };
  var KuiProvider = function KuiProvider(_ref2) {
    var children = _ref2.children,
      theme = _ref2.theme;
    var currentTheme = useTheme({
      theme: theme
    });
    return /*#__PURE__*/React__namespace.default.createElement(KuiContext.Provider, {
      value: currentTheme
    }, children);
  };

  function getDropdownStyle(theme) {
    var colors = theme.colors,
      fonts = theme.fonts;
    return {
      color: {
        textColor: colors.foreground,
        textDisabledColor: colors.gray5,
        backgroundColor: colors.gray6,
        backgroundFocusColor: colors.fog,
        backgroundHoverColor: colors.fog,
        borderColor: colors.gray4,
        borderFocusColor: colors.primary,
        placeholderColor: colors.gray3,
        borderDisabledColor: colors.white30,
        textFocusColor: colors.primary
      },
      textStyle: {
        default: fonts.default
      }
    };
  }
  var getDropdownTheme = function getDropdownTheme(currentTheme, customTheme) {
    var theme = merge$1(currentTheme, customTheme);
    return theme;
  };
  var DropdownProvider = function DropdownProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultDropdownTheme = getDropdownStyle(globalTheme.theme);
    return /*#__PURE__*/React__namespace.default.createElement(styled.ThemeProvider, {
      theme: customTheme ? getDropdownTheme(defaultDropdownTheme, customTheme) : defaultDropdownTheme
    }, children);
  };

  var SvgCaretDown = function SvgCaretDown(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, props), /*#__PURE__*/React__namespace.createElement("path", {
      d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    }));
  };

  var Wrap$1 = DropdownStyle.Wrap,
    Label = DropdownStyle.Label,
    List = DropdownStyle.List,
    Item = DropdownStyle.Item;
  var DefaultDropdown = function DefaultDropdown(_a) {
    var $css = _a.$css,
      $width = _a.$width,
      list = _a.list,
      customTheme = _a.customTheme,
      _a$placeholder = _a.placeholder,
      placeholder = _a$placeholder === void 0 ? '선택해주세요.' : _a$placeholder,
      disabled = _a.disabled,
      readOnly = _a.readOnly,
      value = _a.value,
      emitValue = _a.emitValue,
      props = __rest(_a, ["$css", "$width", "list", "customTheme", "placeholder", "disabled", "readOnly", "value", "emitValue"]);
    var _React$useState = React__namespace.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      init = _React$useState2[0],
      set_init = _React$useState2[1];
    var _React$useState3 = React__namespace.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focus = _React$useState4[0],
      set_focus = _React$useState4[1];
    var _React$useState5 = React__namespace.default.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      minWidth = _React$useState6[0],
      set_minWidth = _React$useState6[1];
    var _React$useState7 = React__namespace.default.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedItem = _React$useState8[0],
      set_selectedItem = _React$useState8[1];
    var valueKey = React__namespace.default.useMemo(function () {
      if (selectedItem) {
        return Object.keys(selectedItem)[0];
      }
      return null;
    }, [selectedItem]);
    var labelString = React__namespace.default.useMemo(function () {
      if (selectedItem && valueKey !== null) {
        return selectedItem[valueKey];
      }
      return null;
    }, [selectedItem]);
    var _React$useState9 = React__namespace.default.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      memorizedList = _React$useState10[0],
      set_memorizedList = _React$useState10[1];
    var _React$useState11 = React__namespace.default.useState(null),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      currentList = _React$useState12[0],
      set_currentList = _React$useState12[1];
    var getCurrentList = React__namespace.default.useCallback(function () {
      if (Array.isArray(list)) {
        var obj = uniq(list).reduce(function (acc, cur) {
          acc[cur] = cur;
          return acc;
        }, {});
        return obj;
      } else {
        return list;
      }
    }, [list]);
    React.useEffect(function () {
      if (value && list) {
        var current = getCurrentList();
        var obj = current[value];
        set_selectedItem(_defineProperty({}, value, obj));
      }
      set_init(true);
    }, [value, getCurrentList]);
    React__namespace.default.useEffect(function () {
      var obj = getCurrentList();
      set_memorizedList(obj);
    }, []);
    var memorizedRef = React__namespace.default.useRef(null);
    var labelRef = React__namespace.default.useRef(null);
    var wrapRef = React__namespace.default.useRef(null);
    var refs = list ? Object.keys(list).map(function () {
      return React__namespace.default.useRef(null);
    }) : [];
    React__namespace.default.useEffect(function () {
      if (memorizedRef.current) {
        var _memorizedRef$current = memorizedRef.current.getBoundingClientRect(),
          width = _memorizedRef$current.width;
        width && set_minWidth(width);
      }
    }, [memorizedRef.current]);
    useOutsideClick(wrapRef.current, function () {
      set_currentList(null);
    }, [currentList]);
    return /*#__PURE__*/React__namespace.default.createElement(DropdownProvider, {
      customTheme: customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(Wrap$1, _extends({
      ref: wrapRef,
      "$css": $css,
      "$width": $width
    }, props), minWidth === 0 && !$width && /*#__PURE__*/React__namespace.default.createElement(List, {
      ref: memorizedRef
    }, memorizedList && Object.keys(memorizedList).map(function (key) {
      return /*#__PURE__*/React__namespace.default.createElement("div", {
        key: key,
        "data-value": key.toString()
      }, memorizedList[key]);
    })), /*#__PURE__*/React__namespace.default.createElement(Label, _extends({
      ref: labelRef,
      tabIndex: 0
    }, !$width && {
      style: {
        minWidth: minWidth
      }
    }, {
      "$width": $width,
      className: classNames({
        focus: focus,
        disabled: disabled,
        readOnly: readOnly,
        active: currentList !== null,
        placeholder: !valueKey
      }),
      onClick: function onClick() {
        if (disabled || readOnly) return;
        var obj = getCurrentList();
        set_currentList(function (prev) {
          return prev === null ? obj : null;
        });
      },
      onKeyDown: function onKeyDown(e) {
        if (disabled || readOnly) return;
        if (e.code.includes('Enter') || e.code === 'Space') {
          var obj = getCurrentList();
          set_currentList(function (prev) {
            return prev === null ? obj : null;
          });
        }
        if (currentList) {
          if (e.key === 'ArrowDown') {
            var activeIndex = 0;
            var currentRef = refs[activeIndex].current;
            if (currentRef) currentRef.focus();
            e.preventDefault();
          } else if (e.key === 'ArrowUp') {
            var _activeIndex = Object.keys(currentList).length - 1;
            var _currentRef = refs[_activeIndex].current;
            if (_currentRef) _currentRef.focus();
            e.preventDefault();
          }
        }
      },
      onFocus: function onFocus() {
        if (disabled || readOnly) return;
        set_focus(true);
      },
      onBlur: function onBlur() {
        if (disabled || readOnly) return;
        set_focus(false);
      }
    }), /*#__PURE__*/React__namespace.default.createElement("div", null, init ? labelString !== null && labelString !== void 0 ? labelString : placeholder : ''), /*#__PURE__*/React__namespace.default.createElement(SvgCaretDown, {
      width: 18,
      height: 18
    })), currentList && /*#__PURE__*/React__namespace.default.createElement(List, {
      className: classNames({
        focus: focus
      })
    }, Object.keys(currentList).map(function (key, index) {
      return /*#__PURE__*/React__namespace.default.createElement(Item, {
        ref: refs[index],
        tabIndex: 0,
        key: key,
        className: classNames({
          current: valueKey === key
        }),
        "data-value": key.toString(),
        onClick: function onClick() {
          var _a;
          set_selectedItem(_defineProperty({}, key, currentList[key]));
          set_currentList(null);
          (_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.focus();
          emitValue && emitValue(key);
        },
        onFocus: function onFocus() {
          if (disabled || readOnly) return;
          set_focus(true);
        },
        onBlur: function onBlur() {
          if (disabled || readOnly) return;
          set_focus(false);
        },
        onKeyDown: function onKeyDown(e) {
          var _a;
          if (disabled || readOnly) return;
          if (e.code.includes('Enter') || e.code === 'Space') {
            set_selectedItem(_defineProperty({}, key, currentList[key]));
            set_currentList(null);
            (_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            emitValue && emitValue(key);
          }
          if (e.key === 'ArrowDown') {
            var activeIndex = (index + 1) % Object.keys(currentList).length;
            var currentRef = refs[activeIndex].current;
            if (currentRef) currentRef.focus();
            e.preventDefault();
          } else if (e.key === 'ArrowUp') {
            var _activeIndex2 = (index + Object.keys(currentList).length - 1) % Object.keys(currentList).length;
            var _currentRef2 = refs[_activeIndex2].current;
            if (_currentRef2) _currentRef2.focus();
            e.preventDefault();
          }
        },
        style: {
          width: '100%'
        }
      }, currentList[key]);
    }))));
  };
  var Dropdown = function Dropdown(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultDropdown, _extends({}, props));
  };

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
  var getWrapStyle = function getWrapStyle(props, styleType) {
    var color = props.color,
      textStyle = props.textStyle;
    var WrapStyleCSS = {
      default: styled.css(_templateObject || (_templateObject = _taggedTemplateLiteral([""]))),
      box: styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n      background-color: ", ";\n      transition: border-bottom 0.3s linear;\n      color: ", ";\n      ", "\n      padding: 0 8px;\n      &.focus {\n        background-color: ", ";\n        border: 1px solid ", ";\n      }\n      &.readOnly {\n        border: none;\n      }\n      &.disabled {\n        color: ", ";\n        border: 1px solid ", ";\n      }\n    "])), color.box.borderColor, color.box.backgroundColor, color.box.textColor, textStyle.default, color.box.backgroundFocusColor, color.box.borderFocusColor, color.box.textDisabledColor, color.box.borderDisabledColor),
      underline: styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n      background-color: transparent;\n      transition: border-bottom 0.3s linear;\n      color: ", ";\n      ", "\n      &.focus {\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n      }\n      &.readOnly {\n        border-bottom: none;\n      }\n      &.disabled {\n        color: ", ";\n        border-bottom: 1px solid ", ";\n      }\n    "])), color.underline.borderColor, color.underline.textColor, textStyle.default, color.underline.backgroundFocusColor, color.underline.borderFocusColor, color.underline.textDisabledColor, color.underline.borderDisabledColor)
    };
    return WrapStyleCSS[styleType];
  };
  var getInputStyle = function getInputStyle(props, styleType) {
    var color = props.color,
      textStyle = props.textStyle;
    var InputStyleCSS = {
      default: styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      appearance: none;\n      border: none;\n      outline: none;\n      width: 100%;\n      background-color: transparent;\n      color: inherit;\n      ", "\n    "])), textStyle.default),
      box: styled.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      appearance: none;\n      border: none;\n      outline: none;\n      background-color: transparent;\n      width: 100%;\n      padding: 8px 0;\n      color: ", ";\n      ", "\n      &::placeholder {\n        color: ", ";\n      }\n      &:disabled {\n        color: ", ";\n      }\n    "])), color.box.textColor, textStyle.default, color.box.placeholderColor, color.box.textDisabledColor),
      underline: styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      appearance: none;\n      border: none;\n      outline: none;\n      background-color: transparent;\n      width: 100%;\n      padding: 8px 0;\n      color: ", ";\n      ", "\n      &::placeholder {\n        color: ", ";\n      }\n      &:disabled {\n        color: ", ";\n      }\n    "])), color.underline.textColor, textStyle.default, color.underline.placeholderColor, color.underline.textDisabledColor)
    };
    return InputStyleCSS[styleType];
  };
  var TextInputStyle = {
    Wrap: styled__default.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    ", ";\n  "])), function (_ref) {
      var theme = _ref.theme,
        $css = _ref.$css,
        $inputStyle = _ref.$inputStyle,
        $radius = _ref.$radius;
      return styled.css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      ", "\n      display: inline-flex;\n      align-items: center;\n      gap: 4px;\n      input {\n        flex: 1;\n      }\n      button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        &.delete-icon {\n          width: 18px;\n          height: auto;\n          &.hidden {\n            opacity: 0;\n          }\n          &:hover {\n            opacity: 1;\n          }\n        }\n        &:focus {\n          outline: none;\n          svg {\n          }\n          path {\n            fill: ", ";\n          }\n        }\n      }\n      ", "\n      ", "\n    "])), getWrapStyle(theme, $inputStyle), theme.color.iconFocusColor, $radius !== undefined && "border-radius: ".concat(typeof $radius === 'number' ? "".concat($radius, "px") : $radius, ";"), $css !== null && $css !== void 0 ? $css : '');
    }),
    Input: styled__default.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (_ref2) {
      var theme = _ref2.theme,
        $css = _ref2.$css,
        $inputStyle = _ref2.$inputStyle;
      return styled.css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "])), getInputStyle(theme, $inputStyle), $css !== null && $css !== void 0 ? $css : '');
    })
  };

  function getTextInputStyle(theme) {
    var colors = theme.colors,
      fonts = theme.fonts;
    return {
      color: {
        iconFocusColor: colors.primary,
        box: {
          textColor: colors.foreground,
          textDisabledColor: colors.gray5,
          backgroundColor: colors.gray6,
          backgroundFocusColor: colors.fog,
          borderColor: colors.gray4,
          borderFocusColor: colors.primary,
          placeholderColor: colors.gray3,
          borderDisabledColor: colors.white30,
          iconFocusColor: colors.primary
        },
        underline: {
          textColor: colors.foreground,
          textDisabledColor: colors.gray5,
          backgroundFocusColor: colors.gray6,
          borderColor: colors.gray4,
          borderFocusColor: colors.primary,
          placeholderColor: colors.gray3,
          borderDisabledColor: colors.white30,
          iconFocusColor: colors.primary
        }
      },
      textStyle: {
        default: fonts.default
      }
    };
  }
  var getTextInputTheme = function getTextInputTheme(currentTheme, customTheme) {
    var theme = merge$1(currentTheme, customTheme);
    customTheme && console.log('mergeTest', currentTheme, customTheme, theme);
    return theme;
  };
  var TextInputProvider = function TextInputProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultTextInputTheme = React__namespace.default.useMemo(function () {
      return getTextInputTheme(getTextInputStyle(globalTheme.theme), customTheme !== null && customTheme !== void 0 ? customTheme : {});
    }, []);
    React.useEffect(function () {
      console.log('defaultTextInputTheme', defaultTextInputTheme);
    }, [defaultTextInputTheme]);
    return /*#__PURE__*/React__namespace.default.createElement(styled.ThemeProvider, {
      theme: defaultTextInputTheme
    }, children);
  };

  var SvgDeleteInput = function SvgDeleteInput(props) {
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 18,
      height: 18,
      fill: "none"
    }, props), /*#__PURE__*/React__namespace.createElement("path", {
      fill: "#A8B3C6",
      d: "M9 2.25A6.75 6.75 0 1 0 15.75 9 6.758 6.758 0 0 0 9 2.25Zm2.444 8.46a.518.518 0 1 1-.734.734L9 9.734l-1.71 1.71a.52.52 0 0 1-.734-.734L8.266 9l-1.71-1.71a.52.52 0 0 1 .734-.734L9 8.266l1.71-1.71a.52.52 0 0 1 .734.734L9.734 9l1.71 1.71Z"
    }));
  };

  var Wrap = TextInputStyle.Wrap,
    Input = TextInputStyle.Input;
  var DefaultTextInput = function DefaultTextInput(_a) {
    var $wrapCss = _a.$wrapCss,
      wrapProps = _a.wrapProps,
      _a$inputStyle = _a.inputStyle,
      inputStyle = _a$inputStyle === void 0 ? 'default' : _a$inputStyle,
      prepend = _a.prepend,
      append = _a.append,
      $radius = _a.$radius,
      _onFocus = _a.onFocus,
      _onBlur = _a.onBlur,
      _onChange = _a.onChange,
      customTheme = _a.customTheme,
      disableRemoveButton = _a.disableRemoveButton,
      props = __rest(_a, ["$wrapCss", "wrapProps", "inputStyle", "prepend", "append", "$radius", "onFocus", "onBlur", "onChange", "customTheme", "disableRemoveButton"]);
    var inputRef = React.useRef();
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      set_focus = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      valued = _useState4[0],
      set_valued = _useState4[1];
    return /*#__PURE__*/React__namespace.default.createElement(TextInputProvider, {
      customTheme: customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(Wrap, _extends({
      className: classNames({
        readOnly: props.readOnly,
        disabled: props.disabled,
        valued: valued,
        focus: focus
      }),
      "$inputStyle": inputStyle,
      "$css": $wrapCss,
      "$radius": $radius
    }, wrapProps), prepend, /*#__PURE__*/React__namespace.default.createElement(Input, _extends({
      ref: inputRef,
      onFocus: function onFocus(e) {
        set_focus(true);
        _onFocus && _onFocus(e);
      },
      onBlur: function onBlur(e) {
        set_focus(false);
        _onBlur && _onBlur(e);
      },
      onChange: function onChange(e) {
        set_valued(e.target.value.length > 0);
        _onChange && _onChange(e);
      },
      "$inputStyle": inputStyle
    }, props)), append, !disableRemoveButton && /*#__PURE__*/React__namespace.default.createElement("button", {
      className: classNames('delete-icon', {
        hidden: !focus
      }),
      onClick: function onClick() {
        var _a;
        if (!valued) return;
        var inputEl = inputRef.current;
        if (inputEl) {
          var nativeInputValueSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
          if (nativeInputValueSetter === undefined) return;
          nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(inputEl, '');
          var nextEvent = new Event('change', {
            bubbles: true
          });
          inputEl.dispatchEvent(nextEvent);
          inputEl.focus();
        }
      }
    }, valued && /*#__PURE__*/React__namespace.default.createElement(SvgDeleteInput, null))));
  };
  var BoxInput = function BoxInput(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultTextInput, _extends({
      inputStyle: "box"
    }, props));
  };
  var UnderlineInput = function UnderlineInput(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultTextInput, _extends({
      inputStyle: "underline"
    }, props));
  };
  var TextInput = function TextInput(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultTextInput, _extends({
      inputStyle: "default"
    }, props));
  };
  TextInput.Underline = UnderlineInput;
  TextInput.Box = BoxInput;

  exports.Button = Button;
  exports.CodeBlock = CodeBlock;
  exports.Div = Div;
  exports.Dropdown = Dropdown;
  exports.KuiContext = KuiContext;
  exports.KuiProvider = KuiProvider;
  exports.TextInput = TextInput;
  exports.defaultThemes = defaultThemes;
  exports.useOutsideClick = useOutsideClick;

}));
