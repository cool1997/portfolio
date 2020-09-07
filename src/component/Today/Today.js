import React, { memo } from 'react'
import { compose } from 'redux'

import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'
import { SortControls } from '../SortControls/SortControls'

import styles from './Today.module.scss'


const Today = ({ ...props }) => {
	return (
		<section className={`${styles.Today}`}>
			<h2 className={`${styles.title} mb-4`}>Сегодня</h2>
			<NewTodoItem />
			<SortControls />
			<TodoList />
		</section>
	)
}


const Container = compose(
	memo
)(Today)

export { Container as Today } 