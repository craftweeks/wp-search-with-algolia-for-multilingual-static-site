function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { cx } from '@algolia/ui-components-shared';
import { h, render } from 'preact';
import Selector from "../../components/Selector/Selector.js";
import connectHitsPerPage from "../../connectors/hits-per-page/connectHitsPerPage.js";
import { component } from "../../lib/suit.js";
import { getContainerNode, createDocumentationMessageGenerator, find } from "../../lib/utils/index.js";
var withUsage = createDocumentationMessageGenerator({
  name: 'hits-per-page'
});
var suit = component('HitsPerPage');
var renderer = function renderer(_ref) {
  var containerNode = _ref.containerNode,
    cssClasses = _ref.cssClasses;
  return function (_ref2, isFirstRendering) {
    var items = _ref2.items,
      refine = _ref2.refine;
    if (isFirstRendering) return;
    var _ref3 = find(items, function (_ref4) {
        var isRefined = _ref4.isRefined;
        return isRefined;
      }) || {},
      currentValue = _ref3.value;
    render(h("div", {
      className: cssClasses.root
    }, h(Selector, {
      cssClasses: cssClasses,
      currentValue: currentValue,
      options: items
      // @ts-expect-error: the refine function expects a number, but setValue will call it with a string. We don't want to change the type of the refine function because it's part of the connector API.
      ,
      setValue: refine
    })), containerNode);
  };
};
var hitsPerPage = function hitsPerPage(widgetParams) {
  var _ref5 = widgetParams || {},
    container = _ref5.container,
    items = _ref5.items,
    _ref5$cssClasses = _ref5.cssClasses,
    userCssClasses = _ref5$cssClasses === void 0 ? {} : _ref5$cssClasses,
    transformItems = _ref5.transformItems;
  if (!container) {
    throw new Error(withUsage('The `container` option is required.'));
  }
  var containerNode = getContainerNode(container);
  var cssClasses = {
    root: cx(suit(), userCssClasses.root),
    select: cx(suit({
      descendantName: 'select'
    }), userCssClasses.select),
    option: cx(suit({
      descendantName: 'option'
    }), userCssClasses.option)
  };
  var specializedRenderer = renderer({
    containerNode: containerNode,
    cssClasses: cssClasses
  });
  var makeWidget = connectHitsPerPage(specializedRenderer, function () {
    return render(null, containerNode);
  });
  return _objectSpread(_objectSpread({}, makeWidget({
    items: items,
    transformItems: transformItems
  })), {}, {
    $$widgetType: 'ais.hitsPerPage'
  });
};
export default hitsPerPage;