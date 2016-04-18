var React = require('react');
import {Link} from 'react-router'

var PricingGridDataBody= React.createClass({
	render: function () {
		return (		

			<li>
		      <div className="collapsible-header"><h5><b>PriceStructure: {this.props.dataitem.priceStructure} Sequence Number:{this.props.dataitem.sequenceNumber}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      	<div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	

							<div>
								<dl>
					      			<dt>Price Structure</dt>
					      			<dd>{this.props.dataitem.priceStructure}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Cost</dt>
					      			<dd>{this.props.dataitem.cost}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Duration</dt>
					      			<dd>{this.props.dataitem.duration}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Pricing Id</dt>
					      			<dd>{this.props.dataitem.pricingId}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Sequence Number</dt>
					      			<dd>{this.props.dataitem.sequenceNumber}</dd>
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
					    
						<div className="clear-fix"></div>		
			      </div>
		      </div>
		    </li> 			
			);
	}
});
module.exports = PricingGridDataBody;