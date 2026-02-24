// // // // const promise  = new Promise((resolve, reject) => {
// // // //     console.log('Promise is pending');
// // // //     throw "err";
// // // //     if(false){
// // // //         const person = {name: "Arnob"};
// // // //         resolve(person);
// // // //     }else{
// // // //         const error ={errorCode: "1001"};
// // // //         reject(error);
// // // //     }   
// // // // });

// //const { values } = require("lodash");

 
// // // // promise.then(
// // // //     (val) => {console.log(val);

// // // //     },
    
// // // // )
// // // // .catch((err) => console.log(err))
// // // // .finally(() => console.log("operation completed")
// // // // );

// // // let p = Promise.resolve("This is a resolved promise");
// // // //let p = Promise.reject("This is a rejected promise"); 
// // // p.then((val) => console.log(val));

// // function asyncTask() {
// //     return Promise.resolve();
// // }

// // asyncTask().then(() => console.log(name));
// // const name = "Arnob";    

// const p = Promise.resolve("done");
// p.then((val) => {
//     console.log(val);
//     return "another value";
// }).then((val) => {
//     console.log(val);
//     return "yet another value";
// }).then((val) => console.log(val));


const  makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("API call completed after " + time + "ms");

        }, time);
    });
};
 let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(3000)];

 Promise.all(multiApiCall).then((val) => {
     console.log(val);
 });

 Promise.race(multiApiCall).then((val) => {
     console.log(val);
 });




