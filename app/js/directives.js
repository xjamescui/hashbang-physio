'use strict';

/* Directives */


var app = angular.module('myApp.directives', []);

app.directive('appVersion', ['version',
	function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}
]);


app.directive('chart', function($http) {
	return {
		template: '<canvas id="chart" width="1000" height="400"></canvas>',

		link: function(scope, element, attrs) {
			var ctx = $('#chart').get(0).getContext("2d");


			$http.get('js/data.json').
			success(function(data, status, headers, config) {
					var yaw = data.yaw,
						pitch = data.pitch,
						roll = data.roll;
					var x = ["0","1"];
					debugger;
					
					var data = {
						labels: x,
						datasets: [{
							fillColor: "rgba(220,220,220,0.5)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							data: pitch,
						}, {
							fillColor: "rgba(151,187,205,0.5)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							data: yaw
						}, {
							fillColor: "rgba(151,187,205,0.5)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							data: roll
						}]
					};
				


				new Chart(ctx).Line(data);	
				// this callback will be called asynchronously
				// when the response is available

				//$scope.shoulder_rotation_count = data.shoulder_rotate.set_count;
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('get error');
			});

			

		}
	}
});

app.directive('charttherapist', function() {
	return {
		template: '<canvas id="chart" width="600" height="400"></canvas>',
		link: function(scope, element, attrs) {
			var ctx = $('#chart').get(0).getContext("2d");

			var data = {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					fillColor: "rgba(220,220,220,0.5)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					data: [65, 59, 90, 81, 56, 55, 40]
				}, {
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					data: [28, 48, 40, 19, 96, 27, 100]
				}]
			};

			new Chart(ctx).Line(data);	
		}
	}
});