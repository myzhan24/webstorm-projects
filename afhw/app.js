/**
 * Created by Matt on 1/19/2017.
 */
(function () {
    'use strict';
    angular.module('HelloWorldApp', [])
        .controller('HelloWorldController', function($scope) {
            $scope.name = "matthew";
            $scope.radiuso = 0.1;
            $scope.increaseRadius = function() {
                $scope.radiuso *= 1.10;
                console.log('increaseRadius to ',$scope.radiuso);
            };
            $scope.expand = false;
            $scope.animate = false;
            $scope.doExpand = function () {
                // while ($scope.expand) {
                //     $scope.increaseRadius();
                // }
            };
            $scope.moreDots = function () {
                for (var i = 0; i < 1; i++) {
                    pushMoreDots();
                }

            };

            $scope.pos = [];

            pushMoreDots();

            function pushMoreDots() {
                var temp = [];
                for (var i = 0; i < 50; i++) {
                    var x = getRandom()*5+1;
                    var y = getRandom()*5+1;
                    var z = getRandom()*5+1;
                    temp.push({loc:''+x+" "+y+" "+z, radius:getRandom()/10});
                }

                $scope.pos = $scope.pos.concat(temp);
            }

            $scope.getRandom = function () {
                return getRandom()/10;
            };

            function getRandom() {
                return Math.random();
            }
        });
})();