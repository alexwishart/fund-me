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
    $interval(function() {
      donations.get('project1').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('aardvarks').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('badgers').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('camels').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
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
    $interval(function() {
      donations.get('elephants').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('foxes').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('gorillas').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('hippos').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('iguanas').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('jaguars').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('koalas').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('llamas').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('monkeys').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
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
    $interval(function() {
      donations.get('newts').then(function(response) {
        $scope.donations = response.data.donations || 0;
        $scope.raised = response.data.raised || 0;
      });
    }, 2000);
  });
