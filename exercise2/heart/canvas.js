var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth);

//function drawBezierCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth);
context.beginPath();
context.strokeStyle = "red";
context.strokeWidth = 10;

drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180);
drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180);

context.stroke();





