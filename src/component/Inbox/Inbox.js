import React, { memo } from 'react'
import { compose } from 'redux'

import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'
import { SortControls } from '../SortControls/SortControls'

import styles from './Inbox.module.scss'


const Inbox = ({ ...props }) => {
	return (
		<section className={`${styles.Inbox}`}>
			<h2 className={`${styles.title} mb-4`}>Входящие</h2>
			<NewTodoItem />
			<SortControls />
			<TodoList />
		</section>
	)
}


const Container = compose(
	memo
)(Inbox)

export { Container as Inbox } 