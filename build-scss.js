/* eslint-disable func-names, no-var, import/no-extraneous-dependencies */

var path = require('path');
var fs = require('fs');

var sass = require('sass');
var Fiber = require('fibers');

// Resolve tildas the way webpack does
var tildaImporter = function (url) {
  if (url[0] === '~') {
    // eslint-disable-next-line no-param-reassign
    url = path.resolve('node_modules', url.substr(1)).trim();
  }

  return { file: url };
};

var coreResult = sass.renderSync({
  file: './src/index.scss',
  outputStyle: 'compressed',
  importer: tildaImporter,
  fiber: Fiber,
});

fs.writeFileSync('./dist/frontend-enterprise.css', coreResult.css);
