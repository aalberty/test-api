var app = angular.module("apiCtrl", ['ngRoute']);
app.controller('apiCtrl', function ($scope, $routeParams) {
    $scope.parrot = parrot;
    $scope.params = $routeParams;

    function parrot (message) {
        console.log(message);
        return {"success": true, "result": message};
    }
});