import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
	return (
		<nav className="navbar-container flex jcfe">
			<div className="navbar-list flex jcsb">
				<Link to="/projects">Projects</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
};

export default NavBar;
