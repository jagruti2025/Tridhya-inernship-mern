interface CollageDataType{
    name:string;
    displayTeachersName():void;
}

class CollageData implements CollageDataType{
    name: string;
    constructor(cName:string){
        this.name = cName;
    }
    displayTeachersName(): void {
        console.log("ciya", "krinal", "preti");
    }

    getStudentList():string[]{
        return ["anil", "sam", "bruce"];
    }
}

var collage = new CollageData("IIT Delhi");
collage.displayTeachersName();
console.log(collage.getStudentList());
