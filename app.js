var app = angular.module("myApp", [
    '/controllers/apiCtrl.js',
    '/controllers/mainCtrl.js'
]);

app.config(['$routeProvider'], function () {
    $routeProvider
    .when('/Test/:testParam', {
        templateUrl: 'apiRes.html',
        controller: 'apiCtrl'
    });
});
