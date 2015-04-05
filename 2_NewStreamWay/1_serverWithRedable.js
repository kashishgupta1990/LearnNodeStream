var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileUrl = __dirname + req.url;
    var rs = fs.createReadStream(fileUrl);

    rs.setEncoding('utf8');

    rs.on('readable', function () {
        console.log('Ready to read');
        var dd = rs.read();
        console.log(dd);
        rs.pause();

    });

});

server.listen(9000);