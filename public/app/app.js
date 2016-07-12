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
          templateUrl: 'app/projects/aardvarks/about.html'
         },
        'raised@aardvarks': {
          templateUrl: 'app/projects/aardvarks/raised.html'
        },
        'donate@aardvarks': {
          templateUrl: 'app/projects/aardvarks/donate.html'
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
          templateUrl: 'app/projects/badgers/about.html'
         },
        'raised@badgers': {
          templateUrl: 'app/projects/badgers/raised.html'
        },
        'donate@badgers': {
          templateUrl: 'app/projects/badgers/donate.html'
        }
      }
    })
    .state('cows', {
      url: '/cows',
      views: {
        '': {
          templateUrl: 'app/projects/cows/home.html',
          controller: 'CamelsCtrl'
        },
        'about@cows': {
          templateUrl: 'app/projects/cows/about.html'
         },
        'raised@cows': {
          templateUrl: 'app/projects/cows/raised.html'
        },
        'donate@cows': {
          templateUrl: 'app/projects/cows/donate.html'
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
          templateUrl: 'app/projects/dogs/about.html'
         },
        'raised@dogs': {
          templateUrl: 'app/projects/dogs/raised.html'
        },
        'donate@dogs': {
          templateUrl: 'app/projects/dogs/donate.html'
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
          templateUrl: 'app/projects/elephants/about.html'
         },
        'raised@elephants': {
          templateUrl: 'app/projects/elephants/raised.html'
        },
        'donate@elephants': {
          templateUrl: 'app/projects/elephants/donate.html'
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
          templateUrl: 'app/projects/foxes/about.html'
         },
        'raised@foxes': {
          templateUrl: 'app/projects/foxes/raised.html'
        },
        'donate@foxes': {
          templateUrl: 'app/projects/foxes/donate.html'
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
          templateUrl: 'app/projects/gorillas/about.html'
         },
        'raised@gorillas': {
          templateUrl: 'app/projects/gorillas/raised.html'
        },
        'donate@gorillas': {
          templateUrl: 'app/projects/gorillas/donate.html'
        }
      }
    })
    .state('hens', {
      url: '/hens',
      views: {
        '': {
          templateUrl: 'app/projects/hens/home.html',
          controller: 'HipposCtrl'
        },
        'about@hens': {
          templateUrl: 'app/projects/hens/about.html'
         },
        'raised@hens': {
          templateUrl: 'app/projects/hens/raised.html'
        },
        'donate@hens': {
          templateUrl: 'app/projects/hens/donate.html'
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
          templateUrl: 'app/projects/iguanas/about.html'
         },
        'raised@iguanas': {
          templateUrl: 'app/projects/iguanas/raised.html'
        },
        'donate@iguanas': {
          templateUrl: 'app/projects/iguanas/donate.html'
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
          templateUrl: 'app/projects/jaguars/about.html'
         },
        'raised@jaguars': {
          templateUrl: 'app/projects/jaguars/raised.html'
        },
        'donate@jaguars': {
          templateUrl: 'app/projects/jaguars/donate.html'
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
          templateUrl: 'app/projects/koalas/about.html'
         },
        'raised@koalas': {
          templateUrl: 'app/projects/koalas/raised.html'
        },
        'donate@koalas': {
          templateUrl: 'app/projects/koalas/donate.html'
        }
      }
    })
    .state('lions', {
      url: '/lions',
      views: {
        '': {
          templateUrl: 'app/projects/lions/home.html',
          controller: 'LlamasCtrl'
        },
        'about@lions': {
          templateUrl: 'app/projects/lions/about.html'
         },
        'raised@lions': {
          templateUrl: 'app/projects/lions/raised.html'
        },
        'donate@lions': {
          templateUrl: 'app/projects/lions/donate.html'
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
          templateUrl: 'app/projects/monkeys/about.html'
         },
        'raised@monkeys': {
          templateUrl: 'app/projects/monkeys/raised.html'
        },
        'donate@monkeys': {
          templateUrl: 'app/projects/monkeys/donate.html'
        }
      }
    })
    .state('narwhals', {
      url: '/narwhals',
      views: {
        '': {
          templateUrl: 'app/projects/narwhals/home.html',
          controller: 'NewtsCtrl'
        },
        'about@narwhals': {
          templateUrl: 'app/projects/narwhals/about.html'
         },
        'raised@narwhals': {
          templateUrl: 'app/projects/narwhals/raised.html'
        },
        'donate@narwhals': {
          templateUrl: 'app/projects/narwhals/donate.html'
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
          templateUrl: 'app/projects/project1/project1.about.html'
         },
        'raised@project1': {
          templateUrl: 'app/projects/project1/project1.raised.html'
        },
        'donate@project1': {
          templateUrl: 'app/projects/project1/project1.donate.html'
        }
      }
    });
});
