app.directive('activeRequest', function(SelectedFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/cleaners/activeRequest/activeRequest.html',
		scope: {
			request: '='
		},
		link: function(scope, element, attrs) {
			
			function acceptRequest(request) {
				console.log('accepting the request', request);
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