/**
 * Created by Cho To Xau Tinh on 03-Oct-16.
 */
var os = require('os');
var gulp = require('gulp');
var cond = require('gulp-cond');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var newer = require('gulp-newer');
var order = require("gulp-order");
var open = require('gulp-open');
var nodemon = require("gulp-nodemon");
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

const production = process.env.NODE_ENV == 'production';

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
        .pipe(cond(production, uglify())) // now gulp-uglify works
        .pipe(cond(!production, sourcemaps.init({loadMaps: true})))
        .pipe(cond(!production, sourcemaps.write()))
        .pipe(gulp.dest('./static/assets/js'))
        .on('end', function () {
            console.log("\033[32m", "Bundle updated successfully at " + new Date(), " \033[m");
        });
});

gulp.task('minify-css', function () {
    return gulp.src('./src/assets/css/*.css')
        .pipe(cond(production, minifyCSS()))
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

gulp.task('watch', ['bundle-js', 'minify-css', 'sync'], function () {
    var watcher = gulp.watch('./src/assets/**', ['bundle-js', 'minify-css', 'sync']);
    watcher.on('change', function (event) {
        console.log("\033[32m", 'File ' + event.path + ' was ' + event.type + ', running tasks...', " \033[m");
    });
    return watcher;
})

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js'
    });
});

gulp.task('openBrowser', function () {
    var browser = os.platform() === 'linux' ? 'google-chrome' : (
        os.platform() === 'darwin' ? 'google chrome' : (
            os.platform() === 'win32' ? 'chrome' : 'firefox'));

    gulp.src(__filename)
        .pipe(open({uri: 'http://localhost:2702', app: browser}));
});

// Default Task
gulp.task('default', function () {
    runSequence('watch', 'nodemon', 'openBrowser');
});