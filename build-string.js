'use strict';
var path = require('path');
var fs = require('fs');
var nm = require('./');

var nms = nm.toString();
nms = nms.substring(1, nms.length - 1);

var code = '\'use strict\';\nmodule.exports = \'' + nms.replace(/([\\])/g, '\\$1') + '\';\n';

var output = path.join(__dirname, 'string.js');

fs.writeFileSync(output, code);
