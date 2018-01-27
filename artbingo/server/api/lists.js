const { List } = require('../models/lists');
const Boom = require('boom');
const { listIdSchema } = require('../validators/list');

const getLists = (request, h) => {
	return List.find({})
		.then(lists => {
			if (!lists) {
				return h.response(Boom.badGateway())
			}
			return h.response(lists)
		})
		.catch(err => {
			console.log(err)
			return h.response(Boom.boomify(err))
		})

}

const getListById = (request, h) => {
	return List.findById(request.params.id)
		.then(list => {
			if (list === null) return Boom.badData();

			return h.response(list);
		})
		.catch(err => {
			return err;
		})
}

const apiListRoutes = [{
	method: 'GET',
	path: '/api/lists',
	handler: getLists
}, {
	method: 'GET',
	path: '/api/list/{id}',
	config: {
		validate: {
			params: listIdSchema
		}
	},
	handler: getListById
}]

module.exports = { apiListRoutes }
