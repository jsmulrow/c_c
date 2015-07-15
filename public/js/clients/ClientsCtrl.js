app.controller('ClientsCtrl', function($scope, SignInFactory) {
	console.log('ran clients ctrl');
	
	// redirect if not signed in
	SignInFactory.checkSignIn();

	// save the current user data to scope
	$scope.signData = SignInFactory;
});