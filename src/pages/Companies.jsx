var React = require('react');
var ReactDOM = require('react-dom');
var path = require('../path.js');
var ListManager = require('../components/ListManager.jsx');
var CompanyDataBody = require('../components/dataComponents/CompanyDataBody.jsx');

var Companies = React.createClass({
	render: function () {

	return(	<div>
	         <h3>Parking Companies</h3>
	         <ListManager url={path.API_end + "Companies"} bodyComponent={CompanyDataBody} />
	        </div> 
		);
	}
});

module.exports = Companies;