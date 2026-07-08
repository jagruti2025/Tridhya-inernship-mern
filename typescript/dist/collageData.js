"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollageData {
    name;
    constructor(cName) {
        this.name = cName;
    }
    displayTeachersName() {
        console.log("ciya", "krinal", "preti");
    }
    getStudentList() {
        return ["anil", "sam", "bruce"];
    }
}
var collage = new CollageData("IIT Delhi");
collage.displayTeachersName();
console.log(collage.getStudentList());
//# sourceMappingURL=collageData.js.map