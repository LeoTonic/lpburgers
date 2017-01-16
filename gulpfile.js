// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function() {
	gulp.src('css/main.scss')
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(prefix({browsers: ["> 1%", "ie 8", "Firefox ESR"]}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(function(f) {
			return f.base;
		}))
});

gulp.task('default', ['sass'], function() {
	gulp.watch('css/main.scss', ['sass']);
})

/*
	outputStyle types:
		nested
		compact
		expanded
		compressed
*/