(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth',TruthFilter)

    MsgController.$inject = ['$scope','lovesFilter'];
    function MsgController($scope, lovesFilter){
        $scope.name = "Nehal";
        $scope.state = "Hungry";

        $scope.sayMessage = function(){
            var msg = "Like to eat food at all times"
            return msg ;
        };
        $scope.sayLoveMsg = function(){
            var msg = "Likes to eat food at all times"
            msg = lovesFilter(msg);
            return msg ;
        };
        $scope.Feedme = function(){
                $scope.state = "Fed";
        }
    };
    function LovesFilter(){
        return function (input){
            input = input || "";
            input = input.replace("Likes","Loves");
            return input;
        };
    }
    function TruthFilter(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();