var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var radian = Math.PI / 180;

context.beginPath();
context.fillStyle = "yellow";
context.moveTo(450, 450);
context.lineTo(550, 520);
context.arc(450, 450, 200, 35 * radian, 330 * radian, false);
context.lineTo(450, 450);
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "black";
context.moveTo(450, 350);
context.arc(450, 350, 20, 0 * radian, 360 * radian, false);
context.fill();