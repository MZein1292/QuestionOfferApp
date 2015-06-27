'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
        

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "templates/login/login.html",
            controller: 'MasterCtrl'
            
        })
        .state('register', {
            url: "/register",
            templateUrl: "templates/login/register.html",
            controller: 'MasterCtrl'
            
        })
        .state('forgotPass', {
            url: "/forgotPass",
            templateUrl: "templates/login/forgotPass.html",
            controller: 'MasterCtrl'
            
        })
        .state('modal', {
            url: "/modal",
            templateUrl: "templates/login/modal.html",
            
        })
        .state('sponsorRegister', {
            url: "/sponsorRegister",
            templateUrl: "templates/login/sponsorRegister.html",
            controller: 'MasterCtrl'
        })
        .state('teamRegister', {
            url: "/teamRegister",
            templateUrl: "templates/login/teamRegister.html",
            controller: 'MasterCtrl'
        })
        .state('adminDashboard', {
            url: "/adminDashboard",
            templateUrl: "templates/admin/header.html",
            controller: 'MasterCtrl'
        })
        .state('adminDashboard.dashboard', {
                url: '/:dashboard',
                templateUrl: 'templates/admin/adminDashboard.dashboard.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.tables', {
                url: '/:tables',
                templateUrl: 'templates/admin/adminDashboard.tables.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.question', {
                url: '/:question',
                templateUrl: 'templates/admin/adminDashboard.question.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.addOffer', {
                url: '/:addOffer',
                templateUrl: 'templates/admin/adminDashboard.addOffer.html',
                controller: 'MasterCtrl'
            });
        
        
    }]);
                                



