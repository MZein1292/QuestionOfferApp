angular.module('RDash').directive("modal", function($rootScope, $timeout) {
    return {
            restrict: "E",
            templateUrl: "templates/modal.html",
            transclude: true
    };
});