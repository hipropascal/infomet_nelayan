angular.module('infomet_nelayan')
    .component('modalPeringatanSimpanWilayah', {
        bindings: {
            showModalPeringatanSimpanWilayah: '=',
            nextPath: '=',
            eventChangeWilayah: '&',
            updateWilayah: '&'
        },
        controller: ['$scope', '$location', class modalPeringatanSimpanWilayah {
            constructor($scope, $location) {
                this.scope = $scope;
                this.location = $location;
            }

            $onInit() {
                this.scope._updateWilayah = () => {
                    this.updateWilayah()
                        .then(() => {
                            if (this.nextPath) {
                                this.location.path(this.nextPath);
                            }
                        })
                        .then(() => {
                            this.eventChangeWilayah();
                        });
                };

                this.scope._noUpdateWilayah = () => {
                    this.eventChangeWilayah()
                        .then(() => {
                            if (this.nextPath) {
                                this.location.path(this.nextPath);
                            }
                        })
                        .then(() => {
                            this.showModalPeringatanSimpanWilayah = false;
                        });
                };
            }
        }],
        template: require('./modal-peringatan-simpan-wilayah.html')
    });