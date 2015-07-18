//
//This is the controller for the add game page
var app = angular.module('RDash');
app.controller('gameCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$log' , '$modal' , gameCtrl]);
app.controller('ModalInstanceCtrl3', [ '$scope' , '$window', '$modalInstance' , 'rows3', 'offerTagMulti', 'questionTagMulti',  ModalInstanceCtrl3]);

function gameCtrl($scope, $http, $cookieStore, $location, $log, $modal) {
    
    //Saves the default example rows
    $scope.rows3 = [
                    {   'offerTag': "50% off the large pizza",
                        'questionTag':'Attendance',
                        'start': "2015-08-01",
                        'expire': "2016-06-05",
                    }
    ];

      $scope.offerTagMulti =
        [
        "Bronx offer",
        "Pradeep's Offer",
        "CVS deal"
        ]
      
        $scope.questionTagMulti =
        [
        "beverages",
        "quiz",
        "history question"
        ]

    


    $scope.animationsEnabled = true;
    
    
//THIS OPENS THE MODAL
    $scope.open3 = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent3.html',
      controller: 'ModalInstanceCtrl3',
      size: size,
      resolve: {
        rows3: function () {
          return $scope.rows3;
        },
        offerTagMulti: function() {
          return $scope.offerTagMulti;
        },
        questionTagMulti: function() {
          return $scope.questionTagMulti;
        },
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

function  ModalInstanceCtrl3($scope, $window, $modalInstance, rows3, offerTagMulti, questionTagMulti) {

 


   $scope.rows3 = rows3;
   $scope.offerTagMulti = offerTagMulti;
   $scope.questionTagMulti = questionTagMulti;

   $scope.ok = function () {
       
   $scope.date = new Date();
       
   var startDate = new Date($scope.start);  
   var endDate = new Date($scope.expire);
 
       
       //Checks for date errors
    if(startDate.getTime() > endDate.getTime())
    {
        window.alert("ERROR: expiration date is before start date");
        $modalInstance.dismiss('cancel');
    }
    else if(startDate.getTime() < $scope.date.getTime()) {
        window.alert("ERROR: Start date is before today");
        $modalInstance.dismiss('cancel');
    }
    else if(endDate.getTime() < $scope.date.getTime()) {
        window.alert("ERROR: end date is before today");
        $modalInstance.dismiss('cancel');
    }
        
    else
    {
    
        //Pushes the new game   
    $scope.addRow3 = function(){   
    $scope.rows3.push({ 'offerTag':$scope.offerTag, 'questionTag': $scope.questionTag, 'start': $scope.start, 'expire': $scope.expire });
    $scope.offerTag='';
    $scope.questionTag='';
    $scope.start= '';
    $scope.expire='';
        
    };

    $modalInstance.close();
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};