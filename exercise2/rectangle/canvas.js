window.onload = function () {

    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");

//violet rectangle
context.fillStyle = "violet";
context.fillRect(10,40,50,80);

//green rectangle
context.fillStyle = "green";
context.fillRect(60,40,100,30);


}
