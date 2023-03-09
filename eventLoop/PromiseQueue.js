process.nextTick(() => console.log("process1"));
process.nextTick(()=>{
    console.log("process 2");
    process.nextTick(()=>console.log("inner nexttick in the process-nextTick"));
});
process.nextTick(()=>console.log("process 3"))

Promise.resolve().then(() => console.log("promise 1"));
Promise.resolve().then(()=>{
    console.log("promise 2");
    process.nextTick(()=> console.log("nextTick in promise block"))
});
Promise.resolve().then(()=> console.log("promise 3"))
