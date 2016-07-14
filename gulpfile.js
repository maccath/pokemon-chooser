var gulp = require('gulp');

gulp.task('default', function() {
    return gulp.src('node_modules/vue/dist/*.js*').pipe(gulp.dest('public/js/vue/'));
});