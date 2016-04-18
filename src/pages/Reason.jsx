var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var ReasonDataBody = require('../components/dataComponents/ReasonDataBody.jsx');

var Reason = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Reason</h3>
	         <ListManager url={path.API_end + "ParkingSubLots/"+this.props.params.reasonId+"/focReasons"} bodyComponent={ReasonDataBody} />
	        </div> 
		);
	}
});

module.exports = Reason;