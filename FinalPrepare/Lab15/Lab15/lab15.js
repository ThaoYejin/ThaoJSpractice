/*Write a function named updatePosition()which takes an event from the first canvas (id 
= "surface"):
• The function gets called repeatedly while you are moving the mouse over the canvas
• The function displays the x and y coordinates of the mouse position within the <label>
tags in real time while the mouse is moving over the Canvas.*/
let surface = document.getElementById("surface");
function updatePosition(event) {
    document.getElementById("xout").innerHTML = event.offsetX;
    document.getElementById("yout").innerHTML = event.offsetY;
}
surface.onmouseover = updatePosition;

/*Write an anonymous function which takes an event from the second canvas (id = 
"canvas1"):
• If the user clicks anywhere on the canvas (except the square in the center), the function gets 
called and displays the x and y coordinates of the mouse position in the <h3 
id="output"> tag.
• If the user clicks on the square in the center, the function displays an alert with the message 
"You clicked inside the square!"*/
let canvas1 = document.getElementById("canvas1");
let ctx = canvas1.getContext("2d");
//Draw the square
ctx.beginPath();
ctx.fillStyle = "black";
ctx.rect(50, 50, 100, 100);
ctx.fill();

canvas1.addEventListener("click", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    if (x >= 50 & x <= 150 & y >= 50 & y <= 150) {
        alert("You clicked inside the square!");
    } else {
        document.getElementById("output").innerHTML = "X: " + event.offsetX + " Y: " + event.offsetY;
    }
});