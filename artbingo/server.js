require('dotenv').config()
const next = require('next')
const Hapi = require('hapi')
const Mongoose = require('mongoose');
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./server/next-wrapper')
const { pageRoutes } = require('./server/pages')
const { apiGameRoutes } = require('./server/api/games');

console.log(`process.env.NODE_ENV === '${process.env.NODE_ENV}'`)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

console.log(`Connecting to ${process.env.DATABASE_HOST}`)
const dbConn = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@${process.env.DATABASE_HOST}`
Mongoose.connect(dbConn);
Mongoose.connection.on('error', console.error.bind(console, 'db error:'));

if (process.env.NODE_ENV === 'development') {
	Mongoose.set('debug', function (collection, method, query, doc) {
		if (method === 'ensureIndex') return;

		console.log('');
		console.log('=== Mongoose query ===');
		console.log(collection, method, query, doc);
	});
}

const app = next({ dev })
const server = new Hapi.Server({
	port
})

app
	.prepare()
	.then(async (request, h) => {

		server.route(pageRoutes(app));

		server.route(apiGameRoutes)

		// server.route({
		// 	method: 'GET',
		// 	path: '/api/game/{id}',
		// 	handler: async (request, h) => {
		// 		const response = await fetch(`http://localhost:8000/game/${request.params.id}`, {
		// 			headers: {
		// 				'Authorization': `Bearer ${process.env.AUTH_KEY}`
		// 			}
		// 		})
		//
		// 		return await response.json();
		// 	}
		// })
		//
		//
		// server.route({
		// 	method: 'GET',
		// 	path: '/api/games',
		// 	handler: async (request, h) => {
		// 		const response = await fetch(`http://localhost:8000/games`, {
		// 			headers: {
		// 				'Authorization': `Bearer ${process.env.AUTH_KEY}`
		// 			}
		// 		})
		//
		// 		return await response.json()
		// 	}
		// })


		server.route({
			method: 'GET',
			path: '/',
			handler: defaultHandlerWrapper(app)
		})

		server.route({
			method: 'GET',
			path: '/{p*}', /* catch all route */
			handler: defaultHandlerWrapper(app)
		})

		try {
			await server.start()
			console.log(`> Ready on http://localhost:${port}`)
		} catch (error) {
			console.log('Error starting server')
			console.log(error)
		}
	})