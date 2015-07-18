//
//This is the controller for the add offer page

var app = angular.module('RDash');
app.controller('offerCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$log' , '$modal' , offerCtrl]);  
app.controller('ModalInstanceCtrl2', [ '$scope', '$modalInstance', 'rows2', 'states', 'congrats', ModalInstanceCtrl2]);  //QUESTION MODAL CONTROLLER

function offerCtrl($scope, $http, $cookieStore, $location, $log, $modal) {
    
    //default congrats messages
    $scope.congrats =
        [
        "Whoop Whoop, You Got It!",
        "Superb! You Won ! ",
        "You won an offer from us!"
        ]
    

    
    //Saves the default example rows
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




    $scope.animationsEnabled = true;
    
    
    //THIS OPENS THE MODAL
    $scope.open2 = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2.html',
      controller: 'ModalInstanceCtrl2',
      size: size,
      resolve: {
        rows2: function () {
          return $scope.rows2;
        },
        states: function () {
          return $scope.states;
        },
        congrats: function() {
          return $scope.congrats;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
    
    

};


//MODAL CONTROLLER
function  ModalInstanceCtrl2($scope, $modalInstance, rows2, states, congrats) {

 

   $scope.rows2 = rows2;
   $scope.states = states;
   $scope.congrats = congrats;


  
   $scope.ok = function () {

       
  //Pushes the new offers         
  $scope.addRow2 = function(){    
    $scope.rows2.push({ 'offerText':$scope.offerText, 'tagName': $scope.tagName, 'expiration': $scope.expiration, 'location': $scope.state.currentState, 'views': 'N/A', claimed: 'N/A' , sharedcount: 'N/A' , redeemed: 'N/A' });
    $scope.offerText='';
    $scope.tagName='';
    $scope.expiration='';
    $scope.state.currentState='';
        
    };

    $modalInstance.close();
  };

   //cancel    
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};