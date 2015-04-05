var stream = require('stream');
var util = require('util');
var Transform = stream.Transform;

var ToUpperStringTransform = function (options) {
    options = options || {};
    Transform.call(this, options);
    //Define some more variables
};

util.inherits(ToUpperStringTransform, Transform);

ToUpperStringTransform.prototype._transform = function (chunk, encodind, callback) {
    //TODO do something here.
    var newChunk = chunk.toString('utf8');
    this.push(newChunk.toUpperCase(), 'utf8');
    callback();
};

var upperStream = new ToUpperStringTransform();

upperStream.on('data', function (data) {
    console.log(data.toString());
});

upperStream.on('end', function () {
    console.log('end of string');
});

upperStream.write('kashish gupta');
upperStream.end();

