// module.exports={
//     science:'hi i am a part of module you can use me'
// }

//or module.exports=obj;
// obj={
//     science:'hi i am a part of module you can use me'
// }

//module wrapper functions
// (function(exports,require,module,_filename,_dirname)
// {
// //write the export object/code here
// //node automatically wraps code to be exported in this function 
// })
obj={name:"risriddle"}
module.exports=obj
console.log(exports,require,module,__filename,__dirname)