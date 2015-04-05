var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileUrl = __dirname + req.url;
    var rs = fs.createReadStream(fileUrl);
    rs.pipe(res);
});

server.listen(9000);