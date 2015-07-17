app.factory('MessageFactory', function($http) {
	return {
		submitMessage: function(userId, config) {
			return $http.post('api/users/' + userId + '/messages', config)
				.then(function(res) {
					return res.data;
				});
		},
		getMessages: function(userId) {
			return $http.get('api/users/' + userId + '/messages')
				.then(function(res) {
					return res.data;
				});
		}
	};
});
