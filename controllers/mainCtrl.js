var app = angular.module("mainCtrl", []);
app.controller("mainCtrl", function ($scope){
    $scope.onClick = onClick;

    function onClick () {
        console.log("button was clicked");
    }
});