import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import api from '../middleware/api'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers/'

import Immutable from 'immutable'
export const history = createHistory()

const middleware = routerMiddleware(history)

const configureStore = preloadedState => {
	// if(process.env.NODE_ENV !== 'production'){
	//    preloadedState.envState.accountId = 9990001
	// }

	// 安装 Redux-DevTools Chrome 插件后可用 composeEnhancers()
	const composeEnhancers =  compose

	const store = createStore(
		rootReducer,
		preloadedState,
		// compose(
		composeEnhancers(
			applyMiddleware(thunk, api,middleware )
		)
	)


	return store
}

export default configureStore
