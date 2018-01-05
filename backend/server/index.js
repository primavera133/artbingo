import Hapi from 'hapi';
import mongoose from 'mongoose';
import Config from 'config';
import AuthBearer from 'hapi-auth-bearer-token';

import { speciesRoutes } from './api/species';
import { gamesRoutes } from './api/games';

console.log(`Connecting to ${Config.get('database.host')}`)
mongoose.connect(Config.get('database.host'));
mongoose.connection.on('error', console.error.bind(console, 'db error:'));

console.log(`process.env.NODE_ENV === '${process.env.NODE_ENV}'`)

if (process.env.NODE_ENV === 'development') {
	mongoose.set('debug', function (collection, method, query, doc) {
		if (method === 'ensureIndex') return;

		console.log('');
		console.log('=== Mongoose query ===');
		console.log(collection, method, query, doc);
	});
}

const server = Hapi.server({
	host: 'localhost',
	port: 8000
});

server.route(speciesRoutes)
server.route(gamesRoutes)

// Start the server
async function start () {

	try {
		await server.start();

		await server.register(AuthBearer)

		server.auth.strategy('simple', 'bearer-access-token', {
			allowQueryToken: true,              // optional, false by default
			validate: async (request, token, h) => {

				// here is where you validate your token
				// comparing with token from your database for example
				const isValid = token === Config.get('auth.token');

				const credentials = { token };
				const artifacts = { test: 'info' };

				return { isValid, credentials, artifacts };
			}
		});

		server.auth.default('simple');
	}
	catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', server.info.uri);
}

start();

