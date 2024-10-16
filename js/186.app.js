(self["webpackChunkfls_start"] = self["webpackChunkfls_start"] || []).push([ [ 186 ], {
    643: function(module) {
        /*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
        (function(global, factory) {
            true ? module.exports = factory() : 0;
        })(0, (function() {
            "use strict";
            function ownKeys(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable;
                    }))), t.push.apply(t, o);
                }
                return t;
            }
            function _objectSpread2(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                        _defineProperty(e, r, t[r]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                    }));
                }
                return e;
            }
            function _toPrimitive(t, r) {
                if ("object" != typeof t || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != typeof i) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }
            function _toPropertyKey(t) {
                var i = _toPrimitive(t, "string");
                return "symbol" == typeof i ? i : i + "";
            }
            function _typeof(o) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                    return typeof o;
                } : function(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                }, _typeof(o);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
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
                if (key in obj) Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }); else obj[key] = value;
                return obj;
            }
            function _toConsumableArray(arr) {
                return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }
            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
            var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
            var WINDOW = IS_BROWSER ? window : {};
            var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
            var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
            var NAMESPACE = "cropper";
            var ACTION_ALL = "all";
            var ACTION_CROP = "crop";
            var ACTION_MOVE = "move";
            var ACTION_ZOOM = "zoom";
            var ACTION_EAST = "e";
            var ACTION_WEST = "w";
            var ACTION_SOUTH = "s";
            var ACTION_NORTH = "n";
            var ACTION_NORTH_EAST = "ne";
            var ACTION_NORTH_WEST = "nw";
            var ACTION_SOUTH_EAST = "se";
            var ACTION_SOUTH_WEST = "sw";
            var CLASS_CROP = "".concat(NAMESPACE, "-crop");
            var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
            var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
            var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
            var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
            var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
            var CLASS_MOVE = "".concat(NAMESPACE, "-move");
            var DATA_ACTION = "".concat(NAMESPACE, "Action");
            var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
            var DRAG_MODE_CROP = "crop";
            var DRAG_MODE_MOVE = "move";
            var DRAG_MODE_NONE = "none";
            var EVENT_CROP = "crop";
            var EVENT_CROP_END = "cropend";
            var EVENT_CROP_MOVE = "cropmove";
            var EVENT_CROP_START = "cropstart";
            var EVENT_DBLCLICK = "dblclick";
            var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
            var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
            var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
            var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
            var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
            var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
            var EVENT_READY = "ready";
            var EVENT_RESIZE = "resize";
            var EVENT_WHEEL = "wheel";
            var EVENT_ZOOM = "zoom";
            var MIME_TYPE_JPEG = "image/jpeg";
            var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
            var REGEXP_DATA_URL = /^data:/;
            var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
            var REGEXP_TAG_NAME = /^img|canvas$/i;
            var MIN_CONTAINER_WIDTH = 200;
            var MIN_CONTAINER_HEIGHT = 100;
            var DEFAULTS = {
                viewMode: 0,
                dragMode: DRAG_MODE_CROP,
                initialAspectRatio: NaN,
                aspectRatio: NaN,
                data: null,
                preview: "",
                responsive: true,
                restore: true,
                checkCrossOrigin: true,
                checkOrientation: true,
                modal: true,
                guides: true,
                center: true,
                highlight: true,
                background: true,
                autoCrop: true,
                autoCropArea: .8,
                movable: true,
                rotatable: true,
                scalable: true,
                zoomable: true,
                zoomOnTouch: true,
                zoomOnWheel: true,
                wheelZoomRatio: .1,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: true,
                minCanvasWidth: 0,
                minCanvasHeight: 0,
                minCropBoxWidth: 0,
                minCropBoxHeight: 0,
                minContainerWidth: MIN_CONTAINER_WIDTH,
                minContainerHeight: MIN_CONTAINER_HEIGHT,
                ready: null,
                cropstart: null,
                cropmove: null,
                cropend: null,
                crop: null,
                zoom: null
            };
            var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + "</div>" + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + "</div>" + "</div>";
            var isNaN = Number.isNaN || WINDOW.isNaN;
            function isNumber(value) {
                return typeof value === "number" && !isNaN(value);
            }
            var isPositiveNumber = function isPositiveNumber(value) {
                return value > 0 && value < 1 / 0;
            };
            function isUndefined(value) {
                return typeof value === "undefined";
            }
            function isObject(value) {
                return _typeof(value) === "object" && value !== null;
            }
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function isPlainObject(value) {
                if (!isObject(value)) return false;
                try {
                    var _constructor = value.constructor;
                    var prototype = _constructor.prototype;
                    return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
                } catch (error) {
                    return false;
                }
            }
            function isFunction(value) {
                return typeof value === "function";
            }
            var slice = Array.prototype.slice;
            function toArray(value) {
                return Array.from ? Array.from(value) : slice.call(value);
            }
            function forEach(data, callback) {
                if (data && isFunction(callback)) if (Array.isArray(data) || isNumber(data.length)) toArray(data).forEach((function(value, key) {
                    callback.call(data, value, key, data);
                })); else if (isObject(data)) Object.keys(data).forEach((function(key) {
                    callback.call(data, data[key], key, data);
                }));
                return data;
            }
            var assign = Object.assign || function assign(target) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                if (isObject(target) && args.length > 0) args.forEach((function(arg) {
                    if (isObject(arg)) Object.keys(arg).forEach((function(key) {
                        target[key] = arg[key];
                    }));
                }));
                return target;
            };
            var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
            function normalizeDecimalNumber(value) {
                var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
                return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
            }
            var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
            function setStyle(element, styles) {
                var style = element.style;
                forEach(styles, (function(value, property) {
                    if (REGEXP_SUFFIX.test(property) && isNumber(value)) value = "".concat(value, "px");
                    style[property] = value;
                }));
            }
            function hasClass(element, value) {
                return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
            }
            function addClass(element, value) {
                if (!value) return;
                if (isNumber(element.length)) {
                    forEach(element, (function(elem) {
                        addClass(elem, value);
                    }));
                    return;
                }
                if (element.classList) {
                    element.classList.add(value);
                    return;
                }
                var className = element.className.trim();
                if (!className) element.className = value; else if (className.indexOf(value) < 0) element.className = "".concat(className, " ").concat(value);
            }
            function removeClass(element, value) {
                if (!value) return;
                if (isNumber(element.length)) {
                    forEach(element, (function(elem) {
                        removeClass(elem, value);
                    }));
                    return;
                }
                if (element.classList) {
                    element.classList.remove(value);
                    return;
                }
                if (element.className.indexOf(value) >= 0) element.className = element.className.replace(value, "");
            }
            function toggleClass(element, value, added) {
                if (!value) return;
                if (isNumber(element.length)) {
                    forEach(element, (function(elem) {
                        toggleClass(elem, value, added);
                    }));
                    return;
                }
                if (added) addClass(element, value); else removeClass(element, value);
            }
            var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
            function toParamCase(value) {
                return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
            }
            function getData(element, name) {
                if (isObject(element[name])) return element[name];
                if (element.dataset) return element.dataset[name];
                return element.getAttribute("data-".concat(toParamCase(name)));
            }
            function setData(element, name, data) {
                if (isObject(data)) element[name] = data; else if (element.dataset) element.dataset[name] = data; else element.setAttribute("data-".concat(toParamCase(name)), data);
            }
            function removeData(element, name) {
                if (isObject(element[name])) try {
                    delete element[name];
                } catch (error) {
                    element[name] = void 0;
                } else if (element.dataset) try {
                    delete element.dataset[name];
                } catch (error) {
                    element.dataset[name] = void 0;
                } else element.removeAttribute("data-".concat(toParamCase(name)));
            }
            var REGEXP_SPACES = /\s\s*/;
            var onceSupported = function() {
                var supported = false;
                if (IS_BROWSER) {
                    var once = false;
                    var listener = function listener() {};
                    var options = Object.defineProperty({}, "once", {
                        get: function get() {
                            supported = true;
                            return once;
                        },
                        set: function set(value) {
                            once = value;
                        }
                    });
                    WINDOW.addEventListener("test", listener, options);
                    WINDOW.removeEventListener("test", listener, options);
                }
                return supported;
            }();
            function removeListener(element, type, listener) {
                var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                var handler = listener;
                type.trim().split(REGEXP_SPACES).forEach((function(event) {
                    if (!onceSupported) {
                        var listeners = element.listeners;
                        if (listeners && listeners[event] && listeners[event][listener]) {
                            handler = listeners[event][listener];
                            delete listeners[event][listener];
                            if (Object.keys(listeners[event]).length === 0) delete listeners[event];
                            if (Object.keys(listeners).length === 0) delete element.listeners;
                        }
                    }
                    element.removeEventListener(event, handler, options);
                }));
            }
            function addListener(element, type, listener) {
                var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                var _handler = listener;
                type.trim().split(REGEXP_SPACES).forEach((function(event) {
                    if (options.once && !onceSupported) {
                        var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
                        _handler = function handler() {
                            delete listeners[event][listener];
                            element.removeEventListener(event, _handler, options);
                            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                            listener.apply(element, args);
                        };
                        if (!listeners[event]) listeners[event] = {};
                        if (listeners[event][listener]) element.removeEventListener(event, listeners[event][listener], options);
                        listeners[event][listener] = _handler;
                        element.listeners = listeners;
                    }
                    element.addEventListener(event, _handler, options);
                }));
            }
            function dispatchEvent(element, type, data) {
                var event;
                if (isFunction(Event) && isFunction(CustomEvent)) event = new CustomEvent(type, {
                    detail: data,
                    bubbles: true,
                    cancelable: true
                }); else {
                    event = document.createEvent("CustomEvent");
                    event.initCustomEvent(type, true, true, data);
                }
                return element.dispatchEvent(event);
            }
            function getOffset(element) {
                var box = element.getBoundingClientRect();
                return {
                    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
                    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
                };
            }
            var location = WINDOW.location;
            var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
            function isCrossOriginURL(url) {
                var parts = url.match(REGEXP_ORIGINS);
                return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
            }
            function addTimestamp(url) {
                var timestamp = "timestamp=".concat((new Date).getTime());
                return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
            }
            function getTransforms(_ref) {
                var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
                var values = [];
                if (isNumber(translateX) && translateX !== 0) values.push("translateX(".concat(translateX, "px)"));
                if (isNumber(translateY) && translateY !== 0) values.push("translateY(".concat(translateY, "px)"));
                if (isNumber(rotate) && rotate !== 0) values.push("rotate(".concat(rotate, "deg)"));
                if (isNumber(scaleX) && scaleX !== 1) values.push("scaleX(".concat(scaleX, ")"));
                if (isNumber(scaleY) && scaleY !== 1) values.push("scaleY(".concat(scaleY, ")"));
                var transform = values.length ? values.join(" ") : "none";
                return {
                    WebkitTransform: transform,
                    msTransform: transform,
                    transform
                };
            }
            function getMaxZoomRatio(pointers) {
                var pointers2 = _objectSpread2({}, pointers);
                var maxRatio = 0;
                forEach(pointers, (function(pointer, pointerId) {
                    delete pointers2[pointerId];
                    forEach(pointers2, (function(pointer2) {
                        var x1 = Math.abs(pointer.startX - pointer2.startX);
                        var y1 = Math.abs(pointer.startY - pointer2.startY);
                        var x2 = Math.abs(pointer.endX - pointer2.endX);
                        var y2 = Math.abs(pointer.endY - pointer2.endY);
                        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
                        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
                        var ratio = (z2 - z1) / z1;
                        if (Math.abs(ratio) > Math.abs(maxRatio)) maxRatio = ratio;
                    }));
                }));
                return maxRatio;
            }
            function getPointer(_ref2, endOnly) {
                var pageX = _ref2.pageX, pageY = _ref2.pageY;
                var end = {
                    endX: pageX,
                    endY: pageY
                };
                return endOnly ? end : _objectSpread2({
                    startX: pageX,
                    startY: pageY
                }, end);
            }
            function getPointersCenter(pointers) {
                var pageX = 0;
                var pageY = 0;
                var count = 0;
                forEach(pointers, (function(_ref3) {
                    var startX = _ref3.startX, startY = _ref3.startY;
                    pageX += startX;
                    pageY += startY;
                    count += 1;
                }));
                pageX /= count;
                pageY /= count;
                return {
                    pageX,
                    pageY
                };
            }
            function getAdjustedSizes(_ref4) {
                var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
                var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
                var isValidWidth = isPositiveNumber(width);
                var isValidHeight = isPositiveNumber(height);
                if (isValidWidth && isValidHeight) {
                    var adjustedWidth = height * aspectRatio;
                    if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) height = width / aspectRatio; else width = height * aspectRatio;
                } else if (isValidWidth) height = width / aspectRatio; else if (isValidHeight) width = height * aspectRatio;
                return {
                    width,
                    height
                };
            }
            function getRotatedSizes(_ref5) {
                var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
                degree = Math.abs(degree) % 180;
                if (degree === 90) return {
                    width: height,
                    height: width
                };
                var arc = degree % 90 * Math.PI / 180;
                var sinArc = Math.sin(arc);
                var cosArc = Math.cos(arc);
                var newWidth = width * cosArc + height * sinArc;
                var newHeight = width * sinArc + height * cosArc;
                return degree > 90 ? {
                    width: newHeight,
                    height: newWidth
                } : {
                    width: newWidth,
                    height: newHeight
                };
            }
            function getSourceCanvas(image, _ref6, _ref7, _ref8) {
                var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
                var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
                var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? 1 / 0 : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? 1 / 0 : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                var maxSizes = getAdjustedSizes({
                    aspectRatio,
                    width: maxWidth,
                    height: maxHeight
                });
                var minSizes = getAdjustedSizes({
                    aspectRatio,
                    width: minWidth,
                    height: minHeight
                }, "cover");
                var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
                var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
                var destMaxSizes = getAdjustedSizes({
                    aspectRatio: imageAspectRatio,
                    width: maxWidth,
                    height: maxHeight
                });
                var destMinSizes = getAdjustedSizes({
                    aspectRatio: imageAspectRatio,
                    width: minWidth,
                    height: minHeight
                }, "cover");
                var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
                var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
                var params = [ -destWidth / 2, -destHeight / 2, destWidth, destHeight ];
                canvas.width = normalizeDecimalNumber(width);
                canvas.height = normalizeDecimalNumber(height);
                context.fillStyle = fillColor;
                context.fillRect(0, 0, width, height);
                context.save();
                context.translate(width / 2, height / 2);
                context.rotate(rotate * Math.PI / 180);
                context.scale(scaleX, scaleY);
                context.imageSmoothingEnabled = imageSmoothingEnabled;
                context.imageSmoothingQuality = imageSmoothingQuality;
                context.drawImage.apply(context, [ image ].concat(_toConsumableArray(params.map((function(param) {
                    return Math.floor(normalizeDecimalNumber(param));
                })))));
                context.restore();
                return canvas;
            }
            var fromCharCode = String.fromCharCode;
            function getStringFromCharCode(dataView, start, length) {
                var str = "";
                length += start;
                for (var i = start; i < length; i += 1) str += fromCharCode(dataView.getUint8(i));
                return str;
            }
            var REGEXP_DATA_URL_HEAD = /^data:.*,/;
            function dataURLToArrayBuffer(dataURL) {
                var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
                var binary = atob(base64);
                var arrayBuffer = new ArrayBuffer(binary.length);
                var uint8 = new Uint8Array(arrayBuffer);
                forEach(uint8, (function(value, i) {
                    uint8[i] = binary.charCodeAt(i);
                }));
                return arrayBuffer;
            }
            function arrayBufferToDataURL(arrayBuffer, mimeType) {
                var chunks = [];
                var chunkSize = 8192;
                var uint8 = new Uint8Array(arrayBuffer);
                while (uint8.length > 0) {
                    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
                    uint8 = uint8.subarray(chunkSize);
                }
                return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
            }
            function resetAndGetOrientation(arrayBuffer) {
                var dataView = new DataView(arrayBuffer);
                var orientation;
                try {
                    var littleEndian;
                    var app1Start;
                    var ifdStart;
                    if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
                        var length = dataView.byteLength;
                        var offset = 2;
                        while (offset + 1 < length) {
                            if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                                app1Start = offset;
                                break;
                            }
                            offset += 1;
                        }
                    }
                    if (app1Start) {
                        var exifIDCode = app1Start + 4;
                        var tiffOffset = app1Start + 10;
                        if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
                            var endianness = dataView.getUint16(tiffOffset);
                            littleEndian = endianness === 18761;
                            if (littleEndian || endianness === 19789) if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                                if (firstIFDOffset >= 8) ifdStart = tiffOffset + firstIFDOffset;
                            }
                        }
                    }
                    if (ifdStart) {
                        var _length = dataView.getUint16(ifdStart, littleEndian);
                        var _offset;
                        var i;
                        for (i = 0; i < _length; i += 1) {
                            _offset = ifdStart + i * 12 + 2;
                            if (dataView.getUint16(_offset, littleEndian) === 274) {
                                _offset += 8;
                                orientation = dataView.getUint16(_offset, littleEndian);
                                dataView.setUint16(_offset, 1, littleEndian);
                                break;
                            }
                        }
                    }
                } catch (error) {
                    orientation = 1;
                }
                return orientation;
            }
            function parseOrientation(orientation) {
                var rotate = 0;
                var scaleX = 1;
                var scaleY = 1;
                switch (orientation) {
                  case 2:
                    scaleX = -1;
                    break;

                  case 3:
                    rotate = -180;
                    break;

                  case 4:
                    scaleY = -1;
                    break;

                  case 5:
                    rotate = 90;
                    scaleY = -1;
                    break;

                  case 6:
                    rotate = 90;
                    break;

                  case 7:
                    rotate = 90;
                    scaleX = -1;
                    break;

                  case 8:
                    rotate = -90;
                    break;
                }
                return {
                    rotate,
                    scaleX,
                    scaleY
                };
            }
            var render = {
                render: function render() {
                    this.initContainer();
                    this.initCanvas();
                    this.initCropBox();
                    this.renderCanvas();
                    if (this.cropped) this.renderCropBox();
                },
                initContainer: function initContainer() {
                    var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
                    var minWidth = Number(options.minContainerWidth);
                    var minHeight = Number(options.minContainerHeight);
                    addClass(cropper, CLASS_HIDDEN);
                    removeClass(element, CLASS_HIDDEN);
                    var containerData = {
                        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
                        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
                    };
                    this.containerData = containerData;
                    setStyle(cropper, {
                        width: containerData.width,
                        height: containerData.height
                    });
                    addClass(element, CLASS_HIDDEN);
                    removeClass(cropper, CLASS_HIDDEN);
                },
                initCanvas: function initCanvas() {
                    var containerData = this.containerData, imageData = this.imageData;
                    var viewMode = this.options.viewMode;
                    var rotated = Math.abs(imageData.rotate) % 180 === 90;
                    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
                    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
                    var aspectRatio = naturalWidth / naturalHeight;
                    var canvasWidth = containerData.width;
                    var canvasHeight = containerData.height;
                    if (containerData.height * aspectRatio > containerData.width) if (viewMode === 3) canvasWidth = containerData.height * aspectRatio; else canvasHeight = containerData.width / aspectRatio; else if (viewMode === 3) canvasHeight = containerData.width / aspectRatio; else canvasWidth = containerData.height * aspectRatio;
                    var canvasData = {
                        aspectRatio,
                        naturalWidth,
                        naturalHeight,
                        width: canvasWidth,
                        height: canvasHeight
                    };
                    this.canvasData = canvasData;
                    this.limited = viewMode === 1 || viewMode === 2;
                    this.limitCanvas(true, true);
                    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
                    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
                    canvasData.left = (containerData.width - canvasData.width) / 2;
                    canvasData.top = (containerData.height - canvasData.height) / 2;
                    canvasData.oldLeft = canvasData.left;
                    canvasData.oldTop = canvasData.top;
                    this.initialCanvasData = assign({}, canvasData);
                },
                limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
                    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
                    var viewMode = options.viewMode;
                    var aspectRatio = canvasData.aspectRatio;
                    var cropped = this.cropped && cropBoxData;
                    if (sizeLimited) {
                        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
                        var minCanvasHeight = Number(options.minCanvasHeight) || 0;
                        if (viewMode > 1) {
                            minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
                            minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
                            if (viewMode === 3) if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio; else minCanvasHeight = minCanvasWidth / aspectRatio;
                        } else if (viewMode > 0) if (minCanvasWidth) minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0); else if (minCanvasHeight) minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0); else if (cropped) {
                            minCanvasWidth = cropBoxData.width;
                            minCanvasHeight = cropBoxData.height;
                            if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio; else minCanvasHeight = minCanvasWidth / aspectRatio;
                        }
                        var _getAdjustedSizes = getAdjustedSizes({
                            aspectRatio,
                            width: minCanvasWidth,
                            height: minCanvasHeight
                        });
                        minCanvasWidth = _getAdjustedSizes.width;
                        minCanvasHeight = _getAdjustedSizes.height;
                        canvasData.minWidth = minCanvasWidth;
                        canvasData.minHeight = minCanvasHeight;
                        canvasData.maxWidth = 1 / 0;
                        canvasData.maxHeight = 1 / 0;
                    }
                    if (positionLimited) if (viewMode > (cropped ? 0 : 1)) {
                        var newCanvasLeft = containerData.width - canvasData.width;
                        var newCanvasTop = containerData.height - canvasData.height;
                        canvasData.minLeft = Math.min(0, newCanvasLeft);
                        canvasData.minTop = Math.min(0, newCanvasTop);
                        canvasData.maxLeft = Math.max(0, newCanvasLeft);
                        canvasData.maxTop = Math.max(0, newCanvasTop);
                        if (cropped && this.limited) {
                            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                            canvasData.maxLeft = cropBoxData.left;
                            canvasData.maxTop = cropBoxData.top;
                            if (viewMode === 2) {
                                if (canvasData.width >= containerData.width) {
                                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                                }
                                if (canvasData.height >= containerData.height) {
                                    canvasData.minTop = Math.min(0, newCanvasTop);
                                    canvasData.maxTop = Math.max(0, newCanvasTop);
                                }
                            }
                        }
                    } else {
                        canvasData.minLeft = -canvasData.width;
                        canvasData.minTop = -canvasData.height;
                        canvasData.maxLeft = containerData.width;
                        canvasData.maxTop = containerData.height;
                    }
                },
                renderCanvas: function renderCanvas(changed, transformed) {
                    var canvasData = this.canvasData, imageData = this.imageData;
                    if (transformed) {
                        var _getRotatedSizes = getRotatedSizes({
                            width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
                            height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
                            degree: imageData.rotate || 0
                        }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
                        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
                        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
                        canvasData.left -= (width - canvasData.width) / 2;
                        canvasData.top -= (height - canvasData.height) / 2;
                        canvasData.width = width;
                        canvasData.height = height;
                        canvasData.aspectRatio = naturalWidth / naturalHeight;
                        canvasData.naturalWidth = naturalWidth;
                        canvasData.naturalHeight = naturalHeight;
                        this.limitCanvas(true, false);
                    }
                    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) canvasData.left = canvasData.oldLeft;
                    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) canvasData.top = canvasData.oldTop;
                    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
                    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
                    this.limitCanvas(false, true);
                    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
                    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
                    canvasData.oldLeft = canvasData.left;
                    canvasData.oldTop = canvasData.top;
                    setStyle(this.canvas, assign({
                        width: canvasData.width,
                        height: canvasData.height
                    }, getTransforms({
                        translateX: canvasData.left,
                        translateY: canvasData.top
                    })));
                    this.renderImage(changed);
                    if (this.cropped && this.limited) this.limitCropBox(true, true);
                },
                renderImage: function renderImage(changed) {
                    var canvasData = this.canvasData, imageData = this.imageData;
                    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
                    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
                    assign(imageData, {
                        width,
                        height,
                        left: (canvasData.width - width) / 2,
                        top: (canvasData.height - height) / 2
                    });
                    setStyle(this.image, assign({
                        width: imageData.width,
                        height: imageData.height
                    }, getTransforms(assign({
                        translateX: imageData.left,
                        translateY: imageData.top
                    }, imageData))));
                    if (changed) this.output();
                },
                initCropBox: function initCropBox() {
                    var options = this.options, canvasData = this.canvasData;
                    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
                    var autoCropArea = Number(options.autoCropArea) || .8;
                    var cropBoxData = {
                        width: canvasData.width,
                        height: canvasData.height
                    };
                    if (aspectRatio) if (canvasData.height * aspectRatio > canvasData.width) cropBoxData.height = cropBoxData.width / aspectRatio; else cropBoxData.width = cropBoxData.height * aspectRatio;
                    this.cropBoxData = cropBoxData;
                    this.limitCropBox(true, true);
                    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
                    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
                    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
                    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
                    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
                    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
                    cropBoxData.oldLeft = cropBoxData.left;
                    cropBoxData.oldTop = cropBoxData.top;
                    this.initialCropBoxData = assign({}, cropBoxData);
                },
                limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
                    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
                    var aspectRatio = options.aspectRatio;
                    if (sizeLimited) {
                        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
                        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
                        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
                        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
                        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
                        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
                        if (aspectRatio) {
                            if (minCropBoxWidth && minCropBoxHeight) if (minCropBoxHeight * aspectRatio > minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio; else minCropBoxWidth = minCropBoxHeight * aspectRatio; else if (minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio; else if (minCropBoxHeight) minCropBoxWidth = minCropBoxHeight * aspectRatio;
                            if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) maxCropBoxHeight = maxCropBoxWidth / aspectRatio; else maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                        }
                        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
                        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
                        cropBoxData.maxWidth = maxCropBoxWidth;
                        cropBoxData.maxHeight = maxCropBoxHeight;
                    }
                    if (positionLimited) if (limited) {
                        cropBoxData.minLeft = Math.max(0, canvasData.left);
                        cropBoxData.minTop = Math.max(0, canvasData.top);
                        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
                        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
                    } else {
                        cropBoxData.minLeft = 0;
                        cropBoxData.minTop = 0;
                        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
                        cropBoxData.maxTop = containerData.height - cropBoxData.height;
                    }
                },
                renderCropBox: function renderCropBox() {
                    var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
                    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) cropBoxData.left = cropBoxData.oldLeft;
                    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) cropBoxData.top = cropBoxData.oldTop;
                    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
                    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
                    this.limitCropBox(false, true);
                    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
                    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
                    cropBoxData.oldLeft = cropBoxData.left;
                    cropBoxData.oldTop = cropBoxData.top;
                    if (options.movable && options.cropBoxMovable) setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
                    setStyle(this.cropBox, assign({
                        width: cropBoxData.width,
                        height: cropBoxData.height
                    }, getTransforms({
                        translateX: cropBoxData.left,
                        translateY: cropBoxData.top
                    })));
                    if (this.cropped && this.limited) this.limitCanvas(true, true);
                    if (!this.disabled) this.output();
                },
                output: function output() {
                    this.preview();
                    dispatchEvent(this.element, EVENT_CROP, this.getData());
                }
            };
            var preview = {
                initPreview: function initPreview() {
                    var element = this.element, crossOrigin = this.crossOrigin;
                    var preview = this.options.preview;
                    var url = crossOrigin ? this.crossOriginUrl : this.url;
                    var alt = element.alt || "The image to preview";
                    var image = document.createElement("img");
                    if (crossOrigin) image.crossOrigin = crossOrigin;
                    image.src = url;
                    image.alt = alt;
                    this.viewBox.appendChild(image);
                    this.viewBoxImage = image;
                    if (!preview) return;
                    var previews = preview;
                    if (typeof preview === "string") previews = element.ownerDocument.querySelectorAll(preview); else if (preview.querySelector) previews = [ preview ];
                    this.previews = previews;
                    forEach(previews, (function(el) {
                        var img = document.createElement("img");
                        setData(el, DATA_PREVIEW, {
                            width: el.offsetWidth,
                            height: el.offsetHeight,
                            html: el.innerHTML
                        });
                        if (crossOrigin) img.crossOrigin = crossOrigin;
                        img.src = url;
                        img.alt = alt;
                        img.style.cssText = "display:block;" + "width:100%;" + "height:auto;" + "min-width:0!important;" + "min-height:0!important;" + "max-width:none!important;" + "max-height:none!important;" + 'image-orientation:0deg!important;"';
                        el.innerHTML = "";
                        el.appendChild(img);
                    }));
                },
                resetPreview: function resetPreview() {
                    forEach(this.previews, (function(element) {
                        var data = getData(element, DATA_PREVIEW);
                        setStyle(element, {
                            width: data.width,
                            height: data.height
                        });
                        element.innerHTML = data.html;
                        removeData(element, DATA_PREVIEW);
                    }));
                },
                preview: function preview() {
                    var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
                    var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
                    var width = imageData.width, height = imageData.height;
                    var left = cropBoxData.left - canvasData.left - imageData.left;
                    var top = cropBoxData.top - canvasData.top - imageData.top;
                    if (!this.cropped || this.disabled) return;
                    setStyle(this.viewBoxImage, assign({
                        width,
                        height
                    }, getTransforms(assign({
                        translateX: -left,
                        translateY: -top
                    }, imageData))));
                    forEach(this.previews, (function(element) {
                        var data = getData(element, DATA_PREVIEW);
                        var originalWidth = data.width;
                        var originalHeight = data.height;
                        var newWidth = originalWidth;
                        var newHeight = originalHeight;
                        var ratio = 1;
                        if (cropBoxWidth) {
                            ratio = originalWidth / cropBoxWidth;
                            newHeight = cropBoxHeight * ratio;
                        }
                        if (cropBoxHeight && newHeight > originalHeight) {
                            ratio = originalHeight / cropBoxHeight;
                            newWidth = cropBoxWidth * ratio;
                            newHeight = originalHeight;
                        }
                        setStyle(element, {
                            width: newWidth,
                            height: newHeight
                        });
                        setStyle(element.getElementsByTagName("img")[0], assign({
                            width: width * ratio,
                            height: height * ratio
                        }, getTransforms(assign({
                            translateX: -left * ratio,
                            translateY: -top * ratio
                        }, imageData))));
                    }));
                }
            };
            var events = {
                bind: function bind() {
                    var element = this.element, options = this.options, cropper = this.cropper;
                    if (isFunction(options.cropstart)) addListener(element, EVENT_CROP_START, options.cropstart);
                    if (isFunction(options.cropmove)) addListener(element, EVENT_CROP_MOVE, options.cropmove);
                    if (isFunction(options.cropend)) addListener(element, EVENT_CROP_END, options.cropend);
                    if (isFunction(options.crop)) addListener(element, EVENT_CROP, options.crop);
                    if (isFunction(options.zoom)) addListener(element, EVENT_ZOOM, options.zoom);
                    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
                    if (options.zoomable && options.zoomOnWheel) addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                        passive: false,
                        capture: true
                    });
                    if (options.toggleDragModeOnDblclick) addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
                    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
                    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
                    if (options.responsive) addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
                },
                unbind: function unbind() {
                    var element = this.element, options = this.options, cropper = this.cropper;
                    if (isFunction(options.cropstart)) removeListener(element, EVENT_CROP_START, options.cropstart);
                    if (isFunction(options.cropmove)) removeListener(element, EVENT_CROP_MOVE, options.cropmove);
                    if (isFunction(options.cropend)) removeListener(element, EVENT_CROP_END, options.cropend);
                    if (isFunction(options.crop)) removeListener(element, EVENT_CROP, options.crop);
                    if (isFunction(options.zoom)) removeListener(element, EVENT_ZOOM, options.zoom);
                    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
                    if (options.zoomable && options.zoomOnWheel) removeListener(cropper, EVENT_WHEEL, this.onWheel, {
                        passive: false,
                        capture: true
                    });
                    if (options.toggleDragModeOnDblclick) removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
                    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
                    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
                    if (options.responsive) removeListener(window, EVENT_RESIZE, this.onResize);
                }
            };
            var handlers = {
                resize: function resize() {
                    if (this.disabled) return;
                    var options = this.options, container = this.container, containerData = this.containerData;
                    var ratioX = container.offsetWidth / containerData.width;
                    var ratioY = container.offsetHeight / containerData.height;
                    var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
                    if (ratio !== 1) {
                        var canvasData;
                        var cropBoxData;
                        if (options.restore) {
                            canvasData = this.getCanvasData();
                            cropBoxData = this.getCropBoxData();
                        }
                        this.render();
                        if (options.restore) {
                            this.setCanvasData(forEach(canvasData, (function(n, i) {
                                canvasData[i] = n * ratio;
                            })));
                            this.setCropBoxData(forEach(cropBoxData, (function(n, i) {
                                cropBoxData[i] = n * ratio;
                            })));
                        }
                    }
                },
                dblclick: function dblclick() {
                    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) return;
                    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
                },
                wheel: function wheel(event) {
                    var _this = this;
                    var ratio = Number(this.options.wheelZoomRatio) || .1;
                    var delta = 1;
                    if (this.disabled) return;
                    event.preventDefault();
                    if (this.wheeling) return;
                    this.wheeling = true;
                    setTimeout((function() {
                        _this.wheeling = false;
                    }), 50);
                    if (event.deltaY) delta = event.deltaY > 0 ? 1 : -1; else if (event.wheelDelta) delta = -event.wheelDelta / 120; else if (event.detail) delta = event.detail > 0 ? 1 : -1;
                    this.zoom(-delta * ratio, event);
                },
                cropStart: function cropStart(event) {
                    var buttons = event.buttons, button = event.button;
                    if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) return;
                    var options = this.options, pointers = this.pointers;
                    var action;
                    if (event.changedTouches) forEach(event.changedTouches, (function(touch) {
                        pointers[touch.identifier] = getPointer(touch);
                    })); else pointers[event.pointerId || 0] = getPointer(event);
                    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) action = ACTION_ZOOM; else action = getData(event.target, DATA_ACTION);
                    if (!REGEXP_ACTIONS.test(action)) return;
                    if (dispatchEvent(this.element, EVENT_CROP_START, {
                        originalEvent: event,
                        action
                    }) === false) return;
                    event.preventDefault();
                    this.action = action;
                    this.cropping = false;
                    if (action === ACTION_CROP) {
                        this.cropping = true;
                        addClass(this.dragBox, CLASS_MODAL);
                    }
                },
                cropMove: function cropMove(event) {
                    var action = this.action;
                    if (this.disabled || !action) return;
                    var pointers = this.pointers;
                    event.preventDefault();
                    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
                        originalEvent: event,
                        action
                    }) === false) return;
                    if (event.changedTouches) forEach(event.changedTouches, (function(touch) {
                        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
                    })); else assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
                    this.change(event);
                },
                cropEnd: function cropEnd(event) {
                    if (this.disabled) return;
                    var action = this.action, pointers = this.pointers;
                    if (event.changedTouches) forEach(event.changedTouches, (function(touch) {
                        delete pointers[touch.identifier];
                    })); else delete pointers[event.pointerId || 0];
                    if (!action) return;
                    event.preventDefault();
                    if (!Object.keys(pointers).length) this.action = "";
                    if (this.cropping) {
                        this.cropping = false;
                        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
                    }
                    dispatchEvent(this.element, EVENT_CROP_END, {
                        originalEvent: event,
                        action
                    });
                }
            };
            var change = {
                change: function change(event) {
                    var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
                    var action = this.action;
                    var aspectRatio = options.aspectRatio;
                    var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
                    var right = left + width;
                    var bottom = top + height;
                    var minLeft = 0;
                    var minTop = 0;
                    var maxWidth = containerData.width;
                    var maxHeight = containerData.height;
                    var renderable = true;
                    var offset;
                    if (!aspectRatio && event.shiftKey) aspectRatio = width && height ? width / height : 1;
                    if (this.limited) {
                        minLeft = cropBoxData.minLeft;
                        minTop = cropBoxData.minTop;
                        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
                        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
                    }
                    var pointer = pointers[Object.keys(pointers)[0]];
                    var range = {
                        x: pointer.endX - pointer.startX,
                        y: pointer.endY - pointer.startY
                    };
                    var check = function check(side) {
                        switch (side) {
                          case ACTION_EAST:
                            if (right + range.x > maxWidth) range.x = maxWidth - right;
                            break;

                          case ACTION_WEST:
                            if (left + range.x < minLeft) range.x = minLeft - left;
                            break;

                          case ACTION_NORTH:
                            if (top + range.y < minTop) range.y = minTop - top;
                            break;

                          case ACTION_SOUTH:
                            if (bottom + range.y > maxHeight) range.y = maxHeight - bottom;
                            break;
                        }
                    };
                    switch (action) {
                      case ACTION_ALL:
                        left += range.x;
                        top += range.y;
                        break;

                      case ACTION_EAST:
                        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_EAST);
                        width += range.x;
                        if (width < 0) {
                            action = ACTION_WEST;
                            width = -width;
                            left -= width;
                        }
                        if (aspectRatio) {
                            height = width / aspectRatio;
                            top += (cropBoxData.height - height) / 2;
                        }
                        break;

                      case ACTION_NORTH:
                        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        if (height < 0) {
                            action = ACTION_SOUTH;
                            height = -height;
                            top -= height;
                        }
                        if (aspectRatio) {
                            width = height * aspectRatio;
                            left += (cropBoxData.width - width) / 2;
                        }
                        break;

                      case ACTION_WEST:
                        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_WEST);
                        width -= range.x;
                        left += range.x;
                        if (width < 0) {
                            action = ACTION_EAST;
                            width = -width;
                            left -= width;
                        }
                        if (aspectRatio) {
                            height = width / aspectRatio;
                            top += (cropBoxData.height - height) / 2;
                        }
                        break;

                      case ACTION_SOUTH:
                        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_SOUTH);
                        height += range.y;
                        if (height < 0) {
                            action = ACTION_NORTH;
                            height = -height;
                            top -= height;
                        }
                        if (aspectRatio) {
                            width = height * aspectRatio;
                            left += (cropBoxData.width - width) / 2;
                        }
                        break;

                      case ACTION_NORTH_EAST:
                        if (aspectRatio) {
                            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_NORTH);
                            height -= range.y;
                            top += range.y;
                            width = height * aspectRatio;
                        } else {
                            check(ACTION_NORTH);
                            check(ACTION_EAST);
                            if (range.x >= 0) {
                                if (right < maxWidth) width += range.x; else if (range.y <= 0 && top <= minTop) renderable = false;
                            } else width += range.x;
                            if (range.y <= 0) {
                                if (top > minTop) {
                                    height -= range.y;
                                    top += range.y;
                                }
                            } else {
                                height -= range.y;
                                top += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_SOUTH_WEST;
                            height = -height;
                            width = -width;
                            top -= height;
                            left -= width;
                        } else if (width < 0) {
                            action = ACTION_NORTH_WEST;
                            width = -width;
                            left -= width;
                        } else if (height < 0) {
                            action = ACTION_SOUTH_EAST;
                            height = -height;
                            top -= height;
                        }
                        break;

                      case ACTION_NORTH_WEST:
                        if (aspectRatio) {
                            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_NORTH);
                            height -= range.y;
                            top += range.y;
                            width = height * aspectRatio;
                            left += cropBoxData.width - width;
                        } else {
                            check(ACTION_NORTH);
                            check(ACTION_WEST);
                            if (range.x <= 0) {
                                if (left > minLeft) {
                                    width -= range.x;
                                    left += range.x;
                                } else if (range.y <= 0 && top <= minTop) renderable = false;
                            } else {
                                width -= range.x;
                                left += range.x;
                            }
                            if (range.y <= 0) {
                                if (top > minTop) {
                                    height -= range.y;
                                    top += range.y;
                                }
                            } else {
                                height -= range.y;
                                top += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_SOUTH_EAST;
                            height = -height;
                            width = -width;
                            top -= height;
                            left -= width;
                        } else if (width < 0) {
                            action = ACTION_NORTH_EAST;
                            width = -width;
                            left -= width;
                        } else if (height < 0) {
                            action = ACTION_SOUTH_WEST;
                            height = -height;
                            top -= height;
                        }
                        break;

                      case ACTION_SOUTH_WEST:
                        if (aspectRatio) {
                            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_WEST);
                            width -= range.x;
                            left += range.x;
                            height = width / aspectRatio;
                        } else {
                            check(ACTION_SOUTH);
                            check(ACTION_WEST);
                            if (range.x <= 0) {
                                if (left > minLeft) {
                                    width -= range.x;
                                    left += range.x;
                                } else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                            } else {
                                width -= range.x;
                                left += range.x;
                            }
                            if (range.y >= 0) {
                                if (bottom < maxHeight) height += range.y;
                            } else height += range.y;
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_NORTH_EAST;
                            height = -height;
                            width = -width;
                            top -= height;
                            left -= width;
                        } else if (width < 0) {
                            action = ACTION_SOUTH_EAST;
                            width = -width;
                            left -= width;
                        } else if (height < 0) {
                            action = ACTION_NORTH_WEST;
                            height = -height;
                            top -= height;
                        }
                        break;

                      case ACTION_SOUTH_EAST:
                        if (aspectRatio) {
                            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_EAST);
                            width += range.x;
                            height = width / aspectRatio;
                        } else {
                            check(ACTION_SOUTH);
                            check(ACTION_EAST);
                            if (range.x >= 0) {
                                if (right < maxWidth) width += range.x; else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                            } else width += range.x;
                            if (range.y >= 0) {
                                if (bottom < maxHeight) height += range.y;
                            } else height += range.y;
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_NORTH_WEST;
                            height = -height;
                            width = -width;
                            top -= height;
                            left -= width;
                        } else if (width < 0) {
                            action = ACTION_SOUTH_WEST;
                            width = -width;
                            left -= width;
                        } else if (height < 0) {
                            action = ACTION_NORTH_EAST;
                            height = -height;
                            top -= height;
                        }
                        break;

                      case ACTION_MOVE:
                        this.move(range.x, range.y);
                        renderable = false;
                        break;

                      case ACTION_ZOOM:
                        this.zoom(getMaxZoomRatio(pointers), event);
                        renderable = false;
                        break;

                      case ACTION_CROP:
                        if (!range.x || !range.y) {
                            renderable = false;
                            break;
                        }
                        offset = getOffset(this.cropper);
                        left = pointer.startX - offset.left;
                        top = pointer.startY - offset.top;
                        width = cropBoxData.minWidth;
                        height = cropBoxData.minHeight;
                        if (range.x > 0) action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST; else if (range.x < 0) {
                            left -= width;
                            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                        }
                        if (range.y < 0) top -= height;
                        if (!this.cropped) {
                            removeClass(this.cropBox, CLASS_HIDDEN);
                            this.cropped = true;
                            if (this.limited) this.limitCropBox(true, true);
                        }
                        break;
                    }
                    if (renderable) {
                        cropBoxData.width = width;
                        cropBoxData.height = height;
                        cropBoxData.left = left;
                        cropBoxData.top = top;
                        this.action = action;
                        this.renderCropBox();
                    }
                    forEach(pointers, (function(p) {
                        p.startX = p.endX;
                        p.startY = p.endY;
                    }));
                }
            };
            var methods = {
                crop: function crop() {
                    if (this.ready && !this.cropped && !this.disabled) {
                        this.cropped = true;
                        this.limitCropBox(true, true);
                        if (this.options.modal) addClass(this.dragBox, CLASS_MODAL);
                        removeClass(this.cropBox, CLASS_HIDDEN);
                        this.setCropBoxData(this.initialCropBoxData);
                    }
                    return this;
                },
                reset: function reset() {
                    if (this.ready && !this.disabled) {
                        this.imageData = assign({}, this.initialImageData);
                        this.canvasData = assign({}, this.initialCanvasData);
                        this.cropBoxData = assign({}, this.initialCropBoxData);
                        this.renderCanvas();
                        if (this.cropped) this.renderCropBox();
                    }
                    return this;
                },
                clear: function clear() {
                    if (this.cropped && !this.disabled) {
                        assign(this.cropBoxData, {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        });
                        this.cropped = false;
                        this.renderCropBox();
                        this.limitCanvas(true, true);
                        this.renderCanvas();
                        removeClass(this.dragBox, CLASS_MODAL);
                        addClass(this.cropBox, CLASS_HIDDEN);
                    }
                    return this;
                },
                replace: function replace(url) {
                    var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    if (!this.disabled && url) {
                        if (this.isImg) this.element.src = url;
                        if (hasSameSize) {
                            this.url = url;
                            this.image.src = url;
                            if (this.ready) {
                                this.viewBoxImage.src = url;
                                forEach(this.previews, (function(element) {
                                    element.getElementsByTagName("img")[0].src = url;
                                }));
                            }
                        } else {
                            if (this.isImg) this.replaced = true;
                            this.options.data = null;
                            this.uncreate();
                            this.load(url);
                        }
                    }
                    return this;
                },
                enable: function enable() {
                    if (this.ready && this.disabled) {
                        this.disabled = false;
                        removeClass(this.cropper, CLASS_DISABLED);
                    }
                    return this;
                },
                disable: function disable() {
                    if (this.ready && !this.disabled) {
                        this.disabled = true;
                        addClass(this.cropper, CLASS_DISABLED);
                    }
                    return this;
                },
                destroy: function destroy() {
                    var element = this.element;
                    if (!element[NAMESPACE]) return this;
                    element[NAMESPACE] = void 0;
                    if (this.isImg && this.replaced) element.src = this.originalUrl;
                    this.uncreate();
                    return this;
                },
                move: function move(offsetX) {
                    var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
                    var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
                    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
                },
                moveTo: function moveTo(x) {
                    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
                    var canvasData = this.canvasData;
                    var changed = false;
                    x = Number(x);
                    y = Number(y);
                    if (this.ready && !this.disabled && this.options.movable) {
                        if (isNumber(x)) {
                            canvasData.left = x;
                            changed = true;
                        }
                        if (isNumber(y)) {
                            canvasData.top = y;
                            changed = true;
                        }
                        if (changed) this.renderCanvas(true);
                    }
                    return this;
                },
                zoom: function zoom(ratio, _originalEvent) {
                    var canvasData = this.canvasData;
                    ratio = Number(ratio);
                    if (ratio < 0) ratio = 1 / (1 - ratio); else ratio = 1 + ratio;
                    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
                },
                zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
                    var options = this.options, canvasData = this.canvasData;
                    var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
                    ratio = Number(ratio);
                    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
                        var newWidth = naturalWidth * ratio;
                        var newHeight = naturalHeight * ratio;
                        if (dispatchEvent(this.element, EVENT_ZOOM, {
                            ratio,
                            oldRatio: width / naturalWidth,
                            originalEvent: _originalEvent
                        }) === false) return this;
                        if (_originalEvent) {
                            var pointers = this.pointers;
                            var offset = getOffset(this.cropper);
                            var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                                pageX: _originalEvent.pageX,
                                pageY: _originalEvent.pageY
                            };
                            canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
                            canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
                        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                            canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
                            canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
                        } else {
                            canvasData.left -= (newWidth - width) / 2;
                            canvasData.top -= (newHeight - height) / 2;
                        }
                        canvasData.width = newWidth;
                        canvasData.height = newHeight;
                        this.renderCanvas(true);
                    }
                    return this;
                },
                rotate: function rotate(degree) {
                    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
                },
                rotateTo: function rotateTo(degree) {
                    degree = Number(degree);
                    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
                        this.imageData.rotate = degree % 360;
                        this.renderCanvas(true, true);
                    }
                    return this;
                },
                scaleX: function scaleX(_scaleX) {
                    var scaleY = this.imageData.scaleY;
                    return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
                },
                scaleY: function scaleY(_scaleY) {
                    var scaleX = this.imageData.scaleX;
                    return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
                },
                scale: function scale(scaleX) {
                    var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
                    var imageData = this.imageData;
                    var transformed = false;
                    scaleX = Number(scaleX);
                    scaleY = Number(scaleY);
                    if (this.ready && !this.disabled && this.options.scalable) {
                        if (isNumber(scaleX)) {
                            imageData.scaleX = scaleX;
                            transformed = true;
                        }
                        if (isNumber(scaleY)) {
                            imageData.scaleY = scaleY;
                            transformed = true;
                        }
                        if (transformed) this.renderCanvas(true, true);
                    }
                    return this;
                },
                getData: function getData() {
                    var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                    var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
                    var data;
                    if (this.ready && this.cropped) {
                        data = {
                            x: cropBoxData.left - canvasData.left,
                            y: cropBoxData.top - canvasData.top,
                            width: cropBoxData.width,
                            height: cropBoxData.height
                        };
                        var ratio = imageData.width / imageData.naturalWidth;
                        forEach(data, (function(n, i) {
                            data[i] = n / ratio;
                        }));
                        if (rounded) {
                            var bottom = Math.round(data.y + data.height);
                            var right = Math.round(data.x + data.width);
                            data.x = Math.round(data.x);
                            data.y = Math.round(data.y);
                            data.width = right - data.x;
                            data.height = bottom - data.y;
                        }
                    } else data = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    if (options.rotatable) data.rotate = imageData.rotate || 0;
                    if (options.scalable) {
                        data.scaleX = imageData.scaleX || 1;
                        data.scaleY = imageData.scaleY || 1;
                    }
                    return data;
                },
                setData: function setData(data) {
                    var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
                    var cropBoxData = {};
                    if (this.ready && !this.disabled && isPlainObject(data)) {
                        var transformed = false;
                        if (options.rotatable) if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                            imageData.rotate = data.rotate;
                            transformed = true;
                        }
                        if (options.scalable) {
                            if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                                imageData.scaleX = data.scaleX;
                                transformed = true;
                            }
                            if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                                imageData.scaleY = data.scaleY;
                                transformed = true;
                            }
                        }
                        if (transformed) this.renderCanvas(true, true);
                        var ratio = imageData.width / imageData.naturalWidth;
                        if (isNumber(data.x)) cropBoxData.left = data.x * ratio + canvasData.left;
                        if (isNumber(data.y)) cropBoxData.top = data.y * ratio + canvasData.top;
                        if (isNumber(data.width)) cropBoxData.width = data.width * ratio;
                        if (isNumber(data.height)) cropBoxData.height = data.height * ratio;
                        this.setCropBoxData(cropBoxData);
                    }
                    return this;
                },
                getContainerData: function getContainerData() {
                    return this.ready ? assign({}, this.containerData) : {};
                },
                getImageData: function getImageData() {
                    return this.sized ? assign({}, this.imageData) : {};
                },
                getCanvasData: function getCanvasData() {
                    var canvasData = this.canvasData;
                    var data = {};
                    if (this.ready) forEach([ "left", "top", "width", "height", "naturalWidth", "naturalHeight" ], (function(n) {
                        data[n] = canvasData[n];
                    }));
                    return data;
                },
                setCanvasData: function setCanvasData(data) {
                    var canvasData = this.canvasData;
                    var aspectRatio = canvasData.aspectRatio;
                    if (this.ready && !this.disabled && isPlainObject(data)) {
                        if (isNumber(data.left)) canvasData.left = data.left;
                        if (isNumber(data.top)) canvasData.top = data.top;
                        if (isNumber(data.width)) {
                            canvasData.width = data.width;
                            canvasData.height = data.width / aspectRatio;
                        } else if (isNumber(data.height)) {
                            canvasData.height = data.height;
                            canvasData.width = data.height * aspectRatio;
                        }
                        this.renderCanvas(true);
                    }
                    return this;
                },
                getCropBoxData: function getCropBoxData() {
                    var cropBoxData = this.cropBoxData;
                    var data;
                    if (this.ready && this.cropped) data = {
                        left: cropBoxData.left,
                        top: cropBoxData.top,
                        width: cropBoxData.width,
                        height: cropBoxData.height
                    };
                    return data || {};
                },
                setCropBoxData: function setCropBoxData(data) {
                    var cropBoxData = this.cropBoxData;
                    var aspectRatio = this.options.aspectRatio;
                    var widthChanged;
                    var heightChanged;
                    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
                        if (isNumber(data.left)) cropBoxData.left = data.left;
                        if (isNumber(data.top)) cropBoxData.top = data.top;
                        if (isNumber(data.width) && data.width !== cropBoxData.width) {
                            widthChanged = true;
                            cropBoxData.width = data.width;
                        }
                        if (isNumber(data.height) && data.height !== cropBoxData.height) {
                            heightChanged = true;
                            cropBoxData.height = data.height;
                        }
                        if (aspectRatio) if (widthChanged) cropBoxData.height = cropBoxData.width / aspectRatio; else if (heightChanged) cropBoxData.width = cropBoxData.height * aspectRatio;
                        this.renderCropBox();
                    }
                    return this;
                },
                getCroppedCanvas: function getCroppedCanvas() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (!this.ready || !window.HTMLCanvasElement) return null;
                    var canvasData = this.canvasData;
                    var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
                    if (!this.cropped) return source;
                    var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
                    var ratio = source.width / Math.floor(canvasData.naturalWidth);
                    if (ratio !== 1) {
                        initialX *= ratio;
                        initialY *= ratio;
                        initialWidth *= ratio;
                        initialHeight *= ratio;
                    }
                    var aspectRatio = initialWidth / initialHeight;
                    var maxSizes = getAdjustedSizes({
                        aspectRatio,
                        width: options.maxWidth || 1 / 0,
                        height: options.maxHeight || 1 / 0
                    });
                    var minSizes = getAdjustedSizes({
                        aspectRatio,
                        width: options.minWidth || 0,
                        height: options.minHeight || 0
                    }, "cover");
                    var _getAdjustedSizes = getAdjustedSizes({
                        aspectRatio,
                        width: options.width || (ratio !== 1 ? source.width : initialWidth),
                        height: options.height || (ratio !== 1 ? source.height : initialHeight)
                    }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
                    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
                    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
                    var canvas = document.createElement("canvas");
                    var context = canvas.getContext("2d");
                    canvas.width = normalizeDecimalNumber(width);
                    canvas.height = normalizeDecimalNumber(height);
                    context.fillStyle = options.fillColor || "transparent";
                    context.fillRect(0, 0, width, height);
                    var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
                    context.imageSmoothingEnabled = imageSmoothingEnabled;
                    if (imageSmoothingQuality) context.imageSmoothingQuality = imageSmoothingQuality;
                    var sourceWidth = source.width;
                    var sourceHeight = source.height;
                    var srcX = initialX;
                    var srcY = initialY;
                    var srcWidth;
                    var srcHeight;
                    var dstX;
                    var dstY;
                    var dstWidth;
                    var dstHeight;
                    if (srcX <= -initialWidth || srcX > sourceWidth) {
                        srcX = 0;
                        srcWidth = 0;
                        dstX = 0;
                        dstWidth = 0;
                    } else if (srcX <= 0) {
                        dstX = -srcX;
                        srcX = 0;
                        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
                        dstWidth = srcWidth;
                    } else if (srcX <= sourceWidth) {
                        dstX = 0;
                        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
                        dstWidth = srcWidth;
                    }
                    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
                        srcY = 0;
                        srcHeight = 0;
                        dstY = 0;
                        dstHeight = 0;
                    } else if (srcY <= 0) {
                        dstY = -srcY;
                        srcY = 0;
                        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
                        dstHeight = srcHeight;
                    } else if (srcY <= sourceHeight) {
                        dstY = 0;
                        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
                        dstHeight = srcHeight;
                    }
                    var params = [ srcX, srcY, srcWidth, srcHeight ];
                    if (dstWidth > 0 && dstHeight > 0) {
                        var scale = width / initialWidth;
                        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
                    }
                    context.drawImage.apply(context, [ source ].concat(_toConsumableArray(params.map((function(param) {
                        return Math.floor(normalizeDecimalNumber(param));
                    })))));
                    return canvas;
                },
                setAspectRatio: function setAspectRatio(aspectRatio) {
                    var options = this.options;
                    if (!this.disabled && !isUndefined(aspectRatio)) {
                        options.aspectRatio = Math.max(0, aspectRatio) || NaN;
                        if (this.ready) {
                            this.initCropBox();
                            if (this.cropped) this.renderCropBox();
                        }
                    }
                    return this;
                },
                setDragMode: function setDragMode(mode) {
                    var options = this.options, dragBox = this.dragBox, face = this.face;
                    if (this.ready && !this.disabled) {
                        var croppable = mode === DRAG_MODE_CROP;
                        var movable = options.movable && mode === DRAG_MODE_MOVE;
                        mode = croppable || movable ? mode : DRAG_MODE_NONE;
                        options.dragMode = mode;
                        setData(dragBox, DATA_ACTION, mode);
                        toggleClass(dragBox, CLASS_CROP, croppable);
                        toggleClass(dragBox, CLASS_MOVE, movable);
                        if (!options.cropBoxMovable) {
                            setData(face, DATA_ACTION, mode);
                            toggleClass(face, CLASS_CROP, croppable);
                            toggleClass(face, CLASS_MOVE, movable);
                        }
                    }
                    return this;
                }
            };
            var AnotherCropper = WINDOW.Cropper;
            var Cropper = function() {
                function Cropper(element) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    _classCallCheck(this, Cropper);
                    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                    this.element = element;
                    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
                    this.cropped = false;
                    this.disabled = false;
                    this.pointers = {};
                    this.ready = false;
                    this.reloading = false;
                    this.replaced = false;
                    this.sized = false;
                    this.sizing = false;
                    this.init();
                }
                return _createClass(Cropper, [ {
                    key: "init",
                    value: function init() {
                        var element = this.element;
                        var tagName = element.tagName.toLowerCase();
                        var url;
                        if (element[NAMESPACE]) return;
                        element[NAMESPACE] = this;
                        if (tagName === "img") {
                            this.isImg = true;
                            url = element.getAttribute("src") || "";
                            this.originalUrl = url;
                            if (!url) return;
                            url = element.src;
                        } else if (tagName === "canvas" && window.HTMLCanvasElement) url = element.toDataURL();
                        this.load(url);
                    }
                }, {
                    key: "load",
                    value: function load(url) {
                        var _this = this;
                        if (!url) return;
                        this.url = url;
                        this.imageData = {};
                        var element = this.element, options = this.options;
                        if (!options.rotatable && !options.scalable) options.checkOrientation = false;
                        if (!options.checkOrientation || !window.ArrayBuffer) {
                            this.clone();
                            return;
                        }
                        if (REGEXP_DATA_URL.test(url)) {
                            if (REGEXP_DATA_URL_JPEG.test(url)) this.read(dataURLToArrayBuffer(url)); else this.clone();
                            return;
                        }
                        var xhr = new XMLHttpRequest;
                        var clone = this.clone.bind(this);
                        this.reloading = true;
                        this.xhr = xhr;
                        xhr.onabort = clone;
                        xhr.onerror = clone;
                        xhr.ontimeout = clone;
                        xhr.onprogress = function() {
                            if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) xhr.abort();
                        };
                        xhr.onload = function() {
                            _this.read(xhr.response);
                        };
                        xhr.onloadend = function() {
                            _this.reloading = false;
                            _this.xhr = null;
                        };
                        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) url = addTimestamp(url);
                        xhr.open("GET", url, true);
                        xhr.responseType = "arraybuffer";
                        xhr.withCredentials = element.crossOrigin === "use-credentials";
                        xhr.send();
                    }
                }, {
                    key: "read",
                    value: function read(arrayBuffer) {
                        var options = this.options, imageData = this.imageData;
                        var orientation = resetAndGetOrientation(arrayBuffer);
                        var rotate = 0;
                        var scaleX = 1;
                        var scaleY = 1;
                        if (orientation > 1) {
                            this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
                            var _parseOrientation = parseOrientation(orientation);
                            rotate = _parseOrientation.rotate;
                            scaleX = _parseOrientation.scaleX;
                            scaleY = _parseOrientation.scaleY;
                        }
                        if (options.rotatable) imageData.rotate = rotate;
                        if (options.scalable) {
                            imageData.scaleX = scaleX;
                            imageData.scaleY = scaleY;
                        }
                        this.clone();
                    }
                }, {
                    key: "clone",
                    value: function clone() {
                        var element = this.element, url = this.url;
                        var crossOrigin = element.crossOrigin;
                        var crossOriginUrl = url;
                        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
                            if (!crossOrigin) crossOrigin = "anonymous";
                            crossOriginUrl = addTimestamp(url);
                        }
                        this.crossOrigin = crossOrigin;
                        this.crossOriginUrl = crossOriginUrl;
                        var image = document.createElement("img");
                        if (crossOrigin) image.crossOrigin = crossOrigin;
                        image.src = crossOriginUrl || url;
                        image.alt = element.alt || "The image to crop";
                        this.image = image;
                        image.onload = this.start.bind(this);
                        image.onerror = this.stop.bind(this);
                        addClass(image, CLASS_HIDE);
                        element.parentNode.insertBefore(image, element.nextSibling);
                    }
                }, {
                    key: "start",
                    value: function start() {
                        var _this2 = this;
                        var image = this.image;
                        image.onload = null;
                        image.onerror = null;
                        this.sizing = true;
                        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
                        var done = function done(naturalWidth, naturalHeight) {
                            assign(_this2.imageData, {
                                naturalWidth,
                                naturalHeight,
                                aspectRatio: naturalWidth / naturalHeight
                            });
                            _this2.initialImageData = assign({}, _this2.imageData);
                            _this2.sizing = false;
                            _this2.sized = true;
                            _this2.build();
                        };
                        if (image.naturalWidth && !isIOSWebKit) {
                            done(image.naturalWidth, image.naturalHeight);
                            return;
                        }
                        var sizingImage = document.createElement("img");
                        var body = document.body || document.documentElement;
                        this.sizingImage = sizingImage;
                        sizingImage.onload = function() {
                            done(sizingImage.width, sizingImage.height);
                            if (!isIOSWebKit) body.removeChild(sizingImage);
                        };
                        sizingImage.src = image.src;
                        if (!isIOSWebKit) {
                            sizingImage.style.cssText = "left:0;" + "max-height:none!important;" + "max-width:none!important;" + "min-height:0!important;" + "min-width:0!important;" + "opacity:0;" + "position:absolute;" + "top:0;" + "z-index:-1;";
                            body.appendChild(sizingImage);
                        }
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        var image = this.image;
                        image.onload = null;
                        image.onerror = null;
                        image.parentNode.removeChild(image);
                        this.image = null;
                    }
                }, {
                    key: "build",
                    value: function build() {
                        if (!this.sized || this.ready) return;
                        var element = this.element, options = this.options, image = this.image;
                        var container = element.parentNode;
                        var template = document.createElement("div");
                        template.innerHTML = TEMPLATE;
                        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
                        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
                        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
                        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
                        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
                        this.container = container;
                        this.cropper = cropper;
                        this.canvas = canvas;
                        this.dragBox = dragBox;
                        this.cropBox = cropBox;
                        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
                        this.face = face;
                        canvas.appendChild(image);
                        addClass(element, CLASS_HIDDEN);
                        container.insertBefore(cropper, element.nextSibling);
                        removeClass(image, CLASS_HIDE);
                        this.initPreview();
                        this.bind();
                        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
                        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
                        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
                        addClass(cropBox, CLASS_HIDDEN);
                        if (!options.guides) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
                        if (!options.center) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
                        if (options.background) addClass(cropper, "".concat(NAMESPACE, "-bg"));
                        if (!options.highlight) addClass(face, CLASS_INVISIBLE);
                        if (options.cropBoxMovable) {
                            addClass(face, CLASS_MOVE);
                            setData(face, DATA_ACTION, ACTION_ALL);
                        }
                        if (!options.cropBoxResizable) {
                            addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
                            addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
                        }
                        this.render();
                        this.ready = true;
                        this.setDragMode(options.dragMode);
                        if (options.autoCrop) this.crop();
                        this.setData(options.data);
                        if (isFunction(options.ready)) addListener(element, EVENT_READY, options.ready, {
                            once: true
                        });
                        dispatchEvent(element, EVENT_READY);
                    }
                }, {
                    key: "unbuild",
                    value: function unbuild() {
                        if (!this.ready) return;
                        this.ready = false;
                        this.unbind();
                        this.resetPreview();
                        var parentNode = this.cropper.parentNode;
                        if (parentNode) parentNode.removeChild(this.cropper);
                        removeClass(this.element, CLASS_HIDDEN);
                    }
                }, {
                    key: "uncreate",
                    value: function uncreate() {
                        if (this.ready) {
                            this.unbuild();
                            this.ready = false;
                            this.cropped = false;
                        } else if (this.sizing) {
                            this.sizingImage.onload = null;
                            this.sizing = false;
                            this.sized = false;
                        } else if (this.reloading) {
                            this.xhr.onabort = null;
                            this.xhr.abort();
                        } else if (this.image) this.stop();
                    }
                } ], [ {
                    key: "noConflict",
                    value: function noConflict() {
                        window.Cropper = AnotherCropper;
                        return Cropper;
                    }
                }, {
                    key: "setDefaults",
                    value: function setDefaults(options) {
                        assign(DEFAULTS, isPlainObject(options) && options);
                    }
                } ]);
            }();
            assign(Cropper.prototype, render, preview, events, handlers, change, methods);
            return Cropper;
        }));
    },
    676: (__unused_webpack_module, exports, __webpack_require__) => {
        /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
        var fabric = fabric || {
            version: "4.6.0"
        };
        if (true) exports.fabric = fabric;
        if (typeof document !== "undefined" && typeof window !== "undefined") {
            if (document instanceof (typeof HTMLDocument !== "undefined" ? HTMLDocument : Document)) fabric.document = document; else fabric.document = document.implementation.createHTMLDocument("");
            fabric.window = window;
        } else {
            var jsdom = __webpack_require__(574);
            var virtualWindow = new jsdom.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), {
                features: {
                    FetchExternalResources: [ "img" ]
                },
                resources: "usable"
            }).window;
            fabric.document = virtualWindow.document;
            fabric.jsdomImplForWrapper = __webpack_require__(748).implForWrapper;
            fabric.nodeCanvas = __webpack_require__(246).Canvas;
            fabric.window = virtualWindow;
            DOMParser = fabric.window.DOMParser;
        }
        fabric.isTouchSupported = "ontouchstart" in fabric.window || "ontouchstart" in fabric.document || fabric.window && fabric.window.navigator && fabric.window.navigator.maxTouchPoints > 0;
        fabric.isLikelyNode = typeof Buffer !== "undefined" && typeof window === "undefined";
        fabric.SHARED_ATTRIBUTES = [ "display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path" ];
        fabric.DPI = 96;
        fabric.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)";
        fabric.commaWsp = "(?:\\s+,?\\s*|,\\s*)";
        fabric.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi;
        fabric.reNonWord = /[ \n\.,;!\?\-]/;
        fabric.fontPaths = {};
        fabric.iMatrix = [ 1, 0, 0, 1, 0, 0 ];
        fabric.svgNS = "http://www.w3.org/2000/svg";
        fabric.perfLimitSizeTotal = 2097152;
        fabric.maxCacheSideLimit = 4096;
        fabric.minCacheSideLimit = 256;
        fabric.charWidthsCache = {};
        fabric.textureSize = 2048;
        fabric.disableStyleCopyPaste = false;
        fabric.enableGLFiltering = true;
        fabric.devicePixelRatio = fabric.window.devicePixelRatio || fabric.window.webkitDevicePixelRatio || fabric.window.mozDevicePixelRatio || 1;
        fabric.browserShadowBlurConstant = 1;
        fabric.arcToSegmentsCache = {};
        fabric.boundsOfCurveCache = {};
        fabric.cachesBoundsOfCurve = true;
        fabric.forceGLPutImageData = false;
        fabric.initFilterBackend = function() {
            if (fabric.enableGLFiltering && fabric.isWebglSupported && fabric.isWebglSupported(fabric.textureSize)) {
                console.log("max texture size: " + fabric.maxTextureSize);
                return new fabric.WebglFilterBackend({
                    tileSize: fabric.textureSize
                });
            } else if (fabric.Canvas2dFilterBackend) return new fabric.Canvas2dFilterBackend;
        };
        if (typeof document !== "undefined" && typeof window !== "undefined") window.fabric = fabric;
        (function() {
            function _removeEventListener(eventName, handler) {
                if (!this.__eventListeners[eventName]) return;
                var eventListener = this.__eventListeners[eventName];
                if (handler) eventListener[eventListener.indexOf(handler)] = false; else fabric.util.array.fill(eventListener, false);
            }
            function on(eventName, handler) {
                if (!this.__eventListeners) this.__eventListeners = {};
                if (arguments.length === 1) for (var prop in eventName) this.on(prop, eventName[prop]); else {
                    if (!this.__eventListeners[eventName]) this.__eventListeners[eventName] = [];
                    this.__eventListeners[eventName].push(handler);
                }
                return this;
            }
            function _once(eventName, handler) {
                var _handler = function() {
                    handler.apply(this, arguments);
                    this.off(eventName, _handler);
                }.bind(this);
                this.on(eventName, _handler);
            }
            function once(eventName, handler) {
                if (arguments.length === 1) for (var prop in eventName) _once.call(this, prop, eventName[prop]); else _once.call(this, eventName, handler);
                return this;
            }
            function off(eventName, handler) {
                if (!this.__eventListeners) return this;
                if (arguments.length === 0) for (eventName in this.__eventListeners) _removeEventListener.call(this, eventName); else if (arguments.length === 1 && typeof arguments[0] === "object") for (var prop in eventName) _removeEventListener.call(this, prop, eventName[prop]); else _removeEventListener.call(this, eventName, handler);
                return this;
            }
            function fire(eventName, options) {
                if (!this.__eventListeners) return this;
                var listenersForEvent = this.__eventListeners[eventName];
                if (!listenersForEvent) return this;
                for (var i = 0, len = listenersForEvent.length; i < len; i++) listenersForEvent[i] && listenersForEvent[i].call(this, options || {});
                this.__eventListeners[eventName] = listenersForEvent.filter((function(value) {
                    return value !== false;
                }));
                return this;
            }
            fabric.Observable = {
                fire,
                on,
                once,
                off
            };
        })();
        fabric.Collection = {
            _objects: [],
            add: function() {
                this._objects.push.apply(this._objects, arguments);
                if (this._onObjectAdded) for (var i = 0, length = arguments.length; i < length; i++) this._onObjectAdded(arguments[i]);
                this.renderOnAddRemove && this.requestRenderAll();
                return this;
            },
            insertAt: function(object, index, nonSplicing) {
                var objects = this._objects;
                if (nonSplicing) objects[index] = object; else objects.splice(index, 0, object);
                this._onObjectAdded && this._onObjectAdded(object);
                this.renderOnAddRemove && this.requestRenderAll();
                return this;
            },
            remove: function() {
                var index, objects = this._objects, somethingRemoved = false;
                for (var i = 0, length = arguments.length; i < length; i++) {
                    index = objects.indexOf(arguments[i]);
                    if (index !== -1) {
                        somethingRemoved = true;
                        objects.splice(index, 1);
                        this._onObjectRemoved && this._onObjectRemoved(arguments[i]);
                    }
                }
                this.renderOnAddRemove && somethingRemoved && this.requestRenderAll();
                return this;
            },
            forEachObject: function(callback, context) {
                var objects = this.getObjects();
                for (var i = 0, len = objects.length; i < len; i++) callback.call(context, objects[i], i, objects);
                return this;
            },
            getObjects: function(type) {
                if (typeof type === "undefined") return this._objects.concat();
                return this._objects.filter((function(o) {
                    return o.type === type;
                }));
            },
            item: function(index) {
                return this._objects[index];
            },
            isEmpty: function() {
                return this._objects.length === 0;
            },
            size: function() {
                return this._objects.length;
            },
            contains: function(object, deep) {
                if (this._objects.indexOf(object) > -1) return true; else if (deep) return this._objects.some((function(obj) {
                    return typeof obj.contains === "function" && obj.contains(object, true);
                }));
                return false;
            },
            complexity: function() {
                return this._objects.reduce((function(memo, current) {
                    memo += current.complexity ? current.complexity() : 0;
                    return memo;
                }), 0);
            }
        };
        fabric.CommonMethods = {
            _setOptions: function(options) {
                for (var prop in options) this.set(prop, options[prop]);
            },
            _initGradient: function(filler, property) {
                if (filler && filler.colorStops && !(filler instanceof fabric.Gradient)) this.set(property, new fabric.Gradient(filler));
            },
            _initPattern: function(filler, property, callback) {
                if (filler && filler.source && !(filler instanceof fabric.Pattern)) this.set(property, new fabric.Pattern(filler, callback)); else callback && callback();
            },
            _setObject: function(obj) {
                for (var prop in obj) this._set(prop, obj[prop]);
            },
            set: function(key, value) {
                if (typeof key === "object") this._setObject(key); else this._set(key, value);
                return this;
            },
            _set: function(key, value) {
                this[key] = value;
            },
            toggle: function(property) {
                var value = this.get(property);
                if (typeof value === "boolean") this.set(property, !value);
                return this;
            },
            get: function(property) {
                return this[property];
            }
        };
        (function(global) {
            var sqrt = Math.sqrt, atan2 = Math.atan2, pow = Math.pow, PiBy180 = Math.PI / 180, PiBy2 = Math.PI / 2;
            fabric.util = {
                cos: function(angle) {
                    if (angle === 0) return 1;
                    if (angle < 0) angle = -angle;
                    var angleSlice = angle / PiBy2;
                    switch (angleSlice) {
                      case 1:
                      case 3:
                        return 0;

                      case 2:
                        return -1;
                    }
                    return Math.cos(angle);
                },
                sin: function(angle) {
                    if (angle === 0) return 0;
                    var angleSlice = angle / PiBy2, sign = 1;
                    if (angle < 0) sign = -1;
                    switch (angleSlice) {
                      case 1:
                        return sign;

                      case 2:
                        return 0;

                      case 3:
                        return -sign;
                    }
                    return Math.sin(angle);
                },
                removeFromArray: function(array, value) {
                    var idx = array.indexOf(value);
                    if (idx !== -1) array.splice(idx, 1);
                    return array;
                },
                getRandomInt: function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                },
                degreesToRadians: function(degrees) {
                    return degrees * PiBy180;
                },
                radiansToDegrees: function(radians) {
                    return radians / PiBy180;
                },
                rotatePoint: function(point, origin, radians) {
                    var newPoint = new fabric.Point(point.x - origin.x, point.y - origin.y), v = fabric.util.rotateVector(newPoint, radians);
                    return new fabric.Point(v.x, v.y).addEquals(origin);
                },
                rotateVector: function(vector, radians) {
                    var sin = fabric.util.sin(radians), cos = fabric.util.cos(radians), rx = vector.x * cos - vector.y * sin, ry = vector.x * sin + vector.y * cos;
                    return {
                        x: rx,
                        y: ry
                    };
                },
                transformPoint: function(p, t, ignoreOffset) {
                    if (ignoreOffset) return new fabric.Point(t[0] * p.x + t[2] * p.y, t[1] * p.x + t[3] * p.y);
                    return new fabric.Point(t[0] * p.x + t[2] * p.y + t[4], t[1] * p.x + t[3] * p.y + t[5]);
                },
                makeBoundingBoxFromPoints: function(points, transform) {
                    if (transform) for (var i = 0; i < points.length; i++) points[i] = fabric.util.transformPoint(points[i], transform);
                    var xPoints = [ points[0].x, points[1].x, points[2].x, points[3].x ], minX = fabric.util.array.min(xPoints), maxX = fabric.util.array.max(xPoints), width = maxX - minX, yPoints = [ points[0].y, points[1].y, points[2].y, points[3].y ], minY = fabric.util.array.min(yPoints), maxY = fabric.util.array.max(yPoints), height = maxY - minY;
                    return {
                        left: minX,
                        top: minY,
                        width,
                        height
                    };
                },
                invertTransform: function(t) {
                    var a = 1 / (t[0] * t[3] - t[1] * t[2]), r = [ a * t[3], -a * t[1], -a * t[2], a * t[0] ], o = fabric.util.transformPoint({
                        x: t[4],
                        y: t[5]
                    }, r, true);
                    r[4] = -o.x;
                    r[5] = -o.y;
                    return r;
                },
                toFixed: function(number, fractionDigits) {
                    return parseFloat(Number(number).toFixed(fractionDigits));
                },
                parseUnit: function(value, fontSize) {
                    var unit = /\D{0,2}$/.exec(value), number = parseFloat(value);
                    if (!fontSize) fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
                    switch (unit[0]) {
                      case "mm":
                        return number * fabric.DPI / 25.4;

                      case "cm":
                        return number * fabric.DPI / 2.54;

                      case "in":
                        return number * fabric.DPI;

                      case "pt":
                        return number * fabric.DPI / 72;

                      case "pc":
                        return number * fabric.DPI / 72 * 12;

                      case "em":
                        return number * fontSize;

                      default:
                        return number;
                    }
                },
                falseFunction: function() {
                    return false;
                },
                getKlass: function(type, namespace) {
                    type = fabric.util.string.camelize(type.charAt(0).toUpperCase() + type.slice(1));
                    return fabric.util.resolveNamespace(namespace)[type];
                },
                getSvgAttributes: function(type) {
                    var attributes = [ "instantiated_by_use", "style", "id", "class" ];
                    switch (type) {
                      case "linearGradient":
                        attributes = attributes.concat([ "x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform" ]);
                        break;

                      case "radialGradient":
                        attributes = attributes.concat([ "gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr" ]);
                        break;

                      case "stop":
                        attributes = attributes.concat([ "offset", "stop-color", "stop-opacity" ]);
                        break;
                    }
                    return attributes;
                },
                resolveNamespace: function(namespace) {
                    if (!namespace) return fabric;
                    var i, parts = namespace.split("."), len = parts.length, obj = global || fabric.window;
                    for (i = 0; i < len; ++i) obj = obj[parts[i]];
                    return obj;
                },
                loadImage: function(url, callback, context, crossOrigin) {
                    if (!url) {
                        callback && callback.call(context, url);
                        return;
                    }
                    var img = fabric.util.createImage();
                    var onLoadCallback = function() {
                        callback && callback.call(context, img, false);
                        img = img.onload = img.onerror = null;
                    };
                    img.onload = onLoadCallback;
                    img.onerror = function() {
                        fabric.log("Error loading " + img.src);
                        callback && callback.call(context, null, true);
                        img = img.onload = img.onerror = null;
                    };
                    if (url.indexOf("data") !== 0 && crossOrigin !== void 0 && crossOrigin !== null) img.crossOrigin = crossOrigin;
                    if (url.substring(0, 14) === "data:image/svg") {
                        img.onload = null;
                        fabric.util.loadImageInDom(img, onLoadCallback);
                    }
                    img.src = url;
                },
                loadImageInDom: function(img, onLoadCallback) {
                    var div = fabric.document.createElement("div");
                    div.style.width = div.style.height = "1px";
                    div.style.left = div.style.top = "-100%";
                    div.style.position = "absolute";
                    div.appendChild(img);
                    fabric.document.querySelector("body").appendChild(div);
                    img.onload = function() {
                        onLoadCallback();
                        div.parentNode.removeChild(div);
                        div = null;
                    };
                },
                enlivenObjects: function(objects, callback, namespace, reviver) {
                    objects = objects || [];
                    var enlivenedObjects = [], numLoadedObjects = 0, numTotalObjects = objects.length;
                    function onLoaded() {
                        if (++numLoadedObjects === numTotalObjects) callback && callback(enlivenedObjects.filter((function(obj) {
                            return obj;
                        })));
                    }
                    if (!numTotalObjects) {
                        callback && callback(enlivenedObjects);
                        return;
                    }
                    objects.forEach((function(o, index) {
                        if (!o || !o.type) {
                            onLoaded();
                            return;
                        }
                        var klass = fabric.util.getKlass(o.type, namespace);
                        klass.fromObject(o, (function(obj, error) {
                            error || (enlivenedObjects[index] = obj);
                            reviver && reviver(o, obj, error);
                            onLoaded();
                        }));
                    }));
                },
                enlivenPatterns: function(patterns, callback) {
                    patterns = patterns || [];
                    function onLoaded() {
                        if (++numLoadedPatterns === numPatterns) callback && callback(enlivenedPatterns);
                    }
                    var enlivenedPatterns = [], numLoadedPatterns = 0, numPatterns = patterns.length;
                    if (!numPatterns) {
                        callback && callback(enlivenedPatterns);
                        return;
                    }
                    patterns.forEach((function(p, index) {
                        if (p && p.source) new fabric.Pattern(p, (function(pattern) {
                            enlivenedPatterns[index] = pattern;
                            onLoaded();
                        })); else {
                            enlivenedPatterns[index] = p;
                            onLoaded();
                        }
                    }));
                },
                groupSVGElements: function(elements, options, path) {
                    var object;
                    if (elements && elements.length === 1) return elements[0];
                    if (options) if (options.width && options.height) options.centerPoint = {
                        x: options.width / 2,
                        y: options.height / 2
                    }; else {
                        delete options.width;
                        delete options.height;
                    }
                    object = new fabric.Group(elements, options);
                    if (typeof path !== "undefined") object.sourcePath = path;
                    return object;
                },
                populateWithProperties: function(source, destination, properties) {
                    if (properties && Object.prototype.toString.call(properties) === "[object Array]") for (var i = 0, len = properties.length; i < len; i++) if (properties[i] in source) destination[properties[i]] = source[properties[i]];
                },
                drawDashedLine: function(ctx, x, y, x2, y2, da) {
                    var dx = x2 - x, dy = y2 - y, len = sqrt(dx * dx + dy * dy), rot = atan2(dy, dx), dc = da.length, di = 0, draw = true;
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.moveTo(0, 0);
                    ctx.rotate(rot);
                    x = 0;
                    while (len > x) {
                        x += da[di++ % dc];
                        if (x > len) x = len;
                        ctx[draw ? "lineTo" : "moveTo"](x, 0);
                        draw = !draw;
                    }
                    ctx.restore();
                },
                createCanvasElement: function() {
                    return fabric.document.createElement("canvas");
                },
                copyCanvasElement: function(canvas) {
                    var newCanvas = fabric.util.createCanvasElement();
                    newCanvas.width = canvas.width;
                    newCanvas.height = canvas.height;
                    newCanvas.getContext("2d").drawImage(canvas, 0, 0);
                    return newCanvas;
                },
                toDataURL: function(canvasEl, format, quality) {
                    return canvasEl.toDataURL("image/" + format, quality);
                },
                createImage: function() {
                    return fabric.document.createElement("img");
                },
                multiplyTransformMatrices: function(a, b, is2x2) {
                    return [ a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], is2x2 ? 0 : a[0] * b[4] + a[2] * b[5] + a[4], is2x2 ? 0 : a[1] * b[4] + a[3] * b[5] + a[5] ];
                },
                qrDecompose: function(a) {
                    var angle = atan2(a[1], a[0]), denom = pow(a[0], 2) + pow(a[1], 2), scaleX = sqrt(denom), scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX, skewX = atan2(a[0] * a[2] + a[1] * a[3], denom);
                    return {
                        angle: angle / PiBy180,
                        scaleX,
                        scaleY,
                        skewX: skewX / PiBy180,
                        skewY: 0,
                        translateX: a[4],
                        translateY: a[5]
                    };
                },
                calcRotateMatrix: function(options) {
                    if (!options.angle) return fabric.iMatrix.concat();
                    var theta = fabric.util.degreesToRadians(options.angle), cos = fabric.util.cos(theta), sin = fabric.util.sin(theta);
                    return [ cos, sin, -sin, cos, 0, 0 ];
                },
                calcDimensionsMatrix: function(options) {
                    var scaleX = typeof options.scaleX === "undefined" ? 1 : options.scaleX, scaleY = typeof options.scaleY === "undefined" ? 1 : options.scaleY, scaleMatrix = [ options.flipX ? -scaleX : scaleX, 0, 0, options.flipY ? -scaleY : scaleY, 0, 0 ], multiply = fabric.util.multiplyTransformMatrices, degreesToRadians = fabric.util.degreesToRadians;
                    if (options.skewX) scaleMatrix = multiply(scaleMatrix, [ 1, 0, Math.tan(degreesToRadians(options.skewX)), 1 ], true);
                    if (options.skewY) scaleMatrix = multiply(scaleMatrix, [ 1, Math.tan(degreesToRadians(options.skewY)), 0, 1 ], true);
                    return scaleMatrix;
                },
                composeMatrix: function(options) {
                    var matrix = [ 1, 0, 0, 1, options.translateX || 0, options.translateY || 0 ], multiply = fabric.util.multiplyTransformMatrices;
                    if (options.angle) matrix = multiply(matrix, fabric.util.calcRotateMatrix(options));
                    if (options.scaleX !== 1 || options.scaleY !== 1 || options.skewX || options.skewY || options.flipX || options.flipY) matrix = multiply(matrix, fabric.util.calcDimensionsMatrix(options));
                    return matrix;
                },
                resetObjectTransform: function(target) {
                    target.scaleX = 1;
                    target.scaleY = 1;
                    target.skewX = 0;
                    target.skewY = 0;
                    target.flipX = false;
                    target.flipY = false;
                    target.rotate(0);
                },
                saveObjectTransform: function(target) {
                    return {
                        scaleX: target.scaleX,
                        scaleY: target.scaleY,
                        skewX: target.skewX,
                        skewY: target.skewY,
                        angle: target.angle,
                        left: target.left,
                        flipX: target.flipX,
                        flipY: target.flipY,
                        top: target.top
                    };
                },
                isTransparent: function(ctx, x, y, tolerance) {
                    if (tolerance > 0) {
                        if (x > tolerance) x -= tolerance; else x = 0;
                        if (y > tolerance) y -= tolerance; else y = 0;
                    }
                    var i, temp, _isTransparent = true, imageData = ctx.getImageData(x, y, tolerance * 2 || 1, tolerance * 2 || 1), l = imageData.data.length;
                    for (i = 3; i < l; i += 4) {
                        temp = imageData.data[i];
                        _isTransparent = temp <= 0;
                        if (_isTransparent === false) break;
                    }
                    imageData = null;
                    return _isTransparent;
                },
                parsePreserveAspectRatioAttribute: function(attribute) {
                    var align, meetOrSlice = "meet", alignX = "Mid", alignY = "Mid", aspectRatioAttrs = attribute.split(" ");
                    if (aspectRatioAttrs && aspectRatioAttrs.length) {
                        meetOrSlice = aspectRatioAttrs.pop();
                        if (meetOrSlice !== "meet" && meetOrSlice !== "slice") {
                            align = meetOrSlice;
                            meetOrSlice = "meet";
                        } else if (aspectRatioAttrs.length) align = aspectRatioAttrs.pop();
                    }
                    alignX = align !== "none" ? align.slice(1, 4) : "none";
                    alignY = align !== "none" ? align.slice(5, 8) : "none";
                    return {
                        meetOrSlice,
                        alignX,
                        alignY
                    };
                },
                clearFabricFontCache: function(fontFamily) {
                    fontFamily = (fontFamily || "").toLowerCase();
                    if (!fontFamily) fabric.charWidthsCache = {}; else if (fabric.charWidthsCache[fontFamily]) delete fabric.charWidthsCache[fontFamily];
                },
                limitDimsByArea: function(ar, maximumArea) {
                    var roughWidth = Math.sqrt(maximumArea * ar), perfLimitSizeY = Math.floor(maximumArea / roughWidth);
                    return {
                        x: Math.floor(roughWidth),
                        y: perfLimitSizeY
                    };
                },
                capValue: function(min, value, max) {
                    return Math.max(min, Math.min(value, max));
                },
                findScaleToFit: function(source, destination) {
                    return Math.min(destination.width / source.width, destination.height / source.height);
                },
                findScaleToCover: function(source, destination) {
                    return Math.max(destination.width / source.width, destination.height / source.height);
                },
                matrixToSVG: function(transform) {
                    return "matrix(" + transform.map((function(value) {
                        return fabric.util.toFixed(value, fabric.Object.NUM_FRACTION_DIGITS);
                    })).join(" ") + ")";
                },
                removeTransformFromObject: function(object, transform) {
                    var inverted = fabric.util.invertTransform(transform), finalTransform = fabric.util.multiplyTransformMatrices(inverted, object.calcOwnMatrix());
                    fabric.util.applyTransformToObject(object, finalTransform);
                },
                addTransformToObject: function(object, transform) {
                    fabric.util.applyTransformToObject(object, fabric.util.multiplyTransformMatrices(transform, object.calcOwnMatrix()));
                },
                applyTransformToObject: function(object, transform) {
                    var options = fabric.util.qrDecompose(transform), center = new fabric.Point(options.translateX, options.translateY);
                    object.flipX = false;
                    object.flipY = false;
                    object.set("scaleX", options.scaleX);
                    object.set("scaleY", options.scaleY);
                    object.skewX = options.skewX;
                    object.skewY = options.skewY;
                    object.angle = options.angle;
                    object.setPositionByOrigin(center, "center", "center");
                },
                sizeAfterTransform: function(width, height, options) {
                    var dimX = width / 2, dimY = height / 2, points = [ {
                        x: -dimX,
                        y: -dimY
                    }, {
                        x: dimX,
                        y: -dimY
                    }, {
                        x: -dimX,
                        y: dimY
                    }, {
                        x: dimX,
                        y: dimY
                    } ], transformMatrix = fabric.util.calcDimensionsMatrix(options), bbox = fabric.util.makeBoundingBoxFromPoints(points, transformMatrix);
                    return {
                        x: bbox.width,
                        y: bbox.height
                    };
                }
            };
        })(true ? exports : 0);
        (function() {
            var _join = Array.prototype.join, commandLengths = {
                m: 2,
                l: 2,
                h: 1,
                v: 1,
                c: 6,
                s: 4,
                q: 4,
                t: 2,
                a: 7
            }, repeatedCommands = {
                m: "l",
                M: "L"
            };
            function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
                var costh2 = fabric.util.cos(th2), sinth2 = fabric.util.sin(th2), costh3 = fabric.util.cos(th3), sinth3 = fabric.util.sin(th3), toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1, toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1, cp1X = fromX + mT * (-cosTh * rx * sinth2 - sinTh * ry * costh2), cp1Y = fromY + mT * (-sinTh * rx * sinth2 + cosTh * ry * costh2), cp2X = toX + mT * (cosTh * rx * sinth3 + sinTh * ry * costh3), cp2Y = toY + mT * (sinTh * rx * sinth3 - cosTh * ry * costh3);
                return [ "C", cp1X, cp1Y, cp2X, cp2Y, toX, toY ];
            }
            function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
                var PI = Math.PI, th = rotateX * PI / 180, sinTh = fabric.util.sin(th), cosTh = fabric.util.cos(th), fromX = 0, fromY = 0;
                rx = Math.abs(rx);
                ry = Math.abs(ry);
                var px = -cosTh * toX * .5 - sinTh * toY * .5, py = -cosTh * toY * .5 + sinTh * toX * .5, rx2 = rx * rx, ry2 = ry * ry, py2 = py * py, px2 = px * px, pl = rx2 * ry2 - rx2 * py2 - ry2 * px2, root = 0;
                if (pl < 0) {
                    var s = Math.sqrt(1 - pl / (rx2 * ry2));
                    rx *= s;
                    ry *= s;
                } else root = (large === sweep ? -1 : 1) * Math.sqrt(pl / (rx2 * py2 + ry2 * px2));
                var cx = root * rx * py / ry, cy = -root * ry * px / rx, cx1 = cosTh * cx - sinTh * cy + toX * .5, cy1 = sinTh * cx + cosTh * cy + toY * .5, mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry), dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);
                if (sweep === 0 && dtheta > 0) dtheta -= 2 * PI; else if (sweep === 1 && dtheta < 0) dtheta += 2 * PI;
                var segments = Math.ceil(Math.abs(dtheta / PI * 2)), result = [], mDelta = dtheta / segments, mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2), th3 = mTheta + mDelta;
                for (var i = 0; i < segments; i++) {
                    result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
                    fromX = result[i][5];
                    fromY = result[i][6];
                    mTheta = th3;
                    th3 += mDelta;
                }
                return result;
            }
            function calcVectorAngle(ux, uy, vx, vy) {
                var ta = Math.atan2(uy, ux), tb = Math.atan2(vy, vx);
                if (tb >= ta) return tb - ta; else return 2 * Math.PI - (ta - tb);
            }
            function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
                var argsString;
                if (fabric.cachesBoundsOfCurve) {
                    argsString = _join.call(arguments);
                    if (fabric.boundsOfCurveCache[argsString]) return fabric.boundsOfCurveCache[argsString];
                }
                var a, b, c, t, t1, t2, b2ac, sqrtb2ac, sqrt = Math.sqrt, min = Math.min, max = Math.max, abs = Math.abs, tvalues = [], bounds = [ [], [] ];
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
                for (var i = 0; i < 2; ++i) {
                    if (i > 0) {
                        b = 6 * y0 - 12 * y1 + 6 * y2;
                        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                        c = 3 * y1 - 3 * y0;
                    }
                    if (abs(a) < 1e-12) {
                        if (abs(b) < 1e-12) continue;
                        t = -c / b;
                        if (0 < t && t < 1) tvalues.push(t);
                        continue;
                    }
                    b2ac = b * b - 4 * c * a;
                    if (b2ac < 0) continue;
                    sqrtb2ac = sqrt(b2ac);
                    t1 = (-b + sqrtb2ac) / (2 * a);
                    if (0 < t1 && t1 < 1) tvalues.push(t1);
                    t2 = (-b - sqrtb2ac) / (2 * a);
                    if (0 < t2 && t2 < 1) tvalues.push(t2);
                }
                var x, y, mt, j = tvalues.length, jlen = j;
                while (j--) {
                    t = tvalues[j];
                    mt = 1 - t;
                    x = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
                    bounds[0][j] = x;
                    y = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
                    bounds[1][j] = y;
                }
                bounds[0][jlen] = x0;
                bounds[1][jlen] = y0;
                bounds[0][jlen + 1] = x3;
                bounds[1][jlen + 1] = y3;
                var result = [ {
                    x: min.apply(null, bounds[0]),
                    y: min.apply(null, bounds[1])
                }, {
                    x: max.apply(null, bounds[0]),
                    y: max.apply(null, bounds[1])
                } ];
                if (fabric.cachesBoundsOfCurve) fabric.boundsOfCurveCache[argsString] = result;
                return result;
            }
            function fromArcToBeziers(fx, fy, coords) {
                var rx = coords[1], ry = coords[2], rot = coords[3], large = coords[4], sweep = coords[5], tx = coords[6], ty = coords[7], segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);
                for (var i = 0, len = segsNorm.length; i < len; i++) {
                    segsNorm[i][1] += fx;
                    segsNorm[i][2] += fy;
                    segsNorm[i][3] += fx;
                    segsNorm[i][4] += fy;
                    segsNorm[i][5] += fx;
                    segsNorm[i][6] += fy;
                }
                return segsNorm;
            }
            function makePathSimpler(path) {
                var current, i, converted, previous, controlX, controlY, x = 0, y = 0, len = path.length, x1 = 0, y1 = 0, destinationPath = [];
                for (i = 0; i < len; ++i) {
                    converted = false;
                    current = path[i].slice(0);
                    switch (current[0]) {
                      case "l":
                        current[0] = "L";
                        current[1] += x;
                        current[2] += y;

                      case "L":
                        x = current[1];
                        y = current[2];
                        break;

                      case "h":
                        current[1] += x;

                      case "H":
                        current[0] = "L";
                        current[2] = y;
                        x = current[1];
                        break;

                      case "v":
                        current[1] += y;

                      case "V":
                        current[0] = "L";
                        y = current[1];
                        current[1] = x;
                        current[2] = y;
                        break;

                      case "m":
                        current[0] = "M";
                        current[1] += x;
                        current[2] += y;

                      case "M":
                        x = current[1];
                        y = current[2];
                        x1 = current[1];
                        y1 = current[2];
                        break;

                      case "c":
                        current[0] = "C";
                        current[1] += x;
                        current[2] += y;
                        current[3] += x;
                        current[4] += y;
                        current[5] += x;
                        current[6] += y;

                      case "C":
                        controlX = current[3];
                        controlY = current[4];
                        x = current[5];
                        y = current[6];
                        break;

                      case "s":
                        current[0] = "S";
                        current[1] += x;
                        current[2] += y;
                        current[3] += x;
                        current[4] += y;

                      case "S":
                        if (previous === "C") {
                            controlX = 2 * x - controlX;
                            controlY = 2 * y - controlY;
                        } else {
                            controlX = x;
                            controlY = y;
                        }
                        x = current[3];
                        y = current[4];
                        current[0] = "C";
                        current[5] = current[3];
                        current[6] = current[4];
                        current[3] = current[1];
                        current[4] = current[2];
                        current[1] = controlX;
                        current[2] = controlY;
                        controlX = current[3];
                        controlY = current[4];
                        break;

                      case "q":
                        current[0] = "Q";
                        current[1] += x;
                        current[2] += y;
                        current[3] += x;
                        current[4] += y;

                      case "Q":
                        controlX = current[1];
                        controlY = current[2];
                        x = current[3];
                        y = current[4];
                        break;

                      case "t":
                        current[0] = "T";
                        current[1] += x;
                        current[2] += y;

                      case "T":
                        if (previous === "Q") {
                            controlX = 2 * x - controlX;
                            controlY = 2 * y - controlY;
                        } else {
                            controlX = x;
                            controlY = y;
                        }
                        current[0] = "Q";
                        x = current[1];
                        y = current[2];
                        current[1] = controlX;
                        current[2] = controlY;
                        current[3] = x;
                        current[4] = y;
                        break;

                      case "a":
                        current[0] = "A";
                        current[6] += x;
                        current[7] += y;

                      case "A":
                        converted = true;
                        destinationPath = destinationPath.concat(fromArcToBeziers(x, y, current));
                        x = current[6];
                        y = current[7];
                        break;

                      case "z":
                      case "Z":
                        x = x1;
                        y = y1;
                        break;

                      default:
                    }
                    if (!converted) destinationPath.push(current);
                    previous = current[0];
                }
                return destinationPath;
            }
            function calcLineLength(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
            function CB1(t) {
                return t * t * t;
            }
            function CB2(t) {
                return 3 * t * t * (1 - t);
            }
            function CB3(t) {
                return 3 * t * (1 - t) * (1 - t);
            }
            function CB4(t) {
                return (1 - t) * (1 - t) * (1 - t);
            }
            function getPointOnCubicBezierIterator(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
                return function(pct) {
                    var c1 = CB1(pct), c2 = CB2(pct), c3 = CB3(pct), c4 = CB4(pct);
                    return {
                        x: p4x * c1 + p3x * c2 + p2x * c3 + p1x * c4,
                        y: p4y * c1 + p3y * c2 + p2y * c3 + p1y * c4
                    };
                };
            }
            function getTangentCubicIterator(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
                return function(pct) {
                    var invT = 1 - pct, tangentX = 3 * invT * invT * (p2x - p1x) + 6 * invT * pct * (p3x - p2x) + 3 * pct * pct * (p4x - p3x), tangentY = 3 * invT * invT * (p2y - p1y) + 6 * invT * pct * (p3y - p2y) + 3 * pct * pct * (p4y - p3y);
                    return Math.atan2(tangentY, tangentX);
                };
            }
            function QB1(t) {
                return t * t;
            }
            function QB2(t) {
                return 2 * t * (1 - t);
            }
            function QB3(t) {
                return (1 - t) * (1 - t);
            }
            function getPointOnQuadraticBezierIterator(p1x, p1y, p2x, p2y, p3x, p3y) {
                return function(pct) {
                    var c1 = QB1(pct), c2 = QB2(pct), c3 = QB3(pct);
                    return {
                        x: p3x * c1 + p2x * c2 + p1x * c3,
                        y: p3y * c1 + p2y * c2 + p1y * c3
                    };
                };
            }
            function getTangentQuadraticIterator(p1x, p1y, p2x, p2y, p3x, p3y) {
                return function(pct) {
                    var invT = 1 - pct, tangentX = 2 * invT * (p2x - p1x) + 2 * pct * (p3x - p2x), tangentY = 2 * invT * (p2y - p1y) + 2 * pct * (p3y - p2y);
                    return Math.atan2(tangentY, tangentX);
                };
            }
            function pathIterator(iterator, x1, y1) {
                var p, perc, tempP = {
                    x: x1,
                    y: y1
                }, tmpLen = 0;
                for (perc = 1; perc <= 100; perc += 1) {
                    p = iterator(perc / 100);
                    tmpLen += calcLineLength(tempP.x, tempP.y, p.x, p.y);
                    tempP = p;
                }
                return tmpLen;
            }
            function findPercentageForDistance(segInfo, distance) {
                var p, nextLen, lastPerc, perc = 0, tmpLen = 0, iterator = segInfo.iterator, tempP = {
                    x: segInfo.x,
                    y: segInfo.y
                }, nextStep = .01, angleFinder = segInfo.angleFinder;
                while (tmpLen < distance && perc <= 1 && nextStep > 1e-4) {
                    p = iterator(perc);
                    lastPerc = perc;
                    nextLen = calcLineLength(tempP.x, tempP.y, p.x, p.y);
                    if (nextLen + tmpLen > distance) {
                        nextStep /= 2;
                        perc -= nextStep;
                    } else {
                        tempP = p;
                        perc += nextStep;
                        tmpLen += nextLen;
                    }
                }
                p.angle = angleFinder(lastPerc);
                return p;
            }
            function getPathSegmentsInfo(path) {
                var current, iterator, tempInfo, angleFinder, totalLength = 0, len = path.length, x1 = 0, y1 = 0, x2 = 0, y2 = 0, info = [];
                for (var i = 0; i < len; i++) {
                    current = path[i];
                    tempInfo = {
                        x: x1,
                        y: y1,
                        command: current[0]
                    };
                    switch (current[0]) {
                      case "M":
                        tempInfo.length = 0;
                        x2 = x1 = current[1];
                        y2 = y1 = current[2];
                        break;

                      case "L":
                        tempInfo.length = calcLineLength(x1, y1, current[1], current[2]);
                        x1 = current[1];
                        y1 = current[2];
                        break;

                      case "C":
                        iterator = getPointOnCubicBezierIterator(x1, y1, current[1], current[2], current[3], current[4], current[5], current[6]);
                        angleFinder = getTangentCubicIterator(x1, y1, current[1], current[2], current[3], current[4], current[5], current[6]);
                        tempInfo.iterator = iterator;
                        tempInfo.angleFinder = angleFinder;
                        tempInfo.length = pathIterator(iterator, x1, y1);
                        x1 = current[5];
                        y1 = current[6];
                        break;

                      case "Q":
                        iterator = getPointOnQuadraticBezierIterator(x1, y1, current[1], current[2], current[3], current[4]);
                        angleFinder = getTangentQuadraticIterator(x1, y1, current[1], current[2], current[3], current[4]);
                        tempInfo.iterator = iterator;
                        tempInfo.angleFinder = angleFinder;
                        tempInfo.length = pathIterator(iterator, x1, y1);
                        x1 = current[3];
                        y1 = current[4];
                        break;

                      case "Z":
                      case "z":
                        tempInfo.destX = x2;
                        tempInfo.destY = y2;
                        tempInfo.length = calcLineLength(x1, y1, x2, y2);
                        x1 = x2;
                        y1 = y2;
                        break;
                    }
                    totalLength += tempInfo.length;
                    info.push(tempInfo);
                }
                info.push({
                    length: totalLength,
                    x: x1,
                    y: y1
                });
                return info;
            }
            function getPointOnPath(path, distance, infos) {
                if (!infos) infos = getPathSegmentsInfo(path);
                var i = 0;
                while (distance - infos[i].length > 0 && i < infos.length - 2) {
                    distance -= infos[i].length;
                    i++;
                }
                var info, segInfo = infos[i], segPercent = distance / segInfo.length, command = segInfo.command, segment = path[i];
                switch (command) {
                  case "M":
                    return {
                        x: segInfo.x,
                        y: segInfo.y,
                        angle: 0
                    };

                  case "Z":
                  case "z":
                    info = new fabric.Point(segInfo.x, segInfo.y).lerp(new fabric.Point(segInfo.destX, segInfo.destY), segPercent);
                    info.angle = Math.atan2(segInfo.destY - segInfo.y, segInfo.destX - segInfo.x);
                    return info;

                  case "L":
                    info = new fabric.Point(segInfo.x, segInfo.y).lerp(new fabric.Point(segment[1], segment[2]), segPercent);
                    info.angle = Math.atan2(segment[2] - segInfo.y, segment[1] - segInfo.x);
                    return info;

                  case "C":
                    return findPercentageForDistance(segInfo, distance);

                  case "Q":
                    return findPercentageForDistance(segInfo, distance);
                }
            }
            function parsePath(pathString) {
                var currentPath, parsed, match, coordsStr, path, result = [], coords = [], re = fabric.rePathCommand, rNumber = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", rNumberCommaWsp = "(" + rNumber + ")" + fabric.commaWsp, rFlagCommaWsp = "([01])" + fabric.commaWsp + "?", rArcSeq = rNumberCommaWsp + "?" + rNumberCommaWsp + "?" + rNumberCommaWsp + rFlagCommaWsp + rFlagCommaWsp + rNumberCommaWsp + "?(" + rNumber + ")", regArcArgumentSequence = new RegExp(rArcSeq, "g");
                if (!pathString || !pathString.match) return result;
                path = pathString.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);
                for (var coordsParsed, i = 0, len = path.length; i < len; i++) {
                    currentPath = path[i];
                    coordsStr = currentPath.slice(1).trim();
                    coords.length = 0;
                    var command = currentPath.charAt(0);
                    coordsParsed = [ command ];
                    if (command.toLowerCase() === "a") for (var args; args = regArcArgumentSequence.exec(coordsStr); ) for (var j = 1; j < args.length; j++) coords.push(args[j]); else while (match = re.exec(coordsStr)) coords.push(match[0]);
                    j = 0;
                    for (var jlen = coords.length; j < jlen; j++) {
                        parsed = parseFloat(coords[j]);
                        if (!isNaN(parsed)) coordsParsed.push(parsed);
                    }
                    var commandLength = commandLengths[command.toLowerCase()], repeatedCommand = repeatedCommands[command] || command;
                    if (coordsParsed.length - 1 > commandLength) for (var k = 1, klen = coordsParsed.length; k < klen; k += commandLength) {
                        result.push([ command ].concat(coordsParsed.slice(k, k + commandLength)));
                        command = repeatedCommand;
                    } else result.push(coordsParsed);
                }
                return result;
            }
            function getSmoothPathFromPoints(points, correction) {
                var i, path = [], p1 = new fabric.Point(points[0].x, points[0].y), p2 = new fabric.Point(points[1].x, points[1].y), len = points.length, multSignX = 1, multSignY = 0, manyPoints = len > 2;
                correction = correction || 0;
                if (manyPoints) {
                    multSignX = points[2].x < p2.x ? -1 : points[2].x === p2.x ? 0 : 1;
                    multSignY = points[2].y < p2.y ? -1 : points[2].y === p2.y ? 0 : 1;
                }
                path.push([ "M", p1.x - multSignX * correction, p1.y - multSignY * correction ]);
                for (i = 1; i < len; i++) {
                    if (!p1.eq(p2)) {
                        var midPoint = p1.midPointFrom(p2);
                        path.push([ "Q", p1.x, p1.y, midPoint.x, midPoint.y ]);
                    }
                    p1 = points[i];
                    if (i + 1 < points.length) p2 = points[i + 1];
                }
                if (manyPoints) {
                    multSignX = p1.x > points[i - 2].x ? 1 : p1.x === points[i - 2].x ? 0 : -1;
                    multSignY = p1.y > points[i - 2].y ? 1 : p1.y === points[i - 2].y ? 0 : -1;
                }
                path.push([ "L", p1.x + multSignX * correction, p1.y + multSignY * correction ]);
                return path;
            }
            function transformPath(path, transform, pathOffset) {
                if (pathOffset) transform = fabric.util.multiplyTransformMatrices(transform, [ 1, 0, 0, 1, -pathOffset.x, -pathOffset.y ]);
                return path.map((function(pathSegment) {
                    var newSegment = pathSegment.slice(0), point = {};
                    for (var i = 1; i < pathSegment.length - 1; i += 2) {
                        point.x = pathSegment[i];
                        point.y = pathSegment[i + 1];
                        point = fabric.util.transformPoint(point, transform);
                        newSegment[i] = point.x;
                        newSegment[i + 1] = point.y;
                    }
                    return newSegment;
                }));
            }
            function getBoundsOfArc(fx, fy, rx, ry, rot, large, sweep, tx, ty) {
                var bound, fromX = 0, fromY = 0, bounds = [], segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);
                for (var i = 0, len = segs.length; i < len; i++) {
                    bound = getBoundsOfCurve(fromX, fromY, segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5], segs[i][6]);
                    bounds.push({
                        x: bound[0].x + fx,
                        y: bound[0].y + fy
                    });
                    bounds.push({
                        x: bound[1].x + fx,
                        y: bound[1].y + fy
                    });
                    fromX = segs[i][5];
                    fromY = segs[i][6];
                }
                return bounds;
            }
            function drawArc(ctx, fx, fy, coords) {
                coords = coords.slice(0).unshift("X");
                var beziers = fromArcToBeziers(fx, fy, coords);
                beziers.forEach((function(bezier) {
                    ctx.bezierCurveTo.apply(ctx, bezier.slice(1));
                }));
            }
            fabric.util.joinPath = function(pathData) {
                return pathData.map((function(segment) {
                    return segment.join(" ");
                })).join(" ");
            };
            fabric.util.parsePath = parsePath;
            fabric.util.makePathSimpler = makePathSimpler;
            fabric.util.getSmoothPathFromPoints = getSmoothPathFromPoints;
            fabric.util.getPathSegmentsInfo = getPathSegmentsInfo;
            fabric.util.getBoundsOfCurve = getBoundsOfCurve;
            fabric.util.getPointOnPath = getPointOnPath;
            fabric.util.transformPath = transformPath;
            fabric.util.fromArcToBeizers = fromArcToBeziers;
            fabric.util.getBoundsOfArc = getBoundsOfArc;
            fabric.util.drawArc = drawArc;
        })();
        (function() {
            var slice = Array.prototype.slice;
            function invoke(array, method) {
                var args = slice.call(arguments, 2), result = [];
                for (var i = 0, len = array.length; i < len; i++) result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
                return result;
            }
            function max(array, byProperty) {
                return find(array, byProperty, (function(value1, value2) {
                    return value1 >= value2;
                }));
            }
            function min(array, byProperty) {
                return find(array, byProperty, (function(value1, value2) {
                    return value1 < value2;
                }));
            }
            function fill(array, value) {
                var k = array.length;
                while (k--) array[k] = value;
                return array;
            }
            function find(array, byProperty, condition) {
                if (!array || array.length === 0) return;
                var i = array.length - 1, result = byProperty ? array[i][byProperty] : array[i];
                if (byProperty) {
                    while (i--) if (condition(array[i][byProperty], result)) result = array[i][byProperty];
                } else while (i--) if (condition(array[i], result)) result = array[i];
                return result;
            }
            fabric.util.array = {
                fill,
                invoke,
                min,
                max
            };
        })();
        (function() {
            function extend(destination, source, deep) {
                if (deep) if (!fabric.isLikelyNode && source instanceof Element) destination = source; else if (source instanceof Array) {
                    destination = [];
                    for (var i = 0, len = source.length; i < len; i++) destination[i] = extend({}, source[i], deep);
                } else if (source && typeof source === "object") {
                    for (var property in source) if (property === "canvas" || property === "group") destination[property] = null; else if (source.hasOwnProperty(property)) destination[property] = extend({}, source[property], deep);
                } else destination = source; else for (var property in source) destination[property] = source[property];
                return destination;
            }
            function clone(object, deep) {
                return extend({}, object, deep);
            }
            fabric.util.object = {
                extend,
                clone
            };
            fabric.util.object.extend(fabric.util, fabric.Observable);
        })();
        (function() {
            function camelize(string) {
                return string.replace(/-+(.)?/g, (function(match, character) {
                    return character ? character.toUpperCase() : "";
                }));
            }
            function capitalize(string, firstLetterOnly) {
                return string.charAt(0).toUpperCase() + (firstLetterOnly ? string.slice(1) : string.slice(1).toLowerCase());
            }
            function escapeXml(string) {
                return string.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }
            function graphemeSplit(textstring) {
                var chr, i = 0, graphemes = [];
                for (i = 0, chr; i < textstring.length; i++) {
                    if ((chr = getWholeChar(textstring, i)) === false) continue;
                    graphemes.push(chr);
                }
                return graphemes;
            }
            function getWholeChar(str, i) {
                var code = str.charCodeAt(i);
                if (isNaN(code)) return "";
                if (code < 55296 || code > 57343) return str.charAt(i);
                if (55296 <= code && code <= 56319) {
                    if (str.length <= i + 1) throw "High surrogate without following low surrogate";
                    var next = str.charCodeAt(i + 1);
                    if (56320 > next || next > 57343) throw "High surrogate without following low surrogate";
                    return str.charAt(i) + str.charAt(i + 1);
                }
                if (i === 0) throw "Low surrogate without preceding high surrogate";
                var prev = str.charCodeAt(i - 1);
                if (55296 > prev || prev > 56319) throw "Low surrogate without preceding high surrogate";
                return false;
            }
            fabric.util.string = {
                camelize,
                capitalize,
                escapeXml,
                graphemeSplit
            };
        })();
        (function() {
            var slice = Array.prototype.slice, emptyFunction = function() {}, IS_DONTENUM_BUGGY = function() {
                for (var p in {
                    toString: 1
                }) if (p === "toString") return false;
                return true;
            }(), addMethods = function(klass, source, parent) {
                for (var property in source) {
                    if (property in klass.prototype && typeof klass.prototype[property] === "function" && (source[property] + "").indexOf("callSuper") > -1) klass.prototype[property] = function(property) {
                        return function() {
                            var superclass = this.constructor.superclass;
                            this.constructor.superclass = parent;
                            var returnValue = source[property].apply(this, arguments);
                            this.constructor.superclass = superclass;
                            if (property !== "initialize") return returnValue;
                        };
                    }(property); else klass.prototype[property] = source[property];
                    if (IS_DONTENUM_BUGGY) {
                        if (source.toString !== Object.prototype.toString) klass.prototype.toString = source.toString;
                        if (source.valueOf !== Object.prototype.valueOf) klass.prototype.valueOf = source.valueOf;
                    }
                }
            };
            function Subclass() {}
            function callSuper(methodName) {
                var parentMethod = null, _this = this;
                while (_this.constructor.superclass) {
                    var superClassMethod = _this.constructor.superclass.prototype[methodName];
                    if (_this[methodName] !== superClassMethod) {
                        parentMethod = superClassMethod;
                        break;
                    }
                    _this = _this.constructor.superclass.prototype;
                }
                if (!parentMethod) return console.log("tried to callSuper " + methodName + ", method not found in prototype chain", this);
                return arguments.length > 1 ? parentMethod.apply(this, slice.call(arguments, 1)) : parentMethod.call(this);
            }
            function createClass() {
                var parent = null, properties = slice.call(arguments, 0);
                if (typeof properties[0] === "function") parent = properties.shift();
                function klass() {
                    this.initialize.apply(this, arguments);
                }
                klass.superclass = parent;
                klass.subclasses = [];
                if (parent) {
                    Subclass.prototype = parent.prototype;
                    klass.prototype = new Subclass;
                    parent.subclasses.push(klass);
                }
                for (var i = 0, length = properties.length; i < length; i++) addMethods(klass, properties[i], parent);
                if (!klass.prototype.initialize) klass.prototype.initialize = emptyFunction;
                klass.prototype.constructor = klass;
                klass.prototype.callSuper = callSuper;
                return klass;
            }
            fabric.util.createClass = createClass;
        })();
        (function() {
            var couldUseAttachEvent = !!fabric.document.createElement("div").attachEvent, touchEvents = [ "touchstart", "touchmove", "touchend" ];
            fabric.util.addListener = function(element, eventName, handler, options) {
                element && element.addEventListener(eventName, handler, couldUseAttachEvent ? false : options);
            };
            fabric.util.removeListener = function(element, eventName, handler, options) {
                element && element.removeEventListener(eventName, handler, couldUseAttachEvent ? false : options);
            };
            function getTouchInfo(event) {
                var touchProp = event.changedTouches;
                if (touchProp && touchProp[0]) return touchProp[0];
                return event;
            }
            fabric.util.getPointer = function(event) {
                var element = event.target, scroll = fabric.util.getScrollLeftTop(element), _evt = getTouchInfo(event);
                return {
                    x: _evt.clientX + scroll.left,
                    y: _evt.clientY + scroll.top
                };
            };
            fabric.util.isTouchEvent = function(event) {
                return touchEvents.indexOf(event.type) > -1 || event.pointerType === "touch";
            };
        })();
        (function() {
            function setStyle(element, styles) {
                var elementStyle = element.style;
                if (!elementStyle) return element;
                if (typeof styles === "string") {
                    element.style.cssText += ";" + styles;
                    return styles.indexOf("opacity") > -1 ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
                }
                for (var property in styles) if (property === "opacity") setOpacity(element, styles[property]); else {
                    var normalizedProperty = property === "float" || property === "cssFloat" ? typeof elementStyle.styleFloat === "undefined" ? "cssFloat" : "styleFloat" : property;
                    elementStyle[normalizedProperty] = styles[property];
                }
                return element;
            }
            var parseEl = fabric.document.createElement("div"), supportsOpacity = typeof parseEl.style.opacity === "string", supportsFilters = typeof parseEl.style.filter === "string", reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, setOpacity = function(element) {
                return element;
            };
            if (supportsOpacity) setOpacity = function(element, value) {
                element.style.opacity = value;
                return element;
            }; else if (supportsFilters) setOpacity = function(element, value) {
                var es = element.style;
                if (element.currentStyle && !element.currentStyle.hasLayout) es.zoom = 1;
                if (reOpacity.test(es.filter)) {
                    value = value >= .9999 ? "" : "alpha(opacity=" + value * 100 + ")";
                    es.filter = es.filter.replace(reOpacity, value);
                } else es.filter += " alpha(opacity=" + value * 100 + ")";
                return element;
            };
            fabric.util.setStyle = setStyle;
        })();
        (function() {
            var _slice = Array.prototype.slice;
            function getById(id) {
                return typeof id === "string" ? fabric.document.getElementById(id) : id;
            }
            var sliceCanConvertNodelists, toArray = function(arrayLike) {
                return _slice.call(arrayLike, 0);
            };
            try {
                sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
            } catch (err) {}
            if (!sliceCanConvertNodelists) toArray = function(arrayLike) {
                var arr = new Array(arrayLike.length), i = arrayLike.length;
                while (i--) arr[i] = arrayLike[i];
                return arr;
            };
            function makeElement(tagName, attributes) {
                var el = fabric.document.createElement(tagName);
                for (var prop in attributes) if (prop === "class") el.className = attributes[prop]; else if (prop === "for") el.htmlFor = attributes[prop]; else el.setAttribute(prop, attributes[prop]);
                return el;
            }
            function addClass(element, className) {
                if (element && (" " + element.className + " ").indexOf(" " + className + " ") === -1) element.className += (element.className ? " " : "") + className;
            }
            function wrapElement(element, wrapper, attributes) {
                if (typeof wrapper === "string") wrapper = makeElement(wrapper, attributes);
                if (element.parentNode) element.parentNode.replaceChild(wrapper, element);
                wrapper.appendChild(element);
                return wrapper;
            }
            function getScrollLeftTop(element) {
                var left = 0, top = 0, docElement = fabric.document.documentElement, body = fabric.document.body || {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                while (element && (element.parentNode || element.host)) {
                    element = element.parentNode || element.host;
                    if (element === fabric.document) {
                        left = body.scrollLeft || docElement.scrollLeft || 0;
                        top = body.scrollTop || docElement.scrollTop || 0;
                    } else {
                        left += element.scrollLeft || 0;
                        top += element.scrollTop || 0;
                    }
                    if (element.nodeType === 1 && element.style.position === "fixed") break;
                }
                return {
                    left,
                    top
                };
            }
            function getElementOffset(element) {
                var docElem, scrollLeftTop, doc = element && element.ownerDocument, box = {
                    left: 0,
                    top: 0
                }, offset = {
                    left: 0,
                    top: 0
                }, offsetAttributes = {
                    borderLeftWidth: "left",
                    borderTopWidth: "top",
                    paddingLeft: "left",
                    paddingTop: "top"
                };
                if (!doc) return offset;
                for (var attr in offsetAttributes) offset[offsetAttributes[attr]] += parseInt(getElementStyle(element, attr), 10) || 0;
                docElem = doc.documentElement;
                if (typeof element.getBoundingClientRect !== "undefined") box = element.getBoundingClientRect();
                scrollLeftTop = getScrollLeftTop(element);
                return {
                    left: box.left + scrollLeftTop.left - (docElem.clientLeft || 0) + offset.left,
                    top: box.top + scrollLeftTop.top - (docElem.clientTop || 0) + offset.top
                };
            }
            var getElementStyle;
            if (fabric.document.defaultView && fabric.document.defaultView.getComputedStyle) getElementStyle = function(element, attr) {
                var style = fabric.document.defaultView.getComputedStyle(element, null);
                return style ? style[attr] : void 0;
            }; else getElementStyle = function(element, attr) {
                var value = element.style[attr];
                if (!value && element.currentStyle) value = element.currentStyle[attr];
                return value;
            };
            (function() {
                var style = fabric.document.documentElement.style, selectProp = "userSelect" in style ? "userSelect" : "MozUserSelect" in style ? "MozUserSelect" : "WebkitUserSelect" in style ? "WebkitUserSelect" : "KhtmlUserSelect" in style ? "KhtmlUserSelect" : "";
                function makeElementUnselectable(element) {
                    if (typeof element.onselectstart !== "undefined") element.onselectstart = fabric.util.falseFunction;
                    if (selectProp) element.style[selectProp] = "none"; else if (typeof element.unselectable === "string") element.unselectable = "on";
                    return element;
                }
                function makeElementSelectable(element) {
                    if (typeof element.onselectstart !== "undefined") element.onselectstart = null;
                    if (selectProp) element.style[selectProp] = ""; else if (typeof element.unselectable === "string") element.unselectable = "";
                    return element;
                }
                fabric.util.makeElementUnselectable = makeElementUnselectable;
                fabric.util.makeElementSelectable = makeElementSelectable;
            })();
            function getNodeCanvas(element) {
                var impl = fabric.jsdomImplForWrapper(element);
                return impl._canvas || impl._image;
            }
            function cleanUpJsdomNode(element) {
                if (!fabric.isLikelyNode) return;
                var impl = fabric.jsdomImplForWrapper(element);
                if (impl) {
                    impl._image = null;
                    impl._canvas = null;
                    impl._currentSrc = null;
                    impl._attributes = null;
                    impl._classList = null;
                }
            }
            function setImageSmoothing(ctx, value) {
                ctx.imageSmoothingEnabled = ctx.imageSmoothingEnabled || ctx.webkitImageSmoothingEnabled || ctx.mozImageSmoothingEnabled || ctx.msImageSmoothingEnabled || ctx.oImageSmoothingEnabled;
                ctx.imageSmoothingEnabled = value;
            }
            fabric.util.setImageSmoothing = setImageSmoothing;
            fabric.util.getById = getById;
            fabric.util.toArray = toArray;
            fabric.util.addClass = addClass;
            fabric.util.makeElement = makeElement;
            fabric.util.wrapElement = wrapElement;
            fabric.util.getScrollLeftTop = getScrollLeftTop;
            fabric.util.getElementOffset = getElementOffset;
            fabric.util.getNodeCanvas = getNodeCanvas;
            fabric.util.cleanUpJsdomNode = cleanUpJsdomNode;
        })();
        (function() {
            function addParamToUrl(url, param) {
                return url + (/\?/.test(url) ? "&" : "?") + param;
            }
            function emptyFn() {}
            function request(url, options) {
                options || (options = {});
                var method = options.method ? options.method.toUpperCase() : "GET", onComplete = options.onComplete || function() {}, xhr = new fabric.window.XMLHttpRequest, body = options.body || options.parameters;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        onComplete(xhr);
                        xhr.onreadystatechange = emptyFn;
                    }
                };
                if (method === "GET") {
                    body = null;
                    if (typeof options.parameters === "string") url = addParamToUrl(url, options.parameters);
                }
                xhr.open(method, url, true);
                if (method === "POST" || method === "PUT") xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(body);
                return xhr;
            }
            fabric.util.request = request;
        })();
        fabric.log = console.log;
        fabric.warn = console.warn;
        (function() {
            function noop() {
                return false;
            }
            function defaultEasing(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            }
            function animate(options) {
                var cancel = false;
                requestAnimFrame((function(timestamp) {
                    options || (options = {});
                    var time, start = timestamp || +new Date, duration = options.duration || 500, finish = start + duration, onChange = options.onChange || noop, abort = options.abort || noop, onComplete = options.onComplete || noop, easing = options.easing || defaultEasing, startValue = "startValue" in options ? options.startValue : 0, endValue = "endValue" in options ? options.endValue : 100, byValue = options.byValue || endValue - startValue;
                    options.onStart && options.onStart();
                    (function tick(ticktime) {
                        time = ticktime || +new Date;
                        var currentTime = time > finish ? duration : time - start, timePerc = currentTime / duration, current = easing(currentTime, startValue, byValue, duration), valuePerc = Math.abs((current - startValue) / byValue);
                        if (cancel) return;
                        if (abort(current, valuePerc, timePerc)) {
                            onComplete(endValue, 1, 1);
                            return;
                        }
                        if (time > finish) {
                            onChange(endValue, 1, 1);
                            onComplete(endValue, 1, 1);
                            return;
                        } else {
                            onChange(current, valuePerc, timePerc);
                            requestAnimFrame(tick);
                        }
                    })(start);
                }));
                return function() {
                    cancel = true;
                };
            }
            var _requestAnimFrame = fabric.window.requestAnimationFrame || fabric.window.webkitRequestAnimationFrame || fabric.window.mozRequestAnimationFrame || fabric.window.oRequestAnimationFrame || fabric.window.msRequestAnimationFrame || function(callback) {
                return fabric.window.setTimeout(callback, 1e3 / 60);
            };
            var _cancelAnimFrame = fabric.window.cancelAnimationFrame || fabric.window.clearTimeout;
            function requestAnimFrame() {
                return _requestAnimFrame.apply(fabric.window, arguments);
            }
            function cancelAnimFrame() {
                return _cancelAnimFrame.apply(fabric.window, arguments);
            }
            fabric.util.animate = animate;
            fabric.util.requestAnimFrame = requestAnimFrame;
            fabric.util.cancelAnimFrame = cancelAnimFrame;
        })();
        (function() {
            function calculateColor(begin, end, pos) {
                var color = "rgba(" + parseInt(begin[0] + pos * (end[0] - begin[0]), 10) + "," + parseInt(begin[1] + pos * (end[1] - begin[1]), 10) + "," + parseInt(begin[2] + pos * (end[2] - begin[2]), 10);
                color += "," + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);
                color += ")";
                return color;
            }
            function animateColor(fromColor, toColor, duration, options) {
                var startColor = new fabric.Color(fromColor).getSource(), endColor = new fabric.Color(toColor).getSource(), originalOnComplete = options.onComplete, originalOnChange = options.onChange;
                options = options || {};
                return fabric.util.animate(fabric.util.object.extend(options, {
                    duration: duration || 500,
                    startValue: startColor,
                    endValue: endColor,
                    byValue: endColor,
                    easing: function(currentTime, startValue, byValue, duration) {
                        var posValue = options.colorEasing ? options.colorEasing(currentTime, duration) : 1 - Math.cos(currentTime / duration * (Math.PI / 2));
                        return calculateColor(startValue, byValue, posValue);
                    },
                    onComplete: function(current, valuePerc, timePerc) {
                        if (originalOnComplete) return originalOnComplete(calculateColor(endColor, endColor, 0), valuePerc, timePerc);
                    },
                    onChange: function(current, valuePerc, timePerc) {
                        if (originalOnChange) {
                            if (Array.isArray(current)) return originalOnChange(calculateColor(current, current, 0), valuePerc, timePerc);
                            originalOnChange(current, valuePerc, timePerc);
                        }
                    }
                }));
            }
            fabric.util.animateColor = animateColor;
        })();
        (function() {
            function normalize(a, c, p, s) {
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else if (c === 0 && a === 0) s = p / (2 * Math.PI) * Math.asin(1); else s = p / (2 * Math.PI) * Math.asin(c / a);
                return {
                    a,
                    c,
                    p,
                    s
                };
            }
            function elastic(opts, t, d) {
                return opts.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p);
            }
            function easeOutCubic(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            }
            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
            function easeInQuart(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            }
            function easeOutQuart(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            }
            function easeInOutQuart(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
            function easeInQuint(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            }
            function easeOutQuint(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            }
            function easeInOutQuint(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
            function easeInSine(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            }
            function easeOutSine(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            }
            function easeInOutSine(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
            function easeInExpo(t, b, c, d) {
                return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            }
            function easeOutExpo(t, b, c, d) {
                return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            }
            function easeInOutExpo(t, b, c, d) {
                if (t === 0) return b;
                if (t === d) return b + c;
                t /= d / 2;
                if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
            function easeInCirc(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            }
            function easeOutCirc(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            }
            function easeInOutCirc(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
            function easeInElastic(t, b, c, d) {
                var s = 1.70158, p = 0, a = c;
                if (t === 0) return b;
                t /= d;
                if (t === 1) return b + c;
                if (!p) p = d * .3;
                var opts = normalize(a, c, p, s);
                return -elastic(opts, t, d) + b;
            }
            function easeOutElastic(t, b, c, d) {
                var s = 1.70158, p = 0, a = c;
                if (t === 0) return b;
                t /= d;
                if (t === 1) return b + c;
                if (!p) p = d * .3;
                var opts = normalize(a, c, p, s);
                return opts.a * Math.pow(2, -10 * t) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p) + opts.c + b;
            }
            function easeInOutElastic(t, b, c, d) {
                var s = 1.70158, p = 0, a = c;
                if (t === 0) return b;
                t /= d / 2;
                if (t === 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                var opts = normalize(a, c, p, s);
                if (t < 1) return -.5 * elastic(opts, t, d) + b;
                return opts.a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p) * .5 + opts.c + b;
            }
            function easeInBack(t, b, c, d, s) {
                if (s === void 0) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            }
            function easeOutBack(t, b, c, d, s) {
                if (s === void 0) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            }
            function easeInOutBack(t, b, c, d, s) {
                if (s === void 0) s = 1.70158;
                t /= d / 2;
                if (t < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            }
            function easeInBounce(t, b, c, d) {
                return c - easeOutBounce(d - t, 0, c, d) + b;
            }
            function easeOutBounce(t, b, c, d) {
                if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b; else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b; else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b; else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
            function easeInOutBounce(t, b, c, d) {
                if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * .5 + b;
                return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
            fabric.util.ease = {
                easeInQuad: function(t, b, c, d) {
                    return c * (t /= d) * t + b;
                },
                easeOutQuad: function(t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                },
                easeInOutQuad: function(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    return -c / 2 * (--t * (t - 2) - 1) + b;
                },
                easeInCubic: function(t, b, c, d) {
                    return c * (t /= d) * t * t + b;
                },
                easeOutCubic,
                easeInOutCubic,
                easeInQuart,
                easeOutQuart,
                easeInOutQuart,
                easeInQuint,
                easeOutQuint,
                easeInOutQuint,
                easeInSine,
                easeOutSine,
                easeInOutSine,
                easeInExpo,
                easeOutExpo,
                easeInOutExpo,
                easeInCirc,
                easeOutCirc,
                easeInOutCirc,
                easeInElastic,
                easeOutElastic,
                easeInOutElastic,
                easeInBack,
                easeOutBack,
                easeInOutBack,
                easeInBounce,
                easeOutBounce,
                easeInOutBounce
            };
        })();
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, clone = fabric.util.object.clone, toFixed = fabric.util.toFixed, parseUnit = fabric.util.parseUnit, multiplyTransformMatrices = fabric.util.multiplyTransformMatrices, svgValidTagNames = [ "path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text" ], svgViewBoxElements = [ "symbol", "image", "marker", "pattern", "view", "svg" ], svgInvalidAncestors = [ "pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc" ], svgValidParents = [ "symbol", "g", "a", "svg", "clipPath", "defs" ], attributesMap = {
                cx: "left",
                x: "left",
                r: "radius",
                cy: "top",
                y: "top",
                display: "visible",
                visibility: "visible",
                transform: "transformMatrix",
                "fill-opacity": "fillOpacity",
                "fill-rule": "fillRule",
                "font-family": "fontFamily",
                "font-size": "fontSize",
                "font-style": "fontStyle",
                "font-weight": "fontWeight",
                "letter-spacing": "charSpacing",
                "paint-order": "paintFirst",
                "stroke-dasharray": "strokeDashArray",
                "stroke-dashoffset": "strokeDashOffset",
                "stroke-linecap": "strokeLineCap",
                "stroke-linejoin": "strokeLineJoin",
                "stroke-miterlimit": "strokeMiterLimit",
                "stroke-opacity": "strokeOpacity",
                "stroke-width": "strokeWidth",
                "text-decoration": "textDecoration",
                "text-anchor": "textAnchor",
                opacity: "opacity",
                "clip-path": "clipPath",
                "clip-rule": "clipRule",
                "vector-effect": "strokeUniform",
                "image-rendering": "imageSmoothing"
            }, colorAttributes = {
                stroke: "strokeOpacity",
                fill: "fillOpacity"
            }, fSize = "font-size", cPath = "clip-path";
            fabric.svgValidTagNamesRegEx = getSvgRegex(svgValidTagNames);
            fabric.svgViewBoxElementsRegEx = getSvgRegex(svgViewBoxElements);
            fabric.svgInvalidAncestorsRegEx = getSvgRegex(svgInvalidAncestors);
            fabric.svgValidParentsRegEx = getSvgRegex(svgValidParents);
            fabric.cssRules = {};
            fabric.gradientDefs = {};
            fabric.clipPaths = {};
            function normalizeAttr(attr) {
                if (attr in attributesMap) return attributesMap[attr];
                return attr;
            }
            function normalizeValue(attr, value, parentAttributes, fontSize) {
                var parsed, isArray = Object.prototype.toString.call(value) === "[object Array]";
                if ((attr === "fill" || attr === "stroke") && value === "none") value = ""; else if (attr === "strokeUniform") return value === "non-scaling-stroke"; else if (attr === "strokeDashArray") if (value === "none") value = null; else value = value.replace(/,/g, " ").split(/\s+/).map(parseFloat); else if (attr === "transformMatrix") if (parentAttributes && parentAttributes.transformMatrix) value = multiplyTransformMatrices(parentAttributes.transformMatrix, fabric.parseTransformAttribute(value)); else value = fabric.parseTransformAttribute(value); else if (attr === "visible") {
                    value = value !== "none" && value !== "hidden";
                    if (parentAttributes && parentAttributes.visible === false) value = false;
                } else if (attr === "opacity") {
                    value = parseFloat(value);
                    if (parentAttributes && typeof parentAttributes.opacity !== "undefined") value *= parentAttributes.opacity;
                } else if (attr === "textAnchor") value = value === "start" ? "left" : value === "end" ? "right" : "center"; else if (attr === "charSpacing") parsed = parseUnit(value, fontSize) / fontSize * 1e3; else if (attr === "paintFirst") {
                    var fillIndex = value.indexOf("fill");
                    var strokeIndex = value.indexOf("stroke");
                    value = "fill";
                    if (fillIndex > -1 && strokeIndex > -1 && strokeIndex < fillIndex) value = "stroke"; else if (fillIndex === -1 && strokeIndex > -1) value = "stroke";
                } else if (attr === "href" || attr === "xlink:href" || attr === "font") return value; else if (attr === "imageSmoothing") return value === "optimizeQuality"; else parsed = isArray ? value.map(parseUnit) : parseUnit(value, fontSize);
                return !isArray && isNaN(parsed) ? value : parsed;
            }
            function getSvgRegex(arr) {
                return new RegExp("^(" + arr.join("|") + ")\\b", "i");
            }
            function _setStrokeFillOpacity(attributes) {
                for (var attr in colorAttributes) {
                    if (typeof attributes[colorAttributes[attr]] === "undefined" || attributes[attr] === "") continue;
                    if (typeof attributes[attr] === "undefined") {
                        if (!fabric.Object.prototype[attr]) continue;
                        attributes[attr] = fabric.Object.prototype[attr];
                    }
                    if (attributes[attr].indexOf("url(") === 0) continue;
                    var color = new fabric.Color(attributes[attr]);
                    attributes[attr] = color.setAlpha(toFixed(color.getAlpha() * attributes[colorAttributes[attr]], 2)).toRgba();
                }
                return attributes;
            }
            function _getMultipleNodes(doc, nodeNames) {
                var nodeName, nodeList, i, len, nodeArray = [];
                for (i = 0, len = nodeNames.length; i < len; i++) {
                    nodeName = nodeNames[i];
                    nodeList = doc.getElementsByTagName(nodeName);
                    nodeArray = nodeArray.concat(Array.prototype.slice.call(nodeList));
                }
                return nodeArray;
            }
            fabric.parseTransformAttribute = function() {
                function rotateMatrix(matrix, args) {
                    var cos = fabric.util.cos(args[0]), sin = fabric.util.sin(args[0]), x = 0, y = 0;
                    if (args.length === 3) {
                        x = args[1];
                        y = args[2];
                    }
                    matrix[0] = cos;
                    matrix[1] = sin;
                    matrix[2] = -sin;
                    matrix[3] = cos;
                    matrix[4] = x - (cos * x - sin * y);
                    matrix[5] = y - (sin * x + cos * y);
                }
                function scaleMatrix(matrix, args) {
                    var multiplierX = args[0], multiplierY = args.length === 2 ? args[1] : args[0];
                    matrix[0] = multiplierX;
                    matrix[3] = multiplierY;
                }
                function skewMatrix(matrix, args, pos) {
                    matrix[pos] = Math.tan(fabric.util.degreesToRadians(args[0]));
                }
                function translateMatrix(matrix, args) {
                    matrix[4] = args[0];
                    if (args.length === 2) matrix[5] = args[1];
                }
                var iMatrix = fabric.iMatrix, number = fabric.reNum, commaWsp = fabric.commaWsp, skewX = "(?:(skewX)\\s*\\(\\s*(" + number + ")\\s*\\))", skewY = "(?:(skewY)\\s*\\(\\s*(" + number + ")\\s*\\))", rotate = "(?:(rotate)\\s*\\(\\s*(" + number + ")(?:" + commaWsp + "(" + number + ")" + commaWsp + "(" + number + "))?\\s*\\))", scale = "(?:(scale)\\s*\\(\\s*(" + number + ")(?:" + commaWsp + "(" + number + "))?\\s*\\))", translate = "(?:(translate)\\s*\\(\\s*(" + number + ")(?:" + commaWsp + "(" + number + "))?\\s*\\))", matrix = "(?:(matrix)\\s*\\(\\s*" + "(" + number + ")" + commaWsp + "(" + number + ")" + commaWsp + "(" + number + ")" + commaWsp + "(" + number + ")" + commaWsp + "(" + number + ")" + commaWsp + "(" + number + ")" + "\\s*\\))", transform = "(?:" + matrix + "|" + translate + "|" + scale + "|" + rotate + "|" + skewX + "|" + skewY + ")", transforms = "(?:" + transform + "(?:" + commaWsp + "*" + transform + ")*" + ")", transformList = "^\\s*(?:" + transforms + "?)\\s*$", reTransformList = new RegExp(transformList), reTransform = new RegExp(transform, "g");
                return function(attributeValue) {
                    var matrix = iMatrix.concat(), matrices = [];
                    if (!attributeValue || attributeValue && !reTransformList.test(attributeValue)) return matrix;
                    attributeValue.replace(reTransform, (function(match) {
                        var m = new RegExp(transform).exec(match).filter((function(match) {
                            return !!match;
                        })), operation = m[1], args = m.slice(2).map(parseFloat);
                        switch (operation) {
                          case "translate":
                            translateMatrix(matrix, args);
                            break;

                          case "rotate":
                            args[0] = fabric.util.degreesToRadians(args[0]);
                            rotateMatrix(matrix, args);
                            break;

                          case "scale":
                            scaleMatrix(matrix, args);
                            break;

                          case "skewX":
                            skewMatrix(matrix, args, 2);
                            break;

                          case "skewY":
                            skewMatrix(matrix, args, 1);
                            break;

                          case "matrix":
                            matrix = args;
                            break;
                        }
                        matrices.push(matrix.concat());
                        matrix = iMatrix.concat();
                    }));
                    var combinedMatrix = matrices[0];
                    while (matrices.length > 1) {
                        matrices.shift();
                        combinedMatrix = fabric.util.multiplyTransformMatrices(combinedMatrix, matrices[0]);
                    }
                    return combinedMatrix;
                };
            }();
            function parseStyleString(style, oStyle) {
                var attr, value;
                style.replace(/;\s*$/, "").split(";").forEach((function(chunk) {
                    var pair = chunk.split(":");
                    attr = pair[0].trim().toLowerCase();
                    value = pair[1].trim();
                    oStyle[attr] = value;
                }));
            }
            function parseStyleObject(style, oStyle) {
                var attr, value;
                for (var prop in style) {
                    if (typeof style[prop] === "undefined") continue;
                    attr = prop.toLowerCase();
                    value = style[prop];
                    oStyle[attr] = value;
                }
            }
            function getGlobalStylesForElement(element, svgUid) {
                var styles = {};
                for (var rule in fabric.cssRules[svgUid]) if (elementMatchesRule(element, rule.split(" "))) for (var property in fabric.cssRules[svgUid][rule]) styles[property] = fabric.cssRules[svgUid][rule][property];
                return styles;
            }
            function elementMatchesRule(element, selectors) {
                var firstMatching, parentMatching = true;
                firstMatching = selectorMatches(element, selectors.pop());
                if (firstMatching && selectors.length) parentMatching = doesSomeParentMatch(element, selectors);
                return firstMatching && parentMatching && selectors.length === 0;
            }
            function doesSomeParentMatch(element, selectors) {
                var selector, parentMatching = true;
                while (element.parentNode && element.parentNode.nodeType === 1 && selectors.length) {
                    if (parentMatching) selector = selectors.pop();
                    element = element.parentNode;
                    parentMatching = selectorMatches(element, selector);
                }
                return selectors.length === 0;
            }
            function selectorMatches(element, selector) {
                var matcher, i, nodeName = element.nodeName, classNames = element.getAttribute("class"), id = element.getAttribute("id");
                matcher = new RegExp("^" + nodeName, "i");
                selector = selector.replace(matcher, "");
                if (id && selector.length) {
                    matcher = new RegExp("#" + id + "(?![a-zA-Z\\-]+)", "i");
                    selector = selector.replace(matcher, "");
                }
                if (classNames && selector.length) {
                    classNames = classNames.split(" ");
                    for (i = classNames.length; i--; ) {
                        matcher = new RegExp("\\." + classNames[i] + "(?![a-zA-Z\\-]+)", "i");
                        selector = selector.replace(matcher, "");
                    }
                }
                return selector.length === 0;
            }
            function elementById(doc, id) {
                var el;
                doc.getElementById && (el = doc.getElementById(id));
                if (el) return el;
                var node, i, len, nodelist = doc.getElementsByTagName("*");
                for (i = 0, len = nodelist.length; i < len; i++) {
                    node = nodelist[i];
                    if (id === node.getAttribute("id")) return node;
                }
            }
            function parseUseDirectives(doc) {
                var nodelist = _getMultipleNodes(doc, [ "use", "svg:use" ]), i = 0;
                while (nodelist.length && i < nodelist.length) {
                    var el = nodelist[i], xlinkAttribute = el.getAttribute("xlink:href") || el.getAttribute("href");
                    if (xlinkAttribute === null) return;
                    var parentNode, attr, j, attrs, len, xlink = xlinkAttribute.substr(1), x = el.getAttribute("x") || 0, y = el.getAttribute("y") || 0, el2 = elementById(doc, xlink).cloneNode(true), currentTrans = (el2.getAttribute("transform") || "") + " translate(" + x + ", " + y + ")", oldLength = nodelist.length, namespace = fabric.svgNS;
                    applyViewboxTransform(el2);
                    if (/^svg$/i.test(el2.nodeName)) {
                        var el3 = el2.ownerDocument.createElementNS(namespace, "g");
                        for (j = 0, attrs = el2.attributes, len = attrs.length; j < len; j++) {
                            attr = attrs.item(j);
                            el3.setAttributeNS(namespace, attr.nodeName, attr.nodeValue);
                        }
                        while (el2.firstChild) el3.appendChild(el2.firstChild);
                        el2 = el3;
                    }
                    for (j = 0, attrs = el.attributes, len = attrs.length; j < len; j++) {
                        attr = attrs.item(j);
                        if (attr.nodeName === "x" || attr.nodeName === "y" || attr.nodeName === "xlink:href" || attr.nodeName === "href") continue;
                        if (attr.nodeName === "transform") currentTrans = attr.nodeValue + " " + currentTrans; else el2.setAttribute(attr.nodeName, attr.nodeValue);
                    }
                    el2.setAttribute("transform", currentTrans);
                    el2.setAttribute("instantiated_by_use", "1");
                    el2.removeAttribute("id");
                    parentNode = el.parentNode;
                    parentNode.replaceChild(el2, el);
                    if (nodelist.length === oldLength) i++;
                }
            }
            var reViewBoxAttrValue = new RegExp("^" + "\\s*(" + fabric.reNum + "+)\\s*,?" + "\\s*(" + fabric.reNum + "+)\\s*,?" + "\\s*(" + fabric.reNum + "+)\\s*,?" + "\\s*(" + fabric.reNum + "+)\\s*" + "$");
            function applyViewboxTransform(element) {
                if (!fabric.svgViewBoxElementsRegEx.test(element.nodeName)) return {};
                var viewBoxWidth, viewBoxHeight, matrix, el, viewBoxAttr = element.getAttribute("viewBox"), scaleX = 1, scaleY = 1, minX = 0, minY = 0, widthAttr = element.getAttribute("width"), heightAttr = element.getAttribute("height"), x = element.getAttribute("x") || 0, y = element.getAttribute("y") || 0, preserveAspectRatio = element.getAttribute("preserveAspectRatio") || "", missingViewBox = !viewBoxAttr || !(viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue)), missingDimAttr = !widthAttr || !heightAttr || widthAttr === "100%" || heightAttr === "100%", toBeParsed = missingViewBox && missingDimAttr, parsedDim = {}, translateMatrix = "", widthDiff = 0, heightDiff = 0;
                parsedDim.width = 0;
                parsedDim.height = 0;
                parsedDim.toBeParsed = toBeParsed;
                if (missingViewBox) if ((x || y) && element.parentNode && element.parentNode.nodeName !== "#document") {
                    translateMatrix = " translate(" + parseUnit(x) + " " + parseUnit(y) + ") ";
                    matrix = (element.getAttribute("transform") || "") + translateMatrix;
                    element.setAttribute("transform", matrix);
                    element.removeAttribute("x");
                    element.removeAttribute("y");
                }
                if (toBeParsed) return parsedDim;
                if (missingViewBox) {
                    parsedDim.width = parseUnit(widthAttr);
                    parsedDim.height = parseUnit(heightAttr);
                    return parsedDim;
                }
                minX = -parseFloat(viewBoxAttr[1]);
                minY = -parseFloat(viewBoxAttr[2]);
                viewBoxWidth = parseFloat(viewBoxAttr[3]);
                viewBoxHeight = parseFloat(viewBoxAttr[4]);
                parsedDim.minX = minX;
                parsedDim.minY = minY;
                parsedDim.viewBoxWidth = viewBoxWidth;
                parsedDim.viewBoxHeight = viewBoxHeight;
                if (!missingDimAttr) {
                    parsedDim.width = parseUnit(widthAttr);
                    parsedDim.height = parseUnit(heightAttr);
                    scaleX = parsedDim.width / viewBoxWidth;
                    scaleY = parsedDim.height / viewBoxHeight;
                } else {
                    parsedDim.width = viewBoxWidth;
                    parsedDim.height = viewBoxHeight;
                }
                preserveAspectRatio = fabric.util.parsePreserveAspectRatioAttribute(preserveAspectRatio);
                if (preserveAspectRatio.alignX !== "none") {
                    if (preserveAspectRatio.meetOrSlice === "meet") scaleY = scaleX = scaleX > scaleY ? scaleY : scaleX;
                    if (preserveAspectRatio.meetOrSlice === "slice") scaleY = scaleX = scaleX > scaleY ? scaleX : scaleY;
                    widthDiff = parsedDim.width - viewBoxWidth * scaleX;
                    heightDiff = parsedDim.height - viewBoxHeight * scaleX;
                    if (preserveAspectRatio.alignX === "Mid") widthDiff /= 2;
                    if (preserveAspectRatio.alignY === "Mid") heightDiff /= 2;
                    if (preserveAspectRatio.alignX === "Min") widthDiff = 0;
                    if (preserveAspectRatio.alignY === "Min") heightDiff = 0;
                }
                if (scaleX === 1 && scaleY === 1 && minX === 0 && minY === 0 && x === 0 && y === 0) return parsedDim;
                if ((x || y) && element.parentNode.nodeName !== "#document") translateMatrix = " translate(" + parseUnit(x) + " " + parseUnit(y) + ") ";
                matrix = translateMatrix + " matrix(" + scaleX + " 0" + " 0 " + scaleY + " " + (minX * scaleX + widthDiff) + " " + (minY * scaleY + heightDiff) + ") ";
                if (element.nodeName === "svg") {
                    el = element.ownerDocument.createElementNS(fabric.svgNS, "g");
                    while (element.firstChild) el.appendChild(element.firstChild);
                    element.appendChild(el);
                } else {
                    el = element;
                    el.removeAttribute("x");
                    el.removeAttribute("y");
                    matrix = el.getAttribute("transform") + matrix;
                }
                el.setAttribute("transform", matrix);
                return parsedDim;
            }
            function hasAncestorWithNodeName(element, nodeName) {
                while (element && (element = element.parentNode)) if (element.nodeName && nodeName.test(element.nodeName.replace("svg:", "")) && !element.getAttribute("instantiated_by_use")) return true;
                return false;
            }
            fabric.parseSVGDocument = function(doc, callback, reviver, parsingOptions) {
                if (!doc) return;
                parseUseDirectives(doc);
                var i, len, svgUid = fabric.Object.__uid++, options = applyViewboxTransform(doc), descendants = fabric.util.toArray(doc.getElementsByTagName("*"));
                options.crossOrigin = parsingOptions && parsingOptions.crossOrigin;
                options.svgUid = svgUid;
                if (descendants.length === 0 && fabric.isLikelyNode) {
                    descendants = doc.selectNodes('//*[name(.)!="svg"]');
                    var arr = [];
                    for (i = 0, len = descendants.length; i < len; i++) arr[i] = descendants[i];
                    descendants = arr;
                }
                var elements = descendants.filter((function(el) {
                    applyViewboxTransform(el);
                    return fabric.svgValidTagNamesRegEx.test(el.nodeName.replace("svg:", "")) && !hasAncestorWithNodeName(el, fabric.svgInvalidAncestorsRegEx);
                }));
                if (!elements || elements && !elements.length) {
                    callback && callback([], {});
                    return;
                }
                var clipPaths = {};
                descendants.filter((function(el) {
                    return el.nodeName.replace("svg:", "") === "clipPath";
                })).forEach((function(el) {
                    var id = el.getAttribute("id");
                    clipPaths[id] = fabric.util.toArray(el.getElementsByTagName("*")).filter((function(el) {
                        return fabric.svgValidTagNamesRegEx.test(el.nodeName.replace("svg:", ""));
                    }));
                }));
                fabric.gradientDefs[svgUid] = fabric.getGradientDefs(doc);
                fabric.cssRules[svgUid] = fabric.getCSSRules(doc);
                fabric.clipPaths[svgUid] = clipPaths;
                fabric.parseElements(elements, (function(instances, elements) {
                    if (callback) {
                        callback(instances, options, elements, descendants);
                        delete fabric.gradientDefs[svgUid];
                        delete fabric.cssRules[svgUid];
                        delete fabric.clipPaths[svgUid];
                    }
                }), clone(options), reviver, parsingOptions);
            };
            function recursivelyParseGradientsXlink(doc, gradient) {
                var gradientsAttrs = [ "gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy" ], xlinkAttr = "xlink:href", xLink = gradient.getAttribute(xlinkAttr).substr(1), referencedGradient = elementById(doc, xLink);
                if (referencedGradient && referencedGradient.getAttribute(xlinkAttr)) recursivelyParseGradientsXlink(doc, referencedGradient);
                gradientsAttrs.forEach((function(attr) {
                    if (referencedGradient && !gradient.hasAttribute(attr) && referencedGradient.hasAttribute(attr)) gradient.setAttribute(attr, referencedGradient.getAttribute(attr));
                }));
                if (!gradient.children.length) {
                    var referenceClone = referencedGradient.cloneNode(true);
                    while (referenceClone.firstChild) gradient.appendChild(referenceClone.firstChild);
                }
                gradient.removeAttribute(xlinkAttr);
            }
            var reFontDeclaration = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*" + "(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + fabric.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + fabric.reNum + "))?\\s+(.*)");
            extend(fabric, {
                parseFontDeclaration: function(value, oStyle) {
                    var match = value.match(reFontDeclaration);
                    if (!match) return;
                    var fontStyle = match[1], fontWeight = match[3], fontSize = match[4], lineHeight = match[5], fontFamily = match[6];
                    if (fontStyle) oStyle.fontStyle = fontStyle;
                    if (fontWeight) oStyle.fontWeight = isNaN(parseFloat(fontWeight)) ? fontWeight : parseFloat(fontWeight);
                    if (fontSize) oStyle.fontSize = parseUnit(fontSize);
                    if (fontFamily) oStyle.fontFamily = fontFamily;
                    if (lineHeight) oStyle.lineHeight = lineHeight === "normal" ? 1 : lineHeight;
                },
                getGradientDefs: function(doc) {
                    var el, tagArray = [ "linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient" ], elList = _getMultipleNodes(doc, tagArray), j = 0, gradientDefs = {};
                    j = elList.length;
                    while (j--) {
                        el = elList[j];
                        if (el.getAttribute("xlink:href")) recursivelyParseGradientsXlink(doc, el);
                        gradientDefs[el.getAttribute("id")] = el;
                    }
                    return gradientDefs;
                },
                parseAttributes: function(element, attributes, svgUid) {
                    if (!element) return;
                    var value, fontSize, parentFontSize, parentAttributes = {};
                    if (typeof svgUid === "undefined") svgUid = element.getAttribute("svgUid");
                    if (element.parentNode && fabric.svgValidParentsRegEx.test(element.parentNode.nodeName)) parentAttributes = fabric.parseAttributes(element.parentNode, attributes, svgUid);
                    var ownAttributes = attributes.reduce((function(memo, attr) {
                        value = element.getAttribute(attr);
                        if (value) memo[attr] = value;
                        return memo;
                    }), {});
                    var cssAttrs = extend(getGlobalStylesForElement(element, svgUid), fabric.parseStyleAttribute(element));
                    ownAttributes = extend(ownAttributes, cssAttrs);
                    if (cssAttrs[cPath]) element.setAttribute(cPath, cssAttrs[cPath]);
                    fontSize = parentFontSize = parentAttributes.fontSize || fabric.Text.DEFAULT_SVG_FONT_SIZE;
                    if (ownAttributes[fSize]) ownAttributes[fSize] = fontSize = parseUnit(ownAttributes[fSize], parentFontSize);
                    var normalizedAttr, normalizedValue, normalizedStyle = {};
                    for (var attr in ownAttributes) {
                        normalizedAttr = normalizeAttr(attr);
                        normalizedValue = normalizeValue(normalizedAttr, ownAttributes[attr], parentAttributes, fontSize);
                        normalizedStyle[normalizedAttr] = normalizedValue;
                    }
                    if (normalizedStyle && normalizedStyle.font) fabric.parseFontDeclaration(normalizedStyle.font, normalizedStyle);
                    var mergedAttrs = extend(parentAttributes, normalizedStyle);
                    return fabric.svgValidParentsRegEx.test(element.nodeName) ? mergedAttrs : _setStrokeFillOpacity(mergedAttrs);
                },
                parseElements: function(elements, callback, options, reviver, parsingOptions) {
                    new fabric.ElementsParser(elements, callback, options, reviver, parsingOptions).parse();
                },
                parseStyleAttribute: function(element) {
                    var oStyle = {}, style = element.getAttribute("style");
                    if (!style) return oStyle;
                    if (typeof style === "string") parseStyleString(style, oStyle); else parseStyleObject(style, oStyle);
                    return oStyle;
                },
                parsePointsAttribute: function(points) {
                    if (!points) return null;
                    points = points.replace(/,/g, " ").trim();
                    points = points.split(/\s+/);
                    var i, len, parsedPoints = [];
                    for (i = 0, len = points.length; i < len; i += 2) parsedPoints.push({
                        x: parseFloat(points[i]),
                        y: parseFloat(points[i + 1])
                    });
                    return parsedPoints;
                },
                getCSSRules: function(doc) {
                    var i, len, rules, styles = doc.getElementsByTagName("style"), allRules = {};
                    for (i = 0, len = styles.length; i < len; i++) {
                        var styleContents = styles[i].textContent;
                        styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, "");
                        if (styleContents.trim() === "") continue;
                        rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
                        rules = rules.map((function(rule) {
                            return rule.trim();
                        }));
                        rules.forEach((function(rule) {
                            var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/), ruleObj = {}, declaration = match[2].trim(), propertyValuePairs = declaration.replace(/;$/, "").split(/\s*;\s*/);
                            for (i = 0, len = propertyValuePairs.length; i < len; i++) {
                                var pair = propertyValuePairs[i].split(/\s*:\s*/), property = pair[0], value = pair[1];
                                ruleObj[property] = value;
                            }
                            rule = match[1];
                            rule.split(",").forEach((function(_rule) {
                                _rule = _rule.replace(/^svg/i, "").trim();
                                if (_rule === "") return;
                                if (allRules[_rule]) fabric.util.object.extend(allRules[_rule], ruleObj); else allRules[_rule] = fabric.util.object.clone(ruleObj);
                            }));
                        }));
                    }
                    return allRules;
                },
                loadSVGFromURL: function(url, callback, reviver, options) {
                    url = url.replace(/^\n\s*/, "").trim();
                    new fabric.util.request(url, {
                        method: "get",
                        onComplete
                    });
                    function onComplete(r) {
                        var xml = r.responseXML;
                        if (!xml || !xml.documentElement) {
                            callback && callback(null);
                            return false;
                        }
                        fabric.parseSVGDocument(xml.documentElement, (function(results, _options, elements, allElements) {
                            callback && callback(results, _options, elements, allElements);
                        }), reviver, options);
                    }
                },
                loadSVGFromString: function(string, callback, reviver, options) {
                    var parser = new fabric.window.DOMParser, doc = parser.parseFromString(string.trim(), "text/xml");
                    fabric.parseSVGDocument(doc.documentElement, (function(results, _options, elements, allElements) {
                        callback(results, _options, elements, allElements);
                    }), reviver, options);
                }
            });
        })(true ? exports : 0);
        fabric.ElementsParser = function(elements, callback, options, reviver, parsingOptions, doc) {
            this.elements = elements;
            this.callback = callback;
            this.options = options;
            this.reviver = reviver;
            this.svgUid = options && options.svgUid || 0;
            this.parsingOptions = parsingOptions;
            this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g;
            this.doc = doc;
        };
        (function(proto) {
            proto.parse = function() {
                this.instances = new Array(this.elements.length);
                this.numElements = this.elements.length;
                this.createObjects();
            };
            proto.createObjects = function() {
                var _this = this;
                this.elements.forEach((function(element, i) {
                    element.setAttribute("svgUid", _this.svgUid);
                    _this.createObject(element, i);
                }));
            };
            proto.findTag = function(el) {
                return fabric[fabric.util.string.capitalize(el.tagName.replace("svg:", ""))];
            };
            proto.createObject = function(el, index) {
                var klass = this.findTag(el);
                if (klass && klass.fromElement) try {
                    klass.fromElement(el, this.createCallback(index, el), this.options);
                } catch (err) {
                    fabric.log(err);
                } else this.checkIfDone();
            };
            proto.createCallback = function(index, el) {
                var _this = this;
                return function(obj) {
                    var _options;
                    _this.resolveGradient(obj, el, "fill");
                    _this.resolveGradient(obj, el, "stroke");
                    if (obj instanceof fabric.Image && obj._originalElement) _options = obj.parsePreserveAspectRatioAttribute(el);
                    obj._removeTransformMatrix(_options);
                    _this.resolveClipPath(obj, el);
                    _this.reviver && _this.reviver(el, obj);
                    _this.instances[index] = obj;
                    _this.checkIfDone();
                };
            };
            proto.extractPropertyDefinition = function(obj, property, storage) {
                var value = obj[property], regex = this.regexUrl;
                if (!regex.test(value)) return;
                regex.lastIndex = 0;
                var id = regex.exec(value)[1];
                regex.lastIndex = 0;
                return fabric[storage][this.svgUid][id];
            };
            proto.resolveGradient = function(obj, el, property) {
                var gradientDef = this.extractPropertyDefinition(obj, property, "gradientDefs");
                if (gradientDef) {
                    var opacityAttr = el.getAttribute(property + "-opacity");
                    var gradient = fabric.Gradient.fromElement(gradientDef, obj, opacityAttr, this.options);
                    obj.set(property, gradient);
                }
            };
            proto.createClipPathCallback = function(obj, container) {
                return function(_newObj) {
                    _newObj._removeTransformMatrix();
                    _newObj.fillRule = _newObj.clipRule;
                    container.push(_newObj);
                };
            };
            proto.resolveClipPath = function(obj, usingElement) {
                var element, klass, objTransformInv, container, gTransform, clipPath = this.extractPropertyDefinition(obj, "clipPath", "clipPaths");
                if (clipPath) {
                    container = [];
                    objTransformInv = fabric.util.invertTransform(obj.calcTransformMatrix());
                    var clipPathTag = clipPath[0].parentNode;
                    var clipPathOwner = usingElement;
                    while (clipPathOwner.parentNode && clipPathOwner.getAttribute("clip-path") !== obj.clipPath) clipPathOwner = clipPathOwner.parentNode;
                    clipPathOwner.parentNode.appendChild(clipPathTag);
                    for (var i = 0; i < clipPath.length; i++) {
                        element = clipPath[i];
                        klass = this.findTag(element);
                        klass.fromElement(element, this.createClipPathCallback(obj, container), this.options);
                    }
                    if (container.length === 1) clipPath = container[0]; else clipPath = new fabric.Group(container);
                    gTransform = fabric.util.multiplyTransformMatrices(objTransformInv, clipPath.calcTransformMatrix());
                    if (clipPath.clipPath) this.resolveClipPath(clipPath, clipPathOwner);
                    var options = fabric.util.qrDecompose(gTransform);
                    clipPath.flipX = false;
                    clipPath.flipY = false;
                    clipPath.set("scaleX", options.scaleX);
                    clipPath.set("scaleY", options.scaleY);
                    clipPath.angle = options.angle;
                    clipPath.skewX = options.skewX;
                    clipPath.skewY = 0;
                    clipPath.setPositionByOrigin({
                        x: options.translateX,
                        y: options.translateY
                    }, "center", "center");
                    obj.clipPath = clipPath;
                } else delete obj.clipPath;
            };
            proto.checkIfDone = function() {
                if (--this.numElements === 0) {
                    this.instances = this.instances.filter((function(el) {
                        return el != null;
                    }));
                    this.callback(this.instances, this.elements);
                }
            };
        })(fabric.ElementsParser.prototype);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.Point) {
                fabric.warn("fabric.Point is already defined");
                return;
            }
            fabric.Point = Point;
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype = {
                type: "point",
                constructor: Point,
                add: function(that) {
                    return new Point(this.x + that.x, this.y + that.y);
                },
                addEquals: function(that) {
                    this.x += that.x;
                    this.y += that.y;
                    return this;
                },
                scalarAdd: function(scalar) {
                    return new Point(this.x + scalar, this.y + scalar);
                },
                scalarAddEquals: function(scalar) {
                    this.x += scalar;
                    this.y += scalar;
                    return this;
                },
                subtract: function(that) {
                    return new Point(this.x - that.x, this.y - that.y);
                },
                subtractEquals: function(that) {
                    this.x -= that.x;
                    this.y -= that.y;
                    return this;
                },
                scalarSubtract: function(scalar) {
                    return new Point(this.x - scalar, this.y - scalar);
                },
                scalarSubtractEquals: function(scalar) {
                    this.x -= scalar;
                    this.y -= scalar;
                    return this;
                },
                multiply: function(scalar) {
                    return new Point(this.x * scalar, this.y * scalar);
                },
                multiplyEquals: function(scalar) {
                    this.x *= scalar;
                    this.y *= scalar;
                    return this;
                },
                divide: function(scalar) {
                    return new Point(this.x / scalar, this.y / scalar);
                },
                divideEquals: function(scalar) {
                    this.x /= scalar;
                    this.y /= scalar;
                    return this;
                },
                eq: function(that) {
                    return this.x === that.x && this.y === that.y;
                },
                lt: function(that) {
                    return this.x < that.x && this.y < that.y;
                },
                lte: function(that) {
                    return this.x <= that.x && this.y <= that.y;
                },
                gt: function(that) {
                    return this.x > that.x && this.y > that.y;
                },
                gte: function(that) {
                    return this.x >= that.x && this.y >= that.y;
                },
                lerp: function(that, t) {
                    if (typeof t === "undefined") t = .5;
                    t = Math.max(Math.min(1, t), 0);
                    return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
                },
                distanceFrom: function(that) {
                    var dx = this.x - that.x, dy = this.y - that.y;
                    return Math.sqrt(dx * dx + dy * dy);
                },
                midPointFrom: function(that) {
                    return this.lerp(that);
                },
                min: function(that) {
                    return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
                },
                max: function(that) {
                    return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
                },
                toString: function() {
                    return this.x + "," + this.y;
                },
                setXY: function(x, y) {
                    this.x = x;
                    this.y = y;
                    return this;
                },
                setX: function(x) {
                    this.x = x;
                    return this;
                },
                setY: function(y) {
                    this.y = y;
                    return this;
                },
                setFromPoint: function(that) {
                    this.x = that.x;
                    this.y = that.y;
                    return this;
                },
                swap: function(that) {
                    var x = this.x, y = this.y;
                    this.x = that.x;
                    this.y = that.y;
                    that.x = x;
                    that.y = y;
                },
                clone: function() {
                    return new Point(this.x, this.y);
                }
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.Intersection) {
                fabric.warn("fabric.Intersection is already defined");
                return;
            }
            function Intersection(status) {
                this.status = status;
                this.points = [];
            }
            fabric.Intersection = Intersection;
            fabric.Intersection.prototype = {
                constructor: Intersection,
                appendPoint: function(point) {
                    this.points.push(point);
                    return this;
                },
                appendPoints: function(points) {
                    this.points = this.points.concat(points);
                    return this;
                }
            };
            fabric.Intersection.intersectLineLine = function(a1, a2, b1, b2) {
                var result, uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x), ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x), uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
                if (uB !== 0) {
                    var ua = uaT / uB, ub = ubT / uB;
                    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                        result = new Intersection("Intersection");
                        result.appendPoint(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
                    } else result = new Intersection;
                } else if (uaT === 0 || ubT === 0) result = new Intersection("Coincident"); else result = new Intersection("Parallel");
                return result;
            };
            fabric.Intersection.intersectLinePolygon = function(a1, a2, points) {
                var b1, b2, inter, i, result = new Intersection, length = points.length;
                for (i = 0; i < length; i++) {
                    b1 = points[i];
                    b2 = points[(i + 1) % length];
                    inter = Intersection.intersectLineLine(a1, a2, b1, b2);
                    result.appendPoints(inter.points);
                }
                if (result.points.length > 0) result.status = "Intersection";
                return result;
            };
            fabric.Intersection.intersectPolygonPolygon = function(points1, points2) {
                var i, result = new Intersection, length = points1.length;
                for (i = 0; i < length; i++) {
                    var a1 = points1[i], a2 = points1[(i + 1) % length], inter = Intersection.intersectLinePolygon(a1, a2, points2);
                    result.appendPoints(inter.points);
                }
                if (result.points.length > 0) result.status = "Intersection";
                return result;
            };
            fabric.Intersection.intersectPolygonRectangle = function(points, r1, r2) {
                var min = r1.min(r2), max = r1.max(r2), topRight = new fabric.Point(max.x, min.y), bottomLeft = new fabric.Point(min.x, max.y), inter1 = Intersection.intersectLinePolygon(min, topRight, points), inter2 = Intersection.intersectLinePolygon(topRight, max, points), inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points), inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points), result = new Intersection;
                result.appendPoints(inter1.points);
                result.appendPoints(inter2.points);
                result.appendPoints(inter3.points);
                result.appendPoints(inter4.points);
                if (result.points.length > 0) result.status = "Intersection";
                return result;
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.Color) {
                fabric.warn("fabric.Color is already defined.");
                return;
            }
            function Color(color) {
                if (!color) this.setSource([ 0, 0, 0, 1 ]); else this._tryParsingColor(color);
            }
            fabric.Color = Color;
            fabric.Color.prototype = {
                _tryParsingColor: function(color) {
                    var source;
                    if (color in Color.colorNameMap) color = Color.colorNameMap[color];
                    if (color === "transparent") source = [ 255, 255, 255, 0 ];
                    if (!source) source = Color.sourceFromHex(color);
                    if (!source) source = Color.sourceFromRgb(color);
                    if (!source) source = Color.sourceFromHsl(color);
                    if (!source) source = [ 0, 0, 0, 1 ];
                    if (source) this.setSource(source);
                },
                _rgbToHsl: function(r, g, b) {
                    r /= 255;
                    g /= 255;
                    b /= 255;
                    var h, s, l, max = fabric.util.array.max([ r, g, b ]), min = fabric.util.array.min([ r, g, b ]);
                    l = (max + min) / 2;
                    if (max === min) h = s = 0; else {
                        var d = max - min;
                        s = l > .5 ? d / (2 - max - min) : d / (max + min);
                        switch (max) {
                          case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;

                          case g:
                            h = (b - r) / d + 2;
                            break;

                          case b:
                            h = (r - g) / d + 4;
                            break;
                        }
                        h /= 6;
                    }
                    return [ Math.round(h * 360), Math.round(s * 100), Math.round(l * 100) ];
                },
                getSource: function() {
                    return this._source;
                },
                setSource: function(source) {
                    this._source = source;
                },
                toRgb: function() {
                    var source = this.getSource();
                    return "rgb(" + source[0] + "," + source[1] + "," + source[2] + ")";
                },
                toRgba: function() {
                    var source = this.getSource();
                    return "rgba(" + source[0] + "," + source[1] + "," + source[2] + "," + source[3] + ")";
                },
                toHsl: function() {
                    var source = this.getSource(), hsl = this._rgbToHsl(source[0], source[1], source[2]);
                    return "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)";
                },
                toHsla: function() {
                    var source = this.getSource(), hsl = this._rgbToHsl(source[0], source[1], source[2]);
                    return "hsla(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%," + source[3] + ")";
                },
                toHex: function() {
                    var r, g, b, source = this.getSource();
                    r = source[0].toString(16);
                    r = r.length === 1 ? "0" + r : r;
                    g = source[1].toString(16);
                    g = g.length === 1 ? "0" + g : g;
                    b = source[2].toString(16);
                    b = b.length === 1 ? "0" + b : b;
                    return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
                },
                toHexa: function() {
                    var a, source = this.getSource();
                    a = Math.round(source[3] * 255);
                    a = a.toString(16);
                    a = a.length === 1 ? "0" + a : a;
                    return this.toHex() + a.toUpperCase();
                },
                getAlpha: function() {
                    return this.getSource()[3];
                },
                setAlpha: function(alpha) {
                    var source = this.getSource();
                    source[3] = alpha;
                    this.setSource(source);
                    return this;
                },
                toGrayscale: function() {
                    var source = this.getSource(), average = parseInt((source[0] * .3 + source[1] * .59 + source[2] * .11).toFixed(0), 10), currentAlpha = source[3];
                    this.setSource([ average, average, average, currentAlpha ]);
                    return this;
                },
                toBlackWhite: function(threshold) {
                    var source = this.getSource(), average = (source[0] * .3 + source[1] * .59 + source[2] * .11).toFixed(0), currentAlpha = source[3];
                    threshold = threshold || 127;
                    average = Number(average) < Number(threshold) ? 0 : 255;
                    this.setSource([ average, average, average, currentAlpha ]);
                    return this;
                },
                overlayWith: function(otherColor) {
                    if (!(otherColor instanceof Color)) otherColor = new Color(otherColor);
                    var i, result = [], alpha = this.getAlpha(), otherAlpha = .5, source = this.getSource(), otherSource = otherColor.getSource();
                    for (i = 0; i < 3; i++) result.push(Math.round(source[i] * (1 - otherAlpha) + otherSource[i] * otherAlpha));
                    result[3] = alpha;
                    this.setSource(result);
                    return this;
                }
            };
            fabric.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i;
            fabric.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i;
            fabric.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
            fabric.Color.colorNameMap = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgrey: "#A9A9A9",
                darkgreen: "#006400",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                grey: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgrey: "#D3D3D3",
                lightgreen: "#90EE90",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
            fabric.Color.fromRgb = function(color) {
                return Color.fromSource(Color.sourceFromRgb(color));
            };
            fabric.Color.sourceFromRgb = function(color) {
                var match = color.match(Color.reRGBa);
                if (match) {
                    var r = parseInt(match[1], 10) / (/%$/.test(match[1]) ? 100 : 1) * (/%$/.test(match[1]) ? 255 : 1), g = parseInt(match[2], 10) / (/%$/.test(match[2]) ? 100 : 1) * (/%$/.test(match[2]) ? 255 : 1), b = parseInt(match[3], 10) / (/%$/.test(match[3]) ? 100 : 1) * (/%$/.test(match[3]) ? 255 : 1);
                    return [ parseInt(r, 10), parseInt(g, 10), parseInt(b, 10), match[4] ? parseFloat(match[4]) : 1 ];
                }
            };
            fabric.Color.fromRgba = Color.fromRgb;
            fabric.Color.fromHsl = function(color) {
                return Color.fromSource(Color.sourceFromHsl(color));
            };
            fabric.Color.sourceFromHsl = function(color) {
                var match = color.match(Color.reHSLa);
                if (!match) return;
                var r, g, b, h = (parseFloat(match[1]) % 360 + 360) % 360 / 360, s = parseFloat(match[2]) / (/%$/.test(match[2]) ? 100 : 1), l = parseFloat(match[3]) / (/%$/.test(match[3]) ? 100 : 1);
                if (s === 0) r = g = b = l; else {
                    var q = l <= .5 ? l * (s + 1) : l + s - l * s, p = l * 2 - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
                }
                return [ Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), match[4] ? parseFloat(match[4]) : 1 ];
            };
            fabric.Color.fromHsla = Color.fromHsl;
            fabric.Color.fromHex = function(color) {
                return Color.fromSource(Color.sourceFromHex(color));
            };
            fabric.Color.sourceFromHex = function(color) {
                if (color.match(Color.reHex)) {
                    var value = color.slice(color.indexOf("#") + 1), isShortNotation = value.length === 3 || value.length === 4, isRGBa = value.length === 8 || value.length === 4, r = isShortNotation ? value.charAt(0) + value.charAt(0) : value.substring(0, 2), g = isShortNotation ? value.charAt(1) + value.charAt(1) : value.substring(2, 4), b = isShortNotation ? value.charAt(2) + value.charAt(2) : value.substring(4, 6), a = isRGBa ? isShortNotation ? value.charAt(3) + value.charAt(3) : value.substring(6, 8) : "FF";
                    return [ parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseFloat((parseInt(a, 16) / 255).toFixed(2)) ];
                }
            };
            fabric.Color.fromSource = function(source) {
                var oColor = new Color;
                oColor.setSource(source);
                return oColor;
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), scaleMap = [ "e", "se", "s", "sw", "w", "nw", "n", "ne", "e" ], skewMap = [ "ns", "nesw", "ew", "nwse" ], controls = {}, LEFT = "left", TOP = "top", RIGHT = "right", BOTTOM = "bottom", CENTER = "center", opposite = {
                top: BOTTOM,
                bottom: TOP,
                left: RIGHT,
                right: LEFT,
                center: CENTER
            }, radiansToDegrees = fabric.util.radiansToDegrees, sign = Math.sign || function(x) {
                return (x > 0) - (x < 0) || +x;
            };
            function findCornerQuadrant(fabricObject, control) {
                var cornerAngle = fabricObject.angle + radiansToDegrees(Math.atan2(control.y, control.x)) + 360;
                return Math.round(cornerAngle % 360 / 45);
            }
            function fireEvent(eventName, options) {
                var target = options.transform.target, canvas = target.canvas, canvasOptions = fabric.util.object.clone(options);
                canvasOptions.target = target;
                canvas && canvas.fire("object:" + eventName, canvasOptions);
                target.fire(eventName, options);
            }
            function scaleIsProportional(eventData, fabricObject) {
                var canvas = fabricObject.canvas, uniScaleKey = canvas.uniScaleKey, uniformIsToggled = eventData[uniScaleKey];
                return canvas.uniformScaling && !uniformIsToggled || !canvas.uniformScaling && uniformIsToggled;
            }
            function isTransformCentered(transform) {
                return transform.originX === CENTER && transform.originY === CENTER;
            }
            function scalingIsForbidden(fabricObject, by, scaleProportionally) {
                var lockX = fabricObject.lockScalingX, lockY = fabricObject.lockScalingY;
                if (lockX && lockY) return true;
                if (!by && (lockX || lockY) && scaleProportionally) return true;
                if (lockX && by === "x") return true;
                if (lockY && by === "y") return true;
                return false;
            }
            function scaleCursorStyleHandler(eventData, control, fabricObject) {
                var notAllowed = "not-allowed", scaleProportionally = scaleIsProportional(eventData, fabricObject), by = "";
                if (control.x !== 0 && control.y === 0) by = "x"; else if (control.x === 0 && control.y !== 0) by = "y";
                if (scalingIsForbidden(fabricObject, by, scaleProportionally)) return notAllowed;
                var n = findCornerQuadrant(fabricObject, control);
                return scaleMap[n] + "-resize";
            }
            function skewCursorStyleHandler(eventData, control, fabricObject) {
                var notAllowed = "not-allowed";
                if (control.x !== 0 && fabricObject.lockSkewingY) return notAllowed;
                if (control.y !== 0 && fabricObject.lockSkewingX) return notAllowed;
                var n = findCornerQuadrant(fabricObject, control) % 4;
                return skewMap[n] + "-resize";
            }
            function scaleSkewCursorStyleHandler(eventData, control, fabricObject) {
                if (eventData[fabricObject.canvas.altActionKey]) return controls.skewCursorStyleHandler(eventData, control, fabricObject);
                return controls.scaleCursorStyleHandler(eventData, control, fabricObject);
            }
            function scaleOrSkewActionName(eventData, control, fabricObject) {
                var isAlternative = eventData[fabricObject.canvas.altActionKey];
                if (control.x === 0) return isAlternative ? "skewX" : "scaleY";
                if (control.y === 0) return isAlternative ? "skewY" : "scaleX";
            }
            function rotationStyleHandler(eventData, control, fabricObject) {
                if (fabricObject.lockRotation) return "not-allowed";
                return control.cursorStyle;
            }
            function commonEventInfo(eventData, transform, x, y) {
                return {
                    e: eventData,
                    transform,
                    pointer: {
                        x,
                        y
                    }
                };
            }
            function wrapWithFixedAnchor(actionHandler) {
                return function(eventData, transform, x, y) {
                    var target = transform.target, centerPoint = target.getCenterPoint(), constraint = target.translateToOriginPoint(centerPoint, transform.originX, transform.originY), actionPerformed = actionHandler(eventData, transform, x, y);
                    target.setPositionByOrigin(constraint, transform.originX, transform.originY);
                    return actionPerformed;
                };
            }
            function wrapWithFireEvent(eventName, actionHandler) {
                return function(eventData, transform, x, y) {
                    var actionPerformed = actionHandler(eventData, transform, x, y);
                    if (actionPerformed) fireEvent(eventName, commonEventInfo(eventData, transform, x, y));
                    return actionPerformed;
                };
            }
            function getLocalPoint(transform, originX, originY, x, y) {
                var target = transform.target, control = target.controls[transform.corner], zoom = target.canvas.getZoom(), padding = target.padding / zoom, localPoint = target.toLocalPoint(new fabric.Point(x, y), originX, originY);
                if (localPoint.x >= padding) localPoint.x -= padding;
                if (localPoint.x <= -padding) localPoint.x += padding;
                if (localPoint.y >= padding) localPoint.y -= padding;
                if (localPoint.y <= padding) localPoint.y += padding;
                localPoint.x -= control.offsetX;
                localPoint.y -= control.offsetY;
                return localPoint;
            }
            function targetHasOneFlip(target) {
                return target.flipX !== target.flipY;
            }
            function compensateScaleForSkew(target, oppositeSkew, scaleToCompensate, axis, reference) {
                if (target[oppositeSkew] !== 0) {
                    var newDim = target._getTransformedDimensions()[axis];
                    var newValue = reference / newDim * target[scaleToCompensate];
                    target.set(scaleToCompensate, newValue);
                }
            }
            function skewObjectX(eventData, transform, x, y) {
                var newSkew, target = transform.target, dimNoSkew = target._getTransformedDimensions(0, target.skewY), localPoint = getLocalPoint(transform, transform.originX, transform.originY, x, y), totalSkewSize = Math.abs(localPoint.x * 2) - dimNoSkew.x, currentSkew = target.skewX;
                if (totalSkewSize < 2) newSkew = 0; else {
                    newSkew = radiansToDegrees(Math.atan2(totalSkewSize / target.scaleX, dimNoSkew.y / target.scaleY));
                    if (transform.originX === LEFT && transform.originY === BOTTOM) newSkew = -newSkew;
                    if (transform.originX === RIGHT && transform.originY === TOP) newSkew = -newSkew;
                    if (targetHasOneFlip(target)) newSkew = -newSkew;
                }
                var hasSkewed = currentSkew !== newSkew;
                if (hasSkewed) {
                    var dimBeforeSkewing = target._getTransformedDimensions().y;
                    target.set("skewX", newSkew);
                    compensateScaleForSkew(target, "skewY", "scaleY", "y", dimBeforeSkewing);
                }
                return hasSkewed;
            }
            function skewObjectY(eventData, transform, x, y) {
                var newSkew, target = transform.target, dimNoSkew = target._getTransformedDimensions(target.skewX, 0), localPoint = getLocalPoint(transform, transform.originX, transform.originY, x, y), totalSkewSize = Math.abs(localPoint.y * 2) - dimNoSkew.y, currentSkew = target.skewY;
                if (totalSkewSize < 2) newSkew = 0; else {
                    newSkew = radiansToDegrees(Math.atan2(totalSkewSize / target.scaleY, dimNoSkew.x / target.scaleX));
                    if (transform.originX === LEFT && transform.originY === BOTTOM) newSkew = -newSkew;
                    if (transform.originX === RIGHT && transform.originY === TOP) newSkew = -newSkew;
                    if (targetHasOneFlip(target)) newSkew = -newSkew;
                }
                var hasSkewed = currentSkew !== newSkew;
                if (hasSkewed) {
                    var dimBeforeSkewing = target._getTransformedDimensions().x;
                    target.set("skewY", newSkew);
                    compensateScaleForSkew(target, "skewX", "scaleX", "x", dimBeforeSkewing);
                }
                return hasSkewed;
            }
            function skewHandlerX(eventData, transform, x, y) {
                var originX, target = transform.target, currentSkew = target.skewX, originY = transform.originY;
                if (target.lockSkewingX) return false;
                if (currentSkew === 0) {
                    var localPointFromCenter = getLocalPoint(transform, CENTER, CENTER, x, y);
                    if (localPointFromCenter.x > 0) originX = LEFT; else originX = RIGHT;
                } else {
                    if (currentSkew > 0) originX = originY === TOP ? LEFT : RIGHT;
                    if (currentSkew < 0) originX = originY === TOP ? RIGHT : LEFT;
                    if (targetHasOneFlip(target)) originX = originX === LEFT ? RIGHT : LEFT;
                }
                transform.originX = originX;
                var finalHandler = wrapWithFireEvent("skewing", wrapWithFixedAnchor(skewObjectX));
                return finalHandler(eventData, transform, x, y);
            }
            function skewHandlerY(eventData, transform, x, y) {
                var originY, target = transform.target, currentSkew = target.skewY, originX = transform.originX;
                if (target.lockSkewingY) return false;
                if (currentSkew === 0) {
                    var localPointFromCenter = getLocalPoint(transform, CENTER, CENTER, x, y);
                    if (localPointFromCenter.y > 0) originY = TOP; else originY = BOTTOM;
                } else {
                    if (currentSkew > 0) originY = originX === LEFT ? TOP : BOTTOM;
                    if (currentSkew < 0) originY = originX === LEFT ? BOTTOM : TOP;
                    if (targetHasOneFlip(target)) originY = originY === TOP ? BOTTOM : TOP;
                }
                transform.originY = originY;
                var finalHandler = wrapWithFireEvent("skewing", wrapWithFixedAnchor(skewObjectY));
                return finalHandler(eventData, transform, x, y);
            }
            function rotationWithSnapping(eventData, transform, x, y) {
                var t = transform, target = t.target, pivotPoint = target.translateToOriginPoint(target.getCenterPoint(), t.originX, t.originY);
                if (target.lockRotation) return false;
                var lastAngle = Math.atan2(t.ey - pivotPoint.y, t.ex - pivotPoint.x), curAngle = Math.atan2(y - pivotPoint.y, x - pivotPoint.x), angle = radiansToDegrees(curAngle - lastAngle + t.theta), hasRotated = true;
                if (target.snapAngle > 0) {
                    var snapAngle = target.snapAngle, snapThreshold = target.snapThreshold || snapAngle, rightAngleLocked = Math.ceil(angle / snapAngle) * snapAngle, leftAngleLocked = Math.floor(angle / snapAngle) * snapAngle;
                    if (Math.abs(angle - leftAngleLocked) < snapThreshold) angle = leftAngleLocked; else if (Math.abs(angle - rightAngleLocked) < snapThreshold) angle = rightAngleLocked;
                }
                if (angle < 0) angle = 360 + angle;
                angle %= 360;
                hasRotated = target.angle !== angle;
                target.angle = angle;
                return hasRotated;
            }
            function scaleObject(eventData, transform, x, y, options) {
                options = options || {};
                var newPoint, scaleX, scaleY, dim, signX, signY, target = transform.target, lockScalingX = target.lockScalingX, lockScalingY = target.lockScalingY, by = options.by, scaleProportionally = scaleIsProportional(eventData, target), forbidScaling = scalingIsForbidden(target, by, scaleProportionally), gestureScale = transform.gestureScale;
                if (forbidScaling) return false;
                if (gestureScale) {
                    scaleX = transform.scaleX * gestureScale;
                    scaleY = transform.scaleY * gestureScale;
                } else {
                    newPoint = getLocalPoint(transform, transform.originX, transform.originY, x, y);
                    signX = by !== "y" ? sign(newPoint.x) : 1;
                    signY = by !== "x" ? sign(newPoint.y) : 1;
                    if (!transform.signX) transform.signX = signX;
                    if (!transform.signY) transform.signY = signY;
                    if (target.lockScalingFlip && (transform.signX !== signX || transform.signY !== signY)) return false;
                    dim = target._getTransformedDimensions();
                    if (scaleProportionally && !by) {
                        var distance = Math.abs(newPoint.x) + Math.abs(newPoint.y), original = transform.original, originalDistance = Math.abs(dim.x * original.scaleX / target.scaleX) + Math.abs(dim.y * original.scaleY / target.scaleY), scale = distance / originalDistance;
                        scaleX = original.scaleX * scale;
                        scaleY = original.scaleY * scale;
                    } else {
                        scaleX = Math.abs(newPoint.x * target.scaleX / dim.x);
                        scaleY = Math.abs(newPoint.y * target.scaleY / dim.y);
                    }
                    if (isTransformCentered(transform)) {
                        scaleX *= 2;
                        scaleY *= 2;
                    }
                    if (transform.signX !== signX && by !== "y") {
                        transform.originX = opposite[transform.originX];
                        scaleX *= -1;
                        transform.signX = signX;
                    }
                    if (transform.signY !== signY && by !== "x") {
                        transform.originY = opposite[transform.originY];
                        scaleY *= -1;
                        transform.signY = signY;
                    }
                }
                var oldScaleX = target.scaleX, oldScaleY = target.scaleY;
                if (!by) {
                    !lockScalingX && target.set("scaleX", scaleX);
                    !lockScalingY && target.set("scaleY", scaleY);
                } else {
                    by === "x" && target.set("scaleX", scaleX);
                    by === "y" && target.set("scaleY", scaleY);
                }
                return oldScaleX !== target.scaleX || oldScaleY !== target.scaleY;
            }
            function scaleObjectFromCorner(eventData, transform, x, y) {
                return scaleObject(eventData, transform, x, y);
            }
            function scaleObjectX(eventData, transform, x, y) {
                return scaleObject(eventData, transform, x, y, {
                    by: "x"
                });
            }
            function scaleObjectY(eventData, transform, x, y) {
                return scaleObject(eventData, transform, x, y, {
                    by: "y"
                });
            }
            function scalingYOrSkewingX(eventData, transform, x, y) {
                if (eventData[transform.target.canvas.altActionKey]) return controls.skewHandlerX(eventData, transform, x, y);
                return controls.scalingY(eventData, transform, x, y);
            }
            function scalingXOrSkewingY(eventData, transform, x, y) {
                if (eventData[transform.target.canvas.altActionKey]) return controls.skewHandlerY(eventData, transform, x, y);
                return controls.scalingX(eventData, transform, x, y);
            }
            function changeWidth(eventData, transform, x, y) {
                var target = transform.target, localPoint = getLocalPoint(transform, transform.originX, transform.originY, x, y), strokePadding = target.strokeWidth / (target.strokeUniform ? target.scaleX : 1), multiplier = isTransformCentered(transform) ? 2 : 1, oldWidth = target.width, newWidth = Math.abs(localPoint.x * multiplier / target.scaleX) - strokePadding;
                target.set("width", Math.max(newWidth, 0));
                return oldWidth !== newWidth;
            }
            function dragHandler(eventData, transform, x, y) {
                var target = transform.target, newLeft = x - transform.offsetX, newTop = y - transform.offsetY, moveX = !target.get("lockMovementX") && target.left !== newLeft, moveY = !target.get("lockMovementY") && target.top !== newTop;
                moveX && target.set("left", newLeft);
                moveY && target.set("top", newTop);
                if (moveX || moveY) fireEvent("moving", commonEventInfo(eventData, transform, x, y));
                return moveX || moveY;
            }
            controls.scaleCursorStyleHandler = scaleCursorStyleHandler;
            controls.skewCursorStyleHandler = skewCursorStyleHandler;
            controls.scaleSkewCursorStyleHandler = scaleSkewCursorStyleHandler;
            controls.rotationWithSnapping = wrapWithFireEvent("rotating", wrapWithFixedAnchor(rotationWithSnapping));
            controls.scalingEqually = wrapWithFireEvent("scaling", wrapWithFixedAnchor(scaleObjectFromCorner));
            controls.scalingX = wrapWithFireEvent("scaling", wrapWithFixedAnchor(scaleObjectX));
            controls.scalingY = wrapWithFireEvent("scaling", wrapWithFixedAnchor(scaleObjectY));
            controls.scalingYOrSkewingX = scalingYOrSkewingX;
            controls.scalingXOrSkewingY = scalingXOrSkewingY;
            controls.changeWidth = wrapWithFireEvent("resizing", wrapWithFixedAnchor(changeWidth));
            controls.skewHandlerX = skewHandlerX;
            controls.skewHandlerY = skewHandlerY;
            controls.dragHandler = dragHandler;
            controls.scaleOrSkewActionName = scaleOrSkewActionName;
            controls.rotationStyleHandler = rotationStyleHandler;
            controls.fireEvent = fireEvent;
            controls.wrapWithFixedAnchor = wrapWithFixedAnchor;
            controls.wrapWithFireEvent = wrapWithFireEvent;
            controls.getLocalPoint = getLocalPoint;
            fabric.controlsUtils = controls;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), degreesToRadians = fabric.util.degreesToRadians, controls = fabric.controlsUtils;
            function renderCircleControl(ctx, left, top, styleOverride, fabricObject) {
                styleOverride = styleOverride || {};
                var size, xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize, ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize, transparentCorners = typeof styleOverride.transparentCorners !== "undefined" ? styleOverride.transparentCorners : fabricObject.transparentCorners, methodName = transparentCorners ? "stroke" : "fill", stroke = !transparentCorners && (styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor), myLeft = left, myTop = top;
                ctx.save();
                ctx.fillStyle = styleOverride.cornerColor || fabricObject.cornerColor;
                ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor;
                if (xSize > ySize) {
                    size = xSize;
                    ctx.scale(1, ySize / xSize);
                    myTop = top * xSize / ySize;
                } else if (ySize > xSize) {
                    size = ySize;
                    ctx.scale(xSize / ySize, 1);
                    myLeft = left * ySize / xSize;
                } else size = xSize;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(myLeft, myTop, size / 2, 0, 2 * Math.PI, false);
                ctx[methodName]();
                if (stroke) ctx.stroke();
                ctx.restore();
            }
            function renderSquareControl(ctx, left, top, styleOverride, fabricObject) {
                styleOverride = styleOverride || {};
                var xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize, ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize, transparentCorners = typeof styleOverride.transparentCorners !== "undefined" ? styleOverride.transparentCorners : fabricObject.transparentCorners, methodName = transparentCorners ? "stroke" : "fill", stroke = !transparentCorners && (styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor), xSizeBy2 = xSize / 2, ySizeBy2 = ySize / 2;
                ctx.save();
                ctx.fillStyle = styleOverride.cornerColor || fabricObject.cornerColor;
                ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor;
                ctx.lineWidth = 1;
                ctx.translate(left, top);
                ctx.rotate(degreesToRadians(fabricObject.angle));
                ctx[methodName + "Rect"](-xSizeBy2, -ySizeBy2, xSize, ySize);
                if (stroke) ctx.strokeRect(-xSizeBy2, -ySizeBy2, xSize, ySize);
                ctx.restore();
            }
            controls.renderCircleControl = renderCircleControl;
            controls.renderSquareControl = renderSquareControl;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            function Control(options) {
                for (var i in options) this[i] = options[i];
            }
            fabric.Control = Control;
            fabric.Control.prototype = {
                visible: true,
                actionName: "scale",
                angle: 0,
                x: 0,
                y: 0,
                offsetX: 0,
                offsetY: 0,
                sizeX: null,
                sizeY: null,
                touchSizeX: null,
                touchSizeY: null,
                cursorStyle: "crosshair",
                withConnection: false,
                actionHandler: function() {},
                mouseDownHandler: function() {},
                mouseUpHandler: function() {},
                getActionHandler: function() {
                    return this.actionHandler;
                },
                getMouseDownHandler: function() {
                    return this.mouseDownHandler;
                },
                getMouseUpHandler: function() {
                    return this.mouseUpHandler;
                },
                cursorStyleHandler: function(eventData, control) {
                    return control.cursorStyle;
                },
                getActionName: function(eventData, control) {
                    return control.actionName;
                },
                getVisibility: function(fabricObject, controlKey) {
                    var objectVisibility = fabricObject._controlsVisibility;
                    if (objectVisibility && typeof objectVisibility[controlKey] !== "undefined") return objectVisibility[controlKey];
                    return this.visible;
                },
                setVisibility: function(visibility) {
                    this.visible = visibility;
                },
                positionHandler: function(dim, finalMatrix) {
                    var point = fabric.util.transformPoint({
                        x: this.x * dim.x + this.offsetX,
                        y: this.y * dim.y + this.offsetY
                    }, finalMatrix);
                    return point;
                },
                calcCornerCoords: function(objectAngle, objectCornerSize, centerX, centerY, isTouch) {
                    var cosHalfOffset, sinHalfOffset, cosHalfOffsetComp, sinHalfOffsetComp, xSize = isTouch ? this.touchSizeX : this.sizeX, ySize = isTouch ? this.touchSizeY : this.sizeY;
                    if (xSize && ySize && xSize !== ySize) {
                        var controlTriangleAngle = Math.atan2(ySize, xSize);
                        var cornerHypotenuse = Math.sqrt(xSize * xSize + ySize * ySize) / 2;
                        var newTheta = controlTriangleAngle - fabric.util.degreesToRadians(objectAngle);
                        var newThetaComp = Math.PI / 2 - controlTriangleAngle - fabric.util.degreesToRadians(objectAngle);
                        cosHalfOffset = cornerHypotenuse * fabric.util.cos(newTheta);
                        sinHalfOffset = cornerHypotenuse * fabric.util.sin(newTheta);
                        cosHalfOffsetComp = cornerHypotenuse * fabric.util.cos(newThetaComp);
                        sinHalfOffsetComp = cornerHypotenuse * fabric.util.sin(newThetaComp);
                    } else {
                        var cornerSize = xSize && ySize ? xSize : objectCornerSize;
                        cornerHypotenuse = cornerSize * .7071067812;
                        newTheta = fabric.util.degreesToRadians(45 - objectAngle);
                        cosHalfOffset = cosHalfOffsetComp = cornerHypotenuse * fabric.util.cos(newTheta);
                        sinHalfOffset = sinHalfOffsetComp = cornerHypotenuse * fabric.util.sin(newTheta);
                    }
                    return {
                        tl: {
                            x: centerX - sinHalfOffsetComp,
                            y: centerY - cosHalfOffsetComp
                        },
                        tr: {
                            x: centerX + cosHalfOffset,
                            y: centerY - sinHalfOffset
                        },
                        bl: {
                            x: centerX - cosHalfOffset,
                            y: centerY + sinHalfOffset
                        },
                        br: {
                            x: centerX + sinHalfOffsetComp,
                            y: centerY + cosHalfOffsetComp
                        }
                    };
                },
                render: function(ctx, left, top, styleOverride, fabricObject) {
                    styleOverride = styleOverride || {};
                    switch (styleOverride.cornerStyle || fabricObject.cornerStyle) {
                      case "circle":
                        fabric.controlsUtils.renderCircleControl.call(this, ctx, left, top, styleOverride, fabricObject);
                        break;

                      default:
                        fabric.controlsUtils.renderSquareControl.call(this, ctx, left, top, styleOverride, fabricObject);
                    }
                }
            };
        })(true ? exports : 0);
        (function() {
            function getColorStop(el, multiplier) {
                var color, colorAlpha, opacity, i, style = el.getAttribute("style"), offset = el.getAttribute("offset") || 0;
                offset = parseFloat(offset) / (/%$/.test(offset) ? 100 : 1);
                offset = offset < 0 ? 0 : offset > 1 ? 1 : offset;
                if (style) {
                    var keyValuePairs = style.split(/\s*;\s*/);
                    if (keyValuePairs[keyValuePairs.length - 1] === "") keyValuePairs.pop();
                    for (i = keyValuePairs.length; i--; ) {
                        var split = keyValuePairs[i].split(/\s*:\s*/), key = split[0].trim(), value = split[1].trim();
                        if (key === "stop-color") color = value; else if (key === "stop-opacity") opacity = value;
                    }
                }
                if (!color) color = el.getAttribute("stop-color") || "rgb(0,0,0)";
                if (!opacity) opacity = el.getAttribute("stop-opacity");
                color = new fabric.Color(color);
                colorAlpha = color.getAlpha();
                opacity = isNaN(parseFloat(opacity)) ? 1 : parseFloat(opacity);
                opacity *= colorAlpha * multiplier;
                return {
                    offset,
                    color: color.toRgb(),
                    opacity
                };
            }
            function getLinearCoords(el) {
                return {
                    x1: el.getAttribute("x1") || 0,
                    y1: el.getAttribute("y1") || 0,
                    x2: el.getAttribute("x2") || "100%",
                    y2: el.getAttribute("y2") || 0
                };
            }
            function getRadialCoords(el) {
                return {
                    x1: el.getAttribute("fx") || el.getAttribute("cx") || "50%",
                    y1: el.getAttribute("fy") || el.getAttribute("cy") || "50%",
                    r1: 0,
                    x2: el.getAttribute("cx") || "50%",
                    y2: el.getAttribute("cy") || "50%",
                    r2: el.getAttribute("r") || "50%"
                };
            }
            var clone = fabric.util.object.clone;
            fabric.Gradient = fabric.util.createClass({
                offsetX: 0,
                offsetY: 0,
                gradientTransform: null,
                gradientUnits: "pixels",
                type: "linear",
                initialize: function(options) {
                    options || (options = {});
                    options.coords || (options.coords = {});
                    var coords, _this = this;
                    Object.keys(options).forEach((function(option) {
                        _this[option] = options[option];
                    }));
                    if (this.id) this.id += "_" + fabric.Object.__uid++; else this.id = fabric.Object.__uid++;
                    coords = {
                        x1: options.coords.x1 || 0,
                        y1: options.coords.y1 || 0,
                        x2: options.coords.x2 || 0,
                        y2: options.coords.y2 || 0
                    };
                    if (this.type === "radial") {
                        coords.r1 = options.coords.r1 || 0;
                        coords.r2 = options.coords.r2 || 0;
                    }
                    this.coords = coords;
                    this.colorStops = options.colorStops.slice();
                },
                addColorStop: function(colorStops) {
                    for (var position in colorStops) {
                        var color = new fabric.Color(colorStops[position]);
                        this.colorStops.push({
                            offset: parseFloat(position),
                            color: color.toRgb(),
                            opacity: color.getAlpha()
                        });
                    }
                    return this;
                },
                toObject: function(propertiesToInclude) {
                    var object = {
                        type: this.type,
                        coords: this.coords,
                        colorStops: this.colorStops,
                        offsetX: this.offsetX,
                        offsetY: this.offsetY,
                        gradientUnits: this.gradientUnits,
                        gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
                    };
                    fabric.util.populateWithProperties(this, object, propertiesToInclude);
                    return object;
                },
                toSVG: function(object, options) {
                    var i, len, markup, commonAttributes, coords = clone(this.coords, true), colorStops = (options = options || {}, 
                    clone(this.colorStops, true)), needsSwap = coords.r1 > coords.r2, transform = this.gradientTransform ? this.gradientTransform.concat() : fabric.iMatrix.concat(), offsetX = -this.offsetX, offsetY = -this.offsetY, withViewport = !!options.additionalTransform, gradientUnits = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
                    colorStops.sort((function(a, b) {
                        return a.offset - b.offset;
                    }));
                    if (gradientUnits === "objectBoundingBox") {
                        offsetX /= object.width;
                        offsetY /= object.height;
                    } else {
                        offsetX += object.width / 2;
                        offsetY += object.height / 2;
                    }
                    if (object.type === "path" && this.gradientUnits !== "percentage") {
                        offsetX -= object.pathOffset.x;
                        offsetY -= object.pathOffset.y;
                    }
                    transform[4] -= offsetX;
                    transform[5] -= offsetY;
                    commonAttributes = 'id="SVGID_' + this.id + '" gradientUnits="' + gradientUnits + '"';
                    commonAttributes += ' gradientTransform="' + (withViewport ? options.additionalTransform + " " : "") + fabric.util.matrixToSVG(transform) + '" ';
                    if (this.type === "linear") markup = [ "<linearGradient ", commonAttributes, ' x1="', coords.x1, '" y1="', coords.y1, '" x2="', coords.x2, '" y2="', coords.y2, '">\n' ]; else if (this.type === "radial") markup = [ "<radialGradient ", commonAttributes, ' cx="', needsSwap ? coords.x1 : coords.x2, '" cy="', needsSwap ? coords.y1 : coords.y2, '" r="', needsSwap ? coords.r1 : coords.r2, '" fx="', needsSwap ? coords.x2 : coords.x1, '" fy="', needsSwap ? coords.y2 : coords.y1, '">\n' ];
                    if (this.type === "radial") {
                        if (needsSwap) {
                            colorStops = colorStops.concat();
                            colorStops.reverse();
                            for (i = 0, len = colorStops.length; i < len; i++) colorStops[i].offset = 1 - colorStops[i].offset;
                        }
                        var minRadius = Math.min(coords.r1, coords.r2);
                        if (minRadius > 0) {
                            var maxRadius = Math.max(coords.r1, coords.r2), percentageShift = minRadius / maxRadius;
                            for (i = 0, len = colorStops.length; i < len; i++) colorStops[i].offset += percentageShift * (1 - colorStops[i].offset);
                        }
                    }
                    for (i = 0, len = colorStops.length; i < len; i++) {
                        var colorStop = colorStops[i];
                        markup.push("<stop ", 'offset="', colorStop.offset * 100 + "%", '" style="stop-color:', colorStop.color, typeof colorStop.opacity !== "undefined" ? ";stop-opacity: " + colorStop.opacity : ";", '"/>\n');
                    }
                    markup.push(this.type === "linear" ? "</linearGradient>\n" : "</radialGradient>\n");
                    return markup.join("");
                },
                toLive: function(ctx) {
                    var gradient, i, len, coords = fabric.util.object.clone(this.coords);
                    if (!this.type) return;
                    if (this.type === "linear") gradient = ctx.createLinearGradient(coords.x1, coords.y1, coords.x2, coords.y2); else if (this.type === "radial") gradient = ctx.createRadialGradient(coords.x1, coords.y1, coords.r1, coords.x2, coords.y2, coords.r2);
                    for (i = 0, len = this.colorStops.length; i < len; i++) {
                        var color = this.colorStops[i].color, opacity = this.colorStops[i].opacity, offset = this.colorStops[i].offset;
                        if (typeof opacity !== "undefined") color = new fabric.Color(color).setAlpha(opacity).toRgba();
                        gradient.addColorStop(offset, color);
                    }
                    return gradient;
                }
            });
            fabric.util.object.extend(fabric.Gradient, {
                fromElement: function(el, instance, opacityAttr, svgOptions) {
                    var multiplier = parseFloat(opacityAttr) / (/%$/.test(opacityAttr) ? 100 : 1);
                    multiplier = multiplier < 0 ? 0 : multiplier > 1 ? 1 : multiplier;
                    if (isNaN(multiplier)) multiplier = 1;
                    var type, coords, i, transformMatrix, colorStopEls = el.getElementsByTagName("stop"), gradientUnits = el.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", gradientTransform = el.getAttribute("gradientTransform") || "", colorStops = [], offsetX = 0, offsetY = 0;
                    if (el.nodeName === "linearGradient" || el.nodeName === "LINEARGRADIENT") {
                        type = "linear";
                        coords = getLinearCoords(el);
                    } else {
                        type = "radial";
                        coords = getRadialCoords(el);
                    }
                    for (i = colorStopEls.length; i--; ) colorStops.push(getColorStop(colorStopEls[i], multiplier));
                    transformMatrix = fabric.parseTransformAttribute(gradientTransform);
                    __convertPercentUnitsToValues(instance, coords, svgOptions, gradientUnits);
                    if (gradientUnits === "pixels") {
                        offsetX = -instance.left;
                        offsetY = -instance.top;
                    }
                    var gradient = new fabric.Gradient({
                        id: el.getAttribute("id"),
                        type,
                        coords,
                        colorStops,
                        gradientUnits,
                        gradientTransform: transformMatrix,
                        offsetX,
                        offsetY
                    });
                    return gradient;
                }
            });
            function __convertPercentUnitsToValues(instance, options, svgOptions, gradientUnits) {
                var propValue, finalValue;
                Object.keys(options).forEach((function(prop) {
                    propValue = options[prop];
                    if (propValue === "Infinity") finalValue = 1; else if (propValue === "-Infinity") finalValue = 0; else {
                        finalValue = parseFloat(options[prop], 10);
                        if (typeof propValue === "string" && /^(\d+\.\d+)%|(\d+)%$/.test(propValue)) {
                            finalValue *= .01;
                            if (gradientUnits === "pixels") {
                                if (prop === "x1" || prop === "x2" || prop === "r2") finalValue *= svgOptions.viewBoxWidth || svgOptions.width;
                                if (prop === "y1" || prop === "y2") finalValue *= svgOptions.viewBoxHeight || svgOptions.height;
                            }
                        }
                    }
                    options[prop] = finalValue;
                }));
            }
        })();
        (function() {
            "use strict";
            var toFixed = fabric.util.toFixed;
            fabric.Pattern = fabric.util.createClass({
                repeat: "repeat",
                offsetX: 0,
                offsetY: 0,
                crossOrigin: "",
                patternTransform: null,
                initialize: function(options, callback) {
                    options || (options = {});
                    this.id = fabric.Object.__uid++;
                    this.setOptions(options);
                    if (!options.source || options.source && typeof options.source !== "string") {
                        callback && callback(this);
                        return;
                    } else {
                        var _this = this;
                        this.source = fabric.util.createImage();
                        fabric.util.loadImage(options.source, (function(img, isError) {
                            _this.source = img;
                            callback && callback(_this, isError);
                        }), null, this.crossOrigin);
                    }
                },
                toObject: function(propertiesToInclude) {
                    var source, object, NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                    if (typeof this.source.src === "string") source = this.source.src; else if (typeof this.source === "object" && this.source.toDataURL) source = this.source.toDataURL();
                    object = {
                        type: "pattern",
                        source,
                        repeat: this.repeat,
                        crossOrigin: this.crossOrigin,
                        offsetX: toFixed(this.offsetX, NUM_FRACTION_DIGITS),
                        offsetY: toFixed(this.offsetY, NUM_FRACTION_DIGITS),
                        patternTransform: this.patternTransform ? this.patternTransform.concat() : null
                    };
                    fabric.util.populateWithProperties(this, object, propertiesToInclude);
                    return object;
                },
                toSVG: function(object) {
                    var patternSource = typeof this.source === "function" ? this.source() : this.source, patternWidth = patternSource.width / object.width, patternHeight = patternSource.height / object.height, patternOffsetX = this.offsetX / object.width, patternOffsetY = this.offsetY / object.height, patternImgSrc = "";
                    if (this.repeat === "repeat-x" || this.repeat === "no-repeat") {
                        patternHeight = 1;
                        if (patternOffsetY) patternHeight += Math.abs(patternOffsetY);
                    }
                    if (this.repeat === "repeat-y" || this.repeat === "no-repeat") {
                        patternWidth = 1;
                        if (patternOffsetX) patternWidth += Math.abs(patternOffsetX);
                    }
                    if (patternSource.src) patternImgSrc = patternSource.src; else if (patternSource.toDataURL) patternImgSrc = patternSource.toDataURL();
                    return '<pattern id="SVGID_' + this.id + '" x="' + patternOffsetX + '" y="' + patternOffsetY + '" width="' + patternWidth + '" height="' + patternHeight + '">\n' + '<image x="0" y="0"' + ' width="' + patternSource.width + '" height="' + patternSource.height + '" xlink:href="' + patternImgSrc + '"></image>\n' + "</pattern>\n";
                },
                setOptions: function(options) {
                    for (var prop in options) this[prop] = options[prop];
                },
                toLive: function(ctx) {
                    var source = this.source;
                    if (!source) return "";
                    if (typeof source.src !== "undefined") {
                        if (!source.complete) return "";
                        if (source.naturalWidth === 0 || source.naturalHeight === 0) return "";
                    }
                    return ctx.createPattern(source, this.repeat);
                }
            });
        })();
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), toFixed = fabric.util.toFixed;
            if (fabric.Shadow) {
                fabric.warn("fabric.Shadow is already defined.");
                return;
            }
            fabric.Shadow = fabric.util.createClass({
                color: "rgb(0,0,0)",
                blur: 0,
                offsetX: 0,
                offsetY: 0,
                affectStroke: false,
                includeDefaultValues: true,
                nonScaling: false,
                initialize: function(options) {
                    if (typeof options === "string") options = this._parseShadow(options);
                    for (var prop in options) this[prop] = options[prop];
                    this.id = fabric.Object.__uid++;
                },
                _parseShadow: function(shadow) {
                    var shadowStr = shadow.trim(), offsetsAndBlur = fabric.Shadow.reOffsetsAndBlur.exec(shadowStr) || [], color = shadowStr.replace(fabric.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
                    return {
                        color: color.trim(),
                        offsetX: parseFloat(offsetsAndBlur[1], 10) || 0,
                        offsetY: parseFloat(offsetsAndBlur[2], 10) || 0,
                        blur: parseFloat(offsetsAndBlur[3], 10) || 0
                    };
                },
                toString: function() {
                    return [ this.offsetX, this.offsetY, this.blur, this.color ].join("px ");
                },
                toSVG: function(object) {
                    var fBoxX = 40, fBoxY = 40, NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS, offset = fabric.util.rotateVector({
                        x: this.offsetX,
                        y: this.offsetY
                    }, fabric.util.degreesToRadians(-object.angle)), BLUR_BOX = 20, color = new fabric.Color(this.color);
                    if (object.width && object.height) {
                        fBoxX = toFixed((Math.abs(offset.x) + this.blur) / object.width, NUM_FRACTION_DIGITS) * 100 + BLUR_BOX;
                        fBoxY = toFixed((Math.abs(offset.y) + this.blur) / object.height, NUM_FRACTION_DIGITS) * 100 + BLUR_BOX;
                    }
                    if (object.flipX) offset.x *= -1;
                    if (object.flipY) offset.y *= -1;
                    return '<filter id="SVGID_' + this.id + '" y="-' + fBoxY + '%" height="' + (100 + 2 * fBoxY) + '%" ' + 'x="-' + fBoxX + '%" width="' + (100 + 2 * fBoxX) + '%" ' + ">\n" + '\t<feGaussianBlur in="SourceAlpha" stdDeviation="' + toFixed(this.blur ? this.blur / 2 : 0, NUM_FRACTION_DIGITS) + '"></feGaussianBlur>\n' + '\t<feOffset dx="' + toFixed(offset.x, NUM_FRACTION_DIGITS) + '" dy="' + toFixed(offset.y, NUM_FRACTION_DIGITS) + '" result="oBlur" ></feOffset>\n' + '\t<feFlood flood-color="' + color.toRgb() + '" flood-opacity="' + color.getAlpha() + '"/>\n' + '\t<feComposite in2="oBlur" operator="in" />\n' + "\t<feMerge>\n" + "\t\t<feMergeNode></feMergeNode>\n" + '\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n' + "\t</feMerge>\n" + "</filter>\n";
                },
                toObject: function() {
                    if (this.includeDefaultValues) return {
                        color: this.color,
                        blur: this.blur,
                        offsetX: this.offsetX,
                        offsetY: this.offsetY,
                        affectStroke: this.affectStroke,
                        nonScaling: this.nonScaling
                    };
                    var obj = {}, proto = fabric.Shadow.prototype;
                    [ "color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling" ].forEach((function(prop) {
                        if (this[prop] !== proto[prop]) obj[prop] = this[prop];
                    }), this);
                    return obj;
                }
            });
            fabric.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/;
        })(true ? exports : 0);
        (function() {
            "use strict";
            if (fabric.StaticCanvas) {
                fabric.warn("fabric.StaticCanvas is already defined.");
                return;
            }
            var extend = fabric.util.object.extend, getElementOffset = fabric.util.getElementOffset, removeFromArray = fabric.util.removeFromArray, toFixed = fabric.util.toFixed, transformPoint = fabric.util.transformPoint, invertTransform = fabric.util.invertTransform, getNodeCanvas = fabric.util.getNodeCanvas, createCanvasElement = fabric.util.createCanvasElement, CANVAS_INIT_ERROR = new Error("Could not initialize `canvas` element");
            fabric.StaticCanvas = fabric.util.createClass(fabric.CommonMethods, {
                initialize: function(el, options) {
                    options || (options = {});
                    this.renderAndResetBound = this.renderAndReset.bind(this);
                    this.requestRenderAllBound = this.requestRenderAll.bind(this);
                    this._initStatic(el, options);
                },
                backgroundColor: "",
                backgroundImage: null,
                overlayColor: "",
                overlayImage: null,
                includeDefaultValues: true,
                stateful: false,
                renderOnAddRemove: true,
                controlsAboveOverlay: false,
                allowTouchScrolling: false,
                imageSmoothingEnabled: true,
                viewportTransform: fabric.iMatrix.concat(),
                backgroundVpt: true,
                overlayVpt: true,
                enableRetinaScaling: true,
                vptCoords: {},
                skipOffscreen: true,
                clipPath: void 0,
                _initStatic: function(el, options) {
                    var cb = this.requestRenderAllBound;
                    this._objects = [];
                    this._createLowerCanvas(el);
                    this._initOptions(options);
                    if (!this.interactive) this._initRetinaScaling();
                    if (options.overlayImage) this.setOverlayImage(options.overlayImage, cb);
                    if (options.backgroundImage) this.setBackgroundImage(options.backgroundImage, cb);
                    if (options.backgroundColor) this.setBackgroundColor(options.backgroundColor, cb);
                    if (options.overlayColor) this.setOverlayColor(options.overlayColor, cb);
                    this.calcOffset();
                },
                _isRetinaScaling: function() {
                    return fabric.devicePixelRatio !== 1 && this.enableRetinaScaling;
                },
                getRetinaScaling: function() {
                    return this._isRetinaScaling() ? fabric.devicePixelRatio : 1;
                },
                _initRetinaScaling: function() {
                    if (!this._isRetinaScaling()) return;
                    var scaleRatio = fabric.devicePixelRatio;
                    this.__initRetinaScaling(scaleRatio, this.lowerCanvasEl, this.contextContainer);
                    if (this.upperCanvasEl) this.__initRetinaScaling(scaleRatio, this.upperCanvasEl, this.contextTop);
                },
                __initRetinaScaling: function(scaleRatio, canvas, context) {
                    canvas.setAttribute("width", this.width * scaleRatio);
                    canvas.setAttribute("height", this.height * scaleRatio);
                    context.scale(scaleRatio, scaleRatio);
                },
                calcOffset: function() {
                    this._offset = getElementOffset(this.lowerCanvasEl);
                    return this;
                },
                setOverlayImage: function(image, callback, options) {
                    return this.__setBgOverlayImage("overlayImage", image, callback, options);
                },
                setBackgroundImage: function(image, callback, options) {
                    return this.__setBgOverlayImage("backgroundImage", image, callback, options);
                },
                setOverlayColor: function(overlayColor, callback) {
                    return this.__setBgOverlayColor("overlayColor", overlayColor, callback);
                },
                setBackgroundColor: function(backgroundColor, callback) {
                    return this.__setBgOverlayColor("backgroundColor", backgroundColor, callback);
                },
                __setBgOverlayImage: function(property, image, callback, options) {
                    if (typeof image === "string") fabric.util.loadImage(image, (function(img, isError) {
                        if (img) {
                            var instance = new fabric.Image(img, options);
                            this[property] = instance;
                            instance.canvas = this;
                        }
                        callback && callback(img, isError);
                    }), this, options && options.crossOrigin); else {
                        options && image.setOptions(options);
                        this[property] = image;
                        image && (image.canvas = this);
                        callback && callback(image, false);
                    }
                    return this;
                },
                __setBgOverlayColor: function(property, color, callback) {
                    this[property] = color;
                    this._initGradient(color, property);
                    this._initPattern(color, property, callback);
                    return this;
                },
                _createCanvasElement: function() {
                    var element = createCanvasElement();
                    if (!element) throw CANVAS_INIT_ERROR;
                    if (!element.style) element.style = {};
                    if (typeof element.getContext === "undefined") throw CANVAS_INIT_ERROR;
                    return element;
                },
                _initOptions: function(options) {
                    var lowerCanvasEl = this.lowerCanvasEl;
                    this._setOptions(options);
                    this.width = this.width || parseInt(lowerCanvasEl.width, 10) || 0;
                    this.height = this.height || parseInt(lowerCanvasEl.height, 10) || 0;
                    if (!this.lowerCanvasEl.style) return;
                    lowerCanvasEl.width = this.width;
                    lowerCanvasEl.height = this.height;
                    lowerCanvasEl.style.width = this.width + "px";
                    lowerCanvasEl.style.height = this.height + "px";
                    this.viewportTransform = this.viewportTransform.slice();
                },
                _createLowerCanvas: function(canvasEl) {
                    if (canvasEl && canvasEl.getContext) this.lowerCanvasEl = canvasEl; else this.lowerCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
                    fabric.util.addClass(this.lowerCanvasEl, "lower-canvas");
                    this._originalCanvasStyle = this.lowerCanvasEl.style;
                    if (this.interactive) this._applyCanvasStyle(this.lowerCanvasEl);
                    this.contextContainer = this.lowerCanvasEl.getContext("2d");
                },
                getWidth: function() {
                    return this.width;
                },
                getHeight: function() {
                    return this.height;
                },
                setWidth: function(value, options) {
                    return this.setDimensions({
                        width: value
                    }, options);
                },
                setHeight: function(value, options) {
                    return this.setDimensions({
                        height: value
                    }, options);
                },
                setDimensions: function(dimensions, options) {
                    var cssValue;
                    options = options || {};
                    for (var prop in dimensions) {
                        cssValue = dimensions[prop];
                        if (!options.cssOnly) {
                            this._setBackstoreDimension(prop, dimensions[prop]);
                            cssValue += "px";
                            this.hasLostContext = true;
                        }
                        if (!options.backstoreOnly) this._setCssDimension(prop, cssValue);
                    }
                    if (this._isCurrentlyDrawing) this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles();
                    this._initRetinaScaling();
                    this.calcOffset();
                    if (!options.cssOnly) this.requestRenderAll();
                    return this;
                },
                _setBackstoreDimension: function(prop, value) {
                    this.lowerCanvasEl[prop] = value;
                    if (this.upperCanvasEl) this.upperCanvasEl[prop] = value;
                    if (this.cacheCanvasEl) this.cacheCanvasEl[prop] = value;
                    this[prop] = value;
                    return this;
                },
                _setCssDimension: function(prop, value) {
                    this.lowerCanvasEl.style[prop] = value;
                    if (this.upperCanvasEl) this.upperCanvasEl.style[prop] = value;
                    if (this.wrapperEl) this.wrapperEl.style[prop] = value;
                    return this;
                },
                getZoom: function() {
                    return this.viewportTransform[0];
                },
                setViewportTransform: function(vpt) {
                    var object, i, len, activeObject = this._activeObject, backgroundObject = this.backgroundImage, overlayObject = this.overlayImage;
                    this.viewportTransform = vpt;
                    for (i = 0, len = this._objects.length; i < len; i++) {
                        object = this._objects[i];
                        object.group || object.setCoords(true);
                    }
                    if (activeObject) activeObject.setCoords();
                    if (backgroundObject) backgroundObject.setCoords(true);
                    if (overlayObject) overlayObject.setCoords(true);
                    this.calcViewportBoundaries();
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                zoomToPoint: function(point, value) {
                    var before = point, vpt = this.viewportTransform.slice(0);
                    point = transformPoint(point, invertTransform(this.viewportTransform));
                    vpt[0] = value;
                    vpt[3] = value;
                    var after = transformPoint(point, vpt);
                    vpt[4] += before.x - after.x;
                    vpt[5] += before.y - after.y;
                    return this.setViewportTransform(vpt);
                },
                setZoom: function(value) {
                    this.zoomToPoint(new fabric.Point(0, 0), value);
                    return this;
                },
                absolutePan: function(point) {
                    var vpt = this.viewportTransform.slice(0);
                    vpt[4] = -point.x;
                    vpt[5] = -point.y;
                    return this.setViewportTransform(vpt);
                },
                relativePan: function(point) {
                    return this.absolutePan(new fabric.Point(-point.x - this.viewportTransform[4], -point.y - this.viewportTransform[5]));
                },
                getElement: function() {
                    return this.lowerCanvasEl;
                },
                _onObjectAdded: function(obj) {
                    this.stateful && obj.setupState();
                    obj._set("canvas", this);
                    obj.setCoords();
                    this.fire("object:added", {
                        target: obj
                    });
                    obj.fire("added");
                },
                _onObjectRemoved: function(obj) {
                    this.fire("object:removed", {
                        target: obj
                    });
                    obj.fire("removed");
                    delete obj.canvas;
                },
                clearContext: function(ctx) {
                    ctx.clearRect(0, 0, this.width, this.height);
                    return this;
                },
                getContext: function() {
                    return this.contextContainer;
                },
                clear: function() {
                    this.remove.apply(this, this.getObjects());
                    this.backgroundImage = null;
                    this.overlayImage = null;
                    this.backgroundColor = "";
                    this.overlayColor = "";
                    if (this._hasITextHandlers) {
                        this.off("mouse:up", this._mouseUpITextHandler);
                        this._iTextInstances = null;
                        this._hasITextHandlers = false;
                    }
                    this.clearContext(this.contextContainer);
                    this.fire("canvas:cleared");
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                renderAll: function() {
                    var canvasToDrawOn = this.contextContainer;
                    this.renderCanvas(canvasToDrawOn, this._objects);
                    return this;
                },
                renderAndReset: function() {
                    this.isRendering = 0;
                    this.renderAll();
                },
                requestRenderAll: function() {
                    if (!this.isRendering) this.isRendering = fabric.util.requestAnimFrame(this.renderAndResetBound);
                    return this;
                },
                calcViewportBoundaries: function() {
                    var points = {}, width = this.width, height = this.height, iVpt = invertTransform(this.viewportTransform);
                    points.tl = transformPoint({
                        x: 0,
                        y: 0
                    }, iVpt);
                    points.br = transformPoint({
                        x: width,
                        y: height
                    }, iVpt);
                    points.tr = new fabric.Point(points.br.x, points.tl.y);
                    points.bl = new fabric.Point(points.tl.x, points.br.y);
                    this.vptCoords = points;
                    return points;
                },
                cancelRequestedRender: function() {
                    if (this.isRendering) {
                        fabric.util.cancelAnimFrame(this.isRendering);
                        this.isRendering = 0;
                    }
                },
                renderCanvas: function(ctx, objects) {
                    var v = this.viewportTransform, path = this.clipPath;
                    this.cancelRequestedRender();
                    this.calcViewportBoundaries();
                    this.clearContext(ctx);
                    fabric.util.setImageSmoothing(ctx, this.imageSmoothingEnabled);
                    this.fire("before:render", {
                        ctx
                    });
                    this._renderBackground(ctx);
                    ctx.save();
                    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                    this._renderObjects(ctx, objects);
                    ctx.restore();
                    if (!this.controlsAboveOverlay && this.interactive) this.drawControls(ctx);
                    if (path) {
                        path.canvas = this;
                        path.shouldCache();
                        path._transformDone = true;
                        path.renderCache({
                            forClipping: true
                        });
                        this.drawClipPathOnCanvas(ctx);
                    }
                    this._renderOverlay(ctx);
                    if (this.controlsAboveOverlay && this.interactive) this.drawControls(ctx);
                    this.fire("after:render", {
                        ctx
                    });
                },
                drawClipPathOnCanvas: function(ctx) {
                    var v = this.viewportTransform, path = this.clipPath;
                    ctx.save();
                    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                    ctx.globalCompositeOperation = "destination-in";
                    path.transform(ctx);
                    ctx.scale(1 / path.zoomX, 1 / path.zoomY);
                    ctx.drawImage(path._cacheCanvas, -path.cacheTranslationX, -path.cacheTranslationY);
                    ctx.restore();
                },
                _renderObjects: function(ctx, objects) {
                    var i, len;
                    for (i = 0, len = objects.length; i < len; ++i) objects[i] && objects[i].render(ctx);
                },
                _renderBackgroundOrOverlay: function(ctx, property) {
                    var fill = this[property + "Color"], object = this[property + "Image"], v = this.viewportTransform, needsVpt = this[property + "Vpt"];
                    if (!fill && !object) return;
                    if (fill) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(this.width, 0);
                        ctx.lineTo(this.width, this.height);
                        ctx.lineTo(0, this.height);
                        ctx.closePath();
                        ctx.fillStyle = fill.toLive ? fill.toLive(ctx, this) : fill;
                        if (needsVpt) ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                        ctx.transform(1, 0, 0, 1, fill.offsetX || 0, fill.offsetY || 0);
                        var m = fill.gradientTransform || fill.patternTransform;
                        m && ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                        ctx.fill();
                        ctx.restore();
                    }
                    if (object) {
                        ctx.save();
                        if (needsVpt) ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                        object.render(ctx);
                        ctx.restore();
                    }
                },
                _renderBackground: function(ctx) {
                    this._renderBackgroundOrOverlay(ctx, "background");
                },
                _renderOverlay: function(ctx) {
                    this._renderBackgroundOrOverlay(ctx, "overlay");
                },
                getCenter: function() {
                    return {
                        top: this.height / 2,
                        left: this.width / 2
                    };
                },
                centerObjectH: function(object) {
                    return this._centerObject(object, new fabric.Point(this.getCenter().left, object.getCenterPoint().y));
                },
                centerObjectV: function(object) {
                    return this._centerObject(object, new fabric.Point(object.getCenterPoint().x, this.getCenter().top));
                },
                centerObject: function(object) {
                    var center = this.getCenter();
                    return this._centerObject(object, new fabric.Point(center.left, center.top));
                },
                viewportCenterObject: function(object) {
                    var vpCenter = this.getVpCenter();
                    return this._centerObject(object, vpCenter);
                },
                viewportCenterObjectH: function(object) {
                    var vpCenter = this.getVpCenter();
                    this._centerObject(object, new fabric.Point(vpCenter.x, object.getCenterPoint().y));
                    return this;
                },
                viewportCenterObjectV: function(object) {
                    var vpCenter = this.getVpCenter();
                    return this._centerObject(object, new fabric.Point(object.getCenterPoint().x, vpCenter.y));
                },
                getVpCenter: function() {
                    var center = this.getCenter(), iVpt = invertTransform(this.viewportTransform);
                    return transformPoint({
                        x: center.left,
                        y: center.top
                    }, iVpt);
                },
                _centerObject: function(object, center) {
                    object.setPositionByOrigin(center, "center", "center");
                    object.setCoords();
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                toDatalessJSON: function(propertiesToInclude) {
                    return this.toDatalessObject(propertiesToInclude);
                },
                toObject: function(propertiesToInclude) {
                    return this._toObjectMethod("toObject", propertiesToInclude);
                },
                toDatalessObject: function(propertiesToInclude) {
                    return this._toObjectMethod("toDatalessObject", propertiesToInclude);
                },
                _toObjectMethod: function(methodName, propertiesToInclude) {
                    var clipPath = this.clipPath, data = {
                        version: fabric.version,
                        objects: this._toObjects(methodName, propertiesToInclude)
                    };
                    if (clipPath && !clipPath.excludeFromExport) data.clipPath = this._toObject(this.clipPath, methodName, propertiesToInclude);
                    extend(data, this.__serializeBgOverlay(methodName, propertiesToInclude));
                    fabric.util.populateWithProperties(this, data, propertiesToInclude);
                    return data;
                },
                _toObjects: function(methodName, propertiesToInclude) {
                    return this._objects.filter((function(object) {
                        return !object.excludeFromExport;
                    })).map((function(instance) {
                        return this._toObject(instance, methodName, propertiesToInclude);
                    }), this);
                },
                _toObject: function(instance, methodName, propertiesToInclude) {
                    var originalValue;
                    if (!this.includeDefaultValues) {
                        originalValue = instance.includeDefaultValues;
                        instance.includeDefaultValues = false;
                    }
                    var object = instance[methodName](propertiesToInclude);
                    if (!this.includeDefaultValues) instance.includeDefaultValues = originalValue;
                    return object;
                },
                __serializeBgOverlay: function(methodName, propertiesToInclude) {
                    var data = {}, bgImage = this.backgroundImage, overlayImage = this.overlayImage, bgColor = this.backgroundColor, overlayColor = this.overlayColor;
                    if (bgColor && bgColor.toObject) {
                        if (!bgColor.excludeFromExport) data.background = bgColor.toObject(propertiesToInclude);
                    } else if (bgColor) data.background = bgColor;
                    if (overlayColor && overlayColor.toObject) {
                        if (!overlayColor.excludeFromExport) data.overlay = overlayColor.toObject(propertiesToInclude);
                    } else if (overlayColor) data.overlay = overlayColor;
                    if (bgImage && !bgImage.excludeFromExport) data.backgroundImage = this._toObject(bgImage, methodName, propertiesToInclude);
                    if (overlayImage && !overlayImage.excludeFromExport) data.overlayImage = this._toObject(overlayImage, methodName, propertiesToInclude);
                    return data;
                },
                svgViewportTransformation: true,
                toSVG: function(options, reviver) {
                    options || (options = {});
                    options.reviver = reviver;
                    var markup = [];
                    this._setSVGPreamble(markup, options);
                    this._setSVGHeader(markup, options);
                    if (this.clipPath) markup.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n');
                    this._setSVGBgOverlayColor(markup, "background");
                    this._setSVGBgOverlayImage(markup, "backgroundImage", reviver);
                    this._setSVGObjects(markup, reviver);
                    if (this.clipPath) markup.push("</g>\n");
                    this._setSVGBgOverlayColor(markup, "overlay");
                    this._setSVGBgOverlayImage(markup, "overlayImage", reviver);
                    markup.push("</svg>");
                    return markup.join("");
                },
                _setSVGPreamble: function(markup, options) {
                    if (options.suppressPreamble) return;
                    markup.push('<?xml version="1.0" encoding="', options.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
                },
                _setSVGHeader: function(markup, options) {
                    var vpt, width = options.width || this.width, height = options.height || this.height, viewBox = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                    if (options.viewBox) viewBox = 'viewBox="' + options.viewBox.x + " " + options.viewBox.y + " " + options.viewBox.width + " " + options.viewBox.height + '" '; else if (this.svgViewportTransformation) {
                        vpt = this.viewportTransform;
                        viewBox = 'viewBox="' + toFixed(-vpt[4] / vpt[0], NUM_FRACTION_DIGITS) + " " + toFixed(-vpt[5] / vpt[3], NUM_FRACTION_DIGITS) + " " + toFixed(this.width / vpt[0], NUM_FRACTION_DIGITS) + " " + toFixed(this.height / vpt[3], NUM_FRACTION_DIGITS) + '" ';
                    }
                    markup.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', width, '" ', 'height="', height, '" ', viewBox, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", fabric.version, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(options), "</defs>\n");
                },
                createSVGClipPathMarkup: function(options) {
                    var clipPath = this.clipPath;
                    if (clipPath) {
                        clipPath.clipPathId = "CLIPPATH_" + fabric.Object.__uid++;
                        return '<clipPath id="' + clipPath.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(options.reviver) + "</clipPath>\n";
                    }
                    return "";
                },
                createSVGRefElementsMarkup: function() {
                    var _this = this, markup = [ "background", "overlay" ].map((function(prop) {
                        var fill = _this[prop + "Color"];
                        if (fill && fill.toLive) {
                            var shouldTransform = _this[prop + "Vpt"], vpt = _this.viewportTransform, object = {
                                width: _this.width / (shouldTransform ? vpt[0] : 1),
                                height: _this.height / (shouldTransform ? vpt[3] : 1)
                            };
                            return fill.toSVG(object, {
                                additionalTransform: shouldTransform ? fabric.util.matrixToSVG(vpt) : ""
                            });
                        }
                    }));
                    return markup.join("");
                },
                createSVGFontFacesMarkup: function() {
                    var obj, fontFamily, style, row, rowIndex, _char, charIndex, i, len, markup = "", fontList = {}, fontPaths = fabric.fontPaths, objects = [];
                    this._objects.forEach((function add(object) {
                        objects.push(object);
                        if (object._objects) object._objects.forEach(add);
                    }));
                    for (i = 0, len = objects.length; i < len; i++) {
                        obj = objects[i];
                        fontFamily = obj.fontFamily;
                        if (obj.type.indexOf("text") === -1 || fontList[fontFamily] || !fontPaths[fontFamily]) continue;
                        fontList[fontFamily] = true;
                        if (!obj.styles) continue;
                        style = obj.styles;
                        for (rowIndex in style) {
                            row = style[rowIndex];
                            for (charIndex in row) {
                                _char = row[charIndex];
                                fontFamily = _char.fontFamily;
                                if (!fontList[fontFamily] && fontPaths[fontFamily]) fontList[fontFamily] = true;
                            }
                        }
                    }
                    for (var j in fontList) markup += [ "\t\t@font-face {\n", "\t\t\tfont-family: '", j, "';\n", "\t\t\tsrc: url('", fontPaths[j], "');\n", "\t\t}\n" ].join("");
                    if (markup) markup = [ '\t<style type="text/css">', "<![CDATA[\n", markup, "]]>", "</style>\n" ].join("");
                    return markup;
                },
                _setSVGObjects: function(markup, reviver) {
                    var instance, i, len, objects = this._objects;
                    for (i = 0, len = objects.length; i < len; i++) {
                        instance = objects[i];
                        if (instance.excludeFromExport) continue;
                        this._setSVGObject(markup, instance, reviver);
                    }
                },
                _setSVGObject: function(markup, instance, reviver) {
                    markup.push(instance.toSVG(reviver));
                },
                _setSVGBgOverlayImage: function(markup, property, reviver) {
                    if (this[property] && !this[property].excludeFromExport && this[property].toSVG) markup.push(this[property].toSVG(reviver));
                },
                _setSVGBgOverlayColor: function(markup, property) {
                    var filler = this[property + "Color"], vpt = this.viewportTransform, finalWidth = this.width, finalHeight = this.height;
                    if (!filler) return;
                    if (filler.toLive) {
                        var repeat = filler.repeat, iVpt = fabric.util.invertTransform(vpt), shouldInvert = this[property + "Vpt"], additionalTransform = shouldInvert ? fabric.util.matrixToSVG(iVpt) : "";
                        markup.push('<rect transform="' + additionalTransform + " translate(", finalWidth / 2, ",", finalHeight / 2, ')"', ' x="', filler.offsetX - finalWidth / 2, '" y="', filler.offsetY - finalHeight / 2, '" ', 'width="', repeat === "repeat-y" || repeat === "no-repeat" ? filler.source.width : finalWidth, '" height="', repeat === "repeat-x" || repeat === "no-repeat" ? filler.source.height : finalHeight, '" fill="url(#SVGID_' + filler.id + ')"', "></rect>\n");
                    } else markup.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', filler, '"', "></rect>\n");
                },
                sendToBack: function(object) {
                    if (!object) return this;
                    var i, obj, objs, activeSelection = this._activeObject;
                    if (object === activeSelection && object.type === "activeSelection") {
                        objs = activeSelection._objects;
                        for (i = objs.length; i--; ) {
                            obj = objs[i];
                            removeFromArray(this._objects, obj);
                            this._objects.unshift(obj);
                        }
                    } else {
                        removeFromArray(this._objects, object);
                        this._objects.unshift(object);
                    }
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                bringToFront: function(object) {
                    if (!object) return this;
                    var i, obj, objs, activeSelection = this._activeObject;
                    if (object === activeSelection && object.type === "activeSelection") {
                        objs = activeSelection._objects;
                        for (i = 0; i < objs.length; i++) {
                            obj = objs[i];
                            removeFromArray(this._objects, obj);
                            this._objects.push(obj);
                        }
                    } else {
                        removeFromArray(this._objects, object);
                        this._objects.push(object);
                    }
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                sendBackwards: function(object, intersecting) {
                    if (!object) return this;
                    var i, obj, idx, newIdx, objs, activeSelection = this._activeObject, objsMoved = 0;
                    if (object === activeSelection && object.type === "activeSelection") {
                        objs = activeSelection._objects;
                        for (i = 0; i < objs.length; i++) {
                            obj = objs[i];
                            idx = this._objects.indexOf(obj);
                            if (idx > 0 + objsMoved) {
                                newIdx = idx - 1;
                                removeFromArray(this._objects, obj);
                                this._objects.splice(newIdx, 0, obj);
                            }
                            objsMoved++;
                        }
                    } else {
                        idx = this._objects.indexOf(object);
                        if (idx !== 0) {
                            newIdx = this._findNewLowerIndex(object, idx, intersecting);
                            removeFromArray(this._objects, object);
                            this._objects.splice(newIdx, 0, object);
                        }
                    }
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                _findNewLowerIndex: function(object, idx, intersecting) {
                    var newIdx, i;
                    if (intersecting) {
                        newIdx = idx;
                        for (i = idx - 1; i >= 0; --i) {
                            var isIntersecting = object.intersectsWithObject(this._objects[i]) || object.isContainedWithinObject(this._objects[i]) || this._objects[i].isContainedWithinObject(object);
                            if (isIntersecting) {
                                newIdx = i;
                                break;
                            }
                        }
                    } else newIdx = idx - 1;
                    return newIdx;
                },
                bringForward: function(object, intersecting) {
                    if (!object) return this;
                    var i, obj, idx, newIdx, objs, activeSelection = this._activeObject, objsMoved = 0;
                    if (object === activeSelection && object.type === "activeSelection") {
                        objs = activeSelection._objects;
                        for (i = objs.length; i--; ) {
                            obj = objs[i];
                            idx = this._objects.indexOf(obj);
                            if (idx < this._objects.length - 1 - objsMoved) {
                                newIdx = idx + 1;
                                removeFromArray(this._objects, obj);
                                this._objects.splice(newIdx, 0, obj);
                            }
                            objsMoved++;
                        }
                    } else {
                        idx = this._objects.indexOf(object);
                        if (idx !== this._objects.length - 1) {
                            newIdx = this._findNewUpperIndex(object, idx, intersecting);
                            removeFromArray(this._objects, object);
                            this._objects.splice(newIdx, 0, object);
                        }
                    }
                    this.renderOnAddRemove && this.requestRenderAll();
                    return this;
                },
                _findNewUpperIndex: function(object, idx, intersecting) {
                    var newIdx, i, len;
                    if (intersecting) {
                        newIdx = idx;
                        for (i = idx + 1, len = this._objects.length; i < len; ++i) {
                            var isIntersecting = object.intersectsWithObject(this._objects[i]) || object.isContainedWithinObject(this._objects[i]) || this._objects[i].isContainedWithinObject(object);
                            if (isIntersecting) {
                                newIdx = i;
                                break;
                            }
                        }
                    } else newIdx = idx + 1;
                    return newIdx;
                },
                moveTo: function(object, index) {
                    removeFromArray(this._objects, object);
                    this._objects.splice(index, 0, object);
                    return this.renderOnAddRemove && this.requestRenderAll();
                },
                dispose: function() {
                    if (this.isRendering) {
                        fabric.util.cancelAnimFrame(this.isRendering);
                        this.isRendering = 0;
                    }
                    this.forEachObject((function(object) {
                        object.dispose && object.dispose();
                    }));
                    this._objects = [];
                    if (this.backgroundImage && this.backgroundImage.dispose) this.backgroundImage.dispose();
                    this.backgroundImage = null;
                    if (this.overlayImage && this.overlayImage.dispose) this.overlayImage.dispose();
                    this.overlayImage = null;
                    this._iTextInstances = null;
                    this.contextContainer = null;
                    this.lowerCanvasEl.classList.remove("lower-canvas");
                    this.lowerCanvasEl.style = this._originalCanvasStyle;
                    delete this._originalCanvasStyle;
                    this.lowerCanvasEl.setAttribute("width", this.width);
                    this.lowerCanvasEl.setAttribute("height", this.height);
                    fabric.util.cleanUpJsdomNode(this.lowerCanvasEl);
                    this.lowerCanvasEl = void 0;
                    return this;
                },
                toString: function() {
                    return "#<fabric.Canvas (" + this.complexity() + "): " + "{ objects: " + this._objects.length + " }>";
                }
            });
            extend(fabric.StaticCanvas.prototype, fabric.Observable);
            extend(fabric.StaticCanvas.prototype, fabric.Collection);
            extend(fabric.StaticCanvas.prototype, fabric.DataURLExporter);
            extend(fabric.StaticCanvas, {
                EMPTY_JSON: '{"objects": [], "background": "white"}',
                supports: function(methodName) {
                    var el = createCanvasElement();
                    if (!el || !el.getContext) return null;
                    var ctx = el.getContext("2d");
                    if (!ctx) return null;
                    switch (methodName) {
                      case "setLineDash":
                        return typeof ctx.setLineDash !== "undefined";

                      default:
                        return null;
                    }
                }
            });
            fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject;
            if (fabric.isLikelyNode) {
                fabric.StaticCanvas.prototype.createPNGStream = function() {
                    var impl = getNodeCanvas(this.lowerCanvasEl);
                    return impl && impl.createPNGStream();
                };
                fabric.StaticCanvas.prototype.createJPEGStream = function(opts) {
                    var impl = getNodeCanvas(this.lowerCanvasEl);
                    return impl && impl.createJPEGStream(opts);
                };
            }
        })();
        fabric.BaseBrush = fabric.util.createClass({
            color: "rgb(0, 0, 0)",
            width: 1,
            shadow: null,
            strokeLineCap: "round",
            strokeLineJoin: "round",
            strokeMiterLimit: 10,
            strokeDashArray: null,
            limitedToCanvasSize: false,
            _setBrushStyles: function() {
                var ctx = this.canvas.contextTop;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.lineCap = this.strokeLineCap;
                ctx.miterLimit = this.strokeMiterLimit;
                ctx.lineJoin = this.strokeLineJoin;
                ctx.setLineDash(this.strokeDashArray || []);
            },
            _saveAndTransform: function(ctx) {
                var v = this.canvas.viewportTransform;
                ctx.save();
                ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
            },
            _setShadow: function() {
                if (!this.shadow) return;
                var canvas = this.canvas, shadow = this.shadow, ctx = canvas.contextTop, zoom = canvas.getZoom();
                if (canvas && canvas._isRetinaScaling()) zoom *= fabric.devicePixelRatio;
                ctx.shadowColor = shadow.color;
                ctx.shadowBlur = shadow.blur * zoom;
                ctx.shadowOffsetX = shadow.offsetX * zoom;
                ctx.shadowOffsetY = shadow.offsetY * zoom;
            },
            needsFullRender: function() {
                var color = new fabric.Color(this.color);
                return color.getAlpha() < 1 || !!this.shadow;
            },
            _resetShadow: function() {
                var ctx = this.canvas.contextTop;
                ctx.shadowColor = "";
                ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
            },
            _isOutSideCanvas: function(pointer) {
                return pointer.x < 0 || pointer.x > this.canvas.getWidth() || pointer.y < 0 || pointer.y > this.canvas.getHeight();
            }
        });
        (function() {
            fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, {
                decimate: .4,
                initialize: function(canvas) {
                    this.canvas = canvas;
                    this._points = [];
                },
                _drawSegment: function(ctx, p1, p2) {
                    var midPoint = p1.midPointFrom(p2);
                    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
                    return midPoint;
                },
                onMouseDown: function(pointer, options) {
                    if (!this.canvas._isMainEvent(options.e)) return;
                    this._prepareForDrawing(pointer);
                    this._captureDrawingPath(pointer);
                    this._render();
                },
                onMouseMove: function(pointer, options) {
                    if (!this.canvas._isMainEvent(options.e)) return;
                    if (this.limitedToCanvasSize === true && this._isOutSideCanvas(pointer)) return;
                    if (this._captureDrawingPath(pointer) && this._points.length > 1) if (this.needsFullRender()) {
                        this.canvas.clearContext(this.canvas.contextTop);
                        this._render();
                    } else {
                        var points = this._points, length = points.length, ctx = this.canvas.contextTop;
                        this._saveAndTransform(ctx);
                        if (this.oldEnd) {
                            ctx.beginPath();
                            ctx.moveTo(this.oldEnd.x, this.oldEnd.y);
                        }
                        this.oldEnd = this._drawSegment(ctx, points[length - 2], points[length - 1], true);
                        ctx.stroke();
                        ctx.restore();
                    }
                },
                onMouseUp: function(options) {
                    if (!this.canvas._isMainEvent(options.e)) return true;
                    this.oldEnd = void 0;
                    this._finalizeAndAddPath();
                    return false;
                },
                _prepareForDrawing: function(pointer) {
                    var p = new fabric.Point(pointer.x, pointer.y);
                    this._reset();
                    this._addPoint(p);
                    this.canvas.contextTop.moveTo(p.x, p.y);
                },
                _addPoint: function(point) {
                    if (this._points.length > 1 && point.eq(this._points[this._points.length - 1])) return false;
                    this._points.push(point);
                    return true;
                },
                _reset: function() {
                    this._points = [];
                    this._setBrushStyles();
                    this._setShadow();
                },
                _captureDrawingPath: function(pointer) {
                    var pointerPoint = new fabric.Point(pointer.x, pointer.y);
                    return this._addPoint(pointerPoint);
                },
                _render: function() {
                    var i, len, ctx = this.canvas.contextTop, p1 = this._points[0], p2 = this._points[1];
                    this._saveAndTransform(ctx);
                    ctx.beginPath();
                    if (this._points.length === 2 && p1.x === p2.x && p1.y === p2.y) {
                        var width = this.width / 1e3;
                        p1 = new fabric.Point(p1.x, p1.y);
                        p2 = new fabric.Point(p2.x, p2.y);
                        p1.x -= width;
                        p2.x += width;
                    }
                    ctx.moveTo(p1.x, p1.y);
                    for (i = 1, len = this._points.length; i < len; i++) {
                        this._drawSegment(ctx, p1, p2);
                        p1 = this._points[i];
                        p2 = this._points[i + 1];
                    }
                    ctx.lineTo(p1.x, p1.y);
                    ctx.stroke();
                    ctx.restore();
                },
                convertPointsToSVGPath: function(points) {
                    var correction = this.width / 1e3;
                    return fabric.util.getSmoothPathFromPoints(points, correction);
                },
                _isEmptySVGPath: function(pathData) {
                    var pathString = fabric.util.joinPath(pathData);
                    return pathString === "M 0 0 Q 0 0 0 0 L 0 0";
                },
                createPath: function(pathData) {
                    var path = new fabric.Path(pathData, {
                        fill: null,
                        stroke: this.color,
                        strokeWidth: this.width,
                        strokeLineCap: this.strokeLineCap,
                        strokeMiterLimit: this.strokeMiterLimit,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeDashArray: this.strokeDashArray
                    });
                    if (this.shadow) {
                        this.shadow.affectStroke = true;
                        path.shadow = new fabric.Shadow(this.shadow);
                    }
                    return path;
                },
                decimatePoints: function(points, distance) {
                    if (points.length <= 2) return points;
                    var i, cDistance, zoom = this.canvas.getZoom(), adjustedDistance = Math.pow(distance / zoom, 2), l = points.length - 1, lastPoint = points[0], newPoints = [ lastPoint ];
                    for (i = 1; i < l - 1; i++) {
                        cDistance = Math.pow(lastPoint.x - points[i].x, 2) + Math.pow(lastPoint.y - points[i].y, 2);
                        if (cDistance >= adjustedDistance) {
                            lastPoint = points[i];
                            newPoints.push(lastPoint);
                        }
                    }
                    newPoints.push(points[l]);
                    return newPoints;
                },
                _finalizeAndAddPath: function() {
                    var ctx = this.canvas.contextTop;
                    ctx.closePath();
                    if (this.decimate) this._points = this.decimatePoints(this._points, this.decimate);
                    var pathData = this.convertPointsToSVGPath(this._points);
                    if (this._isEmptySVGPath(pathData)) {
                        this.canvas.requestRenderAll();
                        return;
                    }
                    var path = this.createPath(pathData);
                    this.canvas.clearContext(this.canvas.contextTop);
                    this.canvas.fire("before:path:created", {
                        path
                    });
                    this.canvas.add(path);
                    this.canvas.requestRenderAll();
                    path.setCoords();
                    this._resetShadow();
                    this.canvas.fire("path:created", {
                        path
                    });
                }
            });
        })();
        fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, {
            width: 10,
            initialize: function(canvas) {
                this.canvas = canvas;
                this.points = [];
            },
            drawDot: function(pointer) {
                var point = this.addPoint(pointer), ctx = this.canvas.contextTop;
                this._saveAndTransform(ctx);
                this.dot(ctx, point);
                ctx.restore();
            },
            dot: function(ctx, point) {
                ctx.fillStyle = point.fill;
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
                ctx.closePath();
                ctx.fill();
            },
            onMouseDown: function(pointer) {
                this.points.length = 0;
                this.canvas.clearContext(this.canvas.contextTop);
                this._setShadow();
                this.drawDot(pointer);
            },
            _render: function() {
                var i, len, ctx = this.canvas.contextTop, points = this.points;
                this._saveAndTransform(ctx);
                for (i = 0, len = points.length; i < len; i++) this.dot(ctx, points[i]);
                ctx.restore();
            },
            onMouseMove: function(pointer) {
                if (this.limitedToCanvasSize === true && this._isOutSideCanvas(pointer)) return;
                if (this.needsFullRender()) {
                    this.canvas.clearContext(this.canvas.contextTop);
                    this.addPoint(pointer);
                    this._render();
                } else this.drawDot(pointer);
            },
            onMouseUp: function() {
                var i, len, originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
                this.canvas.renderOnAddRemove = false;
                var circles = [];
                for (i = 0, len = this.points.length; i < len; i++) {
                    var point = this.points[i], circle = new fabric.Circle({
                        radius: point.radius,
                        left: point.x,
                        top: point.y,
                        originX: "center",
                        originY: "center",
                        fill: point.fill
                    });
                    this.shadow && (circle.shadow = new fabric.Shadow(this.shadow));
                    circles.push(circle);
                }
                var group = new fabric.Group(circles);
                group.canvas = this.canvas;
                this.canvas.fire("before:path:created", {
                    path: group
                });
                this.canvas.add(group);
                this.canvas.fire("path:created", {
                    path: group
                });
                this.canvas.clearContext(this.canvas.contextTop);
                this._resetShadow();
                this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
                this.canvas.requestRenderAll();
            },
            addPoint: function(pointer) {
                var pointerPoint = new fabric.Point(pointer.x, pointer.y), circleRadius = fabric.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2, circleColor = new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0, 100) / 100).toRgba();
                pointerPoint.radius = circleRadius;
                pointerPoint.fill = circleColor;
                this.points.push(pointerPoint);
                return pointerPoint;
            }
        });
        fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {
            width: 10,
            density: 20,
            dotWidth: 1,
            dotWidthVariance: 1,
            randomOpacity: false,
            optimizeOverlapping: true,
            initialize: function(canvas) {
                this.canvas = canvas;
                this.sprayChunks = [];
            },
            onMouseDown: function(pointer) {
                this.sprayChunks.length = 0;
                this.canvas.clearContext(this.canvas.contextTop);
                this._setShadow();
                this.addSprayChunk(pointer);
                this.render(this.sprayChunkPoints);
            },
            onMouseMove: function(pointer) {
                if (this.limitedToCanvasSize === true && this._isOutSideCanvas(pointer)) return;
                this.addSprayChunk(pointer);
                this.render(this.sprayChunkPoints);
            },
            onMouseUp: function() {
                var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
                this.canvas.renderOnAddRemove = false;
                var rects = [];
                for (var i = 0, ilen = this.sprayChunks.length; i < ilen; i++) {
                    var sprayChunk = this.sprayChunks[i];
                    for (var j = 0, jlen = sprayChunk.length; j < jlen; j++) {
                        var rect = new fabric.Rect({
                            width: sprayChunk[j].width,
                            height: sprayChunk[j].width,
                            left: sprayChunk[j].x + 1,
                            top: sprayChunk[j].y + 1,
                            originX: "center",
                            originY: "center",
                            fill: this.color
                        });
                        rects.push(rect);
                    }
                }
                if (this.optimizeOverlapping) rects = this._getOptimizedRects(rects);
                var group = new fabric.Group(rects);
                this.shadow && group.set("shadow", new fabric.Shadow(this.shadow));
                this.canvas.fire("before:path:created", {
                    path: group
                });
                this.canvas.add(group);
                this.canvas.fire("path:created", {
                    path: group
                });
                this.canvas.clearContext(this.canvas.contextTop);
                this._resetShadow();
                this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
                this.canvas.requestRenderAll();
            },
            _getOptimizedRects: function(rects) {
                var key, i, len, uniqueRects = {};
                for (i = 0, len = rects.length; i < len; i++) {
                    key = rects[i].left + "" + rects[i].top;
                    if (!uniqueRects[key]) uniqueRects[key] = rects[i];
                }
                var uniqueRectsArray = [];
                for (key in uniqueRects) uniqueRectsArray.push(uniqueRects[key]);
                return uniqueRectsArray;
            },
            render: function(sprayChunk) {
                var i, len, ctx = this.canvas.contextTop;
                ctx.fillStyle = this.color;
                this._saveAndTransform(ctx);
                for (i = 0, len = sprayChunk.length; i < len; i++) {
                    var point = sprayChunk[i];
                    if (typeof point.opacity !== "undefined") ctx.globalAlpha = point.opacity;
                    ctx.fillRect(point.x, point.y, point.width, point.width);
                }
                ctx.restore();
            },
            _render: function() {
                var i, ilen, ctx = this.canvas.contextTop;
                ctx.fillStyle = this.color;
                this._saveAndTransform(ctx);
                for (i = 0, ilen = this.sprayChunks.length; i < ilen; i++) this.render(this.sprayChunks[i]);
                ctx.restore();
            },
            addSprayChunk: function(pointer) {
                this.sprayChunkPoints = [];
                var x, y, width, i, radius = this.width / 2;
                for (i = 0; i < this.density; i++) {
                    x = fabric.util.getRandomInt(pointer.x - radius, pointer.x + radius);
                    y = fabric.util.getRandomInt(pointer.y - radius, pointer.y + radius);
                    if (this.dotWidthVariance) width = fabric.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance); else width = this.dotWidth;
                    var point = new fabric.Point(x, y);
                    point.width = width;
                    if (this.randomOpacity) point.opacity = fabric.util.getRandomInt(0, 100) / 100;
                    this.sprayChunkPoints.push(point);
                }
                this.sprayChunks.push(this.sprayChunkPoints);
            }
        });
        fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, {
            getPatternSrc: function() {
                var dotWidth = 20, dotDistance = 5, patternCanvas = fabric.util.createCanvasElement(), patternCtx = patternCanvas.getContext("2d");
                patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;
                patternCtx.fillStyle = this.color;
                patternCtx.beginPath();
                patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
                patternCtx.closePath();
                patternCtx.fill();
                return patternCanvas;
            },
            getPatternSrcFunction: function() {
                return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
            },
            getPattern: function() {
                return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat");
            },
            _setBrushStyles: function() {
                this.callSuper("_setBrushStyles");
                this.canvas.contextTop.strokeStyle = this.getPattern();
            },
            createPath: function(pathData) {
                var path = this.callSuper("createPath", pathData), topLeft = path._getLeftTopCoords().scalarAdd(path.strokeWidth / 2);
                path.stroke = new fabric.Pattern({
                    source: this.source || this.getPatternSrcFunction(),
                    offsetX: -topLeft.x,
                    offsetY: -topLeft.y
                });
                return path;
            }
        });
        (function() {
            var getPointer = fabric.util.getPointer, degreesToRadians = fabric.util.degreesToRadians, isTouchEvent = fabric.util.isTouchEvent;
            fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, {
                initialize: function(el, options) {
                    options || (options = {});
                    this.renderAndResetBound = this.renderAndReset.bind(this);
                    this.requestRenderAllBound = this.requestRenderAll.bind(this);
                    this._initStatic(el, options);
                    this._initInteractive();
                    this._createCacheCanvas();
                },
                uniformScaling: true,
                uniScaleKey: "shiftKey",
                centeredScaling: false,
                centeredRotation: false,
                centeredKey: "altKey",
                altActionKey: "shiftKey",
                interactive: true,
                selection: true,
                selectionKey: "shiftKey",
                altSelectionKey: null,
                selectionColor: "rgba(100, 100, 255, 0.3)",
                selectionDashArray: [],
                selectionBorderColor: "rgba(255, 255, 255, 0.3)",
                selectionLineWidth: 1,
                selectionFullyContained: false,
                hoverCursor: "move",
                moveCursor: "move",
                defaultCursor: "default",
                freeDrawingCursor: "crosshair",
                rotationCursor: "crosshair",
                notAllowedCursor: "not-allowed",
                containerClass: "canvas-container",
                perPixelTargetFind: false,
                targetFindTolerance: 0,
                skipTargetFind: false,
                isDrawingMode: false,
                preserveObjectStacking: false,
                snapAngle: 0,
                snapThreshold: null,
                stopContextMenu: false,
                fireRightClick: false,
                fireMiddleClick: false,
                targets: [],
                _hoveredTarget: null,
                _hoveredTargets: [],
                _initInteractive: function() {
                    this._currentTransform = null;
                    this._groupSelector = null;
                    this._initWrapperElement();
                    this._createUpperCanvas();
                    this._initEventListeners();
                    this._initRetinaScaling();
                    this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this);
                    this.calcOffset();
                },
                _chooseObjectsToRender: function() {
                    var object, objsToRender, activeGroupObjects, activeObjects = this.getActiveObjects();
                    if (activeObjects.length > 0 && !this.preserveObjectStacking) {
                        objsToRender = [];
                        activeGroupObjects = [];
                        for (var i = 0, length = this._objects.length; i < length; i++) {
                            object = this._objects[i];
                            if (activeObjects.indexOf(object) === -1) objsToRender.push(object); else activeGroupObjects.push(object);
                        }
                        if (activeObjects.length > 1) this._activeObject._objects = activeGroupObjects;
                        objsToRender.push.apply(objsToRender, activeGroupObjects);
                    } else objsToRender = this._objects;
                    return objsToRender;
                },
                renderAll: function() {
                    if (this.contextTopDirty && !this._groupSelector && !this.isDrawingMode) {
                        this.clearContext(this.contextTop);
                        this.contextTopDirty = false;
                    }
                    if (this.hasLostContext) this.renderTopLayer(this.contextTop);
                    var canvasToDrawOn = this.contextContainer;
                    this.renderCanvas(canvasToDrawOn, this._chooseObjectsToRender());
                    return this;
                },
                renderTopLayer: function(ctx) {
                    ctx.save();
                    if (this.isDrawingMode && this._isCurrentlyDrawing) {
                        this.freeDrawingBrush && this.freeDrawingBrush._render();
                        this.contextTopDirty = true;
                    }
                    if (this.selection && this._groupSelector) {
                        this._drawSelection(ctx);
                        this.contextTopDirty = true;
                    }
                    ctx.restore();
                },
                renderTop: function() {
                    var ctx = this.contextTop;
                    this.clearContext(ctx);
                    this.renderTopLayer(ctx);
                    this.fire("after:render");
                    return this;
                },
                _normalizePointer: function(object, pointer) {
                    var m = object.calcTransformMatrix(), invertedM = fabric.util.invertTransform(m), vptPointer = this.restorePointerVpt(pointer);
                    return fabric.util.transformPoint(vptPointer, invertedM);
                },
                isTargetTransparent: function(target, x, y) {
                    if (target.shouldCache() && target._cacheCanvas && target !== this._activeObject) {
                        var normalizedPointer = this._normalizePointer(target, {
                            x,
                            y
                        }), targetRelativeX = Math.max(target.cacheTranslationX + normalizedPointer.x * target.zoomX, 0), targetRelativeY = Math.max(target.cacheTranslationY + normalizedPointer.y * target.zoomY, 0);
                        var isTransparent = fabric.util.isTransparent(target._cacheContext, Math.round(targetRelativeX), Math.round(targetRelativeY), this.targetFindTolerance);
                        return isTransparent;
                    }
                    var ctx = this.contextCache, originalColor = target.selectionBackgroundColor, v = this.viewportTransform;
                    target.selectionBackgroundColor = "";
                    this.clearContext(ctx);
                    ctx.save();
                    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                    target.render(ctx);
                    ctx.restore();
                    target.selectionBackgroundColor = originalColor;
                    isTransparent = fabric.util.isTransparent(ctx, x, y, this.targetFindTolerance);
                    return isTransparent;
                },
                _isSelectionKeyPressed: function(e) {
                    var selectionKeyPressed = false;
                    if (Object.prototype.toString.call(this.selectionKey) === "[object Array]") selectionKeyPressed = !!this.selectionKey.find((function(key) {
                        return e[key] === true;
                    })); else selectionKeyPressed = e[this.selectionKey];
                    return selectionKeyPressed;
                },
                _shouldClearSelection: function(e, target) {
                    var activeObjects = this.getActiveObjects(), activeObject = this._activeObject;
                    return !target || target && activeObject && activeObjects.length > 1 && activeObjects.indexOf(target) === -1 && activeObject !== target && !this._isSelectionKeyPressed(e) || target && !target.evented || target && !target.selectable && activeObject && activeObject !== target;
                },
                _shouldCenterTransform: function(target, action, altKey) {
                    if (!target) return;
                    var centerTransform;
                    if (action === "scale" || action === "scaleX" || action === "scaleY" || action === "resizing") centerTransform = this.centeredScaling || target.centeredScaling; else if (action === "rotate") centerTransform = this.centeredRotation || target.centeredRotation;
                    return centerTransform ? !altKey : altKey;
                },
                _getOriginFromCorner: function(target, corner) {
                    var origin = {
                        x: target.originX,
                        y: target.originY
                    };
                    if (corner === "ml" || corner === "tl" || corner === "bl") origin.x = "right"; else if (corner === "mr" || corner === "tr" || corner === "br") origin.x = "left";
                    if (corner === "tl" || corner === "mt" || corner === "tr") origin.y = "bottom"; else if (corner === "bl" || corner === "mb" || corner === "br") origin.y = "top";
                    return origin;
                },
                _getActionFromCorner: function(alreadySelected, corner, e, target) {
                    if (!corner || !alreadySelected) return "drag";
                    var control = target.controls[corner];
                    return control.getActionName(e, control, target);
                },
                _setupCurrentTransform: function(e, target, alreadySelected) {
                    if (!target) return;
                    var pointer = this.getPointer(e), corner = target.__corner, control = target.controls[corner], actionHandler = alreadySelected && corner ? control.getActionHandler(e, target, control) : fabric.controlsUtils.dragHandler, action = this._getActionFromCorner(alreadySelected, corner, e, target), origin = this._getOriginFromCorner(target, corner), altKey = e[this.centeredKey], transform = {
                        target,
                        action,
                        actionHandler,
                        corner,
                        scaleX: target.scaleX,
                        scaleY: target.scaleY,
                        skewX: target.skewX,
                        skewY: target.skewY,
                        offsetX: pointer.x - target.left,
                        offsetY: pointer.y - target.top,
                        originX: origin.x,
                        originY: origin.y,
                        ex: pointer.x,
                        ey: pointer.y,
                        lastX: pointer.x,
                        lastY: pointer.y,
                        theta: degreesToRadians(target.angle),
                        width: target.width * target.scaleX,
                        shiftKey: e.shiftKey,
                        altKey,
                        original: fabric.util.saveObjectTransform(target)
                    };
                    if (this._shouldCenterTransform(target, action, altKey)) {
                        transform.originX = "center";
                        transform.originY = "center";
                    }
                    transform.original.originX = origin.x;
                    transform.original.originY = origin.y;
                    this._currentTransform = transform;
                    this._beforeTransform(e);
                },
                setCursor: function(value) {
                    this.upperCanvasEl.style.cursor = value;
                },
                _drawSelection: function(ctx) {
                    var selector = this._groupSelector, viewportStart = new fabric.Point(selector.ex, selector.ey), start = fabric.util.transformPoint(viewportStart, this.viewportTransform), viewportExtent = new fabric.Point(selector.ex + selector.left, selector.ey + selector.top), extent = fabric.util.transformPoint(viewportExtent, this.viewportTransform), minX = Math.min(start.x, extent.x), minY = Math.min(start.y, extent.y), maxX = Math.max(start.x, extent.x), maxY = Math.max(start.y, extent.y), strokeOffset = this.selectionLineWidth / 2;
                    if (this.selectionColor) {
                        ctx.fillStyle = this.selectionColor;
                        ctx.fillRect(minX, minY, maxX - minX, maxY - minY);
                    }
                    if (!this.selectionLineWidth || !this.selectionBorderColor) return;
                    ctx.lineWidth = this.selectionLineWidth;
                    ctx.strokeStyle = this.selectionBorderColor;
                    minX += strokeOffset;
                    minY += strokeOffset;
                    maxX -= strokeOffset;
                    maxY -= strokeOffset;
                    fabric.Object.prototype._setLineDash.call(this, ctx, this.selectionDashArray);
                    ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
                },
                findTarget: function(e, skipGroup) {
                    if (this.skipTargetFind) return;
                    var activeTarget, activeTargetSubs, ignoreZoom = true, pointer = this.getPointer(e, ignoreZoom), activeObject = this._activeObject, aObjects = this.getActiveObjects(), isTouch = isTouchEvent(e), shouldLookForActive = aObjects.length > 1 && !skipGroup || aObjects.length === 1;
                    this.targets = [];
                    if (shouldLookForActive && activeObject._findTargetCorner(pointer, isTouch)) return activeObject;
                    if (aObjects.length > 1 && !skipGroup && activeObject === this._searchPossibleTargets([ activeObject ], pointer)) return activeObject;
                    if (aObjects.length === 1 && activeObject === this._searchPossibleTargets([ activeObject ], pointer)) if (!this.preserveObjectStacking) return activeObject; else {
                        activeTarget = activeObject;
                        activeTargetSubs = this.targets;
                        this.targets = [];
                    }
                    var target = this._searchPossibleTargets(this._objects, pointer);
                    if (e[this.altSelectionKey] && target && activeTarget && target !== activeTarget) {
                        target = activeTarget;
                        this.targets = activeTargetSubs;
                    }
                    return target;
                },
                _checkTarget: function(pointer, obj, globalPointer) {
                    if (obj && obj.visible && obj.evented && obj.containsPoint(pointer)) if ((this.perPixelTargetFind || obj.perPixelTargetFind) && !obj.isEditing) {
                        var isTransparent = this.isTargetTransparent(obj, globalPointer.x, globalPointer.y);
                        if (!isTransparent) return true;
                    } else return true;
                },
                _searchPossibleTargets: function(objects, pointer) {
                    var target, subTarget, i = objects.length;
                    while (i--) {
                        var objToCheck = objects[i];
                        var pointerToUse = objToCheck.group ? this._normalizePointer(objToCheck.group, pointer) : pointer;
                        if (this._checkTarget(pointerToUse, objToCheck, pointer)) {
                            target = objects[i];
                            if (target.subTargetCheck && target instanceof fabric.Group) {
                                subTarget = this._searchPossibleTargets(target._objects, pointer);
                                subTarget && this.targets.push(subTarget);
                            }
                            break;
                        }
                    }
                    return target;
                },
                restorePointerVpt: function(pointer) {
                    return fabric.util.transformPoint(pointer, fabric.util.invertTransform(this.viewportTransform));
                },
                getPointer: function(e, ignoreZoom) {
                    if (this._absolutePointer && !ignoreZoom) return this._absolutePointer;
                    if (this._pointer && ignoreZoom) return this._pointer;
                    var cssScale, pointer = getPointer(e), upperCanvasEl = this.upperCanvasEl, bounds = upperCanvasEl.getBoundingClientRect(), boundsWidth = bounds.width || 0, boundsHeight = bounds.height || 0;
                    if (!boundsWidth || !boundsHeight) {
                        if ("top" in bounds && "bottom" in bounds) boundsHeight = Math.abs(bounds.top - bounds.bottom);
                        if ("right" in bounds && "left" in bounds) boundsWidth = Math.abs(bounds.right - bounds.left);
                    }
                    this.calcOffset();
                    pointer.x = pointer.x - this._offset.left;
                    pointer.y = pointer.y - this._offset.top;
                    if (!ignoreZoom) pointer = this.restorePointerVpt(pointer);
                    var retinaScaling = this.getRetinaScaling();
                    if (retinaScaling !== 1) {
                        pointer.x /= retinaScaling;
                        pointer.y /= retinaScaling;
                    }
                    if (boundsWidth === 0 || boundsHeight === 0) cssScale = {
                        width: 1,
                        height: 1
                    }; else cssScale = {
                        width: upperCanvasEl.width / boundsWidth,
                        height: upperCanvasEl.height / boundsHeight
                    };
                    return {
                        x: pointer.x * cssScale.width,
                        y: pointer.y * cssScale.height
                    };
                },
                _createUpperCanvas: function() {
                    var lowerCanvasClass = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), lowerCanvasEl = this.lowerCanvasEl, upperCanvasEl = this.upperCanvasEl;
                    if (upperCanvasEl) upperCanvasEl.className = ""; else {
                        upperCanvasEl = this._createCanvasElement();
                        this.upperCanvasEl = upperCanvasEl;
                    }
                    fabric.util.addClass(upperCanvasEl, "upper-canvas " + lowerCanvasClass);
                    this.wrapperEl.appendChild(upperCanvasEl);
                    this._copyCanvasStyle(lowerCanvasEl, upperCanvasEl);
                    this._applyCanvasStyle(upperCanvasEl);
                    this.contextTop = upperCanvasEl.getContext("2d");
                },
                _createCacheCanvas: function() {
                    this.cacheCanvasEl = this._createCanvasElement();
                    this.cacheCanvasEl.setAttribute("width", this.width);
                    this.cacheCanvasEl.setAttribute("height", this.height);
                    this.contextCache = this.cacheCanvasEl.getContext("2d");
                },
                _initWrapperElement: function() {
                    this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, "div", {
                        class: this.containerClass
                    });
                    fabric.util.setStyle(this.wrapperEl, {
                        width: this.width + "px",
                        height: this.height + "px",
                        position: "relative"
                    });
                    fabric.util.makeElementUnselectable(this.wrapperEl);
                },
                _applyCanvasStyle: function(element) {
                    var width = this.width || element.width, height = this.height || element.height;
                    fabric.util.setStyle(element, {
                        position: "absolute",
                        width: width + "px",
                        height: height + "px",
                        left: 0,
                        top: 0,
                        "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
                        "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
                    });
                    element.width = width;
                    element.height = height;
                    fabric.util.makeElementUnselectable(element);
                },
                _copyCanvasStyle: function(fromEl, toEl) {
                    toEl.style.cssText = fromEl.style.cssText;
                },
                getSelectionContext: function() {
                    return this.contextTop;
                },
                getSelectionElement: function() {
                    return this.upperCanvasEl;
                },
                getActiveObject: function() {
                    return this._activeObject;
                },
                getActiveObjects: function() {
                    var active = this._activeObject;
                    if (active) if (active.type === "activeSelection" && active._objects) return active._objects.slice(0); else return [ active ];
                    return [];
                },
                _onObjectRemoved: function(obj) {
                    if (obj === this._activeObject) {
                        this.fire("before:selection:cleared", {
                            target: obj
                        });
                        this._discardActiveObject();
                        this.fire("selection:cleared", {
                            target: obj
                        });
                        obj.fire("deselected");
                    }
                    if (obj === this._hoveredTarget) {
                        this._hoveredTarget = null;
                        this._hoveredTargets = [];
                    }
                    this.callSuper("_onObjectRemoved", obj);
                },
                _fireSelectionEvents: function(oldObjects, e) {
                    var somethingChanged = false, objects = this.getActiveObjects(), added = [], removed = [];
                    oldObjects.forEach((function(oldObject) {
                        if (objects.indexOf(oldObject) === -1) {
                            somethingChanged = true;
                            oldObject.fire("deselected", {
                                e,
                                target: oldObject
                            });
                            removed.push(oldObject);
                        }
                    }));
                    objects.forEach((function(object) {
                        if (oldObjects.indexOf(object) === -1) {
                            somethingChanged = true;
                            object.fire("selected", {
                                e,
                                target: object
                            });
                            added.push(object);
                        }
                    }));
                    if (oldObjects.length > 0 && objects.length > 0) somethingChanged && this.fire("selection:updated", {
                        e,
                        selected: added,
                        deselected: removed,
                        updated: added[0] || removed[0],
                        target: this._activeObject
                    }); else if (objects.length > 0) this.fire("selection:created", {
                        e,
                        selected: added,
                        target: this._activeObject
                    }); else if (oldObjects.length > 0) this.fire("selection:cleared", {
                        e,
                        deselected: removed
                    });
                },
                setActiveObject: function(object, e) {
                    var currentActives = this.getActiveObjects();
                    this._setActiveObject(object, e);
                    this._fireSelectionEvents(currentActives, e);
                    return this;
                },
                _setActiveObject: function(object, e) {
                    if (this._activeObject === object) return false;
                    if (!this._discardActiveObject(e, object)) return false;
                    if (object.onSelect({
                        e
                    })) return false;
                    this._activeObject = object;
                    return true;
                },
                _discardActiveObject: function(e, object) {
                    var obj = this._activeObject;
                    if (obj) {
                        if (obj.onDeselect({
                            e,
                            object
                        })) return false;
                        this._activeObject = null;
                    }
                    return true;
                },
                discardActiveObject: function(e) {
                    var currentActives = this.getActiveObjects(), activeObject = this.getActiveObject();
                    if (currentActives.length) this.fire("before:selection:cleared", {
                        target: activeObject,
                        e
                    });
                    this._discardActiveObject(e);
                    this._fireSelectionEvents(currentActives, e);
                    return this;
                },
                dispose: function() {
                    var wrapper = this.wrapperEl;
                    this.removeListeners();
                    wrapper.removeChild(this.upperCanvasEl);
                    wrapper.removeChild(this.lowerCanvasEl);
                    this.contextCache = null;
                    this.contextTop = null;
                    [ "upperCanvasEl", "cacheCanvasEl" ].forEach(function(element) {
                        fabric.util.cleanUpJsdomNode(this[element]);
                        this[element] = void 0;
                    }.bind(this));
                    if (wrapper.parentNode) wrapper.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl);
                    delete this.wrapperEl;
                    fabric.StaticCanvas.prototype.dispose.call(this);
                    return this;
                },
                clear: function() {
                    this.discardActiveObject();
                    this.clearContext(this.contextTop);
                    return this.callSuper("clear");
                },
                drawControls: function(ctx) {
                    var activeObject = this._activeObject;
                    if (activeObject) activeObject._renderControls(ctx);
                },
                _toObject: function(instance, methodName, propertiesToInclude) {
                    var originalProperties = this._realizeGroupTransformOnObject(instance), object = this.callSuper("_toObject", instance, methodName, propertiesToInclude);
                    this._unwindGroupTransformOnObject(instance, originalProperties);
                    return object;
                },
                _realizeGroupTransformOnObject: function(instance) {
                    if (instance.group && instance.group.type === "activeSelection" && this._activeObject === instance.group) {
                        var layoutProps = [ "angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top" ];
                        var originalValues = {};
                        layoutProps.forEach((function(prop) {
                            originalValues[prop] = instance[prop];
                        }));
                        fabric.util.addTransformToObject(instance, this._activeObject.calcOwnMatrix());
                        return originalValues;
                    } else return null;
                },
                _unwindGroupTransformOnObject: function(instance, originalValues) {
                    if (originalValues) instance.set(originalValues);
                },
                _setSVGObject: function(markup, instance, reviver) {
                    var originalProperties = this._realizeGroupTransformOnObject(instance);
                    this.callSuper("_setSVGObject", markup, instance, reviver);
                    this._unwindGroupTransformOnObject(instance, originalProperties);
                },
                setViewportTransform: function(vpt) {
                    if (this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing) this._activeObject.clearContextTop();
                    fabric.StaticCanvas.prototype.setViewportTransform.call(this, vpt);
                }
            });
            for (var prop in fabric.StaticCanvas) if (prop !== "prototype") fabric.Canvas[prop] = fabric.StaticCanvas[prop];
        })();
        (function() {
            var addListener = fabric.util.addListener, removeListener = fabric.util.removeListener, RIGHT_CLICK = 3, MIDDLE_CLICK = 2, LEFT_CLICK = 1, addEventOptions = {
                passive: false
            };
            function checkClick(e, value) {
                return e.button && e.button === value - 1;
            }
            fabric.util.object.extend(fabric.Canvas.prototype, {
                mainTouchId: null,
                _initEventListeners: function() {
                    this.removeListeners();
                    this._bindEvents();
                    this.addOrRemove(addListener, "add");
                },
                _getEventPrefix: function() {
                    return this.enablePointerEvents ? "pointer" : "mouse";
                },
                addOrRemove: function(functor, eventjsFunctor) {
                    var canvasElement = this.upperCanvasEl, eventTypePrefix = this._getEventPrefix();
                    functor(fabric.window, "resize", this._onResize);
                    functor(canvasElement, eventTypePrefix + "down", this._onMouseDown);
                    functor(canvasElement, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                    functor(canvasElement, eventTypePrefix + "out", this._onMouseOut);
                    functor(canvasElement, eventTypePrefix + "enter", this._onMouseEnter);
                    functor(canvasElement, "wheel", this._onMouseWheel);
                    functor(canvasElement, "contextmenu", this._onContextMenu);
                    functor(canvasElement, "dblclick", this._onDoubleClick);
                    functor(canvasElement, "dragover", this._onDragOver);
                    functor(canvasElement, "dragenter", this._onDragEnter);
                    functor(canvasElement, "dragleave", this._onDragLeave);
                    functor(canvasElement, "drop", this._onDrop);
                    if (!this.enablePointerEvents) functor(canvasElement, "touchstart", this._onTouchStart, addEventOptions);
                    if (typeof eventjs !== "undefined" && eventjsFunctor in eventjs) {
                        eventjs[eventjsFunctor](canvasElement, "gesture", this._onGesture);
                        eventjs[eventjsFunctor](canvasElement, "drag", this._onDrag);
                        eventjs[eventjsFunctor](canvasElement, "orientation", this._onOrientationChange);
                        eventjs[eventjsFunctor](canvasElement, "shake", this._onShake);
                        eventjs[eventjsFunctor](canvasElement, "longpress", this._onLongPress);
                    }
                },
                removeListeners: function() {
                    this.addOrRemove(removeListener, "remove");
                    var eventTypePrefix = this._getEventPrefix();
                    removeListener(fabric.document, eventTypePrefix + "up", this._onMouseUp);
                    removeListener(fabric.document, "touchend", this._onTouchEnd, addEventOptions);
                    removeListener(fabric.document, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                    removeListener(fabric.document, "touchmove", this._onMouseMove, addEventOptions);
                },
                _bindEvents: function() {
                    if (this.eventsBound) return;
                    this._onMouseDown = this._onMouseDown.bind(this);
                    this._onTouchStart = this._onTouchStart.bind(this);
                    this._onMouseMove = this._onMouseMove.bind(this);
                    this._onMouseUp = this._onMouseUp.bind(this);
                    this._onTouchEnd = this._onTouchEnd.bind(this);
                    this._onResize = this._onResize.bind(this);
                    this._onGesture = this._onGesture.bind(this);
                    this._onDrag = this._onDrag.bind(this);
                    this._onShake = this._onShake.bind(this);
                    this._onLongPress = this._onLongPress.bind(this);
                    this._onOrientationChange = this._onOrientationChange.bind(this);
                    this._onMouseWheel = this._onMouseWheel.bind(this);
                    this._onMouseOut = this._onMouseOut.bind(this);
                    this._onMouseEnter = this._onMouseEnter.bind(this);
                    this._onContextMenu = this._onContextMenu.bind(this);
                    this._onDoubleClick = this._onDoubleClick.bind(this);
                    this._onDragOver = this._onDragOver.bind(this);
                    this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter");
                    this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave");
                    this._onDrop = this._simpleEventHandler.bind(this, "drop");
                    this.eventsBound = true;
                },
                _onGesture: function(e, self) {
                    this.__onTransformGesture && this.__onTransformGesture(e, self);
                },
                _onDrag: function(e, self) {
                    this.__onDrag && this.__onDrag(e, self);
                },
                _onMouseWheel: function(e) {
                    this.__onMouseWheel(e);
                },
                _onMouseOut: function(e) {
                    var target = this._hoveredTarget;
                    this.fire("mouse:out", {
                        target,
                        e
                    });
                    this._hoveredTarget = null;
                    target && target.fire("mouseout", {
                        e
                    });
                    var _this = this;
                    this._hoveredTargets.forEach((function(_target) {
                        _this.fire("mouse:out", {
                            target,
                            e
                        });
                        _target && target.fire("mouseout", {
                            e
                        });
                    }));
                    this._hoveredTargets = [];
                    if (this._iTextInstances) this._iTextInstances.forEach((function(obj) {
                        if (obj.isEditing) obj.hiddenTextarea.focus();
                    }));
                },
                _onMouseEnter: function(e) {
                    if (!this._currentTransform && !this.findTarget(e)) {
                        this.fire("mouse:over", {
                            target: null,
                            e
                        });
                        this._hoveredTarget = null;
                        this._hoveredTargets = [];
                    }
                },
                _onOrientationChange: function(e, self) {
                    this.__onOrientationChange && this.__onOrientationChange(e, self);
                },
                _onShake: function(e, self) {
                    this.__onShake && this.__onShake(e, self);
                },
                _onLongPress: function(e, self) {
                    this.__onLongPress && this.__onLongPress(e, self);
                },
                _onDragOver: function(e) {
                    e.preventDefault();
                    var target = this._simpleEventHandler("dragover", e);
                    this._fireEnterLeaveEvents(target, e);
                },
                _onContextMenu: function(e) {
                    if (this.stopContextMenu) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    return false;
                },
                _onDoubleClick: function(e) {
                    this._cacheTransformEventData(e);
                    this._handleEvent(e, "dblclick");
                    this._resetTransformEventData(e);
                },
                getPointerId: function(evt) {
                    var changedTouches = evt.changedTouches;
                    if (changedTouches) return changedTouches[0] && changedTouches[0].identifier;
                    if (this.enablePointerEvents) return evt.pointerId;
                    return -1;
                },
                _isMainEvent: function(evt) {
                    if (evt.isPrimary === true) return true;
                    if (evt.isPrimary === false) return false;
                    if (evt.type === "touchend" && evt.touches.length === 0) return true;
                    if (evt.changedTouches) return evt.changedTouches[0].identifier === this.mainTouchId;
                    return true;
                },
                _onTouchStart: function(e) {
                    e.preventDefault();
                    if (this.mainTouchId === null) this.mainTouchId = this.getPointerId(e);
                    this.__onMouseDown(e);
                    this._resetTransformEventData();
                    var canvasElement = this.upperCanvasEl, eventTypePrefix = this._getEventPrefix();
                    addListener(fabric.document, "touchend", this._onTouchEnd, addEventOptions);
                    addListener(fabric.document, "touchmove", this._onMouseMove, addEventOptions);
                    removeListener(canvasElement, eventTypePrefix + "down", this._onMouseDown);
                },
                _onMouseDown: function(e) {
                    this.__onMouseDown(e);
                    this._resetTransformEventData();
                    var canvasElement = this.upperCanvasEl, eventTypePrefix = this._getEventPrefix();
                    removeListener(canvasElement, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                    addListener(fabric.document, eventTypePrefix + "up", this._onMouseUp);
                    addListener(fabric.document, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                },
                _onTouchEnd: function(e) {
                    if (e.touches.length > 0) return;
                    this.__onMouseUp(e);
                    this._resetTransformEventData();
                    this.mainTouchId = null;
                    var eventTypePrefix = this._getEventPrefix();
                    removeListener(fabric.document, "touchend", this._onTouchEnd, addEventOptions);
                    removeListener(fabric.document, "touchmove", this._onMouseMove, addEventOptions);
                    var _this = this;
                    if (this._willAddMouseDown) clearTimeout(this._willAddMouseDown);
                    this._willAddMouseDown = setTimeout((function() {
                        addListener(_this.upperCanvasEl, eventTypePrefix + "down", _this._onMouseDown);
                        _this._willAddMouseDown = 0;
                    }), 400);
                },
                _onMouseUp: function(e) {
                    this.__onMouseUp(e);
                    this._resetTransformEventData();
                    var canvasElement = this.upperCanvasEl, eventTypePrefix = this._getEventPrefix();
                    if (this._isMainEvent(e)) {
                        removeListener(fabric.document, eventTypePrefix + "up", this._onMouseUp);
                        removeListener(fabric.document, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                        addListener(canvasElement, eventTypePrefix + "move", this._onMouseMove, addEventOptions);
                    }
                },
                _onMouseMove: function(e) {
                    !this.allowTouchScrolling && e.preventDefault && e.preventDefault();
                    this.__onMouseMove(e);
                },
                _onResize: function() {
                    this.calcOffset();
                },
                _shouldRender: function(target) {
                    var activeObject = this._activeObject;
                    if (!!activeObject !== !!target || activeObject && target && activeObject !== target) return true; else if (activeObject && activeObject.isEditing) return false;
                    return false;
                },
                __onMouseUp: function(e) {
                    var target, transform = this._currentTransform, groupSelector = this._groupSelector, shouldRender = false, isClick = !groupSelector || groupSelector.left === 0 && groupSelector.top === 0;
                    this._cacheTransformEventData(e);
                    target = this._target;
                    this._handleEvent(e, "up:before");
                    if (checkClick(e, RIGHT_CLICK)) {
                        if (this.fireRightClick) this._handleEvent(e, "up", RIGHT_CLICK, isClick);
                        return;
                    }
                    if (checkClick(e, MIDDLE_CLICK)) {
                        if (this.fireMiddleClick) this._handleEvent(e, "up", MIDDLE_CLICK, isClick);
                        this._resetTransformEventData();
                        return;
                    }
                    if (this.isDrawingMode && this._isCurrentlyDrawing) {
                        this._onMouseUpInDrawingMode(e);
                        return;
                    }
                    if (!this._isMainEvent(e)) return;
                    if (transform) {
                        this._finalizeCurrentTransform(e);
                        shouldRender = transform.actionPerformed;
                    }
                    if (!isClick) {
                        var targetWasActive = target === this._activeObject;
                        this._maybeGroupObjects(e);
                        if (!shouldRender) shouldRender = this._shouldRender(target) || !targetWasActive && target === this._activeObject;
                    }
                    if (target) {
                        if (target.selectable && target !== this._activeObject && target.activeOn === "up") {
                            this.setActiveObject(target, e);
                            shouldRender = true;
                        } else {
                            var corner = target._findTargetCorner(this.getPointer(e, true), fabric.util.isTouchEvent(e));
                            var control = target.controls[corner], mouseUpHandler = control && control.getMouseUpHandler(e, target, control);
                            if (mouseUpHandler) {
                                var pointer = this.getPointer(e);
                                mouseUpHandler(e, transform, pointer.x, pointer.y);
                            }
                        }
                        target.isMoving = false;
                    }
                    this._setCursorFromEvent(e, target);
                    this._handleEvent(e, "up", LEFT_CLICK, isClick);
                    this._groupSelector = null;
                    this._currentTransform = null;
                    target && (target.__corner = 0);
                    if (shouldRender) this.requestRenderAll(); else if (!isClick) this.renderTop();
                },
                _simpleEventHandler: function(eventType, e) {
                    var target = this.findTarget(e), targets = this.targets, options = {
                        e,
                        target,
                        subTargets: targets
                    };
                    this.fire(eventType, options);
                    target && target.fire(eventType, options);
                    if (!targets) return target;
                    for (var i = 0; i < targets.length; i++) targets[i].fire(eventType, options);
                    return target;
                },
                _handleEvent: function(e, eventType, button, isClick) {
                    var target = this._target, targets = this.targets || [], options = {
                        e,
                        target,
                        subTargets: targets,
                        button: button || LEFT_CLICK,
                        isClick: isClick || false,
                        pointer: this._pointer,
                        absolutePointer: this._absolutePointer,
                        transform: this._currentTransform
                    };
                    if (eventType === "up") {
                        options.currentTarget = this.findTarget(e);
                        options.currentSubTargets = this.targets;
                    }
                    this.fire("mouse:" + eventType, options);
                    target && target.fire("mouse" + eventType, options);
                    for (var i = 0; i < targets.length; i++) targets[i].fire("mouse" + eventType, options);
                },
                _finalizeCurrentTransform: function(e) {
                    var eventName, transform = this._currentTransform, target = transform.target, options = {
                        e,
                        target,
                        transform,
                        action: transform.action
                    };
                    if (target._scaling) target._scaling = false;
                    target.setCoords();
                    if (transform.actionPerformed || this.stateful && target.hasStateChanged()) {
                        if (transform.actionPerformed) {
                            eventName = this._addEventOptions(options, transform);
                            this._fire(eventName, options);
                        }
                        this._fire("modified", options);
                    }
                },
                _addEventOptions: function(options, transform) {
                    var eventName, by;
                    switch (transform.action) {
                      case "scaleX":
                        eventName = "scaled";
                        by = "x";
                        break;

                      case "scaleY":
                        eventName = "scaled";
                        by = "y";
                        break;

                      case "skewX":
                        eventName = "skewed";
                        by = "x";
                        break;

                      case "skewY":
                        eventName = "skewed";
                        by = "y";
                        break;

                      case "scale":
                        eventName = "scaled";
                        by = "equally";
                        break;

                      case "rotate":
                        eventName = "rotated";
                        break;

                      case "drag":
                        eventName = "moved";
                        break;
                    }
                    options.by = by;
                    return eventName;
                },
                _onMouseDownInDrawingMode: function(e) {
                    this._isCurrentlyDrawing = true;
                    if (this.getActiveObject()) this.discardActiveObject(e).requestRenderAll();
                    var pointer = this.getPointer(e);
                    this.freeDrawingBrush.onMouseDown(pointer, {
                        e,
                        pointer
                    });
                    this._handleEvent(e, "down");
                },
                _onMouseMoveInDrawingMode: function(e) {
                    if (this._isCurrentlyDrawing) {
                        var pointer = this.getPointer(e);
                        this.freeDrawingBrush.onMouseMove(pointer, {
                            e,
                            pointer
                        });
                    }
                    this.setCursor(this.freeDrawingCursor);
                    this._handleEvent(e, "move");
                },
                _onMouseUpInDrawingMode: function(e) {
                    var pointer = this.getPointer(e);
                    this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({
                        e,
                        pointer
                    });
                    this._handleEvent(e, "up");
                },
                __onMouseDown: function(e) {
                    this._cacheTransformEventData(e);
                    this._handleEvent(e, "down:before");
                    var target = this._target;
                    if (checkClick(e, RIGHT_CLICK)) {
                        if (this.fireRightClick) this._handleEvent(e, "down", RIGHT_CLICK);
                        return;
                    }
                    if (checkClick(e, MIDDLE_CLICK)) {
                        if (this.fireMiddleClick) this._handleEvent(e, "down", MIDDLE_CLICK);
                        return;
                    }
                    if (this.isDrawingMode) {
                        this._onMouseDownInDrawingMode(e);
                        return;
                    }
                    if (!this._isMainEvent(e)) return;
                    if (this._currentTransform) return;
                    var pointer = this._pointer;
                    this._previousPointer = pointer;
                    var shouldRender = this._shouldRender(target), shouldGroup = this._shouldGroup(e, target);
                    if (this._shouldClearSelection(e, target)) this.discardActiveObject(e); else if (shouldGroup) {
                        this._handleGrouping(e, target);
                        target = this._activeObject;
                    }
                    if (this.selection && (!target || !target.selectable && !target.isEditing && target !== this._activeObject)) this._groupSelector = {
                        ex: this._absolutePointer.x,
                        ey: this._absolutePointer.y,
                        top: 0,
                        left: 0
                    };
                    if (target) {
                        var alreadySelected = target === this._activeObject;
                        if (target.selectable && target.activeOn === "down") this.setActiveObject(target, e);
                        var corner = target._findTargetCorner(this.getPointer(e, true), fabric.util.isTouchEvent(e));
                        target.__corner = corner;
                        if (target === this._activeObject && (corner || !shouldGroup)) {
                            this._setupCurrentTransform(e, target, alreadySelected);
                            var control = target.controls[corner], mouseDownHandler = (pointer = this.getPointer(e), 
                            control && control.getMouseDownHandler(e, target, control));
                            if (mouseDownHandler) mouseDownHandler(e, this._currentTransform, pointer.x, pointer.y);
                        }
                    }
                    this._handleEvent(e, "down");
                    (shouldRender || shouldGroup) && this.requestRenderAll();
                },
                _resetTransformEventData: function() {
                    this._target = null;
                    this._pointer = null;
                    this._absolutePointer = null;
                },
                _cacheTransformEventData: function(e) {
                    this._resetTransformEventData();
                    this._pointer = this.getPointer(e, true);
                    this._absolutePointer = this.restorePointerVpt(this._pointer);
                    this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(e) || null;
                },
                _beforeTransform: function(e) {
                    var t = this._currentTransform;
                    this.stateful && t.target.saveState();
                    this.fire("before:transform", {
                        e,
                        transform: t
                    });
                },
                __onMouseMove: function(e) {
                    this._handleEvent(e, "move:before");
                    this._cacheTransformEventData(e);
                    var target, pointer;
                    if (this.isDrawingMode) {
                        this._onMouseMoveInDrawingMode(e);
                        return;
                    }
                    if (!this._isMainEvent(e)) return;
                    var groupSelector = this._groupSelector;
                    if (groupSelector) {
                        pointer = this._absolutePointer;
                        groupSelector.left = pointer.x - groupSelector.ex;
                        groupSelector.top = pointer.y - groupSelector.ey;
                        this.renderTop();
                    } else if (!this._currentTransform) {
                        target = this.findTarget(e) || null;
                        this._setCursorFromEvent(e, target);
                        this._fireOverOutEvents(target, e);
                    } else this._transformObject(e);
                    this._handleEvent(e, "move");
                    this._resetTransformEventData();
                },
                _fireOverOutEvents: function(target, e) {
                    var _hoveredTarget = this._hoveredTarget, _hoveredTargets = this._hoveredTargets, targets = this.targets, length = Math.max(_hoveredTargets.length, targets.length);
                    this.fireSyntheticInOutEvents(target, e, {
                        oldTarget: _hoveredTarget,
                        evtOut: "mouseout",
                        canvasEvtOut: "mouse:out",
                        evtIn: "mouseover",
                        canvasEvtIn: "mouse:over"
                    });
                    for (var i = 0; i < length; i++) this.fireSyntheticInOutEvents(targets[i], e, {
                        oldTarget: _hoveredTargets[i],
                        evtOut: "mouseout",
                        evtIn: "mouseover"
                    });
                    this._hoveredTarget = target;
                    this._hoveredTargets = this.targets.concat();
                },
                _fireEnterLeaveEvents: function(target, e) {
                    var _draggedoverTarget = this._draggedoverTarget, _hoveredTargets = this._hoveredTargets, targets = this.targets, length = Math.max(_hoveredTargets.length, targets.length);
                    this.fireSyntheticInOutEvents(target, e, {
                        oldTarget: _draggedoverTarget,
                        evtOut: "dragleave",
                        evtIn: "dragenter"
                    });
                    for (var i = 0; i < length; i++) this.fireSyntheticInOutEvents(targets[i], e, {
                        oldTarget: _hoveredTargets[i],
                        evtOut: "dragleave",
                        evtIn: "dragenter"
                    });
                    this._draggedoverTarget = target;
                },
                fireSyntheticInOutEvents: function(target, e, config) {
                    var inOpt, outOpt, outFires, inFires, oldTarget = config.oldTarget, targetChanged = oldTarget !== target, canvasEvtIn = config.canvasEvtIn, canvasEvtOut = config.canvasEvtOut;
                    if (targetChanged) {
                        inOpt = {
                            e,
                            target,
                            previousTarget: oldTarget
                        };
                        outOpt = {
                            e,
                            target: oldTarget,
                            nextTarget: target
                        };
                    }
                    inFires = target && targetChanged;
                    outFires = oldTarget && targetChanged;
                    if (outFires) {
                        canvasEvtOut && this.fire(canvasEvtOut, outOpt);
                        oldTarget.fire(config.evtOut, outOpt);
                    }
                    if (inFires) {
                        canvasEvtIn && this.fire(canvasEvtIn, inOpt);
                        target.fire(config.evtIn, inOpt);
                    }
                },
                __onMouseWheel: function(e) {
                    this._cacheTransformEventData(e);
                    this._handleEvent(e, "wheel");
                    this._resetTransformEventData();
                },
                _transformObject: function(e) {
                    var pointer = this.getPointer(e), transform = this._currentTransform;
                    transform.reset = false;
                    transform.shiftKey = e.shiftKey;
                    transform.altKey = e[this.centeredKey];
                    this._performTransformAction(e, transform, pointer);
                    transform.actionPerformed && this.requestRenderAll();
                },
                _performTransformAction: function(e, transform, pointer) {
                    var x = pointer.x, y = pointer.y, action = transform.action, actionPerformed = false, actionHandler = transform.actionHandler;
                    if (actionHandler) actionPerformed = actionHandler(e, transform, x, y);
                    if (action === "drag" && actionPerformed) {
                        transform.target.isMoving = true;
                        this.setCursor(transform.target.moveCursor || this.moveCursor);
                    }
                    transform.actionPerformed = transform.actionPerformed || actionPerformed;
                },
                _fire: fabric.controlsUtils.fireEvent,
                _setCursorFromEvent: function(e, target) {
                    if (!target) {
                        this.setCursor(this.defaultCursor);
                        return false;
                    }
                    var hoverCursor = target.hoverCursor || this.hoverCursor, activeSelection = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, corner = (!activeSelection || !activeSelection.contains(target)) && target._findTargetCorner(this.getPointer(e, true));
                    if (!corner) {
                        if (target.subTargetCheck) this.targets.concat().reverse().map((function(_target) {
                            hoverCursor = _target.hoverCursor || hoverCursor;
                        }));
                        this.setCursor(hoverCursor);
                    } else this.setCursor(this.getCornerCursor(corner, target, e));
                },
                getCornerCursor: function(corner, target, e) {
                    var control = target.controls[corner];
                    return control.cursorStyleHandler(e, control, target);
                }
            });
        })();
        (function() {
            var min = Math.min, max = Math.max;
            fabric.util.object.extend(fabric.Canvas.prototype, {
                _shouldGroup: function(e, target) {
                    var activeObject = this._activeObject;
                    return activeObject && this._isSelectionKeyPressed(e) && target && target.selectable && this.selection && (activeObject !== target || activeObject.type === "activeSelection") && !target.onSelect({
                        e
                    });
                },
                _handleGrouping: function(e, target) {
                    var activeObject = this._activeObject;
                    if (activeObject.__corner) return;
                    if (target === activeObject) {
                        target = this.findTarget(e, true);
                        if (!target || !target.selectable) return;
                    }
                    if (activeObject && activeObject.type === "activeSelection") this._updateActiveSelection(target, e); else this._createActiveSelection(target, e);
                },
                _updateActiveSelection: function(target, e) {
                    var activeSelection = this._activeObject, currentActiveObjects = activeSelection._objects.slice(0);
                    if (activeSelection.contains(target)) {
                        activeSelection.removeWithUpdate(target);
                        this._hoveredTarget = target;
                        this._hoveredTargets = this.targets.concat();
                        if (activeSelection.size() === 1) this._setActiveObject(activeSelection.item(0), e);
                    } else {
                        activeSelection.addWithUpdate(target);
                        this._hoveredTarget = activeSelection;
                        this._hoveredTargets = this.targets.concat();
                    }
                    this._fireSelectionEvents(currentActiveObjects, e);
                },
                _createActiveSelection: function(target, e) {
                    var currentActives = this.getActiveObjects(), group = this._createGroup(target);
                    this._hoveredTarget = group;
                    this._setActiveObject(group, e);
                    this._fireSelectionEvents(currentActives, e);
                },
                _createGroup: function(target) {
                    var objects = this._objects, isActiveLower = objects.indexOf(this._activeObject) < objects.indexOf(target), groupObjects = isActiveLower ? [ this._activeObject, target ] : [ target, this._activeObject ];
                    this._activeObject.isEditing && this._activeObject.exitEditing();
                    return new fabric.ActiveSelection(groupObjects, {
                        canvas: this
                    });
                },
                _groupSelectedObjects: function(e) {
                    var aGroup, group = this._collectObjects(e);
                    if (group.length === 1) this.setActiveObject(group[0], e); else if (group.length > 1) {
                        aGroup = new fabric.ActiveSelection(group.reverse(), {
                            canvas: this
                        });
                        this.setActiveObject(aGroup, e);
                    }
                },
                _collectObjects: function(e) {
                    var currentObject, group = [], x1 = this._groupSelector.ex, y1 = this._groupSelector.ey, x2 = x1 + this._groupSelector.left, y2 = y1 + this._groupSelector.top, selectionX1Y1 = new fabric.Point(min(x1, x2), min(y1, y2)), selectionX2Y2 = new fabric.Point(max(x1, x2), max(y1, y2)), allowIntersect = !this.selectionFullyContained, isClick = x1 === x2 && y1 === y2;
                    for (var i = this._objects.length; i--; ) {
                        currentObject = this._objects[i];
                        if (!currentObject || !currentObject.selectable || !currentObject.visible) continue;
                        if (allowIntersect && currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2, true) || currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2, true) || allowIntersect && currentObject.containsPoint(selectionX1Y1, null, true) || allowIntersect && currentObject.containsPoint(selectionX2Y2, null, true)) {
                            group.push(currentObject);
                            if (isClick) break;
                        }
                    }
                    if (group.length > 1) group = group.filter((function(object) {
                        return !object.onSelect({
                            e
                        });
                    }));
                    return group;
                },
                _maybeGroupObjects: function(e) {
                    if (this.selection && this._groupSelector) this._groupSelectedObjects(e);
                    this.setCursor(this.defaultCursor);
                    this._groupSelector = null;
                }
            });
        })();
        (function() {
            fabric.util.object.extend(fabric.StaticCanvas.prototype, {
                toDataURL: function(options) {
                    options || (options = {});
                    var format = options.format || "png", quality = options.quality || 1, multiplier = (options.multiplier || 1) * (options.enableRetinaScaling ? this.getRetinaScaling() : 1), canvasEl = this.toCanvasElement(multiplier, options);
                    return fabric.util.toDataURL(canvasEl, format, quality);
                },
                toCanvasElement: function(multiplier, cropping) {
                    multiplier = multiplier || 1;
                    cropping = cropping || {};
                    var scaledWidth = (cropping.width || this.width) * multiplier, scaledHeight = (cropping.height || this.height) * multiplier, zoom = this.getZoom(), originalWidth = this.width, originalHeight = this.height, newZoom = zoom * multiplier, vp = this.viewportTransform, translateX = (vp[4] - (cropping.left || 0)) * multiplier, translateY = (vp[5] - (cropping.top || 0)) * multiplier, originalInteractive = this.interactive, newVp = [ newZoom, 0, 0, newZoom, translateX, translateY ], originalRetina = this.enableRetinaScaling, canvasEl = fabric.util.createCanvasElement(), originalContextTop = this.contextTop;
                    canvasEl.width = scaledWidth;
                    canvasEl.height = scaledHeight;
                    this.contextTop = null;
                    this.enableRetinaScaling = false;
                    this.interactive = false;
                    this.viewportTransform = newVp;
                    this.width = scaledWidth;
                    this.height = scaledHeight;
                    this.calcViewportBoundaries();
                    this.renderCanvas(canvasEl.getContext("2d"), this._objects);
                    this.viewportTransform = vp;
                    this.width = originalWidth;
                    this.height = originalHeight;
                    this.calcViewportBoundaries();
                    this.interactive = originalInteractive;
                    this.enableRetinaScaling = originalRetina;
                    this.contextTop = originalContextTop;
                    return canvasEl;
                }
            });
        })();
        fabric.util.object.extend(fabric.StaticCanvas.prototype, {
            loadFromJSON: function(json, callback, reviver) {
                if (!json) return;
                var serialized = typeof json === "string" ? JSON.parse(json) : fabric.util.object.clone(json);
                var _this = this, clipPath = serialized.clipPath, renderOnAddRemove = this.renderOnAddRemove;
                this.renderOnAddRemove = false;
                delete serialized.clipPath;
                this._enlivenObjects(serialized.objects, (function(enlivenedObjects) {
                    _this.clear();
                    _this._setBgOverlay(serialized, (function() {
                        if (clipPath) _this._enlivenObjects([ clipPath ], (function(enlivenedCanvasClip) {
                            _this.clipPath = enlivenedCanvasClip[0];
                            _this.__setupCanvas.call(_this, serialized, enlivenedObjects, renderOnAddRemove, callback);
                        })); else _this.__setupCanvas.call(_this, serialized, enlivenedObjects, renderOnAddRemove, callback);
                    }));
                }), reviver);
                return this;
            },
            __setupCanvas: function(serialized, enlivenedObjects, renderOnAddRemove, callback) {
                var _this = this;
                enlivenedObjects.forEach((function(obj, index) {
                    _this.insertAt(obj, index);
                }));
                this.renderOnAddRemove = renderOnAddRemove;
                delete serialized.objects;
                delete serialized.backgroundImage;
                delete serialized.overlayImage;
                delete serialized.background;
                delete serialized.overlay;
                this._setOptions(serialized);
                this.renderAll();
                callback && callback();
            },
            _setBgOverlay: function(serialized, callback) {
                var loaded = {
                    backgroundColor: false,
                    overlayColor: false,
                    backgroundImage: false,
                    overlayImage: false
                };
                if (!serialized.backgroundImage && !serialized.overlayImage && !serialized.background && !serialized.overlay) {
                    callback && callback();
                    return;
                }
                var cbIfLoaded = function() {
                    if (loaded.backgroundImage && loaded.overlayImage && loaded.backgroundColor && loaded.overlayColor) callback && callback();
                };
                this.__setBgOverlay("backgroundImage", serialized.backgroundImage, loaded, cbIfLoaded);
                this.__setBgOverlay("overlayImage", serialized.overlayImage, loaded, cbIfLoaded);
                this.__setBgOverlay("backgroundColor", serialized.background, loaded, cbIfLoaded);
                this.__setBgOverlay("overlayColor", serialized.overlay, loaded, cbIfLoaded);
            },
            __setBgOverlay: function(property, value, loaded, callback) {
                var _this = this;
                if (!value) {
                    loaded[property] = true;
                    callback && callback();
                    return;
                }
                if (property === "backgroundImage" || property === "overlayImage") fabric.util.enlivenObjects([ value ], (function(enlivedObject) {
                    _this[property] = enlivedObject[0];
                    loaded[property] = true;
                    callback && callback();
                })); else this["set" + fabric.util.string.capitalize(property, true)](value, (function() {
                    loaded[property] = true;
                    callback && callback();
                }));
            },
            _enlivenObjects: function(objects, callback, reviver) {
                if (!objects || objects.length === 0) {
                    callback && callback([]);
                    return;
                }
                fabric.util.enlivenObjects(objects, (function(enlivenedObjects) {
                    callback && callback(enlivenedObjects);
                }), null, reviver);
            },
            _toDataURL: function(format, callback) {
                this.clone((function(clone) {
                    callback(clone.toDataURL(format));
                }));
            },
            _toDataURLWithMultiplier: function(format, multiplier, callback) {
                this.clone((function(clone) {
                    callback(clone.toDataURLWithMultiplier(format, multiplier));
                }));
            },
            clone: function(callback, properties) {
                var data = JSON.stringify(this.toJSON(properties));
                this.cloneWithoutData((function(clone) {
                    clone.loadFromJSON(data, (function() {
                        callback && callback(clone);
                    }));
                }));
            },
            cloneWithoutData: function(callback) {
                var el = fabric.util.createCanvasElement();
                el.width = this.width;
                el.height = this.height;
                var clone = new fabric.Canvas(el);
                if (this.backgroundImage) {
                    clone.setBackgroundImage(this.backgroundImage.src, (function() {
                        clone.renderAll();
                        callback && callback(clone);
                    }));
                    clone.backgroundImageOpacity = this.backgroundImageOpacity;
                    clone.backgroundImageStretch = this.backgroundImageStretch;
                } else callback && callback(clone);
            }
        });
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, clone = fabric.util.object.clone, toFixed = fabric.util.toFixed, capitalize = fabric.util.string.capitalize, degreesToRadians = fabric.util.degreesToRadians, objectCaching = !fabric.isLikelyNode, ALIASING_LIMIT = 2;
            if (fabric.Object) return;
            fabric.Object = fabric.util.createClass(fabric.CommonMethods, {
                type: "object",
                originX: "left",
                originY: "top",
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                scaleX: 1,
                scaleY: 1,
                flipX: false,
                flipY: false,
                opacity: 1,
                angle: 0,
                skewX: 0,
                skewY: 0,
                cornerSize: 13,
                touchCornerSize: 24,
                transparentCorners: true,
                hoverCursor: null,
                moveCursor: null,
                padding: 0,
                borderColor: "rgb(178,204,255)",
                borderDashArray: null,
                cornerColor: "rgb(178,204,255)",
                cornerStrokeColor: null,
                cornerStyle: "rect",
                cornerDashArray: null,
                centeredScaling: false,
                centeredRotation: true,
                fill: "rgb(0,0,0)",
                fillRule: "nonzero",
                globalCompositeOperation: "source-over",
                backgroundColor: "",
                selectionBackgroundColor: "",
                stroke: null,
                strokeWidth: 1,
                strokeDashArray: null,
                strokeDashOffset: 0,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 4,
                shadow: null,
                borderOpacityWhenMoving: .4,
                borderScaleFactor: 1,
                minScaleLimit: 0,
                selectable: true,
                evented: true,
                visible: true,
                hasControls: true,
                hasBorders: true,
                perPixelTargetFind: false,
                includeDefaultValues: true,
                lockMovementX: false,
                lockMovementY: false,
                lockRotation: false,
                lockScalingX: false,
                lockScalingY: false,
                lockSkewingX: false,
                lockSkewingY: false,
                lockScalingFlip: false,
                excludeFromExport: false,
                objectCaching,
                statefullCache: false,
                noScaleCache: true,
                strokeUniform: false,
                dirty: true,
                __corner: 0,
                paintFirst: "fill",
                activeOn: "down",
                stateProperties: ("top left width height scaleX scaleY flipX flipY originX originY transformMatrix " + "stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit " + "angle opacity fill globalCompositeOperation shadow visible backgroundColor " + "skewX skewY fillRule paintFirst clipPath strokeUniform").split(" "),
                cacheProperties: ("fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform" + " strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath").split(" "),
                colorProperties: "fill stroke backgroundColor".split(" "),
                clipPath: void 0,
                inverted: false,
                absolutePositioned: false,
                initialize: function(options) {
                    if (options) this.setOptions(options);
                },
                _createCacheCanvas: function() {
                    this._cacheProperties = {};
                    this._cacheCanvas = fabric.util.createCanvasElement();
                    this._cacheContext = this._cacheCanvas.getContext("2d");
                    this._updateCacheCanvas();
                    this.dirty = true;
                },
                _limitCacheSize: function(dims) {
                    var perfLimitSizeTotal = fabric.perfLimitSizeTotal, width = dims.width, height = dims.height, max = fabric.maxCacheSideLimit, min = fabric.minCacheSideLimit;
                    if (width <= max && height <= max && width * height <= perfLimitSizeTotal) {
                        if (width < min) dims.width = min;
                        if (height < min) dims.height = min;
                        return dims;
                    }
                    var ar = width / height, limitedDims = fabric.util.limitDimsByArea(ar, perfLimitSizeTotal), capValue = fabric.util.capValue, x = capValue(min, limitedDims.x, max), y = capValue(min, limitedDims.y, max);
                    if (width > x) {
                        dims.zoomX /= width / x;
                        dims.width = x;
                        dims.capped = true;
                    }
                    if (height > y) {
                        dims.zoomY /= height / y;
                        dims.height = y;
                        dims.capped = true;
                    }
                    return dims;
                },
                _getCacheCanvasDimensions: function() {
                    var objectScale = this.getTotalObjectScaling(), dim = this._getTransformedDimensions(0, 0), neededX = dim.x * objectScale.scaleX / this.scaleX, neededY = dim.y * objectScale.scaleY / this.scaleY;
                    return {
                        width: neededX + ALIASING_LIMIT,
                        height: neededY + ALIASING_LIMIT,
                        zoomX: objectScale.scaleX,
                        zoomY: objectScale.scaleY,
                        x: neededX,
                        y: neededY
                    };
                },
                _updateCacheCanvas: function() {
                    var targetCanvas = this.canvas;
                    if (this.noScaleCache && targetCanvas && targetCanvas._currentTransform) {
                        var target = targetCanvas._currentTransform.target, action = targetCanvas._currentTransform.action;
                        if (this === target && action.slice && action.slice(0, 5) === "scale") return false;
                    }
                    var drawingWidth, drawingHeight, canvas = this._cacheCanvas, dims = this._limitCacheSize(this._getCacheCanvasDimensions()), minCacheSize = fabric.minCacheSideLimit, width = dims.width, height = dims.height, zoomX = dims.zoomX, zoomY = dims.zoomY, dimensionsChanged = width !== this.cacheWidth || height !== this.cacheHeight, zoomChanged = this.zoomX !== zoomX || this.zoomY !== zoomY, shouldRedraw = dimensionsChanged || zoomChanged, additionalWidth = 0, additionalHeight = 0, shouldResizeCanvas = false;
                    if (dimensionsChanged) {
                        var canvasWidth = this._cacheCanvas.width, canvasHeight = this._cacheCanvas.height, sizeGrowing = width > canvasWidth || height > canvasHeight, sizeShrinking = (width < canvasWidth * .9 || height < canvasHeight * .9) && canvasWidth > minCacheSize && canvasHeight > minCacheSize;
                        shouldResizeCanvas = sizeGrowing || sizeShrinking;
                        if (sizeGrowing && !dims.capped && (width > minCacheSize || height > minCacheSize)) {
                            additionalWidth = width * .1;
                            additionalHeight = height * .1;
                        }
                    }
                    if (this instanceof fabric.Text && this.path) {
                        shouldRedraw = true;
                        shouldResizeCanvas = true;
                        additionalWidth += this.getHeightOfLine(0) * this.zoomX;
                        additionalHeight += this.getHeightOfLine(0) * this.zoomY;
                    }
                    if (shouldRedraw) {
                        if (shouldResizeCanvas) {
                            canvas.width = Math.ceil(width + additionalWidth);
                            canvas.height = Math.ceil(height + additionalHeight);
                        } else {
                            this._cacheContext.setTransform(1, 0, 0, 1, 0, 0);
                            this._cacheContext.clearRect(0, 0, canvas.width, canvas.height);
                        }
                        drawingWidth = dims.x / 2;
                        drawingHeight = dims.y / 2;
                        this.cacheTranslationX = Math.round(canvas.width / 2 - drawingWidth) + drawingWidth;
                        this.cacheTranslationY = Math.round(canvas.height / 2 - drawingHeight) + drawingHeight;
                        this.cacheWidth = width;
                        this.cacheHeight = height;
                        this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY);
                        this._cacheContext.scale(zoomX, zoomY);
                        this.zoomX = zoomX;
                        this.zoomY = zoomY;
                        return true;
                    }
                    return false;
                },
                setOptions: function(options) {
                    this._setOptions(options);
                    this._initGradient(options.fill, "fill");
                    this._initGradient(options.stroke, "stroke");
                    this._initPattern(options.fill, "fill");
                    this._initPattern(options.stroke, "stroke");
                },
                transform: function(ctx) {
                    var needFullTransform = this.group && !this.group._transformDone || this.group && this.canvas && ctx === this.canvas.contextTop;
                    var m = this.calcTransformMatrix(!needFullTransform);
                    ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                },
                toObject: function(propertiesToInclude) {
                    var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS, object = {
                        type: this.type,
                        version: fabric.version,
                        originX: this.originX,
                        originY: this.originY,
                        left: toFixed(this.left, NUM_FRACTION_DIGITS),
                        top: toFixed(this.top, NUM_FRACTION_DIGITS),
                        width: toFixed(this.width, NUM_FRACTION_DIGITS),
                        height: toFixed(this.height, NUM_FRACTION_DIGITS),
                        fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
                        stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
                        strokeWidth: toFixed(this.strokeWidth, NUM_FRACTION_DIGITS),
                        strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                        strokeLineCap: this.strokeLineCap,
                        strokeDashOffset: this.strokeDashOffset,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeUniform: this.strokeUniform,
                        strokeMiterLimit: toFixed(this.strokeMiterLimit, NUM_FRACTION_DIGITS),
                        scaleX: toFixed(this.scaleX, NUM_FRACTION_DIGITS),
                        scaleY: toFixed(this.scaleY, NUM_FRACTION_DIGITS),
                        angle: toFixed(this.angle, NUM_FRACTION_DIGITS),
                        flipX: this.flipX,
                        flipY: this.flipY,
                        opacity: toFixed(this.opacity, NUM_FRACTION_DIGITS),
                        shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                        visible: this.visible,
                        backgroundColor: this.backgroundColor,
                        fillRule: this.fillRule,
                        paintFirst: this.paintFirst,
                        globalCompositeOperation: this.globalCompositeOperation,
                        skewX: toFixed(this.skewX, NUM_FRACTION_DIGITS),
                        skewY: toFixed(this.skewY, NUM_FRACTION_DIGITS)
                    };
                    if (this.clipPath && !this.clipPath.excludeFromExport) {
                        object.clipPath = this.clipPath.toObject(propertiesToInclude);
                        object.clipPath.inverted = this.clipPath.inverted;
                        object.clipPath.absolutePositioned = this.clipPath.absolutePositioned;
                    }
                    fabric.util.populateWithProperties(this, object, propertiesToInclude);
                    if (!this.includeDefaultValues) object = this._removeDefaultValues(object);
                    return object;
                },
                toDatalessObject: function(propertiesToInclude) {
                    return this.toObject(propertiesToInclude);
                },
                _removeDefaultValues: function(object) {
                    var prototype = fabric.util.getKlass(object.type).prototype, stateProperties = prototype.stateProperties;
                    stateProperties.forEach((function(prop) {
                        if (prop === "left" || prop === "top") return;
                        if (object[prop] === prototype[prop]) delete object[prop];
                        var isArray = Object.prototype.toString.call(object[prop]) === "[object Array]" && Object.prototype.toString.call(prototype[prop]) === "[object Array]";
                        if (isArray && object[prop].length === 0 && prototype[prop].length === 0) delete object[prop];
                    }));
                    return object;
                },
                toString: function() {
                    return "#<fabric." + capitalize(this.type) + ">";
                },
                getObjectScaling: function() {
                    if (!this.group) return {
                        scaleX: this.scaleX,
                        scaleY: this.scaleY
                    };
                    var options = fabric.util.qrDecompose(this.calcTransformMatrix());
                    return {
                        scaleX: Math.abs(options.scaleX),
                        scaleY: Math.abs(options.scaleY)
                    };
                },
                getTotalObjectScaling: function() {
                    var scale = this.getObjectScaling(), scaleX = scale.scaleX, scaleY = scale.scaleY;
                    if (this.canvas) {
                        var zoom = this.canvas.getZoom();
                        var retina = this.canvas.getRetinaScaling();
                        scaleX *= zoom * retina;
                        scaleY *= zoom * retina;
                    }
                    return {
                        scaleX,
                        scaleY
                    };
                },
                getObjectOpacity: function() {
                    var opacity = this.opacity;
                    if (this.group) opacity *= this.group.getObjectOpacity();
                    return opacity;
                },
                _set: function(key, value) {
                    var shouldConstrainValue = key === "scaleX" || key === "scaleY", isChanged = this[key] !== value, groupNeedsUpdate = false;
                    if (shouldConstrainValue) value = this._constrainScale(value);
                    if (key === "scaleX" && value < 0) {
                        this.flipX = !this.flipX;
                        value *= -1;
                    } else if (key === "scaleY" && value < 0) {
                        this.flipY = !this.flipY;
                        value *= -1;
                    } else if (key === "shadow" && value && !(value instanceof fabric.Shadow)) value = new fabric.Shadow(value); else if (key === "dirty" && this.group) this.group.set("dirty", value);
                    this[key] = value;
                    if (isChanged) {
                        groupNeedsUpdate = this.group && this.group.isOnACache();
                        if (this.cacheProperties.indexOf(key) > -1) {
                            this.dirty = true;
                            groupNeedsUpdate && this.group.set("dirty", true);
                        } else if (groupNeedsUpdate && this.stateProperties.indexOf(key) > -1) this.group.set("dirty", true);
                    }
                    return this;
                },
                setOnGroup: function() {},
                getViewportTransform: function() {
                    if (this.canvas && this.canvas.viewportTransform) return this.canvas.viewportTransform;
                    return fabric.iMatrix.concat();
                },
                isNotVisible: function() {
                    return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
                },
                render: function(ctx) {
                    if (this.isNotVisible()) return;
                    if (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) return;
                    ctx.save();
                    this._setupCompositeOperation(ctx);
                    this.drawSelectionBackground(ctx);
                    this.transform(ctx);
                    this._setOpacity(ctx);
                    this._setShadow(ctx, this);
                    if (this.shouldCache()) {
                        this.renderCache();
                        this.drawCacheOnCanvas(ctx);
                    } else {
                        this._removeCacheCanvas();
                        this.dirty = false;
                        this.drawObject(ctx);
                        if (this.objectCaching && this.statefullCache) this.saveState({
                            propertySet: "cacheProperties"
                        });
                    }
                    ctx.restore();
                },
                renderCache: function(options) {
                    options = options || {};
                    if (!this._cacheCanvas) this._createCacheCanvas();
                    if (this.isCacheDirty()) {
                        this.statefullCache && this.saveState({
                            propertySet: "cacheProperties"
                        });
                        this.drawObject(this._cacheContext, options.forClipping);
                        this.dirty = false;
                    }
                },
                _removeCacheCanvas: function() {
                    this._cacheCanvas = null;
                    this.cacheWidth = 0;
                    this.cacheHeight = 0;
                },
                hasStroke: function() {
                    return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
                },
                hasFill: function() {
                    return this.fill && this.fill !== "transparent";
                },
                needsItsOwnCache: function() {
                    if (this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow === "object") return true;
                    if (this.clipPath) return true;
                    return false;
                },
                shouldCache: function() {
                    this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache());
                    return this.ownCaching;
                },
                willDrawShadow: function() {
                    return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
                },
                drawClipPathOnCache: function(ctx) {
                    var path = this.clipPath;
                    ctx.save();
                    if (path.inverted) ctx.globalCompositeOperation = "destination-out"; else ctx.globalCompositeOperation = "destination-in";
                    if (path.absolutePositioned) {
                        var m = fabric.util.invertTransform(this.calcTransformMatrix());
                        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                    }
                    path.transform(ctx);
                    ctx.scale(1 / path.zoomX, 1 / path.zoomY);
                    ctx.drawImage(path._cacheCanvas, -path.cacheTranslationX, -path.cacheTranslationY);
                    ctx.restore();
                },
                drawObject: function(ctx, forClipping) {
                    var originalFill = this.fill, originalStroke = this.stroke;
                    if (forClipping) {
                        this.fill = "black";
                        this.stroke = "";
                        this._setClippingProperties(ctx);
                    } else this._renderBackground(ctx);
                    this._render(ctx);
                    this._drawClipPath(ctx);
                    this.fill = originalFill;
                    this.stroke = originalStroke;
                },
                _drawClipPath: function(ctx) {
                    var path = this.clipPath;
                    if (!path) return;
                    path.canvas = this.canvas;
                    path.shouldCache();
                    path._transformDone = true;
                    path.renderCache({
                        forClipping: true
                    });
                    this.drawClipPathOnCache(ctx);
                },
                drawCacheOnCanvas: function(ctx) {
                    ctx.scale(1 / this.zoomX, 1 / this.zoomY);
                    ctx.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
                },
                isCacheDirty: function(skipCanvas) {
                    if (this.isNotVisible()) return false;
                    if (this._cacheCanvas && !skipCanvas && this._updateCacheCanvas()) return true; else if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
                        if (this._cacheCanvas && !skipCanvas) {
                            var width = this.cacheWidth / this.zoomX;
                            var height = this.cacheHeight / this.zoomY;
                            this._cacheContext.clearRect(-width / 2, -height / 2, width, height);
                        }
                        return true;
                    }
                    return false;
                },
                _renderBackground: function(ctx) {
                    if (!this.backgroundColor) return;
                    var dim = this._getNonTransformedDimensions();
                    ctx.fillStyle = this.backgroundColor;
                    ctx.fillRect(-dim.x / 2, -dim.y / 2, dim.x, dim.y);
                    this._removeShadow(ctx);
                },
                _setOpacity: function(ctx) {
                    if (this.group && !this.group._transformDone) ctx.globalAlpha = this.getObjectOpacity(); else ctx.globalAlpha *= this.opacity;
                },
                _setStrokeStyles: function(ctx, decl) {
                    var stroke = decl.stroke;
                    if (stroke) {
                        ctx.lineWidth = decl.strokeWidth;
                        ctx.lineCap = decl.strokeLineCap;
                        ctx.lineDashOffset = decl.strokeDashOffset;
                        ctx.lineJoin = decl.strokeLineJoin;
                        ctx.miterLimit = decl.strokeMiterLimit;
                        if (stroke.toLive) if (stroke.gradientUnits === "percentage" || stroke.gradientTransform || stroke.patternTransform) this._applyPatternForTransformedGradient(ctx, stroke); else {
                            ctx.strokeStyle = stroke.toLive(ctx, this);
                            this._applyPatternGradientTransform(ctx, stroke);
                        } else ctx.strokeStyle = decl.stroke;
                    }
                },
                _setFillStyles: function(ctx, decl) {
                    var fill = decl.fill;
                    if (fill) if (fill.toLive) {
                        ctx.fillStyle = fill.toLive(ctx, this);
                        this._applyPatternGradientTransform(ctx, decl.fill);
                    } else ctx.fillStyle = fill;
                },
                _setClippingProperties: function(ctx) {
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = "transparent";
                    ctx.fillStyle = "#000000";
                },
                _setLineDash: function(ctx, dashArray) {
                    if (!dashArray || dashArray.length === 0) return;
                    if (1 & dashArray.length) dashArray.push.apply(dashArray, dashArray);
                    ctx.setLineDash(dashArray);
                },
                _renderControls: function(ctx, styleOverride) {
                    var options, drawBorders, drawControls, vpt = this.getViewportTransform(), matrix = this.calcTransformMatrix();
                    styleOverride = styleOverride || {};
                    drawBorders = typeof styleOverride.hasBorders !== "undefined" ? styleOverride.hasBorders : this.hasBorders;
                    drawControls = typeof styleOverride.hasControls !== "undefined" ? styleOverride.hasControls : this.hasControls;
                    matrix = fabric.util.multiplyTransformMatrices(vpt, matrix);
                    options = fabric.util.qrDecompose(matrix);
                    ctx.save();
                    ctx.translate(options.translateX, options.translateY);
                    ctx.lineWidth = 1 * this.borderScaleFactor;
                    if (!this.group) ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
                    ctx.rotate(degreesToRadians(options.angle));
                    if (styleOverride.forActiveSelection || this.group) drawBorders && this.drawBordersInGroup(ctx, options, styleOverride); else drawBorders && this.drawBorders(ctx, styleOverride);
                    drawControls && this.drawControls(ctx, styleOverride);
                    ctx.restore();
                },
                _setShadow: function(ctx) {
                    if (!this.shadow) return;
                    var scaling, shadow = this.shadow, canvas = this.canvas, multX = canvas && canvas.viewportTransform[0] || 1, multY = canvas && canvas.viewportTransform[3] || 1;
                    if (shadow.nonScaling) scaling = {
                        scaleX: 1,
                        scaleY: 1
                    }; else scaling = this.getObjectScaling();
                    if (canvas && canvas._isRetinaScaling()) {
                        multX *= fabric.devicePixelRatio;
                        multY *= fabric.devicePixelRatio;
                    }
                    ctx.shadowColor = shadow.color;
                    ctx.shadowBlur = shadow.blur * fabric.browserShadowBlurConstant * (multX + multY) * (scaling.scaleX + scaling.scaleY) / 4;
                    ctx.shadowOffsetX = shadow.offsetX * multX * scaling.scaleX;
                    ctx.shadowOffsetY = shadow.offsetY * multY * scaling.scaleY;
                },
                _removeShadow: function(ctx) {
                    if (!this.shadow) return;
                    ctx.shadowColor = "";
                    ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
                },
                _applyPatternGradientTransform: function(ctx, filler) {
                    if (!filler || !filler.toLive) return {
                        offsetX: 0,
                        offsetY: 0
                    };
                    var t = filler.gradientTransform || filler.patternTransform;
                    var offsetX = -this.width / 2 + filler.offsetX || 0, offsetY = -this.height / 2 + filler.offsetY || 0;
                    if (filler.gradientUnits === "percentage") ctx.transform(this.width, 0, 0, this.height, offsetX, offsetY); else ctx.transform(1, 0, 0, 1, offsetX, offsetY);
                    if (t) ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                    return {
                        offsetX,
                        offsetY
                    };
                },
                _renderPaintInOrder: function(ctx) {
                    if (this.paintFirst === "stroke") {
                        this._renderStroke(ctx);
                        this._renderFill(ctx);
                    } else {
                        this._renderFill(ctx);
                        this._renderStroke(ctx);
                    }
                },
                _render: function() {},
                _renderFill: function(ctx) {
                    if (!this.fill) return;
                    ctx.save();
                    this._setFillStyles(ctx, this);
                    if (this.fillRule === "evenodd") ctx.fill("evenodd"); else ctx.fill();
                    ctx.restore();
                },
                _renderStroke: function(ctx) {
                    if (!this.stroke || this.strokeWidth === 0) return;
                    if (this.shadow && !this.shadow.affectStroke) this._removeShadow(ctx);
                    ctx.save();
                    if (this.strokeUniform && this.group) {
                        var scaling = this.getObjectScaling();
                        ctx.scale(1 / scaling.scaleX, 1 / scaling.scaleY);
                    } else if (this.strokeUniform) ctx.scale(1 / this.scaleX, 1 / this.scaleY);
                    this._setLineDash(ctx, this.strokeDashArray);
                    this._setStrokeStyles(ctx, this);
                    ctx.stroke();
                    ctx.restore();
                },
                _applyPatternForTransformedGradient: function(ctx, filler) {
                    var pCtx, dims = this._limitCacheSize(this._getCacheCanvasDimensions()), pCanvas = fabric.util.createCanvasElement(), retinaScaling = this.canvas.getRetinaScaling(), width = dims.x / this.scaleX / retinaScaling, height = dims.y / this.scaleY / retinaScaling;
                    pCanvas.width = width;
                    pCanvas.height = height;
                    pCtx = pCanvas.getContext("2d");
                    pCtx.beginPath();
                    pCtx.moveTo(0, 0);
                    pCtx.lineTo(width, 0);
                    pCtx.lineTo(width, height);
                    pCtx.lineTo(0, height);
                    pCtx.closePath();
                    pCtx.translate(width / 2, height / 2);
                    pCtx.scale(dims.zoomX / this.scaleX / retinaScaling, dims.zoomY / this.scaleY / retinaScaling);
                    this._applyPatternGradientTransform(pCtx, filler);
                    pCtx.fillStyle = filler.toLive(ctx);
                    pCtx.fill();
                    ctx.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2);
                    ctx.scale(retinaScaling * this.scaleX / dims.zoomX, retinaScaling * this.scaleY / dims.zoomY);
                    ctx.strokeStyle = pCtx.createPattern(pCanvas, "no-repeat");
                },
                _findCenterFromElement: function() {
                    return {
                        x: this.left + this.width / 2,
                        y: this.top + this.height / 2
                    };
                },
                _assignTransformMatrixProps: function() {
                    if (this.transformMatrix) {
                        var options = fabric.util.qrDecompose(this.transformMatrix);
                        this.flipX = false;
                        this.flipY = false;
                        this.set("scaleX", options.scaleX);
                        this.set("scaleY", options.scaleY);
                        this.angle = options.angle;
                        this.skewX = options.skewX;
                        this.skewY = 0;
                    }
                },
                _removeTransformMatrix: function(preserveAspectRatioOptions) {
                    var center = this._findCenterFromElement();
                    if (this.transformMatrix) {
                        this._assignTransformMatrixProps();
                        center = fabric.util.transformPoint(center, this.transformMatrix);
                    }
                    this.transformMatrix = null;
                    if (preserveAspectRatioOptions) {
                        this.scaleX *= preserveAspectRatioOptions.scaleX;
                        this.scaleY *= preserveAspectRatioOptions.scaleY;
                        this.cropX = preserveAspectRatioOptions.cropX;
                        this.cropY = preserveAspectRatioOptions.cropY;
                        center.x += preserveAspectRatioOptions.offsetLeft;
                        center.y += preserveAspectRatioOptions.offsetTop;
                        this.width = preserveAspectRatioOptions.width;
                        this.height = preserveAspectRatioOptions.height;
                    }
                    this.setPositionByOrigin(center, "center", "center");
                },
                clone: function(callback, propertiesToInclude) {
                    var objectForm = this.toObject(propertiesToInclude);
                    if (this.constructor.fromObject) this.constructor.fromObject(objectForm, callback); else fabric.Object._fromObject("Object", objectForm, callback);
                },
                cloneAsImage: function(callback, options) {
                    var canvasEl = this.toCanvasElement(options);
                    if (callback) callback(new fabric.Image(canvasEl));
                    return this;
                },
                toCanvasElement: function(options) {
                    options || (options = {});
                    var utils = fabric.util, origParams = utils.saveObjectTransform(this), originalGroup = this.group, originalShadow = this.shadow, abs = Math.abs, multiplier = (options.multiplier || 1) * (options.enableRetinaScaling ? fabric.devicePixelRatio : 1);
                    delete this.group;
                    if (options.withoutTransform) utils.resetObjectTransform(this);
                    if (options.withoutShadow) this.shadow = null;
                    var scaling, shadowBlur, width, height, el = fabric.util.createCanvasElement(), boundingRect = this.getBoundingRect(true, true), shadow = this.shadow, shadowOffset = {
                        x: 0,
                        y: 0
                    };
                    if (shadow) {
                        shadowBlur = shadow.blur;
                        if (shadow.nonScaling) scaling = {
                            scaleX: 1,
                            scaleY: 1
                        }; else scaling = this.getObjectScaling();
                        shadowOffset.x = 2 * Math.round(abs(shadow.offsetX) + shadowBlur) * abs(scaling.scaleX);
                        shadowOffset.y = 2 * Math.round(abs(shadow.offsetY) + shadowBlur) * abs(scaling.scaleY);
                    }
                    width = boundingRect.width + shadowOffset.x;
                    height = boundingRect.height + shadowOffset.y;
                    el.width = Math.ceil(width);
                    el.height = Math.ceil(height);
                    var canvas = new fabric.StaticCanvas(el, {
                        enableRetinaScaling: false,
                        renderOnAddRemove: false,
                        skipOffscreen: false
                    });
                    if (options.format === "jpeg") canvas.backgroundColor = "#fff";
                    this.setPositionByOrigin(new fabric.Point(canvas.width / 2, canvas.height / 2), "center", "center");
                    var originalCanvas = this.canvas;
                    canvas.add(this);
                    var canvasEl = canvas.toCanvasElement(multiplier || 1, options);
                    this.shadow = originalShadow;
                    this.set("canvas", originalCanvas);
                    if (originalGroup) this.group = originalGroup;
                    this.set(origParams).setCoords();
                    canvas._objects = [];
                    canvas.dispose();
                    canvas = null;
                    return canvasEl;
                },
                toDataURL: function(options) {
                    options || (options = {});
                    return fabric.util.toDataURL(this.toCanvasElement(options), options.format || "png", options.quality || 1);
                },
                isType: function(type) {
                    return this.type === type;
                },
                complexity: function() {
                    return 1;
                },
                toJSON: function(propertiesToInclude) {
                    return this.toObject(propertiesToInclude);
                },
                rotate: function(angle) {
                    var shouldCenterOrigin = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
                    if (shouldCenterOrigin) this._setOriginToCenter();
                    this.set("angle", angle);
                    if (shouldCenterOrigin) this._resetOrigin();
                    return this;
                },
                centerH: function() {
                    this.canvas && this.canvas.centerObjectH(this);
                    return this;
                },
                viewportCenterH: function() {
                    this.canvas && this.canvas.viewportCenterObjectH(this);
                    return this;
                },
                centerV: function() {
                    this.canvas && this.canvas.centerObjectV(this);
                    return this;
                },
                viewportCenterV: function() {
                    this.canvas && this.canvas.viewportCenterObjectV(this);
                    return this;
                },
                center: function() {
                    this.canvas && this.canvas.centerObject(this);
                    return this;
                },
                viewportCenter: function() {
                    this.canvas && this.canvas.viewportCenterObject(this);
                    return this;
                },
                getLocalPointer: function(e, pointer) {
                    pointer = pointer || this.canvas.getPointer(e);
                    var pClicked = new fabric.Point(pointer.x, pointer.y), objectLeftTop = this._getLeftTopCoords();
                    if (this.angle) pClicked = fabric.util.rotatePoint(pClicked, objectLeftTop, degreesToRadians(-this.angle));
                    return {
                        x: pClicked.x - objectLeftTop.x,
                        y: pClicked.y - objectLeftTop.y
                    };
                },
                _setupCompositeOperation: function(ctx) {
                    if (this.globalCompositeOperation) ctx.globalCompositeOperation = this.globalCompositeOperation;
                }
            });
            fabric.util.createAccessors && fabric.util.createAccessors(fabric.Object);
            extend(fabric.Object.prototype, fabric.Observable);
            fabric.Object.NUM_FRACTION_DIGITS = 2;
            fabric.Object._fromObject = function(className, object, callback, extraParam) {
                var klass = fabric[className];
                object = clone(object, true);
                fabric.util.enlivenPatterns([ object.fill, object.stroke ], (function(patterns) {
                    if (typeof patterns[0] !== "undefined") object.fill = patterns[0];
                    if (typeof patterns[1] !== "undefined") object.stroke = patterns[1];
                    fabric.util.enlivenObjects([ object.clipPath ], (function(enlivedProps) {
                        object.clipPath = enlivedProps[0];
                        var instance = extraParam ? new klass(object[extraParam], object) : new klass(object);
                        callback && callback(instance);
                    }));
                }));
            };
            fabric.Object.__uid = 0;
        })(true ? exports : 0);
        (function() {
            var degreesToRadians = fabric.util.degreesToRadians, originXOffset = {
                left: -.5,
                center: 0,
                right: .5
            }, originYOffset = {
                top: -.5,
                center: 0,
                bottom: .5
            };
            fabric.util.object.extend(fabric.Object.prototype, {
                translateToGivenOrigin: function(point, fromOriginX, fromOriginY, toOriginX, toOriginY) {
                    var offsetX, offsetY, dim, x = point.x, y = point.y;
                    if (typeof fromOriginX === "string") fromOriginX = originXOffset[fromOriginX]; else fromOriginX -= .5;
                    if (typeof toOriginX === "string") toOriginX = originXOffset[toOriginX]; else toOriginX -= .5;
                    offsetX = toOriginX - fromOriginX;
                    if (typeof fromOriginY === "string") fromOriginY = originYOffset[fromOriginY]; else fromOriginY -= .5;
                    if (typeof toOriginY === "string") toOriginY = originYOffset[toOriginY]; else toOriginY -= .5;
                    offsetY = toOriginY - fromOriginY;
                    if (offsetX || offsetY) {
                        dim = this._getTransformedDimensions();
                        x = point.x + offsetX * dim.x;
                        y = point.y + offsetY * dim.y;
                    }
                    return new fabric.Point(x, y);
                },
                translateToCenterPoint: function(point, originX, originY) {
                    var p = this.translateToGivenOrigin(point, originX, originY, "center", "center");
                    if (this.angle) return fabric.util.rotatePoint(p, point, degreesToRadians(this.angle));
                    return p;
                },
                translateToOriginPoint: function(center, originX, originY) {
                    var p = this.translateToGivenOrigin(center, "center", "center", originX, originY);
                    if (this.angle) return fabric.util.rotatePoint(p, center, degreesToRadians(this.angle));
                    return p;
                },
                getCenterPoint: function() {
                    var leftTop = new fabric.Point(this.left, this.top);
                    return this.translateToCenterPoint(leftTop, this.originX, this.originY);
                },
                getPointByOrigin: function(originX, originY) {
                    var center = this.getCenterPoint();
                    return this.translateToOriginPoint(center, originX, originY);
                },
                toLocalPoint: function(point, originX, originY) {
                    var p, p2, center = this.getCenterPoint();
                    if (typeof originX !== "undefined" && typeof originY !== "undefined") p = this.translateToGivenOrigin(center, "center", "center", originX, originY); else p = new fabric.Point(this.left, this.top);
                    p2 = new fabric.Point(point.x, point.y);
                    if (this.angle) p2 = fabric.util.rotatePoint(p2, center, -degreesToRadians(this.angle));
                    return p2.subtractEquals(p);
                },
                setPositionByOrigin: function(pos, originX, originY) {
                    var center = this.translateToCenterPoint(pos, originX, originY), position = this.translateToOriginPoint(center, this.originX, this.originY);
                    this.set("left", position.x);
                    this.set("top", position.y);
                },
                adjustPosition: function(to) {
                    var offsetFrom, offsetTo, angle = degreesToRadians(this.angle), hypotFull = this.getScaledWidth(), xFull = fabric.util.cos(angle) * hypotFull, yFull = fabric.util.sin(angle) * hypotFull;
                    if (typeof this.originX === "string") offsetFrom = originXOffset[this.originX]; else offsetFrom = this.originX - .5;
                    if (typeof to === "string") offsetTo = originXOffset[to]; else offsetTo = to - .5;
                    this.left += xFull * (offsetTo - offsetFrom);
                    this.top += yFull * (offsetTo - offsetFrom);
                    this.setCoords();
                    this.originX = to;
                },
                _setOriginToCenter: function() {
                    this._originalOriginX = this.originX;
                    this._originalOriginY = this.originY;
                    var center = this.getCenterPoint();
                    this.originX = "center";
                    this.originY = "center";
                    this.left = center.x;
                    this.top = center.y;
                },
                _resetOrigin: function() {
                    var originPoint = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
                    this.originX = this._originalOriginX;
                    this.originY = this._originalOriginY;
                    this.left = originPoint.x;
                    this.top = originPoint.y;
                    this._originalOriginX = null;
                    this._originalOriginY = null;
                },
                _getLeftTopCoords: function() {
                    return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
                }
            });
        })();
        (function() {
            function arrayFromCoords(coords) {
                return [ new fabric.Point(coords.tl.x, coords.tl.y), new fabric.Point(coords.tr.x, coords.tr.y), new fabric.Point(coords.br.x, coords.br.y), new fabric.Point(coords.bl.x, coords.bl.y) ];
            }
            var util = fabric.util, degreesToRadians = util.degreesToRadians, multiplyMatrices = util.multiplyTransformMatrices, transformPoint = util.transformPoint;
            util.object.extend(fabric.Object.prototype, {
                oCoords: null,
                aCoords: null,
                lineCoords: null,
                ownMatrixCache: null,
                matrixCache: null,
                controls: {},
                _getCoords: function(absolute, calculate) {
                    if (calculate) return absolute ? this.calcACoords() : this.calcLineCoords();
                    if (!this.aCoords || !this.lineCoords) this.setCoords(true);
                    return absolute ? this.aCoords : this.lineCoords;
                },
                getCoords: function(absolute, calculate) {
                    return arrayFromCoords(this._getCoords(absolute, calculate));
                },
                intersectsWithRect: function(pointTL, pointBR, absolute, calculate) {
                    var coords = this.getCoords(absolute, calculate), intersection = fabric.Intersection.intersectPolygonRectangle(coords, pointTL, pointBR);
                    return intersection.status === "Intersection";
                },
                intersectsWithObject: function(other, absolute, calculate) {
                    var intersection = fabric.Intersection.intersectPolygonPolygon(this.getCoords(absolute, calculate), other.getCoords(absolute, calculate));
                    return intersection.status === "Intersection" || other.isContainedWithinObject(this, absolute, calculate) || this.isContainedWithinObject(other, absolute, calculate);
                },
                isContainedWithinObject: function(other, absolute, calculate) {
                    var points = this.getCoords(absolute, calculate), otherCoords = absolute ? other.aCoords : other.lineCoords, i = 0, lines = other._getImageLines(otherCoords);
                    for (;i < 4; i++) if (!other.containsPoint(points[i], lines)) return false;
                    return true;
                },
                isContainedWithinRect: function(pointTL, pointBR, absolute, calculate) {
                    var boundingRect = this.getBoundingRect(absolute, calculate);
                    return boundingRect.left >= pointTL.x && boundingRect.left + boundingRect.width <= pointBR.x && boundingRect.top >= pointTL.y && boundingRect.top + boundingRect.height <= pointBR.y;
                },
                containsPoint: function(point, lines, absolute, calculate) {
                    var coords = this._getCoords(absolute, calculate), xPoints = (lines = lines || this._getImageLines(coords), 
                    this._findCrossPoints(point, lines));
                    return xPoints !== 0 && xPoints % 2 === 1;
                },
                isOnScreen: function(calculate) {
                    if (!this.canvas) return false;
                    var pointTL = this.canvas.vptCoords.tl, pointBR = this.canvas.vptCoords.br;
                    var points = this.getCoords(true, calculate);
                    if (points.some((function(point) {
                        return point.x <= pointBR.x && point.x >= pointTL.x && point.y <= pointBR.y && point.y >= pointTL.y;
                    }))) return true;
                    if (this.intersectsWithRect(pointTL, pointBR, true, calculate)) return true;
                    return this._containsCenterOfCanvas(pointTL, pointBR, calculate);
                },
                _containsCenterOfCanvas: function(pointTL, pointBR, calculate) {
                    var centerPoint = {
                        x: (pointTL.x + pointBR.x) / 2,
                        y: (pointTL.y + pointBR.y) / 2
                    };
                    if (this.containsPoint(centerPoint, null, true, calculate)) return true;
                    return false;
                },
                isPartiallyOnScreen: function(calculate) {
                    if (!this.canvas) return false;
                    var pointTL = this.canvas.vptCoords.tl, pointBR = this.canvas.vptCoords.br;
                    if (this.intersectsWithRect(pointTL, pointBR, true, calculate)) return true;
                    var allPointsAreOutside = this.getCoords(true, calculate).every((function(point) {
                        return (point.x >= pointBR.x || point.x <= pointTL.x) && (point.y >= pointBR.y || point.y <= pointTL.y);
                    }));
                    return allPointsAreOutside && this._containsCenterOfCanvas(pointTL, pointBR, calculate);
                },
                _getImageLines: function(oCoords) {
                    var lines = {
                        topline: {
                            o: oCoords.tl,
                            d: oCoords.tr
                        },
                        rightline: {
                            o: oCoords.tr,
                            d: oCoords.br
                        },
                        bottomline: {
                            o: oCoords.br,
                            d: oCoords.bl
                        },
                        leftline: {
                            o: oCoords.bl,
                            d: oCoords.tl
                        }
                    };
                    return lines;
                },
                _findCrossPoints: function(point, lines) {
                    var b1, b2, a1, a2, xi, iLine, xcount = 0;
                    for (var lineKey in lines) {
                        iLine = lines[lineKey];
                        if (iLine.o.y < point.y && iLine.d.y < point.y) continue;
                        if (iLine.o.y >= point.y && iLine.d.y >= point.y) continue;
                        if (iLine.o.x === iLine.d.x && iLine.o.x >= point.x) xi = iLine.o.x; else {
                            b1 = 0;
                            b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
                            a1 = point.y - b1 * point.x;
                            a2 = iLine.o.y - b2 * iLine.o.x;
                            xi = -(a1 - a2) / (b1 - b2);
                        }
                        if (xi >= point.x) xcount += 1;
                        if (xcount === 2) break;
                    }
                    return xcount;
                },
                getBoundingRect: function(absolute, calculate) {
                    var coords = this.getCoords(absolute, calculate);
                    return util.makeBoundingBoxFromPoints(coords);
                },
                getScaledWidth: function() {
                    return this._getTransformedDimensions().x;
                },
                getScaledHeight: function() {
                    return this._getTransformedDimensions().y;
                },
                _constrainScale: function(value) {
                    if (Math.abs(value) < this.minScaleLimit) if (value < 0) return -this.minScaleLimit; else return this.minScaleLimit; else if (value === 0) return 1e-4;
                    return value;
                },
                scale: function(value) {
                    this._set("scaleX", value);
                    this._set("scaleY", value);
                    return this.setCoords();
                },
                scaleToWidth: function(value, absolute) {
                    var boundingRectFactor = this.getBoundingRect(absolute).width / this.getScaledWidth();
                    return this.scale(value / this.width / boundingRectFactor);
                },
                scaleToHeight: function(value, absolute) {
                    var boundingRectFactor = this.getBoundingRect(absolute).height / this.getScaledHeight();
                    return this.scale(value / this.height / boundingRectFactor);
                },
                calcCoords: function(absolute) {
                    if (absolute) return this.calcACoords();
                    return this.calcOCoords();
                },
                calcLineCoords: function() {
                    var vpt = this.getViewportTransform(), padding = this.padding, angle = degreesToRadians(this.angle), cos = util.cos(angle), sin = util.sin(angle), cosP = cos * padding, sinP = sin * padding, cosPSinP = cosP + sinP, cosPMinusSinP = cosP - sinP, aCoords = this.calcACoords();
                    var lineCoords = {
                        tl: transformPoint(aCoords.tl, vpt),
                        tr: transformPoint(aCoords.tr, vpt),
                        bl: transformPoint(aCoords.bl, vpt),
                        br: transformPoint(aCoords.br, vpt)
                    };
                    if (padding) {
                        lineCoords.tl.x -= cosPMinusSinP;
                        lineCoords.tl.y -= cosPSinP;
                        lineCoords.tr.x += cosPSinP;
                        lineCoords.tr.y -= cosPMinusSinP;
                        lineCoords.bl.x -= cosPSinP;
                        lineCoords.bl.y += cosPMinusSinP;
                        lineCoords.br.x += cosPMinusSinP;
                        lineCoords.br.y += cosPSinP;
                    }
                    return lineCoords;
                },
                calcOCoords: function() {
                    var rotateMatrix = this._calcRotateMatrix(), translateMatrix = this._calcTranslateMatrix(), vpt = this.getViewportTransform(), startMatrix = multiplyMatrices(vpt, translateMatrix), finalMatrix = multiplyMatrices(startMatrix, rotateMatrix), dim = (finalMatrix = multiplyMatrices(finalMatrix, [ 1 / vpt[0], 0, 0, 1 / vpt[3], 0, 0 ]), 
                    this._calculateCurrentDimensions()), coords = {};
                    this.forEachControl((function(control, key, fabricObject) {
                        coords[key] = control.positionHandler(dim, finalMatrix, fabricObject);
                    }));
                    return coords;
                },
                calcACoords: function() {
                    var rotateMatrix = this._calcRotateMatrix(), translateMatrix = this._calcTranslateMatrix(), finalMatrix = multiplyMatrices(translateMatrix, rotateMatrix), dim = this._getTransformedDimensions(), w = dim.x / 2, h = dim.y / 2;
                    return {
                        tl: transformPoint({
                            x: -w,
                            y: -h
                        }, finalMatrix),
                        tr: transformPoint({
                            x: w,
                            y: -h
                        }, finalMatrix),
                        bl: transformPoint({
                            x: -w,
                            y: h
                        }, finalMatrix),
                        br: transformPoint({
                            x: w,
                            y: h
                        }, finalMatrix)
                    };
                },
                setCoords: function(skipCorners) {
                    this.aCoords = this.calcACoords();
                    this.lineCoords = this.group ? this.aCoords : this.calcLineCoords();
                    if (skipCorners) return this;
                    this.oCoords = this.calcOCoords();
                    this._setCornerCoords && this._setCornerCoords();
                    return this;
                },
                _calcRotateMatrix: function() {
                    return util.calcRotateMatrix(this);
                },
                _calcTranslateMatrix: function() {
                    var center = this.getCenterPoint();
                    return [ 1, 0, 0, 1, center.x, center.y ];
                },
                transformMatrixKey: function(skipGroup) {
                    var sep = "_", prefix = "";
                    if (!skipGroup && this.group) prefix = this.group.transformMatrixKey(skipGroup) + sep;
                    return prefix + this.top + sep + this.left + sep + this.scaleX + sep + this.scaleY + sep + this.skewX + sep + this.skewY + sep + this.angle + sep + this.originX + sep + this.originY + sep + this.width + sep + this.height + sep + this.strokeWidth + this.flipX + this.flipY;
                },
                calcTransformMatrix: function(skipGroup) {
                    var matrix = this.calcOwnMatrix();
                    if (skipGroup || !this.group) return matrix;
                    var key = this.transformMatrixKey(skipGroup), cache = this.matrixCache || (this.matrixCache = {});
                    if (cache.key === key) return cache.value;
                    if (this.group) matrix = multiplyMatrices(this.group.calcTransformMatrix(false), matrix);
                    cache.key = key;
                    cache.value = matrix;
                    return matrix;
                },
                calcOwnMatrix: function() {
                    var key = this.transformMatrixKey(true), cache = this.ownMatrixCache || (this.ownMatrixCache = {});
                    if (cache.key === key) return cache.value;
                    var tMatrix = this._calcTranslateMatrix(), options = {
                        angle: this.angle,
                        translateX: tMatrix[4],
                        translateY: tMatrix[5],
                        scaleX: this.scaleX,
                        scaleY: this.scaleY,
                        skewX: this.skewX,
                        skewY: this.skewY,
                        flipX: this.flipX,
                        flipY: this.flipY
                    };
                    cache.key = key;
                    cache.value = util.composeMatrix(options);
                    return cache.value;
                },
                _calcDimensionsTransformMatrix: function(skewX, skewY, flipping) {
                    return util.calcDimensionsMatrix({
                        skewX,
                        skewY,
                        scaleX: this.scaleX * (flipping && this.flipX ? -1 : 1),
                        scaleY: this.scaleY * (flipping && this.flipY ? -1 : 1)
                    });
                },
                _getNonTransformedDimensions: function() {
                    var strokeWidth = this.strokeWidth, w = this.width + strokeWidth, h = this.height + strokeWidth;
                    return {
                        x: w,
                        y: h
                    };
                },
                _getTransformedDimensions: function(skewX, skewY) {
                    if (typeof skewX === "undefined") skewX = this.skewX;
                    if (typeof skewY === "undefined") skewY = this.skewY;
                    var dimensions, dimX, dimY, noSkew = skewX === 0 && skewY === 0;
                    if (this.strokeUniform) {
                        dimX = this.width;
                        dimY = this.height;
                    } else {
                        dimensions = this._getNonTransformedDimensions();
                        dimX = dimensions.x;
                        dimY = dimensions.y;
                    }
                    if (noSkew) return this._finalizeDimensions(dimX * this.scaleX, dimY * this.scaleY);
                    var bbox = util.sizeAfterTransform(dimX, dimY, {
                        scaleX: this.scaleX,
                        scaleY: this.scaleY,
                        skewX,
                        skewY
                    });
                    return this._finalizeDimensions(bbox.x, bbox.y);
                },
                _finalizeDimensions: function(width, height) {
                    return this.strokeUniform ? {
                        x: width + this.strokeWidth,
                        y: height + this.strokeWidth
                    } : {
                        x: width,
                        y: height
                    };
                },
                _calculateCurrentDimensions: function() {
                    var vpt = this.getViewportTransform(), dim = this._getTransformedDimensions(), p = transformPoint(dim, vpt, true);
                    return p.scalarAdd(2 * this.padding);
                }
            });
        })();
        fabric.util.object.extend(fabric.Object.prototype, {
            sendToBack: function() {
                if (this.group) fabric.StaticCanvas.prototype.sendToBack.call(this.group, this); else if (this.canvas) this.canvas.sendToBack(this);
                return this;
            },
            bringToFront: function() {
                if (this.group) fabric.StaticCanvas.prototype.bringToFront.call(this.group, this); else if (this.canvas) this.canvas.bringToFront(this);
                return this;
            },
            sendBackwards: function(intersecting) {
                if (this.group) fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, intersecting); else if (this.canvas) this.canvas.sendBackwards(this, intersecting);
                return this;
            },
            bringForward: function(intersecting) {
                if (this.group) fabric.StaticCanvas.prototype.bringForward.call(this.group, this, intersecting); else if (this.canvas) this.canvas.bringForward(this, intersecting);
                return this;
            },
            moveTo: function(index) {
                if (this.group && this.group.type !== "activeSelection") fabric.StaticCanvas.prototype.moveTo.call(this.group, this, index); else if (this.canvas) this.canvas.moveTo(this, index);
                return this;
            }
        });
        (function() {
            function getSvgColorString(prop, value) {
                if (!value) return prop + ": none; "; else if (value.toLive) return prop + ": url(#SVGID_" + value.id + "); "; else {
                    var color = new fabric.Color(value), str = prop + ": " + color.toRgb() + "; ", opacity = color.getAlpha();
                    if (opacity !== 1) str += prop + "-opacity: " + opacity.toString() + "; ";
                    return str;
                }
            }
            var toFixed = fabric.util.toFixed;
            fabric.util.object.extend(fabric.Object.prototype, {
                getSvgStyles: function(skipShadow) {
                    var fillRule = this.fillRule ? this.fillRule : "nonzero", strokeWidth = this.strokeWidth ? this.strokeWidth : "0", strokeDashArray = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", strokeDashOffset = this.strokeDashOffset ? this.strokeDashOffset : "0", strokeLineCap = this.strokeLineCap ? this.strokeLineCap : "butt", strokeLineJoin = this.strokeLineJoin ? this.strokeLineJoin : "miter", strokeMiterLimit = this.strokeMiterLimit ? this.strokeMiterLimit : "4", opacity = typeof this.opacity !== "undefined" ? this.opacity : "1", visibility = this.visible ? "" : " visibility: hidden;", filter = skipShadow ? "" : this.getSvgFilter(), fill = getSvgColorString("fill", this.fill), stroke = getSvgColorString("stroke", this.stroke);
                    return [ stroke, "stroke-width: ", strokeWidth, "; ", "stroke-dasharray: ", strokeDashArray, "; ", "stroke-linecap: ", strokeLineCap, "; ", "stroke-dashoffset: ", strokeDashOffset, "; ", "stroke-linejoin: ", strokeLineJoin, "; ", "stroke-miterlimit: ", strokeMiterLimit, "; ", fill, "fill-rule: ", fillRule, "; ", "opacity: ", opacity, ";", filter, visibility ].join("");
                },
                getSvgSpanStyles: function(style, useWhiteSpace) {
                    var term = "; ";
                    var fontFamily = style.fontFamily ? "font-family: " + (style.fontFamily.indexOf("'") === -1 && style.fontFamily.indexOf('"') === -1 ? "'" + style.fontFamily + "'" : style.fontFamily) + term : "";
                    var strokeWidth = style.strokeWidth ? "stroke-width: " + style.strokeWidth + term : "", fontSize = (fontFamily = fontFamily, 
                    style.fontSize ? "font-size: " + style.fontSize + "px" + term : ""), fontStyle = style.fontStyle ? "font-style: " + style.fontStyle + term : "", fontWeight = style.fontWeight ? "font-weight: " + style.fontWeight + term : "", fill = style.fill ? getSvgColorString("fill", style.fill) : "", stroke = style.stroke ? getSvgColorString("stroke", style.stroke) : "", textDecoration = this.getSvgTextDecoration(style), deltaY = style.deltaY ? "baseline-shift: " + -style.deltaY + "; " : "";
                    if (textDecoration) textDecoration = "text-decoration: " + textDecoration + term;
                    return [ stroke, strokeWidth, fontFamily, fontSize, fontStyle, fontWeight, textDecoration, fill, deltaY, useWhiteSpace ? "white-space: pre; " : "" ].join("");
                },
                getSvgTextDecoration: function(style) {
                    return [ "overline", "underline", "line-through" ].filter((function(decoration) {
                        return style[decoration.replace("-", "")];
                    })).join(" ");
                },
                getSvgFilter: function() {
                    return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
                },
                getSvgCommons: function() {
                    return [ this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : "" ].join("");
                },
                getSvgTransform: function(full, additionalTransform) {
                    var transform = full ? this.calcTransformMatrix() : this.calcOwnMatrix(), svgTransform = 'transform="' + fabric.util.matrixToSVG(transform);
                    return svgTransform + (additionalTransform || "") + '" ';
                },
                _setSVGBg: function(textBgRects) {
                    if (this.backgroundColor) {
                        var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                        textBgRects.push("\t\t<rect ", this._getFillAttributes(this.backgroundColor), ' x="', toFixed(-this.width / 2, NUM_FRACTION_DIGITS), '" y="', toFixed(-this.height / 2, NUM_FRACTION_DIGITS), '" width="', toFixed(this.width, NUM_FRACTION_DIGITS), '" height="', toFixed(this.height, NUM_FRACTION_DIGITS), '"></rect>\n');
                    }
                },
                toSVG: function(reviver) {
                    return this._createBaseSVGMarkup(this._toSVG(reviver), {
                        reviver
                    });
                },
                toClipPathSVG: function(reviver) {
                    return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(reviver), {
                        reviver
                    });
                },
                _createBaseClipPathSVGMarkup: function(objectMarkup, options) {
                    options = options || {};
                    var reviver = options.reviver, additionalTransform = options.additionalTransform || "", commonPieces = [ this.getSvgTransform(true, additionalTransform), this.getSvgCommons() ].join(""), index = objectMarkup.indexOf("COMMON_PARTS");
                    objectMarkup[index] = commonPieces;
                    return reviver ? reviver(objectMarkup.join("")) : objectMarkup.join("");
                },
                _createBaseSVGMarkup: function(objectMarkup, options) {
                    options = options || {};
                    var commonPieces, clipPathMarkup, noStyle = options.noStyle, reviver = options.reviver, styleInfo = noStyle ? "" : 'style="' + this.getSvgStyles() + '" ', shadowInfo = options.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", clipPath = this.clipPath, vectorEffect = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", absoluteClipPath = clipPath && clipPath.absolutePositioned, stroke = this.stroke, fill = this.fill, shadow = this.shadow, markup = [], index = objectMarkup.indexOf("COMMON_PARTS"), additionalTransform = options.additionalTransform;
                    if (clipPath) {
                        clipPath.clipPathId = "CLIPPATH_" + fabric.Object.__uid++;
                        clipPathMarkup = '<clipPath id="' + clipPath.clipPathId + '" >\n' + clipPath.toClipPathSVG(reviver) + "</clipPath>\n";
                    }
                    if (absoluteClipPath) markup.push("<g ", shadowInfo, this.getSvgCommons(), " >\n");
                    markup.push("<g ", this.getSvgTransform(false), !absoluteClipPath ? shadowInfo + this.getSvgCommons() : "", " >\n");
                    commonPieces = [ styleInfo, vectorEffect, noStyle ? "" : this.addPaintOrder(), " ", additionalTransform ? 'transform="' + additionalTransform + '" ' : "" ].join("");
                    objectMarkup[index] = commonPieces;
                    if (fill && fill.toLive) markup.push(fill.toSVG(this));
                    if (stroke && stroke.toLive) markup.push(stroke.toSVG(this));
                    if (shadow) markup.push(shadow.toSVG(this));
                    if (clipPath) markup.push(clipPathMarkup);
                    markup.push(objectMarkup.join(""));
                    markup.push("</g>\n");
                    absoluteClipPath && markup.push("</g>\n");
                    return reviver ? reviver(markup.join("")) : markup.join("");
                },
                addPaintOrder: function() {
                    return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
                }
            });
        })();
        (function() {
            var extend = fabric.util.object.extend, originalSet = "stateProperties";
            function saveProps(origin, destination, props) {
                var tmpObj = {}, deep = true;
                props.forEach((function(prop) {
                    tmpObj[prop] = origin[prop];
                }));
                extend(origin[destination], tmpObj, deep);
            }
            function _isEqual(origValue, currentValue, firstPass) {
                if (origValue === currentValue) return true; else if (Array.isArray(origValue)) {
                    if (!Array.isArray(currentValue) || origValue.length !== currentValue.length) return false;
                    for (var i = 0, len = origValue.length; i < len; i++) if (!_isEqual(origValue[i], currentValue[i])) return false;
                    return true;
                } else if (origValue && typeof origValue === "object") {
                    var key, keys = Object.keys(origValue);
                    if (!currentValue || typeof currentValue !== "object" || !firstPass && keys.length !== Object.keys(currentValue).length) return false;
                    for (i = 0, len = keys.length; i < len; i++) {
                        key = keys[i];
                        if (key === "canvas" || key === "group") continue;
                        if (!_isEqual(origValue[key], currentValue[key])) return false;
                    }
                    return true;
                }
            }
            fabric.util.object.extend(fabric.Object.prototype, {
                hasStateChanged: function(propertySet) {
                    propertySet = propertySet || originalSet;
                    var dashedPropertySet = "_" + propertySet;
                    if (Object.keys(this[dashedPropertySet]).length < this[propertySet].length) return true;
                    return !_isEqual(this[dashedPropertySet], this, true);
                },
                saveState: function(options) {
                    var propertySet = options && options.propertySet || originalSet, destination = "_" + propertySet;
                    if (!this[destination]) return this.setupState(options);
                    saveProps(this, destination, this[propertySet]);
                    if (options && options.stateProperties) saveProps(this, destination, options.stateProperties);
                    return this;
                },
                setupState: function(options) {
                    options = options || {};
                    var propertySet = options.propertySet || originalSet;
                    options.propertySet = propertySet;
                    this["_" + propertySet] = {};
                    this.saveState(options);
                    return this;
                }
            });
        })();
        (function() {
            var degreesToRadians = fabric.util.degreesToRadians;
            fabric.util.object.extend(fabric.Object.prototype, {
                _findTargetCorner: function(pointer, forTouch) {
                    if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return false;
                    var xPoints, lines, i, ex = pointer.x, ey = pointer.y, keys = Object.keys(this.oCoords), j = keys.length - 1;
                    this.__corner = 0;
                    for (;j >= 0; j--) {
                        i = keys[j];
                        if (!this.isControlVisible(i)) continue;
                        lines = this._getImageLines(forTouch ? this.oCoords[i].touchCorner : this.oCoords[i].corner);
                        xPoints = this._findCrossPoints({
                            x: ex,
                            y: ey
                        }, lines);
                        if (xPoints !== 0 && xPoints % 2 === 1) {
                            this.__corner = i;
                            return i;
                        }
                    }
                    return false;
                },
                forEachControl: function(fn) {
                    for (var i in this.controls) fn(this.controls[i], i, this);
                },
                _setCornerCoords: function() {
                    var coords = this.oCoords;
                    for (var control in coords) {
                        var controlObject = this.controls[control];
                        coords[control].corner = controlObject.calcCornerCoords(this.angle, this.cornerSize, coords[control].x, coords[control].y, false);
                        coords[control].touchCorner = controlObject.calcCornerCoords(this.angle, this.touchCornerSize, coords[control].x, coords[control].y, true);
                    }
                },
                drawSelectionBackground: function(ctx) {
                    if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) return this;
                    ctx.save();
                    var center = this.getCenterPoint(), wh = this._calculateCurrentDimensions(), vpt = this.canvas.viewportTransform;
                    ctx.translate(center.x, center.y);
                    ctx.scale(1 / vpt[0], 1 / vpt[3]);
                    ctx.rotate(degreesToRadians(this.angle));
                    ctx.fillStyle = this.selectionBackgroundColor;
                    ctx.fillRect(-wh.x / 2, -wh.y / 2, wh.x, wh.y);
                    ctx.restore();
                    return this;
                },
                drawBorders: function(ctx, styleOverride) {
                    styleOverride = styleOverride || {};
                    var wh = this._calculateCurrentDimensions(), strokeWidth = this.borderScaleFactor, width = wh.x + strokeWidth, height = wh.y + strokeWidth, hasControls = typeof styleOverride.hasControls !== "undefined" ? styleOverride.hasControls : this.hasControls, shouldStroke = false;
                    ctx.save();
                    ctx.strokeStyle = styleOverride.borderColor || this.borderColor;
                    this._setLineDash(ctx, styleOverride.borderDashArray || this.borderDashArray);
                    ctx.strokeRect(-width / 2, -height / 2, width, height);
                    if (hasControls) {
                        ctx.beginPath();
                        this.forEachControl((function(control, key, fabricObject) {
                            if (control.withConnection && control.getVisibility(fabricObject, key)) {
                                shouldStroke = true;
                                ctx.moveTo(control.x * width, control.y * height);
                                ctx.lineTo(control.x * width + control.offsetX, control.y * height + control.offsetY);
                            }
                        }));
                        if (shouldStroke) ctx.stroke();
                    }
                    ctx.restore();
                    return this;
                },
                drawBordersInGroup: function(ctx, options, styleOverride) {
                    styleOverride = styleOverride || {};
                    var bbox = fabric.util.sizeAfterTransform(this.width, this.height, options), strokeWidth = this.strokeWidth, strokeUniform = this.strokeUniform, borderScaleFactor = this.borderScaleFactor, width = bbox.x + strokeWidth * (strokeUniform ? this.canvas.getZoom() : options.scaleX) + borderScaleFactor, height = bbox.y + strokeWidth * (strokeUniform ? this.canvas.getZoom() : options.scaleY) + borderScaleFactor;
                    ctx.save();
                    this._setLineDash(ctx, styleOverride.borderDashArray || this.borderDashArray);
                    ctx.strokeStyle = styleOverride.borderColor || this.borderColor;
                    ctx.strokeRect(-width / 2, -height / 2, width, height);
                    ctx.restore();
                    return this;
                },
                drawControls: function(ctx, styleOverride) {
                    styleOverride = styleOverride || {};
                    ctx.save();
                    var matrix, p, retinaScaling = this.canvas.getRetinaScaling();
                    ctx.setTransform(retinaScaling, 0, 0, retinaScaling, 0, 0);
                    ctx.strokeStyle = ctx.fillStyle = styleOverride.cornerColor || this.cornerColor;
                    if (!this.transparentCorners) ctx.strokeStyle = styleOverride.cornerStrokeColor || this.cornerStrokeColor;
                    this._setLineDash(ctx, styleOverride.cornerDashArray || this.cornerDashArray);
                    this.setCoords();
                    if (this.group) matrix = this.group.calcTransformMatrix();
                    this.forEachControl((function(control, key, fabricObject) {
                        p = fabricObject.oCoords[key];
                        if (control.getVisibility(fabricObject, key)) {
                            if (matrix) p = fabric.util.transformPoint(p, matrix);
                            control.render(ctx, p.x, p.y, styleOverride, fabricObject);
                        }
                    }));
                    ctx.restore();
                    return this;
                },
                isControlVisible: function(controlKey) {
                    return this.controls[controlKey] && this.controls[controlKey].getVisibility(this, controlKey);
                },
                setControlVisible: function(controlKey, visible) {
                    if (!this._controlsVisibility) this._controlsVisibility = {};
                    this._controlsVisibility[controlKey] = visible;
                    return this;
                },
                setControlsVisibility: function(options) {
                    options || (options = {});
                    for (var p in options) this.setControlVisible(p, options[p]);
                    return this;
                },
                onDeselect: function() {},
                onSelect: function() {}
            });
        })();
        fabric.util.object.extend(fabric.StaticCanvas.prototype, {
            FX_DURATION: 500,
            fxCenterObjectH: function(object, callbacks) {
                callbacks = callbacks || {};
                var empty = function() {}, onComplete = callbacks.onComplete || empty, onChange = callbacks.onChange || empty, _this = this;
                fabric.util.animate({
                    startValue: object.left,
                    endValue: this.getCenter().left,
                    duration: this.FX_DURATION,
                    onChange: function(value) {
                        object.set("left", value);
                        _this.requestRenderAll();
                        onChange();
                    },
                    onComplete: function() {
                        object.setCoords();
                        onComplete();
                    }
                });
                return this;
            },
            fxCenterObjectV: function(object, callbacks) {
                callbacks = callbacks || {};
                var empty = function() {}, onComplete = callbacks.onComplete || empty, onChange = callbacks.onChange || empty, _this = this;
                fabric.util.animate({
                    startValue: object.top,
                    endValue: this.getCenter().top,
                    duration: this.FX_DURATION,
                    onChange: function(value) {
                        object.set("top", value);
                        _this.requestRenderAll();
                        onChange();
                    },
                    onComplete: function() {
                        object.setCoords();
                        onComplete();
                    }
                });
                return this;
            },
            fxRemove: function(object, callbacks) {
                callbacks = callbacks || {};
                var empty = function() {}, onComplete = callbacks.onComplete || empty, onChange = callbacks.onChange || empty, _this = this;
                fabric.util.animate({
                    startValue: object.opacity,
                    endValue: 0,
                    duration: this.FX_DURATION,
                    onChange: function(value) {
                        object.set("opacity", value);
                        _this.requestRenderAll();
                        onChange();
                    },
                    onComplete: function() {
                        _this.remove(object);
                        onComplete();
                    }
                });
                return this;
            }
        });
        fabric.util.object.extend(fabric.Object.prototype, {
            animate: function() {
                if (arguments[0] && typeof arguments[0] === "object") {
                    var prop, skipCallbacks, propsToAnimate = [];
                    for (prop in arguments[0]) propsToAnimate.push(prop);
                    for (var i = 0, len = propsToAnimate.length; i < len; i++) {
                        prop = propsToAnimate[i];
                        skipCallbacks = i !== len - 1;
                        this._animate(prop, arguments[0][prop], arguments[1], skipCallbacks);
                    }
                } else this._animate.apply(this, arguments);
                return this;
            },
            _animate: function(property, to, options, skipCallbacks) {
                var propPair, _this = this;
                to = to.toString();
                if (!options) options = {}; else options = fabric.util.object.clone(options);
                if (~property.indexOf(".")) propPair = property.split(".");
                var propIsColor = _this.colorProperties.indexOf(property) > -1 || propPair && _this.colorProperties.indexOf(propPair[1]) > -1;
                var currentValue = propPair ? this.get(propPair[0])[propPair[1]] : this.get(property);
                if (!("from" in options)) options.from = currentValue;
                if (!propIsColor) if (~to.indexOf("=")) to = currentValue + parseFloat(to.replace("=", "")); else to = parseFloat(to);
                var _options = {
                    startValue: options.from,
                    endValue: to,
                    byValue: options.by,
                    easing: options.easing,
                    duration: options.duration,
                    abort: options.abort && function(value, valueProgress, timeProgress) {
                        return options.abort.call(_this, value, valueProgress, timeProgress);
                    },
                    onChange: function(value, valueProgress, timeProgress) {
                        if (propPair) _this[propPair[0]][propPair[1]] = value; else _this.set(property, value);
                        if (skipCallbacks) return;
                        options.onChange && options.onChange(value, valueProgress, timeProgress);
                    },
                    onComplete: function(value, valueProgress, timeProgress) {
                        if (skipCallbacks) return;
                        _this.setCoords();
                        options.onComplete && options.onComplete(value, valueProgress, timeProgress);
                    }
                };
                if (propIsColor) return fabric.util.animateColor(_options.startValue, _options.endValue, _options.duration, _options); else return fabric.util.animate(_options);
            }
        });
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, clone = fabric.util.object.clone, coordProps = {
                x1: 1,
                x2: 1,
                y1: 1,
                y2: 1
            };
            if (fabric.Line) {
                fabric.warn("fabric.Line is already defined");
                return;
            }
            fabric.Line = fabric.util.createClass(fabric.Object, {
                type: "line",
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
                initialize: function(points, options) {
                    if (!points) points = [ 0, 0, 0, 0 ];
                    this.callSuper("initialize", options);
                    this.set("x1", points[0]);
                    this.set("y1", points[1]);
                    this.set("x2", points[2]);
                    this.set("y2", points[3]);
                    this._setWidthHeight(options);
                },
                _setWidthHeight: function(options) {
                    options || (options = {});
                    this.width = Math.abs(this.x2 - this.x1);
                    this.height = Math.abs(this.y2 - this.y1);
                    this.left = "left" in options ? options.left : this._getLeftToOriginX();
                    this.top = "top" in options ? options.top : this._getTopToOriginY();
                },
                _set: function(key, value) {
                    this.callSuper("_set", key, value);
                    if (typeof coordProps[key] !== "undefined") this._setWidthHeight();
                    return this;
                },
                _getLeftToOriginX: makeEdgeToOriginGetter({
                    origin: "originX",
                    axis1: "x1",
                    axis2: "x2",
                    dimension: "width"
                }, {
                    nearest: "left",
                    center: "center",
                    farthest: "right"
                }),
                _getTopToOriginY: makeEdgeToOriginGetter({
                    origin: "originY",
                    axis1: "y1",
                    axis2: "y2",
                    dimension: "height"
                }, {
                    nearest: "top",
                    center: "center",
                    farthest: "bottom"
                }),
                _render: function(ctx) {
                    ctx.beginPath();
                    var p = this.calcLinePoints();
                    ctx.moveTo(p.x1, p.y1);
                    ctx.lineTo(p.x2, p.y2);
                    ctx.lineWidth = this.strokeWidth;
                    var origStrokeStyle = ctx.strokeStyle;
                    ctx.strokeStyle = this.stroke || ctx.fillStyle;
                    this.stroke && this._renderStroke(ctx);
                    ctx.strokeStyle = origStrokeStyle;
                },
                _findCenterFromElement: function() {
                    return {
                        x: (this.x1 + this.x2) / 2,
                        y: (this.y1 + this.y2) / 2
                    };
                },
                toObject: function(propertiesToInclude) {
                    return extend(this.callSuper("toObject", propertiesToInclude), this.calcLinePoints());
                },
                _getNonTransformedDimensions: function() {
                    var dim = this.callSuper("_getNonTransformedDimensions");
                    if (this.strokeLineCap === "butt") {
                        if (this.width === 0) dim.y -= this.strokeWidth;
                        if (this.height === 0) dim.x -= this.strokeWidth;
                    }
                    return dim;
                },
                calcLinePoints: function() {
                    var xMult = this.x1 <= this.x2 ? -1 : 1, yMult = this.y1 <= this.y2 ? -1 : 1, x1 = xMult * this.width * .5, y1 = yMult * this.height * .5, x2 = xMult * this.width * -.5, y2 = yMult * this.height * -.5;
                    return {
                        x1,
                        x2,
                        y1,
                        y2
                    };
                },
                _toSVG: function() {
                    var p = this.calcLinePoints();
                    return [ "<line ", "COMMON_PARTS", 'x1="', p.x1, '" y1="', p.y1, '" x2="', p.x2, '" y2="', p.y2, '" />\n' ];
                }
            });
            fabric.Line.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" "));
            fabric.Line.fromElement = function(element, callback, options) {
                options = options || {};
                var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES), points = [ parsedAttributes.x1 || 0, parsedAttributes.y1 || 0, parsedAttributes.x2 || 0, parsedAttributes.y2 || 0 ];
                callback(new fabric.Line(points, extend(parsedAttributes, options)));
            };
            fabric.Line.fromObject = function(object, callback) {
                function _callback(instance) {
                    delete instance.points;
                    callback && callback(instance);
                }
                var options = clone(object, true);
                options.points = [ object.x1, object.y1, object.x2, object.y2 ];
                fabric.Object._fromObject("Line", options, _callback, "points");
            };
            function makeEdgeToOriginGetter(propertyNames, originValues) {
                var origin = propertyNames.origin, axis1 = propertyNames.axis1, axis2 = propertyNames.axis2, dimension = propertyNames.dimension, nearest = originValues.nearest, center = originValues.center, farthest = originValues.farthest;
                return function() {
                    switch (this.get(origin)) {
                      case nearest:
                        return Math.min(this.get(axis1), this.get(axis2));

                      case center:
                        return Math.min(this.get(axis1), this.get(axis2)) + .5 * this.get(dimension);

                      case farthest:
                        return Math.max(this.get(axis1), this.get(axis2));
                    }
                };
            }
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), pi = Math.PI;
            if (fabric.Circle) {
                fabric.warn("fabric.Circle is already defined.");
                return;
            }
            fabric.Circle = fabric.util.createClass(fabric.Object, {
                type: "circle",
                radius: 0,
                startAngle: 0,
                endAngle: pi * 2,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
                _set: function(key, value) {
                    this.callSuper("_set", key, value);
                    if (key === "radius") this.setRadius(value);
                    return this;
                },
                toObject: function(propertiesToInclude) {
                    return this.callSuper("toObject", [ "radius", "startAngle", "endAngle" ].concat(propertiesToInclude));
                },
                _toSVG: function() {
                    var svgString, x = 0, y = 0, angle = (this.endAngle - this.startAngle) % (2 * pi);
                    if (angle === 0) svgString = [ "<circle ", "COMMON_PARTS", 'cx="' + x + '" cy="' + y + '" ', 'r="', this.radius, '" />\n' ]; else {
                        var startX = fabric.util.cos(this.startAngle) * this.radius, startY = fabric.util.sin(this.startAngle) * this.radius, endX = fabric.util.cos(this.endAngle) * this.radius, endY = fabric.util.sin(this.endAngle) * this.radius, largeFlag = angle > pi ? "1" : "0";
                        svgString = [ '<path d="M ' + startX + " " + startY, " A " + this.radius + " " + this.radius, " 0 ", +largeFlag + " 1", " " + endX + " " + endY, '" ', "COMMON_PARTS", " />\n" ];
                    }
                    return svgString;
                },
                _render: function(ctx) {
                    ctx.beginPath();
                    ctx.arc(0, 0, this.radius, this.startAngle, this.endAngle, false);
                    this._renderPaintInOrder(ctx);
                },
                getRadiusX: function() {
                    return this.get("radius") * this.get("scaleX");
                },
                getRadiusY: function() {
                    return this.get("radius") * this.get("scaleY");
                },
                setRadius: function(value) {
                    this.radius = value;
                    return this.set("width", value * 2).set("height", value * 2);
                }
            });
            fabric.Circle.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("cx cy r".split(" "));
            fabric.Circle.fromElement = function(element, callback) {
                var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);
                if (!isValidRadius(parsedAttributes)) throw new Error("value of `r` attribute is required and can not be negative");
                parsedAttributes.left = (parsedAttributes.left || 0) - parsedAttributes.radius;
                parsedAttributes.top = (parsedAttributes.top || 0) - parsedAttributes.radius;
                callback(new fabric.Circle(parsedAttributes));
            };
            function isValidRadius(attributes) {
                return "radius" in attributes && attributes.radius >= 0;
            }
            fabric.Circle.fromObject = function(object, callback) {
                fabric.Object._fromObject("Circle", object, callback);
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.Triangle) {
                fabric.warn("fabric.Triangle is already defined");
                return;
            }
            fabric.Triangle = fabric.util.createClass(fabric.Object, {
                type: "triangle",
                width: 100,
                height: 100,
                _render: function(ctx) {
                    var widthBy2 = this.width / 2, heightBy2 = this.height / 2;
                    ctx.beginPath();
                    ctx.moveTo(-widthBy2, heightBy2);
                    ctx.lineTo(0, -heightBy2);
                    ctx.lineTo(widthBy2, heightBy2);
                    ctx.closePath();
                    this._renderPaintInOrder(ctx);
                },
                _toSVG: function() {
                    var widthBy2 = this.width / 2, heightBy2 = this.height / 2, points = [ -widthBy2 + " " + heightBy2, "0 " + -heightBy2, widthBy2 + " " + heightBy2 ].join(",");
                    return [ "<polygon ", "COMMON_PARTS", 'points="', points, '" />' ];
                }
            });
            fabric.Triangle.fromObject = function(object, callback) {
                return fabric.Object._fromObject("Triangle", object, callback);
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), piBy2 = Math.PI * 2;
            if (fabric.Ellipse) {
                fabric.warn("fabric.Ellipse is already defined.");
                return;
            }
            fabric.Ellipse = fabric.util.createClass(fabric.Object, {
                type: "ellipse",
                rx: 0,
                ry: 0,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("rx", "ry"),
                initialize: function(options) {
                    this.callSuper("initialize", options);
                    this.set("rx", options && options.rx || 0);
                    this.set("ry", options && options.ry || 0);
                },
                _set: function(key, value) {
                    this.callSuper("_set", key, value);
                    switch (key) {
                      case "rx":
                        this.rx = value;
                        this.set("width", value * 2);
                        break;

                      case "ry":
                        this.ry = value;
                        this.set("height", value * 2);
                        break;
                    }
                    return this;
                },
                getRx: function() {
                    return this.get("rx") * this.get("scaleX");
                },
                getRy: function() {
                    return this.get("ry") * this.get("scaleY");
                },
                toObject: function(propertiesToInclude) {
                    return this.callSuper("toObject", [ "rx", "ry" ].concat(propertiesToInclude));
                },
                _toSVG: function() {
                    return [ "<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, '" />\n' ];
                },
                _render: function(ctx) {
                    ctx.beginPath();
                    ctx.save();
                    ctx.transform(1, 0, 0, this.ry / this.rx, 0, 0);
                    ctx.arc(0, 0, this.rx, 0, piBy2, false);
                    ctx.restore();
                    this._renderPaintInOrder(ctx);
                }
            });
            fabric.Ellipse.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" "));
            fabric.Ellipse.fromElement = function(element, callback) {
                var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);
                parsedAttributes.left = (parsedAttributes.left || 0) - parsedAttributes.rx;
                parsedAttributes.top = (parsedAttributes.top || 0) - parsedAttributes.ry;
                callback(new fabric.Ellipse(parsedAttributes));
            };
            fabric.Ellipse.fromObject = function(object, callback) {
                fabric.Object._fromObject("Ellipse", object, callback);
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend;
            if (fabric.Rect) {
                fabric.warn("fabric.Rect is already defined");
                return;
            }
            fabric.Rect = fabric.util.createClass(fabric.Object, {
                stateProperties: fabric.Object.prototype.stateProperties.concat("rx", "ry"),
                type: "rect",
                rx: 0,
                ry: 0,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("rx", "ry"),
                initialize: function(options) {
                    this.callSuper("initialize", options);
                    this._initRxRy();
                },
                _initRxRy: function() {
                    if (this.rx && !this.ry) this.ry = this.rx; else if (this.ry && !this.rx) this.rx = this.ry;
                },
                _render: function(ctx) {
                    var rx = this.rx ? Math.min(this.rx, this.width / 2) : 0, ry = this.ry ? Math.min(this.ry, this.height / 2) : 0, w = this.width, h = this.height, x = -this.width / 2, y = -this.height / 2, isRounded = rx !== 0 || ry !== 0, k = 1 - .5522847498;
                    ctx.beginPath();
                    ctx.moveTo(x + rx, y);
                    ctx.lineTo(x + w - rx, y);
                    isRounded && ctx.bezierCurveTo(x + w - k * rx, y, x + w, y + k * ry, x + w, y + ry);
                    ctx.lineTo(x + w, y + h - ry);
                    isRounded && ctx.bezierCurveTo(x + w, y + h - k * ry, x + w - k * rx, y + h, x + w - rx, y + h);
                    ctx.lineTo(x + rx, y + h);
                    isRounded && ctx.bezierCurveTo(x + k * rx, y + h, x, y + h - k * ry, x, y + h - ry);
                    ctx.lineTo(x, y + ry);
                    isRounded && ctx.bezierCurveTo(x, y + k * ry, x + k * rx, y, x + rx, y);
                    ctx.closePath();
                    this._renderPaintInOrder(ctx);
                },
                toObject: function(propertiesToInclude) {
                    return this.callSuper("toObject", [ "rx", "ry" ].concat(propertiesToInclude));
                },
                _toSVG: function() {
                    var x = -this.width / 2, y = -this.height / 2;
                    return [ "<rect ", "COMMON_PARTS", 'x="', x, '" y="', y, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, '" />\n' ];
                }
            });
            fabric.Rect.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" "));
            fabric.Rect.fromElement = function(element, callback, options) {
                if (!element) return callback(null);
                options = options || {};
                var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);
                parsedAttributes.left = parsedAttributes.left || 0;
                parsedAttributes.top = parsedAttributes.top || 0;
                parsedAttributes.height = parsedAttributes.height || 0;
                parsedAttributes.width = parsedAttributes.width || 0;
                var rect = new fabric.Rect(extend(options ? fabric.util.object.clone(options) : {}, parsedAttributes));
                rect.visible = rect.visible && rect.width > 0 && rect.height > 0;
                callback(rect);
            };
            fabric.Rect.fromObject = function(object, callback) {
                return fabric.Object._fromObject("Rect", object, callback);
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, min = fabric.util.array.min, max = fabric.util.array.max, toFixed = fabric.util.toFixed;
            if (fabric.Polyline) {
                fabric.warn("fabric.Polyline is already defined");
                return;
            }
            fabric.Polyline = fabric.util.createClass(fabric.Object, {
                type: "polyline",
                points: null,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("points"),
                initialize: function(points, options) {
                    options = options || {};
                    this.points = points || [];
                    this.callSuper("initialize", options);
                    this._setPositionDimensions(options);
                },
                _setPositionDimensions: function(options) {
                    var correctLeftTop, calcDim = this._calcDimensions(options);
                    this.width = calcDim.width;
                    this.height = calcDim.height;
                    if (!options.fromSVG) correctLeftTop = this.translateToGivenOrigin({
                        x: calcDim.left - this.strokeWidth / 2,
                        y: calcDim.top - this.strokeWidth / 2
                    }, "left", "top", this.originX, this.originY);
                    if (typeof options.left === "undefined") this.left = options.fromSVG ? calcDim.left : correctLeftTop.x;
                    if (typeof options.top === "undefined") this.top = options.fromSVG ? calcDim.top : correctLeftTop.y;
                    this.pathOffset = {
                        x: calcDim.left + this.width / 2,
                        y: calcDim.top + this.height / 2
                    };
                },
                _calcDimensions: function() {
                    var points = this.points, minX = min(points, "x") || 0, minY = min(points, "y") || 0, maxX = max(points, "x") || 0, maxY = max(points, "y") || 0, width = maxX - minX, height = maxY - minY;
                    return {
                        left: minX,
                        top: minY,
                        width,
                        height
                    };
                },
                toObject: function(propertiesToInclude) {
                    return extend(this.callSuper("toObject", propertiesToInclude), {
                        points: this.points.concat()
                    });
                },
                _toSVG: function() {
                    var points = [], diffX = this.pathOffset.x, diffY = this.pathOffset.y, NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                    for (var i = 0, len = this.points.length; i < len; i++) points.push(toFixed(this.points[i].x - diffX, NUM_FRACTION_DIGITS), ",", toFixed(this.points[i].y - diffY, NUM_FRACTION_DIGITS), " ");
                    return [ "<" + this.type + " ", "COMMON_PARTS", 'points="', points.join(""), '" />\n' ];
                },
                commonRender: function(ctx) {
                    var point, len = this.points.length, x = this.pathOffset.x, y = this.pathOffset.y;
                    if (!len || isNaN(this.points[len - 1].y)) return false;
                    ctx.beginPath();
                    ctx.moveTo(this.points[0].x - x, this.points[0].y - y);
                    for (var i = 0; i < len; i++) {
                        point = this.points[i];
                        ctx.lineTo(point.x - x, point.y - y);
                    }
                    return true;
                },
                _render: function(ctx) {
                    if (!this.commonRender(ctx)) return;
                    this._renderPaintInOrder(ctx);
                },
                complexity: function() {
                    return this.get("points").length;
                }
            });
            fabric.Polyline.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();
            fabric.Polyline.fromElementGenerator = function(_class) {
                return function(element, callback, options) {
                    if (!element) return callback(null);
                    options || (options = {});
                    var points = fabric.parsePointsAttribute(element.getAttribute("points")), parsedAttributes = fabric.parseAttributes(element, fabric[_class].ATTRIBUTE_NAMES);
                    parsedAttributes.fromSVG = true;
                    callback(new fabric[_class](points, extend(parsedAttributes, options)));
                };
            };
            fabric.Polyline.fromElement = fabric.Polyline.fromElementGenerator("Polyline");
            fabric.Polyline.fromObject = function(object, callback) {
                return fabric.Object._fromObject("Polyline", object, callback, "points");
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.Polygon) {
                fabric.warn("fabric.Polygon is already defined");
                return;
            }
            fabric.Polygon = fabric.util.createClass(fabric.Polyline, {
                type: "polygon",
                _render: function(ctx) {
                    if (!this.commonRender(ctx)) return;
                    ctx.closePath();
                    this._renderPaintInOrder(ctx);
                }
            });
            fabric.Polygon.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();
            fabric.Polygon.fromElement = fabric.Polyline.fromElementGenerator("Polygon");
            fabric.Polygon.fromObject = function(object, callback) {
                fabric.Object._fromObject("Polygon", object, callback, "points");
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), min = fabric.util.array.min, max = fabric.util.array.max, extend = fabric.util.object.extend, _toString = Object.prototype.toString, toFixed = fabric.util.toFixed;
            if (fabric.Path) {
                fabric.warn("fabric.Path is already defined");
                return;
            }
            fabric.Path = fabric.util.createClass(fabric.Object, {
                type: "path",
                path: null,
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("path", "fillRule"),
                stateProperties: fabric.Object.prototype.stateProperties.concat("path"),
                initialize: function(path, options) {
                    options = options || {};
                    this.callSuper("initialize", options);
                    if (!path) path = [];
                    var fromArray = _toString.call(path) === "[object Array]";
                    this.path = fabric.util.makePathSimpler(fromArray ? path : fabric.util.parsePath(path));
                    if (!this.path) return;
                    fabric.Polyline.prototype._setPositionDimensions.call(this, options);
                },
                _renderPathCommands: function(ctx) {
                    var current, subpathStartX = 0, subpathStartY = 0, x = 0, y = 0, controlX = 0, controlY = 0, l = -this.pathOffset.x, t = -this.pathOffset.y;
                    ctx.beginPath();
                    for (var i = 0, len = this.path.length; i < len; ++i) {
                        current = this.path[i];
                        switch (current[0]) {
                          case "L":
                            x = current[1];
                            y = current[2];
                            ctx.lineTo(x + l, y + t);
                            break;

                          case "M":
                            x = current[1];
                            y = current[2];
                            subpathStartX = x;
                            subpathStartY = y;
                            ctx.moveTo(x + l, y + t);
                            break;

                          case "C":
                            x = current[5];
                            y = current[6];
                            controlX = current[3];
                            controlY = current[4];
                            ctx.bezierCurveTo(current[1] + l, current[2] + t, controlX + l, controlY + t, x + l, y + t);
                            break;

                          case "Q":
                            ctx.quadraticCurveTo(current[1] + l, current[2] + t, current[3] + l, current[4] + t);
                            x = current[3];
                            y = current[4];
                            controlX = current[1];
                            controlY = current[2];
                            break;

                          case "z":
                          case "Z":
                            x = subpathStartX;
                            y = subpathStartY;
                            ctx.closePath();
                            break;
                        }
                    }
                },
                _render: function(ctx) {
                    this._renderPathCommands(ctx);
                    this._renderPaintInOrder(ctx);
                },
                toString: function() {
                    return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
                },
                toObject: function(propertiesToInclude) {
                    return extend(this.callSuper("toObject", propertiesToInclude), {
                        path: this.path.map((function(item) {
                            return item.slice();
                        }))
                    });
                },
                toDatalessObject: function(propertiesToInclude) {
                    var o = this.toObject([ "sourcePath" ].concat(propertiesToInclude));
                    if (o.sourcePath) delete o.path;
                    return o;
                },
                _toSVG: function() {
                    var path = fabric.util.joinPath(this.path);
                    return [ "<path ", "COMMON_PARTS", 'd="', path, '" stroke-linecap="round" ', "/>\n" ];
                },
                _getOffsetTransform: function() {
                    var digits = fabric.Object.NUM_FRACTION_DIGITS;
                    return " translate(" + toFixed(-this.pathOffset.x, digits) + ", " + toFixed(-this.pathOffset.y, digits) + ")";
                },
                toClipPathSVG: function(reviver) {
                    var additionalTransform = this._getOffsetTransform();
                    return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
                        reviver,
                        additionalTransform
                    });
                },
                toSVG: function(reviver) {
                    var additionalTransform = this._getOffsetTransform();
                    return this._createBaseSVGMarkup(this._toSVG(), {
                        reviver,
                        additionalTransform
                    });
                },
                complexity: function() {
                    return this.path.length;
                },
                _calcDimensions: function() {
                    var current, bounds, aX = [], aY = [], subpathStartX = 0, subpathStartY = 0, x = 0, y = 0;
                    for (var i = 0, len = this.path.length; i < len; ++i) {
                        current = this.path[i];
                        switch (current[0]) {
                          case "L":
                            x = current[1];
                            y = current[2];
                            bounds = [];
                            break;

                          case "M":
                            x = current[1];
                            y = current[2];
                            subpathStartX = x;
                            subpathStartY = y;
                            bounds = [];
                            break;

                          case "C":
                            bounds = fabric.util.getBoundsOfCurve(x, y, current[1], current[2], current[3], current[4], current[5], current[6]);
                            x = current[5];
                            y = current[6];
                            break;

                          case "Q":
                            bounds = fabric.util.getBoundsOfCurve(x, y, current[1], current[2], current[1], current[2], current[3], current[4]);
                            x = current[3];
                            y = current[4];
                            break;

                          case "z":
                          case "Z":
                            x = subpathStartX;
                            y = subpathStartY;
                            break;
                        }
                        bounds.forEach((function(point) {
                            aX.push(point.x);
                            aY.push(point.y);
                        }));
                        aX.push(x);
                        aY.push(y);
                    }
                    var minX = min(aX) || 0, minY = min(aY) || 0, maxX = max(aX) || 0, maxY = max(aY) || 0, deltaX = maxX - minX, deltaY = maxY - minY;
                    return {
                        left: minX,
                        top: minY,
                        width: deltaX,
                        height: deltaY
                    };
                }
            });
            fabric.Path.fromObject = function(object, callback) {
                if (typeof object.sourcePath === "string") {
                    var pathUrl = object.sourcePath;
                    fabric.loadSVGFromURL(pathUrl, (function(elements) {
                        var path = elements[0];
                        path.setOptions(object);
                        callback && callback(path);
                    }));
                } else fabric.Object._fromObject("Path", object, callback, "path");
            };
            fabric.Path.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat([ "d" ]);
            fabric.Path.fromElement = function(element, callback, options) {
                var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
                parsedAttributes.fromSVG = true;
                callback(new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options)));
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), min = fabric.util.array.min, max = fabric.util.array.max;
            if (fabric.Group) return;
            fabric.Group = fabric.util.createClass(fabric.Object, fabric.Collection, {
                type: "group",
                strokeWidth: 0,
                subTargetCheck: false,
                cacheProperties: [],
                useSetOnGroup: false,
                initialize: function(objects, options, isAlreadyGrouped) {
                    options = options || {};
                    this._objects = [];
                    isAlreadyGrouped && this.callSuper("initialize", options);
                    this._objects = objects || [];
                    for (var i = this._objects.length; i--; ) this._objects[i].group = this;
                    if (!isAlreadyGrouped) {
                        var center = options && options.centerPoint;
                        if (options.originX !== void 0) this.originX = options.originX;
                        if (options.originY !== void 0) this.originY = options.originY;
                        center || this._calcBounds();
                        this._updateObjectsCoords(center);
                        delete options.centerPoint;
                        this.callSuper("initialize", options);
                    } else this._updateObjectsACoords();
                    this.setCoords();
                },
                _updateObjectsACoords: function() {
                    var skipControls = true;
                    for (var i = this._objects.length; i--; ) this._objects[i].setCoords(skipControls);
                },
                _updateObjectsCoords: function(center) {
                    center = center || this.getCenterPoint();
                    for (var i = this._objects.length; i--; ) this._updateObjectCoords(this._objects[i], center);
                },
                _updateObjectCoords: function(object, center) {
                    var objectLeft = object.left, objectTop = object.top, skipControls = true;
                    object.set({
                        left: objectLeft - center.x,
                        top: objectTop - center.y
                    });
                    object.group = this;
                    object.setCoords(skipControls);
                },
                toString: function() {
                    return "#<fabric.Group: (" + this.complexity() + ")>";
                },
                addWithUpdate: function(object) {
                    var nested = !!this.group;
                    this._restoreObjectsState();
                    fabric.util.resetObjectTransform(this);
                    if (object) {
                        if (nested) fabric.util.removeTransformFromObject(object, this.group.calcTransformMatrix());
                        this._objects.push(object);
                        object.group = this;
                        object._set("canvas", this.canvas);
                    }
                    this._calcBounds();
                    this._updateObjectsCoords();
                    this.dirty = true;
                    if (nested) this.group.addWithUpdate(); else this.setCoords();
                    return this;
                },
                removeWithUpdate: function(object) {
                    this._restoreObjectsState();
                    fabric.util.resetObjectTransform(this);
                    this.remove(object);
                    this._calcBounds();
                    this._updateObjectsCoords();
                    this.setCoords();
                    this.dirty = true;
                    return this;
                },
                _onObjectAdded: function(object) {
                    this.dirty = true;
                    object.group = this;
                    object._set("canvas", this.canvas);
                },
                _onObjectRemoved: function(object) {
                    this.dirty = true;
                    delete object.group;
                },
                _set: function(key, value) {
                    var i = this._objects.length;
                    if (this.useSetOnGroup) while (i--) this._objects[i].setOnGroup(key, value);
                    if (key === "canvas") while (i--) this._objects[i]._set(key, value);
                    fabric.Object.prototype._set.call(this, key, value);
                },
                toObject: function(propertiesToInclude) {
                    var _includeDefaultValues = this.includeDefaultValues;
                    var objsToObject = this._objects.filter((function(obj) {
                        return !obj.excludeFromExport;
                    })).map((function(obj) {
                        var originalDefaults = obj.includeDefaultValues;
                        obj.includeDefaultValues = _includeDefaultValues;
                        var _obj = obj.toObject(propertiesToInclude);
                        obj.includeDefaultValues = originalDefaults;
                        return _obj;
                    }));
                    var obj = fabric.Object.prototype.toObject.call(this, propertiesToInclude);
                    obj.objects = objsToObject;
                    return obj;
                },
                toDatalessObject: function(propertiesToInclude) {
                    var objsToObject, sourcePath = this.sourcePath;
                    if (sourcePath) objsToObject = sourcePath; else {
                        var _includeDefaultValues = this.includeDefaultValues;
                        objsToObject = this._objects.map((function(obj) {
                            var originalDefaults = obj.includeDefaultValues;
                            obj.includeDefaultValues = _includeDefaultValues;
                            var _obj = obj.toDatalessObject(propertiesToInclude);
                            obj.includeDefaultValues = originalDefaults;
                            return _obj;
                        }));
                    }
                    var obj = fabric.Object.prototype.toDatalessObject.call(this, propertiesToInclude);
                    obj.objects = objsToObject;
                    return obj;
                },
                render: function(ctx) {
                    this._transformDone = true;
                    this.callSuper("render", ctx);
                    this._transformDone = false;
                },
                shouldCache: function() {
                    var ownCache = fabric.Object.prototype.shouldCache.call(this);
                    if (ownCache) for (var i = 0, len = this._objects.length; i < len; i++) if (this._objects[i].willDrawShadow()) {
                        this.ownCaching = false;
                        return false;
                    }
                    return ownCache;
                },
                willDrawShadow: function() {
                    if (fabric.Object.prototype.willDrawShadow.call(this)) return true;
                    for (var i = 0, len = this._objects.length; i < len; i++) if (this._objects[i].willDrawShadow()) return true;
                    return false;
                },
                isOnACache: function() {
                    return this.ownCaching || this.group && this.group.isOnACache();
                },
                drawObject: function(ctx) {
                    for (var i = 0, len = this._objects.length; i < len; i++) this._objects[i].render(ctx);
                    this._drawClipPath(ctx);
                },
                isCacheDirty: function(skipCanvas) {
                    if (this.callSuper("isCacheDirty", skipCanvas)) return true;
                    if (!this.statefullCache) return false;
                    for (var i = 0, len = this._objects.length; i < len; i++) if (this._objects[i].isCacheDirty(true)) {
                        if (this._cacheCanvas) {
                            var x = this.cacheWidth / this.zoomX, y = this.cacheHeight / this.zoomY;
                            this._cacheContext.clearRect(-x / 2, -y / 2, x, y);
                        }
                        return true;
                    }
                    return false;
                },
                _restoreObjectsState: function() {
                    var groupMatrix = this.calcOwnMatrix();
                    this._objects.forEach((function(object) {
                        fabric.util.addTransformToObject(object, groupMatrix);
                        delete object.group;
                        object.setCoords();
                    }));
                    return this;
                },
                realizeTransform: function(object, parentMatrix) {
                    fabric.util.addTransformToObject(object, parentMatrix);
                    return object;
                },
                destroy: function() {
                    this._objects.forEach((function(object) {
                        object.set("dirty", true);
                    }));
                    return this._restoreObjectsState();
                },
                toActiveSelection: function() {
                    if (!this.canvas) return;
                    var objects = this._objects, canvas = this.canvas;
                    this._objects = [];
                    var options = this.toObject();
                    delete options.objects;
                    var activeSelection = new fabric.ActiveSelection([]);
                    activeSelection.set(options);
                    activeSelection.type = "activeSelection";
                    canvas.remove(this);
                    objects.forEach((function(object) {
                        object.group = activeSelection;
                        object.dirty = true;
                        canvas.add(object);
                    }));
                    activeSelection.canvas = canvas;
                    activeSelection._objects = objects;
                    canvas._activeObject = activeSelection;
                    activeSelection.setCoords();
                    return activeSelection;
                },
                ungroupOnCanvas: function() {
                    return this._restoreObjectsState();
                },
                setObjectsCoords: function() {
                    var skipControls = true;
                    this.forEachObject((function(object) {
                        object.setCoords(skipControls);
                    }));
                    return this;
                },
                _calcBounds: function(onlyWidthHeight) {
                    var o, prop, coords, j, aX = [], aY = [], props = [ "tr", "br", "bl", "tl" ], i = 0, iLen = this._objects.length, jLen = props.length;
                    for (;i < iLen; ++i) {
                        o = this._objects[i];
                        coords = o.calcACoords();
                        for (j = 0; j < jLen; j++) {
                            prop = props[j];
                            aX.push(coords[prop].x);
                            aY.push(coords[prop].y);
                        }
                        o.aCoords = coords;
                    }
                    this._getBounds(aX, aY, onlyWidthHeight);
                },
                _getBounds: function(aX, aY, onlyWidthHeight) {
                    var minXY = new fabric.Point(min(aX), min(aY)), maxXY = new fabric.Point(max(aX), max(aY)), top = minXY.y || 0, left = minXY.x || 0, width = maxXY.x - minXY.x || 0, height = maxXY.y - minXY.y || 0;
                    this.width = width;
                    this.height = height;
                    if (!onlyWidthHeight) this.setPositionByOrigin({
                        x: left,
                        y: top
                    }, "left", "top");
                },
                _toSVG: function(reviver) {
                    var svgString = [ "<g ", "COMMON_PARTS", " >\n" ];
                    for (var i = 0, len = this._objects.length; i < len; i++) svgString.push("\t\t", this._objects[i].toSVG(reviver));
                    svgString.push("</g>\n");
                    return svgString;
                },
                getSvgStyles: function() {
                    var opacity = typeof this.opacity !== "undefined" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", visibility = this.visible ? "" : " visibility: hidden;";
                    return [ opacity, this.getSvgFilter(), visibility ].join("");
                },
                toClipPathSVG: function(reviver) {
                    var svgString = [];
                    for (var i = 0, len = this._objects.length; i < len; i++) svgString.push("\t", this._objects[i].toClipPathSVG(reviver));
                    return this._createBaseClipPathSVGMarkup(svgString, {
                        reviver
                    });
                }
            });
            fabric.Group.fromObject = function(object, callback) {
                var objects = object.objects, options = fabric.util.object.clone(object, true);
                delete options.objects;
                if (typeof objects === "string") {
                    fabric.loadSVGFromURL(objects, (function(elements) {
                        var group = fabric.util.groupSVGElements(elements, object, objects);
                        group.set(options);
                        callback && callback(group);
                    }));
                    return;
                }
                fabric.util.enlivenObjects(objects, (function(enlivenedObjects) {
                    fabric.util.enlivenObjects([ object.clipPath ], (function(enlivedClipPath) {
                        var options = fabric.util.object.clone(object, true);
                        options.clipPath = enlivedClipPath[0];
                        delete options.objects;
                        callback && callback(new fabric.Group(enlivenedObjects, options, true));
                    }));
                }));
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            if (fabric.ActiveSelection) return;
            fabric.ActiveSelection = fabric.util.createClass(fabric.Group, {
                type: "activeSelection",
                initialize: function(objects, options) {
                    options = options || {};
                    this._objects = objects || [];
                    for (var i = this._objects.length; i--; ) this._objects[i].group = this;
                    if (options.originX) this.originX = options.originX;
                    if (options.originY) this.originY = options.originY;
                    this._calcBounds();
                    this._updateObjectsCoords();
                    fabric.Object.prototype.initialize.call(this, options);
                    this.setCoords();
                },
                toGroup: function() {
                    var objects = this._objects.concat();
                    this._objects = [];
                    var options = fabric.Object.prototype.toObject.call(this);
                    var newGroup = new fabric.Group([]);
                    delete options.type;
                    newGroup.set(options);
                    objects.forEach((function(object) {
                        object.canvas.remove(object);
                        object.group = newGroup;
                    }));
                    newGroup._objects = objects;
                    if (!this.canvas) return newGroup;
                    var canvas = this.canvas;
                    canvas.add(newGroup);
                    canvas._activeObject = newGroup;
                    newGroup.setCoords();
                    return newGroup;
                },
                onDeselect: function() {
                    this.destroy();
                    return false;
                },
                toString: function() {
                    return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
                },
                shouldCache: function() {
                    return false;
                },
                isOnACache: function() {
                    return false;
                },
                _renderControls: function(ctx, styleOverride, childrenOverride) {
                    ctx.save();
                    ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
                    this.callSuper("_renderControls", ctx, styleOverride);
                    childrenOverride = childrenOverride || {};
                    if (typeof childrenOverride.hasControls === "undefined") childrenOverride.hasControls = false;
                    childrenOverride.forActiveSelection = true;
                    for (var i = 0, len = this._objects.length; i < len; i++) this._objects[i]._renderControls(ctx, childrenOverride);
                    ctx.restore();
                }
            });
            fabric.ActiveSelection.fromObject = function(object, callback) {
                fabric.util.enlivenObjects(object.objects, (function(enlivenedObjects) {
                    delete object.objects;
                    callback && callback(new fabric.ActiveSelection(enlivenedObjects, object, true));
                }));
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var extend = fabric.util.object.extend;
            if (!global.fabric) global.fabric = {};
            if (global.fabric.Image) {
                fabric.warn("fabric.Image is already defined.");
                return;
            }
            fabric.Image = fabric.util.createClass(fabric.Object, {
                type: "image",
                strokeWidth: 0,
                srcFromAttribute: false,
                _lastScaleX: 1,
                _lastScaleY: 1,
                _filterScalingX: 1,
                _filterScalingY: 1,
                minimumScaleTrigger: .5,
                stateProperties: fabric.Object.prototype.stateProperties.concat("cropX", "cropY"),
                cacheProperties: fabric.Object.prototype.cacheProperties.concat("cropX", "cropY"),
                cacheKey: "",
                cropX: 0,
                cropY: 0,
                imageSmoothing: true,
                initialize: function(element, options) {
                    options || (options = {});
                    this.filters = [];
                    this.cacheKey = "texture" + fabric.Object.__uid++;
                    this.callSuper("initialize", options);
                    this._initElement(element, options);
                },
                getElement: function() {
                    return this._element || {};
                },
                setElement: function(element, options) {
                    this.removeTexture(this.cacheKey);
                    this.removeTexture(this.cacheKey + "_filtered");
                    this._element = element;
                    this._originalElement = element;
                    this._initConfig(options);
                    if (this.filters.length !== 0) this.applyFilters();
                    if (this.resizeFilter) this.applyResizeFilters();
                    return this;
                },
                removeTexture: function(key) {
                    var backend = fabric.filterBackend;
                    if (backend && backend.evictCachesForKey) backend.evictCachesForKey(key);
                },
                dispose: function() {
                    this.removeTexture(this.cacheKey);
                    this.removeTexture(this.cacheKey + "_filtered");
                    this._cacheContext = void 0;
                    [ "_originalElement", "_element", "_filteredEl", "_cacheCanvas" ].forEach(function(element) {
                        fabric.util.cleanUpJsdomNode(this[element]);
                        this[element] = void 0;
                    }.bind(this));
                },
                getCrossOrigin: function() {
                    return this._originalElement && (this._originalElement.crossOrigin || null);
                },
                getOriginalSize: function() {
                    var element = this.getElement();
                    return {
                        width: element.naturalWidth || element.width,
                        height: element.naturalHeight || element.height
                    };
                },
                _stroke: function(ctx) {
                    if (!this.stroke || this.strokeWidth === 0) return;
                    var w = this.width / 2, h = this.height / 2;
                    ctx.beginPath();
                    ctx.moveTo(-w, -h);
                    ctx.lineTo(w, -h);
                    ctx.lineTo(w, h);
                    ctx.lineTo(-w, h);
                    ctx.lineTo(-w, -h);
                    ctx.closePath();
                },
                toObject: function(propertiesToInclude) {
                    var filters = [];
                    this.filters.forEach((function(filterObj) {
                        if (filterObj) filters.push(filterObj.toObject());
                    }));
                    var object = extend(this.callSuper("toObject", [ "cropX", "cropY" ].concat(propertiesToInclude)), {
                        src: this.getSrc(),
                        crossOrigin: this.getCrossOrigin(),
                        filters
                    });
                    if (this.resizeFilter) object.resizeFilter = this.resizeFilter.toObject();
                    return object;
                },
                hasCrop: function() {
                    return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
                },
                _toSVG: function() {
                    var strokeSvg, svgString = [], imageMarkup = [], element = this._element, x = -this.width / 2, y = -this.height / 2, clipPath = "", imageRendering = "";
                    if (!element) return [];
                    if (this.hasCrop()) {
                        var clipPathId = fabric.Object.__uid++;
                        svgString.push('<clipPath id="imageCrop_' + clipPathId + '">\n', '\t<rect x="' + x + '" y="' + y + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n");
                        clipPath = ' clip-path="url(#imageCrop_' + clipPathId + ')" ';
                    }
                    if (!this.imageSmoothing) imageRendering = '" image-rendering="optimizeSpeed';
                    imageMarkup.push("\t<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(true), '" x="', x - this.cropX, '" y="', y - this.cropY, '" width="', element.width || element.naturalWidth, '" height="', element.height || element.height, imageRendering, '"', clipPath, "></image>\n");
                    if (this.stroke || this.strokeDashArray) {
                        var origFill = this.fill;
                        this.fill = null;
                        strokeSvg = [ "\t<rect ", 'x="', x, '" y="', y, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n' ];
                        this.fill = origFill;
                    }
                    if (this.paintFirst !== "fill") svgString = svgString.concat(strokeSvg, imageMarkup); else svgString = svgString.concat(imageMarkup, strokeSvg);
                    return svgString;
                },
                getSrc: function(filtered) {
                    var element = filtered ? this._element : this._originalElement;
                    if (element) {
                        if (element.toDataURL) return element.toDataURL();
                        if (this.srcFromAttribute) return element.getAttribute("src"); else return element.src;
                    } else return this.src || "";
                },
                setSrc: function(src, callback, options) {
                    fabric.util.loadImage(src, (function(img, isError) {
                        this.setElement(img, options);
                        this._setWidthHeight();
                        callback && callback(this, isError);
                    }), this, options && options.crossOrigin);
                    return this;
                },
                toString: function() {
                    return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
                },
                applyResizeFilters: function() {
                    var filter = this.resizeFilter, minimumScale = this.minimumScaleTrigger, objectScale = this.getTotalObjectScaling(), scaleX = objectScale.scaleX, scaleY = objectScale.scaleY, elementToFilter = this._filteredEl || this._originalElement;
                    if (this.group) this.set("dirty", true);
                    if (!filter || scaleX > minimumScale && scaleY > minimumScale) {
                        this._element = elementToFilter;
                        this._filterScalingX = 1;
                        this._filterScalingY = 1;
                        this._lastScaleX = scaleX;
                        this._lastScaleY = scaleY;
                        return;
                    }
                    if (!fabric.filterBackend) fabric.filterBackend = fabric.initFilterBackend();
                    var canvasEl = fabric.util.createCanvasElement(), cacheKey = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, sourceWidth = elementToFilter.width, sourceHeight = elementToFilter.height;
                    canvasEl.width = sourceWidth;
                    canvasEl.height = sourceHeight;
                    this._element = canvasEl;
                    this._lastScaleX = filter.scaleX = scaleX;
                    this._lastScaleY = filter.scaleY = scaleY;
                    fabric.filterBackend.applyFilters([ filter ], elementToFilter, sourceWidth, sourceHeight, this._element, cacheKey);
                    this._filterScalingX = canvasEl.width / this._originalElement.width;
                    this._filterScalingY = canvasEl.height / this._originalElement.height;
                },
                applyFilters: function(filters) {
                    filters = filters || this.filters || [];
                    filters = filters.filter((function(filter) {
                        return filter && !filter.isNeutralState();
                    }));
                    this.set("dirty", true);
                    this.removeTexture(this.cacheKey + "_filtered");
                    if (filters.length === 0) {
                        this._element = this._originalElement;
                        this._filteredEl = null;
                        this._filterScalingX = 1;
                        this._filterScalingY = 1;
                        return this;
                    }
                    var imgElement = this._originalElement, sourceWidth = imgElement.naturalWidth || imgElement.width, sourceHeight = imgElement.naturalHeight || imgElement.height;
                    if (this._element === this._originalElement) {
                        var canvasEl = fabric.util.createCanvasElement();
                        canvasEl.width = sourceWidth;
                        canvasEl.height = sourceHeight;
                        this._element = canvasEl;
                        this._filteredEl = canvasEl;
                    } else {
                        this._element = this._filteredEl;
                        this._filteredEl.getContext("2d").clearRect(0, 0, sourceWidth, sourceHeight);
                        this._lastScaleX = 1;
                        this._lastScaleY = 1;
                    }
                    if (!fabric.filterBackend) fabric.filterBackend = fabric.initFilterBackend();
                    fabric.filterBackend.applyFilters(filters, this._originalElement, sourceWidth, sourceHeight, this._element, this.cacheKey);
                    if (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) {
                        this._filterScalingX = this._element.width / this._originalElement.width;
                        this._filterScalingY = this._element.height / this._originalElement.height;
                    }
                    return this;
                },
                _render: function(ctx) {
                    fabric.util.setImageSmoothing(ctx, this.imageSmoothing);
                    if (this.isMoving !== true && this.resizeFilter && this._needsResize()) this.applyResizeFilters();
                    this._stroke(ctx);
                    this._renderPaintInOrder(ctx);
                },
                drawCacheOnCanvas: function(ctx) {
                    fabric.util.setImageSmoothing(ctx, this.imageSmoothing);
                    fabric.Object.prototype.drawCacheOnCanvas.call(this, ctx);
                },
                shouldCache: function() {
                    return this.needsItsOwnCache();
                },
                _renderFill: function(ctx) {
                    var elementToDraw = this._element;
                    if (!elementToDraw) return;
                    var scaleX = this._filterScalingX, scaleY = this._filterScalingY, w = this.width, h = this.height, min = Math.min, max = Math.max, cropX = max(this.cropX, 0), cropY = max(this.cropY, 0), elWidth = elementToDraw.naturalWidth || elementToDraw.width, elHeight = elementToDraw.naturalHeight || elementToDraw.height, sX = cropX * scaleX, sY = cropY * scaleY, sW = min(w * scaleX, elWidth - sX), sH = min(h * scaleY, elHeight - sY), x = -w / 2, y = -h / 2, maxDestW = min(w, elWidth / scaleX - cropX), maxDestH = min(h, elHeight / scaleY - cropY);
                    elementToDraw && ctx.drawImage(elementToDraw, sX, sY, sW, sH, x, y, maxDestW, maxDestH);
                },
                _needsResize: function() {
                    var scale = this.getTotalObjectScaling();
                    return scale.scaleX !== this._lastScaleX || scale.scaleY !== this._lastScaleY;
                },
                _resetWidthHeight: function() {
                    this.set(this.getOriginalSize());
                },
                _initElement: function(element, options) {
                    this.setElement(fabric.util.getById(element), options);
                    fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
                },
                _initConfig: function(options) {
                    options || (options = {});
                    this.setOptions(options);
                    this._setWidthHeight(options);
                },
                _initFilters: function(filters, callback) {
                    if (filters && filters.length) fabric.util.enlivenObjects(filters, (function(enlivenedObjects) {
                        callback && callback(enlivenedObjects);
                    }), "fabric.Image.filters"); else callback && callback();
                },
                _setWidthHeight: function(options) {
                    options || (options = {});
                    var el = this.getElement();
                    this.width = options.width || el.naturalWidth || el.width || 0;
                    this.height = options.height || el.naturalHeight || el.height || 0;
                },
                parsePreserveAspectRatioAttribute: function() {
                    var offset, pAR = fabric.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), rWidth = this._element.width, rHeight = this._element.height, scaleX = 1, scaleY = 1, offsetLeft = 0, offsetTop = 0, cropX = 0, cropY = 0, pWidth = this.width, pHeight = this.height, parsedAttributes = {
                        width: pWidth,
                        height: pHeight
                    };
                    if (pAR && (pAR.alignX !== "none" || pAR.alignY !== "none")) {
                        if (pAR.meetOrSlice === "meet") {
                            scaleX = scaleY = fabric.util.findScaleToFit(this._element, parsedAttributes);
                            offset = (pWidth - rWidth * scaleX) / 2;
                            if (pAR.alignX === "Min") offsetLeft = -offset;
                            if (pAR.alignX === "Max") offsetLeft = offset;
                            offset = (pHeight - rHeight * scaleY) / 2;
                            if (pAR.alignY === "Min") offsetTop = -offset;
                            if (pAR.alignY === "Max") offsetTop = offset;
                        }
                        if (pAR.meetOrSlice === "slice") {
                            scaleX = scaleY = fabric.util.findScaleToCover(this._element, parsedAttributes);
                            offset = rWidth - pWidth / scaleX;
                            if (pAR.alignX === "Mid") cropX = offset / 2;
                            if (pAR.alignX === "Max") cropX = offset;
                            offset = rHeight - pHeight / scaleY;
                            if (pAR.alignY === "Mid") cropY = offset / 2;
                            if (pAR.alignY === "Max") cropY = offset;
                            rWidth = pWidth / scaleX;
                            rHeight = pHeight / scaleY;
                        }
                    } else {
                        scaleX = pWidth / rWidth;
                        scaleY = pHeight / rHeight;
                    }
                    return {
                        width: rWidth,
                        height: rHeight,
                        scaleX,
                        scaleY,
                        offsetLeft,
                        offsetTop,
                        cropX,
                        cropY
                    };
                }
            });
            fabric.Image.CSS_CANVAS = "canvas-img";
            fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc;
            fabric.Image.fromObject = function(_object, callback) {
                var object = fabric.util.object.clone(_object);
                fabric.util.loadImage(object.src, (function(img, isError) {
                    if (isError) {
                        callback && callback(null, true);
                        return;
                    }
                    fabric.Image.prototype._initFilters.call(object, object.filters, (function(filters) {
                        object.filters = filters || [];
                        fabric.Image.prototype._initFilters.call(object, [ object.resizeFilter ], (function(resizeFilters) {
                            object.resizeFilter = resizeFilters[0];
                            fabric.util.enlivenObjects([ object.clipPath ], (function(enlivedProps) {
                                object.clipPath = enlivedProps[0];
                                var image = new fabric.Image(img, object);
                                callback(image, false);
                            }));
                        }));
                    }));
                }), null, object.crossOrigin);
            };
            fabric.Image.fromURL = function(url, callback, imgOptions) {
                fabric.util.loadImage(url, (function(img, isError) {
                    callback && callback(new fabric.Image(img, imgOptions), isError);
                }), null, imgOptions && imgOptions.crossOrigin);
            };
            fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" "));
            fabric.Image.fromElement = function(element, callback, options) {
                var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES);
                fabric.Image.fromURL(parsedAttributes["xlink:href"], callback, extend(options ? fabric.util.object.clone(options) : {}, parsedAttributes));
            };
        })(true ? exports : 0);
        fabric.util.object.extend(fabric.Object.prototype, {
            _getAngleValueForStraighten: function() {
                var angle = this.angle % 360;
                if (angle > 0) return Math.round((angle - 1) / 90) * 90;
                return Math.round(angle / 90) * 90;
            },
            straighten: function() {
                this.rotate(this._getAngleValueForStraighten());
                return this;
            },
            fxStraighten: function(callbacks) {
                callbacks = callbacks || {};
                var empty = function() {}, onComplete = callbacks.onComplete || empty, onChange = callbacks.onChange || empty, _this = this;
                fabric.util.animate({
                    startValue: this.get("angle"),
                    endValue: this._getAngleValueForStraighten(),
                    duration: this.FX_DURATION,
                    onChange: function(value) {
                        _this.rotate(value);
                        onChange();
                    },
                    onComplete: function() {
                        _this.setCoords();
                        onComplete();
                    }
                });
                return this;
            }
        });
        fabric.util.object.extend(fabric.StaticCanvas.prototype, {
            straightenObject: function(object) {
                object.straighten();
                this.requestRenderAll();
                return this;
            },
            fxStraightenObject: function(object) {
                object.fxStraighten({
                    onChange: this.requestRenderAllBound
                });
                return this;
            }
        });
        (function() {
            "use strict";
            function testPrecision(gl, precision) {
                var fragmentSource = "precision " + precision + " float;\nvoid main(){}";
                var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragmentShader, fragmentSource);
                gl.compileShader(fragmentShader);
                if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) return false;
                return true;
            }
            fabric.isWebglSupported = function(tileSize) {
                if (fabric.isLikelyNode) return false;
                tileSize = tileSize || fabric.WebglFilterBackend.prototype.tileSize;
                var canvas = document.createElement("canvas");
                var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                var isSupported = false;
                if (gl) {
                    fabric.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                    isSupported = fabric.maxTextureSize >= tileSize;
                    var precisions = [ "highp", "mediump", "lowp" ];
                    for (var i = 0; i < 3; i++) if (testPrecision(gl, precisions[i])) {
                        fabric.webGlPrecision = precisions[i];
                        break;
                    }
                }
                this.isSupported = isSupported;
                return isSupported;
            };
            fabric.WebglFilterBackend = WebglFilterBackend;
            function WebglFilterBackend(options) {
                if (options && options.tileSize) this.tileSize = options.tileSize;
                this.setupGLContext(this.tileSize, this.tileSize);
                this.captureGPUInfo();
            }
            WebglFilterBackend.prototype = {
                tileSize: 2048,
                resources: {},
                setupGLContext: function(width, height) {
                    this.dispose();
                    this.createWebGLCanvas(width, height);
                    this.aPosition = new Float32Array([ 0, 0, 0, 1, 1, 0, 1, 1 ]);
                    this.chooseFastestCopyGLTo2DMethod(width, height);
                },
                chooseFastestCopyGLTo2DMethod: function(width, height) {
                    var canUseImageData, canMeasurePerf = typeof window.performance !== "undefined";
                    try {
                        new ImageData(1, 1);
                        canUseImageData = true;
                    } catch (e) {
                        canUseImageData = false;
                    }
                    var canUseArrayBuffer = typeof ArrayBuffer !== "undefined";
                    var canUseUint8Clamped = typeof Uint8ClampedArray !== "undefined";
                    if (!(canMeasurePerf && canUseImageData && canUseArrayBuffer && canUseUint8Clamped)) return;
                    var targetCanvas = fabric.util.createCanvasElement();
                    var imageBuffer = new ArrayBuffer(width * height * 4);
                    if (fabric.forceGLPutImageData) {
                        this.imageBuffer = imageBuffer;
                        this.copyGLTo2D = copyGLTo2DPutImageData;
                        return;
                    }
                    var testContext = {
                        imageBuffer,
                        destinationWidth: width,
                        destinationHeight: height,
                        targetCanvas
                    };
                    var startTime, drawImageTime, putImageDataTime;
                    targetCanvas.width = width;
                    targetCanvas.height = height;
                    startTime = window.performance.now();
                    copyGLTo2DDrawImage.call(testContext, this.gl, testContext);
                    drawImageTime = window.performance.now() - startTime;
                    startTime = window.performance.now();
                    copyGLTo2DPutImageData.call(testContext, this.gl, testContext);
                    putImageDataTime = window.performance.now() - startTime;
                    if (drawImageTime > putImageDataTime) {
                        this.imageBuffer = imageBuffer;
                        this.copyGLTo2D = copyGLTo2DPutImageData;
                    } else this.copyGLTo2D = copyGLTo2DDrawImage;
                },
                createWebGLCanvas: function(width, height) {
                    var canvas = fabric.util.createCanvasElement();
                    canvas.width = width;
                    canvas.height = height;
                    var glOptions = {
                        alpha: true,
                        premultipliedAlpha: false,
                        depth: false,
                        stencil: false,
                        antialias: false
                    }, gl = canvas.getContext("webgl", glOptions);
                    if (!gl) gl = canvas.getContext("experimental-webgl", glOptions);
                    if (!gl) return;
                    gl.clearColor(0, 0, 0, 0);
                    this.canvas = canvas;
                    this.gl = gl;
                },
                applyFilters: function(filters, source, width, height, targetCanvas, cacheKey) {
                    var gl = this.gl;
                    var cachedTexture;
                    if (cacheKey) cachedTexture = this.getCachedTexture(cacheKey, source);
                    var pipelineState = {
                        originalWidth: source.width || source.originalWidth,
                        originalHeight: source.height || source.originalHeight,
                        sourceWidth: width,
                        sourceHeight: height,
                        destinationWidth: width,
                        destinationHeight: height,
                        context: gl,
                        sourceTexture: this.createTexture(gl, width, height, !cachedTexture && source),
                        targetTexture: this.createTexture(gl, width, height),
                        originalTexture: cachedTexture || this.createTexture(gl, width, height, !cachedTexture && source),
                        passes: filters.length,
                        webgl: true,
                        aPosition: this.aPosition,
                        programCache: this.programCache,
                        pass: 0,
                        filterBackend: this,
                        targetCanvas
                    };
                    var tempFbo = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, tempFbo);
                    filters.forEach((function(filter) {
                        filter && filter.applyTo(pipelineState);
                    }));
                    resizeCanvasIfNeeded(pipelineState);
                    this.copyGLTo2D(gl, pipelineState);
                    gl.bindTexture(gl.TEXTURE_2D, null);
                    gl.deleteTexture(pipelineState.sourceTexture);
                    gl.deleteTexture(pipelineState.targetTexture);
                    gl.deleteFramebuffer(tempFbo);
                    targetCanvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
                    return pipelineState;
                },
                dispose: function() {
                    if (this.canvas) {
                        this.canvas = null;
                        this.gl = null;
                    }
                    this.clearWebGLCaches();
                },
                clearWebGLCaches: function() {
                    this.programCache = {};
                    this.textureCache = {};
                },
                createTexture: function(gl, width, height, textureImageSource) {
                    var texture = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    if (textureImageSource) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImageSource); else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    return texture;
                },
                getCachedTexture: function(uniqueId, textureImageSource) {
                    if (this.textureCache[uniqueId]) return this.textureCache[uniqueId]; else {
                        var texture = this.createTexture(this.gl, textureImageSource.width, textureImageSource.height, textureImageSource);
                        this.textureCache[uniqueId] = texture;
                        return texture;
                    }
                },
                evictCachesForKey: function(cacheKey) {
                    if (this.textureCache[cacheKey]) {
                        this.gl.deleteTexture(this.textureCache[cacheKey]);
                        delete this.textureCache[cacheKey];
                    }
                },
                copyGLTo2D: copyGLTo2DDrawImage,
                captureGPUInfo: function() {
                    if (this.gpuInfo) return this.gpuInfo;
                    var gl = this.gl, gpuInfo = {
                        renderer: "",
                        vendor: ""
                    };
                    if (!gl) return gpuInfo;
                    var ext = gl.getExtension("WEBGL_debug_renderer_info");
                    if (ext) {
                        var renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
                        var vendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL);
                        if (renderer) gpuInfo.renderer = renderer.toLowerCase();
                        if (vendor) gpuInfo.vendor = vendor.toLowerCase();
                    }
                    this.gpuInfo = gpuInfo;
                    return gpuInfo;
                }
            };
        })();
        function resizeCanvasIfNeeded(pipelineState) {
            var targetCanvas = pipelineState.targetCanvas, width = targetCanvas.width, height = targetCanvas.height, dWidth = pipelineState.destinationWidth, dHeight = pipelineState.destinationHeight;
            if (width !== dWidth || height !== dHeight) {
                targetCanvas.width = dWidth;
                targetCanvas.height = dHeight;
            }
        }
        function copyGLTo2DDrawImage(gl, pipelineState) {
            var glCanvas = gl.canvas, targetCanvas = pipelineState.targetCanvas, ctx = targetCanvas.getContext("2d");
            ctx.translate(0, targetCanvas.height);
            ctx.scale(1, -1);
            var sourceY = glCanvas.height - targetCanvas.height;
            ctx.drawImage(glCanvas, 0, sourceY, targetCanvas.width, targetCanvas.height, 0, 0, targetCanvas.width, targetCanvas.height);
        }
        function copyGLTo2DPutImageData(gl, pipelineState) {
            var targetCanvas = pipelineState.targetCanvas, ctx = targetCanvas.getContext("2d"), dWidth = pipelineState.destinationWidth, dHeight = pipelineState.destinationHeight, numBytes = dWidth * dHeight * 4;
            var u8 = new Uint8Array(this.imageBuffer, 0, numBytes);
            var u8Clamped = new Uint8ClampedArray(this.imageBuffer, 0, numBytes);
            gl.readPixels(0, 0, dWidth, dHeight, gl.RGBA, gl.UNSIGNED_BYTE, u8);
            var imgData = new ImageData(u8Clamped, dWidth, dHeight);
            ctx.putImageData(imgData, 0, 0);
        }
        (function() {
            "use strict";
            var noop = function() {};
            fabric.Canvas2dFilterBackend = Canvas2dFilterBackend;
            function Canvas2dFilterBackend() {}
            Canvas2dFilterBackend.prototype = {
                evictCachesForKey: noop,
                dispose: noop,
                clearWebGLCaches: noop,
                resources: {},
                applyFilters: function(filters, sourceElement, sourceWidth, sourceHeight, targetCanvas) {
                    var ctx = targetCanvas.getContext("2d");
                    ctx.drawImage(sourceElement, 0, 0, sourceWidth, sourceHeight);
                    var imageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
                    var originalImageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
                    var pipelineState = {
                        sourceWidth,
                        sourceHeight,
                        imageData,
                        originalEl: sourceElement,
                        originalImageData,
                        canvasEl: targetCanvas,
                        ctx,
                        filterBackend: this
                    };
                    filters.forEach((function(filter) {
                        filter.applyTo(pipelineState);
                    }));
                    if (pipelineState.imageData.width !== sourceWidth || pipelineState.imageData.height !== sourceHeight) {
                        targetCanvas.width = pipelineState.imageData.width;
                        targetCanvas.height = pipelineState.imageData.height;
                    }
                    ctx.putImageData(pipelineState.imageData, 0, 0);
                    return pipelineState;
                }
            };
        })();
        fabric.Image = fabric.Image || {};
        fabric.Image.filters = fabric.Image.filters || {};
        fabric.Image.filters.BaseFilter = fabric.util.createClass({
            type: "BaseFilter",
            vertexSource: "attribute vec2 aPosition;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vTexCoord = aPosition;\n" + "gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n" + "}",
            fragmentSource: "precision highp float;\n" + "varying vec2 vTexCoord;\n" + "uniform sampler2D uTexture;\n" + "void main() {\n" + "gl_FragColor = texture2D(uTexture, vTexCoord);\n" + "}",
            initialize: function(options) {
                if (options) this.setOptions(options);
            },
            setOptions: function(options) {
                for (var prop in options) this[prop] = options[prop];
            },
            createProgram: function(gl, fragmentSource, vertexSource) {
                fragmentSource = fragmentSource || this.fragmentSource;
                vertexSource = vertexSource || this.vertexSource;
                if (fabric.webGlPrecision !== "highp") fragmentSource = fragmentSource.replace(/precision highp float/g, "precision " + fabric.webGlPrecision + " float");
                var vertexShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertexShader, vertexSource);
                gl.compileShader(vertexShader);
                if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) throw new Error("Vertex shader compile error for " + this.type + ": " + gl.getShaderInfoLog(vertexShader));
                var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragmentShader, fragmentSource);
                gl.compileShader(fragmentShader);
                if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) throw new Error("Fragment shader compile error for " + this.type + ": " + gl.getShaderInfoLog(fragmentShader));
                var program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Shader link error for "${this.type}" ' + gl.getProgramInfoLog(program));
                var attributeLocations = this.getAttributeLocations(gl, program);
                var uniformLocations = this.getUniformLocations(gl, program) || {};
                uniformLocations.uStepW = gl.getUniformLocation(program, "uStepW");
                uniformLocations.uStepH = gl.getUniformLocation(program, "uStepH");
                return {
                    program,
                    attributeLocations,
                    uniformLocations
                };
            },
            getAttributeLocations: function(gl, program) {
                return {
                    aPosition: gl.getAttribLocation(program, "aPosition")
                };
            },
            getUniformLocations: function() {
                return {};
            },
            sendAttributeData: function(gl, attributeLocations, aPositionData) {
                var attributeLocation = attributeLocations.aPosition;
                var buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                gl.enableVertexAttribArray(attributeLocation);
                gl.vertexAttribPointer(attributeLocation, 2, gl.FLOAT, false, 0, 0);
                gl.bufferData(gl.ARRAY_BUFFER, aPositionData, gl.STATIC_DRAW);
            },
            _setupFrameBuffer: function(options) {
                var width, height, gl = options.context;
                if (options.passes > 1) {
                    width = options.destinationWidth;
                    height = options.destinationHeight;
                    if (options.sourceWidth !== width || options.sourceHeight !== height) {
                        gl.deleteTexture(options.targetTexture);
                        options.targetTexture = options.filterBackend.createTexture(gl, width, height);
                    }
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, options.targetTexture, 0);
                } else {
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    gl.finish();
                }
            },
            _swapTextures: function(options) {
                options.passes--;
                options.pass++;
                var temp = options.targetTexture;
                options.targetTexture = options.sourceTexture;
                options.sourceTexture = temp;
            },
            isNeutralState: function() {
                var main = this.mainParameter, _class = fabric.Image.filters[this.type].prototype;
                if (main) if (Array.isArray(_class[main])) {
                    for (var i = _class[main].length; i--; ) if (this[main][i] !== _class[main][i]) return false;
                    return true;
                } else return _class[main] === this[main]; else return false;
            },
            applyTo: function(options) {
                if (options.webgl) {
                    this._setupFrameBuffer(options);
                    this.applyToWebGL(options);
                    this._swapTextures(options);
                } else this.applyTo2d(options);
            },
            retrieveShader: function(options) {
                if (!options.programCache.hasOwnProperty(this.type)) options.programCache[this.type] = this.createProgram(options.context);
                return options.programCache[this.type];
            },
            applyToWebGL: function(options) {
                var gl = options.context;
                var shader = this.retrieveShader(options);
                if (options.pass === 0 && options.originalTexture) gl.bindTexture(gl.TEXTURE_2D, options.originalTexture); else gl.bindTexture(gl.TEXTURE_2D, options.sourceTexture);
                gl.useProgram(shader.program);
                this.sendAttributeData(gl, shader.attributeLocations, options.aPosition);
                gl.uniform1f(shader.uniformLocations.uStepW, 1 / options.sourceWidth);
                gl.uniform1f(shader.uniformLocations.uStepH, 1 / options.sourceHeight);
                this.sendUniformData(gl, shader.uniformLocations);
                gl.viewport(0, 0, options.destinationWidth, options.destinationHeight);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            },
            bindAdditionalTexture: function(gl, texture, textureUnit) {
                gl.activeTexture(textureUnit);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.activeTexture(gl.TEXTURE0);
            },
            unbindAdditionalTexture: function(gl, textureUnit) {
                gl.activeTexture(textureUnit);
                gl.bindTexture(gl.TEXTURE_2D, null);
                gl.activeTexture(gl.TEXTURE0);
            },
            getMainParameter: function() {
                return this[this.mainParameter];
            },
            setMainParameter: function(value) {
                this[this.mainParameter] = value;
            },
            sendUniformData: function() {},
            createHelpLayer: function(options) {
                if (!options.helpLayer) {
                    var helpLayer = document.createElement("canvas");
                    helpLayer.width = options.sourceWidth;
                    helpLayer.height = options.sourceHeight;
                    options.helpLayer = helpLayer;
                }
            },
            toObject: function() {
                var object = {
                    type: this.type
                }, mainP = this.mainParameter;
                if (mainP) object[mainP] = this[mainP];
                return object;
            },
            toJSON: function() {
                return this.toObject();
            }
        });
        fabric.Image.filters.BaseFilter.fromObject = function(object, callback) {
            var filter = new fabric.Image.filters[object.type](object);
            callback && callback(filter);
            return filter;
        };
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.ColorMatrix = createClass(filters.BaseFilter, {
                type: "ColorMatrix",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "varying vec2 vTexCoord;\n" + "uniform mat4 uColorMatrix;\n" + "uniform vec4 uConstants;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "color *= uColorMatrix;\n" + "color += uConstants;\n" + "gl_FragColor = color;\n" + "}",
                matrix: [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
                mainParameter: "matrix",
                colorsOnly: true,
                initialize: function(options) {
                    this.callSuper("initialize", options);
                    this.matrix = this.matrix.slice(0);
                },
                applyTo2d: function(options) {
                    var r, g, b, a, i, imageData = options.imageData, data = imageData.data, iLen = data.length, m = this.matrix, colorsOnly = this.colorsOnly;
                    for (i = 0; i < iLen; i += 4) {
                        r = data[i];
                        g = data[i + 1];
                        b = data[i + 2];
                        if (colorsOnly) {
                            data[i] = r * m[0] + g * m[1] + b * m[2] + m[4] * 255;
                            data[i + 1] = r * m[5] + g * m[6] + b * m[7] + m[9] * 255;
                            data[i + 2] = r * m[10] + g * m[11] + b * m[12] + m[14] * 255;
                        } else {
                            a = data[i + 3];
                            data[i] = r * m[0] + g * m[1] + b * m[2] + a * m[3] + m[4] * 255;
                            data[i + 1] = r * m[5] + g * m[6] + b * m[7] + a * m[8] + m[9] * 255;
                            data[i + 2] = r * m[10] + g * m[11] + b * m[12] + a * m[13] + m[14] * 255;
                            data[i + 3] = r * m[15] + g * m[16] + b * m[17] + a * m[18] + m[19] * 255;
                        }
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uColorMatrix: gl.getUniformLocation(program, "uColorMatrix"),
                        uConstants: gl.getUniformLocation(program, "uConstants")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var m = this.matrix, matrix = [ m[0], m[1], m[2], m[3], m[5], m[6], m[7], m[8], m[10], m[11], m[12], m[13], m[15], m[16], m[17], m[18] ], constants = [ m[4], m[9], m[14], m[19] ];
                    gl.uniformMatrix4fv(uniformLocations.uColorMatrix, false, matrix);
                    gl.uniform4fv(uniformLocations.uConstants, constants);
                }
            });
            fabric.Image.filters.ColorMatrix.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Brightness = createClass(filters.BaseFilter, {
                type: "Brightness",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uBrightness;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "color.rgb += uBrightness;\n" + "gl_FragColor = color;\n" + "}",
                brightness: 0,
                mainParameter: "brightness",
                applyTo2d: function(options) {
                    if (this.brightness === 0) return;
                    var i, imageData = options.imageData, data = imageData.data, len = data.length, brightness = Math.round(this.brightness * 255);
                    for (i = 0; i < len; i += 4) {
                        data[i] = data[i] + brightness;
                        data[i + 1] = data[i + 1] + brightness;
                        data[i + 2] = data[i + 2] + brightness;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uBrightness: gl.getUniformLocation(program, "uBrightness")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uBrightness, this.brightness);
                }
            });
            fabric.Image.filters.Brightness.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Convolute = createClass(filters.BaseFilter, {
                type: "Convolute",
                opaque: false,
                matrix: [ 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
                fragmentSource: {
                    Convolute_3_1: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[9];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 0);\n" + "for (float h = 0.0; h < 3.0; h+=1.0) {\n" + "for (float w = 0.0; w < 3.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n" + "color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n" + "}\n" + "}\n" + "gl_FragColor = color;\n" + "}",
                    Convolute_3_0: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[9];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 1);\n" + "for (float h = 0.0; h < 3.0; h+=1.0) {\n" + "for (float w = 0.0; w < 3.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n" + "color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n" + "}\n" + "}\n" + "float alpha = texture2D(uTexture, vTexCoord).a;\n" + "gl_FragColor = color;\n" + "gl_FragColor.a = alpha;\n" + "}",
                    Convolute_5_1: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[25];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 0);\n" + "for (float h = 0.0; h < 5.0; h+=1.0) {\n" + "for (float w = 0.0; w < 5.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n" + "color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n" + "}\n" + "}\n" + "gl_FragColor = color;\n" + "}",
                    Convolute_5_0: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[25];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 1);\n" + "for (float h = 0.0; h < 5.0; h+=1.0) {\n" + "for (float w = 0.0; w < 5.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n" + "color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n" + "}\n" + "}\n" + "float alpha = texture2D(uTexture, vTexCoord).a;\n" + "gl_FragColor = color;\n" + "gl_FragColor.a = alpha;\n" + "}",
                    Convolute_7_1: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[49];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 0);\n" + "for (float h = 0.0; h < 7.0; h+=1.0) {\n" + "for (float w = 0.0; w < 7.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n" + "color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n" + "}\n" + "}\n" + "gl_FragColor = color;\n" + "}",
                    Convolute_7_0: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[49];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 1);\n" + "for (float h = 0.0; h < 7.0; h+=1.0) {\n" + "for (float w = 0.0; w < 7.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n" + "color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n" + "}\n" + "}\n" + "float alpha = texture2D(uTexture, vTexCoord).a;\n" + "gl_FragColor = color;\n" + "gl_FragColor.a = alpha;\n" + "}",
                    Convolute_9_1: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[81];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 0);\n" + "for (float h = 0.0; h < 9.0; h+=1.0) {\n" + "for (float w = 0.0; w < 9.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n" + "color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n" + "}\n" + "}\n" + "gl_FragColor = color;\n" + "}",
                    Convolute_9_0: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uMatrix[81];\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = vec4(0, 0, 0, 1);\n" + "for (float h = 0.0; h < 9.0; h+=1.0) {\n" + "for (float w = 0.0; w < 9.0; w+=1.0) {\n" + "vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n" + "color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n" + "}\n" + "}\n" + "float alpha = texture2D(uTexture, vTexCoord).a;\n" + "gl_FragColor = color;\n" + "gl_FragColor.a = alpha;\n" + "}"
                },
                retrieveShader: function(options) {
                    var size = Math.sqrt(this.matrix.length);
                    var cacheKey = this.type + "_" + size + "_" + (this.opaque ? 1 : 0);
                    var shaderSource = this.fragmentSource[cacheKey];
                    if (!options.programCache.hasOwnProperty(cacheKey)) options.programCache[cacheKey] = this.createProgram(options.context, shaderSource);
                    return options.programCache[cacheKey];
                },
                applyTo2d: function(options) {
                    var r, g, b, a, dstOff, scx, scy, srcOff, wt, x, y, cx, cy, imageData = options.imageData, data = imageData.data, weights = this.matrix, side = Math.round(Math.sqrt(weights.length)), halfSide = Math.floor(side / 2), sw = imageData.width, sh = imageData.height, output = options.ctx.createImageData(sw, sh), dst = output.data, alphaFac = this.opaque ? 1 : 0;
                    for (y = 0; y < sh; y++) for (x = 0; x < sw; x++) {
                        dstOff = (y * sw + x) * 4;
                        r = 0;
                        g = 0;
                        b = 0;
                        a = 0;
                        for (cy = 0; cy < side; cy++) for (cx = 0; cx < side; cx++) {
                            scy = y + cy - halfSide;
                            scx = x + cx - halfSide;
                            if (scy < 0 || scy >= sh || scx < 0 || scx >= sw) continue;
                            srcOff = (scy * sw + scx) * 4;
                            wt = weights[cy * side + cx];
                            r += data[srcOff] * wt;
                            g += data[srcOff + 1] * wt;
                            b += data[srcOff + 2] * wt;
                            if (!alphaFac) a += data[srcOff + 3] * wt;
                        }
                        dst[dstOff] = r;
                        dst[dstOff + 1] = g;
                        dst[dstOff + 2] = b;
                        if (!alphaFac) dst[dstOff + 3] = a; else dst[dstOff + 3] = data[dstOff + 3];
                    }
                    options.imageData = output;
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uMatrix: gl.getUniformLocation(program, "uMatrix"),
                        uOpaque: gl.getUniformLocation(program, "uOpaque"),
                        uHalfSize: gl.getUniformLocation(program, "uHalfSize"),
                        uSize: gl.getUniformLocation(program, "uSize")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1fv(uniformLocations.uMatrix, this.matrix);
                },
                toObject: function() {
                    return extend(this.callSuper("toObject"), {
                        opaque: this.opaque,
                        matrix: this.matrix
                    });
                }
            });
            fabric.Image.filters.Convolute.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Grayscale = createClass(filters.BaseFilter, {
                type: "Grayscale",
                fragmentSource: {
                    average: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "float average = (color.r + color.b + color.g) / 3.0;\n" + "gl_FragColor = vec4(average, average, average, color.a);\n" + "}",
                    lightness: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform int uMode;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 col = texture2D(uTexture, vTexCoord);\n" + "float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n" + "gl_FragColor = vec4(average, average, average, col.a);\n" + "}",
                    luminosity: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform int uMode;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 col = texture2D(uTexture, vTexCoord);\n" + "float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n" + "gl_FragColor = vec4(average, average, average, col.a);\n" + "}"
                },
                mode: "average",
                mainParameter: "mode",
                applyTo2d: function(options) {
                    var i, value, imageData = options.imageData, data = imageData.data, len = data.length, mode = this.mode;
                    for (i = 0; i < len; i += 4) {
                        if (mode === "average") value = (data[i] + data[i + 1] + data[i + 2]) / 3; else if (mode === "lightness") value = (Math.min(data[i], data[i + 1], data[i + 2]) + Math.max(data[i], data[i + 1], data[i + 2])) / 2; else if (mode === "luminosity") value = .21 * data[i] + .72 * data[i + 1] + .07 * data[i + 2];
                        data[i] = value;
                        data[i + 1] = value;
                        data[i + 2] = value;
                    }
                },
                retrieveShader: function(options) {
                    var cacheKey = this.type + "_" + this.mode;
                    if (!options.programCache.hasOwnProperty(cacheKey)) {
                        var shaderSource = this.fragmentSource[this.mode];
                        options.programCache[cacheKey] = this.createProgram(options.context, shaderSource);
                    }
                    return options.programCache[cacheKey];
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uMode: gl.getUniformLocation(program, "uMode")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var mode = 1;
                    gl.uniform1i(uniformLocations.uMode, mode);
                },
                isNeutralState: function() {
                    return false;
                }
            });
            fabric.Image.filters.Grayscale.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Invert = createClass(filters.BaseFilter, {
                type: "Invert",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform int uInvert;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "if (uInvert == 1) {\n" + "gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n" + "} else {\n" + "gl_FragColor = color;\n" + "}\n" + "}",
                invert: true,
                mainParameter: "invert",
                applyTo2d: function(options) {
                    var i, imageData = options.imageData, data = imageData.data, len = data.length;
                    for (i = 0; i < len; i += 4) {
                        data[i] = 255 - data[i];
                        data[i + 1] = 255 - data[i + 1];
                        data[i + 2] = 255 - data[i + 2];
                    }
                },
                isNeutralState: function() {
                    return !this.invert;
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uInvert: gl.getUniformLocation(program, "uInvert")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1i(uniformLocations.uInvert, this.invert);
                }
            });
            fabric.Image.filters.Invert.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Noise = createClass(filters.BaseFilter, {
                type: "Noise",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uStepH;\n" + "uniform float uNoise;\n" + "uniform float uSeed;\n" + "varying vec2 vTexCoord;\n" + "float rand(vec2 co, float seed, float vScale) {\n" + "return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n" + "}\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n" + "gl_FragColor = color;\n" + "}",
                mainParameter: "noise",
                noise: 0,
                applyTo2d: function(options) {
                    if (this.noise === 0) return;
                    var i, rand, imageData = options.imageData, data = imageData.data, len = data.length, noise = this.noise;
                    for (i = 0, len = data.length; i < len; i += 4) {
                        rand = (.5 - Math.random()) * noise;
                        data[i] += rand;
                        data[i + 1] += rand;
                        data[i + 2] += rand;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uNoise: gl.getUniformLocation(program, "uNoise"),
                        uSeed: gl.getUniformLocation(program, "uSeed")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uNoise, this.noise / 255);
                    gl.uniform1f(uniformLocations.uSeed, Math.random());
                },
                toObject: function() {
                    return extend(this.callSuper("toObject"), {
                        noise: this.noise
                    });
                }
            });
            fabric.Image.filters.Noise.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Pixelate = createClass(filters.BaseFilter, {
                type: "Pixelate",
                blocksize: 4,
                mainParameter: "blocksize",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uBlocksize;\n" + "uniform float uStepW;\n" + "uniform float uStepH;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "float blockW = uBlocksize * uStepW;\n" + "float blockH = uBlocksize * uStepW;\n" + "int posX = int(vTexCoord.x / blockW);\n" + "int posY = int(vTexCoord.y / blockH);\n" + "float fposX = float(posX);\n" + "float fposY = float(posY);\n" + "vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n" + "vec4 color = texture2D(uTexture, squareCoords);\n" + "gl_FragColor = color;\n" + "}",
                applyTo2d: function(options) {
                    var index, i, j, r, g, b, a, _i, _j, _iLen, _jLen, imageData = options.imageData, data = imageData.data, iLen = imageData.height, jLen = imageData.width;
                    for (i = 0; i < iLen; i += this.blocksize) for (j = 0; j < jLen; j += this.blocksize) {
                        index = i * 4 * jLen + j * 4;
                        r = data[index];
                        g = data[index + 1];
                        b = data[index + 2];
                        a = data[index + 3];
                        _iLen = Math.min(i + this.blocksize, iLen);
                        _jLen = Math.min(j + this.blocksize, jLen);
                        for (_i = i; _i < _iLen; _i++) for (_j = j; _j < _jLen; _j++) {
                            index = _i * 4 * jLen + _j * 4;
                            data[index] = r;
                            data[index + 1] = g;
                            data[index + 2] = b;
                            data[index + 3] = a;
                        }
                    }
                },
                isNeutralState: function() {
                    return this.blocksize === 1;
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uBlocksize: gl.getUniformLocation(program, "uBlocksize"),
                        uStepW: gl.getUniformLocation(program, "uStepW"),
                        uStepH: gl.getUniformLocation(program, "uStepH")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uBlocksize, this.blocksize);
                }
            });
            fabric.Image.filters.Pixelate.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), extend = fabric.util.object.extend, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.RemoveColor = createClass(filters.BaseFilter, {
                type: "RemoveColor",
                color: "#FFFFFF",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform vec4 uLow;\n" + "uniform vec4 uHigh;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "gl_FragColor = texture2D(uTexture, vTexCoord);\n" + "if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n" + "gl_FragColor.a = 0.0;\n" + "}\n" + "}",
                distance: .02,
                useAlpha: false,
                applyTo2d: function(options) {
                    var i, r, g, b, imageData = options.imageData, data = imageData.data, distance = this.distance * 255, source = new fabric.Color(this.color).getSource(), lowC = [ source[0] - distance, source[1] - distance, source[2] - distance ], highC = [ source[0] + distance, source[1] + distance, source[2] + distance ];
                    for (i = 0; i < data.length; i += 4) {
                        r = data[i];
                        g = data[i + 1];
                        b = data[i + 2];
                        if (r > lowC[0] && g > lowC[1] && b > lowC[2] && r < highC[0] && g < highC[1] && b < highC[2]) data[i + 3] = 0;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uLow: gl.getUniformLocation(program, "uLow"),
                        uHigh: gl.getUniformLocation(program, "uHigh")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var source = new fabric.Color(this.color).getSource(), distance = parseFloat(this.distance), lowC = [ 0 + source[0] / 255 - distance, 0 + source[1] / 255 - distance, 0 + source[2] / 255 - distance, 1 ], highC = [ source[0] / 255 + distance, source[1] / 255 + distance, source[2] / 255 + distance, 1 ];
                    gl.uniform4fv(uniformLocations.uLow, lowC);
                    gl.uniform4fv(uniformLocations.uHigh, highC);
                },
                toObject: function() {
                    return extend(this.callSuper("toObject"), {
                        color: this.color,
                        distance: this.distance
                    });
                }
            });
            fabric.Image.filters.RemoveColor.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            var matrices = {
                Brownie: [ .5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0 ],
                Vintage: [ .62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0 ],
                Kodachrome: [ 1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0 ],
                Technicolor: [ 1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0 ],
                Polaroid: [ 1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0 ],
                Sepia: [ .393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0 ],
                BlackWhite: [ 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0 ]
            };
            for (var key in matrices) {
                filters[key] = createClass(filters.ColorMatrix, {
                    type: key,
                    matrix: matrices[key],
                    mainParameter: false,
                    colorsOnly: true
                });
                fabric.Image.filters[key].fromObject = fabric.Image.filters.BaseFilter.fromObject;
            }
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.BlendColor = createClass(filters.BaseFilter, {
                type: "BlendColor",
                color: "#F95C63",
                mode: "multiply",
                alpha: 1,
                fragmentSource: {
                    multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                    screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                    add: "gl_FragColor.rgb += uColor.rgb;\n",
                    diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                    subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                    lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                    darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                    exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                    overlay: "if (uColor.r < 0.5) {\n" + "gl_FragColor.r *= 2.0 * uColor.r;\n" + "} else {\n" + "gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n" + "}\n" + "if (uColor.g < 0.5) {\n" + "gl_FragColor.g *= 2.0 * uColor.g;\n" + "} else {\n" + "gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n" + "}\n" + "if (uColor.b < 0.5) {\n" + "gl_FragColor.b *= 2.0 * uColor.b;\n" + "} else {\n" + "gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n" + "}\n",
                    tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\n" + "gl_FragColor.rgb += uColor.rgb;\n"
                },
                buildSource: function(mode) {
                    return "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform vec4 uColor;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "gl_FragColor = color;\n" + "if (color.a > 0.0) {\n" + this.fragmentSource[mode] + "}\n" + "}";
                },
                retrieveShader: function(options) {
                    var shaderSource, cacheKey = this.type + "_" + this.mode;
                    if (!options.programCache.hasOwnProperty(cacheKey)) {
                        shaderSource = this.buildSource(this.mode);
                        options.programCache[cacheKey] = this.createProgram(options.context, shaderSource);
                    }
                    return options.programCache[cacheKey];
                },
                applyTo2d: function(options) {
                    var tr, tg, tb, r, g, b, source, imageData = options.imageData, data = imageData.data, iLen = data.length, alpha1 = 1 - this.alpha;
                    source = new fabric.Color(this.color).getSource();
                    tr = source[0] * this.alpha;
                    tg = source[1] * this.alpha;
                    tb = source[2] * this.alpha;
                    for (var i = 0; i < iLen; i += 4) {
                        r = data[i];
                        g = data[i + 1];
                        b = data[i + 2];
                        switch (this.mode) {
                          case "multiply":
                            data[i] = r * tr / 255;
                            data[i + 1] = g * tg / 255;
                            data[i + 2] = b * tb / 255;
                            break;

                          case "screen":
                            data[i] = 255 - (255 - r) * (255 - tr) / 255;
                            data[i + 1] = 255 - (255 - g) * (255 - tg) / 255;
                            data[i + 2] = 255 - (255 - b) * (255 - tb) / 255;
                            break;

                          case "add":
                            data[i] = r + tr;
                            data[i + 1] = g + tg;
                            data[i + 2] = b + tb;
                            break;

                          case "diff":
                          case "difference":
                            data[i] = Math.abs(r - tr);
                            data[i + 1] = Math.abs(g - tg);
                            data[i + 2] = Math.abs(b - tb);
                            break;

                          case "subtract":
                            data[i] = r - tr;
                            data[i + 1] = g - tg;
                            data[i + 2] = b - tb;
                            break;

                          case "darken":
                            data[i] = Math.min(r, tr);
                            data[i + 1] = Math.min(g, tg);
                            data[i + 2] = Math.min(b, tb);
                            break;

                          case "lighten":
                            data[i] = Math.max(r, tr);
                            data[i + 1] = Math.max(g, tg);
                            data[i + 2] = Math.max(b, tb);
                            break;

                          case "overlay":
                            data[i] = tr < 128 ? 2 * r * tr / 255 : 255 - 2 * (255 - r) * (255 - tr) / 255;
                            data[i + 1] = tg < 128 ? 2 * g * tg / 255 : 255 - 2 * (255 - g) * (255 - tg) / 255;
                            data[i + 2] = tb < 128 ? 2 * b * tb / 255 : 255 - 2 * (255 - b) * (255 - tb) / 255;
                            break;

                          case "exclusion":
                            data[i] = tr + r - 2 * tr * r / 255;
                            data[i + 1] = tg + g - 2 * tg * g / 255;
                            data[i + 2] = tb + b - 2 * tb * b / 255;
                            break;

                          case "tint":
                            data[i] = tr + r * alpha1;
                            data[i + 1] = tg + g * alpha1;
                            data[i + 2] = tb + b * alpha1;
                        }
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uColor: gl.getUniformLocation(program, "uColor")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var source = new fabric.Color(this.color).getSource();
                    source[0] = this.alpha * source[0] / 255;
                    source[1] = this.alpha * source[1] / 255;
                    source[2] = this.alpha * source[2] / 255;
                    source[3] = this.alpha;
                    gl.uniform4fv(uniformLocations.uColor, source);
                },
                toObject: function() {
                    return {
                        type: this.type,
                        color: this.color,
                        mode: this.mode,
                        alpha: this.alpha
                    };
                }
            });
            fabric.Image.filters.BlendColor.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.BlendImage = createClass(filters.BaseFilter, {
                type: "BlendImage",
                image: null,
                mode: "multiply",
                alpha: 1,
                vertexSource: "attribute vec2 aPosition;\n" + "varying vec2 vTexCoord;\n" + "varying vec2 vTexCoord2;\n" + "uniform mat3 uTransformMatrix;\n" + "void main() {\n" + "vTexCoord = aPosition;\n" + "vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n" + "gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n" + "}",
                fragmentSource: {
                    multiply: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform sampler2D uImage;\n" + "uniform vec4 uColor;\n" + "varying vec2 vTexCoord;\n" + "varying vec2 vTexCoord2;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "vec4 color2 = texture2D(uImage, vTexCoord2);\n" + "color.rgba *= color2.rgba;\n" + "gl_FragColor = color;\n" + "}",
                    mask: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform sampler2D uImage;\n" + "uniform vec4 uColor;\n" + "varying vec2 vTexCoord;\n" + "varying vec2 vTexCoord2;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "vec4 color2 = texture2D(uImage, vTexCoord2);\n" + "color.a = color2.a;\n" + "gl_FragColor = color;\n" + "}"
                },
                retrieveShader: function(options) {
                    var cacheKey = this.type + "_" + this.mode;
                    var shaderSource = this.fragmentSource[this.mode];
                    if (!options.programCache.hasOwnProperty(cacheKey)) options.programCache[cacheKey] = this.createProgram(options.context, shaderSource);
                    return options.programCache[cacheKey];
                },
                applyToWebGL: function(options) {
                    var gl = options.context, texture = this.createTexture(options.filterBackend, this.image);
                    this.bindAdditionalTexture(gl, texture, gl.TEXTURE1);
                    this.callSuper("applyToWebGL", options);
                    this.unbindAdditionalTexture(gl, gl.TEXTURE1);
                },
                createTexture: function(backend, image) {
                    return backend.getCachedTexture(image.cacheKey, image._element);
                },
                calculateMatrix: function() {
                    var image = this.image, width = image._element.width, height = image._element.height;
                    return [ 1 / image.scaleX, 0, 0, 0, 1 / image.scaleY, 0, -image.left / width, -image.top / height, 1 ];
                },
                applyTo2d: function(options) {
                    var tr, tg, tb, ta, r, g, b, a, canvas1, context, blendData, imageData = options.imageData, resources = options.filterBackend.resources, data = imageData.data, iLen = data.length, width = imageData.width, height = imageData.height, image = this.image;
                    if (!resources.blendImage) resources.blendImage = fabric.util.createCanvasElement();
                    canvas1 = resources.blendImage;
                    context = canvas1.getContext("2d");
                    if (canvas1.width !== width || canvas1.height !== height) {
                        canvas1.width = width;
                        canvas1.height = height;
                    } else context.clearRect(0, 0, width, height);
                    context.setTransform(image.scaleX, 0, 0, image.scaleY, image.left, image.top);
                    context.drawImage(image._element, 0, 0, width, height);
                    blendData = context.getImageData(0, 0, width, height).data;
                    for (var i = 0; i < iLen; i += 4) {
                        r = data[i];
                        g = data[i + 1];
                        b = data[i + 2];
                        a = data[i + 3];
                        tr = blendData[i];
                        tg = blendData[i + 1];
                        tb = blendData[i + 2];
                        ta = blendData[i + 3];
                        switch (this.mode) {
                          case "multiply":
                            data[i] = r * tr / 255;
                            data[i + 1] = g * tg / 255;
                            data[i + 2] = b * tb / 255;
                            data[i + 3] = a * ta / 255;
                            break;

                          case "mask":
                            data[i + 3] = ta;
                            break;
                        }
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uTransformMatrix: gl.getUniformLocation(program, "uTransformMatrix"),
                        uImage: gl.getUniformLocation(program, "uImage")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var matrix = this.calculateMatrix();
                    gl.uniform1i(uniformLocations.uImage, 1);
                    gl.uniformMatrix3fv(uniformLocations.uTransformMatrix, false, matrix);
                },
                toObject: function() {
                    return {
                        type: this.type,
                        image: this.image && this.image.toObject(),
                        mode: this.mode,
                        alpha: this.alpha
                    };
                }
            });
            fabric.Image.filters.BlendImage.fromObject = function(object, callback) {
                fabric.Image.fromObject(object.image, (function(image) {
                    var options = fabric.util.object.clone(object);
                    options.image = image;
                    callback(new fabric.Image.filters.BlendImage(options));
                }));
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), pow = Math.pow, floor = Math.floor, sqrt = Math.sqrt, abs = Math.abs, round = Math.round, sin = Math.sin, ceil = Math.ceil, filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Resize = createClass(filters.BaseFilter, {
                type: "Resize",
                resizeType: "hermite",
                scaleX: 1,
                scaleY: 1,
                lanczosLobes: 3,
                getUniformLocations: function(gl, program) {
                    return {
                        uDelta: gl.getUniformLocation(program, "uDelta"),
                        uTaps: gl.getUniformLocation(program, "uTaps")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform2fv(uniformLocations.uDelta, this.horizontal ? [ 1 / this.width, 0 ] : [ 0, 1 / this.height ]);
                    gl.uniform1fv(uniformLocations.uTaps, this.taps);
                },
                retrieveShader: function(options) {
                    var filterWindow = this.getFilterWindow(), cacheKey = this.type + "_" + filterWindow;
                    if (!options.programCache.hasOwnProperty(cacheKey)) {
                        var fragmentShader = this.generateShader(filterWindow);
                        options.programCache[cacheKey] = this.createProgram(options.context, fragmentShader);
                    }
                    return options.programCache[cacheKey];
                },
                getFilterWindow: function() {
                    var scale = this.tempScale;
                    return Math.ceil(this.lanczosLobes / scale);
                },
                getTaps: function() {
                    var lobeFunction = this.lanczosCreate(this.lanczosLobes), scale = this.tempScale, filterWindow = this.getFilterWindow(), taps = new Array(filterWindow);
                    for (var i = 1; i <= filterWindow; i++) taps[i - 1] = lobeFunction(i * scale);
                    return taps;
                },
                generateShader: function(filterWindow) {
                    var offsets = new Array(filterWindow), fragmentShader = this.fragmentSourceTOP;
                    for (var i = 1; i <= filterWindow; i++) offsets[i - 1] = i + ".0 * uDelta";
                    fragmentShader += "uniform float uTaps[" + filterWindow + "];\n";
                    fragmentShader += "void main() {\n";
                    fragmentShader += "  vec4 color = texture2D(uTexture, vTexCoord);\n";
                    fragmentShader += "  float sum = 1.0;\n";
                    offsets.forEach((function(offset, i) {
                        fragmentShader += "  color += texture2D(uTexture, vTexCoord + " + offset + ") * uTaps[" + i + "];\n";
                        fragmentShader += "  color += texture2D(uTexture, vTexCoord - " + offset + ") * uTaps[" + i + "];\n";
                        fragmentShader += "  sum += 2.0 * uTaps[" + i + "];\n";
                    }));
                    fragmentShader += "  gl_FragColor = color / sum;\n";
                    fragmentShader += "}";
                    return fragmentShader;
                },
                fragmentSourceTOP: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform vec2 uDelta;\n" + "varying vec2 vTexCoord;\n",
                applyTo: function(options) {
                    if (options.webgl) {
                        options.passes++;
                        this.width = options.sourceWidth;
                        this.horizontal = true;
                        this.dW = Math.round(this.width * this.scaleX);
                        this.dH = options.sourceHeight;
                        this.tempScale = this.dW / this.width;
                        this.taps = this.getTaps();
                        options.destinationWidth = this.dW;
                        this._setupFrameBuffer(options);
                        this.applyToWebGL(options);
                        this._swapTextures(options);
                        options.sourceWidth = options.destinationWidth;
                        this.height = options.sourceHeight;
                        this.horizontal = false;
                        this.dH = Math.round(this.height * this.scaleY);
                        this.tempScale = this.dH / this.height;
                        this.taps = this.getTaps();
                        options.destinationHeight = this.dH;
                        this._setupFrameBuffer(options);
                        this.applyToWebGL(options);
                        this._swapTextures(options);
                        options.sourceHeight = options.destinationHeight;
                    } else this.applyTo2d(options);
                },
                isNeutralState: function() {
                    return this.scaleX === 1 && this.scaleY === 1;
                },
                lanczosCreate: function(lobes) {
                    return function(x) {
                        if (x >= lobes || x <= -lobes) return 0;
                        if (x < 1.1920929e-7 && x > -1.1920929e-7) return 1;
                        x *= Math.PI;
                        var xx = x / lobes;
                        return sin(x) / x * sin(xx) / xx;
                    };
                },
                applyTo2d: function(options) {
                    var imageData = options.imageData, scaleX = this.scaleX, scaleY = this.scaleY;
                    this.rcpScaleX = 1 / scaleX;
                    this.rcpScaleY = 1 / scaleY;
                    var newData, oW = imageData.width, oH = imageData.height, dW = round(oW * scaleX), dH = round(oH * scaleY);
                    if (this.resizeType === "sliceHack") newData = this.sliceByTwo(options, oW, oH, dW, dH); else if (this.resizeType === "hermite") newData = this.hermiteFastResize(options, oW, oH, dW, dH); else if (this.resizeType === "bilinear") newData = this.bilinearFiltering(options, oW, oH, dW, dH); else if (this.resizeType === "lanczos") newData = this.lanczosResize(options, oW, oH, dW, dH);
                    options.imageData = newData;
                },
                sliceByTwo: function(options, oW, oH, dW, dH) {
                    var tmpCanvas, ctx, imageData = options.imageData, mult = .5, doneW = false, doneH = false, stepW = oW * mult, stepH = oH * mult, resources = fabric.filterBackend.resources, sX = 0, sY = 0, dX = oW, dY = 0;
                    if (!resources.sliceByTwo) resources.sliceByTwo = document.createElement("canvas");
                    tmpCanvas = resources.sliceByTwo;
                    if (tmpCanvas.width < oW * 1.5 || tmpCanvas.height < oH) {
                        tmpCanvas.width = oW * 1.5;
                        tmpCanvas.height = oH;
                    }
                    ctx = tmpCanvas.getContext("2d");
                    ctx.clearRect(0, 0, oW * 1.5, oH);
                    ctx.putImageData(imageData, 0, 0);
                    dW = floor(dW);
                    dH = floor(dH);
                    while (!doneW || !doneH) {
                        oW = stepW;
                        oH = stepH;
                        if (dW < floor(stepW * mult)) stepW = floor(stepW * mult); else {
                            stepW = dW;
                            doneW = true;
                        }
                        if (dH < floor(stepH * mult)) stepH = floor(stepH * mult); else {
                            stepH = dH;
                            doneH = true;
                        }
                        ctx.drawImage(tmpCanvas, sX, sY, oW, oH, dX, dY, stepW, stepH);
                        sX = dX;
                        sY = dY;
                        dY += stepH;
                    }
                    return ctx.getImageData(sX, sY, dW, dH);
                },
                lanczosResize: function(options, oW, oH, dW, dH) {
                    function process(u) {
                        var v, i, weight, idx, a, red, green, blue, alpha, fX, fY;
                        center.x = (u + .5) * ratioX;
                        icenter.x = floor(center.x);
                        for (v = 0; v < dH; v++) {
                            center.y = (v + .5) * ratioY;
                            icenter.y = floor(center.y);
                            a = 0;
                            red = 0;
                            green = 0;
                            blue = 0;
                            alpha = 0;
                            for (i = icenter.x - range2X; i <= icenter.x + range2X; i++) {
                                if (i < 0 || i >= oW) continue;
                                fX = floor(1e3 * abs(i - center.x));
                                if (!cacheLanc[fX]) cacheLanc[fX] = {};
                                for (var j = icenter.y - range2Y; j <= icenter.y + range2Y; j++) {
                                    if (j < 0 || j >= oH) continue;
                                    fY = floor(1e3 * abs(j - center.y));
                                    if (!cacheLanc[fX][fY]) cacheLanc[fX][fY] = lanczos(sqrt(pow(fX * rcpRatioX, 2) + pow(fY * rcpRatioY, 2)) / 1e3);
                                    weight = cacheLanc[fX][fY];
                                    if (weight > 0) {
                                        idx = (j * oW + i) * 4;
                                        a += weight;
                                        red += weight * srcData[idx];
                                        green += weight * srcData[idx + 1];
                                        blue += weight * srcData[idx + 2];
                                        alpha += weight * srcData[idx + 3];
                                    }
                                }
                            }
                            idx = (v * dW + u) * 4;
                            destData[idx] = red / a;
                            destData[idx + 1] = green / a;
                            destData[idx + 2] = blue / a;
                            destData[idx + 3] = alpha / a;
                        }
                        if (++u < dW) return process(u); else return destImg;
                    }
                    var srcData = options.imageData.data, destImg = options.ctx.createImageData(dW, dH), destData = destImg.data, lanczos = this.lanczosCreate(this.lanczosLobes), ratioX = this.rcpScaleX, ratioY = this.rcpScaleY, rcpRatioX = 2 / this.rcpScaleX, rcpRatioY = 2 / this.rcpScaleY, range2X = ceil(ratioX * this.lanczosLobes / 2), range2Y = ceil(ratioY * this.lanczosLobes / 2), cacheLanc = {}, center = {}, icenter = {};
                    return process(0);
                },
                bilinearFiltering: function(options, oW, oH, dW, dH) {
                    var a, b, c, d, x, y, i, j, xDiff, yDiff, chnl, color, origPix, offset = 0, ratioX = this.rcpScaleX, ratioY = this.rcpScaleY, w4 = 4 * (oW - 1), img = options.imageData, pixels = img.data, destImage = options.ctx.createImageData(dW, dH), destPixels = destImage.data;
                    for (i = 0; i < dH; i++) for (j = 0; j < dW; j++) {
                        x = floor(ratioX * j);
                        y = floor(ratioY * i);
                        xDiff = ratioX * j - x;
                        yDiff = ratioY * i - y;
                        origPix = 4 * (y * oW + x);
                        for (chnl = 0; chnl < 4; chnl++) {
                            a = pixels[origPix + chnl];
                            b = pixels[origPix + 4 + chnl];
                            c = pixels[origPix + w4 + chnl];
                            d = pixels[origPix + w4 + 4 + chnl];
                            color = a * (1 - xDiff) * (1 - yDiff) + b * xDiff * (1 - yDiff) + c * yDiff * (1 - xDiff) + d * xDiff * yDiff;
                            destPixels[offset++] = color;
                        }
                    }
                    return destImage;
                },
                hermiteFastResize: function(options, oW, oH, dW, dH) {
                    var ratioW = this.rcpScaleX, ratioH = this.rcpScaleY, ratioWHalf = ceil(ratioW / 2), ratioHHalf = ceil(ratioH / 2), img = options.imageData, data = img.data, img2 = options.ctx.createImageData(dW, dH), data2 = img2.data;
                    for (var j = 0; j < dH; j++) for (var i = 0; i < dW; i++) {
                        var x2 = (i + j * dW) * 4, weight = 0, weights = 0, weightsAlpha = 0, gxR = 0, gxG = 0, gxB = 0, gxA = 0, centerY = (j + .5) * ratioH;
                        for (var yy = floor(j * ratioH); yy < (j + 1) * ratioH; yy++) {
                            var dy = abs(centerY - (yy + .5)) / ratioHHalf, centerX = (i + .5) * ratioW, w0 = dy * dy;
                            for (var xx = floor(i * ratioW); xx < (i + 1) * ratioW; xx++) {
                                var dx = abs(centerX - (xx + .5)) / ratioWHalf, w = sqrt(w0 + dx * dx);
                                if (w > 1 && w < -1) continue;
                                weight = 2 * w * w * w - 3 * w * w + 1;
                                if (weight > 0) {
                                    dx = 4 * (xx + yy * oW);
                                    gxA += weight * data[dx + 3];
                                    weightsAlpha += weight;
                                    if (data[dx + 3] < 255) weight = weight * data[dx + 3] / 250;
                                    gxR += weight * data[dx];
                                    gxG += weight * data[dx + 1];
                                    gxB += weight * data[dx + 2];
                                    weights += weight;
                                }
                            }
                        }
                        data2[x2] = gxR / weights;
                        data2[x2 + 1] = gxG / weights;
                        data2[x2 + 2] = gxB / weights;
                        data2[x2 + 3] = gxA / weightsAlpha;
                    }
                    return img2;
                },
                toObject: function() {
                    return {
                        type: this.type,
                        scaleX: this.scaleX,
                        scaleY: this.scaleY,
                        resizeType: this.resizeType,
                        lanczosLobes: this.lanczosLobes
                    };
                }
            });
            fabric.Image.filters.Resize.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Contrast = createClass(filters.BaseFilter, {
                type: "Contrast",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uContrast;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n" + "color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n" + "gl_FragColor = color;\n" + "}",
                contrast: 0,
                mainParameter: "contrast",
                applyTo2d: function(options) {
                    if (this.contrast === 0) return;
                    var i, imageData = options.imageData, data = imageData.data, len = data.length, contrast = Math.floor(this.contrast * 255), contrastF = 259 * (contrast + 255) / (255 * (259 - contrast));
                    for (i = 0; i < len; i += 4) {
                        data[i] = contrastF * (data[i] - 128) + 128;
                        data[i + 1] = contrastF * (data[i + 1] - 128) + 128;
                        data[i + 2] = contrastF * (data[i + 2] - 128) + 128;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uContrast: gl.getUniformLocation(program, "uContrast")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uContrast, this.contrast);
                }
            });
            fabric.Image.filters.Contrast.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Saturation = createClass(filters.BaseFilter, {
                type: "Saturation",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uSaturation;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "float rgMax = max(color.r, color.g);\n" + "float rgbMax = max(rgMax, color.b);\n" + "color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n" + "color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n" + "color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n" + "gl_FragColor = color;\n" + "}",
                saturation: 0,
                mainParameter: "saturation",
                applyTo2d: function(options) {
                    if (this.saturation === 0) return;
                    var i, max, imageData = options.imageData, data = imageData.data, len = data.length, adjust = -this.saturation;
                    for (i = 0; i < len; i += 4) {
                        max = Math.max(data[i], data[i + 1], data[i + 2]);
                        data[i] += max !== data[i] ? (max - data[i]) * adjust : 0;
                        data[i + 1] += max !== data[i + 1] ? (max - data[i + 1]) * adjust : 0;
                        data[i + 2] += max !== data[i + 2] ? (max - data[i + 2]) * adjust : 0;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uSaturation: gl.getUniformLocation(program, "uSaturation")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uSaturation, -this.saturation);
                }
            });
            fabric.Image.filters.Saturation.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Vibrance = createClass(filters.BaseFilter, {
                type: "Vibrance",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform float uVibrance;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "float max = max(color.r, max(color.g, color.b));\n" + "float avg = (color.r + color.g + color.b) / 3.0;\n" + "float amt = (abs(max - avg) * 2.0) * uVibrance;\n" + "color.r += max != color.r ? (max - color.r) * amt : 0.00;\n" + "color.g += max != color.g ? (max - color.g) * amt : 0.00;\n" + "color.b += max != color.b ? (max - color.b) * amt : 0.00;\n" + "gl_FragColor = color;\n" + "}",
                vibrance: 0,
                mainParameter: "vibrance",
                applyTo2d: function(options) {
                    if (this.vibrance === 0) return;
                    var i, max, avg, amt, imageData = options.imageData, data = imageData.data, len = data.length, adjust = -this.vibrance;
                    for (i = 0; i < len; i += 4) {
                        max = Math.max(data[i], data[i + 1], data[i + 2]);
                        avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        amt = Math.abs(max - avg) * 2 / 255 * adjust;
                        data[i] += max !== data[i] ? (max - data[i]) * amt : 0;
                        data[i + 1] += max !== data[i + 1] ? (max - data[i + 1]) * amt : 0;
                        data[i + 2] += max !== data[i + 2] ? (max - data[i + 2]) * amt : 0;
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uVibrance: gl.getUniformLocation(program, "uVibrance")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform1f(uniformLocations.uVibrance, -this.vibrance);
                }
            });
            fabric.Image.filters.Vibrance.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Blur = createClass(filters.BaseFilter, {
                type: "Blur",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform vec2 uDelta;\n" + "varying vec2 vTexCoord;\n" + "const float nSamples = 15.0;\n" + "vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n" + "float random(vec3 scale) {\n" + "return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n" + "}\n" + "void main() {\n" + "vec4 color = vec4(0.0);\n" + "float total = 0.0;\n" + "float offset = random(v3offset);\n" + "for (float t = -nSamples; t <= nSamples; t++) {\n" + "float percent = (t + offset - 0.5) / nSamples;\n" + "float weight = 1.0 - abs(percent);\n" + "color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\n" + "total += weight;\n" + "}\n" + "gl_FragColor = color / total;\n" + "}",
                blur: 0,
                mainParameter: "blur",
                applyTo: function(options) {
                    if (options.webgl) {
                        this.aspectRatio = options.sourceWidth / options.sourceHeight;
                        options.passes++;
                        this._setupFrameBuffer(options);
                        this.horizontal = true;
                        this.applyToWebGL(options);
                        this._swapTextures(options);
                        this._setupFrameBuffer(options);
                        this.horizontal = false;
                        this.applyToWebGL(options);
                        this._swapTextures(options);
                    } else this.applyTo2d(options);
                },
                applyTo2d: function(options) {
                    options.imageData = this.simpleBlur(options);
                },
                simpleBlur: function(options) {
                    var canvas1, canvas2, resources = options.filterBackend.resources, width = options.imageData.width, height = options.imageData.height;
                    if (!resources.blurLayer1) {
                        resources.blurLayer1 = fabric.util.createCanvasElement();
                        resources.blurLayer2 = fabric.util.createCanvasElement();
                    }
                    canvas1 = resources.blurLayer1;
                    canvas2 = resources.blurLayer2;
                    if (canvas1.width !== width || canvas1.height !== height) {
                        canvas2.width = canvas1.width = width;
                        canvas2.height = canvas1.height = height;
                    }
                    var random, percent, j, i, ctx1 = canvas1.getContext("2d"), ctx2 = canvas2.getContext("2d"), nSamples = 15, blur = this.blur * .06 * .5;
                    ctx1.putImageData(options.imageData, 0, 0);
                    ctx2.clearRect(0, 0, width, height);
                    for (i = -nSamples; i <= nSamples; i++) {
                        random = (Math.random() - .5) / 4;
                        percent = i / nSamples;
                        j = blur * percent * width + random;
                        ctx2.globalAlpha = 1 - Math.abs(percent);
                        ctx2.drawImage(canvas1, j, random);
                        ctx1.drawImage(canvas2, 0, 0);
                        ctx2.globalAlpha = 1;
                        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                    }
                    for (i = -nSamples; i <= nSamples; i++) {
                        random = (Math.random() - .5) / 4;
                        percent = i / nSamples;
                        j = blur * percent * height + random;
                        ctx2.globalAlpha = 1 - Math.abs(percent);
                        ctx2.drawImage(canvas1, random, j);
                        ctx1.drawImage(canvas2, 0, 0);
                        ctx2.globalAlpha = 1;
                        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                    }
                    options.ctx.drawImage(canvas1, 0, 0);
                    var newImageData = options.ctx.getImageData(0, 0, canvas1.width, canvas1.height);
                    ctx1.globalAlpha = 1;
                    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                    return newImageData;
                },
                getUniformLocations: function(gl, program) {
                    return {
                        delta: gl.getUniformLocation(program, "uDelta")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    var delta = this.chooseRightDelta();
                    gl.uniform2fv(uniformLocations.delta, delta);
                },
                chooseRightDelta: function() {
                    var blur, blurScale = 1, delta = [ 0, 0 ];
                    if (this.horizontal) {
                        if (this.aspectRatio > 1) blurScale = 1 / this.aspectRatio;
                    } else if (this.aspectRatio < 1) blurScale = this.aspectRatio;
                    blur = blurScale * this.blur * .12;
                    if (this.horizontal) delta[0] = blur; else delta[1] = blur;
                    return delta;
                }
            });
            filters.Blur.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Gamma = createClass(filters.BaseFilter, {
                type: "Gamma",
                fragmentSource: "precision highp float;\n" + "uniform sampler2D uTexture;\n" + "uniform vec3 uGamma;\n" + "varying vec2 vTexCoord;\n" + "void main() {\n" + "vec4 color = texture2D(uTexture, vTexCoord);\n" + "vec3 correction = (1.0 / uGamma);\n" + "color.r = pow(color.r, correction.r);\n" + "color.g = pow(color.g, correction.g);\n" + "color.b = pow(color.b, correction.b);\n" + "gl_FragColor = color;\n" + "gl_FragColor.rgb *= color.a;\n" + "}",
                gamma: [ 1, 1, 1 ],
                mainParameter: "gamma",
                initialize: function(options) {
                    this.gamma = [ 1, 1, 1 ];
                    filters.BaseFilter.prototype.initialize.call(this, options);
                },
                applyTo2d: function(options) {
                    var i, imageData = options.imageData, data = imageData.data, gamma = this.gamma, len = data.length, rInv = 1 / gamma[0], gInv = 1 / gamma[1], bInv = 1 / gamma[2];
                    if (!this.rVals) {
                        this.rVals = new Uint8Array(256);
                        this.gVals = new Uint8Array(256);
                        this.bVals = new Uint8Array(256);
                    }
                    for (i = 0, len = 256; i < len; i++) {
                        this.rVals[i] = Math.pow(i / 255, rInv) * 255;
                        this.gVals[i] = Math.pow(i / 255, gInv) * 255;
                        this.bVals[i] = Math.pow(i / 255, bInv) * 255;
                    }
                    for (i = 0, len = data.length; i < len; i += 4) {
                        data[i] = this.rVals[data[i]];
                        data[i + 1] = this.gVals[data[i + 1]];
                        data[i + 2] = this.bVals[data[i + 2]];
                    }
                },
                getUniformLocations: function(gl, program) {
                    return {
                        uGamma: gl.getUniformLocation(program, "uGamma")
                    };
                },
                sendUniformData: function(gl, uniformLocations) {
                    gl.uniform3fv(uniformLocations.uGamma, this.gamma);
                }
            });
            fabric.Image.filters.Gamma.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.Composed = createClass(filters.BaseFilter, {
                type: "Composed",
                subFilters: [],
                initialize: function(options) {
                    this.callSuper("initialize", options);
                    this.subFilters = this.subFilters.slice(0);
                },
                applyTo: function(options) {
                    options.passes += this.subFilters.length - 1;
                    this.subFilters.forEach((function(filter) {
                        filter.applyTo(options);
                    }));
                },
                toObject: function() {
                    return fabric.util.object.extend(this.callSuper("toObject"), {
                        subFilters: this.subFilters.map((function(filter) {
                            return filter.toObject();
                        }))
                    });
                },
                isNeutralState: function() {
                    return !this.subFilters.some((function(filter) {
                        return !filter.isNeutralState();
                    }));
                }
            });
            fabric.Image.filters.Composed.fromObject = function(object, callback) {
                var filters = object.subFilters || [], subFilters = filters.map((function(filter) {
                    return new fabric.Image.filters[filter.type](filter);
                })), instance = new fabric.Image.filters.Composed({
                    subFilters
                });
                callback && callback(instance);
                return instance;
            };
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), filters = fabric.Image.filters, createClass = fabric.util.createClass;
            filters.HueRotation = createClass(filters.ColorMatrix, {
                type: "HueRotation",
                rotation: 0,
                mainParameter: "rotation",
                calculateMatrix: function() {
                    var rad = this.rotation * Math.PI, cos = fabric.util.cos(rad), sin = fabric.util.sin(rad), aThird = 1 / 3, aThirdSqtSin = Math.sqrt(aThird) * sin, OneMinusCos = 1 - cos;
                    this.matrix = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ];
                    this.matrix[0] = cos + OneMinusCos / 3;
                    this.matrix[1] = aThird * OneMinusCos - aThirdSqtSin;
                    this.matrix[2] = aThird * OneMinusCos + aThirdSqtSin;
                    this.matrix[5] = aThird * OneMinusCos + aThirdSqtSin;
                    this.matrix[6] = cos + aThird * OneMinusCos;
                    this.matrix[7] = aThird * OneMinusCos - aThirdSqtSin;
                    this.matrix[10] = aThird * OneMinusCos - aThirdSqtSin;
                    this.matrix[11] = aThird * OneMinusCos + aThirdSqtSin;
                    this.matrix[12] = cos + aThird * OneMinusCos;
                },
                isNeutralState: function(options) {
                    this.calculateMatrix();
                    return filters.BaseFilter.prototype.isNeutralState.call(this, options);
                },
                applyTo: function(options) {
                    this.calculateMatrix();
                    filters.BaseFilter.prototype.applyTo.call(this, options);
                }
            });
            fabric.Image.filters.HueRotation.fromObject = fabric.Image.filters.BaseFilter.fromObject;
        })(true ? exports : 0);
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {}), clone = fabric.util.object.clone;
            if (fabric.Text) {
                fabric.warn("fabric.Text is already defined");
                return;
            }
            var additionalProps = ("fontFamily fontWeight fontSize text underline overline linethrough" + " textAlign fontStyle lineHeight textBackgroundColor charSpacing styles" + " direction path pathStartOffset pathSide").split(" ");
            fabric.Text = fabric.util.createClass(fabric.Object, {
                _dimensionAffectingProps: [ "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide" ],
                _reNewline: /\r?\n/,
                _reSpacesAndTabs: /[ \t\r]/g,
                _reSpaceAndTab: /[ \t\r]/,
                _reWords: /\S+/g,
                type: "text",
                fontSize: 40,
                fontWeight: "normal",
                fontFamily: "Times New Roman",
                underline: false,
                overline: false,
                linethrough: false,
                textAlign: "left",
                fontStyle: "normal",
                lineHeight: 1.16,
                superscript: {
                    size: .6,
                    baseline: -.35
                },
                subscript: {
                    size: .6,
                    baseline: .11
                },
                textBackgroundColor: "",
                stateProperties: fabric.Object.prototype.stateProperties.concat(additionalProps),
                cacheProperties: fabric.Object.prototype.cacheProperties.concat(additionalProps),
                stroke: null,
                shadow: null,
                path: null,
                pathStartOffset: 0,
                pathSide: "left",
                _fontSizeFraction: .222,
                offsets: {
                    underline: .1,
                    linethrough: -.315,
                    overline: -.88
                },
                _fontSizeMult: 1.13,
                charSpacing: 0,
                styles: null,
                _measuringContext: null,
                deltaY: 0,
                direction: "ltr",
                _styleProperties: [ "stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor" ],
                __charBounds: [],
                CACHE_FONT_SIZE: 400,
                MIN_TEXT_WIDTH: 2,
                initialize: function(text, options) {
                    this.styles = options ? options.styles || {} : {};
                    this.text = text;
                    this.__skipDimension = true;
                    this.callSuper("initialize", options);
                    if (this.path) this.setPathInfo();
                    this.__skipDimension = false;
                    this.initDimensions();
                    this.setCoords();
                    this.setupState({
                        propertySet: "_dimensionAffectingProps"
                    });
                },
                setPathInfo: function() {
                    var path = this.path;
                    if (path) path.segmentsInfo = fabric.util.getPathSegmentsInfo(path.path);
                },
                getMeasuringContext: function() {
                    if (!fabric._measuringContext) fabric._measuringContext = this.canvas && this.canvas.contextCache || fabric.util.createCanvasElement().getContext("2d");
                    return fabric._measuringContext;
                },
                _splitText: function() {
                    var newLines = this._splitTextIntoLines(this.text);
                    this.textLines = newLines.lines;
                    this._textLines = newLines.graphemeLines;
                    this._unwrappedTextLines = newLines._unwrappedLines;
                    this._text = newLines.graphemeText;
                    return newLines;
                },
                initDimensions: function() {
                    if (this.__skipDimension) return;
                    this._splitText();
                    this._clearCache();
                    if (this.path) {
                        this.width = this.path.width;
                        this.height = this.path.height;
                    } else {
                        this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH;
                        this.height = this.calcTextHeight();
                    }
                    if (this.textAlign.indexOf("justify") !== -1) this.enlargeSpaces();
                    this.saveState({
                        propertySet: "_dimensionAffectingProps"
                    });
                },
                enlargeSpaces: function() {
                    var diffSpace, currentLineWidth, numberOfSpaces, accumulatedSpace, line, charBound, spaces;
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        if (this.textAlign !== "justify" && (i === len - 1 || this.isEndOfWrapping(i))) continue;
                        accumulatedSpace = 0;
                        line = this._textLines[i];
                        currentLineWidth = this.getLineWidth(i);
                        if (currentLineWidth < this.width && (spaces = this.textLines[i].match(this._reSpacesAndTabs))) {
                            numberOfSpaces = spaces.length;
                            diffSpace = (this.width - currentLineWidth) / numberOfSpaces;
                            for (var j = 0, jlen = line.length; j <= jlen; j++) {
                                charBound = this.__charBounds[i][j];
                                if (this._reSpaceAndTab.test(line[j])) {
                                    charBound.width += diffSpace;
                                    charBound.kernedWidth += diffSpace;
                                    charBound.left += accumulatedSpace;
                                    accumulatedSpace += diffSpace;
                                } else charBound.left += accumulatedSpace;
                            }
                        }
                    }
                },
                isEndOfWrapping: function(lineIndex) {
                    return lineIndex === this._textLines.length - 1;
                },
                missingNewlineOffset: function() {
                    return 1;
                },
                toString: function() {
                    return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
                },
                _getCacheCanvasDimensions: function() {
                    var dims = this.callSuper("_getCacheCanvasDimensions");
                    var fontSize = this.fontSize;
                    dims.width += fontSize * dims.zoomX;
                    dims.height += fontSize * dims.zoomY;
                    return dims;
                },
                _render: function(ctx) {
                    var path = this.path;
                    path && !path.isNotVisible() && path._render(ctx);
                    this._setTextStyles(ctx);
                    this._renderTextLinesBackground(ctx);
                    this._renderTextDecoration(ctx, "underline");
                    this._renderText(ctx);
                    this._renderTextDecoration(ctx, "overline");
                    this._renderTextDecoration(ctx, "linethrough");
                },
                _renderText: function(ctx) {
                    if (this.paintFirst === "stroke") {
                        this._renderTextStroke(ctx);
                        this._renderTextFill(ctx);
                    } else {
                        this._renderTextFill(ctx);
                        this._renderTextStroke(ctx);
                    }
                },
                _setTextStyles: function(ctx, charStyle, forMeasuring) {
                    ctx.textBaseline = "alphabetic";
                    ctx.font = this._getFontDeclaration(charStyle, forMeasuring);
                },
                calcTextWidth: function() {
                    var maxWidth = this.getLineWidth(0);
                    for (var i = 1, len = this._textLines.length; i < len; i++) {
                        var currentLineWidth = this.getLineWidth(i);
                        if (currentLineWidth > maxWidth) maxWidth = currentLineWidth;
                    }
                    return maxWidth;
                },
                _renderTextLine: function(method, ctx, line, left, top, lineIndex) {
                    this._renderChars(method, ctx, line, left, top, lineIndex);
                },
                _renderTextLinesBackground: function(ctx) {
                    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
                    var heightOfLine, lineLeftOffset, line, lastColor, charBox, currentColor, drawStart, originalFill = ctx.fillStyle, leftOffset = this._getLeftOffset(), lineTopOffset = this._getTopOffset(), boxStart = 0, boxWidth = 0, path = this.path;
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        heightOfLine = this.getHeightOfLine(i);
                        if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", i)) {
                            lineTopOffset += heightOfLine;
                            continue;
                        }
                        line = this._textLines[i];
                        lineLeftOffset = this._getLineLeftOffset(i);
                        boxWidth = 0;
                        boxStart = 0;
                        lastColor = this.getValueOfPropertyAt(i, 0, "textBackgroundColor");
                        for (var j = 0, jlen = line.length; j < jlen; j++) {
                            charBox = this.__charBounds[i][j];
                            currentColor = this.getValueOfPropertyAt(i, j, "textBackgroundColor");
                            if (path) {
                                ctx.save();
                                ctx.translate(charBox.renderLeft, charBox.renderTop);
                                ctx.rotate(charBox.angle);
                                ctx.fillStyle = currentColor;
                                currentColor && ctx.fillRect(-charBox.width / 2, -heightOfLine / this.lineHeight * (1 - this._fontSizeFraction), charBox.width, heightOfLine / this.lineHeight);
                                ctx.restore();
                            } else if (currentColor !== lastColor) {
                                drawStart = leftOffset + lineLeftOffset + boxStart;
                                if (this.direction === "rtl") drawStart = this.width - drawStart - boxWidth;
                                ctx.fillStyle = lastColor;
                                lastColor && ctx.fillRect(drawStart, lineTopOffset, boxWidth, heightOfLine / this.lineHeight);
                                boxStart = charBox.left;
                                boxWidth = charBox.width;
                                lastColor = currentColor;
                            } else boxWidth += charBox.kernedWidth;
                        }
                        if (currentColor && !path) {
                            drawStart = leftOffset + lineLeftOffset + boxStart;
                            if (this.direction === "rtl") drawStart = this.width - drawStart - boxWidth;
                            ctx.fillStyle = currentColor;
                            ctx.fillRect(drawStart, lineTopOffset, boxWidth, heightOfLine / this.lineHeight);
                        }
                        lineTopOffset += heightOfLine;
                    }
                    ctx.fillStyle = originalFill;
                    this._removeShadow(ctx);
                },
                getFontCache: function(decl) {
                    var fontFamily = decl.fontFamily.toLowerCase();
                    if (!fabric.charWidthsCache[fontFamily]) fabric.charWidthsCache[fontFamily] = {};
                    var cache = fabric.charWidthsCache[fontFamily], cacheProp = decl.fontStyle.toLowerCase() + "_" + (decl.fontWeight + "").toLowerCase();
                    if (!cache[cacheProp]) cache[cacheProp] = {};
                    return cache[cacheProp];
                },
                _measureChar: function(_char, charStyle, previousChar, prevCharStyle) {
                    var width, coupleWidth, previousWidth, kernedWidth, fontCache = this.getFontCache(charStyle), fontDeclaration = this._getFontDeclaration(charStyle), previousFontDeclaration = this._getFontDeclaration(prevCharStyle), couple = previousChar + _char, stylesAreEqual = fontDeclaration === previousFontDeclaration, fontMultiplier = charStyle.fontSize / this.CACHE_FONT_SIZE;
                    if (previousChar && fontCache[previousChar] !== void 0) previousWidth = fontCache[previousChar];
                    if (fontCache[_char] !== void 0) kernedWidth = width = fontCache[_char];
                    if (stylesAreEqual && fontCache[couple] !== void 0) {
                        coupleWidth = fontCache[couple];
                        kernedWidth = coupleWidth - previousWidth;
                    }
                    if (width === void 0 || previousWidth === void 0 || coupleWidth === void 0) {
                        var ctx = this.getMeasuringContext();
                        this._setTextStyles(ctx, charStyle, true);
                    }
                    if (width === void 0) {
                        kernedWidth = width = ctx.measureText(_char).width;
                        fontCache[_char] = width;
                    }
                    if (previousWidth === void 0 && stylesAreEqual && previousChar) {
                        previousWidth = ctx.measureText(previousChar).width;
                        fontCache[previousChar] = previousWidth;
                    }
                    if (stylesAreEqual && coupleWidth === void 0) {
                        coupleWidth = ctx.measureText(couple).width;
                        fontCache[couple] = coupleWidth;
                        kernedWidth = coupleWidth - previousWidth;
                    }
                    return {
                        width: width * fontMultiplier,
                        kernedWidth: kernedWidth * fontMultiplier
                    };
                },
                getHeightOfChar: function(line, _char) {
                    return this.getValueOfPropertyAt(line, _char, "fontSize");
                },
                measureLine: function(lineIndex) {
                    var lineInfo = this._measureLine(lineIndex);
                    if (this.charSpacing !== 0) lineInfo.width -= this._getWidthOfCharSpacing();
                    if (lineInfo.width < 0) lineInfo.width = 0;
                    return lineInfo;
                },
                _measureLine: function(lineIndex) {
                    var i, grapheme, prevGrapheme, graphemeInfo, startingPoint, totalPathLength, width = 0, line = this._textLines[lineIndex], numOfSpaces = 0, lineBounds = new Array(line.length), positionInPath = 0, path = this.path, reverse = this.pathSide === "right";
                    this.__charBounds[lineIndex] = lineBounds;
                    for (i = 0; i < line.length; i++) {
                        grapheme = line[i];
                        graphemeInfo = this._getGraphemeBox(grapheme, lineIndex, i, prevGrapheme);
                        lineBounds[i] = graphemeInfo;
                        width += graphemeInfo.kernedWidth;
                        prevGrapheme = grapheme;
                    }
                    lineBounds[i] = {
                        left: graphemeInfo ? graphemeInfo.left + graphemeInfo.width : 0,
                        width: 0,
                        kernedWidth: 0,
                        height: this.fontSize
                    };
                    if (path) {
                        totalPathLength = path.segmentsInfo[path.segmentsInfo.length - 1].length;
                        startingPoint = fabric.util.getPointOnPath(path.path, 0, path.segmentsInfo);
                        startingPoint.x += path.pathOffset.x;
                        startingPoint.y += path.pathOffset.y;
                        switch (this.textAlign) {
                          case "left":
                            positionInPath = reverse ? totalPathLength - width : 0;
                            break;

                          case "center":
                            positionInPath = (totalPathLength - width) / 2;
                            break;

                          case "right":
                            positionInPath = reverse ? 0 : totalPathLength - width;
                            break;
                        }
                        positionInPath += this.pathStartOffset * (reverse ? -1 : 1);
                        for (i = reverse ? line.length - 1 : 0; reverse ? i >= 0 : i < line.length; reverse ? i-- : i++) {
                            graphemeInfo = lineBounds[i];
                            if (positionInPath > totalPathLength) positionInPath %= totalPathLength; else if (positionInPath < 0) positionInPath += totalPathLength;
                            this._setGraphemeOnPath(positionInPath, graphemeInfo, startingPoint);
                            positionInPath += graphemeInfo.kernedWidth;
                        }
                    }
                    return {
                        width,
                        numOfSpaces
                    };
                },
                _setGraphemeOnPath: function(positionInPath, graphemeInfo, startingPoint) {
                    var centerPosition = positionInPath + graphemeInfo.kernedWidth / 2, path = this.path;
                    var info = fabric.util.getPointOnPath(path.path, centerPosition, path.segmentsInfo);
                    graphemeInfo.renderLeft = info.x - startingPoint.x;
                    graphemeInfo.renderTop = info.y - startingPoint.y;
                    graphemeInfo.angle = info.angle + (this.pathSide === "right" ? Math.PI : 0);
                },
                _getGraphemeBox: function(grapheme, lineIndex, charIndex, prevGrapheme, skipLeft) {
                    var charSpacing, style = this.getCompleteStyleDeclaration(lineIndex, charIndex), prevStyle = prevGrapheme ? this.getCompleteStyleDeclaration(lineIndex, charIndex - 1) : {}, info = this._measureChar(grapheme, style, prevGrapheme, prevStyle), kernedWidth = info.kernedWidth, width = info.width;
                    if (this.charSpacing !== 0) {
                        charSpacing = this._getWidthOfCharSpacing();
                        width += charSpacing;
                        kernedWidth += charSpacing;
                    }
                    var box = {
                        width,
                        left: 0,
                        height: style.fontSize,
                        kernedWidth,
                        deltaY: style.deltaY
                    };
                    if (charIndex > 0 && !skipLeft) {
                        var previousBox = this.__charBounds[lineIndex][charIndex - 1];
                        box.left = previousBox.left + previousBox.width + info.kernedWidth - info.width;
                    }
                    return box;
                },
                getHeightOfLine: function(lineIndex) {
                    if (this.__lineHeights[lineIndex]) return this.__lineHeights[lineIndex];
                    var line = this._textLines[lineIndex], maxHeight = this.getHeightOfChar(lineIndex, 0);
                    for (var i = 1, len = line.length; i < len; i++) maxHeight = Math.max(this.getHeightOfChar(lineIndex, i), maxHeight);
                    return this.__lineHeights[lineIndex] = maxHeight * this.lineHeight * this._fontSizeMult;
                },
                calcTextHeight: function() {
                    var lineHeight, height = 0;
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        lineHeight = this.getHeightOfLine(i);
                        height += i === len - 1 ? lineHeight / this.lineHeight : lineHeight;
                    }
                    return height;
                },
                _getLeftOffset: function() {
                    return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
                },
                _getTopOffset: function() {
                    return -this.height / 2;
                },
                _renderTextCommon: function(ctx, method) {
                    ctx.save();
                    var lineHeights = 0, left = this._getLeftOffset(), top = this._getTopOffset();
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        var heightOfLine = this.getHeightOfLine(i), maxHeight = heightOfLine / this.lineHeight, leftOffset = this._getLineLeftOffset(i);
                        this._renderTextLine(method, ctx, this._textLines[i], left + leftOffset, top + lineHeights + maxHeight, i);
                        lineHeights += heightOfLine;
                    }
                    ctx.restore();
                },
                _renderTextFill: function(ctx) {
                    if (!this.fill && !this.styleHas("fill")) return;
                    this._renderTextCommon(ctx, "fillText");
                },
                _renderTextStroke: function(ctx) {
                    if ((!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles()) return;
                    if (this.shadow && !this.shadow.affectStroke) this._removeShadow(ctx);
                    ctx.save();
                    this._setLineDash(ctx, this.strokeDashArray);
                    ctx.beginPath();
                    this._renderTextCommon(ctx, "strokeText");
                    ctx.closePath();
                    ctx.restore();
                },
                _renderChars: function(method, ctx, line, left, top, lineIndex) {
                    var actualStyle, nextStyle, charBox, timeToRender, drawingLeft, lineHeight = this.getHeightOfLine(lineIndex), isJustify = this.textAlign.indexOf("justify") !== -1, charsToRender = "", boxWidth = 0, path = this.path, shortCut = !isJustify && this.charSpacing === 0 && this.isEmptyStyles(lineIndex) && !path, isLtr = this.direction === "ltr", sign = this.direction === "ltr" ? 1 : -1;
                    ctx.save();
                    top -= lineHeight * this._fontSizeFraction / this.lineHeight;
                    if (shortCut) {
                        ctx.canvas.setAttribute("dir", isLtr ? "ltr" : "rtl");
                        ctx.direction = isLtr ? "ltr" : "rtl";
                        ctx.textAlign = isLtr ? "left" : "right";
                        this._renderChar(method, ctx, lineIndex, 0, line.join(""), left, top, lineHeight);
                        ctx.restore();
                        return;
                    }
                    for (var i = 0, len = line.length - 1; i <= len; i++) {
                        timeToRender = i === len || this.charSpacing || path;
                        charsToRender += line[i];
                        charBox = this.__charBounds[lineIndex][i];
                        if (boxWidth === 0) {
                            left += sign * (charBox.kernedWidth - charBox.width);
                            boxWidth += charBox.width;
                        } else boxWidth += charBox.kernedWidth;
                        if (isJustify && !timeToRender) if (this._reSpaceAndTab.test(line[i])) timeToRender = true;
                        if (!timeToRender) {
                            actualStyle = actualStyle || this.getCompleteStyleDeclaration(lineIndex, i);
                            nextStyle = this.getCompleteStyleDeclaration(lineIndex, i + 1);
                            timeToRender = this._hasStyleChanged(actualStyle, nextStyle);
                        }
                        if (timeToRender) {
                            if (path) {
                                ctx.save();
                                ctx.translate(charBox.renderLeft, charBox.renderTop);
                                ctx.rotate(charBox.angle);
                                this._renderChar(method, ctx, lineIndex, i, charsToRender, -boxWidth / 2, 0, lineHeight);
                                ctx.restore();
                            } else {
                                drawingLeft = left;
                                ctx.canvas.setAttribute("dir", isLtr ? "ltr" : "rtl");
                                ctx.direction = isLtr ? "ltr" : "rtl";
                                ctx.textAlign = isLtr ? "left" : "right";
                                this._renderChar(method, ctx, lineIndex, i, charsToRender, drawingLeft, top, lineHeight);
                            }
                            charsToRender = "";
                            actualStyle = nextStyle;
                            left += sign * boxWidth;
                            boxWidth = 0;
                        }
                    }
                    ctx.restore();
                },
                _applyPatternGradientTransformText: function(filler) {
                    var pCtx, pCanvas = fabric.util.createCanvasElement(), width = this.width + this.strokeWidth, height = this.height + this.strokeWidth;
                    pCanvas.width = width;
                    pCanvas.height = height;
                    pCtx = pCanvas.getContext("2d");
                    pCtx.beginPath();
                    pCtx.moveTo(0, 0);
                    pCtx.lineTo(width, 0);
                    pCtx.lineTo(width, height);
                    pCtx.lineTo(0, height);
                    pCtx.closePath();
                    pCtx.translate(width / 2, height / 2);
                    pCtx.fillStyle = filler.toLive(pCtx);
                    this._applyPatternGradientTransform(pCtx, filler);
                    pCtx.fill();
                    return pCtx.createPattern(pCanvas, "no-repeat");
                },
                handleFiller: function(ctx, property, filler) {
                    var offsetX, offsetY;
                    if (filler.toLive) if (filler.gradientUnits === "percentage" || filler.gradientTransform || filler.patternTransform) {
                        offsetX = -this.width / 2;
                        offsetY = -this.height / 2;
                        ctx.translate(offsetX, offsetY);
                        ctx[property] = this._applyPatternGradientTransformText(filler);
                        return {
                            offsetX,
                            offsetY
                        };
                    } else {
                        ctx[property] = filler.toLive(ctx, this);
                        return this._applyPatternGradientTransform(ctx, filler);
                    } else ctx[property] = filler;
                    return {
                        offsetX: 0,
                        offsetY: 0
                    };
                },
                _setStrokeStyles: function(ctx, decl) {
                    ctx.lineWidth = decl.strokeWidth;
                    ctx.lineCap = this.strokeLineCap;
                    ctx.lineDashOffset = this.strokeDashOffset;
                    ctx.lineJoin = this.strokeLineJoin;
                    ctx.miterLimit = this.strokeMiterLimit;
                    return this.handleFiller(ctx, "strokeStyle", decl.stroke);
                },
                _setFillStyles: function(ctx, decl) {
                    return this.handleFiller(ctx, "fillStyle", decl.fill);
                },
                _renderChar: function(method, ctx, lineIndex, charIndex, _char, left, top) {
                    var fillOffsets, strokeOffsets, decl = this._getStyleDeclaration(lineIndex, charIndex), fullDecl = this.getCompleteStyleDeclaration(lineIndex, charIndex), shouldFill = method === "fillText" && fullDecl.fill, shouldStroke = method === "strokeText" && fullDecl.stroke && fullDecl.strokeWidth;
                    if (!shouldStroke && !shouldFill) return;
                    ctx.save();
                    shouldFill && (fillOffsets = this._setFillStyles(ctx, fullDecl));
                    shouldStroke && (strokeOffsets = this._setStrokeStyles(ctx, fullDecl));
                    ctx.font = this._getFontDeclaration(fullDecl);
                    if (decl && decl.textBackgroundColor) this._removeShadow(ctx);
                    if (decl && decl.deltaY) top += decl.deltaY;
                    shouldFill && ctx.fillText(_char, left - fillOffsets.offsetX, top - fillOffsets.offsetY);
                    shouldStroke && ctx.strokeText(_char, left - strokeOffsets.offsetX, top - strokeOffsets.offsetY);
                    ctx.restore();
                },
                setSuperscript: function(start, end) {
                    return this._setScript(start, end, this.superscript);
                },
                setSubscript: function(start, end) {
                    return this._setScript(start, end, this.subscript);
                },
                _setScript: function(start, end, schema) {
                    var loc = this.get2DCursorLocation(start, true), fontSize = this.getValueOfPropertyAt(loc.lineIndex, loc.charIndex, "fontSize"), dy = this.getValueOfPropertyAt(loc.lineIndex, loc.charIndex, "deltaY"), style = {
                        fontSize: fontSize * schema.size,
                        deltaY: dy + fontSize * schema.baseline
                    };
                    this.setSelectionStyles(style, start, end);
                    return this;
                },
                _hasStyleChanged: function(prevStyle, thisStyle) {
                    return prevStyle.fill !== thisStyle.fill || prevStyle.stroke !== thisStyle.stroke || prevStyle.strokeWidth !== thisStyle.strokeWidth || prevStyle.fontSize !== thisStyle.fontSize || prevStyle.fontFamily !== thisStyle.fontFamily || prevStyle.fontWeight !== thisStyle.fontWeight || prevStyle.fontStyle !== thisStyle.fontStyle || prevStyle.deltaY !== thisStyle.deltaY;
                },
                _hasStyleChangedForSvg: function(prevStyle, thisStyle) {
                    return this._hasStyleChanged(prevStyle, thisStyle) || prevStyle.overline !== thisStyle.overline || prevStyle.underline !== thisStyle.underline || prevStyle.linethrough !== thisStyle.linethrough;
                },
                _getLineLeftOffset: function(lineIndex) {
                    var lineWidth = this.getLineWidth(lineIndex), lineDiff = this.width - lineWidth, textAlign = this.textAlign, direction = this.direction, leftOffset = 0, isEndOfWrapping = this.isEndOfWrapping(lineIndex);
                    if (textAlign === "justify" || textAlign === "justify-center" && !isEndOfWrapping || textAlign === "justify-right" && !isEndOfWrapping || textAlign === "justify-left" && !isEndOfWrapping) return 0;
                    if (textAlign === "center") leftOffset = lineDiff / 2;
                    if (textAlign === "right") leftOffset = lineDiff;
                    if (textAlign === "justify-center") leftOffset = lineDiff / 2;
                    if (textAlign === "justify-right") leftOffset = lineDiff;
                    if (direction === "rtl") leftOffset -= lineDiff;
                    return leftOffset;
                },
                _clearCache: function() {
                    this.__lineWidths = [];
                    this.__lineHeights = [];
                    this.__charBounds = [];
                },
                _shouldClearDimensionCache: function() {
                    var shouldClear = this._forceClearCache;
                    shouldClear || (shouldClear = this.hasStateChanged("_dimensionAffectingProps"));
                    if (shouldClear) {
                        this.dirty = true;
                        this._forceClearCache = false;
                    }
                    return shouldClear;
                },
                getLineWidth: function(lineIndex) {
                    if (this.__lineWidths[lineIndex]) return this.__lineWidths[lineIndex];
                    var width, lineInfo, line = this._textLines[lineIndex];
                    if (line === "") width = 0; else {
                        lineInfo = this.measureLine(lineIndex);
                        width = lineInfo.width;
                    }
                    this.__lineWidths[lineIndex] = width;
                    return width;
                },
                _getWidthOfCharSpacing: function() {
                    if (this.charSpacing !== 0) return this.fontSize * this.charSpacing / 1e3;
                    return 0;
                },
                getValueOfPropertyAt: function(lineIndex, charIndex, property) {
                    var charStyle = this._getStyleDeclaration(lineIndex, charIndex);
                    if (charStyle && typeof charStyle[property] !== "undefined") return charStyle[property];
                    return this[property];
                },
                _renderTextDecoration: function(ctx, type) {
                    if (!this[type] && !this.styleHas(type)) return;
                    var heightOfLine, size, _size, lineLeftOffset, dy, _dy, line, lastDecoration, top, boxStart, boxWidth, charBox, currentDecoration, maxHeight, currentFill, lastFill, leftOffset = this._getLeftOffset(), topOffset = this._getTopOffset(), path = this.path, charSpacing = this._getWidthOfCharSpacing(), offsetY = this.offsets[type];
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        heightOfLine = this.getHeightOfLine(i);
                        if (!this[type] && !this.styleHas(type, i)) {
                            topOffset += heightOfLine;
                            continue;
                        }
                        line = this._textLines[i];
                        maxHeight = heightOfLine / this.lineHeight;
                        lineLeftOffset = this._getLineLeftOffset(i);
                        boxStart = 0;
                        boxWidth = 0;
                        lastDecoration = this.getValueOfPropertyAt(i, 0, type);
                        lastFill = this.getValueOfPropertyAt(i, 0, "fill");
                        top = topOffset + maxHeight * (1 - this._fontSizeFraction);
                        size = this.getHeightOfChar(i, 0);
                        dy = this.getValueOfPropertyAt(i, 0, "deltaY");
                        for (var j = 0, jlen = line.length; j < jlen; j++) {
                            charBox = this.__charBounds[i][j];
                            currentDecoration = this.getValueOfPropertyAt(i, j, type);
                            currentFill = this.getValueOfPropertyAt(i, j, "fill");
                            _size = this.getHeightOfChar(i, j);
                            _dy = this.getValueOfPropertyAt(i, j, "deltaY");
                            if (path && currentDecoration && currentFill) {
                                ctx.save();
                                ctx.fillStyle = lastFill;
                                ctx.translate(charBox.renderLeft, charBox.renderTop);
                                ctx.rotate(charBox.angle);
                                ctx.fillRect(-charBox.kernedWidth / 2, offsetY * _size + _dy, charBox.kernedWidth, this.fontSize / 15);
                                ctx.restore();
                            } else if ((currentDecoration !== lastDecoration || currentFill !== lastFill || _size !== size || _dy !== dy) && boxWidth > 0) {
                                var drawStart = leftOffset + lineLeftOffset + boxStart;
                                if (this.direction === "rtl") drawStart = this.width - drawStart - boxWidth;
                                if (lastDecoration && lastFill) {
                                    ctx.fillStyle = lastFill;
                                    ctx.fillRect(drawStart, top + offsetY * size + dy, boxWidth, this.fontSize / 15);
                                }
                                boxStart = charBox.left;
                                boxWidth = charBox.width;
                                lastDecoration = currentDecoration;
                                lastFill = currentFill;
                                size = _size;
                                dy = _dy;
                            } else boxWidth += charBox.kernedWidth;
                        }
                        drawStart = leftOffset + lineLeftOffset + boxStart;
                        if (this.direction === "rtl") drawStart = this.width - drawStart - boxWidth;
                        ctx.fillStyle = currentFill;
                        currentDecoration && currentFill && ctx.fillRect(drawStart, top + offsetY * size + dy, boxWidth - charSpacing, this.fontSize / 15);
                        topOffset += heightOfLine;
                    }
                    this._removeShadow(ctx);
                },
                _getFontDeclaration: function(styleObject, forMeasuring) {
                    var style = styleObject || this, family = this.fontFamily, fontIsGeneric = fabric.Text.genericFonts.indexOf(family.toLowerCase()) > -1;
                    var fontFamily = family === void 0 || family.indexOf("'") > -1 || family.indexOf(",") > -1 || family.indexOf('"') > -1 || fontIsGeneric ? style.fontFamily : '"' + style.fontFamily + '"';
                    return [ fabric.isLikelyNode ? style.fontWeight : style.fontStyle, fabric.isLikelyNode ? style.fontStyle : style.fontWeight, forMeasuring ? this.CACHE_FONT_SIZE + "px" : style.fontSize + "px", fontFamily ].join(" ");
                },
                render: function(ctx) {
                    if (!this.visible) return;
                    if (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) return;
                    if (this._shouldClearDimensionCache()) this.initDimensions();
                    this.callSuper("render", ctx);
                },
                _splitTextIntoLines: function(text) {
                    var lines = text.split(this._reNewline), newLines = new Array(lines.length), newLine = [ "\n" ], newText = [];
                    for (var i = 0; i < lines.length; i++) {
                        newLines[i] = fabric.util.string.graphemeSplit(lines[i]);
                        newText = newText.concat(newLines[i], newLine);
                    }
                    newText.pop();
                    return {
                        _unwrappedLines: newLines,
                        lines,
                        graphemeText: newText,
                        graphemeLines: newLines
                    };
                },
                toObject: function(propertiesToInclude) {
                    var allProperties = additionalProps.concat(propertiesToInclude);
                    var obj = this.callSuper("toObject", allProperties);
                    obj.styles = clone(this.styles, true);
                    if (obj.path) obj.path = this.path.toObject();
                    return obj;
                },
                set: function(key, value) {
                    this.callSuper("set", key, value);
                    var needsDims = false;
                    var isAddingPath = false;
                    if (typeof key === "object") for (var _key in key) {
                        if (_key === "path") this.setPathInfo();
                        needsDims = needsDims || this._dimensionAffectingProps.indexOf(_key) !== -1;
                        isAddingPath = isAddingPath || _key === "path";
                    } else {
                        needsDims = this._dimensionAffectingProps.indexOf(key) !== -1;
                        isAddingPath = key === "path";
                    }
                    if (isAddingPath) this.setPathInfo();
                    if (needsDims) {
                        this.initDimensions();
                        this.setCoords();
                    }
                    return this;
                },
                complexity: function() {
                    return 1;
                }
            });
            fabric.Text.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" "));
            fabric.Text.DEFAULT_SVG_FONT_SIZE = 16;
            fabric.Text.fromElement = function(element, callback, options) {
                if (!element) return callback(null);
                var parsedAttributes = fabric.parseAttributes(element, fabric.Text.ATTRIBUTE_NAMES), parsedAnchor = parsedAttributes.textAnchor || "left";
                options = fabric.util.object.extend(options ? clone(options) : {}, parsedAttributes);
                options.top = options.top || 0;
                options.left = options.left || 0;
                if (parsedAttributes.textDecoration) {
                    var textDecoration = parsedAttributes.textDecoration;
                    if (textDecoration.indexOf("underline") !== -1) options.underline = true;
                    if (textDecoration.indexOf("overline") !== -1) options.overline = true;
                    if (textDecoration.indexOf("line-through") !== -1) options.linethrough = true;
                    delete options.textDecoration;
                }
                if ("dx" in parsedAttributes) options.left += parsedAttributes.dx;
                if ("dy" in parsedAttributes) options.top += parsedAttributes.dy;
                if (!("fontSize" in options)) options.fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
                var textContent = "";
                if (!("textContent" in element)) {
                    if ("firstChild" in element && element.firstChild !== null) if ("data" in element.firstChild && element.firstChild.data !== null) textContent = element.firstChild.data;
                } else textContent = element.textContent;
                textContent = textContent.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
                var originalStrokeWidth = options.strokeWidth;
                options.strokeWidth = 0;
                var text = new fabric.Text(textContent, options), textHeightScaleFactor = text.getScaledHeight() / text.height, lineHeightDiff = (text.height + text.strokeWidth) * text.lineHeight - text.height, scaledDiff = lineHeightDiff * textHeightScaleFactor, textHeight = text.getScaledHeight() + scaledDiff, offX = 0;
                if (parsedAnchor === "center") offX = text.getScaledWidth() / 2;
                if (parsedAnchor === "right") offX = text.getScaledWidth();
                text.set({
                    left: text.left - offX,
                    top: text.top - (textHeight - text.fontSize * (.07 + text._fontSizeFraction)) / text.lineHeight,
                    strokeWidth: typeof originalStrokeWidth !== "undefined" ? originalStrokeWidth : 1
                });
                callback(text);
            };
            fabric.Text.fromObject = function(object, callback) {
                var objectCopy = clone(object), path = object.path;
                delete objectCopy.path;
                return fabric.Object._fromObject("Text", objectCopy, (function(textInstance) {
                    if (path) fabric.Object._fromObject("Path", path, (function(pathInstance) {
                        textInstance.set("path", pathInstance);
                        callback(textInstance);
                    }), "path"); else callback(textInstance);
                }), "text");
            };
            fabric.Text.genericFonts = [ "sans-serif", "serif", "cursive", "fantasy", "monospace" ];
            fabric.util.createAccessors && fabric.util.createAccessors(fabric.Text);
        })(true ? exports : 0);
        (function() {
            fabric.util.object.extend(fabric.Text.prototype, {
                isEmptyStyles: function(lineIndex) {
                    if (!this.styles) return true;
                    if (typeof lineIndex !== "undefined" && !this.styles[lineIndex]) return true;
                    var obj = typeof lineIndex === "undefined" ? this.styles : {
                        line: this.styles[lineIndex]
                    };
                    for (var p1 in obj) for (var p2 in obj[p1]) for (var p3 in obj[p1][p2]) return false;
                    return true;
                },
                styleHas: function(property, lineIndex) {
                    if (!this.styles || !property || property === "") return false;
                    if (typeof lineIndex !== "undefined" && !this.styles[lineIndex]) return false;
                    var obj = typeof lineIndex === "undefined" ? this.styles : {
                        0: this.styles[lineIndex]
                    };
                    for (var p1 in obj) for (var p2 in obj[p1]) if (typeof obj[p1][p2][property] !== "undefined") return true;
                    return false;
                },
                cleanStyle: function(property) {
                    if (!this.styles || !property || property === "") return false;
                    var letterCount, stylePropertyValue, obj = this.styles, stylesCount = 0, allStyleObjectPropertiesMatch = true, graphemeCount = 0;
                    for (var p1 in obj) {
                        letterCount = 0;
                        for (var p2 in obj[p1]) {
                            var styleObject = obj[p1][p2], stylePropertyHasBeenSet = styleObject.hasOwnProperty(property);
                            stylesCount++;
                            if (stylePropertyHasBeenSet) {
                                if (!stylePropertyValue) stylePropertyValue = styleObject[property]; else if (styleObject[property] !== stylePropertyValue) allStyleObjectPropertiesMatch = false;
                                if (styleObject[property] === this[property]) delete styleObject[property];
                            } else allStyleObjectPropertiesMatch = false;
                            if (Object.keys(styleObject).length !== 0) letterCount++; else delete obj[p1][p2];
                        }
                        if (letterCount === 0) delete obj[p1];
                    }
                    for (var i = 0; i < this._textLines.length; i++) graphemeCount += this._textLines[i].length;
                    if (allStyleObjectPropertiesMatch && stylesCount === graphemeCount) {
                        this[property] = stylePropertyValue;
                        this.removeStyle(property);
                    }
                },
                removeStyle: function(property) {
                    if (!this.styles || !property || property === "") return;
                    var line, lineNum, charNum, obj = this.styles;
                    for (lineNum in obj) {
                        line = obj[lineNum];
                        for (charNum in line) {
                            delete line[charNum][property];
                            if (Object.keys(line[charNum]).length === 0) delete line[charNum];
                        }
                        if (Object.keys(line).length === 0) delete obj[lineNum];
                    }
                },
                _extendStyles: function(index, styles) {
                    var loc = this.get2DCursorLocation(index);
                    if (!this._getLineStyle(loc.lineIndex)) this._setLineStyle(loc.lineIndex);
                    if (!this._getStyleDeclaration(loc.lineIndex, loc.charIndex)) this._setStyleDeclaration(loc.lineIndex, loc.charIndex, {});
                    fabric.util.object.extend(this._getStyleDeclaration(loc.lineIndex, loc.charIndex), styles);
                },
                get2DCursorLocation: function(selectionStart, skipWrapping) {
                    if (typeof selectionStart === "undefined") selectionStart = this.selectionStart;
                    var lines = skipWrapping ? this._unwrappedTextLines : this._textLines, len = lines.length;
                    for (var i = 0; i < len; i++) {
                        if (selectionStart <= lines[i].length) return {
                            lineIndex: i,
                            charIndex: selectionStart
                        };
                        selectionStart -= lines[i].length + this.missingNewlineOffset(i);
                    }
                    return {
                        lineIndex: i - 1,
                        charIndex: lines[i - 1].length < selectionStart ? lines[i - 1].length : selectionStart
                    };
                },
                getSelectionStyles: function(startIndex, endIndex, complete) {
                    if (typeof startIndex === "undefined") startIndex = this.selectionStart || 0;
                    if (typeof endIndex === "undefined") endIndex = this.selectionEnd || startIndex;
                    var styles = [];
                    for (var i = startIndex; i < endIndex; i++) styles.push(this.getStyleAtPosition(i, complete));
                    return styles;
                },
                getStyleAtPosition: function(position, complete) {
                    var loc = this.get2DCursorLocation(position), style = complete ? this.getCompleteStyleDeclaration(loc.lineIndex, loc.charIndex) : this._getStyleDeclaration(loc.lineIndex, loc.charIndex);
                    return style || {};
                },
                setSelectionStyles: function(styles, startIndex, endIndex) {
                    if (typeof startIndex === "undefined") startIndex = this.selectionStart || 0;
                    if (typeof endIndex === "undefined") endIndex = this.selectionEnd || startIndex;
                    for (var i = startIndex; i < endIndex; i++) this._extendStyles(i, styles);
                    this._forceClearCache = true;
                    return this;
                },
                _getStyleDeclaration: function(lineIndex, charIndex) {
                    var lineStyle = this.styles && this.styles[lineIndex];
                    if (!lineStyle) return null;
                    return lineStyle[charIndex];
                },
                getCompleteStyleDeclaration: function(lineIndex, charIndex) {
                    var prop, style = this._getStyleDeclaration(lineIndex, charIndex) || {}, styleObject = {};
                    for (var i = 0; i < this._styleProperties.length; i++) {
                        prop = this._styleProperties[i];
                        styleObject[prop] = typeof style[prop] === "undefined" ? this[prop] : style[prop];
                    }
                    return styleObject;
                },
                _setStyleDeclaration: function(lineIndex, charIndex, style) {
                    this.styles[lineIndex][charIndex] = style;
                },
                _deleteStyleDeclaration: function(lineIndex, charIndex) {
                    delete this.styles[lineIndex][charIndex];
                },
                _getLineStyle: function(lineIndex) {
                    return !!this.styles[lineIndex];
                },
                _setLineStyle: function(lineIndex) {
                    this.styles[lineIndex] = {};
                },
                _deleteLineStyle: function(lineIndex) {
                    delete this.styles[lineIndex];
                }
            });
        })();
        (function() {
            function parseDecoration(object) {
                if (object.textDecoration) {
                    object.textDecoration.indexOf("underline") > -1 && (object.underline = true);
                    object.textDecoration.indexOf("line-through") > -1 && (object.linethrough = true);
                    object.textDecoration.indexOf("overline") > -1 && (object.overline = true);
                    delete object.textDecoration;
                }
            }
            fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, {
                type: "i-text",
                selectionStart: 0,
                selectionEnd: 0,
                selectionColor: "rgba(17,119,255,0.3)",
                isEditing: false,
                editable: true,
                editingBorderColor: "rgba(102,153,255,0.25)",
                cursorWidth: 2,
                cursorColor: "",
                cursorDelay: 1e3,
                cursorDuration: 600,
                caching: true,
                hiddenTextareaContainer: null,
                _reSpace: /\s|\n/,
                _currentCursorOpacity: 0,
                _selectionDirection: null,
                _abortCursorAnimation: false,
                __widthOfSpace: [],
                inCompositionMode: false,
                initialize: function(text, options) {
                    this.callSuper("initialize", text, options);
                    this.initBehavior();
                },
                setSelectionStart: function(index) {
                    index = Math.max(index, 0);
                    this._updateAndFire("selectionStart", index);
                },
                setSelectionEnd: function(index) {
                    index = Math.min(index, this.text.length);
                    this._updateAndFire("selectionEnd", index);
                },
                _updateAndFire: function(property, index) {
                    if (this[property] !== index) {
                        this._fireSelectionChanged();
                        this[property] = index;
                    }
                    this._updateTextarea();
                },
                _fireSelectionChanged: function() {
                    this.fire("selection:changed");
                    this.canvas && this.canvas.fire("text:selection:changed", {
                        target: this
                    });
                },
                initDimensions: function() {
                    this.isEditing && this.initDelayedCursor();
                    this.clearContextTop();
                    this.callSuper("initDimensions");
                },
                render: function(ctx) {
                    this.clearContextTop();
                    this.callSuper("render", ctx);
                    this.cursorOffsetCache = {};
                    this.renderCursorOrSelection();
                },
                _render: function(ctx) {
                    this.callSuper("_render", ctx);
                },
                clearContextTop: function(skipRestore) {
                    if (!this.isEditing || !this.canvas || !this.canvas.contextTop) return;
                    var ctx = this.canvas.contextTop, v = this.canvas.viewportTransform;
                    ctx.save();
                    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
                    this.transform(ctx);
                    this._clearTextArea(ctx);
                    skipRestore || ctx.restore();
                },
                renderCursorOrSelection: function() {
                    if (!this.isEditing || !this.canvas || !this.canvas.contextTop) return;
                    var boundaries = this._getCursorBoundaries(), ctx = this.canvas.contextTop;
                    this.clearContextTop(true);
                    if (this.selectionStart === this.selectionEnd) this.renderCursor(boundaries, ctx); else this.renderSelection(boundaries, ctx);
                    ctx.restore();
                },
                _clearTextArea: function(ctx) {
                    var width = this.width + 4, height = this.height + 4;
                    ctx.clearRect(-width / 2, -height / 2, width, height);
                },
                _getCursorBoundaries: function(position) {
                    if (typeof position === "undefined") position = this.selectionStart;
                    var left = this._getLeftOffset(), top = this._getTopOffset(), offsets = this._getCursorBoundariesOffsets(position);
                    return {
                        left,
                        top,
                        leftOffset: offsets.left,
                        topOffset: offsets.top
                    };
                },
                _getCursorBoundariesOffsets: function(position) {
                    if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
                    var lineLeftOffset, lineIndex, charIndex, boundaries, topOffset = 0, leftOffset = 0, cursorPosition = this.get2DCursorLocation(position);
                    charIndex = cursorPosition.charIndex;
                    lineIndex = cursorPosition.lineIndex;
                    for (var i = 0; i < lineIndex; i++) topOffset += this.getHeightOfLine(i);
                    lineLeftOffset = this._getLineLeftOffset(lineIndex);
                    var bound = this.__charBounds[lineIndex][charIndex];
                    bound && (leftOffset = bound.left);
                    if (this.charSpacing !== 0 && charIndex === this._textLines[lineIndex].length) leftOffset -= this._getWidthOfCharSpacing();
                    boundaries = {
                        top: topOffset,
                        left: lineLeftOffset + (leftOffset > 0 ? leftOffset : 0)
                    };
                    if (this.direction === "rtl") boundaries.left *= -1;
                    this.cursorOffsetCache = boundaries;
                    return this.cursorOffsetCache;
                },
                renderCursor: function(boundaries, ctx) {
                    var cursorLocation = this.get2DCursorLocation(), lineIndex = cursorLocation.lineIndex, charIndex = cursorLocation.charIndex > 0 ? cursorLocation.charIndex - 1 : 0, charHeight = this.getValueOfPropertyAt(lineIndex, charIndex, "fontSize"), multiplier = this.scaleX * this.canvas.getZoom(), cursorWidth = this.cursorWidth / multiplier, topOffset = boundaries.topOffset, dy = this.getValueOfPropertyAt(lineIndex, charIndex, "deltaY");
                    topOffset += (1 - this._fontSizeFraction) * this.getHeightOfLine(lineIndex) / this.lineHeight - charHeight * (1 - this._fontSizeFraction);
                    if (this.inCompositionMode) this.renderSelection(boundaries, ctx);
                    ctx.fillStyle = this.cursorColor || this.getValueOfPropertyAt(lineIndex, charIndex, "fill");
                    ctx.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity;
                    ctx.fillRect(boundaries.left + boundaries.leftOffset - cursorWidth / 2, topOffset + boundaries.top + dy, cursorWidth, charHeight);
                },
                renderSelection: function(boundaries, ctx) {
                    var selectionStart = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, selectionEnd = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, isJustify = this.textAlign.indexOf("justify") !== -1, start = this.get2DCursorLocation(selectionStart), end = this.get2DCursorLocation(selectionEnd), startLine = start.lineIndex, endLine = end.lineIndex, startChar = start.charIndex < 0 ? 0 : start.charIndex, endChar = end.charIndex < 0 ? 0 : end.charIndex;
                    for (var i = startLine; i <= endLine; i++) {
                        var lineOffset = this._getLineLeftOffset(i) || 0, lineHeight = this.getHeightOfLine(i), realLineHeight = 0, boxStart = 0, boxEnd = 0;
                        if (i === startLine) boxStart = this.__charBounds[startLine][startChar].left;
                        if (i >= startLine && i < endLine) boxEnd = isJustify && !this.isEndOfWrapping(i) ? this.width : this.getLineWidth(i) || 5; else if (i === endLine) if (endChar === 0) boxEnd = this.__charBounds[endLine][endChar].left; else {
                            var charSpacing = this._getWidthOfCharSpacing();
                            boxEnd = this.__charBounds[endLine][endChar - 1].left + this.__charBounds[endLine][endChar - 1].width - charSpacing;
                        }
                        realLineHeight = lineHeight;
                        if (this.lineHeight < 1 || i === endLine && this.lineHeight > 1) lineHeight /= this.lineHeight;
                        var drawStart = boundaries.left + lineOffset + boxStart, drawWidth = boxEnd - boxStart, drawHeight = lineHeight, extraTop = 0;
                        if (this.inCompositionMode) {
                            ctx.fillStyle = this.compositionColor || "black";
                            drawHeight = 1;
                            extraTop = lineHeight;
                        } else ctx.fillStyle = this.selectionColor;
                        if (this.direction === "rtl") drawStart = this.width - drawStart - drawWidth;
                        ctx.fillRect(drawStart, boundaries.top + boundaries.topOffset + extraTop, drawWidth, drawHeight);
                        boundaries.topOffset += realLineHeight;
                    }
                },
                getCurrentCharFontSize: function() {
                    var cp = this._getCurrentCharIndex();
                    return this.getValueOfPropertyAt(cp.l, cp.c, "fontSize");
                },
                getCurrentCharColor: function() {
                    var cp = this._getCurrentCharIndex();
                    return this.getValueOfPropertyAt(cp.l, cp.c, "fill");
                },
                _getCurrentCharIndex: function() {
                    var cursorPosition = this.get2DCursorLocation(this.selectionStart, true), charIndex = cursorPosition.charIndex > 0 ? cursorPosition.charIndex - 1 : 0;
                    return {
                        l: cursorPosition.lineIndex,
                        c: charIndex
                    };
                }
            });
            fabric.IText.fromObject = function(object, callback) {
                parseDecoration(object);
                if (object.styles) for (var i in object.styles) for (var j in object.styles[i]) parseDecoration(object.styles[i][j]);
                fabric.Object._fromObject("IText", object, callback, "text");
            };
        })();
        (function() {
            var clone = fabric.util.object.clone;
            fabric.util.object.extend(fabric.IText.prototype, {
                initBehavior: function() {
                    this.initAddedHandler();
                    this.initRemovedHandler();
                    this.initCursorSelectionHandlers();
                    this.initDoubleClickSimulation();
                    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
                },
                onDeselect: function() {
                    this.isEditing && this.exitEditing();
                    this.selected = false;
                },
                initAddedHandler: function() {
                    var _this = this;
                    this.on("added", (function() {
                        var canvas = _this.canvas;
                        if (canvas) {
                            if (!canvas._hasITextHandlers) {
                                canvas._hasITextHandlers = true;
                                _this._initCanvasHandlers(canvas);
                            }
                            canvas._iTextInstances = canvas._iTextInstances || [];
                            canvas._iTextInstances.push(_this);
                        }
                    }));
                },
                initRemovedHandler: function() {
                    var _this = this;
                    this.on("removed", (function() {
                        var canvas = _this.canvas;
                        if (canvas) {
                            canvas._iTextInstances = canvas._iTextInstances || [];
                            fabric.util.removeFromArray(canvas._iTextInstances, _this);
                            if (canvas._iTextInstances.length === 0) {
                                canvas._hasITextHandlers = false;
                                _this._removeCanvasHandlers(canvas);
                            }
                        }
                    }));
                },
                _initCanvasHandlers: function(canvas) {
                    canvas._mouseUpITextHandler = function() {
                        if (canvas._iTextInstances) canvas._iTextInstances.forEach((function(obj) {
                            obj.__isMousedown = false;
                        }));
                    };
                    canvas.on("mouse:up", canvas._mouseUpITextHandler);
                },
                _removeCanvasHandlers: function(canvas) {
                    canvas.off("mouse:up", canvas._mouseUpITextHandler);
                },
                _tick: function() {
                    this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
                },
                _animateCursor: function(obj, targetOpacity, duration, completeMethod) {
                    var tickState;
                    tickState = {
                        isAborted: false,
                        abort: function() {
                            this.isAborted = true;
                        }
                    };
                    obj.animate("_currentCursorOpacity", targetOpacity, {
                        duration,
                        onComplete: function() {
                            if (!tickState.isAborted) obj[completeMethod]();
                        },
                        onChange: function() {
                            if (obj.canvas && obj.selectionStart === obj.selectionEnd) obj.renderCursorOrSelection();
                        },
                        abort: function() {
                            return tickState.isAborted;
                        }
                    });
                    return tickState;
                },
                _onTickComplete: function() {
                    var _this = this;
                    if (this._cursorTimeout1) clearTimeout(this._cursorTimeout1);
                    this._cursorTimeout1 = setTimeout((function() {
                        _this._currentTickCompleteState = _this._animateCursor(_this, 0, this.cursorDuration / 2, "_tick");
                    }), 100);
                },
                initDelayedCursor: function(restart) {
                    var _this = this, delay = restart ? 0 : this.cursorDelay;
                    this.abortCursorAnimation();
                    this._currentCursorOpacity = 1;
                    this._cursorTimeout2 = setTimeout((function() {
                        _this._tick();
                    }), delay);
                },
                abortCursorAnimation: function() {
                    var shouldClear = this._currentTickState || this._currentTickCompleteState, canvas = this.canvas;
                    this._currentTickState && this._currentTickState.abort();
                    this._currentTickCompleteState && this._currentTickCompleteState.abort();
                    clearTimeout(this._cursorTimeout1);
                    clearTimeout(this._cursorTimeout2);
                    this._currentCursorOpacity = 0;
                    if (shouldClear && canvas) canvas.clearContext(canvas.contextTop || canvas.contextContainer);
                },
                selectAll: function() {
                    this.selectionStart = 0;
                    this.selectionEnd = this._text.length;
                    this._fireSelectionChanged();
                    this._updateTextarea();
                    return this;
                },
                getSelectedText: function() {
                    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
                },
                findWordBoundaryLeft: function(startFrom) {
                    var offset = 0, index = startFrom - 1;
                    if (this._reSpace.test(this._text[index])) while (this._reSpace.test(this._text[index])) {
                        offset++;
                        index--;
                    }
                    while (/\S/.test(this._text[index]) && index > -1) {
                        offset++;
                        index--;
                    }
                    return startFrom - offset;
                },
                findWordBoundaryRight: function(startFrom) {
                    var offset = 0, index = startFrom;
                    if (this._reSpace.test(this._text[index])) while (this._reSpace.test(this._text[index])) {
                        offset++;
                        index++;
                    }
                    while (/\S/.test(this._text[index]) && index < this._text.length) {
                        offset++;
                        index++;
                    }
                    return startFrom + offset;
                },
                findLineBoundaryLeft: function(startFrom) {
                    var offset = 0, index = startFrom - 1;
                    while (!/\n/.test(this._text[index]) && index > -1) {
                        offset++;
                        index--;
                    }
                    return startFrom - offset;
                },
                findLineBoundaryRight: function(startFrom) {
                    var offset = 0, index = startFrom;
                    while (!/\n/.test(this._text[index]) && index < this._text.length) {
                        offset++;
                        index++;
                    }
                    return startFrom + offset;
                },
                searchWordBoundary: function(selectionStart, direction) {
                    var text = this._text, index = this._reSpace.test(text[selectionStart]) ? selectionStart - 1 : selectionStart, _char = text[index], reNonWord = fabric.reNonWord;
                    while (!reNonWord.test(_char) && index > 0 && index < text.length) {
                        index += direction;
                        _char = text[index];
                    }
                    if (reNonWord.test(_char)) index += direction === 1 ? 0 : 1;
                    return index;
                },
                selectWord: function(selectionStart) {
                    selectionStart = selectionStart || this.selectionStart;
                    var newSelectionStart = this.searchWordBoundary(selectionStart, -1), newSelectionEnd = this.searchWordBoundary(selectionStart, 1);
                    this.selectionStart = newSelectionStart;
                    this.selectionEnd = newSelectionEnd;
                    this._fireSelectionChanged();
                    this._updateTextarea();
                    this.renderCursorOrSelection();
                },
                selectLine: function(selectionStart) {
                    selectionStart = selectionStart || this.selectionStart;
                    var newSelectionStart = this.findLineBoundaryLeft(selectionStart), newSelectionEnd = this.findLineBoundaryRight(selectionStart);
                    this.selectionStart = newSelectionStart;
                    this.selectionEnd = newSelectionEnd;
                    this._fireSelectionChanged();
                    this._updateTextarea();
                    return this;
                },
                enterEditing: function(e) {
                    if (this.isEditing || !this.editable) return;
                    if (this.canvas) {
                        this.canvas.calcOffset();
                        this.exitEditingOnOthers(this.canvas);
                    }
                    this.isEditing = true;
                    this.initHiddenTextarea(e);
                    this.hiddenTextarea.focus();
                    this.hiddenTextarea.value = this.text;
                    this._updateTextarea();
                    this._saveEditingProps();
                    this._setEditingProps();
                    this._textBeforeEdit = this.text;
                    this._tick();
                    this.fire("editing:entered");
                    this._fireSelectionChanged();
                    if (!this.canvas) return this;
                    this.canvas.fire("text:editing:entered", {
                        target: this
                    });
                    this.initMouseMoveHandler();
                    this.canvas.requestRenderAll();
                    return this;
                },
                exitEditingOnOthers: function(canvas) {
                    if (canvas._iTextInstances) canvas._iTextInstances.forEach((function(obj) {
                        obj.selected = false;
                        if (obj.isEditing) obj.exitEditing();
                    }));
                },
                initMouseMoveHandler: function() {
                    this.canvas.on("mouse:move", this.mouseMoveHandler);
                },
                mouseMoveHandler: function(options) {
                    if (!this.__isMousedown || !this.isEditing) return;
                    var newSelectionStart = this.getSelectionStartFromPointer(options.e), currentStart = this.selectionStart, currentEnd = this.selectionEnd;
                    if ((newSelectionStart !== this.__selectionStartOnMouseDown || currentStart === currentEnd) && (currentStart === newSelectionStart || currentEnd === newSelectionStart)) return;
                    if (newSelectionStart > this.__selectionStartOnMouseDown) {
                        this.selectionStart = this.__selectionStartOnMouseDown;
                        this.selectionEnd = newSelectionStart;
                    } else {
                        this.selectionStart = newSelectionStart;
                        this.selectionEnd = this.__selectionStartOnMouseDown;
                    }
                    if (this.selectionStart !== currentStart || this.selectionEnd !== currentEnd) {
                        this.restartCursorIfNeeded();
                        this._fireSelectionChanged();
                        this._updateTextarea();
                        this.renderCursorOrSelection();
                    }
                },
                _setEditingProps: function() {
                    this.hoverCursor = "text";
                    if (this.canvas) this.canvas.defaultCursor = this.canvas.moveCursor = "text";
                    this.borderColor = this.editingBorderColor;
                    this.hasControls = this.selectable = false;
                    this.lockMovementX = this.lockMovementY = true;
                },
                fromStringToGraphemeSelection: function(start, end, text) {
                    var smallerTextStart = text.slice(0, start), graphemeStart = fabric.util.string.graphemeSplit(smallerTextStart).length;
                    if (start === end) return {
                        selectionStart: graphemeStart,
                        selectionEnd: graphemeStart
                    };
                    var smallerTextEnd = text.slice(start, end), graphemeEnd = fabric.util.string.graphemeSplit(smallerTextEnd).length;
                    return {
                        selectionStart: graphemeStart,
                        selectionEnd: graphemeStart + graphemeEnd
                    };
                },
                fromGraphemeToStringSelection: function(start, end, _text) {
                    var smallerTextStart = _text.slice(0, start), graphemeStart = smallerTextStart.join("").length;
                    if (start === end) return {
                        selectionStart: graphemeStart,
                        selectionEnd: graphemeStart
                    };
                    var smallerTextEnd = _text.slice(start, end), graphemeEnd = smallerTextEnd.join("").length;
                    return {
                        selectionStart: graphemeStart,
                        selectionEnd: graphemeStart + graphemeEnd
                    };
                },
                _updateTextarea: function() {
                    this.cursorOffsetCache = {};
                    if (!this.hiddenTextarea) return;
                    if (!this.inCompositionMode) {
                        var newSelection = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                        this.hiddenTextarea.selectionStart = newSelection.selectionStart;
                        this.hiddenTextarea.selectionEnd = newSelection.selectionEnd;
                    }
                    this.updateTextareaPosition();
                },
                updateFromTextArea: function() {
                    if (!this.hiddenTextarea) return;
                    this.cursorOffsetCache = {};
                    this.text = this.hiddenTextarea.value;
                    if (this._shouldClearDimensionCache()) {
                        this.initDimensions();
                        this.setCoords();
                    }
                    var newSelection = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
                    this.selectionEnd = this.selectionStart = newSelection.selectionEnd;
                    if (!this.inCompositionMode) this.selectionStart = newSelection.selectionStart;
                    this.updateTextareaPosition();
                },
                updateTextareaPosition: function() {
                    if (this.selectionStart === this.selectionEnd) {
                        var style = this._calcTextareaPosition();
                        this.hiddenTextarea.style.left = style.left;
                        this.hiddenTextarea.style.top = style.top;
                    }
                },
                _calcTextareaPosition: function() {
                    if (!this.canvas) return {
                        x: 1,
                        y: 1
                    };
                    var desiredPosition = this.inCompositionMode ? this.compositionStart : this.selectionStart, boundaries = this._getCursorBoundaries(desiredPosition), cursorLocation = this.get2DCursorLocation(desiredPosition), lineIndex = cursorLocation.lineIndex, charIndex = cursorLocation.charIndex, charHeight = this.getValueOfPropertyAt(lineIndex, charIndex, "fontSize") * this.lineHeight, leftOffset = boundaries.leftOffset, m = this.calcTransformMatrix(), p = {
                        x: boundaries.left + leftOffset,
                        y: boundaries.top + boundaries.topOffset + charHeight
                    }, retinaScaling = this.canvas.getRetinaScaling(), upperCanvas = this.canvas.upperCanvasEl, upperCanvasWidth = upperCanvas.width / retinaScaling, upperCanvasHeight = upperCanvas.height / retinaScaling, maxWidth = upperCanvasWidth - charHeight, maxHeight = upperCanvasHeight - charHeight, scaleX = upperCanvas.clientWidth / upperCanvasWidth, scaleY = upperCanvas.clientHeight / upperCanvasHeight;
                    p = fabric.util.transformPoint(p, m);
                    p = fabric.util.transformPoint(p, this.canvas.viewportTransform);
                    p.x *= scaleX;
                    p.y *= scaleY;
                    if (p.x < 0) p.x = 0;
                    if (p.x > maxWidth) p.x = maxWidth;
                    if (p.y < 0) p.y = 0;
                    if (p.y > maxHeight) p.y = maxHeight;
                    p.x += this.canvas._offset.left;
                    p.y += this.canvas._offset.top;
                    return {
                        left: p.x + "px",
                        top: p.y + "px",
                        fontSize: charHeight + "px",
                        charHeight
                    };
                },
                _saveEditingProps: function() {
                    this._savedProps = {
                        hasControls: this.hasControls,
                        borderColor: this.borderColor,
                        lockMovementX: this.lockMovementX,
                        lockMovementY: this.lockMovementY,
                        hoverCursor: this.hoverCursor,
                        selectable: this.selectable,
                        defaultCursor: this.canvas && this.canvas.defaultCursor,
                        moveCursor: this.canvas && this.canvas.moveCursor
                    };
                },
                _restoreEditingProps: function() {
                    if (!this._savedProps) return;
                    this.hoverCursor = this._savedProps.hoverCursor;
                    this.hasControls = this._savedProps.hasControls;
                    this.borderColor = this._savedProps.borderColor;
                    this.selectable = this._savedProps.selectable;
                    this.lockMovementX = this._savedProps.lockMovementX;
                    this.lockMovementY = this._savedProps.lockMovementY;
                    if (this.canvas) {
                        this.canvas.defaultCursor = this._savedProps.defaultCursor;
                        this.canvas.moveCursor = this._savedProps.moveCursor;
                    }
                },
                exitEditing: function() {
                    var isTextChanged = this._textBeforeEdit !== this.text;
                    var hiddenTextarea = this.hiddenTextarea;
                    this.selected = false;
                    this.isEditing = false;
                    this.selectionEnd = this.selectionStart;
                    if (hiddenTextarea) {
                        hiddenTextarea.blur && hiddenTextarea.blur();
                        hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
                    }
                    this.hiddenTextarea = null;
                    this.abortCursorAnimation();
                    this._restoreEditingProps();
                    this._currentCursorOpacity = 0;
                    if (this._shouldClearDimensionCache()) {
                        this.initDimensions();
                        this.setCoords();
                    }
                    this.fire("editing:exited");
                    isTextChanged && this.fire("modified");
                    if (this.canvas) {
                        this.canvas.off("mouse:move", this.mouseMoveHandler);
                        this.canvas.fire("text:editing:exited", {
                            target: this
                        });
                        isTextChanged && this.canvas.fire("object:modified", {
                            target: this
                        });
                    }
                    return this;
                },
                _removeExtraneousStyles: function() {
                    for (var prop in this.styles) if (!this._textLines[prop]) delete this.styles[prop];
                },
                removeStyleFromTo: function(start, end) {
                    var i, styleObj, cursorStart = this.get2DCursorLocation(start, true), cursorEnd = this.get2DCursorLocation(end, true), lineStart = cursorStart.lineIndex, charStart = cursorStart.charIndex, lineEnd = cursorEnd.lineIndex, charEnd = cursorEnd.charIndex;
                    if (lineStart !== lineEnd) {
                        if (this.styles[lineStart]) for (i = charStart; i < this._unwrappedTextLines[lineStart].length; i++) delete this.styles[lineStart][i];
                        if (this.styles[lineEnd]) for (i = charEnd; i < this._unwrappedTextLines[lineEnd].length; i++) {
                            styleObj = this.styles[lineEnd][i];
                            if (styleObj) {
                                this.styles[lineStart] || (this.styles[lineStart] = {});
                                this.styles[lineStart][charStart + i - charEnd] = styleObj;
                            }
                        }
                        for (i = lineStart + 1; i <= lineEnd; i++) delete this.styles[i];
                        this.shiftLineStyles(lineEnd, lineStart - lineEnd);
                    } else if (this.styles[lineStart]) {
                        styleObj = this.styles[lineStart];
                        var numericChar, _char, diff = charEnd - charStart;
                        for (i = charStart; i < charEnd; i++) delete styleObj[i];
                        for (_char in this.styles[lineStart]) {
                            numericChar = parseInt(_char, 10);
                            if (numericChar >= charEnd) {
                                styleObj[numericChar - diff] = styleObj[_char];
                                delete styleObj[_char];
                            }
                        }
                    }
                },
                shiftLineStyles: function(lineIndex, offset) {
                    var clonedStyles = clone(this.styles);
                    for (var line in this.styles) {
                        var numericLine = parseInt(line, 10);
                        if (numericLine > lineIndex) {
                            this.styles[numericLine + offset] = clonedStyles[numericLine];
                            if (!clonedStyles[numericLine - offset]) delete this.styles[numericLine];
                        }
                    }
                },
                restartCursorIfNeeded: function() {
                    if (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) this.initDelayedCursor();
                },
                insertNewlineStyleObject: function(lineIndex, charIndex, qty, copiedStyle) {
                    var currentCharStyle, newLineStyles = {}, somethingAdded = false, isEndOfLine = this._unwrappedTextLines[lineIndex].length === charIndex;
                    qty || (qty = 1);
                    this.shiftLineStyles(lineIndex, qty);
                    if (this.styles[lineIndex]) currentCharStyle = this.styles[lineIndex][charIndex === 0 ? charIndex : charIndex - 1];
                    for (var index in this.styles[lineIndex]) {
                        var numIndex = parseInt(index, 10);
                        if (numIndex >= charIndex) {
                            somethingAdded = true;
                            newLineStyles[numIndex - charIndex] = this.styles[lineIndex][index];
                            if (!(isEndOfLine && charIndex === 0)) delete this.styles[lineIndex][index];
                        }
                    }
                    var styleCarriedOver = false;
                    if (somethingAdded && !isEndOfLine) {
                        this.styles[lineIndex + qty] = newLineStyles;
                        styleCarriedOver = true;
                    }
                    if (styleCarriedOver) qty--;
                    while (qty > 0) {
                        if (copiedStyle && copiedStyle[qty - 1]) this.styles[lineIndex + qty] = {
                            0: clone(copiedStyle[qty - 1])
                        }; else if (currentCharStyle) this.styles[lineIndex + qty] = {
                            0: clone(currentCharStyle)
                        }; else delete this.styles[lineIndex + qty];
                        qty--;
                    }
                    this._forceClearCache = true;
                },
                insertCharStyleObject: function(lineIndex, charIndex, quantity, copiedStyle) {
                    if (!this.styles) this.styles = {};
                    var currentLineStyles = this.styles[lineIndex], currentLineStylesCloned = currentLineStyles ? clone(currentLineStyles) : {};
                    quantity || (quantity = 1);
                    for (var index in currentLineStylesCloned) {
                        var numericIndex = parseInt(index, 10);
                        if (numericIndex >= charIndex) {
                            currentLineStyles[numericIndex + quantity] = currentLineStylesCloned[numericIndex];
                            if (!currentLineStylesCloned[numericIndex - quantity]) delete currentLineStyles[numericIndex];
                        }
                    }
                    this._forceClearCache = true;
                    if (copiedStyle) {
                        while (quantity--) {
                            if (!Object.keys(copiedStyle[quantity]).length) continue;
                            if (!this.styles[lineIndex]) this.styles[lineIndex] = {};
                            this.styles[lineIndex][charIndex + quantity] = clone(copiedStyle[quantity]);
                        }
                        return;
                    }
                    if (!currentLineStyles) return;
                    var newStyle = currentLineStyles[charIndex ? charIndex - 1 : 1];
                    while (newStyle && quantity--) this.styles[lineIndex][charIndex + quantity] = clone(newStyle);
                },
                insertNewStyleBlock: function(insertedText, start, copiedStyle) {
                    var cursorLoc = this.get2DCursorLocation(start, true), addedLines = [ 0 ], linesLength = 0;
                    for (var i = 0; i < insertedText.length; i++) if (insertedText[i] === "\n") {
                        linesLength++;
                        addedLines[linesLength] = 0;
                    } else addedLines[linesLength]++;
                    if (addedLines[0] > 0) {
                        this.insertCharStyleObject(cursorLoc.lineIndex, cursorLoc.charIndex, addedLines[0], copiedStyle);
                        copiedStyle = copiedStyle && copiedStyle.slice(addedLines[0] + 1);
                    }
                    linesLength && this.insertNewlineStyleObject(cursorLoc.lineIndex, cursorLoc.charIndex + addedLines[0], linesLength);
                    for (i = 1; i < linesLength; i++) {
                        if (addedLines[i] > 0) this.insertCharStyleObject(cursorLoc.lineIndex + i, 0, addedLines[i], copiedStyle); else if (copiedStyle) this.styles[cursorLoc.lineIndex + i][0] = copiedStyle[0];
                        copiedStyle = copiedStyle && copiedStyle.slice(addedLines[i] + 1);
                    }
                    if (addedLines[i] > 0) this.insertCharStyleObject(cursorLoc.lineIndex + i, 0, addedLines[i], copiedStyle);
                },
                setSelectionStartEndWithShift: function(start, end, newSelection) {
                    if (newSelection <= start) {
                        if (end === start) this._selectionDirection = "left"; else if (this._selectionDirection === "right") {
                            this._selectionDirection = "left";
                            this.selectionEnd = start;
                        }
                        this.selectionStart = newSelection;
                    } else if (newSelection > start && newSelection < end) if (this._selectionDirection === "right") this.selectionEnd = newSelection; else this.selectionStart = newSelection; else {
                        if (end === start) this._selectionDirection = "right"; else if (this._selectionDirection === "left") {
                            this._selectionDirection = "right";
                            this.selectionStart = end;
                        }
                        this.selectionEnd = newSelection;
                    }
                },
                setSelectionInBoundaries: function() {
                    var length = this.text.length;
                    if (this.selectionStart > length) this.selectionStart = length; else if (this.selectionStart < 0) this.selectionStart = 0;
                    if (this.selectionEnd > length) this.selectionEnd = length; else if (this.selectionEnd < 0) this.selectionEnd = 0;
                }
            });
        })();
        fabric.util.object.extend(fabric.IText.prototype, {
            initDoubleClickSimulation: function() {
                this.__lastClickTime = +new Date;
                this.__lastLastClickTime = +new Date;
                this.__lastPointer = {};
                this.on("mousedown", this.onMouseDown);
            },
            onMouseDown: function(options) {
                if (!this.canvas) return;
                this.__newClickTime = +new Date;
                var newPointer = options.pointer;
                if (this.isTripleClick(newPointer)) {
                    this.fire("tripleclick", options);
                    this._stopEvent(options.e);
                }
                this.__lastLastClickTime = this.__lastClickTime;
                this.__lastClickTime = this.__newClickTime;
                this.__lastPointer = newPointer;
                this.__lastIsEditing = this.isEditing;
                this.__lastSelected = this.selected;
            },
            isTripleClick: function(newPointer) {
                return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === newPointer.x && this.__lastPointer.y === newPointer.y;
            },
            _stopEvent: function(e) {
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
            },
            initCursorSelectionHandlers: function() {
                this.initMousedownHandler();
                this.initMouseupHandler();
                this.initClicks();
            },
            doubleClickHandler: function(options) {
                if (!this.isEditing) return;
                this.selectWord(this.getSelectionStartFromPointer(options.e));
            },
            tripleClickHandler: function(options) {
                if (!this.isEditing) return;
                this.selectLine(this.getSelectionStartFromPointer(options.e));
            },
            initClicks: function() {
                this.on("mousedblclick", this.doubleClickHandler);
                this.on("tripleclick", this.tripleClickHandler);
            },
            _mouseDownHandler: function(options) {
                if (!this.canvas || !this.editable || options.e.button && options.e.button !== 1) return;
                this.__isMousedown = true;
                if (this.selected) {
                    this.inCompositionMode = false;
                    this.setCursorByClick(options.e);
                }
                if (this.isEditing) {
                    this.__selectionStartOnMouseDown = this.selectionStart;
                    if (this.selectionStart === this.selectionEnd) this.abortCursorAnimation();
                    this.renderCursorOrSelection();
                }
            },
            _mouseDownHandlerBefore: function(options) {
                if (!this.canvas || !this.editable || options.e.button && options.e.button !== 1) return;
                this.selected = this === this.canvas._activeObject;
            },
            initMousedownHandler: function() {
                this.on("mousedown", this._mouseDownHandler);
                this.on("mousedown:before", this._mouseDownHandlerBefore);
            },
            initMouseupHandler: function() {
                this.on("mouseup", this.mouseUpHandler);
            },
            mouseUpHandler: function(options) {
                this.__isMousedown = false;
                if (!this.editable || this.group || options.transform && options.transform.actionPerformed || options.e.button && options.e.button !== 1) return;
                if (this.canvas) {
                    var currentActive = this.canvas._activeObject;
                    if (currentActive && currentActive !== this) return;
                }
                if (this.__lastSelected && !this.__corner) {
                    this.selected = false;
                    this.__lastSelected = false;
                    this.enterEditing(options.e);
                    if (this.selectionStart === this.selectionEnd) this.initDelayedCursor(true); else this.renderCursorOrSelection();
                } else this.selected = true;
            },
            setCursorByClick: function(e) {
                var newSelection = this.getSelectionStartFromPointer(e), start = this.selectionStart, end = this.selectionEnd;
                if (e.shiftKey) this.setSelectionStartEndWithShift(start, end, newSelection); else {
                    this.selectionStart = newSelection;
                    this.selectionEnd = newSelection;
                }
                if (this.isEditing) {
                    this._fireSelectionChanged();
                    this._updateTextarea();
                }
            },
            getSelectionStartFromPointer: function(e) {
                var lineLeftOffset, line, mouseOffset = this.getLocalPointer(e), prevWidth = 0, width = 0, height = 0, charIndex = 0, lineIndex = 0;
                for (var i = 0, len = this._textLines.length; i < len; i++) if (height <= mouseOffset.y) {
                    height += this.getHeightOfLine(i) * this.scaleY;
                    lineIndex = i;
                    if (i > 0) charIndex += this._textLines[i - 1].length + this.missingNewlineOffset(i - 1);
                } else break;
                lineLeftOffset = this._getLineLeftOffset(lineIndex);
                width = lineLeftOffset * this.scaleX;
                line = this._textLines[lineIndex];
                if (this.direction === "rtl") mouseOffset.x = this.width * this.scaleX - mouseOffset.x + width;
                for (var j = 0, jlen = line.length; j < jlen; j++) {
                    prevWidth = width;
                    width += this.__charBounds[lineIndex][j].kernedWidth * this.scaleX;
                    if (width <= mouseOffset.x) charIndex++; else break;
                }
                return this._getNewSelectionStartFromOffset(mouseOffset, prevWidth, width, charIndex, jlen);
            },
            _getNewSelectionStartFromOffset: function(mouseOffset, prevWidth, width, index, jlen) {
                var distanceBtwLastCharAndCursor = mouseOffset.x - prevWidth, distanceBtwNextCharAndCursor = width - mouseOffset.x, offset = distanceBtwNextCharAndCursor > distanceBtwLastCharAndCursor || distanceBtwNextCharAndCursor < 0 ? 0 : 1, newSelectionStart = index + offset;
                if (this.flipX) newSelectionStart = jlen - newSelectionStart;
                if (newSelectionStart > this._text.length) newSelectionStart = this._text.length;
                return newSelectionStart;
            }
        });
        fabric.util.object.extend(fabric.IText.prototype, {
            initHiddenTextarea: function() {
                this.hiddenTextarea = fabric.document.createElement("textarea");
                this.hiddenTextarea.setAttribute("autocapitalize", "off");
                this.hiddenTextarea.setAttribute("autocorrect", "off");
                this.hiddenTextarea.setAttribute("autocomplete", "off");
                this.hiddenTextarea.setAttribute("spellcheck", "false");
                this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", "");
                this.hiddenTextarea.setAttribute("wrap", "off");
                var style = this._calcTextareaPosition();
                this.hiddenTextarea.style.cssText = "position: absolute; top: " + style.top + "; left: " + style.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px;" + " paddingｰtop: " + style.fontSize + ";";
                if (this.hiddenTextareaContainer) this.hiddenTextareaContainer.appendChild(this.hiddenTextarea); else fabric.document.body.appendChild(this.hiddenTextarea);
                fabric.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this));
                fabric.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this));
                if (!this._clickHandlerInitialized && this.canvas) {
                    fabric.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this));
                    this._clickHandlerInitialized = true;
                }
            },
            keysMap: {
                9: "exitEditing",
                27: "exitEditing",
                33: "moveCursorUp",
                34: "moveCursorDown",
                35: "moveCursorRight",
                36: "moveCursorLeft",
                37: "moveCursorLeft",
                38: "moveCursorUp",
                39: "moveCursorRight",
                40: "moveCursorDown"
            },
            keysMapRtl: {
                9: "exitEditing",
                27: "exitEditing",
                33: "moveCursorUp",
                34: "moveCursorDown",
                35: "moveCursorLeft",
                36: "moveCursorRight",
                37: "moveCursorRight",
                38: "moveCursorUp",
                39: "moveCursorLeft",
                40: "moveCursorDown"
            },
            ctrlKeysMapUp: {
                67: "copy",
                88: "cut"
            },
            ctrlKeysMapDown: {
                65: "selectAll"
            },
            onClick: function() {
                this.hiddenTextarea && this.hiddenTextarea.focus();
            },
            onKeyDown: function(e) {
                if (!this.isEditing) return;
                var keyMap = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
                if (e.keyCode in keyMap) this[keyMap[e.keyCode]](e); else if (e.keyCode in this.ctrlKeysMapDown && (e.ctrlKey || e.metaKey)) this[this.ctrlKeysMapDown[e.keyCode]](e); else return;
                e.stopImmediatePropagation();
                e.preventDefault();
                if (e.keyCode >= 33 && e.keyCode <= 40) {
                    this.inCompositionMode = false;
                    this.clearContextTop();
                    this.renderCursorOrSelection();
                } else this.canvas && this.canvas.requestRenderAll();
            },
            onKeyUp: function(e) {
                if (!this.isEditing || this._copyDone || this.inCompositionMode) {
                    this._copyDone = false;
                    return;
                }
                if (e.keyCode in this.ctrlKeysMapUp && (e.ctrlKey || e.metaKey)) this[this.ctrlKeysMapUp[e.keyCode]](e); else return;
                e.stopImmediatePropagation();
                e.preventDefault();
                this.canvas && this.canvas.requestRenderAll();
            },
            onInput: function(e) {
                var fromPaste = this.fromPaste;
                this.fromPaste = false;
                e && e.stopPropagation();
                if (!this.isEditing) return;
                var removedText, insertedText, copiedStyle, removeFrom, removeTo, nextText = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, charCount = this._text.length, nextCharCount = nextText.length, charDiff = nextCharCount - charCount, selectionStart = this.selectionStart, selectionEnd = this.selectionEnd, selection = selectionStart !== selectionEnd;
                if (this.hiddenTextarea.value === "") {
                    this.styles = {};
                    this.updateFromTextArea();
                    this.fire("changed");
                    if (this.canvas) {
                        this.canvas.fire("text:changed", {
                            target: this
                        });
                        this.canvas.requestRenderAll();
                    }
                    return;
                }
                var textareaSelection = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
                var backDelete = selectionStart > textareaSelection.selectionStart;
                if (selection) {
                    removedText = this._text.slice(selectionStart, selectionEnd);
                    charDiff += selectionEnd - selectionStart;
                } else if (nextCharCount < charCount) if (backDelete) removedText = this._text.slice(selectionEnd + charDiff, selectionEnd); else removedText = this._text.slice(selectionStart, selectionStart - charDiff);
                insertedText = nextText.slice(textareaSelection.selectionEnd - charDiff, textareaSelection.selectionEnd);
                if (removedText && removedText.length) {
                    if (insertedText.length) {
                        copiedStyle = this.getSelectionStyles(selectionStart, selectionStart + 1, false);
                        copiedStyle = insertedText.map((function() {
                            return copiedStyle[0];
                        }));
                    }
                    if (selection) {
                        removeFrom = selectionStart;
                        removeTo = selectionEnd;
                    } else if (backDelete) {
                        removeFrom = selectionEnd - removedText.length;
                        removeTo = selectionEnd;
                    } else {
                        removeFrom = selectionEnd;
                        removeTo = selectionEnd + removedText.length;
                    }
                    this.removeStyleFromTo(removeFrom, removeTo);
                }
                if (insertedText.length) {
                    if (fromPaste && insertedText.join("") === fabric.copiedText && !fabric.disableStyleCopyPaste) copiedStyle = fabric.copiedTextStyle;
                    this.insertNewStyleBlock(insertedText, selectionStart, copiedStyle);
                }
                this.updateFromTextArea();
                this.fire("changed");
                if (this.canvas) {
                    this.canvas.fire("text:changed", {
                        target: this
                    });
                    this.canvas.requestRenderAll();
                }
            },
            onCompositionStart: function() {
                this.inCompositionMode = true;
            },
            onCompositionEnd: function() {
                this.inCompositionMode = false;
            },
            onCompositionUpdate: function(e) {
                this.compositionStart = e.target.selectionStart;
                this.compositionEnd = e.target.selectionEnd;
                this.updateTextareaPosition();
            },
            copy: function() {
                if (this.selectionStart === this.selectionEnd) return;
                fabric.copiedText = this.getSelectedText();
                if (!fabric.disableStyleCopyPaste) fabric.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true); else fabric.copiedTextStyle = null;
                this._copyDone = true;
            },
            paste: function() {
                this.fromPaste = true;
            },
            _getClipboardData: function(e) {
                return e && e.clipboardData || fabric.window.clipboardData;
            },
            _getWidthBeforeCursor: function(lineIndex, charIndex) {
                var bound, widthBeforeCursor = this._getLineLeftOffset(lineIndex);
                if (charIndex > 0) {
                    bound = this.__charBounds[lineIndex][charIndex - 1];
                    widthBeforeCursor += bound.left + bound.width;
                }
                return widthBeforeCursor;
            },
            getDownCursorOffset: function(e, isRight) {
                var selectionProp = this._getSelectionForOffset(e, isRight), cursorLocation = this.get2DCursorLocation(selectionProp), lineIndex = cursorLocation.lineIndex;
                if (lineIndex === this._textLines.length - 1 || e.metaKey || e.keyCode === 34) return this._text.length - selectionProp;
                var charIndex = cursorLocation.charIndex, widthBeforeCursor = this._getWidthBeforeCursor(lineIndex, charIndex), indexOnOtherLine = this._getIndexOnLine(lineIndex + 1, widthBeforeCursor), textAfterCursor = this._textLines[lineIndex].slice(charIndex);
                return textAfterCursor.length + indexOnOtherLine + 1 + this.missingNewlineOffset(lineIndex);
            },
            _getSelectionForOffset: function(e, isRight) {
                if (e.shiftKey && this.selectionStart !== this.selectionEnd && isRight) return this.selectionEnd; else return this.selectionStart;
            },
            getUpCursorOffset: function(e, isRight) {
                var selectionProp = this._getSelectionForOffset(e, isRight), cursorLocation = this.get2DCursorLocation(selectionProp), lineIndex = cursorLocation.lineIndex;
                if (lineIndex === 0 || e.metaKey || e.keyCode === 33) return -selectionProp;
                var charIndex = cursorLocation.charIndex, widthBeforeCursor = this._getWidthBeforeCursor(lineIndex, charIndex), indexOnOtherLine = this._getIndexOnLine(lineIndex - 1, widthBeforeCursor), textBeforeCursor = this._textLines[lineIndex].slice(0, charIndex), missingNewlineOffset = this.missingNewlineOffset(lineIndex - 1);
                return -this._textLines[lineIndex - 1].length + indexOnOtherLine - textBeforeCursor.length + (1 - missingNewlineOffset);
            },
            _getIndexOnLine: function(lineIndex, width) {
                var charWidth, foundMatch, line = this._textLines[lineIndex], lineLeftOffset = this._getLineLeftOffset(lineIndex), widthOfCharsOnLine = lineLeftOffset, indexOnLine = 0;
                for (var j = 0, jlen = line.length; j < jlen; j++) {
                    charWidth = this.__charBounds[lineIndex][j].width;
                    widthOfCharsOnLine += charWidth;
                    if (widthOfCharsOnLine > width) {
                        foundMatch = true;
                        var leftEdge = widthOfCharsOnLine - charWidth, rightEdge = widthOfCharsOnLine, offsetFromLeftEdge = Math.abs(leftEdge - width), offsetFromRightEdge = Math.abs(rightEdge - width);
                        indexOnLine = offsetFromRightEdge < offsetFromLeftEdge ? j : j - 1;
                        break;
                    }
                }
                if (!foundMatch) indexOnLine = line.length - 1;
                return indexOnLine;
            },
            moveCursorDown: function(e) {
                if (this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) return;
                this._moveCursorUpOrDown("Down", e);
            },
            moveCursorUp: function(e) {
                if (this.selectionStart === 0 && this.selectionEnd === 0) return;
                this._moveCursorUpOrDown("Up", e);
            },
            _moveCursorUpOrDown: function(direction, e) {
                var action = "get" + direction + "CursorOffset", offset = this[action](e, this._selectionDirection === "right");
                if (e.shiftKey) this.moveCursorWithShift(offset); else this.moveCursorWithoutShift(offset);
                if (offset !== 0) {
                    this.setSelectionInBoundaries();
                    this.abortCursorAnimation();
                    this._currentCursorOpacity = 1;
                    this.initDelayedCursor();
                    this._fireSelectionChanged();
                    this._updateTextarea();
                }
            },
            moveCursorWithShift: function(offset) {
                var newSelection = this._selectionDirection === "left" ? this.selectionStart + offset : this.selectionEnd + offset;
                this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, newSelection);
                return offset !== 0;
            },
            moveCursorWithoutShift: function(offset) {
                if (offset < 0) {
                    this.selectionStart += offset;
                    this.selectionEnd = this.selectionStart;
                } else {
                    this.selectionEnd += offset;
                    this.selectionStart = this.selectionEnd;
                }
                return offset !== 0;
            },
            moveCursorLeft: function(e) {
                if (this.selectionStart === 0 && this.selectionEnd === 0) return;
                this._moveCursorLeftOrRight("Left", e);
            },
            _move: function(e, prop, direction) {
                var newValue;
                if (e.altKey) newValue = this["findWordBoundary" + direction](this[prop]); else if (e.metaKey || e.keyCode === 35 || e.keyCode === 36) newValue = this["findLineBoundary" + direction](this[prop]); else {
                    this[prop] += direction === "Left" ? -1 : 1;
                    return true;
                }
                if (typeof newValue !== void 0 && this[prop] !== newValue) {
                    this[prop] = newValue;
                    return true;
                }
            },
            _moveLeft: function(e, prop) {
                return this._move(e, prop, "Left");
            },
            _moveRight: function(e, prop) {
                return this._move(e, prop, "Right");
            },
            moveCursorLeftWithoutShift: function(e) {
                var change = true;
                this._selectionDirection = "left";
                if (this.selectionEnd === this.selectionStart && this.selectionStart !== 0) change = this._moveLeft(e, "selectionStart");
                this.selectionEnd = this.selectionStart;
                return change;
            },
            moveCursorLeftWithShift: function(e) {
                if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd) return this._moveLeft(e, "selectionEnd"); else if (this.selectionStart !== 0) {
                    this._selectionDirection = "left";
                    return this._moveLeft(e, "selectionStart");
                }
            },
            moveCursorRight: function(e) {
                if (this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) return;
                this._moveCursorLeftOrRight("Right", e);
            },
            _moveCursorLeftOrRight: function(direction, e) {
                var actionName = "moveCursor" + direction + "With";
                this._currentCursorOpacity = 1;
                if (e.shiftKey) actionName += "Shift"; else actionName += "outShift";
                if (this[actionName](e)) {
                    this.abortCursorAnimation();
                    this.initDelayedCursor();
                    this._fireSelectionChanged();
                    this._updateTextarea();
                }
            },
            moveCursorRightWithShift: function(e) {
                if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd) return this._moveRight(e, "selectionStart"); else if (this.selectionEnd !== this._text.length) {
                    this._selectionDirection = "right";
                    return this._moveRight(e, "selectionEnd");
                }
            },
            moveCursorRightWithoutShift: function(e) {
                var changed = true;
                this._selectionDirection = "right";
                if (this.selectionStart === this.selectionEnd) {
                    changed = this._moveRight(e, "selectionStart");
                    this.selectionEnd = this.selectionStart;
                } else this.selectionStart = this.selectionEnd;
                return changed;
            },
            removeChars: function(start, end) {
                if (typeof end === "undefined") end = start + 1;
                this.removeStyleFromTo(start, end);
                this._text.splice(start, end - start);
                this.text = this._text.join("");
                this.set("dirty", true);
                if (this._shouldClearDimensionCache()) {
                    this.initDimensions();
                    this.setCoords();
                }
                this._removeExtraneousStyles();
            },
            insertChars: function(text, style, start, end) {
                if (typeof end === "undefined") end = start;
                if (end > start) this.removeStyleFromTo(start, end);
                var graphemes = fabric.util.string.graphemeSplit(text);
                this.insertNewStyleBlock(graphemes, start, style);
                this._text = [].concat(this._text.slice(0, start), graphemes, this._text.slice(end));
                this.text = this._text.join("");
                this.set("dirty", true);
                if (this._shouldClearDimensionCache()) {
                    this.initDimensions();
                    this.setCoords();
                }
                this._removeExtraneousStyles();
            }
        });
        (function() {
            var toFixed = fabric.util.toFixed, multipleSpacesRegex = /  +/g;
            fabric.util.object.extend(fabric.Text.prototype, {
                _toSVG: function() {
                    var offsets = this._getSVGLeftTopOffsets(), textAndBg = this._getSVGTextAndBg(offsets.textTop, offsets.textLeft);
                    return this._wrapSVGTextAndBg(textAndBg);
                },
                toSVG: function(reviver) {
                    return this._createBaseSVGMarkup(this._toSVG(), {
                        reviver,
                        noStyle: true,
                        withShadow: true
                    });
                },
                _getSVGLeftTopOffsets: function() {
                    return {
                        textLeft: -this.width / 2,
                        textTop: -this.height / 2,
                        lineTop: this.getHeightOfLine(0)
                    };
                },
                _wrapSVGTextAndBg: function(textAndBg) {
                    var noShadow = true, textDecoration = this.getSvgTextDecoration(this);
                    return [ textAndBg.textBgRects.join(""), '\t\t<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", textDecoration ? 'text-decoration="' + textDecoration + '" ' : "", 'style="', this.getSvgStyles(noShadow), '"', this.addPaintOrder(), " >", textAndBg.textSpans.join(""), "</text>\n" ];
                },
                _getSVGTextAndBg: function(textTopOffset, textLeftOffset) {
                    var lineOffset, textSpans = [], textBgRects = [], height = textTopOffset;
                    this._setSVGBg(textBgRects);
                    for (var i = 0, len = this._textLines.length; i < len; i++) {
                        lineOffset = this._getLineLeftOffset(i);
                        if (this.textBackgroundColor || this.styleHas("textBackgroundColor", i)) this._setSVGTextLineBg(textBgRects, i, textLeftOffset + lineOffset, height);
                        this._setSVGTextLineText(textSpans, i, textLeftOffset + lineOffset, height);
                        height += this.getHeightOfLine(i);
                    }
                    return {
                        textSpans,
                        textBgRects
                    };
                },
                _createTextCharSpan: function(_char, styleDecl, left, top) {
                    var shouldUseWhitespace = _char !== _char.trim() || _char.match(multipleSpacesRegex), styleProps = this.getSvgSpanStyles(styleDecl, shouldUseWhitespace), fillStyles = styleProps ? 'style="' + styleProps + '"' : "", dy = styleDecl.deltaY, dySpan = "", NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                    if (dy) dySpan = ' dy="' + toFixed(dy, NUM_FRACTION_DIGITS) + '" ';
                    return [ '<tspan x="', toFixed(left, NUM_FRACTION_DIGITS), '" y="', toFixed(top, NUM_FRACTION_DIGITS), '" ', dySpan, fillStyles, ">", fabric.util.string.escapeXml(_char), "</tspan>" ].join("");
                },
                _setSVGTextLineText: function(textSpans, lineIndex, textLeftOffset, textTopOffset) {
                    var actualStyle, nextStyle, charBox, style, timeToRender, lineHeight = this.getHeightOfLine(lineIndex), isJustify = this.textAlign.indexOf("justify") !== -1, charsToRender = "", boxWidth = 0, line = this._textLines[lineIndex];
                    textTopOffset += lineHeight * (1 - this._fontSizeFraction) / this.lineHeight;
                    for (var i = 0, len = line.length - 1; i <= len; i++) {
                        timeToRender = i === len || this.charSpacing;
                        charsToRender += line[i];
                        charBox = this.__charBounds[lineIndex][i];
                        if (boxWidth === 0) {
                            textLeftOffset += charBox.kernedWidth - charBox.width;
                            boxWidth += charBox.width;
                        } else boxWidth += charBox.kernedWidth;
                        if (isJustify && !timeToRender) if (this._reSpaceAndTab.test(line[i])) timeToRender = true;
                        if (!timeToRender) {
                            actualStyle = actualStyle || this.getCompleteStyleDeclaration(lineIndex, i);
                            nextStyle = this.getCompleteStyleDeclaration(lineIndex, i + 1);
                            timeToRender = this._hasStyleChangedForSvg(actualStyle, nextStyle);
                        }
                        if (timeToRender) {
                            style = this._getStyleDeclaration(lineIndex, i) || {};
                            textSpans.push(this._createTextCharSpan(charsToRender, style, textLeftOffset, textTopOffset));
                            charsToRender = "";
                            actualStyle = nextStyle;
                            textLeftOffset += boxWidth;
                            boxWidth = 0;
                        }
                    }
                },
                _pushTextBgRect: function(textBgRects, color, left, top, width, height) {
                    var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;
                    textBgRects.push("\t\t<rect ", this._getFillAttributes(color), ' x="', toFixed(left, NUM_FRACTION_DIGITS), '" y="', toFixed(top, NUM_FRACTION_DIGITS), '" width="', toFixed(width, NUM_FRACTION_DIGITS), '" height="', toFixed(height, NUM_FRACTION_DIGITS), '"></rect>\n');
                },
                _setSVGTextLineBg: function(textBgRects, i, leftOffset, textTopOffset) {
                    var charBox, currentColor, line = this._textLines[i], heightOfLine = this.getHeightOfLine(i) / this.lineHeight, boxWidth = 0, boxStart = 0, lastColor = this.getValueOfPropertyAt(i, 0, "textBackgroundColor");
                    for (var j = 0, jlen = line.length; j < jlen; j++) {
                        charBox = this.__charBounds[i][j];
                        currentColor = this.getValueOfPropertyAt(i, j, "textBackgroundColor");
                        if (currentColor !== lastColor) {
                            lastColor && this._pushTextBgRect(textBgRects, lastColor, leftOffset + boxStart, textTopOffset, boxWidth, heightOfLine);
                            boxStart = charBox.left;
                            boxWidth = charBox.width;
                            lastColor = currentColor;
                        } else boxWidth += charBox.kernedWidth;
                    }
                    currentColor && this._pushTextBgRect(textBgRects, currentColor, leftOffset + boxStart, textTopOffset, boxWidth, heightOfLine);
                },
                _getFillAttributes: function(value) {
                    var fillColor = value && typeof value === "string" ? new fabric.Color(value) : "";
                    if (!fillColor || !fillColor.getSource() || fillColor.getAlpha() === 1) return 'fill="' + value + '"';
                    return 'opacity="' + fillColor.getAlpha() + '" fill="' + fillColor.setAlpha(1).toRgb() + '"';
                },
                _getSVGLineTopOffset: function(lineIndex) {
                    var lineTopOffset = 0, lastHeight = 0;
                    for (var j = 0; j < lineIndex; j++) lineTopOffset += this.getHeightOfLine(j);
                    lastHeight = this.getHeightOfLine(j);
                    return {
                        lineTop: lineTopOffset,
                        offset: (this._fontSizeMult - this._fontSizeFraction) * lastHeight / (this.lineHeight * this._fontSizeMult)
                    };
                },
                getSvgStyles: function(skipShadow) {
                    var svgStyle = fabric.Object.prototype.getSvgStyles.call(this, skipShadow);
                    return svgStyle + " white-space: pre;";
                }
            });
        })();
        (function(global) {
            "use strict";
            var fabric = global.fabric || (global.fabric = {});
            fabric.Textbox = fabric.util.createClass(fabric.IText, fabric.Observable, {
                type: "textbox",
                minWidth: 20,
                dynamicMinWidth: 2,
                __cachedLines: null,
                lockScalingFlip: true,
                noScaleCache: false,
                _dimensionAffectingProps: fabric.Text.prototype._dimensionAffectingProps.concat("width"),
                _wordJoiners: /[ \t\r]/,
                splitByGrapheme: false,
                initDimensions: function() {
                    if (this.__skipDimension) return;
                    this.isEditing && this.initDelayedCursor();
                    this.clearContextTop();
                    this._clearCache();
                    this.dynamicMinWidth = 0;
                    this._styleMap = this._generateStyleMap(this._splitText());
                    if (this.dynamicMinWidth > this.width) this._set("width", this.dynamicMinWidth);
                    if (this.textAlign.indexOf("justify") !== -1) this.enlargeSpaces();
                    this.height = this.calcTextHeight();
                    this.saveState({
                        propertySet: "_dimensionAffectingProps"
                    });
                },
                _generateStyleMap: function(textInfo) {
                    var realLineCount = 0, realLineCharCount = 0, charCount = 0, map = {};
                    for (var i = 0; i < textInfo.graphemeLines.length; i++) {
                        if (textInfo.graphemeText[charCount] === "\n" && i > 0) {
                            realLineCharCount = 0;
                            charCount++;
                            realLineCount++;
                        } else if (!this.splitByGrapheme && this._reSpaceAndTab.test(textInfo.graphemeText[charCount]) && i > 0) {
                            realLineCharCount++;
                            charCount++;
                        }
                        map[i] = {
                            line: realLineCount,
                            offset: realLineCharCount
                        };
                        charCount += textInfo.graphemeLines[i].length;
                        realLineCharCount += textInfo.graphemeLines[i].length;
                    }
                    return map;
                },
                styleHas: function(property, lineIndex) {
                    if (this._styleMap && !this.isWrapping) {
                        var map = this._styleMap[lineIndex];
                        if (map) lineIndex = map.line;
                    }
                    return fabric.Text.prototype.styleHas.call(this, property, lineIndex);
                },
                isEmptyStyles: function(lineIndex) {
                    if (!this.styles) return true;
                    var nextOffset, obj, offset = 0, nextLineIndex = lineIndex + 1, shouldLimit = false, map = this._styleMap[lineIndex], mapNextLine = this._styleMap[lineIndex + 1];
                    if (map) {
                        lineIndex = map.line;
                        offset = map.offset;
                    }
                    if (mapNextLine) {
                        nextLineIndex = mapNextLine.line;
                        shouldLimit = nextLineIndex === lineIndex;
                        nextOffset = mapNextLine.offset;
                    }
                    obj = typeof lineIndex === "undefined" ? this.styles : {
                        line: this.styles[lineIndex]
                    };
                    for (var p1 in obj) for (var p2 in obj[p1]) if (p2 >= offset && (!shouldLimit || p2 < nextOffset)) for (var p3 in obj[p1][p2]) return false;
                    return true;
                },
                _getStyleDeclaration: function(lineIndex, charIndex) {
                    if (this._styleMap && !this.isWrapping) {
                        var map = this._styleMap[lineIndex];
                        if (!map) return null;
                        lineIndex = map.line;
                        charIndex = map.offset + charIndex;
                    }
                    return this.callSuper("_getStyleDeclaration", lineIndex, charIndex);
                },
                _setStyleDeclaration: function(lineIndex, charIndex, style) {
                    var map = this._styleMap[lineIndex];
                    lineIndex = map.line;
                    charIndex = map.offset + charIndex;
                    this.styles[lineIndex][charIndex] = style;
                },
                _deleteStyleDeclaration: function(lineIndex, charIndex) {
                    var map = this._styleMap[lineIndex];
                    lineIndex = map.line;
                    charIndex = map.offset + charIndex;
                    delete this.styles[lineIndex][charIndex];
                },
                _getLineStyle: function(lineIndex) {
                    var map = this._styleMap[lineIndex];
                    return !!this.styles[map.line];
                },
                _setLineStyle: function(lineIndex) {
                    var map = this._styleMap[lineIndex];
                    this.styles[map.line] = {};
                },
                _wrapText: function(lines, desiredWidth) {
                    var i, wrapped = [];
                    this.isWrapping = true;
                    for (i = 0; i < lines.length; i++) wrapped = wrapped.concat(this._wrapLine(lines[i], i, desiredWidth));
                    this.isWrapping = false;
                    return wrapped;
                },
                _measureWord: function(word, lineIndex, charOffset) {
                    var prevGrapheme, width = 0, skipLeft = true;
                    charOffset = charOffset || 0;
                    for (var i = 0, len = word.length; i < len; i++) {
                        var box = this._getGraphemeBox(word[i], lineIndex, i + charOffset, prevGrapheme, skipLeft);
                        width += box.kernedWidth;
                        prevGrapheme = word[i];
                    }
                    return width;
                },
                _wrapLine: function(_line, lineIndex, desiredWidth, reservedSpace) {
                    var lineWidth = 0, splitByGrapheme = this.splitByGrapheme, graphemeLines = [], line = [], words = splitByGrapheme ? fabric.util.string.graphemeSplit(_line) : _line.split(this._wordJoiners), word = "", offset = 0, infix = splitByGrapheme ? "" : " ", wordWidth = 0, infixWidth = 0, largestWordWidth = 0, lineJustStarted = true, additionalSpace = this._getWidthOfCharSpacing();
                    reservedSpace = reservedSpace || 0;
                    if (words.length === 0) words.push([]);
                    desiredWidth -= reservedSpace;
                    for (var i = 0; i < words.length; i++) {
                        word = splitByGrapheme ? words[i] : fabric.util.string.graphemeSplit(words[i]);
                        wordWidth = this._measureWord(word, lineIndex, offset);
                        offset += word.length;
                        lineWidth += infixWidth + wordWidth - additionalSpace;
                        if (lineWidth > desiredWidth && !lineJustStarted) {
                            graphemeLines.push(line);
                            line = [];
                            lineWidth = wordWidth;
                            lineJustStarted = true;
                        } else lineWidth += additionalSpace;
                        if (!lineJustStarted && !splitByGrapheme) line.push(infix);
                        line = line.concat(word);
                        infixWidth = splitByGrapheme ? 0 : this._measureWord([ infix ], lineIndex, offset);
                        offset++;
                        lineJustStarted = false;
                        if (wordWidth > largestWordWidth) largestWordWidth = wordWidth;
                    }
                    i && graphemeLines.push(line);
                    if (largestWordWidth + reservedSpace > this.dynamicMinWidth) this.dynamicMinWidth = largestWordWidth - additionalSpace + reservedSpace;
                    return graphemeLines;
                },
                isEndOfWrapping: function(lineIndex) {
                    if (!this._styleMap[lineIndex + 1]) return true;
                    if (this._styleMap[lineIndex + 1].line !== this._styleMap[lineIndex].line) return true;
                    return false;
                },
                missingNewlineOffset: function(lineIndex) {
                    if (this.splitByGrapheme) return this.isEndOfWrapping(lineIndex) ? 1 : 0;
                    return 1;
                },
                _splitTextIntoLines: function(text) {
                    var newText = fabric.Text.prototype._splitTextIntoLines.call(this, text), graphemeLines = this._wrapText(newText.lines, this.width), lines = new Array(graphemeLines.length);
                    for (var i = 0; i < graphemeLines.length; i++) lines[i] = graphemeLines[i].join("");
                    newText.lines = lines;
                    newText.graphemeLines = graphemeLines;
                    return newText;
                },
                getMinWidth: function() {
                    return Math.max(this.minWidth, this.dynamicMinWidth);
                },
                _removeExtraneousStyles: function() {
                    var linesToKeep = {};
                    for (var prop in this._styleMap) if (this._textLines[prop]) linesToKeep[this._styleMap[prop].line] = 1;
                    for (var prop in this.styles) if (!linesToKeep[prop]) delete this.styles[prop];
                },
                toObject: function(propertiesToInclude) {
                    return this.callSuper("toObject", [ "minWidth", "splitByGrapheme" ].concat(propertiesToInclude));
                }
            });
            fabric.Textbox.fromObject = function(object, callback) {
                return fabric.Object._fromObject("Textbox", object, callback, "text");
            };
        })(true ? exports : 0);
        (function() {
            var controlsUtils = fabric.controlsUtils, scaleSkewStyleHandler = controlsUtils.scaleSkewCursorStyleHandler, scaleStyleHandler = controlsUtils.scaleCursorStyleHandler, scalingEqually = controlsUtils.scalingEqually, scalingYOrSkewingX = controlsUtils.scalingYOrSkewingX, scalingXOrSkewingY = controlsUtils.scalingXOrSkewingY, scaleOrSkewActionName = controlsUtils.scaleOrSkewActionName, objectControls = fabric.Object.prototype.controls;
            objectControls.ml = new fabric.Control({
                x: -.5,
                y: 0,
                cursorStyleHandler: scaleSkewStyleHandler,
                actionHandler: scalingXOrSkewingY,
                getActionName: scaleOrSkewActionName
            });
            objectControls.mr = new fabric.Control({
                x: .5,
                y: 0,
                cursorStyleHandler: scaleSkewStyleHandler,
                actionHandler: scalingXOrSkewingY,
                getActionName: scaleOrSkewActionName
            });
            objectControls.mb = new fabric.Control({
                x: 0,
                y: .5,
                cursorStyleHandler: scaleSkewStyleHandler,
                actionHandler: scalingYOrSkewingX,
                getActionName: scaleOrSkewActionName
            });
            objectControls.mt = new fabric.Control({
                x: 0,
                y: -.5,
                cursorStyleHandler: scaleSkewStyleHandler,
                actionHandler: scalingYOrSkewingX,
                getActionName: scaleOrSkewActionName
            });
            objectControls.tl = new fabric.Control({
                x: -.5,
                y: -.5,
                cursorStyleHandler: scaleStyleHandler,
                actionHandler: scalingEqually
            });
            objectControls.tr = new fabric.Control({
                x: .5,
                y: -.5,
                cursorStyleHandler: scaleStyleHandler,
                actionHandler: scalingEqually
            });
            objectControls.bl = new fabric.Control({
                x: -.5,
                y: .5,
                cursorStyleHandler: scaleStyleHandler,
                actionHandler: scalingEqually
            });
            objectControls.br = new fabric.Control({
                x: .5,
                y: .5,
                cursorStyleHandler: scaleStyleHandler,
                actionHandler: scalingEqually
            });
            objectControls.mtr = new fabric.Control({
                x: 0,
                y: -.5,
                actionHandler: controlsUtils.rotationWithSnapping,
                cursorStyleHandler: controlsUtils.rotationStyleHandler,
                offsetY: -40,
                withConnection: true,
                actionName: "rotate"
            });
            if (fabric.Textbox) {
                var textBoxControls = fabric.Textbox.prototype.controls = {};
                textBoxControls.mtr = objectControls.mtr;
                textBoxControls.tr = objectControls.tr;
                textBoxControls.br = objectControls.br;
                textBoxControls.tl = objectControls.tl;
                textBoxControls.bl = objectControls.bl;
                textBoxControls.mt = objectControls.mt;
                textBoxControls.mb = objectControls.mb;
                textBoxControls.mr = new fabric.Control({
                    x: .5,
                    y: 0,
                    actionHandler: controlsUtils.changeWidth,
                    cursorStyleHandler: scaleSkewStyleHandler,
                    actionName: "resizing"
                });
                textBoxControls.ml = new fabric.Control({
                    x: -.5,
                    y: 0,
                    actionHandler: controlsUtils.changeWidth,
                    cursorStyleHandler: scaleSkewStyleHandler,
                    actionName: "resizing"
                });
            }
        })();
    }
} ]);