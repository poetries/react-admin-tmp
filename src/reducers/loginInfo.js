import * as ActionTypes from '../actions/'
import Immutable ,{Map} from 'immutable'
export default (state = Map({}), action) => {
	if (action.type === ActionTypes.LOGIN_SUCCESS) {

		// const keysStr = '{}'//localStorage.getItem('_P_stored_keys_')
		const accountId = window.location.pathname.split('/')[2]  // 获取accountId @todo待优化从route获取

			// const {data:auth} = keys
			const authStr = localStorage.getItem('auth')
			let auth, user
			if (authStr && authStr.length) {
				auth = JSON.parse(authStr)
				const {data: {id, token, expire}} = auth
				const userStr = localStorage.getItem(`userAccount|${id}|${accountId}`)
				// const userStr = localStorage.getItem('userAccount|10344|9990001')
				if (userStr && userStr.length) {
					user = JSON.parse(userStr)
					const {data: {accountName, sign}} = user
					return state.merge({
						accountId: accountId,
						accountName,
						token,
						sign,
						expire,
						userId: id
					})
				}
			}
			return state.merge({
				accountId: accountId,
			})

	} else if (action.type === ActionTypes.LOGOUT_SUCCESS) {
		localStorage.clear()
		location.href = '/login'
	}
	return state
}
