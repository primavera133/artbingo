import species from '../../data/species';

export const speciesRoutes = [{
	method: 'GET',
	path: '/species',
	handler: function (request, h) {
		return species;
	}
}]