var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

context.font = "90px Helvetica";

//context.fillText(text, xCoord, yCoord, maxWidth);

var fText = "Test tekst teks";
context.fillText(fText, 400, 200);

// context.beginPath();
// context.strokeStyle = black;
// context.lineWidth = 5;
// context.arc(500, 200, 100, 0 * (Math.PI / 180), 360 * (Math.PI / 180), false);
// context.stroke();

var sText = "Nananana";
context.strokeText(sText, 400, 400);