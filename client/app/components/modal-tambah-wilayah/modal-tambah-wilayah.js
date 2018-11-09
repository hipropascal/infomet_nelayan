angular.module('infomet_nelayan')
    .component('modalTambahWilayah', {
        bindings: {
            showModalTambahWilayah: '=',
            wilayah: '='
        },
        controller: ['$scope', 'api', class modalTambahWilayah {
            constructor($scope, api) {
                this.scope = $scope;
                this.api = api;
            }

            $onInit() {
                this.scope.tambahWilayah = (wilayah) => {
                    this.api.postWilayah(wilayah)
                        .then((res) => {
                            console.log(res);
                        });
                };
            }
        }],
        template: require('./modal-tambah-wilayah.html')
    });