'use strict';
const cssnano = require('cssnano');

module.exports = grunt => {
	grunt.registerMultiTask('cssnano', 'Minify CSS', function () {
		const done = this.async();
		const options = this.options();

		(async () => {
			await Promise.all(this.files.map(async file => {
				const result = await cssnano.process(grunt.file.read(file.src[0]), options);
				grunt.file.write(file.dest, result.css);
			}));

			done();
		})().catch(grunt.fatal);
	});
};
