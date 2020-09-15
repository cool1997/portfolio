import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './Today.module.scss'


const Today = ({ ...props }) => {
	return (
		<section className={`${styles.Today}`}>
			<h2 className={`${styles.title} mb-4`}>Сегодня</h2>

		</section>
	)
}


const Container = compose(
	memo
)(Today)

export { Container as Today } 