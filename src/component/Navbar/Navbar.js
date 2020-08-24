import React, { memo } from 'react'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'


const Navbar = ({ ...props }) => {
	return (
		<nav className={`navbar navbar-expand navbar-light bg-light`}>
			<ul className={`navbar-nav`}>
				<li className={`nav-item`}>
					<NavLink className={`navbar-brand`} to={`/todo`}>Todo list</NavLink>
				</li>
			</ul>
		</nav>
	)
}


const Container = compose(
	memo
)(Navbar)

export { Container as Navbar }