var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
  	templateUrl: 'home.html',
  	controller: 'HomeController'

  })
  
  $routeProvider.when('/register', {
  	templateUrl: 'register.html',
  	controller: 'RegisterController'

  });
    
    
 $routeProvider.otherwise({ redirectTo: '/login' });
    
});

app.controller('LoginController', function($scope, $location) {
    window.scope = $scope;
    $scope.credentials = { username: "", password: ""};
    $scope.login = function() {
        if($scope.credentials.username !== "admin" && $scope.credentials.password !== "admin") {
            alert("you are not the admin");
        }
        else{
            $location.path('/home');
        }
    }

            
});

app.controller('HomeController', function($scope, $location) {
        $scope.logout = function() {
        $location.path('/login');
    }
});

app.controller('RegisterController', function($scope, $location) {
        $scope.register = function() {
        $location.path('/register');
    }
});