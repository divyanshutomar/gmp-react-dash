var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var PricingGridDataBody = require('../components/dataComponents/PricingGridDataBody.jsx');

var PricingGrid = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Pricing Grid</h3>
	         <ListManager url={path.API_end + "PricingSlots/"+this.props.params.pricingId+"/priceGrids"} bodyComponent={PricingGridDataBody} />
	        </div> 
		);
	}
});

module.exports = PricingGrid;