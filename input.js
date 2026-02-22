const readline = require("readline");
const promet = require("prompts")();
/*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What is your name? ", (name) => {
    console.log(`Hello ${name}`);
    rl.close();
});*/

const name = prompt("What is your name? ");
console.log(`Hello ${name}`);
