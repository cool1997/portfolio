import React, { useState, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'

import { SortBtn } from '../SortBtn/SortBtn'

import { sortBy, doReverseSort } from '../../slice/todos/todoSlice'


const SortControls = ({ ...props }) => {
	const dispatch = useDispatch()

	const { allSortType, sortType, isReverseSort } = useSelector((state) => state.todo)

	const [activeSortBtn, setActiveSortBtn] = useState(sortType)


	const onSortedClick = (sort) => {
		dispatch(sortBy({ sort }))
		sortType === sort
			? dispatch(doReverseSort({ isReverseSort: !isReverseSort }))
			: dispatch(doReverseSort({ isReverseSort: false })) && setActiveSortBtn(sort)
	}


	return (
		<section className={`btn-group mb-4`}>
			{allSortType
				.map(type => <SortBtn
					isActive={activeSortBtn === type}
					key={`${Date.new}${type}`}
					typeSort={type}
					onSortedClick={onSortedClick}
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
