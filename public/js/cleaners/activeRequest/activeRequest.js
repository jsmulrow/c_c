app.directive('activeRequest', function(SelectedFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/cleaners/activeRequest/activeRequest.html',
		scope: {
			request: '='
		},
		link: function(scope, element, attrs) {
			scope.selected = SelectedFactory;
		}
	};
});