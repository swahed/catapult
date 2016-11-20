const dispatcher = require("./../dispatcher.js");
const data = [
	{
		name : "Inge",
		date : "11.11.11",
	},
	{
		name : "Joschi",
		date : "15.11.11"
	},
	{
		name : "Julia",
		date : "12.12.12" 
	},
	{
		name : "Herby",
		date : "1.1.13"
	}
];

function TransferItemStore() {
	const items = data;
	const listeners =[];

	function getItems(){
		return items;
	}

	function addTransfer(item){
		items.push(item);
		triggerListeners(items);
	}

	function onChange (listener){
		listeners.push(listener);
	}

	function triggerListeners(items){
		listeners.forEach(function(listener){
			listener(items);
		});
	};

	dispatcher.register(function(event){
		var split = event.type.split(":");
		if(split[0]=="transfer-item"){
			switch(split[1]){
				case "add":
					addTransfer(event.payload);
					break;
			}
		}
	});

	return {
		getItems : getItems,
		onChange : onChange
	}
}

module.exports = new TransferItemStore();