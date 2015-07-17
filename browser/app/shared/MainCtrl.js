app.controller('MainCtrl', function($scope, FormFactory, SignInFactory) {
	// $scope.signedIn = false;
	// $scope.user = null;

	$scope.signData = SignInFactory;

	// $scope.signIn = function(user) {
	// 	console.log('user ', user);
	// 	FormFactory.getUser(user)
	// 		.then(function(user) {
	// 			if (user) {
	// 				$scope.signData.signedIn = true;
	// 				$scope.user = user;
	// 				$scope.name = user.name;
	// 				console.log($scope.user);
	// 			} else {
	// 				alert('Sorry, could not find that user');
	// 			}
	// 		});
	// };

});