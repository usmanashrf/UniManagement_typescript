import inquirer from "inquirer";
import { airAdmin,airStd,airTeacher } from "./hardcodedData.js";

async function login(){
let login:{userName:string, id:string} = await inquirer.prompt([{
    name:"userName",
    type:"input",
    message:"Enter your user name!"
},
{
    name:"id",
    type:"input",
    message:"Enter your ID!"
}]);

if(airAdmin.name === login.userName && airAdmin.id === login.id){
return airAdmin;
}
else if(airStd.name === login.userName && airStd.id === login.id){
    return airStd;
    }
else if(airTeacher.name === login.userName && airTeacher.id === login.id){
    return airTeacher;
    }
}

export default login;