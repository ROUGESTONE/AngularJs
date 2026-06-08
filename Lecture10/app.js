(function(){
   'use strict';
   angular.module('DIApp',[])
   .controller('DIController',DIController);

   DIController.inject = ['$scope', '$filter'];
   function DIController($scope,$filter){
    $scope.name = "Nehal";

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    }
   }

})();
// !function(){"use strict";function e(e,n){e.name="Nehal",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
