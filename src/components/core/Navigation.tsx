import { useSelector } from 'react-redux'
import { RouterState } from 'connected-react-router'
import { RootState } from '../../store'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import isLogin from '../../helpers/isLogin'
import { JWT } from '../../store/models/user'

const Navigation = () => {
	const { location } = useSelector<RootState, RouterState>(state => state.router)

	// 获取用户权限所对应的url
	const getAuthUrl = () => {
		const auth = isLogin()
		if (auth) {
			const {
				user: { role }
			} = auth as JWT
			// 0普通用户  1管理员
			return role === 0 ? '/user/dashboard' : '/admin/dashboard'
		}
	}

	return (
		<Menu mode="horizontal" selectedKeys={[location.pathname]}>
			<Menu.Item key="/">
				<Link to="/">首页</Link>
			</Menu.Item>
			<Menu.Item key="/shop">
				<Link to="/shop">商城</Link>
			</Menu.Item>
			{!getAuthUrl() && (
				<>
					<Menu.Item key="/signin">
						<Link to="/signin">登录</Link>
					</Menu.Item>
					<Menu.Item key="/signup">
						<Link to="/signup">注册</Link>
					</Menu.Item>
				</>
			)}
			{getAuthUrl() && (
				<Menu.Item key={getAuthUrl()}>
					<Link to={getAuthUrl()!}>dashboard</Link>
				</Menu.Item>
			)}
		</Menu>
	)
}
export default Navigation
