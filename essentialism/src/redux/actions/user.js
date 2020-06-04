import { axiosWithAuth } from '../../components/utils/axiosWithAuth'

// action type for deleting a user

export const DELETE_USER_START = 'DELETE_USER_START'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_ERROR = 'DELETE_ERROR'

const BASE_URL = 'localhost:8080'

export const deleteUser = (ID, token) => dispatch => {
	console.log('userID variable in actions: ', ID)
	console.log('token variable in actions: ', token)
	dispatch({
		type: DELETE_USER_START,
	})
	axiosWithAuth()
		.delete(`${BASE_URL}/users/${ID}`)
		.then(res => {
			dispatch({
				type: DELETE_USER_SUCCESS,
				payload: `Success, ${res.data} user deleted`,
			})
		})
		.catch(err => {
			dispatch({
				type: DELETE_ERROR,
				payload: `Error: ${err} returned from server`,
			})
			// console.log('DELETION ERROR: ', err)
		})
}
