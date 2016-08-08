'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulpfile.config');
var browserSync = require('browser-sync');
var wiredep = require('wiredep');
var _ = require('lodash');

var $ = require('gulp-load-plugins')();

var tsProject = $.typescript.createProject('tsconfig.json', { sortOutput: true });

gulp.task('scripts', ['scripts:vendor'], function () {
	return gulp.src([
			path.join(conf.paths.src, '/app/**/!(*.spec).ts')
		])
		.pipe($.sourcemaps.init())
		.pipe($.tslint())
		.pipe($.tslint.report('prose', { emitError: false }))
		.pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))
		.pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'))
		.pipe($.if(this.currentTask === 'serve:dist', $.concat('app.ts.js')))
		.pipe($.sourcemaps.write({
			includeContent: true,
			sourceRoot: '../'
		}))
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/app/')));
});

gulp.task('scripts:vendor', function () {
	return gulp.src(wiredep(_.extend({}, conf.wiredep)).js, { base: conf.paths.bower })
		.pipe(gulp.dest(path.join(conf.paths.tmp, conf.paths.bower)));
});

gulp.task('scripts:reload', ['scripts'], function () {
	browserSync.reload();
});
