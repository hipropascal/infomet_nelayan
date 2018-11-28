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

eval("module.exports = \"<div style=height:100%;display:flex;flex-direction:column> <div style=flex:1;position:relative> <div style=height:100%;width:500px;position:absolute;left:60px> <img src=/img/logo-bmkg.png style=height:60px;position:absolute;transform:translate(0,-50%);top:50%> <div style=position:absolute;background-color:#000;width:3px;height:60px;transform:translate(0,-50%);top:50%;left:60px></div> <h1 style=position:absolute;transform:translate(0,-100%);top:50%;left:75px>Sistem Monitoring</h1> <h3 style=position:absolute;transform:translate(0,-100%);top:80%;left:75px> Infomet Nelayan Sederhana </h3> </div> </div> <div style=\\\"flex-basis:30px;background-color:#0c3259;padding:0 0 0 20px;color:#fff\\\"> <div class=w3-bar> <a href=#!monitoring class=\\\"w3-bar-item w3-button w3-padding-small\\\" ng-style=\\\"{ backgroundColor: $location.path() === '/monitoring'? '#299C4C': '' }\\\"> Monitoring </a> <a href=#/! class=\\\"w3-bar-item w3-button w3-padding-small\\\" ng-style=\\\"{ backgroundColor: $location.path() === '/'? '#299C4C': '' }\\\"> Wilayah </a> <a href=#!infomet class=\\\"w3-bar-item w3-button w3-padding-small\\\" ng-style=\\\"{ backgroundColor: $location.path() === '/infomet'? '#299C4C': '' }\\\"> Infomet </a> <a href=#!data-logger class=\\\"w3-bar-item w3-button w3-padding-small\\\" ng-style=\\\"{ backgroundColor: $location.path() === '/data-logger'? '#299C4C': '' }\\\"> Data Logger </a> </div> </div> <div style=flex-basis:8px;background-color:#299c4c></div> </div>\";\n\n//# sourceURL=webpack:///./components/header-container/header-container.html?");

/***/ }),

/***/ "./components/header-container/header-container.js":
/*!*********************************************************!*\
  !*** ./components/header-container/header-container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('headerContainer', {\r\n        bindings: {\r\n        },\r\n        controller: ['$scope', '$location', class headerContainer {\r\n            constructor($scope, $location) {\r\n                this.scope = $scope;\r\n                this.scope.$location = $location;\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./header-container.html */ \"./components/header-container/header-container.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/header-container/header-container.js?");

/***/ }),

/***/ "./components/map-container/map-container.js":
/*!***************************************************!*\
  !*** ./components/map-container/map-container.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('infomet_nelayan')\r\n    .component('mapContainer', {\r\n        bindings: {\r\n            map: '='\r\n        },\r\n        controller: ['$scope', class mapContainer {\r\n            constructor($scope) {\r\n                this.scope = $scope;\r\n            }\r\n\r\n            $onInit() {\r\n                // init map\r\n                this.map = L.map('map').setView([51.505, -0.09], 13);\r\n                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n                    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n                }).addTo(this.map);\r\n\r\n                // define toolbar options\r\n                var options = {\r\n                    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'\r\n                    drawMarker: false, // adds button to draw markers\r\n                    drawPolyline: false, // adds button to draw a polyline\r\n                    drawRectangle: false, // adds button to draw a rectangle\r\n                    drawPolygon: true, // adds button to draw a polygon\r\n                    drawCircle: false, // adds button to draw a cricle\r\n                    cutPolygon: true, // adds button to cut a hole in a polygon\r\n                    editMode: true, // adds button to toggle edit mode for all layers\r\n                    removalMode: false, // adds a button to remove layers\r\n                };\r\n\r\n                // add leaflet.pm controls to the map\r\n                this.map.pm.addControls(options);\r\n            }\r\n        }]\r\n    });\n\n//# sourceURL=webpack:///./components/map-container/map-container.js?");

/***/ }),

/***/ "./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.html":
/*!*****************************************************************************************!*\
  !*** ./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=w3-modal style=z-index:99999 ng-style=\\\"{ display: $ctrl.showModalPeringatanSimpanWilayah? 'block': 'none' }\\\"> <div class=\\\"w3-modal-content w3-card-4\\\" style=width:450px> <header class=\\\"w3-container w3-blue\\\"> <span class=\\\"w3-button w3-display-topright\\\" ng-click=_noUpdateWilayah()>&times;</span> <h4>Peringatan!</h4> </header> <div class=\\\"w3-container w3-padding\\\"> Area telah diubah. Apakah wilayah ingin disimpan? </div> <footer class=\\\"w3-container w3-padding\\\"> <button class=\\\"w3-button w3-right w3-teal\\\" ng-click=\\\"_updateWilayah(); $ctrl.showModalPeringatanSimpanWilayah=false\\\">Simpan</button> </footer> </div> </div>\";\n\n//# sourceURL=webpack:///./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.html?");

/***/ }),

/***/ "./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.js":
/*!***************************************************************************************!*\
  !*** ./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('modalPeringatanSimpanWilayah', {\r\n        bindings: {\r\n            showModalPeringatanSimpanWilayah: '=',\r\n            nextPath: '=',\r\n            eventChangeWilayah: '&',\r\n            updateWilayah: '&'\r\n        },\r\n        controller: ['$scope', '$location', class modalPeringatanSimpanWilayah {\r\n            constructor($scope, $location) {\r\n                this.scope = $scope;\r\n                this.location = $location;\r\n            }\r\n\r\n            $onInit() {\r\n                this.scope._updateWilayah = () => {\r\n                    this.updateWilayah()\r\n                        .then(() => {\r\n                            if (this.nextPath) {\r\n                                this.location.path(this.nextPath);\r\n                            }\r\n                        })\r\n                        .then(() => {\r\n                            this.eventChangeWilayah();\r\n                        });\r\n                };\r\n\r\n                this.scope._noUpdateWilayah = () => {\r\n                    this.eventChangeWilayah()\r\n                        .then(() => {\r\n                            if (this.nextPath) {\r\n                                this.location.path(this.nextPath);\r\n                            }\r\n                        })\r\n                        .then(() => {\r\n                            this.showModalPeringatanSimpanWilayah = false;\r\n                        });\r\n                };\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./modal-peringatan-simpan-wilayah.html */ \"./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.js?");

/***/ }),

/***/ "./components/side-bar/side-bar.html":
/*!*******************************************!*\
  !*** ./components/side-bar/side-bar.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=w3-container style=height:100%;display:flex;flex-direction:column> <div style=flex-basis:80px;padding-top:8px> <label> <b>Wilayah:</b> </label> <select class=\\\"w3-input w3-border w3-select\\\" ng-options=\\\"o for o in wilayah\\\" ng-model=wilayahSelected ng-change=cekWilayahBerubah()></select> </div> <div style=flex:1;overflow:scroll;overflow-x:hidden ng-show=$ctrl.lastWilayah.layer> <b>Daftar Area:</b> <div style=padding-top:8px;display:flex> <div style=flex:2;display:flex> <div style=flex:1>Name</div> <div style=flex-basis:80px>Category</div> </div> <div style=flex:1></div> </div> <div style=padding-top:8px;display:flex ng-repeat=\\\"_area in area track by $index\\\"> <div class=\\\"w3-blue w3-hover-light-grey\\\" style=flex:2;display:flex ng-init=\\\"editStatus=false\\\"> <div class=w3-padding-small style=flex:1 ng-hide=editStatus ng-mouseover=highlightArea($index) ng-mouseleave=removeHighlightArea()>{{_area.properties.name}}</div> <input class=\\\"w3-input w3-border w3-padding-small\\\" type=text style=\\\"flex:1 1 auto;width:0\\\" ng-show=editStatus ng-init=\\\"properties={}\\\" ng-model=\\\"properties['name']\\\"> <div class=w3-padding-small style=flex-basis:80px ng-hide=editStatus ng-mouseover=highlightArea($index) ng-mouseleave=removeHighlightArea()>{{_area.properties.category}}</div> <select class=\\\"w3-select w3-border w3-padding-small\\\" style=flex-basis:80px ng-show=editStatus ng-model=\\\"properties['category']\\\"> <option value=hs>hs</option> <option value=hmax>hmax</option> </select> </div> <div style=flex:1;display:flex> <button class=\\\"w3-button w3-teal w3-padding-small\\\" style=flex:1 ng-click=\\\"properties={ name: _area.properties.name, category: _area.properties.category }; editStatus=true;\\\" ng-hide=editStatus>Edit</button> <button class=\\\"w3-button w3-teal w3-padding-small\\\" style=flex:1 ng-click=\\\"updateProperties($index, properties); editStatus=false;\\\" ng-show=editStatus>Simpan</button> <button class=\\\"w3-button w3-teal w3-padding-small\\\" style=flex:1 ng-click=removeArea($index)>Hapus</button> </div> </div> </div> <div style=flex-basis:30px ng-show=$ctrl.lastWilayah.layer> <button class=\\\"w3-bar w3-button w3-teal w3-padding-small\\\" ng-click=$ctrl.updateWilayah()>Simpan</button> </div> </div> <modal-peringatan-simpan-wilayah show-modal-peringatan-simpan-wilayah=$ctrl.showModalPeringatanSimpanWilayah next-path=$ctrl.nextPath event-change-wilayah=$ctrl.eventChangeWilayah() update-wilayah=$ctrl.updateWilayah()></modal-peringatan-simpan-wilayah>\";\n\n//# sourceURL=webpack:///./components/side-bar/side-bar.html?");

/***/ }),

/***/ "./components/side-bar/side-bar.js":
/*!*****************************************!*\
  !*** ./components/side-bar/side-bar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('sideBar', {\r\n        bindings: {\r\n            map: '='\r\n        },\r\n        controller: ['$scope', '$timeout', 'api', class sideBar {\r\n            constructor($scope, $timeout, api) {\r\n                this.scope = $scope;\r\n                this.timeout = $timeout;\r\n                this.api = api;\r\n            }\r\n\r\n            $onInit() {\r\n                this.api.getWilayah()\r\n                    .then((res) => {\r\n                        this.scope.wilayah = res;\r\n\r\n                        // buka geojson di list teratas\r\n                        this.scope.wilayahSelected = this.scope.wilayah[0];\r\n                        this.eventChangeWilayah();\r\n                    });\r\n\r\n                // pengolahan geojson\r\n                this.lastWilayah = {};\r\n                let clearWilayah = () => {\r\n                    this.map.eachLayer((layer) => {\r\n                        if (layer['pm'] != undefined) {\r\n                            layer.removeFrom(this.map);\r\n                        }\r\n                    });\r\n                };\r\n                this.eventChangeWilayah = () => {\r\n                    return this.api.getAreaGeoJSON(this.scope.wilayahSelected)\r\n                        .then((res) => {\r\n                            // clear last layer\r\n                            clearWilayah();\r\n\r\n                            // set layer\r\n                            this.lastWilayah['wilayah'] = this.scope.wilayahSelected;\r\n                            this.lastWilayah['layer'] = L.geoJSON(res);\r\n                            this.map.fitBounds(this.lastWilayah.layer.getBounds());\r\n                            this.lastWilayah.layer.addTo(this.map);\r\n\r\n                            // get area\r\n                            this.scope.area = res.features;\r\n\r\n                            this.lastSavedWilayah = angular.copy(this.lastWilayah);\r\n                        });\r\n                };\r\n\r\n                // pengolahan highlight\r\n                let lastHighlightArea = {};\r\n                this.scope.highlightArea = (i) => {\r\n                    lastHighlightArea = L.geoJSON(this.lastWilayah.layer.toGeoJSON().features[i]).setStyle({ fillColor: 'grey', fillOpacity: .35 });\r\n                    lastHighlightArea.addTo(this.map);\r\n                };\r\n                this.scope.removeHighlightArea = () => {\r\n                    lastHighlightArea.removeFrom(this.map);\r\n                };\r\n\r\n                // update properties\r\n                this.scope.updateProperties = (i, properties) => {\r\n                    this.scope.area[i].properties = properties;\r\n\r\n                    // update lastWilayah\r\n                    clearWilayah();\r\n                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();\r\n                    tempLayerGeoJSON.features = this.scope.area;\r\n                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);\r\n                    this.lastWilayah.layer.addTo(this.map);\r\n                };\r\n\r\n                // hapus area\r\n                this.scope.removeArea = (i) => {\r\n                    clearWilayah();\r\n                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();\r\n                    tempLayerGeoJSON.features.splice(i, 1);\r\n                    this.scope.area = tempLayerGeoJSON.features;\r\n                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);\r\n                    this.lastWilayah.layer.addTo(this.map);\r\n                };\r\n\r\n                // event saat area dibuat\r\n                this.timeout(() => {\r\n                    this.map.on('pm:create', (e) => {\r\n                        let tempNewLayerGeoJSON = e.layer.toGeoJSON();\r\n                        tempNewLayerGeoJSON.properties['name'] = 'Unnamed Shape';\r\n                        tempNewLayerGeoJSON.properties['category'] = 'hs';\r\n                        this.scope.area.push(tempNewLayerGeoJSON);\r\n                        this.scope.$apply();\r\n                    });\r\n\r\n                    this.map.on('pm:drawend', (e) => {\r\n                        let tempLayerGeoJSON = {\r\n                            type: 'FeatureCollection',\r\n                            features: []\r\n                        };\r\n                        this.map.eachLayer(function (layer) {\r\n                            if (layer['pm'] != undefined) {\r\n                                layer = layer.toGeoJSON();\r\n                                if (layer.type === 'Feature') {\r\n                                    tempLayerGeoJSON.features.push(layer);\r\n                                }\r\n                            }\r\n                        });\r\n                        tempLayerGeoJSON.features[tempLayerGeoJSON.features.length - 1].properties['name'] = 'Unnamed Shape';\r\n                        tempLayerGeoJSON.features[tempLayerGeoJSON.features.length - 1].properties['category'] = 'hs';\r\n                        this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);\r\n                        clearWilayah();\r\n                        this.lastWilayah.layer.addTo(this.map);\r\n                    });\r\n                });\r\n\r\n                // simpan update geojson\r\n                this.updateWilayah = () => {\r\n                    this.lastSavedWilayah = angular.copy(this.lastWilayah);\r\n                    return this.api.postWilayah(this.lastWilayah);\r\n                };\r\n\r\n                // cek perubahan geojson\r\n                this.scope.cekWilayahBerubah = () => {\r\n                    if (JSON.stringify(this.lastWilayah.layer.toGeoJSON()) === JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())) {\r\n                        this.eventChangeWilayah();\r\n                    } else {\r\n                        this.showModalPeringatanSimpanWilayah = true;\r\n                    }\r\n                };\r\n\r\n                this.scope.$on('$routeChangeStart', (event, next, current) => {\r\n                    if (JSON.stringify(this.lastWilayah.layer.toGeoJSON()) !== JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())) {\r\n                        // stop mekanisme route \r\n                        event.preventDefault();\r\n\r\n                        this.nextPath = next.$$route.originalPath;\r\n                        this.showModalPeringatanSimpanWilayah = true;\r\n                    }\r\n                });\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./side-bar.html */ \"./components/side-bar/side-bar.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/side-bar/side-bar.js?");

/***/ }),

/***/ "./components/table-infomet/table-infomet.html":
/*!*****************************************************!*\
  !*** ./components/table-infomet/table-infomet.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=w3-container> <p> <button class=\\\"w3-button w3-teal\\\" ng-init=\\\"showTambah=false; dataTambah={};\\\" ng-click=\\\"dataTambah={}; showTambah=true\\\">Tambah Infomet</button> </p> <table class=\\\"w3-table w3-striped\\\"> <thead> <tr class=w3-teal> <th>No</th> <th>Sistem Infomet</th> <th>Wilayah</th> <th>Service Port</th> <th>Remote Desktop</th> <th>Waktu</th> <th>Koordinat</th> <th>Cuaca</th> <th></th> </tr> </thead> <tbody> <tr ng-show=showTambah> <td></td> <td> <input class=w3-input type=text style=width:100% ng-model=\\\"dataTambah['sistem_infonet']\\\"> </td> <td> <select class=\\\"w3-input w3-border w3-select\\\" style=width:100% ng-model=\\\"dataTambah['wilayah']\\\" ng-options=\\\"o for o in wilayah\\\"></select> </td> <td> <input class=w3-input type=number style=width:100% ng-model=\\\"dataTambah['service_port']\\\"> </td> <td> <input class=w3-input type=text style=width:100% ng-model=\\\"dataTambah['remote_desktop']\\\"> </td> <td> <input class=w3-input type=text style=width:100% ng-model=\\\"dataTambah['waktu']\\\"> </td> <td style=max-width:220px;padding-top:0> <div style=display:flex> <div style=flex:1> <label class=w3-tiny>Lat:</label> <input class=\\\"w3-input w3-padding-small\\\" type=text style=width:100% ng-model=\\\"dataTambah['koordinat']['lat']\\\"> </div> <div style=flex:1> <label class=w3-tiny>Lon:</label> <input class=\\\"w3-input w3-padding-small\\\" type=text style=width:100% ng-model=\\\"dataTambah['koordinat']['lon']\\\"> </div> </div> </td> <td> <select class=\\\"w3-input w3-border w3-select\\\" style=width:100% ng-model=\\\"dataTambah['cuaca']\\\" ng-options=\\\"o.wilayah for o in wilayahPelayaran\\\"></select> </td> <td style=min-width:150px;text-align:center;vertical-align:middle> <button class=\\\"w3-button w3-small w3-padding-small w3-blue\\\" ng-click=\\\"tambah(dataTambah); showTambah=false\\\">Simpan</button> <button class=\\\"w3-button w3-small w3-padding-small w3-blue\\\" ng-click=\\\"showTambah=false\\\">Batal</button> </td> </tr> <tr ng-repeat=\\\"_data in data track by $index\\\"> <td>{{$index+1}}</td> <td> <div ng-hide=editStatus> {{_data.sistem_infonet}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.sistem_infonet> </div> </td> <td> <div ng-hide=editStatus> {{_data.wilayah}} </div> <div ng-show=editStatus> <select class=\\\"w3-input w3-border w3-select\\\" style=width:100% ng-model=tempData.wilayah ng-options=\\\"o for o in wilayah\\\"></select> </div> </td> <td> <div ng-hide=editStatus> {{_data.service_port}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.service_port> </div> </td> <td> <div ng-hide=editStatus> {{_data.remote_desktop}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.remote_desktop> </div> </td> <td> <div ng-hide=editStatus> {{_data.waktu}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.waktu> </div> </td> <td style=max-width:220px ng-style=\\\"{paddingTop: editStatus? '0px': ''}\\\"> <div ng-hide=editStatus> {{_data.koordinat.lat}}, {{_data.koordinat.lon}} </div> <div style=display:flex ng-show=editStatus> <div style=flex:1> <label class=w3-tiny>Lat:</label> <input class=\\\"w3-input w3-padding-small\\\" type=text style=width:100% ng-model=tempData.koordinat.lat> </div> <div style=flex:1> <label class=w3-tiny>Lon:</label> <input class=\\\"w3-input w3-padding-small\\\" type=text style=width:100% ng-model=tempData.koordinat.lon> </div> </div> </td> <td> <div ng-hide=editStatus> {{_data.cuaca.wilayah}} </div> <div ng-show=editStatus> <select class=\\\"w3-input w3-border w3-select\\\" style=width:100% ng-model=tempData.cuaca ng-options=\\\"o.wilayah for o in wilayahPelayaran\\\"></select> </div> </td> <td style=min-width:150px;text-align:center;vertical-align:middle> <div ng-hide=editStatus> <button class=\\\"w3-button w3-small w3-padding-small w3-blue\\\" ng-init=\\\"editStatus=false; tempData={}\\\" ng-click=\\\"tempData=_data; editStatus=true;\\\">Edit</button> <button class=\\\"w3-button w3-small w3-padding-small w3-blue\\\" ng-click=\\\"data.splice($index, 1)\\\">Hapus</button> </div> <div ng-show=editStatus> <button class=\\\"w3-button w3-small w3-padding-small w3-blue\\\" ng-click=\\\"_data[$index]=tempData; editStatus=false;\\\">Simpan</button> </div> </td> </tr> </tbody> </table> </div>\";\n\n//# sourceURL=webpack:///./components/table-infomet/table-infomet.html?");

/***/ }),

/***/ "./components/table-infomet/table-infomet.js":
/*!***************************************************!*\
  !*** ./components/table-infomet/table-infomet.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan')\r\n    .component('tableInfomet', {\r\n        controller: ['$scope', 'api', class tableInfomet {\r\n            constructor($scope, api) {\r\n                this.scope = $scope;\r\n                this.api = api;\r\n            }\r\n\r\n            $onInit() {\r\n                this.scope.data = [];\r\n                // this.scope.data = [\r\n                //     {\r\n                //         sistem_infonet: 'Tes',\r\n                //         wilayah: 'Jawa Selatan',\r\n                //         service_port: 8000,\r\n                //         remote_desktop: 'tes',\r\n                //         waktu: 'WIB',\r\n                //         koordinat: {\r\n                //             lat: 0,\r\n                //             lon: 0\r\n                //         },\r\n                //         cuaca: {\r\n                //             kode: 'A.01',\r\n                //             wilayah: 'Selat Malaka bagian utara'\r\n                //         }\r\n                //     }\r\n                // ];\r\n\r\n                this.api.getWilayahPelayaran()\r\n                    .then((res) => {\r\n                        this.scope.wilayahPelayaran = res;\r\n                    });\r\n\r\n                this.api.getWilayah()\r\n                    .then((res) => {\r\n                        this.scope.wilayah = res;\r\n                    });\r\n\r\n                this.scope.tambah = (data) => {\r\n                    console.log(data)\r\n                    this.scope.data.push(data);\r\n                };\r\n            }\r\n        }],\r\n        template: __webpack_require__(/*! ./table-infomet.html */ \"./components/table-infomet/table-infomet.html\")\r\n    });\n\n//# sourceURL=webpack:///./components/table-infomet/table-infomet.js?");

/***/ }),

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('infomet_nelayan')\r\n    .service('api', ['$http', '$q', class api {\r\n        constructor($http, $q) {\r\n            this.http = $http;\r\n            this.q = $q;\r\n            this.urlServer = '';\r\n        }\r\n\r\n        getWilayah() {\r\n            let q = this.q.defer();\r\n            this.http.get(`${this.urlServer}/api/get_wilayah/`, { headers: { 'Cache-Control': 'no-cache' } })\r\n                .then((res) => {\r\n                    res = res.data.geojson;\r\n                    q.resolve(res);\r\n                })\r\n            return q.promise;\r\n        }\r\n\r\n        getAreaGeoJSON(area) {\r\n            let q = this.q.defer();\r\n            this.http.get(`${this.urlServer}/api/get_area_geojson/${area}`, { headers: { 'Cache-Control': 'no-cache' } })\r\n                .then((res) => {\r\n                    res = res.data;\r\n                    q.resolve(res);\r\n                })\r\n            return q.promise;\r\n        }\r\n\r\n        postWilayah(lastWilayah) {\r\n            let fd = new FormData(),\r\n                blob = new Blob([angular.toJson(lastWilayah.layer.toGeoJSON())], { type: 'application/json' }),\r\n                q = this.q.defer();\r\n            fd.append('geojson', blob);\r\n            this.http({\r\n                url: `${this.urlServer}/api/post_wilayah/${lastWilayah.wilayah}`,\r\n                method: 'POST',\r\n                data: fd,\r\n                headers: { 'Content-Type': undefined },\r\n                transformRequest: angular.identity\r\n            })\r\n                .then((res) => {\r\n                    res = res.data;\r\n                    q.resolve(res);\r\n                });\r\n            return q.promise;\r\n        }\r\n\r\n        getWilayahPelayaran() {\r\n            let q = this.q.defer();\r\n            this.http.get(`${this.urlServer}/api/get_wilayah_pelayaran/`)\r\n                .then((res) => {\r\n                    res = res.data;\r\n                    q.resolve(res);\r\n                })\r\n            return q.promise;\r\n        }\r\n    }]);\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("angular.module('infomet_nelayan', ['ngRoute'])\r\n    .config(['$routeProvider', function ($routeProvider) {\r\n        $routeProvider\r\n            .when('/', {\r\n                template: `\r\n                <div style=\"height: 100%; display: flex;\">\r\n                    <side-bar style=\"flex-basis: 500px;\" map=\"$ctrl.map\"></side-bar>\r\n                    <map-container style=\"flex: 1;\" id=\"map\" map=\"$ctrl.map\"></map-container>\r\n                </div>\r\n                `\r\n            })\r\n            .when('/monitoring', {\r\n                template: `\r\n                <div style=\"height: 100%; background-color: yellow;\">\r\n                    monitoring\r\n                </div>\r\n                `\r\n            })\r\n            .when('/infomet', {\r\n                template: `\r\n                <div style=\"height: 100%;\">\r\n                    <table-infomet></table-infomet>\r\n                </div>\r\n                `\r\n            })\r\n            .when('/data-logger', {\r\n                template: `\r\n                <div style=\"height: 100%; background-color: yellow;\">\r\n                    data-logger\r\n                </div>\r\n                `\r\n            });\r\n    }]);\r\n__webpack_require__(/*! ./api */ \"./js/api.js\");\r\n__webpack_require__(/*! ../components/header-container/header-container */ \"./components/header-container/header-container.js\");\r\n__webpack_require__(/*! ../components/map-container/map-container */ \"./components/map-container/map-container.js\");\r\n__webpack_require__(/*! ../components/side-bar/side-bar */ \"./components/side-bar/side-bar.js\");\r\n__webpack_require__(/*! ../components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah */ \"./components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah.js\");\r\n__webpack_require__(/*! ../components/table-infomet/table-infomet */ \"./components/table-infomet/table-infomet.js\");\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });