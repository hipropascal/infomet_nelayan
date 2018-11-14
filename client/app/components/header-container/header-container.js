angular.module('infomet_nelayan')
    .component('headerContainer', {
        bindings: {
        },
        controller: ['$scope', '$location', class headerContainer {
            constructor($scope, $location) {
                this.scope = $scope;
                this.scope.$location = $location;
            }
        }],
        template: require('./header-container.html')
    });