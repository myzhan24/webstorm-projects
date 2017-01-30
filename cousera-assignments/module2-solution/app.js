/**
 * Created by Matt on 1/29/2017.
 */
(function () {
    'use strict';
    angular.module('ShoppingListApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [];
        var itemsBought = [];

        service.addItemsToBuy = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            itemsToBuy.push(item);
        };

        service.checkOff = function (index) {
            itemsBought.push(itemsToBuy.splice(index, 1));
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getItemsToBuy();

        ShoppingListCheckOffService.addItemsToBuy('cookies', 20);
        ShoppingListCheckOffService.addItemsToBuy('cookies', 20);
        ShoppingListCheckOffService.addItemsToBuy('cookies', 20);
        ShoppingListCheckOffService.addItemsToBuy('cookies', 20);
        ShoppingListCheckOffService.addItemsToBuy('cookies', 20);
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getItemsBought();
    }


})();