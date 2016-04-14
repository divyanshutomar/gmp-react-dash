var React = require('react');
import {Link} from 'react-router'


var ParkingDataBody = React.createClass({
	render: function () {
		return (		

				<li>
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
					      	</div>
						    <Link to={`/parkings/${this.props.dataitem.id}/parkinglots`}>
							<span className="waves-effect waves-light btn blue right" >Check Parking Lots</span>
							</Link>
							<div className="clear-fix"></div>		
				      </div>
			      </div>
			    </li>  
			);
	}
});
module.exports = ParkingDataBody;