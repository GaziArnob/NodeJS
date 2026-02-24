
// function asyncTask(cb){
//        setTimeout(() => {
//         cb(null ,"this is data from the server");
// },0);
// }


// asyncTask((err , data) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("data: ", data);
//     }
// }
// );

 function asyncTask(cb){
        setTimeout(() => {
         cb(null ,"this is data from the server");
 },0);
 }

 function makeApicall(cb){
    setTimeout(() => {
        console.log("API call completed");
        
    }, 0);
}

makeApicall(() => {
    makeApicall(() => {
        asyncTask(() => {
            asyncTask(() => {
            });
        });
    });
});
  

