app.directive('activeRequest', function(SelectedFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/activeRequest/activeRequest.html',
		scope: {
			request: '='
		},
		link: function(scope, element, attrs) {
			scope.selected = SelectedFactory;
		}
	};
});