/**
 * Created by zorochen on 2017/8/7.
 */
import {nameMapping} from '../config/constants'
import moment from 'moment'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginAfter = (loginInfo) => (dispatch, getState) => {
	dispatch({
		loginInfo,
		type: LOGIN_SUCCESS
	})
}
