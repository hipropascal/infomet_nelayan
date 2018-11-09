angular.module('infomet_nelayan')
    .component('sideBar', {
        bindings: {
            map: '=',
            lastLayer: '='
        },
        controller: ['$scope', 'api', class sideBar {
            constructor($scope, api) {
                this.scope = $scope;
                this.api = api;
            }

            $onInit() {
                this.scope.simpan = () => {
                    let res = {
                        type: 'FeatureCollection',
                        features: []
                    };

                    this.map.eachLayer(function (layer) {
                        if (layer['pm'] != undefined) {
                            layer = layer.toGeoJSON();
                            if (layer.type === 'Feature') {
                                res.features.push(layer);
                            }
                        }
                    });

                    if (res.features.length != 0) {
                        console.log('menuContainer simpan', res);
                    }
                };

                this.api.getWilayah()
                    .then((res) => {
                        this.scope.wilayah = res;
                    });

                this.scope.selectWilayah = (wilayah) => {
                    this.api.getAreaGeoJSON(wilayah)
                        .then((res) => {
                            if (typeof (this.lastLayer.layer) !== 'undefined') {
                                this.lastLayer.layer.removeFrom(this.map);
                            }
                            this.lastLayer['wilayah'] = wilayah;
                            this.lastLayer['layer'] = L.geoJSON(res);
                            this.map.fitBounds(this.lastLayer.layer.getBounds());
                            this.lastLayer.layer.addTo(this.map);

                            console.log(res, this.lastLayer.layer.toGeoJSON());
                        });
                };
            }
        }],
        template: require('./side-bar.html')
    });