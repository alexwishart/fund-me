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
    // var url = 'http://thinkit2016.mybluemix.net/votes.json';
    var url = 'http://anna-nr.mybluemix.net/getVotes';

    var get = function(team) {
      return $http({
        method: 'GET',
        url: url
      });
    };

    return {
      get: get
    };
  });
