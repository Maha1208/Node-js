//JSON response
const http = require("node:http");

const server=http.createServer((req,res)=>{
    const employee={
        firstName:"Maha",
        lastName:"Lakshmi"
    };
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(employee));
});

server.listen(4000,()=>{
    console.log("Server runningon the port 4000")
})