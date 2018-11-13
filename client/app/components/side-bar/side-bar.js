angular.module('infomet_nelayan')
    .component('sideBar', {
        bindings: {
            map: '='
        },
        controller: ['$scope', '$timeout', 'api', class sideBar {
            constructor($scope, $timeout, api) {
                this.scope = $scope;
                this.timeout = $timeout;
                this.api = api;
            }

            $onInit() {
                this.api.getWilayah()
                    .then((res) => {
                        this.scope.wilayah = res;
                    });

                // pengolahan wilayah
                this.lastWilayah = {};
                let clearWilayah = () => {
                    this.map.eachLayer((layer) => {
                        if (layer['pm'] != undefined) {
                            layer.removeFrom(this.map);
                        }
                    });
                };
                this.scope.eventChangeWilayah = () => {
                    this.api.getAreaGeoJSON(this.scope.wilayahSelected)
                        .then((res) => {
                            // clear last layer
                            clearWilayah();

                            // set layer
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
                    clearWilayah();
                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();
                    tempLayerGeoJSON.features = this.scope.area;
                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                    this.lastWilayah.layer.addTo(this.map);
                };

                // hapus area
                this.scope.removeArea = (i) => {
                    clearWilayah();
                    let tempLayerGeoJSON = this.lastWilayah.layer.toGeoJSON();
                    tempLayerGeoJSON.features.splice(i, 1);
                    this.scope.area = tempLayerGeoJSON.features;
                    this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                    this.lastWilayah.layer.addTo(this.map);
                };

                // event saat area dibuat
                this.timeout(() => {
                    this.map.on('pm:create', (e) => {
                        let tempNewLayerGeoJSON = e.layer.toGeoJSON();
                        tempNewLayerGeoJSON.properties['name'] = 'Unnamed Shape';
                        this.scope.area.push(tempNewLayerGeoJSON);
                        this.scope.$apply();
                    });

                    this.map.on('pm:drawend', (e) => {
                        let tempLayerGeoJSON = {
                            type: 'FeatureCollection',
                            features: []
                        };
                        this.map.eachLayer(function (layer) {
                            if (layer['pm'] != undefined) {
                                layer = layer.toGeoJSON();
                                if (layer.type === 'Feature') {
                                    tempLayerGeoJSON.features.push(layer);
                                }
                            }
                        });
                        tempLayerGeoJSON.features[tempLayerGeoJSON.features.length - 1].properties['name'] = 'Unnamed Shape';
                        this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                        clearWilayah();
                        this.lastWilayah.layer.addTo(this.map);
                    });
                });

                // simpan update wilayah
                this.scope.updateWilayah = () => {
                    this.api.postWilayah(this.lastWilayah);
                };
            }
        }],
        template: require('./side-bar.html')
    });