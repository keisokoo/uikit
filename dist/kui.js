/**
 * @keisokoo/uikit - 0.0.1
 * Author : keisokoo
 * Copyright (c) 2016, 2023 to keisokoo, released under the MIT license.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components'), require('dayjs'), require('dayjs/plugin/weekOfYear'), require('react-syntax-highlighter'), require('react-syntax-highlighter/dist/esm/styles/prism')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components', 'dayjs', 'dayjs/plugin/weekOfYear', 'react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/prism'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Kui = {}, global.React, global.StyledComponents, global.DayJs, global.weekOfYear, global.ReactSyntaxHighlighter, global.PrismStyles));
})(this, (function (exports, React, styled, dayjs, weekOfYear, reactSyntaxHighlighter, prism) { 'use strict';

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
  var dayjs__default = /*#__PURE__*/_interopDefaultCompat(dayjs);
  var weekOfYear__default = /*#__PURE__*/_interopDefaultCompat(weekOfYear);

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
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
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
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var _templateObject$7, _templateObject2$7, _templateObject3$6, _templateObject4$5, _templateObject5$4;
  var rotate = styled.keyframes(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n0%{\n  transform: rotate(0deg);\n}\n100%{\n  transform: rotate(360deg);\n}\n"])));
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
      return styled.css(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      user-select: none;\n      padding: 8px 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ", "\n      transition: 0.15s;\n      background-color: ", ";\n      &:focus {\n        outline: none;\n        background-color: ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      &:active {\n        background-color: ", ";\n      }\n      color: ", ";\n      &:disabled {\n        cursor: default;\n        color: ", ";\n        background-color: ", " !important;\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), $width ? styled.css(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n            width: ", ";\n            padding: 8px;\n          "])), typeof $width === 'number' ? $width + 'px' : $width) : '', color[$buttonStyle].backgroundColor, color[$buttonStyle].backgroundFocusColor, color[$buttonStyle].backgroundHoverColor, color[$buttonStyle].backgroundActiveColor, color[$buttonStyle].textColor, color[$buttonStyle].textDisabledColor, color[$buttonStyle].backgroundColor, textStyle.default, $radius ? "border-radius: ".concat(typeof $radius === 'number' ? "".concat($radius, "px") : $radius, ";") : "border-radius: 4px;", $pending ? styled.css(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n            .loading {\n              width: 24px;\n              height: 24px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              animation: ", " 1s linear infinite;\n            }\n          "])), rotate) : '', $buttonStyle === 'border' ? styled.css(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["\n            box-shadow: inset 0px 0px 0px 1px ", ";\n          "])), color[$buttonStyle].borderColor) : '', $css !== null && $css !== void 0 ? $css : '');
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
    large: 'font-size:18px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:26px;',
    largeBold: 'font-size:18px;font-weight:600;letter-spacing:-0.4000000238418579px;line-height:26px;',
    small: 'font-size:14px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:20px;',
    smallBold: 'font-size:14px;font-weight:600;letter-spacing:-0.4000000238418579px;line-height:20px;'
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
    return /*#__PURE__*/React__namespace.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/React__namespace.createElement("svg", _extends({
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
    })));
  };

  var Wrap$4 = ButtonStyle.Wrap;
  var DefaultButton = function DefaultButton(_a) {
    var customTheme = _a.customTheme,
      loading = _a.loading,
      props = __rest(_a, ["customTheme", "loading"]);
    return /*#__PURE__*/React__namespace.default.createElement(ButtonProvider, {
      customTheme: customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(Wrap$4, _extends({
      "$pending": !!loading
    }, props), loading ? /*#__PURE__*/React__namespace.default.createElement(SvgLoading, null) : props.children));
  };
  var Button = function Button(_a) {
    var children = _a.children,
      props = __rest(_a, ["children"]);
    return /*#__PURE__*/React__namespace.default.createElement(DefaultButton, _extends({}, props), children);
  };

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

  var _templateObject$6, _templateObject2$6, _templateObject3$5, _templateObject4$4, _templateObject5$3, _templateObject6$2;
  var height = 24;
  var CalendarStyle = {
    Wrap: styled__default.default.div(function (_ref) {
      var _ref$theme = _ref.theme,
        color = _ref$theme.color,
        style = _ref$theme.style,
        $css = _ref.$css;
      return styled.css(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-direction: column;\n      gap: ", ";\n      & > div {\n        flex: 1;\n      }\n      max-width: ", ";\n      width: 100%;\n      height: ", ";\n      color: ", ";\n      ", ";\n    "])), style.calendarRowGap, style.calendarWidth, style.calendarHeight, color.textColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    WeeksRow: styled__default.default.div(function (_ref2) {
      var _ref2$theme = _ref2.theme,
        color = _ref2$theme.color,
        style = _ref2$theme.style,
        $css = _ref2.$css;
      return styled.css(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: ", ";\n      color: ", ";\n      ", "\n    "])), style.calendarColGap, color.weeksColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    WeekColumn: styled__default.default.div(function (_ref3) {
      var color = _ref3.theme.color,
        $css = _ref3.$css;
      return styled.css(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n      /* &:first-of-type {\n        color: ", ";\n      }\n      &:last-of-type {\n        color: ", ";\n      } */\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      height: 36px;\n      max-height: 36px;\n      ", "\n    "])), color.firstDayColor, color.lastDayColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    DaysRow: styled__default.default.div(function (_ref4) {
      var _ref4$theme = _ref4.theme;
        _ref4$theme.color;
        var style = _ref4$theme.style,
        $css = _ref4.$css;
      return styled.css(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: ", ";\n      ", "\n    "])), style.calendarColGap, $css !== null && $css !== void 0 ? $css : '');
    }),
    DayColumn: styled__default.default.div(function (_ref5) {
      var color = _ref5.theme.color,
        $css = _ref5.$css;
      return styled.css(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["\n      &:first-of-type .day-part {\n        color: ", ";\n      }\n      &:last-of-type .day-part {\n        color: ", ";\n      }\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      &.isSelected .day-part {\n        color: ", ";\n      }\n      &.isSelected .day-part {\n        background-color: ", ";\n      }\n      &.isSelected.hasComparisonDate:not(.comparisonDateInThisMonth) {\n        position: relative;\n        &::after {\n          content: '';\n          position: absolute;\n          width: 24px;\n          z-index: -1;\n          left: 40%;\n          height: 100%;\n          background-color: ", ";\n          border-radius: 50%;\n          transform: translateX(-50%);\n        }\n        &::before {\n          content: '';\n          position: absolute;\n          width: 50%;\n          left: 50%;\n          height: 100%;\n          z-index: -1;\n          background-color: ", ";\n        }\n      }\n      &.isToday .day-part {\n        color: ", ";\n      }\n      &.startBetween {\n        background-color: ", ";\n        .day-part {\n          color: ", ";\n        }\n      }\n      &.endBetween {\n        background-color: ", ";\n        .day-part {\n          color: ", ";\n        }\n      }\n      &.isGrayed .day-part {\n        color: ", ";\n      }\n      &.comparisonDateInThisMonth:not(.isSelected) {\n        position: relative;\n        &::after {\n          content: '';\n          position: absolute;\n          width: 24px;\n          z-index: -1;\n          left: 60%;\n          height: 100%;\n          background-color: ", ";\n          border-radius: 50%;\n          transform: translateX(-50%);\n        }\n        &::before {\n          content: '';\n          position: absolute;\n          width: 50%;\n          right: 50%;\n          height: 100%;\n          z-index: -1;\n          background-color: ", ";\n        }\n      }\n      &.comparisonDateInThisMonth .day-part {\n        color: #ff6a00;\n        background-color: ", ";\n      }\n      ", "\n    "])), color.firstDayColor, color.lastDayColor, color.selectedTextColor, color.selectedBackgroundColor, color.selectedBackgroundColor, color.selectedBackgroundColor, color.todayColor, color.selectedBackgroundColor, color.rangeTextColor, color.selectedBackgroundColor, color.rangeTextColor, color.outOfMonthsColor, color.selectedBackgroundColor, color.selectedBackgroundColor, color.selectedBackgroundColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    DayPart: styled__default.default.div(function (_ref6) {
      _ref6.theme.color;
        var $css = _ref6.$css;
      return styled.css(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      .day-part {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: 24px;\n        width: 24px;\n        border-radius: ", "px;\n        span {\n          user-select: none;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n        }\n      }\n      ", "\n    "])), height, $css !== null && $css !== void 0 ? $css : '');
    })
  };

  function getCalendarStyle(theme) {
    var colors = theme.colors,
      fonts = theme.fonts;
    return {
      style: {
        calendarWidth: '340px',
        calendarHeight: 'auto',
        calendarRowGap: '16px',
        calendarColGap: '0px'
      },
      color: {
        textColor: colors.foreground,
        weeksColor: colors.foreground,
        firstDayColor: '#ff7b7b',
        lastDayColor: '#7b93ff',
        daysColor: colors.foreground,
        todayColor: '#ffd737',
        selectedTextColor: '#ff6a00',
        selectedBackgroundColor: '#008b1c',
        rangeTextColor: '#58ff7a',
        outOfMonthsColor: '#d3d3d37a'
      },
      textStyle: {
        default: fonts.default
      }
    };
  }
  var getCalendarTheme = function getCalendarTheme(currentTheme, customTheme) {
    var theme = merge$1(currentTheme, customTheme);
    return theme;
  };
  var CalendarProvider = function CalendarProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultCalendarTheme = getCalendarStyle(globalTheme.theme);
    return /*#__PURE__*/React__namespace.default.createElement(styled.ThemeProvider, {
      theme: customTheme ? getCalendarTheme(defaultCalendarTheme, customTheme) : defaultCalendarTheme
    }, children);
  };

  dayjs__default.default.extend(weekOfYear__default.default);
  var generateCalendar = function generateCalendar(defaultDate, selectedDate, comparisonDate) {
    defaultDate = dayjs__default.default.isDayjs(defaultDate) && defaultDate.isValid() ? defaultDate : dayjs__default.default();
    var today = dayjs__default.default();
    var comparison = dayjs__default.default.isDayjs(comparisonDate) && comparisonDate.isValid() ? comparisonDate : null;
    var standardDate = dayjs__default.default.isDayjs(selectedDate) && selectedDate.isValid() ? selectedDate : null;
    var startWeek = defaultDate.clone().startOf('month').week();
    var endWeek = defaultDate.clone().endOf('month').week() === 1 ? 53 : defaultDate.clone().endOf('month').week();
    var calendar = [];
    var _loop = function _loop(week) {
      calendar.push(Array(7).fill(0).map(function (n, i) {
        var current = defaultDate.clone().week(week).startOf('week').add(n + i, 'day');
        var isSelected = (standardDate === null || standardDate === void 0 ? void 0 : standardDate.format('YYYYMMDD')) === current.format('YYYYMMDD');
        var isGrayed = current.format('MM') !== defaultDate.format('MM');
        var isToday = current.format('YYYYMMDD') === today.format('YYYYMMDD');
        var isBefore = standardDate ? current.isBefore(standardDate, 'day') : false;
        var isAfter = standardDate ? current.isAfter(standardDate, 'day') : false;
        var isAfterWithComparison = comparison ? current.isAfter(comparison, 'day') : false;
        var isBeforeWithComparison = comparison ? current.isBefore(comparison, 'day') : false;
        var startBetween = false;
        var endBetween = false;
        if (comparison && current.isAfter(comparison, 'day') && current.isBefore(standardDate, 'day')) {
          endBetween = true;
        }
        if (comparison && current.isAfter(standardDate, 'day') && current.isBefore(comparison, 'day')) {
          startBetween = true;
        }
        var comparisonDateInThisMonth = false;
        if (comparison && current.isSame(comparison, 'day')) {
          comparisonDateInThisMonth = true;
        }
        return {
          current: current,
          isBefore: isBefore,
          isAfter: isAfter,
          isSelected: isSelected,
          isGrayed: isGrayed,
          isToday: isToday,
          endBetween: endBetween,
          startBetween: startBetween,
          comparisonDateInThisMonth: comparisonDateInThisMonth,
          hasComparisonDate: !!comparison,
          isAfterWithComparison: isAfterWithComparison,
          isBeforeWithComparison: isBeforeWithComparison
        };
      }));
    };
    for (var week = startWeek; week <= endWeek; week++) {
      _loop(week);
    }
    return calendar;
  };

  var Wrap$3 = CalendarStyle.Wrap,
    WeeksRow = CalendarStyle.WeeksRow,
    WeekColumn = CalendarStyle.WeekColumn,
    DaysRow = CalendarStyle.DaysRow,
    DayColumn = CalendarStyle.DayColumn,
    DayPart = CalendarStyle.DayPart;
  var DefaultCalendar = function DefaultCalendar(_a) {
    var $css = _a.$css,
      customTheme = _a.customTheme,
      _a$comparisonType = _a.comparisonType,
      comparisonType = _a$comparisonType === void 0 ? 'start' : _a$comparisonType,
      pickType = _a.pickType,
      value = _a.value,
      emitValue = _a.emitValue,
      props = __rest(_a, ["$css", "customTheme", "comparisonType", "pickType", "value", "emitValue"]);
    var _React$useState = React__namespace.default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      calendarData = _React$useState2[0],
      set_calendarData = _React$useState2[1];
    var _React$useState3 = React__namespace.default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedDate = _React$useState4[0],
      set_selectedDate = _React$useState4[1];
    var _React$useState5 = React__namespace.default.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      comparisonDate = _React$useState6[0],
      set_comparisonDate = _React$useState6[1];
    React.useEffect(function () {
      var _a, _b;
      if (pickType) {
        if (pickType === 'single') {
          set_selectedDate(value !== null && value !== void 0 ? value : null);
        }
        if (pickType === 'range') {
          set_selectedDate((_a = value === null || value === void 0 ? void 0 : value.start) !== null && _a !== void 0 ? _a : null);
          set_comparisonDate((_b = value === null || value === void 0 ? void 0 : value.end) !== null && _b !== void 0 ? _b : null);
        }
      }
    }, [value, pickType]);
    React.useEffect(function () {
      var generatedData = generateCalendar(dayjs__default.default(), selectedDate, comparisonDate);
      set_calendarData(generatedData);
    }, [selectedDate, comparisonDate]);
    return /*#__PURE__*/React__namespace.default.createElement(CalendarProvider, {
      customTheme: customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(Wrap$3, _extends({
      "$css": $css
    }, props), /*#__PURE__*/React__namespace.default.createElement(WeeksRow, {
      className: "weeks-row"
    }, /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uC77C"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uC6D4"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uD654"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uC218"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uBAA9"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uAE08"), /*#__PURE__*/React__namespace.default.createElement(WeekColumn, {
      className: "week"
    }, "\uD1A0")), calendarData && calendarData.map(function (week, index) {
      return /*#__PURE__*/React__namespace.default.createElement(DaysRow, {
        key: 'week' + index,
        className: "days-row"
      }, week.map(function (day, _index) {
        var isGrayed = day.isGrayed,
          isSelected = day.isSelected,
          isToday = day.isToday,
          isAfter = day.isAfter,
          isBefore = day.isBefore,
          endBetween = day.endBetween,
          startBetween = day.startBetween,
          comparisonDateInThisMonth = day.comparisonDateInThisMonth,
          hasComparisonDate = day.hasComparisonDate,
          isAfterWithComparison = day.isAfterWithComparison,
          isBeforeWithComparison = day.isBeforeWithComparison;
        return /*#__PURE__*/React__namespace.default.createElement(DayColumn, {
          key: 'day' + _index,
          className: classNames({
            isGrayed: isGrayed,
            isSelected: isSelected,
            isToday: isToday,
            isAfter: isAfter,
            isBefore: isBefore,
            endBetween: endBetween,
            startBetween: startBetween,
            comparisonDateInThisMonth: comparisonDateInThisMonth,
            hasComparisonDate: isSelected && hasComparisonDate,
            isAfterWithComparison: isAfterWithComparison && comparisonType === 'end',
            isBeforeWithComparison: isBeforeWithComparison && comparisonType === 'start'
          }, 'days-column'),
          onClick: function onClick() {
            if (pickType === 'range') {
              if (selectedDate && !comparisonDate && !isBefore) {
                set_comparisonDate(day.current);
                emitValue && emitValue({
                  start: selectedDate,
                  end: day.current
                });
              } else {
                set_selectedDate(day.current);
                set_comparisonDate(null);
                emitValue && emitValue({
                  start: day.current,
                  end: null
                });
              }
            } else if (pickType === 'single') {
              set_selectedDate(day.current);
              emitValue && emitValue(day.current);
            }
          }
        }, /*#__PURE__*/React__namespace.default.createElement(DayPart, {
          className: "day"
        }, /*#__PURE__*/React__namespace.default.createElement("div", {
          className: "day-part",
          "data-date": day.current.format('YYYY-MM-DD')
        }, /*#__PURE__*/React__namespace.default.createElement("span", null, day.current.format('D')))));
      }));
    })));
  };
  var Calendar = function Calendar(props) {
    return /*#__PURE__*/React__namespace.default.createElement(DefaultCalendar, _extends({}, props));
  };

  var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$3, _templateObject5$2;
  var CodeBlockStyle = {
    Wrap: styled__default.default.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n    ", ";\n  "])), function (_ref) {
      var $css = _ref.$css;
      return styled.css(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n      background: rgb(39, 40, 34);\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n      pre {\n        flex: 1;\n        flex-shrink: 0;\n        border: 1px solid #5a5a5a;\n        border-radius: 0 0 12px 12px;\n      }\n      ", "\n    "])), $css !== null && $css !== void 0 ? $css : '');
    }),
    Title: styled__default.default.div(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n    font-size: 14px;\n    color: #9d9d9d;\n    border: 1px solid #5a5a5a;\n    border-bottom: 0px;\n    padding: 16px 24px;\n    border-radius: 12px 12px 0 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .copy-icon {\n      cursor: pointer;\n      &:hover {\n        path {\n          fill: #fff;\n        }\n        color: #fff;\n      }\n      &:active {\n        path {\n          fill: #00c331;\n        }\n      }\n    }\n    .copy-check-icon {\n      cursor: default;\n      user-select: none;\n    }\n  "]))),
    FileName: styled__default.default.div(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  "]))),
    Clipboard: styled__default.default.div(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    &:focus {\n      outline: none;\n      path {\n        fill: #007cc3;\n      }\n      color: #007cc3;\n    }\n  "])))
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

  var _templateObject$4, _templateObject2$4;
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
    return typeof props.$css === 'string' ? styled.css(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n        ", "\n      "])), props.$css) : props.$css || styled.css(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral([""])));
  };

  var _templateObject$3, _templateObject2$3, _templateObject3$3;
  var Div = styled__default.default.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), AddCss, function (_a) {
    var $style = _a.$style,
      $css = _a.$css,
      rest = __rest(_a, ["$style", "$css"]);
    var inlineStyle = convertObjectToCSS(rest, true);
    var objectStyle = $style ? convertObjectToCSS($style) : "";
    var cssStyle = typeof $css === 'string' ? styled.css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n            ", "\n          "])), $css) : $css || styled.css(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral([""])));
    return (cssStyle.toString() + objectStyle + inlineStyle).trim();
  });

  var isTransformValues = function isTransformValues(value) {
    return value !== undefined && 'translate' in value && 'rotate' in value && 'scale' in value;
  };
  var handleGetCurrentPoint = function handleGetCurrentPoint(targetElement, point, scale, type) {
    var rec = targetElement.getBoundingClientRect();
    return (point - rec[type]) / scale;
  };
  var handleGetBeforeTargetSize = function handleGetBeforeTargetSize(targetElement, scale) {
    var rec = targetElement.getBoundingClientRect();
    return {
      w: Math.round(rec.width / scale),
      h: Math.round(rec.height / scale)
    };
  };
  var isTouchEvent = function isTouchEvent(event) {
    return 'touches' in event;
  };
  var handleGetRectSize = function handleGetRectSize(targetElement, option) {
    var _a, _b;
    var bound = option.areaElement ? option.areaElement.getBoundingClientRect() : document.body.getBoundingClientRect();
    var targetBound = targetElement.getBoundingClientRect();
    var restrictBound = (_a = option.restrictElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    var areaType = option.type === 'inner' ? 1 : -1;
    var areaForOuter = option.type === 'inner' ? 0 : 1;
    var threshold = (_b = option.threshold) !== null && _b !== void 0 ? _b : 0;
    var rectSize = {
      w: targetBound.width * areaType,
      h: targetBound.height * areaType
    };
    var maxSize = {
      x: bound.width / 2 - rectSize.w / 2 + threshold,
      y: bound.height / 2 - rectSize.h / 2 + threshold,
      offset: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      }
    };
    if (restrictBound) {
      var restrictSize = {
        w: restrictBound.width * areaType,
        h: restrictBound.height * areaType
      };
      maxSize.x = bound.width / 2 - restrictSize.w / 2 + threshold;
      maxSize.y = bound.height / 2 - restrictSize.h / 2 + threshold;
      maxSize.offset.width = restrictBound.width;
      maxSize.offset.height = restrictBound.height;
      var portraitOffset = Math.abs(rectSize.h - restrictBound.height);
      var horizontalOffset = Math.abs(rectSize.w - restrictBound.width);
      if (portraitOffset !== 0) {
        maxSize.offset.bottom = portraitOffset / 2 - maxSize.offset.height * areaForOuter;
        if (targetBound.top - restrictBound.top) {
          maxSize.offset.top = Math.abs(targetBound.top - restrictBound.top) / 2;
          maxSize.offset.bottom = Math.abs(maxSize.offset.bottom - Math.abs(targetBound.top - restrictBound.top) / 2);
        }
      }
      if (horizontalOffset !== 0) {
        maxSize.offset.right = horizontalOffset / 2 - maxSize.offset.width * areaForOuter;
        if (targetBound.left - restrictBound.left) {
          maxSize.offset.left = Math.abs(targetBound.left - restrictBound.left) / 2;
          maxSize.offset.right = Math.abs(maxSize.offset.right - Math.abs(targetBound.left - restrictBound.left) / 2);
        }
      }
    }
    return maxSize;
  };
  var handleCheckBoxLimit = function handleCheckBoxLimit(currentPosition, maxSize, type) {
    var x = currentPosition.x,
      y = currentPosition.y;
    var xDiffOffset = maxSize.offset.right - maxSize.offset.left;
    var yDiffOffset = maxSize.offset.bottom - maxSize.offset.top;
    var outOfBox = {
      x: {
        left: {
          out: false,
          value: -maxSize.x + xDiffOffset
        },
        right: {
          out: false,
          value: maxSize.x + xDiffOffset
        }
      },
      y: {
        top: {
          out: false,
          value: -maxSize.y + yDiffOffset
        },
        bottom: {
          out: false,
          value: maxSize.y + yDiffOffset
        }
      }
    };
    if (x < -maxSize.x + xDiffOffset) {
      outOfBox.x['left'].out = true;
    }
    if (x > maxSize.x + xDiffOffset) {
      outOfBox.x['right'].out = true;
    }
    if (y < -maxSize.y + yDiffOffset) {
      outOfBox.y['top'].out = true;
    }
    if (y > maxSize.y + yDiffOffset) {
      outOfBox.y['bottom'].out = true;
    }
    return outOfBox;
  };
  var handleDecompose2dMatrix = function handleDecompose2dMatrix(mat) {
    var a = mat.a,
      b = mat.b,
      c = mat.c,
      d = mat.d,
      e = mat.e,
      f = mat.f;
    var delta = a * d - b * c;
    var result = {
      translation: [e, f],
      deg: 0,
      rotation: 0,
      scale: [0, 0],
      skew: [0, 0]
    };
    if (a !== 0 || b !== 0) {
      var r = Math.sqrt(a * a + b * b);
      result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
      result.scale = [r, delta / r];
      result.skew = [Math.atan((a * c + b * d) / (r * r)), 0];
    } else if (c !== 0 || d !== 0) {
      var s = Math.sqrt(c * c + d * d);
      result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
      result.scale = [delta / s, s];
      result.skew = [0, Math.atan((a * c + b * d) / (s * s))];
    } else ;
    if (Math.abs(result.rotation) === 0) result.rotation = 0;
    var degree = result.rotation * (180 / Math.PI);
    result.deg = degree < 0 ? degree + 360 : degree;
    return {
      scale: result.scale[0],
      rotate: result.deg,
      translate: {
        x: result.translation[0],
        y: result.translation[1]
      }
    };
  };

  var ControlPosition = /*#__PURE__*/_createClass(function ControlPosition(targetElement, configs) {
    var _this = this;
    _classCallCheck(this, ControlPosition);
    this.targetElement = targetElement;
    this.factor = 0.1;
    this.minScale = 0.1;
    this.maxScale = 10;
    this.ts = {
      scale: 1,
      rotate: 0,
      translate: {
        x: 0,
        y: 0
      }
    };
    this.areaRestrictions = function (currentPosition) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        type: 'inner',
        threshold: 0,
        disabled: {
          x: false,
          y: false
        }
      };
      var _a, _b, _c;
      var x = currentPosition.x,
        y = currentPosition.y;
      var maxSize = handleGetRectSize(_this.targetElement, _extends(_extends({}, option), {
        areaElement: _this.areaElement,
        restrictElement: (_a = option.restrictElement) !== null && _a !== void 0 ? _a : _this.restrictElement
      }));
      var disabled = {
        x: (_b = option.disabled) === null || _b === void 0 ? void 0 : _b.x,
        y: (_c = option.disabled) === null || _c === void 0 ? void 0 : _c.y
      };
      if (!disabled.x) {
        var xDiffOffset = maxSize.offset.right - maxSize.offset.left;
        if (x < -maxSize.x + xDiffOffset) {
          x = -maxSize.x + xDiffOffset;
        }
        if (x > maxSize.x + xDiffOffset) {
          x = maxSize.x + xDiffOffset;
        }
      }
      if (!disabled.y) {
        var yDiffOffset = maxSize.offset.bottom - maxSize.offset.top;
        if (y < -maxSize.y + yDiffOffset) {
          y = -maxSize.y + yDiffOffset;
        }
        if (y > maxSize.y + yDiffOffset) {
          y = maxSize.y + yDiffOffset;
        }
      }
      return {
        x: x,
        y: y
      };
    };
    this.restrictXY = function (currentPosition) {
      if (!_this.targetElement) return currentPosition;
      if (!_this.restrictPosition) {
        return currentPosition;
      }
      var options = {
        threshold: 0,
        areaElement: _this.areaElement,
        restrictElement: _this.restrictElement
      };
      var innerMaxSize = handleGetRectSize(_this.targetElement, _extends(_extends({}, options), {
        type: 'inner'
      }));
      var outerMaxSize = handleGetRectSize(_this.targetElement, _extends(_extends({}, options), {
        type: 'outer'
      }));
      var outOfBox = {
        inner: handleCheckBoxLimit(currentPosition, innerMaxSize),
        outer: handleCheckBoxLimit(currentPosition, outerMaxSize)
      };
      var imageBound = _this.targetElement.getBoundingClientRect();
      return _this.restrictPosition(currentPosition, imageBound, outOfBox);
    };
    this.getPosition = function (el) {
      var matrix = new WebKitCSSMatrix(window.getComputedStyle(el !== null && el !== void 0 ? el : _this.targetElement).transform);
      return handleDecompose2dMatrix(matrix);
    };
    this.updatePosition = function (value) {
      if (isTransformValues(value)) {
        _this.ts = value;
      } else {
        _this.ts = value(_this.getPosition());
      }
      _this.setTransform();
    };
    this.compareXY = function (one, two) {
      return one.x !== two.x || one.y !== two.y;
    };
    this.setTransform = function () {
      window.requestAnimationFrame(function () {
        if (_this.beforeUpdate) _this.beforeUpdate(_this.ts);
        _this.targetElement.style.transform = "translate(".concat(_this.ts.translate.x, "px,").concat(_this.ts.translate.y, "px) scale(").concat(_this.ts.scale, ") rotate(").concat(_this.ts.rotate, "deg)");
        var restricted = _this.restrictXY(_this.ts.translate);
        if (_this.compareXY(restricted, _this.ts.translate)) {
          _this.ts.translate = restricted;
          _this.targetElement.style.transform = "translate(".concat(_this.ts.translate.x, "px,").concat(_this.ts.translate.y, "px) scale(").concat(_this.ts.scale, ") rotate(").concat(_this.ts.rotate, "deg)");
        }
        if (_this.afterUpdate) _this.afterUpdate(_this.ts);
      });
    };
    this.toggleRotation = function (value) {
      value = Math.abs(value);
      return value === 0 ? 90 : value === 90 ? 180 : value === 180 ? 270 : 0;
    };
    this.onWheel = function (event) {
      if (!_this.targetElement) return;
      if (_this.beforeFire) _this.beforeFire(_this.targetElement);
      _this.ts = _this.getPosition();
      var eventTarget = event.currentTarget;
      var func = eventTarget.onwheel;
      eventTarget.onwheel = null;
      var rec = _this.targetElement.getBoundingClientRect();
      // let pointerX = (event.clientX - rec.left) / this.ts.scale
      // let pointerY = (event.clientY - rec.top) / this.ts.scale
      var pointerX = handleGetCurrentPoint(_this.targetElement, event.clientX, _this.ts.scale, 'left');
      var pointerY = handleGetCurrentPoint(_this.targetElement, event.clientY, _this.ts.scale, 'top');
      var delta = -event.deltaY;
      if (_this.ts.scale === _this.maxScale && delta > 0) {
        return;
      }
      var beforeTargetSize = {
        w: Math.round(rec.width / _this.ts.scale),
        h: Math.round(rec.height / _this.ts.scale)
      };
      var factor = _this.factor * _this.ts.scale;
      _this.ts.scale = delta > 0 ? _this.ts.scale + factor : _this.ts.scale - factor;
      _this.ts.scale = Math.min(Math.max(_this.minScale, _this.ts.scale), _this.maxScale);
      var m = delta > 0 ? factor / 2 : -(factor / 2);
      if (_this.ts.scale <= _this.minScale && delta < 0) {
        return;
      }
      _this.ts.translate.x += -pointerX * m * 2 + beforeTargetSize.w * m;
      _this.ts.translate.y += -pointerY * m * 2 + beforeTargetSize.h * m;
      _this.setTransform();
      if (_this.afterFire) _this.afterFire(_this.targetElement);
      eventTarget.onwheel = func;
    };
    if (configs === null || configs === void 0 ? void 0 : configs.beforeUpdate) this.beforeUpdate = configs.beforeUpdate;
    if (configs === null || configs === void 0 ? void 0 : configs.afterUpdate) this.afterUpdate = configs.afterUpdate;
    if (configs === null || configs === void 0 ? void 0 : configs.beforeFire) this.beforeFire = configs.beforeFire;
    if (configs === null || configs === void 0 ? void 0 : configs.afterFire) this.afterFire = configs.afterFire;
    if (configs === null || configs === void 0 ? void 0 : configs.restrictElement) this.restrictElement = configs.restrictElement;
    if (configs === null || configs === void 0 ? void 0 : configs.areaElement) this.areaElement = configs.areaElement;
    if (configs === null || configs === void 0 ? void 0 : configs.factor) this.factor = configs.factor;
    if (configs === null || configs === void 0 ? void 0 : configs.minScale) this.minScale = configs.minScale;
    if (configs === null || configs === void 0 ? void 0 : configs.maxScale) this.maxScale = configs.maxScale;
    if (configs === null || configs === void 0 ? void 0 : configs.restrictPosition) this.restrictPosition = configs.restrictPosition;
  });

  var Drag = /*#__PURE__*/function (_ControlPosition) {
    _inherits(Drag, _ControlPosition);
    var _super = _createSuper(Drag);
    function Drag() {
      var _this;
      _classCallCheck(this, Drag);
      _this = _super.apply(this, arguments);
      _this.inertiaAnimationFrame = -1;
      _this.isDrag = false;
      _this.isScale = false;
      _this.dragged = false;
      _this.threshold = 1;
      _this.startPoint = {
        x: 0,
        y: 0
      };
      _this.previousPosition = {
        x: 0,
        y: 0
      };
      _this.maximumInertia = 40;
      _this.velocity = {
        x: 0,
        y: 0
      };
      _this.deceleration = 0.9;
      _this.startDist = 0;
      _this.startScale = 1;
      _this.capSpeed = function (value) {
        var res = 0;
        if (Math.abs(value) > _this.maximumInertia) {
          res = _this.maximumInertia;
          res *= value < 0 ? -1 : 1;
          return res;
        }
        return value;
      };
      _this.dragOn = function (event) {
        event.stopPropagation();
        var currentTarget = event.currentTarget;
        currentTarget.style.userSelect = 'none';
        _this.ts = _this.getPosition();
        cancelAnimationFrame(_this.inertiaAnimationFrame);
        if (_this.beforeFire) _this.beforeFire(_this.targetElement);
        _this.isDrag = true;
        _this.isScale = false;
        _this.startPoint = {
          x: isTouchEvent(event) ? event.touches[0].pageX : event.pageX,
          y: isTouchEvent(event) ? event.touches[0].pageY : event.pageY
        };
        _this.previousPosition = {
          x: _this.ts.translate.x,
          y: _this.ts.translate.y
        };
        _this.velocity = {
          x: 0,
          y: 0
        };
      };
      _this.pinchOn = function (event) {
        event.stopPropagation();
        _this.ts = _this.getPosition();
        cancelAnimationFrame(_this.inertiaAnimationFrame);
        if (isTouchEvent(event) && event.touches.length === 2) {
          if (_this.beforeFire) _this.beforeFire(_this.targetElement);
          _this.isDrag = false;
          _this.isScale = true;
          // 터치 시작시 두손가락 거리
          _this.startDist = Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
          // 터치 시작시 스케일
          _this.startScale = _this.ts.scale;
        }
      };
      _this.fireOn = function (event) {
        _this.ts = _this.getPosition();
        cancelAnimationFrame(_this.inertiaAnimationFrame);
        if (isTouchEvent(event) && event.touches.length === 2) {
          _this.pinchOn(event);
        } else {
          _this.dragOn(event);
        }
      };
      _this.fireDrag = function (x, y) {
        if (!_this.targetElement) return;
        var oldX = _this.ts.translate.x;
        var oldY = _this.ts.translate.y;
        var invert = -1;
        _this.ts.translate.x = _this.previousPosition.x + invert * (-x + _this.startPoint.x);
        _this.ts.translate.y = _this.previousPosition.y + invert * (-y + _this.startPoint.y);
        _this.setTransform();
        _this.velocity = {
          x: _this.ts.translate.x - oldX,
          y: _this.ts.translate.y - oldY
        };
        if (Math.abs(_this.velocity.x) > _this.threshold || Math.abs(_this.velocity.y) > _this.threshold) _this.dragged = true;
      };
      _this.firePinch = function (firstTouch, secondTouch) {
        if (!_this.targetElement) return;
        // 늘어난 두 손가락간 거리
        var dist = Math.hypot(firstTouch.clientX - secondTouch.clientX / 2, firstTouch.clientY - secondTouch.clientY / 2);
        // 두 손가락의 중앙값을 구합니다.
        var pinchCenterX = handleGetCurrentPoint(_this.targetElement, firstTouch.clientX + secondTouch.clientX, _this.ts.scale, 'left');
        var pinchCenterY = handleGetCurrentPoint(_this.targetElement, firstTouch.clientY + secondTouch.clientY, _this.ts.scale, 'top');
        // 변경전 실제 길이값, ( 회전할 경우를 width,height값의 기준이 변경되므로 offsetWidth를 쓰지않는다.)
        var beforeTargetSize = handleGetBeforeTargetSize(_this.targetElement, _this.ts.scale);
        // 변경전의 대각선 길이 값
        var mapDist = Math.hypot(beforeTargetSize.w * _this.ts.scale, beforeTargetSize.h * _this.ts.scale);
        // 변경되는 크기의 대각선 길이값 x값을 구합니다.
        var x = mapDist * dist / _this.startDist;
        // 스케일로 변환 * 이전 스케일
        var scale = x / mapDist * _this.startScale;
        // 위 두줄은 ((mapDist * dist) / this.startDist / mapDist) * this.startScale 와 같다
        // 최대 최소값
        var restrictScale = Math.min(Math.max(_this.minScale, scale), _this.maxScale);
        // 증가/감소분
        var factor = restrictScale - _this.ts.scale;
        // 증가/감소 여부와 중심축 부터 증감하기 위해 미리  2로 나눈다
        var m = factor > 0 ? factor / 2 : factor / 2;
        // 이동할 실제 좌표값을 구합니다. 증가/감소분분 만큼을 곱한후 현재 값에 더함
        _this.ts.translate.x += -(pinchCenterX * m * 2) + beforeTargetSize.w * m;
        _this.ts.translate.y += -(pinchCenterY * m * 2) + beforeTargetSize.h * m;
        // 스케일 업데이트
        _this.ts.scale = restrictScale;
        // 좌표 업데이트
        _this.setTransform();
      };
      _this.fireEnd = function (event) {
        event.stopPropagation();
        var currentTarget = event.currentTarget;
        currentTarget.style.userSelect = '';
        if (_this.dragged && _this.isDrag) {
          _this.dragFinish();
        }
        _this.dragged = false;
        _this.isDrag = false;
        _this.isScale = false;
      };
      _this.updateInertia = function () {
        if (!_this.targetElement) return;
        _this.velocity.x = _this.velocity.x * _this.deceleration;
        _this.velocity.y = _this.velocity.y * _this.deceleration;
        _this.velocity.x = Math.round(_this.velocity.x * 10) / 10;
        _this.velocity.y = Math.round(_this.velocity.y * 10) / 10;
        _this.ts.translate.x = Math.round(_this.ts.translate.x + _this.velocity.x);
        _this.ts.translate.y = Math.round(_this.ts.translate.y + _this.velocity.y);
        _this.setTransform();
        if (Math.floor(Math.abs(_this.velocity.x)) !== 0 || Math.floor(Math.abs(_this.velocity.y)) !== 0) {
          _this.inertiaAnimationFrame = requestAnimationFrame(_this.updateInertia);
        } else {
          if (_this.afterFire) _this.afterFire(_this.targetElement);
        }
      };
      _this.dragFinish = function () {
        _this.velocity = {
          x: _this.capSpeed(_this.restrictXY(_this.velocity).x),
          y: _this.capSpeed(_this.restrictXY(_this.velocity).y)
        };
        if (_this.velocity.x !== 0 || _this.velocity.y !== 0) {
          _this.inertiaAnimationFrame = requestAnimationFrame(_this.updateInertia);
        } else {
          if (_this.afterFire) _this.afterFire(_this.targetElement);
        }
      };
      return _this;
    }
    return _createClass(Drag);
  }(ControlPosition);

  var DragOrPinchZoom = /*#__PURE__*/function (_Drag) {
    _inherits(DragOrPinchZoom, _Drag);
    var _super = _createSuper(DragOrPinchZoom);
    function DragOrPinchZoom() {
      var _this;
      _classCallCheck(this, DragOrPinchZoom);
      _this = _super.apply(this, arguments);
      _this.onDragStart = function (event) {
        _this.ts = _this.getPosition();
        cancelAnimationFrame(_this.inertiaAnimationFrame);
        _this.dragOn(event);
        var eventTarget = event.currentTarget;
        if (isTouchEvent(event)) {
          eventTarget.addEventListener('touchmove', _this.onDragMove, {
            passive: true
          });
          eventTarget.addEventListener('touchend', _this.onDragEnd);
        } else {
          eventTarget.addEventListener('mousemove', _this.onDragMove, {
            passive: true
          });
          eventTarget.addEventListener('mouseup', _this.onDragEnd);
          eventTarget.addEventListener('mouseleave', _this.onDragEnd);
        }
      };
      _this.onDragMove = function (event) {
        event.stopPropagation();
        // 드래그 이벤트
        if (_this.isDrag && (isTouchEvent(event) && event.touches.length === 1 || !isTouchEvent(event))) {
          var x = isTouchEvent(event) ? event.touches[0].pageX : event.pageX;
          var y = isTouchEvent(event) ? event.touches[0].pageY : event.pageY;
          _this.fireDrag(x, y);
          // 핀치 이벤트
        }
      };

      _this.onDragEnd = function (event) {
        var eventTarget = event.currentTarget;
        _this.fireEnd(event);
        if (isTouchEvent(event)) {
          eventTarget.removeEventListener('touchmove', _this.onDragMove);
          eventTarget.removeEventListener('touchend', _this.onDragEnd);
        } else {
          eventTarget.removeEventListener('mousemove', _this.onDragMove);
          eventTarget.removeEventListener('mouseup', _this.onDragEnd);
          eventTarget.removeEventListener('mouseleave', _this.onDragEnd);
        }
      };
      _this.onPinchStart = function (event) {
        _this.ts = _this.getPosition();
        cancelAnimationFrame(_this.inertiaAnimationFrame);
        _this.pinchOn(event);
        var eventTarget = event.currentTarget;
        if (isTouchEvent(event)) {
          eventTarget.addEventListener('touchmove', _this.onPinchMove, {
            passive: true
          });
          eventTarget.addEventListener('touchend', _this.onPinchEnd);
        } else {
          eventTarget.addEventListener('mousemove', _this.onPinchMove, {
            passive: true
          });
          eventTarget.addEventListener('mouseup', _this.onPinchEnd);
          eventTarget.addEventListener('mouseleave', _this.onPinchEnd);
        }
      };
      _this.onPinchMove = function (event) {
        event.stopPropagation();
        // 핀치 이벤트
        if (_this.isScale && isTouchEvent(event) && event.touches.length === 2) {
          var firstTouch = event.touches[0];
          var secondTouch = event.touches[1];
          _this.firePinch(firstTouch, secondTouch);
        }
      };
      _this.onPinchEnd = function (event) {
        var eventTarget = event.currentTarget;
        if (isTouchEvent(event)) {
          eventTarget.removeEventListener('touchmove', _this.onPinchMove);
          eventTarget.removeEventListener('touchend', _this.onPinchEnd);
        } else {
          eventTarget.removeEventListener('mousemove', _this.onPinchMove);
          eventTarget.removeEventListener('mouseup', _this.onPinchEnd);
          eventTarget.removeEventListener('mouseleave', _this.onPinchEnd);
        }
        _this.fireEnd(event);
      };
      return _this;
    }
    return _createClass(DragOrPinchZoom);
  }(Drag);

  var DragZoom = /*#__PURE__*/function (_Drag) {
    _inherits(DragZoom, _Drag);
    var _super = _createSuper(DragZoom);
    function DragZoom() {
      var _this;
      _classCallCheck(this, DragZoom);
      _this = _super.apply(this, arguments);
      _this.on = function (event) {
        _this.fireOn(event);
        var eventTarget = event.currentTarget;
        if (isTouchEvent(event)) {
          eventTarget.addEventListener('touchmove', _this.onMove, {
            passive: true
          });
          eventTarget.addEventListener('touchend', _this.onEnd);
        } else {
          eventTarget.addEventListener('mousemove', _this.onMove, {
            passive: true
          });
          eventTarget.addEventListener('mouseup', _this.onEnd);
          eventTarget.addEventListener('mouseleave', _this.onEnd);
        }
      };
      _this.onMove = function (event) {
        event.stopPropagation();
        // 드래그 이벤트
        if (_this.isDrag && (isTouchEvent(event) && event.touches.length === 1 || !isTouchEvent(event))) {
          var x = isTouchEvent(event) ? event.touches[0].pageX : event.pageX;
          var y = isTouchEvent(event) ? event.touches[0].pageY : event.pageY;
          _this.fireDrag(x, y);
          // 핀치 이벤트
        } else if (_this.isScale && isTouchEvent(event) && event.touches.length === 2) {
          var firstTouch = event.touches[0];
          var secondTouch = event.touches[1];
          _this.firePinch(firstTouch, secondTouch);
        }
      };
      _this.onEnd = function (event) {
        var eventTarget = event.currentTarget;
        if (isTouchEvent(event)) {
          eventTarget.removeEventListener('touchmove', _this.onMove);
          eventTarget.removeEventListener('touchend', _this.onEnd);
        } else {
          eventTarget.removeEventListener('mousemove', _this.onMove);
          eventTarget.removeEventListener('mouseup', _this.onEnd);
          eventTarget.removeEventListener('mouseleave', _this.onEnd);
        }
        _this.fireEnd(event);
      };
      return _this;
    }
    return _createClass(DragZoom);
  }(Drag);

  var ClickDrag = /*#__PURE__*/function (_Drag) {
    _inherits(ClickDrag, _Drag);
    var _super = _createSuper(ClickDrag);
    function ClickDrag() {
      var _this;
      _classCallCheck(this, ClickDrag);
      _this = _super.apply(this, arguments);
      _this.onMouseDown = function (event) {
        _this.fireOn(event);
        var eventTarget = event.currentTarget;
        eventTarget.addEventListener('mousemove', _this.onMove, {
          passive: true
        });
        eventTarget.addEventListener('mouseup', _this.onEnd);
        eventTarget.addEventListener('mouseleave', _this.onEnd);
      };
      _this.onMove = function (event) {
        _this.fireDrag(event.pageX, event.pageY);
      };
      _this.onEnd = function (event) {
        var eventTarget = event.currentTarget;
        eventTarget.removeEventListener('mousemove', _this.onMove);
        eventTarget.removeEventListener('mouseup', _this.onEnd);
        eventTarget.removeEventListener('mouseleave', _this.onEnd);
        _this.fireEnd(event);
      };
      return _this;
    }
    return _createClass(ClickDrag);
  }(Drag);

  var TouchDragZoom = /*#__PURE__*/function (_Drag) {
    _inherits(TouchDragZoom, _Drag);
    var _super = _createSuper(TouchDragZoom);
    function TouchDragZoom() {
      var _this;
      _classCallCheck(this, TouchDragZoom);
      _this = _super.apply(this, arguments);
      _this.onTouch = function (event) {
        _this.fireOn(event);
        var eventTarget = event.currentTarget;
        eventTarget.addEventListener('touchmove', _this.onMove, {
          passive: true
        });
        eventTarget.addEventListener('touchend', _this.onEnd);
      };
      _this.onMove = function (event) {
        // 드래그 이벤트 (현재 없음)
        if (_this.isDrag && event.touches.length === 1) {
          var x = event.touches[0].pageX;
          var y = event.touches[0].pageY;
          _this.fireDrag(x, y);
          // 핀치 이벤트
        } else if (_this.isScale && event.touches.length === 2) {
          var firstTouch = event.touches[0];
          var secondTouch = event.touches[1];
          _this.firePinch(firstTouch, secondTouch);
        }
      };
      _this.onEnd = function (event) {
        var eventTarget = event.currentTarget;
        eventTarget.removeEventListener('touchmove', _this.onMove);
        eventTarget.removeEventListener('touchend', _this.onEnd);
        _this.fireEnd(event);
      };
      return _this;
    }
    return _createClass(TouchDragZoom);
  }(Drag);

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

  var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2;
  var DropdownStyle = {
    Wrap: styled__default.default.div(function (_ref) {
      var _ref$theme = _ref.theme;
        _ref$theme.color;
        _ref$theme.textStyle;
        var $css = _ref.$css,
        $width = _ref.$width;
      return styled.css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n      display: inline-block;\n      min-width: 100px;\n      position: relative;\n      ", "\n      ", "\n    "])), $width ? "width: ".concat(typeof $width === 'number' ? $width + 'px' : $width, ";") : '', $css !== null && $css !== void 0 ? $css : '');
    }),
    Label: styled__default.default.div(function (_ref2) {
      var _ref2$theme = _ref2.theme,
        color = _ref2$theme.color,
        textStyle = _ref2$theme.textStyle,
        $css = _ref2.$css,
        $width = _ref2.$width;
      return styled.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      border: 1px solid ", ";\n      background-color: ", ";\n      color: ", ";\n      ", "\n      padding: 8px;\n      cursor: pointer;\n      svg {\n        path {\n          fill: ", ";\n        }\n      }\n      &.placeholder {\n        color: ", ";\n      }\n      &:focus,\n      &.focus,\n      &:active {\n        outline: none;\n        background-color: ", ";\n        border: 1px solid ", ";\n        svg {\n          path {\n            fill: ", ";\n          }\n        }\n      }\n      &.active {\n        border-bottom: none;\n        svg {\n          transform: rotate(-180deg);\n        }\n      }\n      &.readOnly {\n        border: none;\n      }\n      &.disabled {\n        color: ", ";\n        border: 1px solid ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      ", "\n      user-select: none;\n      ", "\n    "])), color.borderColor, color.backgroundColor, color.textColor, textStyle.default, color.placeholderColor, color.placeholderColor, color.backgroundFocusColor, color.borderFocusColor, color.borderFocusColor, color.textDisabledColor, color.borderDisabledColor, color.backgroundHoverColor, $width ? "width: inherit;" : '', $css !== null && $css !== void 0 ? $css : '');
    }),
    List: styled__default.default.div(function (_ref3) {
      var color = _ref3.theme.color,
        $css = _ref3.$css;
      return styled.css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      position: absolute;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n      width: 100%;\n      border-top: none;\n      &.focus {\n        border-color: ", ";\n      }\n      max-height: 180px;\n      overflow-y: auto;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      ", "\n    "])), color.backgroundColor, color.borderColor, color.borderFocusColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    Item: styled__default.default.div(function (_ref4) {
      var color = _ref4.theme.color,
        $css = _ref4.$css;
      return styled.css(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      width: 100%;\n      padding: 4px 8px;\n      user-select: none;\n      &.current {\n        color: ", ";\n      }\n      &:hover {\n        background-color: ", ";\n      }\n      &:focus,\n      &:active {\n        outline: none;\n        background-color: ", ";\n      }\n      ", "\n    "])), color.textFocusColor, color.backgroundHoverColor, color.backgroundFocusColor, $css !== null && $css !== void 0 ? $css : '');
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

  var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1;
  var SvgChartWrap$1 = styled__default.default.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  padding: 0;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0px;\n  background: #fff;\n  & > svg {\n    &:first-of-type {\n      position: sticky;\n      left: 0px;\n    }\n  }\n"])));
  var LineChartStyle = {
    SvgChartWrap: SvgChartWrap$1,
    LineChartWrap: styled__default.default.div(function (_ref) {
      _ref.theme.color;
        var $css = _ref.$css;
      return styled.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n      display: flex;\n      justify-content: center;\n      padding: 0;\n      position: relative;\n      & > div {\n        width: 100%;\n        display: flex;\n      }\n      &.noData > div {\n        width: fit-content;\n      }\n      &.scrollable {\n        overflow-x: auto;\n        &.noData {\n          touch-action: none;\n        }\n      }\n      max-width: 100%;\n      margin: 0 auto;\n      &.responsive:not(.scrollable) {\n        width: 100%;\n        margin: 0 auto;\n        ", " {\n          width: 100%;\n        }\n        svg {\n          position: relative;\n          height: auto;\n        }\n        & > div {\n          margin: 0 auto;\n          width: 100%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n      }\n      ", "\n    "])), SvgChartWrap$1, $css !== null && $css !== void 0 ? $css : '');
    }),
    Nodata: styled__default.default.div(function (_ref2) {
      var _ref2$theme = _ref2.theme,
        color = _ref2$theme.color,
        textStyle = _ref2$theme.textStyle,
        $css = _ref2.$css;
      return styled.css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      & > div {\n        transform: translate(26px, -50%);\n        ", "\n        color: ", ";\n        background: #fff;\n        padding: 8px 20px;\n        white-space: nowrap;\n        box-shadow: 0px 2px 8px rgba(33, 33, 45, 0.16);\n        border-radius: 32px;\n      }\n      &.disableY {\n        & > div {\n          transform: translate(0, -50%);\n        }\n      }\n      &.scrolledX {\n        width: auto;\n        left: calc(50%);\n        & > div {\n          transform: translate(-50%, -50%);\n        }\n      }\n      ", "\n    "])), textStyle.smallBold, color.textColor, $css !== null && $css !== void 0 ? $css : '');
    }),
    YText: styled__default.default.text(function (_ref3) {
      _ref3.theme.color;
        var $css = _ref3.$css;
      return styled.css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n      font-size: 12px;\n      ", "\n    "])), $css !== null && $css !== void 0 ? $css : '');
    }),
    XText: styled__default.default.text(function (_ref4) {
      _ref4.theme.color;
        var $css = _ref4.$css;
      return styled.css(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n      font-size: 12px;\n      text-align: center;\n      ", "\n    "])), $css !== null && $css !== void 0 ? $css : '');
    }),
    LineInfoWrap: styled__default.default.div(function (_ref5) {
      var _ref5$theme = _ref5.theme,
        color = _ref5$theme.color,
        textStyle = _ref5$theme.textStyle;
        _ref5.$css;
      return styled.css(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      ", "\n      font-size: 12px;\n      color: ", ";\n      .line {\n        width: 20px;\n        height: 2px;\n      }\n    "])), textStyle.small, color.textDataColor);
    }),
    BottomInfoWrap: styled__default.default.div(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 20px;\n    margin: 12px auto 0;\n    max-width: 100%;\n    // for : \uC6D4\uAC04 \uADF8\uB798\uD504 \uC2DC\uC5D0 \uC6B0\uCE21 \uC0AC\uC774\uB4DC \uBE14\uB7EC\uCC98\uB9AC\n    &.paddingRight {\n      padding-right: 20px;\n    }\n  "])))
  };

  function getLineChartStyle(theme) {
    var colors = theme.colors,
      fonts = theme.fonts;
    return {
      color: {
        textDataColor: colors.white70,
        textColor: colors.gray4,
        textDeepColor: colors.gray6,
        textBlackColor: colors.black,
        labelColor: colors.black,
        lineColor: colors.gray2,
        xLineColor: colors.gray3,
        chartLineColor: colors.primary,
        chartCircleColor: colors.primary,
        chartStrokeColor: colors.white,
        averageLineColor: colors.success
      },
      textStyle: {
        default: fonts.default,
        small: fonts.small,
        smallBold: fonts.smallBold
      }
    };
  }
  var getLineChartTheme = function getLineChartTheme(currentTheme, customTheme) {
    var theme = merge$1(currentTheme, customTheme);
    return theme;
  };
  var LineChartProvider = function LineChartProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultLineChartTheme = getLineChartStyle(globalTheme.theme);
    var nextTheme = customTheme ? getLineChartTheme(defaultLineChartTheme, customTheme) : defaultLineChartTheme;
    return /*#__PURE__*/React__namespace.default.createElement(styled.ThemeProvider, {
      theme: nextTheme
    }, /*#__PURE__*/React__namespace.default.cloneElement(children, {
      nextTheme: nextTheme
    }));
  };

  var _a;
  require('dayjs/locale/ko');
  dayjs__default.default.locale('ko');
  var TODAY_DAYJS = dayjs__default.default();
  var INITIAL_CONFIG = {
    width: 400,
    height: 200,
    yStep: {
      step: 5,
      toFixed: 1
    },
    xStep: {
      step: {
        '0': 0,
        '50': 50,
        '100': 100
      }
    }
  };
  var LineGraph = /*#__PURE__*/_createClass(function LineGraph(config, chartData, extraData, responsive) {
    var _this = this;
    _classCallCheck(this, LineGraph);
    // chartData 의 평균 값을 구하는 함수
    this.getYAveragePercent = function (value) {
      var total = value.reduce(function (prev, curr) {
        prev += curr.y;
        return prev;
      }, 0);
      return LineGraph.getPercent(total / value.length, _this.config.yStep.max, _this.config.yStep.min);
    };
    // x,y축의 각 눈금 값
    this.axisLabelByStepSize = function (values) {
      var step = values.step,
        index = values.index,
        max = values.max,
        min = values.min;
      var thisStep = step - index;
      var stan = LineGraph.getStan(max, min);
      var stepValue = thisStep / step * stan;
      return stepValue + LineGraph.disposeUndef(min);
    };
    // x, y축의 각 눈금 값 구하는 함수
    this.createStandard = function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        size: 0,
        step: 0,
        max: 100,
        min: 0
      };
      var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var size = values.size,
        step = values.step,
        max = values.max,
        min = values.min;
      if (typeof step === 'number') {
        // 축의 눈금이 숫자로 주어졌을 경우
        var stepArray = Array.from(Array(step + 1).keys());
        return stepArray.map(function (_, index) {
          return {
            axis: size / step * index,
            label: _this.axisLabelByStepSize({
              index: index,
              step: step,
              max: max,
              min: min
            }).toFixed(toFixed)
          };
        });
      } else {
        // 축의 눈금이 AxisLabel 타입으로 주어졌을 경우
        var perWidth = LineGraph.getPerSize(step, size);
        return Object.keys(step).map(function (keyName) {
          var xPercent = LineGraph.getPercent(step[keyName], max, min);
          return {
            axis: LineGraph.getXAxis(xPercent, size - perWidth, perWidth),
            label: keyName
          };
        });
      }
    };
    // 그래프에 데이터를 실제로 그릴 때 사용되는 값들 구하는 함수
    this.disposeChartData = function (chartSize,
    // 그래프 크기
    xStep,
    // x축 눈금 config
    yStep,
    // y축 눈금 config
    chartData,
    // 그래프에 표기할 데이터
    extraData // 발열 과 같이 평균값 외로 그래프에 표기할 데이터
    ) {
      if (!chartData) return {
        chartPoint: [],
        chartLine: '',
        yAverage: 0
      };
      // 그래프의 width 값
      var rebuildWidth = chartSize.width;
      var rebuildHeight = chartSize.height;
      var perWidth = LineGraph.getPerSize(xStep.step, chartSize.width);
      var perHeight = LineGraph.getPerSize(yStep.step, chartSize.height);
      // 그래프 양 옆에 여백(축의 눈금 간격 만큼)을 주기 위해 그려지는 그래프의 ㄴ길이 조정
      if (typeof xStep.step !== 'number') {
        rebuildWidth = chartSize.width - perWidth;
      }
      // deprecated
      if (typeof yStep.step !== 'number') {
        rebuildHeight = chartSize.height - perHeight;
      }
      // 그래프 상 좌표
      var chartPoint = chartData.map(function (obj) {
        var yPercent = LineGraph.getPercent(obj.y, yStep.max, yStep.min);
        var yPoint = LineGraph.getYAxis(yPercent, rebuildHeight);
        var xPercent = LineGraph.getPercent(obj.x, xStep.max, xStep.min);
        var xPoint = LineGraph.getXAxis(xPercent, rebuildWidth, perWidth);
        return {
          y: yPoint,
          x: xPoint,
          original: obj
        };
      });
      // 그래프 상 좌표들 연결하는 선
      var chartLine = chartPoint.map(function (obj, objIndex) {
        if (objIndex === 0) {
          return "M".concat(obj.x, " ").concat(obj.y);
        } else {
          return "L".concat(obj.x, " ").concat(obj.y);
        }
      }).join(' ');
      return {
        chartPoint: chartPoint,
        chartLine: chartLine,
        yAverage: _this.getYAveragePercent(chartData),
        extraData: extraData && extraData.length > 0 ? extraData.map(function (extra) {
          return _extends(_extends({}, extra), {
            value: LineGraph.getPercent(extra.value, _this.config.yStep.max, _this.config.yStep.min)
          });
        }) : undefined
      };
    };
    LineGraph.responsive = responsive;
    this.config = _extends(_extends({}, INITIAL_CONFIG), config);
    // x 축 눈금 config (size, 눈금간 간격, 최대, 최소)
    this.xAxis = this.createStandard({
      size: this.config.width,
      step: this.config.xStep.step,
      max: this.config.xStep.max,
      min: this.config.xStep.min
    });
    // y 축 눈금 config (size, 눈금간 간격, 최대, 최소)
    this.yAxis = this.createStandard({
      size: this.config.height,
      step: this.config.yStep.step,
      max: this.config.yStep.max,
      min: this.config.yStep.min
    }, this.config.yStep.toFixed);
    // 그래프 그릴 때 사용할 데이터
    this.chartValues = this.disposeChartData({
      width: this.config.width,
      height: this.config.height
    }, this.config.xStep, this.config.yStep, chartData, extraData);
  });
  _a = LineGraph;
  /**
   * threshold 단위로 step 생성
   *
   * @static
   * @param {ChartDataType[]} value
   * @param {number} threshold
   * @memberof LineGraph
   */
  // 주어진 값들과 threshold를 기준으로 y축 눈금들의 config(최대,최소, 간격들)을 계산
  LineGraph.getYStandardByThreshold = function (value, threshold,
  // 연산의 결과를 위해 더해지거나 빼는 상수 값 ( 상수항 )
  defaultValue) {
    // 주어진 값(y값)들 중 최대값
    var max = value.reduce(function (prev, curr) {
      prev = prev === 0 ? curr.y : Math.max(prev, curr.y);
      return prev;
    }, 0);
    // 주어진 값(y값)들 중 최소값
    var min = value.reduce(function (prev, curr) {
      prev = prev === 0 ? curr.y : Math.min(prev, curr.y);
      return prev;
    }, 0);
    max = Math.ceil(max);
    min = Math.floor(min);
    var diff = max - min;
    // y축 눈금간의 간격 개수
    var nextStep = Math.ceil(diff ? diff : 2 * threshold / threshold);
    // GB 쪽 요청사항 : 전체 y축 눈금은 최대 6개 까지만 표시
    if (nextStep > 6) {
      nextStep = 6;
    }
    return _extends(_extends({}, defaultValue), {
      max: max + threshold,
      min: min - threshold,
      step: nextStep
    });
  };
  /**
   * · 최대값-최소값 의 차이로 threshold 계산시 기준 ( 지비 기획 요청 사항 )
   * · 최대값-최소값=10이하일 경우엔 2,±
   * · 최대값-최소값=15이하일 경우엔 3,±
   * · 최대값-최소값=20이하일 경우엔 4,±
   * · 그외엔5
   * @static
   * @param {ChartDataType[]} value
   * @param {{
   *       max: number
   *       min: number
   *       step: number
   *     }} defaultValue
   * @memberof LineGraph
   */
  // 주어진 값들과 기준으로 y축 눈금들의 config(최대,최소, 간격들)을 계산
  LineGraph.getYVariableStandard = function (value, defaultValue) {
    // 주어진 값(y값)들 중 최대값
    var max = value.reduce(function (prev, curr) {
      prev = prev === 0 ? curr.y : Math.max(prev, curr.y);
      return prev;
    }, 0);
    // 주어진 값(y값)들 중 최소값
    var min = value.reduce(function (prev, curr) {
      prev = prev === 0 ? curr.y : Math.min(prev, curr.y);
      return prev;
    }, 0);
    max = Math.ceil(max);
    min = Math.floor(min);
    var diff = max - min;
    // 최대, 최소 값들의 차이로 threshold 값을 정함 (기준은 지비 쪽 요청 사항에 따름)
    var threshold = 5;
    if (diff <= 10) {
      threshold = 2;
    } else if (diff <= 15) {
      threshold = 3;
    } else if (diff <= 20) {
      threshold = 4;
    }
    // y축 눈금간의 간격 개수
    var nextStep = Math.ceil(diff ? diff : 2 * threshold / threshold);
    // GB 쪽 요청사항 : 전체 y축 눈금은 최대 6개 까지만 표시
    if (nextStep > 6) {
      nextStep = 6;
    }
    return _extends(_extends({}, defaultValue), {
      max: max + threshold,
      min: min - threshold,
      step: nextStep
    });
  };
  // 시작과 끝 날짜를 받아서 그 사이의 날짜들을 배열로 반환하는 함수
  LineGraph.getPeriods = function (start, end) {
    return [start].concat(Array.from(Array(Math.ceil(Math.abs(start.diff(end, 'day')))).keys()).map(function (key) {
      var dayStandard = start.clone();
      return dayStandard.add(key + 1, 'day');
    }));
  };
  // 주간 그래프에서 각 날짜들간 간격을 세팅하는 함수
  LineGraph.getWeeks = function () {
    var daysInWeekArr = LineGraph.getPeriods(TODAY_DAYJS.startOf('week').add(1, 'day'), TODAY_DAYJS.endOf('week').add(1, 'day'));
    // 전체를 100으로 보았을 때, 각 날짜들간의 간격을 세팅 (ex. 오늘 : 0, 내일 : 1, ... 6일뒤 : 100)
    var daysGapInGraph = daysInWeekArr.reduce(function (prev, curr, index) {
      var dayStr = curr.format('D'); // 며칠
      var dayOfWeekStr = curr.format('ddd'); // 무슨 요일
      prev["".concat(dayStr, "/").concat(dayOfWeekStr)] = index / 6 * 100;
      return prev;
    }, {});
    return daysGapInGraph;
  };
  // 월간 그래프에서 각 날짜들간 간격을 세팅하는 함수
  LineGraph.getMonthDays = function () {
    var currentMonthStr = TODAY_DAYJS.format('M');
    var numberOfDaysInMonth = TODAY_DAYJS.daysInMonth();
    var daysInMonthArr = Array.from(Array(numberOfDaysInMonth).keys()).map(function (i) {
      return i + 1;
    });
    // 전체를 100으로 보았을 때, 각 날짜들간 간격 ( e.g : 1일 : 0, 2일 : 1, .... 30일 : 100)
    var daysGapInGraph = daysInMonthArr.reduce(function (prev, day) {
      prev["".concat(currentMonthStr, "/").concat(day)] = (day - 1) / (numberOfDaysInMonth - 1) * 100;
      return prev;
    }, {});
    return daysGapInGraph;
  };
  // num이 없을 경우 0으로 처리
  LineGraph.disposeUndef = function (num) {
    return num !== null && num !== void 0 ? num : 0;
  };
  // 최대값, 최소값, 그 사이의 값들의 갯수
  LineGraph.getStan = function (max, min) {
    return Math.abs(_a.disposeUndef(max) - _a.disposeUndef(min));
  };
  // 그래프 크기에 따른 사이즈 Percentage 값
  LineGraph.getPerSize = function (numberOfStep, size) {
    return typeof numberOfStep === 'number' ? size / numberOfStep : size / Object.keys(numberOfStep).length;
  };
  // 최대값과 최소값을 받아서 그 값들을 기준으로 value의 percent를 구하는 함수
  LineGraph.getPercent = function (value) {
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var range = _a.getStan(max, min);
    var index = value - _a.disposeUndef(min);
    return index / range * 100;
  };
  LineGraph.getYAxis = function (percent, size) {
    return size - size / 100 * percent; // y축 역방향
  };

  LineGraph.getXAxis = function (percent, size, perWidth) {
    var point = size / 100 * percent;
    return point + perWidth / 2;
    // return point + 26 // x 축 0 포인트를 띄움
  };
  // 데이터들의 라벨과 이에 상응하는 값(ChartStringValue)를 받아 x,y 좌표의 배열로 파싱
  LineGraph.parseChartData = function (chartStringValue,
  // 데이터들의 라벨과 그의 상응하는 값 (ex : { '1/1': 10, '1/2': 20, ... }})
  xCalibration // 그래프 x좌표의 눈금
  ) {
    return Object.keys(chartStringValue).reduce(function (prev, curr) {
      if (xCalibration[curr] !== undefined) {
        prev = [].concat(_toConsumableArray(prev), [{
          x: xCalibration[curr],
          y: chartStringValue[curr]
        }]);
      }
      return prev;
    }, []);
  };

  var CHART_TYPES = {
    체온: {
      type: 'threshold',
      threshold: 0.5,
      defaultValue: {
        max: 38,
        min: 36,
        step: 4,
        toFixed: 1
      }
    },
    맥박: {
      type: 'variable',
      defaultValue: {
        max: 105,
        min: 85,
        step: 4,
        toFixed: 0
      }
    },
    산소포화도: {
      type: 'fixed',
      defaultValue: {
        max: 100,
        min: 95,
        step: 5,
        toFixed: 0
      }
    },
    최고혈압: {
      type: 'variable',
      defaultValue: {
        max: 140,
        min: 120,
        step: 4,
        toFixed: 0
      }
    },
    최저혈압: {
      type: 'variable',
      defaultValue: {
        max: 95,
        min: 75,
        step: 4,
        toFixed: 0
      }
    },
    알코올농도: {
      type: 'fixed',
      defaultValue: {
        max: 0.08,
        min: 0,
        step: 4,
        toFixed: 2
      }
    }
  };
  // 그래프의 카테고리(호흡,맥박..) 과 주어진 데이터값 ( ChartDataType[] ) 으로 y축 눈금의 설정 값 set
  var disposeChartType = function disposeChartType(value, type) {
    var currentType = CHART_TYPES[type];
    if (currentType.type === 'fixed') {
      return currentType.defaultValue;
    } else if (currentType.type === 'threshold') {
      return LineGraph.getYStandardByThreshold(value, currentType.threshold, currentType.defaultValue);
    } else {
      return LineGraph.getYVariableStandard(value, currentType.defaultValue);
    }
  };

  var LineChartWrap = LineChartStyle.LineChartWrap,
    Nodata = LineChartStyle.Nodata,
    YText = LineChartStyle.YText,
    XText = LineChartStyle.XText,
    SvgChartWrap = LineChartStyle.SvgChartWrap,
    LineInfoWrap = LineChartStyle.LineInfoWrap,
    BottomInfoWrap = LineChartStyle.BottomInfoWrap;
  var DefaultLineChart = function DefaultLineChart(_a) {
    var _b, _c, _d;
    var $css = _a.$css,
      nextTheme = _a.nextTheme;
      _a.calibration;
      _a.positionUp;
      var _chartData = _a.chartData,
      width = _a.width,
      height = _a.height,
      YChartType = _a.YChartType,
      XChartType = _a.XChartType,
      extraData = _a.extraData,
      className = _a.className,
      props = __rest(_a, ["$css", "nextTheme", "calibration", "positionUp", "chartData", "width", "height", "YChartType", "XChartType", "extraData", "className"]);
    var chartWrapRef = React.useRef();
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      lineGraphData = _useState2[0],
      set_lineGraphData = _useState2[1]; // 그래프 인스턴스
    var _useState3 = React.useState(width),
      _useState4 = _slicedToArray(_useState3, 2),
      graphWidth = _useState4[0],
      set_graphWidth = _useState4[1];
    // 그래프 설정값 세팅 및 인스턴스 생성
    React.useEffect(function () {
      // 차트 데이터 없을 시 리턴
      if (!_chartData) return;
      // 각 x축 라벨들의 위치값 ( ex : { 04/01 : 1, 04/02 : 2, ... } )
      var xStepValue = XChartType === '월간' ? LineGraph.getMonthDays() : LineGraph.getWeeks();
      // x 축의 길이 세팅
      // set_xStepLength(Object.keys(xStepValue).length)
      // 각 데이터들의 X,y 좌표들의 배열 ( ex : [ { x : 1, y : 1 }, { x : 2, y : 2 }, ... ])
      var chartData = isArray$1(_chartData) // _chartData가 배열일 때 ( ChartDataType[] )
      ? _chartData : _typeof(_chartData) === 'object' // _chartData가 객체일 때 ( ChartStringValue )
      ? LineGraph.parseChartData(_chartData, xStepValue) : _chartData(xStepValue); // _chartData가 함수일 때
      // y축 눈금의 설정 값
      var yStep = typeof YChartType === 'string' ? disposeChartType(chartData, YChartType) : YChartType;
      // 위의 설정한 값들을 바탕으로 그래프 인스턴스 생성
      var chartGraphData = new LineGraph({
        width: graphWidth,
        height: height,
        yStep: yStep,
        xStep: {
          step: xStepValue
        }
      }, chartData, extraData);
      set_lineGraphData(chartGraphData);
    }, [_chartData, graphWidth, height, YChartType, XChartType, extraData]);
    var yAverage = React.useMemo(function () {
      var _a;
      return (_a = lineGraphData === null || lineGraphData === void 0 ? void 0 : lineGraphData.chartValues.yAverage) !== null && _a !== void 0 ? _a : 0;
    }, [lineGraphData]);
    // 화면 사이즈 변경 시 그래프 리사이징
    React.useEffect(function () {
      function rePosition() {
        if (!lineGraphData) return;
        var wrapRef = chartWrapRef.current;
        if (XChartType === '월간') {
          set_graphWidth(width);
        } else if (XChartType === '주간') {
          var wrapRect = wrapRef.getBoundingClientRect();
          wrapRect && set_graphWidth(wrapRect.width - Y_AXIS_WIDTH);
        }
      }
      if (lineGraphData) {
        rePosition();
      }
      window.addEventListener('resize', rePosition);
      return function () {
        window.removeEventListener('resize', rePosition);
      };
    }, [lineGraphData, XChartType, width]);
    var isNoData = React.useMemo(function () {
      return lineGraphData && lineGraphData.chartValues.chartPoint.length < 1;
    }, [lineGraphData]);
    return /*#__PURE__*/React__namespace.default.createElement(React__namespace.default.Fragment, null, /*#__PURE__*/React__namespace.default.createElement(LineChartWrap, _extends({
      ref: chartWrapRef,
      "$css": $css,
      className: classNames({
        scrollable: XChartType === '월간',
        noData: lineGraphData && lineGraphData.chartValues.chartPoint.length < 1
      }, className)
    }, props), /*#__PURE__*/React__namespace.default.createElement("div", null, /*#__PURE__*/React__namespace.default.createElement(SvgChartWrap, null, isNoData && /*#__PURE__*/React__namespace.default.createElement(Nodata, {
      className: classNames({
        disableY: XChartType === '주간',
        scrolledX: XChartType === '월간'
      })
    }, /*#__PURE__*/React__namespace.default.createElement("div", null, "\uB4F1\uB85D\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")), !isNoData && /*#__PURE__*/React__namespace.default.createElement("svg", {
      width: Y_AXIS_WIDTH,
      height: height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT,
      viewBox: "0 -".concat(GRAPH_MARGIN_TOP, " ").concat(Y_AXIS_WIDTH, " ").concat(height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT),
      preserveAspectRatio: "xMidYMid meet"
    }, lineGraphData === null || lineGraphData === void 0 ? void 0 : lineGraphData.yAxis.map(function (item, index) {
      var _a;
      return /*#__PURE__*/React__namespace.default.createElement(YText, {
        alignmentBaseline: "central",
        textAnchor: "middle",
        key: 'yValues' + index,
        x: Y_AXIS_WIDTH / 2 - 1,
        y: item.axis,
        fill: (_a = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _a === void 0 ? void 0 : _a.labelColor
      }, item.label);
    })), /*#__PURE__*/React__namespace.default.createElement("svg", {
      className: "line-chart-main",
      width: graphWidth,
      height: height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT,
      viewBox: "0 -".concat(GRAPH_MARGIN_TOP, " ").concat(graphWidth, " ").concat(height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT),
      preserveAspectRatio: "xMidYMid meet"
    }, lineGraphData === null || lineGraphData === void 0 ? void 0 : lineGraphData.xAxis.map(function (item) {
      var _a;
      return /*#__PURE__*/React__namespace.default.createElement(XText, {
        className: "x-axis",
        alignmentBaseline: 'text-before-edge',
        textAnchor: "middle",
        key: 'xValues' + item.axis,
        x: item.axis,
        y: height + GRAPH_MARGIN_BOTTOM,
        fill: (_a = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _a === void 0 ? void 0 : _a.labelColor,
        "data-date": item.label
      }, item.label);
    }), lineGraphData === null || lineGraphData === void 0 ? void 0 : lineGraphData.yAxis.map(function (item, itemIndex) {
      var _a;
      return /*#__PURE__*/React__namespace.default.createElement("path", _extends({
        key: 'y' + item.axis,
        d: "M0 ".concat(item.axis, " H").concat(graphWidth),
        stroke: (_a = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _a === void 0 ? void 0 : _a.lineColor,
        strokeWidth: 1
      }, itemIndex !== lineGraphData.yAxis.length - 1 && {
        strokeDasharray: "3 2"
      }));
    }), /*#__PURE__*/React__namespace.default.createElement("path", {
      d: "M0 ".concat(height, " H").concat(graphWidth),
      stroke: (_b = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _b === void 0 ? void 0 : _b.xLineColor,
      strokeWidth: 1
    }), yAverage && /*#__PURE__*/React__namespace.default.createElement("path", {
      d: "M0 ".concat(LineGraph.getYAxis(yAverage, height), " H").concat(graphWidth),
      stroke: (_c = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _c === void 0 ? void 0 : _c.averageLineColor,
      fill: "transparent",
      strokeWidth: 1
    }), lineGraphData && lineGraphData.chartValues.extraData && /*#__PURE__*/React__namespace.default.createElement(React__namespace.default.Fragment, null, lineGraphData.chartValues.extraData.map(function (extra, extraIndex) {
      return /*#__PURE__*/React__namespace.default.createElement("path", {
        key: 'extraIndex' + extraIndex,
        d: "M0 ".concat(LineGraph.getYAxis(extra.value, height), " H").concat(graphWidth),
        stroke: extra.color,
        fill: "transparent",
        strokeWidth: 1
      });
    })), lineGraphData && (lineGraphData === null || lineGraphData === void 0 ? void 0 : lineGraphData.chartValues.chartPoint.length) > 0 && /*#__PURE__*/React__namespace.default.createElement(React__namespace.default.Fragment, null, /*#__PURE__*/React__namespace.default.createElement("path", {
      className: "line",
      d: lineGraphData.chartValues.chartLine,
      stroke: (_d = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _d === void 0 ? void 0 : _d.chartLineColor,
      fill: "transparent",
      strokeWidth: 1
    }), lineGraphData.chartValues.chartPoint.map(function (item, itemIndex) {
      var _a, _b;
      return /*#__PURE__*/React__namespace.default.createElement(React.Fragment, {
        key: 'circle' + itemIndex
      }, /*#__PURE__*/React__namespace.default.createElement("circle", {
        className: "circle",
        cx: item.x,
        cy: item.y,
        r: "4",
        fill: (_a = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _a === void 0 ? void 0 : _a.chartCircleColor,
        stroke: (_b = nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color) === null || _b === void 0 ? void 0 : _b.chartStrokeColor,
        strokeWidth: 2,
        alignmentBaseline: 'middle'
      }));
    })))))), /*#__PURE__*/React__namespace.default.createElement(BottomInfoWrap, _extends({
      className: classNames({
        paddingRight: XChartType === '월간' && !isNoData
      })
    }, XChartType === '주간' && {
      style: {
        margin: '12px auto 0'
      }
    }), /*#__PURE__*/React__namespace.default.createElement(LineInfoWrap, null, /*#__PURE__*/React__namespace.default.createElement("div", null, "\uD3C9\uADE0 :"), /*#__PURE__*/React__namespace.default.createElement("div", {
      className: "line",
      style: {
        backgroundColor: nextTheme === null || nextTheme === void 0 ? void 0 : nextTheme.color.averageLineColor
      }
    })), lineGraphData && lineGraphData.chartValues.extraData && /*#__PURE__*/React__namespace.default.createElement(React__namespace.default.Fragment, null, lineGraphData.chartValues.extraData.map(function (extra, extraIndex) {
      return /*#__PURE__*/React__namespace.default.createElement(LineInfoWrap, {
        key: 'extraInfo' + extraIndex
      }, /*#__PURE__*/React__namespace.default.createElement("div", null, extra.title, " :"), /*#__PURE__*/React__namespace.default.createElement("div", {
        className: "line",
        style: {
          backgroundColor: extra.color
        }
      }));
    }))));
  };
  var Y_AXIS_WIDTH = 22;
  var X_AXIS_HEIGHT = 15;
  var GRAPH_MARGIN_TOP = 7;
  var GRAPH_MARGIN_BOTTOM = 10;
  var LineChart = function LineChart(props) {
    return /*#__PURE__*/React__namespace.default.createElement(LineChartProvider, {
      customTheme: props.customTheme
    }, /*#__PURE__*/React__namespace.default.createElement(DefaultLineChart, _extends({}, props)));
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
    return theme;
  };
  var TextInputProvider = function TextInputProvider(_ref) {
    var children = _ref.children,
      customTheme = _ref.customTheme;
    var globalTheme = React__namespace.default.useContext(KuiContext);
    var defaultTextInputTheme = React__namespace.default.useMemo(function () {
      return getTextInputTheme(getTextInputStyle(globalTheme.theme), customTheme !== null && customTheme !== void 0 ? customTheme : {});
    }, []);
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
  exports.ButtonProvider = ButtonProvider;
  exports.Calendar = Calendar;
  exports.CalendarProvider = CalendarProvider;
  exports.ClickDrag = ClickDrag;
  exports.CodeBlock = CodeBlock;
  exports.ControlPosition = ControlPosition;
  exports.Div = Div;
  exports.Drag = Drag;
  exports.DragOrPinchZoom = DragOrPinchZoom;
  exports.DragWithZoom = DragZoom;
  exports.Dropdown = Dropdown;
  exports.DropdownProvider = DropdownProvider;
  exports.KuiContext = KuiContext;
  exports.KuiProvider = KuiProvider;
  exports.LineChart = LineChart;
  exports.LineChartProvider = LineChartProvider;
  exports.TextInput = TextInput;
  exports.TextInputProvider = TextInputProvider;
  exports.TouchDragZoom = TouchDragZoom;
  exports.defaultThemes = defaultThemes;
  exports.generateCalendar = generateCalendar;
  exports.useOutsideClick = useOutsideClick;

}));
