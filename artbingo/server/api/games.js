const Game = require('../models/games');
const Boom = require('boom');
const { gameIdSchema } = require('../validators/game');

const getGames = (request, h) => {
	return Game.find({})
		.then(games => {
			if (!games) {
				return h.response(Boom.badGateway())
			}
			return h.response(games)
		})
		.catch(err => {
			console.log(err)
			return h.response(Boom.boomify(err))
		})

}

const getGameById = (request, h) => {
	return Game.findById(request.params.id)
		.then(game => {
			if (game === null) return Boom.badData();

			return h.response(game);
		})
		.catch(err => {
			return err;
		})
}

const postGame = (request, h) => {
	return new Promise((resolve, reject) => {
		const game = new Game({
			...request.payload,
			players: [{
				name: 'YYY'
			}]
		})

		game.save()
			.then(() => {
				return resolve(h.response(game))
			})
			.catch(console.log)
	})
}

const apiGameRoutes = [{
	method: 'GET',
	path: '/api/games',
	handler: getGames
}, {
	method: 'GET',
	path: '/api/game/{id}',
	config: {
		validate: {
			params: gameIdSchema
		}
	},
	handler: getGameById
}, {
	method: 'POST',
	path: '/api/game',
	handler: postGame
}]

module.exports = { apiGameRoutes }
