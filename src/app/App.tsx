import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/app.constants';
import Login from './components/Login/Login.component';
import Home from './components/Home/Home.component';

function App() {
	return (
		<Router>
			<Route />
			<Switch>
				{/* <PrivateRoute exact path={ROUTES.ROOT}>
				<Home />
			</PrivateRoute> */}
				<Route exact path={ROUTES.ROOT} component={Home} />
				<Route exact path={ROUTES.LOGIN} component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
