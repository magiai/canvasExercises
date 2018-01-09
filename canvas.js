var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');//contact

var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 40;
// var minRadius = 2;
var numberOfCircles = 1500;

var colorArray = [
  '#420C1D', '#AF0000', '#051934', '#FF4908', '#721733'
];


window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    });

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() *
        colorArray.length)];

    this.draw = function() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();

        // function randomColor() {
        // var r = 255*Math.random()|0;
        // var g = 10*Math.random()|0;
        // var b = 255*Math.random()|0;
        //
        // return 'rgb(' + r + ',' + g + ',' + b + ')';
    // };

        c.fillStyle = this.color;
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

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50) {

          if (this.radius < maxRadius) {
              this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
            this.radius -=1;
        }
        this.draw();
    }
}


var circleArray = [];

for (var i = 0; i < numberOfCircles; i++) {
    var radius = Math.random() * 4 + 1;
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
