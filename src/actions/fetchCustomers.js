import {CALL_API} from '../middleware/api'

export const CUSTOMER_LIST_REQUEST = 'CUSTOMER_LIST_REQUEST'
export const CUSTOMER_LIST_SUCCESS = 'CUSTOMER_LIST_SUCCESS'
export const CUSTOMER_LIST_FAILURE = 'CUSTOMER_LIST_FAILURE'

export const fetchCustomers = () => (dispatch,getState) => {
	return dispatch( {
		[CALL_API] : {
			types : [CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS, CUSTOMER_LIST_FAILURE],
			endpoint: `/v1/customers?filter_status=5&page_size=100`,
			schema : 'customers',
		}
	})
}

