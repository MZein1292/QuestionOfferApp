//
//This is the controller for the add question page

var app = angular.module('RDash');
app.controller('questionCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$log' , '$modal' , questionCtrl]);  
app.controller('ModalInstanceCtrl1', [ '$scope' , '$modalInstance' , 'rows', 'myCheckbox1', 'myCheckbox2', 'myCheckbox3', 'myCheckbox4', ModalInstanceCtrl1]);  //QUESTION MODAL CONTROLLER

function questionCtrl($scope, $http, $cookieStore, $location, $log, $modal) {
    
    
    //Saves the default example rows
    $scope.rows = [
                    {   'tagName': "Attendance",
                        'question':'Number of attendance tonight',
                        'response': "4000",
                        'percentage': "70%"
                        }];
    

    //Removes a specific row
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
    


    $scope.animationsEnabled = true;
    
    
    //THIS OPENS THE MODAL
    
    
    $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl1',
      size: size,
      resolve: {
        rows: function () {
          return $scope.rows;
        },
        myCheckbox1: function() {
          return $scope.myCheckbox1;
        },
        myCheckbox2: function() {
          return $scope.myCheckbox2;
        },
        myCheckbox3: function() {
          return $scope.myCheckbox3;
        },
        myCheckbox4: function() {
          return $scope.myCheckbox4;
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
function  ModalInstanceCtrl1($scope, $modalInstance, rows, myCheckbox1, myCheckbox2, myCheckbox3, myCheckbox4) {

 
   
   $scope.rows = rows;
   $scope.myCheckbox1 = myCheckbox1;
   $scope.myCheckbox2 = myCheckbox2;
   $scope.myCheckbox3 = myCheckbox3;
   $scope.myCheckbox4 = myCheckbox4;

  
   $scope.ok = function () {
       
    //Checks for the checked Anwser    
    if($scope.myCheckbox1)
        $scope.response = $scope.response1;
    else if($scope.myCheckbox2)
        $scope.response = $scope.response2;
    else if($scope.myCheckbox3)
        $scope.response = $scope.response3;
    else 
        $scope.response = $scope.response4;
 

    //Pushes the new question   
    $scope.rows.push({ 'question':$scope.question, 'response': $scope.response, 'tagName': $scope.tagName, 'percentage': 'N/A' });
    $scope.question='';
    $scope.response='';
    $scope.tagName= '';
    $modalInstance.close();
  };
     //cancel
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};