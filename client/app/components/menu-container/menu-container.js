angular.module('infomet_nelayan')
    .component('menuContainer', {
        controller: ['$scope', class menuContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {

            }
        }],
        template: require('./menu-container.html')
    })