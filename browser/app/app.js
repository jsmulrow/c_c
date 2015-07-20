var app = angular.module('CC', [
	'ui.router',
	'ui.bootstrap'
	]);

// set up config
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('landingPage', {
			url: '/',
			templateUrl: 'app/landing/landing.view.html',
			controller: 'LandingCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.view.html'
		})
		.state('login.signIn', {
			url: '/signIn',
			templateUrl: 'views/signIn.view.html'
		})
		.state('login.register', {
			url: '/register',
			templateUrl: 'views/register.view.html'
		})
		.state('profile', {
			url: '/profile/:userId',
			templateUrl: 'app/profiles/profile.view.html',
			controller: 'ProfileCtrl'
		})
		.state('profile.default', {
			url: '/default',
			templateUrl: 'app/profiles/default.view.html',
			controller: function(SignInFactory) {
				SignInFactory.checkSignIn();
			}
		})
		.state('profile.message', {
			url: '/:messageId',
			templateUrl: 'app/profiles/inbox/message.view.html',
			controller: 'MessageCtrl'
		})
		.state('cleaners', {
			url: '/cleaners',
			templateUrl: 'app/cleaners/cleaners.view.html',
			controller: 'CleanersCtrl'
		})
		.state('cleaners.initialRequest', {
			url: '/request',
			templateUrl: 'app/cleaners/initialRequest.view.html'
		})
		.state('cleaners.request', {
			url: '/request/:requestId',
			templateUrl: 'app/cleaners/request.view.html'
		})
		.state('clients', {
			url: '/clients',
			templateUrl: 'app/clients/clients.view.html',
			controller: 'ClientsCtrl'
		});
	// default state is the landing page
	$urlRouterProvider.otherwise('/');
});







// var cleanersApp = angular.module('Cleaners', []);

// var clientsApp = angular.module('Clients', []);