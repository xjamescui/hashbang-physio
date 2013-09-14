'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('patientCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.identity = "Patient";
		$scope.exercises = ["shoulder rotate", "arm raise"];

		$scope.init = function() {


			// $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo').
			// success(function(data, status, headers, config) {
			// 	// this callback will be called asynchronously
			// 	// when the response is available
			// 	$scope.data = data;
			// }).
			// error(function(data, status, headers, config) {
			// 	// called asynchronously if an error occurs
			// 	// or server returns response with an error status.
			// 	console.log('get error');
			// });
		}

	}
])
	.controller('physioCtrl', ['$scope',
		function($scope) {
			$scope.identity= "Physiotherapist";
		}
	]);