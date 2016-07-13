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
      name: 'Cloud Cows Project',
      team: 'Cloud Cows',
      state: 'cows'
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
      name: 'Hardware Hens Project',
      team: 'Hardware Hens',
      state: 'hens'
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
      name: 'Laser Lions Project',
      team: 'Laser Lions',
      state: 'lions'
    },{
      name: 'Mobile Monkeys Project',
      team: 'Mobile Monkeys',
      state: 'monkeys'
    },{
      name: 'Network Narwhals Project',
      team: 'Network Narwhals',
      state: 'narwhals'
    }];
  }]);
