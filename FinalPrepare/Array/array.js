let myarray = new Array(5);
myarray[0] = "apple";
myarray[1] = "orange";
myarray[2] = "banana";
myarray.push("pear");
myarray.push("berry");
let item = myarray.pop();
document.getElementById("output").innerHTML = "The item we removed was " + item;
let output = "";
for (let i = 0; i < myarray.length; i++) {
    output += myarray[i] + " ";
    document.getElementById("array").innerHTML = output;
}

//Splice method
let myarray2 = ["one", "two", "four"];
myarray2.splice(2, 0, "three");
//myarray2.splice(2,1,"three"); => array contains ["one", "two", "three"]
let array2 = "";
for (let i = 0; i < myarray2.length; i++) {
    array2 += myarray2[i] + " ";
}
document.getElementById("array2").innerHTML = array2;


let ar = [1, 2, 3, 4, 5, 6];
let item1 = ar.splice(3, 1, "a", "b", "c");
let item1content = "";
for (let i = 0; i < item1.length; i++) {
    item1content += item1[i] + " ";
    document.getElementById("splice").innerHTML = item1content;
}
let array3 = "";
for (let i = 0; i < ar.length; i++) {
    array3 += ar[i] + " ";
    document.getElementById("array3").innerHTML = array3;
}


//Concat
let heroes = ["Batman", "Robin"];
let villians = ["Joker", "Penguin", "Riddler"];
let characters = heroes.concat(villians);
document.getElementById("array4").innerHTML = characters.toString();

let someNums = [5, 4, 3, 2, 1];
for (let i = 0; i < someNums.length; i++) {
    someNums[i] = someNums[i] * 2;

}
document.getElementById("array5").innerHTML = someNums.toString();

let myarray3 = new Array(2);
myarray3[0] = ["apple", "orange", "banana", "pear"];
myarray3[1] = ["pink", "purple", "blue", "teal"];


let myarray4 = [1, 2, 3];
let myarray5 = myarray4;

myarray5[0] = 5;
document.getElementById("array5").innerHTML = myarray5.toString();
document.getElementById("array6").innerHTML = myarray4.toString();

let arr = ["dog", "cat", "bird"];
let result = arr[0] = arr[2];

let output4 = [];
function oddArray() {
    let N = +prompt("Enter a number");
    /*for (let i = 1; i <= (N + (N - 1)); i++) {
        if (i % 2 == 1) {
            output4.push(i);
        }
    }
    document.getElementById("array7").innerHTML = output4.toString();
    N = 0;
    output4 = []
    //return output4;*/
    let j = 0;
    while(output4.length < N){
        if(j%2==1){
            output4.push(j);
        }
        j++;
    }
    document.getElementById("array7").innerHTML = output4.toString();
    return output4;
}
document.getElementById("button7").onclick = oddArray;

//Copy an array
let myArray = [1, 2, 3];
let myArray2 = myArray.slice();
myArray2[0] = 5;
console.log(myArray.toString());
console.log(myArray2.toString());

//Exercise for finding value in array
let resorts = ["Whistler", "Silverstar", "Big White",
    "Revelstoke", "Sun Peaks", "Red Mntn"];
console.log(resorts[3]);
console.log(resorts.length);
console.log(resorts[5]);
console.log(resorts.indexOf("Silverstar"));

//Size of Array, cannot assign more value than an array size
let array8 = new Array(2);
array8[0] = 1;
array8[1] = 2;
//array8[3] = 3;
console.log(array8.toString());
array8[3] = 3;
console.log(array8.indexOf("3"));

//Write an array that store 12 months of the year
function monthName() {
    let date = new Date();
    let month = date.getMonth();
    switch (month) {
        case 0:
            document.getElementById("array8").innerHTML = "Jan";
            break;
        case 1:
            document.getElementById("array8").innerHTML = "Feb";
            break;
        case 2:
            document.getElementById("array8").innerHTML = "Mar";
            break;
        case 3:
            document.getElementById("array8").innerHTML = "Apr";
            break;
        case 4:
            document.getElementById("array8").innerHTML = "May";
            break;
        case 5:
            document.getElementById("array8").innerHTML = "Jun";
            break;
        case 6:
            document.getElementById("array8").innerHTML = "Jul";
            break;
        case 7:
            document.getElementById("array8").innerHTML = "Aug";
            break;
        case 8:
            document.getElementById("array8").innerHTML = "Sep";
            break;
        case 9:
            document.getElementById("array8").innerHTML = "Oct";
            break;
        case 10:
            document.getElementById("array8").innerHTML = "Nov";
            break;
        case 11:
            document.getElementById("array8").innerHTML = "Dec";
    }
}
document.getElementById("button8").onclick = monthName;

//<select> Dropdown menu
function makeDrink(){
    let size = document.getElementById("drinkSize");
    document.getElementById("array9").innerHTML= "Here's your " + size.value;
    }
    