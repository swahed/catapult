const dispatcher = require("./../dispatcher.js");
const data = [
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