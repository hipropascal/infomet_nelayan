angular.module('infomet_nelayan')
    .component('mapContainer', {
        controller: ['$scope', class mapContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {
                this.map = L.map('map').setView([51.505, -0.09], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);
            }
        }],
        template: require('./map-container.html')
    })