import person from "./person.js";
class student extends person {
    courses = [];
    constructor(name, id, role, department) {
        super(name, id, role, department);
    }
    enroll(course) {
        this.courses.push(course);
    }
    withdraw(courseName) {
        //todo
    }
    getCourses() {
        return this.courses;
    }
}
export default student;
