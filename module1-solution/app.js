(function () {
    'use strict';
    angular.module('LunchCheck', ['ngRoute'])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItemsString = '';
        $scope.checkIfTooMuch = function(){
            console.log($scope.lunchItemsString);
        }
    }
})();