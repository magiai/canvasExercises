var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//bezierCurveTo(controlX1, controlY1, controlX2
// controlY2, endX, endY)

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 10;
context.moveTo(200, 250);
context.bezierCurveTo(100, 100, 500, 100, 400, 250);
context.stroke();
