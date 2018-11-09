angular.module('infomet_nelayan')
    .component('sideBar', {
        bindings: {
            map: '='
        },
        controller: ['$scope', 'api', class sideBar {
            constructor($scope, api) {
                this.scope = $scope;
                this.api = api;
            }

            $onInit() {
                this.api.getWilayah()
                    .then((res) => {
                        this.scope.wilayah = res;
                    });

                // pengolahan wilayah
                this.lastWilayah = {};
                this.scope.eventChangeWilayah = () => {
                    this.api.getAreaGeoJSON(this.scope.wilayahSelected)
                        .then((res) => {
                            // set layer
                            if ((this.lastWilayah).hasOwnProperty('layer')) {
                                this.lastWilayah.layer.removeFrom(this.map);
                            }
                            this.lastWilayah['wilayah'] = this.scope.wilayahSelected;
                            this.lastWilayah['layer'] = L.geoJSON(res);
                            this.map.fitBounds(this.lastWilayah.layer.getBounds());
                            this.lastWilayah.layer.addTo(this.map);

                            // get area
                            this.scope.area = res.features;
                        });
                };

                // pengolahan highlight
                this.lastHighlightArea = {};
                this.scope.highlightArea = (i) => {
                    this.lastHighlightArea = L.geoJSON(this.lastWilayah.layer.toGeoJSON().features[i]).setStyle({ fillColor: 'red' });
                    this.lastHighlightArea.addTo(this.map);
                };
                this.scope.removeHighlightArea = () => {
                    this.lastHighlightArea.removeFrom(this.map);
                };

                // pengolahan nama area
                this.scope.updateAreaName = (i, areaName) => {
                    this.scope.area[i].properties.name = areaName;

                    // update lastWilayah
                    this.lastWilayah.layer.removeFrom(this.map);
                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();
                    tempLayerGeoJSON.features = this.scope.area;
                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                    this.lastWilayah.layer.addTo(this.map);
                };

                // hapus area
                this.scope.removeArea = (i) => {
                    this.lastWilayah.layer.removeFrom(this.map);
                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();
                    tempLayerGeoJSON.features.splice(i, 1);
                    this.scope.area = tempLayerGeoJSON.features;
                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                    this.lastWilayah.layer.addTo(this.map);
                };
            }
        }],
        template: require('./side-bar.html')
    });