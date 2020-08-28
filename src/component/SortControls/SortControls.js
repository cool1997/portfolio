import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import { SortBtn } from '../SortBtn/SortBtn'


const SortControls = ({ ...props }) => {
	const { allSortType } = useSelector((state) => state.todo)


	return (
		<section className={`btn-group mb-4`}>
			{allSortType
				.map(type => <SortBtn
					key={type}
					type={type}
					{...props} />
				)
			}
		</section>
	)
}


const Container = compose(
	memo
)(SortControls)

export { Container as SortControls } 
