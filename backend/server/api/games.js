import Game from '../models/games';
import Boom from 'boom';
import {gameIdSchema} from '../validators/game';

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

export const gamesRoutes = [{
	method: 'GET',
	path: '/games',
	handler: getGames
}, {
	method: 'GET',
	path: '/game/{id}',
	config: {
		validate: {
			params: gameIdSchema
		}
	},
	handler: getGameById
}]