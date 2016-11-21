const React = require('react/addons');
const action = require('./../actions/transferActionItemCreator.jsx');

module.exports = React.createClass({
	togglePayed : function(e){
		e.preventDefault();
		if(this.props.item.isPayed) {
			action.unmarkpayed(this.props.item);
		} else {
			action.markpayed(this.props.item);
		}
	},
	delete : function(e){
		e.preventDefault();
		action.delete(this.props.item);
	},
	render : function() {
		return (
			<div className={this.props.item.isPayed ? "payed" : ""}>
				<div>
					<h4>{this.props.item.name}; {this.props.item.date}</h4>
				</div>
				<form className="three columns" onSubmit={this.togglePayed}>
					<button>
						{this.props.item.isPayed ? "Mark as unpayed" : "Mark as payed"}
					</button>
				</form>
				<form className="three columns" onSubmit={this.delete}>
					<button>&times;</button>
				</form>
			</div>
		)
	}
});