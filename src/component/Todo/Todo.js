import React, { memo } from 'react'
import { compose } from 'redux'

import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'
import { SortControls } from '../SortControls/SortControls'

import styles from './Todo.module.scss'


const Todo = ({ ...props }) => {
	return (
		<section className={`${styles.Todo}`}>
			<h2 className={`${styles.title} mb-4`}>Todo list</h2>
			<NewTodoItem />
			<SortControls />
			<TodoList />
		</section>
	)
}


const Container = compose(
	memo
)(Todo)

export { Container as Todo } 