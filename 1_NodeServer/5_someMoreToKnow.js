//We are missing error handling and buffer size management.

var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileUrl = __dirname + req.url;
    var rs = fs.createReadStream(fileUrl);

    rs.setEncoding('utf8');

    //Here what is behind pipe() function.
    rs.on('data', function (data) {
        var ableToWrite = res.write(data.toString());
        if (!ableToWrite) {
            console.log('Pause Please');
            rs.pause();
        }
        //console.log(isAbleToWrite);
    });
    res.on('drain', function () {
        console.log('Continue please');
        rs.resume();
    });
    rs.on('end', function () {
        res.end('Finish');
    });


});

server.listen(9000);