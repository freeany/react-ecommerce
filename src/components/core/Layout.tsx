import { FC } from 'react'
import { PageHeader } from 'antd'
import Navigation from './Navigation'
interface Props {
	children: React.ReactNode
	title: string
	subTitle: string
}
const Layout: FC<Props> = ({ children, title, subTitle }) => {
	// <state的类型，useSelect的返回值类型>
	return (
		<div>
			<Navigation></Navigation>
			<PageHeader className="jumbotron" title={title} subTitle={subTitle} />
			<div style={{ width: '85%', margin: '0 auto' }}>{children}</div>
		</div>
	)
}

export default Layout
