app.controller('ClientCtrl', function($scope, FormSubmitFactory) {
	$scope.signedIn = false;
	$scope.user = null;

	$scope.name = "Jack";

	$scope.signIn = function(user) {
		console.log('user ', user);
		FormSubmitFactory.getUser(user)
			.then(function(user) {
				if (user) {
					$scope.signedIn = true;
					$scope.user = user;
					$scope.name = user.name;
					console.log($scope.user);
				} else {
					alert('Sorry, could not find that user');
				}
			});
	};

});