module.exports = function(server) {
	
	const TransferItem = require('./../models/TransferItem.js');

	server.route("/api/items")
	.get(function(req, res) {
		TransferItem.find(function(error, data) { 
		  	if (error) return console.error(error);
			res.send(data);
		});
	}).post(function(req, res) {
		let item = req.body;
		let transferItem = new TransferItem(item);
		transferItem.save(function(error, data) {
			res.status(300).send();
		});
	});

	server.route("/api/items/:id")
	.delete(function(req, res) {
		TransferItem.findOne({
			_id: req.params.id
		}).remove();
	}).patch(function(req, res) { 
		TransferItem.findOne({
			_id: req.body._id
		},function(error, doc){
			for(let key in re.body){
				doc[key] = req.body[key];
			}
			doc.save();
			res.status(200).send();
		});
	});
}