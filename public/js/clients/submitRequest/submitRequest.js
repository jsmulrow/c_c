app.directive('submitRequest', function(FormFactory, SignInFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/clients/submitRequest/submitRequest.html',
		scope: {
			user: '='
		},
		link: function(scope, element, attrs) {
			scope.dirtyRange = [1,2,3,4,5,6,7,8,9,10];
			scope.request = {};
			scope.addRequest = function(request) {
				// attach user id to the request (for population later)
				request.author = scope.user._id;
				FormFactory.createRequest(request)
					.then(function(data) {
						console.log('res', data);
					});
			};
		}
	};
});