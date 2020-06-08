import axios from 'axios'

export const axiosWithAuth = () => {
	//  Get token from localStorage
	const token = localStorage.getItem('token')
	console.log('Bearer token inside axiosWithAuth: ', token)
	return axios.create({
		headers: {
			'Content-type': 'Application/json',
			Authorization: `${token}`,
		},
	})
}
