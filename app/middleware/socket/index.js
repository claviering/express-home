const debug = require('debug')('app:socket')

module.exports = (app) => {
  const http = require('http').Server(app)
  const io = require('socket.io')(http)
  io.on('connection', function(socket){
    debug('client connection')
    socket.on('message', function(msg){
      debug('msg', msg)
      io.emit('message', msg)
    })
  })
  return http
}