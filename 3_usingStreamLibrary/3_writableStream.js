var util = require('util');
var stream = require('stream');
var Writable = stream.Writable;

var MyWritable = function (options) {
    options = options || {};
    options.objectMode = true;

    Writable.call(this, options);
    this._index = 0;
};

util.inherits(MyWritable, Writable);

MyWritable.prototype._write = function (chunk, encoding, callback) {
    var logger = {
        index: this._index++,
        timestamp: new Date(),
        message: chunk.message,
        level: chunk.level
    };
    console.log(logger);
    callback();
};

var logger = new MyWritable();

logger.write({message: 'Hello Kashish', level: 'warn'});
logger.write({message: 'Bye Shubham', level: 'warn'});
logger.write({message: 'Nice DP', level: 'info'});