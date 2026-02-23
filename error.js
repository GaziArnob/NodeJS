// Error Object
const error = new Error('This is an error message');
//console.log(error.stack);
//console.log(error.message);
//throw new Error("i am  error object");
const {CustomError} = require("./CustomError");
//throw  new CustomError("this is custom error object");
try{
    doSomething()
} catch (e){
    console.log("An error occurred: ");
    console.log(e);

}

function doSomething(){

    const data = fetch("localhost:3000/api");

    console.log("Doing something...");
    //const data ="Doing something...";
    return data
}

//Uncaught Exception
//process.on ("uncaughtException", (err) => {
//    console.error("Uncaught Exception:", err);
 //   process.exit(1); // Exit the process with an error codeq
//});
doSomething();


// Exceptions with promises

/*const promise = new Promise((resolve, reject) => {
    if(true){
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});
promise.then((val) =>{
    console.log(val);
}).catch((err) => {
    console.error("Promise rejected with error: ", err);
    console.log(err);
});*/

const someFunction = async () => {
    try {
        await doSomething();
    } catch (err) {
        throw new CustomError(err.message);
    }
};
someFunction();
