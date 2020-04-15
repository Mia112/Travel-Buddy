import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const authLinks = (
		<ul className='navbar-nav ml-auto'>
			<li className='nav-item'>
				<Link className='nav-link' to='/create'>
					Create Post
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/all-posts'>
					All Posts
				</Link>
			</li>

			<li className='nav-item'>
				<a href='/api/logout' className='nav-link'>
					Logout
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul className='navbar-nav ml-auto'>
			<li className='nav-item'>
				<Link className='nav-link' to='/login'>
					Login
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					Travel Buddy
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#mobile-nav'>
					<span className='navbar-toggler-icon' />
				</button>

				<div className='collapse navbar-collapse' id='mobile-nav'>
					{authLinks}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
