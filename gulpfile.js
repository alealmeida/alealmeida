const gulp = require('gulp'),
    // jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus');
const load_js = () => {
    return gulp
        .src(["./src/scripts/js/**/*", "./gulpfile.js"])
        .pipe(uglify())
        .pipe(gulp.dest('./assets/build/js'))
}
const scripts = () => (gulp.watch('./src/scripts/js/**/*.js', function (event) {
    gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run(load_js);
}))

const css = () => gulp
    .src("./src/scripts/styl/*.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./src/assets/css/"));
const styles = () => (gulp.watch("./src/scripts/styl/*.styl", css))
gulp.task("default", gulp.parallel(scripts, styles));
