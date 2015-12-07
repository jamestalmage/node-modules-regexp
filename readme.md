# node-modules-regexp [![Build Status](https://travis-ci.org/jamestalmage/node-modules-regexp.svg?branch=master)](https://travis-ci.org/jamestalmage/node-modules-regexp)

> A regular expression for file paths that contain a `node_modules` folder.


## Install

```
$ npm install --save node-modules-regexp
```


## Usage

```js
let nodeModules = require('node-modules-regexp');

// alternate string export
let nodeModulesString = require('node-modules-regexp/string');
nodeModules = new RegExp(nodeModulesString);


nodeModules.test('/foo/node_modules/bar.js');
//=> true

nodeModules.test('/foo/bar.js');
//=> false
```


## API

The returned value is a regular expression, [soooo....](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

## License

MIT © [James Talmage](http://github.com/jamestalmage)
