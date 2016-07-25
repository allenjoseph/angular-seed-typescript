'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulpfile.config');
var wiredep = require('wiredep').stream;
var _ = require('lodash');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var mainFolder = path.join(conf.paths.src, '/styles');

function buildStyles() {
	var sassOptions = {
		outputStyle: 'expanded',
		precision: 10,
		includePaths: conf.sassIncludePaths
	};

	return gulp.src(path.join(mainFolder, 'main.scss'))
		.pipe(wiredep(_.extend({}, conf.wiredep)))
		.pipe($.sourcemaps.init())
		.pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
		.pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/css/')));
}

gulp.task('styles', function () {
	return buildStyles();
});

gulp.task('styles:reload', ['styles'], function () {
	return buildStyles().pipe(browserSync.stream());
});
