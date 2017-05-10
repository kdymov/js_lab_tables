app.directive('tableComponent', function() {
    return {
        restrict: 'E',
        scope: {
            tbl: '=',
            sorting: '='
        },
        templateUrl: 'js/directives/tableComponent.html'
    };
});
