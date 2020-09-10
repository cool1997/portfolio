import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './BtnAddTodo.module.scss'


const BtnAddTodo = ({ setActiveField, ...props }) => {
	return (
		<button 
			className={`${styles.BtnAddTodo}`}
			onClick={() => setActiveField(1)}
			{...props}>

			<span className={`${styles.iconAdd}`}></span>
			
			<span className={`${styles.btnBody}`}>Добавить задачу</span>
		</button>
	)
}


const Container = compose(
	memo
)(BtnAddTodo)

export { Container as BtnAddTodo }