/*How could we create an object representing 
the point (100,200)?*/
let myPoint = {
    x: 100,
    y: 200
};
/*we could access the x and y locations 
using: myPoint.x and myPoint.y
*/
myPoint.x = 200;
console.log(myPoint.x);
console.log(myPoint);

/*Create an object using JavaScript Object 
Notation
 Give the object an appropriate name and fill it 
with the following information*/
let example = {
    name: "Eggs",
    price: 4.99,
    quantity: 12,
};
console.log(example.name);
console.log(example);

//Use a constructor to create an Object
function Point(x1, y1) {
    this.x = x1;
    this.y = y1;
};
let firstPoint = new Point(100, 200);
let secondPoint = new Point(200, 300);

/*Create a constructor that can be used to 
create an object that represents a store with 
the following properties: name, staff and owner
Why no value?
*/
function Store(name, staff, owner) {
    this.name = name;
    this.staff = staff;
    this.owner = owner;
}

//Objects and Reference
let object1 = {
    name: "object1",
    date: "today"
}

let object2 = object1;
object1.name = "otherObject";

console.log(object1.name);
console.log(object2.name);

//Pass by Reference
function changeDate(someDate) {
    someDate.date = "tomorrow";
}
changeDate(object1);
console.log(object1.date);

//Array of objects
let pointList = [new Point(100, 400),
new Point(200, 500),
new Point(300, 600)];
console.log(pointList[0].x);


/*function Point(x1,y1){
    this.x = x1;
    this.y = y1;
};
let firstPoint = new Point(100,200);
let secondPoint = new Point(200,300);*/
function Recipe(preptime, cookingtime, ingredients) {
    this.preptime = preptime;
    this.cookingtime = cookingtime;
    this.ingredients = ingredients.slice();
    this.totalTime = function () {
        return this.preptime + this.cookingtime;
    }
}
let RecipeArr = [
    new Recipe(15, 10, ["shrimp", "garlic"]),
    new Recipe(20, 15, ["honey", "salmon", "pepper"]),
    new Recipe(30, 0, ["banana", "orange", "apple", "grape"])
];
console.log(RecipeArr[0].ingredients);

let spaghetti = new Recipe(5, 15, ["pasta", "sauce"]);
console.log(spaghetti.totalTime());

let myStore = {
    store: "Superstore",
    staff: 150,
    owner: "Jim Pattison",
    toString: function(){
        return this.store + " " + this.staff + " "+ this.owner;
    }
};
console.log(myStore.toString());

//Find the distance between 2 points
let point = {
    x:100,
    y:100,
    distance: function(){
        let xSq = Math.pow(this.x,2);
        let ySq = Math.pow(this.y,2);
        return Math.sqrt(xSq+ySq)
    }
};
console.log(point.distance());
function NewPoint(x,y){
    this.x = x;
    this.y = y;
    this.distance = function(){
        let xSq = Math.pow(this.x,2);
        let ySq = Math.pow(this.y,2);
        return Math.sqrt(xSq+ySq)
    }
}
let newpoint = new NewPoint(200,200);
console.log(newpoint.distance());

/*In JavaScript, arrays use numbered 
indexes
 In JavaScript, objects use named indexes
 Arrays are a special kind of object that has 
numbered indexes
 JavaScript does not support string indexed 
arrays*/
let person =[];
person["firstname"] = "John";
person["lastname"] = "Doe";
person["age"] = 46;

var x = person.length;
console.log(x);
var y = person[0];
console.log(y);
var z = person["firstname"];
console.log(z);
console.log(person.firstname);
console.log(person.age)