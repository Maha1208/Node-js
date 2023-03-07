// //JSON response
// const http = require("node:http");

// const server=http.createServer((req,res)=>{
//     const employee={
//         firstName:"Maha",
//         lastName:"Lakshmi"
//     };
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.end(JSON.stringify(employee));
// });

// server.listen(4000,()=>{
//     console.log("Server runningon the port 4000")
// })

//HTML response
const http = require("node:http");
const fs= require("node:fs");

const server=http.createServer((req,res)=>{
    const name="Maha"
    res.writeHead(200,{"Content-Type":"text/html"});
    // const html =fs.readFileSync("./HttpModule.html","utf-8");
    // res.end(html)
    let html= fs.readFileSync("./HttpModule.html","utf-8");
    html=html.replace("{{name}}",name);
    res.end(html);
   // // fs.createReadStream(__dirname + "/HttpModule.html").pipe(res)
    // res.end("<h1>Hello Node JS</h1>");
});

server.listen(4000,()=>{
    console.log("Server running on the port 4000")
})

// const http = require("node:http");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("Hello Node JS!");
// });

// server.listen(4000,()=>{
//     console.log("Server runningon the port 4000")
// })