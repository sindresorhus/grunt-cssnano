'use strict';

module.exports = grunt => {
	grunt.initConfig({
		cssnano: {
			compile: {
				files: {
					'test/tmp/fixture.css': 'test/fixture.css'
				}
			}
		},
		nodeunit: {
			tasks: [
				'test/test.js'
			]
		},
		clean: {
			test: [
				'test/tmp/**'
			]
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', [
		'clean',
		'cssnano',
		'nodeunit',
		'clean'
	]);
};
