const gulp = require('gulp');
const htmllint = require('gulp-htmllint');

function lintHtml() {
  return gulp.src('src/**/*.html')
    .pipe(htmllint());
}

gulp.task('lint', lintHtml);
