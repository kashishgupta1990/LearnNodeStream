//Understand HTTP request

var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    //var fileUrl = __dirname + req.url;
    //var rs = fs.createReadStream(fileUrl);
    //rs.setEncoding('utf8');

    console.log(req.headers);
    console.log(req.method);
    req.on('data', function (data) {
        console.log(data.toString());
    });
    req.on('end', function () {
        console.log('Request Ended');
        res.end('bye')
    });

});

server.listen(9000);