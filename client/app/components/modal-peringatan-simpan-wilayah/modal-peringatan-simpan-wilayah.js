angular.module('infomet_nelayan')
    .component('modalPeringatanSimpanWilayah', {
        bindings: {
            showModalPeringatanSimpanWilayah: '=',
            eventChangeWilayah: '&',
            updateWilayah: '&'
        },
        controller: ['$scope', class modalPeringatanSimpanWilayah {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {
                this.scope._updateWilayah = () => {
                    this.updateWilayah()
                        .then(() => {
                            this.eventChangeWilayah();
                        });
                };
            }
        }],
        template: require('./modal-peringatan-simpan-wilayah.html')
    });