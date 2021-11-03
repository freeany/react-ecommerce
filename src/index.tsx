import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
// import { API } from './config'
import Routes from './Routes'
import store from './store'

import 'antd/dist/antd.css'
import './style.css'

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
