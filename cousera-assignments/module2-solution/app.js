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



        service.addItemToBuy = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            itemsToBuy.push(item);
        };

        service.addItemToBuy('Apples', 8);
        service.addItemToBuy('Bananas', 23);
        service.addItemToBuy('Cookies', 5);
        service.addItemToBuy('Dried Apricots', 494);
        service.addItemToBuy('Eggs', 12);

        service.checkOff = function (index) {
            console.log('checkOff index: '+index+', itemsToBuy: ',itemsToBuy[index]);
            itemsBought.push(itemsToBuy.splice(index, 1)[0]);
            console.log('itemsBought: ',itemsBought);
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



        this.checkOff = function (index) {
            ShoppingListCheckOffService.checkOff(index);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getItemsBought();
    }


})();