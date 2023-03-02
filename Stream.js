const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:3
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);
})