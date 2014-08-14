'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isGif = require('./');

function check(filename) {
	return isGif(readChunk.sync(filename, 0, 3));
}

it('should detect GIF from Buffer', function () {
	assert(check('fixture.gif'));
	assert(!check('fixture.png'));
});
