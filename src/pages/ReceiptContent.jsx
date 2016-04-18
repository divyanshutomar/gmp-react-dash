var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var ReceiptContentDataBody = require('../components/dataComponents/ReceiptContentDataBody.jsx');

var ReceiptContent = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Receipt Content</h3>
	         <ListManager url={path.API_end + "ParkingSubLots/"+this.props.params.receiptId+"/receiptContents"} bodyComponent={ReceiptContentDataBody} />
	        </div> 
		);
	}
});

module.exports = ReceiptContent;