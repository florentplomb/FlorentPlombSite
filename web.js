
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public');
});
  app.use('/', express.static(__dirname + '/public'));


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});