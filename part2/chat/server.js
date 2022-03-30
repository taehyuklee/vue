var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); //__dirname 서버 directory이름
});

io.on('connection', function (socket) { //on은 보통 event를 얘기해준다. 
  socket.on('chat message', function (msg) { //socket에 대한 listening을 해준다.
    io.emit('chat message', msg); //서버에 연결된 chat message를
  });
});

http.listen(3000, function () { //http port 3000으로해라
  console.log('listening on *:3000');
});