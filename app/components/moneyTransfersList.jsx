const React = require('react/addons');
const MoneyTransferItem = require("./moneyTransferItem.jsx");
const TransferListAddItem = require("./transferListAddItem.jsx");


module.exports = React.createClass({
	render : function() {
		return (
			<div>
				<h1>Catapult</h1>
				<div>
					{
						this.props.transfers.map(function(item, index) {
							return (
								<MoneyTransferItem item={item} key={"item" + index}/>
							);
						})
					}
				</div>
				<TransferListAddItem />
			</div>
		)
	}
});