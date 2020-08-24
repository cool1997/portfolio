import React, { memo } from 'react'
import { compose } from 'redux'


const SortBtn = ({ isActive, onSortedClick, typeSort, ...props }) => {
	return (
		<button className={`btn btn-outline-primary ${isActive ? `active` : ``}`} onClick={() => onSortedClick(typeSort)}>{typeSort}</button>
	)
}


const Container = compose(
	memo
)(SortBtn)

export { Container as SortBtn }