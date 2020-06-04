import axios from 'axios'

export const USER_REGISTER_START = 'USER_REGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'

export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_FAILURE = 'USER_FAILURE'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const BASE_URL = 'https://essential2us.herokuapp.com/'

export const userRegister = newUser => dispatch => {
	console.log('newUser at teh userReg action creator: ', newUser)
	dispatch({
		type: USER_REGISTER_START,
		newUser,
	})
	axios
		.post(`${BASE_URL}/register, newuser`)
		.then(res => {
			localStorage.setItem('userId', res.data.id)
			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: res.data,
			})7
			console.log('result of user registration: ', res.data)
		})
		.catch(err => {
			console.log('Registration Error: ', err.message)
			dispatch({
				type: USER_FAILURE,
				payload: err.message,
			})
		})
}

// action creator for handling login. returns user object along with a JWT

export const userLogin = newUser => dispatch => {
	dispatch({
		type: USER_LOGIN_START,
	})
	axios.post(`${BASE_URL}/login`, newUser).then(res => {
		localStorage.setItem('token', res.data.token)
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: res.data,
			message: `SUCCESS: ${res.data} was returned`,
		})
	})
	.catch(err => {
		console.log('ERROR: incorrect username / password' err)
		dispatch({
			type: USER_FAILURE,
			payload: err,
			meggage: `ERRROR: ${err} was returned`
		})
	})
}
