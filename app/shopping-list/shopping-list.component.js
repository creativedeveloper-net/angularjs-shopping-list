'use strict';

// Register `shoppingList` component, along with its associated controller and template
angular.
module('shoppingList').
component('shoppingList', {
    templateUrl: 'shopping-list/shopping-list.template.html',
    controller: ['Item',
        function ShoppingListController(Item) {
            var vm = this;
            vm.items = Item.query();
            vm.newItem = {};
            vm.resetCreateForm = function() {
                vm.newItem = {
                    name: '',
                    isActive: true
                }
            };
            vm.createItem = function(item) {
                item.id = vm.items.length;
                vm.items.push(item);

                vm.resetCreateForm();
            };
            vm.deleteItem = function(item) {
                var index = vm.items.indexOf(item);
                vm.items.splice(index, 1);
            }
            vm.resetCreateForm();
        }
    ]
});