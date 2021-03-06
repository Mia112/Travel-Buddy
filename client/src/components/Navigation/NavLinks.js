import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/' exact>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/create/new' exact>
					Add Post
				</NavLink>
			</li>
			<li>
				<NavLink to='/api/logout'>Logout</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
