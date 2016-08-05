(function (r) {

    "use strict";

    var gulp = r('gulp'),
        concat = r('gulp-concat');


    gulp.task('default', ['js']);


    gulp.task('js', function () {

        gulp.src([
            './config.js',
            './app/**/*.js'
        ])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('build'));
    });

}(require));
