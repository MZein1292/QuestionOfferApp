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
        .state('adminDashboard.question', {
                url: '/:question',
                templateUrl: 'templates/admin/adminDashboard.question.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.offers', {
                url: '/:offers',
                templateUrl: 'templates/admin/adminDashboard.offer.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.profile', {
                url: '/:profile',
                templateUrl: 'templates/admin/adminDashboard.profile.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.support', {
                url: '/:support',
                templateUrl: 'templates/admin/adminDashboard.support.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.feedback', {
                url: '/:feedback',
                templateUrl: 'templates/admin/adminDashboard.feedback.html',
                controller: 'MasterCtrl'
            })
        .state('adminDashboard.game', {
                url: '/:game',
                templateUrl: 'templates/admin/adminDashboard.game.html',
                controller: 'MasterCtrl'
            })
        
    }]);
                                



