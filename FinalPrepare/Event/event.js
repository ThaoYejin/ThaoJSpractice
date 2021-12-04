/*function showMsg(){
    alert("You clicked!");
}
let para = document.getElementById("b1");
para.addEventListener("click", showMsg);
*/
let para = document.getElementById("b1");
para.addEventListener("click", function () {
    console.log("You clicked!");
    alert("Check the console!")
});

function displayTheDate() {
    var d = new Date();
    alert("You clicked this on " + d.toString());
}
var element = document.getElementById("example2");
element.onclick = displayTheDate;

//Keyboard Event
document.addEventListener("keydown", push);
function push() {
    //console.log(event.code);
    if (event.key == "b") {
        document.body.style.backgroundColor = "blue";
    }
}
document.addEventListener("keyup", function () {
    document.body.style.backgroundColor = "white";
})
/*document.addEventListener("keypress", press);
function press() {
    console.log(event.key);
    console.log(event.code);
}
//KEYPRESS only works for key that produce characters
*/
document.addEventListener("keydown", press);
function press() {
    console.log(event.key);
    console.log(event.code);
}

