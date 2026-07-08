//interface

interface Info {
    name: string,
    age: number,
    collage: string,
}
interface TeacherType extends Info {
    subject: string,
}

var studentObj:Info ={
    name: "ciya",
    age: 23,
    collage: "ganpat Univercity"
}

var teacherObj: TeacherType ={
    name: "ciya",
    age: 23,
    collage: "ganpat Univercity",
    subject: "maths"
}

console.log(studentObj);
console.log(teacherObj);

