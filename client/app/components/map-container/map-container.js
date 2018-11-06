angular.module('infomet_nelayan')
    .component('mapContainer', {
        controller: ['$scope', class mapContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {

            }
        }],
        template: require('./map-container.html')
    })