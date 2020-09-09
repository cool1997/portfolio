import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import { TodoItem } from '../TodoItem/TodoItem'

import { getSortedTodoList } from '../../slice/todos/todoSelector'

import styles from './TodoList.module.scss'


const TodoList = ({ ...props }) => {
	const todoList = useSelector(getSortedTodoList)

	const [activeField, setActiveField] = useState(null)


	useEffect(() => {
		localStorage.setItem(`todoList`, JSON.stringify(todoList))
	}, [todoList])


	const Handle = {
		// toggleActivate: (id) => {
		// 	setActiveField(id)
		// 	// setActiveField((prev) => prev === id ? null : id)
		// },
	}


	return (
		<ul className={`${styles.TodoList}`}>
			{todoList.map((item) => <TodoItem 
				active={activeField === item.id} 
				// toggleActivate={() => Handle.toggleActivate(item.id)}
				activateId={() => setActiveField(item.id)}
				activateNull={() => setActiveField(null)}
				key={item.id} 
				{...item} />
			)}
		</ul>
	)
}


const Container = compose(
	memo
)(TodoList)

export { Container as TodoList }