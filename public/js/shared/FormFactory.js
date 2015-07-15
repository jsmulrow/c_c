app.factory('FormFactory', function($http) {
	return {
		createRequest: function(config) {
			console.log('config', config);
			return $http.post('/api/requests', config)
				.then(function(res) {
					return res.data;
				});
		},
		signIn: function(config) {
			return $http.post('/login', config)
				.then(function(res) {
					return res.data;
				});
		},
		register: function(config) {
			return $http.post('/register', config)
				.then(function(res) {
					return res.data;
				});
		}
	};
});