module.exports = function(app) {
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


	app.route("/api/items")
	.get(function(req, res) {
		res.send(items);
	}).post(function(req, res) {
		var item = req.body;
		items.push(item);
	});
}

