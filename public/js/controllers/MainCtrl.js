app.controller('MainCtrl', function($scope, SelectedFactory) {

	// store the selected request
	$scope.selected = SelectedFactory;

	$scope.debug = function() {
		console.log($scope.selected);
		console.log($scope.selected.request);
		console.log($scope.selected.request.title);
	};

});