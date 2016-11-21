angular
    .module('ninja', [
        'ui.router',
        'phonebook',
        'contact'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('lista', {
                url: '/',
                templateUrl: 'app/phonebook/templates/list.html',
                controller: 'PhonebookCtrl'
            })
            .state('kontakt', {
                url: '/kontakt',
                templateUrl: 'app/contact/templates/contact.html',
                controller: 'ContactCtrl',
                params: {
                    contact: {}
                }
            })
            .state('izmjena', {
                url: '/izmjena',
                templateUrl: 'app/contact/templates/izmjena.html',
                controller: 'izmjenaCtrl',
                 params: {
                    contact: {}
                }
            })
            .state('novi-kontakt', {
                url: '/novi-kontakt',
                templateUrl: 'app/contact/templates/new-contact.html',
                controller: 'NewContactCtrl'
            })
             .state('about', {
                url: '/about',
                templateUrl: 'app/contact/templates/about.html'
            });
    })
    .run(function($rootScope, AUTHOR) {
        $rootScope.author = AUTHOR;
    });
