var React = require('react');

var ListItem = React.createClass({
	render: function () {

		return (

		  	<li>
				<this.props.bodyComponent dataitem={this.props.dataitem}/>
    		</li>

			);
	}

});

module.exports = ListItem;
