angular.module('infomet_nelayan')
    .component('mapContainer', {
        bindings: {
            map: '='
        },
        controller: ['$scope', class mapContainer {
            constructor($scope) {
                this.scope = $scope;
            }

            $onInit() {
                // init map
                this.map = L.map('map').setView([51.505, -0.09], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);

                // define toolbar options
                var options = {
                    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
                    drawMarker: false, // adds button to draw markers
                    drawPolyline: false, // adds button to draw a polyline
                    drawRectangle: false, // adds button to draw a rectangle
                    drawPolygon: true, // adds button to draw a polygon
                    drawCircle: false, // adds button to draw a cricle
                    cutPolygon: true, // adds button to cut a hole in a polygon
                    editMode: true, // adds button to toggle edit mode for all layers
                    removalMode: true, // adds a button to remove layers
                };

                // add leaflet.pm controls to the map
                this.map.pm.addControls(options);
            }
        }]
    });