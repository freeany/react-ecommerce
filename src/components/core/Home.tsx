import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Layout from './Layout'
const Home = () => {
	const state = useSelector((state: RootState) => state)
	return (
		<Layout title="首页" subTitle="在首页尽情的享受吧">
			<div>Home---{JSON.stringify(state)}</div>
		</Layout>
	)
}

export default Home
