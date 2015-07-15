app.controller('CleanersCtrl', function($scope, SignInFactory, SelectedFactory) {
	console.log('ran cleaners ctrl');

	// redirect if not signed in
	SignInFactory.checkSignIn();

	// save the current user data to scope
	$scope.signData = SignInFactory;

	// store the selected request
	$scope.selected = SelectedFactory;

});