'use strict';
const fs = require('fs');

exports.cssnano = {
	minify(test) {
		const code = fs.readFileSync('test/tmp/fixture.css', 'utf8');
		test.strictEqual(code.trim(), 'body{color:#fff}');
		test.done();
	}
};
