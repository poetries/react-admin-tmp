import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import api from '../middleware/api'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers/'
import DevTools from '../pages/DevTools'

import Immutable from 'immutable'
export const history = createHistory()

const middleware = routerMiddleware(history)

const configureStore = preloadedState => {
	// if(process.env.NODE_ENV !== 'production'){
	//    preloadedState.envState.accountId = 9990001
	// }

	// 安装 Redux-DevTools Chrome 插件后可用 composeEnhancers()
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const store = createStore(
		rootReducer,
		preloadedState,
		// compose(
		composeEnhancers(
			applyMiddleware(thunk, api,middleware, createLogger({
				stateTransformer: (state) => {
					if (Immutable.Iterable.isIterable(state)) return state.toJS();
					else return state;
				}
			}))
			// DevTools.instrument()
		)
	)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}

export default configureStore
