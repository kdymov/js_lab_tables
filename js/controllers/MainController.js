app.controller('MainController', ['$scope', 'SmallService', function($scope, SmallService) { 
    $scope.title = 'Table editor';
    $scope.tables = [];
    
    $scope.load_small = function() {
        SmallService.success(function(data) {
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
