// console.log(global.num);
// var num=10
// console.log(num)
// /*process is global var*/
// console.log(process.platform);
// console.log(process.env.USER);
// /*events and callback*/

// /*built in*/
// process.on('exit',function(){})

// /*custom*/
//{functions} used to get that particular  function from events library
// const { EventEmitter }=require('events');
// const eventEmitter=new EventEmitter();

// eventEmitter.on('lunch',function(){console.log("yumm")});
// eventEmitter.emit('lunch');


//file system built in to read files
//synchronous way ie blocks other code till this is executed
// 


//asynchronous method
// const{readFile}=require('fs');
// readFile('./hello.txt','utf8',(err,txt)=>{
//     console.log(txt);
// })
// //first this ie rest of the tasks exexcute then when file is ready it is read and executed
// console.log("do this ASAP");


//third method to manipulate files === promises
//asynchronous but shorter code
// const {readFile}=require('fs').promises;
// async function hello(){
// const file=await readFile('./hello.txt','utf8');
// console.log(file)
// }
// hello();

//require() function used to import js modules(common js)
//now updated to es modules ie can use import/export

//using modules (user made)
// const myModule=require('./my-module');
// console.log(myModule);

//npm=node packet manager (just like pip for python)
//npm was also installed along with node . it is used to install remote packages and keep track of dependencies

// //using express
// const express=require('express');
// //creating an express app that allows us to create diff end points users can interact with

// const app=express();
// const {readFile}=require('fs');
// //for http get request(just view)
// app.get('/',(req,res)=>{
    
//     readFile('./home.html','utf8',(err,html)=>{
//         if (err){
//             res.status(500).send('sorry out of order')
//         }
//         res.send(html);
//     })
// });

// //to listen to incoming reqs
// app.listen(process.env.PORT||3000,()=>console.log("app available on http://localhost:3000"))

//using callbacks can become very complex as it can lead to nested callbacks which causes callback HELL so to avoid that we use PROMISES

//using promises
//much more concise code and suitable when many async functions are to be used
// const {readFile}=require('fs').promises

// const express=require('express')
// const app=express()
// app.get('/',async(req,res)=>{res.send(await readFile('./home.html','utf8'))});
// app.listen(process.env.PORT||3000,()=>console.log('app available on http://localhost:3000'));

//nodemon == used to automatically restart server when changes made or show errors on terminal ie no need to restart again and again 

const show=require('./my-module');
console.log(show)
