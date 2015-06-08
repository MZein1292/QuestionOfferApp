/**
 * Master Controller
 */

angular
    .module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);




function MasterCtrl($scope, $cookieStore, greeter, $location) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;


    $scope.getWidth = function() {
        return window.innerWidth;
    };
    
    console.log($scope);
    
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

