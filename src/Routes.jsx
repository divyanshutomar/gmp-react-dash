import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'


var React = require('react');
var Companies = require('./pages/Companies.jsx');
var Parkings = require('./pages/Parkings.jsx');
var ParkingLots = require('./pages/ParkingLots.jsx');
var ParkingSublots = require('./pages/ParkingSublots.jsx')
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

 render((
		<Router history={appHistory} render={applyMiddleware(useRelativeLinks())}>
			<Route path="/companies" component={Companies}/>
			<Route path="/companies/:compId/parkings" component={Parkings}/>
			<Route path="/parkings/:parkId/parkinglots" component={ParkingLots}/>
			<Route path="/parkinglots/:parkLotId/parkingsublots" component={ParkingSublots}/>
		</Router>
	),document.getElementById('mainContainer'));
