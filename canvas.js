var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');//contact

// c.fillStyle = 'rgba(255, 0, 0, 0.4)';
// c.fillRect(100, 100, 100, 100); //x, y - gdzie ma być położone, dwa kolejene: wysokość, szerokość
// c.fillStyle = 'rgba(0, 0, 255, 0.4)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.4)';
// c.fillRect(300, 300, 100, 100);
//
// console.log(canvas);
//
// // Line
// c.beginPath();
// c.moveTo(50, 300); //początek lini
// c.lineTo(300, 100); //gdzie ma się kończyć
// c.lineTo(400, 300); //następna linia
// c.strokeStyle = "blue"; //dodawanie kolorów
// c.stroke();
//
// //Arc / Circle
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // //(x, y, radius, )
// // c.strokeStyle = "orange";
// // c.stroke();
//
// for (var i = 0; i < 100; i++) {
//
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
// //(x, y, radius, )
//     function randomColor() {
//         var r = 255*Math.random()|0;
//         var g = 255*Math.random()|0;
//         var b = 255*Math.random()|0;
//         return 'rgb(' + r + ',' + g + ',' + b + ')';
//     };
//     c.strokeStyle = randomColor();
//     c.stroke();
// }


c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);
c.strokeStyle = "violet";
c.stroke();

var x = 200;
function animate() {
    requestAnimationFrame(animate);

    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "violet";
    c.stroke();

    x += 1; //żeby kółko przemieszczało się
}

animate();
