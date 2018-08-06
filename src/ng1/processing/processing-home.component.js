'use strict';

angular.
  module('processing').
  component('processingHome', {
    templateUrl: 'src/ng1/processing/processing-home.component.html',
    controller: ['$routeParams', 'Phone',
      function ProcessingHomeController($routeParams, Phone) {
        var self = this;

        self.title = 'Processing Home'
      }
    ]
  });
