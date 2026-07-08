class EmpInfo{
    _name:string= "ciya";
    _email:string = "ciya@gmail.com";

    get name():string{
        return "Mr. " + this._name;
    }

    set email(val:string){
        this._email="emp_"+val;
    }


}

var emp1 = new EmpInfo();

emp1.email ="peter@test.com";
console.log(emp1._name);
console.log(emp1._email);

