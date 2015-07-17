app.controller('ProfileCtrl', function($scope, SignInFactory, $state) {
	console.log('ran profile ctrl');
	// redirect if not signed in
	SignInFactory.checkSignIn();
	// save the current user data to scope
	$scope.signData = SignInFactory;

	// super hacky -- find a better way
	$state.go('profile.default');
});