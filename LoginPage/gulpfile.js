// Gulp.js configuration
var gulp = require('gulp');

// compile sass and tailwind
gulp.task('sass', function () {
  var sass = require('gulp-sass');
  sass.compiler = require('node-sass');
  var postcss = require('gulp-postcss');
  let cleanCSS = require('gulp-clean-css');
  var tailwindcss = require('tailwindcss');
  var stripCssComments = require('gulp-strip-css-comments');
  var rename = require('gulp-rename');
  return gulp.src('style/tailwind.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(postcss([
        tailwindcss('./style/tailwind.js'),
        require('autoprefixer')
        ]))
      .pipe(cleanCSS())
      .pipe(stripCssComments({preserve: false}))
      .pipe(rename("style.css"))
      .pipe(gulp.dest('./src/'));
});

gulp.task('default', gulp.series('sass'));

