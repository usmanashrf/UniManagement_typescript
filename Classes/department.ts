import course from "./course.js";
import faculty from "./faculty.js";
import student from "./student.js";

class department{
  name: string;
  chairman: string;
  courses: course[]=[];
  students: student[]=[];
  faculties: faculty[]=[];

  constructor(name:string,chairman:string){
    this.name= name;
    this.chairman= chairman;
  }
  addCourse(course: course){
    this.courses.push(course);
  } 
  removeCourse(courseName: string){
    //todo
  } 
  addStudent(student: student){
    this.students.push(student);
  }
  removeStudent(studentId: string){
    //todo
  }
  addFaculty(faculty: faculty){
    this.faculties.push(faculty);
  } 
  removeFaculty(facultyId: string){
    //todo
  }
  getNumofStudents(){
    return this.students.length;
  } 
}

export default department;



