//++++++++++++++++ Enums ++++++++++++++++//

//An enum in TypeScript allows you to define a set of named constants,

//1.String enums.
//2.Numeric enums.
//3. Const enums.

//1)) String Enums :-

//String enums are highly popular because the values are explicit, making them much easier to read and debug when checking logs. You must initialize every single member.

//example

// Define the enum
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  User = "USER"
}

function checkPermission(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Access granted to dashboard.");
  }
}

checkPermission(UserRole.Admin);


//2)) Numeric Enums:-

//Numeric enums store values as numbers. If you do not assign values, TypeScript auto-increments them starting from 0.

//example

// Auto-increments: Up=0, Down=1, Left=2, Right=3
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum StatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized 
}

let currentDirection = Direction.Up; // Value is 0
let currentStatus = StatusCode.Success; // Value is 200

console.log(currentDirection);
console.log(currentStatus);


//3) const enums:-

//Standard enums generate a significant amount of runtime code in JavaScript. Adding the const keyword instructs the TypeScript compiler to completely eliminate the enum object at runtime and inline the exact values, minimizing your final build size.

//example

const enum Status {
  Active = "Active",
  Inactive = "InActive"
}

let currentStatu = Status.Active; 
console.log(currentStatu);
