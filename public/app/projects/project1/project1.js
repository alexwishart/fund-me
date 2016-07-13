'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:Project1Ctrl
 * @description
 * # Project1Ctrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('Project1Ctrl', function ($scope, $http, $interval, send, donations) {
    var teamName = 'project1';

    $scope.sendBronze = function() {
      send.bronze(teamName);
    };
    $scope.sendSilver = function() {
      send.silver(teamName);
    };
    $scope.sendGold = function() {
      send.gold(teamName);
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('AardvarksCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('aardvarks');
    };
    $scope.sendSilver = function() {
      send.silver('aardvarks');
    };
    $scope.sendGold = function() {
      send.gold('aardvarks');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('BadgersCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('badgers');
    };
    $scope.sendSilver = function() {
      send.silver('badgers');
    };
    $scope.sendGold = function() {
      send.gold('badgers');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('CamelsCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('camels');
    };
    $scope.sendSilver = function() {
      send.silver('camels');
    };
    $scope.sendGold = function() {
      send.gold('camels');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('DogsCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('dogs');
    };
    $scope.sendSilver = function() {
      send.silver('dogs');
    };
    $scope.sendGold = function() {
      send.gold('dogs');
    };
    $interval(function() {
      donations.get('dogs').then(function(response) {
        for (var i = 0; i < response.data.length; ++i) {
          if (response.data[i][0] === 'dogs') {
            $scope.raised = response.data[i][1] || 0;
            $scope.donations = 'Unknown';
          }
        }
      });
    }, 2000);
  })
  .controller('ElephantsCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('elephants');
    };
    $scope.sendSilver = function() {
      send.silver('elephants');
    };
    $scope.sendGold = function() {
      send.gold('elephants');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('FoxesCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('foxes');
    };
    $scope.sendSilver = function() {
      send.silver('foxes');
    };
    $scope.sendGold = function() {
      send.gold('foxes');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('GorillasCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('gorillas');
    };
    $scope.sendSilver = function() {
      send.silver('gorillas');
    };
    $scope.sendGold = function() {
      send.gold('gorillas');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('HipposCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('hippos');
    };
    $scope.sendSilver = function() {
      send.silver('hippos');
    };
    $scope.sendGold = function() {
      send.gold('hippos');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('IguanasCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('iguanas');
    };
    $scope.sendSilver = function() {
      send.silver('iguanas');
    };
    $scope.sendGold = function() {
      send.gold('iguanas');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('JaguarsCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('jaguars');
    };
    $scope.sendSilver = function() {
      send.silver('jaguars');
    };
    $scope.sendGold = function() {
      send.gold('jaguars');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('KoalasCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('koalas');
    };
    $scope.sendSilver = function() {
      send.silver('koalas');
    };
    $scope.sendGold = function() {
      send.gold('koalas');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('LlamasCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('llamas');
    };
    $scope.sendSilver = function() {
      send.silver('llamas');
    };
    $scope.sendGold = function() {
      send.gold('llamas');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('MonkeysCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('monkeys');
    };
    $scope.sendSilver = function() {
      send.silver('monkeys');
    };
    $scope.sendGold = function() {
      send.gold('monkeys');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  })
  .controller('NewtsCtrl', function ($scope, $http, $interval, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('newts');
    };
    $scope.sendSilver = function() {
      send.silver('newts');
    };
    $scope.sendGold = function() {
      send.gold('newts');
    };
    var fun = function() {
      donations.get().then(function successCallback(response) {
        var bronze = (response.data.match(/bronze/g) || []).length;
        var silver = (response.data.match(/silver/g) || []).length;
        var gold = (response.data.match(/gold/g) || []).length;

        $scope.raised = bronze * 50 + silver * 100 + gold * 150 || 0;
        $scope.numDonations = bronze + silver + gold;
      });
    };
    fun();
    $interval(fun, 5000);
  });
