var gulp = require('gulp'),
    qunit = require('gulp-qunit');


gulp.task('test', function() {
    gulp.src('./index.html')
        .pipe(qunit());
});


gulp.task('default', ['test']);