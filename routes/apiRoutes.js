var app = angular.module('myApp',['ngRoute', '../app.js']);

app.config(['$routeProvider'], function () {
    $routeProvider
    .when('/Test/:testParam', {
        templateUrl: 'apiRes.html',
        controller: 'apiCtrl'
    });
});