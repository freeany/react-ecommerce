import { Button, Form, Input, Result } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { signInAction_saga, SignUpPayloadInterface } from '../../store/actions/signUpIn.actions'
import { signUpInState } from '../../store/reducers/signUpIn.reducer'
import isLogin from '../../helpers/isLogin'
import Layout from './Layout'
import { JWT } from '../../store/models/user'
import { Redirect } from 'react-router'
const SignIn = () => {
	const dispatch = useDispatch()
	const onFinish = (values: SignUpPayloadInterface) => {
		// 发送登录请求
		dispatch(signInAction_saga(values))
	}
	// 1. 获取登录结果
	const signState = useSelector<RootState, signUpInState>(state => state.signUpIn)
	// 2. 登录失败，显示错误信息
	const showError = () => {
		if (signState.signInInfo.loaded && !signState.signInInfo.success) {
			return <Result key="warning" status="warning" title="登录失败" subTitle={signState.signInInfo.message} />
		}
	}
	// 3. 登录成功，根据角色跳转到对应的管理界面
	const redirectToDashboard = () => {
		// 不需要判断内存中的东西
		// if (signState.signInInfo.loaded && signState.signInInfo.success) {
		const auth = isLogin()
		if (auth) {
			const {
				user: { role }
			} = auth as JWT
			// 0普通用户  1管理员
			const url = role === 0 ? '/user/dashboard' : '/admin/dashboard'
			return <Redirect to={url} />
		}
		// }
	}
	// 4. 处理导航链接 已登录 隐藏[登录，注册] 显示 [dashboard]

	return (
		<Layout title="登录" subTitle="">
			{showError()}
			{redirectToDashboard()}
			<Form autoComplete="off" onFinish={onFinish}>
				<Form.Item label="密码" name="password">
					<Input.Password />
				</Form.Item>
				<Form.Item label="邮箱" name="email">
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</Layout>
	)
}

export default SignIn
