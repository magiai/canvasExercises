var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//arc(x, y, radius, startAngle, endAngle, counterClockWise)
var radian = Math.PI / 180;

context.beginPath();
context.strokeStyle = "orange";
context.lineWidth = 10;
context.arc(200, 100, 100, 0 * radian, 180 * radian, false);
context.stroke();

context.beginPath();
context.strokeStyle = "green";
context.lineWidth = 10;
context.arc(300, 200, 100, 45 * radian, 180 * radian, false);
context.stroke();

context.beginPath();
context.strokeStyle = "brown";
context.lineWidth = 10;
context.arc(300, 200, 100, 45 * radian, 120 * radian, true);
context.stroke();