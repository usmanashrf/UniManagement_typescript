import department from "./department.js";
import student from "./student.js";
import faculty from "./faculty.js";

class university{
    name:string;
    location:string;
	departments :department[]=[];
	students : student[]=[]
	faculties :faculty[]=[]

    constructor(name:string,location:string){
        this.name= name;
        this.location= location;
    }

    addDepartment(departmentData:department){
        this.departments.push(departmentData);
    }
    removeDepartment(departmentName:string){
        //this.departments.find(x=>x)
    }
    addStudent(studentData:student){
        this.students.push(studentData);
    }
    removeStudent(studentId:string){
        //todo
    }
   addFaculty(facultyData: faculty){
    this.faculties.push(facultyData);
   } 
   removefaculty(facultyId: string){
    //todo
   }
   getNumberofStudents(){
    return this.students.length;
   }
}

export default university;