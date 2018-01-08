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



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();

        function randomColor() {
        var r = 255*Math.random()|0;
        var g = 10*Math.random()|0;
        var b = 255*Math.random()|0;

        return 'rgb(' + r + ',' + g + ',' + b + ')';
    };

        c.fillStyle = randomColor();
    }

    this.update = function () {

        if (this.x + this.radius > innerWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerWidth ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx; //żeby kółko przemieszczało się
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

    // circle.update();

}

animate();
