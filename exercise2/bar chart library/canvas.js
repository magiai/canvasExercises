window.onload = function () {


    var min = 1;
    var max = 200;

//Chart data
    var data = [
        {label: 'Jan', getRandomInt(min, max)},
        {label: 'Feb', getRandomInt(min, max)},
        {label: 'March', getRandomInt(min, max)},
        {label: 'April', getRandomInt(min, max)},
        {label: 'May', getRandomInt(min, max)}
    ];

//Chart Specification
    var targetId = 'chart';
    var canvasWidth = 600;
    var canvasHeight = 450;

//Create Chart
    var chart = new BarChart(targetId,
        canvasWidth, canvasHeight, data);


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

// var canvas = document.querySelector('canvas');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// var context = canvas.getContext("2d");
