app.controller('MainController', ['$scope', 'LoaderService', function($scope, LoaderService) { 
    $scope.title = 'Table editor';
    $scope.tables = [];
    
    $scope.load_small = function() {
        LoaderService.success(function(data) {
            var newTable = {};
            newTable.table = data;
            var k = Object.keys(newTable.table[0]);
            newTable.keys = [];
            for (var i = 0; i < k.length; i++) {
                if (k[i] != '$$hashKey') {
                    newTable.keys.push(k[i]);
                }
            }
            $scope.tables.push(newTable);
        });
    };
}]);
