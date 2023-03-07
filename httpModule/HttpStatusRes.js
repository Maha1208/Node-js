const http = require("node:http");

const server=http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("Hello Node JS!");
});

server.listen(4000,()=>{
    console.log("Server runningon the port 4000")
})