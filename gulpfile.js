/**
 * Welcome to your gulpfile!
 * The gulp tasks are split in several files in the gulp directory for better modularity.
 */

'use strict';

var gulp = require('gulp');
var fs = require('fs');

/**
 * This will load all js files in the gulp directory in order to load all gulp tasks.
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
 * This will save the current task for use it later.
 */
gulp.Gulp.prototype.__runTask = gulp.Gulp.prototype._runTask;
gulp.Gulp.prototype._runTask = function(task) {
  if(!this.currentTask){
    this.currentTask = this.seq[this.seq.length - 1];
  }
  this.__runTask(task);
};

/**
 * Default task clean temporaries directories and launch the main optimization build task.
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
