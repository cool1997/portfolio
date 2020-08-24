import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializedSuccess } from '../slice/app/appSlice'

import { Todo } from '../component/Todo/Todo'
import { Navbar } from '../component/Navbar/Navbar'
import { Preloader } from '../common/Preloader/Preloader'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const dispatch = useDispatch()

	const { initialized } = useSelector((state) => state.app)

	useEffect(() => {
		dispatch(initializedSuccess())
	}, [])


	return (
		!initialized
			? <Preloader />
			: <>
				<header>
					<h1 className={`visually-hidden`}>Todo list</h1>
					<Navbar />
				</header>
				<main className={`${styles.app} container pt-4`}>
					<Switch>
						<Route path='/todo' render={() => <Todo />} />
						<Route path='/' exact render={() => <Todo />} />
					</Switch>
				</main>
				<footer>

				</footer>
			</>
	)
}


export default compose(
	memo
)(App)