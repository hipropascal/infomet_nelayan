angular.module('infomet_nelayan')
    .component('menuContainer', {
        bindings: {
            menuContainerShow: '=',
            map: '='
        },
        controller: ['$scope', class menuContainer {
            constructor($scope) {
                this.scope = $scope;
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
            }
        }],
        template: require('./menu-container.html')
    });