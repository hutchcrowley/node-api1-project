import match from 'conditional-expression'
import axios from 'axios'

const BASE_URL = 'https://essential2us.herokuapp.com/'

export const applyMiddleware = dispatch => action =>
	dispatch(action) ||
	match(action.type)
		.equals(types.TRIGGER_ACTION)
		.then(() => {
			let ENDPOINT = types.TRIGGER_ACTION
			axios
				.get(`${BASE_URL}/${ENDPOINT}`)
				.then(res => {
					dispatch({
						type: types.DIFFERENT_ACTION,
						payload: res.data.response,
					})
				})
				.catch(err => console.log('ERROR: ', err))
		})
		.else(null)
