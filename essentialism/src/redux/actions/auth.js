import axios from 'axios'

// action types for user registration and login

export const USER_REGISTER_START = 'USER_REGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'

export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_FAILURE = 'USER_FAILURE'

const BASE_URL = 'https://essential2us.herokuapp.com'

// action creator function for registering a user. takes in the newUser object sent from the Register component, saves the user id returned from the response, and returns a dispatch call to modify the global state via the reducer function

export const userRegister = newUser => dispatch => {
	dispatch({
		type: USER_REGISTER_START,
	})
	axios
		.post(`${BASE_URL}/auth/register`, newUser)
		.then(res => {
			localStorage.setItem('userId', res.data.id)
			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: {
					message: res.data.message,
					id: res.data.id,
					username: newUser.username,
				},
			})
			console.log('Result of user registration: ', res.data)
		})
		.catch(err => {
			console.log('Registration Error: ', err.message)
			dispatch({
				type: USER_FAILURE,
				payload: err.message,
			})
		})
}

// action creator function for user login. takes in credentials saved to newUser object sent from he Login component. Saves JWT to localStorage and returns dispatch to mutate global state.a1

export const userLogin = credentials => dispatch => {
	dispatch({
		type: USER_LOGIN_START,
	})
	axios
		.post(`${BASE_URL}/auth/login`, credentials)
		.then(res => {
			const token = localStorage.setItem('token', res.data.token)
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: {
					message: res.data.message,
					token: token,
				},
			})
		})
		.catch(err => {
			console.log('ERROR: incorrect username/ password', err.message)
			dispatch({
				type: USER_FAILURE,
				payload: err,
			})
		})
}

// action creator function for handling user logout. returns store to initial state and deletes JWT

export const logout = () => dispatch => {
	return (
		// localStorage.removeItem('token'),
		// localStorage.removeItem('userID'),
		localStorage.clear(),
		dispatch({
			type: USER_LOGOUT,
		})
	)
}
