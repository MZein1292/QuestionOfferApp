//
//This controller is for  the profile view
var app = angular.module('RDash');
app.controller('profileCtrl', [  '$scope', '$http', '$cookieStore', '$location', '$log' , '$modal' , profileCtrl]);

function profileCtrl($scope, $http, $cookieStore, $location, $log, $modal) {
    
   
    
   //Default Values 
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
