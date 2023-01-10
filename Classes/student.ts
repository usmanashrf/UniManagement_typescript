import course from "./course.js";
import person from "./person.js";

class student extends person{

    courses: course[]=[];

    constructor(name:string,id:string,role:string,department:string){
        super(name,id,role,department);
    }

   enroll(course: course){
    this.courses.push(course);
   }
    withdraw(courseName: string){
        //todo
    }
    getCourses(){
        return this.courses;
    }
}

export default student;