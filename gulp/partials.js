'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulpfile.config');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('partials', function () {
	return gulp.src([
			path.join(conf.paths.src, 'app/**/*.html')
		])
		.pipe($.htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe($.angularTemplatecache('templateCache.js', {
			module: 'app.additions',
			standalone: true
		}))
		.pipe(gulp.dest(path.join(conf.paths.tmp, 'partials')));
});

gulp.task('partials:reload', ['partials'], function () {
	browserSync.reload();
});
