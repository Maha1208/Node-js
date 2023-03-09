setImmediate(()=>console.log("this is immediate queue1"));
setImmediate(()=>{
    console.log("this is immediate queue2");
    process.nextTick(()=>console.log("nexttick in set immediate queue"));
});
setImmediate(()=>console.log("this is immediate queue3"))

