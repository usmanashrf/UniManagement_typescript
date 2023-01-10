import course from "./course.js";
import person from "./person.js";

class faculty extends person{
    
    courses: course[]=[];

    constructor(name:string,id:string,role:string,department:string){
        super(name,id,role,department);
    }
    addCourse(course: course){
        this.courses.push(course);
      } 
      removeCourse(courseName: string){
        //todo
      } 
}

export default faculty;