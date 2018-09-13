import {CALL_API} from '../middleware/api'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const logout = () => {
	return {
		[CALL_API]: {
			types : [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
			endpoint : 'auth/logout',
			schema   : 'logout',
			query    : {
				method : 'post',
				data   : {},
			}
		}
	}
}