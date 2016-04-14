var React = require('react');
import {Link} from 'react-router'

var CompanyDataBody = React.createClass({
	getInitialState : function () {
		return({parkingUrl: ""+this.props.dataitem.id+"/parkings"});
	},
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
						      			<dt>Email</dt>
						      			<dd>{this.props.dataitem.email}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Contact Number</dt>
						      			<dd>{this.props.dataitem.contactNumber}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Website</dt>
						      			<dd>{this.props.dataitem.website}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Contractor</dt>
						      			<dd>{this.props.dataitem.contractor}</dd>
						      		</dl>
						      	</div>
						    </div>
							<Link to={`/companies/${this.props.dataitem.id}/parkings`}>
							<span className="waves-effect waves-light btn blue right" >Check Parkings</span>
							</Link>
							<div className="clear-fix"></div>		
					    </div>
				     </div>
				</li>     
			);
	}
});
module.exports = CompanyDataBody;