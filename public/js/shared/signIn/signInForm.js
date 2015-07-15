app.directive('signInForm', function(SignInFactory, FormFactory, $state) {
	return {
		restrict: 'E',
		templateUrl: 'js/shared/signIn/signInForm.html',
		link: function(scope, element, attrs) {
			// update the sign in factory

				scope.startRegister = function() {
					scope.register = true;
				};

				scope.registerUser = function(user) {
					console.log(user);
					FormFactory.register(user)
						.then(function(newUser) {
							console.log(newUser);
							SignInFactory.signedIn = true;
							SignInFactory.user = newUser;
						});
				};

				scope.failedSignIn = false;
				scope.badUser = false;
				scope.badPswd = false;

				scope.signIn = function(user) {
					console.log(user);
					// make ajax post request to login
					FormFactory.signIn(user)
						.then(function(res) {
							if (typeof res === 'object') {
								console.log('ye', res);
								scope.failedSignIn = false;
								scope.badUser = false;
								scope.badPswd = false;
								SignInFactory.signedIn = true;
								SignInFactory.user = res;
								$state.go('landingPage');
							} else if (res === 'no user') {
								scope.failedSignIn = true;
								scope.badUser = true;
								scope.badPswd = false;
							} else if (res === 'bad pswd'){
								scope.failedSignIn = true;
								scope.badUser = false;
								scope.badPswd = true;
							}
						});
				};
		}
	};
});