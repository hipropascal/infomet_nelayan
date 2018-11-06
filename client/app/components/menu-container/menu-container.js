angular.module('infomet_nelayan')
    .component('menuContainer', {
        bindings: {
            menuContainerShow: '='
        },
        controller: ['$scope', class menuContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {

            }
        }],
        template: require('./menu-container.html')
    })