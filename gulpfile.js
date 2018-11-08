var gulp = require('gulp'),
stylus = require('gulp-stylus'),
watch = require('gulp-watch');

function css() {
  return gulp
    .src("./src/styles/**/*.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./src/assets/styles/"));
}
// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./assets/javascript/**/*", "./gulpfile.js"])
    .pipe(plumber());
}
function watchFiles() {
  gulp.watch("./src/styles/**/*.styl", css);
}

// // Tasks
// gulp.task("css", css);
// gulp.task("js", gulp.series(scriptsLint, scripts));

// // build
// gulp.task(
//   "build",
//   gulp.series(clean, gulp.parallel(css, images, jekyll, "js"))
// );

gulp.task("default", gulp.parallel(watchFiles));