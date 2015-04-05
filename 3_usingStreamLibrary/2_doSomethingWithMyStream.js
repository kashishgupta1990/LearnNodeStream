var stream = require('stream');
var util = require('util');
var Readable = stream.Readable;

var MyStream = function (options) {
    Readable.call(this, options);
    //TODO do something here
};
util.inherits(MyStream, Readable);

MyStream.prototype._read = function (size) {
    //TODO do something here

    for (var x = 0; x < 10; x++) {
        this.push('Kashish-' + x);
    }
    this.push(null);

};

var myReadStream = new MyStream();
myReadStream.on('data', function (data) {
    console.log(data.toString());
});

myReadStream.on('end', function () {
    console.log('The End');
});