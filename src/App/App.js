import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializedSuccess } from '../slice/app/appSlice'

import { Todo } from '../component/Todo/Todo'
import { Navbar } from '../component/Navbar/Navbar'
import { Preloader } from '../common/Preloader/Preloader'
import { ToggleTheme } from '../component/ToggleTheme/ToggleTheme'
import { ToggleNavbar } from '../component/ToggleNavbar/ToggleNavbar'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true)
	const [isActiveNavbar, setIsActiveNavbar] = useState(true)

	const dispatch = useDispatch()

	const { initialized } = useSelector((state) => state.app)


	useEffect(() => {
		dispatch(initializedSuccess())
	}, [dispatch])


	const Handle = {
        toggle: (callback) => {
            callback((prev) => !prev)
        }
    }


	return (
		!initialized
			? <Preloader />
			: <div className={`${isDarkTheme ? `darkTheme` : ``} ${styles.App}`}>
				<header className={`${styles.header}`}>
					<h1 className={`visually-hidden`}>Todo list</h1>
					<ToggleNavbar 
						isActiveNavbar={isActiveNavbar}
						toggle={() => Handle.toggle(setIsActiveNavbar)}
					/>
					<ToggleTheme 
						isDarkTheme={isDarkTheme} 
						toggle={() => Handle.toggle(setIsDarkTheme)} 
					/>
				</header>
				{isActiveNavbar && <Navbar className={styles.nav}/>}
				<main className={`${styles.main} container pt-4`}>
					<Switch>
						<Route path='/todo' render={() => <Todo />} />
						<Route path='/' exact render={() => <Todo />} />
					</Switch>
				</main>
				<footer className={`${styles.footer}`}>
				
				</footer>
			</div>
	)
}


export default compose(
	memo
)(App)