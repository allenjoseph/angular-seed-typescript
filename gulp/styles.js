'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulpfile.config');
var wiredep = require('wiredep');
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
		.pipe(wiredep.stream(_.extend({}, conf.wiredep)))
		.pipe($.sourcemaps.init())
		.pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
		.pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/css/')));
}

gulp.task('styles', ['styles:vendor'], function () {
	return buildStyles();
});

gulp.task('styles:vendor', function () {
	return gulp.src(wiredep(_.extend({}, conf.wiredep)).css, { base: conf.paths.bower })
		.pipe(gulp.dest(path.join(conf.paths.tmp, conf.paths.bower)));
});

gulp.task('styles:reload', ['styles'], function () {
	return buildStyles().pipe(browserSync.stream());
});
