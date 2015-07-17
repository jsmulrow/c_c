app.controller('MessageCtrl', function($scope, SelectedMessageFactory) {
	console.log('ran MessageCtrl');

	$scope.message = SelectedMessageFactory.message;
});