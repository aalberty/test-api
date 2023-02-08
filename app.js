var app = angular.module("myApp", ['ngResource', 'ngRoute']);

app.controller('mainCtrl',['ngRoute', function ($scope, $resource) {
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
                url: "#!/sampleEndpoint/:parm1/:parm2",
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

app.controller('endpointCtrl', ['ngRoute', function ($scope, $routeParams) {
    let params = $routeParams;
    console.log("url params: ", params);
}]);

app.config(['$routeProvider', function config ($routeProvider) {
    $routeProvider

    .when('/sampleEndpoint/:parm1/:parm2',{
        templateUrl: "apiRes.template.html",
        controller: 'endpointCtrl'
    })

    .when('/sampleEndpoint', {
        templateUrl: "apiRes.template.html",
        controller: "endpointCtrl"
    })

    .otherwise({
        template: ""
    });
}]);


