!function(t){var a={};function e(i){if(a[i])return a[i].exports;var l=a[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var l in t)e.d(i,l,function(a){return t[a]}.bind(null,l));return i},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=0)}([function(t,a,e){angular.module("infomet_nelayan",["ngRoute"]).config(["$routeProvider",function(t){t.when("/",{template:'\n                <div style="height: 100%; display: flex;">\n                    <side-bar style="flex-basis: 500px;" map="$ctrl.map"></side-bar>\n                    <map-container style="flex: 1;" id="map" map="$ctrl.map"></map-container>\n                </div>\n                '}).when("/monitoring",{template:'\n                <div style="height: 100%; background-color: yellow;">\n                    monitoring\n                </div>\n                '}).when("/infomet",{template:'\n                <div style="height: 100%;">\n                    <table-infomet></table-infomet>\n                </div>\n                '}).when("/data-logger",{template:'\n                <div style="height: 100%; background-color: yellow;">\n                    data-logger\n                </div>\n                '})}]),e(1),e(2),e(4),e(5),e(7),e(9)},function(t,a){angular.module("infomet_nelayan").service("api",["$http","$q",class{constructor(t,a){this.http=t,this.q=a,this.urlServer=""}getWilayah(){let t=this.q.defer();return this.http.get(`${this.urlServer}/api/get_wilayah/`,{headers:{"Cache-Control":"no-cache"}}).then(a=>{a=a.data.wilayah,t.resolve(a)}),t.promise}getAreaGeoJSON(t){let a=this.q.defer();return this.http.get(`${this.urlServer}/api/get_area_geojson/${t}`,{headers:{"Cache-Control":"no-cache"}}).then(t=>{t=t.data,a.resolve(t)}),a.promise}postWilayah(t){let a=new FormData,e=new Blob([angular.toJson(t.layer.toGeoJSON())],{type:"application/json"}),i=this.q.defer();return a.append("geojson",e),this.http({url:`${this.urlServer}/api/post_wilayah/${t.wilayah}`,method:"POST",data:a,headers:{"Content-Type":void 0},transformRequest:angular.identity}).then(t=>{t=t.data,i.resolve(t)}),i.promise}}])},function(t,a,e){angular.module("infomet_nelayan").component("headerContainer",{bindings:{},controller:["$scope","$location",class{constructor(t,a){this.scope=t,this.scope.$location=a}}],template:e(3)})},function(t,a){t.exports="<div style=height:100%;display:flex;flex-direction:column> <div style=flex:1;position:relative> <div style=height:100%;width:500px;position:absolute;left:60px> <img src=/img/logo-bmkg.png style=height:60px;position:absolute;transform:translate(0,-50%);top:50%> <div style=position:absolute;background-color:#000;width:3px;height:60px;transform:translate(0,-50%);top:50%;left:60px></div> <h1 style=position:absolute;transform:translate(0,-100%);top:50%;left:75px>Sistem Monitoring</h1> <h3 style=position:absolute;transform:translate(0,-100%);top:80%;left:75px> Infomet Nelayan Sederhana </h3> </div> </div> <div style=\"flex-basis:30px;background-color:#0c3259;padding:0 0 0 20px;color:#fff\"> <div class=w3-bar> <a href=#!monitoring class=\"w3-bar-item w3-button w3-padding-small\" ng-style=\"{ backgroundColor: $location.path() === '/monitoring'? '#299C4C': '' }\"> Monitoring </a> <a href=#/! class=\"w3-bar-item w3-button w3-padding-small\" ng-style=\"{ backgroundColor: $location.path() === '/'? '#299C4C': '' }\"> Wilayah </a> <a href=#!infomet class=\"w3-bar-item w3-button w3-padding-small\" ng-style=\"{ backgroundColor: $location.path() === '/infomet'? '#299C4C': '' }\"> Infomet </a> <a href=#!data-logger class=\"w3-bar-item w3-button w3-padding-small\" ng-style=\"{ backgroundColor: $location.path() === '/data-logger'? '#299C4C': '' }\"> Data Logger </a> </div> </div> <div style=flex-basis:8px;background-color:#299c4c></div> </div>"},function(t,a){angular.module("infomet_nelayan").component("mapContainer",{bindings:{map:"="},controller:["$scope",class{constructor(t){this.scope=t}$onInit(){this.map=L.map("map").setView([51.505,-.09],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);this.map.pm.addControls({position:"topleft",drawMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!0,drawCircle:!1,cutPolygon:!0,editMode:!0,removalMode:!1})}}]})},function(t,a,e){angular.module("infomet_nelayan").component("sideBar",{bindings:{map:"="},controller:["$scope","$timeout","api",class{constructor(t,a,e){this.scope=t,this.timeout=a,this.api=e}$onInit(){this.api.getWilayah().then(t=>{this.scope.wilayah=t,this.scope.wilayahSelected=this.scope.wilayah[0],this.eventChangeWilayah()}),this.lastWilayah={};let t=()=>{this.map.eachLayer(t=>{void 0!=t.pm&&t.removeFrom(this.map)})};this.eventChangeWilayah=(()=>this.api.getAreaGeoJSON(this.scope.wilayahSelected).then(a=>{t(),this.lastWilayah.wilayah=this.scope.wilayahSelected,this.lastWilayah.layer=L.geoJSON(a),this.map.fitBounds(this.lastWilayah.layer.getBounds()),this.lastWilayah.layer.addTo(this.map),this.scope.area=a.features,this.lastSavedWilayah=angular.copy(this.lastWilayah)}));let a={};this.scope.highlightArea=(t=>{(a=L.geoJSON(this.lastWilayah.layer.toGeoJSON().features[t]).setStyle({fillColor:"grey",fillOpacity:.35})).addTo(this.map)}),this.scope.removeHighlightArea=(()=>{a.removeFrom(this.map)}),this.scope.updateProperties=((a,e)=>{this.scope.area[a].properties=e,t();let i=this.lastWilayah.layer.toGeoJSON();i.features=this.scope.area,this.lastWilayah.layer=L.geoJSON(i),this.lastWilayah.layer.addTo(this.map)}),this.scope.removeArea=(a=>{t();let e=this.lastWilayah.layer.toGeoJSON();e.features.splice(a,1),this.scope.area=e.features,this.lastWilayah.layer=L.geoJSON(e),this.lastWilayah.layer.addTo(this.map)}),this.timeout(()=>{this.map.on("pm:create",t=>{let a=t.layer.toGeoJSON();a.properties.name="Unnamed Shape",a.properties.category="hs",this.scope.area.push(a),this.scope.$apply()}),this.map.on("pm:drawend",a=>{let e={type:"FeatureCollection",features:[]};this.map.eachLayer(function(t){void 0!=t.pm&&"Feature"===(t=t.toGeoJSON()).type&&e.features.push(t)}),e.features[e.features.length-1].properties.name="Unnamed Shape",e.features[e.features.length-1].properties.category="hs",this.lastWilayah.layer=L.geoJSON(e),t(),this.lastWilayah.layer.addTo(this.map)})}),this.updateWilayah=(()=>(this.lastSavedWilayah=angular.copy(this.lastWilayah),this.api.postWilayah(this.lastWilayah))),this.scope.cekWilayahBerubah=(()=>{JSON.stringify(this.lastWilayah.layer.toGeoJSON())===JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())?this.eventChangeWilayah():this.showModalPeringatanSimpanWilayah=!0}),this.scope.$on("$routeChangeStart",(t,a,e)=>{JSON.stringify(this.lastWilayah.layer.toGeoJSON())!==JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())&&(t.preventDefault(),this.nextPath=a.$$route.originalPath,this.showModalPeringatanSimpanWilayah=!0)})}}],template:e(6)})},function(t,a){t.exports='<div class=w3-container style=height:100%;display:flex;flex-direction:column> <div style=flex-basis:80px;padding-top:8px> <label> <b>Wilayah:</b> </label> <select class="w3-input w3-border w3-select" ng-options="o for o in wilayah" ng-model=wilayahSelected ng-change=cekWilayahBerubah()></select> </div> <div style=flex:1;overflow:scroll;overflow-x:hidden ng-show=$ctrl.lastWilayah.layer> <b>Daftar Area:</b> <div style=padding-top:8px;display:flex> <div style=flex:2;display:flex> <div style=flex:1>Name</div> <div style=flex-basis:80px>Category</div> </div> <div style=flex:1></div> </div> <div style=padding-top:8px;display:flex ng-repeat="_area in area track by $index"> <div class="w3-blue w3-hover-light-grey" style=flex:2;display:flex ng-init="editStatus=false"> <div class=w3-padding-small style=flex:1 ng-hide=editStatus ng-mouseover=highlightArea($index) ng-mouseleave=removeHighlightArea()>{{_area.properties.name}}</div> <input class="w3-input w3-border w3-padding-small" type=text style="flex:1 1 auto;width:0" ng-show=editStatus ng-init="properties={}" ng-model="properties[\'name\']"> <div class=w3-padding-small style=flex-basis:80px ng-hide=editStatus ng-mouseover=highlightArea($index) ng-mouseleave=removeHighlightArea()>{{_area.properties.category}}</div> <select class="w3-select w3-border w3-padding-small" style=flex-basis:80px ng-show=editStatus ng-model="properties[\'category\']"> <option value=hs>hs</option> <option value=hmax>hmax</option> </select> </div> <div style=flex:1;display:flex> <button class="w3-button w3-teal w3-padding-small" style=flex:1 ng-click="properties={ name: _area.properties.name, category: _area.properties.category }; editStatus=true;" ng-hide=editStatus>Edit</button> <button class="w3-button w3-teal w3-padding-small" style=flex:1 ng-click="updateProperties($index, properties); editStatus=false;" ng-show=editStatus>Simpan</button> <button class="w3-button w3-teal w3-padding-small" style=flex:1 ng-click=removeArea($index)>Hapus</button> </div> </div> </div> <div style=flex-basis:30px ng-show=$ctrl.lastWilayah.layer> <button class="w3-bar w3-button w3-teal w3-padding-small" ng-click=$ctrl.updateWilayah()>Simpan</button> </div> </div> <modal-peringatan-simpan-wilayah show-modal-peringatan-simpan-wilayah=$ctrl.showModalPeringatanSimpanWilayah next-path=$ctrl.nextPath event-change-wilayah=$ctrl.eventChangeWilayah() update-wilayah=$ctrl.updateWilayah()></modal-peringatan-simpan-wilayah>'},function(t,a,e){angular.module("infomet_nelayan").component("modalPeringatanSimpanWilayah",{bindings:{showModalPeringatanSimpanWilayah:"=",nextPath:"=",eventChangeWilayah:"&",updateWilayah:"&"},controller:["$scope","$location",class{constructor(t,a){this.scope=t,this.location=a}$onInit(){this.scope._updateWilayah=(()=>{this.updateWilayah().then(()=>{this.nextPath&&this.location.path(this.nextPath)}).then(()=>{this.eventChangeWilayah()})}),this.scope._noUpdateWilayah=(()=>{this.eventChangeWilayah().then(()=>{this.nextPath&&this.location.path(this.nextPath)}).then(()=>{this.showModalPeringatanSimpanWilayah=!1})})}}],template:e(8)})},function(t,a){t.exports='<div class=w3-modal style=z-index:99999 ng-style="{ display: $ctrl.showModalPeringatanSimpanWilayah? \'block\': \'none\' }"> <div class="w3-modal-content w3-card-4" style=width:450px> <header class="w3-container w3-blue"> <span class="w3-button w3-display-topright" ng-click=_noUpdateWilayah()>&times;</span> <h4>Peringatan!</h4> </header> <div class="w3-container w3-padding"> Area telah diubah. Apakah wilayah ingin disimpan? </div> <footer class="w3-container w3-padding"> <button class="w3-button w3-right w3-teal" ng-click="_updateWilayah(); $ctrl.showModalPeringatanSimpanWilayah=false">Simpan</button> </footer> </div> </div>'},function(t,a,e){angular.module("infomet_nelayan").component("tableInfomet",{controller:["$scope",class{constructor(t){this.scope=t}$onInit(){this.scope.data=[{sistem_infonet:"Tes",wilayah:"Jawa Selatan",service_port:8e3,remote_desktop:"tes",waktu:"WIB",koordinat:{lat:0,lon:0},cuaca:"Denpasar"}],this.scope.tambah=(t=>{this.scope.data.push(t)})}}],template:e(10)})},function(t,a){t.exports='<div class=w3-container> <p> <button class="w3-button w3-teal" ng-init="showTambah=false; dataTambah={};" ng-click="dataTambah={}; showTambah=true">Tambah Infomet</button> </p> <table class="w3-table w3-striped"> <thead> <tr class=w3-teal> <th>No</th> <th>Sistem Infomet</th> <th>Wilayah</th> <th>Service Port</th> <th>Remote Desktop</th> <th>Waktu</th> <th>Koordinat</th> <th>Cuaca</th> <th></th> </tr> </thead> <tbody> <tr ng-show=showTambah> <td></td> <td> <input class=w3-input type=text style=width:100% ng-model="dataTambah[\'sistem_infonet\']"> </td> <td> <input class=w3-input type=text style=width:100% ng-model="dataTambah[\'wilayah\']"> </td> <td> <input class=w3-input type=number style=width:100% ng-model="dataTambah[\'service_port\']"> </td> <td> <input class=w3-input type=text style=width:100% ng-model="dataTambah[\'remote_desktop\']"> </td> <td> <input class=w3-input type=text style=width:100% ng-model="dataTambah[\'waktu\']"> </td> <td style=max-width:220px;padding-top:0> <div style=display:flex> <div style=flex:1> <label class=w3-tiny>Lat:</label> <input class="w3-input w3-padding-small" type=text style=width:100% ng-model="dataTambah[\'koordinat\'][\'lat\']"> </div> <div style=flex:1> <label class=w3-tiny>Lon:</label> <input class="w3-input w3-padding-small" type=text style=width:100% ng-model="dataTambah[\'koordinat\'][\'lon\']"> </div> </div> </td> <td> <input class=w3-input type=text style=width:100% ng-model="dataTambah[\'cuaca\']"> </td> <td style=min-width:150px;text-align:center;vertical-align:middle> <button class="w3-button w3-small w3-padding-small w3-blue" ng-click="tambah(dataTambah); showTambah=false">Simpan</button> <button class="w3-button w3-small w3-padding-small w3-blue" ng-click="showTambah=false">Batal</button> </td> </tr> <tr ng-repeat="_data in data track by $index"> <td>{{$index+1}}</td> <td> <div ng-hide=editStatus> {{_data.sistem_infonet}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.sistem_infonet> </div> </td> <td> <div ng-hide=editStatus> {{_data.wilayah}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.wilayah> </div> </td> <td> <div ng-hide=editStatus> {{_data.service_port}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.service_port> </div> </td> <td> <div ng-hide=editStatus> {{_data.remote_desktop}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.remote_desktop> </div> </td> <td> <div ng-hide=editStatus> {{_data.waktu}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.waktu> </div> </td> <td style=max-width:220px ng-style="{paddingTop: editStatus? \'0px\': \'\'}"> <div ng-hide=editStatus> {{_data.koordinat.lat}}, {{_data.koordinat.lon}} </div> <div style=display:flex ng-show=editStatus> <div style=flex:1> <label class=w3-tiny>Lat:</label> <input class="w3-input w3-padding-small" type=text style=width:100% ng-model=tempData.koordinat.lat> </div> <div style=flex:1> <label class=w3-tiny>Lon:</label> <input class="w3-input w3-padding-small" type=text style=width:100% ng-model=tempData.koordinat.lon> </div> </div> </td> <td> <div ng-hide=editStatus> {{_data.cuaca}} </div> <div ng-show=editStatus> <input class=w3-input type=text style=width:100% ng-model=tempData.cuaca> </div> </td> <td style=min-width:150px;text-align:center;vertical-align:middle> <div ng-hide=editStatus> <button class="w3-button w3-small w3-padding-small w3-blue" ng-init="editStatus=false; tempData={}" ng-click="tempData=_data; editStatus=true;">Edit</button> <button class="w3-button w3-small w3-padding-small w3-blue">Hapus</button> </div> <div ng-show=editStatus> <button class="w3-button w3-small w3-padding-small w3-blue" ng-click="_data[$index]=tempData; editStatus=false;">Simpan</button> </div> </td> </tr> </tbody> </table> </div>'}]);