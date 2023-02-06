var app = angular.module("myApp", ['ngResource']);

app.controller('mainCtrl', function ($scope, $resource) {
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

    var restSvc = $resource("./getSample/:parm1/:parm2", 
    
        {
            parm1: "@parm1",
            parm2: "@parm2"
        },

        {
            "getSample": {
                method: "get",
                isArray: "false"
            }    
        }
    );


    function getReq () {
        let parm1 = $scope.params.parm1;
        let parm2 = $scope.params.parm2;
        // $scope.res.success = true;
        // $scope.res.data = {parm1: parm1, parm2: parm2};

        let prom = restSvc.getSample(
            {
                parm1: $scope.params.parm1,
                parm2: $scope.params.parm2
            }
        ).$promise;
    
        prom.then(
            
            function (res) {
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
                $scope.res.success = false;
                $scope.res.errorMessage = error;
                $scope.res.data = {};
            }
        );

    }
});


