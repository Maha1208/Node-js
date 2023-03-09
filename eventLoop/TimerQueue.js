setTimeout(()=>console.log("this is timer queue1"),100);
setTimeout(()=>{
    console.log("this is timer queue2");
    process.nextTick(()=>console.log("nexttick in timer queue"));
},500);
setTimeout(()=>console.log("this is timer queue3"),300)

