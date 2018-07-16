var gulp = require('gulp');

var resume = require('gulp-resume');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('build', function() {
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('resume.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', gulp.series('build', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
}));
