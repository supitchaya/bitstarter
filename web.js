var express = require('express');

var fs = require ('fs');
var buffer = "";
fs.readFile('index.html',function (eww,d
app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


