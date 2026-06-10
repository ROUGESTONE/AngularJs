(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "Nehal";
        $scope.state = "Hungry";
        $scope.sayMessage = function(){
            return "Like to eat food at all times";
        };
        $scope.Feedme = function(){
                $scope.state = "Fed";
        }
    }
      function LovesFilter(){
        return function (input){
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        };
    }

})();