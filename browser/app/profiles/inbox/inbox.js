app.directive('inbox', function(MessageFactory, SelectedMessageFactory, $modal) {
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

			scope.open = function(size) {
				
				var modalInstance = $modal.open({
					animation: scope.animationsEnabled,
				    templateUrl: 'app/profiles/inbox/messageModal.html',
				    controller: 'MessageModalCtrl',
				    size: size,
				    resolve: {
				      message: function () {
				        // return SelectedMessageFactory.message;
				        return {title: 'jack', content: 'is pretty sweet'};
				      }
			        }	
				});	
				
				modalInstance.result.then(function(selectedItem) {
					scope.selected = selectedItem;
				});

			};

			// run get messages on load
			getMessages(scope.user._id);

			scope.getMessages = getMessages;
			scope.setSelectedMessage = setSelectedMessage;
		}
	};
});