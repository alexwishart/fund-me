'use strict';

/**
 * @ngdoc service
 * @name fundmeApp.send
 * @description
 * # send
 * Service in the fundmeApp.
 */
angular.module('fundMe')
  .service('send', function ($http) {
    var url = 'http://localhost:1880/vote';

    var bronze = function() {
      console.log('bronze');
      $http({
        method: 'POST',
        url: url,
        data: { amount: 'bronze' }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var silver = function() {
      $http({
        method: 'POST',
        url: url,
        data: { amount: 'silver' }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var gold = function() {
      $http({
        method: 'POST',
        url: url,
        data: { amount: 'gold' }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    return {
      bronze: bronze,
      silver: silver,
      gold: gold
    };
  });
