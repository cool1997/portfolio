import React, { memo, useState } from 'react'
import { compose } from 'redux'

import { BtnAddTodo } from '../BtnAddTodo/BtnAddTodo'
import { FormTodoItem } from '../FormTodoItem/FormTodoItem'


const NewTodoItem = ({ ...props }) => {
	const [active, setActive] = useState(false)
	

	const Handle = {
		toggleActivate: () => {
			setActive((prev) => !prev)
		},
	}


	return (
		active
		? <FormTodoItem cancelClick={Handle.toggleActivate} />
		// ? <FormTodoItem cancelClick={() => console.log(`hi`)} />
		: <BtnAddTodo onClick={Handle.toggleActivate} />
	)
}


const Container = compose(
	memo
)(NewTodoItem)

export { Container as NewTodoItem }



// import React, { memo, useState, useEffect, useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import { compose } from 'redux'
// import { Field, reduxForm, reset } from 'redux-form'

// import { sendTodoItem } from '../../slice/todos/todoSlice'
// import { BtnAddTodo } from '../BtnAddTodo/BtnAddTodo'
// import { Component } from '../../common/FormsControls/FormsControls'
// import { maxLengthCreator } from '../../common/utils/validators'

// import styles from './NewTodoItem.module.scss'


// const NewTodoItem = ({ handleSubmit, initialize, ...props }) => {
// 	const dispatch = useDispatch()

// 	const fieldRef = useRef(null)

// 	const [active, setActive] = useState(true)
// 	const [focusField, setFocusField] = useState(false)
// 	const [valueField, setValueField] = useState(``)
	

// 	useEffect(() => {
// 		initialize({todo: valueField})
// 	}, [valueField])

// 	useEffect(() => {
// 		active && Handle.focusField()
// 	}, [active])


// 	const Handle = {
// 		onSubmit: (formData) => {
// 			dispatch(sendTodoItem({ text: formData.todo }))
// 			dispatch(reset(`newTodoItem`))
// 			setValueField(``)
// 			fieldRef.current.innerText = ``
// 			fieldRef.current.focus()
// 		},
// 		toggleActivate: () => {
// 			setActive((prev) => !prev)
// 		},
// 		changeField: (evt) => {
// 			setValueField(evt.target.innerText)
// 		},
// 		toggleFocus: () => {
// 			setFocusField((prev) => !prev)
// 		},
// 		focusField: () => {
// 			fieldRef.current.focus()
// 		},
// 		cancel: () => {
// 			fieldRef.current.innerText = ``
// 			setValueField(``)
// 			dispatch(reset(`newTodoItem`))
// 			setActive(false)
// 		}
// 	}


// 	const maxLength = maxLengthCreator(2000)


// 	return (
// 		active
// 		? <form 
// 			className={`${styles.NewTodoItem}`} 
// 			onSubmit={handleSubmit(Handle.onSubmit)}>
// 			<div 
// 				className={`
// 					${styles.containerField}
// 					${focusField ? styles.active : ``}
// 				`}
// 				onClick={Handle.focusField}>
// 				<div
// 					className={`${styles.field}`}
// 					onSelect={(evt) => Handle.changeField(evt)}
// 					onFocus={Handle.toggleFocus}
// 					onBlur={Handle.toggleFocus}
// 					contentEditable={`true`}
// 					ref={fieldRef}/>

// 				<Field
// 					className={`visually-hidden`}
// 					validate={[maxLength]}
// 					component={Component.input}
// 					type="text"
// 					name="todo"
// 					placeholder={`New todo`}
// 					autoComplete="off" />
// 			</div>
// 			<div className={`${styles.containerBtn}`}>
// 				<button className={`${styles.btn} ${styles.send}`}>
// 					Добавить задачу
// 				</button>
// 				<button 
// 					className={`${styles.btn} ${styles.cancel}`}
// 					onClick={Handle.cancel}
// 					type={`button`}>
// 					Отмена
// 				</button>
// 			</div>
// 		</form>

// 		: <BtnAddTodo onClick={Handle.toggleActivate} />
// 	)
// }


// const Container = compose(
// 	reduxForm({ form: `newTodoItem`, enableReinitialize: true }),
// 	memo
// )(NewTodoItem)

// export { Container as NewTodoItem }