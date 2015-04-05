var http = require('http');
var BodyParse = require('./BodyParserStream');

var server = http.createServer(function (req, res) {
    req.pipe(new BodyParse()).pipe(res);
});

server.listen(2000);