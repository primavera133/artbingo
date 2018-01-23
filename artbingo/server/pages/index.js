const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('../next-wrapper')

const pageRoutes = (app) => [{
	method: 'GET',
	path: '/game/{id}',
	handler: pathWrapper(app, '/game')
}, {
	method: 'GET',
	path: '/list/{id}',
	handler: pathWrapper(app, '/list')
}]

module.exports = { pageRoutes }
