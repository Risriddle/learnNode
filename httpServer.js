//creating http server using http module of node
const http=require('http');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    // console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end("<h1>hello rishita here this is http server</h1>");
});
server.listen(port,()=>{console.log(`server is listening on ${port}`)});