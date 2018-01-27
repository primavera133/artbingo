const Mongoose = require('mongoose');
const { listSchema } = require('./lists')

const Schema = Mongoose.Schema;

const gamesSchema = new Schema({
	name: {
		type: String
	},
	list: listSchema,
	players: [{
		name: String
	}]
});

const Game = Mongoose.model('Games', gamesSchema);

module.exports = Game