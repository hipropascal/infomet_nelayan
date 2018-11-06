angular.module('infomet_nelayan')
    .service('api', ['$http', '$q', class api {
        constructor($http, $q) {
            this.http = $http;
            this.q = $q;
            this.urlServer = '';
        }

        getGroupArea() {
            let q = this.q.defer();
            this.http.get(`${this.urlServer}/api/get_group_area/`)
                .then((res) => {
                    res = res.data.group_area;
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
    }]);