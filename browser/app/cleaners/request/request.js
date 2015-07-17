app.directive('request', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/cleaners/request/request.html',
		// scope variables
		scope: {
			request: '=',
			user: '='
		},
		link: function(scope, element, attrs) {

		}
	};
});