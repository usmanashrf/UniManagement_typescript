import login from "./login.js";
async function main() {
    let person = await login();
    console.log(person?.role);
}
export default main;
