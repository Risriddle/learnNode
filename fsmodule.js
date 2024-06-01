const fs=require('fs');
//last line gets executed first as readfile is an async function and uses callback
// fs.readFile('hello.txt','utf8',(err,data)=>{console.log(err,data)})
// console.log('i am last line of code');

// const a =fs.readFileSync('hello.txt')
// console.log(a.toString())

// //creates and writes content to file
// fs.writeFile('file.txt',"this is data",()=>
// {console.log("content written to file")});
//similarly writeFileSync for sync funcs
