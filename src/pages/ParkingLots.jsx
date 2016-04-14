var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var ParkingLotsDataBody = require('../components/dataComponents/ParkingLotsDataBody.jsx');

var ParkingLots = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Parkings Lots</h3>
	         <ListManager url={path.API_end + "Parkings/"+this.props.params.parkId+"/parkingLots"} bodyComponent={ParkingLotsDataBody} />
	        </div> 
		);
	}
});

module.exports = ParkingLots;