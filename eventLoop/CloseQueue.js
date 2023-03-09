const fs =require("fs");
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is from readable stream close event")
});

setImmediate(()=>console.log("this is setimmediate queue"))
setTimeout(()=>console.log("this is settimer queue"))
process.nextTick(()=>console.log("process next tick"));
Promise.resolve().then(()=>console.log("promise resolve"));
