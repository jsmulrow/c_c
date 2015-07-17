app.factory('UserFactory', function($http){
	return {
		getUserById: function(id) {
			return $http.get('/api/users/' + id)
				.then(function(res) {
					return res.data;
				});
		},
		getUser: function(config) {
			return $http.get('/api/user', {params: config})
				.then(function(res) {
					return res.data;
				});
		},
	};
});