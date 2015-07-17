app.directive('activeRequest', function(SelectedFactory, RequestsFactory) {
	return {
		restrict: 'E',
		templateUrl: 'app/cleaners/activeRequest/activeRequest.html',
		scope: {
			request: '=',
			user: '='
		},
		link: function(scope, element, attrs) {
			
			function acceptRequest(requestId, userId) {
				console.log('accepting the request', requestId, userId);
				// add this request's id to the users appointment array
				RequestsFactory.acceptRequest(requestId, userId)
				.then(function(data) {
					console.log(data);
				});
			}

			function doSomethingElse() {
				console.log('think of something else to do here - barter?');
			}

			scope.selected = SelectedFactory;
			scope.acceptRequest = acceptRequest;
			scope.doSomethingElse = doSomethingElse;
		}
	};
});