app.directive('tableComponent', function() {
    return {
        restrict: 'E',
        scope: {
            tbl: '=',
            sorting: '=',
            filtering: '=',
            resetfilter: '=',
            selecting: '='
        },
        templateUrl: 'js/directives/tableComponent.html'
    };
});
