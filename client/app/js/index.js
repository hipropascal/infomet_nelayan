angular.module('infomet_nelayan', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: `
                <div style="height: 100%; display: flex;">
                    <side-bar style="flex-basis: 450px;" map="$ctrl.map"></side-bar>
                    <map-container style="flex: 1;" id="map" map="$ctrl.map"></map-container>
                </div>
                `
            })
            .when('/monitoring', {
                template: `
                <div style="height: 100%; background-color: yellow;">
                    monitoring
                </div>
                `
            })
            .when('/infomet', {
                template: `
                <div style="height: 100%; background-color: yellow;">
                    infomet
                </div>
                `
            })
            .when('/data-logger', {
                template: `
                <div style="height: 100%; background-color: yellow;">
                    data-logger
                </div>
                `
            });
    }]);
require('./api');
require('../components/header-container/header-container');
require('../components/map-container/map-container');
require('../components/side-bar/side-bar');
require('../components/modal-peringatan-simpan-wilayah/modal-peringatan-simpan-wilayah');