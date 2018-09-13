import * as ActionTypes from '../actions'
export default (state = false, action) => {
	if(action.type === ActionTypes.COMMON_FETCHING){
		return true
	}else if(action.type === ActionTypes.COMMON_OVER){
		return false
	}
	return state

}