// Initialize modules
import { task, src, dest, watch } from "gulp";
import cssnano from "gulp-cssnano";
import sass from "gulp-sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify";

// Sass task: compiles the style.scss file into style.css
task("sass", function () {
  return src("app/style.scss")
    .pipe(sass()) // compile SCSS to CSS
    .pipe(cssnano()) // minify CSS
    .pipe(dest("dist")); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
task("js", function () {
  return src(["app/js/plugins/*.js", "app/js/*.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
});

// Watch task: watch SCSS and JS files for changes
task("watch", function () {
  watch("app/*.scss", ["sass"]);
  watch("app/js/**/*.js", ["js"]);
});

// Default task
task("default", ["sass", "js", "watch"]);
