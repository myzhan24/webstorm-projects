(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.description = "";
        controller.foundMenuItems = [{name:'test'},{name:'test1'}];
        controller.search = function () {
            MenuSearchService.getMatchedMenuItems(this.description, function(foundItems){
                controller.foundMenuItems = foundItems;
            });
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm, callback) {
            $http({
                method: 'GET',
                url: ApiBasePath + "/menu_items.json"
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = [];

                if (result.data.menu_items != null) {
                    result.data.menu_items.forEach(function (menuItem) {
                        if (menuItem.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            console.log(searchTerm,' found in ',menuItem);
                            foundItems.push(menuItem);
                        }

                    });
                }

                // return processed items

                console.log('foundItems: ',foundItems);
                callback(foundItems);
            });
        }
    }


})();