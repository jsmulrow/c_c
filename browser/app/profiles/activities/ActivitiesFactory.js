app.factory('ActivitiesFactory', function($http) {
	return {
		submitActivity: function(userId, config) {
			return $http.post('api/users/' + userId + '/messages', config)
				.then(function(res) {
					return res.data;
				});
		},
		getRequests: function(userId) {
			return $http.get('api/users/' + userId + '/requests')
				.then(function(res) {
					return res.data;
				});
		},
		getAppointments: function(userId) {
			console.log('getting appointments');
			return $http.get('api/users/' + userId + '/appointments')
				.then(function(res) {
					return res.data;
				});
		}
	};
});
