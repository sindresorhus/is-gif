'use strict';
const fileType = require('file-type');

module.exports = input => (fileType(input) || {}).ext === 'gif';
