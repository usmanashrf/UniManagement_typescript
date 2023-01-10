import admin from "./admin.js";
import faculty from "./faculty.js";
import student from "./student.js";
import university from "./university.js";

let airUni  = new university('Air university',"Islamabad");
let airAdmin = new admin("Mr.Jhon","123","Admin","Administration");
let airStd= new student("Mr.Mike","1234","Student","Computer Science");
let airTeacher= new faculty("Sir Zia","12345","Teacher","Computer Science");

export {airUni};
export {airAdmin};
export {airStd};
export {airTeacher};
