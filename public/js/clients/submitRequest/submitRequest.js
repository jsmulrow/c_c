app.directive('submitRequest', function(FormFactory, SignInFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/clients/submitRequest/submitRequest.html',
		scope: {
			user: '='
		},
		link: function(scope, element, attrs) {

			clearForm();

			scope.dirtyRange = [1,2,3,4,5,6,7,8,9,10];
			scope.request = {};
			function addRequest(request) {
				// attach user id to the request (for population later)
				request.author = scope.user._id;
				FormFactory.createRequest(request)
					.then(function(data) {
						clearForm();
						console.log('res', data);
					});
			}

			function clearForm() {
				scope.request = {
					title: '',
					college: '',
					suite: '',
					// dirtiness doesn't work but whatever
					dirtiness: 1,
					payment: '',
					times: ''
				};
			}

			scope.addRequest = addRequest;
		}
	};
});