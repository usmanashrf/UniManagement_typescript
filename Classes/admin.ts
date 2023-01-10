import person from "./person.js";

class admin extends person{

    constructor(name:string,id:string,role:string,department:string){
        super(name,id,role,department);
    }
}

export default admin;