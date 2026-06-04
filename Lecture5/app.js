(function(){
    'use strict';
   var  x = "hello";
angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
    $scope.name = "Nehal";
    $scope.sayHello = function(){
        return "Hello World!";
    }

});
})();