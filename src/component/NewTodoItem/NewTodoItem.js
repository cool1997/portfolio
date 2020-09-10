import React, { memo } from 'react'
import { compose } from 'redux'

import { BtnAddTodo } from '../BtnAddTodo/BtnAddTodo'
import { FormTodoItem } from '../FormTodoItem/FormTodoItem'


const NewTodoItem = ({ activeField, setActiveField, ...props }) => {
	return (
		activeField === 1
		? <FormTodoItem setActiveField={setActiveField} />
		: <BtnAddTodo setActiveField={setActiveField} />
	)
}


const Container = compose(
	memo
)(NewTodoItem)


export { Container as NewTodoItem }