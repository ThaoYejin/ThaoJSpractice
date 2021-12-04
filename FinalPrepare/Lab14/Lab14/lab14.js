let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;
const MID = width / 2;
const GROUND = 400;

function drawBackground() {
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, GROUND, width, 100); // ground

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    //ctx.arc(-10, -10, 80, 0, 2 * Math.PI); //sun

    //Move the sun to the right
    ctx.arc(810, -10, 80, 0, 2 * Math.PI);
    ctx.fill();
}

function drawSnowman() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(MID, GROUND - 265, 40, 0, 2 * Math.PI); // head
    ctx.fill();
    ctx.beginPath();
    ctx.arc(MID, GROUND - 160, 70, 0, 2 * Math.PI); // upper torso
    ctx.fill();
    ctx.beginPath();
    ctx.arc(MID, GROUND, 100, 0, 2 * Math.PI); // lower torso
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(MID - 15, GROUND - 275, 5, 0, 2 * Math.PI); // left eye
    ctx.arc(MID + 15, GROUND - 275, 5, 0, 2 * Math.PI); // right eye
    ctx.fill();

    ctx.beginPath();
    //ctx.arc(MID, GROUND - 260, 20, 0, Math.PI); // smile

    //Make the snowman frown
    ctx.arc(MID, GROUND - 260 + 30, 20, Math.PI, 0); //frown
    ctx.stroke();

    ctx.moveTo(MID - 50, GROUND - 160);
    ctx.lineTo(MID - 140, GROUND - 160); // left arm
    ctx.stroke();


    ctx.moveTo(MID + 50, GROUND - 160);
    ctx.lineTo(MID + 140, GROUND - 200); // right arm
    ctx.stroke();

    ctx.moveTo(MID - 50, GROUND - 300);
    ctx.lineTo(MID + 50, GROUND - 300); // brim of hat
    ctx.stroke();

    ctx.fillRect(MID - 30, GROUND - 340, 60, 40);

    //draw 2 red button to the upper torso
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(MID, ((GROUND - 160) - (70 / 3)), 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(MID, ((GROUND - 160) + (70 / 3)), 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //draw an orange triangle nose
    ctx.beginPath();
    ctx.moveTo(MID, GROUND - 265);
    ctx.lineTo(MID + 10, GROUND - 260 + 5);
    ctx.lineTo(MID - 10, GROUND - 260 + 5);
    ctx.lineTo(MID, GROUND - 265);
    ctx.closePath();
    ctx.fillStyle = "orange";
    ctx.fill();
}

//Write my name
function writeName() {
    ctx.fillStyle = "white";
    ctx.font = "40px Georgia";
    ctx.fillText("Thi Viet Thao Ho", 30, 60);
}

/*A function that shifts the entire 
snowman 20 pixels to the right every time the button is clicked*/
var shift = 20;
function shiftSnowman() {
    drawBackground();
    writeName();
    ctx.save();
    ctx.translate(shift,0);
    drawSnowman();
    ctx.restore();
    shift = shift + 20;
}

drawBackground();
drawSnowman();
writeName();
document.getElementById("button").onclick = shiftSnowman;