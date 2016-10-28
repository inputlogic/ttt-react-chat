var express = require("express");
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('static'));

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

app.listen(3000);
