const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('../next-wrapper')

const pageRoutes = (app) => [{
		method: 'GET',
		path: '/game/{id}',
		handler: pathWrapper(app, '/game')
}]

module.exports = { pageRoutes }
