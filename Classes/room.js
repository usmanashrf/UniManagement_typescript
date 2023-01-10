class room {
    number;
    capacity;
    schedule = {
        startTime: "",
        endTime: " ",
        courseName: ""
    };
    constructor(number, capacity) {
        this.capacity = capacity;
        this.number = number;
    }
}
export {};
