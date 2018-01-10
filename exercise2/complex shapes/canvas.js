var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//z shape
context.beginPath();
context.strokeStyle = "red";
context.lineCap = "butt";
context.lineJoin = "miter";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.lineWidth = 20;
context.moveTo(60,80);
context.lineTo(160,80);
context.lineTo(80,180);
context.lineTo(340,180);
context.stroke();

//reverse z
context.beginPath();
context.strokeStyle = "violet";
context.lineCap = "round";
context.lineJoin = "round";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.lineWidth = 20;
context.moveTo(340,80);
context.lineTo(240,80);
context.lineTo(340,180);
context.lineTo(240,180);
context.stroke();

context.beginPath();
context.strokeStyle = "blue";
context.lineCap = "square";
context.lineJoin = "bevel";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.lineWidth = 20;
context.moveTo(340,80);
context.lineTo(520,80);
context.lineTo(440,180);
context.lineTo(540,180);
context.stroke();

