'use strict';

angular.
module('core.item').
factory('Item', ['$resource',
    function($resource) {
        return $resource('items/:itemId.json', {}, {
            query: {
                method: 'GET',
                params: {itemId: 'items'},
                isArray: true
            }
        });
    }
]);
