(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.shop_items = ShoppingListCheckOffService.getShopItems();

  list1.bought = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  };
}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.bought_items = ShoppingListCheckOffService.getBoughtItems();
}

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var shop_items = [
    { name: "cookies", quantity: 1 },
    { name: "cookies", quantity: 2 },
    { name: "cookies", quantity: 3 },
    { name: "cookies", quantity: 4 },
    { name: "cookies", quantity: 5 },
  ];
  var service = this;

  // List of shopping items
  var bought_items = [];

  service.bought = function (itemIndex) {
    bought_items.push(shop_items[itemIndex]);
    shop_items.splice(itemIndex, 1);
  };

  service.getShopItems = function () {
    return shop_items;
  };

  service.getBoughtItems = function () {
    return bought_items;
  };
}

})();
