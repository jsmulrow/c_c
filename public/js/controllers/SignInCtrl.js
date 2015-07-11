app.controller('SignInCtrl', function($scope, FormFactory) {
	$scope.signedIn = false;
	$scope.user	= null;
	$scope.failedSignIn = false;

	$scope.signIn = function(user) {
		console.log(user);
		// make ajax post request to login
		FormFactory.signIn(user)
			.then(function(status) {
				console.log(status);
				if (status === 'success') {
					$scope.failedSignIn = false;
					$scope.signedIn = true;
					$scope.user = user;
				} else {
					$scope.failedSignIn = true;
					alert('could not find that username');
				}
			});
	};

});