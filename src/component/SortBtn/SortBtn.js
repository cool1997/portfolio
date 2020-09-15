import React, { memo } from 'react'
import { compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

import { sortBy, doReverseSort } from '../../slice/todos/todoSlice'

import styles from './SortBtn.module.scss'


const SortBtn = ({ type, ...props }) => {
	const dispatch = useDispatch()

	const { sortType, isReverseSort } = useSelector((state) => state.todo)	
	
	
	const onSortedClick = (sort) => {
		dispatch(sortBy({ sort }))
		sortType === sort
			? dispatch(doReverseSort({ isReverseSort: !isReverseSort }))
			: dispatch(doReverseSort({ isReverseSort: false }))
	}


	return (
		<button className={`${styles.SortBtn} ${type === sortType ? styles.active : ``}`} onClick={() => onSortedClick(type)}>{type}</button>
	)
}


const Container = compose(
	memo
)(SortBtn)

export { Container as SortBtn }