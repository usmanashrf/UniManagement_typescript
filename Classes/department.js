class department {
    name;
    chairman;
    courses = [];
    students = [];
    faculties = [];
    constructor(name, chairman) {
        this.name = name;
        this.chairman = chairman;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        //todo
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentId) {
        //todo
    }
    addFaculty(faculty) {
        this.faculties.push(faculty);
    }
    removeFaculty(facultyId) {
        //todo
    }
    getNumofStudents() {
        return this.students.length;
    }
}
export default department;
