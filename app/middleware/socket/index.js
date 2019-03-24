module.exports = (app) => {
  const http = require('http').Server(app)
  const io = require('socket.io')(http)
  io.on('connection', function(socket){

    console.log('client connection');
    socket.on('new message', function(msg){
      console.log('msg', msg)
      io.emit('new message', msg)
    })
  });
}