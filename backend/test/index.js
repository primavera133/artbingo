import http from 'http';
import assert from 'assert';

import '../server/index.js';

describe('Example Node Server', () => {
	it('should return 200', done => {
		http.get('http://127.0.0.1:1337/hello', res => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});