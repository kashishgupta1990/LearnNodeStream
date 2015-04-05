var stream = require('stream');
var util = require('util');
var Transform = stream.Transform;

var ToUpperStringTransform = function (options) {
    options = options || {};
    Transform.call(this, options);
    //Define some more variables
    this._length = 0;
};

util.inherits(ToUpperStringTransform, Transform);

ToUpperStringTransform.prototype._transform = function (chunk, encodind, callback) {
    //TODO do something here.
    var newChunk = chunk.toString('utf8');
    this._length += newChunk.length;
    this.emit('chunkLength', newChunk.length);
    this.push(newChunk.toUpperCase(), 'utf8');
    callback();
};

ToUpperStringTransform.prototype._flush = function (callback) {
    this.emit('length', this._length);
    callback();
};

var upperStream = new ToUpperStringTransform();

upperStream.on('data', function (data) {
    console.log(data.toString());
});

upperStream.on('chunkLength', function (length) {
    console.log('Chunk Length ', length);
});

upperStream.on('length', function (totalLength) {
    console.log('Total Length ', totalLength);
});

upperStream.on('end', function () {
    console.log('end of string');
});

upperStream.write('kashish gupta');
upperStream.write('shubham');
upperStream.end();

