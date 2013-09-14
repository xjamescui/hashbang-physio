//Get the context of the canvas element we want to select
var ctx = $("#chart").get(0).getContext("2d");
// console.log(chart);

if (ctx != undefined) {
	// console.log(chart);

	// var ctx = chart.getContext("2d");
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
	alert("chart is ready");
}