app.factory('FormSubmitFactory', function($http) {
	return {
		createRequest: function(config) {
			console.log('config', config);
			return $http.post('/api/requests', config)
				.then(function(res) {
					return res.data;
				});
		},
		getUser: function(config) {
			return $http.get('/api/user', {params: config})
				.then(function(res) {
					return res.data;
				});
		}
	};
});