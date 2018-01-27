const Boom = require('boom');
const jwt = require('jsonwebtoken');

const { getTokenSchema } = require('../validators/auth')

const getToken = (request, h) => {
	return new Promise((resolve, reject) => {
		const token = jwt.sign({ email: request.payload.email }, process.env.JWT_SECRET, (err, token) => {
				if (err) {
					console.log(err)
					reject()
				}

				console.log(111, token)

				resolve({ id_token: token })
			}
		)
	})
}

const apiAuthRoutes = [{
	method: 'POST',
	path: '/api/token',
	handler: getToken,
	config: {
		validate: {
			payload: getTokenSchema
		}
	}
}]

module.exports = { apiAuthRoutes }
