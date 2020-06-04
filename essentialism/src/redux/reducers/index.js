import {
	USER_REGISTER_START,
	USER_REGISTER_SUCCESS,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_FAILURE,
	USER_LOGOUT,
} from '../actions/auth'

import { FETCH_VALUES_START, FETCH_VALUES_SUCCESS, FETCH_FAILURE } from '../actions/values'

import { DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_ERROR } from '../actions/user'

export const initialState = {
	isLoading: false,

	isLoggedIn: false,

	user: {
		id: null,
		username: '',
	},

	message: '',

	values: [],

	projects: [],
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER_START:
			return {
				...state,
				isLoading: true,
			}

		case USER_REGISTER_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				isLoading: false,
				user: {
					id: action.payload.id,
					username: action.payload.username,
					token: action.payload.token,
				},
			}

		case USER_LOGIN_START:
			return {
				...state,
				isLoading: true,
			}

		case USER_LOGIN_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				isLoading: false,
				isLoggedIn: true,
			}

		case USER_FAILURE:
			return {
				...state,
				isLoading: false,
				message: `Error: ${action.payload.err}`,
			}

		case USER_LOGOUT:
			return (state = initialState)

		case FETCH_VALUES_START:
			return {
				...state,
				isLoading: true,
			}

		case FETCH_VALUES_SUCCESS:
			return {
				...state,
				isLoading: false,
				values: action.payload,
			}

		case FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				message: 'ERROR: Data not returned from API',
			}

		case DELETE_USER_START:
			return {
				...state,
				isLoading: true,
				message: 'WARNING deleting user',
			}

		case DELETE_USER_SUCCESS:
			return {
				initialState,
			}

		case DELETE_ERROR:
			return {
				...state,
				isLoading: false,
				message: action.payload,
			}

		default:
			return state
	}
}
