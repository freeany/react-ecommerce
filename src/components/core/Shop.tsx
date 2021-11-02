import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Layout from './Layout'

const Shop = () => {
	const state = useSelector<RootState>(state => state)

	return (
		<Layout title="购物" subTitle="尽情的购物吧">
			<div>shop---{JSON.stringify(state)}</div>
		</Layout>
	)
}

export default Shop
