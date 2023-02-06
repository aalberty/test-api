var app = angular.module("myApp", ['ngResource']);

app.controller('mainCtrl', function ($scope) {
    $scope.onClick = onClick;
    $scope.getReq = getReq;
    $scope.params = {
        parm1: "",
        parm2: ""
    };
    $scope.res = {
        success: false,
        data: {}
    };

    function onClick (message) {
        console.log(message);
    }

    function getReq () {
        let parm1 = $scope.parm1;
        let parm2 = $scope.parm2;
        $scope.res.success = true;
        $scope.data = {parm1: parm1, parm2: parm2};
    }
});
