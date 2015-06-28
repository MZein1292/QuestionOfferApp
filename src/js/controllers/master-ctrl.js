/**
 * Master Controller
 */
var app = angular.module('RDash');

app.controller('MasterCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$window', '$interval', MasterCtrl]);




function MasterCtrl($scope, $http, $cookieStore, $location, $window) {
    
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
        
        var url = "http://speaqbackend.duckdns.org:5000/mobile/loginEmail";
        
        var postdata = { 
            email: $scope.credentials.username,
            password: $scope.credentials.password
        };
        
        $http.post(url, postdata, {headers: { 'Content-Type': 'application/json'}}).success(function(data, status) {
          console.log(data);
        if(data.res) {
            $window.sessionStorage.token = data.token;
            $location.path('adminDashboard');
        } else {
            //alert for failed userlogin
            console.log("error");
         }
        });
        
       // if($scope.credentials.username !== "admin" && $scope.credentials.password !== "admin") {
        //    alert("you are not the admin");
    //    }
    //    else{
      //      $location.path('/adminDashboard');
    //      }

      };
    
     $scope.register = function() {
        $location.path('/sponsorRegister');
        }
     
      $scope.addQuestion = function() {
        $location.path('/adminDashboard/question');
        }
     
     $scope.forgotpass = function() {
         $location.path('/forgotPass');
     }
     
     $scope.modal = function() {
         $location.path('/modal');
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
      
    
    /*
    
    this is where adding questions start
    
    */
    
    
    $scope.rows = [
                    {   'tagName': "Attendance",
                        'question':'Number of attendance tonight',
                    	'response': "4000",
                        'percentage': "70%"
                        }];
    
    
    
   
    
    $scope.addRow = function(){
        
        
     if($scope.myCheckbox1)
        $scope.response = $scope.response1;
    else if($scope.myCheckbox2)
        $scope.response = $scope.response2;
    else if($scope.myCheckbox3)
        $scope.response = $scope.response3;
    else if($scope.mycheckbox4)
        $scope.response = $scope.response4;
    else
        $scope.response = "N/A"
        
        
	$scope.rows.push({ 'question':$scope.question, 'response': $scope.response, 'tagName': $scope.tagName, 'percentage': 'N/A' });
	$scope.question='';
	$scope.response='';
    $scope.tagName='';
        
    };
    
    $scope.removeRow = function(tagName){				
		var index = -1;		
		var comArr = eval( $scope.rows );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Question Deleted" );
		}
		$scope.rows.splice( index, 1 );		
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
    
        
   
    
    $scope.cbSelected = function() {            //if checkbox is checked disable texbox for dates
        if($scope.dateCB) {
            $scope.rows2.expiration = 'N/A';
        }
    };

    
    $scope.addRow2 = function(){		
	$scope.rows2.push({ 'offerText':$scope.offerText, 'tagName': $scope.tagName, 'expiration': $scope.expiration, 'location': $scope.state.currentState, 'views': 'N/A', claimed: 'N/A' , sharedcount: 'N/A' , redeemed: 'N/A' });
	$scope.offerText='';
	$scope.tagName='';
	$scope.expiration='';
    $scope.state.currentState='';
        
    };
    
    $scope.removeRow2 = function(tagName){				
		var index = -1;		
		var comArr = eval( $scope.rows2 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Question Deleted" );
		}
		$scope.rows2.splice( index, 1 );		
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
    
    
    
    
    
    
    $scope.congrats =
        [
        "Whoop Whoop, You Got It!",
        "Superb! You Won ! ",
        "You won an offer from us!"
        ]
    
  
        
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
    
    /* 
    
    MODAL FOR POP UP
    
    */

    
    /*
    
    
    BELOW CODE IS FOR EDITING PROFILE PAGE
    
    */
    
    
    $scope.text02 = 'Pradeep';
    $scope.text03 = 'Dominos Pizza';
    $scope.text04 = 'San Fransisco, CA';
    $scope.text05 = 'Detroit, Michigan';
    $scope.text06 = 'info@support.com';
    $scope.text07 = '123-4567-890(Rep)<br><br>555-4567-890(Company)';
    $scope.editmode = false;
    $scope.toggleEditMode = function(){
        $scope.myVar = !$scope.myVar;
        $scope.editmode = $scope.editmode === false ? true: false;
  }
    
   
  
    
 
}


//DIRECTIVE FOR EDITING PROFILE
app.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});


   