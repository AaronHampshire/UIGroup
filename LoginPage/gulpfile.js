// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }


;

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var tailwindcss = require('tailwindcss');
    var rename = require('gulp-rename');
    return gulp.src('style/tailwind.css')
      .pipe(postcss([
        tailwindcss('./style/tailwind.js'),
        require('autoprefixer')
      ]))
      .pipe(rename("style.css"))
      .pipe(gulp.dest('build/'));
  });