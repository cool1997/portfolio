import React, { memo } from 'react'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.scss'


const Navbar = ({ ...props }) => {
	return (
		<nav className={`${styles.Navbar} navbar navbar-expand navbar-light`}>
			<ul className={`${styles.list} navbar-nav`}>
				<li className={`${styles.item} nav-item`}>
					<NavLink className={`${styles.link} navbar-brand`} to={`/todo`}>Todo list</NavLink>
				</li>
			</ul>
		</nav>
	)
}


const Container = compose(
	memo
)(Navbar)

export { Container as Navbar }