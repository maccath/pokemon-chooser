var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('node_modules/vue/dist/*.js*').pipe(gulp.dest('public/js/vue/'));
    gulp.src('node_modules/vue-resource/dist/*.js*').pipe(gulp.dest('public/js/vue-resource/'));
    gulp.src('node_modules/vue-strap/dist/*.js*').pipe(gulp.dest('public/js/vue-strap/'));
});