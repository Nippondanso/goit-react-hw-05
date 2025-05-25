import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
	return (
		<header className={css.header}>
		{/*// <header className="flex items-start justify-between gap-12 p-8 mb-16">≈*/}
		
			<nav className={css.nav}>
				<NavLink to="/" className={buildLinkClass}>
					HOME
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					MOVIES
				</NavLink>
			</nav>
		</header>
	);
};
