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

                        // buka geojson di list teratas
                        this.scope.wilayahSelected = this.scope.wilayah[0];
                        this.eventChangeWilayah();
                    });

                // pengolahan geojson
                this.lastWilayah = {};
                let clearWilayah = () => {
                    this.map.eachLayer((layer) => {
                        if (layer['pm'] != undefined) {
                            layer.removeFrom(this.map);
                        }
                    });
                };
                this.eventChangeWilayah = () => {
                    return this.api.getAreaGeoJSON(this.scope.wilayahSelected)
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

                            this.lastSavedWilayah = angular.copy(this.lastWilayah);
                        });
                };

                // pengolahan highlight
                let lastHighlightArea = {};
                this.scope.highlightArea = (i) => {
                    lastHighlightArea = L.geoJSON(this.lastWilayah.layer.toGeoJSON().features[i]).setStyle({ fillColor: 'grey', fillOpacity: .35 });
                    lastHighlightArea.addTo(this.map);
                };
                this.scope.removeHighlightArea = () => {
                    lastHighlightArea.removeFrom(this.map);
                };

                // update properties
                this.scope.updateProperties = (i, properties) => {
                    this.scope.area[i].properties = properties;

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
                        tempNewLayerGeoJSON.properties['category'] = 'hs';
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
                        tempLayerGeoJSON.features[tempLayerGeoJSON.features.length - 1].properties['category'] = 'hs';
                        this.lastWilayah.layer = L.geoJSON(tempLayerGeoJSON);
                        clearWilayah();
                        this.lastWilayah.layer.addTo(this.map);
                    });
                });

                // simpan update geojson
                this.updateWilayah = () => {
                    this.lastSavedWilayah = angular.copy(this.lastWilayah);
                    return this.api.postWilayah(this.lastWilayah);
                };

                // cek perubahan geojson
                this.scope.cekWilayahBerubah = () => {
                    if (JSON.stringify(this.lastWilayah.layer.toGeoJSON()) === JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())) {
                        this.eventChangeWilayah();
                    } else {
                        this.showModalPeringatanSimpanWilayah = true;
                    }
                };

                this.scope.$on('$routeChangeStart', (event, next, current) => {
                    if (JSON.stringify(this.lastWilayah.layer.toGeoJSON()) !== JSON.stringify(this.lastSavedWilayah.layer.toGeoJSON())) {
                        // stop mekanisme route 
                        event.preventDefault();

                        this.nextPath = next.$$route.originalPath;
                        this.showModalPeringatanSimpanWilayah = true;
                    }
                });
            }
        }],
        template: require('./side-bar.html')
    });