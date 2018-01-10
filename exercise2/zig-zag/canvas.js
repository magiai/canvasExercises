window.onload = function () {

    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");

//draw line steps

    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(30, 30); //punkt początkowy
    context.lineTo(80, 80); //punkt końcowy
    context.lineTo(130, 30); //punkt końcowy
    context.lineTo(180, 80); //punkt końcowy
    context.lineTo(230, 30); //punkt końcowy
    context.stroke(); //to rysuje linię

}
