//This is the controller for the login view page
var app = angular.module('RDash');
app.controller('loginCtrl', [  '$scope', '$http', '$window', '$cookieStore', '$location', '$log' , '$modal' , loginCtrl]);


function loginCtrl($scope, $http, $window, $cookieStore, $location, $log, $modal) {
    
    
    
    $scope.register = function() {
        $location.path('/sponsorRegister');
        }
     
     
     $scope.forgotpass = function() {
         $location.path('/forgotPass');
     }

    
        

    
    
     $scope.login = function() {
        
        var url = "http://speaqbackend.duckdns.org:5000/mobile/loginEmail";
        
        var postdata = { 
            email: $scope.credentials.username,
            password: $scope.credentials.password
        };
        
        $http.post(url, postdata, {headers: { 'Content-Type': 'application/json'}}).success(function(data, status) {
          console.log(data);
        if(data.res) {
            $window.sessionStorage.token = data.token;
            $location.path('/adminDashboard');
        } else {
            //alert for failed userlogin
            console.log("error");
         }
        });
         
}
     
     //this commented code is for the sponsor team selection
    //WE DECIDED TO MAKE ONE REGISTRATION PAGE, THIS CODE IS KEPT FOR FUTURE NEEDS
     ///////////////////////////////////////////////////////////////////////////////////////
     
    /* $scope.user = {
        currentRegisterar: 'Sponsor'
    };
 
    $scope.activities =
    [
        "Sponsor",
        "Team"
    ];     
    
    
    
    
    
    $scope.continue = function() 
    {
        if($scope.user.currentRegisterar === $scope.activities[0])
        {
            $location.path("/sponsorRegister");
        }
        else 
            $location.path("/teamRegister");
    }

   */
  
     
     
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    

};