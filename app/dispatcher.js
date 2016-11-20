var guid = require("guid");
const listeners = [];

module.exports = {
	register: function(cb){
		var id = guid.raw();
		listeners[id] = cb;
		return id;
	},
	dispatch:function(payload){
		console.info("Dispatching...", payload);
		for (let id in listeners) {
			var listener = listeners[id];
			listener(payload);
		}
	}
};