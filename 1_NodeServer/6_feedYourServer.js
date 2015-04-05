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

process.stdin.on('data', function (data) {
    var command = data.toString().toLowerCase().trim();
    switch (command) {
        case 'server start':
            server.listen(9000);
            console.log('Server Started Successfully');
            break;
        case 'server stop':
            server.close();
            console.log('Server Stop Successfully');
            break;
        default :
            console.log('Wrong Command :', command);
    }
});

process.stdin.resume();