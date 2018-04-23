(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
      toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
      toBuy.buyThisItem = function(itemIndex) {
        ShoppingListCheckOffService.buyThisItem(itemIndex);
      }
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;
      alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getBoughtList();
    }
    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of t buy items
      var toBuyItems = [
          {
              name: "Mangoes",
              quantity: 10
          },
          {
            name: "Apples",
            quantity: 8
        },
        {
            name: "Nutella",
            quantity: 2
        },
        {
            name: "Ice-cream",
            quantity: 1
        },
        {
            name: "Doritos",
            quantity: 5
        }
      ];

      var boughtItems = [];
    
      service.getToBuyList = function () {
        return toBuyItems;
      };

      service.getBoughtList = function () {
        return boughtItems;
      };

      service.buyThisItem = function (itemIndex) {
        var deletedItem = toBuyItems.splice(itemIndex, 1);
        boughtItems.push(deletedItem[0]);
      }
    }
    
    })();
    