

function Book(title){  //Defines a constructor function named Book to create book objects.
    this.title = title;
}

Book.prototype.getSummry = function(){  //Adds a getSummary() method to the Book prototype so all Book objects can share it.
    return `This books is called ${this.title}`;
};

const Book1 = new Book("Atomatic Habits");
console.log(Book1.getSummry()); //this books is called Atomatic Habits..



//prototype chain

const Grandparent = {
    canWalk : true
}
const Perent = Object.create(Grandparent);
Perent.canTalk = true;

const child = Object.create(Perent);
child.canCode = true;

console.log(child.canCode); //Own Property
console.log(child.canTalk); //Found on Parent
console.log(child.canWalk); //found on Grandparent

//+++++++++++++++  inheritance  +++++++++++++++++ 

function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function(){
    return `${this.name} is eating.`
}

function Dog(){
    Animal.call(this, "Dog"); // borrow constructor
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function(){
    return `${this.name} says woof`;
}

// const rex = new Dog("Rex");

// console.log(rex.eat()); // Rex is eating.
// console.log(rex.bark()); //Rex says woof.

//+++++++++++++++ ES6+ Features +++++++++++++

// Destructuring
const { title, author } = { title: "Dune", author: "Herbert" };


// Spread operator
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums);

// Arrow functions
const square = (x) => x * x;
square(5); //25

// Template literals
const msg = `Book: ${title} by ${author}`;
console.log(msg); 

// Optional chaining
const user = { profile: null };
console.log(user.profile?.name); // undefined, no error

// Default parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest

