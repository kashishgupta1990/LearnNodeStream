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
};