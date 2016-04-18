var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var PricingSlotsDataBody = require('../components/dataComponents/PricingSlotsDataBody.jsx');

var PricingSlots = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Pricing Slots</h3>
	         <ListManager url={path.API_end + "ParkingSubLots/"+this.props.params.parksubLotId+"/pricingSlots"} bodyComponent={PricingSlotsDataBody} />
	        </div> 
		);
	}
});

module.exports = PricingSlots;