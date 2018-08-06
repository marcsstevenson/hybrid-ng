'use strict';

// Define the `processing` module
angular.module('processing', [
  'ngRoute'
]).
config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.
      when('/processing-home', {
        template: '<processing-home></processing-home>'
      })
      .otherwise({template : ''});
  }
]);
