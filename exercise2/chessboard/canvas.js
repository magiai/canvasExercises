var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");



context.strokeStyle = "black";
context.strokeRect(450, 100, 400, 400);


for (var i = 1; i <= 8; i++) {

    if (i % 2 === 0) {
        context.fillStyle = "black";
    } else {
        context.fillStyle = "white";
    }
    context.fillRect(400 + i * 50, 100, 50, 50);
}




// for (var i = 1; i >= 8; i++) {
//     for (var j = 1; j >= 8; j++) {
//         if ((i%2 === 0) && (j%2 ===0)) {
//
//             context.fillStyle = "white";
//         } else {
//
//             context.fillStyle = "black";
//
//         }
//
//         context.fillRect(400 + i * 50, 50 + y * 50, 50, 50);
//     }
// }