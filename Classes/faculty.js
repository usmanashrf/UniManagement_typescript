import person from "./person.js";
class faculty extends person {
    courses = [];
    constructor(name, id, role, department) {
        super(name, id, role, department);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        //todo
    }
}
export default faculty;
