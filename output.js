/*const x ="1";
const y = "2";
console.log(x,y);
console.log("i am %s and mu age is %d","arnob",25);
console.clear();
console.count("i am arnob");
console.count("i am arnob");
console.count("i am salman");
console.countReset("i am arnob");
console.count("i am arnob");

const function1 = () => console.trace();
const function2 = () => function1();
function2();

const sum = () => console.log(`the sum of 2 and 3 is ${2+3}`);


const multiply = () => console.log(`the product of 2 and 3 is ${2*3}`);

const measureTime = () => {
    console.time("sum");
    sum();
    console.timeEnd("sum");

    console.time("multiply");
    multiply();
    console.timeEnd("multiply");
};
measureTime();*/
const ProgressBar = require("progress");
const bar =  new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
    total: 20,

})
const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100);
const chalk = require("chalk");
console.log(chalk.blue("this is a green text"));

    



