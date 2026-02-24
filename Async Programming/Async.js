console.log("task 1");
console.log("task 2");
console.log("task 3");  
console.log("start operation");

function sleep(milliseconds) {
    console.log("opersation in progress...");
    setTimeout(() => {
        console.log("operation completed");
    }, milliseconds);

   
    console.log("operation completed");
}

sleep(1000);
console.log("do something else");  