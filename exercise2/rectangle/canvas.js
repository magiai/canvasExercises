var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//context.rect(xCoordinate, yCoordinate, width, height);

context.strokeStyle = "red";
context.lineWidth = 11;
context.lineJoin = "round";
context.fillStyle = "green";
context.rect(50, 200, 200, 200);
context.stroke();
context.fill();

//context.fillRect(xCoordinate, yCoordinate, width, height);
context.fillStyle = "blue";
context.fillRect(300, 200, 200, 200);

//context.strokeRect(xCoordinate, yCoordinate, width, height);
context.lineWidth = 3;
context.strokeStyle = "violet";
context.lineJoin = "square";
context.strokeRect(550, 200, 200, 200);

//context.clearRect(xCoordinate, yCoordinate, width, height);
context.clearRect(100, 100, 200, 200);
