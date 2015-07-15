app.controller('LandingCtrl', function($scope, SignInFactory) {
	console.log('ran landing ctrl');

	// redirect if not signed in
	SignInFactory.checkSignIn();

	$scope.signData = SignInFactory;

})