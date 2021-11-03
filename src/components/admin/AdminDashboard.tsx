import { Row, Col, Menu, Typography, Descriptions } from 'antd'
import { ShoppingCartOutlined, UserOutlined, OrderedListOutlined } from '@ant-design/icons'
import Layout from '../core/Layout'
import isLogin from '../../helpers/isLogin'
import { JWT } from '../../store/models/user'
import { Link } from 'react-router-dom'

const { Title } = Typography
const AdminDashboard = () => {
	// 因为进到这个受保护的组件中，那么就一定是有值的
	const {
		user: { name, email }
	} = isLogin() as JWT

	const adminLeftLinks = () => {
		return (
			<>
				<Title level={5}>管理员链接</Title>
				<Menu>
					<Menu.Item icon={<ShoppingCartOutlined />} key="create/category">
						<Link to="/admin/create/category">添加分类</Link>
					</Menu.Item>
					<Menu.Item icon={<UserOutlined />} key="create/production">
						<Link to="/admin/create/product">添加产品</Link>
					</Menu.Item>
					<Menu.Item icon={<OrderedListOutlined />} key="orderlist">
						订单列表
					</Menu.Item>
				</Menu>
			</>
		)
	}
	const showInfo = () => {
		return (
			<Descriptions title="管理员信息" bordered>
				<Descriptions.Item label="昵称">{name}</Descriptions.Item>
				<Descriptions.Item label="邮件">{email}</Descriptions.Item>
				<Descriptions.Item label="角色">管理员</Descriptions.Item>
			</Descriptions>
		)
	}
	return (
		<Layout title="管理员" subTitle="">
			<Row>
				<Col span={6}>{adminLeftLinks()}</Col>
				<Col span={18}>{showInfo()}</Col>
			</Row>
		</Layout>
	)
}

export default AdminDashboard
