var express = require('express');
var app = express();
require('express-ws')(app);

app.use(express.static('static'));

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
});

app.listen(3000);
