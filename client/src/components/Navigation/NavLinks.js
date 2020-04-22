import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/' exact>
					ALL POST
				</NavLink>
			</li>
			<li>
				<NavLink to='/u1/post'>MY POST</NavLink>
			</li>
			<li>
				<NavLink to='/create'>ADD POST</NavLink>
			</li>
			<li>
				<NavLink to='/api/logout'>Logout</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
