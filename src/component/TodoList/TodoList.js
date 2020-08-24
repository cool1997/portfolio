import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import { TodoItem } from '../TodoItem/TodoItem'

import { getSortedTodoList } from '../../slice/todos/todoSelector'


const TodoList = ({ ...props }) => {
	const todoList = useSelector(getSortedTodoList)


	useEffect(() => {
		localStorage.setItem(`todoList`, JSON.stringify(todoList))
	}, [todoList])


	return (
		<ul className={`list-group`}>
			{todoList.map(item => <TodoItem key={item.id} {...item} />)}
		</ul>
	)
}


const Container = compose(
	memo
)(TodoList)

export { Container as TodoList }