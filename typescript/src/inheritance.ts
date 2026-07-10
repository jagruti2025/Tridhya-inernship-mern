class Auth{
     login(name: string, password: string) {
        if (name && password) {
            return "Student Login"
        } else {
            return "not Login"
        }
    }
}
class Student extends Auth {
   
    result(marks:number){
        if(marks > 33){
            return "Pass";
        }else{
            return "failed";
        }
    }
}

var s1 = new Student();
console.log(s1.result(20));

class Teacher extends Auth{
  
    subject(subject:number){
        return "he tech" + subject;
    }
}

var te = new Teacher();
console.log(te.login("sam", "1234"));
