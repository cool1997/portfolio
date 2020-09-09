import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './BtnAddTodo.module.scss'


const BtnAddTodo = ({ ...props }) => {
	return (
		<button 
			className={`${styles.BtnAddTodo}`}
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