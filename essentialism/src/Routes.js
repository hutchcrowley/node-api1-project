import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './components/ProtectedRoute'
import MainUI from './components/MainUI/MainUI'
import UserMain from './components/Users/UserMain'
import Register from './components/UserAuth/Register'
import Login from './components/UserAuth/Login'
import ValuesList from './components/Values/ValuesList'
import NoMatch from './components/NoMatch'

import './styles/index.css'

// The Routes component will handle all of the routing/ navigation for the app. It's sole purpose is to set the URL paths and render components based upon given URLs

// The ProtectedRoute component handles client-side authentication via JSON Web Token.

const Routes = ({ isLoggedIn }) => {
	return (
		<div className='App'>
			<div className='main-ui-wrapper'>
				<h1>ESSENTIALISM</h1>

				<Switch>
					<Route exact path='/'>
						<MainUI />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/register'>
						<Register />
					</Route>

					<ProtectedRoute exact path='/values' component={ValuesList} />

					<ProtectedRoute exact path='/user' component={UserMain} />

					<Route component={NoMatch} />
				</Switch>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
	}
}

export default connect(mapStateToProps, null)(Routes)
