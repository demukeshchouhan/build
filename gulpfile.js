var gulp =  require("gulp"),
    concat = require("gulp-concat"),
    browserify = require("gulp-browserify"),
    compass = require("gulp-compass"),
    connect = require("gulp-connect");

//browserify && concat

var jsSource = [
  "components/scripts/script1.js",
  "components/scripts/script2.js"
];

gulp.task("js",function(){
    gulp.src(jsSource)
        .pipe(concat("script.js"))
        .pipe(browserify())
        .pipe(gulp.dest("builds/developments/js"))
        .pipe(connect.reload());
});

//sass

var sassSource = ["components/scss/style.scss"];

gulp.task("compass",function(){
    gulp.src(sassSource)
        .pipe(compass({
          css: 'builds/developments/css',
          sass : "components/scss",
          image : "builds/developments/images",
          style : "compact"
        }))
        .pipe(gulp.dest("builds/developments/css"))
        .pipe(connect.reload());
});


//livereload
gulp.task("connect",function(){
    connect.server({
      root : "builds/developments/",
      livereload : true
    })
});

//adding watch cmd
gulp.task("watch",function(){
  gulp.watch(jsSource,["js"]);
  gulp.watch("components/scss/*.scss",["compass"]);
});


//default task
gulp.task("default",["connect","js","compass","watch"]);
