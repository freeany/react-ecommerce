import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import SignIn from './components/core/SignIn'
import SignUp from './components/core/SignUp'

import PrivateRoute from './components/admin/PrivateRoute'
import PrivateAdminRoute from './components/admin/PrivateAdminRoute'
import UserDashboard from './components/admin/UserDashboard'
import AdminDashboard from './components/admin/AdminDashboard'
const Routes = () => {
	return (
		<div>
			<HashRouter>
				<Switch>
					<Route path="/" component={Home} exact></Route>
					<Route path="/shop" component={Shop}></Route>
					<Route path="/signin" component={SignIn}></Route>
					<Route path="/signup" component={SignUp}></Route>
					<PrivateRoute path="/user/dashboard" component={UserDashboard}></PrivateRoute>
					{/* <Route path="/user/dashboard" component={UserDashboard}></Route> */}
					{/* <Route path="/admin/dashboard" component={AdminDashboard}></Route> */}
					<PrivateAdminRoute path="/admin/dashboard" component={AdminDashboard}></PrivateAdminRoute>
				</Switch>
			</HashRouter>
		</div>
	)
}

export default Routes
