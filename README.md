# Gulp JS Beaut

Gulp plugin for [JS Beautifier](https://github.com/beautify-web/js-beautify)

This plugin allows you to reformat ugly html, css, and javascript.

##Usage

For defaults and more information read [JS Beautifier Options](https://github.com/beautify-web/js-beautify#options).

```javascript

var beautify = require('gulp-js-beaut');

gulp.task('beautify', function(){
  
  var config = {
    html: {
      indent_inner_html: false,
      indent_size: 2,
      indent_char: " ",
      brace_style: "collapse",
      indent_scripts: "normal",
      wrap_line_length: 500,
      preserve_newlines: true,
      max_preserve_newlines: 1,
      unformatted: [],
      end_with_newline: true
    },
    css: { 
      indent_size: 2,
      indent_char: " "
    },
    js: { 
      indent_size: 4,
      indent_char: " ",
      indent_level: 0,
      indent_with_tabs: false,
      preserve_newlines: true,
      max_preserve_newlines: 10,
      jslint_happy: false,
      space_after_anon_function: false,
      brace_style: "collapse",
      keep_array_indentation: false,
      keep_function_indentation: false,
      space_before_conditional: true,
      break_chained_methods: false,
      eval_code: false,
      unescape_strings: false,
      wrap_line_length: 0
    }
  };

  gulp.src([
    './html/input.html',
    './css/styles.css',
    './javascript/scripts.js',
  ], {base: './'})
  .pipe(beautify(config))
  .pipe(gulp.dest('./'));
  
});

```

