import { JWT } from '../store/models/user'
function isLogin(): boolean | JWT {
	const jwt = localStorage.getItem('jwt')
	if (jwt) {
		return JSON.parse(jwt)
	}
	return false
}

export default isLogin
