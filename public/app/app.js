var app = angular.module('fundMe', [
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
      enabled: true
  });

  $urlRouterProvider
      .otherwise('');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('help', {
      url: '/help',
      templateUrl: 'app/help/help.html',
      controller: 'HelpCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    })
    .state('aardvarks', {
      url: '/aardvarks',
      views: {
        '': {
          templateUrl: 'app/projects/aardvarks/home.html',
          controller: 'AardvarksCtrl'
        },
        'about@aardvarks': {
          templateUrl: 'app/projects/aardvarks/about.html',
          controller: 'AardvarksCtrl'
         },
        'raised@aardvarks': {
          templateUrl: 'app/projects/aardvarks/raised.html',
          controller: 'AardvarksCtrl'
        },
        'donate@aardvarks': {
          templateUrl: 'app/projects/aardvarks/donate.html',
          controller: 'AardvarksCtrl'
        }
      }
    })
    .state('badgers', {
      url: '/badgers',
      views: {
        '': {
          templateUrl: 'app/projects/badgers/home.html',
          controller: 'BadgersCtrl'
        },
        'about@badgers': {
          templateUrl: 'app/projects/badgers/about.html',
          controller: 'BadgersCtrl'
         },
        'raised@badgers': {
          templateUrl: 'app/projects/badgers/raised.html',
          controller: 'BadgersCtrl'
        },
        'donate@badgers': {
          templateUrl: 'app/projects/badgers/donate.html',
          controller: 'BadgersCtrl'
        }
      }
    })
    .state('camels', {
      url: '/camels',
      views: {
        '': {
          templateUrl: 'app/projects/camels/home.html',
          controller: 'CamelsCtrl'
        },
        'about@camels': {
          templateUrl: 'app/projects/camels/about.html',
          controller: 'CamelsCtrl'
         },
        'raised@camels': {
          templateUrl: 'app/projects/camels/raised.html',
          controller: 'CamelsCtrl'
        },
        'donate@camels': {
          templateUrl: 'app/projects/camels/donate.html',
          controller: 'CamelsCtrl'
        }
      }
    })
    .state('dogs', {
      url: '/dogs',
      views: {
        '': {
          templateUrl: 'app/projects/dogs/home.html',
          controller: 'DogsCtrl'
        },
        'about@dogs': {
          templateUrl: 'app/projects/dogs/about.html',
          controller: 'DogsCtrl'
         },
        'raised@dogs': {
          templateUrl: 'app/projects/dogs/raised.html',
          controller: 'DogsCtrl'
        },
        'donate@dogs': {
          templateUrl: 'app/projects/dogs/donate.html',
          controller: 'DogsCtrl'
        }
      }
    })
    .state('elephants', {
      url: '/elephants',
      views: {
        '': {
          templateUrl: 'app/projects/elephants/home.html',
          controller: 'ElephantsCtrl'
        },
        'about@elephants': {
          templateUrl: 'app/projects/elephants/about.html',
          controller: 'ElephantsCtrl'
         },
        'raised@elephants': {
          templateUrl: 'app/projects/elephants/raised.html',
          controller: 'ElephantsCtrl'
        },
        'donate@elephants': {
          templateUrl: 'app/projects/elephants/donate.html',
          controller: 'ElephantsCtrl'
        }
      }
    })
    .state('foxes', {
      url: '/foxes',
      views: {
        '': {
          templateUrl: 'app/projects/foxes/home.html',
          controller: 'FoxesCtrl'
        },
        'about@foxes': {
          templateUrl: 'app/projects/foxes/about.html',
          controller: 'FoxesCtrl'
         },
        'raised@foxes': {
          templateUrl: 'app/projects/foxes/raised.html',
          controller: 'FoxesCtrl'
        },
        'donate@foxes': {
          templateUrl: 'app/projects/foxes/donate.html',
          controller: 'FoxesCtrl'
        }
      }
    })
    .state('gorillas', {
      url: '/gorillas',
      views: {
        '': {
          templateUrl: 'app/projects/gorillas/home.html',
          controller: 'GorillasCtrl'
        },
        'about@gorillas': {
          templateUrl: 'app/projects/gorillas/about.html',
          controller: 'GorillasCtrl'
         },
        'raised@gorillas': {
          templateUrl: 'app/projects/gorillas/raised.html',
          controller: 'GorillasCtrl'
        },
        'donate@gorillas': {
          templateUrl: 'app/projects/gorillas/donate.html',
          controller: 'GorillasCtrl'
        }
      }
    })
    .state('hippos', {
      url: '/hippos',
      views: {
        '': {
          templateUrl: 'app/projects/hippos/home.html',
          controller: 'HipposCtrl'
        },
        'about@hippos': {
          templateUrl: 'app/projects/hippos/about.html',
          controller: 'HipposCtrl'
         },
        'raised@hippos': {
          templateUrl: 'app/projects/hippos/raised.html',
          controller: 'HipposCtrl'
        },
        'donate@hippos': {
          templateUrl: 'app/projects/hippos/donate.html',
          controller: 'HipposCtrl'
        }
      }
    })
    .state('iguanas', {
      url: '/iguanas',
      views: {
        '': {
          templateUrl: 'app/projects/iguanas/home.html',
          controller: 'IguanasCtrl'
        },
        'about@iguanas': {
          templateUrl: 'app/projects/iguanas/about.html',
          controller: 'IguanasCtrl'
         },
        'raised@iguanas': {
          templateUrl: 'app/projects/iguanas/raised.html',
          controller: 'IguanasCtrl'
        },
        'donate@iguanas': {
          templateUrl: 'app/projects/iguanas/donate.html',
          controller: 'IguanasCtrl'
        }
      }
    })
    .state('jaguars', {
      url: '/jaguars',
      views: {
        '': {
          templateUrl: 'app/projects/jaguars/home.html',
          controller: 'JaguarsCtrl'
        },
        'about@jaguars': {
          templateUrl: 'app/projects/jaguars/about.html',
          controller: 'JaguarsCtrl'
         },
        'raised@jaguars': {
          templateUrl: 'app/projects/jaguars/raised.html',
          controller: 'JaguarsCtrl'
        },
        'donate@jaguars': {
          templateUrl: 'app/projects/jaguars/donate.html',
          controller: 'JaguarsCtrl'
        }
      }
    })
    .state('koalas', {
      url: '/koalas',
      views: {
        '': {
          templateUrl: 'app/projects/koalas/home.html',
          controller: 'KoalasCtrl'
        },
        'about@koalas': {
          templateUrl: 'app/projects/koalas/about.html',
          controller: 'KoalasCtrl'
         },
        'raised@koalas': {
          templateUrl: 'app/projects/koalas/raised.html',
          controller: 'KoalasCtrl'
        },
        'donate@koalas': {
          templateUrl: 'app/projects/koalas/donate.html',
          controller: 'KoalasCtrl'
        }
      }
    })
    .state('llamas', {
      url: '/llamas',
      views: {
        '': {
          templateUrl: 'app/projects/llamas/home.html',
          controller: 'LlamasCtrl'
        },
        'about@llamas': {
          templateUrl: 'app/projects/llamas/about.html',
          controller: 'LlamasCtrl'
         },
        'raised@llamas': {
          templateUrl: 'app/projects/llamas/raised.html',
          controller: 'LlamasCtrl'
        },
        'donate@llamas': {
          templateUrl: 'app/projects/llamas/donate.html',
          controller: 'LlamasCtrl'
        }
      }
    })
    .state('monkeys', {
      url: '/monkeys',
      views: {
        '': {
          templateUrl: 'app/projects/monkeys/home.html',
          controller: 'MonkeysCtrl'
        },
        'about@monkeys': {
          templateUrl: 'app/projects/monkeys/about.html',
          controller: 'MonkeysCtrl'
         },
        'raised@monkeys': {
          templateUrl: 'app/projects/monkeys/raised.html',
          controller: 'MonkeysCtrl'
        },
        'donate@monkeys': {
          templateUrl: 'app/projects/monkeys/donate.html',
          controller: 'MonkeysCtrl'
        }
      }
    })
    .state('newts', {
      url: '/newts',
      views: {
        '': {
          templateUrl: 'app/projects/newts/home.html',
          controller: 'NewtsCtrl'
        },
        'about@newts': {
          templateUrl: 'app/projects/newts/about.html',
          controller: 'NewtsCtrl'
         },
        'raised@newts': {
          templateUrl: 'app/projects/newts/raised.html',
          controller: 'NewtsCtrl'
        },
        'donate@newts': {
          templateUrl: 'app/projects/newts/donate.html',
          controller: 'NewtsCtrl'
        }
      }
    })
    .state('project1', {
      url: '/project1',
      views: {
        '': {
          templateUrl: 'app/projects/project1/project1.html',
          controller: 'Project1Ctrl'
        },
        'about@project1': {
          templateUrl: 'app/projects/project1/project1.about.html',
          controller: 'Project1Ctrl'
         },
        'raised@project1': {
          templateUrl: 'app/projects/project1/project1.raised.html',
          controller: 'Project1Ctrl'
        },
        'donate@project1': {
          templateUrl: 'app/projects/project1/project1.donate.html',
          controller: 'Project1Ctrl'
        }
      }
    });
});
