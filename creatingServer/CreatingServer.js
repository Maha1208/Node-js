const hostname='127.0.0.1'
const port=3000
const http=require('http')

const server=http.createServer((request,response)=> {
  response.statusCode=200
  response.setHeader('Content-Type','text/plain')
  response.end('Hello World\n')
})

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}/`)
})