const React = require('react/addons');
const moment = require('moment');
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
			<div className="row">
				<div className="six columns">
					<h4 className={this.props.item.isPayed ? "payed" : ""}>
						{this.props.item.name} ({moment(this.props.item.date).locale("de").format("l")})
					</h4>
				</div>
				<form className="three columns" onSubmit={this.togglePayed}>
					<button className={this.props.item.isPayed ? "" : "button-primary"}>
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