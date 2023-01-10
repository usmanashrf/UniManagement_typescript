import student from "./student.js";

class course{

    name: string;
	instructor : string;
	credit: number;
	students : student[]=[];

    constructor(name:string, instructor:string, credit:number){
        this.name= name;
        this.instructor= instructor;
        this.credit = credit;
    }

    addStudent(student: student){
        this.students.push(student);
    }
    removeStudent(studentId: number){
        //todo
    }
    GetNumofStudents(){
        return this.students.length;
    } 

}

export default course;