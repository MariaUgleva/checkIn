import React from 'react';
import { Link } from 'react-router-dom';
type Nav = {
	[key: string]: string;
};
const NavBar: React.FC = () => {
	const links: Nav = {
		Главная: '/',
		Новости: '/news',
		Профиль: '/profile',
	};
	return (
		<header className="header">
			<div className="container">
				<div className="logo">TASK 1</div>
				<nav className="nav">
					{Object.keys(links).map((item) => (
						<Link key={item} to={links[item]} className="nav__item">
							{item}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};
export default NavBar;
