var app = angular.module('CC', ['ui.router']);

// set up config
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('landingPage', {
			url: '/',
			templateUrl: 'views/landing.view.html',
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
			templateUrl: 'views/profile.view.html',
			controller: 'ProfileCtrl'
		})
		.state('cleaners', {
			url: '/cleaners',
			templateUrl: 'js/cleaners/cleaners.view.html',
			controller: 'CleanersCtrl'
		})
		.state('cleaners.initialRequest', {
			url: '/request',
			templateUrl: 'js/cleaners/initialRequest.view.html'
		})
		.state('cleaners.request', {
			url: '/request/:requestId',
			templateUrl: 'js/cleaners/request.view.html'
		})
		.state('clients', {
			url: '/clients',
			templateUrl: 'js/clients/clients.view.html',
			controller: 'ClientsCtrl'
		});
	// default state is the landing page
	$urlRouterProvider.otherwise('/');
});







// var cleanersApp = angular.module('Cleaners', []);

// var clientsApp = angular.module('Clients', []);