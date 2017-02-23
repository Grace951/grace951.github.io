'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var del = require('del');

var src_paths = {
  scripts: ['./src/js/**'],
  images: './src/images/**',
  scss: './src/scss/**/*.scss'
};


var dest_paths = {
  scripts: 'public/js',
  images: 'public/images',
  css: 'public/css'
};

gulp.task('webserver', function() {
  connect.server({
    root: '.',
	port: 8080,
    livereload: true
  });
});

gulp.task('clean-img', function() {
  return del([dest_paths.images]);
});
gulp.task('clean-js', function() {
  return del([dest_paths.scripts]);
});
gulp.task('clean-css', function() {
  return del([dest_paths.css]);
});

gulp.task('jsBundle',  function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/js/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest_paths.scripts));
});


// Copy all static images
gulp.task('images',  function() {
  return gulp.src(src_paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(dest_paths.images));
});


gulp.task('sass', function () {
  return gulp.src(src_paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest_paths.css));
});


gulp.task('watch',function(){
    gulp.watch(src_paths.scripts, ['jsBundle']);
    gulp.watch(src_paths.images, ['images']);	
    gulp.watch('./sass/**/*.scss', ['sass']);
});




gulp.task('default', ['sass', 'images', 'jsBundle', 'watch']);

