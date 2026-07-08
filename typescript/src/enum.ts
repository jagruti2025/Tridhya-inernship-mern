// Enum Data type

// A data type that allows you to define a set of named constants..

// var who:string = 'student';
// who = "teacher" 

enum WhoType{
    student = "students",
    teacher = "teacher",
    management = "management",
    labStaff = "labStaff",
}

var who1:WhoType = WhoType.teacher;

who1 = WhoType.teacher;

console.log(WhoType.management);

enum Fruit {
    a = "Apple",
    b = "banana",
    c = "cherry"
}

var myFruit:Fruit = Fruit.a
myFruit = Fruit.c;
console.log(myFruit);

enum Roles{
    admin,
    manager,
    qa,
    developer,
    user
}

var userRoles = Roles.qa;
console.log(userRoles);