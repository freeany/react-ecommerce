import { UploadOutlined } from '@ant-design/icons'
import { Form, Upload, Button, Input, Select, InputNumber, Radio } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../core/Layout'
import { getCategoryAction } from '../../store/actions/category.action'

const { Option } = Select
const AddProduction = () => {
	const [form] = Form.useForm()

	const onFinish = (values: any) => {
		console.log(values)
	}

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCategoryAction())
	}, [dispatch])

	return (
		<Layout title="添加商品" subTitle="">
			<Form form={form} initialValues={{ category: '', shipping: 1 }} onFinish={onFinish}>
				<Form.Item>
					<Upload>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				</Form.Item>
				<Form.Item label="商品名称" name="name">
					<Input />
				</Form.Item>
				<Form.Item label="商品描述" name="description">
					<Input />
				</Form.Item>
				<Form.Item label="商品价格" name="price">
					<InputNumber min={0} />
				</Form.Item>
				<Form.Item label="商品分类" name="category">
					<Select>
						<Option value="">请添加商品分类</Option>
						<Option value="t2">测试</Option>
						<Option value="t3">测试2</Option>
					</Select>
				</Form.Item>
				<Form.Item label="商品数量" name="quantity">
					<InputNumber min={0} />
				</Form.Item>
				<Form.Item label="是否需要运输" name="shipping">
					<Radio.Group value={1}>
						<Radio value={1}>是</Radio>
						<Radio value={2}>否</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						添加商品
					</Button>
				</Form.Item>
			</Form>
		</Layout>
	)
}

export default AddProduction
