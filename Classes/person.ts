class person{
    name:string;
    id: string;
    role:string;
    department:string;

    constructor(name:string,id:string,role:string,department:string){
        this.id= id;
        this.name= name;
        this.role=role;
        this.department= department;
    }
}

export default person;