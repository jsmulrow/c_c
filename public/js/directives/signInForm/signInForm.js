app.directive('signInForm', function(SignInFactory, FormFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/signInForm/signInForm.html',
		link: function(scope, element, attrs) {
			// update the sign in factory

				scope.failedSignIn = false;

				scope.signIn = function(user) {
					console.log(user);
					// make ajax post request to login
					FormFactory.signIn(user)
						.then(function(status) {
							console.log(status);
							if (status === 'success') {
								scope.failedSignIn = false;
								SignInFactory.signedIn = true;
								// SignInFactory.user = user;
								// set the user
								FormFactory.getUser(user)
									.then(function(resUser) {
										SignInFactory.user = resUser;
										console.log('res user', resUser);
									});
							} else {
								scope.failedSignIn = true;
							}
						});
				};
		}
	};
});