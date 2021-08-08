module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Feature.js":
/*!*******************************!*\
  !*** ./components/Feature.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\components\\Feature.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    maxWidth: 250,
    height: 350
  },
  media: {
    height: 350
  }
});

const FeatureBox = props => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      align: "center",
      children: "OUR MOST POPULAR DISHES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      md: 12,
      lg: 12,
      className: "resturant",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          className: classes.root,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "250px",
              height: "190px",
              className: "restaurant-image" // className={classes.media}
              ,
              src: "data:image/jpeg;base64,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"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                gutterBottom: true,
                variant: "h5",
                component: "h2",
                children: "Las Vegas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: "Test meal - 9260"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              color: "primary",
              children: "\u20AC 159.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              size: "small",
              className: "button",
              children: ["To Product ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 28
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          className: classes.root,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "250px",
              height: "190px",
              className: "restaurant-image" // className={classes.media}
              ,
              src: "data:image/jpeg;base64,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"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                gutterBottom: true,
                variant: "h5",
                component: "h2",
                children: "Silicon Valley"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: "Test meal - 9261"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              color: "primary",
              children: "\u20AC 30.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              size: "small",
              className: "button",
              children: ["To Product ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 28
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          className: classes.root,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "250px",
              height: "190px",
              className: "restaurant-image" // className={classes.media}
              ,
              src: "https://upserve.com/media/sites/2/Restaurant-Decor-Blog.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                gutterBottom: true,
                variant: "h5",
                component: "h2",
                children: "Dallas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: "Test meal - 9262"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              color: "primary",
              children: "\u20AC 0.20"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              size: "small",
              className: "button",
              children: ["To Product ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 28
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          className: classes.root,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "250px",
              height: "190px",
              className: "restaurant-image" // className={classes.media}
              ,
              src: "data:image/jpeg;base64,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"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                gutterBottom: true,
                variant: "h5",
                component: "h2",
                children: "Chicago"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: "Test meal - 9263"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              color: "primary",
              children: "\u20AC 0.60"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              size: "small",
              className: "button",
              children: ["To Product ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 28
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), props.features.map((feature, key) => feature.id % 2 !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: feature.id === 2 ? "align-items-center" : "align-items-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: feature.img,
            alt: "",
            className: "img-fluid d-block mx-auto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: {
          size: 6,
          offset: 1
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-5 mt-sm-0 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "my-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: feature.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "text-dark font-weight-normal mb-3 pt-3",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-muted mb-3 f-15",
            children: feature.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 15
      }, undefined)]
    }, key, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "align-items-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "my-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "mdi mdi-account-group"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "text-dark font-weight-normal mb-3 pt-3",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-muted mb-3 f-15",
            children: feature.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: {
          size: 5,
          offset: 1
        },
        className: "mt-5 mt-sm-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: feature.img,
            alt: "",
            className: "img-fluid d-block mx-auto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 15
      }, undefined)]
    }, key, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }, undefined))]
  }, void 0, true);
};

const Feature = () => {
  const resturants = [];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section",
    id: "feature",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureBox, {
        features: resturants
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section position-relative",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: 7,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pr-lg-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "mb-4 font-weight-normal line-height-1_4",
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Welcome to the Fleksa Demo Restaurant webshop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 74
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-muted mb-4 pb-2",
                children: "If you are a customer please do not use this website to order. This is for demo purposes only. We (fleksa & Restaurant Partner) are at your disposal. Thank you, Team Fleksa!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-5 mt-lg-0",
              className: "demo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "500px",
                src: "data:image/jpeg;base64,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",
                alt: "",
                className: "img-fluid mx-auto d-block"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      class: "section1",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        align: "center",
        children: "WHAT OUR CUSTOMERS SAY ABOUT US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        lg: 12,
        className: "resturant",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            height: "200px",
            width: "100px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "60px",
                height: "60px",
                class: "image" // className={classes.media}
                ,
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "120px",
                height: "70px",
                class: "image1" // className={classes.media}
                ,
                src: "https://ak.picdn.net/shutterstock/videos/18557936/thumb/11.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "Fleksa"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: "Best test restaurant"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: "Source: TRIPADVISOR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            height: "200px",
            width: "100px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "60px",
                height: "60px",
                class: "image" // className={classes.media}
                ,
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "120px",
                height: "70px",
                class: "image1" // className={classes.media}
                ,
                src: "https://ak.picdn.net/shutterstock/videos/18557936/thumb/11.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "eatarian"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: "New"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: "Source: CUSTOM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            height: "200px",
            width: "100px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "60px",
                height: "60px",
                class: "image" // className={classes.media}
                ,
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "120px",
                height: "70px",
                class: "image1" // className={classes.media}
                ,
                src: "https://ak.picdn.net/shutterstock/videos/18557936/thumb/11.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "ish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: "New"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: "Source: GOOGLEMAP"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            height: "200px",
            width: "100px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "60px",
                height: "60px",
                class: "image" // className={classes.media}
                ,
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                width: "120px",
                height: "70px",
                class: "image1" // className={classes.media}
                ,
                src: "https://ak.picdn.net/shutterstock/videos/18557936/thumb/11.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "MD"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: "Nice"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: "Source: CUSTOM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\components\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "footer-section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text1",
              children: "Nowhere but Everywhere"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: "60316 Frankfurt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: "hello@fleksa.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: "+ 49 69120063308"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "footer-poweredby",
            children: ["Powered By  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "flexa",
              children: "FLEXA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 60
            }, undefined), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "footer-year",
            children: "\xA9 2021 Fleksa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "icon",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "30px",
              height: "30px",
              src: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////s7Ox+fn6BgYHz8/OIiIjl5eWQkJDb29uamprExMTMzMzi4uL5+fnR0dGjo6Otra2/v7+2tracnJxFRUVRUVFdXV1YWFh4eHg9PT3Q0NA3NzeNjY1vb2/v7+8kJCRlZWUwMDAMDAw6OjobGxsLCwtpaWkYGBhLS0tDQ0M9RXwlAAAMkUlEQVR4nO1daUPiOhRVkAJdoAubC1hg1NH//wOfBRdsz01ukts2M/POR5vWHLLdPVdXbijvNvvdMJiEaVYUURTPp+9IkvF4UOHxAyOMz8entuNxklQv38dRVBRZGk6C4W6/uSsde2iJu11YxMnouhuMkrgId7+6IrcOo0FHzOoYROGmbXZZ0hO5b0zTdVv0hnHf5L4Q3crTe/GH3hnRXpLe73TWNyGAWfosxO8u6psLifxBgt993zSUiF05/vZ3/D6RH10ILvruPguhNb/lY999Z2JwZ0cw7bvjBlhY8Dv2L72YYGpMcNV3l43xakbwpu/+WsBIkvuTluA3DBZj0XdfLZFxCfp/ylMo/naCTIoWU3Q2GiTTeRzllX1lsQjDySQIgpsThjqcm723n0zCcLGo7D15Ze9JBiMLjYYxUdmbzGyap8FudZBSYTCOh9UuSPMpm6x2u2EdE6No0polgcQ6jFg0NYcG46Cfbw/dUAI4bOf6DiqP/qPu7elNV2RIBFNdJ1Vva2TRrL/Ru8SDZjNUyKjqXSbtjoMW6p6SCuNS9RbzMO0MuaqzlHlcofA+LjvtPgevCp/CGL+iMFn4NoBnKIZxgtr/ptu3YGEWgeLwRs1pcdRQt+wQ9PGdNxvfkY39OCIwfhn0mjT8lp132wQHqttRvSU5hD6PYAVyFOsdp1ahv2vwExui57WVSG2kvu6il6B21J+tCCnIz3OwDuJc/Cm7Yc3rsacumwJLN6PLJi/4V/BIVDtO7iseo3gCbArEsXippWMXtj9z9OlyI8x/N57jeXq51+DfoDsGGgS1jjXVcB2BIXzujT7YHKHG7Mogg93XczxJO2WhANLoGxQhg1z9mG0ibxn1KXpGfaJiw8bn0zV86om49gQ7d31d895jqXP18RROYnOXYzug1Nz6PIVGtFT1sH+z4QnPBMHGNrFVDRPnA31hQjIMai0VLOAynHfOBYMOp4trLaGh+LwQQ/Ro2z0ZCNqgNqi1VNCAqqEnOykhrJxQawl30/OJiCJ+R83/1Q/4DKF+NCY/0rBy9AUDhnDJVg/g6EKLqjPK5Wq9Xq+WJf8V2g5fX4fYol2tth16IOwAXQXF/OdiGNxnAccGRO+ljWm2R62qSGK4Bwmye1FEvyfZi+ZteJCfUD8PsXxXbaZIZp1J0Qv0Ptt5o6s/QL7Ha1rpD2geyAilO4ZL+oT7Hf0Rrlx6haXPiPg7sPobwyj6fUaq25TjHTRFB3s1VkhqcFbvS/OonKJpfjkBGyCQIRfpSNWOi95XLw097ALjCMsX6jhUz6GUTjBUrAsG4O7MAj6GmxSx/eEWMyzRn1fwCzxsXDLaHuF/rk9UwtcAlSRCpHGQu5URBAzgqVpoW7zjDVOBrhvrWLVX9/ShEba0B6ecwEGksD3A6bi82qM/2xK0X4GXsBaK0cc2WCy1/A9S+W22mg361h4eN3ZC21EutZSIh7FheAsNrlb674MYv3fMrPY6tAkM4THZUL0YeJUk+I43iz6gcyqAm0Ni/nH5DBSLCAK0TELo3zZXLaRHsIL5KCIlYgGlPmNjqega/ILxWkQm0xQKyXVjqw7a0GI7GG/pKOopgwxNzyPOMTGK0+HmUHmMjg+bYRpzpFfTQwOdxwVUGw0VYP1BH908Nd4qA8Z7Zh1BXDBDsxAFnag2pcOOhrqodDPnApL6I2JkDaDZRnP1fvGg0UWMNlS84pC1yMjBrdQm8ubsrKNU5lkZiVd418Q7LB+qMRjzRuBVtVOZzCd08mGGBqmKVGRgBX4WuSor3kC2wWe7I0N60x+ZpJAv6bluICRj+Qwx5P/49D5qKhfRuypfIUZTYQplOT5DslvmMXH0gm6BIftXI+2iNiZlHLl1bbC1Y4ZjB4bQ9GNLUEGRW9sDrRnMkGvypobQNmyTmqjcQcS6LjqLuAyJDtlHqlDbDfN1ZK9wYkgEh7tEORCHBnPr4zNkRnwR3bEspXICkSDI1BQRw7EDQ2hpdamHU4GYFzpn+BnIJe7CEHt4LU2dX8AyKs/qgCyjYxjOwWOIf20bK+AlCKMd611hhjh2190/jjV/6y4N7BniSarXB3XA2WisacpnOOR8DnZEIsQBa8ScN2UZ4jQbiZBGHLLNidKSZdhicDiUbDiirixDGMolk8wH0+04Px560Z4h6oVUOJzttzFDZIZgMITHllRUKsxJZhy0ogzhaSiVwQADEhmdEmUIVUP3w/AMeCQylERRhui8lwsOR1oL48wXZYgEZFOnHA30+zFEelGG4C3BhEV02DJ0xNYZsoQ9FuA+pn9NkiG0ssnVS9+jz+stbpIMobVBLs8Gfl5fE1mSITzwnUoW/wAMu9fnziOGj5YMiVBOKcCsQ33Q6/8MPWIIw1e6ZdjyOiRiYXWQZGi52XFhuVX/fx6aMPz7ZZp/QC7tXrdgBL2KMkSGhr9LP4TGxNKV2QdguCpjDbRvp3FNCPuEF3YaGK8ntRChS4TheP1X7aWiNm+ZExGugO5t3i36LZSlZlTowvckIZriaIXufU9/tv/QwQdcunA7oRMfsIMf3905g/34rGklzJCIxXAteEoEHbPexbEY9vE0uC6vTd7bJXAxE97UkGZIxETZXC71DSIminfZoXRMFBXX5lITlIgXYmot/Lg2t9hEl8IoXcUmOsaX2ks2VCUb5uuYYRsxwrbnPpU94xYj7BLnTZbit6ubScbFcz+A47zbidW3oej+sU7zLcwnKp3gxf4EZuiWM0MXbjTdbuhyWfwcRD5Dg0Obrqc2MzkXVx3nPRkwVOXh8y3EqotxDH4ofu6aifFaVTBpwKvks1Hd6GqyZ+H8Q5zhbQBlUnasdxgdlAnPRoXvcQ6pcx4wrOzzjUhtBVxq7iI0MovgPGD3XG56Pz1DcZNZoLuw1szGjPKmcol8fP2VkPfgNroHxi1xAh0pRGoqIMmvjtk8C/bLp+fnY7ncB9mcU1DKtMYKXnESdTHUGevWMPZl4cx7kdom5I09TihNu4FPPpn6NJoN1Qrm1mVcn0aoxpB8CR6LJD9cY0iqTpT0KNr4B3CdKLFaXwfJ7WZU2nQB1/qSq9fGOjR4sFgmFdCndqI196Rug7a186Bv7a/2ggwVlZtNYB0OgD62wX4C6xi8N5fipWc8WvsgiXg/6fqlrjfPO1xvQ9QvFa9Bq6yno8PAxSVABb2iP7vVEdapUzTcbtUg6gi3UguarOGhhOv9S1Qt6FbqeR/NObrfL0XV826rJntoIuOM3CoxnEHVz2+vrv4Lt+puxHOA6kDV1W/1boQbPclYLLQYfb2a+23fb7FO6SJX01TwqhDyfosu7ih5G2bx+HJdzpI4HbqUeQGAUVrV/IcX6kos/CaOD8vVarV8kEvMuAQsa1dWT9ADb+4KMgCMfjk9QVKW2FbTIRDBs6Lp9Z1dfEC5+3ywe33vGh8KGlBD9OXuPD7gmfQRZYce+XL/IRv4KsiPh5C9VGZBV4CKxaf0CX3MvtxDygU09H266/FdsnLZhF0AB4d/BbvCp/7cys0BLCr5farbx477ArzPfKu50MDhz73cDOju5fb9bnUtiKsLLlrgaSphy+gG+v7v8W/gGnffFYj4/h+Z19hq5M2Nshpwek8Elv0Z85Rwef3U4qkLvj25f1wJyuFVa0aVYXbxYHQDLJE1JRbyLpxfvXSbD6LyMIhVIQ2bfmv7uFDmNbI00Rca+TyK5Ahel83GdOV+uYoe0qDWINYbFJc2+bqjKsIGYHvFnT9+nouK0A/CkKZwT4/8OzU2Cu8dVYGQ3Jc8HMajMnaH3P9VF9pIOGnF8Kx2MSuymjRXaBXC3iJLLDW3YCmNaOpXr6+T3m3hzxNd+Jza58IIE52G/Y3kW6i7qO1aG5iKTTb1Xyle7KUq6nLx9LLAyeN1aGOB1LvNJZIom9yu38pWiZXL9e0ki3V5Gd9g5E7aRPvMRoNkeh9HeVFkWbpYLMJwMplsgzNuaHy02L63DsP399IsK4o8iufTZDCyCcllbfiusXd9gmnG/nMpsu30dmFp/cNAJuFvNz7B6E521qHhGQxDRtu4pLlVzMzlEIb04BGsHLq6W3B9gtES/MYvuRSRdjG2twfaR2x3CTd9R6OKeQBnb/xBKtWnHUSlK8GKo7/jWEjwOyF0T/aRh0j0+zfWvg1k3oIlfucNyVnultSjwEoRld4Vpou2wwtetznfpiCLJN92Fjxx2G+zaOqSpWaCwTTKtvuyK3J1rsvN/nYYhIs0K4ooiuP5tEKSJON3DGp4rFD/Y9Xwvf3pvXl8tvakizAY7vabpbOD9j8YHL5bxKEzLgAAAABJRU5ErkJggg=="
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "icon1",
              width: "30px",
              height: "30px",
              src: " data:image/png;base64,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"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "30px",
              height: "30px",
              src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOsjqwFYRdKR9LadM20_jkwGj0jBVOGTtmQ&usqp=CAU"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "text3",
            children: "Terms | Privacy | Impression "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\components\\Header.js";




const Header = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: sticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `header${sticky ? ' sticky' : ''}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      light: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          md: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarBrand"], {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "90px",
              height: "90px",
              src: "https://fleksa.s3.eu-central-1.amazonaws.com/shop/img/logo/prodtestres.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 35
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            item: true,
            md: 7,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
              className: "m-auto",
              navbar: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  className: "header-item",
                  href: "/",
                  children: "MENU"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  className: "header-item",
                  href: "#discover",
                  children: "DISCOVER"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  className: "header-item",
                  href: "#gallery",
                  children: "GALLERY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  className: "header-item",
                  href: "#acontactt",
                  children: "CONTACT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                  className: "header-item",
                  href: "#login",
                  children: "LOGIN"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  className: "profile",
                  src: "data:image/png;base64,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"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\components\\Hero.js";



const Hero = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section position-relative",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "align-items-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "container1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: "100%",
            src: "https://images.unsplash.com/photo-1458253756247-1e4ed949191b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            alt: "Snow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bottom-left",
            children: "Good Taste"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bottom-left1",
            children: "to eat and drink"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bottom-left2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "btn btn-warning",
              children: "ORDER NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\components\\Layout.js";



const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Feature */ "./components/Feature.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\welcome\\next-landing-page\\pages\\index.js";






const Index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "Landing Page Nextjs",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWVkaWEiLCJGZWF0dXJlQm94IiwicHJvcHMiLCJjbGFzc2VzIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwia2V5IiwiaWQiLCJpbWciLCJzaXplIiwib2Zmc2V0IiwiaWNvbiIsInRpdGxlIiwiZGVzYyIsIkZlYXR1cmUiLCJyZXN0dXJhbnRzIiwiRm9vdGVyIiwiSGVhZGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJzdGlja3kiLCJzZXRTdGlja3kiLCJ0b2dnbGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsIkhlcm8iLCJMYXlvdXQiLCJwYWdlVGl0bGUiLCJjaGlsZHJlbiIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdB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RixlQUtFO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFO0FBQUEsZ0JBQ0c5QixLQUFLLENBQUMrQjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FuQkQ7O0FBb0JlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUMscUJBQWxCO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBS0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0FBWWVBLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDbEJBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMjUwLFxyXG4gICAgaGVpZ2h0OiAzNTAsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAzNTAsXHJcbiAgfSxcclxufSk7XHJcbmNvbnN0IEZlYXR1cmVCb3ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIj5PVVIgTU9TVCBQT1BVTEFSIERJU0hFUzwvaDE+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPVwicmVzdHVyYW50XCI+XHJcbiAgICAgICAgey8qIDxDb250YWluZXI+ICovfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9ICA+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIxOTBweFwiIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQlVWRkJjVkZSUVlHQmNaSENFZEdSb2FHU01nSUJrZEhSNGFIaG9hR2h3ZEl5d2pIUjBwSUNBWkpUWWtLUzB2TXpNekdTSTRQamd5UFN3eU15OEJDd3NMRHc0UEhoSVNIaklwSWlreU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNdi9BQUJFSUFLZ0JLd01CSWdBQ0VRRURFUUgveEFBY0FBQUNBZ01CQVFBQUFBQUFBQUFBQUFBRUJRTUdBQUVDQndqL3hBQk5FQUFDQVFJRUF3UUhCQVlJQXdVSkFBQUJBaEVBQXdRU0lURUZRVkVUSW1GeEJqS0JrYUd4MFNOQ3dmQVVNMUppY3VGRFU0S1NrNkt5MGhVV2N3Y2tZN1BURnpSRWc1U2p0TUx4LzhRQUdRRUFBd0VCQVFBQUFBQUFBQUFBQUFBQUFRSURBQVFGLzhRQUpSRUFBZ0lDQWdNQUFnTUJBUUFBQUFBQUFBRUNFU0V4QXhJVFFWRmhjVEtCa1FRaS85b0FEQU1CQUFJUkF4RUFQd0NoWXpYRkgrQWZQdy9QdGl1M0UvbjgvbndtdFkxRCtsc09pRDVqcCtmYkZiVjRINS9QNTZUV0dBcnVHblVhTjFINDlhR3pIdEJtQUJpUEE3N1V6UUU2Z1NQYjRmbitjVXZ4U1RjQUkrNytKcGJRYU5zbERNaFV5UGFPdjg2blFrYUhVZGVZOCt0WTRvR09VY01QdzZWSWoxRmhWdDlvdmFac2hNUGxJQmpxQ1FSSThSN3R3MTR4WXdpQmYwZkVOY2JhNGpxWkJpUTZzRVZjaDJpU1FUdVJyV05ZSURVdHU1UTJlSXJzTlN0REprekdveUsycjFJTmF3ZGtFVnNDcG9ydE1NeDVWckJSSmhGckxsRjRiQ05VemNQbWw3SWJxS0tsdFV5LzRiV2Y4UGpyVzdvM1ZneVc1VTBBNmEwM2JDdUJwUUwyR0hLc3BBYUJBdGRSVW1XdFUxZ29qaXVyYTZnVmhydTBZSVBqV3MxQmoyWTBycTJvb25pV0hZWEhBR2dZajNHS0hHSGJvYUZqQm1FdDVtZ0N1OFpZZ3hVL0E3VEIySjVJNTl5azFyajFwdTJhSmlGLzBMUU1MMlFVUmcwQmFEUXZZdDBwandPd1RldHFaMU1VVENmRXIzalVNVlBmMVlueHFYaDZXU1dOKzR5S29rS2lrdmNNR0ZVNVNxNnhxMm12T2laZ2xkb0tqZTRzbkxNU1lreVk1U1FCSjlncmp0aWRGMS9DdFFMQ1d1Z2IxbHRXZndGYXcyRUprblU5YWVjTHNqS1dPNGlQajlCV28xbkdBd1lsZkxYM1ViK2lyK1RYU09vZUIrenIwQk9VajhmY2FqdVl5Q1JsSmpuMW8yRVI0ekFIT2JuM3l1WFgxVHJPNDIvT2xKY1RkdUwzV3RnZTNmeEI1MWJzeHlxWTBZSFNaMkpYWTZINFVEaWJTdEk5NDNIdU9vcUVlU2NQNVpLeWhDZjhjRmNzY1RaUkFVSHpQOHZ6UGxROTYvbWNNUkdrYWE5ZGFZWWpnK3NvWThEcVBZZVh0b3B1RFpsbElNRFVEY2V6OGRxckhraTlFcGNjbHNYcUZnRlNEK1JVRjUrbFJYN1pSbzJQenJTTUNRRHA4alRJVm1pTTJvQkZieDZkNE1OSkZUTUkwcUs0b0lFejd6UnNWb2lTN3lPL3pvaExsQlhiVWE2KytwTGJjajdEMW9zd2NEVTl0NkNSNG9yRDRlNDRsQXBqVFZsSHdKQjl0SXhrSDRaRjVtbXRsQlNSY0RpZHdpLzRpZmkxSDRlMWZIckl2K0xiL3dCOVRsK3gxK2h6YXRpaUVRVXV0TGMvWlgvRnQvNzZJVXYrNS9pMi93RGRVbWgwZFluRlc3WkF1T0ZuYWFuS0NocmlNU3M5bVlQTzViMDBQVnE3Wkg2cC9pMi85MWFnblRvSW9LOVpGVE9sejl6L0FCYmYrK2hiOW04ZGxVLy9BRGJYKytpa0JnR0lzRFhXZ2l0RTR2RDNsQloxVUtOL3RiWlBUWlhKUHNGTG11R3J4Sk5rMGVOUTQyNWxYdW52UlBMUURjL2g3YWphNGV0Q3M1S3VUekh3NVV5UUd5NlgrSnNIWUc3aURERUU5cGIxZ2tUK3ByUTRvZjYzRWY0bHYvMGFydVB4SDJ0M1gra2ZuKzhhaFRFTWR0cTFHc3RaNGc3QzRGdjN3d3QzR0JMMnlPNWJ1UEJBdENRY3NIVWIxMC9GWFdGTisrVGxXU0h0aVpVSFFkaVlIdE5WL2g5MXM3Z3hyWnhIL3dDTmVyakc0aUxrVHNxZjZGbzBDOGo4OFhiK3R4SCtKYS85R3U3UEYzTEJWdllnU1FBZTB0NlRwUDZrZk1WVnYwbnhvM2hjdGN0bWRNeSszVVVCaUUyN2pEVjNKNXdGajVWRTJGdWZ0UDdoOUtlY1BYTmJXZHlUK05kUGJBT3BySmdvcjl6RFhNak5uYUFDZFFOWUU5S1pZSzN0cHkvQ3BjY1FMVndmdU5IdXJyQmJEeS9DaWFnM0VncGIwaVNRTmR1WitRTlpoTDVnSFlFQS9qWEdNUjdpWkpDbzI3ODBiWlkxMUJCYWY0ZVUweTRmaGs5Wm1VS3ZXWWJYWVpTRDQ2ZUZKT1hWWkdpcmVDZXhobTV6UDN0TlpPd1BpTnRmR2pQK0VNZGNwMXJoc2NDclc3VnNGV0VNMXdBeUNJSXk3UWZHYTFsdkhVM1cxL2VOYzc1MTZMcmlmc1hxdjJkdWVoLzF0VVJ0QnBrQXhQeU5TcU81YjE1TnYvR2E1VnhKSFVFZkFtcituL1pGZWhabGlPUkpJMDIwQVA0L0N1bFBUY2ROQ1BaOUtKUUFsUDRtK1NWcDdBZzlaRmMvSkZKNExRazNzZ3VJamo3UlF3NmdDZmJ5OThlZEsrTTRJRlY3SmN3R2hnUkhTUWFQZk1Hai93RG9vSVk5U3dESEl4QUkxR3gyT2hqWHBvZkNtaEtYN05PTWYwSmV6WlJ0bTZyQjd2VFd1ZzRZYWU2bm1KdW5Jd3lna2lNMjN2OEFIM1ZYc1ZoOGg3cForcENFQWVWWGhOU0lUaFJ4ZGFCNFYySTVHb3JyR0lJUGdZSW4zMTBPcys2bkpoK014Z3VCVUZtMGdCTFo3YWxYN3dFbzJzTXN5UjNlN01BaGRLanc3bFQrZGFpVzRzb1hCSWtaZ3BBSkU2NVNRUURITWd4ME8xYUVVc25qS01tMW9iOXVuN1Nqd0ppcy9TTGY3YSsrbGlxa0dRYzJtV0NJQTF6U0lrbmFOUnozclFxTGdpM21md2E5dGIvYlQzMXZ0TGY3YTBmNlAyTEp0eTl3cVdPUUtPenVNU0FTVGs3UkhRY2hLbVk5YmxXNzlpMjJXeUxMcXlaSXVkdEdiY3Nlek51QVdYYlU1ZjNnU0MzaVgwUG1md0VYSVpJSU1iK0huWFNJckFrQ1kzamw1eHRVMS9GcGJ0aTAyR3RzOXp1aTkybHdGU2VaVE5sSkFpTmgxQm92aHFyYVFCckp1OW8ycmRyMmNMa0pqTDJiVHFKbWZDT2REeHJHUStWL0JYM09vcmtNaytzbzl0UE1QZ3JIWmkyMXdpNGRlOHFJaE9ZQUtMcjNGQjBPc0NSMGpXcXMrRVlPVjBKRHN1aEJHakZabFprYWJpYTNqVlhZUEs3MEhYcGUyVnQ1U1N3Sjd3R2thYm5xQlFMWUM3MEg5OWZyUjluMGV1UHJudDVkQ1QzOWlRQkF5ZDRtUUFCcVNhZTRMMEtKazNGQjBIcnNWT2cxSlZBUVA3eDBBbldTYXdVYXdTbTVONUt2aTdkeHhhSFkyVkZ0UXB5WlJualV0Y09ZbG5iWW5RUnNCUWx5MndXTXFraFNCM2h1WjFPdXAxcTE4UTlDamJNcG9TWUdkczF0cDB5WndvS0U3RE1JSlByVFZOeFNaY3l3UVpZR1prUnBCa0ErRUVBMCtCR2VqOXR3NEFmYll2YitzdjhBdHJnNG5odjlkalA4Uy84QVNyRml1RFhHdVc3cTNHRUtGWmQxWlNKaU5nWmpVZFBBUVdPRnZIT21zMUZKNHJpT0hteGRGdTlpeS9adGtETmZLbG9NQnN3eXhPODZWWXVGZWpsaUVGeHI2MnlpNVNMOXhkTW9qVE5BMDVSVWVMNFBjczRQR3pjWjBOdTR5aHRTa294WVpqcVpQNW1TWE9ONGhudG9palpScjdCU3Rtb0E0MXdIQ1c0RnU1Zlk4NXhOMC9KcVZKd3EyM2RMWGhPbi92RjM4WGozMGYyTFZKWXRITUt3YVBQZUg4T1ZrQnozQnB5dUVjenlGU1lqaGlDWWU3dHpkcVA0SThXbDAxa3o3Mm9wL1dCSTVVcVk5S2l1WWpoUTdLNCtkKzZoT3JrekEyam1LWTRhMk1nUGhVdkZuK3p1d043WDRQUkdHdzVDaitFYTB2Skp4amdiamluTEppV2ROZmQrTWZXaXJOa3R5OTlINFhEQWc2VDRubHI3aFJGakM2ejVWNTh1UnllV2RpaW9yQ0lMTnBvRUFDZW81ZVFORVdzTXBHbzFrOGgxTkdwbENwSkFsZndGUld0dCtaK1pycVNpam43TjdLMjdUYnQ1VCsxcUlQMzI2L25TdWNwekhiUkEwL3hLa2lQN1pxUm5BdDJ5VEhyYytyM0s2V0piL3BwcjdMVlVkVS83RVhvQncvOEFSK0x0OGs5OUVOYWsrR20zSTlhNHd5L3F0dldPMDZlcm9aL0Evd0FuRmpDWm8vc241MXovQVBSS2kzRWhLOWdoaEprRXg1SFQzVURZd3lyZ3MrUUVnaTVKbnZGYzJrK1FLRWE2R0tzdC9CbGRlcko3NUlxbjRkcm5aTGI5ZExpbGJjeENNNEpmTU4rN053Z3hxQ1BZZitlWGEvNkJ6S3Evc0M0dGZWTHBGZ1FnQU1US3lST211bTRFQ050cTR0WTVUNnd5SHJ5OS93Qlk4Nkh4VHFyaFFoQ3BvQXgxT3M5NkkzMzlwcmdxQ05ocnA0bjJkSzZIRk1pcE5CdUp3d3VBSGVOb3BROXNwdklNN0hwVEhBMnlUa0J5c05jMGN0TnhzVG1JRTd4dFJpWEZkQVhXWkU3ZGZsUTdPSDVRZXFuK0dWOTNCQTg2bFM1QUk4dGFJeEdCQmxyYlp2QTdqMi9XZ1N4R2pDS3FtcEVwUmEyRWRxY3VhT1lFZWM2L0Q0MTNhT1lUT2xDQlRsMGpYeTVUVFBodHhWVXFWV1RvVGxEU05ES2tnbEQ0ckJpZVJpaEpKTFJvcTJkNGE2YmJCMHVGV0d4VWxXSGlDRElQbFJ0cmo5NVNHN1FPMlVMbXVBWERBMkFOd05Iczh0cUc3TzExZytUVnpkd3Evd0JISk03UWRaNmVOSW42b1p4YVhvN3huRkdka1lva3Fjd2xSRXlET1VBQWJEUVFOVDFveHVPbGJqUGJWUkowTFdyWjdvSk1aR0Rxa2o3b0pIS1NLV1hjRzRKQmtOR3hFRUhwQjludnJkekRuS2h6b1N4aUE2eXM3RnRkQnB6MEUwL1VXdy9FY2V1UEdyWlI5ek9RbnJCdEVIY0dvR3dvVERZcGkvSVNTVHIxSmI1bXVsNFBkZlAyZVY4a0h1T3JFZ2dIUUl4SjM1VFN6SVR2SW9kY0dVbmRucjNvNkZ5MjJDbTUzY3loU3BsbU4xWmtrRHVwYmFOZjZScWFZckZXcmsyKzhjdHpJUXVVNWlGWnNwQlBxa3F5NnhxRHkxcXEvd0RaN3hHMGJYWlhBcENkMWd3QkdVdXoyN2hCKzZHdVhFSjVacmN3RFY4VzM5b0Iraks2cDZzalFDQk1kMHh1dzl2dktWSUxkNUNITm9LNlhiVG1GWTNRY3NLZ1ZTeGtOcUlZYlNmQ3ZOK0plalMzZUpXMXVhbzhpNXJCdVBiYTdiTzIyWVcxWW5xeDVtYTlSdnZhdDI4ejJWRU4zRUNpWGY3b1FFRHZFL1U3R3ZPMTRqYnVZMjM5b2pGU3k2TjY5dzlxOXdyNGRvN0FkUUIxcVhOT1VZTnJZM0hGU2xrdHJvNElSYnQwRVIvU2t3UEh6RUQyenlvOWNIQUUzN3BQL1ZOSmNIY09kUjd4TUR6MzYwZmZ2NitvTnRDWE1UTUVlT2duM1Y1cjVlUmUzL3AwUGpqOEI4UlpXN05sN3Q1cmJncmNVdTJxblFqeUltcEc0UXFBQmJqQUQveFhPbkxjMXJEQzJDZnN4cVpKTFRyc2Q2NHUza0l6TW8xOVFUeTVIeEowMThmZXZtbjlmK3NaOGNiMEFZaXkvd0IyK1Q1WEdQNDBCaVV1QWFYYms5TzFJcGhmUU1kZ0JHK2JVZUFwWmZZalRjalE5MWo1RVpaM0hJOWFlUExOKzMvbzY0NGZCYW5CMFNGa2hPVU94My9uMXFkK0cyd0NTejZEK3NQTDIwU2hQUG4wemY3ZEt4VXpFaklDdXhPWStYV05xUGxuOWY4QW9mSEQ0QVlqaE52S1ZabU1yQjc3UVJycDVhbW10bkNMbEJFYXFJRWVkUXVvT21RVHpHYjRqd3B2aHJBeUE5QUtlUEpLVVhiOUNTaW90VWdiRDJpZHpvUjdodVB5S210SkVBOGlQbjlEUitHdzBzZnp6clRXNDk2L2g5YTVZdTJVYkFjTURsU0NRWU1ubnlyaUF1bnQzNjY5UEdwYlFiS2tGUks2YVNZTWVRbXVMeW1kdVErUXIwWk01aXIzeDlrbW5YblAzcm5PdVVRWjJNYTltbXY5bTFWa1hoU0VBRnBBMjdtMi93QlQ3NnEvRWtaTHpvdDBBazVWVWhkVkJBQUFQOEkyNlU4WnFWb0RoV1RNSUpOdndjejdrcSsrak9CN1NKSDlIYlB4ZjZWNXdsNjRDaG0yOE4zWTZ4T3BCNkxWdTlIUFM1N1RLallVdEtxZ3lYQUNZTGFrTUFQdmRlVlQ1NGQ2K0JpM0ZPdGxqNDV3cktvSUgzMC8xR3ZIT0IzRG5qY0JBaTVqSVh0TldoZXA3dW1zNjE3amE5SlZ1V2x1cmJsSFlCWm5ibXhNWlQzcEdoTTE1SjZPOE1mc1d1QXcxeHl3Uk44b0xDSTVMb0kxbzhNWXd0UmQ2RmxLVXE3TDZWVGlOcHhjY09RV3pFayswNitIbHlvM0RjSmNvalpUbUxRbzltNS9Pd3EwWWpoU3ZjWE5iSVJKWXR5WXQzaXNpSkhQdzI4aXJ0bUFUM2dZRTZtQm1rQUtOaEJqYmx2MXEvWVdpbVkvRHZoOHJrcTBnaVJyNndCRWVSQW9uQzRiTllCL2NHbkxZZTQxSjZWVzVXMkxZNjhoT3ZlQTA1Yi9BTjJyUndUZ3BiaHkzbzJTUDhxMUxsbFVVL3lQeHBkbW1VVGpOejdRaFpBQkJCSExNaWQwSHBPc2VQalE2UG03cnFHSFhZN2dBKzg4cU94WERpNHRNb01PdXBBMEVsbUgrWC9UNDFOanVIaEJiWlpsM0MrVWtFQ091aDM2MVcwVFNZSTNERlBlUlFvL3RINXNhWWVoZ1VZeEdZQUQ3UXdxNkNiYmlGQWttSjhUVCt4d2R1ek9tMmFmZWQ2cUhCc1VVdW84SFNkdkhTaEdUbEZobkJSYVBYTzN3YVdHczI3ZHdBeWNodzEwaGN4TEVBRzMzVmttQUlBNVY1dHhXM2FETWJRY1NkUVVjZjZoMElxMFB4NFNYN05zNUFCYkxxUUpJQlBRU2ZmU0hpZDhNU3dHK3AwMzgvWlN4M2tUUWhHSnVKQlYyQlVRbmVJeWc3aE5lNlBBVkd0MTh4T2JjQ1Q1YTc3N3o3Nkp4Q1NCcDVpdWV5RWFLTnFxNUpCVVd6aDhaY2ZSN2pzTkpCWWtHSUlrRTZ4VWQ1eVJxU2RSODZrR1hVUUpHK2grbFJxNkV3QnJ2dDlSV3YzUUs5V1M0SjJ0dXIyeVVjYkVlNGd6b1FkaURJSTNxMWNOOU5McUxsQ2tNQ1JGdTVsVUtwSW5MY1M0RlBndVViNkNxcG9OcTNoMkF6SHJzSW5OTXpyUGQxNW5wNHpRY25XQXFDVHlXakhlbEYyODRVZ3FyeXJPV0xNRnlzU3BjNktHeW51b0ZtRE03VlhNRmkydHN6VzVRa0wzcGtrcUNDd25hWnJXSHc3UEVEUmRCcWNxNzlkenFSTzlIdGcwVlpKek44QjdPZEsvemtidFdqWjlKY1F1cllpNTVBNjFFZlMzRmNyang0dFNyR2liaDhZL0NpMXdXZzBveDRvZkJYeVNHV0g5SnNYL0FGaFB0TkdXZlNpK05EREFEWWxvK2RCNGJCaktUQk1SVGZoUG92ZnhCeTIxdGpRazVyaUFnVHVWQkxnYWpsenB2RngvRGQ1ZlRiOGV2dXV3VHhCUDRtbzJ4RnlkYmpTWU9uNThxZThVOUNiOW0yR1owWWtoY3F5WVBXV3k2VlJidU51SFR0RkJ6QlFBc1RPWWM1NWpyUThVUGlDdVIvUi9heFY1b2k0M2orRlRZTjczYlcxdVhHVkd6Rmo1S1NOZk1WWGNQZ0xqTUN6TXdKalFuNFRUckQ4QUp0M1ZaU3pDY2hKSjF5cXlxTmV1bEw0WS9Cdks2b252QzcyZ1ZyaFlITEcwR2ZaNVZjc0ltZ1hvUHdwRmhPSGhicXJFQlVCSGtwYVB3OTlXYmh0ekk0ZUFZQjBPbkk4Nmx5d2lvdExBOFpONUgyQzRmR3NkZm5Tamlkbkt4L2pVZkMyYWJEanFpNWJ0dXVUdFIzTkQ2d0JMS1NRQkFFYWc4NldjWHU1bmZwbkIvd0FsdjZWeVQ0K09DWFYyYmpsSnl5SXJMcmxTV0dpd2RaSU1iUU5hNXZuWDJENUN0NGE5Q0lCK3lSOEs1dm5YYmtPblFWMVRNRW8rbFVYalNUamtiOThmNnpWdVc1cFZWNHJkQXhpQWdrbHROUUI2N2I2VnVMWnA2RU52Qy84QWN3QnBOMlI1WkY5MjFPY0FtUzQ1bllXOStVQVRGTE8zVmNNcHlPQUxteGlTY2k2N0FSdDdqVExDWHN6M0JsSWhVMUo2cUNJcTA4cGs0YlJZOEZ4Smlxb2ZWektZNUE1ak1EcDRVdDRMYUF0VzNWakpzZ2xCdVQzY3hVenBxUERjMWx0NElGZGNKU01OYklDak1sc0ZvZ2tGVE1tZTlBNmN6c2Fod3hVYnI4RmVSM1FSY1J6bGw5ZG1ISXlzNzdiaysraFRaRXlHT21Vd1J5SkdnalNJNVVWZlZVeWlWWmxETUpPb0VhYTVnTmpBSjZtSW9WTVVycm50dm1HcFVHSUI2OGpCTWdBbm43cldUQnNRNEhlYTJNcEdwR2hCaGNzOCtnanhpckw2TCtrald1SG9pWk02MjgybzBrSWdWY28zNWs2amJ4cXFjVkJXMllKWWhRTTA3U3dLL0FieE9sRFlLNWxzcC9BUDlJK2xKTk9zTVpKTjB4N3hGTzdtZ1p0TnRCSklKZ0RRVXNHSERpd1c3b1hFVy9IZHdQYk9iNDA1NGdWQ01XTUNDZmR6SHdwWnhOZXp3NDFrNWtPbmhjUnRCMDVWbG94NkxpclZuSmM3SnBCREhVUjFPblVlTmVIY0J3L2FYYmFGb0JCMUcraWs4L0tyM3c3amc3SWh6SktrZk9xZXVFejJaaFJBQmsvM2lmZFRjZUkxb0UxbGV3ekgzQmJka0w4dWE2N2VkRGRzR0doL1B1cldFNGNHdDVnMi9JRFk5RFdYclNvN0lyaHdJN3cyMjE5MjNzcXFTMTdJdTkvVGhsMHFCclBpZmZWc3duQVZ1VzBmdEZYTXFtTXN3WUUvZTYvT2d1SzhLUzJqRnJuZEdoWUo2cE94WUF6bDVhU2RlZEExNEs0TFBNRTFpNFlEWG5SZUcxUXNOd05mRGtQZm9ha3d2ZVlJUU82bVppUnFZSTJqY2trQUR6bzloVkpFRnUzVWlJTmRCdjAvbFh1V0Y5SCtIbFZMWWJEQW5VZ0JUSGhQTWpyWGllTFVDN2NWUnBuWUFEek1BVVdnOXJNRDZmbjZVTGpic0x2SDUwNVZJMDBkd3ZoZDY4MFdsdEVnRmoycGhZMm5YbUNWaU9jVUt5R3dDemh5MXNsVkUrUE9JbW83ZHdzU3JPd2prTktzS2NBdmd0bXVLTmRRc2tldzVOdHVkRXY2UFd0SkJMYVNRekNaaWVsTXJXelBPZ3YwSjlMdjBRQ3k4OWptSkREZFN4a2xoOTRUMDFIalhxMkU0Z3R5R1J3eWxaQkJrRWFhZ2l2RzI0UmF0c0MxaDNUbUFRVDRFQXRyckdoam5XK0wyRlMzY2JDQzdheVpYRUFvU2tybnpBSGRiaERBaVlnN1RRN1VCeFBUZlRDNDdXMFczbEpMNjVnU0FNckVuUWlkZ1BiWG1EWVUycm90OXFpT3hBN3E2d2N4SHJ6dVdJNTYwcDRkeDY2bUVObGJyb3d1NTFNejNHUTVrazdBdnI1bnhvZExqdWM1WnlRVERFbmwzdEc2K1hXczVVTDJwRC9EWVYydkluYTNXK3o3UzRvWVpyV1lLVkF5QUE2bHRSdGxubUtaTDZOMjJqUGJ1T1oxSmNBY3BPb0pQOHZkWE1Zem9vZG1LaTR1aDdVdEEwbVJtN3VoNTlUU083ZVVoaUxnWm9KQW1TU0FwZ2FiNy9HamRqcDBlb2NJd0pWaDNTb1cwRmdpUHZOK0FIdnByaDNneTNRMGs5SHI3VzhNaFpjcjlqYkJEQWlETnpRamZudFRqRFdYZVZMb0pCMTdNenlIOVo0MXo4MGJpMFdnNkoyeFJMdFBJKzd5cUh0Q2QrbytTMHV4QXVqRVhMYVhMY0JFY2syaVRMdGNFUjJnMDdueHBodzdDM0dCejNCS21PN2JnYktSb1dPdnRyejF3U1RMK1NJQmhiYk1xNmdhRTZEWVJ0M2lhM2ZHdnNIeUZjMjdGd1hidHRMZ0Myc2dCTnNFbk1pc1oxajRWSTNEN3AvK0kvOEF0ajYxMnlvaW1CWjZySEZRVGpiUmpRT3YrdGpUNHY4QW4zVW14Ny85NFRVaVNCQUEvYVBPSjl4bzhlR2FXVURjVnNBV3dzUjlwLzhBcjQwUmgwSUxuOTFmOUlwVzJJbXlEbWJXNFJPWXo2Z01BejhxYVdrQXo3eVVYbjREYWFwUFFzZGtvZldwTU5mUzNnayswbCt6VmdOZERFWlJydkxEYUtDVjRiVnVmT1BDZ01KaVVaQTAvcTBSUU5ZRndLQUFSRWtrcVR2OTBVbkg3SDVQUlA2UWNSSTdoYVg5WHU2QlVqMWRUcVoxNmE4NkQ0UmpWVE5KSkVhRDk0enJyK1pwZGozRDNPNE9ud1VBMHpUQnN0dFFCQWlYRWQ1cGpWQ1JsSjFJSFExV3NFN3lINEhFSSs0YldDZWtvUnA1SG41bnJRWXU5eVBEOERRM0RIYTBEbU1HSUFCa0RVR2ZQUmEzbjdoQTFNR2trTkdTWXk5SStJRndFQjdyTjNkZ0NGMDBQN3hrK3hhaXhtS0xXemJKOVJVMy9pRW5UeCtZcGZZdDNMdXBVU25Vd0JHbW5JN2ZDdGRpVlpzd1l6K3hsT3hJR3M2RFFHRDE1VWV0SVRzM29sc09ZQTVhMUl4K3d5Mi9XUDcyc1pnT2VnN3ViM2RhR3M4UXQyeU5MaEFPcXNBVmM3d1FHOVhiVHJVT0k0bGtYSXRwRm5XVExGRHlVRXNRQnJ0OUtkTDFRSEpWZG5adTNMZWRjektOeElHdTNueXJpdzh6TkJ2aWl3azY3Kzc4eFJXRkJKeWpVbllEblRyVEVsdEZtNGJ4bTdDV2tnYUJWa1RFRDR6VS9HMXVDMDR1M2tBYmNhdzBSM1FBdTRnSHcxTkt4WU5wUmNhUTg2Q1JwNHlLNTQ2NXVXN0tnTVRsTWttSWtDR2s2R1kwZ1RDbXBPU3ZBN2cxRVQ0UzdsWUV0Q05vWk8zUW40VVpnN0JhK0lFbGpBNzJVSnFQdEdQTURYVDRHZ3hoMlZDSEM2RVJyTXpvUkI1ZmpSTnZHcGNBekFhQ0NHV1FOTjUzR2xIOUhOZWJQYWNGNlU3NVV0T053QmZMWlFCQjE3TTh4UHRxZ3A2UFh1M0YxY2pEdEJjSXpFUU0rYm1Ob0c0SHNyWEI3M1ptQ3NTZ3lrTEdkRHpRa0NkUWRkcEJwNExnN1FFSHZBRUR3bFRwNWZTazhqZURxOGEyaXBZLzBmeEtsWnR1Rm5YTExBUWVlVWtMejE4YWZlaWQ5c1BqVXRrQmhjVUkzZ0hWWEI5bWxXUGhuRUg3Tm11RE9VY2p1Z1NSQ21ZbUoxTzBWRGhPRVlhN2QvUzdWeTZ0ME1TeFZ2dkVHUXkzRllxWU9rUnlwMU82RjZkYkxEeHJGTFp0TmNGdHJwRVFpRHZOSkEwOEJNbndCcnpQalhwYURjbGNNOXR5cTZPd0VqY0dDUjFJbm5IaFhvVnpBbDRtOWUwMTlaUHd0Zy9IOGFybkVmUWpENGg4ejNMNEtvRjdycEFVVGxFdGJKMm5ueXF6YjlrMFY2enhlNlJtUDZPd0ltTTdxUnBxSXlOejhlZExiZnBKbXpUYkpEU3I1U2Nzdm5VS1FaRXdZa2FzTTJrNVN0by85bldGQi9YWW9lVnhKK0ZzSDJlTlJjZmEwdG03aHd0N01WVWgzS2tacmJTQ2Nva0U2eWZ5Wk5KWmJHdTlIbkYxamxFRWpySHRpWTVmU21YQnNVa3NoVTVTR1lHUUl5Z2t6cEo3b0lBOFRTdTZDalFSQjZub054cE04cTFiZGhMYmdrYTh2RWJieHlpdFZvbm9kM2JyS3dBZ3YxM1dlZ0ExTy9oUHNwMlBSKzVmUlVXQmNkU2Q0V2RzcGdFam9mYlZZc1gxa2VCa2R5Q1FHblVTUXc5VnRTSTJKaFFUNjU2S3ZiTnUxZVhLektwQkljbVRCVTVoTUJ1b2lBZHBFR2lvME54dlpYcldBdVlXMDYzWllnQ1RtTGM5cE9wNisybi9BQXpIMnd3TE5sQlV4bUJITmRwcWZqZG9YTGI4cE03VHNRS3IzR3NGY0Z5MWJ0dXdBVjh6SjNXMXlGZVRhQWthYzRPbzBJbk9PRG9pN3dGM3NkYWZHWFNsMjJSMk5vYU9wMUQzeVJ2dUFSN3hUemd0eGNyNmc5N2tmM1ZyeVZ1SHMxeTcycmZhZDNNZE5UTERZYWJBYURuTkxmOEFoWDJMdkE3b25iOXhXL0drcFAzOEc2dEhybHRpTVhpZ090ci9BTXRhSmE3NGZHdkl6WWEyYmdSMkRES1pSaUZBSVNOUkJHLytVMUUrSXhFL3I3M0wrbGJwL0ZUZUw4aUtSZG1mU2wrUEs5cWtsYzJZYmtBeG1uUVRKOWxGTzQ1a0RwSjNQUVVMaWVGWFh2SmNVZDBGWkVpZERKb1J3eHBhRXd5Q3dKYVFMaDFSU1ltMk5zMFNmaFI2WWdSYzdwMFJkV2pYdWlOTmE1dGNDeEhZS3B0blBuSllaMTBFUisxRkczT0VYUUhpM3F5QUR2THFRSWdhMDdvUkNuOUsxbmFoYmFyR1ZWSkV6R3AxNnhycjlLTlBBTVZ0MlgrZFA5M25VbHJnK09RUWx0Z045TGliL3dCN3lyVWxvbmNwYnNGVkxoKzZWSDhQNEN0WGJpSVpidEpJM1czQVhVNnRyck5NUCtGOFMvWllEeHVXOVA4QU5TcTlpOFpaWXJkdU1KMVVaMU9rblh1eldWL2daZFV0TUp3VFdTeFo3UlpZRVpuZEJJSmxqS1JycHBKRkhZN2orR3pUK2pMbkk5VzNkWlVoZGlJUlFEMWdWVkxlSnVYSGVTemtzZDlZK2xFcnc1OHdjZ0FEbE5HVkxiR2duTFNIUEZmU083YzdOVnRKYUVaUUN4ZGdBUElBQ1BNMG11TVM0ek16QWFGbU81QTZEODZWeGV4U0J5VE9ZRHV4N1pCK0ZCcmVkZ1JKZys0VFdTYnlOTHFzWFp1N2RVdExadDVHV0ltZE5PbnRxQnl6RW5hYUl0V2h6SDUxcXdlanZCbHZTek9RRVlTdVhjYUV5VHk1ZlNtY2xFbjF2WW80WHdlN2VPVkFRTmU4WnkrSWtjNnNPQ3NERHE2a2huekNDQkVncURFOUorZFdTNDl1eWhXMnFpQ0NFRUNaM09nOGVsSWhaZTZ3VllMRmdKSU1BQUdmVkh6Z2JEempLYmtzNktKS0p2aCtCdVloNUNkb0ZKa0FHWTBnQ0J0UHo4YU40cGhMekhLMW9XNFByWlFzQlJybUlQZWdEbjBQalRHK2x5emJEV2grNzNUQm1ESkpNOVBpS1plaitIRFhMWGFJckE1eStjQnB6S3dhUTNVUUQxanhxU2xjbGVORHlqLzVaNU54SEdoOUpCeTh4NGE2eDdhNTRkZFhPQXlNd0VBNUlHKzJZbmJYbjdPbGU5WFBSckFtU3VGd284T3l0d2ZNWmRLWDhhNFBoN2VHdW0zaDdGdHlrVGF0b0NkUnBLZ0d1eHBVY2NGVG9ybDUwdTIwdFc3WkYyMkFVQmJ1b29nUUhQckE5M1RxQWVXc1dGeG1mSXV6aG9NanpCOFJyb2EzaHJKVTlvd2ZORUFnRWpLU0R0L0liODZHeG1HdUtHdUptVmdkVEhsM3RSMDhQbFhGMnRuZDFwWUxIZ082cmhpTldtZFlnaFJ6SGhSSEEyL1dxTkpiZnpVajZVdjRWaVZ1Z0F3RzFnYUV3T2VvNTBad25LanNtYmZVNlJFZ1JUeGR0V0k5TWFIR2dzVm1POWxFOHpNY3ZHbzhWZFVXaXVZcXpLMnUwdVpBZzhqTVJTVEU0a1c3amhqb0hoWTMxR2JYNEQyanJSZHE4ZXpZVE9jUnZJMWtDT1VlWG5WUExKWVlualcwVnBlQ1l5ZjE5LzhBK291ZjdxYi9BUExBYkRJMTdFWGxmVVhQdFh1RDFuZzVDeEV4azVkZk9nVGR4R0YxWWhyY3dOWjh1aEZGcngrMWVFQjJ0M0JFQXNZTWF4RXdmZHAxcVBlVk95cmdtVnJGZWhGOFp1ekszUUFTSWhDMnAzem5ReDQ2U05hcldPNFhmdy82KzFkdGdic1UwMTJDc083SjBHaHIySEM4VktLTXdCMDNKQUd2UXlSOGFhNFhqTnB4REVMeWhtVXo3UVRwNTFYaTVZeTlrT1RpYVBuNWJ5a2xpM3JiS1pNYkdSbGpYNjg0cTNlaE5wbGMzYzVGcFNRME13RGFOREZkbVVRQU5OeVBHUFV6d2JDTkxIRFljNXRTZXlUWHhQZDFycXh3dkRXek51elpYU081YlFHT21nMnE3VnJESlJWTVZSbURFbnV0QUlueEU2alVjOXZPbG5wRmJkQ2pXV0lmSytqeTRJN2dJa25ON2MxSFk3UjdnUWFUcEhzb2UwbmNWV0VsVmdTSmpRVEI1YlZ5eTVYMno2T3BReGdSZWovRG54VFhydDFiYXZtVlNvenFHSUJiUG16bUNjMFJCOVdnK0pZYTNZN1d4Y1M0RUpDNTdVWEZVRzFiRUV0bGJOQm1ZUExlcmp3OHFqWE1pZ1NGWXh6UGVIeUFxTEdjT0R0Y0pJUGFFR0NOb1JFaWVmcXo3YTNaUExObFlLbndYQ1c3d2NaVGR0TmNWWHVkbTZTQmJBSU9WWUJHWmVZM0pwaGY0WmhjeHlsSTVmYW4vZFRUME90ZG1NUWcyRjg3YmZxN1FPL2lLczNidCtUVk82WG9UcXp5dXpobFozZHNMcW8renVkcm9TSjBPdWJ5TWU2cFd4ZHdxRCtpUDJrN0c0SU14bGdocDZFOGhCM29MRzhXS0l6QlFZR2cxNW56b1hFK2tyb0E0dG9UcHZQTWVkT2szNkVlQ3c0bTY2NVNtRmRwOWRPMEU3Qm1nQmlyYnNOZFMzdnFaSGJ0Y242T3h0eE9mT0pVeEtoZ1RxWm5iYnVueVFXL1NHNEFHYTJpaGp1YzBSRXlSdkhqVXA5SjFBT1ZrSjhTZCtrQTFxWWNEckQzcmhTNFd3eERyT1E5cjNiZys5enpUdkVqV2VXdE1NSmJ6V2M3MmpiWWd5aGVZalFlcVkyQThSVkwvd0NiM0NrOW1tZ2tBNXRmcFhMK2w5MWdyZG1POTNZbHN1c2lZNW4yMW5HVEFwb3NZd3FLelhDek9XL3JHTGhJL1p6ekhQMzFTK09jUkYxbFlDQ3NnaVorOFlNalF5TmE1NG5qTHR6MXl6RHBzbzluT2xpMmpQcTBZUTl0bWxLOEpIQ0U5N1dOZHA1MUpMZzZNWUhSalJHSHdHYVowMThmeDNvc1lBY3FaeVZtakZnSzJkZFk1SDgrNmlWdFFDUEg2R3Urd2tEeTFINTl0VFdyUFhORkk1REtKR2xsajVlVldMMFp1NUV1Q0Ryb0dFZDBrZDJRVHQzVDFvSmJJa0hMT25uOHFPNGJPUzdDRW51R0ZrblJqR250TlRic28xMVZodUlMUHBJTHpCTGFkM1h3MzI5OWQ0Y3ZhQnlCUDc3SGIyVnBYZmM0UzRUMXlFbjVVSmoyWTIyaXhjVXh1YlpBSG1ZMHBYQ2J4YW9sNVlXbTA3SVArYmI1dWRtQW1TWW52SFhYOTc4T3RkWWYwbnhNem9DSkVoVzA4UFc4NnExdHdsd1RPaE8zdHAvNkxsYm1MdEpNaGkyaDV3akg4S29vUnRLaG0zVGRqTmZTdkU3Wmg3bSt0UVlqMHF4SlV5Vk9teG42MWQ3dkFMWis3dFNuMGg0UWx2QzNYeWp1b1NOT2tiR3F2aFh3a3VSbFB4bnBkaUVnQVc0aldRM2tmdmJWTmh2U204OFNMZngrcHFzM21GeHdBTnhHcDV6VDNEY0p5Z1JhdW5UOWcvU3BxRUswR2M1TFRISERNWXkrcXdWb2dScjNlbW9wOWg4ZW92WnpJVXFCSi9jMEpnY3BCcXQyY002Ni9vMXpUbjJaQkh3cGhmOEE2T1FWUFppUVJCRXU1MUhXa2txZG9iaW4yVk1LeDdpNHpYWjFMS1F1YldCbFVmV1BEeG9hdzcyaVNCb3IrcVhJQkJ6RGIrNlI1MUNqenNkeVB3TWU0VnRYMGZ1eVNVNWtha3pxZkRVL0NrbGJMSkpERGpXS0YyMnFSbFl3NGt5STg5K28ycGF2QlZ1VzExR2NUbThOZTZmbFUyTXRzVXRSWmR0R0hkQk9XRzBrZ0hReklxSzNldXByK2pYUjQ1RFB2QXJSaEpPN0p6NVkxVk1EN1hFNGNFQnN3L2VrL0VFRSsybzA5SWJvRXdnL3NuNjAvd0FOaXpkbExscDEwSkRNcEFKMDBPbTlDNHIwZkJ5aGVjVDdUcWZqVkZDTDlBVTIxaGdpK2xHSmdTMENPcmZXdC84QU0ySVAzejhmclZoWGd3VlJLeUlIbU92bUswbkJrSTFWU1BqL0FEcS9paVQ4akttM3BkZHpzcnRNSGt4bjJnMHd0ZWtDdVJrdXNENG1QenpxdGNmNFlveFYxVjZnajNhL0tvc0J3NW1FcUE0L2QzOTI5UWx4d1k2NUpSenN0V0k0amR6MjFTNXF4MVBtMENJUFN1c1A2VVhseEhaWlZ1Vzg2b3BKSWZ2WkFTVzJNRmp5NVVpdHBjVDFVdTZjaXBqM1JVK0RsYmlPYlZ3ZDhNZERCT21zRWFiVXZqb2J6S1gwT3czcG1MRjYraldTVU54bWxXN3dnS3NGVG9UM2YycWYyLzhBdEF3WkFKYTRQQTIyMDl4SXFpY1M0WGNOekVFSm1sbWdqOThabDM4Q0tYakJuV1VPNTVIcWFwMWl3TnM2NHJjbENKM2dmR2Z3b0cvY1oxSUN3dlU3NmE2Q3BiK1lzczg1K0ZkQzBTS3BkSkMxZGttRHhJeW9UcVFJRThvMDk4YzZuYThUdVk4UDUwRGhVSVFTRFBsNDFPVUpuUWlsZXdyUkhlVVpTQnBPa2VmVHBVQnZmWmhWVXdJSkowMUJuVHJYZUlRaGZiK0JxVzVhT1JnQWR0SXBscENld2xGQjJBOTFUSW0vNUg4cXhFZ0RTUGwvS2pjc0RiWGtSOVJVV3l5UUlsdmVQcld5RzJBSDU4S21VZnRHQitlczBaYnNJUlBlYVBBbjhZK0ZLNVVVVWJGeTJXUE9LSXMyVkhya3o0MU9sb2MxL0Q1VVFsblRRNmRDUHdOQnlNa1lMWWdHZGhYV0diN082d2JkbFdWUFJYWTZnL3crK29icm5ZS1o4Qi9PdTdvYnNWdGdRV3pPL2hMQURibkNmR2hGQmt4YmpPS1haN3R5NEFOSnpzT1huNTFQd0xIM2JodkxjdTNISFlPWVp5d2tGT1JPKzlDNGpoeDExRkVjQ3Q1V3U3VDJOemw0S2QrbWxWeFJGM1lreGkvYXNJMlk4dkUwOTlCTGNjUXcvTFYvL0x1VU0yR1ZuWm1BR1ppZmVacHI2TzJ4WnhscTdxVlV0TUNkMFpkSVBqVHhsbEN5amhuclJYd3BKNlpvQmdNVi93Qk5xSXQra0ZreVhZckcyaDE5ODYwcDlJK04yYm1GdjIxZG1aN1pBN2hBMzVtSzZISlVRVVhaNDd3MWZ0YmZtUG5UN2orUHVyZVlKZHVLQXR1QXR4Z0I5bWgyQnFDemhNakswYWd6UkhHY0Rudk9mQlBoYlFWemRsWmVuUUpodUkzVDYxMjZkZ0p1TjhwcXozSGxMTE1TU1VLK2VWcEVuZlpoVlZzWUloaEFKZ3o3dGFzbUFabnNCRzBhMndJSTVxd0lQbEVKV2xRWTJScUNqSGVEOEozUG5GSEM0TXBZajl1NS9aUmNxL0UwR1ZLazZ6N2EyMTdNaklEcTBMSjVETkpIa2FreXRDN2lkNjVhdDRkRloxaTNuSVZpdjZ4aVJNSGxIeG9OTWRkeWo3VzdyLzRqZldtWEYxVzVjYUloWVJaR2tJSTh0NTk5TGYwVmxnNkdPZzBwMDBJMFdQaFBGM0Z1NjF4aWNtVFVrbjFtSXF5Y0x4QWNETWRUQTA1YWcxVExGcUxON05vRDJmd1kxMXdyR20yd0Frck8zempwVElSbm83VzNVOTNVSFhLVDhqeXJvM2tJN3FOSTNFYmVCcU5PTTJHUVNTREg3SjBxSitNV2dNd0pKOGpYUmNmcEduOFBQZUxHY2JlR3VqYzkvVW5XazNDbisydEVmMWtEeUpwanhTOHo0eTljUWFPMGdFSG1vVW5sSE9vY0RnOGwyenJNTXArTlFsVnN2RzZPZUtZMSsydXFMandISUFEbUJCSTBFNmJDaGJPSVlPakYzMFpTUm5hQ0pFeUo2VkpqTEdhN2RNZmZZbis4YWlkWmpiUVI1N3hTakJlUHgySXNZbTZiYmxsWnMyVmlTRElCQWlaMG1CQjJGVEQwdkgzc0VDM01pNFFENWQwL00xenhJWit6Y0VTeUFFZnZMb1pQdW9iTDR6N3FOcDdRT3I5TTZ4R0Y3NkU2Uk1pTndZMjkxWXlnYkQ0VmxaUU1hVWFjcUlTeFAwMi9Dc3JLRDBGRUdLd0lZQ0RsSVlHRHI3dGFLZXlzSFRLZXNiMWxaUzJ3cUtPU2pBYWZFZld0ZGd4M1luMng4Tkt5c29tUkpid3ZVL24yMVljRmJ0aTNCeXp5SkUvSFd0VmxTNU5GWUE3NFVEYlFlT285L0t1R1RLSk9nNjdqNFZxc3BZbVpHejZjL2RBK3RZV2JMcVFQejQvU3NyS2RHWnBVQjFCbjJrZTdsVWlXeEpKVVRCM1hYMkVWbFpROWdCbnRhNkVqekUvTFd1TUdybTRzRXgxR25Mclc2eW5oc1dXaHdjUDVueitwK2hyV0l3NHlOejA1N2ZIU3NyS3E1T2lhU0Y2SmFNRTkwKzRmQ1I3Nmx1WUpabGZ6cDRmU3NySzVyS25Kd21tay9QNWExM2hVNkFueE9nckt5bVJqcTlodFpKMFBzSDFyRlZHa0FBeDdZOTQvR3QxbGFRU0cvWkc0QkhscDlSVUpReG8wZUpXZmw5S3lzcFVFSFN5eEptV1BVL3oyRkUyN01ucjVhRDM3bjJWcXNxbHNYcWh0YklnTEFJOEJIeHFkVnQ5U1BQOEFsTmFyS0xGRjk3REt6c1FRWjhhZ2JBU3czajg4aHJXVmxTN095aVNvZ2F5Qm1BVWpxU05manRVU1lOWWd5ZkVuOEt5c285bWJxanBzTW1nRWFjdnB0V2ZvWDhkWldVMW1wSC8vMlE9PVwiXHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIExhcyBWZWdhc1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICBUZXN0IG1lYWwgLSA5MjYwXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zID5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAg4oKsIDE1OS4wMFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc2l6ZT1cInNtYWxsXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICBUbyBQcm9kdWN0IDxiPis8L2I+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9ICA+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIxOTBweFwiIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQllXRlJnVkZoWVpHQmdhR2h3WUdCb2NHU01lR1J3YUhCOGFHUndhR0J3Y0pTNGxIU0VySVJrY0pqZ21LeTh4TlRVMUdpUTdRRHN6UHk0ME5URUJEQXdNRUE4UUhCSVNIekVySVNRME1UUTBORFF4TkRRME5EUTBOREUwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5ERTBOUC9BQUJFSUFLWUJNQU1CSWdBQ0VRRURFUUgveEFBY0FBQUJCUUVCQVFBQUFBQUFBQUFBQUFBRUFBSURCUVlCQndqL3hBQkpFQUFDQUFNRUJBa0lCd2NFQVFVQUFBQUJBZ0FERVFRU0lURUZRVkZoQmhNaU1sSnhnWkdoRkVLU3NiTEIwZkFWSXlSaWN0TGhNelJqYzRLaThRY1dVK0xDUTBSa284UC94QUFaQVFBREFRRUJBQUFBQUFBQUFBQUFBQUFBQVFJREJBWC94QUFpRVFFQkFBSURBQUlDQXdFQUFBQUFBQUFBQVFJUkVpRXhBMEVpVVJNeVlWTC8yZ0FNQXdFQUFoRURFUUEvQUpKcXVoTjhVdkRBZzFCZ25SMXFJbDEzZy8yckZMbzdoRFdnY0JseUt0bVB3MXo2akZvc2xYVDZrM3FuRk1BUjFWcGhobDR4NW1mdy93REwwY2ZrK3NrMDJXSjB4azVPU1BWc3VhdzJibzYzQjhIWEw5QWZsaWt0SkxsbDVRSUtBM2M2cWh3N0ttQi9KVzJ6UFNQeGlzTll6VlJsTGIwMEgrM2gvQjlCZnl4ei9idy9nK2dQeXhRK1NQcUwrbCtzY2F5emRyZUh2TWFjc1M0MzlyNy9BRzhQNFhvRDhzUTJiZytMZ1AxVzNtamFmdXhUZVRUZnYrRUR5ckxOdWpCOGg4NXc1Y2RGcXROOUFEK0Q2SS9MRVU3UUFGTUpQT1Vjd2F6VFpHZk5sbWZmNy8xaGpXV1poenpqdEh4M1FieExWYWNhQUg4THNGUC9BQmhxNkNXK1JWT2FwN3krN2RHYk5tbVY1cm50SHZhT0xaWHFhck1HQTE3MjN3L3hHc21sT2dsdkFWVEp2Qzd1M3c0NkFYYW56MlJtVFpHcU9ma2RmVnZoM2tqZmY3ejhZUHhHc21qT2dFMnkrOC9DRjlBSnRsOS82Um12STIrLzNuNHczeVU3WDd6OFlONGpXVFVEUVM3VStleUY5Q2pwUysxUitXTXlMSzMzKzgvR0VMSStvdDMvQUt3ZmlOWk5KOUNEYks5QmZ5eHc2RUg4SDBCK1dNMzVOTSs5NFFqWlpteC9ENHcveExXVFJuUVkyeXZRSDVZYWRCRGJLOUVmbGpPR3pUTmpkLzZ4enlaOXJkNCtNSDRqOG1qR2d4dGxlaVB5dzF0QkRiSjlBZmxqUEd6UDkvdkh4aG9rdjBYSGFQY1lQeEhiUkRRWS9oZGkvd0RXRWRDTHRRZFgrSXp6V1p0ZC92OEExaGhzcDJ2M3dmaU5aTDZkbzVFQkxGQ0I4N0lyYlRabGNxcXFGMXNhWWdka1Z5U1NIWG5ISEl4ZlNrQ0tTY1RtZDUrQWlicWVLbS90R3dWRnd6MWZHTEhRdWpqejM1MmFnNmgwajdoOGlIUlZnTXgrTWNWV3ZKVTVFN2VvUnBHY0l0U0NkZ0F4SjJtbVFpOGNmdEdXWDBlT1RTZ3FUa05aUFNiNThZRnQxcVNRak83VTJrakVuVXFqMUNJcmJwVkphTTVEbWdKSnVFWlkwRlJnSTg1dDF2bjI2YmRWV1kwWXFpNUtxaXJNZW9ac1kya1kydEJ3ZTAyOW90NmFrQ3ZjU3VBd3BWdHAvd0FSdndLRWhjVDV6SFZqbCtueWFYUVhBNlhaSmNpYXpsNTB3dGZmSlZXNHh1b09zQ3B6TzdLTDRJTmZKWFp0eDE3T3IvRUZFVzJnQ0t2UVZ5cWRweDE2NHNKekhvbnZFQWFBQnErRkJoUWE5ZWV6cWl3blYyanUvV0t4OFRsNjhsNFlnK1dDb3B5VVBlN2JJOUw0RWZ1VWorV25zaVBNdUdjNGkxa3RTaW91V3dPeDJ4cGVDN1d1MFdlVktsamlaS0lxbVl3UExvQUtvTUMzWlJkNWdEeU5YSU5EWDN4ZGFOMHk2VXh2S051WTZqcTZzb3pyTTh0akxkQ3JKeVNyQ2pLYnhxVHJ5cnV3aWFSTlVyV3VPelhVMTcrYVl4eXhiWTVONVlOTVMzZGl3cFc3eXJvem9RUTJlN0dKYlhhSnlFVmFVUVJVRUpxakVhTHQ2b3hKdlV5d1FrYktFQVJxYkRiVWRTRlZscGlDeWxSajBid29leU1zOGEweHNTL1NVM2JLOUQ5WVgwak4vaGVoK3NRUE1jR2haZTFCOEk0Wjc5TlIvU1BoR1c2MTR4UDlJekJtc3M5U1JCSTBtNFVDN0w3aFgxUjBXaHg1NjlpaUlwVnFtQlY1WU9BK2NvY3BhVEhTejlHWDZJaUticFY4TUplWTgwZFh2am5sc3pwTEVjeTJ2aHlobVBER0hLVmtTL1NyNjFsZWlJakdsMkRIOWtEUWVhTnJiT3VFYlpNMU9zUmkyUGVKTHJXZy93REtLbEt3UU5LekNSUXk4ajVuVkQvcEtkdGxlaCtzQmZTREVqbHJyMUE3SWw4cWZVNitnUGhCdWpVVEhTVTNiTDlEOVk0ZEpUdHNyMFAxaUx5bCttdm9qNFEwMmgrbXZvRDRRYnBhVGZTVTNiSzlDT0hTYzNaTFA5RVFjYy9UVDBWK0VjTnFjWk9QUkE5MFBZMGxPbG5yelpmb2o0UTF0S3YwWmZvZ3hFYmJNNlM5c05hM1ByY1F3bE9sWDJTL1JFYytsSDJTL1JFUW0yUDB4RGZLMzZhd0RTWnRLdHI0djBSSEYwaTV5NHIwQkVKdHphM0VkRnBjK2VPNGZDRHN0SmpwQ2J0bCtoRU03U1UzS3FDcHBnb3IyUTFwNzlKZlJId2p0bVpuNTFEUTdBQlhWOFlOalEyVjBqblRQV0JzNnpGbllMSVhOVGxYNVZmZVlCc0VxKzkwWWhjV05NSzdSdjJSckxQS0NLQlRjQnQyanEybURISFpaWmFUU0pZVUFZYkFOUnA2bEh6dk1rV1BqQ1ZyVFhYQ3BwaHIxWXhXaTFJczFFWmdaajF1cnVWU3g2bEZQbXNhVFFRNWJmZ09KMTRybHUrZXZlVHRqYjB5M0MzUm9TelRTWFBNYkRET2hwcWp2K205Z1JMRGFYQ2krNk5lZW5LSXVWQXJzRmNvdU9IYWcyU2RWaHpHUGNEdmdQZ0FQc0U3OERld0l0RnE3MGdQcWJMaFhsSDJHZ1ZoMnRxR3pIdzYvd0RFR1cvOWxaY2FZbjJHZ1pmdWpEYWRlT1kyOWNUbDZySHhZNkdCcTlUamhnRFFhKytDWjZBNno2UmlEUW9VRjlad3FjOXV2M1FaT3BzOElySHhOZVVjTVpROHJXbU5aYVZ4cjU3eDZWd0pIMkt6L3dBcFBaRWViOExVKzI1VTVDSEw3N1I2VHdLL2NwSDhwUFpFTU1oYWJUWTdXb1dlaXZtcXZTcFc4YW00NDVTSERkbEdTNFNjQXhLUjU5bm1oa1dyRldPSUY2Z0NNbzVWQWRlSjJ4bjVGcVpHd0pVN3ZlSUl0T201ankyUzlSYTBvTUwzM21wblRWMzlXRXl5bnJhWVkyOVZ5eHkza0lzNElYSW9IdmNwUXBJRlJkeFhBRVo2OG8yZWlwS1Q1S1RRZzVhMXBtQVJnUVRVWWdpbVVlWWxZOUQ0QVcxSGttUUtoMHZPUWFHcXNlY213VnpHTkNkOUFaWTliT1g5TGR0RnFjTGxjdFEvTkhQb3BlZ004Y0IrYUxacGYzZG5tajR3dUsyanE1SStNWjhZZktxbGRFTDBCcjFEODBRMlhScWxGTjNBcURXbTNIcFJlY1ZpT1R0ODBmR0lMSEw1Q21ncmRHU2lsTWFhOWtQakM1VUI5RnJYRmRZcGgxZmVoay9SaWk3VkJ6Z010dUhTMlJjQ1huUmRmUkd3YjRpbXB6Y0J6OGVTTisvYlNITVlMbFZkOUZMMEJXbXovdEVKMFV0OWdGODFEbHRML2UzUmRjWHljc0taM1JFWmxtKzJBcGRUelIwbjM5VVBqQzVWVU5vcGJ3b28xMXcvRDk2RjlFcjBScjFEODBXenl1V3RScWFuSkdQTjN4MHk4ZWJ0ODBidDhIR0RsVk1kRXJUbUNsTTZZKzFEWDBRb3FiZ3oyRGQ5N2JGMXhYM2NhZEViOThjNHZQaytBM2I0ZW9PVlo4Nk5YL2o4QitlR2pSdzZCOFB6eGZGSTRVaGFQYWlPamgwRDRmbmhObzRkQStINTR2TGtjNHVEUmNxb2pvNFljZzY5bGZiaERSdzZCOFB6eGVtWEhETGg2SEpUSm94VFdxVXhHb2J2dmJZYzJpVjZIaC8yaTNFbzdLOWxZNkpPeGRaODBiOThHaHRTZlE2OUVWcHMvV0UyaVZHQVhacS83UmNMSjVPV0ZPaVBqQ215dnU3UE5HM3JnMGUwR2lMS0VXZ0FHSjNkZTNWcjdJZmFMUk9SV0lBeS93Q05zaGtNOG9Jc0NjbkttSjc2NFliZDNiR3Mwelp2cVh1aWg0czB5em9ZckdNOHE4bTRINlB0RTYwTGJwckFxSFpGcWNXWmttWkR6VVVBOXRONWoxVFFJNWJIN2h4T3ZGY3QzenZqSGNERit4UzhQL1cxL2dtNXhzZENubHNjK1FjVDFybHUrY1lxK3hNOEI4T2xKc2s3RWN4amxzQk8yS25nWmEwbDZQbXM3cWdLc29MR2xXS0FBRGFkd2l4NGRLV3NrNFVGT0xZMTZnVHMzUm4rQkdnSlQyZWJhSm9NeDFWN2dZMVJPU0NDcVpYc3NUWExDa1dsYnlOS1RaL0VmVUZMTXRRc3grZk1lNDJLSnFYUEU0SENoeml6STZSb05ueE91Q2JjUHFyTFRhZllhQmhUVnltMjl1M0lka1JmVjQrTExRdGF2aFFZVTFhenExUWJPcnNIZitrQjZGclY2blpnTzNiQms1ZDU4UGhGWStKeWVXY0x5ZkxCVURtSmthK2UyNlBST0JmN2xJL2xKN0lqejNoZ3RMWU1hL1ZwczZiN0k5QzRGZnVVaitVbnNpR1Q1NmZTQmRTSFVGeWxMOU1iMTQxNXVITnBxemd2UjJqcnlnblhHMS8xSDBYWmtzNG5TVVJYNHhWSlhEa3R4akdxNnNSc2pQMkkwbG9kdzFSamwxNDZQam5MZTNHNE1WSW9kVllGV3l2WkxRamc4MWdHMkZXd1lIc0o3bzI5aGV0UHdSUThNQUNYNmgxNUdNY2M3eTFXK1dHT3VtNGtTM0ZiOTA1VW9wMzFyZ04wVDNPcjBURDVhMVZkNFU1R0hGUFh2eCtmZEdram4yR25PaUtYY3FxcUN6TVZOQUJpU2R3Z2JSVG84c0ZDckFBQWtMV2hwV2g3Q093aU1sdzUwK0d2MmFYNWhBbU5qaTlhM0J1RkJYZmhxTmF2Z3R3bmVUTkN6VGVsUGRWalFDNVN0SDVOSzU0MXhwMVVoeUN6VWVtR1dOZ0dQUU1SenBYTXFCeng1cDNrZW9RYUVHckhIZkVVOU9icjVZMUhmNnZkRDBuYVBpeG5RWlpYREVYRmkrMkhtcDVocHpwa0dtWGgyWjBNUmhPVzJmTlRVZWs4UFEyR2FYeXhnTW04dzRjeUhjV05nMStZWW5aT1d1ZVRhajkzNTdJZnhmempCb3RoT0t3MVpaM1RDYVdOZ0dJODBqWnJndmkvVmxqRFhsK3NhakJvYkM4VkM0cURMa2RDUTlEWUxpWVhFUWR4VU9FcUhvdHEvaUk0Wk1XRnlHbElORGF2TWdmSzFoank5d3pQbUhmL0FKaXdhWDg0KzZJMmw5dWZTK2QwR2h0WGxCblFaWlhERWJvTmcxZVlkdnozUVk4dkRzem9ZaGRCNnRUUk5VWlpCaDM3dGY4QWFQRTBqVjZaVWNTOWFBY1dmTjNSbDdHTU8wL0lCek84NVJwdE5LZUtldDZsdzFwVEtrVmluSmdlQjFwUVdhVEtMTGZhYVdWSzRsVlNaVnFaMEZSanZqY2FFV3JzYytRY2RXYTVDTVB3SXNpTFprZFVXKzA0WG1weWlCTG0wQk9kQnNqZGFGNTdabmtIY00xeWgzKzBUUEZkdzVsVnNrNmdIN05qM0FuM1FId0YvY1ozNEg5Z1FmdzRYN0pQd1A3TjlmM1R2Z0hnUCs1VC93QUQrd0lvbHpicWNWWnE3VDdEYW9oSmJVS0REUFBPbVF3aWUyTjlYWmhVVnFjRCtCc2FSRXlEempYZGtPNForTVJsNnZId2RvZ0tDK05UUVZxZXZWcWdtZTZib0cwU09jQUNCaHUyNm9LbTlSOFBqRlkrSnllVmNNWHBheVV4UEZyVFpXKzN2alVjRnRHV21kWnBWNmNFbGNXdHhWcVdLMEZMMUxvQnB0TFJuZUZ6MXRnRkNLUzB6L0d4MWRjZWhjQ3YzS1IvS1QyUkRKNDNiYlphYnBTMHlHZFFYcmZRMHFodXVRNlVISkpvU0NhVmhtanJUWXFZeTVpVTFwTkxEdWJMdmgwdmhQYjFCdnkxbUFobFBKQlAxbEhjMWxuTmlnYXRLREhDSkg0WVMzUDJxd3FTU3pFaWxhdTZ1YVh4VWN5NE9WazBZMzQvcHRqOGxsMnRySExzc3pCSnMzcXZCV0E3VXg3SXNsNEl5SDVUVHJTUnJEdXREM0psM1JtTERhOUV1MTRpZEpPRlJlbUFFMWNuRkdZQUc5TEdxZ0J3R2NlZ2FJMFRaYm9tU0N6SzZncTVuekdCR29nT3hwanVFVFBqNDl4VitiTExxMVpxQlNnSUlGQmc1aFRHQ3FXMkFubkhVS3c2WElSSzNhQ3RLOHJPbVdmV1k3T2wzbFphMHZBcVRYYUtSVWpQYnd2UVVyalN6T2FsamVZN1dZM2llOHh1andha0d4TzEwWHc1bzJ1bE11cUlyQi9wOU1sQzZ0b2xzTnBRcWNPcGpGOTlEMm5pakxEeUtNYnhKTDE5VVJuTXJlbStGeG1QZEZjRkpoZXl5aVRVZ0ZLbGpVM0NVSGdvakc4TWVGaDQ1RWtNYmt0bXZGWElEdXBwVUVaaFRVYnpVN0kxM0VQWkxCTkY4TTh1WE9jRlRRWHFPNHBYSEFrUjVUd2FzS1RGQWV0QWNQQ3NYZXB1b3hrdVZrZXVjSGRNSmFwQW1MZ1J5WFM4YXE0QXFPbzFxRHNJZzBVdnVLaXQxS2k4YWpsUG5HTzBmTmxXQ1phV1VHNEpIR0ZhNXNqS3FBVjFrdVIyeG05RWFldEl0VDJwVmFZRzVjNVZVWXkrU3RGSnhBSEpBRmFWVVZnbGxteXVGbHNlc012TFhMSnZPUDNZa3U5V3Z6anVpa3RIQ2l6cGFwVWkrS3VsUzk3a3FYdWxGT0dCWUFIR2xLcnRqUmhmbXY2UmJNT0Y2dXU4WTQ2ZTBQT083dmcxWlcvRHJqazZYbGo1eTY0QWdFdUpGa1FXaVE4ckFBcVdlSmhMRVNxSVJFVVFGNWNRbElMY1JDd2dBWmwrYTBpQndOMnZ6ekJMOWZqU0lXTy8rNzlJQkFqakRzeXZHSUppOVdyenp0Z3h6aG5qVHBmcEVMbmZzODc5SWlxaUd5cGdlczF4dzdXUHFqVDZWQTR0c3VZY3h1ak8yY1lIWGlkNStBalE2VmM4VzFMeDVCeXBzM3c4Q3lZVGdiKzZTOHYyMnZMOW5Oalo2R1BMYkVua25MQVpybC9tTUx3TFNjWk11dHdTaE55b1M3TnhjeWhKNXFnWTRBR3VHSWpmYU5TamtFMTVCeUdHWWgzMHA0cXVIRC9aSjRBYjltK3M5RTc0em5CT3pXcDdQT3V6bGxTZ0hKQ3BlbU9Bb3dMTmdvT0dJalNjT2ErU1Q2VnJ4YjZ2dW11clpBUEFmOTBuL2dmMkJGSkZXZlFVcVVzaWFMN1RHcUdkbkpZaTR4b0JrQlhZSXRsbGNtb1gzZCt1Q1pFdFdsMmNNY2NidTgzVG4yVmllMG9BcEVaNWVxeEQ2SnZWZXROVy9icmdxYUR0SGQrc0M2TFVBdmljaHI2OWtFelFOdjhBZEY0K0ZrOHY0WHBTMkE3WmFlMnc5MGVnOEN2M09SL0tUMlJIbm5DMC9iYzYvVnBUR3ZudEhvZkFuOXprZnlrOWtReVVqMmpSYjF3bERLdklaUE5KMkR6YXhDZERhUG1DaVRGRlI1czRITmFWb3hPcWtadVpwV3pFL3UweE5lQU9vRWFtMkVqTFhFS2FSc0xLU3l6bEFCQityTkFLWGM4ZFdHTVpUNUkwL2pyUlRmOEFUMnpQaXI5cFJXMTF6V20yblZGdm9YUXZra3JpQTk1UVdZVUZLQnNTQUdKT2Q0NTY0d3NtMFdKbUhGdk1Cb0RpalpGcWlsMU5yQWRvalo4SEdBUW9HbVBRM3F2TGNHaG9BQVhVQTVWd091SHlsTGpZdUdIWDRSd2c3L0NFb0pyeVNNdFFoNFRkNENDQXdBNy9BQWp0RHZyVGREZ203YnFFSzVobGhUWUlZUldpenE2T2pyZVJ3VWRUU2hWaFFqRGNZcExQd05zYWN5U1Z4MVRHOE9WR2d1YnRld2JvN2QzSHVFRmt2b21WbmNaSGhMd1FXWlo1aTJkYVRYQ0xlZVl4RjFYUnlNU2Fjd2F0VUE4SHVERnFzOHQwWkVKWkNuSmNFVkpCeHJURENONnFic2FiQkVpcHUyYWhDdU1zMHFmSmxMdDRIb0N5eWJST1lUeVF2TG9DYnA1cEk3alRDUGJlRHMwdlpwRHNTekdXdFdOS21ncFU3elNzV3RQbWdqbDM1d2dtT3Jzc3N1VThkQStjSWh0R3I4UzdJbkErY0lodEM4MzhhN0l0S1ZZUmpvRWRJZ0Jxd2lzT0VJd0FLNGlCaEJMaUlHZ0NGcS9OUGZFTFYzNjlrVHV2emg3NGdkTjNnSVZBZDh0ZEtmZGhyVjM2dGtPZERzeHBzRU1LN3NjTlFpYXFKRWtFSVNhakhDcG9QRE9MblNxamkyeTVoOVVWbmxwWkFwQndxSzRaRExkbEZwcFUvVnRuekRzMlE4Q3laamdCSVEyWlF4eWNGZDdYSEhxTEdOUlp2MmpZK2I3MWp6emdYcFJPS1NXSFcveGdOMnVJWGk1bUpIYU8rTjNvdWJWMjVRUEpPWFdJTmZrVThWdkRrbnlPZlFuOW0rcmNhNnRrVnZBWS9aSi80SDlrUlk4T0puMlNmUTQ4VytyN3BqTWNEOUlUbHM4NVpkbVoxdXNHZmpFVUtLQUZxTmlhWjBFV2x0cDAyN0tzcHJURTQvME5ENXR0RERiMVl4VVNMVGFHV3pCNUtvbU4xZzRaaWJqNWdaQ2xZTkpPd2QrL3FpTXB1cXhXR2h5S3ZSU010Vk5zRnpUdWdUUlRtcjFwcTk4RVRtYmRGNGxrOHc0WnVEYkFOa3RQYmFOOXdMbUFXT1JVZ2ZWSm1hZWFJODg0YlN5YlZpZWRMWEw4YmlOZHdONFB5V3MwdDJ2Rm1SR1BLb0trVk5LQVFFQ1RSeVZPR29qd2dXdzZEVjBtSU0yRHFPc2swcjJ4ZFN4aWVvd3RDMEJicko4WTRwTzQ2YmVxQTRONkFFaVlqT1F6aVVFT0ZRQ0FBYm12Vm5uR3F1NGRuUml1c3hCdE9Zd1J0ZStMZTZQMHFZMytQeGxsNmlLYmhxODJPM04zOXNTMEh5WVREcTc0c2c5M3ExK2FZVjNkL2JEeUI4a3dxYngxMU1BTXB1MTlFN282QjgzVERzTm83ekNGTnUzV1lvalFNT3pvbUhnYnRubXcwWmRtVlRFaTAyK0pnQndIemRoVTNmMnc0Zk9KamxONDc0QWNCODBpS2VNc1BPWFZFdmI0eEZQT1dQbkxyZ0NZUnd4MENFUkFIQkhDSWNCQ01BRE5FTFJPNGlKb0NRTVBtbFlIY2Jocjh3d1EvWFR0Z1YyRzBEUFdZRER6RGdPck80WUhtc05nekhtSGJFc3h4U3RSbGxVd0ZhNTZJQ3p1b0ZSbXhIdithUk5PVVJJWVVPV1oxSDFSb2RLeXh4YlpIa0hNYm96TmttZ3JWVFVHdENEWFBMT05YcE92Rm5QbW5ac2g0REo1eHdNZjdPbVErdkhWaktueHU5RHRWMkY1VHlUbDFydmp6L2daTXBKWEVENjlhazVmc3JSSG9HaEdxN1lnOGc1ZGE3NEwvWk04Vi9EWnFXU2ZRajltL3NuZkZSd0JiN05hUDViK3lJdStHN0VXT2VjUDJiK3lSdGpQZjZmTjludFA4dVo2aEZVbWxtWXlMSmpURSt3KzJHSDhaOE52VkhHUDJleDRWeFBzUHRqaGNkQStqWDFSTlZpdGRFSmkrSk9BMmI0TG1wdk1BNkVLMWZrMHk4MGpidWc2ZGQyZjIvcEZZbGw2OHI0WjE4c3pyOVdsUFRhUFFlQXgreVN2NWFlekhuM0RkbDhxRlA4QWpUVlR6M2pmY0F6OWxsZnkwOW1Da3FwZGtTcHJVNEhNa2p1clNIYUxzeU5ldklwNnhYWHZpWkh4TUxSVENyZGZ2amlsN2RIMExzeW9rNEhrb0xwR3dWaXo4b1RwcjZVWi9UTTFscGRORFhQREttL3JoMW5JYWxjZGtWajhuSG9yanZ0ZkcwSjAxOUtHdGFVNmErbEZOYVd1Z1hUU3VldjF3eHViOElyK1gvQzRMbnlsT212cFF1UFduT0ZQeFJTcy9xckRrbUFvQ2NhazV3VDV2OFBndCtQWHBqMG81eDY2M0hwUlFUWnJpWWJwSVNtT3p4K2NJNmJVQnFKT3U3OGNCRC9sdjZMZ3ZsdEtkTVpkS0pGbnIwaDZVVUtPU09hRkc4MTljUFdZTjdudVg0UStkTGpGNkxTblRYZnlvNzVRblRIcFFCWjdNekFFa0t1d1llUHdpY0lpbFZBclU1L1B2aDh5NGpRY1AxaE5UWDY0UVBYNFFyeDMrRWFwSUFib1JBM2Q4SUU3L0NHTStHdkxkQURqVGQzdzFpTjNmRVR6enFyNFFQTW50OTdQRExaL21BSHU2N3RldUIzbnJTdUZLYllobVRHcjUydm83b0dkemp6cTBIUjMvckFIWnR2VkFiN0t1T28xNnRrRG5TS001VDZ5b0FhdkZ0Y3hyazJSak9jS0pTT0VEb1hKbVhFQkM0RXJVbnVXQUxQcDIwU2J5WHk0VWdrZVRYM0FhdEFXNHdEekRxTVo1V3hVa2E1NWc2VDVkQS9HQldteXkzTHZPTmpTQ3luT2h4SnlyRkJPNFcybDZKWnBSWjYxUEdTVlFYTllGWG9UaU5lT09FR3pOSjZTdjhtUWdUbFlsRUoxVUlBY1o0eFBmN1ByOUNpNkRKelNwb1BKMncyQUc5eVIyUnBkTTJnenBOeVcvRnMxeGJ4RlNCVVZBQnBtTU8yTWdiWnBPbGJxRTZnSkFCeDY1MU1Jc3BPa2JXcWd6SkRPYUNvVlVBclRFOHA5c09XOWxadFIyT3lUYkxhRmxsdzBtOEhMM0FxaDdreFFEeWlSenpublVSdXVEYzI4N2MwOGc0anJXS2tXNlk0cnhRVFhSMFVtdXdoU2ZYRHJCYXB5dVRjVElnM1VDay9QWERsN2c0Nm1odkRnMHNrODBIN054M3FSc2pHY0J0TXlaY3EwSzczV0tPb0ZEaVRRQUEwcEdzMGxObFRaYnBPVmtWMVpXSUdJQkJHR0J4eGlpMFB3WnNZTEtydk1CcWFrbEdYSVhUZG9EMTAxeGVWL1RQVlhzcTFxMW5zWVYxTEJpR0FJSkhJbURFQTFFVEJteXFEcjJhKzJNcGFORHJaN1VzNUVwSXVGYTNpN1h5RFhET21JeWkya1d4RzVyNDdMMk9ld3dyL3E4WjAxbWhISkwxQXlHdnIzUWJPWTdQR0t6Zy9tL0tyZ3VZRy9aU0xLZlhiNFJXUGljdlhrM0Rza1d1cDF5MDl0NDMzK25qMXN5Znk1ZnN4NXh3L20wdFdKeWxyNE84YXYvVDNoQlowa3FqekFqWEVGR0RERUFnaXBGSWRJWXI0OWtkMFUyTGRjVjg2MEFBOVJpWFJjMGdFbXVmaGhIQnQxNjZIYVZJTk95R1dlWmlQblpEYlR5enNFSkVWY2M2UWNiYnNibXRKN1kxYVEyOXlhZk9VUitVMXlGZW9lODRROUF4em92akZjVTdjSzdhK3FPSStwUlhxRmZFNFE4b2dQS040Nmg4QUlOa3lHT29JTi9PN29jeEZvUVNDY1dJSFhpZmhFaVNlaXZhUjZvdFpOalZlVWNUdGJFOWcxUkt6QVZwM3cvQzJyRTBiWGxQajFuRHVpY3FpMG9BYVpWR0F3cmdNb2ZhNWg4ZmRGYTgzZmxUMllWSmJQTlB6MXhWNlEwaXN1NDVETW9OVGNGNWlCanlRTXpoQWJhYlNqaDNSTHJNZ3F3R0lKd05Uc29lMk1sYVpyWmVYM1Z4b0FFYTdVMW9PVUtqcmh5OTlIcFlhWDRTVFpyMWt2YXBTVUF1ckl2VklyVnFrVnFhakE3QmxqSExBdHNkMVJwOXRGL0pqTFFJTStlUlc3MndIb3VYSmR3amFRZG1ia3Fxb3E4bzRERlNlN0NDOU1XZ1dlVk5sTE5udThwQk92TzdxS1gwUW9GeVplVUdxYTVtTnB0blhvTm1rdUVSWFlzd0FCWWdWWWdabWxCVTU0QVFtbC9OQkVYbEd5bTNLSW1tZFhkR2lUNXFVL3dJSGNkVy9rN3V1R3VhLzRFRHVuVjNDQUU1M1lVUG0vckEwdzlWTVBOSHhoVEpGY2FqMFJBejJZN1IyckFhbDAyMTYwV2RLWk83YzNZbE1lMTR3OG0wdXRyWmx1a3pISUFZRXJSM1lWdWdpdmZyamQyL1I1RGliVVZSWHdvTllINVl3VmtzRTRUNUx1bUJwY29WSklVMUpwWFVXcmpBQjBrY1ZMU2M4K2FodkZUZG95azFPYXRYQ2c4STJOaDRYMlNXdDEzWmpuaWhCR3FnQk9WUVk4ODB5Q29aVDVqdFREcEc3L0FQbTBXbHR0SEZTMFVoSHdKQWRDUmQ1UnpHV0pBRmRzWjVZcW1UWXB3K3N4clJCbnlhdW9KRmFWT3pER21PeU82TDRmSlBMcjVPeTNMbFNYQkJ2T0VyZ01oV3ZaR0NlM1N6VTNKVmEwVzZsYW00V0czTnJxOXBobWhMU3NzejYrZXRFcGxVTmVIWkJKQ3Rlb053bFFKeGhrTmN1WHpScWtDbDQxQUdZeDdvNWF1RmFTa1dZMHU0akVBRXZ0eHlBMll4aHRIMmVYTm1PQ2p1Q1p4SlJHWTBkNnBlQ2drMFN0QWFnVml5bTZMdXM1U1JNQ0V5aWJzdDhRZU1WeUVJcmVGRU9BSkEzR0ZxSHRlUHc4c3ZuTUQxTUQrc1NXWGhuWlhhNnQycDVxME5UaFVpc1phMTZHcGNLU21JWndyM3JPOTVVeEplbDBWeTd5SXNMUHdjbGtMTWxxNElOUURMdUdvT3RTb1lZaURVL1FheE5NUzNXZ2xxdzJWRlBWQXN5M3l0ZGtSaC9TZGROYTFpcFJHbGpseXBtZUJTVzdtbGRxaW83YVIzeThhcGRvcDk2UTU4YVY5Y1BVK3h0b3RFYVZSV1lMTEVzRVVvRFN0TXNEVGZGcWJVampuRWRaSTk4Wld5Mnk4ZjJVN1huSmVuaXNHaERYQlhVVTJFRHVJcDRSZU4xNG16YXI0VWNEcHRvbUNiS2VXZVFGS01XeHhZMXJROUxMZEdkbWNIN1ZLNTFuZWcxb2I0N0ZVbjJZMzYyaTc1NjlwdW52L1NDNUdrRGdLMS91SDl2dml0eXA0MVVyS1JjaGp0L3pEWHRBSHdFT0ZrWnN6aEV5U0VXT0xUcDJIbGgyeUYwYlRpWUpXektNVzVYWGwzWlE4VjFDZzIvQ0paZG1KUFNNT0p0UjhacVVWOVVQNGxqemlmd3JtZDFZc3BGZ3dxeEFHd1ovQVJNcnFvNUlwdjE5OFBaQkxOWVdBcVFFSGU1NjluYkZnTHFVQ2pianI3NEhhYlVHSE8zTjZqQUVqVEtnOWtSTzJmWjZvWTc4azluckVWMm5KektodTFxU0JobmtZTDBjZ20yVE9TVHNKOW1NdW1sWmExWjVzdWowWmVXTXFVMTlVR3Bhd0VaWE5Lbkk0NEZhR0tFYU0wZlVsZ3lWekNzOTJ2VU1QQ0p0bHVsU2RJTGE5aGQyZHdoWmlTU3MyNFRYSEc0Y1lIbFROR0FqNm1wKzY3djd4RnpMMGJvdFNvNWJGbUNnQU9jU2FDdEZ3RmRad2dxZGJOSGhtK3BNd3BSV0JYa1Z2ckxBbzVDODVocTFHTmNaSjVhaksyL1VWa3EyV2JFU2JOY2NTSG5JN0VFb0ZkMHF1SklOVnZWQndETEZYcEcwTTZvN3NXYVpveDd4T2JPaHZzVHYrcnJIZEJ2eGxvdE13cUVNNnl6MlZSU2loM1daVEFDcEN1Z3J1aUJFdkpZK3ExeWV4NzZxTzZhSTFrMHpla2FIbkI3UEpldlBsSTNwSURCUldLbmdvV0ZqczZzTVJMVVoxdzgwNGZkb1l0V2FLQnJDSVhFVEV4RzBCSUhKaUoyM1FRM2JFVGlBQXBzemRGSGFaRlo4aGxVQkV2WUFaVlNZTWRRRlNuZEdqZGQwQ3VnMlFCNTV3MW1vWmhYSTFRTU5ZVlE3Vi92OEk3YVo0ZmljaUN0blE3Ny9BQmwvMUxGbmF1RFV1WmFYdjNnR0RQUlczb3EvK1pQV0lCVFJBV1laVXV0Rm1NVURIb0pMWW12NHBoSGRCUW1ZcnhNdWFWQkFSWGRUbVdIRjRkeXNDZXFHV09YWXB6dU9KZEdTdDRodVNRQ1JVQU51MlFhMW5MV1dZdVBKRTVQUWFZbzlRTVpYUnFPN3VFSlZtREVVSkdvdFEwMUUwR05jNG13OXR0b1FXS3JlVGwxZmtrM2xZQ3VKWFBYbmw4STBkajBzUmc0cjY0ODJuYU5LclBZTy9Jb1J5aGpSQTNLb04rcktDTklXaTBJNlRMclBkVTNYVlNNR0F3YTdVZDhaNVk5N2xYTXV0V1BWWk5vUnhWU0R0RkJVZFlwRTh0ZHc3aDhJOHYwVndzUXNBNGFXYWpsakZjeFVOVEZldkxiU04vOEE3c3NBL3dEY1NSL1hCSmZ1QzJmU3paZDNnUGhFRFNoMGZBZkNCVjRXV0E0ZVV5ai9BRngyZndrc0NzVmEwU2xZR2hCYkVHQ3kwcFZoSWxqbytId2hUcFFPcjEvR0liRHAyeVRhOFhOUjd0SzNUV2xhMHIzR0paV2xMTzZoMGRXVTFvUmxoZ2ZWRDdJQzlpVW5JZVB2Z3l5V1FESUQ1Nm9iTjByWmx6ZEI2OE9yR0JtNFUySk1HdENMMXNSNjRXTjFUdmllV0M5U0RRREE3ZXdmckVxV1VhdTg0bjRDRkNqT0xvMlRZRjV4eDlmZkJET0ZVM1JUQ093b0NDck5KQitka0RvM0pIWENoUXA0Q3JSVDg2eEN0OXB1S3BwWE1Rb1VNNENzVnNMMUIzZXNHTUh3ZzAvYUpVNmFyTUNDeFpTTTFYSlJpS1pVcU50Y1lVS0NUWitLbjZWbnZrdzdWQVBoQkZpc2s2YTkxcG9VYXlFQjhNUFhIWVViNDRZNlkzS3JIUkhCZVpPZXF6cUFIbk1UZUZOWVFZVi9xaXBzZG1aNTRGODQyamltcmplNVV5WUdiYmlnTk51TWRoUTU2YSswYlpoTDBtSlF5QzhWMkd5eW05Y3J4Z1BRZGxNeFpDMUFLMmtFR2xjcE1xZVIybVVSL1ZDaFFFOUVsclFBRENtRzZPbUZDZ0JwTU1jd29VVUViR0l5WVVLR1NGbWlKekNoUXdpWXhtZEZ0ZXRDay84QXl6Lzk4dEI0SUlVS0FsM2FnTGpmaGF2Y1l3WEFoS3ptT3hHUGlvOThLRkNwdFhwS1VES21qYkxjZjJtQTdEYm1yS1RDNmJPczNMRU5nTTlsRDRSeUZFWlJXTjdUeTdYTG1TVm5QS0dLQnlCanFxUmpuQU5rbjJXY3Jzc2tDNENUZWxwWEFWNU5ESElVUXFpZEhTRWQ3aUtxRzV4bFFvR0JhbE1OZUVZclRScmFaOWYrUmgzTVI3b1VLTHdSZkdtNEJxQ1pnSTh4RzdRMDRWR3c1UmM2Q3FzcVlvb1Zselp5QUhPZ21NY0QyeDJGRkZGMmJNazFRekxqVEE1R2gxUUMrZ1JUQmdjSzBZZW9qNFFvVVo1UnBqWC8yUT09XCJcclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgU2lsaWNvbiBWYWxsZXlcclxuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRlc3QgbWVhbCAtIDkyNjFcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIOKCrCAzMC4wMFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc2l6ZT1cInNtYWxsXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICBUbyBQcm9kdWN0IDxiPis8L2I+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gID5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjE5MHB4XCIgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Vwc2VydmUuY29tL21lZGlhL3NpdGVzLzIvUmVzdGF1cmFudC1EZWNvci1CbG9nLmpwZ1wiXHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIERhbGxhc1xyXG5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgVGVzdCBtZWFsIC0gOTI2MlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAg4oKsIDAuMjBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgVG8gUHJvZHVjdCA8Yj4rPC9iPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gID5cclxuXHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIxOTBweFwiIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQlVWRkJjVUZSVVlGeGNaR2gwZEhCb2FHaUFkSFIwYUdCb2FIaDBnSFNBZ0lDd2pHaDBwSVIwaEpEWWtLUzB2TXpNekdTSTRQamd5UFN3eU15OEJDd3NMRHc0UEhoSVNIaklwSWlreU1qSXlNakk2TlRJeU1qSTBNakl5TWpJeU1qSXlNakkwTWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNdi9BQUJFSUFMY0JFd01CSWdBQ0VRRURFUUgveEFBYkFBQUNBZ01CQUFBQUFBQUFBQUFBQUFBRkJnTUVBQUVDQi8vRUFFMFFBQUlCQWdRREJRVUZCQWNFQndrQUFBRUNFUUFEQkJJaE1RVkJVUVlUSW1GeE1vR1JvYkZDVXNIUjhCUWpjdUVIUTJLQ2txS3lGVE9UOFJZa05GTnpnOElsUkZSanM5TFQ0dVAveEFBWkFRQURBUUVCQUFBQUFBQUFBQUFBQUFBQkFnTUFCQVgveEFBc0VRQUNBZ0lDQVFNREJBRUZBQUFBQUFBQUFRSVJBeUVTTVVFRUlsRVRNbUVVY1lId2tRVlNvY0hSLzlvQURBTUJBQUlSQXhFQVB3QTQrSEhJQStnbjZWWGV3T255cTV3L2k5cThQRkN0ei9tUHMrdTNuVnU1aHo1RDV6OUpwdXhldXhkYmcvZnQzUVlJVHJNYndKZ2JhbjlUWEZwVGdtaDFabDZpSitIODZNM2NQN3Y1ZSt1TVRpR2RjdDBMY0hVNk44ZWZ2MXBlS0RiRDNEZUoycjFzOTIwa0taVTZNTk9ZUDEyb1Mxc0RmVHJKL1dsTFNxYlRaN1lNNjZUeUlnZ25wRkhPRThSUzZJWXd3MGs3ZzlIL0FEL1EwWmVHSGo1Tll0RGtiSjdVR05Ka2pZSDZUVTJPWVhGdGtSbGEyaHRtRHpnWkNlWUoyUEk2YTVoRnQ3UkdrUjYvcmI2Vld4R0gwT2cxSUIwaWRocjV4cDUwelFFd1BqTVBJNSsrdDhGeFpRaTJUcXVxSHFPYW4wK25wUlM1YkxEVXk0L3pBZmE4MkEzNWthOVlEWTdDc0NIWFJsMUI5UDE3eFUycTJPbU5qRE5ES2RHMUhrdzVIZmZiL25WUUt1VWE2UURxZVI5b2VVSDhLaTROakJjU0NJRGFFYjVYSDZFZTZyZ1V3Tk9XM25IaUh2R29wazdGYW9wc054clBxZmFYVWZFVkM2QTZUdkkzNU1KK3VsWFhVeit0U05SOFJwTlZyaUhsN3ZQN1MrN2NWZ29FNCszbVJ2TWZOaGxwajRSY3pRZnZwUHhnMER4blBUci9BUGNLS2RubkVXL0lGZjhBQksvK21rOGplQWdkZ1NkeGIvMUdvTDZLeWtNQVJGelE5YzRqNTFNQjdNRDdOdjhBMUd1VkorSVEvRnlhY1FpZGxCM0FBYWQvc3FrZkkxVnZxU0lua0I3MjFiNWExYWNrajFIeXVOcjhoVkcrMnBNYTZtZk5qbFUvQ2xiR1NBUGFqRjViY1Q3Um4zRFFlN25VM1lYaDJXMjE1aDRuMEhvRHI4OVA3dEF1TGszOFN0cE5kUW85QnA4SnIwYkRXQmJSYmEreW9BK0EzOVQrTlRSUjZWSFlGRDdINzI1M24yRWxVODIyWnZ3SDBCV3JHTU9ZaTByWldjSFdKaFJ1WTg5dGROZlNwMHRCUUZVUUFJQThoOWFZVTFwcHBNR2ZmV3NNNUtKL0NQcFVxSldzTXZnVCtFZlFWck1kQVRVaUo2L0UxdGFrVVVVd1VTTE1SeXBiN1Q5cExlR1hLUEhkSThLQTZuelkvWlh6NTh2S3QycjdYQ3lEWnNROTNaanV0djErOC9seTU5Q2w0SGd1SXZ1MXdvekZ0VGNhUXN6dVdPKzBhZEswNStFUGp4M3RrM0NMMTNFWWg3bDFpek5iSUE1QVo3Y0JSeUZPRmpnWk1iS1BQVS9BVUN3d0dCSXU5NWJ1M0NNbmRxR2lHMUp6a0FBaU9RTzVxZCsybHlQRGFSZWhaaTN5QVdrWEh5Tk9FbTlETmh1REpiSVl1ZE5kZ0I1elNCaUdSOFhkWlgwZTdjSWNjbExNUkhxSXJPSWNidlhkTGwwd1Q3SUdWZkxRZTE3NU5WdUdtYnE2Y3pIbkFKL1FwWk5lQjhjSEhiWVY3aFArL2I0TitWWldybHpVL3VUL0FKcXlrczZPSjFkdENaQmdqWWpRL0dyK0E0Kzl2dzNQRW5VZmx5OVI4S2c0cll2V21BQzIyQlVzQ0dJa0tWQjVSOW9iRTBKdU5pVC9BRmR2L0ZYVTAxMGVZcFdQU1lxM2NHYTJaOHRKL21LZ3V1YVM3UXhhRU1pS0oxMGVKZzh4MTg2WmVHNDkzWDk3YklZYVNDcCtjNmo0R3R5K1EwdkJKY0lQU3FGeTFCem9jckRueVBrUnpINjZWYnhOMjc5aXpQcTZqOFRRNjRjVWRyS2Y4UVVHRkRGd3JpWWNkM2MwSTIxMUhwMVg2VkJ4N2lGMjFjdFc3ZUhXNExoSGpaOHErRWd3QUFTZE5aNVR6cGNOckZUUGNxQ05pTGdCQm9od25FdTkrTG00QUJXWkFQTWRJbnBRYzJsUWVLdXcrcjVoSlUyMlZpSU1BcXltSkJFZ2puT29nK1pGUjNsQkV3QnlJSEluWWp5UHlNalhRbXp4NGQwRVpMYlBtQjBXUHN4MVBuOHFYMjRqZEJrWVc2ZmhxRHVJbmI5YUVBaDcwSWRodTZjdDlodEdqbDBZZW4wUGxUVmJiTW9QTVFENi9aUDRmSHBTYnhKN2k3V0xySXdsV0FHblZXbUlZZmtlZWhEZ2ZFWEVvOXU0b0duaVE2cVR0cE8zMGlsVHBqZG9LdGdnTHB1WnJnSlRMbExudS9ha0hKdG1CMGtjajYxbHlPWDY1ajhSVlRHY1FnbUxWMTlPVnM2L0dPVWU4VUx1OFp1Zi9DWC9BUEFmWDZqNTB6WXFDV0lRZnJ5UDVOVXZBbWdnZmRjajRnRS9NbWdSNHd4RUhEWWdlbHBtNmpXTnVYd3Evd0FIeGVaeWU3dXBCVStPMWNYbVNZbGRhUmpvWloxQTZaUi9oWmgrRlFodkNER3dIeVFuOGFINGpqQ3FURnJFTnJ5c1hmdk9lYStkVVR4K05QMmJFOVA5eSswS0R5NkEwMWloaTdwdHltUFVBS0I4U2FGOFJ4QVJHYVlnR1A4QVN2NG1xN2NlMG45bnhBNTYyWDh6MDZrZkNoM2FXNldSTGF6NC9qR3cvRSsrcHlaU0MyYjdENExQY3VZaGh0NFY5VHY4Qi9xcHh2WWxFbVdIaEdZaVJNRG5GVmVFWVFXYlNXeHlHdm1Udit2SVZqWWUyOTd2TWl5aTVTMlVabTFrTE8rVUV6RTdrVmtOTHNud2FmMWhNczRCUFFDTkZIa092T3JhaW9NSllXMmdRRWtEUVRCZ2ROdFI2MVpVaXMyTFIwcHJqRGV3djhJK2dxSDlsdDk3M3VSZTl5Wk04ZUxMbW1KNlRYTDR5M2J0aDdqQlZWUkpKMEdnL1VWckRSZEJIdXBKN1FkcVh1azRmQlNaTU5kWGNqbjNmUWRYK0hXaFhGdVAzTWN4czJwdDJUN2k0NnY5MWY3UHg2QzFaVkxDZDNiQUpPNTF6TWZ3WHkrdFRuT3RGc2VGeTJ5dGhzQmJzS3pGTzh1VEl6cktUL0RtR2VQUDRWZHVZcTllSXp3QnRBSDBHd3Ezd3JnYjNUM2phRDd4K2lqblJmRlkvRDRLRlZTOTF2WlJSbXVONmZkWHowRkNNSlM3RFBKQ0RwZGl4eDNoTDJyQzNIWElDNEd2dEdWWTZEZmxTMkhtQnRPMDlJL2xUUDJudTR1NWFGeStMZHEzbkdTME5Xa2crSXNmYUlHa0tJOFI2VXFOTWlEQjVrYWFmaHBUT1BGMEdFM0pXekg4ekdtZzUxWjRNU3QxTklCUHZpRFZjMnhwSFRlclhCUk4rMkR6YUQ2SFE2K2xBTlVNL2ZyL0FONDMrYXNvaTNEclEreVBpZnpyS1dtTnlqK1FPdkhEbThibzFzaVBCQkJKeWtGcmJ4cnlFNWR6QnErbUd0WFpLR0RFbUFXWDNnK05mWHhDa0N6ZEJ5cnNBUkVDWkpJQUI4dWZsRk1GbkNZY1lLL2RDOTNpTFJHVjBZcXhMQVpDQ3A4UTlyZlVaVHRGZFBQZE04eUVXNUtQeUgxdzRWUUhPV1B0YjIyM09qRDJUNU5IclVpMnNzam5vZmRyOHZPdlA3ZkVjUXJzNjM3Z2JNWmx5eW1WVTZxMHFkK1lvaGI0c2x4VGJ1UGV0WmpPYXpjT1VHWkpDTkpRbm1FSUIrNktLcHEwaXM4YmhMaTJPbWV0TmRqY2ZyeTYwQnczWjViaTVyV1B4RndkQmRNajFFNlZ6ZDdPWFYyeGVJUC9BSmgvT3R4L0FOZkl5cUFSSUlJNUVmajBQbFd1NHRnWmt0OTNkNXVQRm1QVXp0NmFpbEQvQUdmY1J2SGlzVGw2cTVrZTZkYUoyZUFNNjVyZVB4RER5ZlVldXVsYXZ3YWw4akYvdEc0NFFYQVBBV0JZQWlNMFJtSG5sM0dtdmthNWE5RzRJL0tsMStCWGxtTVppTmlQYTVIY2VYOGdlVkRMbkJuVWdYTVJmeUFSSWRwQW1ldTJwb1BYZ0tqSDVIYnZseXhJUHRjOXdTU0I1RUVtRDV4dE15Wm9JNkg2SFkvcm9laHBTeEhacTNidGk4TVZpTGlnckFVbGlTU0FBUm1nYWtibU5kNG9yaU9GQjdTV3k5MWU2dDVGYlZYRERPckZ0ZFpuejFVRVVVQnBMcGh5emN6RXh1SWtlc3grUHdxVElhUW00QVJBT0p2aFoxT2N5Tk5PZTBpZ1hBQTk1clNYTDF4VmR5R1lYR0JBQ3NkeWR0UGhRY2t2QlNHTG5kUHBXZXJZYTBmR05pSCtSVlNENmN2Y2FzTGFJcFUvNkpMR21LdmtHRDdaZzd3WnphNkg1MUMzWmhRUVAybS9xUVA5NDNPWSsxVy9nWGpINUhUWG9heG5qZWFYRzdHS0lQN1ZpZFJQKzliN29QWHpybHV5S2ovM25FOC82MXVnSSsxei9DdHY0TnhoOGpEZHhDNVRxZGp5NkFuOEtTTUp4TzNkeGx3c3dDV21JQk94Y2JSNURLVFBsNTFuRStFQzBqUDMrSU9VNlRkY3laMCsxNy9kWE9BN0NXM1ZBenVodUtwSUJtTXd1TU4rZjdzZkUwcjJQR0tpcnNZc054eTNkWmt0a3N3NWdlRWVaTlhWdnFnNXdCdjc5U2ZVMHNka3NPbGw3dUdBWWtGc3puY3NyNmYzY2dHbldUVEsxclgzVXJNWi90SmROek8ybGMzZU5JaGdoaDdqWEwyQ1k4ajlLaHhtR0RBanJTaktqVGNkekYrN1VudTB6c1RwNGZLZHpTSnhuRzNiOTQyM0p5b1lXMk5ob05UMWJsUDBwaDRndmdaRkpRTU1oSWthZFBQYXFYRytCOTNhdFgxTWc1YmJ5U1dMR1RtSlpqTWdSNVFPdWdzWlZkRUdHUmJTNUFQRzB5d2lCSExxUFVVMjludURHNEJkdXpsalFIZG8rWVg2MG1wWVh2RjE2OWZ1blN2VU1TM2gwSjI2K1ZDRVZKMnltZVRndUtCdkZ1TU5uL1pzTmw3d0R4UEhndEx5a0QybjZJUGZwUVBoanBoN21KbWJ0M3ZGR2Q5V0lOdEdPYlRiTVRwc0lqV0s1N0pCTzZCZHhiekZpMXdtQkpKOFRNZEo4elFURjhWUzFldmQzRjBzNHl1Q1FoQVJSUFU2OGgwM3JvdCtEbnhxQ2tuUG9JOW9iajNMWWQ1WTV4dnBHaDBGTHlXeVBRU2RCWGIzTVF6emV6RE1wWkZJeWlBUnFCK0pxSnlaazY5RkZTa25lenBjNHlWeFdpTjNnRW5YbUkycS93QUdCNysyQVlsdmVkNC9XMVZrVHd6dHk4NC9HclBDVVBmMmlKbk90QUNURzFzTy93QjQvRVZ1cm1adW8rRlpRcGh0Q2N2RGJUQmxOc2hvOE55MndDK1laVEpuekFQdW9MajhEZHRRSGRYdG5ObGtlSmROUUQ2R3IzQmNFMXkwSEZ5NkRtWVQ0YmlrQmlCNFdFalFjbUZROGF0dmJDOTR5TXBEeGxWMTF5amRXa1Q1aHFadlZXYzBGY2xvcVcwekJtNVp0K1U1VTBtb0hZQ29zSGlybHRqbEpCRy9NRmZQeS9PakdHc0ppZ1NFaGh1VThNVDdvSjkxUEdkS2hjamNwTnZzQ2pHc2h6b3hWaHpCamFtbmhQYks1Q2k4bmVnZ2FqUjl2ZzFCTVh3RzRoMk9YejNqM2IxMlN0b20zYkdadnZlN243Nlo1UGdqTFhaNkpoTGxuRWc5MlpJRWxTQ0dIdU80OUpxcmQ0Yzl0czlvbEc4dWZxT2RJdUd0T3JTWElJZzlJNmVuck5NM0FlMGQ1cnhzM0N0eFBFQVduT1lFcUZjZTJTZnZBN0hXbWpQbDJJdndIOFB4UUh3M2x5Tjk0ZXdmWDd0VDRyQXlQTGwvS3U3RnRMdW5lV3ArNlJCOS9pTlY4YXR6QjZsV052b29hNG12a0JtVDFpS2NOZzdBWWRoY3loWDdzR1hVcWNvZzc5SW1tdkUyMGNnMnlwR1VUbE02NmpsNmZLZ2x2aWxpNnBZSEtSdUdsU1BTUUo5MURmOEFhZHUwNXVXMmFaaGhrY3EzcjRmTGYwcGFyWTEyR2NYaFFRMm5MNnpYbm5ZWlp2WWYvd0FRL3dDaTVYb21Hdmk2bDNFWm1WTWdHUnRocHFZam1UWG0vWk44cldXbUljbWY3bDJwVGZYN25iNlhxWDdNOVo3cWRJSTBHcGlEUFRYWUhyRlVNYllnQnVoQitCQlAwcTJPSTJ5aTNNNEU3aWZVSFFBekZWTVR4TzA0SzU5eHpCRy9tUkZWWnhJTml6NFY5SStJQS9DcTkrMlFzK1h6WGFzYmlkdGJhTTl4UWNvTyt1c25iZXF1SzR0YVlaVnVLU2VYenJQb1BrQlluRGQvaWJWajdLL3ZMbjhLN0Q0NmUram5GOGYzTndYSWtBVy9DRkpZazk4Tk5RSWduVHJIU0tqN0oyQUZ1WXE1b2JySEtEdjNhU0ZBSE1tQ1k5SzU0dGhPOGZNOTJMYkMyMlVMTUhKZUlnekpBQStaTlJWMVpWdFhSUldEajdoV0lPY2dqWTdiSG5SWXJxZlQ4NlZ1eitDRnJITUF3YUVmbEIxSzd6eituMVlNTmVhNWlicWhqbHRxb3krR0F3MVk3U2R4ejVlZEtNeXdFMXFDK3RFUW1sUlhVck5HVEFHSnc2RnYzak1xZ2drcXVZNlRwdVBqVkh0QnhpMjZEQ0lyK0c0aHptQnRycHJyN1hsUlI3TFhIdjVTTXRwQnBFYWlTK3ZQUWlOdWZrYVVjY3AvYVc2WjAraS9DbHVpa1VtN0ozdEtMcTVXWTZuZHVRVStWZWhZcTE0WkdtbEplTlg5NkJsSzZub2ZzdFhvRjIxNEQvRCtGTmkzWnZVNm9RZXpIWmxib3N2ZVpuUmlTdHFTRkF6TVBpWTh0Nk5kbHVEV2YyekYvdWxQZDNjcUNZQ2p4YmZBVVI3TnNxWVhETzdCVkNDU3hBSHRNZWRVT3plTUg3UmpNaUY4MTJSbGdMRXR1ekVBZVhPcks3WnpTcWtWZjZSclk3MjBJQ3hhYUFQL0FCRnBIZGlOb0huT3Y2OUtjUDZRV2RyMXJNcUtPNmJLRll0b0hHNWdSN3BwUU5zZXRTbjJkZUpYRTEzczZBVDExTzFXK0RYRCswV3VtZlllOFZTY2REQXEzd2RoMzlycm1FSHpuU2ZwU2pENFc4cTNYUGQxcW10QW9VdUM4QkRZUmJ2ZGtNV3VBdWhLdDRiamoybElPa1JTZmN4VjI0QUxqdXdBSkFZazc4eE91MEQzVjZ6d0hGQzF3NUpNRUc3STU2M2JzU09WZVlZaFJKTXpvUVBLQXBqNTBuSjI3RnhRMmlyRG92ZUJaQzNJTGZ4S0pYMEkvVzlkWUxFaTNjVjljdnFRY3A2RlNDRDVqV2pXQ2UzK3o0aTA2eVdjRlRCT29VYWFhanJJMmcwQkZyTG50dUNyckJFOUNKUHJvUVFSdnJUb2puaTFOalRpZUlpNXJiTEVCT1pMUVRvWko4VWJlMFNkVHJRL0QyZkZzU1R2cG0zOSt0RHJlTE50ZTdYUm1nbHRtMVdTcDJrYTdIbUtQY0l0c2RsTE1zWE0zc2tXd2htQVRxTTJVejYxTzMyYzdnNVBRUlRBMldHUnBCQjFiVU1QM2VhRE9nZ2tDTmR4MW9iamVEYStCd1pCTU5vZVhNYUg0Q2lmQytJM3Jqc25oRENiajV4bXo2aU0wRWNtR3VtdzNxangyRkJsQW9LTjRiYlpSbWdtWUtuVFRyUG5WbE5KRHFEdWdSaVZ2MmpubHh0SmtzSUdubU5CdDZVWnVkc3JsdTR0cEhTNVk4S3M1REVrZ0xuWUdUc3hZQ0ZpQU5LU2hkZjc3ZjRqK2RkZlpVZnhmWFdzNWxsampGKzdZNDRudHEycldnbS9zT3JCbzExQkJLa2Jia0h5b2x3N3RFOTBEUGtRa2MxT1hZaytMUHQ2aXZQQUtiT0ZLZ0NtNENVeW5NRmdNUmtNeFBPa2xrYUx2QkRqWTNQaWIrVTZwQlZob2piRWJqeGEvd0RPa2ZzcXpqdWpiQXpoaVJPM3NYcG5VYVJQd3BwN09GaGg3cUF5b3MzR0E1WmxlQWZMYzlhVSt6eGhiUjE5bzdHRHF0NGI4cTBwWFQvSWZUeHJsK3pIM2pIRU1SWXQzTHFkMFVVU0FRWkltQnMzNm1yUEQ4VGlidHRidjdwUXcyS3RwQlBQdkJPMUNlTjRpNWljTmV5ckRaR1kyK1FTMzNaekE1ZkV4aGpBTlhNT3R4Y0hhdUtaQkxMbE9tc2t5RGxNKytxT1d6blVGd3Z6WVZ0MzhTWmhyQnk3d0R6L0FQTjBxTEhZVEVZaXk5dnZMU000S2pLaG5VRVNDTGgyMW9Qd3JIWGJWd3VaS3NzWmMwYTVsSVk2RFdKSHZvN1o0cmNlNGhDRUtKRVRKQkpnc0FCSk1USHFhMTJoSzJRY0Z0MzdZVkxsOFA0RnlLcUJRZ1dOOVNTd0JYZnJNVjFqMHVOZVZjK2tLWk9XZlp1aUl5N2VmblVQWjVHVzdER1M2WjQ1NWlGemU0QkFQTDRWSnhXd1RpQytWaUFxS1I3SzVjdDVpMmZiVGFQS2RLVmpBYmdwdUhIM013RVpIZ2dhdHF1djErTk50bkNvck15cXFzM3RFQ0MzOFI1KytsUGdqLzhBdEM2c01HQ3ZtQkVBSE1tZzExK0FweGUzbUZLZ3M2Q1ZEZVdwY0toQ3dabVQ4ekkrQTA5MWJ1cldBQmNWY05zWEFnQzV3UXhBMWFkNUpwSTRnby9hSDY1azAvdXJ0RzFQSEVsR3RKZkVSLzFoZ1B2cHovc3BTTXZEc1BjWVNMaWE5ZVFQMlcrRlBPSW5JUU44dncwcEk0emFDM0ZpWjE1bUl5dFQxY0hnUHArRlZ3cnNsNmw5Qy8yWXdxREQyWHlndGs5b2lXM0ozT29Ia0toNEFtWEZZMFQvQUZ4UCtxcm5adjhBN0paL2c4L09oM1p5NlRpc1V4blc4ZlhWaU90VVNmSmtKUFNCL3dEU0NwRjJ6MTdsdVo1dVB6cEtjYmttYWVPM2l6ZXRadjhBdVcrVER6cFRhMlZCaUk4NG45RTFMSnBuWGlTY1NrRWthVDh2eEZYdUZyRjYwVDk4ZThUcjd5S3B1ZFp6bU9XbXY2MCtkVDRDQmR0a1NTSFVqVG5JcFVVZlEvWmovYS93L3dBcTFVVjNFR1Q0Q2Y3dy9Lc3A2WkhraENYaXVNdHFHYk4zTjFpWVlISzhuV0dJbmx5UEx6MW9YTC9lT1dDQk84T1VLczVWTURUWDAxOTNYUnA0M21lM1p3MXNLYk5yMlpQaUdhWnpUdnZ5bWgySnhGeGpEcmJDcUlWU1F3UW5MbmRlamtEZnlGUjVLMnJEaVV1YWIvNUJ2RmNJOXAzdE5sTEFnbUNZOFNLUjBPeDlLaHhDcjNKY3gzcXVzRWFuTGtodmRJMk5OV0Y0bzl1Tzd1ZTFkZG5ZbVNiZVhMYjVSTUJSMTA1VU80bTF6RVc0TnBPOHpNd0l1UUpjZ3ZwekVLQkU4dmRRZVN0Vi9KYWNVNTJ3QmhzSUxoenNTVHBPb0hRVHFJQmp5cHd3bDJ3bHRVRG9wdVdIdHFXbGNuZXRhelp5Q2RRSjE1UnlFMEdUZ2VKTnByWXRySkduak9oQm5hQ0pxeGgrQTRsYlBkOXl1Yy9iSUQ4OU5HUWdEVWc2YWowRk5ESWs5aStxVWVTK210VjRDSFkxQ2NUZFA5V0Z1QldnSE1vWkFQRkd2SS9EclhQYTFCRUNObTh2c044YUo4SXNZaXpiQUZyTTJad1lES2dWdTdnNkpwN0VRRm9maitHWGI3cUx3N3BBUnFqZUxmV015RGxQeW95bEg1T1NNWlh5YUVaY0lTRExJblFPMlVrZFYwMUhuNVZWeGVnQW5icFROaU95NzZnWExRVU9jck04TWJaaUowZ3RVUEVlQU9xNWx1Mkd5L1pGMEJ0VHI3UUEwOHp5b3FTc3JLTG4zb1dNTXBab0pNZXNVOGNMWTVWeVJueU5sblR4ZDJ4RytncGVUZzl3bUl0ajF1Mi93WTBmVEFOa3lsN1VaWTl1ZHdSeUJwY2p0b3RqaW94YXZzTmNIeG90MkxxdUFvTmk1a01HU3pYQ0N1L0lqcE5MWFo4ZUcxL0hIdkszcVpidUhEMmNxRk15TGJ6Z2twUGRvd0lCSUdiVUE2ZVZMUEJDZTZ0bFl6WmpFN2V4ZnJQcEZjY1lweXAzcGgvajk4aTB5NTJCN3EyTXVZQ1BBSmdUT1U2ZzZheVJSL2hHRlk0UlhOeHNtZk1RVzFYTGNZUmJHY0JaNXlOaHB2SVVzVzl4L0YzWmsyRnc1Q2tHWHpESzVtSUJBQWdTWmlLWnNIeGRqWVRES2l1TlZMTWZZdUhQQVhVUVlCM24ydDZycTdPSy9hMHZrTVljc2M1dC92TGZpVFBHYjdJWStKSlV4cnMzTFhhZ1dKNHV1SHVtV1hNWFRLSHpRRklJSjhJSkExNlVkN1AzN0ZuQ1BZWndIN3h3Z2JkaG1pYWpmZ2xxNGM5eTJTU1V6UzJUd2pjeWRnQVowM2ltVlhzUlBSQjJVeEMzYjF5NG8ydElzUkVGZmFqeU0rK0s0N1o4VnVXcmlXN0l6WERsYktOU1I0bGlCckJCYmx5UFNwT3lpNGNZdSttSHlrTGJ0NTJEWnN6Rm1HcGtqU0kwODZPY2Y0aDNKc25NRkRYR0RqTEpLaXpkWVJBSm5NbzI2R2cwSHRpSDJQdlhXeHJ0ZVZnN1cySlpnUm1JS1NSOWZmWG9DR2tyczdjVzVqcjExSHpKY0RzbmhLa0FsT29uVTY2OWFkcmRLZ3ZSMnRjM0trRmNYWmpTalFMQW5GRHY2VW00NUp4TDZ4NGsvd0JLZkduTGl6YjZScFNkaTFuRXZBMUxXOWNzeDRVK05TbDJkR05qSng5ZjNsdis5L3BQeHB6dSt3ZlQ4S1QrTms5Nm9PdnRmWjBIaFBQbFRqZEhnUHArRld4OXNobjZRRTdNL3dEWTdYOEg1MEs3Tk92N1ZpZGZEM3N6NVpwb3gyVXRaOExaWFdDc2FEa1pxbjJhNGVveHVJdGduS2ptT3ZoSmlxeDdaR1hTQkg5SVFCdldtRWtHMmVmTE1ZanBPOUttYVJsS3dQVTA5LzBoNGNDNWFqWUlkdC9hTzFJOXdyRWEvTGI0MUhKMmRYcC90MlZyaStRcVRBejN0dnBuV2ZpS2daVjJCUDY5OVdMRGpNZ0lPaEhQejArRlQ2T2pzOUN5SjErVlpYTEZmdERYbitwcktma2lIMDJER3d0eUJPSndha0RYTGJSdGZldTAxRmtjYjQ2MzU1TU12bkdvSHA4S3FCT2NDdEJKMEcrMzY5MU4rblg5UncvcXBmQk9yTUFKeDk5b21TbHBVbVJweTBqY2ZPYTd0WW9xd0g3VGpYTUVlSzRpcWRabndydnJIcHk1MVhHRHVObVlMSVFBa3pzRDh6dlVRRU1wODQrT2xPc0VSWDZpWmJMRXlNK0lhV0oxeE56N1FpQkVRT2c1VmRzOEdOd01RdVlnRnlyWHJ6R05EcCs4eWthRFFiYmFadGFxSkhvVHBwdWExeFhIM3NJakJHY01WTGxBd0lLQUFzVE01VnltVGxnN2tVWGpqSFlZWlcrem45Z3RIeGR6YUowTWxNeDhPM3RFMVlzNFcwQU10cTBOdEJhdDlOUHM5Tks3d3dsR2NiQUNaNUE2ei9QenF4aWNTalF5dG04QzVqQkF6QlJNRWp4ZW8wcDFqamRVU2VTZFhZSXhyTXBHVUJSQjJWUnNCMEZVYldNdU14SGVNQkJKZzlCUEw0ZSttQzNjVlhDa2tvOXB4bUFKSGlVNmFkR1lBOU5LRjREaFRLQTV1TGJ1c1NGUWxTR0JqZUNTUWRaME1SMUdpTlFYaEZVNTZ0c3BjVGQwWW96czJnSUpKMURLR0drOURYQndZUzMzdHh6QlowZ2d5R1ZScXVzTjRtR25rZERyV1lqQTNRNVYxUzRRZDFmUS93Q1VWZHhIN1E1Q3RhRE5jbVE5dVJ0cWU4eTViWk1ibHR6UE0xUG5GdWtpeWhKSzJ4YndUcmt1RnlTd0RaUUprSDdMYnhFNkg2VkFseHZ2SDQwejRmZ1YxV0U0UkRuMkhleVNBZFlLWEJBOHpWYkg0L0RCR1JjR1V1K0paQ2tvdktaVXk3Q0RBMEEzMXBlY2ZndERCa202aTdPOEQzWWNOY2JLQmFVenFKYndRSlVFaVpPNGo0elJYaCtGdFhUbHc1Wld6QWtveTh5UEVWdWh0b21CQWtla0tWekZYR0JETWlqS0FTYmJpQXVXUHRmMlJSWGdtQXVLR1oxUWs2b3d5bGdJMHl4SkU3Nzg2bXA4VHZqL0FLZk9UU2JyWGZZeGRxTEZyRFdIdDIxUGVOYWFMcDFiTTU4VGJ6bWdIMmRwRkxmQU9NOTNhYTNkdDVsZGxaaVRQM3QxSTFKSzllZE1QYWpFOTZnSUdxNXlPZWhLZ2N1WUZKdUo3enVtQjZyOGo2VlNUdm80VmV1UVM0WDJ6RnU3Y1FXMHRzekZFZTJpZ0JNMmhjRmdHUHZHNW8zeGZENGkvY1M0TGltMkFKemFOSURhcjRUbDM1RWM2ODh3MWdpNGJteFdOdHBJbVRJOHh0RlBOL2pDaFZBYldQeUZSeU9VVWtpdnNrN1NPT3pwdDJNVzlzc0ZVV21qTTgvYVhTVHpqNkdtOU9LMllKNzIzQTNPY2FlcG1CWGxHRjRvQmlnV3RwY0x0bEJjc0luVFFxUVJOUHZCTU5idjU4bUhITmJsc3ZtekNDTkN4QmlEeTZ4VHdrL0pSNFlmVGN0LzlETll4S01vY040ZXNneHByTWFhR29ibHk0TGd5cVFwUXkwblZaR21XT3BHdnJTZGllMk5pdzVzMnNQS0xxUm03dUhKOFFJYTJUSUk4dDZ1V3Y2UWtNQnNPUnBFaTV5TWYyUEtxY29rbDZQTFA3VnI5MEVjZjRya0hSU045Z1RCZ1pqb0NUcHJRYkRjT1M1ZnZ1clNxTU1wQkVrQkFWSjZna0tKR2c5OUdzRHhIRFhnekZKQmdsWFlCUmxNem1BQkczTWtWMHVId2lHNDl1M0RzRk15enBLeEVhZ0hsemlkYUh0WXM4V1RFNmtxWlc0Z0M5d3ZBOExaU0FaalI0TzBoanNZMDJFblNuUng0VDZVcDhTeHR0RkQzRWNDNGZzcW1qcVRKazlSR3g1bnFhSjRQdFJZdStGY3dKMDFBL09uZ3FiSXp1VVV6ZlpOc3VGc3Rwb3AzOHBxdjJaY25HNG9nQ1N6SG9OejhxdThPdjI4SGJ0V3Jqc1FCN2VSc3U1M2dFTDd6UTdoZkY3RnZGMzdqWFBBN0hLd0JJTW55MXFpOGsyOUlqL3BFTVhiUi9zSDNhdFhuOTlqSnlrYi9IYnJYb0hhdkUyOFZkc3BadVczTERMQVlIVWs3amVrNjdncm96RWdRZ2s4b1hUV0NRVEhsNjBrMGRHRk5LbUN3TlRPaC9Dc1VTdzIzRysxUlhid2JweTUxeVNJalhUeStQT3BOSFN0NlI2TVFUcUUzOVB6clZTTHFBZkZzUHBXVWFKMndDK29qWHkrZFNZTzJ4WmlQc3FUdkdwMEc5UUpjQVVNZEJPNTI1YVR0Vm5EbTZHSGRveEozWElXa2RDc1FSN3E3V2p4VjJYZUNPRmE2SFpWeldpQVNRQm1EcEhPS0RYMUF6RHBNZTc5VFJ2RUppWFRJdGtXeHMwQmJjNmFia2JnMEZ2NEc2SkJ5aUJKOFFhQjFNYkNrY2xIYktmVGNxU0xsOUNpV2l3ak9NeTh2Ym5YWFRZRFhhdDlvTUozallhNnNNMlJMZHhBUVFWZTJFZVNKQkdnMjZtcVdGeEVCYlp2aDAxQVFsU0JJSWxlYW5Ya1JVcThUTmxMVXNic3pjVnN3QWxiZ0dVaFZBQytFYURxYTUvcXFlanAvVDBxQ0Ztd3l3eHVaTkZna0VTekZ3QUNOTmtPOGIrVlV1MFdCdkZadDNVT3gzMU9vNTZnZStvTU54RE5jdVptTUZzL2phUUpKQXlUc3NUQUZkWW5GTi9WcmJZOVN3RWZuU3o5US90UlNIcFlxbXdRbUV4UVFnM1VIaVU3ckd6YitHT2xid2Ezcjl4bHc5d082YWtLb2hlb0pnaFlQeHBqd0hHTkFyNEswSSsxMzVhZE53dVVCZlNqQzNyYnJsdEFEbVZSZ0YxM25ML0traTRwYmFHa3BYcENYaWVFY1JBQmJMa0ppYzRHdnVXcTJPeFhFTUlFTXUvZVRBUWx6NGNzbUNoZ2EwMjhlNDZNT0JLUGV1Zll0b3B5cjBrZ1FnK2ZRVWtyeHJIWExqWExndStJUUZWSENLT2lpUG1aSjYwSXh0MmxvWnk4UHNreFhhYkdYYkl0Q3pkdGFRN29DSGZmYzVQQ3Zrc2V1c1V2RGgvL0FNdThQMS9EUjU4ZmpUc0w0OUZ1ZmxXa0dJbGUvZTdhUnAxdUI1TVJNS1NDZC9uVGNhNkw0dlVxQ3BwTWc0VjJkN3pheGZlZGlEa0EvdkZNdE8ySTRNK0d0STRKMUFHVWtFcTBhQ1JBWWVjRGFydlpQRklMYlcxdWk1NGlRSUlnSHlJMHF6MnV4T1cxYkhOcmcveWcvblQvQUUxeHRoeCt0eUxJMHRKM29DNDI0UXZ0QlJFZWxCYnZFWEVSY0I2R0cyK05kOFN4NWlJb0hkdWsrUXBTRmxuRjhXdU5idVd6bGh5cGFBUVRsSUk1K1ZCckZ3bGwxcnZFRm9NSFdxaVhNc2FIU2hKV0ZPaU80R3poMUlES3dJbnJuQUh6TStnTkYrRzQxN2lCMlBpazY3ZENOdldnVis1cnpHNStBTWZNaWl2RGJneUVEbEh6RWZoUmE5b1ZrbDl0NkduZ2VMdDNialc4V1ZlMHlFRHZDVERhWlNyZTBwOHdSdlZsZUdtMjR1V2NGYllLWkJXOGJueWE0VitLL1BXays2OUVPRFlwMWJ3c1I2R3N0OWk4NVIwblE5SGlXTkFEcll1RHFnQ2tkTlFRMGJmWmlyZUJ4Yll5Y3JpMDZIeExHWmdaZ2dncUJ5NUhsVmZDWFN5aVNkdXRXT3llQXQ1bnhGdTVtTnlTeWFhRmpNZGRKcDR4SlNuNW9MWHNMYmlIbHRqNzQxSUhLZVkyb2E3WVcyMll6UEk5M2JrUjVxb2tlczBSeDIxS3ZFejBGUEowVGpZeFh1UDJ6YklzWEFMb0hoRnhRRko2SFRUM1VtOFU0bGpMbHk1YmJDMkRjR2hZVzF6aVJJWld6YTZFRUhVVlV5dE94b3ZmdFdyOXo5b0l1aHhiUlhBMkdRUURvQ1RJK0dXbHR5Nk92Qmt4d2RUV3ZtcmFCblpUaE45YjVkclpRcmFmSkowTG1GZ0VUcmxaakc1alNpM1ovQU1MakpkWWMxakt4MGRNcmFsZWgyUE1IU3BEZ243c1hMWXVrNW95RmZGR3NuVHppdU1YeEc0OTJ5cjN6YWJLRGt5NjNHN3gxR2JVRXpsQWptZGFGdTZhUFIrbkRJbFBISzA5ZkRWZmdxY1M3SzVzcE41RllDR0syb0RFR1FZQkFCalNoVnpnaUovWHFmTEl3bjRHbkRpZHU2ZHJieDVLMzVVcFk5WFF5VlpTQ0NKQkdvT200cWMzV3FPekY2ZkZOT1RlMk05N0VzaHlCbGhRRjNHNEFCK2MxbEFQK2tOaHRibUVWblB0RlhaUVQ1RGxXVlRsK1R6djBVdjlyL3l2L1NYRFlDMnR0dTh1U0F6QUtYQ1FaSUJCSkJFeG9OZktpMWppVnEzY3V2YnVsVmhGL2RnTVdoWklIUUNkOTlkcVdYNFJuYk9aWW1KTHd4T1VBVEVFZ3g1MWIvWXU3UGdBRTYrV3ZUci9BQ3FYMXp5Y2VDVis0SzR6ajExV0RvalpXMnp3U1lqWDJSTXp0RkMrSmNWdVhvRHJNYkRRQWU2TjY0eE41RUF6M05Ob25UVC9BSlVjNFAyZE4yMnQxN2d0MjJVTUkxWXFkaWVTKzdYcUtXNVpIU3M2UGJCV3had3R0aXc4Q3FPYkhUNjcxcTloOFRjN3RjUGF0M0NvWlduVlJtaUN4Z0JTT1UrWFNucE96K0VIMmJsdzlXY3IvcGlwY1RoY2x2OEFkcGtBR2d6TUYrT1lBVmFHSGp0a3BacmRSRi9ndlpka0EvYUxxdGNjd0V0Z3dJa2daaVBFZFNUb1BsVjdIOE10V3JaUGVIdmRJVUVFYmplQnZIU3BMZUt1dXZkMlNUcWM3a3RBbU5NekhNUjVmQWM2aXgyS3cyQ0F1WDdtYTYzc2pkaWY3QzhoL2FPM1ViVk9iaTlSUlNISmJremVDNFdTcHVYVzdxMkJKblF3T1pKOWtldndGRHNSMnh3K1pyVnEyZTdVRVpnU21ZdHVWKzFIOXJRNytSb0R4bnRHK0piS1lGc2JKUGgwMkxmZVBudDBGTGVKdUR2REcwRDZVc2NTWFlaVFk5anRSWlVRRWNmK1kzNG11SDdZMnVTWGY4ZElodVRXWjZ0eVpLa1BTOXRPU1duWW5ZRjVKbnlDMTFpK0c0ekczRWRyWGRJb2daejFNa3g3VTdiZ2JVbVlVd0dlWWpRZS9VL3J6cjFyc3ppV09HdFo5VGw1N3h5bnppakgzYVlKZTNhT2VBZG0wc2VJdG5mcnNQY09Yem9IMi91L3Y3QUgyTGR3L3dERWRRUC9BS2RPMXMxNXoyeHhlZkZ1Ri9xd3RzK3VVUEgrZW5rcWpvWEg3cDdBMkljbmVvRlNkdm5WaGxrVDVWU1Z5RHNhaWRWR3IxcURHaHFCOE56cVRFeWVWUU9HamJUMHJBSTJzSVRERDMxanYzYndGT1JvRTc2azZlbS9PdHZaYm9hM1pSblpiY2FsZ0JNN2t3UG1hYTlDMXM2ZHdUQUlrUnB6MUUvalZuaDl3SzR6YVZGZXdwZDdycXJaUnFzaVBEbXlqNUVWR3RxNEZnSzBlLzhBNVVFQnBucG5EYjlzcUFIVXlPb3BNd1dKdVdtelcyS2tkS3A4Uncxd3JoMnQyMjF0a1BsRzdDN2RFbU9jWlBsVmhUMXJTbGRHakdyREM4WXh1THVnMm1GdTVadGt5clpjNExLSUlNcXgvaTAzbzV3dnQ2eU4zZU10bFdIMjBIektINnFmUVVCN0RwbXhqMndjdWUwd25lSUtuYjNVeVkvc2FYMTczTjZwOU5kS2FwVmFFYmluVWh4d0dQdDMwelduVzR2T0R0UElqZFQ1R2hPTzROY3RnZHhjWXh0YnZNWFJScE9Va0ZodHpKMjJwRXZjQXhPR2J2TFRtUnpRbFcrdW84alJYaGZiMjRoeVlxMlhqZDFHVng2cm9yZTZLWlRwNzBCNDdYdGRvYitGV01SbGJ2V3RvOC9aQmNaZmZsajNWTmlMTHpsSkJCM0lRai8xaVBuK0Zad3ZpMWpFTG1zM0E4RFZkbUhxcDFGYzRqaTlsR3kzSHllWjI5L1QzMVR2WlByUlNiaDE5VCs2eGR3RGt0eFJjQStNR3NWTVdQYXVXWEhYSTZINU5SQkxpM0JtdHNyamtRMGo0aWFpZTR3OXEyMGRSNHZrTmZsU2NYNEM1L0owck56Sy9Pc3JsY1VwL3E1K1A1MWxIaXdjanpKTzBlR0FqTWY4Qi9Lb3IzYUN3MzIyL3dBSi9SOTVwT1FFamFwclZndFhKOUU2VmtER0p2WVc0Wk4yNEQvQVRYT0d2MnJmKzd4ZUp0am9oZEI4QlFqRTI4aWxwbU9WVk1MaUE3QU1NbzExSGlPZ01hYWJuVGZuVHFFbDBCempleDV3M0hyS2I0akVPZjdUM0QrTk9IQ3NJTDlzWEdjOTJkaEprK3ZRZW55cngwS2VsTVYvdEJpSHd5NGRZdFdsVWhpazUzR3VoYmt2a0FKNWtpa2NKTmpKcEk5S2ZpTm9LRXRNaTlKR2tkUU9jL3oxcEg0bDJQYkVYQmV1WTFXY0tvSk51Wks3bjJ3QUpuUWJVdHBpM01lSS9HcGt4TENxd1NpVGszSU9Ec1VJL3dDMlcvOEFoZjhBOUswM1lRVFA3YmIvQU9FZi93QWxDbHhqalkxMm5FSDYwOW9WOGd4YTdDRG5pd2ZTM0gxdVVRc2RnN0ExYTdjZjRBZklUODZHWUhpRG5TYVpNRGVaZ0pOTW9waU9UUncvWkREWlFCbTA1WnRQZitkTUdEd3EyeEM3Y3FyRFZUNkg2VVNXblVVdWliYmZaS0hBQkoyQWsrN1d2SjdUdGRWYmx5YzcrSnAzbHRUeTg2OU40dStYRDNTTkRrWUQxWVFQbWE4ME5zeUJOU3lPdEhUNmFOMnd6YXdDd0o2RDZDaGxtMnJPUERzZGFKTStVRDJqQS9BVlNTdzJwQkd2WHpxVm5WUmN1NGUzQkVDYXJoTFVRU3Z3NWV0RDhUaHJnYlJwMTJybHNMYzA1ZXRMbzJ4Z3NwWXl4bkVjb0JNSDNBMUV2RGt1M2JUVzFiS0dMT3hHVURLajVZelFTYytYYm9hRzRYQ01qYWhtbnowK0ZFTGJ1cEVxWW5lUjlDYWEwSzB3M2hzTGFGeDFjckMycmNrd0FTNzNQbis3cU8vYnRXam9wWlRzUWpIWG9URWZPcE9Gb1dGMTFFZUpCcXBXUWlFNlR2cTUxOGpSQU91VWg5UnpqWDlHbVVVVGNuWU13MXhMYVBjdUFXN1l1RXJKQk9WbFQ3cFAyODJtKzFKZU9kV3VYWFQyTzhNSGIyNVlDUFFIL0RUWnhYaGFYYmZkazNNczVsY0F5cmF3UkFNK2xKSEV1SFhFdTI3SWRicnRxdVFaQ1kyekFtRmJSdkwwb3VLU05ic0tkajhVdHZHaDJJQ2kzY0pKNUFLV1B5RmVsRGkxdGhLM0ZJOGlEWGtWemcySkxHTE4xZENESVUrMElQc3NkRE5hNFR3ckVYYmh0MjVETE9Za2tLc2FlSWp6MGpYNUduaStPaU1vOHRucTk3SElmdEQ0aWxmdEF0aGx6U3BQcU9mVG9hWDhmd0RGVzN0VzdseENickZWSVppSkFuWHd5UG5WUmVBNGw3SzNsUXNyQW5LRDR3QVNOVk1HZE5oSjFGR2UxVkdoR25kbW5HUmc5dHlDTmlEREQwSW90WjdXT1Z5WXEydUlUcWZEY0g5NGIrOFQ1MHIzdzFvNWJpT2pkR1VqNFR2WFg3WmJSUWJpc1ZZYVpkL3JVMG40S3RwOWpQYmJBTkQydjJteXgxOEJYVC9OVnExeGp1NHk0N0VrVHMxc045YmxJajQ2QWd0NWh5Yk1OWkhTTmhSUGhuSExhK0c5YURqN3lzd1lmNW9vVkpIVGl4NDU5ajViN1kyd0JOKzcvd0FKZnpyS1hGT0FiVVgzV2VSVUVqMU1hMWxIMy8xbGYwVUJZUkFCVjdoZkQ3bHdGbGhVNXUyaWlOOWVaOVBmRlRZYkQyclp6WC9HZVZvYmYzanorbnJXK0k4UmU5R1loTFk5bTJ1aWdEYjEvVVJXY20rdjhubktLWFpSNDVkdExiZExYajBBYTRSNWoyUnlINjFwZjRVSmNEMStsRmVLT3ZkT0JwdDcvRUtGOElZaTRDTjlmcFRSVkppeTNKREhZd3BKMjFxZkVPRVJsRUZvTW5rTk9YblZkY1RBZ3RKTzhhZnpxSEU0cTJxa2ZhWVFQZnBRSEliUXF3dFY3UjBxeXBvTVZIY1YwaTF4TlNXaldRV0UrSExyVGJnRjBGTEhEazFwdHdDN1ZhQkNaZXVYQWdHYlRPeW9QTm4wQW9vZ3FnMWxXS1NKSWNNdmtST3ZyRS9HaVZzVTRnTjdUWFZYRE9HSUU3VHpJQmJUejhOZWJwalJPZzk5R2UybkdGdlpCYmFiYW00c2pZdXBBWStZR3c5NTUwbTJaemUrdWJKN3BXZDJHNHdHTzdqVzZpb2t4MEVnbWhGMjgxUTV6U0tKVnpET0t4L2p6S2RERS9qVXQzR2p3bVpINi9YdXBldU9hMWJ1SGF0eEJ6R2E3aWhBSU8zMC9YMXFlempsSWc2MHFMY0lNU2ZTYTYvYUN2T3NvbWN6MFRCY1JJU0oxSGtmblY3RFhiaEFNNWgxa0N2TlU0azhiMWV3WEc3aW5SajZVMGJRcmFZN2xtVm9iVUhibVIrRkJNQUZ1Y1Z1T1FNdGkwRkhUTXkvL3Uvd3JwK05qdTg3Ny9PaHZaMitRYnJzSWU3Y0wraThoN3BQeHAxSGFFbExROVBiRXlLWGV4TGovckQvQUg3c1Q2Wmovd0NxcnRtNjNYU2cvWkc5bHc4a2FQY1l6NXd1OU5YdVFuTFRESGFXNEJkd0puYkVxUDhBRUkvQ2lpWDFFb3lnR1RIUS9sU04ydHhGeEdzbVpBdXF5OVFWbVByVlIrMUYyWWJXbGxkandvYk8xbkR4ZHcxM3dlSkZMb1kxQlRYNWlSNzY4MndXRGJFUGg3UUJJQmVZM3lybGMvV1BmVE5hN1lzRktsV1lIbG1nUjhLR2RsY2N0bTVjSkdrYWRRQ3dCZzlmWitGSXJROGtuU0tIYVhoUnc5eTBDU1ErWWlSQjBpWitOQlMxTXZibmlTWFh3NVFtRnpnejVsUHlwWW1qNFJURjIxK1RyTldWeFdVU29SN3d6TUVuck5kQXR2SHpyZFpUSG1sYkdJeFJodWRQcUtod09FdUtaSzllWTZldFpXVmwwWjlsNHEvVDVpaFYrUTBucldxeWd1eG4wRjdEYVZaRFZsWlNzeU16MUpaZldzckt5Q3hnNFk4R25EaDhRS3lzcTBTRXkzaWNlbHQwVFhPUXpLb0crVlduWFljenZ5b0JnKzBaeGE0aEF1UlJiRWE2bk9IQm5wc3UzVTFsWlNaWk5KbGNVVTJoUHdyQnJCSTJXOWNqKytscy9VR28wVFdmTDZWbFpVVHFYUkJlbXVBdFpXVVJXYWRKRlFvdFpXVmhTeTZnNjFVdS93QXF5c3JJTE9FYXByYlFheXNwaENjWGl4RTZqcFIyd1pBSTVmU3NyS3BBU1Fic1lpTGJIWFJXUFg3SnFYc2Jod2NHcE94emsra2tlL2FzcktaZmNLL3RBUGFleVd4Tm0wdmlVTVNBZCtVNm1nWEdjSWJkMk11aEFQTHo4Nnlzb1B5TkR3VXhiSEt1OE9rWEN2M2tiNURNUG1vckt5cE1zRCtNREtiWjlUOElxc2F5c292cERZdnVsL0Jxc3JLeXNkQi8vOWs9XCJcclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgQ2hpY2Fnb1xyXG5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgVGVzdCBtZWFsIC0gOTI2M1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAg4oKsIDAuNjBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgVG8gUHJvZHVjdCA8Yj4rPC9iPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgey8qIDwvQ29udGFpbmVyPiAqL31cclxuXHJcbiAgICAgIDwvR3JpZD5cclxuXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBrZXkpID0+XHJcbiAgICAgICAgICAoZmVhdHVyZS5pZCAlIDIgIT09IDApID9cclxuICAgICAgICAgICAgPFJvdyBrZXk9e2tleX0gY2xhc3NOYW1lPXtmZWF0dXJlLmlkID09PSAyID8gXCJhbGlnbi1pdGVtcy1jZW50ZXJcIiA6IFwiYWxpZ24taXRlbXMtY2VudGVyIG10LTVcIn0+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17NX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZlYXR1cmUuaW1nfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgZC1ibG9jayBteC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9e3sgc2l6ZTogNiwgb2Zmc2V0OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG10LXNtLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZlYXR1cmUuaWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZGFyayBmb250LXdlaWdodC1ub3JtYWwgbWItMyBwdC0zXCI+e2ZlYXR1cmUudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtYi0zIGYtMTVcIj57ZmVhdHVyZS5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8Um93IGtleT17a2V5fSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1kaSBtZGktYWNjb3VudC1ncm91cFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgZm9udC13ZWlnaHQtbm9ybWFsIG1iLTMgcHQtM1wiPntmZWF0dXJlLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbWItMyBmLTE1XCI+e2ZlYXR1cmUuZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMSB9fSBjbGFzc05hbWU9XCJtdC01IG10LXNtLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmZWF0dXJlLmltZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGQtYmxvY2sgbXgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEZlYXR1cmUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlc3R1cmFudHMgPSBbXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgey8qIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiIHBhZGRpbmdUb3A9XCIyMDBweFwiPlxyXG4gICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG1iLTUgXCI+XHJcbiAgICAgICAgICAgICAgPGgxID5PVVIgTU9TVCBQT1BVTEFSIERJU0hFUzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+ICovfVxyXG5cclxuICAgICAgICA8RmVhdHVyZUJveCBmZWF0dXJlcz17cmVzdHVyYW50c30gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgZm9udC13ZWlnaHQtbm9ybWFsIGxpbmUtaGVpZ2h0LTFfNFwiPiA8Yj5XZWxjb21lIHRvIHRoZSBGbGVrc2EgRGVtbyBSZXN0YXVyYW50IHdlYnNob3A8L2I+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbWItNCBwYi0yXCI+SWYgeW91IGFyZSBhIGN1c3RvbWVyIHBsZWFzZSBkbyBub3QgdXNlIHRoaXMgd2Vic2l0ZSB0byBvcmRlci4gVGhpcyBpcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5LiBXZSAoZmxla3NhICYgUmVzdGF1cmFudCBQYXJ0bmVyKSBhcmUgYXQgeW91ciBkaXNwb3NhbC4gVGhhbmsgeW91LCBUZWFtIEZsZWtzYSE8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs1fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbXQtbGctMFwiIGNsYXNzTmFtZT1cImRlbW9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI1MDBweFwiIHNyYz1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JVU0VoZ1NFaElZRWhFWUVoRVNFUklZRWhnWUVSZ1lHQlVaSEJnWUdSZ2NJUzRtSEI0ckh4a1lKamdtTEM4ME5UVTFIQ1E3UURzelRTNDBOVEVCREF3TUVBOFFIaElTSGpRc0pDc3hORFEwTkQ4ME5EUTBOVFEwTkRRME1UUTBORDAwTVRFME5qUTBORFEwTkRRME5EUTBORFF4TkRRME5EUTBORFEwTlAvQUFCRUlBTGNCRXdNQklnQUNFUUVERVFIL3hBQWJBQUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFBUUlEQkFVR0IvL0VBRG9RQUFJQ0FRTUNCUUlEQndNQ0J3QUFBQUVDQUJFREJCSWhNVkVGRXlKQllRWnhNb0dSRkNOQ1VtS2gwYkhCNFhMeEJ4VVdNNEtTOFAvRUFCZ0JBUUVCQVFFQUFBQUFBQUFBQUFBQUFBQUJBZ01FLzhRQUloRUJBUUFDQWdJQ0F3RUJBQUFBQUFBQUFBRUNFU0V4RWtFRG9STlJZVElpLzlvQURBTUJBQUlSQXhFQVB3RDQ3TSttOTVobWJBZUpxSlZza3hUSmtNeHlza29aZVVNaXdpSkVpckxOenJqSC9WTklUYnhIOTJmdURMRXJGcVJ6TU0ydFFPTCtKcXhTRXNobFlFaXRuQzNNdTh3SWVac05OTXNEU3BtUmhNWmdWTWd5VElrYVJFUkFSRVNCRVJLTEpCTUwwa0V3SWlJa0NJaUJFU1pFQkVSQW1aTWZTWTVkWllsV2N5Z2t0SUVLbVVNdktHRWhJa3pKaHdNOTdFWjZGdHRVdFE3bXVraXNjMmRNZUNQaVljMkprTk1DRFFORVZ3ZWhucW0rbEJoMC9uWmRXaTVHUVBqeEFFczFpd085L2xNM0tUbTBzZWR6Zmhtc09rMmNxRWVrOEg1OXVmZnRPbS8wMWtVcUdaVlZqalVNMXFyTTU0VmU5ZThYNU1aM1UyNE1Uc2VPL1QrVFNVejdTck13RzA3Z0s3bWNhTWNwbE54cGNOTm5HMWlkWHdQVm9xRlJvMXp2WExIcUp6ZGRyUzdIMExqNTZLdFJNcnZXbTdoSmp2ZjB4dk1UUzl5alRvNHFTc3NaQmthaUlpSUNJaUFpSWdXWHBJTWxla3FZQ0pFU0NZaUlDUkprUUVSRUNaY0dVazNBa21CS3lSS0pNcVpZeXBoSVQyUDB4NHVkRnBHZllwR1RJeXE5Z3RZRlV5OWFubTlQNFhsZkdjd1g5MkcyN2lRTFBZWDFuUTFuMDFxTUtCOGliY0pUZnVacUE5OXBIVU44VGpuY2N1TisrV3BWTUJUVjVSNXVUeVdzMjVGamFQd2dEMnJ0UFJZdEwrMU03WmRhQnBFTEJXT1BZNVpSd0J4OEU5ZmFhdmh2aDJpellneXBrVjFBTHVXOU80RDFBY3pKNDR5NThhakVXR1BDbmxDalFETWVXWWZZVlBObG5qNVRHZXY1MGIwNVBodUpmTmJJN0t5b0dkZC80WFlEZ0VkVHp6UFRadkgwYlRZOGVweCtabEMrWnRGS0JSTzAvd0JJL3ZPZDlUWWNDYWZGaFFnNWtDa01CMVZ1dG4zTThsbnpsdVNlYUFKK0J3SlpoK1hsaVYyczJ2OEEyek1NVHY4QXMrbTVMQUhjbzJpeXd2cVRPUDRqcGtUSVJpeWViai9oZmJ0SitDTzh4NGtPMWo4QWZxWmZWaFFGMkd4WHEvNnA2TUpNZUowMU9YUThBMS9rNy82bEluSzFEN25KK1NaMnZwdlNqSUhCRjFSRTVXdndGTWpBaXVUTGpsUEt4Nk1zYlBqbDlLeXJTVVBFZ3pzOHFobFpacFdSb01SRUJFUkFSRVFMTDBsVExEcEttQWlJa0NJaUFpSkVCRVJBbUlpQWtySWdTaTBySnVRWUc3cE5jNGJHcnUzbExrUm1TL1NBR0JORDdUMityK29ScThoQlpYMDdCdCtuWTdTRVRuZnUvbVBhZk81S01RYkhCbkhQNDVsMXcxTHA3dncvV1lOT2pvK01ZOGJONXVueXNOMlhyd3ZJdStPdnpLNmJWNU03T3V4VTB1VXNyb0dHOVdDN2d6TjFzMTErWjU3d2ZHMnB5TWNyYi9TRUJibjFOd29FOXY4QVRIZ0tKcHN1VFdLam91OWtXL1d1MndiSVBVa1ZVNGZoM2VienJ0bTlQQ2E3VmpLNU9QRjVhMXd0bGpkVnlacFpOT3ltbUcwOVNEMUUzOGdLNUhSTFZBUnU1NEI2L2lQUFdYT21CeG5JdVJEVFVVSjlaN2tYMW5UY3cxSjB6cXNyNkR5OENaeU4yRXVBNUpvc1IvQ282MTh6bGEvVUxreU1VUUloUHBRZXcvekk4d3RTYmpzM0doWjJpL2NMMEJteHFmTFQwb054cmx6MXY0bXBOWG5sMXd3M0xkNmtkejZYMVdQVG9TNUc1dW9tdDR5eVpyWmV0a3pqNlBIdmZiZEdiZW9kY2ZwVWJtOXllazU1WTZ5M08zdHh5M2h6T09uTzJGVHlKUjVtejZwbTYxWDJtQXRjOU9OdG5MdzV6R1hoVW1JaWFaSWlJQ0lpQWlJZ1dIU1ZNdDdTc0NJa3hJRVJFQkVSQWlJaUJNUkVCRVJBUkFpVUlpSkJ0WWRReUt1dzdXMzd3ZmUxNmY3enQ0dkV3UVFTZlY1WWMzVzcxYm1KL3dEa1RPWm8vRUZ4NHlqWUV5YmlDWGI4UUEvaEhhWjlEcE1lcHk3Rlk0MVBKQkYwQjFvem5sZTl6VW50WTFOYnFDN01RQXFsNzJqcHh4K2NwZ3hGdzN3dHpvNi93WnNXUW9XWGFRV1QxV1N0Ky9ZekJwOFRnN0ZVbmVkb0FISiswek1zYjBqUmRxSUk5cGljODNOdldhWW8rM3FhSC9ZL01qWGFOc2VQR3pDdDZzd0h2UU5YT3VsVTBHVGE0TW5XWkxZbVlNUFdUbVBNeGNmK3R1a3p2aDQvMWpKa3FaRVRwSElpSWdJaUlDSWlBaUlsRmpLd1RJa0NUSWlCTWlJZ1RFaUlDSWlCTVNJZ1RFUkFSRVFFUkVDNkd4dDk3c2Y0bDlNV1VzVk5IWTFtNk5lOHdUSXI5NUxOelEzc21VRW80ZG5KQ2pKWTZHNm9IMzRtUWF0MGZhckVPcjJodjlKcllDQ09CWnNjZS82VFk4WHdOankvdmNaeHNWVnRsZ25wTVREbGwzdnA3d0g5clY4ejVOb0J0K1B3Z2RiUGVjVDZrOFRYVTU3UVZpUlJqeEQrbGZmOC93REV1LzFEbE9uT21Tc2VNL2oyaW1mL0FLak9MT3RXTStNVEhsNnljVGN5cm5tYy9icDZWQXMwT1Q3RDNtMnVoTkF1UWdOZ0FnbHllT05vNUYzeGRUMFhnZjB0cVRpZlVGTmlsUFFHdGNyZXBhS3FSd0NMTm5zUHZJZjZWMVJ5SnNSN1pOKzhvVVFONml5dGQ3YkY4c0FDV0FvZEpvMU5iZWJ5b0FTcW8xMWRtOS9leUJ3T0pyVDJ6L1Irb1IyTHFnTEQ5Mm5tTVdPMEMvd3FmamtuajU2emphendiT0ZERFNzcU5SVWc3K3ZJRzRYeVFmZXV2VGlUeWt1angzTnVIRXo2M1J2aGJaa1VxMVdBZXRmSTlwZ21wV1NJaUVJaUlDUVpNaUFpSWdJaUlDSWlBaUlnSk5TL0ErWkJmOGgyZ1VreVFzaW9DSklVeTIwRHFiK0lGSWw5L1lTQ3dNb3BMcW5Gd0ZIZVhkZ0JRZ1JwOHJJd1pUVEFobFBZZzJEK29tZnhYeERKcWNoeTVXRE93VUVnVUtBb0FDYWdrc1pBUXlKRXU2MUM2RUUzdEJwWEpPVlFObU1xV2NsUUF4UHA0YjhSM1Z4UitlSnA0RHpQVS9ST0I4bXFSQXRKdmZJNzBvTklvOUlZL3dCVElLSDg4emUyc2RhM1hSMFgxeG54RUJ6NXluZUR2Q2g5MjMwMHlVQW9JdXR2dWVlMjRuL2lIdEFENHk3K291eXR0VCtrS0RaN0QvSHRzZlVmMGsyYktyNHpqQVVIZUY5RHNma2l4ZGU5VHo3L0FFSHEySHBWRVcySzdzZ0pxK1BVRjUrOUNTWlJiSjJycVBydlVzek1tMVVKRzFlQ1FPMWdUbDZyNmsxRGRHMkxhc2dVbWtLMlBRTDlJNU0xdkZmQ20wN2xDeXRWYmdyaGloSTZNYUF2N2UzMm1uaTBidUxWZHcrQ1A4eWF4MXVwdkxvMU9xYkliZHR4QW9IMytMUHZNRTZHUHd0aWFZQmUvTi82ZEpwNXNXMWl2Rmcxd2VQeW1wbEx4RExHem1zY1FSRTB3UkVRSWlJZ0lpSUNJaUFpSWdJaUlGd2hNdXFBU1lsVGFTMGlKS3lvcGtTWTZtM1V3dXUzMjRrc2FZcEVtNGtFUkxxbHpvcDRKbEtISnRwUjM2bjdDWnVlT1A4QXE2UzJSekY2eXdRenVlRGVDNTJkWFJCdFlQVEVCaHhZUEZqM0ZkWnBhOWNlNVZ4STZrSUZ5QmpkdXQ3aVBqL0VzdU45bTJqNWN6NmxBQXBIdXN4ek85TWlnSDFBRzVNdTQ2WWN5eHByMW5wdnBoc3FKbXo0N3BEaTNHckZXMjQwZUcyMnRqK29INytkQ1Q2NzlPYUxDZEhpeDd3SGZTVVU0djhBZUFGMkE5K2ZmL2lMWVRieXkvVzJWUTI5ZDRMK2toZG9Bb2NuazN5RDI2MzhUWDEzMWsrVkVWWDh0bDNBOHR0WVdLNUg1L29KM05mOUFydkl4NmpaajJydFZrMzVDYTV2bFJYVCs4NU91K2xNV0p3aTZodHpLcDJIQ1d5S0NSMUttdW5RY1dSK2N6Y2NiT1Zsc3ZEekhpT3BPUnp1YWlTR2IxYjFMYlFDd2J1UUJmMkhZU3VIVytXcFZSZjlSNzk2bTNyL0FLZno0LzRRL1hjcURleVYvT0ZCQS9JbXBwNC9DOHA2b3lqM0xLUWYwUE1YeDFxOUc4dDhLcjRnNFA0dXMxVFpQUFcrZnZOdkxvWHVseHNCM1BYN250TmQrR1B0eVFSOGpyTGo0K21jdkwyaHVPSldUdHN5VndNYm9kT3ZNNk1xVkUyUDJONkxiU1FCYkVjMTkrMHhyaGIrVS9wY2FHS1RNallpRFJCQjl3UnpLMUdqYXNWTFZGUm8yclVWSnFJVFlCRlJGd3FhaVJjUU5vSUtzaVNFQis4b1crWlpYQTlwV1E0NDh1VHZFc2NnTUNGcU0xQWVyaituK0xwMjloejFsOHFlWDdnUHdSeUdBN2cxZlAzSHRORXNUOGsxOGtrU1ZXUk1hdDBzZm4veEpHRTN3UWZ1UVA4QVhpWHdnVjczN0NySEFKUFR0d2Vacy9zNUk5SHFwVmRtMm1nYVBwdnAxQkh6VWFROFAwTHV3WlZEVVFlU0svT2R6VzY5OGVWVTh4RkcybVcvUnovTWZhY3R0TTZrWXlkaHV4ZkEydUxzOENoUkhKRmRPYUhHRWFNRmlwRzFnYVk4Z2syVGUzbWpWY0R0UFA4QUo4Y3QzbmVQMXBqS3ljM3A5QitsOWFod3ZqRkhJdVRrSWR3Ty93RENWYnQxL1NmTk5aa1BtdWJvakkvUHYrSXpmMFdkOU00eVluSVlYd1EyeGgwSU5kUk9kcWdXZG0yMWJNMURucWJseDhlcDB1Tm5wbnh1b3B6eTNhdUppMkZpekFjRDFNYTRBTEFjOWhaQS9PTU9KaU9GWTExb1R0ZUQ2ZE1tTEpoY05qZDJRcmxzYkxTaXFOOEVrbXV0N2UwNitVNjl0NDJXNmNZYVVNbTVYUW4rVGNkLy93QlNMUDVYUFcrTGFMTmpZNTN5cW1RcU1LWXlRTXlvZ1ViUUNCZE53RDFQQjZUaUpvRzBybytYak9NaXVOUHRHNEJHQkc4SDJhdUtQZWVyeGpIcTlibHpaZFFQSVFya0Mrb082b1dLcXdZY0twQjZkbTczTTJYdXV1T3R1M29mRk1HUEJoT296S05TTU9NT2pQNjkyMFhZUHZ4TnZXNjlreEY4ZW5PUXVhM0J3T081YnJOYnhyNmZ4NnV2M3JxWEc0SFp1U3VXQk83cHl4STZlM2FjN1cvVDVjaE1tdTJMdEN2anhLeTd1ZllNNUM4VjBIZmd6bGxsSnp2U3lSek5UbFVJeEtCY2hBQkJ5YnVhNTlLclZBZHpQUFA0MEFLRGI2c2dudjhBL3V3blkxSDBVaWdxbXJHN2NTQTZGUlg4SS9GVzZ3ZWVQdE9mbCtpODZubDBZSG95dGQzOTV6eG54Kzd0MHVXWHFPVm44VFo2cGFGODg5ZWY3VGN6ZUVZNkR1V3hJNGRzYm5sR0NqMUd6eitLZ09PYjZ6bjVORmx3T0ZkR0ZzRlBwTzFoWVBCNkgvaVU4VXlFdUYzRmxRYlZIOEs4MlFCN2ZsUFRoNDQ4U09XWGxadXVoZyttOG1UQzJvUmw4cGR4czhaUFQvU08vdHpOVEY0VmtjMEdUbHRvdklvTmtYMFBNNkdrOGZDYU1hUjhiRlM1Y3VHNmptaFIvTDlKcDZiWHJqVndVVml5Z2I3SWZieFFYc0NlVDdudk9uRG5wcVk5YStNTWxuWTNEcGZwUDM3eU1EZ3NBVzJpeDZyNmZNNm10OFVPZEZ4SmhWUjZOclVBNUlRQzJld09nSFdhZWswOWdNMlRDbzNxdXpJVHVJdmxqdFUwby92N1hLTUdmTzNLN2lRV3UrcEpIRjNLS2pWZGNjU2pFQmlMdWlSYWs3VHoxRiswcTNQdVpCZlo4aXBha0RVV0pYbjFCT2VuSHBKNzBPc3diUG1OcGdTWEhhU3RHVjJ5MVFCRWd6SUVzVEdWTUNJbHFFUWJaUkxiWmpCa3EzTkUwT2VhK0pXUmxrb3RFayszTWdmZXV2OEFwT2hwdEY1bU1uWXd2WUZjdDZMTDBlSzdYeDhIbm9JSExkck55ZE9nWmdyTUVCNDNIOEk3WDhUUGswWFBwZEhCUm5GUFhBWWphUWFwdUwyOWVSSXg0eWpBdmpMQ3JDTUhVTUNEUnRhTlhYUSswbGFkZlIrR1BrWTd2WHhsQ3VQL0FHeUVCM2tNYUpVWC9ZZGVoNnVweHVpQlVHOU9mTUtiMTNnT0xPLzMzRFpabzdxczhnRThuVnUybENiTWk1SDhwME8yaXVPeUxBSTQzQWxyK1pnOFA4VENaTjdPeUhhZlVnWGR1SU4yV3VyWWdrajJ1YTNJeTdPbjB1L052eVpQTFR6SERaR2NiNlhsa1lnMnZwb0d4MUE3ODF4NkU1TGM0d29Za2pJaENpenVxOXZBNmRTQ0xCNVBJbmEwQjBXVEw1T05jbVFvU3I1Ylh5M0JZQmpTYmR2SlBOY2p2Y3llS2FURUdWOUxrOHhDVlJVUmkxSG9vSUFZc0RXM25wdUo0NUp0a3E2ZVJidy9PVVhKaUs1VW9paHk2aGllR1FBSDI1NG14NGQ0YnF0UmpiWXJEYnhZeFdyVUFRb2E3M2MzMDl4elBXcnJqai9lWmNaeUt5REljWXh0aUswN0FsT0R6VGZoSjVvMWQ4NHYvTXYzbS9Ua05pTHJScGd3SkFCQlhjUndPVGRDZzNTdWVkK0xHM284Witua3R1YkEyeFVLNUEyMXNkTXpDeDFzQ2paREN3Zlk4ZTg3dmhlcTBaWDltMVNxWDNsbHk0M3RIM0RpaXdBNDRISXJqbjVqeExXTGtLcm1BOHh5RDVsTWRxczN2dEh3Zm4wL3J6TlY0RXpXVlZtYnFwU21IWGkwNFlEK3F1by9WK0tTN2s1TVpqamx2VGI4WU9SRzNaaXpJb1lZc2dKZkV3b2dkYjI4RWZpNmx1dkZ6aGFQYXd5TTRBV3ZTVlVNTEs5TE43VkYvcVY2VVpaRHJkTDZndVZGQm9obGJaZkhCQjRQVWMvTXRxZnFYSmt4K1hueEk0QnNXZ0RqNTNkYjU2eGQrNDZjVzhWcmFYeEI4U3I1ZWZLaFA0Z3BZS0NLRlVUUk5kaDIrMHhaUEVjeE85c3JPVDE5Vk56N211WllhclQxWGtFRytUdmNtdTM0Z1A3VFpiVTZPdHE0bUhITG5Jd2MvbGJMeHpVNTZsNXMrbStlcGZ0cTZiVXMrUlYzc3BacXNOdUEvSTlabXlacysvYXVRdFYzZEFDbEJKSStMSCsxekFyYWNFTXU4RUgzZXgrbXovZVBPVlQ2TXJYdDIvZzRycVJYMzUvN21QSEg5ZlJ1NjcrMjlwbHlackdSM1lvTHBTcTBQVVdza2ZCNW5JeTdBemJkeFcvUnlCeDNicmNzb1R1N0U5YUFXeDgyVElLZ0d3aFBiY3cvMm1wTmRSbks4YzFoZHllb29ldzloTElXNmNBSHFUWGJ1WmtaZ3ZBWGQySjZmOHpHVko1Si9LSnUrbkxkckljTGJmWWdrZTVxNjdkUHptdXlrR2lLTTNOUG1BRk55dlZTQjBOZHUwcStQY0w2Z0d0M3Q5cmszbEx5enV5OHRVR1NKZEVOMktOSDh2ME1ueWoyL3ZPa2JWQWt5ZGg3UnRsRVNSSWx4QU0xQ1l6a2tPMXlrbG90RXJFQzZ2SnVZNWRPWUdYR2hkZ28vRVRRc2dDL3VlQk85cWNhZVN2N25JMnpFVWNsbFhHV0ZibkJISm9zT08wMThmaFNyaWRzbWRNZVVVUDJka1BtRUU4am44SjQvU3ByYTdYRnlTRjI4S3FoU2RvQUZHeDNJNnk5TXV2OU42YlRzemFiT3E1TWo3V3hPR1VBRFlTUU1sK2svd0JQY1RRdzZGa2YwTURzc3VubUlNZ081bDlJUDRxNE5WL21jYnIvQUlrMlIxL3ZKdHA2VExtVjhtelVPMlJHWHpFZFRqMzJ4SkFOUFZjOGk5MTNYdE5mL3dCTnU2cytOZ1FEUVZyVnp3YnF3T2hCNjE3VGtuTUNvVGFBT1RkZTVya0dySFFDZFhTZUpLdUp4dllQdFJFWHpzb3JydllLUFNiNHNIOHBaWWprVytNbGVWUFJsNk4rWS9PYkdpOFFiSGtYSUQ2MElLRWkrUjBzSHFKMkcxVzdHTk15RFdFbGNtSjBaMlpmU0xUYlY5QlI5K0p3dFRoVUViUXc5SzN1RkhkL0ZYeGNhL1NQU242b0xLY2VveEpsVGNEdlFsTnZ2YXIwM0FrOC9lYmVnOGEwaVpGeU11UWc3eStQMGhBemNYUUZld0lBb0E5S25od3hXWlVjSDRNYmFmUjExV2lmaGRRVkNtMXc1WFlMUTZVeThWWkpvMmVmdkxlSzY5c3lVY3cyZVcyM1lyRURrZ1V3b211dkpxeCtjK2RXZXR6cjZiNmd5NDFDb2ZMckdjZTVDUVRaQkpZR3hmMkFtdGphMUJjc3pxMjlOb0YrWng2ZUVVOCtvYzgyS28xeHhPWm1ablVBaTZJV3EzVUxiZ2Nla2MxUW1Gc3dKdXFOM2RtejhIdkxycUtHNEFGL01WaHdkZ1VEOE8wbWlDYTRQYVJsbUhnaGZHTWlFT1FTTW1OY2VUZW5YazhVVjZDeDdrQ2MwNEY3ZjNtMWg4UXlJeEtNVUxicjJtcUJ1d0s2QTl2Z2Rwcjc3SXV1QUJ3SzZmYi9BRms0R0xZdjhzYlIyRXRjZ3cwWEZ5SWdTSkpsSk1BVUVncDJOZCt4a3hBb3BJRlFDZXN2Y2dpQTgrUE9FeHRqa2JZNUdUY3BrdHpNQldMazJMbkhHeVFIamRBY3hHNlRBcEpCaUpCbUdZbmxpV05VQ1NTUjI1TW9TZThpSlJrTEN2bjNsQzNlSWhsRXNCRVFOL3czQ1dMTXVYeW5SQzRJM1dlNERMeUpwdmxKNmtudFpKaUpXbFR6S0ZJaUJBY3JNaTVia3hJTGJvM1JFckp1aUlobzJ5c1JBWEVSQW1URVFKbFlpQWlJZ1ZJa1ZFUUttS2lJRlNzaUlrQzRpSkIvLzlrPVwiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24xXCI+XHJcblxyXG4gICAgICAgIDxoMSBhbGlnbj1cImNlbnRlclwiPldIQVQgT1VSIENVU1RPTUVSUyBTQVkgQUJPVVQgVVM8L2gxPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gbGc9ezEyfSBjbGFzc05hbWU9XCJyZXN0dXJhbnRcIj5cclxuICAgICAgICAgIHsvKiA8Q29udGFpbmVyPiAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9ICAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBoZWlnaHQ9XCIyMDBweFwiIHdpZHRoPVwiMTAwcHhcIiAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI2MHB4XCIgaGVpZ2h0PVwiNjBweFwiIGNsYXNzPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3MDAzMjExMTY5LTBhMWRkNzIyOGYyZD9peGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhabUZqWlh4bGJud3dmSHd3Zkh3JTNEJml4bGliPXJiLTEuMi4xJnc9MTAwMCZxPTgwXCJcclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMjBweFwiIGhlaWdodD1cIjcwcHhcIiBjbGFzcz1cImltYWdlMVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hay5waWNkbi5uZXQvc2h1dHRlcnN0b2NrL3ZpZGVvcy8xODU1NzkzNi90aHVtYi8xMS5qcGdcIlxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICBGbGVrc2FcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQmVzdCB0ZXN0IHJlc3RhdXJhbnRcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyA+XHJcbiAgICAgICAgICAgICAgICBTb3VyY2U6IFRSSVBBRFZJU09SXHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gID5cclxuICAgICAgICAgICAgPENhcmQgaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIgY2xhc3M9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OFptRmpaWHhsYm53d2ZId3dmSHclM0QmaXhsaWI9cmItMS4yLjEmdz0xMDAwJnE9ODBcIlxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEyMHB4XCIgaGVpZ2h0PVwiNzBweFwiIGNsYXNzPVwiaW1hZ2UxXCJcclxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FrLnBpY2RuLm5ldC9zaHV0dGVyc3RvY2svdmlkZW9zLzE4NTU3OTM2L3RodW1iLzExLmpwZ1wiXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgZWF0YXJpYW5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgPlxyXG4gICAgICAgICAgICAgICAgU291cmNlOiBDVVNUT01cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gID5cclxuICAgICAgICAgICAgPENhcmQgaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIgY2xhc3M9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OFptRmpaWHhsYm53d2ZId3dmSHclM0QmaXhsaWI9cmItMS4yLjEmdz0xMDAwJnE9ODBcIlxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEyMHB4XCIgaGVpZ2h0PVwiNzBweFwiIGNsYXNzPVwiaW1hZ2UxXCJcclxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FrLnBpY2RuLm5ldC9zaHV0dGVyc3RvY2svdmlkZW9zLzE4NTU3OTM2L3RodW1iLzExLmpwZ1wiXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgaXNoXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ld1xyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zID5cclxuICAgICAgICAgICAgICAgIFNvdXJjZTogR09PR0xFTUFQXHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9ICA+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZCBoZWlnaHQ9XCIyMDBweFwiIHdpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIiBjbGFzcz1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmQ/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNWHg4Wm1GalpYeGxibnd3Zkh3d2ZIdyUzRCZpeGxpYj1yYi0xLjIuMSZ3PTEwMDAmcT04MFwiXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTIwcHhcIiBoZWlnaHQ9XCI3MHB4XCIgY2xhc3M9XCJpbWFnZTFcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWsucGljZG4ubmV0L3NodXR0ZXJzdG9jay92aWRlb3MvMTg1NTc5MzYvdGh1bWIvMTEuanBnXCJcclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICBNRFxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICBOaWNlXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgPlxyXG4gICAgICAgICAgICAgICAgU291cmNlOiBDVVNUT01cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgey8qIDwvQ29udGFpbmVyPiAqL31cclxuXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3Rlci1zZWN0aW9uXCIgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIGxnPXs0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dDFcIj5Ob3doZXJlIGJ1dCBFdmVyeXdoZXJlPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj42MDMxNiBGcmFua2Z1cnQ8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPmhlbGxvQGZsZWtzYS5jb208L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPisgNDkgNjkxMjAwNjMzMDg8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXs0fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvb3Rlci1wb3dlcmVkYnlcIj5Qb3dlcmVkIEJ5ICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4YVwiPkZMRVhBPC9zcGFuPiA8L2g2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci15ZWFyXCI+wqkgMjAyMSBGbGVrc2E8L3A+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXs0fT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzMHB4XCIgIGhlaWdodD1cIjMwcHhcIiBzcmM9XCIgZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWdWQk1WRVVBQUFELy8vL3M3T3grZm42QmdZSHo4L09JaUlqbDVlV1FrSkRiMjl1YW1wckV4TVRNek16aTR1TDUrZm5SMGRHam82T3RyYTIvdjcrMnRyYWNuSnhGUlVWUlVWRmRYVjFZV0ZoNGVIZzlQVDNRME5BM056ZU5qWTF2YjIvdjcrOGtKQ1JsWldVd01EQU1EQXc2T2pvYkd4c0xDd3RwYVdrWUdCaExTMHREUTBNOVJYd2xBQUFNa1VsRVFWUjRuTzFkYVVQaU9oUlZrQUpkb0F1YkMxaGcxTkgvL3dPZkJSZHN6MDF1a3RzMk0vUE9SNXZXSExMZFBWZFhiaWp2TnZ2ZE1KaUVhVllVVVJUUHArOUlrdkY0VU9IeEF5T016OGVudHVOeGtsUXYzOGRSVkJSWkdrNkM0VzYvdVNzZGUyaUp1MTFZeE1ub3VodU1rcmdJZDcrNklyY09vMEZIek9vWVJPR21iWFpaMGhPNWIwelRkVnYwaG5IZjVMNFEzY3JUZS9HSDNoblJYcExlNzNUV055R0FXZm9zeE84dTZwc0xpZnhCZ3Q5OTN6U1VpRjA1L3ZaMy9ENlJIMTBJTHZydVBndWhOYi9sWTk5OVoySndaMGN3N2J2akJsaFk4RHYyTDcyWVlHcE1jTlYzbDQzeGFrYndwdS8rV3NCSWt2dVRsdUEzREJaajBYZGZMWkZ4Q2ZwL3lsTW8vbmFDVElvV1UzUTJHaVRUZVJ6bGxYMWxzUWpEeVNRSWdwc1RoanFjbTcyM24wekNjTEdvN0QxNVplOUpCaU1MallZeFVkbWJ6R3lhcDhGdWRaQlNZVENPaDlVdVNQTXBtNngydTJFZEU2Tm8wcG9sZ2NRNmpGZzBOWWNHNDZDZmJ3L2RVQUk0Yk9mNkRpcVAvcVB1N2VsTlYyUklCRk5kSjFWdmEyVFJyTC9SdThTRFpqTlV5S2pxWFNidGpvTVc2cDZTQ3VOUzlSYnpNTzBNdWFxemxIbGNvZkErTGp2dFBnZXZDcC9DR0wraU1GbjROb0JuS0laeGd0ci9wdHUzWUdFV2dlTHdSczFwY2RSUXQrd1E5UEdkTnh2ZmtZMzlPQ0l3ZmhuMG1qVDhscDEzMndRSHF0dFJ2U1U1aEQ2UFlBVnlGT3NkcDFhaHYydndFeHVpNTdXVlNHMmt2dTZpbDZCMjFKK3RDQ25JejNPd0R1SmMvQ203WWMzcnNhY3Vtd0pMTjZQTEppLzRWL0JJVkR0Tzdpc2VvM2dDYkFyRXNYaXBwV01YdGo5ejlPbHlJOHgvTjU3amVYcTUxK0Rmb0RzR0dnUzFqalhWY0IyQklYenVqVDdZSEtIRzdNb2dnOTNYY3p4Sk8yV2hBTkxvR3hRaGcxejltRzBpYnhuMUtYcEdmYUppdzhibjB6Vjg2b200OWdRN2QzMWQ4OTVqcVhQMThSUk9Zbk9YWXp1ZzFOejZQSVZHdEZUMXNIK3o0UW5QQk1IR05yRlZEUlBuQTMxaFFqSU1haTBWTE9BeW5IZk9CWU1PcDR0ckxhR2grTHdRUS9SbzJ6MFpDTnFnTnFpMVZOQ0FxcUVuT3lraHJKeFFhd2wzMC9PSmlDSitSODMvMVEvNERLRitOQ1kvMHJCeTlBVURobkRKVmcvZzZFS0xxalBLNVdxOVhxK1dKZjhWMmc1Zlg0ZllvbDJ0dGgxNklPd0FYUVhGL09kaUdOeG5BY2NHUk8rbGpXbTJSNjJxU0dLNEJ3bXllMUZFdnlmWmkrWnRlSkNmVUQ4UHNYeFhiYVpJWnAxSjBRdjBQdHQ1bzZzL1FMN0hhMXJwRDJnZXlBaWxPNFpMK29UN0hmMFJybHg2aGFYUGlQZzdzUG9id3lqNmZVYXEyNVRqSFRSRkIzczFWa2hxY0ZidlMvT29uS0pwZmprQkd5Q1FJUmZwU05XT2k5NVhMdzA5N0FMakNNc1g2amhVejZHVVRqQlVyQXNHNE83TUFqNkdteFN4L2VFV015elJuMWZ3Q3p4c1hETGFIdUYvcms5VXd0Y0FsU1JDcEhHUXU1VVJCQXpncVZwb1c3empEVk9Ccmh2cldMVlg5L1NoRWJhMEI2ZWN3RUdrc0QzQTZiaTgycU0vMnhLMFg0R1hzQmFLMGNjMldDeTEvQTlTK1cyMm1nMzYxaDRlTjNaQzIxRXV0WlNJaDdGaGVBc05ybGI2NzRNWXYzZk1yUFk2dEFrTTRUSFpVTDBZZUpVaytJNDNpejZnY3lxQW0wTmkvbkg1REJTTENBSzBURUxvM3paWExhUkhzSUw1S0NJbFlnR2xQbU5qcWVnYS9JTHhXa1FtMHhRS3lYVmpxdzdhMEdJN0dHL3BLT29wZ3d4Tnp5UE9NVEdLMCtIbVVIbU1qZytiWVJwenBGZlRRd09keHdWVUd3MFZZUDFCSDkwOE5kNHFBOFo3WmgxQlhEQkRzeEFGbmFnMnBjT09ocnFvZERQbkFwTDZJMkprRGFEWlJuUDFmdkdnMFVXTU5sUzg0cEMxeU1qQnJkUW04dWJzcktOVTVsa1ppVmQ0MThRN0xCK3FNUmp6UnVCVnRWT1p6Q2QwOG1HR0JxbUtWR1JnQlg0V3VTb3Iza0Myd1dlN0kwTjYweCtacEpBdjZibHVJQ1JqK1F3eDVQLzQ5RDVxS2hmUnV5cGZJVVpUWVFwbE9UNURzbHZtTVhIMGdtNkJJZnRYSSsyaU5pWmxITGwxYmJDMVk0WmpCNGJROUdOTFVFR1JXOXNEclJuTWtHdnlwb2JRTm15VG1xamNRY1M2TGpxTHVBeUpEdGxIcWxEYkRmTjFaSzl3WWtnRWg3dEVPUkNIQm5QcjR6TmtSbndSM2JFc3BYSUNrU0RJMUJRUnc3RURRMmhwZGFtSFU0R1lGenBuK0JuSUplN0NFSHQ0TFUyZFg4QXlLcy9xZ0N5all4ak93V09JZjIwYksrQWxDS01kNjExaGhqaDIxOTAvampWLzZ5NE43Qm5pU2FyWEIzWEEyV2lzYWNwbk9PUjhEblpFSXNRQmE4U2NOMlVaNGpRYmlaQkdITExOaWRLU1pkaGljRGlVYkRpaXJpeERHTW9sazh3SDArMDRQeDU2MFo0aDZvVlVPSnp0dHpGRFpJWmdNSVRIbGxSVUtzeEpaaHkwb2d6aGFTaVZ3UUFERWhtZEVtVUlWVVAzdy9BTWVDUXlsRVJSaHVpOGx3c09SMW9MNDh3WFpZZ0VaRk9uSEEzMCt6RkVlbEdHNEMzQmhFVjAyREoweE5ZWnNvUTlGdUErcG45TmtpRzBzc25WUzkranorc3RicElNb2JWQkxzOEdmbDVmRTFtU0lUenduVW9XL3dBTXU5Zm56aU9HajVZTWlWQk9LY0NzUTMzUTYvOE1QV0lJdzFlNlpkanlPaVJpWVhXUVpHaTUyWEZodVZYL2Z4NmFNUHo3WlpwL1FDN3RYcmRnQkwyS01rU0docjlMUDRUR3hOS1YyUWRndUNwakRiUnZwM0ZOQ1B1RUYzWWFHSzhudFJDaFM0VGhlUDFYN2FXaU5tK1pFeEd1Z081dDNpMzZMWlNsWmxUb3d2Y2tJWnJpYUlYdWZVOS90di9Rd1FkY3VuQTdvUk1mc0lNZjM5MDVnLzM0ckdrbHpKQ0l4WEF0ZUVvRUhiUGV4YkVZOXZFMHVDNnZUZDdiSlhBeEU5N1VrR1pJeEVUWlhDNzFEU0ltaW5mWm9YUk1GQlhYNWxJVGxJZ1hZbW90L0xnMnQ5aEVsOElvWGNVbU9zYVgya3MyVkNVYjV1dVlZUnN4d3JiblBwVTk0eFlqN0JMblRaYml0NnViU2NiRmN6K0E0N3piaWRXM29laitzVTd6TGN3bktwM2d4ZjRFWnVpV00wTVhialRkYnVoeVdmd2NSRDVEZzBPYnJxYzJNemtYVngzblBSa3dWT1hoOHkzRXFvdHhESDRvZnU2YWlmRmFWVEJwd0t2a3MxSGQ2R3F5WitIOFE1emhiUUJsVW5hc2R4Z2RsQW5QUm9YdmNRNnBjeDR3ck96empVaHRCVnhxN2lJME1vdmdQR0QzWEc1NlB6MURjWk5ab0x1dzFzekdqUEttY29sOGZQMlZrUGZnTnJvSHhpMXhBaDBwUkdvcUlNbXZqdGs4Qy9iTHArZm5ZN25jQjltY1UxREt0TVlLWG5FU2RUSFVHZXZXTVBabDRjeDdrZG9tNUkwOVRpaE51NEZQUHBuNk5Kb04xUXJtMW1WY24wYW94cEI4Q1I2TEpEOWNZMGlxVHBUMEtOcjRCM0NkS0xGYVh3Zko3V1pVMm5RQjEvcVNxOWZHT2pSNHNGZ21GZENuZHFJMTk2UnVnN2ExODZCdjdhLzJnZ3dWbFp0TllCME9nRDYyd1g0QzZ4aThONWZpcFdjOFd2c2dpWGcvNmZxbHJqZlBPMXh2UTlRdkZhOUJxNnlubzhQQXhTVkFCYjJpUDd2VkVkYXBVelRjYnRVZzZnaTNVZ3Vhck9HaGhPdjlTMVF0NkZicWVSL05PYnJmTDBYVjgyNnJKbnRvSXVPTTNDb3huRUhWejIrdnJ2NEx0K3B1eEhPQTZrRFYxVy8xYm9RYlBjbFlMTFFZZmIyYSsyM2ZiN0ZPNlNKWDAxVHdxaER5Zm9zdTdpaDVHMmJ4K0hKZHpwSTRIYnFVZVFHQVVWclYvSWNYNmtvcy9DYU9EOHZWYXJWOGtFdk11QVFzYTFkV1Q5QURiKzRLTWdDTWZqazlRVktXMkZiVElSREJzNkxwOVoxZGZFQzUrM3l3ZTMzdkdoOEtHbEJEOU9YdVBEN2dtZlFSWlljZStYTC9JUnY0S3NpUGg1QzlWR1pCVjRDS3hhZjBDWDNNdnR4RHlnVTA5SDI2Ni9GZHNuTFpoRjBBQjRkL0JidkNwLzdjeXMwQkxDcjVmYXJieDQ3N0FyelBmS3U1ME1EaHo3M2NET2p1NWZiOWJuVXRpS3NMTGxyZ2FTcGh5K2dHK3Y3djhXL2dHbmZmRllqNC9oK1oxOWhxNU0yTnNocHdlazhFbHYwWjg1UndlZjNVNHFrTHZqMjVmMXdKeXVGVmEwYVZZWGJ4WUhRRExKRTFKUmJ5THB4ZnZYU2JENkx5TUloVklRMmJmbXY3dUZEbU5iSTAwUmNhK1R5SzVBaGVsODNHZE9WK3VZb2UwcURXSU5ZYkZKYzIrYnFqS3NJR1lIdkZuVDkrbm91SzBBL0NrS1p3VDQvOE96VTJDdThkVllHUTNKYzhITWFqTW5hSDNQOVZGOXBJT0duRjhLeDJNU3V5bWpSWGFCWEMzaUpMTERXM1lDbU5hT3BYcjYrVDNtM2h6eE5kK0p6YTU4SUlFNTJHL1kza1c2aTdxTzFhRzVpS1RUYjFYeWxlN0tVcTZuTHg5TExBeWVOMWFHT0IxTHZOSlpJb205eXUzOHBXaVpYTDllMGtpM1Y1R2Q5ZzVFN2FSUHZNUm9Oa2VoOUhlVkZrV2JwWUxNSndNcGxzZ3pOdWFIeTAyTDYzRHNQMzk5SXNLNG84aXVmVFpEQ3lDY2xsYmZpdXNYZDlnbW5HL25NcHN1MzBkbUZwL2NOQUp1RnZOejdCNkU1MjFxSGhHUXhEUnR1NHBMbFZ6TXpsRUliMDRCR3NITHE2VzNCOWd0RVMvTVl2dVJTUmRqRzJ0d2ZhUjJ4M0NUZDlSNk9LZVFCbmIveEJLdFduSFVTbEs4R0tvNy9qV0Vqd095RjBUL2FSaDBqMCt6Zld2ZzFrM29JbGZ1Y055Vm51bHRTandFb1JsZDRWcG91Mnd3dGV0em5mcGlDTEpOOTJGanh4MkcremFPcVNwV2FDd1RUS3R2dXlLM0oxcnN2Ti9uWVloSXMwSzRvb2l1UDV0RUtTSk9OM0RHcDRyRkQvWTlYd3ZmM3B2WGw4dHZha2l6QVk3dmFicGJPRDlqOFlITDVieEtFekxnQUFBQUJKUlU1RXJrSmdnZz09XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMVwiIHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIiBzcmM9XCIgZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWhGQk1WRVgvLy84QUFBRDI5dmJYMTlmajQrUDA5UFQ4L1B6ZDNkMjN0N2VCZ1lIVDA5UE16TXp4OGZIbTV1WXFLaXJwNmVsSlNVay9QejlxYW1vZ0lDQzd1N3N4TVRFbEpTWEh4OGVpb3FMQndjR2JtNXNXRmhhTGk0dE9UazVqWTJNMk5qWllXRmgxZFhXVWxKU3ZyNjk5Zlgyd3NMQnljbklPRGc1VlZWVkVSRVNQajQ4U0VoSmpDREd3QUFBTU1FbEVRVlI0bk5XZDE0S3FNQkNHc1lFRmUrOTExMVhmLy8xV0xCUkptWmxNQVAvTGMzVGhrNUJNSmxPY2trVXRPM2N0NjI1Wkp2Y3dERDV5dG5rVGpxMC9mT24xTHMwSG02UFE0d1B1cU4vcjlXM2RpQTNDOFdDd1dhbTRSQ3IvYmdhRHBZVzc0U2RzTkpwWXVsQ2p4b245Zm5nSmYyZXpFUm52cWVOc3RtTzlKMGJDeTN5a2ZPZkE2bzVHUTc3YllpUHN0TG9zZUU5VlIxejN4VU00V2RhN25IeUJ1dDNGY3NKeGN3eUUyNVZiWThaN3FsWWViQXRBMkR1NVZ2Q2U4Z2ZHNjZRaDRicGg1L0ZGcXA3R09SSnVGMjNMZklHYUN5TkR3SUJ3K2VObHdCZW9OY3VGc0o0Vlg2QUtuWkZLZU9SZUhYUnFyeklsSE04eTVndlVvRTA1Rk1MMU5RZSt1OXo5SlJ2Q2ZUNThnV29Fb3h4UGVNb1A4RzRCNEJHeGhJTzZUUk1HZ0ZqdjJTWGM4T3lQVE5SRjJuRW93cDVuMjBhRHlHK2k5aHdZd291Zk45eExIZ1lSVGpqZUZRWHdqdmdIWndRVGJxdDVZeVhVQWx2alVNS0NBVHJPRklvSUpDd2M0UDBwM2pnSng4VUR2Q1BDRGdOQWhJVUVoTDZMQU1KbHN3aXJvRWcreE9lb0p4elNuZlQyVldjZ0xEUWdCRkZIV0hCQUFLS0dzUENBZWtRMTRiTDRnSTZqbVc3VWhOOEFxSHVLU3NKeFVaZUpwRHd5WVVFWCtyU1VCcHlDc0lDMnFFd3E2MFpPK0VXQXlwMkdsUENyQU8rSTBvRXFJL3d5UU1WQWxSSHU4cjVqckZ5WnoxOUNlTW42NE1WY012ZVVtTEJYSEtjVFhKNzRLWW9KdiswbGZHb09KOXg4NHlOMG5LcndhRXBFT01qSGRWOXJWaDVxa24vZjlocElhQnFhUmxCemtUaFVXbDlicEFPZ0s0endsTFc5M2Z3VmphNE40WWZ1Q2c3ZjBvUldJNEFFVXNRZ1hKV3Z5M3lUL3JmYW41NXdiWXRFTEUyTXhVcjZjMWN1d3JlcGxvcHFUQkdpZzN0TkJQQjQvZ2kvV0FtR28vQi9CanJDc2VKK3V0empGeFFRdkU0UDFlbmpIRmdjTCtIckNGVmhKSnNkRDloTFhXaVliQ3VKTUh0NTg4VXZxZHRRRXg0VmQrVHhEdUVta0MvNXM0L0NxVVI2THgraFJSK0VLb043by9rRmNFSUZBVDlwL0dOOE1aQytNaDgvWFpLd3JyaWw1d0NmNWdGNFIreis3Sk96a25nR0N1UWU1SVJEVlREZTYzc1ZGc0FwRGpBdDFhS1d0TUFUaEtwSEdINlFJeVN4YWdvb21XWmVTcnlKY2NLKzZ2bEVUa2tHUkdQQWx2TFB6K09iNGZqRmxBR0hpK2h6eG9qR0tTTzYwTWk0b1JzalhDdjN2ZkdOaWVHN0NEajBVMHU3YUxWaTIzMEgrcjNFSll4bVZKY1JzTjRSWHlNMlNxSTdYeXMzbmg5emc4bTZhSnE4ZFhqL29VcERPcHlxMFpzWUVhcWpLaituZDNvUWJkY1E4RFhoTjYrM09PMm5vbDFVU0xoVm05V3BYWTVnY3dhVDJTTWNCdmtQM3ZHMWc3aElyeEw5amlHaDV1MDlwSzdWb2JsVHlrYUFnK3I4RU52a3lwOUtPZHhGdlFrN21wM1JwOFVlaUhSK3VoRDhJYXBVazMvNEVOK0VaNDF6SnJXeERFUjVHUmt6QytlcTY0UVd5cHRRYWJBNXo0MUZXbjIwMDhyY1hndWxYdmJkOTJCNUUrcGVxcjNrTXJwZjVsTjhnMVMzN0w4M1VTL0NqdTRrSmozVHZJU00vQmI1YkVuUzVrUTB6d2xDdFNYcktIMWk4cDJhUUZ5QXYvcExIZU9FUFcyV25Xckgyb2ZuNkhHOWhnM0F0WnJqR0tIZXpsUkhkRUF1K0pENGVBaXRCZWhpc3hpaDNvR3VNNWVCcVY0bWlZU1JnTlBiTlNMY0E4d1RiZUlZNkhVVUdRNW9RVGR2N2IrUUVMSlQwTi9iRXZEVENzOWdjQnJEcmNWR1NBZ1pZaTNJMWJWL1NHZ2FvWVJKTFB0OUU1NUI0eHAyQXl2MXdvcE55MG9MQWZoY3hJTWJoM215b1FPc3B6SVh6VWNwaHZCaGF3YUVzQWRmZ2QvRlNicnJ5Smh3L1NUY2FnMmFwMUJwdUN2eEg2V21LeE1KNjhNSEljQUFlZ2hiYm1SUVQ3K1Q1dXNoaXRDNVBBZ0gwSS9qUzQzY1RoOVorK1kyRFFyUTdUOEl3UjRYMElLUlZxL3hVM212WWFadUtDemg5a0VJTmlvbDIyQ1lPcnZHWXRaQ0hCcXlFRzRDUWtSb2dwa1hpVWNvd2lCd3dTbjFFRjlnMmhvWWFHdVprTWR5TnRFZmp0QVBDUHVvcjdCNUlZaENPcUw5YzhuQjV2MFlWdnd4RmJhaXc2amtqR0ZCTW45dlQ0VTAyamdiWVl1cWRFdE9CK1lydTQrUDk4TzJWc01SSXBUYnl3a2NRMURDNE1sTlhtV2h6RGQ1ZEFGdDZEamhHVWI0ZW5DMzA5RXJteC9pMG9XTnNMOFRMbUR2WWNLYzZYWHlBa1F1K0E5Q29FVFJ0emxJY3FndFYvbmdBSjN5UDNtelBRWGVCNFdxUWduVkh1SE1CSE1GeDFXQkVscXJONHdUUGdnRVRzaGJHSllxL01rNm5QQ1lOOXhEYUVBRVlTMXZ1RUQ0aVFaQjZLVGovTE1YSVZBSlFXZ2NFc29nUXNZWmdwQXppb0lxUENDS01FZHI5Q1hDYTRnaUpQaExtWVVOL0VBVEV2MmxmS0xFbWFFSWM5MFlsdFQ1UEV5RXhyR3Zac0licFdoQ1RKNkxCWkh5eTVHRVRMRVVOSkVHS1pyUU9JVFpRTFRheFdoQ285TVpNOUVpZHZHRXVVMm9TSCsrQVNIRFNUVkp4QXh6Q2lINnVKdEhORUFhb2RQT3dYNlQ1aDFZSWVTTlI0ZUpXbWlCU3VqNEdVODQ1UFFPTXFIalZETmxKT2ZMR1JBNlRubVdtWGRmbmh4amxUQ0FuR2R6S0l3OWNvcEVLYlV6Mmh4K1dzMjdwc2ZWemthbnRMU1E4UWt4K2IvT0hsMG9JWWVZRTROSFdIS1crR0dhdVdsS2Z3c1JaOEJ4WmI1TE5NaktwUkU2REoyME1DS3ZoVTlDeXI0eVk1ZVVTVjB1Ly80ZVVseDA1dUhhQ0ZFdDBrRHVvdVNRWm1MeklFcUVEQUNEWWg3SXVMYTNwS2xzL0RMS2pQZlJrWHVoTXB0c1RLYVorOW9kRUY1SXhjc3lPMDQwc3lyYlExU2NkMEtJNUFRVG1WWEhjeSs0T08ra012RmxtSTNSZDV3MzdSbG1FMkpqV0Yzc0Zhc1B6YmRJeWY2Qm9uSEY5T2NvSFZMVy9JZHNHNmdtYS8xRGkvTXo3d21lanZBcDMybzRMZEVISEZNUVhXRkdhTmM5YkF6bzdrcUlIRktacXRiV2Z2TXVycmdjVXJubWR2ekRESlhoOWlFaE5uajZVMU1MN2lpT1BxRFJNOXdaMTM3dXpwamoyMDNtaHJlYS9aQ1FwWEt3TzcxdTJQeW5WQ3Nrb1ZnK3ZyclNDMDU3RGtEemRTTFFJa1k0NFNwUjNtVlpJR2tidWs5Tnp6RkNyZ0xYUEVHb1BLV00zeVY0M3RITkhDM0VmVXE3M3JSNGhtam9Mb1BXR0FLSXliUEJNc2s0MFFiMlRRaE1MSkdMYTd2STFXNjQ5bzZMZ2RiNjBxakZaYnVSSXJ0RVN0WDZvcmkrSXo2MjVaNXYyUXFyR1lWNUZQVGgvOE5ubC9MMTFTaUhUdXVvYmlKdHJ2RVlNNFBYakJYUm94eWZLQmVHOEJEYkM4NWpidU1kZlZ6UmV4TVI5bkhCQU81MHhSdmF6dHJGcmhYZFd5eWZDVzdPVjBjcjdsUlpRN2ZocDJMYnVSaWh1SXFMdjZwUFBhL2RkYnRkejV2T1o2dU5qUTB2bytrZnFCNGJYdkdjTlBGYTFMYWYyZnpMM1hSQlVndTZOSlFFQkZpdUZURmg3eU41alBkQ1R1UVZTajBITnNQWU9Od1ZTU1ViUUNReko2WFRhZGxXUVF4NW14VzZraVp5a25BbXY1Ni90OEIzc3RGWnFwWjhHb2orRmo3M2MyellhYnYwRVVmeFFhZ3UzZVp5dm8vRyt6V0p5aDh4azU4WnpMcGxmOFFUaHFFc1cyY0crQm14bGVvVnBQMWwyOFo3K2ZQQlluZkZWSmhJS2d0ZFc1LzNycWJKRzdteTIwWTU1WDVQRVFJREZ5cFhpdCt3ZitEb2NLSlNWZCt6cTdTRGJoVDkraDVETjJuTTdYY2RGSnlFQ1dvbDdCQnZTVzE2QlpRaUdBNW05QWhSakNvQ2Q1R29HZ1QyMUx0V3FSLzJRbC9wZHRlWVRUTnMrUW5zZjFqcUVhZTZzbGVKcTV4eG04R3d2cldlc05UL3ZsNjVnU3BDcDRPNFpvbmRDZDJXeE5FdllzS083VW5kaHFabklZdWs3c3lFcC9sWWxwTHQwMldWZFpnT2dES1V6UE1uSTV4d05jbkxTa2Z4R0pVVGxwYmZoU2cvbTVYWGYxcG1ZNGJ3U0hINHJLaHdkZnNlUkZVZ3FLcUcxL2xMRUYxbHBLdXlTdGt0Ni83Vk5LbHJ5YW5yc0pFalR6T1YybnVrcVRUM0RZZ2E5NWl1bGw3eEVYVnVJMjIxd0tJamF2MWkrbnFJVE9GU2xxVDM0QUlxUGhZWkVlQ2lodFMwckJkMUwrVkJmUENncXAwRlhmcGhLUzJ3dXFTM0lwcmh3RUJJWU9YVkF1NDBvSkdlME5xeWhkdHBnRU5ad2RWemI2M01uWU1LcVkxdEdtSHBOaTdPbERwRlJMeGdLaUJQaW9LSUtxV0txdkhjbVhNRVM1dXFnc3NLUkZheHZ1U1AyRVNHMDJIcmRQZXVEQkhoQnZKVzJITkxmQ1h5bmYxVFFMa0ltWEtFV3V0L3VUMUZsNUlLU0trbVAvbjE4MWdieTkwMUphS1ZXQzhmMWpLUkY1QlkrSWZhRVVEUy9jK2EzQmExZUJxOTU4SEJXdENQUUhWNmZJdEpWNGRWVmh1T0g1UDRIYU8rRmNQZkxJNFpSMmJGL1F3N2MzUjJ0bzJjNXRxd0pKeHg3NUhKWDlmZTBsSDIrc1lwRHd6ZFZjNkRxcFZOUjluemVySmp6MndKQXkzWW96ZmNKbFBaYWJZT09iTWZUc2hwbmEzQkZHTVBvTTZDS1c2MGN1QXN0TVhiNVdoOTJodW1TTHFyL1lrM2hZVy9qOVB1YitTNGhPblZ2WDlwOXNmZnpjWkdwNnBsdjcvZCtEVWZ2c3Z5L1ZxNzErOWJ5VCt5MW90ck9CemVSdTNxWGFybldRNCswSjZkaDBOcnBWNHo2RFoyU0FabHh1WHQ3Vi8rSCtSRHVoMlFJdFc5QUFBQUFFbEZUa1N1UW1DQ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzBweFwiIHNyYz1cIiBodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUTU9zanF3RllSZEtSOUxhZE0yMF9qa3dHajBqQlZPR1R0bVEmdXNxcD1DQVVcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dDNcIj5UZXJtcyB8IFByaXZhY3kgfCBJbXByZXNzaW9uIDwvaDY+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF2YXRhciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RpY2t5LCBzZXRTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA5MCkge1xyXG4gICAgICBzZXRTdGlja3kodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgOTApIHtcclxuICAgICAgc2V0U3RpY2t5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlciR7c3RpY2t5ID8gJyBzdGlja3knIDogJyd9YH0+XHJcbiAgICAgIDxOYXZiYXIgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPjxpbWcgd2lkdGg9XCI5MHB4XCIgaGVpZ2h0PVwiOTBweFwiIHNyYz1cImh0dHBzOi8vZmxla3NhLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL3Nob3AvaW1nL2xvZ28vcHJvZHRlc3RyZXMucG5nXCI+PC9pbWc+PC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgIDwvR3JpZCAgPlxyXG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibS1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiICBocmVmPVwiL1wiPk1FTlU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgIGNsYXNzTmFtZT1cImhlYWRlci1pdGVtXCIgaHJlZj1cIiNkaXNjb3ZlclwiPkRJU0NPVkVSPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlci1pdGVtXCIgaHJlZj1cIiNnYWxsZXJ5XCI+R0FMTEVSWTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiIGhyZWY9XCIjYWNvbnRhY3R0XCI+Q09OVEFDVDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiIGhyZWY9XCIjbG9naW5cIj5MT0dJTjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFzQUFBQzlDQU1BQUFDVGI2aThBQUFBbVZCTVZFWDhkd0FWaUFuLy8vLzhiZ0FBZ0FEKzNjM080TTB4UXBRdFA1TWtPSkFuT3BFclBaTHM3ZlQwOWZuNysvM3c4ZmNTTEl4eGU3RGIzZW9BQUlMRHg5d2FNWTJVbThMVjJPZms1dkJlYWFmTHp1Qzd2OWQ4aGJXYW9NVUFJNG1PbHI5dGQ2NUpWNTRBRm9hRWpMbFNYNkt1czlDbHFzdGxiNm9BSDRnQUVZUjNnTE9CaWJjZU5JOUNVSnFzc2M4R0o0bzZTcGhQWEtFQUM0VEtUTmtkQUFBSHVVbEVRVlI0bk8yYjJaS2pPaEpBYS9JdVlwUEFOcnZBMkdheERYaXIvLys0U1lGZDZ1cSsvWGpGaENkUFJCRUcweDNpV0VvdHBENCtDSUlnQ0lJZ0NJSWdDSUlnQ0lJZ0NJSWdDSUlnQ0lJZ0NJSWdDSUlnQ0lJZ0NJSWdDSUlnQ0lJZ0NJSWdDSUlnQ09QOFFiejQrSXQ0OFFIRWk0VmQ4T1E2WkkvTC9mTEkraTczbHkzTWtpNzROUnVqMFhFdGhldllVZFIwM29MbFdjNUZzdHFPTHJNc3hxd2dDRnltUGxyMjlwZ3ZWcUtsWEt5UGdjT1lFK3lQam5YeFBEOXpuYVlKYk1iYzRMR1VqWVZjMUtvaU1HZkFKdkU0WFBGQ3ZtVWMvQmhsWURWWjhVVUt0WWlMaE5uTUhaa2R0RERIaDdrbWNEVGlNTnRoemhndVVhd2xYTFJiaTlsWnlsZURnUG1oNWVzWUgxTi9OVEoyaXhjbzF3SXVxZ0JiUndGek8waFNkVlN0QlBoc1JFQ0pMU1ZhbVMrWWVSZDF4RnpYZlVDNlZtZThWY2RLSGNKSmk1OUFiVnNPRzQvR1MyYmNCZFlLZTlkRVdBZTY2YnhXaDM3NlpqckhxOGw0S1NJMjdrd1h6YlNMVnFsUURRRnJ3Q1NqVW9QTlRIMmFoSVFKVE45V0VZc3F3MlV6N0dJZE1QY0lucGhPWXRXSlNCVWw5dmlYbEhnUS9YeWZCNFBEQXNPOWlXRVhkeHhiTWdIdEpJT3JrT0Nwd3gzL2FsVWpoaWxtd0ZWQWd3UFMwZXdFeGF5TGFtU09jOEllcEpwNmtWalZpUWk5UkhocWN6VXVuMi9EUzVhRDR3eXpJY09vaS9UR3hubzFkWjByOVpNTEd4LzZpT2RiRDlZTUw5eFZ0UkRUc0RQWnhSRUxqQTdIamJyWU9kYmorVkUwS2xoMFdBL0tJNGhEQ2hWR2lsSkZDLzU0dFl6ZWNmY21pMmZTQlFiT2FBM3IrWVF6OWVFVVFuN2kzaUVCdTROMGczNDhOb2NNU0lWdm13MmZKbDFnMTRBUDZuV3pEVTgxZ0c0VTNybGRIOElFZFZ4NjFZem1iMU84aTE4c056TllQb011dUpxUk4vaEJ6cjFGK3RtQ3VPMGdHUHhEMHA1RmZFNGgvNXdpQksvVmNMVEFmeENrNWdwbzBJV01tSE9ieGcraTZGVk15RGNWVko5ZWw4R05Wd09jZG5EZEtBZWkyazBoSTc3WnpDN05GZENnaTVYckZLL21uN2cxUG01N1hrRVd3d1hIV3BrbkdjU2ZPTlFVWmZTNkt5eHR5MkQwTk9qQy9sYmhxMFB0UWJ5UjRFSUJPMWpCM1Z0dmV1RGx0aGRmTjRrYnU1a2JiNWx6Z2IySWpUOTErSHEyTlR2MWtBUmVjczNYSmIvbXJjQUpXeFY4RFNsNEtOWG9NekxYazVoeklVZnJ3ZFVxeFRDMGMxOVJueGdYamFpNGxMbFhZek9CNWpDUE5OTzJMbG9sYmVjYURCam1YTVEyYzlsVS9VWFlPNDlLWXFkNXZVc1lmQ2xER1hxMXlPK2xEMmtZTi9aT3ppczlEZjRiYzRzNjVsejBEck4wNDgrTDJ6bkErWHBZKzEwbzgxQjJmb3hkYkdjZlRxdndLMkE0THJNdXhrcG96a1ZqV1pmMnh3dGhOVHd5aVExRWhqekhxc0hEM2I2djVMZGI5aml2TlZaQ2N5NGUxby9kaVBEVGFhblRVdzBFVDdGbXlPazhTWDN4clNPeGpaWFFuSXVMY3BHMFhWa1YyZDQ2YkQ0UG45dW1McTh5OThFRHJCbHRWMmZCNXZDNU9kaVhySy9qN3BvREQ5N1N4ZjdIZWlHRWwrYnExTWV3aVgwbjlyVlNxcGxybXE4OS9rTzllRThYamVYdXY4V0xQSzZ6ckVVWk1oZFR2SkRIWm9pL3hZdThlYzk0OGIwZlNlcm9mS3M4N0VlOFp6L2lZZGprWlhUWTlub0I1MTM3RVRXK3NPYmFudy91cFphSkVQTGVRdTIzTW4rT0x6b09hMWs5N1A3WnJUN2VkSHlCNDg0OWpxQ0VISW91bVI2MTJybzQxQlN4L3h4MyttSi9tSjk4M1E1RnEyNSswM0huUEIvSjVTdmJKTDJmVm5neFRUbzFIMmx4UGhLRVVOL0c1UG05TDBONDEvbklUL1BVOGpDa1VFN3oxQUZucVRoUDlaTk5BWDUxR3ZSTjd6cFB4WG1XVTc5KzVEVXJzSDdJODA2dlg3UjNxRDVqbkx6RjR5dDQ1bSs3ZnFIWHRhRGVxWmFTYjJxSVA5TnJCamRSMVlDeG90dW9McFVQY3pKS3VYM2JkYTJ2OWM2d2VLNTNYbkVzZFlTbzRJZDFleGJWR2J2WXpWUW4vRm81NmQ5M3ZSTUtIR0dzd2J2TzBkRlg2LzFkeE9kMThQeVF3TDNBeHZPMURwNkNmN0dzTjEwSGY3NGZlZllUZ3FrUFcvMSs1QXJyRGNaSnozcDJOR3ZnN3Z1K0g4SG9PYldSaVVaVi9tNm4zNXRocFlqeEQvampsYm5XT3lZajV3THZVNnQrK3FsWDZ0Zi81WDBxbTY3dTFFZ3M2Y3UzZnA4S3RjMGNaL3YxbnIxOHZXY1A4SFJVNzlubmJtWjZ6MjdqdldiemxNem5YekRyZS82RmlvNnFUa3o1RjhVei93S25JdTZiNTE5QThtdGVqcHJINjd5Y1lyN1BnOXBoZ2Z6Ti8vSXZZVHBmNjRxemt0V2NyOFgvS1Y5TFBsL0R4KytmcnpXbE5JNnJSczI0ZnAvSDU2ZzhQdHQ0VXFQNS9FNThUTmZDdnZVMytaMWVBb1BLNzdSTmpySm1Gc2o3clgvTis1MnFDSi9IVlh6Tyt6V2UzYmxNUG5pbjhzR1BxVmhoZGZncEg3eGNlWDZoOHNGTnh3ckZNdnNFWExWUDRPN2NXcGo3MEovM0NVU0dlNUNaWmZhUGlDSndtY1VjbFlUUm5OU0Q1N2M3QjY1YUIzT0QzVEliejViYVY1UmthamVORXpRNzI3cjRQczljSjhzaVcrMmsyZitmN1NzQ2xjQzV0UzNtcW8xbTBSaTk5cHZkc2tXMjBVd3N1US9SNzVvb3NoMXJ4cldqYUY4YVhMcjVoWVgzcC9wNTEyZjdPN3Z2bTEwWkxya2hFeFozOFQvRng5L0VpNDgvaVJjZi95RmVrQXNOdWRDUUN3MjUwSkFMRGJuUWtBc051ZENRQ3cyNTBKQUxEYm5Ra0FzTnVkQ1FDdzI1MEpBTERiblFrQXNOdWRDUUN3MjUwSkFMRGJuUWtBc051ZENRQ3cyNTBKQUxEYm5Ra0FzTnVkQ1FDdzI1MEpBTERiblFrQXNOdWRDUUN3MjUwSkFMRGJuUWtBc051ZENRQ3cyNTBKQUxEYm5Ra0FzTnVkQ1FDdzI1MEpBTERiblFrQXNOdWRDUUN3MjUwSkFMRGJuUWtBc051ZEQ4RndvMFZuczR4Wk04QUFBQUFFbEZUa1N1UW1DQ1wiPjwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgIDxDb250YWluZXIgPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcjFcIiA+XHJcbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTgyNTM3NTYyNDctMWU0ZWQ5NDkxOTFiP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TjN4OFpHRnlheVV5TUdadmIyUWxNakJ3YUc5MGIyZHlZWEJvZVh4bGJud3dmSHd3Zkh3JTNEJml4bGliPXJiLTEuMi4xJnc9MTAwMCZxPTgwXCIgYWx0PVwiU25vd1wiID48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1sZWZ0XCI+R29vZCBUYXN0ZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWxlZnQxXCI+dG8gZWF0IGFuZCBkcmluazwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWxlZnQyXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIE9SREVSIE5PV1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvNC4xLjEvYW5pbWF0ZS5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBwYWdlVGl0bGU9XCJMYW5kaW5nIFBhZ2UgTmV4dGpzXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPEhlcm8gLz5cclxuICAgICAgPEZlYXR1cmUvPlxyXG4gICAgICBcclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9