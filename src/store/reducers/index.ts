import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signUpInReducer from './signUpIn.reducer'
import { History } from 'history'

const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		signUpIn: signUpInReducer
	})

export default createRootReducer
