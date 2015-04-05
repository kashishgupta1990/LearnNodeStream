var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileUrl = __dirname + req.url;
    fs.readFile(fileUrl, function (err, data) {
        if (err) {
            console.log(err);
            res.write(JSON.stringify(err));
        } else {
            res.write(data.toString());
        }
        res.end(fileUrl);
    });
});

server.listen(9000);