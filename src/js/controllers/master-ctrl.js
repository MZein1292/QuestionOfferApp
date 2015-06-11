/**
 * Master Controller
 */

 angular
    .module('RDash')
    .controller('MasterCtrl', ['$scope',  '$cookieStore', '$location', MasterCtrl]);




function MasterCtrl($scope, $cookieStore, $location) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;
    


    $scope.getWidth = function() {
        return window.innerWidth;
    };
    
    
    /*
    
    
    THIS IS FOR THE LOGIN and Registration
    
    */
    
 
    $scope.login = function() {
        if($scope.credentials.username !== "admin" && $scope.credentials.password !== "admin") {
            alert("you are not the admin");
        }
        else{
            $location.path('/');
          }

      };
    
     $scope.register = function() {
        $location.path('/register');
        }
     
     
     $scope.user = {
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


  
      
    
    /*
    
    this is where adding questions start
    
    */
    
    $scope.rows = [
                    { 'question':'Number of attendance tonight',
                    	'response': "4000",
                    	'percentage': '70%'},
                  
                    ];
    
    $scope.addRow = function(){		
	$scope.rows.push({ 'question':$scope.question, 'response': $scope.response, 'percentage':$scope.percentage });
	$scope.question='';
	$scope.response='';
	$scope.percentage='';
        
    };
    
    
       /*
    
    this is where adding offers start
    
    */
    
    $scope.rows2 = [
                    { 'offerText':'Whoop Whoop',
                      'tagName': '50% off the large pizza ',
                      'expiration': '2016-06-05',
                      'location': 'MI',
                      'views': '340',
                      'claimed': '120',
                      'sharedcount': '5',
                      'redeemed': 'N/A'},
                    ];
    
    $scope.addRow2 = function(){		
	$scope.rows2.push({ 'offerText':$scope.offerText, 'tagName': $scope.tagName, 'expiration': $scope.expiration, 'location': $scope.state.currentState, 'views': 'N/A', claimed: 'N/A' , sharedcount: 'N/A' , redeemed: 'N/A' });
	$scope.offerText='';
	$scope.tagName='';
	$scope.expiration='';
    $scope.state.currentState='';
    
    
    
        
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
    
    $scope.congrats =
        [
        "Whoop Whoop, You Got It!",
        "Superb! You Won ! ",
        "You won an offer from us!"
        ]
    
  
    

    
  

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



   