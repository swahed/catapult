const mongoose = require('mongoose');
const TransferItem = require('./models/TransferItem.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/catapult');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function() {
	console.log('DB connected');
    mongoose.connection.db.dropDatabase();

	const items = [
		{
			name : "Jutta",
			date : "2011-11-11",
			isPayed : false
		},
		{
			name : "Peter",
			date : "2015-11-11",
			isPayed : false
		},
		{
			name : "Klaus",
			date : "2012-12-12",
			isPayed : false
		},
		{
			name : "Sabine",
			date : "2013-01-01",
			isPayed : false
		}
	];

	items.forEach(function(item){
		new TransferItem(item).save(function (err) {
		  if (err) return console.error(err);
		});
	});
});
