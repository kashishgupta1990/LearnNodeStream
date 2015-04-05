var stream = require('stream');
var util = require('util');
var Transform = stream.Transform;

var MyTransformStream = function (options) {
    options = options || {};
    Transform.call(this, options);
    //Define some more variables
};

util.inherits(MyTransformStream, Transform);

MyTransformStream.prototype._transform = function (chunk, encodind, callback) {
    //TODO do something here.
};


