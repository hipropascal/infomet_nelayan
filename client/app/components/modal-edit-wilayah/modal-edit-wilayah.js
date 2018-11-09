angular.module('infomet_nelayan')
    .component('modalEditWilayah', {
        bindings: {
            showModalEditWilayah: '='
        },
        controller: ['$scope', class modalEditWilayah {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {

            }
        }],
        template: require('./modal-edit-wilayah.html')
    });