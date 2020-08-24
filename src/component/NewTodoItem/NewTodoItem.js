import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm, reset } from 'redux-form'

import { sendTodoItem } from '../../slice/todos/todoSlice'
import { Component } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator } from '../../common/utils/validators'


const NewTodoItem = ({ handleSubmit, ...props }) => {
	const dispatch = useDispatch()


	const onSubmit = (formData) => {
		dispatch(sendTodoItem({ text: formData.todo }))
		dispatch(reset(`newTodoItem`))
	}


	const maxLength = maxLengthCreator(30)


	return (
		<form className={`input-group mb-2`} onSubmit={handleSubmit(onSubmit)}>
			<Field
				validate={[maxLength]}
				component={Component.input}
				className={`form-control`}
				type="text"
				name="todo"
				placeholder={`New todo`}
				autocomplete="off" />
			<button className={`btn btn-outline-success form-control col-2`}>send</button>
		</form>
	)
}


const Container = compose(
	reduxForm({ form: `newTodoItem`, enableReinitialize: true }),
	memo
)(NewTodoItem)

export { Container as NewTodoItem }