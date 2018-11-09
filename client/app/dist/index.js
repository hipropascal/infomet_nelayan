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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header-container/header-container.html":
/*!***********************************************************!*\
  !*** ./components/header-container/header-container.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=height:100%;display:flex;flex-direction:column> <div style=flex:1;position:relative> <div style=height:100%;width:500px;position:absolute;left:60px> <img src=/img/logo-bmkg.png style=height:60px;position:absolute;transform:translate(0,-50%);top:50%> <div style=position:absolute;background-color:#000;width:3px;height:60px;transform:translate(0,-50%);top:50%;left:60px></div> <h1 style=position:absolute;transform:translate(0,-100%);top:50%;left:75px>Sistem Monitoring</h1> <h3 style=position:absolute;transform:translate(0,-100%);top:80%;left:75px> Infomet Nelayan Sederhana </h3> </div> </div> <div style=\\\"flex-basis:30px;background-color:#0c3259;padding:0 0 0 20px;color:#fff\\\"> <div class=w3-bar> <button class=\\\"w3-bar-item w3-button w3-padding-small\\\">Monitoring</button> <button class=\\\"w3-bar-item w3-button w3-padding-small\\\">Wilayah</button> <button class=\\\"w3-bar-item w3-button w3-padding-small\\\">Infomet</button> <button class=\\\"w3-bar-item w3-button w3-padding-small\\\">Data Logger</button> </div> </div> <div style=flex-basis:8px;background-color:#299c4c></div> </div>\";\n\n//# sourceURL=webpack:///./components/header-container/header-container.html?");

/***/ }),

/***/ "./components/header-container/header-container.js":
/*!*********************************************************!*\
  !*** ./components/header-container/header-container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('headerContainer', {\r\n        bindings: {\r\n        },\r\n        controller: ['$scope', class headerContainer {\r\n            constructor($scope) {\r\n                this.scope = $scope;\r\n            }\r\n\r\n            $onInit() {\r\n\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./header-container.html */ \"./components/header-container/header-container.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/header-container/header-container.js?");

/***/ }),

/***/ "./components/map-container/map-container.js":
/*!***************************************************!*\
  !*** ./components/map-container/map-container.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('infomet_nelayan')\r\n    .component('mapContainer', {\r\n        bindings: {\r\n            map: '='\r\n        },\r\n        controller: ['$scope', class mapContainer {\r\n            constructor($scope) {\r\n                this.scope = $scope;\r\n            }\r\n\r\n            $onInit() {\r\n                // init map\r\n                this.map = L.map('map').setView([51.505, -0.09], 13);\r\n                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n                    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n                }).addTo(this.map);\r\n\r\n                // define toolbar options\r\n                var options = {\r\n                    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'\r\n                    drawMarker: false, // adds button to draw markers\r\n                    drawPolyline: false, // adds button to draw a polyline\r\n                    drawRectangle: false, // adds button to draw a rectangle\r\n                    drawPolygon: true, // adds button to draw a polygon\r\n                    drawCircle: false, // adds button to draw a cricle\r\n                    cutPolygon: true, // adds button to cut a hole in a polygon\r\n                    editMode: true, // adds button to toggle edit mode for all layers\r\n                    removalMode: true, // adds a button to remove layers\r\n                };\r\n\r\n                // add leaflet.pm controls to the map\r\n                this.map.pm.addControls(options);\r\n            }\r\n        }]\r\n    });\n\n//# sourceURL=webpack:///./components/map-container/map-container.js?");

/***/ }),

/***/ "./components/modal-edit-wilayah/modal-edit-wilayah.html":
/*!***************************************************************!*\
  !*** ./components/modal-edit-wilayah/modal-edit-wilayah.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-show=$ctrl.showModalEditWilayah> <div class=w3-modal ng-style=\\\"{ display: $ctrl.showModalEditWilayah? 'block': 'none' }\\\" style=z-index:99999999> <div class=\\\"w3-modal-content w3-card-4 w3-animate-zoom\\\" style=max-width:600px> <div class=w3-center> <br> <span class=\\\"w3-button w3-xlarge w3-hover-red w3-display-topright\\\" title=\\\"Close Modal\\\" ng-click=\\\"$ctrl.showModalEditWilayah=false\\\">&times;</span> <h3>Edit Wilayah</h3> </div> <div class=w3-container> <div class=w3-section> <label> <b>Nama Wilayah</b> </label> <input class=\\\"w3-input w3-border w3-margin-bottom\\\" type=text> <button class=\\\"w3-button w3-block w3-light-grey w3-section w3-padding\\\" type=submit ng-click=\\\"$ctrl.showModalEditWilayah=false;\\\">Simpan</button> </div> </div> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./components/modal-edit-wilayah/modal-edit-wilayah.html?");

/***/ }),

/***/ "./components/modal-edit-wilayah/modal-edit-wilayah.js":
/*!*************************************************************!*\
  !*** ./components/modal-edit-wilayah/modal-edit-wilayah.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('modalEditWilayah', {\r\n        bindings: {\r\n            showModalEditWilayah: '='\r\n        },\r\n        controller: ['$scope', class modalEditWilayah {\r\n            constructor($scope) {\r\n                this.scope = $scope;\r\n            }\r\n\r\n            $onInit() {\r\n\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./modal-edit-wilayah.html */ \"./components/modal-edit-wilayah/modal-edit-wilayah.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/modal-edit-wilayah/modal-edit-wilayah.js?");

/***/ }),

/***/ "./components/modal-tambah-wilayah/modal-tambah-wilayah.html":
/*!*******************************************************************!*\
  !*** ./components/modal-tambah-wilayah/modal-tambah-wilayah.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-show=$ctrl.showModalTambahWilayah> <div class=w3-modal ng-style=\\\"{ display: $ctrl.showModalTambahWilayah? 'block': 'none' }\\\" style=z-index:99999999> <div class=\\\"w3-modal-content w3-card-4 w3-animate-zoom\\\" style=max-width:600px> <div class=w3-center> <br> <span class=\\\"w3-button w3-xlarge w3-hover-red w3-display-topright\\\" title=\\\"Close Modal\\\" ng-click=\\\"$ctrl.showModalTambahWilayah=false\\\">&times;</span> <h3>Tambah Wilayah</h3> </div> <div class=w3-container> <div class=w3-section> <label> <b>Nama Wilayah</b> </label> <input class=\\\"w3-input w3-border w3-margin-bottom\\\" type=text ng-model=wilayah> <button class=\\\"w3-button w3-block w3-light-grey w3-section w3-padding\\\" type=submit ng-click=\\\"tambahWilayah(wilayah); $ctrl.showModalTambahWilayah=false;\\\">Simpan</button> </div> </div> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./components/modal-tambah-wilayah/modal-tambah-wilayah.html?");

/***/ }),

/***/ "./components/modal-tambah-wilayah/modal-tambah-wilayah.js":
/*!*****************************************************************!*\
  !*** ./components/modal-tambah-wilayah/modal-tambah-wilayah.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('modalTambahWilayah', {\r\n        bindings: {\r\n            showModalTambahWilayah: '=',\r\n            wilayah: '='\r\n        },\r\n        controller: ['$scope', 'api', class modalTambahWilayah {\r\n            constructor($scope, api) {\r\n                this.scope = $scope;\r\n                this.api = api;\r\n            }\r\n\r\n            $onInit() {\r\n                this.scope.tambahWilayah = (wilayah) => {\r\n                    this.api.postWilayah(wilayah)\r\n                        .then((res) => {\r\n                            console.log(res);\r\n                        });\r\n                };\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./modal-tambah-wilayah.html */ \"./components/modal-tambah-wilayah/modal-tambah-wilayah.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/modal-tambah-wilayah/modal-tambah-wilayah.js?");

/***/ }),

/***/ "./components/side-bar/side-bar.html":
/*!*******************************************!*\
  !*** ./components/side-bar/side-bar.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>.w3-panel-costom{padding:.01em 16px;margin-top:8px!important}</style> <div class=w3-container style=padding-top:8px> Tambah Wilayah <button class=\\\"w3-button w3-padding-small w3-teal\\\" ng-click=\\\"$ctrl.showModalTambahWilayah=true\\\">+</button> <div ng-repeat=\\\"_wilayah in wilayah\\\"> <div class=w3-bar style=display:flex;padding-top:8px> <button class=\\\"w3-bar-item w3-button w3-padding-small w3-blue\\\" style=flex:4 ng-click=selectWilayah(_wilayah)>{{_wilayah}}</button> <button class=\\\"w3-bar-item w3-button w3-padding-small w3-teal\\\" style=flex:1 ng-click=\\\"$ctrl.showModalEditWilayah=true\\\">Edit</button> <button class=\\\"w3-bar-item w3-button w3-padding-small w3-teal\\\" style=flex:1>Hapus</button> </div> </div> </div> <modal-tambah-wilayah show-modal-tambah-wilayah=$ctrl.showModalTambahWilayah wilayah=wilayah></modal-tambah-wilayah> <modal-edit-wilayah show-modal-edit-wilayah=$ctrl.showModalEditWilayah wilayah=wilayah></modal-edit-wilayah>\";\n\n//# sourceURL=webpack:///./components/side-bar/side-bar.html?");

/***/ }),

/***/ "./components/side-bar/side-bar.js":
/*!*****************************************!*\
  !*** ./components/side-bar/side-bar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('sideBar', {\r\n        bindings: {\r\n            map: '=',\r\n            lastLayer: '='\r\n        },\r\n        controller: ['$scope', 'api', class sideBar {\r\n            constructor($scope, api) {\r\n                this.scope = $scope;\r\n                this.api = api;\r\n            }\r\n\r\n            $onInit() {\r\n                this.scope.simpan = () => {\r\n                    let res = {\r\n                        type: 'FeatureCollection',\r\n                        features: []\r\n                    };\r\n\r\n                    this.map.eachLayer(function (layer) {\r\n                        if (layer['pm'] != undefined) {\r\n                            layer = layer.toGeoJSON();\r\n                            if (layer.type === 'Feature') {\r\n                                res.features.push(layer);\r\n                            }\r\n                        }\r\n                    });\r\n\r\n                    if (res.features.length != 0) {\r\n                        console.log('menuContainer simpan', res);\r\n                    }\r\n                };\r\n\r\n                this.api.getWilayah()\r\n                    .then((res) => {\r\n                        this.scope.wilayah = res;\r\n                    });\r\n\r\n                this.scope.selectWilayah = (wilayah) => {\r\n                    this.api.getAreaGeoJSON(wilayah)\r\n                        .then((res) => {\r\n                            if (typeof (this.lastLayer.layer) !== 'undefined') {\r\n                                this.lastLayer.layer.removeFrom(this.map);\r\n                            }\r\n                            this.lastLayer['wilayah'] = wilayah;\r\n                            this.lastLayer['layer'] = L.geoJSON(res);\r\n                            this.map.fitBounds(this.lastLayer.layer.getBounds());\r\n                            this.lastLayer.layer.addTo(this.map);\r\n\r\n                            console.log(res, this.lastLayer.layer.toGeoJSON());\r\n                        });\r\n                };\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./side-bar.html */ \"./components/side-bar/side-bar.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/side-bar/side-bar.js?");

/***/ }),

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('infomet_nelayan')\r\n    .service('api', ['$http', '$q', class api {\r\n        constructor($http, $q) {\r\n            this.http = $http;\r\n            this.q = $q;\r\n            this.urlServer = '';\r\n        }\r\n\r\n        getWilayah() {\r\n            let q = this.q.defer();\r\n            this.http.get(`${this.urlServer}/api/get_wilayah/`)\r\n                .then((res) => {\r\n                    res = res.data.wilayah;\r\n                    q.resolve(res);\r\n                })\r\n            return q.promise;\r\n        }\r\n\r\n        getAreaGeoJSON(area) {\r\n            let q = this.q.defer();\r\n            this.http.get(`${this.urlServer}/api/get_area_geojson/${area}`)\r\n                .then((res) => {\r\n                    res = res.data;\r\n                    q.resolve(res);\r\n                })\r\n            return q.promise;\r\n        }\r\n\r\n        postWilayah(wilayah) {\r\n            const templateGeoJSON = {\r\n                type: 'FeatureCollection',\r\n                features: []\r\n            };\r\n            let q = this.q.defer();\r\n            // this.http.post(`${this.urlServer}/api/post_wilayah/${wilayah}?geojson=${JSON.stringify(templateGeoJSON)}`)\r\n            //     .then((res) => {\r\n            //         res = res.data;\r\n            //         q.resolve(res);\r\n            //     });\r\n            this.http({\r\n                method: 'POST',\r\n                url: `${this.urlServer}/api/post_wilayah/${wilayah}`,\r\n                dataType: 'json',\r\n                geojson: JSON.stringify(templateGeoJSON),\r\n                headers: { \"Content-Type\": \"application/json\" }\r\n            })\r\n                .then((res) => {\r\n                    res = res.data;\r\n                    q.resolve(res);\r\n                });\r\n            return q.promise;\r\n        }\r\n    }]);\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan', []);\r\n__webpack_require__(/*! ./api */ \"./js/api.js\");\r\n__webpack_require__(/*! ../components/header-container/header-container */ \"./components/header-container/header-container.js\");\r\n__webpack_require__(/*! ../components/map-container/map-container */ \"./components/map-container/map-container.js\");\r\n__webpack_require__(/*! ../components/side-bar/side-bar */ \"./components/side-bar/side-bar.js\");\r\n__webpack_require__(/*! ../components/modal-tambah-wilayah/modal-tambah-wilayah */ \"./components/modal-tambah-wilayah/modal-tambah-wilayah.js\");\r\n__webpack_require__(/*! ../components/modal-edit-wilayah/modal-edit-wilayah */ \"./components/modal-edit-wilayah/modal-edit-wilayah.js\");\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });