'use strict';

var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('scripts', function() {
	return gulp.src('src/jsx/*.jsx')
	.pipe(react())
	.pipe(gulp.dest('build'));
});

gulp.task('default', [], function() {
	gulp.start('scripts');
});
