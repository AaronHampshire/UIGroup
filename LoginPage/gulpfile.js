// Gulp.js configuration
var gulp = require('gulp');

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
      .pipe(gulp.dest('src/'));
  });

gulp.task('default', gulp.series('css'));