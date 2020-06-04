import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import Spinner from '../Spinner'

const MainUI = ({ isLoading, logout }) => {
	const [ hideLinks, setHideLinks ] = useState(false)

	const handleClick = () => {
		setHideLinks(!hideLinks)
	}

	const handleLogout = () => {
		logout()
		setHideLinks(!hideLinks)
	}

	return !isLoading ? (
		<div className='main-ui'>
			{hideLinks ? (
				<div className='main-links'>
					<Link to='/login' onClick={handleLogout}>
						Log Out
					</Link>
					<Link to='/login'>Log In</Link>
					<Link to='/register'>Sign Up</Link>
					<Link to='/' onClick={handleClick}>
						Back
					</Link>
				</div>
			) : (
				<h4 onClick={handleClick}>Click Here to Start</h4>
			)}
		</div>
	) : (
		<Spinner />
	)
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
	}
}

export default connect(mapStateToProps, { logout })(MainUI)
