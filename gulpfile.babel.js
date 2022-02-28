"use strict";

import gulp from "gulp";
import concat from "gulp-concat";

const csspaths = [
  "./src/css/fonts.css",
  "./src/css/animations.css",
  "./src/css/base.css",
  "./src/css/layout.css",
  "./src/css/module.css",
];

export const buildStyles = () => gulp.src(csspaths)
  .pipe(concat("core.min.css"))
  .pipe(gulp.dest("./dist"))

exports.default = gulp.series(buildStyles);