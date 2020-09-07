import React, { memo } from 'react'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.scss'


const Navbar = ({ ...props }) => {
	return (
		<nav className={`${props.className} ${styles.Navbar}`}>
			<ul className={`${styles.list}`}>
				<li className={`${styles.item}`}>
					<NavLink className={`${styles.link}`} to={`/todo`}>Входящие</NavLink>
				</li>
				<li className={`${styles.item}`}>
					<NavLink className={`${styles.link}`} to={`/todo`}>Сегодня</NavLink>
				</li>
				<li className={`${styles.item}`}>
					<NavLink className={`${styles.link}`} to={`/todo`}>Запланировать</NavLink>
				</li>
			</ul>
		</nav>
	)
}


const Container = compose(
	memo
)(Navbar)

export { Container as Navbar }