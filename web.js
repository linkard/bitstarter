var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer(256);

//veamos
// 

//console.log();

app.use(express.logger());
app.get('/', function(request, response) {
    buf=fs.readFileSync('/home/ubuntu/hw3/bitstarter/index.html');
    response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
