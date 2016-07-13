'use strict';

/**
 * @ngdoc service
 * @name fundmeApp.donations
 * @description
 * # donations
 * Service in the fundmeApp.
 */
angular.module('fundMe')
  .service('donations', function ($http) {
    // var url = 'http://anna-nr.mybluemix.net/getVotes';

    var get = function() {
      return $http({
        method: 'GET',
        url: '/votes'
      });
    };

    return {
      get: get
    };
  });
