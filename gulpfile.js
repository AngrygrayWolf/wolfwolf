let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('serve', ['sass'], function () {
    
    browserSync.init({
        server: './'
    });

    gulp.watch('./source/*.sass', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('./source/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});


// Can't output *.css when sass file has _ in the head
gulp.task('scss', function(){
    return gulp.src('./source/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', function() {
    gulp.watch('./source/*.scss', ['scss']);
});
