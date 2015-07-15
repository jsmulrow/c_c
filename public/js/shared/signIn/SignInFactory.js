app.factory('SignInFactory', function($state, UserFactory) {
	return {
		signedIn: false,
		user: null,
		checkSignIn: function() {
			// // for dev purposes:
			console.log('not checking login -- for dev -- in SignInFactory');
			if (!this.signedIn) {
				this.user = {
					name: 'Dev Default'
				};
				this.signedIn = true;
				var self = this;
				UserFactory.getUser({name: 'Jack Mulrow'})
					.then(function(user) {
						self.user = user;
						console.log(user);
					});
			}

			// if (!this.signedIn) {
			// 	$state.go('login.signIn');
			// }
		}
	};
});