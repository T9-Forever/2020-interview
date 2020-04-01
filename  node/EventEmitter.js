const events = require('events');

const eventEmitter = new  events.EventEmitter();

const  func = (...args)=> {
  console.log(args, '__args');
}

eventEmitter.on('say', func);
eventEmitter.on('say', func);

eventEmitter.off('say', func);

eventEmitter.emit('say', '1', '2');