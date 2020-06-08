import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { deleteUser } from '../../redux/actions/user'
import ValuesList from '../../components/Values/ValuesList'

const UserMain = ({ logout, deleteUser }) => {
	let history = useHistory()

	const handleClick = e => {
		e.preventDefault()
		localStorage.clear()
		deleteUser()
		history.replace('/')
	}

	return (
		<div className='user-profile-container'>
			<nav>
				<div className='user-links'>
					<Link to='/values' className='nav-item'>
						Add A Project
					</Link>
					<Link to='/' className='nav-item' onClick={e => handleClick(e)}>
						Delete Profile
					</Link>
					<Link to='/' className='nav-item' onClick={logout}>
						Log Out
					</Link>
				</div>
			</nav>

			<div className='user-profile'>
				<h5>Your Profile</h5>
				<ValuesList />
			</div>
		</div>
	)
}

export default connect(null, { logout, deleteUser })(UserMain)
