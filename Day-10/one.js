//prototype and classe

const obj = {
    name :" ciya",
    age: 21,
    greet: function(){
        console.log("Hello Js");
    }
};

//console.log(obj.greet());
//obj.greet();

// console.log(obj.hasOwnProperty("name"));
// console.log(obj.toString());

// const arr = [1,2,3,4];

// console.log(arr.length);

const obj2 = {
    accoount: 30
}

//console.log(obj2.name); //undefined

obj2.__proto__ = obj;

//console.log(obj2.name); //ciya

// const obj2 = {
//     name :" kriya",
//     age: 23,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// };

// const obj3 = {
//     name :" riyansh",
//     age: 26,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// };

//classes

class Person{
    constructor(name, age){
        this.name  = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new Person("ciya", 26);
const person2 = new Person("riyansh", 28);

//console.log(person1);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.sayHello());

//console.log(person2);
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.sayHello());

const ob1 = {
    name : "ciya",
    age: 20,
    greet: function(){

    }
};

//console.log(ob1);


// class Customer extends Person{
//     constructor(name, age, account, balance){
//         super(name, age);
//         this.account = account;
//         this.balance = balance;
//     }

//     checkBalance(){
//         return this.balance;
//     }
// }

// const c1 = new Customer("ciya",28, 12,540 );

// console.log(c1.checkBalance());

const obj11 = {
    name :"kiya",
    age:23
}
const obj22 = Object.create(obj11);
obj22.account = 10;

console.log(obj22.account);