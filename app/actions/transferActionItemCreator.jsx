const dispatcher = require("./../dispatcher.js");

module.exports = {
	add : function(item){
		dispatcher.dispatch({
			payload : item,
			type: "transfer-item:add"
		});
	},
	delete : function(item){
		dispatcher.dispatch({
			payload : item,
			type: "transfer-item:delete"
		});
	},
	markpayed : function(item){
		dispatcher.dispatch({
			payload : item,
			type: "transfer-item:markpayed"
		});
	},
	unmarkpayed : function(item){
		dispatcher.dispatch({
			payload : item,
			type: "transfer-item:unmarkpayed"
		});
	},
}