class university {
    name;
    location;
    departments = [];
    students = [];
    faculties = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    addDepartment(departmentData) {
        this.departments.push(departmentData);
    }
    removeDepartment(departmentName) {
        //this.departments.find(x=>x)
    }
    addStudent(studentData) {
        this.students.push(studentData);
    }
    removeStudent(studentId) {
        //todo
    }
    addFaculty(facultyData) {
        this.faculties.push(facultyData);
    }
    removefaculty(facultyId) {
        //todo
    }
    getNumberofStudents() {
        return this.students.length;
    }
}
export default university;
