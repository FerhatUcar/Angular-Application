/*jshint esversion: 6 */
const gulp = require('gulp');
const sass = require('gulp-sass');
// const browserify = require('browserify');
// const babelify = require('babelify');
// const source = require('vinyl-source-stream');

sass.compiler = require('node-sass');


// compile sass
gulp.task('sass', function() {
  'use strict';
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});


// watch sass
gulp.task('watch', function() {
  'use strict';
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
});


// tasks
gulp.task('default', gulp.parallel('sass', 'watch'));
