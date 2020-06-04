import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
	<div className='no-route-page'>
		<h2>404 Error: page not found</h2>
		<h3>We are sorry but the page you are looking for does not exist.</h3>
		<Link to='/'>
			<h5>Go Back</h5>
		</Link>
	</div>
)

export default NoMatch
