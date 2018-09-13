
import * as ActionTypes from '../actions/'
import {Map,List,fromJS} from 'immutable'

export default (state = fromJS({
	fetching : false,
	error 	 : false,
	data 	 : fromJS([])
}), action) => {

	if (action.type === ActionTypes.CUSTOMER_LIST_SUCCESS) {
		const {customers} = action.response
		
		return state.merge({
			fetching : false,
			error 	 : false,
			data 	 : fromJS(customers.list)
		})
	}else if(action.type === ActionTypes.CUSTOMER_LIST_REQUEST){
		return state.merge({
			fetching : true,
			error 	 : false
		})
	}

	return state
}