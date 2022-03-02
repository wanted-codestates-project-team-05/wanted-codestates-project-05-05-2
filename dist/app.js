"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./reset.css");

require("./App.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var canvasRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      ctx = _useState2[0],
      setCtx = _useState2[1];

  var _useState3 = (0, _react.useState)({
    stx: 0,
    sty: 0,
    w: 0,
    h: 0,
    id: 0,
    text: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pos = _useState4[0],
      setPos = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      datas = _useState6[0],
      setDatas = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDrawing = _useState8[0],
      setIsDrawing = _useState8[1];

  var src = "https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451a2619-a21b-462d-bb59-a50196e3057a%2Ffashion-unsplash.jpg?table=block&id=efd09440-86df-4dcc-ae21-29097de2bc9b&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=2000&userId=&cache=v2";
  var image = new Image();
  image.src = src;

  function imgDraw(ctx) {
    var width = image.width;
    var height = image.height;
    var aspect = width / height;
    var iW = 500;
    var iH = iW / aspect;
    ctx.canvas.width = iW;
    ctx.canvas.height = iH;
    ctx.drawImage(image, 0, 0, iW, iH);
  }

  var startDraw = function startDraw(_ref) {
    var nativeEvent = _ref.nativeEvent;
    if (nativeEvent.which === 3) return;
    setPos(_objectSpread(_objectSpread({}, pos), {}, {
      stx: nativeEvent.offsetX,
      sty: nativeEvent.offsetY
    }));
    setIsDrawing(true);
  };

  var drawing = function drawing(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    if (!isDrawing) return;
    setPos(_objectSpread(_objectSpread({}, pos), {}, {
      w: nativeEvent.offsetX - canvasRef.current.offsetLeft - pos.stx,
      h: nativeEvent.offsetY - canvasRef.current.offsetTop - pos.sty
    }));
    resetCanvas();
    ctx.strokeStyle = '#e60073';
    ctx.fillStyle = '#ff3399';
    ctx.globalAlpha = 0.2;
    ctx.fillRect(pos.stx, pos.sty, pos.w, pos.h);
    ctx.globalAlpha = 1;
    ctx.strokeRect(pos.stx, pos.sty, pos.w, pos.h);
  };

  var finishDraw = function finishDraw(_ref3) {
    var nativeEvent = _ref3.nativeEvent;
    if (!isDrawing) return;
    var text = window.prompt('text');
    resetCanvas();
    setPos(_objectSpread(_objectSpread({}, pos), {}, {
      text: text,
      id: datas[datas.length - 1] ? datas[datas.length - 1].id + 1 : 0
    }));
    resetCanvas();
    setIsDrawing(false);
  };

  function resetCanvas() {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      imgDraw(ctx);

      if (datas.length) {
        datas.forEach(function (data) {
          ctx.strokeStyle = '#00e6e6';
          ctx.fillStyle = '#66ff66';
          ctx.globalAlpha = 0.2;
          ctx.fillRect(data.stx, data.sty, data.w, data.h);
          ctx.globalAlpha = 1;
          ctx.strokeRect(data.stx, data.sty, data.w, data.h);
          ctx.fillStyle = 'black';
          ctx.globalAlpha = 1;
          ctx.textBaseline = 'top';
          ctx.font = 'bold 28px Libre Baskerville';
          var x = data.w > 0 ? data.stx : data.stx + data.w;
          var y = data.h > 0 ? data.sty : data.sty + data.h;
          ctx.fillText(data.text, x + 5, y + 5);
        });
      }
    }
  }

  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    setCtx(canvas.getContext('2d'));
  }, []);
  (0, _react.useEffect)(function () {
    if (pos.text && !isDrawing) {
      ctx.strokeStyle = '#00e6e6';
      ctx.fillStyle = '#66ff66';
      ctx.globalAlpha = 0.2;
      ctx.fillRect(pos.stx, pos.sty, pos.w, pos.h);
      ctx.globalAlpha = 1;
      ctx.strokeRect(pos.stx, pos.sty, pos.w, pos.h);
      ctx.fillStyle = 'black';
      ctx.globalAlpha = 1;
      ctx.textBaseline = 'top';
      ctx.font = 'bold 28px Libre Baskerville';
      var x = pos.w > 0 ? pos.stx : pos.stx + pos.w;
      var y = pos.h > 0 ? pos.sty : pos.sty + pos.h;
      ctx.fillText(pos.text, x + 5, y + 5);
      setDatas(function (prev) {
        return [].concat(_toConsumableArray(prev), [pos]);
      });
      setPos({});
    }
  }, [isDrawing]);
  (0, _react.useEffect)(function () {
    if (ctx) {
      resetCanvas();
    }
  }, [datas.length]);
  (0, _react.useEffect)(function () {
    if (ctx) {
      image.onload = function () {
        imgDraw(ctx);
      };
    }
  }, [ctx]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    onMouseDown: startDraw,
    onMouseUp: finishDraw,
    onMouseLeave: finishDraw,
    onMouseMove: drawing
  }), /*#__PURE__*/_react.default.createElement("ul", null, datas.map(function (data, idx) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: idx
    }, data.text, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return setDatas(function (prev) {
          return prev.filter(function (item) {
            return item.id !== data.id;
          });
        });
      }
    }, "x"));
  }))));
}

var _default = App;
exports.default = _default;
