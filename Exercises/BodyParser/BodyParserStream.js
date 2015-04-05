var util = require('util');
var stream = require('stream');
var Transform = stream.Transform;

//  name=kashish&password=pionerr
var BodyParser = function (options) {
    options = options || {};
    Transform.call(this, options);
    //Add some additional variables
};

util.inherits(BodyParser, Transform);
var parseBody = function (body) {
    var jsonResult = {};
    if (!body.match(/=/)) {
        console.log('2 >>', body);
        //jsonResult = JSON.parse(body);
        //console.log('yo',jsonResult);
        jsonResult = body.trim().replace('\\n');
    } else {
        console.log('3');
        var keyValueList = body.split('&');
        keyValueList.forEach(function (keyValue) {
            var kv = keyValue.split('=');
            jsonResult[kv[0]] = kv[1];
        });

    }
    return jsonResult || {};

};
BodyParser.prototype._transform = function (chunk, encoding, callback) {
    var jsonResult = parseBody(chunk.toString());
    var jsonString = JSON.stringify(jsonResult);
    console.log(jsonString);
    callback(null, jsonString);
};

module.exports = exports = BodyParser;