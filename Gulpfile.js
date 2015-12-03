var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var webpack = require('webpack')
var browserSync = require('browser-sync').create()

var paths = {
  scripts: { main: './app/main.js' },
  styles: { sass: './app/styles/**/*.scss' },
  assets: './app/assets'
}

gulp.task('serve', function build (cb) {
  require('./devServer').listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
    cb()
  });
})

gulp.task('sass', function build_sass() {
  return gulp.src(paths.styles.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 2 versions']))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.assets))
    .pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('sync', function sync () {
  browserSync.init({ proxy: "localhost:3000", browser: 'google chrome' })
})

gulp.task('default', gulp.series(
  'sass',
  gulp.parallel('serve', 'sync', watch)
))

function watch () {
  gulp.watch(paths.styles.sass, gulp.task('sass'))
}
