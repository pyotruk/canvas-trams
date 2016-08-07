(function (r) {

    "use strict";

    var gulp = r('gulp'),
        concat = r('gulp-concat'),
        Karma = r('karma').Server;

    gulp.task('default', ['js']);

    gulp.task('js', function () {

        gulp.src([
            './config.js',
            './app/**/*.js'
        ])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('build'));
    });

    gulp.task('test', function (done) {
        new Karma({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

}(require));
