var gulp = require('gulp'),
    sass = require('gulp-sass');


//compile scss
gulp.task('scss', function() {
   return gulp.src('./scss/main.scss')
            .pipe(sass({
                includePaths: require('node-normalize-scss').includePaths,
                outputStyle: 'expanded'
            }))
            .pipe(gulp.dest('./css'));
});

//watch scss files
gulp.task('watch', function() {
    gulp.watch('./scss/**/*', ['scss']);
});

//compile and watch
gulp.task('default', ['scss', 'watch']);
