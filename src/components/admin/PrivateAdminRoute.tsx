/**
 * 拦截权限页面，如果没有登录那么会被拦截
 */
import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import isLogin from '../../helpers/isLogin'
import { JWT } from '../../store/models/user'

interface PrivateRouteProps extends RouteProps {
	component: React.ComponentType<any>
}

const PrivateAdminRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
	// render 代替了component属性。
	return (
		<Route
			{...rest}
			render={props => {
				const auth = isLogin()
				if (auth) {
					const {
						user: { role }
					} = auth as JWT
					if (role === 1) {
						return <Component {...props} />
					} else {
						return <Redirect to="/signin" />
					}
				} else {
					return <Redirect to="/signin" />
				}
			}}
		></Route>
	)
}

export default PrivateAdminRoute
