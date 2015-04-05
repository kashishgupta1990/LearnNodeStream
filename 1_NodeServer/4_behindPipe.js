// Error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
// Why ??

var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileUrl = __dirname + req.url;
    var rs = fs.createReadStream(fileUrl);

    rs.setEncoding('utf8');
    //Here what is behind pipe() function.
    rs.on('data', function (data) {
        console.log(data.toString());
        res.write(data.toString());
    });

    rs.on('end', function () {
        res.end('Finish');
    });

});

server.listen(9000);