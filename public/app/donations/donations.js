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
    var url = 'http://old-anna-nr.mybluemix.net/fundMe';

    var get = function(team) {
      return $http({
        method: 'GET',
        url: url + '/' + team
      });
    };

    return {
      get: get
    };
  });
