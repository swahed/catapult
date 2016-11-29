const mongoose = require('mongoose');

const TransferItemSchema = {
	name : String,
	date : String,
	isPayed : Boolean
};

var TransferItem = mongoose.model("TransferItem", TransferItemSchema, "TransferItems");

module.exports = TransferItem;