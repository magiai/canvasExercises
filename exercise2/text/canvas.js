var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

context.font = "50px Helvetica";

//context.fillText(text, xCoord, yCoord, maxWidth);

var fText = "Test tekst teks";

draw3DText(fText, 400, 200, "normal bold 60px Helvetica", "orange", 10);

function draw3DText(text, x, y, style, color, numberOfLayers) {
    context.font = style;
    context.fillStyle = "blue";

    for (var i = 0; i < numberOfLayers; i++) {
        context.fillText(text, x-i, y-i);
    }
    context.fillStyle = color;
    context.fillText(text, x, y);
}




var sText = "Nananana";
context.strokeText(sText, 400, 300);

//context.font = "font-style font-weight font-size font-family";

var text = "Stages of ODCs formation";
context.font = "normal bolder xx-large Monospace";
context.strokeText(text, 400, 400);

var text2 = "Plasticity and the role " +
    "of experience in neurocortical development";
context.font = "italic bold 60px Helvetica";
context.fillText(text2, 400, 500);


