var app = angular.module("myApp", ['ngResource', 'ngRoute']);

app.config( function ($routeProvider, $locationProvider) {
    $routeProvider

    .when('/sampleEndpoint', {
        templateUrl: "sampleEndpoint.html",
        controller: "endpointCtrl"
    })

    .when('/sampleEndpoint/withParams',{
        templateUrl: "params.html",
        controller: 'endpointCtrl'
    })

    .otherwise({
        template: ""
    });
    $locationProvider.html5Mode(true);
});

app.controller('mainCtrl',['$scope', '$resource', function ($scope, $resource) {
    $scope.getReq = getReq;
    $scope.params = {
        parm1: "",
        parm2: ""
    };
    $scope.res = {
        success: false,
        errorMessage: "",
        data: {}
    };

    var restSvc = $resource(null, null,
         {
            "getSample": {
                url: "/sampleEndpoint/withParams",
                method: "get",
                isArray: "false",
                params: {
                    parm1: "@parm1",
                    parm2: "@parm2"
                }
            }    
        }
    );

    function getSample (parm1, parm2) {
        return restSvc.getSample(
                {
                    parm1: parm1,
                    parm2: parm2
                }
            ).$promise;
    } 

    function getReq () {
        let parm1 = $scope.params.parm1;
        let parm2 = $scope.params.parm2;
        // $scope.res.success = true;
        // $scope.res.data = {parm1: parm1, parm2: parm2};

        let prom = getSample(
                $scope.params.parm1, 
                $scope.params.parm2
            );
    
        prom.then(
            
            function (res) {
                console.log("response: ", res);
                let success = false;
                let errorMessage = "";
                let data = "";
    
                if (res) {
                    success = true;
                    data = res;
                } else {
                    success = false;
                    errorMessage = "No data returned.";
                }
    
                $scope.res.success = success;
                $scope.res.errorMessage = errorMessage;
                $scope.res.data = data;
            },

            function (error) {
                console.log("API error: ", error);
                console.log("prom: ", prom);
            } 
        );

    }
}]);

app.controller('endpointCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.params = $routeParams;
    console.log("url params: ", $scope.params);
}]);




