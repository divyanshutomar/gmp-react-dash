var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var ParkingSublotsDataBody = require('../components/dataComponents/ParkingSublotsDataBody.jsx');

var ParkingSublots = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Parkings Sublots</h3>
	         <ListManager url={path.API_end + "ParkingLots/"+this.props.params.parkLotId+"/parkingSubLots"} bodyComponent={ParkingSublotsDataBody} />
	        </div> 
		);
	}
});

module.exports = ParkingSublots;