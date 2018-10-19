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
/******/ 		"modal": 0
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
/******/ 	deferredModules.push(["./modal.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/bootstrap/js/src/modal.js":
/*!***************************************************************************************************!*\
  !*** /Users/uwaliyul/Documents/CodeBox/component-approach/node_modules/bootstrap/js/src/modal.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"../../node_modules/bootstrap/js/src/util.js\");\n\n\n\n/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.1.3): modal.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst Modal = (($) => {\n  /**\n   * ------------------------------------------------------------------------\n   * Constants\n   * ------------------------------------------------------------------------\n   */\n\n  const NAME               = 'modal'\n  const VERSION            = '4.1.3'\n  const DATA_KEY           = 'bs.modal'\n  const EVENT_KEY          = `.${DATA_KEY}`\n  const DATA_API_KEY       = '.data-api'\n  const JQUERY_NO_CONFLICT = $.fn[NAME]\n  const ESCAPE_KEYCODE     = 27 // KeyboardEvent.which value for Escape (Esc) key\n\n  const Default = {\n    backdrop : true,\n    keyboard : true,\n    focus    : true,\n    show     : true\n  }\n\n  const DefaultType = {\n    backdrop : '(boolean|string)',\n    keyboard : 'boolean',\n    focus    : 'boolean',\n    show     : 'boolean'\n  }\n\n  const Event = {\n    HIDE              : `hide${EVENT_KEY}`,\n    HIDDEN            : `hidden${EVENT_KEY}`,\n    SHOW              : `show${EVENT_KEY}`,\n    SHOWN             : `shown${EVENT_KEY}`,\n    FOCUSIN           : `focusin${EVENT_KEY}`,\n    RESIZE            : `resize${EVENT_KEY}`,\n    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,\n    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,\n    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,\n    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,\n    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`\n  }\n\n  const ClassName = {\n    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',\n    BACKDROP           : 'modal-backdrop',\n    OPEN               : 'modal-open',\n    FADE               : 'fade',\n    SHOW               : 'show'\n  }\n\n  const Selector = {\n    DIALOG             : '.modal-dialog',\n    DATA_TOGGLE        : '[data-toggle=\"modal\"]',\n    DATA_DISMISS       : '[data-dismiss=\"modal\"]',\n    FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',\n    STICKY_CONTENT     : '.sticky-top'\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Class Definition\n   * ------------------------------------------------------------------------\n   */\n\n  class Modal {\n    constructor(element, config) {\n      this._config              = this._getConfig(config)\n      this._element             = element\n      this._dialog              = element.querySelector(Selector.DIALOG)\n      this._backdrop            = null\n      this._isShown             = false\n      this._isBodyOverflowing   = false\n      this._ignoreBackdropClick = false\n      this._scrollbarWidth      = 0\n    }\n\n    // Getters\n\n    static get VERSION() {\n      return VERSION\n    }\n\n    static get Default() {\n      return Default\n    }\n\n    // Public\n\n    toggle(relatedTarget) {\n      return this._isShown ? this.hide() : this.show(relatedTarget)\n    }\n\n    show(relatedTarget) {\n      if (this._isTransitioning || this._isShown) {\n        return\n      }\n\n      if ($(this._element).hasClass(ClassName.FADE)) {\n        this._isTransitioning = true\n      }\n\n      const showEvent = $.Event(Event.SHOW, {\n        relatedTarget\n      })\n\n      $(this._element).trigger(showEvent)\n\n      if (this._isShown || showEvent.isDefaultPrevented()) {\n        return\n      }\n\n      this._isShown = true\n\n      this._checkScrollbar()\n      this._setScrollbar()\n\n      this._adjustDialog()\n\n      $(document.body).addClass(ClassName.OPEN)\n\n      this._setEscapeEvent()\n      this._setResizeEvent()\n\n      $(this._element).on(\n        Event.CLICK_DISMISS,\n        Selector.DATA_DISMISS,\n        (event) => this.hide(event)\n      )\n\n      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {\n        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {\n          if ($(event.target).is(this._element)) {\n            this._ignoreBackdropClick = true\n          }\n        })\n      })\n\n      this._showBackdrop(() => this._showElement(relatedTarget))\n    }\n\n    hide(event) {\n      if (event) {\n        event.preventDefault()\n      }\n\n      if (this._isTransitioning || !this._isShown) {\n        return\n      }\n\n      const hideEvent = $.Event(Event.HIDE)\n\n      $(this._element).trigger(hideEvent)\n\n      if (!this._isShown || hideEvent.isDefaultPrevented()) {\n        return\n      }\n\n      this._isShown = false\n      const transition = $(this._element).hasClass(ClassName.FADE)\n\n      if (transition) {\n        this._isTransitioning = true\n      }\n\n      this._setEscapeEvent()\n      this._setResizeEvent()\n\n      $(document).off(Event.FOCUSIN)\n\n      $(this._element).removeClass(ClassName.SHOW)\n\n      $(this._element).off(Event.CLICK_DISMISS)\n      $(this._dialog).off(Event.MOUSEDOWN_DISMISS)\n\n\n      if (transition) {\n        const transitionDuration  = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTransitionDurationFromElement(this._element)\n\n        $(this._element)\n          .one(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TRANSITION_END, (event) => this._hideModal(event))\n          .emulateTransitionEnd(transitionDuration)\n      } else {\n        this._hideModal()\n      }\n    }\n\n    dispose() {\n      $.removeData(this._element, DATA_KEY)\n\n      $(window, document, this._element, this._backdrop).off(EVENT_KEY)\n\n      this._config              = null\n      this._element             = null\n      this._dialog              = null\n      this._backdrop            = null\n      this._isShown             = null\n      this._isBodyOverflowing   = null\n      this._ignoreBackdropClick = null\n      this._scrollbarWidth      = null\n    }\n\n    handleUpdate() {\n      this._adjustDialog()\n    }\n\n    // Private\n\n    _getConfig(config) {\n      config = {\n        ...Default,\n        ...config\n      }\n      _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].typeCheckConfig(NAME, config, DefaultType)\n      return config\n    }\n\n    _showElement(relatedTarget) {\n      const transition = $(this._element).hasClass(ClassName.FADE)\n\n      if (!this._element.parentNode ||\n         this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {\n        // Don't move modal's DOM position\n        document.body.appendChild(this._element)\n      }\n\n      this._element.style.display = 'block'\n      this._element.removeAttribute('aria-hidden')\n      this._element.scrollTop = 0\n\n      if (transition) {\n        _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reflow(this._element)\n      }\n\n      $(this._element).addClass(ClassName.SHOW)\n\n      if (this._config.focus) {\n        this._enforceFocus()\n      }\n\n      const shownEvent = $.Event(Event.SHOWN, {\n        relatedTarget\n      })\n\n      const transitionComplete = () => {\n        if (this._config.focus) {\n          this._element.focus()\n        }\n        this._isTransitioning = false\n        $(this._element).trigger(shownEvent)\n      }\n\n      if (transition) {\n        const transitionDuration  = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTransitionDurationFromElement(this._element)\n\n        $(this._dialog)\n          .one(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TRANSITION_END, transitionComplete)\n          .emulateTransitionEnd(transitionDuration)\n      } else {\n        transitionComplete()\n      }\n    }\n\n    _enforceFocus() {\n      $(document)\n        .off(Event.FOCUSIN) // Guard against infinite focus loop\n        .on(Event.FOCUSIN, (event) => {\n          if (document !== event.target &&\n              this._element !== event.target &&\n              $(this._element).has(event.target).length === 0) {\n            this._element.focus()\n          }\n        })\n    }\n\n    _setEscapeEvent() {\n      if (this._isShown && this._config.keyboard) {\n        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {\n          if (event.which === ESCAPE_KEYCODE) {\n            event.preventDefault()\n            this.hide()\n          }\n        })\n      } else if (!this._isShown) {\n        $(this._element).off(Event.KEYDOWN_DISMISS)\n      }\n    }\n\n    _setResizeEvent() {\n      if (this._isShown) {\n        $(window).on(Event.RESIZE, (event) => this.handleUpdate(event))\n      } else {\n        $(window).off(Event.RESIZE)\n      }\n    }\n\n    _hideModal() {\n      this._element.style.display = 'none'\n      this._element.setAttribute('aria-hidden', true)\n      this._isTransitioning = false\n      this._showBackdrop(() => {\n        $(document.body).removeClass(ClassName.OPEN)\n        this._resetAdjustments()\n        this._resetScrollbar()\n        $(this._element).trigger(Event.HIDDEN)\n      })\n    }\n\n    _removeBackdrop() {\n      if (this._backdrop) {\n        $(this._backdrop).remove()\n        this._backdrop = null\n      }\n    }\n\n    _showBackdrop(callback) {\n      const animate = $(this._element).hasClass(ClassName.FADE)\n        ? ClassName.FADE : ''\n\n      if (this._isShown && this._config.backdrop) {\n        this._backdrop = document.createElement('div')\n        this._backdrop.className = ClassName.BACKDROP\n\n        if (animate) {\n          this._backdrop.classList.add(animate)\n        }\n\n        $(this._backdrop).appendTo(document.body)\n\n        $(this._element).on(Event.CLICK_DISMISS, (event) => {\n          if (this._ignoreBackdropClick) {\n            this._ignoreBackdropClick = false\n            return\n          }\n          if (event.target !== event.currentTarget) {\n            return\n          }\n          if (this._config.backdrop === 'static') {\n            this._element.focus()\n          } else {\n            this.hide()\n          }\n        })\n\n        if (animate) {\n          _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reflow(this._backdrop)\n        }\n\n        $(this._backdrop).addClass(ClassName.SHOW)\n\n        if (!callback) {\n          return\n        }\n\n        if (!animate) {\n          callback()\n          return\n        }\n\n        const backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTransitionDurationFromElement(this._backdrop)\n\n        $(this._backdrop)\n          .one(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TRANSITION_END, callback)\n          .emulateTransitionEnd(backdropTransitionDuration)\n      } else if (!this._isShown && this._backdrop) {\n        $(this._backdrop).removeClass(ClassName.SHOW)\n\n        const callbackRemove = () => {\n          this._removeBackdrop()\n          if (callback) {\n            callback()\n          }\n        }\n\n        if ($(this._element).hasClass(ClassName.FADE)) {\n          const backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTransitionDurationFromElement(this._backdrop)\n\n          $(this._backdrop)\n            .one(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TRANSITION_END, callbackRemove)\n            .emulateTransitionEnd(backdropTransitionDuration)\n        } else {\n          callbackRemove()\n        }\n      } else if (callback) {\n        callback()\n      }\n    }\n\n    // ----------------------------------------------------------------------\n    // the following methods are used to handle overflowing modals\n    // todo (fat): these should probably be refactored out of modal.js\n    // ----------------------------------------------------------------------\n\n    _adjustDialog() {\n      const isModalOverflowing =\n        this._element.scrollHeight > document.documentElement.clientHeight\n\n      if (!this._isBodyOverflowing && isModalOverflowing) {\n        this._element.style.paddingLeft = `${this._scrollbarWidth}px`\n      }\n\n      if (this._isBodyOverflowing && !isModalOverflowing) {\n        this._element.style.paddingRight = `${this._scrollbarWidth}px`\n      }\n    }\n\n    _resetAdjustments() {\n      this._element.style.paddingLeft = ''\n      this._element.style.paddingRight = ''\n    }\n\n    _checkScrollbar() {\n      const rect = document.body.getBoundingClientRect()\n      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth\n      this._scrollbarWidth = this._getScrollbarWidth()\n    }\n\n    _setScrollbar() {\n      if (this._isBodyOverflowing) {\n        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set\n        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set\n        const fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT))\n        const stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT))\n\n        // Adjust fixed content padding\n        $(fixedContent).each((index, element) => {\n          const actualPadding = element.style.paddingRight\n          const calculatedPadding = $(element).css('padding-right')\n          $(element)\n            .data('padding-right', actualPadding)\n            .css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n        })\n\n        // Adjust sticky content margin\n        $(stickyContent).each((index, element) => {\n          const actualMargin = element.style.marginRight\n          const calculatedMargin = $(element).css('margin-right')\n          $(element)\n            .data('margin-right', actualMargin)\n            .css('margin-right', `${parseFloat(calculatedMargin) - this._scrollbarWidth}px`)\n        })\n\n        // Adjust body padding\n        const actualPadding = document.body.style.paddingRight\n        const calculatedPadding = $(document.body).css('padding-right')\n        $(document.body)\n          .data('padding-right', actualPadding)\n          .css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n      }\n    }\n\n    _resetScrollbar() {\n      // Restore fixed content padding\n      const fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT))\n      $(fixedContent).each((index, element) => {\n        const padding = $(element).data('padding-right')\n        $(element).removeData('padding-right')\n        element.style.paddingRight = padding ? padding : ''\n      })\n\n      // Restore sticky content\n      const elements = [].slice.call(document.querySelectorAll(`${Selector.STICKY_CONTENT}`))\n      $(elements).each((index, element) => {\n        const margin = $(element).data('margin-right')\n        if (typeof margin !== 'undefined') {\n          $(element).css('margin-right', margin).removeData('margin-right')\n        }\n      })\n\n      // Restore body padding\n      const padding = $(document.body).data('padding-right')\n      $(document.body).removeData('padding-right')\n      document.body.style.paddingRight = padding ? padding : ''\n    }\n\n    _getScrollbarWidth() { // thx d.walsh\n      const scrollDiv = document.createElement('div')\n      scrollDiv.className = ClassName.SCROLLBAR_MEASURER\n      document.body.appendChild(scrollDiv)\n      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth\n      document.body.removeChild(scrollDiv)\n      return scrollbarWidth\n    }\n\n    // Static\n\n    static _jQueryInterface(config, relatedTarget) {\n      return this.each(function () {\n        let data = $(this).data(DATA_KEY)\n        const _config = {\n          ...Default,\n          ...$(this).data(),\n          ...typeof config === 'object' && config ? config : {}\n        }\n\n        if (!data) {\n          data = new Modal(this, _config)\n          $(this).data(DATA_KEY, data)\n        }\n\n        if (typeof config === 'string') {\n          if (typeof data[config] === 'undefined') {\n            throw new TypeError(`No method named \"${config}\"`)\n          }\n          data[config](relatedTarget)\n        } else if (_config.show) {\n          data.show(relatedTarget)\n        }\n      })\n    }\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Data Api implementation\n   * ------------------------------------------------------------------------\n   */\n\n  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n    let target\n    const selector = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectorFromElement(this)\n\n    if (selector) {\n      target = document.querySelector(selector)\n    }\n\n    const config = $(target).data(DATA_KEY)\n      ? 'toggle' : {\n        ...$(target).data(),\n        ...$(this).data()\n      }\n\n    if (this.tagName === 'A' || this.tagName === 'AREA') {\n      event.preventDefault()\n    }\n\n    const $target = $(target).one(Event.SHOW, (showEvent) => {\n      if (showEvent.isDefaultPrevented()) {\n        // Only register focus restorer if modal will actually get shown\n        return\n      }\n\n      $target.one(Event.HIDDEN, () => {\n        if ($(this).is(':visible')) {\n          this.focus()\n        }\n      })\n    })\n\n    Modal._jQueryInterface.call($(target), config, this)\n  })\n\n  /**\n   * ------------------------------------------------------------------------\n   * jQuery\n   * ------------------------------------------------------------------------\n   */\n\n  $.fn[NAME] = Modal._jQueryInterface\n  $.fn[NAME].Constructor = Modal\n  $.fn[NAME].noConflict = function () {\n    $.fn[NAME] = JQUERY_NO_CONFLICT\n    return Modal._jQueryInterface\n  }\n\n  return Modal\n})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n\n//# sourceURL=webpack:////Users/uwaliyul/Documents/CodeBox/component-approach/node_modules/bootstrap/js/src/modal.js?");

/***/ }),

/***/ "./modal.js":
/*!******************!*\
  !*** ./modal.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! bootstrap/js/src/modal */ \"../../node_modules/bootstrap/js/src/modal.js\");\n\n//# sourceURL=webpack:///./modal.js?");

/***/ })

/******/ });