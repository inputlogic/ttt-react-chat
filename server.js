var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('static'));

var wss = expressWs.getWss('/');
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    wss.clients.forEach(function(client) {
      if (ws !== client) {
        client.send(msg);
      }
    });
  });
});


app.listen(3000);
