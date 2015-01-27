'use strict';

var gulp = require('gulp');
var react = require('gulp-react');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
	return gulp.src('/src/*.js')
	.pipe(react())
	.pipe(source('app.js'))
	.pipe(gulp.dest('./build/scripts'));
});

gulp.task('default', [], function() {
	gulp.start('scripts');
});
