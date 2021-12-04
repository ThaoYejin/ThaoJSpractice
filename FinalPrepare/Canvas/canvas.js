let drawingSurface1 = document.getElementById("drawingSurface1");
let ctx = drawingSurface1.getContext("2d");

//Drawing Rectangles: ctx.fillRect()
//ctx.fillRect(x,y,W,H)
/*fillStyle is not a method but a property
 We can use it to set the color of the fill
 ctx.fillStyle = "red"*/
//ctx.fillStyle = "cyan";
//ctx.fillRect(0,0,100,100);

//DRAW A PATH
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(100, 0);
ctx.lineTo(100, 100);
ctx.lineTo(0, 100);
ctx.lineTo(0, 50);
ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();


//DRAW A CIRCLE
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//LECTURE 14
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

/*
ctx2.translate(100,50);
ctx2.fillRect(0,0,10,10);
ctx2.translate(50,0);
ctx2.fillRect(0,0,10,10);
*/
function draw() {
    //draw the gray rectangle
    ctx2.fillStyle = "gray";
    ctx2.fillRect(0, 0, 100, 100);

    //draw the white eyes
    ctx2.fillStyle = "white";
    ctx2.beginPath();
    ctx2.arc(25, 25, 10, 0, 2 * Math.PI);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(75, 25, 10, 0, 2 * Math.PI);
    ctx2.fill();

    //draw the red inside the white
    ctx2.fillStyle = "red";
    ctx2.beginPath();
    ctx2.arc(25, 25, 5, 0, 2 * Math.PI);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(75, 25, 5, 0, 2 * Math.PI);
    ctx2.fill();

    //draw the black smile
    ctx2.translate(50, 50);
    ctx2.fillStyle = "black";
    ctx2.beginPath();
    ctx2.arc(0, 0, 25, 0, Math.PI);
    ctx2.stroke();
}
document.body.addEventListener("keydown", function () {
    if (event.key == "d") {
        draw();
    }
})

//ROTATE THE COORDINATE SYSTEM
/*ctx2.translate(100, 50);
ctx2.rotate(45 * Math.PI / 180);
ctx2.fillRect(0, 0, 10, 10);*/

//Example 
/*ctx2.translate(50, 50);
ctx2.beginPath();
ctx2.lineTo(0, 25);
ctx2.rotate(120 * Math.PI / 180);
ctx2.lineTo(0, 25);
ctx2.rotate(120 * Math.PI / 180);
ctx2.lineTo(0, 25);
ctx2.rotate(120 * Math.PI / 180);
ctx2.lineTo(0, 25);
ctx2.stroke()*/

//SAVE and RESTORE
ctx2.save();
ctx2.translate(100,50);
ctx2.fillRect(0,0,50,50);
ctx2.restore();
ctx2.save();
ctx2.translate(20,20);
ctx2.fillStyle = "red";
ctx2.fillRect(0,0,50,50);
ctx2.restore();
//clearRect()
ctx2.save(); 
ctx2.translate(100,50);
ctx2.clearRect(0,0,50,50);
ctx2.restore();
ctx2.save();

//DRAWING TEXT
ctx2.font = "40px Arial";
ctx2.fillStyle = "yellow";
ctx2.fillText("I can draw text, too!", 10, 50);

ctx2.strokeStyle = "violet";
ctx2.strokeText("Fancy text is fancy", 10, 100);

ctx2.fillStyle = "blue";
ctx2.strokeStyle = "orange";
ctx2.fillText("Extra fancy", 10,150);
ctx2.strokeText("Extra fancy", 10,150)