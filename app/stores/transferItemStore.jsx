const dispatcher = require("./../dispatcher.js");
const data = [
	{
		name : "Inge",
		date : "11.11.11",
		isPayed : false
	},
	{
		name : "Joschi",
		date : "15.11.11",
		isPayed : false
	},
	{
		name : "Julia",
		date : "12.12.12",
		isPayed : false
	},
	{
		name : "Herby",
		date : "1.1.13",
		isPayed : false
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

	function deleteTransfer(item) {
		var index = items.findIndex(function(el) {
			return el.name === item.name;
		});
		items.splice(index, 1);
		triggerListeners(items);
	}

	function setTransferPayed(item, isPayed) {
		var _item = items.filter(function(el) {
			return el.name === item.name;
		})[0];
		_item.isPayed = isPayed;
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
				case "delete":
					deleteTransfer(event.payload);
					break;
				case "markpayed":
					setTransferPayed(event.payload, true);
					break;
				case "unmarkpayed":
					setTransferPayed(event.payload, false);
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