"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _uiComponentsShared = require("@algolia/ui-components-shared");

var _Template = _interopRequireDefault(require("../Template/Template.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InfiniteHits = function InfiniteHits(_ref) {
  var results = _ref.results,
      hits = _ref.hits,
      bindEvent = _ref.bindEvent,
      sendEvent = _ref.sendEvent,
      hasShowPrevious = _ref.hasShowPrevious,
      showPrevious = _ref.showPrevious,
      showMore = _ref.showMore,
      isFirstPage = _ref.isFirstPage,
      isLastPage = _ref.isLastPage,
      cssClasses = _ref.cssClasses,
      templateProps = _ref.templateProps;

  if (results.hits.length === 0) {
    return (0, _preact.h)(_Template.default, _extends({}, templateProps, {
      templateKey: "empty",
      rootProps: {
        className: (0, _uiComponentsShared.cx)(cssClasses.root, cssClasses.emptyRoot)
      },
      data: results
    }));
  }

  return (0, _preact.h)("div", {
    className: cssClasses.root
  }, hasShowPrevious && (0, _preact.h)(_Template.default, _extends({}, templateProps, {
    templateKey: "showPreviousText",
    rootTagName: "button",
    rootProps: {
      className: (0, _uiComponentsShared.cx)(cssClasses.loadPrevious, isFirstPage && cssClasses.disabledLoadPrevious),
      disabled: isFirstPage,
      onClick: showPrevious
    }
  })), (0, _preact.h)("ol", {
    className: cssClasses.list
  }, hits.map(function (hit, position) {
    return (0, _preact.h)(_Template.default, _extends({}, templateProps, {
      templateKey: "item",
      rootTagName: "li",
      rootProps: {
        className: cssClasses.item
      },
      key: hit.objectID,
      data: _objectSpread(_objectSpread({}, hit), {}, {
        __hitIndex: position
      }),
      bindEvent: bindEvent,
      sendEvent: sendEvent
    }));
  })), (0, _preact.h)(_Template.default, _extends({}, templateProps, {
    templateKey: "showMoreText",
    rootTagName: "button",
    rootProps: {
      className: (0, _uiComponentsShared.cx)(cssClasses.loadMore, isLastPage && cssClasses.disabledLoadMore),
      disabled: isLastPage,
      onClick: showMore
    }
  })));
};

var _default = InfiniteHits;
exports.default = _default;