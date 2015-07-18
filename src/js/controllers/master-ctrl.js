/**
 * Master Controller
 */
var app = angular.module('RDash');
app.controller('MasterCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$log' , '$modal' , MasterCtrl]);



function MasterCtrl($scope, $http, $cookieStore, $location, $log, $modal) {
    
    
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;
    

    $scope.getWidth = function() {
        return window.innerWidth;
    };
    
   
   
     
     
     
    
  
    /*
    
    STATE SELECTION
    
    */
    
   
    
    
    $scope.state = {
        currentState: 'AL'
    };
    
    $scope.states =
    [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
]
    
    
    
    
  //STAR RATING GOR FEEDBACK PAGE
    
  $scope.rate = 3;
  $scope.max = 5
    
    
    
    
    
  
  
        
    $scope.visible = false;

    $scope.close = function() {
            $scope.visible = false;
    };

    document.addEventListener("keyup", function(e) {
            if (e.keyCode === 27)
                    $scope.$apply(function() {
                            if ($scope.visible === true)
                                    $scope.close();
                            });
            });

    
  

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
    
}



    


  



