const next = require('next')
const Hapi = require('hapi')
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./next-wrapper')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server({
	port
})

app
	.prepare()
	.then(async (request, h) => {
		server.route({
			method: 'GET',
			path: '/api/game/{id}',
			handler: async (request, h) => {
				const response = await fetch(`http://localhost:8000/game/${request.params.id}`, {
					headers: {
						'Authorization': `Bearer ${process.env.AUTH_KEY}`
					}
				})

				return await response.json();
			}
		})

		server.route({
			method: 'GET',
			path: '/game/{id}',
			handler: pathWrapper(app, '/game')
		})

		server.route({
			method: 'GET',
			path: '/api/games',
			handler: async (request, h) => {
				const response = await fetch(`http://localhost:8000/games`, {
					headers: {
						'Authorization': `Bearer ${process.env.AUTH_KEY}`
					}
				})

				return await response.json()
			}
		})

		// server.route({
		// 	method: 'GET',
		// 	path: '/_next/{p*}', /* next specific routes */
		// 	handler: nextHandlerWrapper(app)
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