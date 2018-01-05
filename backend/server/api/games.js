import Game from '../models/games';
import Boom from 'boom';
import games from '../../data/games';

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

export const gamesRoutes = [{
	method: 'GET',
	path: '/games',
	handler: getGames
}]