app.directive('navbar', function(SignInFactory) {
	return {
		restrict: 'E',
		templateUrl: 'components/navbar/navbar.html',
		link: function(scope, elem, attrs) {
			scope.signData = SignInFactory;
			scope.activeLink = '';
		}
	};
});