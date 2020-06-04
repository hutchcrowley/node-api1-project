import React, { useState } from 'react'

import { userRegister } from '../../redux/actions/auth'

import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'

const Register = ({ userRegister }) => {
	// Hook into history object to push once form submitted
	const history = useHistory()

	// save newUser object to local state to send off to API
	const [ newUser, setNewUser ] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		e.preventDefault()
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		})
		console.log('newUser in handleChange: ', newUser)
		return newUser
	}

	const handleSubmit = () => {
		userRegister(newUser)
		console.log('User register in Register component: ', newUser)
		history.replace(`/login`)
	}

	const handleClick = e => {
		e.preventDefault()
		history.goBack()
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={e => handleSubmit(e)} className='auth-form'>
				<h3>Sign Up</h3>
				{/* Create semantic labels and field names for the values needed to register a new newUser */}

				<label htmlFor='username'>
					Enter Username
					<br />
					<input name='username' type='text' placeholder='username' onChange={handleChange} />
				</label>

				<label htmlFor='password'>
					Enter Password
					<br />
					<input name='password' type='password' placeholder='password' onChange={handleChange} />
				</label>
				<button type='submit' className='auth-button'>
					Register
				</button>
				<button type='button' className='auth-button' onClick={e => handleClick(e)}>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default connect(null, { userRegister })(Register)
