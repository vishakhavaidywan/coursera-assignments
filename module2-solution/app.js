(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    // controller 1
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
      toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
      toBuy.buyThisItem = function(itemIndex) {
        ShoppingListCheckOffService.buyThisItem(itemIndex);
      }
    }
    
    // controller 2
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;
      alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getBoughtList();
    }
    
    // service
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of items to buy
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

      // items already bought - initially empty
      var boughtItems = [];
    
      service.getToBuyList = function () {
        return toBuyItems;
      };

      service.getBoughtList = function () {
        return boughtItems;
      };

      // function to take the selected emelemnt from the toBuyList and add into the bought list
      service.buyThisItem = function (itemIndex) {
        var deletedItem = toBuyItems.splice(itemIndex, 1);
        boughtItems.push(deletedItem[0]);
      }
    }
    
    })();
    