import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import { TodoItem } from '../TodoItem/TodoItem'

import { getSortedTodoList } from '../../slice/todos/todoSelector'

import styles from './TodoList.module.scss'


const TodoList = ({ activeField, setActiveField, ...props }) => {
	const todoList = useSelector(getSortedTodoList)


	useEffect(() => {
		localStorage.setItem(`todoList`, JSON.stringify(todoList))
	}, [todoList])


	return (
		<ul className={`${styles.TodoList}`}>
			{todoList.map((item) => <TodoItem 
				active={activeField === item.id}
				setActiveField={setActiveField}
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