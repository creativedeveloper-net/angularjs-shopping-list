'use strict';

angular.
module('myApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/items', {
                template: '<shopping-list></shopping-list>'
            }).
            otherwise('/items');
    }
]);
