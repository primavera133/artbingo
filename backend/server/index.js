import Hapi from 'hapi';
import { speciesRoutes } from './api/species';
import { gamesRoutes } from './api/games';

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
	}
	catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', server.info.uri);
}

start();

