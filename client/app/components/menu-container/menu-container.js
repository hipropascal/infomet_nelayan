angular.module('infomet_nelayan')
    .component('menuContainer', {
        bindings: {
            menuContainerShow: '=',
            map: '='
        },
        controller: ['$scope', 'api', class menuContainer {
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

                this.api.getGroupArea()
                    .then((res) => {
                        this.scope.groupArea = res;
                    });

                this.scope.getArea = (area) => {
                    this.api.getAreaGeoJSON(area)
                        .then((res) => {
                            console.log(res);
                        })
                };
            }
        }],
        template: require('./menu-container.html')
    });