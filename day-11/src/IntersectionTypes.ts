//2. Intersection Types
//Intersection combines multiple types into one — the resulting type has all properties from all types. Written with &.

type Student = {
  studentId: number;
  grade: string;
};

type Athlete = {
  sport: string;
  jerseyNumber: number;
};

type StudentAthlete = Student & Athlete;

const trackStar: StudentAthlete = {
  studentId: 1042,
  grade: "A",
  sport: "Track & Field",
  jerseyNumber: 7
};

console.log(trackStar);
