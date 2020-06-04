import React, { useState } from 'react'

import { userLogin } from '../../redux/actions/auth'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'

const Login = ({ isLoading, userLogin }) => {
	let history = useHistory()

	const [ credentials, setCredentials ] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
	}
	console.log('This is credentials in the Login.js handleChange: ', credentials)

	const handleSubmit = e => {
		e.preventDefault()
		console.log('This is credentials in the Login.js handleSubmit: ', credentials)
		userLogin(credentials)
		setTimeout(() => {
			history.push('/user')
		}, 1000)
	}

	const handleClick = e => {
		e.preventDefault()
		history.goBack()
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={e => handleSubmit(e)} className='auth-form'>
				<h3>Log In</h3>
				<label htmlFor='username'>
					Enter Username
					<br />
					<input
						name='username'
						type='text'
						placeholder='username'
						onChange={handleChange}
						value={credentials.username}
					/>
				</label>
				<label htmlFor='password'>
					Enter Password
					<br />
					<input
						name='password'
						type='password'
						placeholder='password'
						onChange={handleChange}
						value={credentials.password}
					/>
				</label>
				<button type='submit' className='auth-button'>
					Log In
				</button>
				<button type='button' className='auth-button' onClick={e => handleClick(e)}>
					Cancel
				</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
	}
}
export default connect(mapStateToProps, { userLogin })(Login)
