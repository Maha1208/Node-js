import { createServer } from 'http'
const hostname='127.0.0.1'
const port=3000

const server= createServer((request,response)=> {
  response.statusCode=200
  response.setHeader('Content-Type','text/plain')
  response.end('Hello World\n')
})

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}/`)
})