const ev = require('events')
const emittir = new ev.EventEmitter();

emittir.on('eventCustom', (mensaje, status)=>{
    console.log(`${mensaje}: ${status}`);
})
emittir.emit('eventCustom', 'know you can see the mesaje', 200)