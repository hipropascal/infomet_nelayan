angular.module('infomet_nelayan')
    .component('tableInfomet', {
        controller: ['$scope', class tableInfomet {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {
                this.scope.data = [
                    {
                        sistem_infonet: 'Tes',
                        wilayah: 'Jawa Selatan',
                        service_port: 8000,
                        remote_desktop: 'tes',
                        waktu: 'WIB',
                        koordinat: {
                            lat: 0,
                            lon: 0
                        },
                        cuaca: 'Denpasar'
                    }
                ];

                this.scope.tambah = (data) => {
                    this.scope.data.push(data);
                };
            }
        }],
        template: require('./table-infomet.html')
    });