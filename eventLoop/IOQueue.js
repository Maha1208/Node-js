const fs =require("fs");

setTimeout(()=>console.log("this is timer queue1"),0);
fs.readFile(__filename,()=>{
    console.log("read file 1");
});

process.nextTick(()=>console.log("process next tick"));
Promise.resolve().then(()=>console.log("promise resolve"));
