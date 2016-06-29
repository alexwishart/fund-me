'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:Project1Ctrl
 * @description
 * # Project1Ctrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('Project1Ctrl', function ($scope, $http, send, donations) {
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
    donations.get().then(function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; ++i) {
        if (response.data[i][0] === teamName) {
          $scope.raised = response.data[i][1];
        }
      }

    });
  })
  .controller('AardvarksCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('aardvarks');
    };
    $scope.sendSilver = function() {
      send.silver('aardvarks');
    };
    $scope.sendGold = function() {
      send.gold('aardvarks');
    };
    donations.get('aardvarks').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('BadgersCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('badgers');
    };
    $scope.sendSilver = function() {
      send.silver('badgers');
    };
    $scope.sendGold = function() {
      send.gold('badgers');
    };
    donations.get('badgers').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('CamelsCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('camels');
    };
    $scope.sendSilver = function() {
      send.silver('camels');
    };
    $scope.sendGold = function() {
      send.gold('camels');
    };
    donations.get('camels').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('DogsCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('dogs');
    };
    $scope.sendSilver = function() {
      send.silver('dogs');
    };
    $scope.sendGold = function() {
      send.gold('dogs');
    };
    donations.get('dogs').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('ElephantsCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('elephants');
    };
    $scope.sendSilver = function() {
      send.silver('elephants');
    };
    $scope.sendGold = function() {
      send.gold('elephants');
    };
    donations.get('elephants').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('FoxesCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('foxes');
    };
    $scope.sendSilver = function() {
      send.silver('foxes');
    };
    $scope.sendGold = function() {
      send.gold('foxes');
    };
    donations.get('foxes').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('GorillasCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('gorillas');
    };
    $scope.sendSilver = function() {
      send.silver('gorillas');
    };
    $scope.sendGold = function() {
      send.gold('gorillas');
    };
    donations.get('gorillas').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('HipposCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('hippos');
    };
    $scope.sendSilver = function() {
      send.silver('hippos');
    };
    $scope.sendGold = function() {
      send.gold('hippos');
    };
    donations.get('hippos').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('IguanasCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('iguanas');
    };
    $scope.sendSilver = function() {
      send.silver('iguanas');
    };
    $scope.sendGold = function() {
      send.gold('iguanas');
    };
    donations.get('iguanas').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('JaguarsCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('jaguars');
    };
    $scope.sendSilver = function() {
      send.silver('jaguars');
    };
    $scope.sendGold = function() {
      send.gold('jaguars');
    };
    donations.get('jaguars').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('KoalasCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('koalas');
    };
    $scope.sendSilver = function() {
      send.silver('koalas');
    };
    $scope.sendGold = function() {
      send.gold('koalas');
    };
    donations.get('koalas').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('LlamasCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('llamas');
    };
    $scope.sendSilver = function() {
      send.silver('llamas');
    };
    $scope.sendGold = function() {
      send.gold('llamas');
    };
    donations.get('llamas').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('MonkeysCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('monkeys');
    };
    $scope.sendSilver = function() {
      send.silver('monkeys');
    };
    $scope.sendGold = function() {
      send.gold('monkeys');
    };
    donations.get('monkeys').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  })
  .controller('NewtsCtrl', function ($scope, $http, send, donations) {
    $scope.sendBronze = function() {
      send.bronze('newts');
    };
    $scope.sendSilver = function() {
      send.silver('newts');
    };
    $scope.sendGold = function() {
      send.gold('newts');
    };
    donations.get('newts').then(function(response) {
      $scope.donations = response.data.donations;
      $scope.raised = response.data.raised;
    });
  });
