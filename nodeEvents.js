const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterOff', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{console.log("gentle reminder turn it off")},3000);
  //setTimeout will work after everything
});
myEmitter.emit('waterOff');