import { FC } from 'react'

interface Props {
	children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>layout</h1>
			{children}
		</div>
	)
}

export default Layout
