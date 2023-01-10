class course {
    name;
    instructor;
    credit;
    students = [];
    constructor(name, instructor, credit) {
        this.name = name;
        this.instructor = instructor;
        this.credit = credit;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentId) {
        //todo
    }
    GetNumofStudents() {
        return this.students.length;
    }
}
export default course;
