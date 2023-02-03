var app = angular.module("myMainCtrl", []);
app.controller("mainCtrl", function ($scope){
    $scope.onClick = onClick;

    function onClick () {
        console.log("button was clicked");
    }
});