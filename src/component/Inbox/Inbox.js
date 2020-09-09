import React, { memo } from 'react'
import { compose } from 'redux'

import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'

import styles from './Inbox.module.scss'


const Inbox = ({ ...props }) => {
	return (
		<section className={`${styles.Inbox}`}>
			<h2 className={`${styles.title}`}>Входящие</h2>
			<TodoList />
			<NewTodoItem />
		</section>
	)
}


const Container = compose(
	memo
)(Inbox)

export { Container as Inbox } 