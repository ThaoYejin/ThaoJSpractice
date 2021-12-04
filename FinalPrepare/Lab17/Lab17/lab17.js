function AnimalObject(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
};

let animalarr = [];
function addAnimal() {
    let name = document.getElementById("name").value;
    let species = document.getElementById("species").value;
    let age = +document.getElementById("age").value;
    let input = new AnimalObject(name, species, age);
    animalarr.push(input);
    display();
}

function display() {
    let item = "";
    let output = "";
    for (let i = 0; i < animalarr.length; i++) {
        let name = animalarr[i].name;
        let species = animalarr[i].species;
        let age = animalarr[i].age;
        item = name + ", " + species + ", " + age;
        output += "<li>" + item + "</li>";
    }
    document.getElementById("output").innerHTML = output;
}