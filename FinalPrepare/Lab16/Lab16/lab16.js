//Create an empty function
let arraycolor = [];
//function add() to add value to the array
function add() {
    let input = document.getElementById("color").value;
    arraycolor.push(input);
    display();
}
/*Create a function that displays the colors contained in the array
on to the HTML page. This display function should be called every time
a color is added to the array.*/
function display() {
    let content = "";
    for (let i = 0; i < arraycolor.length-1; i++) {
        content += arraycolor[i] + ",";
    }
    content += arraycolor[arraycolor.length-1];
    document.getElementById("contents").innerHTML = content;
}
/*Create an onclick event handler for the Check Color button. 
Every time this button is pressed, 
the function should get the color value from the second text field, 
and find the index at which that color occurs in the array. 
This index should then be displayed to the HTML page.*/
function check() {
    let checkinput = document.getElementById("check").value;
    let output = "";
    for (let i = 0; i < arraycolor.length; i++) {
        if (checkinput == arraycolor[i]) {
          output += (i+ ","); 
        }
    }
    output = output.slice(0, output.length-1);
    document.getElementById("output").innerHTML = output;
}