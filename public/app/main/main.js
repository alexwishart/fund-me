'use strict';

angular.module('fundMe')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.projects = [{
      name: 'Android Aardvarks Project',
      team: 'Android Aardvarks',
      state: 'aardvarks'
    },{
      name: 'Bluetooth Badgers Project',
      team: 'Bluetooth Badgers',
      state: 'badgers'
    },{
      name: 'Cloud Camels Project',
      team: 'Cloud Camels',
      state: 'camels'
    },{
      name: 'Data Dogs Project',
      team: 'Data Dogs',
      state: 'dogs'
    },{
      name: 'Electric Elephants Project',
      team: 'Electric Elephants',
      state: 'elephants'
    },{
      name: 'Fibre Foxes Project',
      team: 'Fibre Foxes',
      state: 'foxes'
    },{
      name: 'Gaming Gorillas Project',
      team: 'Gaming Gorillas',
      state: 'gorillas'
    },{
      name: 'Hardware Hippos Project',
      team: 'Hardware Hippos',
      state: 'hippos'
    },{
      name: 'Internet Iguanas Project',
      team: 'Internet Iguanas',
      state: 'iguanas'
    },{
      name: 'Jailbreak Jaguars Project',
      team: 'Jailbreak Jaguars',
      state: 'jaguars'
    },{
      name: 'Keyboard Koalas Project',
      team: 'Keyboard Koalas',
      state: 'koalas'
    },{
      name: 'Laser Llamas Project',
      team: 'Laser Llamas',
      state: 'llamas'
    },{
      name: 'Mainframe Monkeys Project',
      team: 'Mainframe Monkeys',
      state: 'monkeys'
    },{
      name: 'Network Newts Project',
      team: 'Network Newts',
      state: 'newts'
    }];
  }]);
