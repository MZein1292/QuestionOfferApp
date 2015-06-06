var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'app/partials/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
  	templateUrl: 'app/partials/home.html',
  	controller: 'HomeController'

  })
  
  $routeProvider.when('/register', {
  	templateUrl: 'app/partials/register.html',
  	controller: 'RegisterController'

  });

  $routeProvider.when('/forgotpass', {
    templateUrl: 'app/partials/forgotpass.html',
    controller: 'forgotpasscontroller'

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
      $scope.register = function() {
        $location.path('/register');
        }
      $scope.forgotpass = function() {
        $location.path('/forgotpass')
      }


        
});


app.controller('HomeController', function($scope, $location) {
        $scope.logout = function() {
        $location.path('/login');
    }
});


app.controller('RegisterController', function($scope, $location) {
        
    
});


app.controller('forgotpasscontroller', function($scope, $location) {

  $scope.sendCode = function () {
    alert("We have sent the code to your email");
    
  }
        
    
});
