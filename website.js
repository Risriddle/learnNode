//creating http server using http module of node
const http=require('http');
const fs=require('fs');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    if (req.url=="/"){
        res.statusCode=200;
    res.end("<h1>hello rishita here this is http server</h1>");}
    else if (req.url=="/about"){
        res.statusCode=200;
        res.end("<h1>hiiiii</h1>");}
    else if (req.url=="/home"){
            res.statusCode=200;
            const data=fs.readFileSync('home.html')
            res.end(data)}
    else{
        res.statusCode=404;
        res.end("<h1>page not found!!oops</h1>")
    }
    //for many urls routes many if else are required which makes code long and unreadable that is why we use express packlage of node for web applications backend
});
server.listen(port,()=>{console.log(`server is listening on ${port}`)});