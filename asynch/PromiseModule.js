const fs=require("node:fs");
async function readFile()
{
    try
    {
        const data = await fs.readFile("file.txt","utf-8");
        console.log(data);
    }
    catch(error)
    {
        console.log(error)
    }
}
readFile();