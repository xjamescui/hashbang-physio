'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('mainCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.exercises = ["shoulder rotate", "arm raise"];

		$scope.init = function() {

			var url = "";
			// $http.get(url).
			// success(function(data, status, headers, config) {
			// 	// this callback will be called asynchronously
			// 	// when the response is available
			// 	//$scope.data = data;
			// }).
			// error(function(data, status, headers, config) {
			// 	// called asynchronously if an error occurs
			// 	// or server returns response with an error status.
			// 	console.log('get error');
			// });


		}

	}
])
	.controller('MyCtrl2', [
		function() {

		}
	]);