var util = require('util');
var stream = require('stream');
var Duplex = stream.Duplex;

var TwoWayStream = function (options) {
    options = options || {};
    Duplex.call(this, options);
    this._index = 0;
    this._messageList = [];
};

util.inherits(TwoWayStream, Duplex);

TwoWayStream.prototype._read = function (size) {
    //OUT
    var _that = this;
    if (this._messageList !== 0) {
        for (var t = 0; t < this._messageList.length; t++) {
            this.push(this._messageList.pop().message);
        }
    }

};

TwoWayStream.prototype._write = function (chunk, encoding, callback) {
    //IN
    var message = {
        index: this._index++,
        message: chunk.toString()
    };
    this._messageList.push(message);
    callback();
};

var writeLogger = new TwoWayStream();

writeLogger.on('data', function (data) {
    console.log('YO> ', data.toString());
});

writeLogger.on('end', function () {
    console.log('End of Stream');
});

writeLogger.write('Kashish');
writeLogger.write('Shubham');
writeLogger.write('Ankit');