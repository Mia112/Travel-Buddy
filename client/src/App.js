import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import './App.css';
const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={Landing} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
