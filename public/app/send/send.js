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
    var url = 'http://old-anna-nr.mybluemix.net/fundMe';

    var bronze = function(team) {
      console.log('bronze');
      $http({
        method: 'POST',
        url: url,
        data: {
          medal: 'bronze',
          team: team
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var silver = function(team) {
      $http({
        method: 'POST',
        url: url,
        data: {
          medal: 'silver',
          team: team
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var gold = function(team) {
      $http({
        method: 'POST',
        url: url,
        data: {
          medal: 'gold',
          team: team
        }
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
