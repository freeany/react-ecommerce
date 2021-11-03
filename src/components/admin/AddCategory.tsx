import { Button, Form, Input, message } from 'antd'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config'
import isLogin from '../../helpers/isLogin'
import { JWT } from '../../store/models/user'
import Layout from '../core/Layout'
interface FormValues {
	name: string
}
const AddCategory = () => {
	const [name, setName] = useState<string>('')
	useEffect(() => {
		async function addCategory() {
			const { user, token } = isLogin() as JWT
			try {
				const response = await axios.post<FormValues>(
					`${API}/category/create/${user._id}`,
					{
						name
					},
					{
						headers: {
							Authorization: `Bearer ${token}`
						}
					}
				)
				message.success(`[${response.data.name} 添加成功]`, 2)
			} catch (error) {
				if (error instanceof Error) {
					let e = error as AxiosError<{ error: string }>
					// e.response= undefined
					message.error(e.response?.data.error, 2)
				}
			}
		}
		if (name) {
			addCategory()
		}
	}, [name])
	const onFinish = (values: FormValues) => {
		// console.log(values)
		setName(values.name)
	}
	return (
		<Layout title="添加分类" subTitle="">
			<Form onFinish={onFinish}>
				<Form.Item label="分类名称" name="name">
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						提交
					</Button>
				</Form.Item>
			</Form>
			<Button>
				<Link to="/admin/dashboard">返回控制台</Link>
			</Button>
		</Layout>
	)
}
export default AddCategory
