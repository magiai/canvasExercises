window.onload = function () {

    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.lineJoin = "miter"; //kanciaste połączenie
    context.strokeStyle = "violet";
    context.lineWidth = 10;
    context.moveTo(30, 30);
    context.lineTo(130,30);
    context.lineTo(130,130);
    context.lineTo(30,130);
    context.lineTo(30,230);
    context.stroke();

    context.beginPath();
    context.lineJoin = "bevel"; //pościnane połączenie
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(60, 60);
    context.lineTo(160,60);
    context.lineTo(160,160);
    context.lineTo(60,160);
    context.lineTo(60,260);
    context.stroke();

    context.beginPath();
    context.lineJoin = "round"; //pościnane połączenie
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(90, 90);
    context.lineTo(190,90);
    context.lineTo(190,190);
    context.lineTo(90,190);
    context.lineTo(90,290);
    context.stroke();

}
