app.directive('request', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/cleaners/request/request.html',
		// scope variables
		request: '=',
		click: '&',
		link: function(scope, element, attrs) {

		}
	};
});