var util = require('util');
var stream = require('stream');
var Readable = stream.Readable;

var isPrime = function (n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
};

var PrimeStream = function (max, options) {
    options = options || {};
    options.objectMode = true;

    Readable.call(this, options);
    this._index = 2;
    this._max = max;
};

util.inherits(PrimeStream, Readable);

PrimeStream.prototype._read = function (size) {
    var foundPrime = false;
    do {
        if (this._index > this._max) {
            this.push(null);
            return;
        }
        if (isPrime(this._index)) {
            foundPrime = true;
            this.push(this._index);
        }
        this._index++;
    } while (!foundPrime);
};

var getPrimeList = new PrimeStream(200);
getPrimeList.on('data', function (data) {
    console.log(data);
});

getPrimeList.on('end', function () {
    console.log('The End');
});