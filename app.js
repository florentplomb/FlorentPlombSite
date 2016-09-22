
// 'use strict';

// var express = require('express');


// /// *** Partie de la webapp sauf les routes   *** /// 

// var app = express();
// var port = process.env.PORT || 3000;
// //app.use(express.static(__dirname + '/images'));
// console.log("Listening on " + port);


// // // Expose app
// //  exports = module.exports = app;
// // // exports = module.exports = io;


var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public');
});
  app.use('/', express.static(__dirname + '/public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});