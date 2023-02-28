console.log("Hello Node JS");

require("./Sum");

const addFunction=require("./Add");
const sum=addFunction(5,5)
const sum1=addFunction(4,5)
console.log(sum);
console.log(sum1);



