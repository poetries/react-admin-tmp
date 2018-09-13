import * as ActionTypes from '../actions'
export default (state = false,action) => {
	if(action.type === ActionTypes.POP_LOGIN){
		return true
	}else if(action.type === ActionTypes.LOGIN_SUCCESS){
		return false
	}
	return state
}

