const debug = require('debug')('app:socket')

module.exports = (app) => {
  const http = require('http').Server(app)
  const io = require('socket.io')(http)
  
  io.on('connection', socket => {
    debug('client connection');
    socket.on('new message', msg => {
      debug('msg', msg)
      io.emit('new message', msg)
    })
  });
}