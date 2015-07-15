app.controller('FormCtrl', function($scope, FormFactory) {
	$scope.dirtyRange = [1,2,3,4,5,6,7,8,9,10];

	$scope.request = {};

	$scope.addRequest = function(request) {
		console.log(request);
		FormFactory.createRequest(request)
			.then(function(data) {
				console.log('res', data);
			});
	};

	$scope.debug = function() {
		console.log($scope.dirtyRange);
		console.log($scope.counter);

	};
});