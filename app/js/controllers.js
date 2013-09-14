'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('patientCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.identity = "Patient";
		$scope.exercises = ["shoulder rotate", "arm raise"];
		$scope.total_set = 3;
		$scope.init = function() {


			$http.get('js/data.json').
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available

				$scope.shoulder_rotation_count = data.shoulder_rotate.set_count;
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('get error');
			});
		};

	}
])
	.controller('physioCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.identity = "Physiotherapist";

			$http.get('js/data.json').
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.arm_raise_count = data.arm_raise.set_count;
				$scope.shoulder_rotate_count = data.shoulder_rotate.set_count;
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('get error');
			});

		}
	]);