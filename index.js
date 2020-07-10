var express = require('express');
var app = express();
// To install Express: npm install express express --save

app.get('/', function (req, res) {
    res.send('Hello World, this is a just a test server with NO info!');
});

app.listen(3000, function () {

    console.log('Listening on port 3000!');

});
