const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const gamesSchema = new Schema({
	name: {
		type: String
	},
	list: [{
		name: String
	}],
	players: [{
		name: String
	}]
});

const Game = Mongoose.model('Games', gamesSchema);

module.exports = Game