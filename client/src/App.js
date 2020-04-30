import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import MainNav from './components/Navigation/MainNav';
import Posts from './post/pages/Posts';
import PostForm from './post/pages/PostForm';
import './App.css';
const App = () => {
	return (
		<Router>
			<MainNav />
			<main>
				<Switch>
					<div className='App'>
						<Route path='/' exact>
							<Posts />
						</Route>
						<Route path='/api/logout' exact>
							<Landing />
						</Route>

						<Route path='/create/new' exact>
							<PostForm />
						</Route>

						<Redirect to='/' />
						<Footer />
					</div>
				</Switch>
			</main>
		</Router>
	);
};

export default App;
