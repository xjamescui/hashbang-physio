'use strict';


// Declare app level module which depends on filters, and services
var module = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);
module.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/patient', {
			templateUrl: 'partials/partial1.html',
			controller: 'patientCtrl'
		});
		$routeProvider.when('/physiotherapist', {
			templateUrl: 'partials/partial2.html',
			controller: 'physioCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/patient'
		});
	},
]);