var gulp =  require("gulp"),
    concat = require("gulp-concat");

var jsSource = [
  "components/scripts/script1.js",
  "components/scripts/script2.js"
];

gulp.task("js",function(){
    gulp.src(jsSource)
        .pipe(concat("script.js"))
        .pipe(gulp.dest("builds/developments/js"));
});
