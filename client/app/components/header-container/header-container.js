angular.module('infomet_nelayan')
    .component('headerContainer', {
        bindings: {
            menuContainerShow: '='
        },
        controller: ['$scope', class headerContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {

            }
        }],
        template: require('./header-container.html')
    })