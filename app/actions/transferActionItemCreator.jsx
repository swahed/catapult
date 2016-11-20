const dispatcher = require("./../dispatcher.js");

module.exports = {
	add:function(item){
		dispatcher.dispatch({
			payload : item,
			type: "transfer-item:add"
		});
	}
}