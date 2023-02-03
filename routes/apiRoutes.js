angular.module('myApp',
    [
        'ngRoute'
    ]
).

config(['$routeProvider'], function () {
    $routeProvider
    .when('/Test/:testParam', {
        templateUrl: 'apiRes.html',
        controller: 'myApiCtrl'
    });
});