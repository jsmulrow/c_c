app.directive('cleaningActivities', function(ActivitiesFactory) {
	return {
		restrict: 'E',
		templateUrl: 'app/profiles/activities/activities.html',
		scope: {
			user: '=',
			activityName: '=name'
		},
		link: function(scope, elem, attrs) {
			console.log('ran activity directive link for ', scope.activityName);
			console.log('user', scope.user);

			// initialize activities
			scope.activities = [];
			// load activities on load
			getActivities(scope.activityName, scope.user._id);

			// load in the activities
			function getActivities(activityName, userId) {
				if (activityName === 'requests') {
					// requests
					ActivitiesFactory.getRequests(userId)
					.then(function(requests) {
						console.log(requests);
						scope.activities = requests;
					});
				} else {
					// appointments
					ActivitiesFactory.getAppointments(userId)
					.then(function(appointments) {
						console.log(appointments);
						scope.activities = appointments;
					});
				}
			}

			// get activites on load
			getActivities(scope.user._id);

			scope.getActivities = getActivities;
		}
	};
});