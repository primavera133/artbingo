import games from '../../data/games';

export const gamesRoutes = [{
	method: 'GET',
	path: '/games',
	handler: function (request, h) {
		return games;
	}
}]