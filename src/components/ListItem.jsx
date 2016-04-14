var React = require('react');

var ListItem = React.createClass({
	render: function () {

		return (
				<this.props.bodyComponent dataitem={this.props.dataitem}/>
			);
	}

});

module.exports = ListItem;
