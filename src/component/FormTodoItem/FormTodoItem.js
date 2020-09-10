import React, { memo, useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm, reset } from 'redux-form'

import { sendTodoItem } from '../../slice/todos/todoSlice'
import { Component } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator } from '../../common/utils/validators'

import styles from './FormTodoItem.module.scss'


const FormTodoItem = ({ text=``, saveFieldClick, handleSubmit, initialize, setActiveField, ...props }) => {
	const dispatch = useDispatch()

	const fieldRef = useRef(null)

	const [active, setActive] = useState(true)
	const [focusField, setFocusField] = useState(false)
	const [valueField, setValueField] = useState(text)
	

	useEffect(() => {
		initialize({todo: valueField})
	}, [valueField])

	useEffect(() => {
		active && Handle.focusField()
	}, [active])

	useEffect(() => {
		fieldRef.current.innerText = text
	}, [text])


	const Handle = {
		onSubmit: (formData) => {
			if(!text) {
				dispatch(sendTodoItem({ text: formData.todo }))
				dispatch(reset(`FormTodoItem`))
				setValueField(``)
				fieldRef.current.innerText = ``
				fieldRef.current.focus()
			} else {
				saveFieldClick(valueField)
				setActiveField(null)
			}
		},
		changeField: (evt) => {
			setValueField(evt.target.innerText)
		},
		toggleFocus: () => {
			setFocusField((prev) => !prev)
		},
		focusField: () => {
			fieldRef.current.focus()
		},
		cancel: () => {
			fieldRef.current.innerText = text
			setValueField(text)
			setActive(false)

			if(!text) {
				dispatch(reset(`FormTodoItem`))
			}
		}
	}


	const maxLength = maxLengthCreator(2000)


	return (
		<form 
			className={`${styles.FormTodoItem}`} 
			onSubmit={handleSubmit(Handle.onSubmit)}>
			<div 
				className={`
					${styles.containerField}
					${focusField ? styles.active : ``}
				`}
				onClick={Handle.focusField}>
				<div
					className={`${styles.field}`}
					onSelect={(evt) => Handle.changeField(evt)}
					onFocus={Handle.toggleFocus}
					onBlur={Handle.toggleFocus}
					contentEditable={`true`}
					ref={fieldRef}/>

				<Field
					className={`visually-hidden`}
					validate={[maxLength]}
					component={Component.input}
					type="text"
					name="todo"
					placeholder={`New todo`}
					autoComplete="off" />
			</div>
			<div className={`${styles.containerBtn}`}>
				{text 
					? <button className={`${styles.btn} ${styles.send}`}>
						Сохранить
					</button>
					: <button className={`${styles.btn} ${styles.send}`}>
						Добавить задачу
					</button>
				}
				
				<button 
					className={`${styles.btn} ${styles.cancel}`}
					onClick={() => {
						Handle.cancel()
						setActiveField(null)
					}}
					type={`button`}>
					Отмена
				</button>
			</div>
		</form>
	)
}


const Container = compose(
	reduxForm({ form: `FormTodoItem`, enableReinitialize: true }),
	memo
)(FormTodoItem)

export { Container as FormTodoItem }