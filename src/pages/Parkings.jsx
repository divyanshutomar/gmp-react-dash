var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var ParkingDataBody = require('../components/dataComponents/ParkingDataBody.jsx');

var Parkings = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Parkings</h3>
	         <ListManager url={path.API_end + "Companies/1/parkings"} bodyComponent={ParkingDataBody} />
	        </div> 
		);
	}
});

module.exports = Parkings;