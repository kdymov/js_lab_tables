app.controller('MainController', ['$scope', 'LoaderService', function($scope, LoaderService) { 
    $scope.title = 'Table editor';
    $scope.tables = [];
    
    $scope.load_small = function() {
        LoaderService('json/small.json').success(function(data) {
            var newTable = {};
            newTable.table = data;
            var k = Object.keys(newTable.table[0]);
            newTable.keys = [];
            newTable.sortedBy = undefined;
            newTable.index = $scope.tables.length;
            newTable.sorted = function(col) {
                $scope.sort(this, col);
            }
            for (var i = 0; i < k.length; i++) {
                if (k[i] != '$$hashKey') {
                    newTable.keys.push(k[i]);
                }
            }
            $scope.tables.push(newTable);
        });
    };
    
    $scope.load_big = function() {
        LoaderService('json/big.json').success(function(data) {
            var newTable = {};
            newTable.table = data;
            var k = Object.keys(newTable.table[0]);
            newTable.keys = [];
            newTable.sortedBy = undefined;
            newTable.index = $scope.tables.length;
            newTable.sorted = function(col) {
                $scope.sort(this, col);
            }
            for (var i = 0; i < k.length; i++) {
                if (k[i] != '$$hashKey') {
                    newTable.keys.push(k[i]);
                }
            }
            $scope.tables.push(newTable);
        });
    };
    
    $scope.sort = function(tbl, col) {
        if ($scope.tables[tbl].sortedBy === undefined) {
            $scope.tables[tbl].sortedBy = {
                "order": "asc",
                "col": col,
                "default": $scope.tables[tbl].table.slice()
            };
            $scope.tables[tbl].table.sort(function(a, b) {
                if (a[col] < b[col]) {
                    return -1;
                } else if (a[col] > b[col]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if ($scope.tables[tbl].sortedBy["order"] === "asc" && $scope.tables[tbl].sortedBy["col"] === col) {
            var d = $scope.tables[tbl].sortedBy["default"];
            $scope.tables[tbl].sortedBy = {
                "order": "desc",
                "col": col,
                "default": d
            };
            $scope.tables[tbl].table.sort(function(a, b) {
                if (a[col] > b[col]) {
                    return -1;
                } else if (a[col] < b[col]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if ($scope.tables[tbl].sortedBy["order"] === "desc" && $scope.tables[tbl].sortedBy["col"] === col) {
            var d = $scope.tables[tbl].sortedBy["default"];
            $scope.tables[tbl].sortedBy = undefined;
            $scope.tables[tbl].table = d.slice();
        }
    }
}]);
