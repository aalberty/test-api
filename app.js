var app = angular.module("myApp", ['ngResource']);

app.controller('mainCtrl', function ($scope) {
    $scope.getReq = getReq;
    $scope.params = {
        parm1: "",
        parm2: ""
    };
    $scope.res = {
        success: false,
        data: {}
    };

    function getReq () {
        let parm1 = $scope.parm1;
        let parm2 = $scope.parm2;
        $scope.res = {data: {}, success: false};
        $scope.res.success = true;
        $scope.res.data = {parm1: parm1, parm2: parm2};
    }
});
