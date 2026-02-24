const userLoginin = ()=>{
    console.log("Enter Username and password");
    let username  = prompt("Username: ");
    let password = prompt("Password: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "Arnob" && password === "12345"){
                resolve("Login successful");
            }else{
                reject("Invalid username or password");
            }
        }, 1000);
    });
};
function goToHomePage(userAuthenticated){
    return Promise.resolve(`go to homepage as : ${userAuthenticated}`);

}

userLoginin().then((response) => {
    console.log("user validated");
    return goToHomePage(response);
}).then((userAuthenticated) => {
    console.log(userAuthenticated);
}).catch((err) => {
    console.error(err);
});