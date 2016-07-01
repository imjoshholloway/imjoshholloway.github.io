var gulp = require('gulp');

var resume = require('gulp-resume');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('default', ['build'])

gulp.task('build', function() {
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'slick'
    }))
    .pipe(rename('resume.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', ['build'], function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
