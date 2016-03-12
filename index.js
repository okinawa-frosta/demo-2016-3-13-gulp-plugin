var through = require('through2');

module.exports = function() {

  function transform(file, encode, callback) {
    var beforeContents = file.contents.toString();
    var afterContents  = beforeContents.replace('aaaaa', 'bbbbb');

    file.contents = new Buffer(afterContents, 'utf-8');
    this.push(file);

    return callback();
  }

  function flush(callback) {
    return callback();
  }

  return through.obj(transform, flush);

};
