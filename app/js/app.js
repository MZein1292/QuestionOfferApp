var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });
    
    
 $routeProvider.otherwise({ redirectTo: '/login' });
    
});