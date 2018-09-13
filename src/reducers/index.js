import * as ActionTypes from '../actions'
import {combineReducers} from 'redux-immutable'
import {routerReducer as routing} from 'react-router-redux'


const rootReducer = combineReducers({
	routing,
	loginInfo 				: require('./loginInfo').default,
	isShowLogin 			: require('./isShowLogin').default,
	popUpMsg 				: require('./popUpMsg').default,
	commonLoading 			: require('./commonLoading').default,
	customerList			: require('./customerList').default
})
export default rootReducer