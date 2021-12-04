//Example 1: Draw 5 purple balls on the canvas and space them 100px apart
let drawingSurface1 = document.getElementById("drawingSurface1");
let ctx1 = drawingSurface1.getContext("2d");

function drawPurpleBalls() {
    let r = 25;
    let x = 100, y = 100;
    ctx1.fillStyle = "purple";

    for (let i = 1; i <= 5; i++) {
        ctx1.beginPath();
        ctx1.arc(x, y, r, 0, 2 * Math.PI);
        ctx1.fill();
        x = x + 100;
    }
}
document.getElementById("button1").onclick = drawPurpleBalls;

//Example 2: Refine Example 1. Make the ball at odd location pink
let drawingSurface2 = document.getElementById("drawingSurface2");
let ctx2 = drawingSurface2.getContext("2d");

function drawingPinkBalls() {
    let x = 100, y = 100;
    for (let i = 1; i <= 5; i++) {
        if (i % 2 == 0) {
            ctx2.fillStyle = "purple";
        } else {
            ctx2.fillStyle = "pink";
        }

        ctx2.beginPath();
        ctx2.arc(x, y, 25, 0, 2 * Math.PI);
        ctx2.fill();
        x += 100;
    }
}
document.getElementById("button2").onclick = drawingPinkBalls;

//Example 3: Draw a Pentagon of Circles
let drawingSurface3 = document.getElementById("drawingSurface3");
let ctx3 = drawingSurface3.getContext("2d");

function drawPentagon() {
    let blue = 255;
    let radius = 50;
    ctx3.beginPath();
    ctx3.arc(200, 200, radius, 0, 2 * Math.PI);
    ctx3.fillStyle = "green";
    ctx3.fill();
    ctx3.save();
    ctx3.translate(200, 200);

    for (let i = 0; i < 5; i++) {
        ctx3.beginPath();
        ctx3.arc(0, 100, radius, 0, 2 * Math.PI);
        ctx3.fillStyle = "rgb(0,0, " + blue + ")";
        ctx3.fill();
        ctx3.rotate(72 * Math.PI / 180);
        blue -= 50;
    }
    ctx3.restore();
}
document.getElementById("button3").onclick = drawPentagon;

let canvas4 = document.getElementById("canvas4");
let ctx4 = canvas4.getContext("2d");

let img = new Image();
img.src = "R.jpeg.jfif";
img.onload = function () {
    for (let x = 10; x < 500; x += 100) {
        ctx4.drawImage(img, x, 10, 100, 100);
    }
}

//Make the angry bird flies
let canvas5 = document.getElementById("canvas5");
let ctx5 = canvas5.getContext("2d");

let img5 = new Image();
img5.src = "ClipartKey_1134801.png";
//the image contains 4 small image => each small image is W(335), H(304)
let angrybird;
let sW = 335, sH = 304;
img5.onload = function () {
    let cycle = 0;
    angrybird = setInterval(function () {
        ctx5.clearRect(0, 0, sW+100, sH+100);
        /*ctx5.fillStyle = "black";
        ctx5.fillRect(0,0,canvas5.width, canvas5.height);*/
        ctx5.drawImage(img5, cycle * sW, 0, sW, sH, 50, 50, sW, sH);
        cycle = (cycle + 1) % 4;
    }, 120);
}

