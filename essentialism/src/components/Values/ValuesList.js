import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchValues } from '../../redux/actions/values'

const ValuesList = ({ values, fetchValues }) => {
	const [ list, setList ] = useState({})

	const flattenList = Object.keys(list)
	console.log(flattenList)
	useEffect(
		() => {
			fetchValues()
			console.log(values)
			setList(values)
		},
		[ values, fetchValues ],
	)

	return (
		<div className='values-list'>
			{flattenList.map(value => {
				return <h5>{value}</h5>
			})}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		values: state.values,
	}
}

export default connect(mapStateToProps, { fetchValues })(ValuesList)
