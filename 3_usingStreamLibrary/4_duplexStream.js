var util = require('util');
var stream = require('stream');
var Duplex = stream.Duplex;

var TwoWayStream = function (options) {
    options = options || {};
    Duplex.call(this, options);
};

util.inherits(TwoWayStream, Duplex);

TwoWayStream.prototype._read = function (size) {
//TODO do something
};

TwoWayStream.prototype._write = function (chunk, encoding, callback) {
//TODO do something
};