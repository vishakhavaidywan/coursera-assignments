(function () {
    'use strict';
    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItemsString = '';
        $scope.checkIfTooMuch = function(){
            console.log($scope.lunchItemsString);
        }
    }
})();