var React = require('react');

var ParkingLotsDataBody = React.createClass({
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
						      			<dt>OpeningTime</dt>
						      			<dd>{this.props.dataitem.openTime}</dd>
						      		</dl>
						      		<dl>
						      			<dt>CloseTime</dt>
						      			<dd>{this.props.dataitem.closeTime}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Left Photo</dt>
						      			<dd>{this.props.dataitem.leftPhoto}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Right Photo</dt>
						      			<dd>{this.props.dataitem.rightPhoto}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Front Photo</dt>
						      			<dd>{this.props.dataitem.frontPhoto}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Parking Type</dt>
						      			<dd>{this.props.dataitem.parkingType}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Parking Owner</dt>
						      			<dd>{this.props.dataitem.parkingOwner}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Collection At</dt>
						      			<dd>{this.props.dataitem.collectionAt}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Average Parking Weekday</dt>
						      			<dd>{this.props.dataitem.avgParkingWeekday}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Average Parking Weekend</dt>
						      			<dd>{this.props.dataitem.avgParkingWeekend}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Ticketing System</dt>
						      			<dd>{this.props.dataitem.ticketingSystem}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Extra Notes</dt>
						      			<dd>{this.props.dataitem.extraNotes}</dd>
						      		</dl>
						      		<dl>
						      			<dt>Geo Location</dt>
						      			<dd>{this.props.dataitem.geoLocation}</dd>
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

					      		<this.props.bodyComponent dataitem={this.props.dataitem}/>
					      	</div>
						    <a className="waves-effect waves-light btn blue right" >Check Parking Lots</a>
							<div className="clear-fix"></div>		
				      </div>
			      </div>

							
			);
	}
});
module.exports = ParkingLotsDataBody;