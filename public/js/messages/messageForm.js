app.directive('messageForm', function(MessageFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/messages/messageForm.html',
		scope: {
			author: '=',
			recipient: '='
		},
		link: function(scope, elem, attrs) {

			// initialize message
			clearForm();

			// submission script
			function submitMessage(userId, recipientId, message) {
				// attach author, recipient, and timeStamp
				message.author = userId;
				message.recipient = recipientId;
				message.createdAt = new Date();
				console.log('submitting message', message);
				console.log('for', userId);
				MessageFactory.submitMessage(userId, message)
				.then(function(data) {
					clearForm();
					console.log(data);
				});
			}

			function clearForm() {
				scope.message = {
					title: '',
					content: ''
				};
			}

			scope.submitMessage = submitMessage;
		}
	};
});