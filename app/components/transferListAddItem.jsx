const React = require('react/addons');
const action = require('./../actions/transferActionItemCreator.jsx');

module.exports = React.createClass({
	getInitialState : function(){
		return {
			input: ""
		}
	},
	handleInputName : function(e){
		this.setState({
			input : e.target.value
		});
	},
	addItem : function(e){
		e.preventDefault();
		action.add({
			name : this.state.input
		});
		this.setState({
			input : ""
		});	
	},
	render : function(){
		return (
			<div className="transfer-addItem">
				<form onSubmit={this.addItem}>
					<input type="text" value={this.state.input}
						onChange={this.handleInputName}/>
					<button>Add Item</button>
				</form>
			</div>
		)
	}
});