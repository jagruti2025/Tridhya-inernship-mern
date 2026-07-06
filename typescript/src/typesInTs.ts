// TYpes in TypeScript

//1)String

// let name: string = "Ciya"; //Represents text data.

// //example 
// function greetUser(username: string): string {
//   return `Hello, ${username}!`;
// }
// greetUser("Ciya"); // Hello, Ciya!

//2) number
//Represents all numbers — integers, floats, negatives. TypeScript (like JS) doesn't separate int and float.

let age: number = 24;
let price: number = 99.99;

//example
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
console.log(calculateTotal(10, 100));

//3) boolean
//Represents true or false only

let isLoggedIn: boolean = true;

//example 
function toggleTheme(isDark: boolean): string {
  return isDark ? "Dark Mode" : "Light Mode";
}
console.log(toggleTheme(true));


//4) any
//Turns off type checking entirely for that variable. It can be anything, and TS won't complain no matter what you do with it.

let data: any = 5;
data = "hello"; //  allowed
data = true;    //  allowed

//example
function logAnything(value: any) {
  console.log(value);
}
console.log(logAnything("yess"));

//5. unknown

//let data: unknown = "hello";

//example
function processInput(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); 
  }
}

//6) void

//Represents the absence of a return value — used for functions that don't return anything.

 function logMessage(message: string): void {
  console.log(message);
  // no return statement
}

//7) never
//Represents values that never occur

function throwError(message: string): never {
  throw new Error(message);
}

//example
function infiniteLoop(): never {
  while (true) {
    // runs forever
  }
}

//8) & 9) null and undefined
//undefined = a variable has been declared but not assigned a value yet.
//null =  intentionally "no value" — explicitly set by the developer.

let a: undefined = undefined;
let b: null = null;

//example
let user: { name: string } | null = null;
// later...
user = { name: "Ciya" };

//let username: string = null; //  Error under strict mode
let username2: string | null = null; //  correct

//10) object
//Represents any non-primitive value - (basically objects, arrays, functions.)

//let user: object = { name: "Ciya", age: 24 };
//let user: object = { name: "Ciya" };
console.log(user.name); //  Error 

//Better approach

let user1: { name: string; age: number } = { name: "Ciya", age: 24 };
console.log(user.name); 

//11) array
//A collection of values of the same type.

let scores: number[] = [90, 85, 77];
let names: Array<string> = ["Ciya", "Mohan"];

//example

function getTotal(scores: number[]): number {
  return scores.reduce((sum, score) => sum + score, 0);
}

