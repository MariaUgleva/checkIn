import React from 'react';
import { Link } from 'react-router-dom';
type Nav = {
	[key: string]: string;
};
const NavBar: React.FC = (): JSX.Element => {
	const links: Nav = {
		Главная: '/',
		Новости: '/news',
		Профиль: '/profile',
	};
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="logo">TASK 1</h1>
					<nav className="nav">
						{Object.keys(links).map((item) => (
							<Link key={item} to={links[item]} className="nav__item">
								{item}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default NavBar;
