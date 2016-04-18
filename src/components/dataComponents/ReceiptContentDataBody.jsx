var React = require('react');
import {Link} from 'react-router'


var ReceiptContentDataBody = React.createClass({
	render: function () {
		return (		

			<li>
		      <div className="collapsible-header"><h5><b>{this.props.dataitem.content}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      	<div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	

							<div>
								<dl>
					      			<dt>Sequence</dt>
					      			<dd>{this.props.dataitem.sequence}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Event Type</dt>
					      			<dd>{this.props.dataitem.eventType}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Parking Sub Lot Id</dt>
					      			<dd>{this.props.dataitem.parkingSubLotId}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Style Master Title</dt>
					      			<dd>{this.props.dataitem.styleMasterTitle}</dd>
					      		</dl>
					      		<dl>
					      			<dt>Parking Pass Master Id</dt>
					      			<dd>{this.props.dataitem.parkingPassMasterId}</dd>
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
module.exports = ReceiptContentDataBody;