import mongoose, { Schema } from 'mongoose';

const gamesSchema = Schema({
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

export default mongoose.model('Games', gamesSchema);
