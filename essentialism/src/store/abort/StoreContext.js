import React, { createContext, useReducer } from 'react'
import { reducer, initState } from './reducer'

const StoreContext = createContext(initState)

const StoreProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initState)
	// attatch middleware to capture every dispatch

	return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export { StoreContext, StoreProvider }
