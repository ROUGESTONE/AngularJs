(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope','$filter'];
    function MsgController($scope, $filter){
        $scope.name = "Nehal";
        $scope.state = "Hungry";
        $scope.cookieCost = .90;
        $scope.sayMessage = function(){
            var msg = "Like to eat food at all times"
            var output = $filter('uppercase')(msg);
            return output ;
        };
        $scope.Feedme = function(){
                $scope.state = "Fed";
        }
    }

})();