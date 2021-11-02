import { Button, Form, Input, Result } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './Layout'
import { signUpAction_saga, SignUpPayloadInterface, resetSignUpAction } from '../../store/actions/signUpIn.actions'
import { RootState } from '../../store'
import { signUpInState } from '../../store/reducers/signUpIn.reducer'
// actions
const SignUp = () => {
	const dispatch = useDispatch()
	const onFinish = (values: SignUpPayloadInterface) => {
		dispatch(signUpAction_saga(values))
	}
	const [form] = Form.useForm()

	const signState = useSelector<RootState, signUpInState>(state => state.signUpIn)
	// 1. 注册成功 清空表单
	useEffect(() => {
		if (signState.signUpInfo.loaded && signState.signUpInfo.success) {
			form.resetFields()
		}
	}, [form, signState])
	// 2. 注册成功 显示成功的提示信息
	const showSuccess = () => {
		if (signState.signUpInfo.loaded && signState.signUpInfo.success) {
			return (
				<Result
					key="success"
					status="success"
					title="注册成功"
					subTitle={signState.signUpInfo.message}
					extra={[
						<Button type="primary">
							<Link to="signin">登录</Link>
						</Button>
					]}
				/>
			)
		}
	}
	// 3. 注册失败 显示失败的提示信息
	const showError = () => {
		if (signState.signUpInfo.loaded && !signState.signUpInfo.success) {
			return <Result key="warning" status="warning" title="注册失败" subTitle={signState.signUpInfo.message} />
		}
	}
	// 4. 离开页面之前 重置状态。
	useEffect(() => {
		return () => {
			dispatch(resetSignUpAction())
		}
	}, [dispatch])

	const showForm = () => {
		return (
			<Form form={form} autoComplete="off" onFinish={onFinish}>
				<Form.Item label="昵称" name="name">
					<Input />
				</Form.Item>
				<Form.Item label="密码" name="password">
					<Input.Password autoComplete="off" />
				</Form.Item>
				<Form.Item label="邮箱" name="email">
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						注册
					</Button>
				</Form.Item>
			</Form>
		)
	}
	return (
		<Layout title="注册" subTitle="还没有账户？注册一个吧">
			{showSuccess()}
			{showError()}
			{showForm()}
		</Layout>
	)
}

export default SignUp
