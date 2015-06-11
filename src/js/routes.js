'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('question', {
                url: '/question',
                templateUrl: 'templates/question.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
             })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html'
             })
            .state('teamRegister', {
                url: '/teamRegister',
                templateUrl: 'templates/teamRegister.html'
             })
            .state('sponsorRegister', {
                url: '/sponsorRegister',
                templateUrl: 'templates/sponsorRegister.html'
             })
            .state('forgotPass', {
                url: '/forgotPass',
                templateUrl: 'templates/forgotPass.html'
             })
            .state('addOffer', {
                url: '/addOffer',
                templateUrl: 'templates/addOffer.html'
             });
        
    }
]);


