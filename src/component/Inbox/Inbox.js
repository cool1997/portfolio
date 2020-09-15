import React, { memo, useState } from 'react'
import { compose } from 'redux'

import { Controls } from '../Controls/Controls'
import { NewTodoItem } from '../NewTodoItem/NewTodoItem'
import { TodoList } from '../TodoList/TodoList'

import styles from './Inbox.module.scss'


const Inbox = ({ ...props }) => {
	const [activeField, setActiveField] = useState(null)


	return (
		<section className={`${styles.Inbox}`}>
			<div className={`${styles.headerContainer}`}>
				<h2 className={`${styles.title}`}>Входящие</h2>
				<Controls />
			</div>

			<TodoList 
				activeField={activeField} 
				setActiveField={setActiveField}/>
			<NewTodoItem 
				activeField={activeField} 
				setActiveField={setActiveField}/>
		</section>
	)
}


const Container = compose(
	memo
)(Inbox)

export { Container as Inbox } 