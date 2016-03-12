var plugin = require('../index');
var util = require('gulp-util');
// var stream = require('stream');
var path = require('path');
var fs = require('fs');

var createFile = function(filePath) {
  var filePath = path.join(__dirname, './fixtures', filePath);
  return new util.File({
    path: filePath,
    contents: fs.readFileSync(filePath)
  });
};

describe('gulp plugin', function() {
  it('test', function(done) {
    var stream = plugin();
    stream.on('data', function(file) {
      fs.writeFile(file.path, file.contents, 'binary', function(err) {
        if(err) console.log(err);
      });
    });
    stream.on('end', function() {
      done();
    });
    stream.write(createFile('index.html'));
    stream.end();
  });
});
