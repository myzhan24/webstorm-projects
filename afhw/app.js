/**
 * Created by Matt on 1/19/2017.
 */
(function () {
    'use strict';
    angular.module('HelloWorldApp', [])
        .controller('HelloWorldController', function($scope) {
            $scope.name = "matthew";
            $scope.radiuso = 1;
            $scope.increaseRadius = function() {
                $scope.radiuso += 0.05;
                console.log('increaseRadius to ',$scope.radiuso);
            };
            $scope.expand = false;
            $scope.doExpand = function () {
                // while ($scope.expand) {
                //     $scope.increaseRadius();
                // }
            };
        });
})();