(function(){
    'use strict';

    angular.module("NameCalculator",[])
    .controller('NameCalculatorController',function($scope){
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNum = function(){
            var totalNameValue = calculateNumForStr($scope.name);
            $scope.totalValue = totalNameValue;
        }
        
        function calculateNumForStr(string){
        for(var i = 0; i< string.length; i++){
            totalStrVal += string.charCodeAt(i);
        }
        return totalStrVal;
        }
    });
})();