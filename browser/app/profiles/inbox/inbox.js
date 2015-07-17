app.directive('inbox', function(MessageFactory, SelectedMessageFactory) {
	return {
		restrict: 'E',
		templateUrl: 'app/profiles/inbox/inbox.html',
		scope: {
			user: '='
		},
		link: function(scope, elem, attrs) {
			console.log('ran inbox directive link');

			console.log('user', scope.user);

			// initialize messages
			scope.messages = [];

			// load in the messages
			function getMessages(userId) {
				MessageFactory.getMessages(userId)
				.then(function(messages) {
					console.log('got messages', messages);
					scope.messages = messages;
				});
			}

			// set selected message
			function setSelectedMessage(message) {
				SelectedMessageFactory.message = message;
			}

			// run get messages on load
			getMessages(scope.user._id);

			scope.getMessages = getMessages;
			scope.setSelectedMessage = setSelectedMessage;
		}
	};
});