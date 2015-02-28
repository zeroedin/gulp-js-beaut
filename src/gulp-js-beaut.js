var gutil = require('gulp-util');
var eventStream = require('event-stream');
var beautify = require('js-beautify').js_beautify;
var beautify_html = require('js-beautify').html;
var beautify_css = require('js-beautify').css;
var mime = require('mime');
var chalk = require('chalk');

module.exports = function(options){
  return eventStream.map(function (file, done){
    var fileContent;
    var beautified;

    if (file.isNull()) {
      return done(null, file); // pass along
    }
    if (file.isStream()) {
      return done(new Error('gulp-js-beautify: Streaming not supported'));
    }
    
    if(!options.quiet) {
      gutil.log(chalk.magenta('Beautifying:'), chalk.blue(file.path));
    }
    
    mime_type = mime.lookup(file.path);
    
    if (mime_type == 'text/html') {
      fileContent = file.contents.toString('utf8');
      beautified = beautify_html(fileContent, options.html);
      file.contents = new Buffer(beautified);
    } else if (mime_type == 'text/css') {
      fileContent = file.contents.toString('utf8');
      beautified = beautify_css(fileContent, options.css);
      file.contents = new Buffer(beautified);
    } else if (mime_type == 'application/javascript') {
      fileContent = file.contents.toString('utf8');
      beautified = beautify(fileContent, options.js);
      file.contents = new Buffer(beautified);
    }
    done(null, file);
  });
};