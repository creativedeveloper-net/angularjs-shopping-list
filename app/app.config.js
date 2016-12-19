'use strict';

angular.
module('myApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                template: '<shopping-list></shopping-list>'
            }).
            otherwise('/');
    }
]);
