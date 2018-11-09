angular.module('infomet_nelayan')
    .service('api', ['$http', '$q', class api {
        constructor($http, $q) {
            this.http = $http;
            this.q = $q;
            this.urlServer = '';
        }

        getWilayah() {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_wilayah/`)
                .then((res) => {
                    res = res.data.wilayah;
                    q.resolve(res);
                })
            return q.promise;
        }

        getAreaGeoJSON(area) {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_area_geojson/${area}`)
                .then((res) => {
                    res = res.data;
                    q.resolve(res);
                })
            return q.promise;
        }

        postWilayah(wilayah) {
            const templateGeoJSON = {
                type: 'FeatureCollection',
                features: []
            };
            let q = this.q.defer();
            // this.http.post(`${this.urlServer}/api/post_wilayah/${wilayah}?geojson=${JSON.stringify(templateGeoJSON)}`)
            //     .then((res) => {
            //         res = res.data;
            //         q.resolve(res);
            //     });
            this.http({
                method: 'POST',
                url: `${this.urlServer}/api/post_wilayah/${wilayah}`,
                dataType: 'json',
                geojson: JSON.stringify(templateGeoJSON),
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    res = res.data;
                    q.resolve(res);
                });
            return q.promise;
        }
    }]);