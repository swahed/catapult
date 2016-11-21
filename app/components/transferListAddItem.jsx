const React = require('react/addons');
const action = require('./../actions/transferActionItemCreator.jsx');

module.exports = React.createClass({
	getInitialState : function(){
		return {
			name: "",
			date: "11.11.11"
		}
	},
	handleInputName : function(e){
		this.setState({
			name : e.target.value,
			date : this.state.date
		});
	},
	handleInputDate : function(e){
		this.setState({
			name : this.state.name,
			date : e.target.value
		});
	},
	addItem : function(e){
		e.preventDefault();
		action.add({
			name : this.state.name,
			date : this.state.date
		});
		this.setState({
			name : "",
			date : ""
		});	
	},
	render : function(){
		return (
			<div className="transfer-addItem">
				<form onSubmit={this.addItem}>
					<input type="text" value={this.state.name}
						onChange={this.handleInputName}/>
					<input type="date" value={this.state.date}
						onChange={this.handleInputDate}/>
					<button>Add Item</button>
				</form>
			</div>
		)
	}
});