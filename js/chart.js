/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(50,0);
ctx.lineTo(c.width/2,c.width);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.moveTo(c.width-50,0);
ctx.lineTo(c.width/2,c.width);
ctx.stroke();



var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.moveTo(c.width/2 + 50,0);
ctx.lineTo(c.width,c.width);
ctx.stroke();

var ctx2 = c.getContext("2d");
ctx2.moveTo(c.width/2 -50,0);
ctx2.lineTo(0,c.width);
ctx2.stroke();
*/

$(document).ready(function (){
	var c = document.getElementById("canevas");
	var ctxD = c.getContext('2d');
	var myLineChart = new Chart(ctxD, {
		type: 'doughnut',
		data: {
			labels: ["Devellopement Commercial", "Suivi d'études", "Qualité", "Bureau", "Système d'information"],
			datasets: [
				{
					data: [3, 4, 3, 5, 4],
					backgroundColor: ["#ecf0f1", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"],
					hoverBackgroundColor: ["#ecf0f1", "#e74c3c", "#2ecc70", "#f1c40f", "#9b59b6"]
				}
			]
		},
		options: {
			responsive: true,
			legend: {
				position : 'right',
				display : false
			}
		}
	});
});