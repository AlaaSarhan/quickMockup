var LibQMock =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./elements/index.js");


function createApp( canvasContainerId, width, height ) {
    const canvas = new draw2d.Canvas( canvasContainerId, width, height )
    canvas.setScrollArea('#'+canvasContainerId)

    canvas.installEditPolicy(new draw2d.policy.canvas.CanvasPolicy({
        onMouseDown: function(canvas) {
            const selectedFigure = canvas.getPrimarySelection()
            if (selectedFigure && selectedFigure !== canvas.getFigures().last()) {
                canvas.getPrimarySelection().toFront()
            }
        }
    }))

    return {
        canvas,
        elements: _elements__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
}


/***/ }),

/***/ "./elements/Window.js":
/*!****************************!*\
  !*** ./elements/Window.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape_composite_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shape/composite/Container */ "./shape/composite/Container.js");


const titleLabelEditor = new draw2d.ui.LabelInplaceEditor()

const createWindow = ({
    height = 480,
    title = 'Window',
    titleBarColor = '#333',
    titleBarBgColor = '#999',
    width = 640,
}) => {
    const window = new _shape_composite_Container__WEBPACK_IMPORTED_MODULE_0__["default"]({
        bgColor: 'rgba(255, 255, 255, .5)',
        stroke: 1,
        width,
        height
    })

    const titleBarLabel = new draw2d.shape.basic.Label({
        bgColor: titleBarBgColor,
        text: title,
        fontColor: titleBarColor,
        stroke: 0,
        height: 24,
        width
    })

    window.add(titleBarLabel, new draw2d.layout.locator.XYAbsPortLocator(0, 0))

    window.on('dblclick', () => { titleLabelEditor.start(titleBarLabel) })

    return window
}

/* harmony default export */ __webpack_exports__["default"] = (createWindow);


/***/ }),

/***/ "./elements/index.js":
/*!***************************!*\
  !*** ./elements/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Window */ "./elements/Window.js");


/* harmony default export */ __webpack_exports__["default"] = ({
    createWindow: _Window__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./shape/composite/Container.js":
/*!**************************************!*\
  !*** ./shape/composite/Container.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Container = draw2d.shape.composite.StrongComposite.extend({
    assignFigure: function (figure) {
        this.assignedFigures.add(figure)
        figure.setComposite(this)
        return this
    },

    unassignFigure: function (figure) {
        this.assignedFigures.remove(figure)
        figure.setComposite(null)
        return this
    },

    onDragLeave: function(figure) {
        this.unassignFigure(figure)
    },

    onCatch: function (droppedFigure, x, y, shiftKey, ctrlKey) {
        if (droppedFigure.getComposite()) {
            return
        }

        if (this.getBoundingBox().contains(droppedFigure.getBoundingBox())) {
            this.assignFigure(droppedFigure)
        }
    },

    setPosition: function (x, y) {
        let oldX = this.x
        let oldY = this.y

        this._super(x, y)

        let dx = this.x - oldX
        let dy = this.y - oldY

        if (dx === 0 && dy === 0) {
          return this
        }

        this.assignedFigures.each(function (i, figure) {
            figure.translate(dx, dy)
        })

        return this
    },

    toFront: function(figure) {
        this._super(figure)
    }

})

/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ })

/******/ });
//# sourceMappingURL=libqmock.js.map