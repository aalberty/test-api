var app = angular.module("myApiCtrl", []);
app.controller('apiCtrl', function ($scope) {
    $scope.onClick = onClick;

    function onClick () {
        console.log("button was clicked");
    }
});