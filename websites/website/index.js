let name = "Eric";
let online = true;
document.getElementById("header").textContent = `Welcome`;
console.log(`Eric is online: ${online}`);
// let username = window.prompt("Type in username");

let username;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("myusername").value;
    document.getElementById("header").textContent = (`Hello, ${username}`)
}