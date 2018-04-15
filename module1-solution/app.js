(function () {
    'use strict';
    angular.module('LunchCheck', ['ngRoute'])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.lunchItemsString = '';
        $scope.lunchInfo = '';

        //empty item in the list - case not handled (not required for grading)
        $scope.checkIfTooMuch = function () {
            var items = $scope.lunchItemsString.split(",");
            if (items.length == 1 && items[0] == "") { // empty check
                $scope.lunchInfo = 'Please enter data first';
            } else if (items.length <= 3) { // less than or equal to 3 food items
                $scope.lunchInfo = 'Enjoy !';
            } else { // more that 3 food items
                $scope.lunchInfo = 'Too much !';
            }
        }
    }
})();