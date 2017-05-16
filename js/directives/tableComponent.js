app.directive('tableComponent', function() {
    return {
        restrict: 'E',
        scope: {
            tbl: '=',
            sorting: '=',
            filtering: '=',
            resetfilter: '=',
            selecting: '=',
            changepage: '='
        },
        templateUrl: 'js/directives/tableComponent.html'
    };
});
