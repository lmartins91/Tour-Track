angular.module('Tour-Track').directive('showsPanel', function(General) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../components/general/progressMap/directives/showsPanel/showsPanel.html',
        scope: {
        	shows: '='
        },
        link: function(scope, element, attrs) {

        }
    };
});