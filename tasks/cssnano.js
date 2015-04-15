'use strict';
var cssnano = require('cssnano');

module.exports = function (grunt) {
	grunt.registerMultiTask('cssnano', 'Minify CSS', function () {
		var opts = this.options();

		this.files.forEach(function (el) {
			grunt.file.write(el.dest, cssnano(grunt.file.read(el.src[0]), opts));
		});
	});
};
