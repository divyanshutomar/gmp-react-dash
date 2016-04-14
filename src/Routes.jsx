import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
var React = require('react');
var Companies = require('./pages/Companies.jsx');
var Parkings = require('./pages/Parkings.jsx');
var ParkingLots = require('./pages/ParkingLots.jsx');
var ParkingSublots = require('./pages/ParkingSublots.jsx')
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

 render((
		<Router history={appHistory}>
			<Route path="/companies" component={Companies}/>
		</Router>
	),document.getElementById('mainContainer'));
