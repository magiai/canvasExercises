var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var radian = Math.PI / 180;

// context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockDirection);

context.beginPath();
context.strokeStyle = "violet";
context.lineWidth = 20;
context.fillStyle = "orange";
context.arc(500, 400, 150, 0 * radian, 360 * radian, false);
context.stroke();
context.fill();