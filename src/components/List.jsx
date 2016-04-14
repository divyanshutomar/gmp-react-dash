var React = require('react');
var ListItem = require('./ListItem.jsx')

var List = React.createClass({
	
	render: function () {
		var bodyComponent = this.props.bodyComponent;
		var listRows = this.props.dataset.map(function (data) {
			return(<ListItem dataitem={data} bodyComponent={bodyComponent} key ={data.id}/>);
		});
		return(
  			<ul className="collapsible" data-collapsible="accordion">
				{listRows}
			</ul>
			);
	}
});

module.exports = List;