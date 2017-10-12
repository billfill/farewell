var gulp = require('gulp');
var connect = require('gulp-connect');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss'); 
var sass = require('gulp-sass');   
var concat = require('gulp-concat')
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  var processors = [                                 // 定義 postCSS 所需要的元件
      autoprefixer({browsers: ['last 5 version']})   // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
  ];
  return gulp.src('./src/scss-dev/*.scss')
    .pipe(sass(
      {outputStyle: 'expanded'}  //expanded/compressed
    ).on('error', sass.logError))
    .pipe(postcss(processors))                       // 將 PostCSS 插入流程
    .pipe(gulp.dest('./src/css-dev/'))
    .pipe(connect.reload());
});

gulp.task('concat', function() {
    return gulp.src('./src/css-dev/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(connect.reload());
});

gulp.task('watch',()=>{
    gulp.watch('./src/scss-dev/*.scss',['sass']);
});
gulp.task('watch-concat',()=>{
    gulp.watch('./src/css-dev/*.css',['concat']);
});
gulp.task('server',()=>{
  connect.server({
    root: ['./'],
    livereload: true,
    port: 2022,
  });
});


gulp.task('default',['watch','watch-concat','server','sass','concat']);

