var React = require('react');
import {Link} from 'react-router'

var PricingSlotsDataBody = React.createClass({
	render: function () {
		return (		

			<li>
		      <div className="collapsible-header"><h5><b>{this.props.dataitem.type} Day:{this.props.dataitem.day}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      	<div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	

							<div>
								<dl>
					      			<dt>Day</dt>
					      			<dd>{this.props.dataitem.day}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Start Minutes of Day</dt>
					      			<dd>{this.props.dataitem.startMinutesOfDay}</dd>
					      		</dl>
					      		<dl>
					      			<dt>End Minutes of Day</dt>
					      			<dd>{this.props.dataitem.endMinutesOfDay}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Parking SubLot Id</dt>
					      			<dd>{this.props.dataitem.parkingSubLotId}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Id</dt>
					      			<dd>{this.props.dataitem.id}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Type</dt>
					      			<dd>{this.props.dataitem.type}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Created At</dt>
					      			<dd>{this.props.dataitem.createdAt}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Updated At</dt>
					      			<dd>{this.props.dataitem.updatedAt}</dd>
					      		</dl>
					      		
					      	</div>
				      	</div>
					    <Link to={`/pricingslots/${this.props.dataitem.id}/pricingGrid`}>
							<span className="waves-effect waves-light btn blue right" >Check Pricing Grid</span>
						</Link>
						<div className="clear-fix"></div>		
			      </div>
		      </div>
		    </li> 			
			);
	}
});
module.exports = PricingSlotsDataBody;