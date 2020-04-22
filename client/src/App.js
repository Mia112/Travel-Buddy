import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import MainNav from './components/Navigation/MainNav';

import './App.css';
const App = () => {
	return (
		<Router>
			<MainNav />
			<Switch>
				<div className='App'>
					<Route path='/' exact>
						<Landing />
					</Route>
					<Route path='/create' exact></Route>

					<Redirect to='/' />
					<Footer />
				</div>
			</Switch>
		</Router>
	);
};

export default App;
