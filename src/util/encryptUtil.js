import md5 from 'md5'
import {JSEncrypt} from 'jsencrypt'

const PKEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGx3BPOc6T4mHV3syeLKL92DjK
n7W//w4wjXH+F/CP0S8SEuJ/JLYoo79/DgPz7i6odx+OxmWQO2WPK7aDLauJLczn
m3Xp/Ek31PDcsEZWJvLyAEgP8wfWnLD7CGsAXhE0b50PMZ5C8/zoN3j+wop6e/Rv
ww8+cvkfYTCdLzugLQIDAQAB
-----END PUBLIC KEY-----`

//
// 	`-----BEGIN PUBLIC KEY-----
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDfEKwZP8PVdI1aCTTLA7MCDOVr
// ukdwC9KoUwGPHew962kKvD9051JwW50UUQXBQh9oZr4X6xp+9WdPv5GeC03zrla9
// fFCPHXtXsNiUFR2c09bG4jxIi+6PQewubRGmaE8zE1CdRkiWh9RoWQay1d3eQPYW
// yh4llXIn5hn3SMM0PQIDAQAB
// -----END PUBLIC KEY-----`

export const getEncrypt = (password) => {
	
	const pt = `${md5(password)},${(new Date()).getTime() / 1000},${Math.random()}`
	const encrypt = new JSEncrypt({log:true})

	encrypt.setPublicKey(window.JsBase64.decode(window.Pkey))
	const ept =encrypt.encrypt(pt)
	return encodeURIComponent(ept)
}


// WEBPACK FOOTER //
// ./src/util/encryptUtil.js