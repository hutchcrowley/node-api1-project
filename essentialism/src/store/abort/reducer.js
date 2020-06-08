const initState = {
	users: [],
	values: [],
	projects: [],
	message: '',
	isLoading: false,
}

// reducer function to modify state
const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_USERS_START':
			return {
				...state,
				message: 'Getting User Data...',
			}
		case 'GET_USER_SUCCESS':
			return {
				...state,
				users: action.payload,
				message: 'Success! user data retrieved from API',
			}
		case 'USER_FAILURE':
			return {
				...state,
				message: 'Error: something went wrong',
			}
		default:
			return state
	}
}

export { initState, reducer }
