/**
 * Created by Matt on 1/21/2017.
 */
(function() {
    'use strict';

    angular.module('LunchCheckerApp', [])
        .controller('LunchCheckerController', LunchCheckerController);
    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope) {
        $scope.lunchListString = "";
        $scope.result = "";
        $scope.textColorClasses = {redMessage: true, greenMessage: false};
        $scope.checkLunchList = function () {
            var theResult = "";
            var validInput = false;
            var numItems = countLunchItems();
            if (numItems == 0) {
                validInput = false;
                theResult = "Please enter data first";
            } else {
                validInput = true;
                if (numItems > 3) {
                    theResult = "Too much!";
                } else {
                    theResult = "Enjoy!"
                }
            }
            $scope.textColorClasses.redMessage = !validInput;
            $scope.textColorClasses.greenMessage = validInput;
            $scope.result = theResult;
        };

        function countLunchItems() {
            var lunchArray = $scope.lunchListString.split(',');

            var reducedLunchList = [];
            lunchArray.forEach(function (lunchItem) {
                var trimmedString = lunchItem.trim();
                if (trimmedString != "") {
                    reducedLunchList.push(trimmedString);
                }
            });

            return reducedLunchList.length;
        }
    }
})();