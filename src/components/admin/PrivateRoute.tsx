/**
 * 拦截权限页面，如果没有登录那么会被拦截
 */
import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import isLogin from '../../helpers/isLogin'

interface PrivateRouteProps extends RouteProps {
	component: React.ComponentType<any>
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
	// render 代替了component属性。
	return (
		<Route
			{...rest}
			render={props => {
				const auth = isLogin()
				if (auth) {
					return <Component {...props} />
				} else {
					return <Redirect to="/signin" />
				}
			}}
		></Route>
	)
}

export default PrivateRoute
