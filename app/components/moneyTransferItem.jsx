const React = require('react/addons');

module.exports = React.createClass({
	render : function() {
		return (
			<div className="foo">{this.props.item.name}; {this.props.item.date}</div>		
		)
	}
});