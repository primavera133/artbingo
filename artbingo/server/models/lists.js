const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const listSchema = new Schema({
	name: {
		type: String
	},
	list: [{
		name: String
	}]
});

const List = Mongoose.model('List', listSchema);

module.exports = { List, listSchema }