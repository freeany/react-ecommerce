import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// 保证在src/index ConnectedRouter组件中的history参数是该history,而且要看清是HashHistory还是BrowerHistory
export const history = createHashHistory()
export type RootState = ReturnType<typeof store.getState>

const store = createStore(
	createRootReducer(history), // root reducer with router state
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history), // for dispatching history actions
			sagaMiddleware
		)
	)
)
sagaMiddleware.run(rootSaga)

export default store
