import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import { SortBtn } from '../SortBtn/SortBtn'

import styles from './Controls.module.scss'


const Controls = ({ ...props }) => {
	const { allSortType } = useSelector((state) => state.todo)

	const [isControlsOpen, setIsControlsOpen] = useState(false)


	const Handle ={
		toggleIsOpen: () => {
			setIsControlsOpen((prev) => !prev)
		}
	}


	return (
		<>
			{isControlsOpen && 
				<div 
					className={`${styles.overlay}`}
					onClick={Handle.toggleIsOpen}>
				</div>
			}
			<section 
				className={`${styles.Controls}`}>
				<button 
					className={`${styles.openControls}`}
					onClick={Handle.toggleIsOpen}>
					<span className={`visually-hidden`}>Выбрать сортировку</span>
					<span className={`${styles.dot}`}></span>
				</button>

				{isControlsOpen &&
					<>
						<section 
							className={`${styles.controlsList}`}
							onClick={Handle.toggleIsOpen}>
							{allSortType
								.map(type => <SortBtn
									key={type}
									type={type}
									{...props} />
								)
							}
						</section>
					</>
				}
			</section>
		</>
	)
}


const Container = compose(
	memo
)(Controls)

export { Container as Controls } 
