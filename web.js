var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(fs.readFileSync("/home/ubuntu/hw3/bitstarter/index.html"));
console.log(process.argv.length);


console.log(buffer.toString('utf-8'));

app.use(express.logger());
app.get('/', function(request, response) {
  response.send("Esto es lo que debe mostrar::: "+buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
