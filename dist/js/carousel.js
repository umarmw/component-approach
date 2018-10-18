/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"carousel": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./bootstrap-carousel.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/bootstrap/js/src/carousel.js":
/*!******************************************************************************************************!*\
  !*** /Users/uwaliyul/Documents/CodeBox/component-approach/node_modules/bootstrap/js/src/carousel.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"../../node_modules/bootstrap/js/src/util.js\");\n\n\n\n/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.1.3): carousel.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst Carousel = (($) => {\n  /**\n   * ------------------------------------------------------------------------\n   * Constants\n   * ------------------------------------------------------------------------\n   */\n\n  const NAME                   = 'carousel'\n  const VERSION                = '4.1.3'\n  const DATA_KEY               = 'bs.carousel'\n  const EVENT_KEY              = `.${DATA_KEY}`\n  const DATA_API_KEY           = '.data-api'\n  const JQUERY_NO_CONFLICT     = $.fn[NAME]\n  const ARROW_LEFT_KEYCODE     = 37 // KeyboardEvent.which value for left arrow key\n  const ARROW_RIGHT_KEYCODE    = 39 // KeyboardEvent.which value for right arrow key\n  const TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch\n\n  const Default = {\n    interval : 5000,\n    keyboard : true,\n    slide    : false,\n    pause    : 'hover',\n    wrap     : true\n  }\n\n  const DefaultType = {\n    interval : '(number|boolean)',\n    keyboard : 'boolean',\n    slide    : '(boolean|string)',\n    pause    : '(string|boolean)',\n    wrap     : 'boolean'\n  }\n\n  const Direction = {\n    NEXT     : 'next',\n    PREV     : 'prev',\n    LEFT     : 'left',\n    RIGHT    : 'right'\n  }\n\n  const Event = {\n    SLIDE          : `slide${EVENT_KEY}`,\n    SLID           : `slid${EVENT_KEY}`,\n    KEYDOWN        : `keydown${EVENT_KEY}`,\n    MOUSEENTER     : `mouseenter${EVENT_KEY}`,\n    MOUSELEAVE     : `mouseleave${EVENT_KEY}`,\n    TOUCHEND       : `touchend${EVENT_KEY}`,\n    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,\n    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`\n  }\n\n  const ClassName = {\n    CAROUSEL : 'carousel',\n    ACTIVE   : 'active',\n    SLIDE    : 'slide',\n    RIGHT    : 'carousel-item-right',\n    LEFT     : 'carousel-item-left',\n    NEXT     : 'carousel-item-next',\n    PREV     : 'carousel-item-prev',\n    ITEM     : 'carousel-item'\n  }\n\n  const Selector = {\n    ACTIVE      : '.active',\n    ACTIVE_ITEM : '.active.carousel-item',\n    ITEM        : '.carousel-item',\n    NEXT_PREV   : '.carousel-item-next, .carousel-item-prev',\n    INDICATORS  : '.carousel-indicators',\n    DATA_SLIDE  : '[data-slide], [data-slide-to]',\n    DATA_RIDE   : '[data-ride=\"carousel\"]'\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Class Definition\n   * ------------------------------------------------------------------------\n   */\n\n  class Carousel {\n    constructor(element, config) {\n      this._items              = null\n      this._interval           = null\n      this._activeElement      = null\n\n      this._isPaused           = false\n      this._isSliding          = false\n\n      this.touchTimeout        = null\n\n      this._config             = this._getConfig(config)\n      this._element            = $(element)[0]\n      this._indicatorsElement  = this._element.querySelector(Selector.INDICATORS)\n\n      this._addEventListeners()\n    }\n\n    // Getters\n\n    static get VERSION() {\n      return VERSION\n    }\n\n    static get Default() {\n      return Default\n    }\n\n    // Public\n\n    next() {\n      if (!this._isSliding) {\n        this._slide(Direction.NEXT)\n      }\n    }\n\n    nextWhenVisible() {\n      // Don't call next when the page isn't visible\n      // or the carousel or its parent isn't visible\n      if (!document.hidden &&\n        ($(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden')) {\n        this.next()\n      }\n    }\n\n    prev() {\n      if (!this._isSliding) {\n        this._slide(Direction.PREV)\n      }\n    }\n\n    pause(event) {\n      if (!event) {\n        this._isPaused = true\n      }\n\n      if (this._element.querySelector(Selector.NEXT_PREV)) {\n        _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].triggerTransitionEnd(this._element)\n        this.cycle(true)\n      }\n\n      clearInterval(this._interval)\n      this._interval = null\n    }\n\n    cycle(event) {\n      if (!event) {\n        this._isPaused = false\n      }\n\n      if (this._interval) {\n        clearInterval(this._interval)\n        this._interval = null\n      }\n\n      if (this._config.interval && !this._isPaused) {\n        this._interval = setInterval(\n          (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),\n          this._config.interval\n        )\n      }\n    }\n\n    to(index) {\n      this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM)\n\n      const activeIndex = this._getItemIndex(this._activeElement)\n\n      if (index > this._items.length - 1 || index < 0) {\n        return\n      }\n\n      if (this._isSliding) {\n        $(this._element).one(Event.SLID, () => this.to(index))\n        return\n      }\n\n      if (activeIndex === index) {\n        this.pause()\n        this.cycle()\n        return\n      }\n\n      const direction = index > activeIndex\n        ? Direction.NEXT\n        : Direction.PREV\n\n      this._slide(direction, this._items[index])\n    }\n\n    dispose() {\n      $(this._element).off(EVENT_KEY)\n      $.removeData(this._element, DATA_KEY)\n\n      this._items             = null\n      this._config            = null\n      this._element           = null\n      this._interval          = null\n      this._isPaused          = null\n      this._isSliding         = null\n      this._activeElement     = null\n      this._indicatorsElement = null\n    }\n\n    // Private\n\n    _getConfig(config) {\n      config = {\n        ...Default,\n        ...config\n      }\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].typeCheckConfig(NAME, config, DefaultType)\n      return config\n    }\n\n    _addEventListeners() {\n      if (this._config.keyboard) {\n        $(this._element)\n          .on(Event.KEYDOWN, (event) => this._keydown(event))\n      }\n\n      if (this._config.pause === 'hover') {\n        $(this._element)\n          .on(Event.MOUSEENTER, (event) => this.pause(event))\n          .on(Event.MOUSELEAVE, (event) => this.cycle(event))\n        if ('ontouchstart' in document.documentElement) {\n          // If it's a touch-enabled device, mouseenter/leave are fired as\n          // part of the mouse compatibility events on first tap - the carousel\n          // would stop cycling until user tapped out of it;\n          // here, we listen for touchend, explicitly pause the carousel\n          // (as if it's the second time we tap on it, mouseenter compat event\n          // is NOT fired) and after a timeout (to allow for mouse compatibility\n          // events to fire) we explicitly restart cycling\n          $(this._element).on(Event.TOUCHEND, () => {\n            this.pause()\n            if (this.touchTimeout) {\n              clearTimeout(this.touchTimeout)\n            }\n            this.touchTimeout = setTimeout((event) => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval)\n          })\n        }\n      }\n    }\n\n    _keydown(event) {\n      if (/input|textarea/i.test(event.target.tagName)) {\n        return\n      }\n\n      switch (event.which) {\n        case ARROW_LEFT_KEYCODE:\n          event.preventDefault()\n          this.prev()\n          break\n        case ARROW_RIGHT_KEYCODE:\n          event.preventDefault()\n          this.next()\n          break\n        default:\n      }\n    }\n\n    _getItemIndex(element) {\n      this._items = element && element.parentNode\n        ? [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM))\n        : []\n      return this._items.indexOf(element)\n    }\n\n    _getItemByDirection(direction, activeElement) {\n      const isNextDirection = direction === Direction.NEXT\n      const isPrevDirection = direction === Direction.PREV\n      const activeIndex     = this._getItemIndex(activeElement)\n      const lastItemIndex   = this._items.length - 1\n      const isGoingToWrap   = isPrevDirection && activeIndex === 0 ||\n                              isNextDirection && activeIndex === lastItemIndex\n\n      if (isGoingToWrap && !this._config.wrap) {\n        return activeElement\n      }\n\n      const delta     = direction === Direction.PREV ? -1 : 1\n      const itemIndex = (activeIndex + delta) % this._items.length\n\n      return itemIndex === -1\n        ? this._items[this._items.length - 1] : this._items[itemIndex]\n    }\n\n    _triggerSlideEvent(relatedTarget, eventDirectionName) {\n      const targetIndex = this._getItemIndex(relatedTarget)\n      const fromIndex = this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM))\n      const slideEvent = $.Event(Event.SLIDE, {\n        relatedTarget,\n        direction: eventDirectionName,\n        from: fromIndex,\n        to: targetIndex\n      })\n\n      $(this._element).trigger(slideEvent)\n\n      return slideEvent\n    }\n\n    _setActiveIndicatorElement(element) {\n      if (this._indicatorsElement) {\n        const indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE))\n        $(indicators)\n          .removeClass(ClassName.ACTIVE)\n\n        const nextIndicator = this._indicatorsElement.children[\n          this._getItemIndex(element)\n        ]\n\n        if (nextIndicator) {\n          $(nextIndicator).addClass(ClassName.ACTIVE)\n        }\n      }\n    }\n\n    _slide(direction, element) {\n      const activeElement = this._element.querySelector(Selector.ACTIVE_ITEM)\n      const activeElementIndex = this._getItemIndex(activeElement)\n      const nextElement   = element || activeElement &&\n        this._getItemByDirection(direction, activeElement)\n      const nextElementIndex = this._getItemIndex(nextElement)\n      const isCycling = Boolean(this._interval)\n\n      let directionalClassName\n      let orderClassName\n      let eventDirectionName\n\n      if (direction === Direction.NEXT) {\n        directionalClassName = ClassName.LEFT\n        orderClassName = ClassName.NEXT\n        eventDirectionName = Direction.LEFT\n      } else {\n        directionalClassName = ClassName.RIGHT\n        orderClassName = ClassName.PREV\n        eventDirectionName = Direction.RIGHT\n      }\n\n      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {\n        this._isSliding = false\n        return\n      }\n\n      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName)\n      if (slideEvent.isDefaultPrevented()) {\n        return\n      }\n\n      if (!activeElement || !nextElement) {\n        // Some weirdness is happening, so we bail\n        return\n      }\n\n      this._isSliding = true\n\n      if (isCycling) {\n        this.pause()\n      }\n\n      this._setActiveIndicatorElement(nextElement)\n\n      const slidEvent = $.Event(Event.SLID, {\n        relatedTarget: nextElement,\n        direction: eventDirectionName,\n        from: activeElementIndex,\n        to: nextElementIndex\n      })\n\n      if ($(this._element).hasClass(ClassName.SLIDE)) {\n        $(nextElement).addClass(orderClassName)\n\n        _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reflow(nextElement)\n\n        $(activeElement).addClass(directionalClassName)\n        $(nextElement).addClass(directionalClassName)\n\n        const transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTransitionDurationFromElement(activeElement)\n\n        $(activeElement)\n          .one(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TRANSITION_END, () => {\n            $(nextElement)\n              .removeClass(`${directionalClassName} ${orderClassName}`)\n              .addClass(ClassName.ACTIVE)\n\n            $(activeElement).removeClass(`${ClassName.ACTIVE} ${orderClassName} ${directionalClassName}`)\n\n            this._isSliding = false\n\n            setTimeout(() => $(this._element).trigger(slidEvent), 0)\n          })\n          .emulateTransitionEnd(transitionDuration)\n      } else {\n        $(activeElement).removeClass(ClassName.ACTIVE)\n        $(nextElement).addClass(ClassName.ACTIVE)\n\n        this._isSliding = false\n        $(this._element).trigger(slidEvent)\n      }\n\n      if (isCycling) {\n        this.cycle()\n      }\n    }\n\n    // Static\n\n    static _jQueryInterface(config) {\n      return this.each(function () {\n        let data = $(this).data(DATA_KEY)\n        let _config = {\n          ...Default,\n          ...$(this).data()\n        }\n\n        if (typeof config === 'object') {\n          _config = {\n            ..._config,\n            ...config\n          }\n        }\n\n        const action = typeof config === 'string' ? config : _config.slide\n\n        if (!data) {\n          data = new Carousel(this, _config)\n          $(this).data(DATA_KEY, data)\n        }\n\n        if (typeof config === 'number') {\n          data.to(config)\n        } else if (typeof action === 'string') {\n          if (typeof data[action] === 'undefined') {\n            throw new TypeError(`No method named \"${action}\"`)\n          }\n          data[action]()\n        } else if (_config.interval) {\n          data.pause()\n          data.cycle()\n        }\n      })\n    }\n\n    static _dataApiClickHandler(event) {\n      const selector = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectorFromElement(this)\n\n      if (!selector) {\n        return\n      }\n\n      const target = $(selector)[0]\n\n      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {\n        return\n      }\n\n      const config = {\n        ...$(target).data(),\n        ...$(this).data()\n      }\n      const slideIndex = this.getAttribute('data-slide-to')\n\n      if (slideIndex) {\n        config.interval = false\n      }\n\n      Carousel._jQueryInterface.call($(target), config)\n\n      if (slideIndex) {\n        $(target).data(DATA_KEY).to(slideIndex)\n      }\n\n      event.preventDefault()\n    }\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Data Api implementation\n   * ------------------------------------------------------------------------\n   */\n\n  $(document)\n    .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler)\n\n  $(window).on(Event.LOAD_DATA_API, () => {\n    const carousels = [].slice.call(document.querySelectorAll(Selector.DATA_RIDE))\n    for (let i = 0, len = carousels.length; i < len; i++) {\n      const $carousel = $(carousels[i])\n      Carousel._jQueryInterface.call($carousel, $carousel.data())\n    }\n  })\n\n  /**\n   * ------------------------------------------------------------------------\n   * jQuery\n   * ------------------------------------------------------------------------\n   */\n\n  $.fn[NAME] = Carousel._jQueryInterface\n  $.fn[NAME].Constructor = Carousel\n  $.fn[NAME].noConflict = function () {\n    $.fn[NAME] = JQUERY_NO_CONFLICT\n    return Carousel._jQueryInterface\n  }\n\n  return Carousel\n})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\n\n//# sourceURL=webpack:////Users/uwaliyul/Documents/CodeBox/component-approach/node_modules/bootstrap/js/src/carousel.js?");

/***/ }),

/***/ "./bootstrap-carousel.js":
/*!*******************************!*\
  !*** ./bootstrap-carousel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\n__webpack_require__(/*! bootstrap/js/src/carousel */ \"../../node_modules/bootstrap/js/src/carousel.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"[module>bootstrap-carousel]\");\n(0, _jquery2.default)('.carousel').carousel();\n\n//# sourceURL=webpack:///./bootstrap-carousel.js?");

/***/ })

/******/ });