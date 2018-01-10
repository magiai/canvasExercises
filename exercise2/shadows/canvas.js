window.onload = function () {

    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.shadowColor = "black";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.moveTo(100, 60);
    context.lineTo(200, 60);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.shadowColor = "black";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.moveTo(150, 70);
    context.lineTo(250, 80);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.shadowColor = "black";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.moveTo(100, 200);
    context.lineTo(200, 200);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.shadowColor = "black";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.moveTo(350, 200);
    context.lineTo(450, 200);
    context.stroke();

}
