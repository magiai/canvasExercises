
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var context = canvas.getContext("2d");


    context.beginPath();
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.rect(400, 300, 300, 200);
    context.shadowOffsetY = 10;
    context.shadowOffsetX = 5;
    context.shadowColor = "black";
    context.shadowBlur = 5;
    context.stroke();
    context.fill();



    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth = 10;
    // context.shadowColor = "black";
    // context.shadowOffsetX = 5;
    // context.shadowOffsetY = 5;
    // context.shadowBlur = 5;
    // context.moveTo(100, 60);
    // context.lineTo(200, 60);
    // context.stroke();
    //
    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth = 10;
    // context.shadowColor = "black";
    // context.shadowOffsetX = -10;
    // context.shadowOffsetY = 5;
    // context.shadowBlur = 5;
    // context.moveTo(350, 60);
    // context.lineTo(450, 60);
    // context.stroke();
    //
    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth = 10;
    // context.shadowColor = "black";
    // context.shadowOffsetX = 5;
    // context.shadowOffsetY = -10;
    // context.shadowBlur = 5;
    // context.moveTo(100, 200);
    // context.lineTo(200, 200);
    // context.stroke();
    //
    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth = 10;
    // context.shadowColor = "black";
    // context.shadowOffsetX = -15;
    // context.shadowOffsetY = -15;
    // context.shadowBlur = 5;
    // context.moveTo(350, 200);
    // context.lineTo(450, 200);
    // context.stroke();


