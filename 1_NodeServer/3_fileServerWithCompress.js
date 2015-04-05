var http = require('http'),
    fs = require('fs'),
    zlib = require('zlib');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Encoding': 'gzip'});
    var fileUrl = __dirname + req.url;
    fs.createReadStream(fileUrl).pipe(zlib.createGzip()).pipe(res);
});

server.listen(9000);