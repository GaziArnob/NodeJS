const repl = require("repl");
const local = repl.start("the node console start");
 
local.on("exit", () => {
    console.log("Exiting the node console")
    process.exit();
    });