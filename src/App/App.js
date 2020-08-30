import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializedSuccess } from '../slice/app/appSlice'

import { Todo } from '../component/Todo/Todo'
import { Navbar } from '../component/Navbar/Navbar'
import { Preloader } from '../common/Preloader/Preloader'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true)

	const dispatch = useDispatch()

	const { initialized } = useSelector((state) => state.app)

	const Handle = {
		toggleTheme: () => {
			setIsDarkTheme((prev) => !prev)
		}
	}

	useEffect(() => {
		dispatch(initializedSuccess())
	}, [dispatch])


	return (
		!initialized
			? <Preloader />
			: <div className={`${isDarkTheme ? `darkTheme` : ``} ${styles.App}`}>
				<header className={`${styles.header}`}>
					<h1 className={`visually-hidden`}>Todo list</h1>
					<Navbar />
					<button 
						className={`${styles.toggleTheme} btn`}
						onClick={Handle.toggleTheme}>
						{`Theme ${!isDarkTheme ? `dark` : `light`}`}
					</button>
				</header>
				<main className={`${styles.main} container pt-4`}>
					<Switch>
						<Route path='/todo' render={() => <Todo />} />
						<Route path='/' exact render={() => <Todo />} />
					</Switch>
				</main>
				<footer>

				</footer>
			</div>
	)
}


export default compose(
	memo
)(App)