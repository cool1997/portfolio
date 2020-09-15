import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './Calendar.module.scss'


const Calendar = ({ ...props }) => {
	return (
		<section className={`${styles.Calendar}`}>
			<h2 className={`${styles.title} mb-4`}>Предстоящее</h2>

		</section>
	)
}


const Container = compose(
	memo
)(Calendar)

export { Container as Calendar } 