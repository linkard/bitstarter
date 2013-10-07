var express = require('express');
var app = express();
//var fs = require('fs');
//var buf = new Buffer(256);

//veamos
//buf=fs.readFileSync('/home/ubuntu/hw3/bitstarter/index.html'); 

//console.log(buf.toString('utf-8'));

app.use(express.logger());
app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
