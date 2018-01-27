require('dotenv').config()
const Mongoose = require('mongoose');
const { List } = require('./server/models/lists')
const Promise = require('es6-promise').Promise;

console.log(`process.env.NODE_ENV === '${process.env.NODE_ENV}'`)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

console.log(`Connecting to ${process.env.DATABASE_HOST}`)
const dbConn = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@${process.env.DATABASE_HOST}`
Mongoose.connect(dbConn);
Mongoose.connection.on('error', console.error.bind(console, 'db error:'));

const seedList = () => {
	return new Promise((resolve, reject) => {

		const list1 = {
			name: "3 svanar i STHLM",
			list: [{
				name: 'Knölsvan'
			}, {
				name: 'Sångsvan'
			}, {
				name: 'Mindre sångsvan'
			}]
		}

		const list = new List(list1);
		list.save()
			.then(resolve)
			.catch(reject)
	})
}

const seedListPromise = seedList()

Promise.all([/*seedListPromise*/])
	.then(() => {
		Mongoose.disconnect();
		console.log('done')
	})
	.catch(console.log)