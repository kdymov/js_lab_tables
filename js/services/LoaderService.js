app.factory('LoaderService', ['$http',
    function($http) {
        return $http.get('json/small.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
    }
]);
