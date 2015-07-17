app.controller('SidebarCtrl', function($scope, RequestsFactory, SelectedFactory) {
	
	// intialize the requests
	$scope.requests = [];

	// get requests from database
	RequestsFactory.getRequests()
		.then(function(res) {
			console.log('got the requests', res);
			$scope.requests = res;
		});

	// gives main content div access to selected request
	$scope.setSelected = function(request) {
		console.log('clicked set selected');
		SelectedFactory.request = request;
	};


});