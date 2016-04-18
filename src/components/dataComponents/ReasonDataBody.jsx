var React = require('react');
import {Link} from 'react-router'


var ReasonDataBody = React.createClass({
	render: function () {
		return (		

			<li>
		      <div className="collapsible-header"><h5><b>{this.props.dataitem.reasonTitle}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      	<div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	

							<div>
								<dl>
					      			<dt>Reason Title</dt>
					      			<dd>{this.props.dataitem.reasonTitle}</dd>
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
module.exports = ReasonDataBody;