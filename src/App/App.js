import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializedSuccess } from '../slice/app/appSlice'

import { Inbox } from '../component/Inbox/Inbox'
import { Today } from '../component/Today/Today'
import { Calendar } from '../component/Calendar/Calendar'
import { Navbar } from '../component/Navbar/Navbar'
import { Preloader } from '../common/Preloader/Preloader'
import { ToggleTheme } from '../component/ToggleTheme/ToggleTheme'
import { ToggleNavbar } from '../component/ToggleNavbar/ToggleNavbar'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)
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
				<main className={`${styles.main}`}>
					<div className={`${styles.mainContainer}`}>
						<Switch>
							<Route path='/inbox' render={() => <Inbox />} />
							<Route path='/today' render={() => <Today />} />
							<Route path='/calendar' render={() => <Calendar />} />
							<Route path='/' exact render={() => <Inbox />} />
						</Switch>
					</div>
				</main>
			</div>
	)
}


export default compose(
	memo
)(App)