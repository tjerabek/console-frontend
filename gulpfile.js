var gulp      = require('gulp'),
  connect     = require('gulp-connect'),
  compass     = require('gulp-compass');

// Start webserver on 8080

gulp.task('webserver', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

// Compass task, css

gulp.task('compass', function() {
  gulp.src('./src/scss/*.scss')
    .pipe(compass({
      sass: 'src/scss',
      css: 'src/css',
      images: 'src/images',
      bundleExec: true
    }));
});

// Watch SCSS files

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', function () {
      gulp.run('compass');
    });
})

// Default gulp task

gulp.task('default', ['compass', 'webserver', 'watch']);