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

})();