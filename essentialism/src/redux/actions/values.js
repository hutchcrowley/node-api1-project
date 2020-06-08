import { axiosWithAuth } from '../../components/utils/axiosWithAuth'

// import axios from 'axios'

// action types for manipulating values list

export const FETCH_VALUES_START = 'FETCH_VALUES_START'
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const BASE_URL = 'localhost:8080'

// action creator function for fetching a list of values to be displayed when a user selects a drop-down

export const fetchValues = () => dispatch => {
	dispatch({
		type: FETCH_VALUES_START,
	})
	axiosWithAuth()
		.get(`${BASE_URL}/values`)
		.then(res => {
			dispatch({
				type: FETCH_VALUES_SUCCESS,
				payload: res.data,
			})
		})
		.catch(err => {
			dispatch({
				type: FETCH_FAILURE,
				payload: err,
			})
		})
}
