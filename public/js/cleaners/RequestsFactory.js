app.factory('RequestsFactory', function($http) {
	return {
		getRequests: function() {
			return $http.get('/api/requests')
				.then(function(res) {
					return res.data;
				});
		}
	};
});