window.onload = function () {

    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.lineCap = "butt";
    context.strokeStyle = "violet";
    context.lineWidth = 15;
    context.moveTo(100, 100);
    context.lineTo(300,100);
    context.stroke();

    context.beginPath();
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.lineWidth = 15;
    context.moveTo(100, 125);
    context.lineTo(300,125);
    context.stroke();

    context.beginPath();
    context.lineCap = "square";
    context.strokeStyle = "blue";
    context.lineWidth = 15;
    context.moveTo(100, 150);
    context.lineTo(300,150);
    context.stroke();


}
