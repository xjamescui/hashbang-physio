'use strict';


// Declare app level module which depends on filters, and services
var module = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);
module.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'partials/partial1.html',
			controller: 'patientCtrl'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'partials/partial2.html',
			controller: 'physioCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/view1'
		});
	},
]);