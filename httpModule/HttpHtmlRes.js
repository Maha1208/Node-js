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

