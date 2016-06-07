var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
    request({ url: 'http://localhost:3000/googleScript', timeout: 6000 }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }

      if(error) {
          res.end();
      }
    })
});

/* googleScript ****/
app.get('/googleScript', function (req, res) {
    setTimeout(function () {
        res.sendFile(__dirname + '/googleContentScript.js');
    }, 5000);
});
/* googleScript ****/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
