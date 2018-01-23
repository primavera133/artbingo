const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const listsSchema = new Schema({
	name: {
		type: String
	},
	list: [{
		name: String
	}]
});

const List = Mongoose.model('List', listsSchema);

module.exports = List