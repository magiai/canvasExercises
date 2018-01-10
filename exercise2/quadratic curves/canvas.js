var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//quadraticCurveTo(controlX, controlY, endX, endY)

context.beginPath();
context.strokeStyle = "pink";
context.lineWidth = 10;
context.moveTo(200, 250);
context.quadraticCurveTo(600,300,300,550);
context.stroke();

