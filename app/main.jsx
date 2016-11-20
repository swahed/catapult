const React = require('react/addons');

const MoneyTransfersList = require("./components/MoneyTransfersList.jsx");

const app = document.getElementById("app");

const store = require("./stores/transferItemStore.jsx")

let data = store.getItems();

function render(){
	React.render(<MoneyTransfersList transfers={data}/>, app);
}

render();

store.onChange(function(items) {
	data = items;
	render();
});
