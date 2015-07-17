app.factory('RequestsFactory', function($http) {
	return {
		getRequests: function() {
			return $http.get('/api/requests')
				.then(function(res) {
					return res.data;
				});
		},
		acceptRequest: function(requestId, userId) {
			return $http.post('/api/users/' + userId + '/appointments', {requestId: requestId})
				.then(function(res) {
					return res.data;
				});
		}
	};
});