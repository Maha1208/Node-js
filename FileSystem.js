const fs = require("node:fs");
 
const fileContents = fs.readFileSync("./file.txt","utf-8");
console.log(fileContents);

console.log("1st value");
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

console.log("2nd value");

fs.writeFileSync("./greet.txt","Hello Maha!");

fs.writeFile("./greet.txt","Have a Nice Day",{flag:'a'},(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File Written")
    }
})