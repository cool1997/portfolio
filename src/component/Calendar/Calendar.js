import React, { memo } from 'react'
import { compose } from 'redux'

import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'
import { SortControls } from '../SortControls/SortControls'

import styles from './Calendar.module.scss'


const Calendar = ({ ...props }) => {
	return (
		<section className={`${styles.Calendar}`}>
			<h2 className={`${styles.title} mb-4`}>Календарь</h2>
			<NewTodoItem />
			<SortControls />
			<TodoList />
		</section>
	)
}


const Container = compose(
	memo
)(Calendar)

export { Container as Calendar } 