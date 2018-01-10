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




//violet rectangle
// context.fillStyle = "violet";
// context.fillRect(10,40,50,80);

//green rectangle
// context.fillStyle = "green";
// context.fillRect(60,40,100,30);