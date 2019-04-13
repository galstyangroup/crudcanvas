const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', () => {
  gulp.src('examples/dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
