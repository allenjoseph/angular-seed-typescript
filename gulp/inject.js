'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulpfile.config');
var wiredep = require('wiredep').stream;
var _ = require('lodash');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('inject', ['scripts', 'styles', 'fonts', 'partials', 'translations'], function () {
	var injectStyles = gulp.src([
		path.join(conf.paths.tmp, '/**/*.css'),
		path.join('!' + conf.paths.tmp, '/bower_components/**/*.css'),
		path.join('!' + conf.paths.tmp, '/vendor.css')
	], { read: false });

	var injectScripts = gulp.src([
			path.join(conf.paths.src, '/app/**/*.js'),
			path.join(conf.paths.tmp, '/**/*.js'),
			path.join('!' + conf.paths.tmp, '/bower_components/**/*.js'),
			path.join('!' + conf.paths.src, '/**/*.spec.js'),
			path.join('!' + conf.paths.src, '/**/*.mock.js')
		])
		.pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

	var injectOptions = {
		ignorePath: [conf.paths.src, conf.paths.tmp],
		addRootSlash: false
	};

	return gulp.src(path.join(conf.paths.src, 'index.html'))
		.pipe($.inject(injectStyles, injectOptions))
		.pipe($.inject(injectScripts, injectOptions))
		.pipe(wiredep(_.extend({ ignorePath: '../' }, conf.wiredep)))
		.pipe(gulp.dest(conf.paths.tmp));
});

gulp.task('inject:reload', ['inject'], function () {
	browserSync.reload();
});
