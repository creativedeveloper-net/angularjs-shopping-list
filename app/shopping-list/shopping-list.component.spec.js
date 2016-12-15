'use strict';

describe('shoppingList', function() {

    // Load the module that contains the `shoppingList` component before each test
    beforeEach(module('shoppingList'));

    // Test the controller
    describe('ShoppingListController', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('items/items.json')
                .respond([{name: 'Bread'}, {name: 'Butter'}]);

            ctrl = $componentController('shoppingList');
        }));

        it('should create a shopping list with 2 items fetched with `$http`', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.items).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.items).toEqual([{name: 'Bread'}, {name: 'Butter'}]);
        });

    });

});
