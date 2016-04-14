var React = require('react');

var ParkingDataBody = React.createClass({
	render: function () {
		return (		


			      <div className="collapsible-header"><h5><b>{this.props.dataitem.name}</b></h5></div>
			      <div className="collapsible-body">
				      <div className="row">
					      	<div className="card-panel teal  white-text ">
						      	<a className="waves-effect waves-light btn blue right" >Edit</a>
								<div className="clear-fix"></div>

								<div>
									<dl>
						      			<dt>Address</dt>
						      			<dd>{this.props.dataitem.address}</dd>
						      		</dl>
						      		<dl>
						      			<dt>City</dt>
						      			<dd>{this.props.dataitem.city}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Contact Number</dt>
						      			<dd>{this.props.dataitem.contactNumber}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Category</dt>
						      			<dd>{this.props.dataitem.category}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Landmark</dt>
						      			<dd>{this.props.dataitem.landmark}</dd>
						      		</dl>
						      		<dl>
						      			<dt>CreatedBy</dt>
						      			<dd>{this.props.dataitem.createdBy}</dd>
						      		</dl>
						      		<dl>
						      			<dt>UpdatedBy</dt>
						      			<dd>{this.props.dataitem.updatedBy}</dd>
						      		</dl>
						      		<dl>
						      			<dt>CreatedAt</dt>
						      			<dd>{this.props.dataitem.createdAt}</dd>
						      		</dl>
						      		<dl>
						      			<dt>UpdatedAt</dt>
						      			<dd>{this.props.dataitem.updatedAt}</dd>
						      		</dl>
						      	</div>

					      		<this.props.bodyComponent dataitem={this.props.dataitem}/>
					      	</div>
						    <a className="waves-effect waves-light btn blue right" >Check Parking Lots</a>
							<div className="clear-fix"></div>		
				      </div>
			      </div>


	
			);
	}
});
module.exports = ParkingDataBody;