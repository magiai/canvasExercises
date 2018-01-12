var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//polygon variables

var sides = 5;
var radius = 200;
var centerX = 400;
var centerY = 400;
var startAngle = 180;
var angle = (2 * Math.PI) / sides;

//start drawing
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 7;

//point coordinates
var beginX = centerX + radius * Math.cos(startAngle);
var beginY = centerY - radius * Math.sin(startAngle);

context.moveTo(beginX, beginY);

//draw lines

for (var i = 1; i <= sides; i++) {

    var currentAngle = startAngle + i * angle;
    var currentPointX = centerX + radius * Math.cos(currentAngle);
    var currentPointY = centerY - radius * Math.sin(currentAngle);

    //draw
    context.lineTo(currentPointX, currentPointY);
}

context.closePath();
context.stroke();