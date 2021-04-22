import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.jpeg';
import styles from './Header.module.css';

function Header() {
	return(
		<nav className={`${styles.nav} nav bg-dark border-bottom border-warning shadow-sm p-3 mb-5`}>
			<Link to="/" >
				<img src={logo} alt="Logo imdb" className={`${styles.logo} ml-5 p-2 border-dark`}/>
			</Link>
		</nav>
	);
}

export default Header;