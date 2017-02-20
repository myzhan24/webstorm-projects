(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.description = "";
        controller.found = [];
        controller.nothingFound = false;
        controller.search = function () {
            var promise = MenuSearchService.getMatchedMenuItems(controller.description);
            if (controller.description != ""){
                promise.then(function (response) {
                    controller.found = response;
                    controller.nothingFound = controller.found.length == 0;
                });
            } else {
                controller.nothingFound = controller.found.length == 0;
            }
        };

        controller.removeItem = function (itemIndex) {
            controller.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            // this returns a promise
            return $http({
                method: 'GET',
                url: ApiBasePath + "/menu_items.json"
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = [];

                if (result.data.menu_items != null) {
                    result.data.menu_items.forEach(function (menuItem) {
                        if (menuItem.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            foundItems.push(menuItem);
                        }
                    });
                }

                // return processed items
                return foundItems;
            });
        }
    }


})();