/**
 * Created by Cho To Xau Tinh on 03-Oct-16.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var newer = require('gulp-newer');
var order = require("gulp-order");
var nodemon = require("gulp-nodemon");

gulp.task('bundle-js', function () {
    return browserify('./src/assets/js/App.js')
        .transform('babelify', {
            presets: ["es2015", "react"],
            plugins: ["transform-react-constant-elements", "transform-react-inline-elements"]
        })
        .bundle()
        .on('error', function (err) {
            console.error("\033[31m", err, " \033[m");
            this.emit('end')
        })
        .pipe(source('bundle.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./static/assets/js'))
        .on('end', function () {
            console.log("\033[32m", "Bundle updated successfully at " + new Date(), " \033[m");
        });
});

gulp.task('minify-css', function () {
    return gulp.src('./src/assets/css/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
        }))
        .pipe(gulp.dest('./static/assets/css'))
        .on('error', function (err) {
            console.error("\033[31m", err, " \033[m");
            this.emit('end');
        })
        .on('finish', function () {
            console.log("\033[32m", "Minify CSS successfully at " + new Date(), " \033[m");
        });
});

gulp.task('sync', function () {
    return gulp.src(['./src/assets/**/*', '!./src/assets/css/*', '!./src/assets/js/*', '!./src/assets/data/*'])
        .pipe(newer('./static/assets'))
        .pipe(gulp.dest('./static/assets'))
        .on('error', function (err) {
            console.error("\033[31m", err, " \033[m");
            this.emit('end');
        })
        .on('finish', function () {
            console.log("\033[32m", "Sync assets successfully at " + new Date(), " \033[m");
        });
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js'
    })
})

// Default Task
gulp.task('default', ['bundle-js', 'minify-css', 'sync', 'nodemon']);