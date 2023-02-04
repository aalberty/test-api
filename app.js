var app = angular.module("myApp", [
    '/controllers/apiCtrl',
    '/controllers/mainCtrl'
]);

app.config(['$routeProvider'], function () {
    $routeProvider
    .when('/Test/:testParam', {
        templateUrl: 'apiRes.html',
        controller: 'apiCtrl'
    });
});
