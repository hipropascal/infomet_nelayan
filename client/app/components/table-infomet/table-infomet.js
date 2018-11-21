angular.module('infomet_nelayan')
    .component('tableInfomet', {
        controller: ['$scope', 'api', class tableInfomet {
            constructor($scope, api) {
                this.scope = $scope;
                this.api = api;
            }

            $onInit() {
                this.scope.data = [];
                // this.scope.data = [
                //     {
                //         sistem_infonet: 'Tes',
                //         wilayah: 'Jawa Selatan',
                //         service_port: 8000,
                //         remote_desktop: 'tes',
                //         waktu: 'WIB',
                //         koordinat: {
                //             lat: 0,
                //             lon: 0
                //         },
                //         cuaca: {
                //             kode: 'A.01',
                //             wilayah: 'Selat Malaka bagian utara'
                //         }
                //     }
                // ];

                this.api.getWilayahPelayaran()
                    .then((res) => {
                        this.scope.wilayahPelayaran = res;
                    });

                this.api.getWilayah()
                    .then((res) => {
                        this.scope.wilayah = res;
                    });

                this.scope.tambah = (data) => {
                    console.log(data)
                    this.scope.data.push(data);
                };
            }
        }],
        template: require('./table-infomet.html')
    });