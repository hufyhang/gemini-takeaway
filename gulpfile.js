var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');

var PATHS = {
  dist: {
    root: 'dist/',
    jsvender: 'js/vendor/',
    js: 'js/',
    css: 'css/',
    img: 'img/'
  },
  html: ['index.html'],
  img: ['img/**/*.png', 'img/**/*.jpg', 'img/**/*.svg'],
  css: ['css/**/*.css'],
  js: ['js/main.js'],
  jsvender: ['js/vendor/*.js']
};

gulp.task('compress-js', function () {
  gulp.src(PATHS.jsvender)
    .pipe(uglify())
    .pipe(gulp.dest(PATHS.dist.root + PATHS.dist.jsvender));

  gulp.src(PATHS.js)
    .pipe(uglify())
    .pipe(gulp.dest(PATHS.dist.root + PATHS.dist.js));
});

gulp.task('compress-css', function () {
  return gulp.src(PATHS.css)
    // .pipe(minifyCss())
    .pipe(gulp.dest(PATHS.dist.root + PATHS.dist.css));
});

gulp.task('compress-img', function () {
  return gulp.src(PATHS.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(PATHS.dist.root + PATHS.dist.img));
});

gulp.task('compress-html', function () {
  return gulp.src(PATHS.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(PATHS.dist.root));
});

gulp.task('build', [
          'compress-html',
          'compress-js',
          'compress-css',
          'compress-img'
          ]);
