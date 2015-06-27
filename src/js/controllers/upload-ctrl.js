 angular
    .module('RDash')
    .controller('UploadController', ['$scope',  '$cookieStore', '$location', '$reader', UploadController]);




function UploadController($scope, $cookieStore, $location, $reader) {
    console.log(fileReader)
    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    }); 
};




