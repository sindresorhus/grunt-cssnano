'use strict';
var fs = require('fs');

exports.cssnano = {
	minify: function (test) {
		var code = fs.readFileSync('test/tmp/fixture.css', 'utf8');
		test.strictEqual(code.trim(), 'body{color:#fff}');
		test.done();
	}
};
