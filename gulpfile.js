/*jshint esversion: 6 */
// Gulpfile compiles scss because scss is in a different root
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');


// compile sass
gulp.task('sass', () => {
  'use strict';
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});


// watch sass
gulp.task('watch', () => {
  'use strict';
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
});


// tasks
gulp.task('default', gulp.parallel('sass', 'watch'));
