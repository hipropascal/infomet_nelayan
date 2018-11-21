angular.module('infomet_nelayan')
    .service('api', ['$http', '$q', class api {
        constructor($http, $q) {
            this.http = $http;
            this.q = $q;
            this.urlServer = '';
        }

        getWilayah() {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_wilayah/`, { headers: { 'Cache-Control': 'no-cache' } })
                .then((res) => {
                    res = res.data.wilayah;
                    q.resolve(res);
                })
            return q.promise;
        }

        getAreaGeoJSON(area) {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_area_geojson/${area}`, { headers: { 'Cache-Control': 'no-cache' } })
                .then((res) => {
                    res = res.data;
                    q.resolve(res);
                })
            return q.promise;
        }

        postWilayah(lastWilayah) {
            let fd = new FormData(),
                blob = new Blob([angular.toJson(lastWilayah.layer.toGeoJSON())], { type: 'application/json' }),
                q = this.q.defer();
            fd.append('geojson', blob);
            this.http({
                url: `${this.urlServer}/api/post_wilayah/${lastWilayah.wilayah}`,
                method: 'POST',
                data: fd,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            })
                .then((res) => {
                    res = res.data;
                    q.resolve(res);
                });
            return q.promise;
        }

        getWilayahPelayaran() {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_wilayah_pelayaran/`)
                .then((res) => {
                    res = res.data;
                    q.resolve(res);
                })
            return q.promise;
        }
    }]);